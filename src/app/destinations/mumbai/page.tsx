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
  mumbaiAttractions,
  mumbaiQuickFacts,
  mumbaiGettingThere,
  mumbaiHighlights,
  mumbaiRelatedDestinations,
  mumbaiFaqs,
} from "@/content/destinations/mumbai";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Mumbai | Gateway of India, Marine Drive & Bollywood";
const description =
  "Plan a trip to Mumbai — the Gateway of India, colonial-era architecture, Marine Drive's sweeping coastline, and India's financial and entertainment capital.";
const pagePath = "/destinations/mumbai";
const heroImage = "/images/destinations/Mumbai.webp";

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
  { name: "Mumbai", path: pagePath },
];

export default function MumbaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(mumbaiFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Mumbai",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 19.076,
              longitude: 72.8777,
              containsPlaces: mumbaiAttractions.map((attraction) => ({
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
          imageAlt="Chhatrapati Shivaji Maharaj Terminus, Mumbai"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Mumbai — India's City of Dreams"
          subheadline="Colonial-era architecture, a sweeping coastal skyline, and the energy of India's financial and entertainment capital, all in one dense, fast-moving city."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Mumbai with Colourful Indian Holidays."
        />

        <QuickFacts facts={mumbaiQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading="India's City of Dreams" />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Mumbai" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Mumbai is India&apos;s financial and entertainment capital, and it carries
                  itself accordingly — dense, fast-moving, and layered with history in a way that
                  rewards a couple of proper days rather than a rushed stopover. Chhatrapati
                  Shivaji Maharaj Terminus, a UNESCO World Heritage railway station completed in
                  1888, still handles thousands of commuters daily behind its ornate Victorian
                  Gothic facade, and the Gateway of India — built to commemorate King George
                  V&apos;s 1911 visit — remains the city&apos;s most photographed monument and the
                  departure point for boats to Elephanta Island&apos;s ancient rock-cut caves.
                  South Mumbai&apos;s wider streetscape carries this same colonial-era character
                  throughout, with Victorian Gothic and Art Deco buildings standing side by side
                  in a way few other Indian cities can match.
                </p>
                <p>
                  Beyond the monuments, Mumbai&apos;s character shows up in its rhythm — Marine
                  Drive&apos;s curved coastline, nicknamed the &quot;Queen&apos;s Necklace&quot;
                  for how its streetlights trace the bay after dark, the modern Bandra-Worli Sea
                  Link striking a sharp contrast against the older city, and a street food scene
                  built around vada pav and pav bhaji that stands alongside some of India&apos;s
                  most acclaimed fine dining. As the home of Bollywood, the city also carries a
                  cultural weight that extends well beyond its own borders, shaping Indian popular
                  culture nationally from its studios here. With strong international flight
                  connections, Mumbai works well as either a dedicated 2 to 3 day stop or a
                  practical gateway before continuing on to Goa, Kerala or a wider India
                  itinerary.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={mumbaiAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={mumbaiGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={mumbaiHighlights}
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
                Cooler, drier weather makes this the most comfortable window for exploring on
                foot. Mumbai&apos;s monsoon (June to September) brings heavy rainfall and frequent
                flooding that can disrupt sightseeing plans.
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
          cities={mumbaiRelatedDestinations}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before booking — answered honestly."
          faqs={mumbaiFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Mumbai with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Mumbai Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Mumbai with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
