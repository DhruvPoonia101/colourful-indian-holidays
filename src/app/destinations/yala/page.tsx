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
  yalaAttractions,
  yalaQuickFacts,
  yalaGettingThere,
  yalaHighlights,
  yalaRelatedDestinations,
  yalaWhereToStay,
  yalaFaqs,
} from "@/content/destinations/yala";
import { sriLankaTourCards } from "@/content/sri-lanka-destinations-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Yala National Park | Leopard Safaris in Sri Lanka";
const description =
  "Plan a Yala safari — leopards, elephants, sloth bears and birdlife in Sri Lanka's most famous national park, with tips on timing and closures.";
const pagePath = "/destinations/yala";
const heroImage = "/images/destinations/yala-leopard.webp";

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
  { name: "Yala National Park", path: pagePath },
];

export default function YalaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(yalaFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Yala National Park",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 6.3725,
              longitude: 81.5185,
              containsPlaces: yalaAttractions.map((attraction) => ({
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
          imageAlt="A Sri Lankan leopard drinking at a waterhole"
          breadcrumbs={breadcrumbs}
          eyebrow="Sri Lanka Destination Guide"
          headline="Yala — Sri Lanka's Leopard Country"
          subheadline="Sri Lanka's best-known national park, with one of the highest densities of leopards anywhere, plus elephants, sloth bears, crocodiles and coastal lagoons."
          primaryHref="/tours/sri-lanka-tours"
          primaryLabel="View Sri Lanka Tours"
          whatsappMessage="Hi! I'd like to plan a trip to Yala National Park with Colourful Indian Holidays."
        />

        <QuickFacts facts={yalaQuickFacts} quoteButtonPageName="Yala National Park" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Sri Lanka's Leopard Country" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Yala National Park covers dry scrub, rocky outcrops, lagoons and beaches on Sri Lanka&apos;s south-east coast. It is the country&apos;s most visited park and one of the best places in the world to see leopards, which live here at unusually high density. Elephants, sloth bears, water buffalo, crocodiles, spotted deer and a long list of birds complete the picture.
                </p>
                <p>
                  Safaris run in open jeeps in the early morning and late afternoon, when animals are most active. Most visitors stay a night near Tissamaharama or the park edge, so they can do an afternoon drive on arrival and a dawn drive the next morning before heading to the south coast. Parts of the park can close for a few weeks in the dry season, usually around September and October: in 2026, Blocks 1 and 2 closed from 14 September to 16 October. We check dates when planning and use other blocks or Udawalawe if needed.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={yalaAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={yalaGettingThere}
        />

        <GettingThere
          eyebrow="Where to Stay"
          heading="Where to Stay in Yala National Park"
          items={yalaWhereToStay}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={yalaHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="February – July is Best"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                The dry months bring animals to the waterholes, which improves sightings. Parts of the park can close for a few weeks around September and October; in 2026 Blocks 1 and 2 closed from 14 September to 16 October. We confirm dates before you book.
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
          cities={yalaRelatedDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Ready-Made Routes"
          heading="Sri Lanka Tours That Include Yala National Park"
          cities={sriLankaTourCards.filter((tour) => tour.includes.includes("yala"))}
          topDivider
          showActions
        />

        <RelatedGuides guides={guidesFor(pagePath)} />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="The questions we hear most from travellers planning a trip to Yala National Park."
          faqs={yalaFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Yala National Park with Colourful Indian Holidays."
          topDivider
        />

        <PlannedByLine />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Yala National Park Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Yala National Park with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
