import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { MoreDestinationsList } from "@/components/destinations/MoreDestinationsList";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import {
  flagshipDestinations,
  wildlifeDestinations,
  beachDestinations,
  moreDestinations,
} from "@/content/destinations-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";

const title = "India Destinations | Rajasthan, Delhi, Wildlife & Beaches";
const description =
  "Every destination we plan private tours for — Rajasthan, Delhi, Agra and Varanasi, wildlife safaris at Ranthambore and beyond, and India's coastlines from Tamil Nadu to the Andaman Islands.";
const pagePath = "/destinations";
const heroImage = "/images/destinations/amber-fort-jaipur.webp";

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
  { name: "Destinations", path: pagePath },
];

export default function DestinationsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Amber Fort at sunset, Jaipur, Rajasthan"
          breadcrumbs={breadcrumbs}
          eyebrow="Destinations"
          headline="Everywhere We Plan Private Journeys"
          subheadline="From Rajasthan's forts to tiger safaris and India's coastlines — every destination we build private itineraries for."
        />

        <CityGrid
          eyebrow="Flagship Destinations"
          heading="Where Most Journeys Begin"
          cities={flagshipDestinations}
        />

        <CityGrid
          eyebrow="Wildlife & Safari"
          heading="India's Tiger Reserves & Beyond"
          cities={wildlifeDestinations}
          topDivider
        />

        <CityGrid
          eyebrow="Beaches & Coast"
          heading="India's Coastlines"
          cities={beachDestinations}
          topDivider
        />

        <MoreDestinationsList
          destinations={moreDestinations}
          toggleLabel="Explore More Destinations"
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your India Journey Awaits."
          headlineItalic="Where Will You Begin?"
          subtext="Every itinerary is built privately around your dates and interests — tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a tour with Colourful Indian Holidays."
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
