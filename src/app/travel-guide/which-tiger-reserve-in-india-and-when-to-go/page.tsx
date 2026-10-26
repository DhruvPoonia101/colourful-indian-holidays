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
 * Facts checked 25 Oct 2026 against Bout India (zones, closures, MP 120-day
 * booking window), India Wildlife News (30 Sep 2026: reopening on 1 Oct, MP
 * closure 1 Jul-30 Sep) and T. S. Kamath's best-time guide (seasons and park
 * best months). Closure dates differ between sources for the MP parks
 * (30 Sep vs 14/15 Oct), so the page says "roughly July to September" and that we
 * confirm for the dates. Per-park best months also match the Best Season
 * facts on each destination page. Prices: nights x RATE_PER_NIGHT_USD.india
 * (6-day = 5 nights, 7-day = 6, 8-day = 7).
 */

const title = "Which Tiger Reserve in India, and When Should You Go?";
const description =
  "Which tiger reserve to choose and the best month for a tiger safari in India: Ranthambore, Bandhavgarh, Kanha, Pench and Kaziranga compared, with closures and permits.";
const pagePath = "/travel-guide/which-tiger-reserve-in-india-and-when-to-go";
const heroImage = "/images/destinations/ranthambore-tiger.webp";
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
  { name: "Which Tiger Reserve and When", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "Which is the best tiger reserve in India for a first-timer?",
    answer:
      "For most first-timers, Ranthambore in Rajasthan, because it is easy to combine with Jaipur and the Golden Triangle and has open terrain that helps sightings. If seeing a tiger matters more than combining it with a heritage trip, Bandhavgarh, Kanha and Pench in Madhya Pradesh are widely rated among the strongest for sightings. No reserve can guarantee one.",
  },
  {
    question: "What is the best month for a tiger safari in India?",
    answer:
      "March to June gives the highest chance of a sighting, because tigers gather at shrinking waterholes, but it is very hot, so safaris run at dawn and dusk. November to February is cooler with better light, though dense foliage can hide tigers. Pick the heat or the comfort; both can work.",
  },
  {
    question: "Are tiger reserves open all year?",
    answer:
      "No. In most of north and central India the core zones close for the monsoon, roughly July to September, and reopen around 1 October, though exact dates vary by park and year. Some buffer zones stay open. We check the dates for your trip.",
  },
  {
    question: "How many safaris do I need to see a tiger?",
    answer:
      "Plan for at least two to four safaris across different zones. A single drive rarely does a reserve justice, and several drives meaningfully improve your overall chances, though a sighting is never guaranteed in the wild.",
  },
  {
    question: "Ranthambore or Bandhavgarh: which should I choose?",
    answer:
      "Choose Ranthambore if you want to combine tigers with Jaipur, forts and palaces in one trip, with a ruined fort inside the park. Choose Bandhavgarh if sighting odds are your priority and you are happy to travel to Madhya Pradesh, which works best as its own wildlife trip.",
  },
  {
    question: "Can I combine a tiger safari with a Golden Triangle or Rajasthan trip?",
    answer:
      "Yes, easily for Ranthambore and Sariska, which sit within reach of a standard Rajasthan circuit. Bandhavgarh, Kanha and Pench are further away and work better as a dedicated trip.",
  },
  {
    question: "How far ahead should I book safari permits?",
    answer:
      "As early as you can. In Madhya Pradesh, safari bookings open about 120 days ahead, and popular zones and dates sell out. We book permits as part of your itinerary, and earlier notice gives you better zones and time slots.",
  },
  {
    question: "How much does a tiger safari trip cost?",
    answer:
      "Our 6-day Ranthambore and Sariska tour starts from about $500 per person, our 7-day Madhya Pradesh tiger safari from about $600 and our 8-day Rajasthan wildlife trip from about $700, two sharing, flights excluded. Safari fees, lodge category and season can change the price.",
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
          imageAlt="A Bengal tiger resting on a safari track, Ranthambore"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="Which Tiger Reserve, and When to Go"
          subheadline="Ranthambore, Bandhavgarh, Kanha, Pench and Kaziranga compared, month by month."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I'd like help planning a tiger safari in India with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">
              For a first tiger safari, choose Ranthambore in Rajasthan if you want to combine it with
              Jaipur and the Golden Triangle, or Bandhavgarh, Kanha and Pench in Madhya Pradesh if
              seeing a tiger is the priority. March to June gives the best odds; November to February is
              the most comfortable.
            </span>{" "}
            India has dozens of tiger reserves, but they differ in terrain, season and how easily they fit
            into a wider trip. This guide compares the ones on our routes, month by month. No safari
            can guarantee a sighting, because these are wild animals in unenclosed parks.
          </ArticleP>

          <ArticleH2>Which Tiger Reserve Should You Choose?</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">India's main tiger reserves compared</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Reserve</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Best months</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Core zones closed</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Ranthambore (Rajasthan)</th>
                  <td className="px-3 py-3 sm:px-5">November to March for comfort, April to June for sightings</td>
                  <td className="px-3 py-3 sm:px-5">Zones 1 to 5, roughly July to September</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Sariska (Rajasthan)</th>
                  <td className="px-3 py-3 sm:px-5">November to March</td>
                  <td className="px-3 py-3 sm:px-5">Core circuits, roughly July to September</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Bandhavgarh (Madhya Pradesh)</th>
                  <td className="px-3 py-3 sm:px-5">April to June for sightings, November to March</td>
                  <td className="px-3 py-3 sm:px-5">Core zones, roughly July to September</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Kanha (Madhya Pradesh)</th>
                  <td className="px-3 py-3 sm:px-5">November to March, and April to June</td>
                  <td className="px-3 py-3 sm:px-5">Roughly July to September</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Pench (Madhya Pradesh)</th>
                  <td className="px-3 py-3 sm:px-5">October to November, and April to June</td>
                  <td className="px-3 py-3 sm:px-5">Roughly July to mid-October</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Kaziranga (Assam, rhinos)</th>
                  <td className="px-3 py-3 sm:px-5">November to April</td>
                  <td className="px-3 py-3 sm:px-5">Monsoon; reopens around October to November</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ArticleP>
            Park closures are summarised from{" "}<a href="https://www.boutindia.com/blog/tiger-safari-india-park-by-park-zones-booking-windows-and-closed-seasons" className="text-maroon underline" target="_blank" rel="noopener noreferrer">Bout India</a>{" "}and{" "}<a href="https://indiawildlifenews.com/2026/09/30/tiger-reserves-reopen-october-1-safari-what-to-expect/" className="text-maroon underline" target="_blank" rel="noopener noreferrer">India Wildlife News</a>.
            Madhya Pradesh dates vary between sources (reopening on 1 October or mid-October), so we confirm them for your dates.
          </ArticleP>

          <ArticleH2>Which Month Is Best for a Tiger Safari?</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">Tiger safari seasons by month</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">When</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">What to expect</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">July to September</th>
                  <td className="px-3 py-3 sm:px-5">Core zones are closed in most northern and central reserves. Not the time for a tiger safari.</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">October</th>
                  <td className="px-3 py-3 sm:px-5">Reserves reopen around 1 October. Forest is lush and quiet, but tigers are harder to spot.</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">November to February</th>
                  <td className="px-3 py-3 sm:px-5">Comfortable days and golden light. Foliage can still hide tigers; good for birding.</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">March to June</th>
                  <td className="px-3 py-3 sm:px-5">Best odds as tigers gather at waterholes. Very hot, so drives are at dawn and dusk.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ArticleP>
            The trade-off is heat against odds: summer concentrates tigers at water but is harsh at midday, while winter is
            comfortable but the foliage is thicker. Seasons are summarised from{" "}<a href="https://www.tskamath.com/best-time-to-see-tigers-in-india/" className="text-maroon underline" target="_blank" rel="noopener noreferrer">T. S. Kamath's month-by-month guide</a>.
          </ArticleP>

          <ArticleMidCTA
            text="Not sure which park suits your dates? We'll tell you honestly."
            href="/contact"
            linkLabel="Ask us"
          />

          <ArticleH2>Choosing by Type of Trip</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Heritage trip with tigers:</span> <Link href="/destinations/ranthambore" className="text-maroon underline">Ranthambore</Link> or <Link href="/destinations/sariska" className="text-maroon underline">Sariska</Link>, added to Jaipur. See our <Link href="/tours/wildlife-tours" className="text-maroon underline">6-day Ranthambore and Sariska tour</Link> (from about <Price usd={5 * RATE_PER_NIGHT_USD.india} />) or the <Link href="/tours/rajasthan-wildlife-safari" className="text-maroon underline">8-day Rajasthan wildlife trip</Link> (from about <Price usd={7 * RATE_PER_NIGHT_USD.india} />).</li>
            <li><span className="font-semibold text-ink">Sightings first:</span> <Link href="/destinations/bandhavgarh" className="text-maroon underline">Bandhavgarh</Link>, <Link href="/destinations/kanha" className="text-maroon underline">Kanha</Link> and <Link href="/destinations/pench" className="text-maroon underline">Pench</Link> in a dedicated <Link href="/experiences/tiger-safari-tours" className="text-maroon underline">7-day Madhya Pradesh tiger safari</Link> (from about <Price usd={6 * RATE_PER_NIGHT_USD.india} />).</li>
            <li><span className="font-semibold text-ink">Rhinos, not tigers:</span> <Link href="/destinations/kaziranga" className="text-maroon underline">Kaziranga</Link> in Assam, a grassland and wetland trip built around the one-horned rhinoceros.</li>
            <li><span className="font-semibold text-ink">Wildlife by boat:</span> Periyar in Kerala, explored on the lake. See our <Link href="/tours/periyar-wildlife-tour" className="text-maroon underline">Periyar wildlife tour</Link>.</li>
          </ArticleUL>
          <ArticleP>
            Compare all of them on our {" "}<Link href="/tours/wildlife-tiger-safari-tours" className="text-maroon underline">India tiger safari tours</Link>{" "}page. Tadoba and Corbett are also well known but are not among our standard routes.
          </ArticleP>

          <ArticleH2>How Many Safaris, and How Early to Book?</ArticleH2>
          <ArticleP>
            Plan for two to four safaris over two or three days, ideally in different zones, because one drive rarely does a reserve justice.
            Permits are limited: in Madhya Pradesh, bookings open about 120 days ahead, and popular zones sell out. We book permits as part of
            your itinerary, so earlier notice means better zones and time slots. Book only through official forest-department portals or an
            authorised operator.
          </ArticleP>

          <ArticleH2>Planning Your Trip</ArticleH2>
          <ArticleP>
            Tiger trips are short and slot easily into a longer itinerary. See our {" "}<Link href="/travel-guide/rajasthan-itinerary-guide" className="text-maroon underline">Rajasthan itinerary guide</Link>{" "}for where Ranthambore fits,
            the {" "}<Link href="/travel-guide/how-much-does-a-private-tour-of-india-cost" className="text-maroon underline">cost guide</Link>{" "}for what is included, and our {" "}<Link href="/travel-guide/india-health-vaccination-guide" className="text-maroon underline">health guide</Link>{" "}before you travel.
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
          headline="Tigers, Planned Around Your Dates."
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a tiger safari in India with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
