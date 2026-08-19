import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { MoreDestinationsList } from "@/components/destinations/MoreDestinationsList";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { featuredThemes, moreThemes } from "@/content/themes-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";

const title = "Experiences | Heritage, Wildlife, Spiritual & Adventure Tours";
const description =
  "Every kind of trip we build — heritage and fort tours, wildlife safaris, spiritual journeys to Varanasi, desert safaris, honeymoon travel, and festival-timed itineraries.";
const pagePath = "/themes";
const heroImage = "/images/destinations/mehrangarh-fort-jodhpur.webp";

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
  { name: "Experiences", path: pagePath },
];

export default function ThemesHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Mehrangarh Fort overlooking the blue city of Jodhpur"
          breadcrumbs={breadcrumbs}
          eyebrow="Experiences"
          headline="Every Kind of Journey, One Team"
          subheadline="Heritage, wildlife, spirituality, adventure and romance — tell us what draws you to India, and we'll build a trip around it."
        />

        <CityGrid
          eyebrow="Popular Experiences"
          heading="What Kind of Trip Are You Looking For?"
          cities={featuredThemes}
        />

        <MoreDestinationsList
          destinations={moreThemes}
          toggleLabel="Explore More Experiences"
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
