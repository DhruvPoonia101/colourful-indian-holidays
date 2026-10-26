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
 * Amounts checked 25 Oct 2026 against Travel India Smart's tipping guide
 * (mid-range-trip figures; its two driver figures differ slightly, so the
 * page uses the rupee-per-day range). Safari tipping had no reliable
 * published figure, so the page says to ask us. Not company policy: these
 * are traveller guidelines. US$ conversion is a rough ~Rs 88/USD. */

const title = "Tipping in India: How Much to Tip Drivers, Guides and Hotels";
const description =
  "How much to tip in India: typical rupee amounts for drivers, guides, restaurants, hotel staff and spas, with practical tips on small notes.";
const pagePath = "/travel-guide/tipping-in-india";
const heroImage = "/images/destinations/jaipur-city-palace.webp";
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
  { name: "Tipping in India", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "Is tipping expected in India?",
    answer:
      "Tipping is appreciated rather than required. Restaurants often add a service charge, and drivers, guides and hotel staff are commonly tipped for good service. Amounts are small by US standards.",
  },
  {
    question: "How much should I tip my driver in India?",
    answer:
      "A common guide is about \u20b9300 to \u20b9500 per day for a private driver, given at the end of the trip, with more for five-star or high-end trips. Adjust for service and trip length.",
  },
  {
    question: "How much should I tip a guide in India?",
    answer:
      "About \u20b9300 to \u20b9500 for a half-day guide and \u20b9500 to \u20b91,000 for a full day, on top of the guide's fee, for a mid-range trip. Tip more for an exceptional guide or a high-end tour.",
  },
  {
    question: "Should I tip if a restaurant adds a service charge?",
    answer:
      "If the bill already includes a service charge, no further tip is required, though leaving an extra \u20b950 to \u20b9100 for good service is common. If there is no service charge, 5% to 10%, rounded up, is typical.",
  },
  {
    question: "How much do I tip hotel porters and housekeeping?",
    answer:
      "Around \u20b950 to \u20b9100 per bag for porters, and \u20b9100 to \u20b9200 for housekeeping, left on your last morning, or \u20b950 to \u20b9100 a day if you prefer to tip daily.",
  },
  {
    question: "Should I tip in rupees or dollars?",
    answer:
      "Rupees. Small notes (\u20b950, \u20b9100, \u20b9200 and \u20b9500) are the most useful, so keep a stash. Staff can exchange foreign currency only with difficulty.",
  },
  {
    question: "Do I tip safari drivers and naturalists?",
    answer:
      "Yes, it is customary to tip the jeep driver and naturalist at the end of a safari, and your trip planner can suggest an amount for your park. We did not find a reliable published figure, so ask us before you go.",
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
          imageAlt="City Palace, Jaipur, Rajasthan"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="Tipping in India"
          subheadline="How much to tip drivers, guides, restaurants and hotel staff, in rupees."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I have a question about tipping on my India trip with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">
              Tipping in India is appreciated rather than required, and amounts are modest: roughly ₹300 to ₹500 a day for a private driver, ₹500 to ₹1,000 for a full-day guide and 5% to 10% in restaurants without a service charge.
            </span>{" "}
            Rupee notes in small denominations make it easy. This guide gives typical amounts for a mid-range trip. At recent exchange rates, ₹500 is roughly US$6.
          </ArticleP>
          <ArticleH2>Typical Tips at a Glance</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">Typical tipping amounts in India</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Who</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Typical tip (INR)</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Private driver</th>
                  <td className="px-3 py-3 sm:px-5">₹300 to ₹500 per day, paid at the end of the trip</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Guide, half day</th>
                  <td className="px-3 py-3 sm:px-5">₹300 to ₹500, on top of the fee</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Guide, full day</th>
                  <td className="px-3 py-3 sm:px-5">₹500 to ₹1,000, on top of the fee</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Restaurant with service charge</th>
                  <td className="px-3 py-3 sm:px-5">Nothing required; ₹50 to ₹100 extra for good service</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Restaurant without service charge</th>
                  <td className="px-3 py-3 sm:px-5">5% to 10% of the bill, rounded up</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Hotel porter</th>
                  <td className="px-3 py-3 sm:px-5">₹50 to ₹100 per bag</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Housekeeping</th>
                  <td className="px-3 py-3 sm:px-5">₹100 to ₹200 per stay, or ₹50 to ₹100 per day</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Spa or massage</th>
                  <td className="px-3 py-3 sm:px-5">About 10%, in cash to the therapist</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ArticleP>
            Amounts are for a mid-range trip, and the source suggests doubling them for five-star hotels or high-end private guides and halving them on a tight budget. Figures are summarised from <a href="https://www.travelindiasmart.com/trip-planning/tipping-in-india" className="text-maroon underline" target="_blank" rel="noopener noreferrer">Travel India Smart</a> and are guidelines, not rules.
          </ArticleP>
          <ArticleH2>Drivers and Guides</ArticleH2>
          <ArticleP>
            On a private tour you spend most of your time with your driver and guide, and a tip at the end of the trip or of each guide's day is the usual way to say thank you. Give it directly to them in cash, and tip more for service that goes beyond the ordinary. For multi-day trips, many travellers pool a single amount at the end.
          </ArticleP>
          <ArticleH2>Restaurants and the Service Charge</ArticleH2>
          <ArticleP>
            Many restaurants add a service charge of about 5% to 10% to the bill, which is technically optional but rarely worth disputing. If it is already on the bill, you do not need to add more. If not, round up or leave 5% to 10%.
          </ArticleP>
          <ArticleH2>Hotels, Spas and Safaris</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Porters and housekeeping:</span> Tip porters per bag and leave housekeeping a tip on your last morning, or small notes daily.</li>
            <li><span className="font-semibold text-ink">Spa:</span> About 10%, paid in cash to the therapist.</li>
            <li><span className="font-semibold text-ink">Safaris:</span> Tip the jeep driver and naturalist at the end of a safari; ask us for a sensible amount for your park.</li>
          </ArticleUL>
          <ArticleH2>Practical Tips</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Carry small notes.</span> Keep ₹50, ₹100 and ₹200 notes handy, because change is not always available.</li>
            <li><span className="font-semibold text-ink">Tip in rupees.</span> Foreign notes are hard for staff to change.</li>
            <li><span className="font-semibold text-ink">Do not feel pressured.</span> Tips are for good service. Politely decline any request that feels like a demand.</li>
          </ArticleUL>
          <ArticleP>
            See also our <Link href="/travel-guide/india-currency-payments-guide" className="text-maroon underline">currency and payments guide</Link>, our <Link href="/travel-guide/india-etiquette-for-tourists" className="text-maroon underline">etiquette guide</Link> and <Link href="/travel-guide/what-to-pack-for-india" className="text-maroon underline">what to pack</Link>.
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
          headline="Questions Before You Go?"
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I have a question about tipping on my India trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
