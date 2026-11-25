import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import {
  flagshipDestinations,
  wildlifeDestinations,
  beachDestinations,
  himalayanDestinations,
  moreIndiaDestinations,
  rajasthanCityDestinations,
  nepalDestinations,
  bhutanDestinations,
} from "@/content/destinations-hub";
import { sriLankaDestinations } from "@/content/sri-lanka-destinations-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Destinations | India, Nepal, Bhutan & Sri Lanka Private Tours";
const description =
  "Every destination we plan private tours for: Rajasthan, Agra, tiger reserves and India's coasts, plus Kathmandu, Bhutan's Paro and Sri Lanka's Sigiriya.";
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
          subheadline="From Rajasthan's forts and India's tiger reserves to Kathmandu, Bhutan's dzongs and Sri Lanka's Lion Rock — every destination we build private itineraries for."
        />

        <CityGrid
          eyebrow="Flagship Destinations"
          heading="Where Most Journeys Begin"
          cities={flagshipDestinations}
          showActions
        />

        <CityGrid
          eyebrow="Rajasthan"
          heading="Rajasthan's Royal Cities"
          cities={rajasthanCityDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Wildlife & Safari"
          heading="India's Tiger Reserves & Beyond"
          cities={wildlifeDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Beaches & Coast"
          heading="India's Coastlines"
          cities={beachDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="The Himalayas"
          heading="Mountains, Valleys & Hill Stations"
          cities={himalayanDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="More of India"
          heading="Further Afield"
          cities={moreIndiaDestinations}
          topDivider
          showActions
        />

        <section className="border-t border-sand/70 py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <p className="max-w-3xl text-base leading-relaxed text-ink-soft">
              <span className="font-semibold text-ink">Beyond India:</span> we also plan private
              trips in three neighbouring countries. Start with our country overviews for{" "}
              <Link href="/destinations/nepal" className="text-maroon underline">Nepal</Link>,{" "}
              <Link href="/destinations/bhutan" className="text-maroon underline">Bhutan</Link> and{" "}
              <Link href="/destinations/sri-lanka" className="text-maroon underline">Sri Lanka</Link>,
              or compare multi-country routes on our{" "}
              <Link href="/tours/nepal-and-bhutan-tours" className="text-maroon underline">Nepal and Bhutan tours</Link>{" "}
              page.
            </p>
          </div>
        </section>

        <CityGrid
          eyebrow="Nepal"
          heading="Nepal Destinations"
          cities={nepalDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Bhutan"
          heading="Bhutan Destinations"
          cities={bhutanDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Sri Lanka"
          heading="Sri Lanka Destinations"
          cities={sriLankaDestinations}
          topDivider
          showActions
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your India, Nepal, Bhutan & Sri Lanka Journey Awaits."
          headlineItalic="Where Will You Begin?"
          subtext="Every itinerary is built privately around your dates and interests — tell us what you have in mind and we'll send a tailored itinerary within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a tour with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
