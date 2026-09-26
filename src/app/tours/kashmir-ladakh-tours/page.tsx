import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { kashmirLadakhTourVariants } from "@/content/kashmir-ladakh-tours-hub";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";

/**
 * Same pillar treatment as Kerala/South India: existing overview kept,
 * gaps filled. One additional fix here: the previous hero image
 * (Leh-4.webp) was already flagged elsewhere in this project's notes as
 * having a visible photographer watermark. Replaced with Leh-3.webp
 * (the Indus-Zanskar confluence near Leh — verified clean, no watermark,
 * a genuine and recognisable Ladakh landmark) rather than leaving a known
 * issue in place while touching this exact file anyway.
 */

const title = "Kashmir & Ladakh Tour Packages | Dal Lake, Gulmarg & Pangong Lake";
const description =
  "Private Kashmir & Ladakh tour packages in three shapes — a complete combined circuit, a Kashmir-only valley tour, and a Ladakh-only high-altitude adventure.";
const pagePath = "/tours/kashmir-ladakh-tours";
const heroImage = "/images/destinations/Leh-3.webp";

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

const kashmirLadakhCities = [
  {
    name: "Srinagar & Kashmir",
    tagline: "Dal Lake & Mughal Gardens",
    description: "Houseboats, terraced Mughal-era gardens, and Gulmarg's alpine meadows.",
    href: "/destinations/srinagar-kashmir",
    image: "/images/destinations/Leh-2.webp",
    imageAlt: "A street in the Kashmir region",
  },
  {
    name: "Leh & Ladakh",
    tagline: "The Tibetan Plateau",
    description: "High-altitude monasteries, Pangong Lake, and the Nubra Valley's cold desert.",
    href: "/destinations/leh-ladakh",
    image: "/images/destinations/Leh-5.webp",
    imageAlt: "The Leh valley seen from above, with the Himalayas beyond",
  },
];

const overview = [
  "Kashmir and Ladakh sit right next to each other on the map, but they're genuinely two different worlds — Kashmir a green, lake-filled valley the Mughal emperors once called 'Paradise on Earth', and Ladakh a high-altitude cold desert on the Tibetan plateau, with a landscape and culture closer to Tibet than to the rest of India. Both are reachable through Srinagar or Leh's airports, and both reward real time rather than a rushed pass-through, which is why the three routes above cover them separately as well as together — [[Kashmir Valley|/tours/kashmir-valley-tour]] alone, [[Ladakh|/tours/ladakh-tour]] alone, or the full [[nine-day combined circuit|/tours/kashmir-ladakh-tours-classic]] for travellers who want both. See our [[Srinagar & Kashmir|/destinations/srinagar-kashmir]] and [[Leh & Ladakh|/destinations/leh-ladakh]] destination guides for more on each region individually.",
  "Kashmir's appeal is built around water and gardens — Dal Lake's houseboats, the Mughal-era terraced gardens at Nishat and Shalimar Bagh, and Gulmarg's alpine meadows reached by one of the highest cable cars in the world. It's a genuinely gentle introduction to the Himalayas, with comfortable elevations and lush scenery that doesn't demand any real acclimatization, making it a good starting point for travellers new to high-altitude travel generally. Ladakh is a different proposition entirely: Leh itself sits at roughly 3,500 metres, high enough that altitude sickness is a real consideration, and most itineraries build in a full acclimatization day before any serious sightseeing begins. In exchange, Ladakh offers landscapes found nowhere else in India — centuries-old Buddhist monasteries perched on rocky outcrops, Pangong Lake's improbable turquoise water surrounded by bare mountains, and the Nubra Valley's cold desert dunes, all under some of the clearest skies anywhere in the country.",
  "Timing matters differently for each region. Kashmir is genuinely pleasant from April through October, with spring bringing tulip season and blooming gardens, and autumn bringing golden chinar trees across Srinagar. Ladakh, by contrast, is only accessible by road for a narrow window — typically late May through September — since the high mountain passes connecting it to the rest of India are snowbound the rest of the year, though flights to Leh run for most of the year regardless. Anyone combining both regions in a single trip should plan around this overlap, visiting Kashmir first and continuing into Ladakh once the passes (or a direct flight) make it accessible, exactly how our combined circuit is structured.",
  "Every route here includes a private vehicle and driver for the sections where road travel makes sense — Kashmir's valley roads and Ladakh's more dramatic mountain routes both require a driver genuinely experienced with local conditions rather than a standard sedan and city driver, particularly on Ladakh's higher passes where road surfaces and weather can change quickly. See our [[car rental fleet|/car-rental]] for the range of vehicles we use across different terrain. If you're planning either region specifically as a honeymoon, our dedicated [[Kashmir Honeymoon|/experiences/kashmir-honeymoon]] covers Srinagar and Gulmarg with a focus built around couples rather than general sightseeing. If this is genuinely your first trip to India, our guides to [[India's e-Visa process|/travel-guide/india-e-visa-guide]] and [[health and altitude precautions|/travel-guide/india-health-vaccination-guide]] cover the practical groundwork worth sorting out before you book, particularly given Ladakh's altitude. Tell us your dates and which of these three routes appeals most, and we'll build the exact trip around it rather than asking you to fit an existing one.",
];

const faqs: FaqItem[] = [
  {
    question: "Should I visit Kashmir, Ladakh, or both?",
    answer:
      "If you have a week or less, pick one — Kashmir for a gentler, lake-and-garden introduction to the Himalayas, or Ladakh for a more dramatic, higher-altitude landscape and Buddhist culture. With 9 days or more, our combined circuit visits both, in that order, to work with Ladakh's seasonal road access.",
  },
  {
    question: "Is altitude sickness a real concern in Ladakh?",
    answer:
      "Yes — Leh sits at roughly 3,500 metres, and altitude sickness is a genuine consideration for most visitors regardless of fitness level. Every Ladakh itinerary we run includes a full acclimatization day before serious sightseeing begins, and we'd recommend discussing your trip with a doctor beforehand if you have any relevant health conditions.",
  },
  {
    question: "When can you actually visit Ladakh?",
    answer:
      "By road, typically late May through September, since the high mountain passes connecting Ladakh to the rest of India are snowbound the rest of the year. Flights to Leh run for most of the year regardless, so a fly-in trip has more flexibility than an overland one.",
  },
  {
    question: "What's the best time to visit Kashmir?",
    answer:
      "April through October is genuinely pleasant, with spring (April-May) bringing tulip season and blooming gardens, and autumn (September-October) bringing Srinagar's chinar trees to gold. Each season gives a noticeably different character to the same gardens and lake views.",
  },
  {
    question: "Is Kashmir safe for tourists right now?",
    answer:
      "Tourism in the Kashmir Valley operates normally, and Srinagar, Gulmarg and Pahalgam see a steady flow of domestic and international visitors. As with any region, it's worth checking current travel advisories from your own government closer to your travel dates, and we're happy to discuss the current situation directly when you enquire.",
  },
];

export default function KashmirLadakhToursHubPage() {
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
          imageAlt="The Indus-Zanskar confluence near Leh, Ladakh"
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

        <CityGrid
          eyebrow="The Two Regions"
          heading="Where Kashmir & Ladakh Tours Actually Go"
          cities={kashmirLadakhCities}
          topDivider
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

        <FAQSection
          eyebrow="FAQ"
          heading="Kashmir & Ladakh Tours: Frequently Asked Questions"
          faqs={faqs}
          whatsappMessage="Hi! I have a question about a Kashmir & Ladakh tour with Colourful Indian Holidays."
          topDivider
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

