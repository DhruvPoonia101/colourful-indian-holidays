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
  kazirangaAttractions,
  kazirangaQuickFacts,
  kazirangaGettingThere,
  kazirangaHighlights,
  kazirangaRelatedDestinations,
  kazirangaFaqs,
} from "@/content/destinations/kaziranga";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Kaziranga National Park | One-Horned Rhino Safari, Assam";
const description =
  "Plan a Kaziranga safari — home to two-thirds of the world's one-horned rhinoceros population, on the Brahmaputra floodplain in Assam.";
const pagePath = "/destinations/kaziranga";
const heroImage = "/images/destinations/kaziranga.webp";

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
  { name: "Kaziranga", path: pagePath },
];

export default function KazirangaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(kazirangaFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Kaziranga",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 26.5775,
              longitude: 93.1714,
              containsPlaces: kazirangaAttractions.map((attraction) => ({
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
          imageAlt="One-horned rhino and safari jeeps at Kaziranga National Park"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Kaziranga — Home to the Great One-Horned Rhino"
          subheadline="A UNESCO World Heritage Site on the Brahmaputra floodplain, home to two-thirds of the world&apos;s one-horned rhinoceros population."
          primaryHref="/packages/wildlife-tours"
          primaryLabel="View Wildlife Safari Tours"
          whatsappMessage="Hi! I'd like to plan a trip to Kaziranga with Colourful Indian Holidays."
        />

        <QuickFacts facts={kazirangaQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading="Kaziranga — Home to the Great One-Horned Rhino" />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Kaziranga" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>Kaziranga National Park, in the northeastern state of Assam, is genuinely unlike any other wildlife destination in India — a UNESCO World Heritage Site built around the Brahmaputra River&apos;s floodplain, and home to roughly two-thirds of the world&apos;s entire population of the great one-horned rhinoceros.</p>
                <p>The park&apos;s safaris come in two distinct forms — jeep safaris covering more ground, and elephant-back safaris that move quietly enough through the tall grassland to get remarkably close to rhinos grazing in the open. Kaziranga is also a tiger reserve, though the rhino is unquestionably the park&apos;s signature sight.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={kazirangaAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={kazirangaGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={kazirangaHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="November to April is the Best Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                The park is closed during the June to September monsoon, when the Brahmaputra floods much of the reserve. November to April offers the best safari conditions, with December to February being coolest.
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
          cities={kazirangaRelatedDestinations}
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
          faqs={kazirangaFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Kaziranga with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Kaziranga Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Kaziranga with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
