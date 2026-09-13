import type { Metadata } from "next";
import { PackagePageTemplate } from "@/components/packages/PackagePageTemplate";
import { jaipurCityTour } from "@/content/packages/jaipur-city-tour";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";

const content = jaipurCityTour;
const pagePath = `/tours/${content.slug}`;

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
  return <PackagePageTemplate content={content} />;
}
