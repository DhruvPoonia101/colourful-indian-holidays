import { SITE_NAME, SITE_URL } from "./business";

export function articleJsonLd({
  headline,
  description,
  path,
  image,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  /** Defaults to `datePublished` when the article hasn't been revised since. */
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: `${SITE_URL}${image}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: "Dhruv Poonia",
      url: "https://www.linkedin.com/in/dhruv-poonia-4b4400288/",
      sameAs: ["https://www.linkedin.com/in/dhruv-poonia-4b4400288/"],
      jobTitle: "Digital & Marketing Manager",
      worksFor: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      // Grounded in what the author bylines/bio cards sitewide already say
      // he writes and maintains (destination guides, itineraries, travel
      // advice for India/Nepal/Bhutan) — not an invented topic list.
      knowsAbout: [
        "India travel",
        "Nepal travel",
        "Bhutan travel",
        "Rajasthan tourism",
        "Heritage and palace tours",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo/logo-horizontal.webp`,
      },
    },
    mainEntityOfPage: `${SITE_URL}${path}`,
  };
}
