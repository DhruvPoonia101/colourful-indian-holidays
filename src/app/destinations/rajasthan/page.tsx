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
  ranthamboreAttractions,
  ranthamboreQuickFacts,
  ranthamboreGettingThere,
  ranthamboreHighlights,
  ranthamboreRelatedDestinations,
  ranthamboreFaqs,
} from "@/content/destinations/ranthambore";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Ranthambore Tiger Safari Tours | Rajasthan's Best Wildlife Destination";
const description =
  "Plan a private Ranthambore safari — one of India's best tiger-sighting parks, easily combined with a wider Rajasthan itinerary. Expert-guided jeep safaris with a private driver.";
const pagePath = "/destinations/rajasthan/ranthambore";
const heroImage = "/images/destinations/ranthambore-tiger.webp";

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
        alt: "Wild tiger at Ranthambore National Park",
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
  { name: "Ranthambore", path: pagePath },
];

export default function RanthamborePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(ranthamboreFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Ranthambore",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 26.0173,
              longitude: 76.5026,
              containsPlaces: [
                { name: "Ranthambore Fort", path: pagePath },
                { name: "Trinetra Ganesh Temple", path: pagePath },
                { name: "Padam Talao", path: pagePath },
              ],
            })
          ),
        }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Wild tiger at Ranthambore National Park"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Ranthambore — Rajasthan's Tiger Country"
          subheadline="A former royal hunting ground turned national park, with one of the best wild tiger-sighting records in India — and a genuinely easy add-on to any Rajasthan itinerary."
          primaryHref="/packages/wildlife-tours"
          primaryLabel="View Wildlife Safari Tours"
          whatsappMessage="Hi! I'd like to plan a Ranthambore safari with Colourful Indian Holidays."
        />

        <QuickFacts facts={ranthamboreQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro
                eyebrow="Overview"
                heading="A Royal Hunting Ground, Now a Tiger Sanctuary"
              />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Ranthambore" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Ranthambore was once the private hunting ground of the Maharajas of Jaipur —
                  today it&apos;s one of India&apos;s most reliable places to see a wild Bengal
                  tiger. The park&apos;s dry, open deciduous terrain works in visitors&apos;
                  favour: unlike denser forest parks, sightings here are a genuine, likely
                  outcome of a safari rather than a rare stroke of luck. The reserve owes much of
                  its current health to Project Tiger, the Indian government&apos;s conservation
                  initiative launched in the 1970s, which helped pull the park&apos;s tiger
                  population back from the brink after decades of hunting had reduced it
                  dramatically.
                </p>
                <p>
                  What sets Ranthambore apart from many other Indian tiger reserves is the
                  ruined 10th-century fort that sits within the park itself, giving safaris here
                  a genuinely different character — you&apos;re moving through active wildlife
                  habitat that also happens to contain ancient temples, crumbling gateways and
                  stepwells, some still functioning as pilgrimage sites for local devotees. Zones
                  closer to the fort and the park&apos;s lakes tend to offer the richest mix of
                  wildlife and ruins in a single safari, though sightings across all zones depend
                  heavily on season and a certain amount of luck, however good the underlying
                  odds.
                </p>
                <p>
                  What makes Ranthambore an easy addition to a Rajasthan trip is simply how
                  close it sits to Jaipur — a few hours&apos; drive turns a wildlife safari from
                  a special separate trip into a natural stop on the way through the rest of the
                  state. Most of our guests add 1 to 2 nights here, book 2 to 4 safaris across
                  different zones to maximise the chances of a good sighting, and continue on
                  into the rest of their Rajasthan itinerary. Safaris run in open-topped canters
                  or smaller jeeps, both with a naturalist guide who reads tracks, alarm calls
                  from deer and langurs, and other signs experienced trackers use to anticipate
                  where a tiger is likely to be. Beyond tigers, the park is also home to
                  leopards, sloth bears, marsh crocodiles and a wide range of birdlife, making it
                  a worthwhile stop even for travellers who don&apos;t see a tiger on their
                  particular safari.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See in Ranthambore"
          cities={ranthamboreAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting to Ranthambore"
          items={ranthamboreGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Ranthambore"
          heading="What Makes This Park Different"
          highlights={ranthamboreHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to June is Ranthambore's Safari Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                The park closes for the July to September monsoon. October to March brings
                cooler, more comfortable safari conditions, while April to June — despite the
                heat — often produces the best tiger sightings, as animals spend more time near
                water sources.
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
          cities={ranthamboreRelatedDestinations}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions About Ranthambore"
          intro="Everything international travellers ask before booking a Ranthambore safari — answered honestly."
          faqs={ranthamboreFaqs}
          whatsappMessage="Hi! I have a question before booking my Ranthambore safari with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Ranthambore Safari Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and we'll build a Ranthambore safari into your wider Rajasthan itinerary — usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a Ranthambore safari with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
