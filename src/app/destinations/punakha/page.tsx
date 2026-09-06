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
  punakhaAttractions,
  punakhaQuickFacts,
  punakhaGettingThere,
  punakhaHighlights,
  punakhaRelatedDestinations,
  punakhaFaqs,
} from "@/content/destinations/punakha";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Punakha | Bhutan's Former Capital & Most Beautiful Dzong";
const description =
  "Plan a trip to Punakha — the riverside Punakha Dzong, the Dochula Pass drive and Bhutan's warmest valley, widely considered the country's most beautiful stop.";
const pagePath = "/destinations/punakha";
const heroImage = "/images/destinations/punakha-dzong-autumn.webp";

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
  { name: "Punakha", path: pagePath },
];

export default function PunakhaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(punakhaFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Punakha",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 27.5911,
              longitude: 89.8797,
              containsPlaces: punakhaAttractions.map((attraction) => ({
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
          imageAlt="Punakha Dzong along the river, framed by golden autumn trees"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Punakha — Bhutan's Former Capital"
          subheadline="A riverside dzong widely considered the most beautiful in Bhutan, reached by a scenic drive over the Dochula Pass into the country's warmest valley."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Punakha with Colourful Indian Holidays."
        />

        <QuickFacts facts={punakhaQuickFacts} quoteButtonPageName="Punakha" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Bhutan's Former Capital" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Punakha served as Bhutan&apos;s capital until the 1950s, and it&apos;s easy to
                  see why the site was chosen: Punakha Dzong sits directly at the confluence of the
                  Pho Chhu and Mo Chhu rivers, a 17th-century fortress whose scale and setting make
                  it widely regarded as the most beautiful dzong in the entire country. It remains
                  the winter residence of Bhutan&apos;s central monastic body and continues to host
                  royal weddings. A 160-metre suspension bridge, the longest in Bhutan and strung
                  with prayer flags, crosses the Pho Chhu just below the fortress, connecting it to
                  the surrounding farmland.
                </p>
                <p>
                  The valley itself sits at a noticeably lower altitude than Thimphu or Paro,
                  giving it a milder, almost subtropical climate and a landscape of rice terraces
                  rather than pine-forested ridges. A short walk through the paddies leads to Chimi
                  Lhakhang, a fertility temple built in honour of the &ldquo;Divine Madman&rdquo;
                  Lama Drukpa Kunley, while the hilltop Khamsum Yulley Namgyal Chorten offers wide
                  views back over the Mo Chhu valley. The journey in is part of the experience too:
                  the roughly 3-hour drive from Thimphu crosses the Dochula Pass, a 3,100-metre
                  viewpoint marked by 108 memorial chortens and, on a clear day, a wide Himalayan
                  panorama.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={punakhaAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={punakhaGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={punakhaHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="A Year-Round Destination"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Punakha&apos;s lower altitude keeps it comfortable most of the year, though
                February to April is especially popular for the valley&apos;s blooming jacaranda
                trees.
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
          cities={punakhaRelatedDestinations}
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
          faqs={punakhaFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Punakha with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Punakha Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Punakha with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
