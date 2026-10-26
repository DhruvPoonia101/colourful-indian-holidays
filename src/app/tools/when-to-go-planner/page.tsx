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
import { WhenToGoPlanner } from "@/components/tools/WhenToGoPlanner";
import { PLANNERS, bestRanges, type Rating } from "@/content/when-to-go";

function alsoGood(ratings: readonly Rating[]): string {
  const good = ratings.map((r, i) => (r === 2 ? i : -1)).filter((i) => i >= 0);
  if (!good.length) return "None";
  const names = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return good.map((i) => names[i]).join(", ");
}

/**
 * Ratings and notes live in src/content/when-to-go.ts with their sources.
 * Editorial guidance from climate averages, park seasons and published
 * best-time guides; not forecasts. */

const title = "When to Go: Best Time to Visit India, Kerala, Bhutan and Nepal";
const description =
  "A free planner for the best month to visit India, Kerala, tiger reserves, Bhutan and Nepal, with typical weather and what to expect each month.";
const pagePath = "/tools/when-to-go-planner";
const heroImage = "/images/destinations/jaipur-hawa-mahal.webp";

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
  { name: "When to Go Planner", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "What is the best month to visit India?",
    answer:
      "It depends on where you go. For the Golden Triangle and Rajasthan, November to February is best. For Kerala, December to March is driest. For tiger safaris, March to June gives the best odds but is hot. Use the planner above to compare regions.",
  },
  {
    question: "When should I avoid visiting India?",
    answer:
      "Most of North India is very hot from May to June and wet from July to September, and many tiger reserves close their core zones for the monsoon. Kerala is wettest from June to August.",
  },
  {
    question: "When is the best time to visit Bhutan?",
    answer:
      "March to May and October to November. October is the most popular month, with clear skies and festivals, and spring brings rhododendrons and the Paro Tsechu festival.",
  },
  {
    question: "When is the best time to visit Nepal?",
    answer:
      "October to November and March to April are the peak months, with the clearest mountain views. The June to August monsoon hides the mountains and makes trekking difficult.",
  },
  {
    question: "How are the ratings decided?",
    answer:
      "They are our editorial judgement, built from published climate averages, park seasons and travel-guide sources, and they are guidance rather than forecasts. Weather varies year to year, so ask us about your specific dates.",
  },
  {
    question: "Which month is cheapest to travel?",
    answer:
      "Prices are generally lower in the monsoon and hot months and higher in peak season, October to March. A shoulder month such as late February or early October can balance comfort and value.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "When to Go Planner",
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
          imageAlt="Hawa Mahal, Jaipur, Rajasthan"
          breadcrumbs={breadcrumbs}
          eyebrow="Free Tool"
          headline="When Should You Go?"
          subheadline="Pick a destination and see the best months, with typical weather for each."
        />

        <ArticleBody>
          <ArticleP>
            Pick where you are going and tap a month. The planner shows how good each month is for that destination, with the typical weather and
            what is happening. For the full picture of any month, see our <Link href="/best-time-to-visit-india" className="text-maroon underline">best time to visit India</Link> guide.
          </ArticleP>
          <WhenToGoPlanner />

          <ArticleH2>Best Months at a Glance</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">Best months by destination</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Destination</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Best</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Also good</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                {PLANNERS.map((p, i) => (
                  <tr key={p.id} className={i === PLANNERS.length - 1 ? "" : "border-b border-sand/60"}>
                    <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">{p.label}</th>
                    <td className="px-3 py-3 sm:px-5">{bestRanges(p.ratings, 3)}</td>
                    <td className="px-3 py-3 sm:px-5">{alsoGood(p.ratings)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ArticleH2>How the Ratings Work</ArticleH2>
          <ArticleP>
            For the Golden Triangle and Rajasthan we use the published average temperature and rainfall for Delhi and Jaipur, and for Kerala the
            averages for Kochi. For tiger safaris we use park seasons and closures. For Bhutan and Nepal we use published best-time guides. The ratings
            are guidance, not forecasts, and conditions vary by year and place. See our <Link href="/travel-guide/which-tiger-reserve-in-india-and-when-to-go" className="text-maroon underline">tiger reserve guide</Link>, 
            <Link href="/travel-guide/bhutan-visa-fee-and-best-time-to-visit" className="text-maroon underline">Bhutan guide</Link> and <Link href="/travel-guide/nepal-visa-and-best-time-to-visit" className="text-maroon underline">Nepal guide</Link> for the detail.
            Ready to price a trip? Use our <Link href="/tools/trip-cost-calculator" className="text-maroon underline">trip cost calculator</Link>.
          </ArticleP>

          <ArticleFAQ faqs={faqs} />
        </ArticleBody>

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Know When? Let's Plan It."
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I used the when-to-go planner and would like help choosing dates."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
