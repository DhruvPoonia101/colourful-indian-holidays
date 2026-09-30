import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { bhutanDestinations } from "@/content/bhutan-destinations-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Bhutan Destinations | Paro, Thimphu, Punakha & Gangtey";
const description =
  "Every Bhutan destination we plan private tours for — Paro's Tiger's Nest monastery, capital city Thimphu, riverside Punakha, and the crane valley of Gangtey.";
const pagePath = "/destinations/bhutan";
const heroImage = "/images/destinations/paro-pack-horses-forest-trail.webp";

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
  { name: "Bhutan", path: pagePath },
];

// Coordinates reused from the Thimphu destination page, already verified
// there — used here as the country-level reference point for Bhutan as a
// whole, matching how the audit's Schema pass flagged this hub as missing
// the TouristDestination schema that individual city pages already carry.
const faqs: FaqItem[] = [
  {
    question: "Do I need a visa for Bhutan, and how does it work?",
    answer:
      "Yes — Bhutan requires all foreign visitors to book through a licensed local tour operator as part of its sustainable tourism policy, which includes visa arrangement. We handle this as a standard part of any Bhutan itinerary, so it isn't something you need to arrange separately, though it does mean booking further ahead than a typical India-only trip.",
  },
  {
    question: "How many days do I need in Bhutan?",
    answer:
      "8 days covers Thimphu, Punakha and Paro comfortably, matching our standard Bhutan Tours itinerary. That's enough time to include the hike up to the Tiger's Nest monastery without rushing.",
  },
  {
    question: "Can Bhutan be combined with Nepal or India?",
    answer:
      "Yes — this is genuinely common. We run dedicated Nepal & Bhutan, India & Bhutan, and India-Nepal-Bhutan routes, each adding roughly a week per additional country. Tell us which combination interests you and we'll build the connected itinerary.",
  },
  {
    question: "What is the Tiger's Nest, and is it difficult to reach?",
    answer:
      "Paro Taktsang, known as the Tiger's Nest, is a monastery built into a cliff face above Paro, reached by a hike of several hours round trip. It's moderately demanding rather than technical, and manageable for most reasonably fit travellers at a comfortable pace.",
  },
];

export default function BhutanDestinationsHubPage() {
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
              name: "Bhutan",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 27.4712,
              longitude: 89.6339,
              containsPlaces: bhutanDestinations.map((d) => ({
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
          imageAlt="Pack horses on a forest trail near Paro, Bhutan"
          breadcrumbs={breadcrumbs}
          eyebrow="Destinations"
          headline="Bhutan, Four Ways"
          subheadline="A clifftop monastery above Paro, the traffic-light-free capital of Thimphu, riverside Punakha, and the quiet crane valley of Gangtey."
        />

        <CityGrid
          eyebrow="Explore Bhutan"
          heading="Bhutan Destinations"
          cities={bhutanDestinations}
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Bhutan: Frequently Asked Questions"
          faqs={faqs}
          whatsappMessage="Hi! I have a question about planning a trip to Bhutan."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Bhutan Trip Awaits."
          headlineItalic="Which Stop Fits?"
          subtext="Not sure which destinations suit your dates and interests? Tell us what you have in mind and we'll help you build the itinerary."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a trip to Bhutan."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
