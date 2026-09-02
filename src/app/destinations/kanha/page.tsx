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
import { fleetCards } from "@/content/car-rental-hub";
import {
  kanhaAttractions,
  kanhaQuickFacts,
  kanhaGettingThere,
  kanhaHighlights,
  kanhaRelatedDestinations,
  kanhaFaqs,
} from "@/content/destinations/kanha";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Kanha National Park | Tiger Safaris in Central India";
const description =
  "Plan a trip to Kanha National Park — one of India's best-managed tiger reserves, and the landscape said to have inspired The Jungle Book.";
const pagePath = "/destinations/kanha";
const heroImage = "/images/destinations/kanha-tiger-safari.webp";

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
  { name: "Kanha", path: pagePath },
];

export default function KanhaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(kanhaFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Kanha National Park",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 22.3344,
              longitude: 80.6119,
              containsPlaces: kanhaAttractions.map((attraction) => ({
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
          imageAlt="A tiger in the grasslands of Kanha National Park"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Kanha — The Jungle Book's Real-World Setting"
          subheadline="Sal forests, open meadows and one of India's best-managed tiger reserves — the landscape said to have inspired Rudyard Kipling's The Jungle Book."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Kanha National Park with Colourful Indian Holidays."
        />

        <QuickFacts facts={kanhaQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading="The Jungle Book's Real-World Setting" />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Kanha" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Kanha National Park, in Madhya Pradesh, is one of India&apos;s largest and
                  best-managed tiger reserves, and its landscape is widely believed to have
                  inspired Rudyard Kipling&apos;s setting for The Jungle Book — sal forest giving
                  way to open grassland meadows, with bamboo groves adding a third distinct
                  terrain type rarely found together in a single reserve. That variety makes
                  safaris here feel genuinely different from drive to drive, rather than covering
                  the same landscape repeatedly.
                </p>
                <p>
                  Beyond tigers, Kanha is also a genuine conservation success story — the park is
                  credited with saving the hard-ground barasingha (swamp deer) from
                  near-extinction, and it&apos;s now found here in greater numbers than almost
                  anywhere else in India. Bamni Dadar, a raised plateau within the park, is known
                  for sunset sightings of gaur and barasingha against a dramatic backdrop, while
                  the on-site museum covers the park&apos;s ecology and conservation history in
                  more depth. Kanha is most commonly paired with Bandhavgarh or Pench as part of a
                  dedicated Central India wildlife circuit, distinct in character from
                  Rajasthan&apos;s desert-based Ranthambore.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={kanhaAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={kanhaGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={kanhaHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to June, Closed July–September"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                The park is open October through June, with the driest months (March to June)
                offering the best sightings as animals gather near remaining water sources. The
                park closes entirely during the monsoon, July through September.
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
          cities={kanhaRelatedDestinations}
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
          faqs={kanhaFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Kanha National Park with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Kanha Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Kanha National Park with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
