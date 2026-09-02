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
  penchAttractions,
  penchQuickFacts,
  penchGettingThere,
  penchHighlights,
  penchRelatedDestinations,
  penchFaqs,
} from "@/content/destinations/pench";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Pench National Park | The Original Jungle Book Setting";
const description =
  "Plan a trip to Pench National Park — widely considered the reserve that most directly inspired Rudyard Kipling's The Jungle Book, with a healthy and growing tiger population.";
const pagePath = "/destinations/pench";
const heroImage = "/images/destinations/pench-tiger-safari.webp";

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
  { name: "Pench", path: pagePath },
];

export default function PenchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(penchFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Pench National Park",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 21.7679,
              longitude: 79.2961,
              containsPlaces: penchAttractions.map((attraction) => ({
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
          imageAlt="A tiger at a waterhole in Pench National Park"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Pench — The Original Jungle Book Setting"
          subheadline="Teak and bamboo forests widely considered the specific landscape Rudyard Kipling had in mind, with a healthy and growing tiger population."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Pench National Park with Colourful Indian Holidays."
        />

        <QuickFacts facts={penchQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading="The Original Jungle Book Setting" />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Pench" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Pench National Park, straddling the Madhya Pradesh–Maharashtra border, is
                  widely regarded as the reserve most directly connected to Rudyard
                  Kipling&apos;s The Jungle Book — its teak and bamboo forests, and the Pench
                  River running through the heart of the park, closely mirror the landscape and
                  geography Kipling described. That connection gives a safari here a genuine
                  literary dimension, though the appeal stands on its own regardless: Pench has
                  seen consistent tiger population growth in recent years, making it an
                  increasingly reliable reserve for sightings rather than simply a name with
                  historical resonance.
                </p>
                <p>
                  Beyond tigers, the park supports a genuinely varied range of wildlife —
                  leopards, wild dogs (dhole), sloth bears and over 285 recorded bird species —
                  appealing to travellers with broader wildlife interests, not tigers alone.
                  Pench also sees noticeably fewer visitors than Bandhavgarh or Ranthambore,
                  and its buffer zones around Sillari Gate offer an even quieter alternative to
                  the core safari routes. Most itineraries pair Pench with Kanha, given their
                  shared Kipling connection and manageable road distance, forming a dedicated
                  Central India wildlife circuit distinct from Rajasthan&apos;s desert-based
                  Ranthambore.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={penchAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={penchGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={penchHighlights}
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
          cities={penchRelatedDestinations}
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
          faqs={penchFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Pench National Park with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Pench Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Pench National Park with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
