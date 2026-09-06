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
  paroAttractions,
  paroQuickFacts,
  paroGettingThere,
  paroHighlights,
  paroRelatedDestinations,
  paroFaqs,
} from "@/content/destinations/paro";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Paro | Home of the Tiger's Nest Monastery";
const description =
  "Plan a trip to Paro — the Tiger's Nest monastery, Rinpung Dzong and Bhutan's only international airport, set in a valley of terraced rice fields.";
const pagePath = "/destinations/paro";
const heroImage = "/images/destinations/paro-pack-horses-forest-trail.webp";

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
  { name: "Paro", path: pagePath },
];

export default function ParoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(paroFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Paro",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 27.4287,
              longitude: 89.4149,
              containsPlaces: paroAttractions.map((attraction) => ({
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
          imageAlt="Pack horses on the forest trail up to Paro Taktsang, strung with prayer flags"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Paro — Home of the Tiger's Nest"
          subheadline="Bhutan's only international airport and the setting for its single most iconic sight — a clifftop monastery 900 metres above the valley floor."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Paro with Colourful Indian Holidays."
        />

        <QuickFacts facts={paroQuickFacts} quoteButtonPageName="Paro" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Home of the Tiger's Nest" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Paro is, for almost every visitor, both the first and last place they see in
                  Bhutan — home to the country&apos;s only international airport, and one of the
                  most technically demanding approaches in commercial aviation, flown by only a
                  small number of specially certified pilots weaving between peaks over 5,500
                  metres high. The valley itself is wide and agricultural, terraced rice fields
                  and traditional farmhouses running right up to the airport fence, giving Paro a
                  rural character unusual for a country&apos;s main gateway. Rinpung Dzong, the
                  17th-century fortress-monastery above the town, and the National Museum housed
                  in its historic round watchtower, give a first grounding in Bhutanese history
                  and architecture before heading further inland.
                </p>
                <p>
                  But Paro&apos;s real draw sits on a cliff face above the valley: Paro Taktsang,
                  known worldwide as the Tiger&apos;s Nest, a monastery built directly into the
                  rock 900 metres above the valley floor. The hike up is steep but well-maintained,
                  taking most visitors 4 to 5 hours round trip, and remains the single most
                  photographed image of Bhutan anywhere in the world. Nearby, Kyichu Lhakhang adds
                  a further layer of history — a 7th-century temple that is among the oldest
                  continuously significant religious sites in the Himalayan region. Most Bhutan
                  itineraries begin here, continue on to Thimphu, Punakha or Gangtey, and return to
                  Paro to fly out.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={paroAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={paroGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={paroHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October–December & March–May are Best"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                These windows offer the clearest mountain views and the most comfortable
                temperatures for the Tiger&apos;s Nest hike, avoiding the summer monsoon and the
                coldest winter weeks.
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
          cities={paroRelatedDestinations}
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
          faqs={paroFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Paro with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Paro Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Paro with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
