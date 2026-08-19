import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { RegionHighlights } from "@/components/home/RegionHighlights";
import { WhyTravelWithUs } from "@/components/home/WhyTravelWithUs";
import { Testimonials } from "@/components/home/Testimonials";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/organization-schema";
import { HREFLANG_LOCALES, SITE_NAME, SITE_URL } from "@/lib/seo/business";

const title = "Private Rajasthan, India, Nepal & Bhutan Tours for International Travellers";
const description =
  "Private, tailor-made tours across Rajasthan, India, Nepal and Bhutan for international travellers — heritage palaces, wildlife safaris, coastal escapes and festival-timed itineraries, with English-speaking guides since 2008.";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />

      <main>
        <Hero />
        <TrustStrip />
        <RegionHighlights />
        <WhyTravelWithUs />
        <Testimonials />

        <JourneyCTA
          backgroundImage="/images/home/hero.webp"
          eyebrow="Start Your Journey"
          headline="Your India Journey Awaits."
          headlineItalic="Where Will You Begin?"
          subtext="Every itinerary is built privately around your dates and interests — tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a tour with Colourful Indian Holidays."
          trustBadges={[
            "IATO Registered Agency",
            "No Hidden Fees",
            "International Payments Accepted",
            "Respond Within 2 Hours",
          ]}
        />
      </main>
    </>
  );
}
