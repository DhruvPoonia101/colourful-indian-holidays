import type { Metadata } from "next";
import { FiArrowRight } from "react-icons/fi";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { QuickFacts } from "@/components/destinations/QuickFacts";
import { GettingThere } from "@/components/destinations/GettingThere";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { GetQuoteButton } from "@/components/shared/GetQuoteButton";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  lehLadakhAttractions,
  lehLadakhQuickFacts,
  lehLadakhGettingThere,
  lehLadakhHighlights,
  lehLadakhRelatedDestinations,
  lehLadakhFaqs,
} from "@/content/destinations/leh-ladakh";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Leh & Ladakh | Pangong Lake, Nubra Valley & Himalayan Passes";
const description =
  "Plan a trip to Leh & Ladakh — Pangong Lake, Nubra Valley, ancient Buddhist monasteries, and some of the world's highest motorable mountain passes.";
const pagePath = "/destinations/leh-ladakh";
const heroImage = "/images/destinations/Leh-4.webp";

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
  { name: "Leh & Ladakh", path: pagePath },
];

export default function LehLadakhPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(lehLadakhFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Leh & Ladakh",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 34.1526,
              longitude: 77.5771,
              containsPlaces: lehLadakhAttractions.map((attraction) => ({
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
          imageAlt="Motorbikes parked beside Pangong Lake, Ladakh"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Leh & Ladakh — India's High-Altitude Desert"
          subheadline="Turquoise lakes, sand dunes above 10,000 feet, and Buddhist monasteries older than most European cathedrals — Ladakh looks and feels like nowhere else in India."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Leh & Ladakh with Colourful Indian Holidays."
        />

        <QuickFacts facts={lehLadakhQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading="Leh & Ladakh — India's High-Altitude Desert" />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Leh & Ladakh" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Ladakh sits in India&apos;s far north, in the rain shadow of the Himalayas — a
                  high-altitude desert of bare mountains, glacial rivers and lakes that shift
                  between deep blue and turquoise through the day. Culturally and visually, it
                  has more in common with the Tibetan plateau than with the rest of India, shaped
                  by centuries of Buddhist tradition still very much alive in its monasteries
                  today. Where much of an India itinerary is defined by colour, density and
                  history layered on history, Ladakh is defined by scale and emptiness — vast open
                  valleys, distances that take real time to cross, and a silence that first-time
                  visitors consistently describe as one of the most striking parts of the trip.
                </p>
                <p>
                  Leh town, at roughly 3,500 metres, is the natural base for exploring the wider
                  region. Its old town and central market are framed by the ruins of the 17th
                  century Leh Palace, built for the Namgyal dynasty in a style that clearly echoes
                  Tibet&apos;s Potala Palace, and the surrounding hillsides are dotted with active
                  monasteries — Thiksey and Hemis among the most significant — where daily prayers
                  and rituals continue much as they have for centuries. From Leh, the region opens
                  out toward Pangong Lake, whose colour shifts through the day as light moves
                  across the water, and Nubra Valley, a cold desert of sand dunes and double-humped
                  Bactrian camels reached by crossing Khardung La, one of the highest motorable
                  passes in the world.
                </p>
                <p>
                  What makes Ladakh different from most of the rest of an India trip is the pace
                  it asks of you. Altitude means the itinerary has to build in genuine rest and
                  acclimatisation, not just sightseeing time — arriving in Leh and heading straight
                  out to Pangong or Khardung La the same day is neither comfortable nor advisable.
                  Travellers who give the region the time it needs tend to come away describing it
                  as the most memorable leg of their entire India itinerary, precisely because
                  nothing about it feels rushed or interchangeable with anywhere else in the
                  country. It rewards travellers looking for landscape and quiet over density of
                  sights, and pairs naturally with either Kashmir to the west or a wider Himalayan
                  itinerary for those with the time to properly explore this part of the country.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={lehLadakhAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={lehLadakhGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={lehLadakhHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="June to September is the Best Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Both the Manali–Leh and Srinagar–Leh highways are only open roughly late
                May/June through September, and this window also brings the most manageable
                daytime temperatures for exploring at altitude. Outside this period, road access
                closes and most high-altitude sites become inaccessible.
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
          cities={lehLadakhRelatedDestinations}
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
          faqs={lehLadakhFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Leh & Ladakh with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Leh & Ladakh Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Leh & Ladakh with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
