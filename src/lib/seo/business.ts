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
  ],
  // Sourced from rajasthantravelagency.com's published schema on 2026-08-13 — confirm still current before launch.
  aggregateRating: {
    ratingValue: "4.9",
    reviewCount: "138",
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
