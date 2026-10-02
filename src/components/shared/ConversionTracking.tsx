"use client";

import { useEffect } from "react";

/**
 * Pushes a dataLayer event whenever a visitor clicks any WhatsApp or
 * "Call Now" link, anywhere on the site — set up for GTM-based OpenAI
 * Ads conversion tracking (30 Sep 2026).
 *
 * Built as ONE global click listener rather than adding an onClick
 * handler to each individual button, because these links are genuinely
 * scattered across 7+ different components (JourneyCTA, Footer,
 * MobileMenu, ContactInfoCard, ContactQuickActions, SkipFormCTA,
 * FAQSection, StickyWhatsAppButton...) — editing all of them
 * individually is both more code to maintain and easier to accidentally
 * miss one. This approach also automatically covers any WhatsApp/Call
 * link added to the site in the future, with nothing extra to remember.
 *
 * Mounted once in the root layout. Does not interfere with the link's
 * normal behavior (opening WhatsApp / the phone dialer) — it only reads
 * the click, it never calls preventDefault().
 */
export function ConversionTracking() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.href;
      window.dataLayer = window.dataLayer || [];

      if (href.includes("wa.me")) {
        window.dataLayer.push({
          event: "whatsapp_click",
          link_url: href,
          page_path: window.location.pathname,
        });
      } else if (href.startsWith("tel:")) {
        window.dataLayer.push({
          event: "call_click",
          link_url: href,
          page_path: window.location.pathname,
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
