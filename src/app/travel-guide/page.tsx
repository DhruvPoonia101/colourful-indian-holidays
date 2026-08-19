import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { guideArticles } from "@/content/travel-guide";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";

const title = "Travel Guide | India & Rajasthan Travel Tips for International Visitors";
const description =
  "Practical guides to India and Rajasthan for international travellers — pilgrimage destinations, must-see monuments, festivals, and more, written by our Jaipur-based team.";
const pagePath = "/travel-guide";
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
  { name: "Travel Guide", path: pagePath },
];

export default function TravelGuidePage() {
  const publishedArticles = guideArticles.filter((article) => article.published);

  const cards = publishedArticles.map((article) => ({
    name: article.title,
    tagline: article.category,
    description: article.excerpt,
    href: `/travel-guide/${article.slug}`,
    image: article.image,
    imageAlt: article.imageAlt,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Amber Fort at sunset, Jaipur"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="Practical Guides to India, Written by People Who Live Here"
          subheadline="Real travel advice for international visitors — pilgrimage destinations, monuments, festivals and more, from our Jaipur-based team."
        />

        <CityGrid eyebrow="Latest Guides" heading="Start Here" cities={cards} />

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
