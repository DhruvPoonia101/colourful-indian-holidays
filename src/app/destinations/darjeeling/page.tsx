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
  darjeelingAttractions,
  darjeelingQuickFacts,
  darjeelingGettingThere,
  darjeelingHighlights,
  darjeelingRelatedDestinations,
  darjeelingFaqs,
} from "@/content/destinations/darjeeling";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Darjeeling | Tea Gardens, Toy Train & Kanchenjunga Views";
const description =
  "Plan a trip to Darjeeling — world-famous tea gardens, the UNESCO-listed Himalayan toy train, and sunrise views of Kanchenjunga from Tiger Hill.";
const pagePath = "/destinations/darjeeling";
const heroImage = "/images/destinations/Darjeeling.webp";

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
  { name: "Darjeeling", path: pagePath },
];

export default function DarjeelingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(darjeelingFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Darjeeling",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 27.041,
              longitude: 88.2663,
              containsPlaces: darjeelingAttractions.map((attraction) => ({
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
          imageAlt="Darjeeling hillside town wrapped in cloud"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Darjeeling — Tea, Cloud & the Himalayas"
          subheadline="Terraced tea gardens, a UNESCO-listed mountain railway, and sunrise views of Kanchenjunga — a cool-climate hill station with a character all its own."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Darjeeling with Colourful Indian Holidays."
        />

        <QuickFacts facts={darjeelingQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading="Tea, Cloud & the Himalayas" />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Darjeeling" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Darjeeling sits at over 2,000 metres in the Himalayan foothills of West Bengal,
                  its colourful houses and tea gardens spilling down terraced ridgelines that
                  disappear into cloud for much of the year. The tea itself is the town&apos;s
                  defining export — Darjeeling tea carries a Geographical Indication status,
                  meaning genuine Darjeeling tea can legally only come from this specific region,
                  much like Champagne — and touring a working tea estate, watching the leaves move
                  from picking to processing, is one of the more grounding, unhurried experiences
                  on a Northeast India itinerary. The town&apos;s Nepali, Bhutia and Lepcha
                  heritage also gives it a distinct culture and cuisine from the rest of West
                  Bengal, visible in everything from its architecture to its markets.
                </p>
                <p>
                  The town&apos;s two other signature experiences both draw people well before
                  dawn. Tiger Hill offers a sunrise view of Kanchenjunga, the world&apos;s third-
                  highest peak, with Everest occasionally visible in the distance on a genuinely
                  clear morning — though cloud cover is common enough that we always give an
                  honest picture rather than a guarantee. The Darjeeling Himalayan Railway, a
                  UNESCO World Heritage narrow-gauge line completed in 1881, still climbs the same
                  steep mountain route on vintage steam and diesel locomotives, and remains one of
                  only a handful of railways worldwide to carry UNESCO recognition — a genuinely
                  memorable ride rather than simply a way to cover distance. Darjeeling pairs
                  naturally with Kaziranga or Sikkim for travellers building a wider Northeast
                  India and Himalayan foothills circuit, and its cool climate makes it a welcome
                  contrast for anyone coming from the heat of Rajasthan or the plains.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={darjeelingAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={darjeelingGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={darjeelingHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="March–May and October–December"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Spring and autumn offer the clearest skies for Kanchenjunga views and the most
                comfortable temperatures. Summer brings monsoon rain and frequent cloud cover,
                while winter is cold but often crisp and clear.
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
          cities={darjeelingRelatedDestinations}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before booking — answered honestly."
          faqs={darjeelingFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Darjeeling with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Darjeeling Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Darjeeling with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
