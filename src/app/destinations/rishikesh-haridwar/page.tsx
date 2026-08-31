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
  rishikeshHaridwarAttractions,
  rishikeshHaridwarQuickFacts,
  rishikeshHaridwarGettingThere,
  rishikeshHaridwarHighlights,
  rishikeshHaridwarRelatedDestinations,
  rishikeshHaridwarFaqs,
} from "@/content/destinations/rishikesh-haridwar";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Rishikesh & Haridwar | Yoga, Rafting & the Ganga Aarti";
const description =
  "Plan a trip to Rishikesh & Haridwar — white-water rafting and yoga in Rishikesh, and the sacred Har Ki Pauri ghat where the Ganges meets the plains.";
const pagePath = "/destinations/rishikesh-haridwar";
const heroImage = "/images/destinations/rishikesh-2.webp";

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
  { name: "Rishikesh & Haridwar", path: pagePath },
];

export default function RishikeshHaridwarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(rishikeshHaridwarFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Rishikesh & Haridwar",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 30.0869,
              longitude: 78.2676,
              containsPlaces: rishikeshHaridwarAttractions.map((attraction) => ({
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
          imageAlt="Suspension bridge over the Ganges, Rishikesh"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Rishikesh & Haridwar — Where the Ganges Meets the Mountains"
          subheadline="Yoga, white-water rafting and riverside ashrams in Rishikesh, and the sacred ghats of Haridwar where the Ganges leaves the Himalayas and enters the plains."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Rishikesh & Haridwar with Colourful Indian Holidays."
        />

        <QuickFacts facts={rishikeshHaridwarQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading="Where the Ganges Meets the Mountains" />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Rishikesh & Haridwar" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  A few hours north of Delhi, Rishikesh and Haridwar sit where the Ganges leaves
                  the Himalayan foothills and enters the plains — a stretch of river considered
                  sacred for as long as Hindu pilgrimage has existed. Rishikesh, framed by
                  forested hills, has become internationally known as the birthplace of modern
                  yoga tourism, home to ashrams including the one made famous by the
                  Beatles&apos; 1968 visit, alongside some of North India&apos;s most popular
                  white-water rafting. The stretch of the Ganges running through town offers
                  rapids suited to complete beginners and more experienced rafters alike, and
                  the two suspension bridges at its centre, Lakshman Jhula and Ram Jhula, are
                  lined with temples, ashrams and rooftop cafés that make for an easy afternoon
                  of wandering between rafting trips or yoga sessions.
                </p>
                <p>
                  Haridwar, just downstream, carries a different character — flatter, busier, and
                  centred on Har Ki Pauri, the ghat where the river is believed to have first
                  touched earth. Its own nightly Ganga Aarti draws large crowds, and once every
                  twelve years it hosts the Kumbh Mela, one of the largest religious gatherings on
                  Earth, drawing tens of millions of pilgrims over its duration. Both towns are
                  officially vegetarian and alcohol-free, in keeping with their status as centres
                  of pilgrimage, which shapes the pace and character of a visit here noticeably
                  compared with most other Indian destinations. Together, the two towns offer a
                  rare combination of adventure, wellness and living pilgrimage tradition, and
                  pair naturally as either a standalone trip or a Himalayan-foothill extension
                  onto a wider Delhi or Golden Triangle itinerary.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={rishikeshHaridwarAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={rishikeshHaridwarGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={rishikeshHaridwarHighlights}
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
                Cooler, drier conditions make this the most comfortable window for rafting and
                outdoor activity. Summer brings intense heat and a swollen, faster-moving river,
                while monsoon season (July–September) frequently suspends rafting altogether.
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
          cities={rishikeshHaridwarRelatedDestinations}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before booking — answered honestly."
          faqs={rishikeshHaridwarFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Rishikesh & Haridwar with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Rishikesh & Haridwar Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Rishikesh & Haridwar with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
