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
  pushkarAttractions,
  pushkarQuickFacts,
  pushkarGettingThere,
  pushkarHighlights,
  pushkarRelatedDestinations,
  pushkarFaqs,
} from "@/content/destinations/pushkar";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Pushkar Tour Packages | The Holy Town, Rajasthan";
const description =
  "Plan a private Pushkar trip — the sacred lake, Brahma Temple and (in season) the famous Camel Fair, with an English-speaking guide and private driver.";
const pagePath = "/destinations/rajasthan/pushkar";
const heroImage = "/images/destinations/pushkar.webp";

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
        alt: "Traditional Rajasthani procession at the Pushkar Camel Fair",
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
  { name: "Pushkar", path: pagePath },
];

export default function PushkarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(pushkarFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Pushkar",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 26.4899,
              longitude: 74.5511,
              containsPlaces: [
                { name: "Pushkar Lake", path: pagePath },
                { name: "Brahma Temple", path: pagePath },
              ],
            })
          ),
        }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Traditional Rajasthani procession at the Pushkar Camel Fair"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Pushkar — The Holy Town"
          subheadline="A sacred lake ringed by ghats, one of India's only Brahma temples, and home to the country's most famous camel fair — a relaxed, low-key stop on any Rajasthan circuit."
          primaryHref="/packages/rajasthan-tours"
          primaryLabel="View Rajasthan Tours"
          whatsappMessage="Hi! I'd like to plan a Pushkar trip with Colourful Indian Holidays."
        />

        <QuickFacts facts={pushkarQuickFacts} quoteButtonPageName="Pushkar" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Overview"
                heading="A Small Town With Deep Religious Significance"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Pushkar is built around a lake Hindu mythology says formed where a lotus petal
                  fell from Lord Brahma&apos;s hand, and is home to one of the very few temples in
                  India dedicated to Brahma the Creator — a genuine rarity given his prominence
                  in Hindu cosmology. More than 50 ghats ring the lake, used for bathing and
                  prayer much as they have been for centuries.
                </p>
                <p>
                  Pushkar is also home to one of the world&apos;s largest camel fairs, held each
                  autumn, when tens of thousands of camels, traders and pilgrims fill the desert
                  around the town. Outside fair season, it&apos;s simply a relaxed, low-key stop — a
                  welcome change of pace after busier cities like Jaipur or Jodhpur.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See in Pushkar"
          cities={pushkarAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting to Pushkar"
          items={pushkarGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Pushkar"
          heading="What Makes This Town Different"
          highlights={pushkarHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to March is Pushkar's Most Comfortable Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Comfortable daytime temperatures run from October through March, with the Camel
                Fair typically falling in October or November. Summer months bring intense
                desert heat.
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
          cities={pushkarRelatedDestinations}
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
          heading="Common Questions About Pushkar"
          intro="Everything international travellers ask before booking a Pushkar trip — answered honestly."
          faqs={pushkarFaqs}
          whatsappMessage="Hi! I have a question before booking my Pushkar trip with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Pushkar Journey Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and we'll build Pushkar into your wider Rajasthan itinerary — usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a Pushkar trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
