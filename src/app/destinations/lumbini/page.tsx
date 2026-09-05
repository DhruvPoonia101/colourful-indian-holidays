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
  lumbiniAttractions,
  lumbiniQuickFacts,
  lumbiniGettingThere,
  lumbiniHighlights,
  lumbiniRelatedDestinations,
  lumbiniFaqs,
} from "@/content/destinations/lumbini";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Lumbini | The Birthplace of the Buddha";
const description =
  "Plan a trip to Lumbini — the Maya Devi Temple, the Ashoka Pillar and an international monastic zone at the birthplace of the Buddha, a UNESCO World Heritage Site in Nepal.";
const pagePath = "/destinations/lumbini";
const heroImage = "/images/destinations/urs-festival-ajmer.webp";

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
  { name: "Lumbini", path: pagePath },
];

export default function LumbiniPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(lumbiniFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Lumbini",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 27.4833,
              longitude: 83.2767,
              containsPlaces: lumbiniAttractions.map((attraction) => ({
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
          imageAlt="Photo coming soon — Lumbini"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Lumbini — The Birthplace of the Buddha"
          subheadline="A UNESCO World Heritage site holding the exact spot of the Buddha's birth, ringed by monasteries built by Buddhist nations from across the world."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Lumbini with Colourful Indian Holidays."
        />

        <QuickFacts facts={lumbiniQuickFacts} quoteButtonPageName="Lumbini" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="The Birthplace of the Buddha" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Lumbini holds a claim few other places on Earth can make: this is, by
                  archaeological and historical consensus, the exact site where Siddhartha
                  Gautama — who would become the Buddha — was born, around the 6th century BCE. At
                  the centre of the site stands the Maya Devi Temple, built directly over the
                  marker stone believed to mark the precise spot, alongside the Ashoka Pillar, a
                  sandstone column erected in 249 BCE by the Indian emperor Ashoka whose
                  inscription is the earliest surviving historical confirmation that this is
                  indeed Lumbini. Nearby, the quiet Pushkarini Pond and Sacred Garden mark the spot
                  where tradition holds that Buddha&apos;s mother bathed before giving birth.
                </p>
                <p>
                  What makes Lumbini unusual as a heritage site is the Monastic Zone that surrounds
                  the sacred core — a planned complex where Buddhist nations including Myanmar,
                  Thailand, Japan, China, Vietnam and Cambodia have each built a monastery in their
                  own national architectural style, alongside a gleaming white World Peace Pagoda
                  built by Japanese Buddhists. It&apos;s possible to walk between strikingly different
                  temple traditions in a single afternoon, something almost no other pilgrimage
                  site in the world allows. Sitting close to the Nepal–India border, Lumbini pairs
                  naturally with Sarnath, Bodh Gaya and Kushinagar on a wider Buddhist heritage
                  circuit, or as a quieter, more contemplative stop on a broader Nepal itinerary.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={lumbiniAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={lumbiniGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={lumbiniHighlights}
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
                The cooler months make walking between the sacred site and the Monastic Zone far
                more comfortable, since Lumbini sits in the Terai lowlands, which get intensely hot
                and humid from April through the summer monsoon.
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
          cities={lumbiniRelatedDestinations}
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
          faqs={lumbiniFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Lumbini with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Lumbini Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Lumbini with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
