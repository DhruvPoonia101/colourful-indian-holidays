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
import { RATE_PER_NIGHT_USD, getPackageStartingPrice } from "@/lib/pricing";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * Written 23 Nov 2026. Routes follow our own Sri Lanka tours; drive times
 * are typical estimates. Prices use RATE_PER_NIGHT_USD.srilanka (nights x
 * rate, per person, two sharing). Train note reflects the post-Cyclone
 * Ditwah status (Kandy-Nanu Oya closed; Nanu Oya-Ella running since 20 June
 * 2026) — see /travel-guide/kandy-to-ella-train for sources.
 */

const title = "Sri Lanka Itinerary: 7, 10 and 14 Days (Day by Day, 2026)";
const description =
  "Three tested Sri Lanka itineraries — 7, 10 and 14 days — day by day, with drive times, where to stay, what each costs and how to fit the hill-country train in 2026.";
const pagePath = "/travel-guide/sri-lanka-itinerary";
const heroImage = "/images/destinations/sigiriya-rock-fortress.webp";
const datePublished = "2026-11-23";
const dateModified = datePublished;

const rate = RATE_PER_NIGHT_USD.srilanka;
const sevenDay = 6 * rate;
const tenDay = 9 * rate;
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
  { name: "Sri Lanka Itinerary", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "How many days do you need in Sri Lanka?",
    answer:
      "Ten days is the sweet spot for a first trip: enough for Sigiriya, Kandy, the tea country, Ella, a Yala safari and the south coast without rushing. Seven days covers the essentials if you skip Yala, and two weeks adds the ancient cities and beach time.",
  },
  {
    question: "Is 7 days enough for Sri Lanka?",
    answer:
      "Yes, for the highlights. A 7-day route can cover Sigiriya, Dambulla, Kandy, tea country, the train to Ella and Galle, but you'll have one long driving day and little time to relax. Add Yala and a beach day if you can stretch to 9 or 10 days.",
  },
  {
    question: "What is the best route around Sri Lanka?",
    answer:
      "Most first trips run as a loop from the airport: north to the Cultural Triangle (Sigiriya, Dambulla, Polonnaruwa), south to Kandy, up into the tea country (Nuwara Eliya and Ella), down to Yala, and west along the south coast to Galle before returning to Colombo.",
  },
  {
    question: "Can I still take the train from Kandy to Ella?",
    answer:
      "Not from Kandy at the moment. Since Cyclone Ditwah in late 2025 the Kandy to Nanu Oya section has been closed for repairs; trains run from Nanu Oya to Ella. Every itinerary on this page boards at Nanu Oya, which is the most scenic part of the line anyway.",
  },
  {
    question: "How much does a 10-day Sri Lanka trip cost?",
    answer: `About US$${(9 * rate).toLocaleString("en-US")} per person for 9 nights with our private tours, two sharing, including a private car and chauffeur-guide, 3–4 star hotels with breakfast and the safaris on the route. International flights are extra.`,
  },
  {
    question: "When is the best time to follow these itineraries?",
    answer:
      "December to April, when the hill country and the south and west coasts are driest. From May to September the routes still work, but expect rain on the west and south coasts; you can swap the south coast for the east coast (Trincomalee or Arugam Bay), which is dry then.",
  },
];

function DayList({ days }: { days: { d: string; t: string; stay: string }[] }) {
  return (
    <ol className="my-2 space-y-3">
      {days.map((day) => (
        <li key={day.d} className="rounded-xl border border-sand bg-white px-4 py-3 sm:px-5">
          <p className="text-sm font-semibold text-ink sm:text-base">{day.d}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft sm:text-base">{day.t}</p>
          <p className="mt-1.5 text-xs text-ink-soft">
            <span className="font-semibold text-ink">Overnight:</span> {day.stay}
          </p>
        </li>
      ))}
    </ol>
  );
}

const sevenDays = [
  { d: "Day 1 — Airport to Sigiriya", t: "Meet your chauffeur-guide at Colombo airport and drive about 4 hours into the Cultural Triangle. Rest, or take a sunset walk by the village lakes.", stay: "Sigiriya" },
  { d: "Day 2 — Sigiriya & elephants", t: "Climb Sigiriya at opening time (about 2 hours up and down), then an afternoon jeep safari in Minneriya, Kaudulla or Hurulu to see wild elephants.", stay: "Sigiriya" },
  { d: "Day 3 — Dambulla to Kandy", t: "The Dambulla cave temple, a spice garden in Matale, then the evening puja at Kandy's Temple of the Sacred Tooth Relic (about 3 hours of driving).", stay: "Kandy" },
  { d: "Day 4 — Tea country", t: "Peradeniya botanic gardens, then up through tea estates past Ramboda Falls to Nuwara Eliya, with a tea-factory tour and tasting (about 3 hours).", stay: "Nuwara Eliya" },
  { d: "Day 5 — Train to Ella", t: "Ride the hill-country train from Nanu Oya to Ella, about 3 hours through tea estates and tunnels. Walk to the Nine Arch Bridge in the afternoon.", stay: "Ella" },
  { d: "Day 6 — Ella to Galle", t: "Little Adam's Peak at sunrise, then the longest drive of the trip (about 5 hours) down to the south coast, with a beach stop on the way to Galle Fort for sunset.", stay: "Galle" },
  { d: "Day 7 — Galle to the airport", t: "Morning walk inside Galle Fort, then about 2.5 hours up the expressway to the airport.", stay: "—" },
];

const tenDays = [
  { d: "Day 1 — Airport to Sigiriya", t: "Drive about 4 hours into the Cultural Triangle and settle in.", stay: "Sigiriya" },
  { d: "Day 2 — Sigiriya & Pidurangala", t: "Climb Sigiriya early; climb Pidurangala for sunset views back across to the Lion Rock.", stay: "Sigiriya" },
  { d: "Day 3 — Polonnaruwa & elephants", t: "Explore the medieval capital of Polonnaruwa, including the Gal Vihara rock-cut Buddhas, then an afternoon elephant safari.", stay: "Sigiriya" },
  { d: "Day 4 — Dambulla to Kandy", t: "The Dambulla cave temple and a spice garden, then the evening puja at the Temple of the Tooth.", stay: "Kandy" },
  { d: "Day 5 — Kandy to Nuwara Eliya", t: "Peradeniya gardens in the morning, then up into tea country with a factory visit on the way.", stay: "Nuwara Eliya" },
  { d: "Day 6 — Horton Plains & the train", t: "Pre-dawn walk to World's End at Horton Plains, then the afternoon train from Nanu Oya or Ohiya to Ella.", stay: "Ella" },
  { d: "Day 7 — Ella", t: "Little Adam's Peak, the Nine Arch Bridge and a slow afternoon; hike Ella Rock if you want a longer walk.", stay: "Ella" },
  { d: "Day 8 — Ella to Yala", t: "Down past Ravana Falls to the dry south-east (about 2.5–3 hours) for an afternoon leopard safari.", stay: "Yala (Tissamaharama)" },
  { d: "Day 9 — South coast", t: "An optional dawn safari, then west along the coast past the stilt fishermen to Mirissa or Galle.", stay: "Mirissa or Galle" },
  { d: "Day 10 — To the airport", t: "Galle Fort in the morning, then about 2.5 hours to the airport.", stay: "—" },
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
          imageAlt="Sigiriya Lion Rock rising above the forest, Sri Lanka"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="Sri Lanka Itinerary: 7, 10 and 14 Days"
          subheadline="Three day-by-day routes around the island, with drive times, where to stay and what each one costs."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I'd like help planning a Sri Lanka itinerary with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">
              For a first trip, 10 days is the sweet spot: Sigiriya and the Cultural Triangle, Kandy,
              the tea country, the train to Ella, a Yala safari and the south coast. Seven days covers
              the essentials if you skip Yala, and 14 days adds the ancient cities and real beach time.
            </span>{" "}
            All three routes below are loops from Colombo airport with a private car and chauffeur-guide,
            the way we run our own Sri Lanka tours.
          </ArticleP>

          <ArticleH2>Which Sri Lanka Itinerary Length Is Right for You?</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">Comparison of 7, 10 and 14-day Sri Lanka itineraries</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Length</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Covers</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">From (per person)</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-sand/60">
                  <th scope="row" className={rowHead}>7 days / 6 nights</th>
                  <td className={cell}>Sigiriya, Dambulla, Kandy, tea country, Ella, Galle</td>
                  <td className={cell}><Price usd={sevenDay} /></td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className={rowHead}>10 days / 9 nights</th>
                  <td className={cell}>Adds Polonnaruwa, Horton Plains, a Yala safari and a slower pace</td>
                  <td className={cell}><Price usd={tenDay} /></td>
                </tr>
                <tr>
                  <th scope="row" className={rowHead}>14 days / 13 nights</th>
                  <td className={cell}>Adds Anuradhapura, Mihintale, a village day and beach time at Mirissa</td>
                  <td className={cell}><Price usd={fourteenDay} /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <ArticleP>
            Prices are our private-tour starting rates for two sharing, with 3–4 star hotels, breakfast, a
            private car and chauffeur-guide and the safaris on the route; international flights are extra.
          </ArticleP>

          <ArticleH2>7-Day Sri Lanka Itinerary</ArticleH2>
          <ArticleP>
            The essentials in a week. It works well, but day 6 is a long drive from the hills to the coast,
            and there&apos;s no time for Yala. If you can add one day, our{" "}
            <Link href="/tours/sri-lanka-tours" className="text-maroon underline">8-day Sri Lanka tour</Link>{" "}
            breaks that drive with a night at Yala.
          </ArticleP>
          <DayList days={sevenDays} />

          <ArticleMidCTA
            text="Want this route planned around your dates?"
            href="/tours/sri-lanka-tours"
            linkLabel="See our 8-day Sri Lanka tour"
          />

          <ArticleH2>10-Day Sri Lanka Itinerary</ArticleH2>
          <ArticleP>
            Our recommended length for a first visit. Three nights in the Cultural Triangle allow Polonnaruwa
            as well as Sigiriya, two nights in Ella give you a day off the road, and Yala breaks the journey
            to the coast.
          </ArticleP>
          <DayList days={tenDays} />

          <ArticleH2>14-Day Sri Lanka Itinerary</ArticleH2>
          <ArticleP>
            Two weeks lets you add Anuradhapura, the first royal capital, and Mihintale, where Buddhism is said
            to have arrived on the island, plus a village day near Sigiriya, an extra night in Kandy and two
            days on the beach at Mirissa and Galle. It&apos;s the route of our{" "}
            <Link href="/tours/sri-lanka-grand-tour" className="text-maroon underline">14-day Sri Lanka Grand Tour</Link>, which has the full day-by-day plan.
          </ArticleP>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Days 1–2:</span> Negombo, then Anuradhapura.</li>
            <li><span className="font-semibold text-ink">Days 3–5:</span> Mihintale, Pidurangala, Sigiriya, a village day, Polonnaruwa and an elephant safari.</li>
            <li><span className="font-semibold text-ink">Days 6–8:</span> Dambulla, two nights in Kandy, then up to Nuwara Eliya.</li>
            <li><span className="font-semibold text-ink">Days 9–10:</span> Horton Plains, the train to Ella and a day in Ella.</li>
            <li><span className="font-semibold text-ink">Days 11–14:</span> Yala safaris, Mirissa, Galle Fort and back to the airport.</li>
          </ArticleUL>

          <ArticleH2>What About the Kandy to Ella Train?</ArticleH2>
          <ArticleP>
            Since Cyclone Ditwah in late 2025, trains haven&apos;t run between Kandy and Nanu Oya, and
            reopening is reported for 2027. All three itineraries above board at Nanu Oya, near Nuwara
            Eliya, for the most scenic section to Ella, so nothing is lost. Our{" "}
            <Link href="/travel-guide/kandy-to-ella-train" className="text-maroon underline">Kandy to Ella train guide</Link>{" "}
            explains what&apos;s running, how to book seats and which side to sit on.
          </ArticleP>

          <ArticleH2>How to Adapt These Routes</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Travelling May to September?</span> Swap the south coast for the east coast (Trincomalee or Arugam Bay), which is dry then. See the seasons in our <Link href="/travel-guide/sri-lanka-visa-and-best-time-to-visit" className="text-maroon underline">Sri Lanka visa and best-time guide</Link>.</li>
            <li><span className="font-semibold text-ink">More beach time:</span> add nights at Mirissa, Unawatuna or Tangalle at the end.</li>
            <li><span className="font-semibold text-ink">Wildlife first:</span> add Udawalawe for elephants, or a second Yala safari at dawn.</li>
            <li><span className="font-semibold text-ink">Combining with India:</span> Colombo is a direct flight from Delhi, Mumbai, Chennai and Kochi. See our <Link href="/tours/india-sri-lanka-tours" className="text-maroon underline">India and Sri Lanka tour</Link> and <Link href="/tours/kerala-sri-lanka-tours" className="text-maroon underline">Kerala and Sri Lanka tour</Link>.</li>
          </ArticleUL>
          <ArticleP>
            For more on each stop, see our guides to{" "}
            <Link href="/destinations/colombo" className="text-maroon underline">Colombo</Link>,{" "}
            <Link href="/destinations/sigiriya" className="text-maroon underline">Sigiriya</Link>,{" "}
            <Link href="/destinations/kandy" className="text-maroon underline">Kandy</Link>,{" "}
            <Link href="/destinations/nuwara-eliya" className="text-maroon underline">Nuwara Eliya</Link>,{" "}
            <Link href="/destinations/ella" className="text-maroon underline">Ella</Link>,{" "}
            <Link href="/destinations/yala" className="text-maroon underline">Yala</Link> and{" "}
            <Link href="/destinations/galle" className="text-maroon underline">Galle</Link>, or price your own mix of nights with the{" "}
            <Link href="/tools/trip-cost-calculator" className="text-maroon underline">trip cost calculator</Link>.
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
          headline="Your Sri Lanka Route, Planned Around You."
          headlineItalic="Tell Us Your Dates."
          subtext="Tell us how many days you have and what you'd like to see, and we'll send a day-by-day plan and quote within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a Sri Lanka itinerary with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
