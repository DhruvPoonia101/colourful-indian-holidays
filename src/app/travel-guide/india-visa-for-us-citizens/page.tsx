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

/**
 * Facts checked 25 Oct 2026. Fees: Bespoke India Holidays (Sep 2026) and
 * YoYo Trips India (Sep 2026) agree on 30-day US$10 (Apr-Jun) / US$25
 * (Jul-Mar) and 1-year US$40; the 5-year fee is reported as US$80 by some
 * and US$160 for US citizens by others (and US$484 for UK), so the page
 * deliberately does not state one figure. Stay: PIB 2019 release (180 days
 * per visit for US/UK/Canada/Japan, 90 otherwise) and the portal's
 * 180-days-per-calendar-year cap (via NRI Direct, Aug 2026); some sites say
 * 90 for the US, which the page flags. e-Arrival Card: Business Today,
 * 3 Apr 2026. The official portal could not be fetched when this was
 * written, so re-check fees and stay before editing. We are not a visa agency
 * and do not file applications; the page says so.
 */

const title = "India Visa for US Citizens (2026): e-Visa Fees, Stay & How to Apply";
const description =
  "Do US citizens need a visa for India? The e-Tourist visa explained: fees ($10 to $40), 30-day vs 1-year, how long you can stay, how to apply and the e-Arrival Card.";
const pagePath = "/travel-guide/india-visa-for-us-citizens";
const heroImage = "/images/destinations/delhi-india-gate.webp";
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
  { name: "India Visa for US Citizens", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "Do US citizens need a visa to visit India?",
    answer:
      "Yes. US citizens need a visa for tourism. Most apply online for an e-Tourist visa through India's official e-Visa portal before travelling. There is no general visa on arrival for US passport holders.",
  },
  {
    question: "How much is an India e-Visa for US citizens?",
    answer:
      "The 30-day e-Tourist visa costs US$10 if you apply for April to June travel and US$25 for July to March, and the 1-year visa costs US$40, plus a bank charge of about 2.5% to 3%. Sources disagree on the 5-year fee for US citizens, so check the amount the official portal shows before you pay. Fees are non-refundable.",
  },
  {
    question: "How long does the India e-Visa take for US citizens?",
    answer:
      "Typically 2 to 5 business days, and up to a week or more in the October to February peak. You can apply up to 120 days before arrival and no later than 4 days before. We suggest applying 2 to 4 weeks ahead to leave room for a follow-up request.",
  },
  {
    question: "How long can a US citizen stay in India on an e-Visa?",
    answer:
      "On the 30-day visa, up to 30 days from arrival. On the 1-year and 5-year visas, India's rules give US citizens up to 180 days per visit, as against 90 days for most nationalities, with total stay in a calendar year capped at 180 days. A few recent sources quote 90 days, so confirm on the portal.",
  },
  {
    question: "Which visa should I choose for a two-week trip?",
    answer:
      "The 30-day visa is usually the right choice for a single trip of up to a month. Choose the 1-year visa if you will stay longer than 30 days or return within the year, and the 5-year visa only if you expect to visit repeatedly.",
  },
  {
    question: "What is the official India e-Visa website?",
    answer:
      "The official portal is indianvisaonline.gov.in/evisa. Many other sites rank high in search results and add their own service fees on top of the government fee, so make sure the web address matches before entering passport details or paying.",
  },
  {
    question: "Do I need the e-Arrival Card as well as a visa?",
    answer:
      "Yes. Since 1 April 2026, foreign travellers, including US citizens, must also submit a free digital e-Arrival Card within 72 hours before landing. It is separate from the visa and replaces the paper arrival form. You receive a QR code to show on arrival.",
  },
  {
    question: "Can I extend or convert an India e-Tourist visa?",
    answer:
      "No. An e-Tourist visa cannot be extended or converted in India. If you want more time, you need to leave the country and apply for a new visa.",
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
          imageAlt="India Gate at dusk, Delhi"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="India Visa for US Citizens"
          subheadline="The e-Tourist visa: fees, how long you can stay, how to apply and the e-Arrival Card."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I have a visa question before booking a trip to India with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">
              Yes, US citizens need a visa for India. Most apply online for the e-Tourist visa on
              India&apos;s official portal: US$10 to US$25 for the 30-day visa or US$40 for the 1-year visa,
              approved in about 2 to 5 business days, plus a free e-Arrival Card before landing.
            </span>{" "}
            This guide covers the fees, how long you can stay, what you need, when to apply and the
            mistakes to avoid. We are a tour operator, not a visa agency, so we do not file applications,
            but we help our guests with the practical details. Rules change, so always confirm the
            final fee and terms on the <a href="https://indianvisaonline.gov.in/evisa/" className="text-maroon underline" target="_blank" rel="noopener noreferrer">official e-Visa portal</a>.
          </ArticleP>

          <ArticleH2>India e-Visa Options and Fees for US Citizens</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">India e-Tourist visa options for US citizens</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Visa</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Validity</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Fee (USD)</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">30-day</th>
                  <td className="px-3 py-3 sm:px-5">30 days from arrival, double entry</td>
                  <td className="px-3 py-3 sm:px-5">$10 for April to June; $25 for July to March</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">1-year</th>
                  <td className="px-3 py-3 sm:px-5">365 days, multiple entry</td>
                  <td className="px-3 py-3 sm:px-5">$40</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">5-year</th>
                  <td className="px-3 py-3 sm:px-5">5 years, multiple entry</td>
                  <td className="px-3 py-3 sm:px-5">Sources differ ($80 to $160); the portal shows your exact fee</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ArticleP>
            Fees are paid by card on the portal, with a bank charge of about 2.5% to 3% added, and they are
            non-refundable even if the visa is refused. The 30-day fee changes with the season, not your passport:
            the cheaper rate applies to April to June. Figures are from{" "}
            <a href="https://www.bespokeindiaholidays.com/india-tourist-visa-for-us-citizens/" className="text-maroon underline" target="_blank" rel="noopener noreferrer">Bespoke India Holidays</a>{" "}
            and{" "}<a href="https://www.yoyotripsindia.com/blog/india-evisa-for-us-citizens/" className="text-maroon underline" target="_blank" rel="noopener noreferrer">YoYo Trips India</a>{" "}(both September 2026). The 5-year fee is quoted
            differently across sources, so rely on the amount shown at checkout.
          </ArticleP>

          <ArticleH2>Which e-Visa Should You Choose?</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">One trip of up to a month:</span> the 30-day visa. It is valid for 30 days from your arrival date, so you can stay the full 30 days.</li>
            <li><span className="font-semibold text-ink">A longer trip, or a return visit within the year:</span> the 1-year visa.</li>
            <li><span className="font-semibold text-ink">Frequent visits:</span> the 5-year visa.</li>
          </ArticleUL>
          <ArticleP>
            A typical private tour of 10 to 14 days fits the 30-day visa. See our{" "}
            <Link href="/travel-guide/10-days-in-india-itinerary" className="text-maroon underline">10-day</Link>{" "}and{" "}<Link href="/travel-guide/2-weeks-in-india-itinerary" className="text-maroon underline">14-day</Link>{" "}itineraries.
          </ArticleP>

          <ArticleH2>How Long Can US Citizens Stay?</ArticleH2>
          <ArticleP>
            On the 30-day visa, up to 30 days. On the 1-year and 5-year visas, India&apos;s rules allow US,
            UK, Canadian and Japanese citizens up to 180 days per visit, compared with 90 days for most
            other nationalities, while total time in India in a calendar year cannot exceed 180 days.
            This comes from the Ministry of Tourism&apos;s{" "}
            <a href="https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1564759&reg=48&lang=2" className="text-maroon underline" target="_blank" rel="noopener noreferrer">2019 announcement</a>{" "}and the portal rule quoted by{" "}
            <a href="https://nridirect.uk/blog/indian-e-visa-maximum-stay-multiple-entry-rules-how-long-you-can-actually-stay" className="text-maroon underline" target="_blank" rel="noopener noreferrer">NRI Direct</a>{" "}(August 2026). Some other sites quote 90 days
            for US citizens, so check your visa&apos;s stated terms. For the wider rules, see our{" "}<Link href="/travel-guide/india-e-visa-guide" className="text-maroon underline">India e-Visa guide</Link>.
          </ArticleP>

          <ArticleMidCTA
            text="Visa questions about your itinerary? Ask us before you book."
            href="/contact"
            linkLabel="Message us"
          />

          <ArticleH2>How Do You Apply, Step by Step?</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">1. Open the official portal</span> at indianvisaonline.gov.in/evisa and choose e-Tourist visa.</li>
            <li><span className="font-semibold text-ink">2. Fill in the form</span> with details exactly as they appear in your passport, plus your arrival date, port of entry and first-night address.</li>
            <li><span className="font-semibold text-ink">3. Upload a photo and your passport bio page.</span> Use a recent passport-style photo on a plain white background, with no glasses or hat.</li>
            <li><span className="font-semibold text-ink">4. Pay by card.</span> Keep the application ID to check your status.</li>
            <li><span className="font-semibold text-ink">5. Receive and print your approval</span> (the ETA) by email, and carry it with your passport.</li>
          </ArticleUL>

          <ArticleH2>What Do You Need?</ArticleH2>
          <ArticleUL>
            <li>A regular US passport valid for at least 6 months after arrival, with at least 2 blank pages.</li>
            <li>A digital passport-style photo and a scan of your passport bio page.</li>
            <li>A credit or debit card.</li>
            <li>Your arrival date, entry airport and first-night accommodation address.</li>
            <li>A return or onward ticket, which the portal lists as an eligibility requirement.</li>
          </ArticleUL>

          <ArticleH2>When Should You Apply?</ArticleH2>
          <ArticleP>
            You can apply up to 120 days before arrival and no later than 4 days before. Approval typically takes 2 to 5 business days,
            and longer in the October to February peak. We suggest applying 2 to 4 weeks ahead so a request for a clearer photo does not
            put your trip at risk. Do not book non-refundable flights before you have your approval if your dates are tight.
          </ArticleP>

          <ArticleH2>Avoid Look-Alike Visa Websites</ArticleH2>
          <ArticleP>
            Many sites that rank above the official portal charge their own service fee on top of the government fee, or deliver the same form
            for more money. Check that the address is indianvisaonline.gov.in before you enter passport details. You never need to pay a third
            party to apply, though some travellers choose to for convenience.
          </ArticleP>

          <ArticleH2>The e-Arrival Card</ArticleH2>
          <ArticleP>
            Since 1 April 2026, every foreign traveller arriving in India must also submit a free digital e-Arrival Card within 72 hours before landing,
            through the Bureau of Immigration site, the visa portal or the Su-Swagatam app. It replaces the paper arrival form and gives you a QR code
            to show on arrival. Not filing does not by itself stop you entering, but expect extra checks and longer waits.
            Source:{" "}<a href="https://www.businesstoday.in/india/story/india-makes-e-arrival-card-mandatory-for-international-travellers-523849-2026-04-03" className="text-maroon underline" target="_blank" rel="noopener noreferrer">Business Today</a>.
          </ArticleP>

          <ArticleH2>Other Things US Travellers Ask</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">OCI cardholders</span> do not need a tourist visa, but still file the e-Arrival Card.</li>
            <li><span className="font-semibold text-ink">Children</span> need their own visa and passport.</li>
            <li><span className="font-semibold text-ink">Land borders:</span> the e-Tourist visa is valid only at designated airports and seaports, not land crossings.</li>
            <li><span className="font-semibold text-ink">Extensions:</span> an e-Tourist visa cannot be extended or converted.</li>
          </ArticleUL>

          <ArticleH2>Planning Your Trip From the US</ArticleH2>
          <ArticleP>
            Once your visa is in hand, see our{" "}<Link href="/india-tours-from-usa" className="text-maroon underline">India tours for US travellers</Link>, the{" "}
            <Link href="/travel-guide/how-much-does-a-private-tour-of-india-cost" className="text-maroon underline">cost guide</Link>, our{" "}<Link href="/travel-guide/first-trip-to-india-guide" className="text-maroon underline">first-trip guide</Link>{" "}and{" "}
            <Link href="/travel-guide/is-india-safe-for-tourists" className="text-maroon underline">whether India is safe for tourists</Link>.
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
          headline="Visa Sorted? Let's Plan the Trip."
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a trip to India with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
