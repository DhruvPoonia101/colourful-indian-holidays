import type { Metadata } from "next";
import { FiArrowRight } from "react-icons/fi";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { QuickFacts } from "@/components/destinations/QuickFacts";
import { GettingThere } from "@/components/destinations/GettingThere";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  bandhavgarhAttractions,
  bandhavgarhQuickFacts,
  bandhavgarhGettingThere,
  bandhavgarhHighlights,
  bandhavgarhRelatedDestinations,
  bandhavgarhFaqs,
} from "@/content/destinations/bandhavgarh";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Bandhavgarh Tiger Safari | India's Highest Tiger Density";
const description =
  "Plan a Bandhavgarh tiger safari — India's highest tiger density, set around an ancient hilltop fort in Madhya Pradesh.";
const pagePath = "/destinations/bandhavgarh";
const heroImage = "/images/destinations/bandhavgarh.webp";

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
  { name: "Bandhavgarh", path: pagePath },
];

export default function BandhavgarhPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(bandhavgarhFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Bandhavgarh",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 23.7143,
              longitude: 80.9494,
              containsPlaces: bandhavgarhAttractions.map((attraction) => ({
                name: attraction.name,
                path: attraction.href,
              })),
            })
          ),
        }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Safari jeeps at Bandhavgarh Tiger Reserve"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Bandhavgarh — India's Highest Tiger Density"
          subheadline="The park with the highest concentration of tigers anywhere in India, set around an ancient hilltop fort in Madhya Pradesh."
          primaryHref="/packages/wildlife-tours"
          primaryLabel="View Wildlife Safari Tours"
          whatsappMessage="Hi! I'd like to plan a trip to Bandhavgarh with Colourful Indian Holidays."
        />

        <QuickFacts facts={bandhavgarhQuickFacts} quoteButtonPageName="Bandhavgarh" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Bandhavgarh — India's Highest Tiger Density" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>Bandhavgarh has the highest density of tigers of any national park in India, which translates directly into some of the best sighting odds anywhere in the country. The park is built around an ancient hilltop fort, with ruins and statues dating back centuries scattered through the core zone.</p>
                <p>Bandhavgarh also holds a specific place in tiger history — it&apos;s where the first white tiger was discovered in the wild in 1951, an animal that went on to found the white tiger bloodline seen in zoos worldwide today. Most travellers combine it with Khajuraho, a short flight or drive away.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={bandhavgarhAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={bandhavgarhGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={bandhavgarhHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to June is the Best Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                The park is open October through June and closed during the July to September monsoon. April to June, despite the heat, often produces the best sightings as tigers spend more time near water.
              </p>
              <div className="mt-7 flex justify-center">
                <Button href="/best-time-to-visit" variant="gold">
                  View the Full Travel Calendar
                  <FiArrowRight aria-hidden="true" className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Pair Your Trip"
          heading="Nearby & Related Destinations"
          cities={bandhavgarhRelatedDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Plan Your Trip"
          heading="Getting Around by Private Car"
          cities={fleetCards.slice(0, 3)}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before booking — answered honestly."
          faqs={bandhavgarhFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Bandhavgarh with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Bandhavgarh Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Bandhavgarh with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
