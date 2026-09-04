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
import { fleetCards } from "@/content/car-rental-hub";
import {
  gujaratAttractions,
  gujaratQuickFacts,
  gujaratGettingThere,
  gujaratHighlights,
  gujaratRelatedDestinations,
  gujaratFaqs,
} from "@/content/destinations/gujarat";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Gujarat | Rann of Kutch, Ahmedabad & Gir National Park";
const description =
  "Plan a trip to Gujarat — the White Rann of Kutch, UNESCO-listed Ahmedabad, and Gir National Park, home to the world's last wild Asiatic lions.";
const pagePath = "/destinations/gujarat";
const heroImage = "/images/destinations/kutch-mahotsav.webp";

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
  { name: "Gujarat", path: pagePath },
];

export default function GujaratPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(gujaratFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Gujarat",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 23.0225,
              longitude: 72.5714,
              containsPlaces: gujaratAttractions.map((attraction) => ({
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
          imageAlt="The Rann Utsav tent city at the White Rann of Kutch"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Gujarat — Desert, Lions & a UNESCO City"
          subheadline="A white salt desert under a full moon, the world's last wild Asiatic lions, and India's first UNESCO World Heritage City — a genuinely different side of West India."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Gujarat with Colourful Indian Holidays."
        />

        <QuickFacts facts={gujaratQuickFacts} quoteButtonPageName="Gujarat" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Desert, Lions & a UNESCO City" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Gujarat offers a genuinely different register from most standard India
                  itineraries, built around three things unavailable almost anywhere else in the
                  country. The White Rann of Kutch — a vast, flat salt desert stretching to the
                  horizon — hosts the annual Rann Utsav festival each winter, when a tent city
                  fills with visitors drawn by the landscape&apos;s striking glow under a full
                  moon. Ahmedabad, meanwhile, holds the distinction of being India&apos;s first
                  UNESCO World Heritage City, its old quarter a still-functioning maze of carved
                  wooden havelis and historic step-wells, with Mahatma Gandhi&apos;s Sabarmati
                  Ashram — his home for over a decade and the starting point of the 1930 Salt
                  March — sitting directly on the riverfront.
                </p>
                <p>
                  Further south, Gir National Park adds something genuinely unique on a global
                  scale: the world&apos;s only remaining wild population of Asiatic lions,
                  found nowhere else on the planet outside this one forest. Combined with
                  leopards and a varied bird population, Gir offers a wildlife encounter with no
                  real equivalent elsewhere. Given the distances involved between these three
                  anchors, a realistic Gujarat itinerary runs 5 to 7 days, and the state connects
                  naturally to a wider West India trip via Mumbai or north into Rajasthan for
                  travellers with two weeks or more.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={gujaratAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={gujaratGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={gujaratHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="November to February is the Best Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Cooler, more comfortable weather makes this the best window for the Rann of
                Kutch and Gir safaris alike — and it lines up with the Rann Utsav festival
                season. Summer brings intense heat, particularly in the desert regions.
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
          cities={gujaratRelatedDestinations}
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
          faqs={gujaratFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Gujarat with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Gujarat Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Gujarat with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
