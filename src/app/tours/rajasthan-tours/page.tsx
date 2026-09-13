import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { rajasthanTourVariants, rajasthanCityTours } from "@/content/rajasthan-tours-hub";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";

const title = "Rajasthan Tour Packages | Jaipur, Jodhpur, Udaipur & Beyond, 5 Ways";
const description =
  "Private Rajasthan tour packages in five shapes — a classic circuit, a focused Jaipur city tour, a heritage trail, a wildlife safari route, and the full six-city Grand Circuit.";
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

export default function RajasthanToursHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
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

        <CityGrid
          eyebrow="Choose Your Route"
          heading="Rajasthan Tour Packages"
          cities={[...rajasthanTourVariants, ...rajasthanCityTours]}
          showActions
        />

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
