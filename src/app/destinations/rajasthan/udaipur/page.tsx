import type { Metadata } from "next";
import { FiArrowRight } from "react-icons/fi";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { QuickFacts } from "@/components/destinations/QuickFacts";
import { GettingThere } from "@/components/destinations/GettingThere";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { GetQuoteButton } from "@/components/shared/GetQuoteButton";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  udaipurAttractions,
  udaipurQuickFacts,
  udaipurGettingThere,
  udaipurHighlights,
  udaipurRelatedDestinations,
  udaipurFaqs,
} from "@/content/destinations/udaipur";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Udaipur Tour Packages | The City of Lakes, Rajasthan";
const description =
  "Plan a private Udaipur tour — the Lake Palace, City Palace and a sunset boat ride on Lake Pichola, with an English-speaking guide and private driver.";
const pagePath = "/destinations/rajasthan/udaipur";
const heroImage = "/images/destinations/udaipur-lake-palace.webp";

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
        alt: "Lake Palace floating on Lake Pichola, Udaipur",
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
  { name: "Udaipur", path: pagePath },
];

export default function UdaipurPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(udaipurFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Udaipur",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 24.5854,
              longitude: 73.7125,
              containsPlaces: [
                { name: "Lake Palace", path: pagePath },
                { name: "City Palace", path: pagePath },
                { name: "Jagdish Temple", path: pagePath },
              ],
            })
          ),
        }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Lake Palace floating on Lake Pichola, Udaipur"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Udaipur — The City of Lakes"
          subheadline="Palaces on the water, hills ringing every view, and often called the most romantic city in India — the natural finale of a classic Rajasthan circuit."
          primaryHref="/packages/rajasthan-tours"
          primaryLabel="View Rajasthan Tours"
          whatsappMessage="Hi! I'd like to plan an Udaipur trip with Colourful Indian Holidays."
        />

        <QuickFacts facts={udaipurQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro
                eyebrow="Overview"
                heading="Rajasthan's Lakeside Counterpoint to the Desert"
              />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Udaipur" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Udaipur is built around a series of artificial lakes ringed by hills and
                  palaces — a setting genuinely unlike anywhere else in Rajasthan, where forts
                  and desert landscapes dominate. The City Palace, expanded by successive Mewar
                  rulers over nearly 400 years, and the Lake Palace floating at the centre of
                  Lake Pichola, are the two sights most travellers come specifically to see.
                </p>
                <p>
                  Arriving after Jaipur and Jodhpur, Udaipur&apos;s calmer, lakeside pace is a
                  deliberate shift from the desert forts earlier in a Rajasthan trip — which is
                  exactly why it so often closes out the classic circuit rather than opening it.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See in Udaipur"
          cities={udaipurAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting to Udaipur"
          items={udaipurGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Udaipur"
          heading="What Makes This City Different"
          highlights={udaipurHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to March is Udaipur's Most Comfortable Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Comfortable daytime temperatures run from October through March, and the lakes
                are typically fuller after the monsoon, making the views and boat rides more
                scenic through autumn and winter. April through June brings intense heat.
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
          cities={udaipurRelatedDestinations}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions About Udaipur"
          intro="Everything international travellers ask before booking an Udaipur trip — answered honestly."
          faqs={udaipurFaqs}
          whatsappMessage="Hi! I have a question before booking my Udaipur trip with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Udaipur Journey Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and we'll build Udaipur into your wider Rajasthan itinerary — usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan an Udaipur trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
