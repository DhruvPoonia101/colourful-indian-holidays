import { TripPhotos } from "@/components/shared/TripPhotos";
import { tripPhotos } from "@/content/trip-photos";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { guidesFor } from "@/content/related-guides";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { TourHubStartingPrice } from "@/components/shared/TourHubStartingPrice";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { PlannedByLine } from "@/components/shared/PlannedByLine";
import { Reveal } from "@/components/ui/Reveal";
import { goldenTriangleVariants } from "@/content/golden-triangle-hub";
import { fleetCards } from "@/content/car-rental-hub";
import { goldenTriangleTours } from "@/content/packages/golden-triangle-tour-classic";
import { goldenTriangleTour4Days } from "@/content/packages/golden-triangle-tour-4-days";
import { goldenTriangleUdaipurTours } from "@/content/packages/golden-triangle-tour-udaipur";
import { goldenTriangleVaranasiTours } from "@/content/packages/golden-triangle-tour-varanasi";
import { goldenTriangleRanthamboreTours } from "@/content/packages/golden-triangle-tour-ranthambore";
import { goldenTriangleAjmerPushkarTours } from "@/content/packages/golden-triangle-tour-ajmer-pushkar";
import { packageToTripSummary, touristTripCollectionJsonLd } from "@/lib/seo/tourist-trip-schema";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";
import Link from "next/link";
import { Price } from "@/components/shared/Price";
import { PRICE_DISCLAIMER, RATE_PER_NIGHT_USD, getPackageStartingPrice } from "@/lib/pricing";
import type { PackageContent } from "@/content/packages/types";

/**
 * Expanded from a thin 76-line listing page (hero + variant grid + CTA,
 * no overview, no FAQ, no cross-links) into a genuine regional pillar,
 * matching the depth already present on its sibling hub pages (Kerala
 * Tours, South India Tours) and then going further, since this is the
 * single most-searched India itinerary for first-time international
 * visitors and deserves the fullest hub treatment of any tour page on
 * the site. Adds: a 5-paragraph overview, a Delhi/Agra/Jaipur city grid,
 * cross-links to UNESCO Heritage Sites and Palace & Fort Tours
 * (genuinely overlapping content, framed differently), a Taj Mahal
 * Honeymoon cross-link, links to the e-Visa and Getting Around India
 * guides, and an FAQ section with schema (none of it existed before).
 */

const title = "Golden Triangle Tour Packages | Delhi, Agra & Jaipur";
const description =
  "Private Delhi–Agra–Jaipur tours: a same-day Agra trip, 4 days, the classic 6 days, or extended with Udaipur, Varanasi, Ranthambore or Pushkar.";
const pagePath = "/tours/golden-triangle-tour";
const heroImage = "/images/destinations/agra-taj-mahal.webp";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}${pagePath}`,
  },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}${pagePath}`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Tours & Packages", path: "/tours" },
  { name: "Golden Triangle Tour", path: pagePath },
];

const goldenTriangleCities = [
  {
    name: "Delhi",
    tagline: "India's Capital",
    description: "Mughal forts, colonial avenues, and the arrival point for nearly every Golden Triangle trip.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
  {
    name: "Agra",
    tagline: "Home of the Taj Mahal",
    description: "The Taj Mahal, Agra Fort, and the reason most people plan this trip in the first place.",
    href: "/destinations/agra",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
  },
  {
    name: "Jaipur",
    tagline: "The Pink City",
    description: "Amber Fort, City Palace, Hawa Mahal and the bazaars of Rajasthan's capital.",
    href: "/destinations/jaipur",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
];

const overview = [
  "The Golden Triangle — Delhi, Agra and Jaipur — is the single most-booked circuit in Indian tourism, and for a genuinely good reason: it fits an enormous amount of what draws people to India into a trip most travellers can realistically fit into a week. Each city plays a different, complementary role. Delhi is where nearly every international flight lands and where Mughal and colonial history sit side by side — Humayun's Tomb, the Red Fort and Qutub Minar within the same city as British-built New Delhi. Agra exists almost entirely because of one building, though [[Agra Fort|/destinations/agra]] earns its own visit alongside it. And Jaipur, the anchor of [[Rajasthan|/destinations/rajasthan]], introduces the fort-and-palace architecture that most visitors associate with India generally, well before they've seen the rest of the state.",
  "The 6-day [[classic route|/tours/golden-triangle-tour-classic]] is built for exactly this — a genuine first-time introduction without needing two weeks off, or a longer trip you're not sure you're ready to commit to before you've actually visited India once. It's also, not coincidentally, the itinerary named most often on our country-specific guides for [[American|/india-tours-from-usa]], [[British|/india-tours-from-uk]] and [[Australian|/india-tours-from-australia]] travellers as the natural starting point, since it answers the question most first-time visitors are actually asking: what should I see if I only have one trip to India?",
  "Once the classic route stops being enough, the other four options here each extend it in a different direction rather than simply adding more days to the same three cities. Adding [[Udaipur|/tours/golden-triangle-tour-udaipur]] softens the pace with lake views and a noticeably more romantic register, which is why it's also a popular honeymoon extension — see our dedicated [[Taj Mahal Honeymoon|/experiences/taj-mahal-honeymoon]] itinerary if that's specifically what you're planning. Adding [[Varanasi|/tours/golden-triangle-tour-varanasi]] takes the trip toward India's spiritual and religious landscape instead, at the ghats where cremation rituals and the nightly Ganga aarti have run continuously for centuries. Adding [[Ranthambore|/tours/golden-triangle-tour-ranthambore]] brings in wildlife — a real chance at a wild tiger sighting — without needing a separate wildlife-focused trip. And adding [[Ajmer & Pushkar|/tours/golden-triangle-tour-ajmer-pushkar]] goes deeper into Rajasthan's religious diversity, pairing a Sufi shrine with a Hindu pilgrimage lake barely fifteen kilometres apart.",
  "Three of the sites on the classic route alone — the Taj Mahal, Agra Fort, and Jaipur's Jantar Mantar and walled Pink City — carry UNESCO World Heritage status, which is one reason this circuit anchors our dedicated [[UNESCO Heritage Sites|/experiences/unesco-heritage-sites]] itinerary too, alongside sites further afield in Delhi, Maharashtra and Odisha. If forts and palaces specifically are what draws you to Jaipur, our [[Palace & Fort Tours|/experiences/palace-fort-tours]] experience goes considerably deeper into that architectural tradition across four Rajasthan cities, of which Jaipur's Amber Fort is only the first.",
  "Every version of this trip runs on a private vehicle and driver throughout — see our [[car rental fleet|/car-rental]] for the range — with an English-speaking guide at each stop rather than a fixed group tour schedule. If this is genuinely your first trip to India, our guides to [[India's e-Visa process|/travel-guide/india-e-visa-guide]] and [[getting around the country|/travel-guide/getting-around-india]] cover the practical groundwork most first-time visitors ask about before their trip even starts. Tell us your dates and which of the routes above interests you, and we'll build the exact itinerary around it.",
];

const faqs: FaqItem[] = [
  {
    question: "How many days do I need for the Golden Triangle?",
    answer:
      "The classic Delhi-Agra-Jaipur circuit runs 6 days, which is enough to see each city's main sights without rushing. Short on time, our 4-day version (or 3 days on request) covers one day per city, and an Agra day trip from Delhi fits the Taj Mahal into a single day. If you'd like to add Udaipur, Varanasi, Ranthambore, or Ajmer and Pushkar, the extended versions run 8 to 9 days instead.",
  },
  {
    question: "What's the best order to visit Delhi, Agra and Jaipur?",
    answer:
      "Delhi first (since it's where nearly every international flight lands), then Agra, then Jaipur, finishing with a flight or drive back to Delhi for departure — or continuing on to whichever extension you've added. This order also roughly follows the historical sequence of Mughal power moving from Delhi to Agra and, later, Rajput Jaipur's rise alongside it.",
  },
  {
    question: "Is the Golden Triangle suitable for a first trip to India?",
    answer:
      "Yes — it's specifically why this is the most-booked circuit in Indian tourism. It covers an enormous amount of what draws people to India (Mughal history, the Taj Mahal, Rajput forts and palaces) in a timeframe most first-time visitors can realistically commit to, without requiring the longer trip a full Rajasthan or multi-region circuit would need.",
  },
  {
    question: "Can I add Ranthambore or another wildlife stop to the Golden Triangle?",
    answer:
      "Yes — our Golden Triangle with Ranthambore route adds two days at Ranthambore National Park between Jaipur and the rest of the trip, giving you a real chance at a wild tiger sighting without needing a separate wildlife-focused itinerary.",
  },
  {
    question: "Do I need a lot of advance planning for a Golden Triangle trip?",
    answer:
      "Less than you might expect — this is our most-booked circuit, and 4 to 8 weeks ahead is generally enough for hotel availability, even in peak season (October to March). It's a good option if you're planning a trip on a shorter timeline than a longer, multi-region itinerary would need.",
  },
];

/**
 * "Which route suits me?" chooser. Days, nights and prices are computed from
 * the real package data and src/lib/pricing.ts, so this table can never
 * disagree with the individual tour pages. Comfort = 3-4 star and heritage
 * hotels at RATE_PER_NIGHT_USD.india; luxury = 5-star and palace hotels at
 * RATE_PER_NIGHT_USD.luxury (the same two tiers as the cost guide).
 */
const routeChoices: { pkg: PackageContent; route: string; bestFor: string }[] = [
  {
    pkg: goldenTriangleTour4Days,
    route: "Delhi, Agra, Fatehpur Sikri, Jaipur",
    bestFor: "Short on time: one day per city (a 3-day version is possible)",
  },
  {
    pkg: goldenTriangleTours,
    route: "Delhi, Agra, Jaipur",
    bestFor: "A first trip with about a week; the essentials without rushing",
  },
  {
    pkg: goldenTriangleRanthamboreTours,
    route: "Delhi, Agra, Ranthambore, Jaipur",
    bestFor: "A real chance of seeing a wild tiger (October to June; the park closes in the monsoon)",
  },
  {
    pkg: goldenTriangleAjmerPushkarTours,
    route: "Delhi, Agra, Jaipur, Ajmer, Pushkar",
    bestFor: "Living religious sites and a small, walkable lake town",
  },
  {
    pkg: goldenTriangleUdaipurTours,
    route: "Delhi, Agra, Jaipur, Ranakpur, Udaipur",
    bestFor: "A slower finish by the lakes; couples and honeymooners",
  },
  {
    pkg: goldenTriangleVaranasiTours,
    route: "Delhi, Agra, Jaipur, then fly to Varanasi",
    bestFor: "The Ganges ghats and evening aarti; spiritual India",
  },
];

const routeRows = routeChoices.map(({ pkg, route, bestFor }) => {
  const days = pkg.itinerary.length;
  const nights = days - 1;
  return {
    name: pkg.name,
    href: `/tours/${pkg.slug}`,
    route,
    bestFor,
    days,
    nights,
    comfort: getPackageStartingPrice(pkg.slug, days),
    luxury: nights * RATE_PER_NIGHT_USD.luxury,
  };
});

const cheapestRoute = Math.min(...routeRows.map((r) => r.comfort));

/** Typical door-to-door drive times used on our itineraries. */
const driveTimes = [
  { leg: "Delhi to Agra", time: "3 to 4 hours", note: "Yamuna Expressway" },
  { leg: "Agra to Jaipur", time: "4 to 6 hours", note: "About an hour more with a Fatehpur Sikri or Abhaneri stop" },
  { leg: "Jaipur to Delhi (or Delhi airport)", time: "4 to 6 hours", note: "Allow extra time for an evening flight" },
  { leg: "Agra to Ranthambore", time: "4 to 5 hours", note: "Ranthambore route only" },
  { leg: "Ranthambore to Jaipur", time: "About 4 hours", note: "Ranthambore route only" },
  { leg: "Jaipur to Ajmer and Pushkar", time: "2.5 to 3 hours", note: "Ajmer & Pushkar route only" },
  { leg: "To Udaipur via Ranakpur", time: "6 to 7 hours", note: "Including the Ranakpur temple stop; a flight is possible" },
  { leg: "Jaipur to Varanasi", time: "Flight", note: "Too far to drive on this route" },
];

/** Every tour this hub links to, as real package data — so the hub's schema
 * names, durations and indicative prices always match the trip pages. */
const hubTrips = [goldenTriangleTour4Days, goldenTriangleTours, goldenTriangleUdaipurTours, goldenTriangleVaranasiTours, goldenTriangleRanthamboreTours, goldenTriangleAjmerPushkarTours].map(packageToTripSummary);

export default function GoldenTriangleHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristTripCollectionJsonLd({
              name: title,
              description,
              path: pagePath,
              trips: hubTrips,
            })
          ),
        }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Taj Mahal at sunrise, Agra"
          breadcrumbs={breadcrumbs}
          eyebrow="Tours & Packages"
          headline="The Golden Triangle, From One Day to Nine"
          subheadline="Delhi, Agra and Jaipur form the core of every version below — the difference is what you add on, and how many days you have."
        />

        {/* $500 is this hub's real cheapest linked variant (golden-triangle-tour-classic, 6 days / 5 nights), computed via the
            shared $100/night rate in src/lib/pricing.ts — not a separate
            number invented for this hub page. */}
        {/* Cheapest linked variant, computed from the package data (see routeRows). */}
        <TourHubStartingPrice price={cheapestRoute} />

        <CityGrid
          eyebrow="Choose Your Route"
          heading="Golden Triangle Tour Packages"
          cities={goldenTriangleVariants}
          showActions
        />

        <section className="border-t border-sand/70 py-10 sm:py-14" aria-labelledby="route-chooser">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Compare the Routes" heading="Which Golden Triangle Route Suits Me?" />
              <p id="route-chooser" className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
                <span className="font-semibold text-ink">
                  Pick the classic 6-day route for a first look at Delhi, Agra and Jaipur, the 4-day
                  version if you are short on time, or add 2 to 3 days for tigers, Pushkar, Udaipur or
                  Varanasi.
                </span>{" "}
                Prices are per person, two people sharing, for the hotel nights shown, with a private car,
                driver and guide. What changes the final price: your dates, hotel category and group size.
              </p>
              <div className="mt-8 overflow-x-auto rounded-2xl border border-sand bg-white">
                <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                  <caption className="sr-only">
                    Golden Triangle routes compared by length, cities, who they suit and starting price per person
                  </caption>
                  <thead>
                    <tr className="border-b border-sand text-ink">
                      <th scope="col" className="px-4 py-3 font-semibold">Route</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Length</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Best if you want</th>
                      <th scope="col" className="px-4 py-3 font-semibold">From, 3–4 star hotels</th>
                      <th scope="col" className="px-4 py-3 font-semibold">From, 5-star and palace hotels</th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-soft">
                    {routeRows.map((r) => (
                      <tr key={r.href} className="border-b border-sand/60 last:border-0">
                        <th scope="row" className="px-4 py-3 align-top font-medium text-ink">
                          <Link href={r.href} className="text-maroon underline decoration-maroon/30 underline-offset-2 hover:decoration-maroon">
                            {r.name}
                          </Link>
                          <span className="mt-1 block text-xs font-normal text-ink-soft">{r.route}</span>
                        </th>
                        <td className="px-4 py-3 align-top whitespace-nowrap">
                          {r.days} days / {r.nights} nights
                        </td>
                        <td className="px-4 py-3 align-top">{r.bestFor}</td>
                        <td className="px-4 py-3 align-top whitespace-nowrap font-semibold text-ink">
                          <Price usd={r.comfort} />
                        </td>
                        <td className="px-4 py-3 align-top whitespace-nowrap">
                          <Price usd={r.luxury} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs italic text-ink-soft/80">{PRICE_DISCLAIMER}</p>
              <p className="mt-3 text-sm text-ink-soft">
                Only have one day?{" "}
                <Link href="/tours/agra-day-trip-from-delhi" className="font-semibold text-maroon underline">
                  Agra day trip from Delhi
                </Link>{" "}
                by private car: the Taj Mahal and Agra Fort, back in Delhi the same night.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <h3 className="font-display text-lg font-semibold text-ink">Included on every route</h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-soft">
                    <li>Hotel nights as listed, twin-sharing, with daily breakfast</li>
                    <li>Private air-conditioned car and driver for all transfers and sightseeing</li>
                    <li>English-speaking guide</li>
                    <li>Monument entry fees as per the itinerary</li>
                    <li>Hotel and transport taxes</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <h3 className="font-display text-lg font-semibold text-ink">Not included</h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-soft">
                    <li>International and domestic flights (including Jaipur to Varanasi), booked on request</li>
                    <li>Visa fees</li>
                    <li>Lunches and dinners unless noted</li>
                    <li>Camera fees at monuments, tips, personal expenses and travel insurance</li>
                  </ul>
                  <p className="mt-3 text-xs text-ink-soft/80">
                    Each tour page lists its inclusions in full. The Ranthambore route also includes four
                    jeep or canter safari drives and park entry fees.
                  </p>
                </div>
              </div>

              <h3 className="mt-10 font-display text-xl font-semibold text-ink">Golden Triangle Tours from Delhi</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-soft sm:text-base">
                <span className="font-semibold text-ink">
                  Every route above starts in Delhi: your guide and driver meet you at Indira Gandhi
                  International Airport, and the tour ends with a transfer to Jaipur airport or back to Delhi
                  for your flight home.
                </span>{" "}
                When you compare quotes, check what the price covers. Some Golden Triangle offers are priced
                for the car, driver and guide only, with hotels and monument tickets added later. Our prices
                include the hotel nights, daily breakfast, the private car and driver, an English-speaking
                guide and monument entry fees, so the figure in the table is the trip, not a part of it.
              </p>

              <h3 className="mt-10 font-display text-xl font-semibold text-ink">How Long Are the Drives?</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-soft">
                The core loop is about 720 km by road, with each leg about 4 to 6 hours of driving (
                <a
                  href="https://en.wikipedia.org/wiki/Golden_Triangle_(India)"
                  className="text-maroon underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Golden Triangle overview
                </a>
                ). These are the typical times we plan with; traffic, winter fog and stops add time.
              </p>
              <div className="mt-4 overflow-x-auto rounded-2xl border border-sand bg-white">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <caption className="sr-only">Typical drive times on Golden Triangle routes</caption>
                  <thead>
                    <tr className="border-b border-sand text-ink">
                      <th scope="col" className="px-4 py-3 font-semibold">Leg</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Typical time</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Note</th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-soft">
                    {driveTimes.map((d) => (
                      <tr key={d.leg} className="border-b border-sand/60 last:border-0">
                        <th scope="row" className="px-4 py-3 font-medium text-ink">{d.leg}</th>
                        <td className="px-4 py-3 whitespace-nowrap">{d.time}</td>
                        <td className="px-4 py-3">{d.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="mt-10 font-display text-xl font-semibold text-ink">Season Notes</h3>
              <ul className="mt-3 max-w-3xl list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-soft">
                <li><span className="font-semibold text-ink">October to March</span> is the main season, with warm days and cool nights.</li>
                <li><span className="font-semibold text-ink">December and January</span> bring morning fog around Delhi and Agra, which can delay early drives, trains and flights, and make a misty Taj sunrise.</li>
                <li><span className="font-semibold text-ink">April to June</span> is very hot; we plan sightseeing for early morning and late afternoon.</li>
                <li><span className="font-semibold text-ink">July to September</span> is the monsoon: greener and quieter, but Ranthambore National Park is closed.</li>
                <li>The Taj Mahal is <span className="font-semibold text-ink">closed on Fridays</span> and opens 30 minutes before sunrise (
                  <a href="https://tajmahal.gov.in/visiting-hours.aspx" className="text-maroon underline" target="_blank" rel="noopener noreferrer">official visiting hours</a>
                  ), so we build every itinerary around that. See our{" "}
                  <Link href="/travel-guide/taj-mahal-visiting-guide" className="text-maroon underline">Taj Mahal visiting guide</Link>.
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        <TripPhotos
          heading="Our Guests on the Golden Triangle"
          photos={[tripPhotos.hawaMahal, tripPhotos.udaipurGroup, tripPhotos.palaceSteps]}
        />

        <CityGrid
          eyebrow="The Three Cities"
          heading="Where the Golden Triangle Actually Goes"
          cities={goldenTriangleCities}
          topDivider
          showActions
        />

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Planning a Golden Triangle Trip" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                {overview.map((paragraph, i) => (
                  <p key={i}>{renderWithLinks(paragraph)}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Plan Your Trip"
          heading="Getting Around by Private Car"
          cities={fleetCards.slice(0, 3)}
          topDivider
          showActions
        />

        <RelatedGuides guides={guidesFor("/tours/golden-triangle-tour")} />

        <FAQSection
          eyebrow="FAQ"
          heading="Golden Triangle Tours: Frequently Asked Questions"
          faqs={faqs}
          whatsappMessage="Hi! I have a question about a Golden Triangle tour with Colourful Indian Holidays."
          topDivider
        />

        <PlannedByLine />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Golden Triangle Trip Awaits."
          headlineItalic="Which Route Fits?"
          subtext="Not sure which version suits your dates and interests? Tell us what you have in mind and we'll help you pick — or build something in between."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help choosing a Golden Triangle tour package."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
