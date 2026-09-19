import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { bhutanDestinations } from "@/content/bhutan-destinations-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
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

export default function BhutanDestinationsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
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
