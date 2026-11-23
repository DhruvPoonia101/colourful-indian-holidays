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
import { getPackageStartingPrice } from "@/lib/pricing";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * Facts checked on 23 Nov 2026 against:
 * - Department of Immigration and Emigration (immigration.gov.lk) notice
 *   "Free Tourist Visas for Nationals of 40 Selected Countries": effective
 *   25 May 2026, 30 days, double entry, ETA still required before arrival,
 *   free of charge; no end date stated; extensions paid.
 * - Fees for other nationalities (US$20 SAARC, US$50 others) from
 *   issacompass.com's ETA summary, not an official page — re-check at
 *   eta.gov.lk before changing.
 * - Seasons: Intrepid Travel's Sri Lanka best-time guide.
 * - Yala closure: Newswire.lk, Blocks 1 & 2 closed 14 Sep - 16 Oct 2026.
 * Prices come from getPackageStartingPrice (Sri Lanka rate in pricing.ts).
 */

const title = "Sri Lanka Travel Guide: Visa (ETA) and Best Time to Visit";
const description =
  "Sri Lanka's tourist ETA is free for 40 countries since 25 May 2026. Who qualifies, how to apply, the best months by region, and what a private Sri Lanka tour costs.";
const pagePath = "/travel-guide/sri-lanka-visa-and-best-time-to-visit";
const heroImage = "/images/destinations/sigiriya-from-pidurangala.webp";
const datePublished = "2026-11-23";
const dateModified = datePublished;

const eightDay = getPackageStartingPrice("sri-lanka-tours", 8);
const fourteenDay = getPackageStartingPrice("sri-lanka-grand-tour", 14);

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
  { name: "Sri Lanka Visa & Best Time", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "Do I need a visa for Sri Lanka?",
    answer:
      "Yes. Every visitor needs an Electronic Travel Authorisation (ETA) before arriving. Since 25 May 2026, the tourist ETA is free for nationals of 40 countries, including the USA, UK, Canada, Australia, Germany, France, Italy, Spain, the Netherlands and India. You still have to apply online before you travel.",
  },
  {
    question: "Is the Sri Lanka visa free for US and UK citizens?",
    answer:
      "Yes. The United States and the United Kingdom are both on the list of 40 countries whose citizens get a free tourist ETA, valid for 30 days with double entry, under the scheme that started on 25 May 2026.",
  },
  {
    question: "How long can I stay on a Sri Lanka tourist ETA?",
    answer:
      "The free tourist ETA allows 30 days from the date of first arrival, with double entry. To stay longer, you apply for an extension in Sri Lanka and pay the applicable visa fee.",
  },
  {
    question: "How much is the Sri Lanka ETA for other nationalities?",
    answer:
      "Nationals of countries not on the free list pay for the ETA. Published summaries give US$20 for SAARC nationals and US$50 for others, but check the current fee on the official ETA site before applying.",
  },
  {
    question: "What is the best time to visit Sri Lanka?",
    answer:
      "December to April for the hill country and the south and west coasts, which most first trips cover. The east coast is best from about May to September. October and November are usually wet across much of the island.",
  },
  {
    question: "How many days do I need in Sri Lanka?",
    answer:
      "Eight days covers Sigiriya, Kandy, the tea country, Ella, Yala and Galle at a comfortable pace. Twelve to fourteen days lets you add the ancient cities of Anuradhapura and Polonnaruwa and time on the beach.",
  },
  {
    question: "How much does a private Sri Lanka tour cost?",
    answer: `Our 8-day Sri Lanka tour starts from about US$${eightDay.toLocaleString("en-US")} per person for 7 nights, and our 14-day Grand Tour from about US$${fourteenDay.toLocaleString("en-US")} for 13 nights, two sharing, with a private car, chauffeur-guide and 3–4 star hotels. International flights are extra.`,
  },
  {
    question: "Can I combine Sri Lanka with India?",
    answer:
      "Yes. Direct flights connect Colombo with Delhi, Mumbai, Chennai and Kochi. Our India and Sri Lanka tour pairs the Golden Triangle with the island, and our Kerala and Sri Lanka tour pairs the backwaters with it. You need an Indian e-Visa as well as the Sri Lanka ETA.",
  },
];

const cell = "px-3 py-3 sm:px-5";
const rowHead = "px-3 py-3 font-medium text-ink sm:px-5";

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
          imageAlt="Sigiriya rock seen across the surrounding wetlands, Sri Lanka"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="Sri Lanka Travel Guide: Visa and Best Time"
          subheadline="The free tourist ETA, who qualifies, the best months by region and what a private Sri Lanka tour costs."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I'd like help planning a Sri Lanka tour with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">
              Since 25 May 2026, Sri Lanka&apos;s tourist ETA is free for nationals of 40 countries,
              including the USA, UK, Canada, Australia and most of Western Europe. It allows 30 days with
              double entry, but you must still apply online before you fly. The best time for a first trip
              is December to April.
            </span>{" "}
            This guide covers who qualifies, how to apply, the seasons by region, and what a private Sri
            Lanka tour costs.
          </ArticleP>

          <ArticleH2>Sri Lanka at a Glance</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">Sri Lanka visa, season and cost summary</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Item</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Detail</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-sand/60">
                  <th scope="row" className={rowHead}>Tourist ETA</th>
                  <td className={cell}>Free for 40 countries since 25 May 2026; apply online before arrival</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className={rowHead}>Length of stay</th>
                  <td className={cell}>30 days from first arrival, double entry</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className={rowHead}>Other nationalities</th>
                  <td className={cell}>Paid ETA (reported as US$20 SAARC, US$50 others)</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className={rowHead}>Best months (most routes)</th>
                  <td className={cell}>December to April</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className={rowHead}>East coast</th>
                  <td className={cell}>About May to September</td>
                </tr>
                <tr>
                  <th scope="row" className={rowHead}>Our 8-day Sri Lanka tour</th>
                  <td className={cell}>From about <Price usd={eightDay} /> per person for 7 nights</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ArticleH2>Who Gets a Free Sri Lanka Visa?</ArticleH2>
          <ArticleP>
            Under a government notice effective 25 May 2026, nationals of these 40 countries receive the
            tourist ETA free of charge: Australia, Austria, Bahrain, Belarus, Belgium, Canada, China, the
            Czech Republic, Denmark, Finland, France, Germany, India, Indonesia, Iran, Israel, Italy, Japan,
            Kazakhstan, Kuwait, Malaysia, Nepal, the Netherlands, New Zealand, Norway, Oman, Pakistan,
            Poland, Qatar, Russia, Saudi Arabia, South Korea, Spain, Sweden, Switzerland, Thailand, Turkey,
            the UAE, the United Kingdom and the United States.
          </ArticleP>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Still apply in advance:</span> the ETA is free for these countries, but it is not automatic. Apply online before you travel.</li>
            <li><span className="font-semibold text-ink">30 days, double entry:</span> counted from your first arrival, which is useful if you hop to India or the Maldives and come back.</li>
            <li><span className="font-semibold text-ink">Staying longer:</span> extensions are possible inside Sri Lanka, for a fee.</li>
            <li><span className="font-semibold text-ink">Not on the list?</span> You pay for the ETA. Published summaries give US$20 for SAARC nationals and US$50 for others.</li>
          </ArticleUL>
          <ArticleP>
            The country list and rules come from the{" "}
            <a href="https://www.immigration.gov.lk/content/files/visa/Free%20Tourist%20Visas%20for%20Nationals%20of%2040%20Selected%20Countries.pdf" className="text-maroon underline" target="_blank" rel="noopener noreferrer">Department of Immigration and Emigration&apos;s notice</a>. No end date was stated when we checked in November 2026, but rules can change, so confirm on the official ETA site before you travel.
          </ArticleP>

          <ArticleMidCTA
            text="Want us to plan Sri Lanka around the right season?"
            href="/tours/sri-lanka-tours"
            linkLabel="See our 8-day Sri Lanka tour"
          />

          <ArticleH2>When Is the Best Time to Visit Sri Lanka?</ArticleH2>
          <ArticleP>
            Sri Lanka has two monsoons that hit different sides of the island, so there is always somewhere
            dry. The question is which region you most want to see.
          </ArticleP>
          <ArticleUL>
            <li><span className="font-semibold text-ink">December to April:</span> the main season for the hill country (Kandy, Nuwara Eliya, Ella) and the south and west coasts (Colombo, Galle, Mirissa). This is when most first trips run.</li>
            <li><span className="font-semibold text-ink">May to September:</span> the south-west monsoon brings rain to the west and south coasts and the western hills, while the east coast (Trincomalee, Arugam Bay) is at its best. The Cultural Triangle around Sigiriya stays fairly dry.</li>
            <li><span className="font-semibold text-ink">October and November:</span> usually the wettest months across much of the island, with lower prices and fewer visitors.</li>
            <li><span className="font-semibold text-ink">Yala:</span> parts of the park can close for a few weeks in the dry season. In 2026, Blocks 1 and 2 closed from 14 September to 16 October.</li>
          </ArticleUL>
          <ArticleP>
            Seasons are summarised from{" "}
            <a href="https://www.intrepidtravel.com/uk/sri-lanka/best-time-to-visit-sri-lanka" className="text-maroon underline" target="_blank" rel="noopener noreferrer">Intrepid Travel&apos;s Sri Lanka guide</a>; the Yala closure dates were reported by{" "}
            <a href="https://www.newswire.lk/buvk" className="text-maroon underline" target="_blank" rel="noopener noreferrer">Newswire.lk</a>. For month-by-month ratings, try our{" "}
            <Link href="/tools/when-to-go-planner" className="text-maroon underline">When to Go planner</Link>.
          </ArticleP>

          <ArticleH2>How Much Does a Sri Lanka Tour Cost?</ArticleH2>
          <ArticleP>
            Our{" "}<Link href="/tours/sri-lanka-tours" className="text-maroon underline">8-day Sri Lanka tour</Link>{" "}starts from about{" "}
            <Price usd={eightDay} /> per person for 7 nights, and the{" "}
            <Link href="/tours/sri-lanka-grand-tour" className="text-maroon underline">14-day Grand Tour</Link>{" "}from about{" "}
            <Price usd={fourteenDay} /> for 13 nights, two sharing. That includes a private air-conditioned car
            and English-speaking chauffeur-guide, 3–4 star hotels with breakfast and the safaris in the
            itinerary. International flights, most meals and optional trips such as whale watching are extra.
            Use our{" "}<Link href="/tools/trip-cost-calculator" className="text-maroon underline">trip cost calculator</Link>{" "}to price your own mix of nights, or compare day-by-day routes in our{" "}
            <Link href="/travel-guide/sri-lanka-itinerary" className="text-maroon underline">7, 10 and 14-day Sri Lanka itineraries</Link>. Planning the hill-country train? Read our{" "}
            <Link href="/travel-guide/kandy-to-ella-train" className="text-maroon underline">Kandy to Ella train guide</Link>{" "}first: the Kandy end of the line is closed for repairs.
          </ArticleP>

          <ArticleH2>Combining Sri Lanka With India</ArticleH2>
          <ArticleP>
            Colombo is a direct flight from Delhi, Mumbai, Chennai and Kochi, so Sri Lanka is the easiest
            international add-on to an India trip. Our{" "}
            <Link href="/tours/india-sri-lanka-tours" className="text-maroon underline">India and Sri Lanka tour</Link>{" "}pairs the Golden Triangle with the island in 12 days, and our{" "}
            <Link href="/tours/kerala-sri-lanka-tours" className="text-maroon underline">Kerala and Sri Lanka tour</Link>{" "}pairs Kochi, Munnar and the backwaters with it. You will need the{" "}
            <Link href="/travel-guide/india-e-visa-guide" className="text-maroon underline">India e-Visa</Link>{" "}as well as the Sri Lanka ETA. See every stop in our{" "}
            <Link href="/destinations/sri-lanka" className="text-maroon underline">Sri Lanka destination guide</Link>.
          </ArticleP>

          <ArticleFAQ faqs={faqs} />
        </ArticleBody>

        <AuthorBioCard
          authorName="Dhruv Poonia"
          authorInitials="DP"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          bioParagraphs={[
            "Dhruv Poonia is the Digital & Marketing Manager for Colourful Indian Holidays, working alongside a family travel business, founded in 2007, that arranges private tours across India, Nepal, Bhutan and Sri Lanka. He also oversees the company's sister sites, Rajasthan Travel Agency and Palace on Wheels Tour.",
            "He writes and maintains the destination guides, route information and travel advice published on this site, drawing on his day-to-day work planning itineraries for international travellers to keep every page accurate and current.",
          ]}
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Sri Lanka, Planned Around You."
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests, with your own car and chauffeur-guide. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a Sri Lanka tour with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
