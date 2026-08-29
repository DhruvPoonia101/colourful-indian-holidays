import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { festivalCards } from "@/content/festivals-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Festival Tours | Time Your India Trip Around a Real Celebration";
const description =
  "Plan your India trip around a real festival — the Pushkar Camel Fair, Kumbh Mela, Diwali, Goa Carnival, Onam and more, with guides on what to expect and when to go.";
const pagePath = "/themes/festival-tours";
const heroImage = "/images/packages/jaipur-bikaner-jaisalmer-jodhpur-udaipur-pushkar.webp";

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
  { name: "Experiences", path: "/themes" },
  { name: "Festival Tours", path: pagePath },
];

export default function FestivalToursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Traditional Rajasthani performers at the Pushkar Camel Fair"
          breadcrumbs={breadcrumbs}
          eyebrow="Experiences"
          headline="Time Your Trip Around a Real Celebration"
          subheadline="India's festival calendar runs year-round — from the Pushkar Camel Fair to Diwali, Kumbh Mela and Kerala's Onam. Here's what to expect from each, and when to go."
        />

        <CityGrid
          eyebrow="Festival Tours"
          heading="Choose a Festival"
          cities={festivalCards}
          showActions
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Festival Trip Awaits."
          headlineItalic="Which Will You Choose?"
          subtext="Tell us which festival interests you and your travel window — we'll build an itinerary around it, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around an Indian festival with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
