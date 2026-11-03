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
import { goldenTriangleTours } from "@/content/packages/golden-triangle-tour-classic";
import { goldenTriangleUdaipurTours } from "@/content/packages/golden-triangle-tour-udaipur";
import { goldenTriangleRanthamboreTours } from "@/content/packages/golden-triangle-tour-ranthambore";
import { rajasthanHighlights } from "@/content/packages/rajasthan-highlights";
import { rajasthanTours } from "@/content/packages/rajasthan-tours-classic";
import { grandRajasthanCircuit } from "@/content/packages/grand-rajasthan-circuit";
import { getPackageStartingPrice } from "@/lib/pricing";
import { CLIMATE } from "@/content/months/climate";

const title = "Golden Triangle vs Rajasthan: Which Trip Is Right for You?";
const description =
  "Golden Triangle or Rajasthan? Compare cities, driving, cost and season, and see which suits your days: 5 to 7 days, 8 to 9 days or 10 days and more.";
const pagePath = "/travel-guide/golden-triangle-vs-rajasthan";
const heroImage = "/images/destinations/amber-fort-jaipur.webp";
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
  { name: "Golden Triangle vs Rajasthan", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    "question": "What is the difference between the Golden Triangle and Rajasthan?",
    "answer": "The Golden Triangle is a short loop of Delhi, Agra and Jaipur, built around the Taj Mahal. Rajasthan is a larger region of forts, palaces, desert and lakes. Jaipur belongs to both, but Delhi and Agra are not in Rajasthan."
  },
  {
    "question": "Which is better for a first trip to India?",
    "answer": "For most first-timers with under a week, the Golden Triangle. With 8 days or more, a Golden Triangle extended with Udaipur or Ranthambore, or a full Rajasthan tour."
  },
  {
    "question": "Is the Taj Mahal in Rajasthan?",
    "answer": "No. The Taj Mahal is in Agra, in Uttar Pradesh. It is part of the Golden Triangle. Our Rajasthan circuits start in Jaipur, so ask us to add Agra if you want the Taj Mahal."
  },
  {
    "question": "Can I do both in one trip?",
    "answer": "Yes, in about 10 to 14 days. Delhi, Agra and Jaipur first, then Ranthambore, Jodhpur and Udaipur. Our 2-week itinerary shows the route."
  },
  {
    "question": "How many days do I need for Rajasthan?",
    "answer": "Five days covers Jaipur and a little more, 8 days adds more cities, and 12 days is a full circuit with Jaisalmer and Udaipur. Rajasthan has long drives, so it rewards a slower pace."
  }
];

const circuits = [
  { name: "Golden Triangle Tour", path: "/tours/golden-triangle-tour-classic", pkg: goldenTriangleTours },
  { name: "Golden Triangle with Udaipur", path: "/tours/golden-triangle-tour-udaipur", pkg: goldenTriangleUdaipurTours },
  { name: "Golden Triangle with Ranthambore", path: "/tours/golden-triangle-tour-ranthambore", pkg: goldenTriangleRanthamboreTours },
  { name: "Rajasthan Highlights", path: "/tours/rajasthan-highlights", pkg: rajasthanHighlights },
  { name: "Rajasthan Tour", path: "/tours/rajasthan-tours-classic", pkg: rajasthanTours },
  { name: "Grand Rajasthan Circuit", path: "/tours/grand-rajasthan-circuit", pkg: grandRajasthanCircuit },
].map((c) => {
  const days = c.pkg.itinerary.length;
  return { name: c.name, path: c.path, days, from: getPackageStartingPrice(c.pkg.slug, days) };
});

const mayHigh = Math.round((CLIMATE.Delhi.high[4] + CLIMATE.Jaipur.high[4]) / 2);

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
          imageAlt="Amber Fort above Maota Lake, Jaipur"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="Golden Triangle vs Rajasthan"
          subheadline="How the two trips differ, what each costs and which to choose for your time."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I'd like help choosing between the Golden Triangle and Rajasthan with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">Choose the Golden Triangle if you have 5 to 7 days and want the Taj Mahal with the least driving. Choose a Rajasthan tour if you have 8 days or more and want forts, palaces and lakes at a slower pace.</span> With 8 or 9 days, add Udaipur or Ranthambore to the Golden Triangle and get a bit of both. The two overlap: Jaipur, the third city of the Golden Triangle, is in Rajasthan, while Delhi and Agra are not.
          </ArticleP>
          <ArticleH2>Golden Triangle vs Rajasthan at a Glance</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">Golden Triangle compared with Rajasthan</caption>
              <thead>
                <tr className="border-b border-sand text-ink"><th scope="col" className="px-3 py-3 font-semibold sm:px-5"></th><th scope="col" className="px-3 py-3 font-semibold sm:px-5">Golden Triangle</th><th scope="col" className="px-3 py-3 font-semibold sm:px-5">Rajasthan</th></tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Cities</th><td className="px-3 py-3 sm:px-5">Delhi, Agra and Jaipur</td><td className="px-3 py-3 sm:px-5">Jaipur, Ranthambore, Jodhpur, Jaisalmer, Udaipur, Pushkar and more</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Our tours</th><td className="px-3 py-3 sm:px-5">From <Price usd={circuits[0].from} /> for {circuits[0].days} days</td><td className="px-3 py-3 sm:px-5">From <Price usd={circuits[3].from} /> for {circuits[3].days} days, up to {circuits[5].days} days</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Taj Mahal</th><td className="px-3 py-3 sm:px-5">Yes, with a sunrise visit</td><td className="px-3 py-3 sm:px-5">Not on our Rajasthan circuits, which start in Jaipur. Ask us to add Agra</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Pace</th><td className="px-3 py-3 sm:px-5">Short drives, busy days</td><td className="px-3 py-3 sm:px-5">Longer drives, more rest days</td></tr>
                <tr><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Best for</th><td className="px-3 py-3 sm:px-5">First-timers short on time</td><td className="px-3 py-3 sm:px-5">Forts, palaces, desert and lakes</td></tr>
              </tbody>
            </table>
          </div>
          <ArticleH2>How Much Driving Is There?</ArticleH2>
          <ArticleP>
            The Golden Triangle is the shorter loop: Delhi to Agra takes 3 to 4 hours by road, and Delhi to Jaipur is about 280 km, or 5 to 6 hours. Rajasthan has more road time between its cities: Jaipur to Ranthambore is about 4 hours, Jaipur to Jodhpur 5.5 to 6 hours and Jodhpur to Udaipur about 5 hours. That is why Rajasthan suits a slower trip of 8 days or more. Our <Link href="/travel-guide/rajasthan-itinerary-guide" className="text-maroon underline">Rajasthan itinerary guide</Link> and <Link href="/travel-guide/golden-triangle-itinerary-guide" className="text-maroon underline">Golden Triangle guide</Link> cover each route in detail.
          </ArticleP>
          <ArticleH2>What Do the Tours Cost?</ArticleH2>
          <ArticleP>
            Starting prices for our tours, per person, two sharing, flights excluded. Hotel category, season and group size change the final quote.
          </ArticleP>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">Starting prices for Golden Triangle and Rajasthan tours</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Tour</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Days</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">From</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                {circuits.map((c) => (
                  <tr key={c.path} className="border-b border-sand/60 last:border-0">
                    <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">
                      <Link href={c.path} className="text-maroon underline">{c.name}</Link>
                    </th>
                    <td className="px-3 py-3 sm:px-5">{c.days}</td>
                    <td className="px-3 py-3 sm:px-5"><Price usd={c.from} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CurrencyControl center className="my-4" />
          <ArticleMidCTA
            text="Not sure which fits your dates?"
            href="/contact"
            linkLabel="Tell us your dates"
          />

          <ArticleH2>What About the Weather?</ArticleH2>
          <ArticleP>
            Both suit October to March. In summer both are hot: May daytime highs average around {mayHigh}°C in both Delhi and Jaipur (India Meteorological Department and weather2travel averages). Rajasthan&apos;s desert and lake cities make the cooler months even more important. See our <Link href="/best-time-to-visit-india" className="text-maroon underline">month-by-month guide</Link> and <Link href="/tools/when-to-go-planner" className="text-maroon underline">when-to-go planner</Link>.
          </ArticleP>
          <ArticleH2>Which Should You Choose?</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">5 to 7 days, first trip:</span> the Golden Triangle. It gets you to the Taj Mahal, Delhi and Jaipur with the least travelling.</li>
            <li><span className="font-semibold text-ink">8 or 9 days:</span> the Golden Triangle with Udaipur or Ranthambore, for lakes or tigers as well. See <Link href="/tours/golden-triangle-tour-udaipur" className="text-maroon underline">Golden Triangle with Udaipur</Link> and <Link href="/tours/golden-triangle-tour-ranthambore" className="text-maroon underline">with Ranthambore</Link>.</li>
            <li><span className="font-semibold text-ink">10 days or more:</span> Rajasthan, or the Golden Triangle plus Rajasthan. Our <Link href="/travel-guide/10-days-in-india-itinerary" className="text-maroon underline">10-day</Link>, <Link href="/travel-guide/2-weeks-in-india-itinerary" className="text-maroon underline">2-week</Link> and <Link href="/travel-guide/3-weeks-in-india-itinerary" className="text-maroon underline">3-week</Link> itineraries show how.</li>
            <li><span className="font-semibold text-ink">Been to India before:</span> Rajasthan on its own, at a slower pace and without Delhi and Agra.</li>
          </ArticleUL>
          <ArticleP>
            New to India? Read our <Link href="/travel-guide/first-trip-to-india-guide" className="text-maroon underline">first-trip guide</Link> and our <Link href="/travel-guide/taj-mahal-visiting-guide" className="text-maroon underline">Taj Mahal visiting guide</Link>, which covers the Friday closure that affects how you schedule Agra.
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
          headline="The Right Route, Planned Around You."
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help choosing between the Golden Triangle and Rajasthan with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
