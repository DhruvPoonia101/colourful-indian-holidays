import type { Metadata } from "next";
import { FiArrowRight } from "react-icons/fi";
import { Hero } from "@/components/home/Hero";
import { TripPlannerBar } from "@/components/home/TripPlannerBar";
import { TrustStrip } from "@/components/home/TrustStrip";
import { TrustedWorldwide } from "@/components/home/TrustedWorldwide";
import { IntroSection } from "@/components/home/IntroSection";
import { RegionHighlights } from "@/components/home/RegionHighlights";
import { CityGrid } from "@/components/destinations/CityGrid";
import { WhyTravelWithUs } from "@/components/home/WhyTravelWithUs";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Button } from "@/components/ui/Button";
import { featuredThemes } from "@/content/themes-hub";
import { featuredPackages } from "@/content/packages-hub";
import { homeFaqs } from "@/content/home";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/organization-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
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
        url: `${SITE_URL}/images/destinations/amber-fort-jaipur.webp`,
        width: 1200,
        height: 630,
        alt: "Amber Fort at sunset, Jaipur, Rajasthan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${SITE_NAME}`,
    description,
    images: [`${SITE_URL}/images/destinations/amber-fort-jaipur.webp`],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(homeFaqs)) }}
      />

      <main>
        <Hero />
        <TripPlannerBar />
        <TrustStrip />
        <TrustedWorldwide />
        <IntroSection />
        <RegionHighlights />

        <CityGrid
          eyebrow="Popular Experiences"
          heading="What Kind of Trip Are You Looking For?"
          cities={featuredThemes}
          topDivider
        />
        <div className="flex justify-center pb-16 sm:pb-20">
          <Button href="/themes" variant="gold">
            Explore All Experiences
            <FiArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>

        <CityGrid
          eyebrow="Popular Tour Packages"
          heading="Where to Start"
          cities={featuredPackages}
          topDivider
        />
        <div className="flex justify-center pb-16 sm:pb-20">
          <Button href="/packages" variant="gold">
            View All Tour Packages
            <FiArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>

        <WhyTravelWithUs />
        <Testimonials />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before booking a trip with us — answered honestly."
          faqs={homeFaqs}
          whatsappMessage="Hi! I have a question before booking a trip with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage="/images/destinations/amber-fort-jaipur.webp"
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
            "Recognised by Ministry of Tourism, Govt of India",
            "4.9 Star Rating on Google",
            "5 Star Rating on Trip Advisor",
          ]}
        />
      </main>
    </>
  );
}
