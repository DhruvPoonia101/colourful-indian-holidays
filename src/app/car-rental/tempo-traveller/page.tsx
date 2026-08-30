import type { Metadata } from "next";
import { VehiclePageTemplate } from "@/components/fleet/VehiclePageTemplate";
import { tempoTraveller } from "@/content/fleet/tempo-traveller";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";

const content = tempoTraveller;
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

export default function TempoTravellerPage() {
  return <VehiclePageTemplate content={content} />;
}
