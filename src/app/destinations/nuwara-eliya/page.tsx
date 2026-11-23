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
  nuwaraEliyaAttractions,
  nuwaraEliyaQuickFacts,
  nuwaraEliyaGettingThere,
  nuwaraEliyaHighlights,
  nuwaraEliyaRelatedDestinations,
  nuwaraEliyaWhereToStay,
  nuwaraEliyaFaqs,
} from "@/content/destinations/nuwara-eliya";
import { sriLankaTourCards } from "@/content/sri-lanka-destinations-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Nuwara Eliya | Tea Country, Horton Plains & Little England";
const description =
  "Plan a trip to Nuwara Eliya — tea estates and factory visits, Gregory Lake, Horton Plains and World's End in Sri Lanka's cool hill country.";
const pagePath = "/destinations/nuwara-eliya";
const heroImage = "/images/destinations/nuwara-eliya-tea-plantation.webp";

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
  { name: "Nuwara Eliya", path: pagePath },
];

export default function NuwaraEliyaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(nuwaraEliyaFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Nuwara Eliya",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 6.9497,
              longitude: 80.7891,
              containsPlaces: nuwaraEliyaAttractions.map((attraction) => ({
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
          imageAlt="Tea estates covering the hills near Nuwara Eliya"
          breadcrumbs={breadcrumbs}
          eyebrow="Sri Lanka Destination Guide"
          headline="Nuwara Eliya — Sri Lanka's Tea Country"
          subheadline="A cool hill town at around 1,900 metres, surrounded by tea estates, with colonial-era buildings and the walking trails of Horton Plains nearby."
          primaryHref="/tours/sri-lanka-tours"
          primaryLabel="View Sri Lanka Tours"
          whatsappMessage="Hi! I'd like to plan a trip to Nuwara Eliya with Colourful Indian Holidays."
        />

        <QuickFacts facts={nuwaraEliyaQuickFacts} quoteButtonPageName="Nuwara Eliya" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Sri Lanka's Tea Country" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Nuwara Eliya sits high in Sri Lanka&apos;s central hills, at around 1,900 metres, and its cool climate drew British planters in the 19th century. They left behind red-brick buildings, a golf course, a racecourse and rose gardens, which is why the town is still nicknamed Little England. Around it, some of the island&apos;s best-known tea estates cover the hills in neat green rows.
                </p>
                <p>
                  Most visitors come for the tea: a factory visit to see how leaves become black tea, a tasting, and time on the estates. Early risers can drive to Horton Plains National Park for the walk to World&apos;s End, a sheer escarpment with views far over the lowlands on a clear morning. Horton Plains is part of the Central Highlands of Sri Lanka, listed by UNESCO in 2010. From here, the train continues to Ella through some of the most scenic tea country on the line.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={nuwaraEliyaAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={nuwaraEliyaGettingThere}
        />

        <GettingThere
          eyebrow="Where to Stay"
          heading="Where to Stay in Nuwara Eliya"
          items={nuwaraEliyaWhereToStay}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={nuwaraEliyaHighlights}
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
                The hill country is driest from January to April, with clear mornings for Horton Plains. Rain is heavier from about May to September on the western slopes and again around October and November. Bring a warm layer in any month.
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
          cities={nuwaraEliyaRelatedDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Ready-Made Routes"
          heading="Sri Lanka Tours That Include Nuwara Eliya"
          cities={sriLankaTourCards.filter((tour) => tour.includes.includes("nuwara-eliya"))}
          topDivider
          showActions
        />

        <RelatedGuides guides={guidesFor(pagePath)} />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="The questions we hear most from travellers planning a trip to Nuwara Eliya."
          faqs={nuwaraEliyaFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Nuwara Eliya with Colourful Indian Holidays."
          topDivider
        />

        <PlannedByLine />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Nuwara Eliya Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Nuwara Eliya with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
