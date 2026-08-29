export const SITE_URL = "https://colourfulindianholidays.com";
export const SITE_NAME = "Colourful Indian Holidays";

export const BUSINESS = {
  name: SITE_NAME,
  legalName: "Colourful Indian Holidays",
  url: SITE_URL,
  telephone: "+91 9929094862",
  whatsapp: "919929094862",
  email: "colourfulindianholidays@gmail.com",
  foundingYear: 2008,
  address: {
    streetAddress: "UG-36, Crown Plaza, Vaishali Nagar, Near Nursery Circle",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302021",
    addressCountry: "IN",
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

export const HREFLANG_LOCALES = [
  { hrefLang: "en", path: "/" },
  { hrefLang: "en-GB", path: "/" },
  { hrefLang: "en-AU", path: "/" },
  { hrefLang: "en-CA", path: "/" },
  { hrefLang: "en-AE", path: "/" },
  { hrefLang: "x-default", path: "/" },
] as const;
