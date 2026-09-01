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
  chennaiAttractions,
  chennaiQuickFacts,
  chennaiGettingThere,
  chennaiHighlights,
  chennaiRelatedDestinations,
  chennaiFaqs,
} from "@/content/destinations/chennai";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Chennai | Marina Beach, Mahabalipuram & Tamil Culture";
const description =
  "Plan a trip to Chennai — Marina Beach, the UNESCO rock-cut temples of Mahabalipuram, and South India's gateway to a wider Tamil Nadu itinerary.";
const pagePath = "/destinations/chennai";
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
  { name: "Chennai", path: pagePath },
];

export default function ChennaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(chennaiFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Chennai",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 13.0827,
              longitude: 80.2707,
              containsPlaces: chennaiAttractions.map((attraction) => ({
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
          imageAlt="Shore Temple, Mahabalipuram, near Chennai"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Chennai — Gateway to Tamil Nadu"
          subheadline="A sweeping urban beach, rock-cut UNESCO temples a short drive away, and South India's most practical starting point for a wider Tamil Nadu itinerary."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Chennai with Colourful Indian Holidays."
        />

        <QuickFacts facts={chennaiQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading="Gateway to Tamil Nadu" />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Chennai" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Chennai is South India&apos;s largest coastal city and, for most international
                  travellers, the practical starting point for a wider Tamil Nadu itinerary. Its
                  own character comes through in Marina Beach — one of the world&apos;s longest
                  urban beaches, stretching for several kilometres along the city&apos;s
                  coastline — and in a food scene built around dosas, idlis and filter coffee that
                  many consider among the most authentic South Indian cuisine anywhere, served in
                  traditional Udupi-style restaurants across the city. As a major international
                  airport hub with strong flight connectivity, Chennai also functions as a
                  practical entry or exit point for travellers building a longer South India
                  circuit rather than flying in and out of Delhi or Mumbai each time.
                </p>
                <p>
                  A short drive south, Mahabalipuram adds a genuinely significant historical
                  dimension: a UNESCO World Heritage Site where 7th-century Pallava dynasty
                  sculptors carved entire temples directly from solid granite outcrops, including
                  the Shore Temple standing right at the edge of the Bay of Bengal, alongside the
                  Five Rathas and the enormous Arjuna&apos;s Penance rock relief. Tamil language,
                  classical Carnatic music and Bharatanatyam dance all give the city a cultural
                  identity noticeably different from North India&apos;s more commonly visited
                  circuit, and Chennai works well as either a focused 2 to 3 day stop or a gateway
                  before continuing on to Madurai or Tamil Nadu&apos;s beaches.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={chennaiAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={chennaiGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={chennaiHighlights}
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
                city and Mahabalipuram on foot. Summer brings intense heat and humidity, and the
                northeast monsoon (October to December) can bring periods of heavy rain.
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
          cities={chennaiRelatedDestinations}
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
          faqs={chennaiFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Chennai with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Chennai Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Chennai with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
