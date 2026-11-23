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
  colomboAttractions,
  colomboQuickFacts,
  colomboGettingThere,
  colomboHighlights,
  colomboRelatedDestinations,
  colomboWhereToStay,
  colomboFaqs,
} from "@/content/destinations/colombo";
import { sriLankaTourCards } from "@/content/sri-lanka-destinations-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Colombo | Sri Lanka's Capital, Temples & Sea Front";
const description =
  "Plan a stop in Colombo — Gangaramaya Temple, Galle Face Green, the Pettah markets and the colonial Fort district, Sri Lanka's gateway city.";
const pagePath = "/destinations/colombo";
const heroImage = "/images/destinations/colombo-galle-face-green-sunset.webp";

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
  { name: "Colombo", path: pagePath },
];

export default function ColomboPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(colomboFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Colombo",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 6.9271,
              longitude: 79.8612,
              containsPlaces: colomboAttractions.map((attraction) => ({
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
          imageAlt="Galle Face Green at sunset on the Colombo sea front"
          breadcrumbs={breadcrumbs}
          eyebrow="Sri Lanka Destination Guide"
          headline="Colombo — Sri Lanka's Gateway City"
          subheadline="Sri Lanka's commercial capital and arrival point: a sea-front promenade, a working Buddhist temple full of curiosities, and some of the island's busiest markets."
          primaryHref="/tours/sri-lanka-tours"
          primaryLabel="View Sri Lanka Tours"
          whatsappMessage="Hi! I'd like to plan a trip to Colombo with Colourful Indian Holidays."
        />

        <QuickFacts facts={colomboQuickFacts} quoteButtonPageName="Colombo" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Sri Lanka's Gateway City" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Colombo is where almost every Sri Lanka trip begins and ends. The international airport sits about 35 kilometres north of the city, so many travellers head straight out to the Cultural Triangle on arrival and save Colombo for the last day, when a half-day city tour fits neatly before an evening flight. It is a busy, modern commercial capital rather than a postcard city, but it rewards a few hours with a good guide.
                </p>
                <p>
                  The highlights are close together. Gangaramaya Temple mixes a working Buddhist temple with a museum of donated curiosities; Galle Face Green is the sea-front lawn where families gather at sunset; and the Pettah bazaar district, home to the red-and-white Jami Ul-Alfar Mosque, is the city at its most crowded and colourful. The old Fort district, with its colonial-era buildings, sits between them.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={colomboAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={colomboGettingThere}
        />

        <GettingThere
          eyebrow="Where to Stay"
          heading="Where to Stay in Colombo"
          items={colomboWhereToStay}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={colomboHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="December – March is Best"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                The south-west monsoon brings heavy rain to Colombo from about May to August, and October is usually wet across the island. December to March is the driest and sunniest window on the west coast.
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
          cities={colomboRelatedDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Ready-Made Routes"
          heading="Sri Lanka Tours That Include Colombo"
          cities={sriLankaTourCards.filter((tour) => tour.includes.includes("colombo"))}
          topDivider
          showActions
        />

        <RelatedGuides guides={guidesFor(pagePath)} />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="The questions we hear most from travellers planning a trip to Colombo."
          faqs={colomboFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Colombo with Colourful Indian Holidays."
          topDivider
        />

        <PlannedByLine />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Colombo Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Colombo with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
