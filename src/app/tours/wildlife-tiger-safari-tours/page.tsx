import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";

/**
 * Genuinely new pillar — unlike Kerala/South India/Kashmir & Ladakh, there
 * was no existing "Wildlife Tours" hub to expand. /tours/wildlife-tours
 * exists but is a single leaf package (Ranthambore + Sariska only), not a
 * hub, so this lives at a distinct URL rather than colliding with it.
 * Ties together 4 separate wildlife tour packages, 1 experience, and 4
 * destination pages that had no shared hub linking them before this.
 *
 * Image sourcing: every image below is one already live and verified
 * elsewhere in the codebase (each package/destination's own hero image),
 * reused here rather than introducing new unverified files. Spot-checked
 * bandhavgarh.webp directly given a prior project note flagging a
 * possible Sariska/Bandhavgarh photo mix-up — confirmed it's a genuine,
 * correctly-labelled safari-jeep photo with a visible Bandhavgarh park
 * sign in frame.
 */

const title = "Wildlife & Tiger Safari Tours | Ranthambore, Bandhavgarh, Kaziranga & Periyar";
const description =
  "Private wildlife tours across India's tiger reserves and national parks — Ranthambore, Bandhavgarh, Kanha and Pench, Kaziranga's rhinos, and Periyar's boat safaris.";
const pagePath = "/tours/wildlife-tiger-safari-tours";
const heroImage = "/images/destinations/ranthambore-tiger.webp";

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
  { name: "Wildlife & Tiger Safari Tours", path: pagePath },
];

const wildlifeTours = [
  {
    name: "Wildlife Tours",
    tagline: "Ranthambore & Sariska · Rajasthan",
    description: "Two of Rajasthan's tiger reserves in one trip, each with a genuinely different character and terrain.",
    href: "/tours/wildlife-tours",
    image: "/images/destinations/ranthambore-tiger.webp",
    imageAlt: "A Bengal tiger resting on a safari track, Ranthambore",
  },
  {
    name: "Rajasthan Wildlife Safari",
    tagline: "Forts, Tigers & a Lake City",
    description: "Ranthambore's tiger reserve combined with Rajasthan's palaces in one 8-day route.",
    href: "/tours/rajasthan-wildlife-safari",
    image: "/images/destinations/ranthambore-tiger.webp",
    imageAlt: "A Bengal tiger resting on a safari track, Ranthambore",
  },
  {
    name: "Tiger Safari Tours",
    tagline: "Bandhavgarh, Kanha & Pench",
    description: "Madhya Pradesh's three flagship reserves, deliberately distinct from the Rajasthan routes.",
    href: "/experiences/tiger-safari-tours",
    image: "/images/destinations/bandhavgarh-tiger.webp",
    imageAlt: "Two tigers at a waterhole, Bandhavgarh National Park",
  },
  {
    name: "Kaziranga Tour",
    tagline: "Rhino Safaris on the Brahmaputra",
    description: "Assam's grasslands and the one-horned rhinoceros, a genuinely different landscape and animal from anywhere else on this list.",
    href: "/tours/kaziranga-tour",
    image: "/images/destinations/kaziranga.webp",
    imageAlt: "A one-horned rhinoceros grazing in Kaziranga National Park, Assam",
  },
  {
    name: "Periyar Wildlife Tour",
    tagline: "Thekkady's Tiger Reserve · Kerala",
    description: "India's only major tiger reserve explored primarily by boat rather than jeep.",
    href: "/tours/periyar-wildlife-tour",
    image: "/images/destinations/thekkady.webp",
    imageAlt: "A backwaters houseboat near Thekkady, Kerala",
  },
];

const wildlifeDestinations = [
  {
    name: "Ranthambore",
    tagline: "Tiger Country, Rajasthan",
    description: "A former royal hunting ground turned tiger reserve, with a ruined fort inside its boundaries.",
    href: "/destinations/ranthambore",
    image: "/images/destinations/ranthambore-tiger.webp",
    imageAlt: "A Bengal tiger resting on a safari track, Ranthambore",
  },
  {
    name: "Bandhavgarh",
    tagline: "India's Highest Tiger Density",
    description: "Madhya Pradesh's most reliable reserve for a genuine tiger sighting.",
    href: "/destinations/bandhavgarh",
    image: "/images/destinations/bandhavgarh.webp",
    imageAlt: "A safari jeep convoy on a dust track at Bandhavgarh National Park",
  },
  {
    name: "Kaziranga",
    tagline: "UNESCO World Heritage, Assam",
    description: "Home to two-thirds of the world's one-horned rhinoceros population.",
    href: "/destinations/kaziranga",
    image: "/images/destinations/kaziranga.webp",
    imageAlt: "A one-horned rhinoceros grazing in Kaziranga National Park, Assam",
  },
  {
    name: "Sariska",
    tagline: "Rajasthan's Second Reserve",
    description: "A quieter, less-visited alternative to Ranthambore, a genuine tiger reintroduction success story.",
    href: "/destinations/sariska",
    image: "/images/destinations/sariska.webp",
    imageAlt: "Forest landscape at Sariska Tiger Reserve, Rajasthan",
  },
];

const overview = [
  "India holds roughly 70% of the world's wild tiger population, spread across reserves with genuinely different landscapes, terrain and safari styles rather than one interchangeable experience repeated in different states. The five routes above reflect that range deliberately — [[Ranthambore and Sariska|/tours/wildlife-tours]] in Rajasthan's dry deciduous forest, close enough to combine with a Rajasthan circuit; [[Bandhavgarh, Kanha and Pench|/experiences/tiger-safari-tours]] in Madhya Pradesh, widely considered India's best tiger-density reserves; [[Kaziranga|/tours/kaziranga-tour]] in Assam, a completely different ecosystem built around rhinos and grassland rather than tigers and forest; and [[Periyar|/tours/periyar-wildlife-tour]] in Kerala, explored by boat rather than jeep.",
  "Ranthambore is the reserve most first-time visitors reach first, both because of its fame and its location — close enough to Jaipur to combine naturally with a Rajasthan itinerary, with the added novelty of a ruined 10th-century fort standing inside the park boundary itself, visible from several safari routes. [[Sariska|/destinations/sariska]], a couple of hours further into Rajasthan, offers a quieter alternative with lower visitor numbers, following a genuine tiger reintroduction programme after the park's original tigers were lost to poaching in the mid-2000s.",
  "Madhya Pradesh's reserves — [[Bandhavgarh|/destinations/bandhavgarh]], Kanha and Pench — are widely considered India's strongest for an actual tiger sighting, with Bandhavgarh in particular holding one of the highest tiger densities of any reserve in the country. Kanha, meanwhile, is often credited as the landscape that inspired Rudyard Kipling's Jungle Book, and Pench sits close enough to combine both reserves in one trip. These three run as a dedicated route distinct from the Rajasthan reserves above, since combining Rajasthan and Madhya Pradesh's parks in one trip usually adds more travel time than sightseeing time.",
  "[[Kaziranga|/destinations/kaziranga]], a UNESCO World Heritage Site on the Brahmaputra floodplain in Assam, is a genuinely different kind of wildlife trip — grassland and wetland rather than forest, elephant-back or jeep safaris rather than the same format repeated, and the one-horned rhinoceros as the headline species rather than tigers, alongside wild elephants, water buffalo and over 500 recorded bird species. It's a considerable distance from India's other major reserves, so it works best either as its own dedicated trip or combined with a wider Northeast India itinerary rather than tacked onto a Rajasthan or Madhya Pradesh route. Periyar, near Thekkady in Kerala, is different again — one of the few tiger reserves explored primarily by boat, gliding across Periyar Lake watching for elephants and other wildlife along the shoreline, and easily combined with a wider Kerala circuit.",
  "Every route here runs with a private vehicle and driver for transfers, with safari vehicles and permits arranged separately as part of your itinerary — tiger reserve safaris require advance permit bookings that fill up during peak season, so earlier booking genuinely matters more here than on a standard sightseeing itinerary. See our [[car rental fleet|/car-rental]] for the range of vehicles we use for transfers between parks and cities. Tell us which reserve or region interests you most, and how it fits with the rest of your trip, and we'll build the itinerary and permits around it.",
];

const faqs: FaqItem[] = [
  {
    question: "Which tiger reserve has the best chance of an actual sighting?",
    answer:
      "Bandhavgarh in Madhya Pradesh is widely considered to have the highest tiger density of any Indian reserve, giving it a strong reputation for sightings, though no reserve can guarantee one on any single safari. Ranthambore is a close second in reputation and considerably easier to combine with a Rajasthan itinerary.",
  },
  {
    question: "How far in advance do I need to book a safari permit?",
    answer:
      "As early as possible — tiger reserve safari permits are limited and fill up well ahead during peak season (November to April), sometimes weeks in advance for popular zones. We handle permit booking as part of your itinerary, but earlier notice gives access to better zones and time slots.",
  },
  {
    question: "Can I combine a tiger safari with a Rajasthan or Golden Triangle trip?",
    answer:
      "Yes, easily for Ranthambore or Sariska, both within reach of a standard Rajasthan circuit. Bandhavgarh, Kanha and Pench sit further away in Madhya Pradesh and work better as their own dedicated trip or combined with each other rather than added onto a Rajasthan itinerary.",
  },
  {
    question: "What's different about Kaziranga compared to the other reserves?",
    answer:
      "Kaziranga is built around rhinos and grassland rather than tigers and forest — it's a UNESCO World Heritage Site on the Brahmaputra floodplain in Assam, home to roughly two-thirds of the world's one-horned rhinoceros population, and a considerable distance from India's other major reserves, so it works best as its own trip or part of a Northeast India itinerary.",
  },
  {
    question: "What's the best time of year for a tiger safari?",
    answer:
      "November through April is the main safari season across most reserves, with the hotter, drier months (March-April) often producing better sightings as animals gather near remaining water sources. Most parks close for some or all of the June-to-September monsoon.",
  },
];

export default function WildlifeTigerSafariHubPage() {
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
          imageAlt="A Bengal tiger resting on a safari track, Ranthambore"
          breadcrumbs={breadcrumbs}
          eyebrow="Tours & Packages"
          headline="Wildlife & Tiger Safari Tours"
          subheadline="India holds roughly 70% of the world's wild tigers, spread across reserves with genuinely different landscapes — the difference between these routes is which one, and which animal, you're actually after."
        />

        <CityGrid
          eyebrow="Choose Your Route"
          heading="Wildlife & Tiger Safari Packages"
          cities={wildlifeTours}
          showActions
        />

        <CityGrid
          eyebrow="The Reserves"
          heading="Where These Tours Actually Go"
          cities={wildlifeDestinations}
          topDivider
          showActions
        />

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Planning a Wildlife & Tiger Safari Trip" />
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
          heading="Wildlife & Tiger Safari Tours: Frequently Asked Questions"
          faqs={faqs}
          whatsappMessage="Hi! I have a question about a wildlife or tiger safari tour with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Wildlife Safari Awaits."
          headlineItalic="Which Reserve Fits?"
          subtext="Not sure which reserve suits your dates and interests? Tell us what you have in mind and we'll help you pick — or build something in between."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help choosing a wildlife or tiger safari tour."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
