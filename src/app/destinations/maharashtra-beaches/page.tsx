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
  maharashtraBeachesAttractions,
  maharashtraBeachesQuickFacts,
  maharashtraBeachesGettingThere,
  maharashtraBeachesHighlights,
  maharashtraBeachesRelatedDestinations,
  maharashtraBeachesFaqs,
} from "@/content/destinations/maharashtra-beaches";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Maharashtra Beaches | Alibaug & Ganpatipule";
const description =
  "Plan a Maharashtra coastal trip — Alibaug's forts and beaches near Mumbai, and the quieter Konkan coast at Ganpatipule.";
const pagePath = "/destinations/maharashtra-beaches";
const heroImage = "/images/destinations/maharashtra-beaches.webp";

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
  { name: "Maharashtra Beaches", path: pagePath },
];

export default function MaharashtraBeachesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(maharashtraBeachesFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Maharashtra Beaches",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 18.6414,
              longitude: 72.8722,
              containsPlaces: maharashtraBeachesAttractions.map((attraction) => ({
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
          imageAlt="Aerial view of the Maharashtra Konkan coastline"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Maharashtra Beaches — An Easy Escape from Mumbai"
          subheadline="Alibaug&apos;s fort-dotted coastline and the quieter Konkan shore at Ganpatipule — a genuine weekend escape without leaving the state."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Maharashtra Beaches with Colourful Indian Holidays."
        />

        <QuickFacts facts={maharashtraBeachesQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Maharashtra Beaches — An Easy Escape from Mumbai" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>Maharashtra&apos;s Konkan coast runs south from Mumbai, and Alibaug has become the city&apos;s go-to weekend escape — close enough for a straightforward trip, with beaches, old Maratha-era forts, and a noticeably slower pace than Mumbai itself.</p>
                <p>Further south, Ganpatipule sits on a quieter stretch of the Konkan coast, home to a well-known Ganpati temple directly on the beach and considerably fewer visitors than Alibaug sees.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={maharashtraBeachesAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={maharashtraBeachesGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={maharashtraBeachesHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to February is the Best Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Cool, dry weather makes this the most comfortable season. March to May runs hot and humid, and the June to September monsoon brings heavy rain to the Konkan coast.
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
          cities={maharashtraBeachesRelatedDestinations}
          topDivider
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before booking — answered honestly."
          faqs={maharashtraBeachesFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Maharashtra Beaches with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Maharashtra Beaches Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Maharashtra Beaches with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
