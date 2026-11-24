import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { MoreDestinationsList } from "@/components/destinations/MoreDestinationsList";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { featuredPackages, morePackages } from "@/content/packages-hub";
import { allTourGroups } from "@/content/all-tours";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Tour Packages | Private India, Nepal, Bhutan & Sri Lanka Tours";
const description =
  "Every private tour we run: Golden Triangle, Rajasthan, safaris, Kerala, the Himalayas, Nepal, Bhutan and Sri Lanka, with day-by-day plans and prices.";
const pagePath = "/tours";
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
  { name: "Tours & Packages", path: pagePath },
];

export default function PackagesHubPage() {
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
          eyebrow="Tours & Packages"
          headline="Every Tour We Build, Tailored to You"
          subheadline="No fixed departure dates or group sizes — every itinerary here is a starting point we build around your own dates and interests."
        />

        <CityGrid
          eyebrow="Popular Categories"
          heading="Where to Start"
          cities={featuredPackages}
          showActions
        />

        <MoreDestinationsList
          destinations={morePackages}
          toggleLabel="Explore More Tour Categories"
        />

        {allTourGroups.map((group) => (
          <CityGrid
            key={group.id}
            eyebrow={group.eyebrow}
            heading={group.heading}
            cities={group.tours}
            topDivider
            showActions
          />
        ))}

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your India, Nepal, Bhutan & Sri Lanka Journey Awaits."
          headlineItalic="Where Will You Begin?"
          subtext="Every itinerary is built privately around your dates and interests — tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a tour with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
