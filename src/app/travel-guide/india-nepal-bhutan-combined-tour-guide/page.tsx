import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleByline, AuthorBioCard, ArticleBody, ArticleH2, ArticleP, ArticleUL } from "@/components/travel-guide/ArticleBody";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { ArticleFAQ } from "@/components/travel-guide/ArticleFAQ";
import { ArticleTopCTA } from "@/components/travel-guide/ArticleTopCTA";
import { ArticleMidCTA } from "@/components/travel-guide/ArticleMidCTA";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { articleJsonLd } from "@/lib/seo/article-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { Price } from "@/components/shared/Price";
import { CurrencyControl } from "@/components/shared/CurrencyControl";
import { indiaNepalTours } from "@/content/packages/india-nepal-tours";
import { indiaBhutanTours } from "@/content/packages/india-bhutan-tours";
import { indiaNepalBhutanTours } from "@/content/packages/india-nepal-bhutan-tours";
import { nepalBhutanTours } from "@/content/packages/nepal-bhutan-tours";
import { getPackageStartingPrice } from "@/lib/pricing";
import { PLANNERS, MONTH_NAMES, bestRanges, type Rating } from "@/content/when-to-go";

const title = "India, Nepal & Bhutan Combined: How to Plan the Trip";
const description =
  "How to combine India with Nepal, Bhutan or both: four routes with prices, how the flights work, the visas for each country, the best months and how many nights.";
const pagePath = "/travel-guide/india-nepal-bhutan-combined-tour-guide";
const heroImage = "/images/destinations/paro-taktsang-tigers-nest.webp";
const datePublished = "2026-10-26";
const dateModified = "2026-10-26";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}${pagePath}`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: `${SITE_URL}${heroImage}`, width: 1200, height: 630 }],
  },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Travel Guide", path: "/travel-guide" },
  { name: "India, Nepal and Bhutan Combined", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    "question": "Can I combine India, Nepal and Bhutan in one trip?",
    "answer": "Yes. Our India, Nepal and Bhutan tour runs 12 days: 3 nights in India, 3 in Nepal and 5 in Bhutan, with the flights between the countries included. You fly Delhi to Kathmandu, then Kathmandu to Paro."
  },
  {
    "question": "How do I get from India to Bhutan?",
    "answer": "By air. There is a direct flight from Delhi to Paro. You can also fly from Kathmandu to Paro. Our combined tours include the flight between the countries."
  },
  {
    "question": "Do I need three separate visas?",
    "answer": "Yes. India needs an e-Visa in advance, Nepal gives a visa on arrival to most nationalities, and Bhutan's visa is arranged in advance through a licensed operator."
  },
  {
    "question": "What is the best time to visit India, Nepal and Bhutan together?",
    "answer": "Our planner rates October to March good or better for the Golden Triangle, Nepal and Bhutan together, with November rated best for all three. The monsoon from June to September is the worst time."
  },
  {
    "question": "How much does a combined India, Nepal and Bhutan trip cost?",
    "answer": "Our 11-night India, Nepal and Bhutan route starts from about US$2,160 per person at our starting rates, two sharing, with the flights between the countries included but not your international flights. Bhutan's government fee makes its nights the most expensive."
  }
];

const combos = [
  { name: "India and Nepal", path: "/tours/india-nepal-tours", split: "5 India + 5 Nepal", pkg: indiaNepalTours },
  { name: "India and Bhutan", path: "/tours/india-bhutan-tours", split: "5 India + 5 Bhutan", pkg: indiaBhutanTours },
  { name: "India, Nepal and Bhutan", path: "/tours/india-nepal-bhutan-tours", split: "3 India + 3 Nepal + 5 Bhutan", pkg: indiaNepalBhutanTours },
  { name: "Nepal and Bhutan", path: "/tours/nepal-bhutan-tours", split: "5 Nepal + 6 Bhutan", pkg: nepalBhutanTours },
].map((c) => {
  const days = c.pkg.itinerary.length;
  return { name: c.name, path: c.path, split: c.split, days, from: getPackageStartingPrice(c.pkg.slug, days) };
});

const together: Rating[] = MONTH_NAMES.map((_, i) =>
  Math.min(...["golden-triangle", "nepal", "bhutan"].map((id) => PLANNERS.find((p) => p.id === id)!.ratings[i])) as Rating
);
const bestTogether = bestRanges(together, 3);
const goodTogether = bestRanges(together, 2);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({ headline: title, description, path: pagePath, image: heroImage, datePublished, dateModified })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Tiger's Nest Monastery above the Paro valley, Bhutan"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="India, Nepal and Bhutan Combined"
          subheadline="Four routes, how the flights and visas work, when to go and what it costs."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I'd like to combine India with Nepal or Bhutan with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">You can combine India with Nepal, Bhutan or both in 11 to 12 days: the Golden Triangle, then a flight to Kathmandu or a direct flight to Paro.</span> We run four private routes. The main trade-off is time and cost: Bhutan charges a government fee for every night, so it is the most expensive place per night, while Nepal is close to India&apos;s rates. This guide covers the routes, flights, visas, season and prices.
          </ArticleP>
          <ArticleH2>Which Combined Routes Do We Offer?</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">Combined India, Nepal and Bhutan tours compared</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Route</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Nights</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">From</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                {combos.map((c) => (
                  <tr key={c.path} className="border-b border-sand/60 last:border-0">
                    <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">
                      <Link href={c.path} className="text-maroon underline">{c.name}</Link>
                      <span className="block text-xs font-normal text-ink-soft/80">{c.days} days</span>
                    </th>
                    <td className="px-3 py-3 sm:px-5">{c.split}</td>
                    <td className="px-3 py-3 sm:px-5"><Price usd={c.from} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CurrencyControl center className="my-4" />
          <ArticleP>
            Prices are starting prices per person, two sharing, from the same nightly rates as our other tours. International flights are not included.
          </ArticleP>
          <ArticleH2>How Do the Flights Between the Countries Work?</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">India and Nepal:</span> you fly from Delhi to Kathmandu. On our India and Nepal tour the flight leaves from Delhi after Jaipur.</li>
            <li><span className="font-semibold text-ink">India and Bhutan:</span> there is a direct flight from Delhi to Paro, with no stop in Nepal.</li>
            <li><span className="font-semibold text-ink">India, Nepal and Bhutan:</span> Delhi to Kathmandu, then Kathmandu to Paro.</li>
            <li><span className="font-semibold text-ink">Nepal and Bhutan:</span> Kathmandu to Paro.</li>
          </ArticleUL>
          <ArticleP>
            Our combined tours include the connecting flight between the countries. Your international flights to and from the start and end cities are not included.
          </ArticleP>
          <ArticleH2>Which Visas Do You Need?</ArticleH2>
          <ArticleP>
            You need a visa for each country, and each works differently. India: most visitors apply for an e-Visa in advance; see our <Link href="/travel-guide/india-e-visa-guide" className="text-maroon underline">e-Visa guide</Link> or our <Link href="/travel-guide/india-visa-for-us-citizens" className="text-maroon underline">guide for US citizens</Link>. Nepal: a visa is available on arrival for most nationalities; see our <Link href="/travel-guide/nepal-visa-and-best-time-to-visit" className="text-maroon underline">Nepal guide</Link>. Bhutan: the visa is arranged in advance through a licensed operator, and the government charges a daily Sustainable Development Fee, which is included in our Bhutan tour prices. See our <Link href="/travel-guide/bhutan-visa-fee-and-best-time-to-visit" className="text-maroon underline">Bhutan guide</Link> for the current figures. Fees change, so confirm them on the official portals before you travel.
          </ArticleP>
          <ArticleH2>When Is the Best Time for All Three?</ArticleH2>
          <ArticleP>
            Our planner rates the months for each region. The months rated good or better for the Golden Triangle, Nepal and Bhutan together are {goodTogether}. Rated best for all three: {bestTogether}. Avoid the monsoon from June to September, when Nepal&apos;s mountains and Bhutan&apos;s views are hidden and the north is hot or wet. Check each month in our <Link href="/tools/when-to-go-planner" className="text-maroon underline">when-to-go planner</Link>.
          </ArticleP>
          <ArticleH2>How Many Nights Should You Spend in Each Country?</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">India:</span> 3 to 5 nights covers Delhi, Agra and Jaipur. Add Ranthambore or Udaipur for 2 to 3 nights more.</li>
            <li><span className="font-semibold text-ink">Nepal:</span> 3 to 5 nights covers Kathmandu and Nagarkot, with Pokhara as an extension.</li>
            <li><span className="font-semibold text-ink">Bhutan:</span> 5 to 6 nights covers Thimphu, Punakha and Paro with the Tiger&apos;s Nest hike. Bhutan&apos;s nightly rate is the highest, so most travellers keep it to a week or less.</li>
          </ArticleUL>
          <ArticleP>
            For longer trips see our <Link href="/travel-guide/2-weeks-in-india-itinerary" className="text-maroon underline">2-week</Link> and <Link href="/travel-guide/3-weeks-in-india-itinerary" className="text-maroon underline">3-week</Link> itineraries. You can add your own nights in our <Link href="/tools/trip-cost-calculator" className="text-maroon underline">trip cost calculator</Link>.
          </ArticleP>
          <ArticleMidCTA
            text="Want a combined route built around your dates?"
            href="/contact"
            linkLabel="Get a free quote"
          />

          <ArticleH2>Should You Book Each Country Separately?</ArticleH2>
          <ArticleP>
            If you have more than three weeks, separate trips give each country more time: our <Link href="/tours/golden-triangle-tour" className="text-maroon underline">Golden Triangle</Link>, <Link href="/tours/nepal-tours" className="text-maroon underline">Nepal</Link> and <Link href="/tours/bhutan-tours" className="text-maroon underline">Bhutan</Link> tours go deeper. A combined route suits travellers with 11 to 14 days who want a taste of each country with one operator, one plan and the flights arranged.
          </ArticleP>

          <ArticleFAQ faqs={faqs} />
        </ArticleBody>

        <AuthorBioCard
          authorName="Dhruv Poonia"
          authorInitials="DP"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          bioParagraphs={[
            "Dhruv Poonia is the Digital & Marketing Manager for Colourful Indian Holidays, working alongside a family travel business that has arranged tours across India, Nepal and Bhutan since 2007. He also oversees the company's sister sites, Rajasthan Travel Agency and Palace on Wheels Tour.",
            "He writes and maintains the destination guides, route information and travel advice published on this site, drawing on his day-to-day work planning itineraries for international travellers to keep every page accurate and current.",
          ]}
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Three Countries, One Plan."
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to combine India with Nepal or Bhutan with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
