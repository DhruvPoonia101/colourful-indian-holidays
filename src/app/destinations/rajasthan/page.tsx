import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { QuickFacts } from "@/components/destinations/QuickFacts";
import { GettingThere } from "@/components/destinations/GettingThere";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { MoreDestinationsList } from "@/components/destinations/MoreDestinationsList";
import { GetQuoteButton } from "@/components/shared/GetQuoteButton";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  rajasthanCities,
  rajasthanMoreDestinations,
  rajasthanQuickFacts,
  rajasthanGettingThere,
  rajasthanHighlights,
  rajasthanPopularTours,
  rajasthanRelatedDestinations,
  rajasthanFaqs,
} from "@/content/destinations/rajasthan";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Rajasthan Tour Packages for International Travellers | Forts, Palaces & Desert";
const description =
  "Plan a private Rajasthan tour across Jaipur, Udaipur, Jodhpur, Jaisalmer and Pushkar — heritage palace hotels, English-speaking guides, and custom itineraries for travellers from the USA, UK, Australia and beyond.";
const pagePath = "/destinations/rajasthan";
const heroImage = "/images/destinations/amber-fort-jaipur.webp";

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
        alt: "Amber Fort at sunset, Jaipur, Rajasthan",
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
  { name: "Rajasthan", path: pagePath },
];

export default function RajasthanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(rajasthanFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Rajasthan",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 26.9124,
              longitude: 75.7873,
              containsPlaces: rajasthanCities.map((city) => ({
                name: city.name,
                path: city.href,
              })),
            })
          ),
        }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Amber Fort at sunset, Jaipur, Rajasthan"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Rajasthan — Journeys Through the Land of Kings"
          subheadline="Sandstone forts, floating palaces and the open Thar Desert — Rajasthan is the single most requested region on every itinerary we build for first-time visitors to India."
          primaryHref="/packages/rajasthan-tours"
          primaryLabel="View Rajasthan Tour Packages"
          whatsappMessage="Hi! I'd like to plan a Rajasthan trip with Colourful Indian Holidays."
        />

        <QuickFacts facts={rajasthanQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading="India's Most Iconic Region, Built for a First Visit" />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Rajasthan" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Rajasthan is the state most foreign travellers picture when they imagine
                  India — turreted forts on desert ridgelines, lake palaces that seem to float,
                  and cities each painted a single defining colour. It is also, for most of our
                  clients, the anchor of their entire trip: the region every other destination
                  gets planned around, not the other way round.
                </p>
                <p>
                  What makes Rajasthan work so well for a first visit is the combination of
                  short driving distances between genuinely distinct cities, a deep bench of
                  heritage hotels actually converted from real palaces and forts, and a
                  well-worn circuit that still feels personal when it&apos;s run privately,
                  with your own guide and driver rather than a fixed coach tour.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="The Six Essentials"
          heading="Where to Go in Rajasthan"
          cities={rajasthanCities}
          topDivider
          showActions
        />

        <MoreDestinationsList
          destinations={rajasthanMoreDestinations}
          toggleLabel="Explore More of Rajasthan"
        />

        <CityGrid
          eyebrow="Popular Tours"
          heading="Popular Rajasthan Tours"
          cities={rajasthanPopularTours}
          showActions
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting to Rajasthan"
          items={rajasthanGettingThere}
        />

        <div className="pb-14 text-center sm:pb-20">
          <p className="text-sm text-ink-soft">
            Prefer to arrange your own vehicle?{" "}
            <Link
              href="/car-rental"
              className="font-semibold text-maroon underline-offset-4 hover:underline"
            >
              Browse our Rajasthan car rental fleet →
            </Link>
          </p>
        </div>

        <HighlightsStrip
          eyebrow="Why Rajasthan"
          heading="What Makes This Region Different"
          highlights={rajasthanHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to March is Rajasthan's Peak Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Cool, dry days make sightseeing and desert safaris comfortable across the whole
                state. April to June runs very hot, especially in Jaisalmer, while the July to
                September monsoon brings occasional rain, greener landscapes, and noticeably
                fewer crowds.
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
          cities={rajasthanRelatedDestinations}
          topDivider
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions About Rajasthan"
          intro="Everything international travellers ask before booking a Rajasthan trip — answered honestly."
          faqs={rajasthanFaqs}
          whatsappMessage="Hi! I have a question before booking my Rajasthan trip with Colourful Indian Holidays."
          topDivider
        />

        <div className="pb-14 text-center sm:pb-20">
          <p className="text-sm text-ink-soft">
            Want more tips before you go?{" "}
            <Link
              href="/travel-guide"
              className="font-semibold text-maroon underline-offset-4 hover:underline"
            >
              Read our Rajasthan Travel Guide →
            </Link>
          </p>
        </div>

        <JourneyCTA
          backgroundImage="/images/destinations/udaipur-lake-palace.webp"
          eyebrow="Start Your Journey"
          headline="Your Rajasthan Journey Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us which cities you'd like to see and how many days you have — we'll reply with a tailored Rajasthan itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a Rajasthan trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
