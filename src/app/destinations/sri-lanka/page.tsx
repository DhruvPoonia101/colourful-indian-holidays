import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { guidesFor } from "@/content/related-guides";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { FAQSection } from "@/components/destinations/FAQSection";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { PlannedByLine } from "@/components/shared/PlannedByLine";
import { Reveal } from "@/components/ui/Reveal";
import { sriLankaDestinations, sriLankaTourCards } from "@/content/sri-lanka-destinations-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { getPackageStartingPrice } from "@/lib/pricing";

const eightDayFrom = getPackageStartingPrice("sri-lanka-tours", 8).toLocaleString("en-US");

const title = "Sri Lanka Destinations | Sigiriya, Kandy, Ella, Yala & Galle";
const description =
  "Sri Lanka destinations for private tours: the Sigiriya rock fortress, Kandy's Temple of the Tooth, Ella's tea country, Yala's leopards and Galle Fort.";
const pagePath = "/destinations/sri-lanka";
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
  { name: "Sri Lanka", path: pagePath },
];

// Visa facts: Department of Immigration and Emigration notice "Free Tourist
// Visas for Nationals of 40 Selected Countries", effective 25 May 2026.
const faqs: FaqItem[] = [
  {
    question: "Do I need a visa for Sri Lanka?",
    answer:
      "Yes. Every visitor needs an Electronic Travel Authorisation (ETA) before arrival. Since 25 May 2026, the tourist ETA is free for nationals of 40 countries, including the USA, UK, Canada, Australia, Germany, France and India, and is valid for 30 days with double entry. We tell you exactly what to apply for when you book.",
  },
  {
    question: "How many days do I need in Sri Lanka?",
    answer:
      "Eight days covers the highlights — Sigiriya, Kandy, the tea country, Ella, a Yala safari and Galle — at a comfortable pace. With 12 to 14 days you can add the ancient cities of Anuradhapura and Polonnaruwa and some beach time.",
  },
  {
    question: "When is the best time to visit Sri Lanka?",
    answer:
      "December to April for the hill country and the south and west coasts, which most first trips cover. The east coast is at its best from about May to September. October and November are usually the wettest months across much of the island.",
  },
  {
    question: "Can Sri Lanka be combined with India?",
    answer:
      "Yes. Direct flights connect Colombo with Delhi, Mumbai, Chennai and Kochi. Our India and Sri Lanka tour pairs the Golden Triangle with Sri Lanka's highlights, and our Kerala and Sri Lanka tour pairs the backwaters with the island.",
  },
  {
    question: "How much does a private Sri Lanka tour cost?",
    answer: `Our 8-day Sri Lanka tour starts from about US$${eightDayFrom} per person for 7 nights, two sharing, with a private car, chauffeur-guide and 3–4 star hotels. Flights, hotel category and safaris change the final price.`,
  },
];

export default function SriLankaDestinationsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Sri Lanka",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 7.8731,
              longitude: 80.7718,
              containsPlaces: sriLankaDestinations.map((d) => ({
                name: d.name,
                path: d.href,
              })),
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Sigiriya Lion Rock rising above the forest, Sri Lanka"
          breadcrumbs={breadcrumbs}
          eyebrow="Destinations"
          headline="Sri Lanka, Island of Contrasts"
          subheadline="A rock-top palace, a sacred hill city, tea estates by train, leopard safaris and a Dutch fort on the sea — all within a week's drive."
          primaryHref="/tours/sri-lanka-tours"
          primaryLabel="View Sri Lanka Tours"
          whatsappMessage="Hi! I'd like to plan a trip to Sri Lanka with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Sri Lanka at a Glance" heading="Why Sri Lanka Works So Well" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  <span className="font-semibold text-ink">
                    Sri Lanka packs eight UNESCO World Heritage Sites, tea-covered mountains, wildlife
                    safaris and tropical beaches into an island you can cross in a day.
                  </span>{" "}
                  Most first trips follow a loop: the ancient Cultural Triangle around Sigiriya, the
                  sacred hill city of Kandy, the tea country of Nuwara Eliya and Ella by train, a
                  leopard safari in Yala, and the old fort town of Galle on the south coast.
                </p>
                <p>
                  We plan every Sri Lanka trip privately, with your own air-conditioned car and an
                  English-speaking chauffeur-guide, and it combines easily with India: Colombo is a
                  direct flight from Delhi, Mumbai, Chennai or Kochi. For day-by-day routes, see our{" "}
                  <Link href="/travel-guide/sri-lanka-itinerary" className="text-maroon underline">
                    7, 10 and 14-day Sri Lanka itineraries
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Explore Sri Lanka"
          heading="Sri Lanka Destinations"
          cities={sriLankaDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Ready-Made Routes"
          heading="Sri Lanka Tour Packages"
          cities={sriLankaTourCards}
          topDivider
          showActions
        />

        <RelatedGuides guides={guidesFor(pagePath)} />

        <FAQSection
          eyebrow="FAQ"
          heading="Sri Lanka: Frequently Asked Questions"
          faqs={faqs}
          whatsappMessage="Hi! I have a question about planning a trip to Sri Lanka."
          topDivider
        />

        <PlannedByLine />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Sri Lanka Trip Awaits."
          headlineItalic="Which Route Fits?"
          subtext="Tell us your dates and what you'd like to see — temples, tea country, wildlife or beaches — and we'll build the itinerary and reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a trip to Sri Lanka."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
