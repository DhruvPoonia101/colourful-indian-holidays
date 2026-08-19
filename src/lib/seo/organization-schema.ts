import { BUSINESS, SITE_NAME, SITE_URL } from "./business";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/images/home/hero.webp`,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    foundingDate: String(BUSINESS.foundingYear),
    priceRange: "$$$",
    knowsLanguage: BUSINESS.languages,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS.address,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: BUSINESS.sameAs,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.aggregateRating.ratingValue,
      reviewCount: BUSINESS.aggregateRating.reviewCount,
      bestRating: "5",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: BUSINESS.languages,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}
