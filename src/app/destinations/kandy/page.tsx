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
  kandyAttractions,
  kandyQuickFacts,
  kandyGettingThere,
  kandyHighlights,
  kandyRelatedDestinations,
  kandyWhereToStay,
  kandyFaqs,
} from "@/content/destinations/kandy";
import { sriLankaTourCards } from "@/content/sri-lanka-destinations-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Kandy | Temple of the Tooth & Sri Lanka's Hill Capital";
const description =
  "Plan a trip to Kandy — the Temple of the Sacred Tooth Relic, Kandy Lake, Peradeniya botanic gardens and the Esala Perahera festival.";
const pagePath = "/destinations/kandy";
const heroImage = "/images/destinations/kandy-temple-of-the-tooth-lake.webp";

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
  { name: "Kandy", path: pagePath },
];

export default function KandyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(kandyFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Kandy",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 7.2906,
              longitude: 80.6337,
              containsPlaces: kandyAttractions.map((attraction) => ({
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
          imageAlt="A pavilion on Kandy Lake beside the Temple of the Tooth complex"
          breadcrumbs={breadcrumbs}
          eyebrow="Sri Lanka Destination Guide"
          headline="Kandy — Sri Lanka's Sacred Hill Capital"
          subheadline="The last royal capital of Sri Lanka's kings, a UNESCO World Heritage city built around a lake and the island's most important Buddhist temple."
          primaryHref="/tours/sri-lanka-tours"
          primaryLabel="View Sri Lanka Tours"
          whatsappMessage="Hi! I'd like to plan a trip to Kandy with Colourful Indian Holidays."
        />

        <QuickFacts facts={kandyQuickFacts} quoteButtonPageName="Kandy" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Sri Lanka's Sacred Hill Capital" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Kandy was the capital of the last Sri Lankan kingdom until 1815, and the city still feels like the cultural heart of the island. It sits in green hills around an artificial lake, and its centrepiece, the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), houses what Buddhists venerate as a tooth of the Buddha. UNESCO listed the Sacred City of Kandy as a World Heritage Site in 1988.
                </p>
                <p>
                  Most visitors spend a night or two here between the Cultural Triangle and the tea country. Evening puja ceremonies at the temple, a walk around the lake, the Royal Botanic Gardens at nearby Peradeniya and a performance of Kandyan dance fill a day comfortably. Kandy is normally where the famous hill-country train ride begins, though since Cyclone Ditwah in late 2025 trains have run only from Nanu Oya, near Nuwara Eliya, to Ella and Badulla, so we drive you up to Nanu Oya to join the most scenic stretch.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={kandyAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={kandyGettingThere}
        />

        <GettingThere
          eyebrow="Where to Stay"
          heading="Where to Stay in Kandy"
          items={kandyWhereToStay}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={kandyHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="December – April is Best"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Kandy can be visited all year, but December to April is drier. Plan around the Esala Perahera in July or August if you want to see the festival, and book early: hotels fill up fast.
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
          cities={kandyRelatedDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Ready-Made Routes"
          heading="Sri Lanka Tours That Include Kandy"
          cities={sriLankaTourCards.filter((tour) => tour.includes.includes("kandy"))}
          topDivider
          showActions
        />

        <RelatedGuides guides={guidesFor(pagePath)} />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="The questions we hear most from travellers planning a trip to Kandy."
          faqs={kandyFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Kandy with Colourful Indian Holidays."
          topDivider
        />

        <PlannedByLine />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Kandy Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Kandy with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
