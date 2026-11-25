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
 * Facts re-checked 24 Nov 2026: the Department of Tourism announcement of
 * 1 Nov 2026 (bhutan.travel/announcements, press-release PDF on storyblok)
 * extends the 50% SDF waiver, i.e. US$100 instead of US$200 per adult per
 * night for visitors from countries other than India, to 31 Dec 2029;
 * corroborated by UNI India (18 Nov 2026). US$40 visa fee: bhutan.travel/visa.
 * Originally checked on 25 Oct 2026 against: Little Bhutan's SDF guide
 * (US$100 per adult per night; US$40 visa; ages
 * 6-11 half, under 6 free; border-town day visits exempt), Wikipedia's Visa
 * policy of Bhutan (visa via licensed operator, ~5 business days, passport 6
 * months, entry points) and Lonely Planet's Bhutan best-time guide (seasons,
 * Paro Tsechu, cranes). Children's age bands differ slightly between
 * sources (under 5 vs under 6); we state under 6 and say we confirm at quote.
 * Official government sites were not reachable when written, so re-check
 * before changing any figure. Our tour price includes the SDF but not the visa fee (see
 * bhutan-tours.ts inclusions and exclusions); price uses RATE_PER_NIGHT_USD.bhutan.
 */

const title = 'Bhutan Travel Guide: Visa, the US$100 Fee and Best Time to Go';
const description =
  "Bhutan's US$40 visa and US$100-a-night Sustainable Development Fee (to December 2029), children's rates, best months and Bhutan tour costs.";
const pagePath = "/travel-guide/bhutan-visa-fee-and-best-time-to-visit";
const heroImage = "/images/destinations/paro-taktsang-tigers-nest.webp";
const datePublished = "2026-10-25";
const dateModified = "2026-11-24";
const factsCheckedOn = "2026-11-24";

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
  { name: 'Bhutan Visa, Fees & Best Time', path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "Do I need a visa for Bhutan?",
    answer:
      "Yes. Most visitors need a Bhutan tourist visa, which costs US$40 per person and is valid for up to 90 days. It is arranged in advance, and we apply for it for you once your trip is confirmed. You carry the visa clearance letter to Bhutan and the visa is stamped into your passport on arrival.",
  },
  {
    question: "What is Bhutan's Sustainable Development Fee?",
    answer:
      "The Sustainable Development Fee (SDF) is a government charge of US$100 per adult per night, paid for every night you spend in Bhutan. It funds free healthcare and education, conservation and carbon-offset programmes. In November 2026 the government extended the US$100 rate to 31 December 2029.",
  },
  {
    question: "Is the SDF included in your Bhutan tour price?",
    answer:
      "Yes. Our Bhutan tour prices include the Sustainable Development Fee for the nights on the itinerary. The US$40 visa fee is listed as extra on our tour pages and is arranged in advance through your licensed operator, and personal spending and optional extras are paid by you.",
  },
  {
    question: "Do children pay the SDF?",
    answer:
      "Children under 6 do not pay the SDF, and children aged 6 to 11 pay half, US$50 per night. Adults and children aged 12 and over pay the full US$100. Age rules are set by the government, so we confirm them for your group when we quote.",
  },
  {
    question: "How long will the SDF stay at US$100?",
    answer:
      "On 1 November 2026 Bhutan's Department of Tourism extended the 50% waiver, which keeps the fee at US$100 instead of the standard US$200 per adult per night, until 31 December 2029. Indian nationals pay a separate rate in ngultrum. We confirm the rate in force when you book.",
  },
  {
    question: "What is the best time to visit Bhutan?",
    answer:
      "March to May and October to November. October is the most popular month, with clear skies and festivals. Spring brings rhododendrons and the Paro Tsechu festival, usually in late March or early April. Avoid trekking in the June to mid-September monsoon.",
  },
  {
    question: "Is Bhutan worth the cost?",
    answer:
      "Most visitors think so, because the fee is the reason Bhutan is uncrowded: valley towns still feel lived-in, dzongs are working monasteries and administrative centres, and roads are quiet. It costs more per day than India or Nepal, so many travellers pair it with one of them.",
  },
  {
    question: "Can I combine Bhutan with India or Nepal?",
    answer:
      "Yes. We run an 11-day India and Bhutan trip, a 12-day Nepal and Bhutan trip linked by a short flight from Kathmandu to Paro, and an India, Nepal and Bhutan trip combining all three.",
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
          imageAlt="Paro Taktsang, the Tiger's Nest Monastery, Bhutan"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="Bhutan Travel Guide: Visa, Fees and Best Time"
          subheadline="What you pay, who pays it, when to go and what a Bhutan trip costs in total."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
          factsCheckedOn={factsCheckedOn}
        />

        <ArticleTopCTA whatsappMessage="Hi! I'd like help planning a Bhutan tour with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">
              Most visitors need a US$40 Bhutan visa arranged through a licensed operator, and pay a
              Sustainable Development Fee of US$100 per adult per night. The best time to go is March to
              May or October to November.
            </span>{" "}
            Both costs are fixed by the Bhutanese government, not by tour operators, so they are the
            same whoever you book with. This guide explains what you pay, who pays it, when to go and
            what a Bhutan trip costs in total.
          </ArticleP>

          <ArticleH2>Bhutan at a Glance</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">Bhutan visa, fee and season summary</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Item</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Detail</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Tourist visa</th>
                  <td className="px-3 py-3 sm:px-5">US$40 per person, valid up to 90 days, arranged in advance</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Sustainable Development Fee</th>
                  <td className="px-3 py-3 sm:px-5">US$100 per adult per night (half the standard US$200), extended to 31 December 2029</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Children</th>
                  <td className="px-3 py-3 sm:px-5">Under 6 free, 6 to 11 half (US$50), 12 and over full</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Passport</th>
                  <td className="px-3 py-3 sm:px-5">Valid for at least 6 months</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Best months</th>
                  <td className="px-3 py-3 sm:px-5">March to May and October to November</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Our Bhutan tour</th>
                  <td className="px-3 py-3 sm:px-5">From about <Price usd={7 * RATE_PER_NIGHT_USD.bhutan} /> per person for 7 nights, with the daily fee included</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ArticleH2>Do You Need a Visa for Bhutan?</ArticleH2>
          <ArticleP>
            Yes, unless you are an Indian, Bangladeshi or Maldivian citizen, who follow different
            rules. For everyone else the tourist visa costs US$40 per person (per{" "}
            <a href="https://bhutan.travel/visa" className="text-maroon underline" target="_blank" rel="noopener noreferrer">Bhutan&apos;s official tourism site</a>), is valid for up to 90 days,
            and is approved in Thimphu, usually within about five business days. A licensed Bhutanese
            operator submits the application for you, together with your fee payment, once the trip is
            confirmed. You then receive a visa clearance letter, show it at the port of entry, and the
            visa is stamped into your passport. Your passport must be valid for at least six months. You
            can enter by air at Paro, or overland through Phuentsholing, Gelephu or Samdrup Jongkhar. Rules
            are set by the government and can change; see the{" "}
            <a href="https://en.wikipedia.org/wiki/Visa_policy_of_Bhutan" className="text-maroon underline" target="_blank" rel="noopener noreferrer">visa policy summary</a> for the official sources.
          </ArticleP>

          <ArticleH2>What Is the Sustainable Development Fee?</ArticleH2>
          <ArticleP>
            The SDF is a flat government charge on every night a tourist spends in Bhutan. It is US$100 per adult
            per night, half the standard rate of US$200. On 1 November 2026 the Department of Tourism{" "}
            <a href="https://www.bhutan.travel/announcements" className="text-maroon underline" target="_blank" rel="noopener noreferrer">extended this 50% waiver to 31 December 2029</a>{" "}
            for visitors from countries other than India.
            It funds free healthcare and education, forest conservation and carbon-offset programmes, and it is
            the policy that keeps visitor numbers low. Day visits to the border towns of Phuentsholing,
            Samtse, Gelephu and Samdrup Jongkhar carry no SDF if you stay in the designated zone and
            leave within 24 hours.
          </ArticleP>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Adults and ages 12 and over:</span> US$100 per night.</li>
            <li><span className="font-semibold text-ink">Children 6 to 11:</span> US$50 per night.</li>
            <li><span className="font-semibold text-ink">Children under 6:</span> no SDF.</li>
          </ArticleUL>

          <ArticleMidCTA
            text="Want an all-in price for your dates, with the daily fee included?"
            href="/tours/bhutan-tours"
            linkLabel="See our Bhutan tour"
          />

          <ArticleH2>How Much Does a Bhutan Tour Cost?</ArticleH2>
          <ArticleP>
            Our{" "}<Link href="/tours/bhutan-tours" className="text-maroon underline">8-day Bhutan tour</Link>{" "}starts from about{" "}
            <Price usd={7 * RATE_PER_NIGHT_USD.bhutan} /> per person for 7 nights, two sharing, flights
            excluded. That price includes the SDF, your licensed guide, driver, hotels and meals on
            the itinerary, which is why it sits well above our India rates: US$700 of that total is the SDF alone. Higher hotel
            categories and festival dates cost more.
          </ArticleP>

          <ArticleH2>When Is the Best Time to Visit Bhutan?</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">October to November:</span> clear skies and comfortable days, the best trekking season, and festivals. October is the busiest month. In November, black-necked cranes winter in the Phobjikha Valley near Gangtey.</li>
            <li><span className="font-semibold text-ink">March to May:</span> warm but not hot, with rhododendrons in bloom and the Paro Tsechu festival, usually late March or early April. Skies are a little hazier than in autumn.</li>
            <li><span className="font-semibold text-ink">December to February:</span> cold in central Bhutan and very quiet, with lower valleys such as Punakha staying mild. A good time to avoid crowds.</li>
            <li><span className="font-semibold text-ink">June to September:</span> monsoon, with the heaviest rain in July. Trekking is not advised, but sightseeing is possible and some hotels discount rooms.</li>
          </ArticleUL>
          <ArticleP>
            Season details are summarised from{" "}<a href="https://www.lonelyplanet.com/articles/best-time-to-visit-bhutan" className="text-maroon underline" target="_blank" rel="noopener noreferrer">Lonely Planet's Bhutan guide</a>.
          </ArticleP>

          <ArticleH2>How Long Do You Need in Bhutan?</ArticleH2>
          <ArticleP>
            Eight days covers the four essential stops: Thimphu, Punakha, the Gangtey valley and Paro, where
            the Tiger&apos;s Nest monastery clings to a cliff 900 metres above the valley floor. Shorter
            than that, you rush the long mountain roads. Because every night carries the SDF, many
            travellers pair Bhutan with a cheaper country instead of staying longer:{" "}
            <Link href="/tours/india-bhutan-tours" className="text-maroon underline">India and Bhutan</Link> (11 days),{" "}
            <Link href="/tours/nepal-bhutan-tours" className="text-maroon underline">Nepal and Bhutan</Link> (12 days, linked by a short flight from Kathmandu to Paro)
            or{" "}<Link href="/tours/india-nepal-bhutan-tours" className="text-maroon underline">India, Nepal and Bhutan</Link>.
            More on the country in our{" "}<Link href="/destinations/bhutan" className="text-maroon underline">Bhutan destination guide</Link>. Weighing Nepal as well? See our{" "}
            <Link href="/travel-guide/nepal-visa-and-best-time-to-visit" className="text-maroon underline">Nepal visa and best-time guide</Link>.
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
          headline="Bhutan, Planned Around You."
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver. Tell us what you have in mind and we'll send a tailored itinerary within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a Bhutan tour with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
