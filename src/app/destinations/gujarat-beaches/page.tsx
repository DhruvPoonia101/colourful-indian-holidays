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
  gujaratBeachesAttractions,
  gujaratBeachesQuickFacts,
  gujaratBeachesGettingThere,
  gujaratBeachesHighlights,
  gujaratBeachesRelatedDestinations,
  gujaratBeachesFaqs,
} from "@/content/destinations/gujarat-beaches";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";

const title = "Gujarat Beaches | Diu & Somnath";
const description =
  "Plan a Gujarat coastal trip — Portuguese-era Diu and the sacred shore temple at Somnath, one of India's quieter coastlines.";
const pagePath = "/destinations/gujarat-beaches";
const heroImage = "/images/destinations/gujarat-beaches.webp";

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
  { name: "Gujarat Beaches", path: pagePath },
];

export default function GujaratBeachesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(gujaratBeachesFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Gujarat Beaches",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 20.7144,
              longitude: 70.9874,
              containsPlaces: gujaratBeachesAttractions.map((attraction) => ({
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
          imageAlt="Gujarat coastline at dusk"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Gujarat Beaches — Quiet Coastline, Real History"
          subheadline="Portuguese colonial architecture in Diu, and one of Hinduism&apos;s most significant temples on the shore at Somnath — a genuinely different kind of Indian coast."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Gujarat Beaches with Colourful Indian Holidays."
        />

        <QuickFacts facts={gujaratBeachesQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Gujarat Beaches — Quiet Coastline, Real History" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>Gujarat&apos;s coastline sees a fraction of the visitors that Goa or Kerala do, which is exactly what makes it worth knowing about. Diu, a former Portuguese colony until 1961, still carries that architectural legacy — colonial-era churches and forts sit alongside quiet beaches, with none of the crowds of India&apos;s better-known coastal towns.</p>
                <p>Further along the coast, Somnath is home to one of the twelve Jyotirlinga shrines dedicated to Shiva — a temple with a long, dramatic history of destruction and rebuilding, standing directly on the shore of the Arabian Sea.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={gujaratBeachesAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={gujaratBeachesGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={gujaratBeachesHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="November to February is the Best Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Cool, dry weather makes this the most comfortable season to visit. March to June runs hot, while the monsoon (July to September) brings heavy rain to the region.
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
          cities={gujaratBeachesRelatedDestinations}
          topDivider
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before booking — answered honestly."
          faqs={gujaratBeachesFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Gujarat Beaches with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Gujarat Beaches Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Gujarat Beaches with Colourful Indian Holidays."
          trustBadges={[
            "IATO Registered Agency",
            "No Hidden Fees",
            "International Payments Accepted",
            "Respond Within 2 Hours",
          ]}
        />
      </main>
    </>
  );
}
