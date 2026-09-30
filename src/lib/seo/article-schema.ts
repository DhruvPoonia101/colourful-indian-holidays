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
