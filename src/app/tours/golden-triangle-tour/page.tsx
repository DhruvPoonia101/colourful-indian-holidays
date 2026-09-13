import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { goldenTriangleVariants } from "@/content/golden-triangle-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Golden Triangle Tour Packages | Delhi, Agra & Jaipur, 5 Ways";
const description =
  "India's classic Delhi–Agra–Jaipur circuit, in five lengths — from the standard 6-day route to versions extended with Udaipur, Varanasi, a Ranthambore tiger safari, or Ajmer and Pushkar.";
const pagePath = "/tours/golden-triangle-tour";
const heroImage = "/images/destinations/agra-taj-mahal.webp";

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
  { name: "Tours & Packages", path: "/tours" },
  { name: "Golden Triangle Tour", path: pagePath },
];

export default function GoldenTriangleHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Taj Mahal at sunrise, Agra"
          breadcrumbs={breadcrumbs}
          eyebrow="Tours & Packages"
          headline="The Golden Triangle, Five Ways"
          subheadline="Delhi, Agra and Jaipur form the core of every version below — the difference is what you add on, and how many days you have."
        />

        <CityGrid
          eyebrow="Choose Your Route"
          heading="Golden Triangle Tour Packages"
          cities={goldenTriangleVariants}
          showActions
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Golden Triangle Trip Awaits."
          headlineItalic="Which Route Fits?"
          subtext="Not sure which version suits your dates and interests? Tell us what you have in mind and we'll help you pick — or build something in between."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help choosing a Golden Triangle tour package."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
