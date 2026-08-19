import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const bandhavgarhAttractions: CityCard[] = [
  {
    name: "Tiger Safari",
    tagline: "India's Highest Tiger Density",
    description: "A jeep safari through Bandhavgarh's core zone, where sighting odds are consistently among the best of any Indian tiger reserve.",
    href: "/destinations/bandhavgarh",
    image: "/images/destinations/bandhavgarh-tiger.webp",
    imageAlt: "Tiger Safari",
  },
  {
    name: "Bandhavgarh Fort",
    tagline: "An Ancient Fort Within the Park",
    description: "A hilltop fort with ruins, statues and carvings dating back over a thousand years, standing at the heart of the reserve.",
    href: "/destinations/bandhavgarh",
    image: "/images/destinations/bandhavgarh-fort.webp",
    imageAlt: "Bandhavgarh Fort",
  },
] as const;

export const bandhavgarhQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October to June" },
  { label: "Ideal Trip Length", value: "2 Days" },
  { label: "Main Gateway", value: "Jabalpur (JLR)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const bandhavgarhGettingThere: GettingThereItem[] = [
  {
    title: "Main Gateway",
    description:
      "Jabalpur (JLR) is the nearest major airport, with onward road transfers to reach the destination itself. We arrange a private driver for the full journey.",
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

export const bandhavgarhHighlights: Highlight[] = [
  {
    title: "The Best Tiger-Sighting Odds in India",
    description:
      "Bandhavgarh's tiger density is the highest of any Indian reserve, giving it a genuine edge for travellers whose main priority is seeing a tiger.",
  },
  {
    title: "The Birthplace of the White Tiger",
    description:
      "The first-ever white tiger recorded in the wild was found here in 1951 — the bloodline behind every white tiger in captivity today.",
  },
  {
    title: "An Ancient Hilltop Fort",
    description:
      "Ruins, carved statues and temple remains dating back centuries sit within the park's core zone, adding real history to safari drives.",
  },
  {
    title: "Easily Paired with Khajuraho",
    description:
      "A short flight or drive from Khajuraho's famous temple complex, making it a natural add-on to a Madhya Pradesh itinerary.",
  },
] as const;

export const bandhavgarhRelatedDestinations: CityCard[] = [
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

export const bandhavgarhFaqs: FaqItem[] = [
  {
    question: "How does Bandhavgarh compare to Ranthambore for tiger sightings?",
    answer:
      "Bandhavgarh has India's highest tiger density, and many wildlife specialists rate its overall sighting odds even higher than Ranthambore's, though both are excellent.",
  },
  {
    question: "How many days should I plan for Bandhavgarh?",
    answer:
      "2 days allows for 3 to 4 safaris across different zones, which meaningfully improves your chances of a strong sighting.",
  },
  {
    question: "Can this be combined with Khajuraho?",
    answer:
      "Yes, this is one of the most common pairings — the temple complex at Khajuraho is a short flight or drive from Bandhavgarh.",
  },
] as const;
