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
import { GetQuoteButton } from "@/components/shared/GetQuoteButton";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  jaipurAttractions,
  jaipurQuickFacts,
  jaipurGettingThere,
  jaipurHighlights,
  jaipurRelatedDestinations,
  jaipurFaqs,
} from "@/content/destinations/jaipur";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Jaipur Tour Packages | The Pink City, Rajasthan";
const description =
  "Plan a private Jaipur tour — Amber Fort, City Palace, Hawa Mahal and Jantar Mantar, with an English-speaking guide and private driver. The natural start of any Rajasthan itinerary.";
const pagePath = "/destinations/rajasthan/jaipur";
const heroImage = "/images/destinations/amber-fort-jaipur.webp";

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
    images: [
      {
        url: `${SITE_URL}${heroImage}`,
        width: 1200,
        height: 630,
        alt: "Amber Fort at sunset, Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${SITE_NAME}`,
    description,
    images: [`${SITE_URL}${heroImage}`],
  },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Destinations", path: "/destinations" },
  { name: "Rajasthan", path: "/destinations/rajasthan" },
  { name: "Jaipur", path: pagePath },
];

export default function JaipurPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(jaipurFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Jaipur",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 26.9124,
              longitude: 75.7873,
              containsPlaces: [
                { name: "Amber Fort", path: pagePath },
                { name: "City Palace", path: pagePath },
                { name: "Hawa Mahal", path: pagePath },
                { name: "Jantar Mantar", path: pagePath },
              ],
            })
          ),
        }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Amber Fort at sunset, Jaipur"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Jaipur — The Pink City"
          subheadline="Forts, palaces and bazaars in Rajasthan's capital — the natural first stop on almost every Rajasthan itinerary, and a common third stop on the classic Golden Triangle route."
          primaryHref="/packages/rajasthan-tours"
          primaryLabel="View Rajasthan Tours"
          whatsappMessage="Hi! I'd like to plan a Jaipur trip with Colourful Indian Holidays."
        />

        <QuickFacts facts={jaipurQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro
                  eyebrow="Overview"
                  heading="Rajasthan's Capital, and Its Most Iconic City"
                />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Jaipur" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Jaipur is where most Rajasthan itineraries begin, and for good reason — within
                  a compact area you get a hilltop fort-palace, a still-occupied royal palace,
                  one of India&apos;s most recognisable facades, and a UNESCO-listed astronomical
                  observatory, all within a short drive of each other. The city takes its
                  nickname, the Pink City, from the terracotta wash applied to its old-city
                  buildings in 1876, a tradition that continues to this day.
                </p>
                <p>
                  For international travellers, Jaipur is also simply an easy city to visit —
                  well-connected by air and rail, with an established tourism infrastructure and
                  English widely spoken at the major sites. It&apos;s the reason Jaipur so often
                  anchors a wider Rajasthan trip rather than being treated as a single stop.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See in Jaipur"
          cities={jaipurAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting to Jaipur"
          items={jaipurGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Jaipur"
          heading="What Makes This City Different"
          highlights={jaipurHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to March is Jaipur's Most Comfortable Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Daytime temperatures are manageable for walking between sites from October
                through March. April through June brings intense heat that makes midday
                sightseeing genuinely uncomfortable, while the July–September monsoon brings
                humidity and occasional heavy rain.
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
          cities={jaipurRelatedDestinations}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions About Jaipur"
          intro="Everything international travellers ask before booking a Jaipur trip — answered honestly."
          faqs={jaipurFaqs}
          whatsappMessage="Hi! I have a question before booking my Jaipur trip with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Jaipur Journey Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and we'll build Jaipur into your wider Rajasthan itinerary — usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a Jaipur trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
