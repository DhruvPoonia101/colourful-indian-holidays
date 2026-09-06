import type { Metadata } from "next";
import { MonthPageTemplate } from "@/components/months/MonthPageTemplate";
import { october } from "@/content/months/october";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";

const content = october;
const pagePath = `/best-time-to-visit-india/${content.slug}`;

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

export default function Page() {
  return <MonthPageTemplate content={content} />;
}
