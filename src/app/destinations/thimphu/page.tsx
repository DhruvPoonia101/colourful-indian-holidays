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
  thimphuAttractions,
  thimphuQuickFacts,
  thimphuGettingThere,
  thimphuHighlights,
  thimphuRelatedDestinations,
  thimphuFaqs,
} from "@/content/destinations/thimphu";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Thimphu | Bhutan's Capital, Without a Single Traffic Light";
const description =
  "Plan a trip to Thimphu — Tashichho Dzong, the Buddha Dordenma statue and the Motithang Takin Preserve in the only national capital in the world without traffic lights.";
const pagePath = "/destinations/thimphu";
const heroImage = "/images/destinations/thimphu-tashichho-dzong.webp";

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
  { name: "Thimphu", path: pagePath },
];

export default function ThimphuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(thimphuFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Thimphu",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 27.4712,
              longitude: 89.6339,
              containsPlaces: thimphuAttractions.map((attraction) => ({
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
          imageAlt="Tashichho Dzong's whitewashed walls and golden roofs against the hillside"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Thimphu — Bhutan's Capital"
          subheadline="The only national capital in the world without a single traffic light — a small, walkable city where dzongs, markets and monuments sit close together."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Thimphu with Colourful Indian Holidays."
        />

        <QuickFacts facts={thimphuQuickFacts} quoteButtonPageName="Thimphu" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Bhutan's Capital" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Thimphu holds a small but genuine distinction: it is the only national capital
                  anywhere in the world without a single traffic light, its main intersection
                  directed instead by a white-gloved traffic officer. That quirk says something
                  real about the city — compact, unhurried, and shaped by building codes that
                  require traditional Bhutanese architecture even on new construction. Tashichho
                  Dzong, the whitewashed fortress-monastery on the Wang Chhu river, anchors the
                  city both administratively and spiritually, housing the King&apos;s secretariat
                  alongside Bhutan&apos;s central monastic body under one roof — a pairing of
                  government and religion that&apos;s rare to see so directly combined.
                </p>
                <p>
                  Above the city, the 51-metre gilded Buddha Dordenma looks out over the valley,
                  its base containing over 100,000 smaller Buddha statues. Closer to street level,
                  the Memorial Chorten remains one of the city&apos;s most active religious sites,
                  circled daily by locals, while the riverside Weekend Market offers one of the
                  more genuine glimpses of everyday Bhutanese life available to visitors, as
                  farmers from across the valley sell produce, cheese and handicrafts. As the
                  closest major town to Paro Airport after Paro itself, Thimphu is where most
                  Bhutan itineraries begin before continuing on to Punakha and Gangtey.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={thimphuAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={thimphuGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={thimphuHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October–December & March–May are Best"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                These windows offer the clearest mountain views and the most comfortable
                temperatures, avoiding the summer monsoon and the coldest winter weeks.
              </p>
              <div className="mt-7 flex justify-center">
                <Button href="/best-time-to-visit-india" variant="gold">
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
          cities={thimphuRelatedDestinations}
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
          faqs={thimphuFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Thimphu with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Thimphu Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Thimphu with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
