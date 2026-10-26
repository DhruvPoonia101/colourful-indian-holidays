import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleByline, AuthorBioCard, ArticleBody, ArticleH2, ArticleP, ArticleUL } from "@/components/travel-guide/ArticleBody";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { ArticleFAQ } from "@/components/travel-guide/ArticleFAQ";
import { ArticleTopCTA } from "@/components/travel-guide/ArticleTopCTA";
import { ArticleMidCTA } from "@/components/travel-guide/ArticleMidCTA";
import { Price } from "@/components/shared/Price";
import { CurrencyControl } from "@/components/shared/CurrencyControl";
import { goldenTriangleTours } from "@/content/packages/golden-triangle-tour-classic";
import { indiaHighlights } from "@/content/packages/india-highlights";
import { rajasthanHighlights } from "@/content/packages/rajasthan-highlights";
import { keralaToursClassic } from "@/content/packages/kerala-tours-classic";
import { grandRajasthanCircuit } from "@/content/packages/grand-rajasthan-circuit";
import { PRICE_DISCLAIMER, RATE_PER_NIGHT_USD, getPackageStartingPrice } from "@/lib/pricing";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { articleJsonLd } from "@/lib/seo/article-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * Prices here come from src/lib/pricing.ts (nights x the per-night rate for
 * each tier), so this guide, the tour pages and the schema can never publish
 * different numbers. The rates were set by Dhruv on 25 Oct 2026 after a
 * competitor price check (see the comment in pricing.ts). They are STARTING
 * prices for two people sharing, flights excluded, and the page says so.
 *
 * Comparison figures quoted from other sites are attributed and linked:
 * Top Indian Holidays' published estimates, a Star Tours group departure, and
 * Little Bhutan's note on Bhutan's government fee. Re-check them before
 * updating this page.
 */

const title = "How Much Does a Private Tour of India Cost?";
const description =
  "What a private tour of India costs per person: prices by trip length for 3-4 star and palace hotels, what is included, what changes the price and what to budget on top.";
const pagePath = "/travel-guide/how-much-does-a-private-tour-of-india-cost";
const heroImage = "/images/destinations/amber-fort-jaipur.webp";
const datePublished = "2026-10-25";
const dateModified = datePublished;

export const metadata: Metadata = {
  title: `${title} (2026 Prices)`,
  description,
  alternates: {
    canonical: `${SITE_URL}${pagePath}`,
  },
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
  { name: "How Much Does a Private Tour of India Cost?", path: pagePath },
];

const COMFORT = RATE_PER_NIGHT_USD.india;
const LUXURY = RATE_PER_NIGHT_USD.luxury;

/** Trip lengths shown in the table: days -> nights -> starting price per tier. */
const LENGTHS = [5, 7, 10, 14].map((days) => {
  const nights = days - 1;
  return { days, nights, comfort: nights * COMFORT, luxury: nights * LUXURY };
});

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
const row = (days: number) => LENGTHS.find((l) => l.days === days)!;

const included = [
  "A private air-conditioned vehicle and driver for every transfer and all sightseeing",
  "An English-speaking guide at your stops",
  "Hotels chosen for your route, twin-sharing, with daily breakfast",
  "Monument entry fees as set out in the itinerary",
  "Hotel and transport taxes",
  "One point of contact from first enquiry to departure day",
];

const extra = [
  "International and domestic flights",
  "Visa fees (most visitors apply for an e-Visa online)",
  "Lunches and dinners unless the itinerary says otherwise",
  "Tips, travel insurance and personal expenses",
];

const examples = [rajasthanHighlights, goldenTriangleTours, keralaToursClassic, indiaHighlights, grandRajasthanCircuit]
  .map((c) => ({
    name: c.name,
    path: `/tours/${c.slug}`,
    days: c.itinerary.length,
    from: getPackageStartingPrice(c.slug, c.itinerary.length),
  }))
  .sort((a, b) => a.days - b.days);

const faqs: FaqItem[] = [
  {
    question: "How much does a private tour of India cost?",
    answer: `A private tour of India with us starts from about ${usd(COMFORT)} per person per night with 3-4 star hotels and from about ${usd(LUXURY)} per night with 5-star and palace hotels, for two people sharing, flights excluded. A 7-day trip therefore starts from about ${usd(row(7).comfort)} and a 14-day trip from about ${usd(row(14).comfort)} at the comfortable tier. Peak season and higher hotel categories cost more.`,
  },
  {
    question: "How much does a 10-day India trip cost?",
    answer: `A 10-day private trip (9 nights) starts from about ${usd(row(10).comfort)} per person with 3-4 star hotels and from about ${usd(row(10).luxury)} with 5-star and palace hotels, two sharing, flights excluded. The final quote depends on your dates, hotels and group size.`,
  },
  {
    question: "What is included in the price of a private tour?",
    answer:
      "A private air-conditioned vehicle and driver, an English-speaking guide at your stops, twin-sharing hotels with daily breakfast, monument entry fees as set out in the itinerary, hotel and transport taxes, and one point of contact from enquiry to departure. Flights, visa fees, most lunches and dinners, tips and travel insurance are extra.",
  },
  {
    question: "Does the price change in peak season?",
    answer:
      "Yes. Peak season, roughly October to March when the weather is coolest, costs more, with the highest prices around Christmas and New Year. Travelling in the shoulder or low season can bring the price down, but weather and what you can comfortably see change too. Our best-time guide shows each month region by region.",
  },
  {
    question: "Is a private tour more expensive than a group tour?",
    answer:
      "Per person, usually yes, because you are not sharing the vehicle and guide with strangers. What you pay for is your own schedule, hotels chosen for your route and a trip that does not run on a coach timetable. Group departures are cheaper but fixed in dates and pace.",
  },
  {
    question: "Are flights included in the price?",
    answer:
      "No. International and domestic flights are not included in the starting prices. We can book domestic flights on request if your route needs them.",
  },
  {
    question: "Can I pay in US dollars, pounds or euros?",
    answer:
      "Your final quote is given in US dollars or Indian rupees, whichever you prefer. The tour pages on this site can show approximate prices in pounds, euros, Australian and Canadian dollars so you can budget, but those are conversions rather than quotes.",
  },
  {
    question: "How much does a trip to Bhutan, Nepal or Ladakh cost?",
    answer: `Starting prices per person per night are about ${usd(RATE_PER_NIGHT_USD.nepal)} for Nepal, ${usd(RATE_PER_NIGHT_USD.ladakh)} for Ladakh, ${usd(RATE_PER_NIGHT_USD.kashmir)} for Kashmir and ${usd(RATE_PER_NIGHT_USD.bhutan)} for Bhutan. The Bhutan figure includes the government's Sustainable Development Fee of US$100 per person per night, which currently applies to most international visitors.`,
  },
];

export default function CostGuidePage() {
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
            articleJsonLd({
              headline: title,
              description,
              path: pagePath,
              image: heroImage,
              datePublished,
              dateModified,
            })
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
          imageAlt="Amber Fort at sunset, Jaipur, Rajasthan"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="How Much Does a Private Tour of India Cost?"
          subheadline="Real starting prices by trip length, what is included, what pushes the price up and what to budget on top."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I'd like a price for a private tour of India with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">
              A private tour of India starts from about <Price usd={COMFORT} /> per person per night with
              3-4 star hotels, and from about <Price usd={LUXURY} /> per night with 5-star and palace
              hotels.
            </span>{" "}
            That is for two people sharing, with your own driver and guide, and it excludes flights.
            A 7-day trip therefore starts from about <Price usd={row(7).comfort} />, and a 14-day trip
            from about <Price usd={row(14).comfort} />. Peak season and higher hotel categories cost
            more. The rest of this guide shows how the numbers work. To price your own route,
            try our <Link href="/tools/trip-cost-calculator" className="text-maroon underline">trip cost calculator</Link>.
          </ArticleP>

          <ArticleH2>Private Tour of India: Starting Prices by Trip Length</ArticleH2>
          <ArticleP>
            These are starting prices per person, two sharing. Your quote moves up from these with
            peak-season dates, better hotels and extras.
          </ArticleP>

          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">Starting price per person for a private tour of India by trip length and hotel category</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Trip length</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">3-4 star hotels</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">5-star and palace</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                {LENGTHS.map((l) => (
                  <tr key={l.days} className="border-b border-sand/60 last:border-0">
                    <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">
                      {l.days} days / {l.nights} nights
                    </th>
                    <td className="px-3 py-3 sm:px-5">
                      <Price usd={l.comfort} prefix="from " />
                    </td>
                    <td className="px-3 py-3 sm:px-5">
                      <Price usd={l.luxury} prefix="from " />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs italic text-ink-soft/70">
            Peak season and higher hotel categories cost more. {PRICE_DISCLAIMER}
          </p>
          <CurrencyControl className="mt-3" />

          <ArticleP>
            <span className="font-semibold text-ink">Outside India:</span> starting prices per person
            per night are about <Price usd={RATE_PER_NIGHT_USD.nepal} /> for Nepal,{" "}
            <Price usd={RATE_PER_NIGHT_USD.ladakh} /> for Ladakh, <Price usd={RATE_PER_NIGHT_USD.kashmir} />{" "}
            for Kashmir and <Price usd={RATE_PER_NIGHT_USD.bhutan} /> for Bhutan. A 7-night Bhutan trip
            starts from about <Price usd={7 * RATE_PER_NIGHT_USD.bhutan} />. Bhutan costs more because
            the government charges visitors a Sustainable Development Fee of US$100 per person per
            night, which is{" "}
            <a
              href="https://littlebhutan.com/travel-guide/bhutan-sdf/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon underline"
            >
              confirmed through 31 August 2027
            </a>
            . See our{" "}
            <Link href="/tours/bhutan-tours" className="text-maroon underline">Bhutan tours</Link>,{" "}
            <Link href="/tours/nepal-tours" className="text-maroon underline">Nepal tours</Link> and{" "}
            <Link href="/tours/kashmir-ladakh-tours" className="text-maroon underline">Kashmir and Ladakh tours</Link>.
          </ArticleP>

          <ArticleH2>What Is Included in the Price?</ArticleH2>
          <ArticleUL>
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ArticleUL>

          <ArticleH2>What Costs Extra?</ArticleH2>
          <ArticleUL>
            {extra.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ArticleUL>
          <ArticleP>
            Most visitors need an e-Visa, and our{" "}
            <Link href="/travel-guide/india-e-visa-guide" className="text-maroon underline">e-Visa guide</Link>{" "}
            explains the types, fees and stay limits. For cash, cards and tipping, see our{" "}
            <Link href="/travel-guide/india-currency-payments-guide" className="text-maroon underline">currency and payments guide</Link>.
          </ArticleP>

          <ArticleMidCTA
            text="Want a price for your own dates and hotels?"
            href="/contact"
            linkLabel="Get a free quote"
          />

          <ArticleH2>What Changes the Price of a Private Tour?</ArticleH2>
          <ArticleP>
            Two travellers can book the same 14-day route and pay quite different amounts. The
            main reasons:
          </ArticleP>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Travel dates.</span> Peak season, roughly October to March when the weather is coolest, costs more, with the highest prices around Christmas and New Year. Quieter dates bring hotel rates down. Our <Link href="/best-time-to-visit-india" className="text-maroon underline">best-time guide</Link> shows each month region by region.</li>
            <li><span className="font-semibold text-ink">Hotel category.</span> Moving from 3-4 star hotels to 5-star and heritage palaces is the biggest single jump, which is why the table has two columns.</li>
            <li><span className="font-semibold text-ink">Vehicle and guide.</span> A larger or more luxurious private vehicle, or a specialist guide, adds to the cost.</li>
            <li><span className="font-semibold text-ink">Group size.</span> Travelling alone usually costs more per person because the car and guide are not shared. Larger groups share them.</li>
            <li><span className="font-semibold text-ink">Route.</span> Internal flights, remote regions and national-park safaris add cost.</li>
          </ArticleUL>

          <ArticleH2>Example Private Tours and Their Starting Prices</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">Private tours with length and indicative starting price per person</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Private tour</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Days</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">From, per person</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                {examples.map((t) => (
                  <tr key={t.path} className="border-b border-sand/60 last:border-0">
                    <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">
                      <Link href={t.path} className="text-maroon underline underline-offset-2">{t.name}</Link>
                    </th>
                    <td className="px-3 py-3 sm:px-5">{t.days}</td>
                    <td className="px-3 py-3 sm:px-5">
                      <Price usd={t.from} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ArticleH2>How Does This Compare With Other Options?</ArticleH2>
          <ArticleP>
            Prices for private India trips vary widely by operator and hotel category. For
            comparison,
            <a
              href="https://www.topindianholidays.com/india-tour-package-cost"
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon underline"
            >
              Top Indian Holidays&apos; published estimates
            </a>{" "}
            for a private 7-day Golden Triangle trip run from about $680 to $1,000 per person with
            3-star hotels, $1,080 to $1,560 with 4-star and heritage hotels, and $3,170 to $5,130
            with 5-star palace hotels, excluding international flights. Group departures cost less
            but fix the dates and pace: for example,{" "}
            <a
              href="https://startours.co.uk/tour/10-Days-Best-of-Rajasthan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon underline"
            >
              Star Tours lists a 10-day 4-star Rajasthan group tour
            </a>{" "}
            from US$845, with flights not included.
          </ArticleP>
          <ArticleP>
            Starting prices are a floor, not a promise. The only way to know your price is a quote
            built on your dates, hotels and group size, which is free.
          </ArticleP>

          <ArticleH2>How Do You Get an Exact Price?</ArticleH2>
          <ArticleP>
            Tell us your dates, how many people are travelling, your preferred hotel category and
            the places you want to see. We build the itinerary privately and reply with a full
            quote, usually within 24 hours, in US dollars or Indian rupees. Browse our{" "}
            <Link href="/private-tours-of-india" className="text-maroon underline">private tours of India</Link>{" "}
            to see routes first. New to India? Start with our{" "}
            <Link href="/travel-guide/first-trip-to-india-guide" className="text-maroon underline">first-trip guide</Link>.
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
          headline="Want a Price for Your Own Trip?"
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests. Tell us what you have in mind and we'll reply with a quote within 24 hours."
          primaryLabel="Get a Free Quote"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like a price for a private tour of India with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
