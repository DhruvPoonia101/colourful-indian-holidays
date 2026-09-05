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
  chitwanAttractions,
  chitwanQuickFacts,
  chitwanGettingThere,
  chitwanHighlights,
  chitwanRelatedDestinations,
  chitwanFaqs,
} from "@/content/destinations/chitwan";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Chitwan National Park | Jungle Safaris & One-Horned Rhinos";
const description =
  "Plan a Chitwan safari — jeep and canoe safaris tracking one-horned rhinos and Bengal tigers, plus Tharu village culture, in Nepal's UNESCO-listed lowland jungle.";
const pagePath = "/destinations/chitwan";
const heroImage = "/images/destinations/chitwan-elephants-grassland.webp";

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
  { name: "Chitwan", path: pagePath },
];

export default function ChitwanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(chitwanFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Chitwan",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 27.5291,
              longitude: 84.3542,
              containsPlaces: chitwanAttractions.map((attraction) => ({
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
          imageAlt="Elephants and their mahouts crossing a stream in Chitwan's grassland"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Chitwan — Jungle Safaris & One-Horned Rhinos"
          subheadline="Sal forest, riverside grassland, and one of the last strongholds of the greater one-horned rhinoceros — a complete change of pace from Nepal's mountains and temples."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Chitwan with Colourful Indian Holidays."
        />

        <QuickFacts facts={chitwanQuickFacts} quoteButtonPageName="Chitwan" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Jungle Safaris & One-Horned Rhinos" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Chitwan National Park sits in Nepal&apos;s lowland Terai region, a world away
                  from the mountain views and temple squares most visitors associate with the
                  country. Dense sal forest gives way to tall elephant grass and the braided
                  channels of the Rapti and Narayani rivers, and it&apos;s here that the greater
                  one-horned rhinoceros — one of Asia&apos;s great conservation success stories —
                  can still be reliably spotted from a jeep or a quiet dugout canoe. The park is
                  also a growing stronghold for the Bengal tiger, alongside gharial and mugger
                  crocodiles basking along the riverbanks and an exceptional range of birdlife,
                  which is what draws serious birdwatchers to the nearby Bishazari Tal wetlands as
                  much as the main safari routes.
                </p>
                <p>
                  Sauraha, the small town that serves as the park&apos;s main gateway, is built
                  around this rhythm of jeep safaris, canoe rides and quiet mornings watching the
                  Rapti River. It&apos;s also the best place to spend time with the Tharu
                  community, the indigenous people native to this part of Nepal, whose villages,
                  distinctive mud-and-thatch architecture and evening stick-dance performances
                  offer a genuinely different cultural thread from the Hindu and Buddhist heritage
                  further north. Reached by a short flight or a scenic drive from either Kathmandu
                  or Pokhara, Chitwan works best as the third stop on a Nepal itinerary — the
                  wildlife counterpart to the temples and the mountain views that come before it.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={chitwanAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={chitwanGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={chitwanHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October–March is Best"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                The dry season gives the clearest wildlife sightings, as shorter grass and lower
                water levels bring animals closer to the rivers and safari routes. The monsoon
                (June–September) makes much of the park difficult to access.
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
          cities={chitwanRelatedDestinations}
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
          faqs={chitwanFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Chitwan with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Chitwan Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Chitwan with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
