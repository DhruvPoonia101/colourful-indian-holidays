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
  pokharaAttractions,
  pokharaQuickFacts,
  pokharaGettingThere,
  pokharaHighlights,
  pokharaRelatedDestinations,
  pokharaFaqs,
} from "@/content/destinations/pokhara";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Pokhara | Lakeside Views of the Annapurna Range";
const description =
  "Plan a trip to Pokhara — Phewa Lake, Sarangkot sunrise views, Davis Falls and paragliding over the Annapurna range — a short flight from Kathmandu.";
const pagePath = "/destinations/pokhara";
const heroImage = "/images/destinations/pokhara-valley-machapuchare-view.webp";

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
  { name: "Pokhara", path: pagePath },
];

export default function PokharaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(pokharaFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Pokhara",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 28.2096,
              longitude: 83.9856,
              containsPlaces: pokharaAttractions.map((attraction) => ({
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
          imageAlt="The green Pokhara valley with the Machapuchare peak rising behind it"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Pokhara — Lakeside Views of the Annapurna Range"
          subheadline="A calm lake, close mountain views and a slower pace — the natural second stop on a Nepal trip, a short flight from Kathmandu."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Pokhara with Colourful Indian Holidays."
        />

        <QuickFacts facts={pokharaQuickFacts} quoteButtonPageName="Pokhara" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Lakeside Views of the Annapurna Range" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Pokhara sits in a wide valley at the foot of the Annapurna range, built around
                  Phewa Lake, and offers something Kathmandu can&apos;t: close, unobstructed views
                  of the Himalayas without any trekking required. On a clear morning, the water
                  reflects the jagged outline of Machapuchare — the distinctive &ldquo;fishtail&rdquo;
                  peak considered sacred and, unusually, never officially summited — alongside the
                  wider Annapurna massif behind it. Most visitors head up to Sarangkot before dawn
                  for the valley&apos;s best sunrise viewpoint, then spend the rest of the day at a
                  slower pace: a stop at Davis Falls, where the water disappears underground into
                  the connected Gupteshwor Cave system just below it, or a tandem paraglide flight
                  launched from the hills above the lake.
                </p>
                <p>
                  Pokhara is also the starting point for two of Nepal&apos;s best-known treks, the
                  Annapurna Base Camp and Annapurna Circuit routes, which draws a steady stream of
                  trekkers through the city even if they don&apos;t plan to walk the trails
                  themselves. For travellers who want a taste of adventure without committing to
                  days on foot, the valley also offers paragliding launches with some of the best
                  tandem flying conditions in the world, alongside easier half-day boating and cave
                  visits. Reached by a short flight or a scenic drive from Kathmandu, Pokhara pairs
                  naturally with the capital as the second stop on most Nepal itineraries, trading
                  Kathmandu&apos;s temple-dense streets for open water and mountain air.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={pokharaAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={pokharaGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={pokharaHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October–November & March–April are Best"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                These two windows give the clearest mountain views, especially for sunrise from
                Sarangkot, while avoiding the summer monsoon (June–September) and the coldest,
                haziest winter weeks (December–January).
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
          cities={pokharaRelatedDestinations}
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
          faqs={pokharaFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Pokhara with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Pokhara Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Pokhara with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
