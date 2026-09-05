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
  kathmanduAttractions,
  kathmanduQuickFacts,
  kathmanduGettingThere,
  kathmanduHighlights,
  kathmanduRelatedDestinations,
  kathmanduFaqs,
} from "@/content/destinations/kathmandu";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Kathmandu | Nepal's Temple-Filled Capital";
const description =
  "Plan a trip to Kathmandu — Durbar Square, Swayambhunath, Boudhanath and Pashupatinath — the easiest international add-on to an India itinerary, a short flight from Delhi.";
const pagePath = "/destinations/kathmandu";
const heroImage = "/images/destinations/urs-festival-ajmer.webp";

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
  { name: "Kathmandu", path: pagePath },
];

export default function KathmanduPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(kathmanduFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Kathmandu",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 27.7172,
              longitude: 85.324,
              containsPlaces: kathmanduAttractions.map((attraction) => ({
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
          imageAlt="Photo coming soon — Kathmandu"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Kathmandu — Nepal's Temple-Filled Capital"
          subheadline="Seven UNESCO sites in one small valley, and the easiest international add-on to an India itinerary — a short flight from Delhi."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Kathmandu with Colourful Indian Holidays."
        />

        <QuickFacts facts={kathmanduQuickFacts} quoteButtonPageName="Kathmandu" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Nepal's Temple-Filled Capital" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Kathmandu sits in a wide Himalayan valley that has been continuously settled for
                  over a thousand years, and the density of heritage packed into that small area
                  is hard to overstate — the Kathmandu Valley alone holds seven UNESCO World
                  Heritage Sites, from royal palace squares to hilltop stupas. Durbar Square, once
                  the seat of Nepal&apos;s monarchy, was badly damaged in the devastating 2015
                  earthquake and has since been painstakingly restored, its wood-carved temples
                  and courtyards once again open to visitors. A short distance away, the whitewashed
                  dome of Swayambhunath — nicknamed the Monkey Temple for its resident troops of
                  macaques — looks out over the entire valley, its painted Buddha eyes visible from
                  well below the hill.
                </p>
                <p>
                  What makes Kathmandu distinctive is how closely Hinduism and Buddhism sit side
                  by side, sometimes sharing the very same courtyards. Boudhanath, one of the
                  largest stupas in the world, anchors a Tibetan Buddhist community that settled
                  here after 1959, its prayer-flag-strung base ringed by monasteries and pilgrims
                  walking slow clockwise circuits. Pashupatinath, on the other hand, is one of
                  Hinduism&apos;s holiest sites and remains an active cremation ground on the banks
                  of the Bagmati River — a solemn, unfiltered look at ritual life that few other
                  cities allow visitors to witness so directly. Most travellers base themselves in
                  Thamel, the tangle of narrow lanes packed with trekking shops and guesthouses,
                  and use Kathmandu as a short, easy add-on to a longer India trip rather than a
                  standalone destination requiring its own long-haul flight.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={kathmanduAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={kathmanduGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={kathmanduHighlights}
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
                These two windows offer the clearest mountain views and the most comfortable
                temperatures, avoiding the summer monsoon (June–September) and the coldest winter
                weeks (December–January).
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
          cities={kathmanduRelatedDestinations}
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
          faqs={kathmanduFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Kathmandu with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Kathmandu Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Kathmandu with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
