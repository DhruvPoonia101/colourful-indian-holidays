import { BUSINESS, SITE_NAME, SITE_URL } from "./business";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    logo: `${SITE_URL}/images/logo/logo-horizontal.webp`,
    image: `${SITE_URL}/images/destinations/amber-fort-jaipur.webp`,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    foundingDate: String(BUSINESS.foundingYear),
    priceRange: "$$$",
    knowsLanguage: BUSINESS.languages,
    founder: {
      "@type": "Person",
      name: "Narendra Poonia",
      jobTitle: "Founder",
      url: `${SITE_URL}/about-us`,
      sameAs: ["https://www.linkedin.com/in/narendrapoonia/"],
    },
    address: {
      "@type": "PostalAddress",
      ...BUSINESS.address,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: BUSINESS.sameAs,
    // aggregateRating intentionally omitted: the page visibly shows two
    // separate, equally-prominent rating sources (Google 4.9/140+ and
    // Tripadvisor 4.9/282+) rather than one canonical figure. Google's
    // structured data guidelines expect a single aggregateRating that's
    // unambiguously substantiated by the page's visible content — marking
    // up just one of the two risks a manual action or the rating simply
    // not showing. Reinstate this once there's one rating source the
    // schema can point to cleanly (see FULLAUDITREPORT.md finding S1).
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
