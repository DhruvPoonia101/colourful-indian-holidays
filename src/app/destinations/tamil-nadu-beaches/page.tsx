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
  tamilNaduBeachesAttractions,
  tamilNaduBeachesQuickFacts,
  tamilNaduBeachesGettingThere,
  tamilNaduBeachesHighlights,
  tamilNaduBeachesRelatedDestinations,
  tamilNaduBeachesFaqs,
} from "@/content/destinations/tamil-nadu-beaches";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Tamil Nadu Beaches | Mahabalipuram, Marina Beach & Kanyakumari";
const description =
  "Plan a Tamil Nadu coastal trip — the Mahabalipuram Shore Temple, Chennai's Marina Beach and Kanyakumari, where three seas meet.";
const pagePath = "/destinations/tamil-nadu-beaches";
const heroImage = "/images/destinations/tamil-nadu-beaches.webp";

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
  { name: "Tamil Nadu Beaches", path: pagePath },
];

export default function TamilNaduBeachesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(tamilNaduBeachesFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Tamil Nadu Beaches",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 12.9165,
              longitude: 80.1962,
              containsPlaces: tamilNaduBeachesAttractions.map((attraction) => ({
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
          imageAlt="Aerial view of the Tamil Nadu coastline with fishing boats"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Tamil Nadu Beaches — India's Southern Coastline"
          subheadline="From UNESCO-listed shore temples to India&apos;s longest urban beach, Tamil Nadu&apos;s coast pairs genuine history with the water."
          primaryHref="/packages/south-india-tours"
          primaryLabel="View South India Tours"
          whatsappMessage="Hi! I'd like to plan a trip to Tamil Nadu Beaches with Colourful Indian Holidays."
        />

        <QuickFacts facts={tamilNaduBeachesQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading="Tamil Nadu Beaches — India's Southern Coastline" />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Tamil Nadu Beaches" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>Tamil Nadu&apos;s coastline isn&apos;t a beach-resort destination in the Goa sense — it&apos;s a working coast, layered with centuries of maritime and temple history. Mahabalipuram&apos;s 7th-century Shore Temple sits directly on the sand, a UNESCO World Heritage Site that&apos;s still an active pilgrimage site as much as a monument.</p>
                <p>Most travellers add Tamil Nadu&apos;s coast as an extension to a wider South India itinerary rather than a standalone beach trip, combining Chennai&apos;s Marina Beach with a day trip to Mahabalipuram and, further south, Kanyakumari — the southernmost tip of mainland India, where the Bay of Bengal, Arabian Sea and Indian Ocean meet.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={tamilNaduBeachesAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={tamilNaduBeachesGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={tamilNaduBeachesHighlights}
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
                Cool, dry weather makes this the most comfortable season for the coast. March to June runs very hot and humid, while the July to October monsoon can bring heavy rain, particularly to the northeast coast.
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
          cities={tamilNaduBeachesRelatedDestinations}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before booking — answered honestly."
          faqs={tamilNaduBeachesFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Tamil Nadu Beaches with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Tamil Nadu Beaches Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Tamil Nadu Beaches with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
