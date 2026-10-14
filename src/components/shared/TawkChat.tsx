import Script from "next/script";

// tawk.to live chat — IDs from the tawk.to embed code
// (embed.tawk.to/<propertyId>/<widgetId>).
const TAWK_PROPERTY_ID = "66d8247f50c10f7a00a3d7b0";
const TAWK_WIDGET_ID = "1i6u4t58m";

/**
 * Loaded with lazyOnload (after the page is idle) so it can't hurt LCP/INP.
 * customStyle lifts the tawk.to bubble above the sticky WhatsApp button so
 * the two don't overlap.
 */
export function TawkChat() {
  return (
    <Script id="tawk-to" strategy="lazyOnload">
      {`
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();
        window.Tawk_API.customStyle = {
          visibility: {
            desktop: { position: 'br', xOffset: 24, yOffset: 120 },
            mobile: { position: 'br', xOffset: 12, yOffset: 96 }
          }
        };
        (function () {
          var s1 = document.createElement('script'), s0 = document.getElementsByTagName('script')[0];
          s1.async = true;
          s1.src = 'https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}';
          s1.charset = 'UTF-8';
          s1.setAttribute('crossorigin', '*');
          s0.parentNode.insertBefore(s1, s0);
        })();
      `}
    </Script>
  );
}
