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
  gangteyAttractions,
  gangteyQuickFacts,
  gangteyGettingThere,
  gangteyHighlights,
  gangteyRelatedDestinations,
  gangteyFaqs,
} from "@/content/destinations/gangtey";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Gangtey | Bhutan's Valley of the Black-Necked Cranes";
const description =
  "Plan a trip to Gangtey — the glacial Phobjikha Valley, Gangtey Monastery and the rare black-necked cranes that winter here, the quietest stop on a Bhutan circuit.";
const pagePath = "/destinations/gangtey";
const heroImage = "/images/destinations/gangtey-monastery-cranes-valley.webp";

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
  { name: "Gangtey", path: pagePath },
];

export default function GangteyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(gangteyFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Gangtey",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 27.45,
              longitude: 90.15,
              containsPlaces: gangteyAttractions.map((attraction) => ({
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
          imageAlt="Gangtey Monastery above the misty Phobjikha Valley, with black-necked cranes in the foreground"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Gangtey — Valley of the Black-Necked Cranes"
          subheadline="Bhutan's only glacial valley, and a rare winter home for endangered black-necked cranes — the quietest, least-visited stop on a Bhutan circuit."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Gangtey with Colourful Indian Holidays."
        />

        <QuickFacts facts={gangteyQuickFacts} quoteButtonPageName="Gangtey" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Valley of the Black-Necked Cranes" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Gangtey sits above the Phobjikha Valley, a wide, U-shaped glacial valley of open
                  marshland that looks unlike anywhere else on a typical Bhutan itinerary — flat,
                  quiet, and ringed by forested hills rather than dominated by a single dzong or
                  monastery. Gangtey Monastery, a 17th-century Nyingma institution, sits on a ridge
                  above the valley floor and remains the area&apos;s spiritual centre, while the
                  gentle Gangtey Nature Trail gives visitors an easy, roughly 90-minute walk
                  through pine forest and small farming villages along the valley&apos;s edge.
                </p>
                <p>
                  What makes Phobjikha genuinely distinctive is what happens here every winter:
                  endangered black-necked cranes migrate down from the Tibetan Plateau to roost in
                  the valley, typically arriving from late October and staying through February.
                  The local community has organised its conservation efforts specifically around
                  protecting them — electricity cables in the valley are laid underground rather
                  than on poles, purely to keep the cranes&apos; flight paths clear, a small but
                  telling example of how seriously the area takes this responsibility. With no
                  airport and a noticeably smaller visitor footprint than Thimphu or Paro, Gangtey
                  makes a naturally quiet final stop on a longer Bhutan circuit.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={gangteyAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={gangteyGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={gangteyHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="November–February for the Cranes"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                This is when the black-necked cranes are reliably present in the valley, though
                the scenery and walking trails are worthwhile at other times of year too.
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
          cities={gangteyRelatedDestinations}
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
          faqs={gangteyFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Gangtey with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Gangtey Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Gangtey with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
