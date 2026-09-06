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
  everestRegionAttractions,
  everestRegionQuickFacts,
  everestRegionGettingThere,
  everestRegionHighlights,
  everestRegionRelatedDestinations,
  everestRegionFaqs,
} from "@/content/destinations/everest-region";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Everest Region | Mountain Flights & the Everest Base Camp Trek";
const description =
  "See Everest with or without trekking — a scenic mountain flight from Kathmandu, or the classic Everest Base Camp trek through Sherpa villages in Nepal's Khumbu region.";
const pagePath = "/destinations/everest-region";
const heroImage = "/images/destinations/everest-region-gokyo-lake.webp";

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
  { name: "Everest Region", path: pagePath },
];

export default function EverestRegionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(everestRegionFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Everest Region",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 27.9881,
              longitude: 86.925,
              containsPlaces: everestRegionAttractions.map((attraction) => ({
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
          imageAlt="Turquoise Gokyo Lake ringed by snow peaks in the Everest region"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Everest Region — See the World's Highest Peak"
          subheadline="A scenic flight for a morning, or a classic trek for two weeks — two very different ways to see Everest, both starting in Kathmandu."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to the Everest Region with Colourful Indian Holidays."
        />

        <QuickFacts facts={everestRegionQuickFacts} quoteButtonPageName="Everest Region" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="See the World's Highest Peak" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  The Everest region — known locally as the Khumbu — is home to the highest point
                  on Earth, and there are two genuinely different ways to experience it. Most of
                  our clients choose the Everest mountain flight: a roughly one-hour scenic flight
                  from Kathmandu that loops within view of Everest and its neighbouring peaks
                  before returning the same morning, with no trekking, permits or particular
                  fitness required. For travellers with the time and fitness for something more
                  serious, the Everest Base Camp trek is the best-known trekking route in the
                  world — a 12 to 14 day round trip from Lukla, climbing steadily through Sherpa
                  villages to the foot of the mountain itself.
                </p>
                <p>
                  Along the trek, Namche Bazaar serves as the region&apos;s main hub, a terraced
                  market town built into a natural amphitheatre where trekkers pause to
                  acclimatise, while Tengboche Monastery — the largest in the Khumbu — offers one
                  of the route&apos;s most photographed views, framed against Everest and Ama
                  Dablam. Most trekkers turn back at Kala Patthar, a viewpoint above base camp that
                  actually offers a better look at Everest&apos;s summit than base camp itself.
                  Whether by flight or on foot, this entire region sits within Sagarmatha National
                  Park, a UNESCO World Heritage Site, and is inseparable from the Sherpa culture
                  and mountaineering history that define it.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={everestRegionAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={everestRegionGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={everestRegionHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October–November & March–May are Best"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                These windows give the clearest mountain views and the most stable flying
                conditions, for both the scenic flight and the trek. The summer monsoon
                (June–September) brings poor visibility and a higher risk of flight delays.
              </p>
              <div className="mt-7 flex justify-center">
                <Button href="/best-time-to-visit-india" variant="gold">
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
          cities={everestRegionRelatedDestinations}
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
          faqs={everestRegionFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to the Everest Region with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Everest Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to the Everest Region with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
