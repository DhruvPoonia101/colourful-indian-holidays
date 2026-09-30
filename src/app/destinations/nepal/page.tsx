import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { PlannedByLine } from "@/components/shared/PlannedByLine";
import { nepalDestinations } from "@/content/nepal-destinations-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Nepal Destinations | Kathmandu, Pokhara, Chitwan & Everest Region";
const description =
  "Every Nepal destination we plan private tours for — Kathmandu's temples, Pokhara's lakeside views, Chitwan's jungle safaris, and the Everest region.";
const pagePath = "/destinations/nepal";
const heroImage = "/images/destinations/kathmandu-aerial-boudhanath-city.webp";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}${pagePath}`,
  },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}${pagePath}`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Destinations", path: "/destinations" },
  { name: "Nepal", path: pagePath },
];

// Coordinates reused from the Kathmandu destination page, already verified
// there — used here as the country-level reference point for Nepal as a
// whole, matching how the audit's Schema pass flagged this hub as missing
// the TouristDestination schema that individual city pages already carry.
const faqs: FaqItem[] = [
  {
    question: "How many days do I need in Nepal?",
    answer:
      "8 days covers Kathmandu, Pokhara and a Chitwan jungle safari comfortably, matching our standard Nepal Tours itinerary. Add more time if you want to include the Everest region or a longer stay in the mountains.",
  },
  {
    question: "Can Nepal be combined with Bhutan or India?",
    answer:
      "Yes — this is genuinely common. We run dedicated Nepal & Bhutan, India & Nepal, and India-Nepal-Bhutan routes, each adding roughly a week per additional country. Tell us which combination interests you and we'll build the connected itinerary.",
  },
  {
    question: "Is a visit to Everest Base Camp part of a standard Nepal trip?",
    answer:
      "No — the standard Nepal itinerary covers Kathmandu, Pokhara and Chitwan without trekking into the high mountains. A trip into the Everest region itself is a separate, more demanding undertaking, and one we can build for travellers specifically interested in it.",
  },
  {
    question: "What's the best time to visit Nepal?",
    answer:
      "October to March gives the clearest skies and the best mountain views, and is generally the most comfortable window for sightseeing in Kathmandu and Pokhara. Spring (March to May) is also a good alternative if your dates don't allow the winter months.",
  },
];

export default function NepalDestinationsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Nepal",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 27.7172,
              longitude: 85.324,
              containsPlaces: nepalDestinations.map((d) => ({
                name: d.name,
                path: d.href,
              })),
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Aerial view of Boudhanath Stupa and Kathmandu city"
          breadcrumbs={breadcrumbs}
          eyebrow="Destinations"
          headline="Nepal, Six Ways"
          subheadline="Kathmandu's temple-filled valley, Pokhara's lakeside views, jungle safaris at Chitwan, and the world's highest mountain — every Nepal stop we plan private trips for."
        />

        <CityGrid
          eyebrow="Explore Nepal"
          heading="Nepal Destinations"
          cities={nepalDestinations}
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Nepal: Frequently Asked Questions"
          faqs={faqs}
          whatsappMessage="Hi! I have a question about planning a trip to Nepal."
          topDivider
        />

        <PlannedByLine />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Nepal Trip Awaits."
          headlineItalic="Which Stop Fits?"
          subtext="Not sure which destinations suit your dates and interests? Tell us what you have in mind and we'll help you build the itinerary."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a trip to Nepal."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}

