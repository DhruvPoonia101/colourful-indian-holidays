import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleByline, AuthorBioCard, ArticleBody, ArticleH2, ArticleP, ArticleUL } from "@/components/travel-guide/ArticleBody";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { ArticleFAQ } from "@/components/travel-guide/ArticleFAQ";
import { ArticleTopCTA } from "@/components/travel-guide/ArticleTopCTA";
import { ArticleMidCTA } from "@/components/travel-guide/ArticleMidCTA";
import { Price } from "@/components/shared/Price";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { articleJsonLd } from "@/lib/seo/article-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { RATE_PER_NIGHT_USD } from "@/lib/pricing";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * Facts here were checked on 25 Oct 2026 against: Lonely Planet's Nepal
 * visa guide (updated Nov 2025: US$30/50/125 on arrival; arrival card online
 * up to 15 days ahead at nepaliport.immigration.gov.np; cash USD at land
 * borders; children under 10 free with exceptions), Wikipedia's Visa policy
 * of Nepal (passport 6 months; 150 days per calendar year; Indian citizens
 * exempt; advance visa valid 6 months) and Intrepid Travel's best-time guide.
 * The nationalities that must apply in advance were not retrievable, so the
 * page says only that "a short list" must. Official sites were unreachable
 * when written; re-check before changing any figure. Price uses
 * RATE_PER_NIGHT_USD.nepal (8-day Nepal tour = 7 nights).
 */

const title = 'Nepal Travel Guide: Visa Fees and Best Time to Visit';
const description =
  'Nepal visa fees on arrival (US$30, US$50, US$125), how to speed up entry, the best months for trekking and wildlife, and what a Nepal tour costs.';
const pagePath = "/travel-guide/nepal-visa-and-best-time-to-visit";
const heroImage = "/images/destinations/kathmandu-boudhanath-stupa-sunset.webp";
const datePublished = "2026-10-25";
const dateModified = datePublished;

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
  { name: 'Nepal Visa & Best Time', path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "Do I need a visa for Nepal?",
    answer:
      "Most international visitors do. You can get a tourist visa on arrival at Kathmandu's Tribhuvan airport or at the main land border crossings, or in advance from a Nepali embassy. Indian citizens do not need a visa, and a few nationalities must apply in advance, so check your passport before you travel.",
  },
  {
    question: "How much is a Nepal tourist visa?",
    answer:
      "On arrival the fees are US$30 for 15 days, US$50 for 30 days and US$125 for 90 days. Bring cash in US dollars in small bills, especially at land crossings. Fees can change, so confirm before you travel.",
  },
  {
    question: "Can I fill in the Nepal arrival form online?",
    answer:
      "Yes. You can complete the arrival card and upload your photo on Nepal's immigration site up to 15 days before arrival, which saves time at the airport. If you skip it, expect the process at the airport to take an hour or more.",
  },
  {
    question: "What is the best time to visit Nepal?",
    answer:
      "October and November, and March to April. Autumn has clear mountain views and near-perfect trail conditions but is the busiest period. Spring brings rhododendrons. December to February is excellent for Chitwan wildlife, and the June to August monsoon is wet with hidden mountains.",
  },
  {
    question: "Is Nepal good in winter?",
    answer:
      "Yes for Kathmandu, Pokhara and Chitwan, which are dry and clear, and December is one of the best months for wildlife in Chitwan. High altitudes are very cold, so trekking above the lower valleys needs warm layers.",
  },
  {
    question: "How much does a Nepal tour cost?",
    answer:
      "Our 8-day Nepal tour starts from about $840 per person for 7 nights, two sharing, flights excluded. Higher hotel categories, trekking and domestic flights change the price.",
  },
  {
    question: "How long should I spend in Nepal?",
    answer:
      "Eight days covers Kathmandu, Pokhara and a wildlife or cultural extension at an easy pace. If you want the Everest region, add days for flights and acclimatisation. Nepal also combines well with India or Bhutan.",
  },
  {
    question: "Can I combine Nepal with Bhutan?",
    answer:
      "Yes. Our 12-day Nepal and Bhutan trip links Kathmandu and Paro with a short flight, and our India, Nepal and Bhutan trip adds the Golden Triangle. Note that Bhutan charges a government fee per night, which Nepal does not.",
  },
];

export default function GuidePage() {
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
          imageAlt="Boudhanath stupa at sunset, Kathmandu, Nepal"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="Nepal Travel Guide: Visa and Best Time"
          subheadline="Visa fees, how to enter faster, the best months to go and what a Nepal tour costs."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I'd like help planning a Nepal tour with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">
              Most visitors get a Nepal tourist visa on arrival: US$30 for 15 days, US$50 for 30 days
              or US$125 for 90 days. The best time to go is October to November or March to April.
            </span>{" "}
            Nepal is easier to enter than Bhutan, with no daily government fee, but a little preparation
            saves an hour in the airport queue. This guide covers the visa, how to speed it up, the
            seasons and what a Nepal tour costs.
          </ArticleP>

          <ArticleH2>Nepal at a Glance</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">Nepal visa, season and cost summary</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Item</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Detail</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Tourist visa on arrival</th>
                  <td className="px-3 py-3 sm:px-5">US$30 (15 days), US$50 (30 days), US$125 (90 days)</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Daily government fee</th>
                  <td className="px-3 py-3 sm:px-5">None, unlike Bhutan</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Passport</th>
                  <td className="px-3 py-3 sm:px-5">Valid for at least 6 months</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Best months</th>
                  <td className="px-3 py-3 sm:px-5">October to November and March to April</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Wildlife (Chitwan)</th>
                  <td className="px-3 py-3 sm:px-5">December to February</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Our Nepal tour</th>
                  <td className="px-3 py-3 sm:px-5">From about <Price usd={7 * RATE_PER_NIGHT_USD.nepal} /> per person for 7 nights</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ArticleH2>How Do You Get a Nepal Visa?</ArticleH2>
          <ArticleP>
            You can get a tourist visa on arrival at Kathmandu&apos;s Tribhuvan International Airport or at
            the main land crossings, or apply in advance at a Nepali embassy or consulate. If you apply in
            advance, you must enter Nepal within six months of the issue date, and the 15, 30 or
            90 days start on arrival. Your passport should be valid for at least six months, and the maximum
            stay is 150 days in a calendar year. Indian citizens do not need a visa, and a short list of
            nationalities must apply in advance, so check yours with the embassy.
          </ArticleP>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Save time:</span> complete the arrival card and photo online up to 15 days before you fly. Without it, the airport process can take over an hour.</li>
            <li><span className="font-semibold text-ink">Bring cash:</span> pay in US dollars in small bills, particularly at land crossings, where you also need passport photos.</li>
            <li><span className="font-semibold text-ink">Children:</span> Lonely Planet reports that children under 10 do not pay for tourist visas, with exceptions for some nationalities, so confirm for your group.</li>
          </ArticleUL>
          <ArticleP>
            Fees and procedures are summarised from{" "}
            <a href="https://www.lonelyplanet.com/articles/visa-requirements-for-nepal" className="text-maroon underline" target="_blank" rel="noopener noreferrer">Lonely Planet's Nepal visa guide</a> (updated November 2025) and{" "}
            <a href="https://en.wikipedia.org/wiki/Visa_policy_of_Nepal" className="text-maroon underline" target="_blank" rel="noopener noreferrer">Wikipedia's visa policy of Nepal</a>. Rules can change, so verify on Nepal&apos;s immigration site before you travel.
          </ArticleP>

          <ArticleMidCTA
            text="Want us to plan Nepal around the right season?"
            href="/tours/nepal-tours"
            linkLabel="See our Nepal tour"
          />

          <ArticleH2>When Is the Best Time to Visit Nepal?</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">October to November:</span> the second peak season. The monsoon ends in mid-September, skies clear, and October has near-perfect trail conditions. It is also the busiest month. Dashain and Tihar, Nepal&apos;s biggest festivals, fall in these months.</li>
            <li><span className="font-semibold text-ink">March to May:</span> March and April are peak trekking months and rhododendrons bloom. April and May get hot in Kathmandu and Pokhara.</li>
            <li><span className="font-semibold text-ink">December to February:</span> dry and clear. Chitwan is excellent for wildlife, with December among the best months. High altitudes are very cold.</li>
            <li><span className="font-semibold text-ink">June to August:</span> monsoon. Rain most afternoons, hidden mountains and muddy trails, though Kathmandu&apos;s temples and markets are still worth visiting.</li>
          </ArticleUL>
          <ArticleP>
            Season details are summarised from{" "}<a href="https://www.intrepidtravel.com/us/nepal/best-time-to-visit-nepal" className="text-maroon underline" target="_blank" rel="noopener noreferrer">Intrepid Travel's Nepal guide</a>.
          </ArticleP>

          <ArticleH2>How Much Does a Nepal Tour Cost?</ArticleH2>
          <ArticleP>
            Our{" "}<Link href="/tours/nepal-tours" className="text-maroon underline">8-day Nepal tour</Link>{" "}starts from about{" "}
            <Price usd={7 * RATE_PER_NIGHT_USD.nepal} /> per person for 7 nights, two sharing, flights
            excluded, with your own guide and driver. Domestic flights, higher hotel categories and trekking cost more.
            If the mountains are the point, see our{" "}<Link href="/experiences/everest-region" className="text-maroon underline">Everest region trip</Link>{" "}and{" "}
            <Link href="/experiences/trekking-tours" className="text-maroon underline">trekking tours</Link>.
          </ArticleP>

          <ArticleH2>Combining Nepal With India or Bhutan</ArticleH2>
          <ArticleP>
            Nepal is cheaper per day than Bhutan and pairs well with both neighbours:{" "}
            <Link href="/tours/india-nepal-tours" className="text-maroon underline">India and Nepal</Link> (11 days),{" "}
            <Link href="/tours/nepal-bhutan-tours" className="text-maroon underline">Nepal and Bhutan</Link> (12 days) or{" "}
            <Link href="/tours/india-nepal-bhutan-tours" className="text-maroon underline">India, Nepal and Bhutan</Link>. Read about{" "}
            <Link href="/travel-guide/bhutan-visa-fee-and-best-time-to-visit" className="text-maroon underline">Bhutan's visa and fees</Link> before you decide, and see our{" "}
            <Link href="/destinations/nepal" className="text-maroon underline">Nepal destination guide</Link>. If India is on the route, you will also need the{" "}
            <Link href="/travel-guide/india-e-visa-guide" className="text-maroon underline">India e-visa</Link>.
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
          headline="Nepal, Planned Around You."
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a Nepal tour with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
