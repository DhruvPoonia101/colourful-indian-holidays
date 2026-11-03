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
import { RATE_PER_NIGHT_USD } from "@/lib/pricing";

const title = "What's Included in a Private Tour of India? (And What Isn't)";
const description =
  "What a private tour of India includes: vehicle, guide, hotels, breakfast, entry fees and taxes. What costs extra, how Bhutan differs and how to compare quotes.";
const pagePath = "/travel-guide/whats-included-in-a-private-tour-of-india";
const heroImage = "/images/destinations/agra-taj-mahal.webp";
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
  { name: "What's Included", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    "question": "What is included in a private tour of India?",
    "answer": "A private vehicle and driver, an English-speaking guide, hotels twin-sharing with daily breakfast, monument entry fees as set out in the itinerary, and hotel and transport taxes."
  },
  {
    "question": "What is not included in a private tour of India?",
    "answer": "International and domestic flights, visa fees, lunches and dinners unless the itinerary says otherwise, tips, travel insurance and personal expenses."
  },
  {
    "question": "Are flights included in a tour of India?",
    "answer": "Not on our standard tours. International and domestic flights are priced separately. Our combined India and Nepal or Bhutan tours include the connecting flight between the countries but not your international flights."
  },
  {
    "question": "Are meals included?",
    "answer": "Breakfast is included daily in India and Nepal. Lunches and dinners are extra unless the itinerary says otherwise. In Bhutan, all meals are included."
  },
  {
    "question": "Is the Bhutan visa included in the tour price?",
    "answer": "No. The Sustainable Development Fee is included, but the visa fee is listed as extra and is arranged in advance through your licensed operator."
  }
];

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
          imageAlt="The Taj Mahal at sunrise, Agra"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="What's Included in a Private Tour of India"
          subheadline="What is in the price, what costs extra and how to check any quote."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I'd like to know exactly what is included in a private tour with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">A private tour of India usually includes your own driver and air-conditioned vehicle, an English-speaking guide, hotels twin-sharing with daily breakfast, monument entry fees as set out in the itinerary, and hotel and transport taxes. It usually does not include flights, visa fees, most lunches and dinners, tips, travel insurance or personal expenses.</span> That is how our standard tours work, and a good test for any quote. Bhutan and multi-country trips differ, and are covered below.
          </ArticleP>
          <ArticleH2>What Is Included, and What Is Not?</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">What a private tour of India includes and excludes</caption>
              <thead>
                <tr className="border-b border-sand text-ink"><th scope="col" className="px-3 py-3 font-semibold sm:px-5"></th><th scope="col" className="px-3 py-3 font-semibold sm:px-5">In the price?</th><th scope="col" className="px-3 py-3 font-semibold sm:px-5">Notes</th></tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Private vehicle and driver</th><td className="px-3 py-3 sm:px-5">Included</td><td className="px-3 py-3 sm:px-5">Air-conditioned, for transfers and sightseeing, for your group only</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">English-speaking guide</th><td className="px-3 py-3 sm:px-5">Included</td><td className="px-3 py-3 sm:px-5">With you at your stops, per the itinerary</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Hotels</th><td className="px-3 py-3 sm:px-5">Included</td><td className="px-3 py-3 sm:px-5">Twin-sharing, chosen for your route and category</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Breakfast</th><td className="px-3 py-3 sm:px-5">Included</td><td className="px-3 py-3 sm:px-5">Daily</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Monument entry fees</th><td className="px-3 py-3 sm:px-5">Included</td><td className="px-3 py-3 sm:px-5">As set out in the itinerary</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Hotel and transport taxes</th><td className="px-3 py-3 sm:px-5">Included</td><td className="px-3 py-3 sm:px-5">All applicable taxes</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Flights</th><td className="px-3 py-3 sm:px-5">Not included</td><td className="px-3 py-3 sm:px-5">International and domestic flights are priced separately</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Visa fees</th><td className="px-3 py-3 sm:px-5">Not included</td><td className="px-3 py-3 sm:px-5">Most visitors apply for an e-Visa online</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Lunches and dinners</th><td className="px-3 py-3 sm:px-5">Not included</td><td className="px-3 py-3 sm:px-5">Unless the itinerary says otherwise</td></tr>
                <tr><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Tips, insurance, personal costs</th><td className="px-3 py-3 sm:px-5">Not included</td><td className="px-3 py-3 sm:px-5">Budget for these separately</td></tr>
              </tbody>
            </table>
          </div>
          <ArticleH2>What Does Each Inclusion Mean in Practice?</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Private vehicle and driver:</span> the car is yours for the whole trip, so you set the pace of the day and can stop on the way. See our <Link href="/car-rental" className="text-maroon underline">car rental fleet</Link>.</li>
            <li><span className="font-semibold text-ink">Guide:</span> an English-speaking guide at your stops. Ask any operator whether its guides are government-licensed, which is required at protected monuments.</li>
            <li><span className="font-semibold text-ink">Hotels:</span> chosen for your route and category, from comfortable 3-4 star hotels to heritage palaces. The category is the biggest single change to the price.</li>
            <li><span className="font-semibold text-ink">Entry fees:</span> the monument tickets listed in the itinerary. Optional extras, such as an additional ticket for a special area, are separate.</li>
            <li><span className="font-semibold text-ink">One point of contact:</span> from first enquiry to departure day, so you are not passed between teams.</li>
          </ArticleUL>
          <ArticleH2>What Costs Extra?</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Flights:</span> we book them only on request. Long distances, such as Rajasthan to Kerala, usually need an internal flight.</li>
            <li><span className="font-semibold text-ink">Visas:</span> most visitors need an e-Visa. See our <Link href="/travel-guide/india-e-visa-guide" className="text-maroon underline">e-Visa guide</Link>, or our <Link href="/travel-guide/india-visa-for-us-citizens" className="text-maroon underline">guide for US citizens</Link>.</li>
            <li><span className="font-semibold text-ink">Meals:</span> breakfast is included, and lunches and dinners are paid by you, so you can eat where you like. Our <Link href="/travel-guide/india-currency-payments-guide" className="text-maroon underline">payments guide</Link> explains cash and cards.</li>
            <li><span className="font-semibold text-ink">Tips:</span> see our <Link href="/travel-guide/tipping-in-india" className="text-maroon underline">tipping guide</Link> for what is usual.</li>
            <li><span className="font-semibold text-ink">Insurance and personal costs:</span> travel insurance, shopping, drinks and laundry.</li>
          </ArticleUL>
          <ArticleH2>How Do Inclusions Differ for Bhutan, Nepal and Multi-Country Trips?</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Bhutan:</span> the price includes the government Sustainable Development Fee, all meals, a licensed guide, a private vehicle and entry fees. The visa fee is listed as extra and is arranged in advance through your licensed operator. Flights to and from Paro are not included.</li>
            <li><span className="font-semibold text-ink">Nepal:</span> the Nepal visa fee is extra and is available on arrival for most nationalities.</li>
            <li><span className="font-semibold text-ink">India and Nepal or Bhutan:</span> our combined tours include the connecting flight between the countries, such as Delhi to Paro or Delhi to Kathmandu, but not your international flights.</li>
          </ArticleUL>
          <ArticleP>
            See our <Link href="/travel-guide/india-nepal-bhutan-combined-tour-guide" className="text-maroon underline">combined-trip guide</Link> and our <Link href="/travel-guide/bhutan-visa-fee-and-best-time-to-visit" className="text-maroon underline">Bhutan guide</Link>.
          </ArticleP>
          <ArticleH2>How Do You Compare Two Quotes?</ArticleH2>
          <ArticleP>
            Put both quotes next to the list above and look for the gaps. A lower price often means a lower hotel category, a shared vehicle, fewer entry fees or no guide. Our <Link href="/travel-guide/how-to-choose-a-tour-operator-in-india" className="text-maroon underline">operator checklist</Link> lists the questions to ask, and our <Link href="/travel-guide/how-much-does-a-private-tour-of-india-cost" className="text-maroon underline">cost guide</Link> shows what a trip costs. Starting rates are about <Price usd={RATE_PER_NIGHT_USD.india} /> per person per night with 3-4 star hotels, two sharing, and about <Price usd={RATE_PER_NIGHT_USD.luxury} /> with 5-star and palace hotels.
          </ArticleP>
          <CurrencyControl center className="my-4" />
          <ArticleMidCTA
            text="Want to see exactly what is in a quote for your dates?"
            href="/contact"
            linkLabel="Get a free quote"
          />


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
          headline="Know Exactly What You're Paying For."
          headlineItalic="Ask Us for a Quote."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to know exactly what is included in a private tour with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
