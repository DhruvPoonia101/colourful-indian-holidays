import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { kashmirLadakhTourVariants } from "@/content/kashmir-ladakh-tours-hub";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";

const title = "Kashmir & Ladakh Tour Packages | Dal Lake, Gulmarg & Pangong Lake";
const description =
  "Private Kashmir & Ladakh tour packages in three shapes — a complete combined circuit, a Kashmir-only valley tour, and a Ladakh-only high-altitude adventure.";
const pagePath = "/tours/kashmir-ladakh-tours";
const heroImage = "/images/destinations/Leh-4.webp";

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
  { name: "Kashmir & Ladakh Tours", path: pagePath },
];

const overview = [
  "Kashmir and Ladakh sit right next to each other on the map, but they're genuinely two different worlds — Kashmir a green, lake-filled valley the Mughal emperors once called 'Paradise on Earth', and Ladakh a high-altitude cold desert on the Tibetan plateau, with a landscape and culture closer to Tibet than to the rest of India. Both are reachable through Srinagar or Leh's airports, and both reward real time rather than a rushed pass-through, which is why the three routes above cover them separately as well as together — [[Kashmir Valley|/tours/kashmir-valley-tour]] alone, [[Ladakh|/tours/ladakh-tour]] alone, or the full [[nine-day combined circuit|/tours/kashmir-ladakh-tours-classic]] for travellers who want both.",
  "Kashmir's appeal is built around water and gardens — Dal Lake's houseboats, the Mughal-era terraced gardens at Nishat and Shalimar Bagh, and Gulmarg's alpine meadows reached by one of the highest cable cars in the world. It's a genuinely gentle introduction to the Himalayas, with comfortable elevations and lush scenery that doesn't demand any real acclimatization, making it a good starting point for travellers new to high-altitude travel generally. Ladakh is a different proposition entirely: Leh itself sits at roughly 3,500 metres, high enough that altitude sickness is a real consideration, and most itineraries build in a full acclimatization day before any serious sightseeing begins. In exchange, Ladakh offers landscapes found nowhere else in India — centuries-old Buddhist monasteries perched on rocky outcrops, Pangong Lake's improbable turquoise water surrounded by bare mountains, and the Nubra Valley's cold desert dunes, all under some of the clearest skies anywhere in the country.",
  "Timing matters differently for each region. Kashmir is genuinely pleasant from April through October, with spring bringing tulip season and blooming gardens, and autumn bringing golden chinar trees across Srinagar. Ladakh, by contrast, is only accessible by road for a narrow window — typically late May through September — since the high mountain passes connecting it to the rest of India are snowbound the rest of the year, though flights to Leh run for most of the year regardless. Anyone combining both regions in a single trip should plan around this overlap, visiting Kashmir first and continuing into Ladakh once the passes (or a direct flight) make it accessible, exactly how our combined circuit is structured.",
  "Every route here includes a private vehicle and driver for the sections where road travel makes sense — Kashmir's valley roads and Ladakh's more dramatic mountain routes both require a driver genuinely experienced with local conditions rather than a standard sedan and city driver, particularly on Ladakh's higher passes where road surfaces and weather can change quickly. See our [[car rental fleet|/car-rental]] for the range of vehicles we use across different terrain. If you're planning either region specifically as a honeymoon, our dedicated [[Kashmir Honeymoon|/experiences/kashmir-honeymoon]] covers Srinagar and Gulmarg with a focus built around couples rather than general sightseeing. Tell us your dates and which of these three routes appeals most, and we'll build the exact trip around it rather than asking you to fit an existing one.",
];

export default function KashmirLadakhToursHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Pangong Lake with motorcycles parked on the shore, Ladakh"
          breadcrumbs={breadcrumbs}
          eyebrow="Tours & Packages"
          headline="Kashmir & Ladakh, Three Ways"
          subheadline="Two genuinely different Himalayan regions, side by side — the difference between these routes is which one you want, or whether you'd rather see both."
        />

        <CityGrid
          eyebrow="Choose Your Route"
          heading="Kashmir & Ladakh Tour Packages"
          cities={kashmirLadakhTourVariants}
          showActions
        />

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Planning a Trip to Kashmir & Ladakh" />
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

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Kashmir & Ladakh Trip Awaits."
          headlineItalic="Which Route Fits?"
          subtext="Not sure which version suits your dates and interests? Tell us what you have in mind and we'll help you pick — or build something in between."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help choosing a Kashmir & Ladakh tour package."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
