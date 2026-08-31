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
  goaAttractions,
  goaQuickFacts,
  goaGettingThere,
  goaHighlights,
  goaRelatedDestinations,
  goaFaqs,
} from "@/content/destinations/goa";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Goa | Beaches, Portuguese Heritage & Nightlife";
const description =
  "Plan a trip to Goa — North Goa's beach shacks and nightlife, South Goa's quieter resorts, and 450 years of Portuguese colonial heritage in Old Goa.";
const pagePath = "/destinations/goa";
const heroImage = "/images/destinations/Goa.webp";

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
  { name: "Goa", path: pagePath },
];

export default function GoaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(goaFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Goa",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 15.2993,
              longitude: 74.124,
              containsPlaces: goaAttractions.map((attraction) => ({
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
          imageAlt="Coastal beach and cliffs, North Goa"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Goa — Beaches, Heritage & a Different Pace"
          subheadline="Beach shacks and nightlife in the north, quieter upscale stays in the south, and 450 years of Portuguese heritage running through it all."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Goa with Colourful Indian Holidays."
        />

        <QuickFacts facts={goaQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading="Beaches, Heritage & a Different Pace" />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Goa" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Goa sits on India&apos;s west coast, and its 450 years as a Portuguese colony —
                  it wasn&apos;t incorporated into independent India until 1961 — give it a
                  character unlike anywhere else in the country. That history shows up in Old
                  Goa&apos;s UNESCO-listed churches and cathedrals, including the Basilica of Bom
                  Jesus, which houses the remains of St. Francis Xavier and remains an active
                  pilgrimage site alongside its role as a heritage landmark. It also shows up in a
                  distinctly Goan cuisine that blends Portuguese and Konkani influences — vindaloo
                  and xacuti among the dishes that taste genuinely different from anything else on
                  a typical India itinerary — and in an unhurried, beach-town rhythm that most
                  first-time visitors find refreshingly different from the pace of a heritage-
                  focused circuit.
                </p>
                <p>
                  The state effectively splits into two different holidays. North Goa — Anjuna,
                  Baga, Arambol — is livelier, known for beach shacks, water sports and Goa&apos;s
                  famous nightlife scene, drawing a younger, more social crowd. South Goa —
                  Palolem, Colva, Agonda — trades energy for quiet, with calmer beaches, cleaner
                  stretches of sand and a stronger concentration of upscale resorts suited to
                  travellers who want to properly switch off. A rented scooter is the most common
                  way to get around either coast once you&apos;re settled in, letting you move
                  between beaches, markets and restaurants at your own pace rather than relying on
                  taxis for every short trip. Most travellers use Goa to close out a longer India
                  trip, adding it as a beach extension after a more demanding circuit through
                  Rajasthan or the Golden Triangle, and many split their stay between both coasts
                  to get a genuine taste of each side of the state.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={goaAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={goaGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={goaHighlights}
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
                Dry, warm and free of monsoon rain, this window offers the most comfortable
                beach weather. The monsoon runs roughly June through September, when many beach
                shacks close and swimming conditions turn rough.
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
          cities={goaRelatedDestinations}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before booking — answered honestly."
          faqs={goaFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Goa with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Goa Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Goa with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
