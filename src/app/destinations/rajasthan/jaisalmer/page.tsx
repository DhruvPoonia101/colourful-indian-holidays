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
  jaisalmerAttractions,
  jaisalmerQuickFacts,
  jaisalmerGettingThere,
  jaisalmerHighlights,
  jaisalmerRelatedDestinations,
  jaisalmerFaqs,
} from "@/content/destinations/jaisalmer";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Jaisalmer Tour Packages | The Golden City, Rajasthan";
const description =
  "Plan a private Jaisalmer tour — the living fort, Sam Sand Dunes camel safari and desert camp, with an English-speaking guide and private driver.";
const pagePath = "/destinations/rajasthan/jaisalmer";
const heroImage = "/images/destinations/jaisalmer-desert.webp";

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
        alt: "Camel safari at sunset, Sam Sand Dunes near Jaisalmer",
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
  { name: "Jaisalmer", path: pagePath },
];

export default function JaisalmerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(jaisalmerFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Jaisalmer",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 26.9157,
              longitude: 70.9083,
              containsPlaces: [
                { name: "Jaisalmer Fort", path: pagePath },
                { name: "Sam Sand Dunes", path: pagePath },
                { name: "Patwon Ki Haveli", path: pagePath },
              ],
            })
          ),
        }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Camel safari at sunset, Sam Sand Dunes near Jaisalmer"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Jaisalmer — The Golden City"
          subheadline="A living sandstone fort on the edge of the Thar Desert, with camel safaris and desert camps beyond — the furthest and most distinct stop on a Rajasthan circuit."
          primaryHref="/packages/rajasthan-tours"
          primaryLabel="View Rajasthan Tours"
          whatsappMessage="Hi! I'd like to plan a Jaisalmer trip with Colourful Indian Holidays."
        />

        <QuickFacts facts={jaisalmerQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Overview"
                heading="A Fort Still Genuinely Lived In"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Jaisalmer is one of the very few &quot;living forts&quot; left in the world — around a
                  quarter of the old city&apos;s population still lives within its walls, running
                  shops, guesthouses and restaurants built into the same honey-coloured
                  sandstone the fort itself is carved from. Built in 1156, it glows almost amber
                  at sunset, giving the city its nickname, the Golden City.
                </p>
                <p>
                  Beyond the fort, Jaisalmer&apos;s setting deep in the Thar Desert makes it the most
                  distinct stop on a Rajasthan circuit — a short drive to the Sam Sand Dunes adds
                  a camel safari and, often, a night at a desert camp under a genuinely dark sky.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See in Jaisalmer"
          cities={jaisalmerAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting to Jaisalmer"
          items={jaisalmerGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Jaisalmer"
          heading="What Makes This City Different"
          highlights={jaisalmerHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to February is Jaisalmer's Most Comfortable Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Jaisalmer&apos;s desert climate brings extreme summer heat, so October through
                February is considerably more comfortable for both the fort and the desert
                safari than the rest of the year.
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
          cities={jaisalmerRelatedDestinations}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions About Jaisalmer"
          intro="Everything international travellers ask before booking a Jaisalmer trip — answered honestly."
          faqs={jaisalmerFaqs}
          whatsappMessage="Hi! I have a question before booking my Jaisalmer trip with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Jaisalmer Journey Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and we'll build Jaisalmer into your wider Rajasthan itinerary — usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a Jaisalmer trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
