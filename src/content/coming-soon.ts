/**
 * Slugs served by the "Coming Soon" catch-all routes — every URL the site
 * links to (nav, hub cards, sitemap, redirect destinations) under these
 * sections that doesn't have a real page yet.
 *
 * Each catch-all prebuilds exactly these via generateStaticParams and sets
 * `dynamicParams = false`, so any other slug gets the static 404 instead of
 * being rendered on demand and written to the ISR cache. Bots probing random
 * URLs were otherwise creating a fresh ISR entry per path.
 *
 * When a real page ships at one of these URLs, remove its slug here (the
 * static route takes precedence anyway). When a new not-yet-built page gets
 * linked, add its slug here or it will 404.
 */
export const COMING_SOON_SLUGS = {
  "best-time-to-visit-india": [] as string[],
  "car-rental": [] as string[],
  destinations: ["andaman-nicobar-beaches"],
  experiences: [
    "adventure-tours",
    "food-cooking",
    "himalayan-adventures",
    "luxury-india",
    "luxury-rajasthan",
    "national-parks",
    "nature-landscape",
    "palace-experiences",
    "rafting",
    "romantic-getaways",
    "solo-travel",
    "temple-tours",
    "trekking",
    "varanasi-ganges",
    "yoga-wellness",
  ],
  tours: ["gujarat-beaches-tour"],
  "travel-guide": [
    "e-tourist-visa",
    "top-10-splendors-of-vivid-rajasthan",
    "top-monsoon-destinations",
  ],
};
