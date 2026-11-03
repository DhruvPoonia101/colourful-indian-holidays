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
 * 2027 dates were cross-checked on 26 Oct 2026 against HinduPad
 * (hindupad.com/hindu-festivals-2027), OfficeHolidays (officeholidays.com/
 * countries/india/2027) and Hindu Blog (hindu-blog.com), which agree on Holi,
 * Janmashtami, Ganesh Chaturthi, Dussehra, Diwali, Rath Yatra and Raksha
 * Bandhan. Single-source items are marked as such on the page: Jaisalmer
 * Desert Festival (happyfares.in), Nashik Simhastha bathing days (Patrika /
 * The Week, announced 2025) and the Navratri and Pushkar start. The end date
 * of the Simhastha is reported differently (July 2027 vs July 2028), so none
 * is stated. Lunar festival dates can move by a day: the page says so.
 */

const title = "India Festivals 2027: Dates for Holi, Diwali, Pushkar & More";
const description =
  "India festival dates for 2027 in date order: Holi 22 March, Dussehra 9 October, Diwali 29 October, Pushkar around 14 November, plus the Nashik Kumbh and planning tips.";
const pagePath = "/travel-guide/india-festivals-2027-calendar";
const heroImage = "/images/destinations/diwali.webp";
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
  { name: "India Festivals 2027", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    "question": "When is Diwali in 2027?",
    "answer": "Diwali falls on Friday, 29 October 2027, with Lakshmi Puja on that day. Some South Indian calendars mark Deepavali on 28 October."
  },
  {
    "question": "When is Holi in 2027?",
    "answer": "Holi is on Monday, 22 March 2027, and Holika Dahan is the evening before, on 21 March. Jaipur's Elephant Festival is held on the eve of Holi."
  },
  {
    "question": "When is the Pushkar Camel Fair in 2027?",
    "answer": "The fair's main day is Kartik Purnima, the full moon on 14 November 2027. The fair builds up over the days before, so confirm the start date with Rajasthan Tourism."
  },
  {
    "question": "When is the Kumbh Mela in 2027?",
    "answer": "The Nashik-Trimbakeshwar Simhastha Kumbh begins on 31 October 2026, with bathing days announced for 2 August, 31 August and 11 to 12 September 2027. Check the official programme for changes."
  },
  {
    "question": "Why do festival dates change every year?",
    "answer": "Most Indian festivals follow the lunar calendar, not the Gregorian one, so dates move each year. They can also differ by a day between regional calendars."
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
          imageAlt="Diwali lamps lit at dusk in India"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="India Festivals 2027: Dates and Where to Go"
          subheadline="Festival dates for 2027, which are worth a trip and how to plan around them."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I'd like to plan a trip around an Indian festival in 2027 with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">The big India festival dates in 2027: Holi on 22 March, Dussehra on 9 October, Diwali on 29 October and the Pushkar Camel Fair around the Kartik Purnima full moon on 14 November.</span> The full list is below, in date order, with where each is best seen. Most Indian festivals follow the lunar calendar, so dates move every year and can differ by a day between calendars. Always confirm before you book flights. Looking for the festivals themselves rather than the dates? See our <Link href="/travel-guide/top-cultural-festivals-in-india" className="text-maroon underline">guide to India&apos;s cultural festivals</Link>.
          </ArticleP>
          <ArticleH2>India Festival Dates for 2027</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">India festival dates in 2027, in date order</caption>
              <thead>
                <tr className="border-b border-sand text-ink"><th scope="col" className="px-3 py-3 font-semibold sm:px-5">Date (2027)</th><th scope="col" className="px-3 py-3 font-semibold sm:px-5">Festival</th><th scope="col" className="px-3 py-3 font-semibold sm:px-5">Notes</th></tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">15 January</th><td className="px-3 py-3 sm:px-5">Makar Sankranti and Uttarayan</td><td className="px-3 py-3 sm:px-5">Kite festival across Gujarat and North India. Some calendars list 14 January.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">26 January</th><td className="px-3 py-3 sm:px-5">Republic Day</td><td className="px-3 py-3 sm:px-5">A fixed date. The main parade is in Delhi.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">18 to 20 February</th><td className="px-3 py-3 sm:px-5">Jaisalmer Desert Festival</td><td className="px-3 py-3 sm:px-5">Ends on the Magh Purnima full moon (20 February). One source, so confirm with Rajasthan Tourism.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">6 March</th><td className="px-3 py-3 sm:px-5">Maha Shivaratri</td><td className="px-3 py-3 sm:px-5">A night of devotion at Shiva temples across India.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">21 March</th><td className="px-3 py-3 sm:px-5">Elephant Festival, Jaipur, and Holika Dahan</td><td className="px-3 py-3 sm:px-5">The Elephant Festival is held on the eve of Holi. See our <Link href="/experiences/elephant-festival" className="text-maroon underline">Elephant Festival page</Link>.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">22 March</th><td className="px-3 py-3 sm:px-5">Holi</td><td className="px-3 py-3 sm:px-5">The festival of colours. See our <Link href="/experiences/festival-tours" className="text-maroon underline">festival tours</Link>.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">15 April</th><td className="px-3 py-3 sm:px-5">Ram Navami</td><td className="px-3 py-3 sm:px-5">Celebrates the birth of Rama.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">5 July</th><td className="px-3 py-3 sm:px-5">Rath Yatra, Puri</td><td className="px-3 py-3 sm:px-5">Giant chariots pulled through Puri in Odisha.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">2 August</th><td className="px-3 py-3 sm:px-5">Nashik Simhastha Kumbh: first Amrit Snan</td><td className="px-3 py-3 sm:px-5">Bathing day announced for the Kumbh at Nashik and Trimbakeshwar. See below.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">4 August</th><td className="px-3 py-3 sm:px-5">Hariyali Teej</td><td className="px-3 py-3 sm:px-5">Women&apos;s monsoon festival, celebrated in Jaipur. See our <Link href="/experiences/teej-festival" className="text-maroon underline">Teej Festival page</Link>.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">17 August</th><td className="px-3 py-3 sm:px-5">Raksha Bandhan</td><td className="px-3 py-3 sm:px-5">Siblings&apos; festival, celebrated across North India.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">25 August</th><td className="px-3 py-3 sm:px-5">Janmashtami</td><td className="px-3 py-3 sm:px-5">Krishna&apos;s birthday, with big celebrations in Mathura and Vrindavan.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">31 August</th><td className="px-3 py-3 sm:px-5">Nashik Simhastha Kumbh: second Amrit Snan</td><td className="px-3 py-3 sm:px-5">Bathing day announced for the Kumbh at Nashik.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">4 September</th><td className="px-3 py-3 sm:px-5">Ganesh Chaturthi</td><td className="px-3 py-3 sm:px-5">A ten-day festival, biggest in Mumbai.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">11 to 14 September</th><td className="px-3 py-3 sm:px-5">Onam</td><td className="px-3 py-3 sm:px-5">Kerala&apos;s harvest festival, with Thiruvonam on 12 September. See our <Link href="/experiences/onam" className="text-maroon underline">Onam page</Link>.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">11 and 12 September</th><td className="px-3 py-3 sm:px-5">Nashik Simhastha Kumbh: third Amrit Snan</td><td className="px-3 py-3 sm:px-5">11 September in Nashik and 12 September in Trimbakeshwar, as announced.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">30 September</th><td className="px-3 py-3 sm:px-5">Navratri begins</td><td className="px-3 py-3 sm:px-5">Nine nights of dance and worship. Some calendars start on 1 October.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">9 October</th><td className="px-3 py-3 sm:px-5">Dussehra</td><td className="px-3 py-3 sm:px-5">Effigies of Ravana are burned across North India.</td></tr>
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">29 October</th><td className="px-3 py-3 sm:px-5">Diwali</td><td className="px-3 py-3 sm:px-5">The festival of lights. Lakshmi Puja is on 29 October, and some South Indian calendars mark Deepavali on 28 October. See our <Link href="/experiences/diwali" className="text-maroon underline">Diwali page</Link>.</td></tr>
                <tr><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">14 November</th><td className="px-3 py-3 sm:px-5">Kartik Purnima and the Pushkar Camel Fair</td><td className="px-3 py-3 sm:px-5">The fair&apos;s main day is the full moon. Confirm the start with Rajasthan Tourism. See our <Link href="/experiences/pushkar-fair" className="text-maroon underline">Pushkar Fair page</Link>.</td></tr>
              </tbody>
            </table>
          </div>
          <ArticleP>
            Dates cross-checked on 26 October 2026. Where a date comes from one source only, we say so.
          </ArticleP>
          <ArticleH2>Which Festivals Are Worth Planning a Trip Around?</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Holi and the Elephant Festival, 21 and 22 March:</span> the most colourful days of the year in Rajasthan, in the pleasant end of the season. See the <Link href="/experiences/elephant-festival" className="text-maroon underline">Elephant Festival</Link> and plan a <Link href="/travel-guide/rajasthan-itinerary-guide" className="text-maroon underline">Rajasthan route</Link> around it.</li>
            <li><span className="font-semibold text-ink">Jaisalmer Desert Festival, 18 to 20 February:</span> folk music, turban-tying and camel events in the desert, in cool weather.</li>
            <li><span className="font-semibold text-ink">Diwali, 29 October:</span> lamps and fireworks across the country, at the start of the best season. See our <Link href="/experiences/diwali" className="text-maroon underline">Diwali page</Link>.</li>
            <li><span className="font-semibold text-ink">Pushkar Camel Fair, around 14 November:</span> one of the world&apos;s largest camel fairs, in Rajasthan. See our <Link href="/experiences/pushkar-fair" className="text-maroon underline">Pushkar Fair page</Link>.</li>
            <li><span className="font-semibold text-ink">Onam, 11 to 14 September:</span> Kerala&apos;s harvest festival, with boat races and feasts. It falls in the monsoon, so plan for rain. See our <Link href="/experiences/onam" className="text-maroon underline">Onam page</Link>.</li>
          </ArticleUL>
          <ArticleH2>What About the 2027 Kumbh Mela at Nashik?</ArticleH2>
          <ArticleP>
            The Nashik-Trimbakeshwar Simhastha Kumbh is held once every twelve years on the Godavari. It begins on 31 October 2026, with bathing days (Amrit Snan) announced for 2 August, 31 August and 11 to 12 September 2027. Sources report the end date differently, so check the official programme before you plan. These dates were announced in 2025 and can change. Kumbh crowds are among the largest in the world, so book hotels and transport well ahead and expect restrictions on movement on bathing days. See our <Link href="/experiences/kumbh-mela" className="text-maroon underline">Kumbh Mela page</Link>.
          </ArticleP>
          <ArticleH2>How Should You Plan Around a Festival?</ArticleH2>
          <ArticleUL>
            <li>Book hotels and trains early. Rooms near a big festival fill first, and rates are usually higher.</li>
            <li>Allow a buffer day either side. Roads and attractions can be crowded or closed on the main day.</li>
            <li>Confirm the date a few weeks before you fly, because lunar dates can shift by a day.</li>
            <li>Ask us to build the trip around the festival. Our tours are private, so we can set the days to match.</li>
          </ArticleUL>
          <ArticleP>
            For the weather at that time of year, see our <Link href="/best-time-to-visit-india" className="text-maroon underline">month-by-month guide</Link> and <Link href="/tools/when-to-go-planner" className="text-maroon underline">when-to-go planner</Link>.
          </ArticleP>
          <ArticleH2>Sources</ArticleH2>
          <ArticleUL>
            <li><a href="https://hindupad.com/hindu-festivals-2027/" target="_blank" rel="noopener noreferrer" className="text-maroon underline">HinduPad: Hindu Festivals 2027</a></li>
            <li><a href="https://www.officeholidays.com/countries/india/2027" target="_blank" rel="noopener noreferrer" className="text-maroon underline">OfficeHolidays: Public Holidays in India in 2027</a></li>
            <li><a href="https://www.hindu-blog.com/2026/10/hindu-festivals-2027-calendar-important.html" target="_blank" rel="noopener noreferrer" className="text-maroon underline">Hindu Blog: Hindu Festivals 2027 Calendar</a></li>
            <li><a href="https://www.patrika.com/en/national-news/nashik-kumbh-mela-2027-dates-announced-19640505" target="_blank" rel="noopener noreferrer" className="text-maroon underline">Patrika: Nashik Kumbh Mela 2027 dates announced</a></li>
            <li><a href="https://www.theweek.in/wire-updates/national/2025/06/01/bom10-mh-kumbh-mela-dates.html" target="_blank" rel="noopener noreferrer" className="text-maroon underline">The Week: Simhastha Kumbh Mela to begin in Nashik-Trimbakeshwar on Oct 31</a></li>
            <li><a href="https://www.happyfares.in/blog/?p=12628" target="_blank" rel="noopener noreferrer" className="text-maroon underline">Happy Fares: Jaisalmer Desert Festival 2027</a></li>
          </ArticleUL>

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
          headline="Plan Your Trip Around a Festival."
          headlineItalic="Tell Us Which One."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around an Indian festival in 2027 with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
