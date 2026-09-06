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
  nagarkotAttractions,
  nagarkotQuickFacts,
  nagarkotGettingThere,
  nagarkotHighlights,
  nagarkotRelatedDestinations,
  nagarkotFaqs,
} from "@/content/destinations/nagarkot";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Nagarkot | Sunrise Views Over the Himalayas Near Kathmandu";
const description =
  "Plan a trip to Nagarkot — sunrise and sunset Himalayan panoramas, easy ridge hikes to Changu Narayan and Dhulikhel, less than two hours from Kathmandu.";
const pagePath = "/destinations/nagarkot";
const heroImage = "/images/destinations/nagarkot-clouds-valley-view.webp";

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
  { name: "Nagarkot", path: pagePath },
];

export default function NagarkotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(nagarkotFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Nagarkot",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 27.7172,
              longitude: 85.5202,
              containsPlaces: nagarkotAttractions.map((attraction) => ({
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
          imageAlt="Clouds rolling through the valley below a Nagarkot ridge viewpoint"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Nagarkot — Sunrise Views Over the Himalayas"
          subheadline="The widest Himalayan panorama within easy reach of Kathmandu — an easy overnight stop for sunrise and sunset views, less than two hours from the capital."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Nagarkot with Colourful Indian Holidays."
        />

        <QuickFacts facts={nagarkotQuickFacts} quoteButtonPageName="Nagarkot" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Sunrise Views Over the Himalayas" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Nagarkot sits on the eastern rim of the Kathmandu Valley, a ridge-top town that
                  exists almost entirely for its view. On a clear morning, the panorama stretches
                  from the Langtang range in the north to a distant glimpse of Everest itself,
                  making it the widest Himalayan outlook reachable within a couple of hours of the
                  capital — no trek, permit or multi-day commitment required. Most visitors drive
                  up in the afternoon, settle into a ridge-facing hotel, and split their time
                  between a sunset and the following sunrise from the Nagarkot View Tower, the
                  highest point along the ridge.
                </p>
                <p>
                  Beyond the viewpoint itself, Nagarkot is also the starting point for two
                  well-established hiking routes: a gentle half-day descent through pine forest and
                  terraced farmland to Changu Narayan, a UNESCO-listed temple regarded as Nepal&apos;s
                  oldest Hindu shrine, and a longer full-day ridge walk to the neighbouring hill
                  town of Dhulikhel. Neither requires trekking gear or prior experience, which
                  makes Nagarkot an easy way to add a genuine hill-country change of pace to a
                  Kathmandu-based itinerary without extending the trip by more than a single night.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={nagarkotAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={nagarkotGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={nagarkotHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October–December & March–April are Best"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                These windows give the clearest skies, with the post-monsoon months of October and
                November generally offering the most reliable Himalayan visibility of the year.
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
          cities={nagarkotRelatedDestinations}
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
          faqs={nagarkotFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Nagarkot with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Nagarkot Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Nagarkot with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
