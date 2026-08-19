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
  andamanIslandsAttractions,
  andamanIslandsQuickFacts,
  andamanIslandsGettingThere,
  andamanIslandsHighlights,
  andamanIslandsRelatedDestinations,
  andamanIslandsFaqs,
} from "@/content/destinations/andaman-islands";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";

const title = "Andaman Islands | Radhanagar Beach & Havelock Island";
const description =
  "Plan an Andaman Islands trip — Radhanagar Beach, Havelock Island's coral reefs, and Cellular Jail in Port Blair.";
const pagePath = "/destinations/andaman-islands";
const heroImage = "/images/destinations/andaman-islands.webp";

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
  { name: "Andaman Islands", path: pagePath },
];

export default function AndamanIslandsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(andamanIslandsFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Andaman Islands",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 11.6234,
              longitude: 92.7265,
              containsPlaces: andamanIslandsAttractions.map((attraction) => ({
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
          imageAlt="Andaman Islands — photo coming soon"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Andaman Islands — India's Tropical Frontier"
          subheadline="Remote, coral-fringed beaches in the Bay of Bengal, unlike anywhere else on the Indian mainland — plus a sobering piece of colonial history at Cellular Jail."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Andaman Islands with Colourful Indian Holidays."
        />

        <QuickFacts facts={andamanIslandsQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Andaman Islands — India's Tropical Frontier" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>The Andaman Islands sit far out in the Bay of Bengal, closer to Myanmar and Thailand than to mainland India — and it shows, in turquoise water, coral reefs, and beaches that feel genuinely unlike anywhere else in the country. Radhanagar Beach on Havelock Island has repeatedly been rated among the best beaches in Asia.</p>
                <p>Port Blair, the main gateway, is also home to Cellular Jail, a former British colonial prison and a significant site in India&apos;s independence movement — worth building into an itinerary alongside the islands&apos; natural beauty for a fuller picture of the Andamans.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={andamanIslandsAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={andamanIslandsGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={andamanIslandsHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to May is the Best Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Cool, dry conditions make this the best window for diving and beach time. The islands see heavy monsoon rain from June to September, when many boat trips and water activities are affected.
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
          cities={andamanIslandsRelatedDestinations}
          topDivider
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before booking — answered honestly."
          faqs={andamanIslandsFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Andaman Islands with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Andaman Islands Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Andaman Islands with Colourful Indian Holidays."
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
