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
  pondicherryAttractions,
  pondicherryQuickFacts,
  pondicherryGettingThere,
  pondicherryHighlights,
  pondicherryRelatedDestinations,
  pondicherryFaqs,
} from "@/content/destinations/pondicherry";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Pondicherry | French Quarter, Promenade & Auroville";
const description =
  "Plan a trip to Pondicherry — the colonial French Quarter, the seafront Promenade, and the experimental township of Auroville.";
const pagePath = "/destinations/pondicherry";
const heroImage = "/images/destinations/pondicherry-beach.webp";

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
  { name: "Pondicherry", path: pagePath },
];

export default function PondicherryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(pondicherryFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Pondicherry",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 11.9416,
              longitude: 79.8083,
              containsPlaces: pondicherryAttractions.map((attraction) => ({
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
          imageAlt="Rocky seafront promenade, Pondicherry"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Pondicherry — A French Corner of South India"
          subheadline="Mustard-yellow colonial villas, a boulder-lined seafront promenade, and a noticeably slower pace — a genuinely different side of Tamil Nadu."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Pondicherry with Colourful Indian Holidays."
        />

        <QuickFacts facts={pondicherryQuickFacts} quoteButtonPageName="Pondicherry" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="A French Corner of South India" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Pondicherry remained a French colony until 1954, well after most of India had
                  already gained independence from Britain, and that later, distinct colonial
                  history is still visible everywhere in its French Quarter — mustard-yellow and
                  white villas, church facades, and street signs still lettered in both French
                  and Tamil. The boulder-lined Promenade running along the seafront is closed to
                  traffic each evening, drawing locals and visitors alike for a walk at sunrise or
                  sunset, and the town&apos;s café culture gives it a noticeably slower, more
                  European pace than most Indian cities on a typical itinerary.
                </p>
                <p>
                  A short drive away, Auroville adds a genuinely unusual dimension to a
                  Pondicherry visit — an experimental international township founded in 1968
                  around the golden geodesic Matrimandir, built on ideals of collective living
                  beyond nationality or religion. Between the French Quarter&apos;s architecture,
                  the Promenade&apos;s slower rhythm, and Auroville&apos;s distinct philosophy,
                  Pondicherry offers a real change of register for travellers who&apos;ve already
                  spent time in Chennai or Madurai&apos;s more traditional South Indian character,
                  and pairs naturally with both as part of a wider Tamil Nadu coastal circuit.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={pondicherryAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={pondicherryGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={pondicherryHighlights}
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
                Cooler, more comfortable weather makes this the best window for walking the
                Promenade and exploring the French Quarter. Summer brings intense heat and
                humidity, and the northeast monsoon (October to December) can bring periods of
                heavy rain.
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
          cities={pondicherryRelatedDestinations}
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
          faqs={pondicherryFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Pondicherry with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Pondicherry Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Pondicherry with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
