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
  delhiAttractions,
  delhiQuickFacts,
  delhiGettingThere,
  delhiHighlights,
  delhiRelatedDestinations,
  delhiFaqs,
} from "@/content/destinations/delhi";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Delhi Tour Packages for International Travellers | Gateway to India";
const description =
  "Plan a private Delhi tour — Red Fort, Qutub Minar, Humayun's Tomb and Old Delhi's bazaars, with an English-speaking guide and driver. The natural starting point for a Golden Triangle or Rajasthan trip.";
const pagePath = "/destinations/delhi";
const heroImage = "/images/destinations/delhi-india-gate.webp";

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
    images: [
      {
        url: `${SITE_URL}${heroImage}`,
        width: 1200,
        height: 630,
        alt: "India Gate at dusk, Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${SITE_NAME}`,
    description,
    images: [`${SITE_URL}${heroImage}`],
  },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Destinations", path: "/destinations" },
  { name: "Delhi", path: pagePath },
];

export default function DelhiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(delhiFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Delhi",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 28.6139,
              longitude: 77.209,
              containsPlaces: delhiAttractions.map((attraction) => ({
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
          imageAlt="India Gate at dusk, Delhi"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Delhi — India's Layered, Living Capital"
          subheadline="Mughal forts, colonial avenues and the busiest bazaars in North India — Delhi is where most international journeys through India begin."
          primaryHref="/packages/golden-triangle-tours"
          primaryLabel="View Golden Triangle Tours"
          whatsappMessage="Hi! I'd like to plan a Delhi trip with Colourful Indian Holidays."
        />

        <QuickFacts facts={delhiQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Overview"
                heading="Three Cities of Delhi, Layered Into One"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Delhi isn&apos;t one city so much as several, built one on top of another —
                  Mughal-era Old Delhi with its forts and mosques, colonial-era New Delhi with
                  its wide avenues and government buildings, and the fast-moving modern capital
                  that surrounds both. For most of our international guests, it&apos;s also the
                  first place they land in India, and the natural starting point for a wider
                  Golden Triangle or Rajasthan itinerary.
                </p>
                <p>
                  What makes Delhi worth two or three days on its own, rather than just an
                  overnight stop, is the sheer range packed into one city — Mughal monuments,
                  world-class museums, some of the best regional Indian food anywhere in the
                  country, and bazaars that have operated the same way for centuries, all
                  connected by an easy-to-use metro and, on our itineraries, your own private
                  guide and driver.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See in Delhi"
          cities={delhiAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting to Delhi"
          items={delhiGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Delhi"
          heading="What Makes This City Different"
          highlights={delhiHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to March is Delhi's Most Comfortable Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Cool, dry days make sightseeing comfortable across the city. April to June runs
                very hot, while November and December can bring heavy smog — worth knowing if
                you have respiratory sensitivities. October, early November, February and March
                tend to offer the best balance of comfortable weather and clearer air.
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
          cities={delhiRelatedDestinations}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions About Delhi"
          intro="Everything international travellers ask before booking a Delhi trip — answered honestly."
          faqs={delhiFaqs}
          whatsappMessage="Hi! I have a question before booking my Delhi trip with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage="/images/destinations/delhi-lotus-temple.webp"
          eyebrow="Start Your Journey"
          headline="Your Delhi Journey Awaits."
          headlineItalic="Where Will You Begin?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored Delhi itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a Delhi trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
