import type { Metadata } from "next";
import { PackagePageTemplate } from "@/components/packages/PackagePageTemplate";
import { goldenTriangleTours } from "@/content/packages/golden-triangle-tours";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";

const content = goldenTriangleTours;
const pagePath = `/packages/${content.slug}`;

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
  // DRAFT: unverified pricing/itinerary — keep noindex until Dhruv reviews
  // and flips draftPendingReview to false in the content file.
  robots: content.draftPendingReview ? { index: false, follow: true } : undefined,
};

export default function Page() {
  return <PackagePageTemplate content={content} />;
}
