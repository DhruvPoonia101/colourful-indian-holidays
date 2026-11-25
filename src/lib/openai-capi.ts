import { createHash } from "node:crypto";
import { after } from "next/server";
import { OPENAI_PIXEL_ID } from "@/lib/openai-pixel";

/**
 * OpenAI Ads Conversions API (server-to-server), added 26 Nov 2026.
 * Docs: https://developers.openai.com/ads/conversions-api
 *
 * Every accepted lead (quote, contact form, trip planner step 1) is sent from
 * the server as `lead_created`, alongside the browser pixel. Both use the same
 * event id, so OpenAI keeps one and drops the duplicate. The server copy still
 * arrives when the visitor's ad blocker stopped the pixel, and it carries a
 * SHA-256 hash of the email (never the raw email) so OpenAI can match the lead
 * to an ad click.
 *
 * Needs OPENAI_CAPI_KEY in Vercel (Settings > Environment Variables). Without
 * it, nothing is sent and nothing breaks.
 */

const ENDPOINT = "https://bzr.openai.com/v1/events";
const SITE_URL = "https://colourfulindianholidays.com";
const EVENT_ID_PATTERN = /^[A-Za-z0-9_-]{1,100}$/;

type LeadInput = {
  request: Request;
  /** Event id generated in the browser and sent with the form (see lib/openai-pixel.ts). */
  eventId?: unknown;
  email?: string;
  phone?: string;
  /** Page the form was sent from. */
  pageUrl?: string;
};

function sha256(value: string): string {
  return createHash("sha256").update(value, "utf8").digest("hex");
}

/** Normalised per OpenAI's rules: trim and lowercase. */
function hashEmail(email?: string): string | undefined {
  const normalised = email?.trim().toLowerCase();
  return normalised ? sha256(normalised) : undefined;
}

/**
 * Hashed only when the visitor typed an international number (+ or 00 prefix),
 * because OpenAI needs the country code and we can't guess it from a local number.
 */
function hashPhone(phone?: string): string | undefined {
  const raw = phone?.trim();
  if (!raw || !(raw.startsWith("+") || raw.startsWith("00"))) return undefined;
  // "+44 (0)7700 900123" style: drop the bracketed trunk zero first.
  const digits = raw.replace(/\(0\)/g, "").replace(/\D/g, "").replace(/^0+/, "");
  if (digits.length < 8 || digits.length > 15) return undefined;
  return sha256(digits);
}

function readCookie(request: Request, name: string): string | undefined {
  const header = request.headers.get("cookie");
  if (!header) return undefined;
  for (const part of header.split(";")) {
    const [key, ...rest] = part.trim().split("=");
    // Passed exactly as the pixel stored it: OpenAI asks for the value unmodified.
    if (key === name) return rest.join("=") || undefined;
  }
  return undefined;
}

function pickSourceUrl(request: Request, pageUrl?: string): string {
  for (const candidate of [pageUrl, request.headers.get("referer") ?? undefined]) {
    if (!candidate) continue;
    try {
      const url = new URL(candidate);
      if (url.protocol === "https:" || url.protocol === "http:") return url.toString();
    } catch {
      // not a URL, try the next one
    }
  }
  return SITE_URL;
}

function clientIp(request: Request): string | undefined {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || undefined;
}

async function sendLead(input: LeadInput): Promise<void> {
  const apiKey = process.env.OPENAI_CAPI_KEY;
  if (!apiKey) return;

  const { request } = input;
  const id =
    typeof input.eventId === "string" && EVENT_ID_PATTERN.test(input.eventId)
      ? input.eventId
      : `lead_${Date.now()}_${crypto.randomUUID().slice(0, 8)}`;

  const emailHash = hashEmail(input.email);
  const phoneHash = hashPhone(input.phone);
  const ip = clientIp(request);
  const userAgent = request.headers.get("user-agent") || undefined;
  const oppref = readCookie(request, "__oppref");

  const user: Record<string, unknown> = {};
  if (emailHash) user.emails_sha256 = [emailHash];
  if (phoneHash) user.phone_numbers_sha256 = [phoneHash];
  if (ip) user.ip_address = ip;
  if (userAgent) user.user_agent = userAgent;

  const event: Record<string, unknown> = {
    id,
    type: "lead_created",
    timestamp_ms: Date.now(),
    action_source: "web",
    source_url: pickSourceUrl(request, input.pageUrl),
    data: { type: "customer_action" },
  };
  if (oppref) event.oppref = oppref;
  if (Object.keys(user).length > 0) event.user = user;

  try {
    const response = await fetch(`${ENDPOINT}?pid=${encodeURIComponent(OPENAI_PIXEL_ID)}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ integration_source: "cih-website", events: [event] }),
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error(`OpenAI Conversions API ${response.status}: ${text.slice(0, 300)}`);
    }
  } catch (err) {
    console.error("OpenAI Conversions API request failed:", err);
  }
}

/**
 * Report an accepted lead to OpenAI after the response has gone back to the
 * visitor, so the form never waits on it. Never throws.
 */
export function reportLeadToOpenAI(input: LeadInput): void {
  try {
    after(() => sendLead(input));
  } catch (err) {
    console.error("Could not schedule OpenAI lead report:", err);
  }
}
