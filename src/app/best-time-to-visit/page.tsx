import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";

const title = "Best Time to Visit India | A Month-by-Month & Region-by-Region Guide";
const description =
  "When to visit Rajasthan, Delhi, wildlife parks and India's coastlines — a real, region-by-region guide to planning your trip around the right season.";
const pagePath = "/best-time-to-visit";
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
  { name: "Travel by Month", path: pagePath },
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const regionGuide = [
  { region: "Rajasthan", season: "October – March", note: "Cool, dry days — the classic season for forts and cities alike." },
  { region: "Delhi", season: "October – March", note: "Comfortable, though November–December can bring heavy smog." },
  { region: "Agra", season: "October – March", note: "Often the hottest Golden Triangle stop April–June." },
  { region: "Varanasi", season: "October – March", note: "Cool mornings for sunrise boat rides on the Ganges." },
  { region: "Ranthambore, Sariska & Bandhavgarh", season: "October – June", note: "April–June heat often brings the best tiger sightings, despite the temperatures." },
  { region: "Kaziranga", season: "November – April", note: "Closed June–September for the Brahmaputra monsoon floods." },
  { region: "Tamil Nadu & Gujarat Coasts", season: "November – February", note: "Cool, dry conditions for coastal sightseeing." },
  { region: "Maharashtra Coast", season: "October – February", note: "Best before the Konkan coast's summer humidity sets in." },
  { region: "Andaman Islands", season: "October – May", note: "Best diving and beach conditions; heavy monsoon rain June–September." },
];

export default function BestTimeHubPage() {
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
          eyebrow="Travel by Month"
          headline="When to Go, Region by Region"
          subheadline="India is too large for one single travel season — here's how the best time to visit actually varies by destination."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Quick Reference" heading="Best Time to Visit, by Region" />
              <div className="mt-8 overflow-hidden rounded-2xl border border-sand">
                {regionGuide.map((row, i) => (
                  <div
                    key={row.region}
                    className={`grid grid-cols-1 gap-1 p-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-4 ${
                      i % 2 === 0 ? "bg-white" : "bg-cream/50"
                    } ${i !== 0 ? "border-t border-sand" : ""}`}
                  >
                    <div>
                      <p className="font-display text-base font-semibold text-ink">{row.region}</p>
                      <p className="mt-0.5 text-sm text-ink-soft">{row.note}</p>
                    </div>
                    <p className="whitespace-nowrap text-sm font-semibold text-maroon">{row.season}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Browse by Month" heading="Explore a Specific Month" align="center" />
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {months.map((month) => (
                  <Link
                    key={month}
                    href={`/best-time-to-visit/${month.toLowerCase()}`}
                    className="rounded-full border border-sand bg-white px-5 py-2 text-sm font-medium text-ink transition-all duration-200 hover:scale-105 hover:border-maroon hover:text-maroon"
                  >
                    {month}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your India Journey Awaits."
          headlineItalic="Where Will You Begin?"
          subtext="Tell us your travel window and where you'd like to go — we'll build an itinerary around the right season, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning the right time to visit India with Colourful Indian Holidays."
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
