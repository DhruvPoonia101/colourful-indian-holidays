import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { guidesFor } from "@/content/related-guides";
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
import { PlannedByLine } from "@/components/shared/PlannedByLine";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  sigiriyaAttractions,
  sigiriyaQuickFacts,
  sigiriyaGettingThere,
  sigiriyaHighlights,
  sigiriyaRelatedDestinations,
  sigiriyaWhereToStay,
  sigiriyaFaqs,
} from "@/content/destinations/sigiriya";
import { sriLankaTourCards } from "@/content/sri-lanka-destinations-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Sigiriya | Lion Rock Fortress & Dambulla Cave Temple";
const description =
  "Plan a trip to Sigiriya — the Lion Rock fortress, Pidurangala sunrise, the Dambulla cave temple and elephant safaris in Sri Lanka's Cultural Triangle.";
const pagePath = "/destinations/sigiriya";
const heroImage = "/images/destinations/sigiriya-rock-fortress.webp";

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
  { name: "Sri Lanka", path: "/destinations/sri-lanka" },
  { name: "Sigiriya", path: pagePath },
];

export default function SigiriyaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(sigiriyaFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Sigiriya",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 7.957,
              longitude: 80.7603,
              containsPlaces: sigiriyaAttractions.map((attraction) => ({
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
          imageAlt="Sigiriya Lion Rock rising above the forest"
          breadcrumbs={breadcrumbs}
          eyebrow="Sri Lanka Destination Guide"
          headline="Sigiriya — The Lion Rock & the Cultural Triangle"
          subheadline="A 5th-century palace fortress on top of a granite rock, the painted caves of Dambulla, and elephant safaris, all within an hour of each other."
          primaryHref="/tours/sri-lanka-tours"
          primaryLabel="View Sri Lanka Tours"
          whatsappMessage="Hi! I'd like to plan a trip to Sigiriya with Colourful Indian Holidays."
        />

        <QuickFacts facts={sigiriyaQuickFacts} quoteButtonPageName="Sigiriya" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="The Lion Rock & the Cultural Triangle" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Sigiriya is the image most people picture when they think of Sri Lanka: a sheer granite rock rising about 200 metres out of flat forest, with the ruins of a 5th-century royal palace on its summit. King Kashyapa built his capital here, and the climb still passes the original Lion Gate, where two huge carved paws guard the final staircase, and a sheltered gallery of painted frescoes. UNESCO listed the Ancient City of Sigiriya in 1982.
                </p>
                <p>
                  The rock is the centre of Sri Lanka&apos;s Cultural Triangle, so it makes a natural base for two or three nights. The Dambulla cave temple, with five painted caves full of Buddha statues, is about 30 minutes away. The ancient cities of Polonnaruwa and Anuradhapura are within day-trip range, and jeep safaris in Minneriya, Kaudulla or Hurulu Eco Park bring you close to wild Asian elephants.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={sigiriyaAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={sigiriyaGettingThere}
        />

        <GettingThere
          eyebrow="Where to Stay"
          heading="Where to Stay in Sigiriya"
          items={sigiriyaWhereToStay}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={sigiriyaHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="January – September is Best"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                The Cultural Triangle is drier than the west coast for much of the year. The north-east monsoon brings rain from about October or November to January, and the rock is best climbed early in the morning in any month.
              </p>
              <div className="mt-7 flex justify-center">
                <Button href="/travel-guide/sri-lanka-visa-and-best-time-to-visit" variant="gold">
                  Sri Lanka Visa &amp; Best Time Guide
                  <FiArrowRight aria-hidden="true" className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Pair Your Trip"
          heading="Nearby & Related Destinations"
          cities={sigiriyaRelatedDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Ready-Made Routes"
          heading="Sri Lanka Tours That Include Sigiriya"
          cities={sriLankaTourCards.filter((tour) => tour.includes.includes("sigiriya"))}
          topDivider
          showActions
        />

        <RelatedGuides guides={guidesFor(pagePath)} />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="The questions we hear most from travellers planning a trip to Sigiriya."
          faqs={sigiriyaFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Sigiriya with Colourful Indian Holidays."
          topDivider
        />

        <PlannedByLine />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Sigiriya Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Sigiriya with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
