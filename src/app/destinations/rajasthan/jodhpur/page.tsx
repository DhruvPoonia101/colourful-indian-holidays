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
  jodhpurAttractions,
  jodhpurQuickFacts,
  jodhpurGettingThere,
  jodhpurHighlights,
  jodhpurRelatedDestinations,
  jodhpurFaqs,
} from "@/content/destinations/jodhpur";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Jodhpur Tour Packages | The Blue City, Rajasthan";
const description =
  "Plan a private Jodhpur tour — Mehrangarh Fort, Jaswant Thada and the blue-washed old city, with an English-speaking guide and private driver.";
const pagePath = "/destinations/rajasthan/jodhpur";
const heroImage = "/images/destinations/mehrangarh-fort-jodhpur.webp";

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
        alt: "Mehrangarh Fort overlooking the blue city of Jodhpur",
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
  { name: "Rajasthan", path: "/destinations/rajasthan" },
  { name: "Jodhpur", path: pagePath },
];

export default function JodhpurPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(jodhpurFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Jodhpur",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 26.2389,
              longitude: 73.0243,
              containsPlaces: [
                { name: "Mehrangarh Fort", path: pagePath },
                { name: "Jaswant Thada", path: pagePath },
                { name: "Umaid Bhawan Palace", path: pagePath },
              ],
            })
          ),
        }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Mehrangarh Fort overlooking the blue city of Jodhpur"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Jodhpur — The Blue City"
          subheadline="One of India's largest and best-preserved forts, towering above a maze of indigo-washed old-town streets — the natural midpoint of a classic Rajasthan circuit."
          primaryHref="/packages/rajasthan-tours"
          primaryLabel="View Rajasthan Tours"
          whatsappMessage="Hi! I'd like to plan a Jodhpur trip with Colourful Indian Holidays."
        />

        <QuickFacts facts={jodhpurQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro
                eyebrow="Overview"
                heading="A Fort That Was Never Successfully Breached"
              />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Jodhpur" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Jodhpur is instantly recognisable for two things: Mehrangarh Fort, rising 400
                  feet above the city on a sheer rocky outcrop, and the indigo-washed houses of
                  the old town clustered beneath it. Founded in 1459, the fort&apos;s defensive record
                  is genuinely remarkable for a structure this old — it held through every siege
                  in its history.
                </p>
                <p>
                  Sitting almost exactly between Jaipur and Udaipur, Jodhpur naturally breaks up
                  the drive on a classic Rajasthan circuit, rather than requiring a special
                  detour — which is exactly why it&apos;s the most common middle stop on the route.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See in Jodhpur"
          cities={jodhpurAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting to Jodhpur"
          items={jodhpurGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Jodhpur"
          heading="What Makes This City Different"
          highlights={jodhpurHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to March is Jodhpur's Most Comfortable Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Comfortable daytime temperatures for walking the fort and old city run from
                October through March. Summer months bring intense desert heat that makes
                midday sightseeing uncomfortable.
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
          cities={jodhpurRelatedDestinations}
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
          heading="Common Questions About Jodhpur"
          intro="Everything international travellers ask before booking a Jodhpur trip — answered honestly."
          faqs={jodhpurFaqs}
          whatsappMessage="Hi! I have a question before booking my Jodhpur trip with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Jodhpur Journey Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and we'll build Jodhpur into your wider Rajasthan itinerary — usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a Jodhpur trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
