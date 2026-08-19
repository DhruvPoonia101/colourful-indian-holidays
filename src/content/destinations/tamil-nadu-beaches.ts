import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const tamilNaduBeachesAttractions: CityCard[] = [
  {
    name: "Mahabalipuram Beach",
    tagline: "UNESCO World Heritage Site",
    description: "A 7th-century shore temple standing directly on the sand, alongside rock-cut cave temples and the famous Five Rathas monoliths.",
    href: "/destinations/tamil-nadu-beaches",
    image: "/images/destinations/mahabalipuram-beach.webp",
    imageAlt: "Mahabalipuram Beach — photo coming soon",
  },
  {
    name: "Marina Beach, Chennai",
    tagline: "India's Longest Urban Beach",
    description: "A 13-kilometre stretch of sand running along the city itself — busiest at sunrise and sunset, when locals turn out in numbers.",
    href: "/destinations/tamil-nadu-beaches",
    image: "/images/destinations/marina-beach-chennai.webp",
    imageAlt: "Marina Beach, Chennai — photo coming soon",
  },
  {
    name: "Kanyakumari Beach",
    tagline: "Where Three Seas Meet",
    description: "The southernmost point of mainland India, where the Bay of Bengal, Arabian Sea and Indian Ocean converge — a genuinely unusual sunrise and sunset in the same spot.",
    href: "/destinations/tamil-nadu-beaches",
    image: "/images/destinations/kanyakumari-beach.webp",
    imageAlt: "Kanyakumari Beach — photo coming soon",
  },
] as const;

export const tamilNaduBeachesQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "November to February" },
  { label: "Ideal Trip Length", value: "2 – 3 Days" },
  { label: "Main Gateway", value: "Chennai (MAA)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const tamilNaduBeachesGettingThere: GettingThereItem[] = [
  {
    title: "Main Gateway",
    description:
      "Chennai (MAA) is the nearest major airport, with onward road transfers to reach the destination itself. We arrange a private driver for the full journey.",
  },
  {
    title: "Typical Entry Route",
    description:
      "Most travellers add this as an extension to a wider itinerary rather than a standalone trip, arriving via a nearby hub city.",
  },
  {
    title: "Visa Requirements",
    description:
      "The standard Indian e-Visa applies for most nationalities and can be arranged online before departure. We recommend confirming current requirements for your passport before booking flights.",
  },
] as const;

export const tamilNaduBeachesHighlights: Highlight[] = [
  {
    title: "The Shore Temple",
    description:
      "A UNESCO World Heritage Site since 1984, and one of the oldest structural stone temples in South India, weathered directly by sea spray for over a thousand years.",
  },
  {
    title: "The Five Rathas",
    description:
      "Monolithic rock-cut temples at Mahabalipuram, each carved from a single piece of granite in the shape of a chariot.",
  },
  {
    title: "Fishing Village Culture",
    description:
      "Much of the coast is still a working fishing economy, with early-morning catches and boats a genuine part of daily life, not staged for visitors.",
  },
  {
    title: "Pondicherry Nearby",
    description:
      "The former French colonial town of Pondicherry sits a short drive up the coast, often combined with a Tamil Nadu beach itinerary.",
  },
  {
    title: "Temple Architecture",
    description:
      "Dravidian temple architecture along this coast directly influenced temple design across South and Southeast Asia.",
  },
] as const;

export const tamilNaduBeachesRelatedDestinations: CityCard[] = [
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "Forts, palaces and desert citadels — the natural pairing for almost any India trip.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "Delhi",
    tagline: "India's Capital",
    description: "The most common international gateway before continuing on.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
  {
    name: "Agra",
    tagline: "Home of the Taj Mahal",
    description: "Easily combined as part of a wider North India route.",
    href: "/destinations/agra",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
  },
] as const;

export const tamilNaduBeachesFaqs: FaqItem[] = [
  {
    question: "How many days should I spend on Tamil Nadu's coast?",
    answer:
      "2 to 3 days is enough to see Mahabalipuram, Marina Beach and a Chennai stopover comfortably. Kanyakumari is further south and usually needs its own extra day or two if included.",
  },
  {
    question: "Is this a swimming-beach holiday like Goa?",
    answer:
      "Not primarily — Tamil Nadu's coast is more about history and culture than resort-style beach time, though there are still good spots to relax by the water, especially around Mahabalipuram.",
  },
  {
    question: "Can this be combined with Kerala?",
    answer:
      "Yes, this is a common pairing — Tamil Nadu's coast and temples alongside Kerala's backwaters make for a well-rounded South India itinerary.",
  },
  {
    question: "What's the best base for exploring this coast?",
    answer:
      "Chennai for Marina Beach and day trips to Mahabalipuram, or Mahabalipuram itself if you'd prefer a quieter, more coastal base.",
  },
] as const;
