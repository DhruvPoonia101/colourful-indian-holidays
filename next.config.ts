import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },

  // 301 redirects preserving Google rankings from the old site during the domain
  // migration. Source: colourfulindianholidays.com GSC export (last 3 months,
  // 222 clicks / 40,632 impressions / 124 ranked pages) captured pre-launch.
  // Every mapped page keeps its existing search equity instead of 404ing.
  //
  // Status categories (see /home/claude/redirect_map_v2.csv for the full audit):
  //  - renamed-slug:        exact new-site page exists at a different URL
  //  - regional-fallback:   no direct new-site equivalent; sent to the closest region
  //  - package-category-fallback: old individual /tour/xxx page -> its new category hub
  //  - travel-guide-article / festival-new-page / beaches-new-page / wildlife-new-page:
  //        pages that need to be BUILT at the new URL (see conversation) — until then
  //        these redirects point at the nearest live page so nothing 404s meanwhile
  async redirects() {
    return [
      // URL restructure (Sep 2026): /themes -> /experiences, and festival
      // sub-pages flattened from a 3-level nested path to a single flat slug.
      { source: "/themes", destination: "/experiences", permanent: true },
      { source: "/themes/festival-tours", destination: "/experiences/festival-tours", permanent: true },
      { source: "/themes/festival-tours/camel-festival", destination: "/experiences/camel-festival", permanent: true },
      { source: "/themes/festival-tours/diwali", destination: "/experiences/diwali", permanent: true },
      { source: "/themes/festival-tours/elephant-festival", destination: "/experiences/elephant-festival", permanent: true },
      { source: "/themes/festival-tours/goa-carnival", destination: "/experiences/goa-carnival", permanent: true },
      { source: "/themes/festival-tours/international-yoga-festival-rishikesh", destination: "/experiences/international-yoga-festival-rishikesh", permanent: true },
      { source: "/themes/festival-tours/kumbh-mela", destination: "/experiences/kumbh-mela", permanent: true },
      { source: "/themes/festival-tours/kutch-mahotsav", destination: "/experiences/kutch-mahotsav", permanent: true },
      { source: "/themes/festival-tours/onam", destination: "/experiences/onam", permanent: true },
      { source: "/themes/festival-tours/pushkar-fair", destination: "/experiences/pushkar-fair", permanent: true },
      { source: "/themes/festival-tours/teej-festival", destination: "/experiences/teej-festival", permanent: true },
      { source: "/themes/festival-tours/the-urs-festival-ajmer", destination: "/experiences/the-urs-festival-ajmer", permanent: true },
      // URL restructure (Sep 2026): Rajasthan sub-destinations flattened
      // from /destinations/rajasthan/{city} to /destinations/{city}.
      { source: "/destinations/rajasthan/jaipur", destination: "/destinations/jaipur", permanent: true },
      { source: "/destinations/rajasthan/udaipur", destination: "/destinations/udaipur", permanent: true },
      { source: "/destinations/rajasthan/jodhpur", destination: "/destinations/jodhpur", permanent: true },
      { source: "/destinations/rajasthan/jaisalmer", destination: "/destinations/jaisalmer", permanent: true },
      { source: "/destinations/rajasthan/pushkar", destination: "/destinations/pushkar", permanent: true },
      { source: "/destinations/rajasthan/ranthambore", destination: "/destinations/ranthambore", permanent: true },
      // URL restructure (Sep 2026): /packages -> /tours, and Golden Triangle
      // sub-pages flattened from a 3-level nested path to a single flat slug.
      { source: "/packages", destination: "/tours", permanent: true },
      { source: "/packages/rajasthan-tours", destination: "/tours/rajasthan-tours", permanent: true },
      { source: "/packages/wildlife-tours", destination: "/tours/wildlife-tours", permanent: true },
      { source: "/packages/north-india-tours", destination: "/tours/north-india-tours", permanent: true },
      { source: "/packages/nepal-tours", destination: "/tours/nepal-tours", permanent: true },
      { source: "/packages/golden-triangle-tours", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/packages/golden-triangle-tours/delhi-agra-jaipur", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/packages/golden-triangle-tours/delhi-agra-jaipur-4-days", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/packages/golden-triangle-tours/delhi-agra-jaipur-udaipur", destination: "/tours/golden-triangle-tour-udaipur", permanent: true },
      { source: "/packages/golden-triangle-tours/delhi-agra-jaipur-varanasi", destination: "/tours/golden-triangle-tour-varanasi", permanent: true },
      { source: "/packages/golden-triangle-tours/delhi-agra-jaipur-ranthambore", destination: "/tours/golden-triangle-tour-ranthambore", permanent: true },
      { source: "/packages/golden-triangle-tours/delhi-agra-jaipur-jodhpur-udaipur", destination: "/tours/golden-triangle-tour-ajmer-pushkar", permanent: true },
      // Active backlink campaign (Jun–Aug 2026) — verified against
      // Backlink-August-26 tracking sheet, ~50 live backlinks point here.
      { source: "/kashmir-holiday-tour-package", destination: "/tours/kashmir-ladakh-tours", permanent: true },
      { source: "/india-nepal-bhutan-tour-packages", destination: "/tours/india-nepal-bhutan-tours", permanent: true },
      { source: "/nepal-bhutan-tour-packages", destination: "/tours/nepal-bhutan-tours", permanent: true },
      { source: "/rajasthan-heritage-tour-package", destination: "/tours/rajasthan-tours", permanent: true },
      { source: "/rajasthan-holiday-packages", destination: "/tours/rajasthan-tours", permanent: true },
      { source: "/rajasthan-family-tour-package", destination: "/tours/rajasthan-tours", permanent: true },
      { source: "/rajasthan-honeymoon-tour-package", destination: "/tours/rajasthan-tours", permanent: true },
      { source: "/rajasthan-honeymoon-tour-package-with-hotel", destination: "/tours/rajasthan-tours", permanent: true },
      { source: "/best-taxi-service-in-rajasthan-for-tourists", destination: "/car-rental", permanent: true },
      { source: "/north-india-travel-packages", destination: "/tours/north-india-tours", permanent: true },
      { source: "/cultural-golden-triangle-with-varanasi-tour-packages", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/tour-operators-in-jaipur-rajasthan", destination: "/destinations/rajasthan", permanent: true },
      { source: "/pilgrimage-holiday-destinations-in-india", destination: "/travel-guide/pilgrimage-holiday-destinations-in-india", permanent: true },
      { source: "/monuments-in-rajasthan", destination: "/travel-guide/monuments-in-rajasthan", permanent: true },
      { source: "/destinations/haridwar-rishikesh", destination: "/destinations/rishikesh-haridwar", permanent: true },
      { source: "/luxury-beaches/tamil-nadu-beaches", destination: "/destinations/tamil-nadu-beaches", permanent: true },
      { source: "/20-best-tourist-places-to-visit-in-india", destination: "/travel-guide/20-best-tourist-places-to-visit-in-india", permanent: true },
      { source: "/places-to-visit-in-shekhawati", destination: "/travel-guide/places-to-visit-in-shekhawati", permanent: true },
      { source: "/tour/cultural-golden-triangle-with-historical-rajasthan", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/fair-festivals/kumbh-mela", destination: "/experiences/kumbh-mela", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/tour", destination: "/tours", permanent: true },
      { source: "/tour/14-days-rajasthan-tour-itinerary", destination: "/tours/rajasthan-tours", permanent: true },
      { source: "/india-golden-triangle-tour", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/fair-festivals/the-urs-festival-ajmer", destination: "/experiences/the-urs-festival-ajmer", permanent: true },
      { source: "/6-day-golden-triangle-tour-india", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/tour/south-india-tamilnadu-kerala-tour", destination: "/tours/kerala-tours", permanent: true },
      { source: "/destinations/bikaner", destination: "/destinations/rajasthan", permanent: true },
      { source: "/fair-festivals/elephant-festival", destination: "/experiences/elephant-festival", permanent: true },
      { source: "/luxury-beaches/gujarat-beaches", destination: "/destinations/gujarat-beaches", permanent: true },
      { source: "/fair-festivals/teej-festival", destination: "/experiences/teej-festival", permanent: true },
      { source: "/taj-mahal-tour-packages", destination: "/tours/taj-mahal-tours", permanent: true },
      { source: "/luxury-beaches", destination: "/destinations", permanent: true },
      { source: "/north-india-tours", destination: "/tours/north-india-tours", permanent: true },
      { source: "/north-india-nepal-tours", destination: "/tours/north-india-tours", permanent: true },
      { source: "/tour/golden-triangle-with-ranthambore-kerala", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/14-days-cultural-golden-triangle-with-rajasthan", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/wildlife-attractions/sariska-wildlife-sanctuary", destination: "/destinations/sariska", permanent: true },
      { source: "/fair-festivals/camel-festival", destination: "/experiences/camel-festival", permanent: true },
      { source: "/taj-mahal-tour-from-delhi-by-car", destination: "/tours/taj-mahal-tours", permanent: true },
      { source: "/top-cultural-festivals-in-india", destination: "/travel-guide/top-cultural-festivals-in-india", permanent: true },
      { source: "/destinations/mount-abu", destination: "/destinations/rajasthan", permanent: true },
      { source: "/destinations/kochi", destination: "/destinations/kerala", permanent: true },
      { source: "/destinations/gangtok", destination: "/destinations", permanent: true },
      { source: "/fair-festivals", destination: "/experiences/festival-tours", permanent: true },
      { source: "/destinations/aurangabad", destination: "/destinations", permanent: true },
      { source: "/fair-festivals/diwali", destination: "/experiences/diwali", permanent: true },
      { source: "/fair-festivals/goa-carnival", destination: "/experiences/goa-carnival", permanent: true },
      { source: "/rajasthan-tour-packages", destination: "/tours/rajasthan-tours", permanent: true },
      { source: "/wildlife-attractions/bandhavgarh-national-park", destination: "/destinations/bandhavgarh", permanent: true },
      { source: "/taj-mahal-tour-from-delhi", destination: "/tours/taj-mahal-tours", permanent: true },
      { source: "/tour/delhi-agra-same-day-by-super-fast-train", destination: "/tours", permanent: true },
      { source: "/fair-festivals/onam", destination: "/experiences/onam", permanent: true },
      { source: "/blog", destination: "/travel-guide", permanent: true },
      { source: "/top-10-splendors-of-vivid-rajasthan", destination: "/travel-guide/monuments-in-rajasthan", permanent: true },
      { source: "/tour/10-days-golden-triangle-with-colourful-rajasthan-tour", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/luxury-beaches/andaman-nicobar-beaches", destination: "/destinations/andaman-islands", permanent: true },
      { source: "/tour/10-days-golden-triangle-with-historical-rajasthan-tour", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/fair-festivals/international-yoga-festival-rishikesh", destination: "/experiences/international-yoga-festival-rishikesh", permanent: true },
      { source: "/tour/golden-triangle-tour-with-nepal", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/tour/rajasthan-forts-palaces-tour", destination: "/tours/rajasthan-tours", permanent: true },
      { source: "/destinations/sarnath", destination: "/destinations/varanasi", permanent: true },
      { source: "/tour/cultural-golden-triangle-with-bengal-tiger", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/wildlife-attractions", destination: "/destinations", permanent: true },
      { source: "/5-day-kerala-tour-plan", destination: "/tours/kerala-tours", permanent: true },
      { source: "/e-tourist-visa", destination: "/travel-guide/india-e-visa-guide", permanent: true },
      { source: "/fair-festivals/pushkar-fair", destination: "/experiences/pushkar-fair", permanent: true },
      { source: "/south-india-tours", destination: "/tours/south-india-tours", permanent: true },
      { source: "/tour/6-days-amazing-kerala-tour", destination: "/tours/kerala-tours", permanent: true },
      { source: "/luxury-beaches/maharashtra-beaches", destination: "/destinations/maharashtra-beaches", permanent: true },
      { source: "/wildlife-attractions/kaziranga-national-park", destination: "/destinations/kaziranga", permanent: true },
      { source: "/tour/golden-triangle-with-mandawa-and-ranthambore-tiger-safari", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/wildlife-tours", destination: "/tours/wildlife-tours", permanent: true },
      { source: "/tour/priceless-gems-of-royal-rajasthan-tour", destination: "/tours/rajasthan-tours", permanent: true },
      { source: "/top-monsoon-destinations", destination: "/best-time-to-visit-india", permanent: true },
      { source: "/tour/central-india-with-rajasthan", destination: "/tours/rajasthan-tours", permanent: true },
      { source: "/tour/rajasthan-with-goa-tour", destination: "/tours/rajasthan-tours", permanent: true },
      { source: "/tour/grand-golden-triangle-with-blissful-bird-watching", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/destinations/orchha", destination: "/destinations/rajasthan", permanent: true },
      { source: "/famous-temples-to-visit-in-rajasthan", destination: "/travel-guide/pilgrimage-holiday-destinations-in-india", permanent: true },
      { source: "/destinations/surat", destination: "/destinations", permanent: true },
      { source: "/kashmir-leh-tours", destination: "/tours/kashmir-ladakh-tours", permanent: true },
      { source: "/destinations/mathura", destination: "/destinations/agra", permanent: true },
      { source: "/tour/golden-triangle-with-haridwar-rajasthan-tour", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/tour/india-tiger-tour", destination: "/tours/wildlife-tours", permanent: true },
      { source: "/destinations/dalhousie", destination: "/destinations/himachal", permanent: true },
      { source: "/category/blog", destination: "/travel-guide", permanent: true },
      { source: "/tour/north-india-with-nepal-and-bhutan-tour", destination: "/tours/north-india-tours", permanent: true },
      { source: "/destinations/dharamshala", destination: "/destinations/himachal", permanent: true },
      { source: "/destinations/shimla", destination: "/destinations/himachal", permanent: true },
      { source: "/safari-trip-to-corbett-national-park", destination: "/travel-guide", permanent: true },
      { source: "/destinations/bharatpur", destination: "/destinations/rajasthan", permanent: true },
      { source: "/tour/golden-triangle-with-ranthmbhore", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/tour/south-india-tour", destination: "/tours/south-india-tours", permanent: true },
      { source: "/tour/best-of-india-nepal-first-tour", destination: "/tours/nepal-tours", permanent: true },
      { source: "/tour/07-days-kashmir-tour", destination: "/tours/kashmir-ladakh-tours", permanent: true },
      { source: "/tour/golden-triangle-with-pushkar", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/tour/north-india-tour", destination: "/tours/north-india-tours", permanent: true },
      { source: "/destinations/manali", destination: "/destinations/himachal", permanent: true },
      { source: "/india-golden-triangle-private-tour-packages", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/tour/golden-triangle-with-gods-own-country-kerala", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/tag/rajasthan", destination: "/travel-guide", permanent: true },
      { source: "/tour/rajasthan-with-varanasi-tour", destination: "/tours/rajasthan-tours", permanent: true },
      { source: "/tour/indian-wildlife-tour", destination: "/tours/wildlife-tours", permanent: true },
      { source: "/tour/10-days-himalayan-journey", destination: "/tours", permanent: true },
      { source: "/india-golden-triangle-private-tour", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/tour/9-days-with-birds-of-yamuna-and-chambal-and-bengal-tiger", destination: "/tours/wildlife-tours", permanent: true },
      { source: "/fair-festivals/kutch-mahotsav", destination: "/experiences/kutch-mahotsav", permanent: true },
      { source: "/tour/05-days-kashmir", destination: "/tours/kashmir-ladakh-tours", permanent: true },
      { source: "/tour/rajasthan-with-wildlife-tour", destination: "/tours/wildlife-tours", permanent: true },
      { source: "/tour/north-india-with-orchha-tour", destination: "/tours/north-india-tours", permanent: true },
      { source: "/tour/06-days-magical-himalaya", destination: "/tours", permanent: true },
      { source: "/tour/09-days-kashmir-tour", destination: "/tours/kashmir-ladakh-tours", permanent: true },
      { source: "/tour/north-east-tour-2", destination: "/tours", permanent: true },
      { source: "/tour/jaipur-agra-same-day-train-tour", destination: "/tours", permanent: true },
      { source: "/tour/wildlife-golden-triangle-tour-of-india", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/tour/7-days-golden-triangle-with-mumbai", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/tour/kerala-in-10-days", destination: "/tours/kerala-tours", permanent: true },
      { source: "/tour/paradise-of-hills-valley", destination: "/tours", permanent: true },
      { source: "/tour/best-of-india-nepal-third-tour", destination: "/tours/nepal-tours", permanent: true },

      // Legacy WordPress URLs still being re-crawled (Search Console, Oct 2026): one-hop 301s to the closest current page.
      { source: "/blog/north-india-tour-this-year", destination: "/travel-guide", permanent: true },
      { source: "/north-india-tour-this-year", destination: "/travel-guide", permanent: true },
      { source: "/blog/tips-for-india-first-timers", destination: "/travel-guide/first-trip-to-india-guide", permanent: true },
      { source: "/tips-for-india-first-timers", destination: "/travel-guide/first-trip-to-india-guide", permanent: true },
      { source: "/blog/visit-india-with-your-family", destination: "/travel-guide", permanent: true },
      { source: "/visit-india-with-your-family", destination: "/travel-guide", permanent: true },
      { source: "/tips-for-solo-female-travelers", destination: "/travel-guide/solo-travel-india-guide", permanent: true },
      { source: "/why-you-must-visit-india", destination: "/travel-guide/first-trip-to-india-guide", permanent: true },
      { source: "/hello-world", destination: "/", permanent: true },
      { source: "/destinations/kovalam", destination: "/destinations/kerala", permanent: true },
      { source: "/fair-festivals/pongal-festival", destination: "/experiences/festival-tours", permanent: true },
      { source: "/fair-festivals/pongal", destination: "/experiences/festival-tours", permanent: true },
      { source: "/fair-festivals/holi-festival", destination: "/experiences/festival-tours", permanent: true },
      { source: "/golden-triangle-with-gods-own-country-kerala", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/jaipur-car-rental", destination: "/car-rental", permanent: true },
      { source: "/north-east-india-tours", destination: "/tours", permanent: true },
      { source: "/packages/duration/15-plus-days", destination: "/tours/15-plus-day-tours", permanent: true },
      { source: "/packages/duration/6-9-days", destination: "/tours/6-9-day-tours", permanent: true },
      { source: "/seven-days-rajasthan-tour-packages", destination: "/tours/rajasthan-tours", permanent: true },
      { source: "/themes/varanasi-ganges", destination: "/destinations/varanasi", permanent: true },
      { source: "/tour/assam-with-wildlife", destination: "/tours/kaziranga-tour", permanent: true },
      { source: "/tours/assam-with-wildlife", destination: "/tours/kaziranga-tour", permanent: true },
      { source: "/tour/best-of-india-nepal-second-tour", destination: "/tours/india-nepal-tours", permanent: true },
      { source: "/tour/darjeeling-gangtok-tour", destination: "/tours/darjeeling-tour", permanent: true },
      { source: "/tour/exclusive-nepal-tour", destination: "/tours/nepal-tours", permanent: true },
      { source: "/tour/gems-of-north-central-india", destination: "/tours/north-india-tours", permanent: true },
      { source: "/tour/golden-triangle-tour-with-khajuraho-and-varanasi", destination: "/tours/golden-triangle-tour-varanasi", permanent: true },
      { source: "/tours/golden-triangle-tour-with-khajuraho-and-varanasi", destination: "/tours/golden-triangle-tour-varanasi", permanent: true },
      { source: "/tour/golden-triangle-with-amritsar-tour", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/tour/golden-triangle-with-bharatpur", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/tour/golden-triangle-with-haridwar-rishikesh", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/tour/golden-triangle-with-majestic-rajasthan-fort", destination: "/tours/golden-triangle-tour", permanent: true },
      { source: "/tour/north-india-with-varanasi-tour", destination: "/tours/north-india-tours", permanent: true },
      { source: "/tour/royal-rajasthan-with-majestic-mumbai", destination: "/tours/rajasthan-tours", permanent: true },
      { source: "/tour/south-india-karnatka-kerala", destination: "/tours/south-india-tours", permanent: true },
      { source: "/tours/kerala-in-10-days", destination: "/tours/kerala-tours", permanent: true },
      { source: "/tours/paradise-of-hills-valley", destination: "/tours/hill-stations-tours", permanent: true },
      { source: "/tours/06-days-magical-himalaya", destination: "/tours/hill-stations-tours", permanent: true },
      { source: "/wildlife-attractions/kanha-national-park", destination: "/destinations/kanha", permanent: true },
      { source: "/wildlife-attractions/ranthambore-national-park", destination: "/destinations/ranthambore", permanent: true },
    ];
  },

  // Baseline security/hardening headers. Not a ranking factor, but closes
  // an audit gap (see FULLAUDITREPORT.md finding T4) — only HSTS was set
  // before this. Applied to every route.
  //
  // Content-Security-Policy is now ENFORCING, not Report-Only. It shipped
  // Report-Only first specifically to verify Cloudflare Turnstile
  // (challenges.cloudflare.com), used for spam protection on the Contact
  // form, Get Quote button, and Trip Planner bar — see TurnstileWidget.tsx
  // and spam-protection.ts. Two full Report-Only passes came back clean:
  // the second included manually testing multiple page types AND
  // completing a real enquiry submission through to a Turnstile challenge
  // (29 Sep 2026) — the single highest-risk interaction for this policy,
  // since that's the point Turnstile's challenge actually has to run and
  // verify, not just load. Zero violations logged on that pass. Kept the
  // GTM/Analytics allowances as a harmless precaution even though no GTM
  // violation was ever observed in either Report-Only pass — an audit
  // claimed GTM is present sitewide, but it isn't findable anywhere in
  // this source tree, so this is defensive, not confirmed-necessary.
  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://challenges.cloudflare.com https://*.tawk.to https://cdn.jsdelivr.net",
      "style-src 'self' 'unsafe-inline' https://*.tawk.to https://cdn.jsdelivr.net https://fonts.googleapis.com",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://*.tawk.to https://cdn.jsdelivr.net https://fonts.gstatic.com",
      "frame-src https://maps.google.com https://www.google.com https://challenges.cloudflare.com https://*.tawk.to",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://challenges.cloudflare.com https://*.tawk.to wss://*.tawk.to",
      "media-src 'self' https://*.tawk.to",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;
