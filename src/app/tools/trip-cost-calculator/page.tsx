import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleBody, ArticleH2, ArticleP, ArticleUL } from "@/components/travel-guide/ArticleBody";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { ArticleFAQ } from "@/components/travel-guide/ArticleFAQ";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { TripCostCalculator } from "@/components/tools/TripCostCalculator";

/**
 * Uses RATE_PER_NIGHT_USD from src/lib/pricing.ts, the same rates as the tour
 * pages, so figures cannot drift. Indicative starting prices (two sharing,
 * flights excluded), not quotes. */

const title = "Trip Cost Calculator: How Much Will Your India Trip Cost?";
const description =
  "Free India, Nepal and Bhutan trip cost calculator. Choose your nights by region and see a starting price per person, in your own currency.";
const pagePath = "/tools/trip-cost-calculator";
const heroImage = "/images/destinations/amber-fort-jaipur.webp";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}${pagePath}`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: `${SITE_URL}${heroImage}`, width: 1200, height: 630 }],
  },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Trip Cost Calculator", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "How much does a trip to India cost?",
    answer:
      "A private trip with your own driver and guide starts from about $100 per person per night with 3-4 star hotels and about $250 per night with 5-star and palace hotels, two sharing, flights excluded. This calculator adds those nightly rates for the nights you choose.",
  },
  {
    question: "Is this a quote?",
    answer:
      "No. It is an indicative starting price. Your final price depends on your dates, hotel category, group size and how you want the trip built, and we confirm it in INR or USD.",
  },
  {
    question: "What is included in the price?",
    answer:
      "A private driver and car, a guide, hotels with breakfast, and the sightseeing on your itinerary. Flights, visas, travel insurance and personal spending are not included. Our cost guide lists inclusions in detail.",
  },
  {
    question: "Why is Bhutan so much more per night?",
    answer:
      "Bhutan charges a government Sustainable Development Fee of US$100 per adult per night, and our Bhutan rate includes it along with the visa fee. See our Bhutan guide for the fee and best time to visit.",
  },
  {
    question: "Why does the price change when I pick a currency?",
    answer:
      "The calculator works in US dollars and converts to your chosen currency at an approximate rate, so the figure can differ slightly from your final quote.",
  },
  {
    question: "Can I get a price for a solo traveller?",
    answer:
      "Yes. Solo travellers usually pay a single supplement because the hotel room and car are not shared, so message us for an exact quote.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "India, Nepal and Bhutan Trip Cost Calculator",
  url: `${SITE_URL}${pagePath}`,
  applicationCategory: "TravelApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
};

export default function ToolPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Amber Fort at sunset, Jaipur, Rajasthan"
          breadcrumbs={breadcrumbs}
          eyebrow="Free Tool"
          headline="Trip Cost Calculator"
          subheadline="Choose your nights and see a starting price per person, in your own currency."
        />

        <ArticleBody>
          <ArticleP>
            Add the nights you want in each place and see a starting price per person. The rates are the same ones shown on our tour pages,
            so the calculator, the <Link href="/tours/10-14-day-tours" className="text-maroon underline">tour pages</Link> and our <Link href="/travel-guide/how-much-does-a-private-tour-of-india-cost" className="text-maroon underline">cost guide</Link> always agree.
          </ArticleP>
          <TripCostCalculator />

          <ArticleH2>How the Price Is Worked Out</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Per night, per person:</span> each place has a starting nightly rate, and the calculator multiplies it by your nights.</li>
            <li><span className="font-semibold text-ink">Two sharing:</span> prices assume two people share a room. Solo travellers pay a single supplement.</li>
            <li><span className="font-semibold text-ink">Flights excluded:</span> international and domestic flights are priced separately.</li>
            <li><span className="font-semibold text-ink">Bhutan:</span> the rate includes the government fee and visa. Read our <Link href="/travel-guide/bhutan-visa-fee-and-best-time-to-visit" className="text-maroon underline">Bhutan guide</Link>.</li>
          </ArticleUL>
          <ArticleP>
            Travelling in peak season (October to March) or in a higher hotel category costs more. For what is included and what changes the price, read our <Link href="/travel-guide/how-much-does-a-private-tour-of-india-cost" className="text-maroon underline">full cost guide</Link>.
            Not sure when to go? Try our <Link href="/tools/when-to-go-planner" className="text-maroon underline">when-to-go planner</Link>.
          </ArticleP>

          <ArticleFAQ faqs={faqs} />
        </ArticleBody>

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Ready for an Exact Quote?"
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I used the trip cost calculator and would like a quote."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
