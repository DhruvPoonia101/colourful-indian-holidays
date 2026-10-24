export const SITE_URL = "https://colourfulindianholidays.com";
export const SITE_NAME = "Colourful Indian Holidays";
/** US spelling — what a large share of the target audience actually types. */
export const SITE_NAME_US_SPELLING = "Colorful Indian Holidays";
/** One consistent line describing the business. Reused in schema, the
 * homepage, About and llms.txt so search and AI engines see the same words
 * everywhere (the brand name alone is generic and collides with Holi and
 * "colourful India" festival content). */
export const BUSINESS_DESCRIPTOR =
  "Jaipur-based private tour operator for India, Nepal and Bhutan since 2007";
/** Stable @id so every page's schema refers to the same organisation. */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const BUSINESS = {
  name: SITE_NAME,
  legalName: "Colourful Indian Holidays",
  url: SITE_URL,
  telephone: "+91 9929094862",
  whatsapp: "919929094862",
  // The single source of truth for the public contact address. Every
  // mailto: link, the JSON-LD Organization/TravelAgency schema, and the
  // `to:` recipient of all four lead-capture API routes read from here —
  // so this one line is the only place the address needs changing.
  // Also used as the Resend `from:` sender identity on those routes. That
  // works because the whole colourfulindianholidays.com domain is verified
  // in Resend, so any address on it can send. Note the side effect: lead
  // emails arrive from the same address they are sent to, so an inbox will
  // show them as being from you. `replyTo` is still set to the enquirer, so
  // hitting Reply goes to the customer, not to this mailbox.
  email: "mail@colourfulindianholidays.com",
  foundingYear: 2007,
  address: {
    streetAddress: "UG-36, Crown Plaza, Vaishali Nagar, Near Nursery Circle",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302021",
    addressCountry: "IN",
  },
  // Read directly off this business's own verified Google Business Profile
  // pin (right-clicked on Google Maps, 29 Sep 2026) — not a geocoded
  // approximation of the street address.
  geo: {
    latitude: 26.912165,
    longitude: 75.740581,
  },
  sameAs: [
    "https://www.instagram.com/colourful_indian_holidays",
    "https://www.facebook.com/ciholidays",
    "https://www.linkedin.com/in/narendrapoonia/",
    "https://www.tripadvisor.in/Attraction_Review-g304551-d3846895-Reviews-Colourful_Indian_Holidays-New_Delhi_National_Capital_Territory_of_Delhi.html",
    "https://share.google/7X4vOahXLHBf878Zv",
  ],
  // Verified directly against this business's own Tripadvisor listing on 2026-08-19.
  aggregateRating: {
    ratingValue: "4.9",
    reviewCount: "282",
  },
  // Verified directly against this business's own Google Business Profile.
  // Distinct from the Tripadvisor aggregateRating above — do not merge the two counts.
  googleRating: {
    ratingValue: "4.9",
    reviewCount: "140",
    mapsUrl: "https://share.google/7X4vOahXLHBf878Zv",
  },
  languages: ["English", "French", "German", "Spanish"],
} as const;

