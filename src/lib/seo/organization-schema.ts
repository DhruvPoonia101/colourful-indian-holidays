import {
  BUSINESS,
  BUSINESS_DESCRIPTOR,
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_NAME_US_SPELLING,
  SITE_URL,
} from "./business";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": ORGANIZATION_ID,
    name: BUSINESS.name,
    // The US spelling people search for. Helps engines (and AI answers) tie
    // "Colorful Indian Holidays" to this company rather than to Holi or
    // generic "colourful India" content.
    alternateName: [SITE_NAME_US_SPELLING],
    description: `${BUSINESS_DESCRIPTOR}. Tailor-made private tours with your own guide, driver and hand-picked hotels.`,
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    // Worldwide, not "India" — this organization serves international
    // clients from anywhere; the destinations themselves (India, Nepal,
    // Bhutan) are already correctly represented via TouristDestination
    // schema on individual pages. Previously said "India" here while
    // contactPoint.areaServed below said "Worldwide" — an internal
    // inconsistency flagged by the audit's Local SEO pass. Reconciled
    // toward "Worldwide" since that's what actually matches the business.
    areaServed: "Worldwide",
    // Confirmed directly by Dhruv (30 Sep 2026): the business operates
    // 24 hours. Represented per schema.org's standard pattern for
    // round-the-clock availability — all 7 days, 00:00 to 23:59.
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    // Accreditation stated on the site's trust badges (IATO membership page).
    memberOf: {
      "@type": "Organization",
      name: "Indian Association of Tour Operators (IATO)",
      url: "https://iato.in",
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
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: SITE_NAME_US_SPELLING,
    url: SITE_URL,
    publisher: { "@id": ORGANIZATION_ID },
  };
}
