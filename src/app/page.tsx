import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { RegionHighlights } from "@/components/home/RegionHighlights";
import { WhyTravelWithUs } from "@/components/home/WhyTravelWithUs";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";
import { organizationJsonLd } from "@/lib/seo/organization-schema";
import { HREFLANG_LOCALES, SITE_NAME, SITE_URL } from "@/lib/seo/business";

const title = "Luxury Rajasthan & India Tour Packages for International Travellers";
const description =
  "Private, tailor-made Rajasthan and India tours for travellers from the USA, UK, Australia and beyond. Heritage palace hotels, English-speaking guides and custom itineraries since 2008.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: SITE_URL,
    languages: Object.fromEntries(
      HREFLANG_LOCALES.map((locale) => [locale.hrefLang, `${SITE_URL}${locale.path}`])
    ),
  },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/home/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Rajasthan palace at golden hour, Colourful Indian Holidays",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${SITE_NAME}`,
    description,
    images: [`${SITE_URL}/images/home/hero.webp`],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <main>
        <Hero />
        <TrustStrip />
        <RegionHighlights />
        <WhyTravelWithUs />
        <Testimonials />
        <CTASection />
      </main>
    </>
  );
}
