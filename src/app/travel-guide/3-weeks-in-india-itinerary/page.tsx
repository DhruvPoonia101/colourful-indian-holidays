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

const title = "3 Weeks in India: 21-Day Itinerary for First-Timers";
const description =
  "Two realistic 21-day India itineraries, day by day: the Golden Triangle, Rajasthan, Varanasi and Kerala, or India with Nepal and Bhutan, plus costs and pacing.";
const pagePath = "/travel-guide/3-weeks-in-india-itinerary";
const heroImage = "/images/destinations/varanasi-evening-ganges-aarti.webp";
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
  { name: "3 Weeks in India", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    "question": "Is 3 weeks too long for India?",
    "answer": "No. Three weeks lets you see the north, the Ganges and the south at a relaxed pace. The risk is trying to fit in too many places, so plan two nights per stop and leave a free day before each change of region."
  },
  {
    "question": "What is the best 21-day itinerary for India?",
    "answer": "For a first trip, Delhi, Agra, Jaipur, Ranthambore, Jodhpur, Udaipur, Varanasi and Kerala covers the Taj Mahal, Rajasthan's forts and palaces, a tiger safari, the Ganges and the backwaters."
  },
  {
    "question": "Can I add Nepal and Bhutan to a 3-week India trip?",
    "answer": "Yes. Seven nights in India, six in Nepal and seven in Bhutan fits in 21 days. You fly Delhi to Kathmandu and Kathmandu to Paro. Bhutan charges a government Sustainable Development Fee per night, and its nightly rate is higher than India's."
  },
  {
    "question": "How much does a 3-week India trip cost?",
    "answer": "A 21-day private trip starts from about US$2,000 per person in 3-4 star hotels and about US$5,000 in 5-star and palace hotels, two sharing, flights excluded. Final prices depend on dates, hotels and group size."
  },
  {
    "question": "Do I need internal flights?",
    "answer": "Route 1 uses two flights, to Varanasi and to Kochi, because the distances are long. Route 2 uses flights between countries. Flights are priced separately unless your quote says otherwise."
  }
];

const route1: Day[] = [
  { label: "Day 1", text: "Arrive in Delhi." },
  { label: "Day 2", text: "Delhi sightseeing: Old and New Delhi." },
  { label: "Day 3", text: "Drive to Agra (3 to 4 hours) and visit Agra Fort." },
  { label: "Day 4", text: "The Taj Mahal at sunrise, then on to Jaipur." },
  { label: "Day 5", text: "Jaipur: Amber Fort, the City Palace and the old city bazaars." },
  { label: "Day 6", text: "Drive to Ranthambore (about 4 hours)." },
  { label: "Day 7", text: "Safari in Ranthambore National Park, one of the best places in India to look for tigers." },
  { label: "Day 8", text: "Road transfer to Jodhpur." },
  { label: "Day 9", text: "Jodhpur: Mehrangarh Fort and the blue-washed old city." },
  { label: "Day 10", text: "Drive to Udaipur (about 5 hours), stopping at Ranakpur's Jain temples." },
  { label: "Day 11", text: "Udaipur: the City Palace and an evening on Lake Pichola." },
  { label: "Day 12", text: "A slow day in Udaipur, or a day trip to Kumbhalgarh Fort." },
  { label: "Day 13", text: "Fly to Varanasi (with a connection)." },
  { label: "Day 14", text: "Varanasi: a sunrise boat ride on the Ganges and the old city lanes." },
  { label: "Day 15", text: "Sarnath, then the evening Ganga aarti." },
  { label: "Day 16", text: "Fly south to Kochi." },
  { label: "Day 17", text: "Fort Kochi: colonial lanes, Chinese fishing nets and spice markets." },
  { label: "Day 18", text: "Alleppey: a houseboat cruise through the backwaters." },
  { label: "Day 19", text: "On to Munnar and its tea gardens." },
  { label: "Day 20", text: "Return to Kochi, with a free afternoon." },
  { label: "Day 21", text: "Depart from Kochi." },
];

const route2: Day[] = [
  { label: "Day 1", text: "Arrive in Delhi." },
  { label: "Day 2", text: "Delhi sightseeing." },
  { label: "Day 3", text: "Drive to Agra (3 to 4 hours)." },
  { label: "Day 4", text: "The Taj Mahal at sunrise, then on to Jaipur." },
  { label: "Day 5", text: "Jaipur sightseeing." },
  { label: "Day 6", text: "Drive to Ranthambore (about 4 hours)." },
  { label: "Day 7", text: "Safari in Ranthambore National Park." },
  { label: "Day 8", text: "Travel to Delhi and fly to Kathmandu." },
  { label: "Day 9", text: "Kathmandu Valley: the temple squares and stupas." },
  { label: "Day 10", text: "Drive to Nagarkot for mountain views." },
  { label: "Day 11", text: "Nagarkot sunrise, then on to Pokhara." },
  { label: "Day 12", text: "Pokhara: the lake and the Himalayan views." },
  { label: "Day 13", text: "Return to Kathmandu." },
  { label: "Day 14", text: "Fly to Paro, then on to Thimphu." },
  { label: "Day 15", text: "Thimphu sightseeing." },
  { label: "Day 16", text: "Thimphu to Punakha via the Dochula Pass." },
  { label: "Day 17", text: "Punakha sightseeing." },
  { label: "Day 18", text: "Back to Paro." },
  { label: "Day 19", text: "The hike to Tiger's Nest Monastery." },
  { label: "Day 20", text: "A free day in the Paro valley." },
  { label: "Day 21", text: "Depart from Paro." },
];

type Day = { label: string; text: string };

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

const NIGHTS = 20;
const route2Total =
  7 * RATE_PER_NIGHT_USD.india + 6 * RATE_PER_NIGHT_USD.nepal + 7 * RATE_PER_NIGHT_USD.bhutan;

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
          imageAlt="The evening Ganga aarti at Varanasi"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="3 Weeks in India: 21-Day Itinerary"
          subheadline="Two realistic routes, day by day, with how to pace them and what they cost."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I'd like help planning a 3-week India trip with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">The best 21-day India itinerary for a first-timer links the Golden Triangle, Rajasthan&apos;s tiger country and lakes, Varanasi and Kerala.</span> Three weeks is long enough to see four very different Indias without rushing. Below are two routes, day by day, and what they cost. Only have two weeks? See our <Link href="/travel-guide/2-weeks-in-india-itinerary" className="text-maroon underline">14-day India itinerary</Link>, or our <Link href="/travel-guide/10-days-in-india-itinerary" className="text-maroon underline">10-day itinerary</Link> for less time.
          </ArticleP>
          <ArticleH2>Which 3-Week Route Should You Choose?</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">Two 21-day India routes compared</caption>
              <thead>
                <tr className="border-b border-sand text-ink"><th scope="col" className="px-3 py-3 font-semibold sm:px-5">Route</th><th scope="col" className="px-3 py-3 font-semibold sm:px-5">Best for</th></tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-sand/60"><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">1. North, Varanasi and Kerala</th><td className="px-3 py-3 sm:px-5">The classic first trip, from the Taj Mahal to the backwaters</td></tr>
                <tr><th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">2. India, Nepal and Bhutan</th><td className="px-3 py-3 sm:px-5">Adding two Himalayan countries to the Golden Triangle and tigers</td></tr>
              </tbody>
            </table>
          </div>
          <ArticleH2>Route 1: Delhi, Agra, Jaipur, Ranthambore, Jodhpur, Udaipur, Varanasi and Kerala</ArticleH2>
          <ArticleP>
            This is the full classic. The first twelve days follow our <Link href="/travel-guide/2-weeks-in-india-itinerary" className="text-maroon underline">14-day Rajasthan route</Link>, then it adds the Ganges at Varanasi and a slow finish in Kerala. We arrange it privately, so we can swap stops, add rest days or change the hotels. Our <Link href="/tours/golden-triangle-tour-varanasi" className="text-maroon underline">Golden Triangle with Varanasi</Link> and <Link href="/tours/kerala-tours-classic" className="text-maroon underline">Kerala tour</Link> show how those legs look on their own.
          </ArticleP>
          <DayList days={route1} />
          <ArticleMidCTA
            text="Want this route built around your dates and hotels?"
            href="/contact"
            linkLabel="Get a free quote"
          />

          <ArticleH2>Route 2: India, Nepal and Bhutan</ArticleH2>
          <ArticleP>
            Seven nights in India, six in Nepal and seven in Bhutan. The India leg ends at Ranthambore, then you fly Delhi to Kathmandu and later Kathmandu to Paro. It extends our shorter <Link href="/tours/india-nepal-bhutan-tours" className="text-maroon underline">India, Nepal and Bhutan tour</Link>. For how the three countries fit together, flights and visas, read our <Link href="/travel-guide/india-nepal-bhutan-combined-tour-guide" className="text-maroon underline">combined-trip guide</Link>.
          </ArticleP>
          <DayList days={route2} />
          <ArticleH2>How Do You Pace Three Weeks?</ArticleH2>
          <ArticleP>
            The long road days are Delhi to Agra (3 to 4 hours), Jaipur to Ranthambore (about 4 hours) and Jodhpur to Udaipur (about 5 hours). We pace each with a stop on the way and plan a slower day after the flights. Three weeks works best at two nights per stop, with a free day built in before each change of region. If you would rather see fewer places, drop one region instead of shortening every stay.
          </ArticleP>
          <ArticleH2>How Much Does a 3-Week India Trip Cost?</ArticleH2>
          <ArticleP>
            A 21-day private trip (20 nights) with your own driver and guide starts from about <Price usd={NIGHTS * RATE_PER_NIGHT_USD.india} /> per person with 3-4 star hotels and from about <Price usd={NIGHTS * RATE_PER_NIGHT_USD.luxury} /> with 5-star and palace hotels, two sharing, flights excluded. Route 2 starts from about <Price usd={route2Total} /> per person, because Bhutan&apos;s daily government fee raises its nightly rate. Peak season and higher hotel categories cost more. Try our <Link href="/tools/trip-cost-calculator" className="text-maroon underline">trip cost calculator</Link> with your own nights, or read our <Link href="/travel-guide/how-much-does-a-private-tour-of-india-cost" className="text-maroon underline">cost guide</Link>.
          </ArticleP>
          <CurrencyControl center className="my-4" />
          <ArticleH2>When Should You Go?</ArticleH2>
          <ArticleP>
            October to March suits the Golden Triangle, Rajasthan and Varanasi best. Kerala is wettest from June to September. Nepal is best in October to November and March to April, and Bhutan in spring and autumn, so those months work for Route 2. Check our <Link href="/tools/when-to-go-planner" className="text-maroon underline">when-to-go planner</Link> and our <Link href="/best-time-to-visit-india" className="text-maroon underline">month-by-month guide</Link>. New to India? Start with our <Link href="/travel-guide/first-trip-to-india-guide" className="text-maroon underline">first-trip guide</Link>.
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
          headline="Three Weeks, Planned Around You."
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a 3-week India trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
