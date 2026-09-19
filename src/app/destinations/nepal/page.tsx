import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { nepalDestinations } from "@/content/nepal-destinations-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Nepal Destinations | Kathmandu, Pokhara, Chitwan & Everest Region";
const description =
  "Every Nepal destination we plan private tours for — Kathmandu's temples, Pokhara's lakeside views, Chitwan's jungle safaris, and the Everest region.";
const pagePath = "/destinations/nepal";
const heroImage = "/images/destinations/kathmandu-aerial-boudhanath-city.webp";

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
  { name: "Nepal", path: pagePath },
];

export default function NepalDestinationsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Aerial view of Boudhanath Stupa and Kathmandu city"
          breadcrumbs={breadcrumbs}
          eyebrow="Destinations"
          headline="Nepal, Six Ways"
          subheadline="Kathmandu's temple-filled valley, Pokhara's lakeside views, jungle safaris at Chitwan, and the world's highest mountain — every Nepal stop we plan private trips for."
        />

        <CityGrid
          eyebrow="Explore Nepal"
          heading="Nepal Destinations"
          cities={nepalDestinations}
          showActions
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Nepal Trip Awaits."
          headlineItalic="Which Stop Fits?"
          subtext="Not sure which destinations suit your dates and interests? Tell us what you have in mind and we'll help you build the itinerary."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a trip to Nepal."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
