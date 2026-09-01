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
  srinagarKashmirAttractions,
  srinagarKashmirQuickFacts,
  srinagarKashmirGettingThere,
  srinagarKashmirHighlights,
  srinagarKashmirRelatedDestinations,
  srinagarKashmirFaqs,
} from "@/content/destinations/srinagar-kashmir";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Srinagar & Kashmir | Dal Lake, Mughal Gardens & Gulmarg";
const description =
  "Plan a trip to Srinagar & Kashmir — Dal Lake houseboats, Mughal-era gardens, and the alpine meadows of Gulmarg and Pahalgam.";
const pagePath = "/destinations/srinagar-kashmir";
const heroImage = "/images/destinations/Srinagar-3.webp";

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
  { name: "Srinagar & Kashmir", path: pagePath },
];

export default function SrinagarKashmirPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(srinagarKashmirFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Srinagar & Kashmir",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 34.0837,
              longitude: 74.7973,
              containsPlaces: srinagarKashmirAttractions.map((attraction) => ({
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
          imageAlt="Houseboats on Dal Lake with snow-capped mountains behind, Srinagar"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Srinagar & Kashmir — The Valley of Gardens and Lakes"
          subheadline="Houseboats on Dal Lake, Mughal-era gardens, and alpine meadows framed by the Himalayas — often called the 'Paradise on Earth' for good reason."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Srinagar & Kashmir with Colourful Indian Holidays."
        />

        <QuickFacts facts={srinagarKashmirQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading="The Valley of Gardens and Lakes" />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Srinagar & Kashmir" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Srinagar sits at the heart of the Kashmir Valley, built around Dal Lake and
                  framed by the Zabarwan mountains — a city defined by water, gardens, and a
                  distinctly Persian-influenced Mughal heritage that sets it apart visually from
                  almost anywhere else in North India. Where Rajasthan&apos;s forts and the Golden
                  Triangle&apos;s monuments are built from stone and sandstone, Kashmir is built
                  around water and green — houseboats reflected in still lake water at dawn,
                  terraced gardens climbing gently up toward the mountains, and willow trees lining
                  the shikara routes that locals still use for daily transport and floating
                  markets.
                </p>
                <p>
                  Spending a night aboard one of Srinagar&apos;s ornately carved houseboats is one
                  of the more memorable overnight experiences available anywhere in India — many
                  are genuinely comfortable, with proper bedrooms, dining rooms and staff who
                  prepare Kashmiri meals on board. By day, the Mughal gardens — Shalimar Bagh and
                  Nishat Bagh among them — were laid out specifically to take advantage of
                  Kashmir&apos;s cooler climate and mountain views, terraced and symmetrical in a
                  way that reflects centuries of continuous upkeep rather than restoration for
                  tourism.
                </p>
                <p>
                  Beyond the city, Kashmir&apos;s hill stations offer a genuinely different
                  register again. Gulmarg&apos;s high-altitude meadow, ringed by pine forest,
                  functions as a ski destination in winter and a green retreat the rest of the
                  year; Pahalgam and Sonamarg add river valleys and alpine scenery that feel closer
                  to the Swiss or Austrian Alps than to the plains and deserts most first-time
                  visitors associate with India. Local Kashmiri cuisine adds another dimension
                  entirely — a Wazwan feast, the traditional multi-course meal served at Kashmiri
                  celebrations, is built around slow-cooked meat dishes and saffron-infused rice
                  that taste distinctly different from anything further south in India. For
                  travellers who&apos;ve already spent time in Rajasthan&apos;s heat and density,
                  or the crowds of the Golden Triangle, Kashmir&apos;s pace and scenery come as a
                  genuine change of register rather than more of the same landscape in a different
                  city. It pairs naturally with Ladakh for travellers with more time, connected
                  directly by the seasonal Srinagar–Leh highway, or works well as a standalone
                  extension onto a wider North India itinerary.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={srinagarKashmirAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={srinagarKashmirGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={srinagarKashmirHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="April to October is the Best Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Spring brings tulip blooms and mild weather, while summer offers the most
                comfortable conditions for Gulmarg and Pahalgam. Winter transforms Gulmarg into
                a ski destination, but many other sites become harder to access under snow.
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
          cities={srinagarKashmirRelatedDestinations}
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
          faqs={srinagarKashmirFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Srinagar & Kashmir with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Kashmir Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Srinagar & Kashmir with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
