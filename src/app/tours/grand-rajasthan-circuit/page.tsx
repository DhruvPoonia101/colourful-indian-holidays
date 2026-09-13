import type { Metadata } from "next";
import { PackagePageTemplate } from "@/components/packages/PackagePageTemplate";
import { grandRajasthanCircuit } from "@/content/packages/grand-rajasthan-circuit";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";

const content = grandRajasthanCircuit;
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
