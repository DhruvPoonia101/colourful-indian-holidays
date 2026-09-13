import type { Metadata } from "next";
import { ExperiencePageTemplate } from "@/components/experiences/ExperiencePageTemplate";
import { tajMahalHoneymoon } from "@/content/experiences/taj-mahal-honeymoon";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";

const content = tajMahalHoneymoon;
const pagePath = `/experiences/${content.slug}`;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: {
    canonical: `${SITE_URL}${pagePath}`,
  },
  openGraph: {
    title: `${content.metaTitle} | ${SITE_NAME}`,
    description: content.metaDescription,
    url: `${SITE_URL}${pagePath}`,
    siteName: SITE_NAME,
    type: "website",
  },
  robots: content.draftPendingReview ? { index: false, follow: true } : undefined,
};

export default function Page() {
  return (
    <ExperiencePageTemplate
      content={content}
      category={{ name: "Honeymoon Tours", path: "/experiences/honeymoon-tours" }}
    />
  );
}
