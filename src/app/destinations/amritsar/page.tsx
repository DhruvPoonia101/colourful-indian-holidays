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
  amritsarAttractions,
  amritsarQuickFacts,
  amritsarGettingThere,
  amritsarHighlights,
  amritsarRelatedDestinations,
  amritsarFaqs,
} from "@/content/destinations/amritsar";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Amritsar | Golden Temple & Wagah Border Ceremony";
const description =
  "Plan a trip to Amritsar — the Golden Temple, Sikhism's holiest shrine, the daily Wagah Border ceremony, and Jallianwala Bagh's pivotal place in India's history.";
const pagePath = "/destinations/amritsar";
const heroImage = "/images/destinations/amritsar.webp";

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
  { name: "Amritsar", path: pagePath },
];

export default function AmritsarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(amritsarFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Amritsar",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 31.634,
              longitude: 74.8723,
              containsPlaces: amritsarAttractions.map((attraction) => ({
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
          imageAlt="The Golden Temple, Amritsar"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Amritsar — Sikhism's Spiritual Heart"
          subheadline="The gold-plated Harmandir Sahib, a daily border ceremony unlike anything else in India, and a city defined by Punjabi warmth and hospitality."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Amritsar with Colourful Indian Holidays."
        />

        <QuickFacts facts={amritsarQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading="Sikhism's Spiritual Heart" />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Amritsar" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  The Golden Temple, or Harmandir Sahib, is the reason most visitors come to
                  Amritsar, and it&apos;s hard to overstate how different the experience is from
                  visiting a typical monument. Its gold-plated sanctum sits at the centre of the
                  Amrit Sarovar, a sacred pool that gives the city its name, and the temple stays
                  open around the clock — prayers continuing through the night, pilgrims
                  circling the water, and a free community kitchen serving tens of thousands of
                  meals daily to anyone who comes, regardless of faith or background. It&apos;s
                  one of the few places on a typical India itinerary where the atmosphere itself,
                  rather than any single view or structure, is what visitors remember most.
                </p>
                <p>
                  A short walk away, Jallianwala Bagh adds real historical weight — a public
                  garden that was the site of the 1919 massacre now widely seen as a turning point
                  in India&apos;s independence movement. And each evening, the Wagah Border
                  ceremony, held at the India-Pakistan border a short drive from the city, draws
                  large, energetic crowds on both sides for a display of military pageantry
                  genuinely unlike anything else most international visitors will see in India.
                  Combined with Punjab&apos;s warm hospitality and distinct cuisine, Amritsar
                  works well as a focused 1 to 2 day stop, typically added onto a wider North
                  India or Golden Triangle itinerary.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={amritsarAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={amritsarGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={amritsarHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to March is the Best Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Cooler, more comfortable weather makes this the best window for visiting the
                Golden Temple and attending the outdoor Wagah Border ceremony. Summer brings
                intense heat that makes midday sightseeing genuinely uncomfortable.
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
          cities={amritsarRelatedDestinations}
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
          faqs={amritsarFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Amritsar with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Amritsar Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Amritsar with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
