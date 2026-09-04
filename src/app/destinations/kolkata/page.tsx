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
  kolkataAttractions,
  kolkataQuickFacts,
  kolkataGettingThere,
  kolkataHighlights,
  kolkataRelatedDestinations,
  kolkataFaqs,
} from "@/content/destinations/kolkata";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Kolkata | Victoria Memorial, Howrah Bridge & Bengali Culture";
const description =
  "Plan a trip to Kolkata — the colonial-era Victoria Memorial, the iconic Howrah Bridge, and a city that remains India's genuine centre of arts and literature.";
const pagePath = "/destinations/kolkata";
const heroImage = "/images/destinations/kolkata-howrah-bridge.webp";

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
  { name: "Kolkata", path: pagePath },
];

export default function KolkataPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(kolkataFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Kolkata",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 22.5726,
              longitude: 88.3639,
              containsPlaces: kolkataAttractions.map((attraction) => ({
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
          imageAlt="Howrah Bridge lit up at night, Kolkata"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Kolkata — India's Cultural Capital"
          subheadline="Grand colonial architecture, a genuine literary and artistic tradition, and Bengali cuisine that stands apart from anywhere else in India."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Kolkata with Colourful Indian Holidays."
        />

        <QuickFacts facts={kolkataQuickFacts} quoteButtonPageName="Kolkata" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="India's Cultural Capital" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Kolkata served as the capital of British India until 1911, and that history is
                  still written across the city&apos;s architecture — grand colonial buildings
                  standing alongside slowly crumbling, genuinely atmospheric mansions, nowhere
                  more evident than at the Victoria Memorial, a vast white marble monument
                  completed in 1921 and set within landscaped gardens. Howrah Bridge, one of the
                  busiest cantilever bridges in the world, adds a different kind of landmark
                  entirely — most striking at dawn or dusk, when the Hooghly River beneath it
                  fills with fishing boats and ferry traffic, while Vidyasagar Setu, a newer
                  cable-stayed crossing further south, offers a striking modern counterpoint.
                </p>
                <p>
                  What sets Kolkata apart from India&apos;s other major cities is how genuinely
                  active its cultural life remains, rather than existing purely as history.
                  The city is the last in India with an operational tram network, running since
                  1902, and riding one through the older neighbourhoods is a genuinely rare way
                  to experience Kolkata&apos;s pace — a legacy that sits alongside a real
                  intellectual and literary scene still centred on Nobel laureate Rabindranath
                  Tagore&apos;s legacy and a strong Bengali cinema tradition. A fish-forward
                  Bengali cuisine, sweets like rosogolla and sandesh, and — if your dates align —
                  the spectacular autumn Durga Puja festival round
                  out a city that works well either as a 2 to 3 day stop on its own or as a
                  natural gateway before continuing on to Darjeeling or Sikkim.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={kolkataAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={kolkataGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={kolkataHighlights}
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
                Cooler, more comfortable weather makes this the best window for exploring the
                city on foot. Summer brings intense heat and humidity, and the monsoon (June to
                September) brings heavy rainfall.
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
          cities={kolkataRelatedDestinations}
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
          faqs={kolkataFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Kolkata with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Kolkata Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Kolkata with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
