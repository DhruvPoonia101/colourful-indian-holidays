import type { Metadata } from "next";
import { VehiclePageTemplate } from "@/components/fleet/VehiclePageTemplate";
import { luxuryCars } from "@/content/fleet/luxury-cars";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";

const content = luxuryCars;
const pagePath = `/car-rental/${content.slug}`;

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
};

export default function LuxuryCarsPage() {
  return <VehiclePageTemplate content={content} />;
}
