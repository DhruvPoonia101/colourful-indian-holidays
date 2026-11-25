/**
 * OpenAI Ads measurement pixel — shared config + event helpers.
 * Docs: https://developers.openai.com/ads/measurement-pixel
 *
 * The pixel ID is public (it is visible in any page's source), so it is safe
 * in client code. Override with NEXT_PUBLIC_OPENAI_PIXEL_ID if it ever changes.
 */
export const OPENAI_PIXEL_ID =
  process.env.NEXT_PUBLIC_OPENAI_PIXEL_ID ?? "7Ux7j6a8iCqdvStp5D62yD";

declare global {
  interface Window {
    /** Queue stub created by <OpenAIPixel />; replaced by the real SDK once loaded. */
    oaiq?: (...args: unknown[]) => void;
  }
}

function eventId(prefix: string): string {
  const rand =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID().slice(0, 8)
      : Math.random().toString(36).slice(2, 10);
  return `${prefix}_${Date.now()}_${rand}`;
}

/**
 * Event id for one lead. Create it BEFORE posting the form and send it in the
 * request body as `leadEventId`: the server reports the same lead to OpenAI's
 * Conversions API with this id (src/lib/openai-capi.ts), so OpenAI counts the
 * pixel copy and the server copy once.
 */
export function newLeadEventId(): string {
  return eventId("lead");
}

/**
 * A real lead: a quote request, contact form or trip-planner submission that
 * the server has accepted. Standard OpenAI event `lead_created`
 * (data type `customer_action`). Call it only AFTER the API call succeeded,
 * with the same id that was sent to the server.
 */
export function trackLead(leadEventId: string = newLeadEventId()): void {
  try {
    window.oaiq?.(
      "measure",
      "lead_created",
      { type: "customer_action" },
      { event_id: leadEventId },
    );
  } catch {
    // Measurement must never break the page or a form.
  }
}

/**
 * Softer intent signals (WhatsApp tap, phone tap). Sent as OpenAI `custom`
 * events; the name must match the Custom conversion event created in
 * Ads Manager (lowercase letters, numbers, underscores).
 */
export function trackCustom(
  customEventName: "whatsapp_click" | "call_click",
): void {
  try {
    window.oaiq?.(
      "measure",
      "custom",
      { type: "custom" },
      { custom_event_name: customEventName, event_id: eventId(customEventName) },
    );
  } catch {
    // Measurement must never break the page.
  }
}
