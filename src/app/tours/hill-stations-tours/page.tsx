import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { PlannedByLine } from "@/components/shared/PlannedByLine";
import { Reveal } from "@/components/ui/Reveal";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";

/**
 * A new pillar, not an expansion — proposed as a narrower, less
 * cannibalizing alternative to a generic "North India Tours" pillar,
 * which would have mostly duplicated content already covered in depth by
 * the Golden Triangle, Rajasthan, Pilgrimage and Kashmir & Ladakh pillars.
 * Himachal Pradesh, Darjeeling and Sikkim had individual tour packages
 * and destination pages but no hub tying them together — genuinely
 * distinct search intent ("Shimla Manali tour," "Darjeeling trip") with
 * no overlap against the 5 pillars already built.
 *
 * Note: Mount Abu (Rajasthan's own hill station) was flagged in the
 * original rebuild plan as an already-ranking page worth carrying
 * forward, but no destination or tour content exists for it anywhere on
 * the current site. Deliberately left out of this pillar rather than
 * fabricated — flagged as a real, separate content gap.
 *
 * All three hero images (shimla-town.webp, Darjeeling.webp,
 * sikkim-tsomgo-lake.webp) were visually verified before reuse.
 */

const title = "Hill Station Tours | Shimla, Manali, Darjeeling & Sikkim";
const description =
  "Private tours to India's Himalayan hill stations — Shimla and Manali in Himachal Pradesh, Darjeeling's tea gardens and toy train, and Sikkim's Buddhist monasteries and mountain lakes.";
const pagePath = "/tours/hill-stations-tours";
const heroImage = "/images/destinations/shimla-town.webp";

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
  { name: "Hill Station Tours", path: pagePath },
];

const hillStationTours = [
  {
    name: "Himachal Tour",
    tagline: "Shimla & Manali in 6 Days",
    description: "The British Raj's former summer capital, paired with Manali's mountains and adventure activities.",
    href: "/tours/himachal-tour",
    image: "/images/destinations/shimla-town.webp",
    imageAlt: "Shimla's colourful hillside town, Himachal Pradesh",
  },
  {
    name: "Darjeeling Tour",
    tagline: "Tea Gardens & the Himalayan Railway",
    description: "Tea estates, Kanchenjunga viewpoints, and a UNESCO-listed narrow-gauge steam railway.",
    href: "/tours/darjeeling-tour",
    image: "/images/destinations/Darjeeling.webp",
    imageAlt: "Darjeeling's hillside town wreathed in cloud, West Bengal",
  },
  {
    name: "Sikkim Tour",
    tagline: "A Former Himalayan Buddhist Kingdom",
    description: "Buddhist monasteries, Tsomgo Lake, and mountain scenery in a state that was an independent kingdom until 1975.",
    href: "/tours/sikkim-tour",
    image: "/images/destinations/sikkim-tsomgo-lake.webp",
    imageAlt: "Tsomgo Lake surrounded by snow-covered mountains, Sikkim",
  },
];

const hillStationDestinations = [
  {
    name: "Himachal Pradesh",
    tagline: "Hill Stations & the Himalayas",
    description: "Shimla's colonial architecture and Manali's mountains and adventure sports.",
    href: "/destinations/himachal",
    image: "/images/destinations/shimla-town.webp",
    imageAlt: "Shimla's colourful hillside town, Himachal Pradesh",
  },
  {
    name: "Darjeeling",
    tagline: "Tea Gardens & Himalayan Views",
    description: "West Bengal's best-known hill station, built around tea and colonial-era architecture.",
    href: "/destinations/darjeeling",
    image: "/images/destinations/Darjeeling.webp",
    imageAlt: "Darjeeling's hillside town wreathed in cloud, West Bengal",
  },
  {
    name: "Sikkim",
    tagline: "A Himalayan Buddhist Kingdom",
    description: "Monasteries, mountain lakes, and a culture closer to Tibet and Bhutan than the Indian plains.",
    href: "/destinations/sikkim",
    image: "/images/destinations/sikkim-tsomgo-lake.webp",
    imageAlt: "Tsomgo Lake surrounded by snow-covered mountains, Sikkim",
  },
];

const overview = [
  "India's hill stations exist for a simple historical reason: the British Raj needed somewhere cooler than the plains to spend the summer, and the towns they built for that purpose — Shimla chief among them — still carry that colonial character today, layered underneath a genuinely Indian mountain culture that predates and outlasted it. The three routes above cover three different ranges and registers rather than one interchangeable hill-station experience: [[Himachal Pradesh|/tours/himachal-tour]] pairs colonial Shimla with adventure-focused Manali, [[Darjeeling|/tours/darjeeling-tour]] centres on tea and a UNESCO-listed railway, and [[Sikkim|/tours/sikkim-tour]] offers a genuinely different, Buddhist Himalayan kingdom largely untouched by the Raj altogether.",
  "Shimla was literally the summer capital of British India, and its Mall Road and Ridge still carry the half-timbered, Tudor-revival architecture built for exactly that purpose, alongside the toy-train-scale Kalka-Shimla Railway climbing up to meet it. Manali, a few hours further into the mountains, trades colonial history for adventure and scenery — paragliding, river rafting, and the gateway road toward Leh and Ladakh via some of the highest motorable passes in the world, for travellers who want a taste of high-altitude terrain without committing to a full Ladakh trip.",
  "Darjeeling's identity is built around two things: tea, grown on terraced estates that have supplied some of the world's most prized leaves since the mid-19th century, and the Darjeeling Himalayan Railway, a narrow-gauge steam 'toy train' that is itself a UNESCO World Heritage Site, still climbing the same mountain grades it was built for in 1881. On a clear morning, Tiger Hill above the town offers one of the most reliable sunrise views of Kanchenjunga, the world's third-highest peak, anywhere in India.",
  "Sikkim holds a genuinely different history from anywhere else on this list — an independent Buddhist kingdom until it merged with India in 1975, still visibly shaped by that Tibetan Buddhist heritage in its monasteries, prayer flags and mountain culture. Tsomgo Lake, a glacial lake at over 3,700 metres near the Chinese border, and the historic Nathu La Pass trade route are among its best-known sights, alongside Kanchenjunga views that rival Darjeeling's from the opposite side of the range.",
  "All three regions require a private vehicle and driver genuinely experienced with mountain roads — switchback passes, changeable weather and altitude all matter more here than on a standard sightseeing itinerary. See our [[car rental fleet|/car-rental]] for the range of vehicles we use across different terrain. If you'd like even higher altitude and a genuinely different landscape again, our [[Kashmir & Ladakh Tours|/tours/kashmir-ladakh-tours]] go considerably further into the high Himalaya. Tell us your dates and which of these three regions interests you most, and we'll build the exact trip around it.",
];

const faqs: FaqItem[] = [
  {
    question: "Which hill station should I choose — Himachal, Darjeeling, or Sikkim?",
    answer:
      "Himachal (Shimla and Manali) suits travellers who want colonial history alongside adventure activities and easy access from Delhi. Darjeeling suits tea and railway enthusiasts, with reliable Kanchenjunga views. Sikkim suits travellers wanting a genuinely different Buddhist Himalayan culture and higher-altitude mountain lakes.",
  },
  {
    question: "Is the Darjeeling Himalayan Railway worth riding?",
    answer:
      "Yes — it's a UNESCO World Heritage Site in its own right, a narrow-gauge steam railway that has climbed the same mountain grades since 1881. Most itineraries include at least a short joyride segment on it, rather than the full multi-hour route, which is enough to experience it without dedicating a whole day.",
  },
  {
    question: "What's the best time of year to visit India's hill stations?",
    answer:
      "March through June is popular for escaping the plains' heat, and September through November offers clear mountain views after the monsoon. Winter (December-February) brings snow to Manali and parts of Sikkim, appealing if that's specifically what you're after, though some higher routes and passes may close.",
  },
  {
    question: "Can I combine Darjeeling and Sikkim in one trip?",
    answer:
      "Yes — this is a common and natural combination, since both are reached via Bagdogra airport in West Bengal and sit close enough together to visit in one connected itinerary, giving you both the tea-and-railway side of the region and Sikkim's more remote Buddhist culture.",
  },
  {
    question: "Is altitude sickness a concern in these hill stations?",
    answer:
      "Generally no for Shimla, Manali or Darjeeling, all at moderate elevations most people adjust to easily. Parts of Sikkim, particularly Tsomgo Lake at over 3,700 metres, sit high enough that it's worth taking it easy on arrival, though it's a much shorter exposure than a Ladakh trip.",
  },
];

export default function HillStationsHubPage() {
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

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Shimla's colourful hillside town, Himachal Pradesh"
          breadcrumbs={breadcrumbs}
          eyebrow="Tours & Packages"
          headline="India's Hill Stations, Three Ways"
          subheadline="Colonial Shimla, tea-country Darjeeling, and the Buddhist kingdom of Sikkim — three genuinely different Himalayan escapes from the heat of the plains."
        />

        <CityGrid
          eyebrow="Choose Your Route"
          heading="Hill Station Tour Packages"
          cities={hillStationTours}
          showActions
        />

        <CityGrid
          eyebrow="The Three Regions"
          heading="Where Hill Station Tours Actually Go"
          cities={hillStationDestinations}
          topDivider
          showActions
        />

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Planning a Hill Station Trip" />
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
          heading="Getting Around by Private Vehicle"
          cities={fleetCards.slice(0, 3)}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Hill Station Tours: Frequently Asked Questions"
          faqs={faqs}
          whatsappMessage="Hi! I have a question about a hill station tour with Colourful Indian Holidays."
          topDivider
        />

        <PlannedByLine />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Hill Station Trip Awaits."
          headlineItalic="Which Region Fits?"
          subtext="Not sure which region suits your dates and interests? Tell us what you have in mind and we'll help you pick — or build something in between."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help choosing a hill station tour."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
