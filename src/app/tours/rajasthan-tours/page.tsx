import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { TourHubStartingPrice } from "@/components/shared/TourHubStartingPrice";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { PlannedByLine } from "@/components/shared/PlannedByLine";
import { Reveal } from "@/components/ui/Reveal";
import { rajasthanTourVariants, rajasthanCityTours } from "@/content/rajasthan-tours-hub";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";
import Link from "next/link";
import { FAQSection } from "@/components/destinations/FAQSection";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { guidesFor } from "@/content/related-guides";
import { Price } from "@/components/shared/Price";
import { PRICE_DISCLAIMER, RATE_PER_NIGHT_USD, getPackageStartingPrice } from "@/lib/pricing";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { packageToTripSummary, touristTripCollectionJsonLd } from "@/lib/seo/tourist-trip-schema";
import type { PackageContent } from "@/content/packages/types";
import { rajasthanTours } from "@/content/packages/rajasthan-tours-classic";
import { jaipurCityTour } from "@/content/packages/jaipur-city-tour";
import { rajasthanCultureHeritageTrail } from "@/content/packages/rajasthan-culture-heritage-trail";
import { rajasthanWildlifeSafari } from "@/content/packages/rajasthan-wildlife-safari";
import { grandRajasthanCircuit } from "@/content/packages/grand-rajasthan-circuit";

const title = "Rajasthan Tour Packages | Jaipur, Jodhpur & Udaipur";
const description =
  "Private Rajasthan tour packages in five shapes — a classic circuit, a Jaipur city tour, a heritage trail, a wildlife route and the six-city Grand Circuit.";
const pagePath = "/tours/rajasthan-tours";
const heroImage = "/images/destinations/amber-fort-jaipur.webp";

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
  { name: "Rajasthan Tours", path: pagePath },
];

const overview = [
  "Rajasthan is India's largest state by area, roughly the size of Germany, and easily the most-requested single region on every itinerary we build for first-time visitors. That popularity isn't accidental: within its borders sit six genuinely distinct cities, each with its own colour, character and architectural identity — [[Jaipur|/destinations/jaipur]]'s terracotta-pink old town, [[Jodhpur|/destinations/jodhpur]]'s indigo-washed lanes beneath a fort that towers 400 feet above them, [[Jaisalmer|/destinations/jaisalmer]]'s honey-gold sandstone rising straight out of the Thar Desert, and [[Udaipur|/destinations/udaipur]]'s white marble palaces afloat on their own lakes. No other Indian state packs this much visual variety into a single, drivable circuit.",
  "The five packages above reflect the fact that no single itinerary suits every traveller. Someone on their first trip to India, with limited time, generally wants the classic circuit — Jaipur, Jodhpur, Udaipur and Pushkar in eight days, hitting the state's best-known sights without over-extending. A traveller who's already done that circuit before, or who specifically wants to go deep on one city rather than skim several, is usually better served by the Jaipur City Tour, which trades breadth for genuine depth over four unhurried days. Those drawn to craftsmanship and living heritage over conventional sightseeing tend to prefer the Culture & Heritage Trail, which deliberately skips Jaipur in favour of Jodhpur, Jaisalmer and Udaipur's carved havelis and forts. Wildlife-minded travellers get a dedicated route pairing [[Ranthambore|/destinations/ranthambore]]'s tiger safaris with Jaipur and Udaipur's architecture rather than treating a safari as an afterthought. And for anyone who won't be back to Rajasthan again soon and wants to see as much of it properly as possible, the twelve-day Grand Circuit takes in all six cities in one trip.",
  "Timing matters more in Rajasthan than in most parts of India, and it varies by exactly which cities your itinerary includes. October through March is the reliable season for Jaipur, Jodhpur, Udaipur and Pushkar — dry, comfortable days without the summer's serious heat. Jaisalmer's desert climate is more extreme at both ends of the year, genuinely punishing from April to June and worth avoiding unless you specifically want to experience it. Ranthambore runs on its own calendar again: it's open October through June, and counterintuitively, tiger sighting odds actually improve as the dry season deepens toward April and May, when thinning vegetation concentrates animals around the remaining water sources. Anyone combining a safari with city sightseeing should plan around this overlap rather than assuming one weather window suits the whole trip — our [[full month-by-month travel guide|/best-time-to-visit-india]] breaks this down region by region if you want more detail before choosing your dates.",
  "Getting between cities is almost always by private road transport rather than rail or air, since Rajasthan's cities sit at distances that suit a car far better than trying to coordinate flight connections between smaller regional airports. Every package above includes a private, air-conditioned vehicle for the full circuit, and if you'd rather see the fleet options directly — sedans for smaller groups, larger vehicles for families — our [[car rental fleet|/car-rental]] page has the full range with real photos and capacity details. For longer circuits specifically, like the Grand Rajasthan Circuit, we sometimes suggest a domestic flight for the very longest single legs to reduce total driving time, and that option is noted directly on the relevant itinerary pages.",
  "Rajasthan also pairs naturally with other regions if you have more time than a single-state trip requires. Delhi and Agra sit within easy reach to the north, making our [[Golden Triangle Tour|/tours/golden-triangle-tour]] a natural add-on for travellers who haven't yet seen the Taj Mahal, and several of our Golden Triangle variants already extend directly into Rajasthan themselves. If you're planning this trip as a honeymoon, our dedicated [[Udaipur Honeymoon|/experiences/udaipur-honeymoon]] and [[Rajasthan Palace Honeymoon|/experiences/rajasthan-palace-honeymoon]] cover similar ground with a focus built specifically around couples. Whichever route you choose from the five above, every itinerary here is a starting template rather than a fixed package — tell us your dates, interests and how many days you have, and we'll adjust the exact route around them rather than asking you to fit an existing one.",
];

/**
 * "Which Rajasthan route suits me?" chooser. Days, nights and prices come
 * from the package files and src/lib/pricing.ts, so the table always matches
 * the tour pages. Routes are taken from each itinerary's day titles.
 */
const routeChoices: { pkg: PackageContent; route: string; bestFor: string }[] = [
  { pkg: jaipurCityTour, route: "Jaipur only", bestFor: "A short stay or a first taste of Rajasthan, in depth" },
  { pkg: rajasthanTours, route: "Jaipur, Jodhpur, Ranakpur, Udaipur, Pushkar", bestFor: "A first Rajasthan trip: the best-known cities in 8 days" },
  { pkg: rajasthanCultureHeritageTrail, route: "Jodhpur, Jaisalmer, Udaipur", bestFor: "The desert, Jaisalmer's fort and havelis, and craft traditions" },
  { pkg: rajasthanWildlifeSafari, route: "Jaipur, Ranthambore, Udaipur", bestFor: "Tiger safaris plus forts and lakes (October to June)" },
  { pkg: grandRajasthanCircuit, route: "Jaipur, Ranthambore, Jodhpur, Jaisalmer, Udaipur, Pushkar", bestFor: "All six highlights in one trip" },
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

/** Same figures as the drive-time section of the hiring-a-car guide. */
const driveTimes = [
  { leg: "Delhi to Jaipur", km: "about 280 km", time: "5 to 6 hours" },
  { leg: "Jaipur to Pushkar or Ajmer", km: "about 145 km", time: "2.5 to 3 hours" },
  { leg: "Jaipur to Ranthambore", km: "about 180 km", time: "about 4 hours" },
  { leg: "Jaipur to Jodhpur", km: "about 335 km", time: "5.5 to 6 hours" },
  { leg: "Jodhpur to Jaisalmer", km: "about 285 km", time: "5 to 6 hours" },
  { leg: "Jodhpur to Udaipur (via Ranakpur)", km: "about 250 km", time: "about 5 hours, plus the temple stop" },
  { leg: "Jaipur to Agra", km: "about 240 km", time: "about 5 hours" },
];

const faqs: FaqItem[] = [
  {
    question: "How many days do I need for Rajasthan?",
    answer:
      "Eight days covers the classic circuit of Jaipur, Jodhpur, Udaipur and Pushkar at a comfortable pace. Twelve days adds Jaisalmer's desert and a Ranthambore safari. With only 4 days, stay in one city, such as Jaipur, rather than trying to cross the state.",
  },
  {
    question: "What is the best time to visit Rajasthan?",
    answer:
      "October to March, when days are dry and comfortable. Jaisalmer is very hot from April to June. Ranthambore National Park is open from October to June and closed for the monsoon, roughly July to September.",
  },
  {
    question: "How do you get around Rajasthan?",
    answer:
      "By private car with a driver. The cities are 2.5 to 6 hours apart by road, which suits a car better than trains or flights between small airports. Every route on this page includes a private air-conditioned vehicle.",
  },
  {
    question: "How much does a private Rajasthan tour cost?",
    answer: `From about US$${RATE_PER_NIGHT_USD.india} per person per night with 3-4 star and heritage hotels, two people sharing, so the 8-day classic circuit starts from about US$${getPackageStartingPrice(rajasthanTours.slug, rajasthanTours.itinerary.length)} per person. Palace hotels cost more. The price includes hotels, breakfast, the car and driver, a guide and monument entry fees.`,
  },
  {
    question: "Can I combine Rajasthan with the Taj Mahal?",
    answer:
      "Yes. Agra is about 5 hours from Jaipur by road, so most first-time visitors start with Delhi and Agra on a Golden Triangle route and continue into Rajasthan.",
  },
];

const hubTrips = routeChoices.map((r) => packageToTripSummary(r.pkg));

export default function RajasthanToursHubPage() {
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
            touristTripCollectionJsonLd({ name: title, description, path: pagePath, trips: hubTrips })
          ),
        }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Amber Fort at sunset, Jaipur, Rajasthan"
          breadcrumbs={breadcrumbs}
          eyebrow="Tours & Packages"
          headline="Rajasthan, Five Ways"
          subheadline="Six cities, one state — the difference between these routes is how many of them you see, and what you focus on along the way."
        />

        {/* Cheapest linked route, computed from the package data (see routeRows). */}
        <TourHubStartingPrice price={cheapestRoute} />

        <CityGrid
          eyebrow="Choose Your Route"
          heading="Rajasthan Tour Packages"
          cities={[...rajasthanTourVariants, ...rajasthanCityTours]}
          showActions
        />

        <section className="border-t border-sand/70 py-10 sm:py-14" aria-labelledby="rajasthan-chooser">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Compare the Routes" heading="Which Rajasthan Route Suits Me?" />
              <p id="rajasthan-chooser" className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
                <span className="font-semibold text-ink">
                  For a first trip, the 8-day classic circuit covers Jaipur, Jodhpur, Udaipur and Pushkar;
                  choose the 12-day Grand Circuit to add Jaisalmer and a tiger safari, or 4 days in Jaipur
                  if time is short.
                </span>{" "}
                Prices are per person, two people sharing, for the hotel nights shown, with a private car,
                driver and guide, hotels, breakfast and monument entry fees.
              </p>
              <div className="mt-8 overflow-x-auto rounded-2xl border border-sand bg-white">
                <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                  <caption className="sr-only">
                    Rajasthan tour routes compared by length, cities, who they suit and starting price per person
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
                        <td className="whitespace-nowrap px-4 py-3 align-top">
                          {r.days} days / {r.nights} nights
                        </td>
                        <td className="px-4 py-3 align-top">{r.bestFor}</td>
                        <td className="whitespace-nowrap px-4 py-3 align-top font-semibold text-ink">
                          <Price usd={r.comfort} />
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 align-top">
                          <Price usd={r.luxury} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs italic text-ink-soft/80">{PRICE_DISCLAIMER}</p>

              <h3 className="mt-10 font-display text-xl font-semibold text-ink">How Long Are the Drives?</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-soft">
                Typical road times we plan with; festivals, town traffic and stops add time. More detail in
                our{" "}
                <Link href="/travel-guide/hiring-a-car-in-rajasthan" className="text-maroon underline">
                  guide to hiring a car and driver in Rajasthan
                </Link>
                .
              </p>
              <div className="mt-4 overflow-x-auto rounded-2xl border border-sand bg-white">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                  <caption className="sr-only">Typical drive distances and times between Rajasthan cities</caption>
                  <thead>
                    <tr className="border-b border-sand text-ink">
                      <th scope="col" className="px-4 py-3 font-semibold">Leg</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Distance</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Typical time</th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-soft">
                    {driveTimes.map((d) => (
                      <tr key={d.leg} className="border-b border-sand/60 last:border-0">
                        <th scope="row" className="px-4 py-3 font-medium text-ink">{d.leg}</th>
                        <td className="whitespace-nowrap px-4 py-3">{d.km}</td>
                        <td className="px-4 py-3">{d.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="mt-10 font-display text-xl font-semibold text-ink">Season Notes</h3>
              <ul className="mt-3 max-w-3xl list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-soft">
                <li><span className="font-semibold text-ink">October to March</span> is the main season for Jaipur, Jodhpur, Udaipur and Pushkar.</li>
                <li><span className="font-semibold text-ink">April to June</span> is very hot, especially in Jaisalmer and the desert.</li>
                <li><span className="font-semibold text-ink">Ranthambore</span> is open October to June and closed for the monsoon, roughly July to September; sightings tend to improve in the dry months of April and May.</li>
                <li><span className="font-semibold text-ink">Pushkar Fair</span> (usually October or November) fills Pushkar's hotels, so book early. See our{" "}
                  <Link href="/experiences/pushkar-fair" className="text-maroon underline">Pushkar Fair guide</Link>.
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Planning a Trip to Rajasthan" />
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

        <RelatedGuides guides={guidesFor(pagePath)} />

        <FAQSection
          eyebrow="FAQ"
          heading="Rajasthan Tours: Frequently Asked Questions"
          faqs={faqs}
          whatsappMessage="Hi! I have a question about a Rajasthan tour with Colourful Indian Holidays."
          topDivider
        />

        <PlannedByLine />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Rajasthan Trip Awaits."
          headlineItalic="Which Route Fits?"
          subtext="Not sure which version suits your dates and interests? Tell us what you have in mind and we'll help you pick — or build something in between."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help choosing a Rajasthan tour package."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
