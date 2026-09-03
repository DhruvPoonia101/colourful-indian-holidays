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
  maduraiAttractions,
  maduraiQuickFacts,
  maduraiGettingThere,
  maduraiHighlights,
  maduraiRelatedDestinations,
  maduraiFaqs,
} from "@/content/destinations/madurai";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Madurai | Meenakshi Amman Temple & Tamil Heritage";
const description =
  "Plan a trip to Madurai — the towering gopurams of Meenakshi Amman Temple, Thirumalai Nayakkar Palace, and one of India's oldest continuously inhabited cities.";
const pagePath = "/destinations/madurai";
const heroImage = "/images/destinations/madurai.webp";

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
  { name: "Madurai", path: pagePath },
];

export default function MaduraiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(maduraiFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Madurai",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 9.9252,
              longitude: 78.1198,
              containsPlaces: maduraiAttractions.map((attraction) => ({
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
          imageAlt="Meenakshi Amman Temple gopuram, Madurai"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Madurai — Tamil Nadu's Temple City"
          subheadline="Towering, sculpture-covered gopurams, a living temple over 2,500 years in the making, and one of India's oldest continuously inhabited cities."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Madurai with Colourful Indian Holidays."
        />

        <QuickFacts facts={maduraiQuickFacts} quoteButtonPageName="Madurai" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Tamil Nadu's Temple City" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Madurai has been continuously inhabited for over 2,500 years, with references
                  to the city appearing in ancient Tamil Sangam literature — making it one of the
                  oldest living cities anywhere in India. Its old city streets still radiate
                  outward from the Meenakshi Amman Temple in a traditional mandala layout, a
                  street plan largely unchanged for centuries and genuinely rare to experience
                  intact today. That layout also makes the city genuinely walkable once
                  you&apos;re near the centre, with narrow lanes of jewellers, flower sellers and
                  spice merchants radiating outward from the temple in every direction.
                </p>
                <p>
                  The temple itself is the reason most visitors come, and it more than earns the
                  detour — a vast complex dedicated to Meenakshi and Sundareswarar, with towering
                  gopurams covered in thousands of brightly painted sculptures depicting Hindu
                  deities and mythology. Unlike many of India&apos;s most-visited monuments, it
                  remains a genuinely active place of worship rather than a preserved historical
                  site, with daily rituals and processions continuing much as they have for
                  generations. Thirumalai Nayakkar Palace, built in 1636, adds a different kind of
                  history — a striking blend of Dravidian and Islamic architectural styles from a
                  single 17th-century ruler&apos;s reign, though only around a quarter of the
                  original structure survives today. Madurai works well as a focused 1 to 2 day
                  stop within a longer South India itinerary, pairing naturally with Tamil
                  Nadu&apos;s beaches or a wider Kerala circuit.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={maduraiAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={maduraiGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={maduraiHighlights}
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
                Cooler, drier conditions make this the most comfortable window for exploring the
                temple and old city on foot. Summer brings intense heat that makes midday
                sightseeing genuinely uncomfortable.
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
          cities={maduraiRelatedDestinations}
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
          faqs={maduraiFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Madurai with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Madurai Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Madurai with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
