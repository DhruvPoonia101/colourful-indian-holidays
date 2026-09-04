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
  maharashtraAttractions,
  maharashtraQuickFacts,
  maharashtraGettingThere,
  maharashtraHighlights,
  maharashtraRelatedDestinations,
  maharashtraFaqs,
} from "@/content/destinations/maharashtra";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Maharashtra | Ajanta & Ellora Caves, Pune & Shirdi";
const description =
  "Plan a trip to inland Maharashtra — the UNESCO-listed Ajanta and Ellora cave temples, Pune's Maratha-era heritage, and the pilgrimage town of Shirdi.";
const pagePath = "/destinations/maharashtra";
const heroImage = "/images/destinations/maharashtra-ajanta-caves.webp";

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
  { name: "Maharashtra", path: pagePath },
];

export default function MaharashtraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(maharashtraFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Maharashtra",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 19.7515,
              longitude: 75.7139,
              containsPlaces: maharashtraAttractions.map((attraction) => ({
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
          imageAlt="A rock-cut stupa hall inside the Ajanta Caves, Maharashtra"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Maharashtra — Beyond Mumbai"
          subheadline="UNESCO rock-cut cave temples carved over centuries, Pune's Maratha-era heritage, and one of India's most-visited pilgrimage towns."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Maharashtra with Colourful Indian Holidays."
        />

        <QuickFacts facts={maharashtraQuickFacts} quoteButtonPageName="Maharashtra" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Beyond Mumbai" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Most international travellers experience Maharashtra through Mumbai alone, but
                  the state&apos;s interior holds some of India&apos;s most significant heritage
                  sites, largely overlooked by standard itineraries. Ajanta and Ellora, two
                  separate UNESCO World Heritage cave complexes near Aurangabad, rank among the
                  finest rock-cut monuments anywhere in the world — Ajanta preserving some of the
                  oldest surviving Buddhist paintings in India, and Ellora home to the Kailasa
                  Temple, an entire temple excavated top-down from a single rock face, one of the
                  largest monolithic structures on Earth. The two sites sit roughly 100km apart
                  and are typically visited on separate days given how much each has to offer.
                </p>
                <p>
                  Pune adds a different dimension — a historic Maratha-era city with the Aga Khan
                  Palace and Shaniwar Wada fort, alongside a genuinely active modern cultural and
                  academic scene that gives it a noticeably different energy from Mumbai&apos;s
                  commercial pace. Shirdi, meanwhile, remains one of India&apos;s most-visited
                  pilgrimage towns, drawing millions of devotees annually to the Sai Baba Temple —
                  a genuine window into contemporary Indian devotional practice worth visiting
                  regardless of personal faith. Given the distances involved, a realistic
                  inland Maharashtra circuit runs 4 to 6 days, working naturally as an extension
                  before or after time in Mumbai.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={maharashtraAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={maharashtraGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={maharashtraHighlights}
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
                caves and cities on foot. Summer brings intense heat, and the monsoon (June to
                September) brings heavy rainfall across the state.
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
          cities={maharashtraRelatedDestinations}
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
          faqs={maharashtraFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Maharashtra with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Maharashtra Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Maharashtra with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
