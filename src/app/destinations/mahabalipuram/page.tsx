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
  mahabalipuramAttractions,
  mahabalipuramQuickFacts,
  mahabalipuramGettingThere,
  mahabalipuramHighlights,
  mahabalipuramRelatedDestinations,
  mahabalipuramFaqs,
} from "@/content/destinations/mahabalipuram";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Mahabalipuram | Shore Temple & Rock-Cut Monuments";
const description =
  "Plan a trip to Mahabalipuram — the UNESCO-listed Shore Temple, the Five Rathas, and Arjuna's Penance, an easy day trip from Chennai.";
const pagePath = "/destinations/mahabalipuram";
const heroImage = "/images/destinations/chennai.webp";

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
  { name: "Mahabalipuram", path: pagePath },
];

export default function MahabalipuramPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(mahabalipuramFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Mahabalipuram",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 12.6269,
              longitude: 80.1927,
              containsPlaces: mahabalipuramAttractions.map((attraction) => ({
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
          imageAlt="The Shore Temple, Mahabalipuram"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Mahabalipuram — Stone Carved by the Sea"
          subheadline="A UNESCO World Heritage site of rock-cut temples and monuments, carved directly from granite outcrops on the edge of the Bay of Bengal."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Mahabalipuram with Colourful Indian Holidays."
        />

        <QuickFacts facts={mahabalipuramQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading="Stone Carved by the Sea" />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Mahabalipuram" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Mahabalipuram, a short drive south of Chennai along the coast, is one of South
                  India&apos;s most significant historical sites — a collection of 7th-century
                  monuments carved by Pallava dynasty sculptors, many cut directly into existing
                  granite outcrops rather than built from quarried and transported stone. The
                  Shore Temple, standing right at the edge of the Bay of Bengal, is the most
                  photographed of the group, its silhouette against the water making it one of
                  the more striking temple settings anywhere in India. Together with the
                  surrounding monuments, it forms a UNESCO World Heritage Site recognised for its
                  significance to Dravidian architecture.
                </p>
                <p>
                  Beyond the Shore Temple, the Five Rathas — five monolithic temples, each carved
                  from a single block of stone and shaped like a ceremonial chariot — showcase
                  distinct architectural styles side by side, while Arjuna&apos;s Penance, an
                  enormous open-air rock relief depicting scenes from Hindu mythology, ranks
                  among the largest carvings of its kind anywhere in the world. Given how close
                  it sits to Chennai, Mahabalipuram works well as an easy half-day or full-day
                  trip rather than a dedicated stop, and pairs naturally with a longer coastal
                  itinerary continuing on to Pondicherry.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={mahabalipuramAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={mahabalipuramGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={mahabalipuramHighlights}
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
                Cooler, more comfortable weather makes this the best window for exploring the
                monuments on foot. Summer brings intense heat and humidity, and the northeast
                monsoon (October to December) can bring periods of heavy rain.
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
          cities={mahabalipuramRelatedDestinations}
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
          faqs={mahabalipuramFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Mahabalipuram with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Mahabalipuram Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Mahabalipuram with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
