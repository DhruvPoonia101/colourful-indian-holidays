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
 * Checked 25 Oct 2026 against Travel India Smart's 2026 SIM guide (Airtel
 * airport kiosks at Delhi T3, Mumbai T2 and Bengaluru; documents; ~15 min
 * activation; Jio store up to 24 h; ~Rs 299-350/28 days; local eSIM cannot be
 * self-activated; international eSIM data-only; indicative prices). Plans
 * change often, so the page says to check operators. Hotel WiFi line is
 * general advice, not from the source. */

const title = "SIM Card, eSIM and WiFi in India for Tourists";
const description =
  "How tourists get mobile data in India: international eSIM, an Airtel SIM at the airport or a Jio SIM, with prices, documents needed and coverage.";
const pagePath = "/travel-guide/sim-card-and-wifi-in-india";
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
  { name: "SIM Card & WiFi in India", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "Can tourists buy a local SIM card in India?",
    answer:
      "Yes. Airtel has kiosks in the international arrivals halls at Delhi, Mumbai and Bengaluru, and you need your passport, visa and a photo to complete registration. Jio and other operators sell through city stores. Activation takes about 15 minutes at an Airtel airport kiosk.",
  },
  {
    question: "Should I get a local SIM or an eSIM for India?",
    answer:
      "For a trip of one to three weeks with a modern phone, an international eSIM is simplest: buy it before you fly and it works on landing. For stays over a month, or if you want an Indian number for calls and local apps, a local SIM is better.",
  },
  {
    question: "Can foreigners activate a local eSIM in India?",
    answer:
      "Not by themselves online. Activating a local eSIM needs an Indian number for verification, so the airport Airtel counter can issue one with in-person registration.",
  },
  {
    question: "How much does a SIM or eSIM cost in India?",
    answer:
      "A local prepaid plan of about 28 days with around 1.5 GB a day costs roughly \u20b9300 to \u20b9350, and international travel eSIMs start around US$5 to US$7 for 1 GB for 7 days or about US$13 to US$18 for 5 GB for 30 days. Check current plans before you buy.",
  },
  {
    question: "Is hotel WiFi reliable in India?",
    answer:
      "Most hotels offer WiFi, but speed and reliability vary, particularly in smaller towns, heritage properties and rural lodges. Carry a data plan as a backup.",
  },
  {
    question: "Does my US phone work in India?",
    answer:
      "Usually, if it is unlocked and supports the local bands. Check with your carrier about international roaming charges, or use an eSIM or local SIM instead.",
  },
  {
    question: "Do I need an Indian number for apps?",
    answer:
      "Some local apps and services use OTP codes sent to an Indian number, which an international data-only eSIM cannot receive. For most tourists this does not matter, because your tour operator handles bookings.",
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
          headline="SIM Card, eSIM and WiFi in India"
          subheadline="Your options for mobile data, what each costs and what you need."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I have a question about mobile data on my India trip with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">
              For a one-to-three-week trip, an international eSIM bought before you fly is the simplest option; for a longer stay or an Indian number, buy an Airtel or Jio SIM with your passport.
            </span>{" "}
            This guide explains your choices, what each costs, and what to do about hotel WiFi.
          </ArticleP>
          <ArticleH2>Your Options Compared</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">SIM, eSIM and WiFi options in India</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Option</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Best for</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">The catch</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">International eSIM</th>
                  <td className="px-3 py-3 sm:px-5">Trips of 1 to 3 weeks, no queues</td>
                  <td className="px-3 py-3 sm:px-5">Data only, no Indian number</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Airtel SIM at the airport</th>
                  <td className="px-3 py-3 sm:px-5">A local number and calls</td>
                  <td className="px-3 py-3 sm:px-5">Registration with passport and visa; about 15 minutes</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Jio SIM from a city store</th>
                  <td className="px-3 py-3 sm:px-5">Longer stays; strong rural and mountain coverage</td>
                  <td className="px-3 py-3 sm:px-5">Activation can take up to 24 hours</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Hotel WiFi</th>
                  <td className="px-3 py-3 sm:px-5">Backup and email</td>
                  <td className="px-3 py-3 sm:px-5">Speed varies, especially outside big cities</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ArticleP>
            Summarised from <a href="https://www.travelindiasmart.com/trip-planning/sim-card-india-2026" className="text-maroon underline" target="_blank" rel="noopener noreferrer">Travel India Smart</a> (2026). Plans and prices change, so check current offers on the operators' sites before you travel.
          </ArticleP>
          <ArticleH2>International eSIM</ArticleH2>
          <ArticleP>
            Buy an eSIM from a provider such as Airalo, Nomad or Holafly before you fly, scan the QR code, and it activates when your phone connects to a local network on landing. There is no registration and no airport queue. It is data only, so you will not get an Indian number, and your phone must support eSIM. Typical prices are about US$5 to US$7 for 1 GB for 7 days or about US$13 to US$18 for 5 GB for 30 days.
          </ArticleP>
          <ArticleH2>Local SIM Card</ArticleH2>
          <ArticleP>
            Airtel runs kiosks in the international arrivals halls at Delhi, Mumbai and Bengaluru. Take your passport, your visa and a passport-sized photo, and expect to complete registration in about 15 minutes. A typical plan is roughly ₹300 to ₹350 for 28 days with about 1.5 GB of data a day. Foreigners cannot activate a local eSIM online, but the airport counter can issue one with in-person registration. Jio sells through city stores, and activation can take up to 24 hours.
          </ArticleP>
          <ArticleH2>Coverage</ArticleH2>
          <ArticleP>
            Jio and Airtel both have strong 4G and growing 5G coverage in cities. In the hills, Ladakh and the northeast, Jio generally has the broadest reach. Expect patchy signal in remote lodges and on mountain roads.
          </ArticleP>
          <ArticleH2>Hotel WiFi</ArticleH2>
          <ArticleP>
            Most hotels offer WiFi, but speed varies, particularly in smaller towns and heritage properties. Treat it as a backup, and keep mobile data for maps and messaging.
          </ArticleP>
          <ArticleH2>Our Advice</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Short trip, modern phone:</span> buy an international eSIM before you fly.</li>
            <li><span className="font-semibold text-ink">Over a month, or you want an Indian number:</span> buy an Airtel SIM at the airport.</li>
            <li><span className="font-semibold text-ink">Family:</span> one local SIM for a hotspot and calls, and eSIMs on the other phones.</li>
          </ArticleUL>
          <ArticleP>
            Sort your SIM before you pack. See our <Link href="/travel-guide/what-to-pack-for-india" className="text-maroon underline">packing guide</Link>, <Link href="/travel-guide/india-currency-payments-guide" className="text-maroon underline">currency and payments guide</Link> and <Link href="/travel-guide/first-trip-to-india-guide" className="text-maroon underline">first-trip guide</Link>.
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
          whatsappMessage="Hi! I have a question about mobile data on my India trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
