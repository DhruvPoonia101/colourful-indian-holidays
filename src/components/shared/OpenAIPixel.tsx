import Script from "next/script";
import { OPENAI_PIXEL_ID } from "@/lib/openai-pixel";

/**
 * OpenAI Ads measurement pixel (data source "Colourful Indian Holidays
 * Website"). Official install snippet from
 * https://developers.openai.com/ads/measurement-pixel: a tiny queue stub plus
 * an async load of the SDK, then init. Calls made before the SDK finishes
 * loading are queued by the stub, so no early event is lost.
 *
 * The pixel stores the ad click reference (?oppref=...) in a first-party
 * cookie on the landing page; that is what links a later lead back to the ad.
 *
 * Needs the CSP entries in next.config.ts (bzrcdn.openai.com for script +
 * config, bzr.openai.com for events).
 */
export function OpenAIPixel() {
  return (
    <Script id="openai-pixel" strategy="afterInteractive">
      {`
        (function (w, d, s, u) {
          if (w.oaiq) return;
          var q = function () { q.q.push(arguments); };
          q.q = [];
          w.oaiq = q;
          var js = d.createElement(s);
          js.async = true;
          js.src = u;
          var f = d.getElementsByTagName(s)[0];
          f.parentNode.insertBefore(js, f);
        })(window, document, "script", "https://bzrcdn.openai.com/sdk/oaiq.min.js");
        oaiq("init", { pixelId: ${JSON.stringify(OPENAI_PIXEL_ID)} });
      `}
    </Script>
  );
}
