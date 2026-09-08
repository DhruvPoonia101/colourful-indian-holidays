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
      name: "Narendra Poonia",
      url: `${SITE_URL}/about-us`,
      sameAs: ["https://www.linkedin.com/in/narendrapoonia/"],
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}${path}`,
  };
}
