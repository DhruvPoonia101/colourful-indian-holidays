import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { guidesFor } from "@/content/related-guides";
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
import { PlannedByLine } from "@/components/shared/PlannedByLine";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  ellaAttractions,
  ellaQuickFacts,
  ellaGettingThere,
  ellaHighlights,
  ellaRelatedDestinations,
  ellaWhereToStay,
  ellaFaqs,
} from "@/content/destinations/ella";
import { sriLankaTourCards } from "@/content/sri-lanka-destinations-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Ella | Nine Arch Bridge, Little Adam's Peak & Hill Train";
const description =
  "Plan a trip to Ella — the Nine Arch Bridge, Little Adam's Peak, Ravana Falls and the famous hill-country train ride through Sri Lanka's tea country.";
const pagePath = "/destinations/ella";
const heroImage = "/images/destinations/ella-nine-arch-bridge-train.webp";

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
  { name: "Sri Lanka", path: "/destinations/sri-lanka" },
  { name: "Ella", path: pagePath },
];

export default function EllaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(ellaFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Ella",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 6.8667,
              longitude: 81.0466,
              containsPlaces: ellaAttractions.map((attraction) => ({
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
          imageAlt="A blue train crossing the Nine Arch Bridge near Ella"
          breadcrumbs={breadcrumbs}
          eyebrow="Sri Lanka Destination Guide"
          headline="Ella — Hikes, Tea Hills & the Nine Arch Bridge"
          subheadline="A small village in a green gap in the hills, the end of Sri Lanka's most scenic train ride and a base for easy hikes with big views."
          primaryHref="/tours/sri-lanka-tours"
          primaryLabel="View Sri Lanka Tours"
          whatsappMessage="Hi! I'd like to plan a trip to Ella with Colourful Indian Holidays."
        />

        <QuickFacts facts={ellaQuickFacts} quoteButtonPageName="Ella" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Hikes, Tea Hills & the Nine Arch Bridge" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Ella is a small village at the end of the most scenic stretch of Sri Lanka&apos;s hill-country railway. It sits in a gap in the hills with views down to the lowlands, and it has become the island&apos;s favourite place to slow down for a day or two between the tea country and the south coast.
                </p>
                <p>
                  The main sights are short and easy. The Nine Arch Bridge, a stone railway viaduct from the British era, is best seen when a train crosses. Little Adam&apos;s Peak is a gentle climb of under an hour with wide views over tea estates, and Ravana Falls is a short drive down the road towards the coast. For a longer walk, the hike up Ella Rock takes most of a morning.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={ellaAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={ellaGettingThere}
        />

        <GettingThere
          eyebrow="Where to Stay"
          heading="Where to Stay in Ella"
          items={ellaWhereToStay}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={ellaHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="January – April is Best"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Ella is driest and clearest from January to April. It can be visited all year, but expect more cloud and afternoon showers from about May to September and again in October and November.
              </p>
              <div className="mt-7 flex justify-center">
                <Button href="/travel-guide/sri-lanka-visa-and-best-time-to-visit" variant="gold">
                  Sri Lanka Visa &amp; Best Time Guide
                  <FiArrowRight aria-hidden="true" className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Pair Your Trip"
          heading="Nearby & Related Destinations"
          cities={ellaRelatedDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Ready-Made Routes"
          heading="Sri Lanka Tours That Include Ella"
          cities={sriLankaTourCards.filter((tour) => tour.includes.includes("ella"))}
          topDivider
          showActions
        />

        <RelatedGuides guides={guidesFor(pagePath)} />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="The questions we hear most from travellers planning a trip to Ella."
          faqs={ellaFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Ella with Colourful Indian Holidays."
          topDivider
        />

        <PlannedByLine />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Ella Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Ella with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
