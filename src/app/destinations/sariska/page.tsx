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
  sariskaAttractions,
  sariskaQuickFacts,
  sariskaGettingThere,
  sariskaHighlights,
  sariskaRelatedDestinations,
  sariskaFaqs,
} from "@/content/destinations/sariska";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Sariska Tiger Safari | Rajasthan Wildlife Tours";
const description =
  "Plan a Sariska tiger safari — a conservation success story close to Jaipur and Delhi, with ancient temple ruins scattered through the park.";
const pagePath = "/destinations/sariska";
const heroImage = "/images/destinations/sariska.webp";

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
  { name: "Sariska", path: pagePath },
];

export default function SariskaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(sariskaFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Sariska",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 27.2951,
              longitude: 76.436,
              containsPlaces: sariskaAttractions.map((attraction) => ({
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
          imageAlt="Forest landscape at Sariska Tiger Reserve"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Sariska — Tiger Reserve on Rajasthan's Doorstep"
          subheadline="A tiger reintroduction success story set among ancient temple ruins, close enough to Jaipur and Delhi for an easy add-on."
          primaryHref="/packages/wildlife-tours"
          primaryLabel="View Wildlife Safari Tours"
          whatsappMessage="Hi! I'd like to plan a trip to Sariska with Colourful Indian Holidays."
        />

        <QuickFacts facts={sariskaQuickFacts} quoteButtonPageName="Sariska" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Sariska — Tiger Reserve on Rajasthan's Doorstep" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>Sariska Tiger Reserve made headlines in the mid-2000s when its entire tiger population was lost to poaching — and made headlines again when a careful reintroduction programme successfully brought tigers back. That recovery story is part of what makes a visit here worthwhile, alongside the park&apos;s genuine wildlife and the ancient temple ruins scattered through it.</p>
                <p>What makes Sariska especially practical is its location — close enough to both Jaipur and Delhi that it fits naturally into a Rajasthan itinerary as a single-day safari, rather than requiring a dedicated multi-night stay.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={sariskaAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={sariskaGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={sariskaHighlights}
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
                The park is open October through June and closed during the July to September monsoon. Winter (October to March) offers cooler safari conditions, while April to June&apos;s heat often brings animals closer to water sources.
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
          cities={sariskaRelatedDestinations}
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
          faqs={sariskaFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Sariska with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Sariska Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Sariska with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
