/**
 * Lightweight, dependency-free spam protection shared by every lead form
 * (Trip Planner, Get a Free Quote, Contact Us). No external service or API
 * key required. Three layers, all defense-in-depth:
 *
 * 1. Honeypot — a hidden field real visitors never see or fill. Bots that
 *    auto-fill every input on a page trip it.
 * 2. Time-trap — rejects submissions that arrive faster than a human could
 *    plausibly fill the form. Bots submit near-instantly.
 * 3. Rate limiting — caps how many submissions a single IP can make in a
 *    rolling window. Best-effort only: Vercel serverless functions don't
 *    share memory across instances, so this catches bursts hitting the same
 *    warm instance rather than acting as a hard global limit. Good enough to
 *    blunt simple scripted abuse without needing Redis/Upstash.
 */

/**
 * Verifies a Cloudflare Turnstile token against Cloudflare's siteverify API.
 * Requires TURNSTILE_SECRET_KEY to be set (server-side only, never exposed
 * to the client). If the env var is missing, this fails closed in production
 * (rejects the submission) but is permissive in development so local testing
 * without a key doesn't break every form.
 */
export async function verifyTurnstileToken(
  token: unknown,
  remoteIp: string
): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.error("TURNSTILE_SECRET_KEY is not set — cannot verify Turnstile tokens.");
    return process.env.NODE_ENV !== "production";
  }

  if (typeof token !== "string" || token.length === 0) {
    return false;
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: secretKey,
          response: token,
          remoteip: remoteIp !== "unknown" ? remoteIp : undefined,
        }),
      }
    );

    const data = (await response.json()) as { success?: boolean };
    return data.success === true;
  } catch (err) {
    console.error("Turnstile verification request failed:", err);
    return false;
  }
}

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;

const MIN_SUBMIT_MS = 3000; // real humans take at least a few seconds to fill any of these forms

/** Extracts the best-guess client IP from a Next.js Request on Vercel. */
export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

/** Returns true if this IP has exceeded the allowed submissions in the current window. */
export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

/** True if the honeypot field has any value — a real visitor never fills or sees it. */
export function isHoneypotFilled(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

/** True if the form was submitted faster than a human plausibly could — likely a bot. */
export function isSubmittedTooFast(formLoadedAt: unknown): boolean {
  if (typeof formLoadedAt !== "number" || !Number.isFinite(formLoadedAt)) {
    return true; // missing or malformed — treat as suspicious
  }
  return Date.now() - formLoadedAt < MIN_SUBMIT_MS;
}
