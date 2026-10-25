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
 * Route 1 extends our 9-day Golden Triangle with Udaipur by a Jodhpur stop;
 * Route 2 is the Golden Triangle plus the Kerala leg of our Kerala tour
 * (tailor-made, not a fixed package); Route 3 is our 9-day Golden Triangle
 * with Varanasi plus one extra day. All three are described as routes we can
 * arrange, not as fixed 10-day products. Road times are the ones already published in our
 * Rajasthan itinerary guide (Jaipur-Jodhpur 5.5-6 h, Jodhpur-Udaipur about
 * 5 h, Delhi-Jaipur about 280 km). Prices are the shared starting rates in
 * src/lib/pricing.ts: 9 nights x $100 (3-4 star) or $250 (5-star/palace).
 */

const title = "10 Days in India: Itinerary for First-Timers";
const description =
  "Three realistic 10-day India itineraries for first-timers, day by day: Golden Triangle with Rajasthan's lakes, Golden Triangle with Kerala, or with Varanasi, plus costs and tips.";
const pagePath = "/travel-guide/10-days-in-india-itinerary";
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
  { name: "10 Days in India", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "Is 10 days enough for India?",
    answer:
      "Ten days is enough for one good route, not for the whole country. It fits the Golden Triangle plus one extension, either Rajasthan's lakes, Kerala's backwaters or Varanasi, but not all of them. Trying to cover more usually means spending most of the trip in transit.",
  },
  {
    question: "What is the best 10-day itinerary for India for a first-timer?",
    answer:
      "For most first-time visitors, Delhi, Agra, Jaipur, Jodhpur and Udaipur: the Taj Mahal, then Rajasthan's forts and palaces, finishing at Udaipur's lakes. If you would rather end on a beach-free, slower note, swap Rajasthan for Kerala's backwaters, or add Varanasi for the Ganges.",
  },
  {
    question: "How much does a 10-day trip to India cost?",
    answer: `A 10-day private trip (9 nights) with your own driver and guide starts from about $${9 * RATE_PER_NIGHT_USD.india} per person with 3-4 star hotels and from about $${9 * RATE_PER_NIGHT_USD.luxury} with 5-star and palace hotels, two sharing, flights excluded. Peak season and higher hotel categories cost more.`,
  },
  {
    question: "Can I combine India with Nepal or Bhutan in 10 days?",
    answer:
      "It is tight. Our India and Nepal and India and Bhutan trips each run 11 days, which is the shortest length that avoids rushing the second country. In 10 days, stay in India.",
  },
  {
    question: "Which cities should I skip in 10 days?",
    answer:
      "On the Rajasthan route, skip Jaisalmer, which adds a long road day each way, and Pushkar unless you have a spare day. Keep the Taj Mahal, one fort city and one lake or river city and give each at least two nights.",
  },
  {
    question: "What is the best time for a 10-day India trip?",
    answer:
      "October to March suits the Golden Triangle and Rajasthan, and Kerala is pleasant through that window too. Summer heat in the north can be punishing. See our best-time guide for each month region by region.",
  },
];

type Day = { label: string; text: string };

const route1: Day[] = [
  { label: "Day 1", text: "Arrive in Delhi and settle in." },
  { label: "Day 2", text: "Delhi sightseeing: the Mughal and colonial city." },
  { label: "Day 3", text: "Drive to Agra." },
  { label: "Day 4", text: "The Taj Mahal at sunrise, then on to Jaipur." },
  { label: "Day 5", text: "Jaipur: Amber Fort, the City Palace, Jantar Mantar and Hawa Mahal." },
  { label: "Day 6", text: "Drive to Jodhpur (5.5 to 6 hours)." },
  { label: "Day 7", text: "Jodhpur: Mehrangarh Fort and the blue-washed old city." },
  { label: "Day 8", text: "Drive to Udaipur (about 5 hours), stopping at Ranakpur's Jain temples." },
  { label: "Day 9", text: "Udaipur: the City Palace and an evening on Lake Pichola." },
  { label: "Day 10", text: "Depart from Udaipur." },
];

const route2: Day[] = [
  { label: "Day 1", text: "Arrive in Delhi." },
  { label: "Day 2", text: "Delhi sightseeing." },
  { label: "Day 3", text: "Drive to Agra." },
  { label: "Day 4", text: "The Taj Mahal at sunrise, then on to Jaipur." },
  { label: "Day 5", text: "Jaipur sightseeing." },
  { label: "Day 6", text: "Fly south to Kochi." },
  { label: "Day 7", text: "Fort Kochi: colonial lanes, Chinese fishing nets and spice markets." },
  { label: "Day 8", text: "Alleppey: a houseboat cruise through the backwaters." },
  { label: "Day 9", text: "On to Munnar and its tea gardens." },
  { label: "Day 10", text: "Depart." },
];

const route3: Day[] = [
  { label: "Day 1", text: "Arrive in Delhi." },
  { label: "Day 2", text: "Delhi sightseeing." },
  { label: "Day 3", text: "Drive to Agra." },
  { label: "Day 4", text: "The Taj Mahal at sunrise, then on to Jaipur." },
  { label: "Day 5", text: "Jaipur sightseeing." },
  { label: "Day 6", text: "Fly to Varanasi." },
  { label: "Day 7", text: "A sunrise boat ride on the Ganges, then Sarnath." },
  { label: "Day 8", text: "Varanasi's old city, temples and evening aarti." },
  { label: "Day 9", text: "A slower day in Varanasi, or an extra night in Delhi on the way home." },
  { label: "Day 10", text: "Depart." },
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

export default function TenDaysIndiaPage() {
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
          headline="10 Days in India: Itinerary for First-Timers"
          subheadline="Three realistic routes, day by day, what each one is best for, and what to leave out."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I'd like help planning a 10-day India trip with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">
              The best 10-day India itinerary for a first-timer is Delhi, Agra, Jaipur, Jodhpur and
              Udaipur: the Taj Mahal, then Rajasthan&apos;s forts and palaces, ending at the lakes.
            </span>{" "}
            Ten days fits one well-paced route, not the whole country, so the choice is which
            extension to add to the Golden Triangle of Delhi, Agra and Jaipur: Rajasthan&apos;s lakes,
            Kerala&apos;s backwaters or Varanasi. Below are all three, day by day.
          </ArticleP>

          <ArticleH2>Which 10-Day Route Should You Choose?</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">Three 10-day India routes compared</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Route</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Best for</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">1. Golden Triangle + Rajasthan lakes</th>
                  <td className="px-3 py-3 sm:px-5">Forts, palaces and the classic first trip</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">2. Golden Triangle + Kerala</th>
                  <td className="px-3 py-3 sm:px-5">A slower, greener second half and backwater houseboat</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">3. Golden Triangle + Varanasi</th>
                  <td className="px-3 py-3 sm:px-5">Spiritual India and the Ganges at sunrise</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ArticleH2>Route 1: Delhi, Agra, Jaipur, Jodhpur and Udaipur</ArticleH2>
          <ArticleP>
            This is the classic. It builds on our{" "}
            <Link href="/tours/golden-triangle-tour-udaipur" className="text-maroon underline">
              9-day Golden Triangle with Udaipur
            </Link>
            {" "}by adding a night in Jodhpur, and we arrange it privately around your dates.
          </ArticleP>
          <DayList days={route1} />

          <ArticleMidCTA
            text="Want this route built around your dates and hotels?"
            href="/tours/golden-triangle-tour-udaipur"
            linkLabel="See the 9-day Udaipur trip"
          />

          <ArticleH2>Route 2: Golden Triangle and Kerala</ArticleH2>
          <ArticleP>
            Pairs North India&apos;s monuments with Kerala&apos;s slower, greener pace. It is a tailor-made
            combination of the Golden Triangle from our{" "}
            <Link href="/tours/golden-triangle-tour-classic" className="text-maroon underline">Golden Triangle tour</Link>{" "}
            with the south from our{" "}
            <Link href="/tours/kerala-tours-classic" className="text-maroon underline">Kerala tour</Link>.
          </ArticleP>
          <DayList days={route2} />

          <ArticleH2>Route 3: Golden Triangle and Varanasi</ArticleH2>
          <ArticleP>
            Adds India&apos;s spiritual heart. It follows our{" "}
            <Link href="/tours/golden-triangle-tour-varanasi" className="text-maroon underline">
              9-day Golden Triangle and Varanasi trip
            </Link>{" "}
            with one extra day.
          </ArticleP>
          <DayList days={route3} />

          <ArticleH2>How Does a 10-Day Trip Feel on the Ground?</ArticleH2>
          <ArticleP>
            Each long drive costs you most of a day, so on Route 1 the stretches that matter are
            Delhi to Jaipur (about 280 km, 5 to 6 hours), Jaipur to Jodhpur (5.5 to 6 hours) and
            Jodhpur to Udaipur (about 5 hours). We pace them with a stop for lunch or a fort on the way, so
            they feel like part of the trip rather than lost time. The first day after a long flight
            is deliberately light.
          </ArticleP>

          <ArticleH2>What to Leave Out in 10 Days</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Jaisalmer.</span> It sits at the far end of Rajasthan and adds a long road day each way. Save it for a longer trip.</li>
            <li><span className="font-semibold text-ink">A second country.</span> Nepal or Bhutan needs at least 11 days to avoid rushing. See our <Link href="/tours/10-14-day-tours" className="text-maroon underline">10 to 14 day tours</Link>.</li>
            <li><span className="font-semibold text-ink">Too many one-night stops.</span> Give each major city two nights where you can.</li>
          </ArticleUL>

          <ArticleH2>How Much Does a 10-Day India Trip Cost?</ArticleH2>
          <ArticleP>
            A 10-day private trip (9 nights) with your own driver and guide starts from about{" "}
            <Price usd={9 * RATE_PER_NIGHT_USD.india} /> per person with 3-4 star hotels and from
            about <Price usd={9 * RATE_PER_NIGHT_USD.luxury} /> with 5-star and palace hotels, two
            sharing, flights excluded. Peak season and higher hotel categories cost more. Our{" "}
            <Link href="/travel-guide/how-much-does-a-private-tour-of-india-cost" className="text-maroon underline">
              cost guide
            </Link>{" "}
            explains what is included and what changes the price.
          </ArticleP>

          <ArticleH2>When Should You Go?</ArticleH2>
          <ArticleP>
            October to March suits the Golden Triangle and Rajasthan best, and Kerala is pleasant
            through that window too. See our{" "}
            <Link href="/best-time-to-visit-india" className="text-maroon underline">best time to visit India</Link>{" "}
            guide for each month region by region. New to India? Start with our{" "}
            <Link href="/travel-guide/first-trip-to-india-guide" className="text-maroon underline">first-trip guide</Link>{" "}
            and our{" "}
            <Link href="/travel-guide/india-e-visa-guide" className="text-maroon underline">e-Visa guide</Link>.
            Got two weeks? See our{" "}
            <Link href="/travel-guide/2-weeks-in-india-itinerary" className="text-maroon underline">14-day India itinerary</Link>.
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
          headline="Ten Days, Planned Around You."
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a 10-day India trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
