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
import { fleetCards } from "@/content/car-rental-hub";
import {
  sikkimAttractions,
  sikkimQuickFacts,
  sikkimGettingThere,
  sikkimHighlights,
  sikkimRelatedDestinations,
  sikkimFaqs,
} from "@/content/destinations/sikkim";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Sikkim | Gangtok, Tsomgo Lake & Himalayan Monasteries";
const description =
  "Plan a trip to Sikkim — Gangtok's Kanchenjunga views, the glacial Tsomgo Lake, and Rumtek Monastery, without Ladakh's altitude demands.";
const pagePath = "/destinations/sikkim";
const heroImage = "/images/destinations/sikkim-tathagata-tsal.webp";

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
  { name: "Sikkim", path: pagePath },
];

export default function SikkimPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(sikkimFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Sikkim",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 27.533,
              longitude: 88.5122,
              containsPlaces: sikkimAttractions.map((attraction) => ({
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
          imageAlt="The seated Buddha statue at Tathagata Tsal, Ravangla, Sikkim"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Sikkim — The Himalayas, Made Easy"
          subheadline="Gangtok's Kanchenjunga views, a glacial lake at 12,000 feet, and active Buddhist monasteries — genuine Himalayan scenery without Ladakh's altitude demands."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Sikkim with Colourful Indian Holidays."
        />

        <QuickFacts facts={sikkimQuickFacts} quoteButtonPageName="Sikkim" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="The Himalayas, Made Easy" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Sikkim sits tucked between Nepal, Tibet and Bhutan in India&apos;s far
                  northeast, and offers many of the same Himalayan rewards as Ladakh or Kashmir —
                  without the same demands on your trip. Gangtok, the capital, sits at a
                  comfortable 1,650 metres, framed by views of Kanchenjunga, the world&apos;s
                  third-highest peak, and centred around MG Marg, a pedestrian-only promenade of
                  cafés and shops that gives the city a genuinely relaxed, walkable centre rare
                  among Indian hill towns. India&apos;s first fully organic state, Sikkim also
                  consistently ranks among the country&apos;s cleanest and best-organised —
                  something visitors notice almost immediately.
                </p>
                <p>
                  Beyond Gangtok, Tsomgo Lake — a glacial lake at roughly 12,000 feet, often
                  paired with a visit to Nathu La Pass on the Indo-China border — sits alongside
                  a pair of striking modern monuments: the 130-foot seated Buddha at Tathagata
                  Tsal near Ravangla, and Samdruptse&apos;s 135-foot statue of Guru Padmasambhava
                  near Namchi, reached via a long ceremonial staircase lined with prayer wheels.
                  For travellers with extra time and the right permits, Gurudongmar Lake in the
                  far north — one of the highest lakes in the world, ringed by prayer flags and
                  snow-capped peaks — adds a genuinely remote extension few visitors make it to.
                  Given its compact size, Sikkim is realistically covered in 4 to 6 days, and
                  pairs naturally with Darjeeling given the shared Bagdogra gateway — together
                  forming one of the more rewarding Northeast India circuits for travellers who
                  want Himalayan scenery without Ladakh&apos;s altitude-driven planning
                  constraints.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={sikkimAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={sikkimGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={sikkimHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="March–June and October–December"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                These windows offer the clearest mountain views and most comfortable
                temperatures. The monsoon (July to September) brings heavy rain and occasional
                landslides that can disrupt mountain roads.
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
          cities={sikkimRelatedDestinations}
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
          faqs={sikkimFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Sikkim with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Sikkim Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Sikkim with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
