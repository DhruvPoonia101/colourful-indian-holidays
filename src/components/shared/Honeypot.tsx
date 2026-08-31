"use client";

import { useState } from "react";

/**
 * Call once per form. Returns the current honeypot field value plus a setter,
 * and `formLoadedAt` — the timestamp the form first rendered, used by the
 * server to reject submissions that arrive suspiciously fast. Pair with
 * <HoneypotField /> below and send both values in the request body.
 */
export function useHoneypot() {
  const [honeypot, setHoneypot] = useState("");
  const [formLoadedAt] = useState(() => Date.now());
  return { honeypot, setHoneypot, formLoadedAt };
}

/**
 * Renders a field that's invisible and unreachable for real visitors
 * (off-screen, not tab-focusable, excluded from screen readers, autocomplete
 * off) but present in the DOM for bots that blindly fill every input.
 */
export function HoneypotField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
    >
      <label htmlFor="company-website">Leave this field empty</label>
      <input
        id="company-website"
        name="companyWebsite"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
