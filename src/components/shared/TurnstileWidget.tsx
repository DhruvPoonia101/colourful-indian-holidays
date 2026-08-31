"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { forwardRef } from "react";

/**
 * Cloudflare Turnstile challenge, shared across every lead form (Trip
 * Planner, Get a Free Quote, Contact Us). Renders using the public site key
 * — safe to expose in the browser. The token it produces must be sent to
 * the server and verified with verifyTurnstileToken() using the private
 * secret key before trusting the submission.
 *
 * In "managed" mode (configured on the Cloudflare dashboard) most real
 * visitors see nothing at all — Cloudflare only shows an interactive
 * challenge to traffic it judges risky.
 */
export const TurnstileWidget = forwardRef<
  TurnstileInstance,
  { onVerify: (token: string) => void; onExpire?: () => void }
>(function TurnstileWidget({ onVerify, onExpire }, ref) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!siteKey) {
    return null;
  }

  return (
    <Turnstile
      ref={ref}
      siteKey={siteKey}
      onSuccess={onVerify}
      onExpire={onExpire}
      options={{ size: "flexible" }}
    />
  );
});
