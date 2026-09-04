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
import { fleetCards } from "@/content/car-rental-hub";
import {
  odishaAttractions,
  odishaQuickFacts,
  odishaGettingThere,
  odishaHighlights,
  odishaRelatedDestinations,
  odishaFaqs,
} from "@/content/destinations/odisha";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Odisha | Konark Sun Temple, Puri & Chilika Lake";
const description =
  "Plan a trip to Odisha — the UNESCO-listed Konark Sun Temple, Puri's sacred Jagannath Temple, and the dolphins of Chilika Lake.";
const pagePath = "/destinations/odisha";
const heroImage = "/images/destinations/odisha-konark-sun-temple.webp";

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
  { name: "Odisha", path: pagePath },
];

export default function OdishaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(odishaFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Odisha",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 20.2961,
              longitude: 85.8245,
              containsPlaces: odishaAttractions.map((attraction) => ({
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
          imageAlt="The Konark Sun Temple's chariot wheels, Odisha"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Odisha — Temples in Stone"
          subheadline="A UNESCO chariot-shaped sun temple, one of Hinduism's four most sacred sites, and a coastal lagoon home to Irrawaddy dolphins — a quieter side of India's temple heritage."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Odisha with Colourful Indian Holidays."
        />

        <QuickFacts facts={odishaQuickFacts} quoteButtonPageName="Odisha" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Temples in Stone" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Odisha sees considerably fewer international visitors than Rajasthan or the
                  Golden Triangle, yet its temple heritage is genuinely on that level — most
                  visibly at the Konark Sun Temple, a 13th-century UNESCO World Heritage Site
                  built in the shape of a colossal stone chariot for the sun god Surya, its
                  wheels and horses carved with a level of detail that rewards slow, close
                  viewing rather than a quick photo stop. Jagannath Temple in nearby Puri adds a
                  different kind of significance — one of Hinduism&apos;s four most sacred Char
                  Dham pilgrimage sites, drawing millions of devotees annually, particularly
                  during the Rath Yatra chariot festival. The temple&apos;s inner sanctum is
                  reserved for Hindu visitors, though a well-known viewing platform nearby lets
                  everyone see the structure itself. Bhubaneswar, often called the &quot;Temple
                  City of India,&quot; adds still more depth — Lingaraj Temple, its main tower
                  rising over 55 metres above dozens of smaller surrounding shrines, and Rajarani
                  Temple, sometimes nicknamed the &quot;Khajuraho of Odisha&quot; for its
                  ornately sculpted tower, sit among hundreds of temples spanning centuries of
                  Kalinga architecture.
                </p>
                <p>
                  Beyond the temples, Chilika Lake — Asia&apos;s largest brackish water lagoon —
                  offers a genuinely different kind of experience: boat trips out to see
                  migratory bird colonies and one of India&apos;s few resident populations of
                  Irrawaddy dolphins, a wildlife encounter unavailable elsewhere on a typical
                  East India itinerary. Odisha is also home to Odissi, one of India&apos;s oldest
                  classical dance forms, its movements directly rooted in the temple sculpture
                  found at sites like Konark. Bhubaneswar, Puri and Konark form a compact
                  triangle roughly an hour apart by road, making a realistic 4 to 5 day itinerary
                  straightforward to plan, and the state connects easily to Kolkata for a wider
                  Eastern India circuit.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={odishaAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={odishaGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={odishaHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to March is the Best Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Cooler, more comfortable weather makes this the best window for exploring the
                temples and Chilika Lake. Summer brings intense heat and humidity, and the
                monsoon (June to September) brings heavy rainfall.
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
          cities={odishaRelatedDestinations}
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
          faqs={odishaFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Odisha with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Odisha Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Odisha with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
