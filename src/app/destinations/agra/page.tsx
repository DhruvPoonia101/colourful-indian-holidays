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
  agraAttractions,
  agraQuickFacts,
  agraGettingThere,
  agraHighlights,
  agraRelatedDestinations,
  agraFaqs,
} from "@/content/destinations/agra";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Agra Tour Packages for International Travellers | Taj Mahal & the Golden Triangle";
const description =
  "Plan a private Agra trip — the Taj Mahal, Agra Fort and Fatehpur Sikri, with an English-speaking guide and driver. The essential middle stop on every Golden Triangle itinerary.";
const pagePath = "/destinations/agra";
const heroImage = "/images/destinations/agra-taj-mahal.webp";

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
        alt: "Taj Mahal at sunrise, Agra",
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
  { name: "Agra", path: pagePath },
];

export default function AgraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(agraFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Agra",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 27.1767,
              longitude: 78.0081,
              containsPlaces: [
                { name: "Taj Mahal", path: pagePath },
                { name: "Agra Fort", path: pagePath },
                { name: "Fatehpur Sikri", path: pagePath },
              ],
            })
          ),
        }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Taj Mahal at sunrise, Agra"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Agra — Home of the Taj Mahal"
          subheadline="One building draws most travellers to Agra, but Mughal forts, an abandoned imperial city, and centuries-old marble craftsmanship make it worth more than a rushed afternoon."
          primaryHref="/packages/golden-triangle-tours"
          primaryLabel="View Golden Triangle Tours"
          whatsappMessage="Hi! I'd like to plan an Agra trip with Colourful Indian Holidays."
        />

        <QuickFacts facts={agraQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Overview"
                heading="More Than a Single Monument"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Agra is almost always visited for one reason, and the Taj Mahal genuinely
                  earns the reputation — it&apos;s one of those rare landmarks that looks even
                  better in person than in every photo you&apos;ve already seen of it. But
                  building a rushed few hours around a single building undersells the city.
                  Agra was a Mughal capital for generations, and that history is still standing
                  a short drive from the Taj Mahal itself.
                </p>
                <p>
                  Agra Fort and the abandoned city of Fatehpur Sikri both date from the same
                  dynasty and the same red-sandstone-and-white-marble architectural language,
                  and both see a fraction of the Taj Mahal&apos;s crowds. Given how easy Agra is
                  to reach from both Delhi and Jaipur, it&apos;s worth planning for a proper day
                  here rather than treating it as a photo stop on the way to Rajasthan.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See in Agra"
          cities={agraAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting to Agra"
          items={agraGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Agra"
          heading="What to See Beyond the Taj Mahal"
          highlights={agraHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to March is Agra's Most Comfortable Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Cool, dry mornings make an early Taj Mahal visit genuinely pleasant. April to
                June runs extremely hot — often the hottest stop on a Golden Triangle
                itinerary — while the July to September monsoon brings humidity but also fewer
                crowds around the monument.
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
          cities={agraRelatedDestinations}
          topDivider
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions About Agra"
          intro="Everything international travellers ask before booking an Agra trip — answered honestly."
          faqs={agraFaqs}
          whatsappMessage="Hi! I have a question before booking my Agra trip with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Agra Journey Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored Agra itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan an Agra trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
