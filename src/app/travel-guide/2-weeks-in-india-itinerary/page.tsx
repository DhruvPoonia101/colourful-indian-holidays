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
 * Routes here are described as routes we can arrange privately, not as fixed
 * 14-day products. Road times are the ones already published in our Rajasthan
 * itinerary guide (Delhi-Jaipur about 280 km, Jaipur-Ranthambore about
 * 180 km / 4 h, Jaipur-Jodhpur 5.5-6 h, Jodhpur-Udaipur about 5 h). Legs
 * whose times are not published there are stated without a time. Prices use
 * the shared starting rates in src/lib/pricing.ts: 13 nights x $100 or $250.
 */

const title = "2 Weeks in India: 14-Day Itinerary for First-Timers";
const description =
  "Three realistic 14-day India itineraries, day by day: Rajasthan and the Taj Mahal, Rajasthan with Kerala, or India with Nepal or Bhutan, plus costs and tips.";
const pagePath = "/travel-guide/2-weeks-in-india-itinerary";
const heroImage = "/images/destinations/agra-taj-mahal.webp";
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
  { name: "2 Weeks in India", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "Is 2 weeks enough for India?",
    answer:
      "Two weeks is enough for a proper first trip: the Golden Triangle plus a full loop of Rajasthan, or the north plus Kerala. It is not enough to see the whole country, so choose a region or two rather than six.",
  },
  {
    question: "What is the best 14-day itinerary for India?",
    answer:
      "For most first-timers, Delhi, Agra, Jaipur, Ranthambore, Jodhpur and Udaipur: the Taj Mahal, Rajasthan's forts and palaces, a tiger safari and the lakes. If you want a different pace for the second week, swap Rajasthan's second half for Kerala's backwaters.",
  },
  {
    question: "How much does a 14-day trip to India cost?",
    answer: `A 14-day private trip (13 nights) with your own driver and guide starts from about $${13 * RATE_PER_NIGHT_USD.india} per person with 3-4 star hotels and from about $${13 * RATE_PER_NIGHT_USD.luxury} with 5-star and palace hotels, two sharing, flights excluded. Peak season and higher hotel categories cost more.`,
  },
  {
    question: "Can I combine India with Nepal or Bhutan in 14 days?",
    answer:
      "Yes. Our India and Nepal and India and Bhutan trips run 11 days, so 14 days leaves room for extra nights in Rajasthan or at each stop. Bhutan also charges a government Sustainable Development Fee per night, which is separate from tour costs.",
  },
  {
    question: "Should I include Kerala or Rajasthan?",
    answer:
      "Include Rajasthan if you want forts, palaces and desert; include Kerala if you want a slower, greener second week with backwaters and tea gardens. Doing both in 14 days is possible but means a flight south and fewer nights in each place.",
  },
  {
    question: "What is the best time for a 14-day India trip?",
    answer:
      "October to March suits the Golden Triangle and Rajasthan best, and Kerala is pleasant through that window too. Summer heat in the north can be punishing.",
  },
  {
    question: "Do I need a 3-week itinerary instead?",
    answer:
      "Only if you want to add a third region, such as the south or a second country, without rushing. If you are weighing it up, send us your dates and we will tell you honestly whether 14 days will do.",
  },
];

type Day = { label: string; text: string };

const route1: Day[] = [
  { label: "Day 1", text: "Arrive in Delhi." },
  { label: "Day 2", text: "Delhi sightseeing." },
  { label: "Day 3", text: "Drive to Agra." },
  { label: "Day 4", text: "The Taj Mahal at sunrise, then on to Jaipur." },
  { label: "Day 5", text: "Jaipur: Amber Fort, the City Palace and Hawa Mahal." },
  { label: "Day 6", text: "Drive to Ranthambore (about 180 km, around 4 hours)." },
  { label: "Day 7", text: "Safari in Ranthambore National Park, one of the best places in India to look for tigers." },
  { label: "Day 8", text: "Road transfer to Jodhpur." },
  { label: "Day 9", text: "Jodhpur: Mehrangarh Fort and the blue-washed old city." },
  { label: "Day 10", text: "Drive to Udaipur (about 5 hours), stopping at Ranakpur's Jain temples." },
  { label: "Day 11", text: "Udaipur: the City Palace and an evening on Lake Pichola." },
  { label: "Day 12", text: "Day trip to Kumbhalgarh Fort, or a free day at the lake." },
  { label: "Day 13", text: "A slow last day in Udaipur: markets, a cooking class or a spa." },
  { label: "Day 14", text: "Depart from Udaipur." },
];

const route2: Day[] = [
  { label: "Day 1", text: "Arrive in Delhi." },
  { label: "Day 2", text: "Delhi sightseeing." },
  { label: "Day 3", text: "Drive to Agra." },
  { label: "Day 4", text: "The Taj Mahal at sunrise, then on to Jaipur." },
  { label: "Day 5", text: "Jaipur sightseeing." },
  { label: "Day 6", text: "Drive to Jodhpur (5.5 to 6 hours)." },
  { label: "Day 7", text: "Jodhpur: Mehrangarh Fort and the old city." },
  { label: "Day 8", text: "Drive to Udaipur (about 5 hours), stopping at Ranakpur." },
  { label: "Day 9", text: "Udaipur: the City Palace and Lake Pichola." },
  { label: "Day 10", text: "Fly south to Kochi." },
  { label: "Day 11", text: "Fort Kochi: colonial lanes, Chinese fishing nets and spice markets." },
  { label: "Day 12", text: "Alleppey: a houseboat cruise through the backwaters." },
  { label: "Day 13", text: "On to Munnar and its tea gardens." },
  { label: "Day 14", text: "Depart." },
];

function DayList({ days }: { days: Day[] }) {
  return (
    <ArticleUL>
      {days.map((d) => (
        <li key={d.label}>
          <span className="font-semibold text-ink">{d.label}:</span> {d.text}
        </li>
      ))}
    </ArticleUL>
  );
}

export default function TwoWeeksIndiaPage() {
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
          imageAlt="The Taj Mahal framed by a sandstone archway, Agra"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="2 Weeks in India: 14-Day Itinerary"
          subheadline="Three realistic routes, day by day, with what each one is best for and what it costs."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I'd like help planning a 2-week India trip with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">
              The best 14-day India itinerary for a first-timer is Delhi, Agra, Jaipur, Ranthambore,
              Jodhpur and Udaipur: the Taj Mahal, Rajasthan&apos;s forts and palaces, a tiger safari and
              the lakes.
            </span>{" "}
            Two weeks lets you do Rajasthan properly, or pair the north with Kerala. Below are three
            routes, day by day. Short on time? See our{" "}
            <Link href="/travel-guide/10-days-in-india-itinerary" className="text-maroon underline">10-day India itinerary</Link>.
          </ArticleP>

          <ArticleH2>Which 14-Day Route Should You Choose?</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">Three 14-day India routes compared</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Route</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Best for</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">1. Taj Mahal + Rajasthan + tigers</th>
                  <td className="px-3 py-3 sm:px-5">Forts, palaces and wildlife in one trip</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">2. Rajasthan + Kerala</th>
                  <td className="px-3 py-3 sm:px-5">North and south, with a slower second week</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">3. India + Nepal or Bhutan</th>
                  <td className="px-3 py-3 sm:px-5">Adding the Himalaya to the Golden Triangle</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ArticleH2>Route 1: Delhi, Agra, Jaipur, Ranthambore, Jodhpur and Udaipur</ArticleH2>
          <ArticleP>
            This is the full first-timer&apos;s Rajasthan. It is close to our{" "}
            <Link href="/tours/grand-rajasthan-circuit" className="text-maroon underline">
              Grand Rajasthan Circuit
            </Link>{" "}
            but starts with the Taj Mahal. We arrange it privately, so we can swap stops to suit you.
            Our <Link href="/travel-guide/rajasthan-itinerary-guide" className="text-maroon underline">Rajasthan itinerary guide</Link>{" "}
            has the full 14-day Rajasthan-only plan.
          </ArticleP>
          <DayList days={route1} />

          <ArticleMidCTA
            text="Want this route built around your dates and hotels?"
            href="/tours/grand-rajasthan-circuit"
            linkLabel="See the Grand Rajasthan Circuit"
          />

          <ArticleH2>Route 2: Rajasthan and Kerala</ArticleH2>
          <ArticleP>
            Pairs the north&apos;s forts and palaces with Kerala&apos;s backwaters. It is a tailor-made combination
            of the Golden Triangle with Rajasthan and the south from our{" "}
            <Link href="/tours/kerala-tours-classic" className="text-maroon underline">Kerala tour</Link>.
          </ArticleP>
          <DayList days={route2} />

          <ArticleH2>Route 3: India with Nepal or Bhutan</ArticleH2>
          <ArticleP>
            Our{" "}
            <Link href="/tours/india-nepal-tours" className="text-maroon underline">India and Nepal</Link>{" "}
            and{" "}
            <Link href="/tours/india-bhutan-tours" className="text-maroon underline">India and Bhutan</Link>{" "}
            trips each run 11 days. Fourteen days leaves room to add nights in Rajasthan or at each
            stop. Bhutan charges a government Sustainable Development Fee per night on top of tour costs, so
            plan for that separately. Browse our{" "}
            <Link href="/tours/10-14-day-tours" className="text-maroon underline">10 to 14 day tours</Link>.
          </ArticleP>

          <ArticleH2>How Does a 14-Day Trip Feel on the Ground?</ArticleH2>
          <ArticleP>
            Fourteen days is enough to give the main cities two nights and still have a couple of slower
            days. The long drives on Route 1 are Delhi to Jaipur (about 280 km, 5 to 6 hours), Jaipur to
            Ranthambore (about 4 hours) and Jodhpur to Udaipur (about 5 hours), and we pace each with a stop
            along the way. Most travellers say the middle of the trip is where they are glad they did not
            rush.
          </ArticleP>

          <ArticleH2>How Much Does a 14-Day India Trip Cost?</ArticleH2>
          <ArticleP>
            A 14-day private trip (13 nights) with your own driver and guide starts from about{" "}
            <Price usd={13 * RATE_PER_NIGHT_USD.india} /> per person with 3-4 star hotels and from
            about <Price usd={13 * RATE_PER_NIGHT_USD.luxury} /> with 5-star and palace hotels, two
            sharing, flights excluded. Peak season, safari fees and higher hotel categories cost more. Our{" "}
            <Link href="/travel-guide/how-much-does-a-private-tour-of-india-cost" className="text-maroon underline">
              cost guide
            </Link>{" "}
            explains what is included and what changes the price.
          </ArticleP>

          <ArticleH2>When Should You Go?</ArticleH2>
          <ArticleP>
            October to March suits the Golden Triangle and Rajasthan best. See our{" "}
            <Link href="/best-time-to-visit-india" className="text-maroon underline">best time to visit India</Link>{" "}
            guide for each month region by region. New to India? Start with our{" "}
            <Link href="/travel-guide/first-trip-to-india-guide" className="text-maroon underline">first-trip guide</Link>{" "}
            and read{" "}
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
          headline="Two Weeks, Planned Around You."
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a 2-week India trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
