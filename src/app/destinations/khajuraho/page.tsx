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
  khajurahoAttractions,
  khajurahoQuickFacts,
  khajurahoGettingThere,
  khajurahoHighlights,
  khajurahoRelatedDestinations,
  khajurahoFaqs,
} from "@/content/destinations/khajuraho";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Khajuraho | UNESCO Temple Sculpture in Central India";
const description =
  "Plan a trip to Khajuraho — the UNESCO-listed temples of the Chandela dynasty, famous for some of the most intricately carved sculpture anywhere in India.";
const pagePath = "/destinations/khajuraho";
const heroImage = "/images/destinations/khajuraho-kandariya-mahadeva.webp";

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
  { name: "Khajuraho", path: pagePath },
];

export default function KhajurahoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(khajurahoFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Khajuraho",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 24.8318,
              longitude: 79.9199,
              containsPlaces: khajurahoAttractions.map((attraction) => ({
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
          imageAlt="Kandariya Mahadeva Temple at sunset, Khajuraho"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Khajuraho — Central India's Sculpted Masterpiece"
          subheadline="A UNESCO World Heritage temple complex built by the Chandela dynasty, famous for some of the most intricately carved stone sculpture anywhere in India."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Khajuraho with Colourful Indian Holidays."
        />

        <QuickFacts facts={khajurahoQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading="Central India's Sculpted Masterpiece" />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Khajuraho" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Khajuraho sits in the heart of Madhya Pradesh, and its temple complex — built
                  by the Chandela dynasty between roughly 950 and 1050 CE — is widely considered
                  one of the finest surviving examples of medieval Indian temple architecture
                  anywhere in the country. What sets it apart isn&apos;t just the architecture
                  itself, but the sheer density and detail of the sculpture covering nearly every
                  surface — thousands of carved figures depicting deities, celestial beings,
                  musicians, warriors and everyday life, executed with a precision that&apos;s
                  genuinely remarkable to see up close.
                </p>
                <p>
                  The Western Group holds the largest and best-preserved temples, including the
                  Kandariya Mahadeva Temple, Khajuraho&apos;s largest and most architecturally
                  accomplished structure, its tower rising in a dramatic series of ascending
                  peaks. The quieter Eastern and Southern Groups, home to a mix of Jain and Hindu
                  temples, see far fewer visitors and offer a more contemplative alternative for
                  travellers who want to explore beyond the main circuit. Recognised as a UNESCO
                  World Heritage Site, Khajuraho typically works as a 1 to 2 day stop connected by
                  direct flights to Delhi and Varanasi, making it a natural addition to a wider
                  North India itinerary rather than a standalone destination.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={khajurahoAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={khajurahoGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={khajurahoHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to March is the Best Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Cooler, more comfortable weather makes this the best window for exploring the
                temple complex on foot. Summer brings intense heat that makes midday sightseeing
                genuinely uncomfortable.
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
          cities={khajurahoRelatedDestinations}
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
          faqs={khajurahoFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Khajuraho with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Khajuraho Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Khajuraho with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
