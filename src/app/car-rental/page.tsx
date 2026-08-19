import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { fleetCards, carRentalHighlights } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";

const title = "Car Rental with Driver | Private Transport Across India";
const description =
  "Private, air-conditioned vehicles with an experienced driver for your whole India itinerary — sedans, SUVs, tempo travellers, luxury cars and coaches.";
const pagePath = "/car-rental";
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
  { name: "Car Rental", path: pagePath },
];

export default function CarRentalHubPage() {
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
          eyebrow="Car Rental"
          headline="Private Transport, Your Whole Trip"
          subheadline="Every itinerary we build includes a private, air-conditioned vehicle and an experienced driver — no self-drive, no switching cars at every city."
        />

        <CityGrid
          eyebrow="Our Fleet"
          heading="Choose Your Vehicle"
          cities={fleetCards}
        />

        <HighlightsStrip
          eyebrow="Why Book With Us"
          heading="What's Included"
          highlights={carRentalHighlights}
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your India Journey Awaits."
          headlineItalic="Where Will You Begin?"
          subtext="Tell us your group size and itinerary, and we'll match you with the right vehicle — usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to arrange a private car and driver with Colourful Indian Holidays."
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
