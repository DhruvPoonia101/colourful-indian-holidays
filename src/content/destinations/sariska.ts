import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const sariskaAttractions: CityCard[] = [
  {
    name: "Tiger Safari",
    tagline: "A Conservation Success Story",
    description: "A jeep safari through dry deciduous forest and rocky hills, home to Rajasthan's second major tiger population after a successful reintroduction programme.",
    href: "/destinations/sariska",
    image: "/images/destinations/sariska-tiger.webp",
    imageAlt: "Tiger Safari",
  },
  {
    name: "Sariska Fort & Temple Ruins",
    tagline: "History Within the Park",
    description: "Centuries-old temple ruins and a hilltop fort scattered through the reserve, adding genuine history to the wildlife experience.",
    href: "/destinations/sariska",
    image: "/images/destinations/sariska-fort.webp",
    imageAlt: "Sariska Fort & Temple Ruins",
  },
] as const;

export const sariskaQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October to June" },
  { label: "Ideal Trip Length", value: "1 Day" },
  { label: "Main Gateway", value: "Jaipur (JAI)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const sariskaGettingThere: GettingThereItem[] = [
  {
    title: "Main Gateway",
    description:
      "Jaipur (JAI) is the nearest major airport, with onward road transfers to reach the destination itself. We arrange a private driver for the full journey.",
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

export const sariskaHighlights: Highlight[] = [
  {
    title: "A Genuine Comeback Story",
    description:
      "After losing its entire tiger population to poaching, Sariska's careful reintroduction programme is one of India's clearer conservation successes.",
  },
  {
    title: "Ancient Temple Ruins",
    description:
      "Scattered through the park are centuries-old temple and fort ruins, giving safaris here a historical layer most tiger reserves don't have.",
  },
  {
    title: "Close to Jaipur and Delhi",
    description:
      "A straightforward drive from both cities, making Sariska one of the easiest tiger reserves to fit into a Rajasthan or Golden Triangle itinerary.",
  },
  {
    title: "Beyond Tigers",
    description:
      "Leopards, striped hyenas, jackals and over 200 bird species also call the park home.",
  },
] as const;

export const sariskaRelatedDestinations: CityCard[] = [
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

export const sariskaFaqs: FaqItem[] = [
  {
    question: "How likely am I to see a tiger at Sariska?",
    answer:
      "Sightings are less frequent than at Ranthambore, given the smaller reintroduced population, though the park's rocky terrain and ruins still make for a rewarding safari even without a tiger sighting.",
  },
  {
    question: "Can Sariska be a day trip from Jaipur?",
    answer:
      "Yes, this is exactly how most of our guests visit — a single-day safari added onto a wider Rajasthan itinerary rather than a separate overnight stay.",
  },
  {
    question: "Is Sariska closer to Delhi or Jaipur?",
    answer:
      "Roughly equidistant from both, which is part of why it works well as an add-on whether you're starting a Rajasthan trip from Jaipur or from Delhi.",
  },
] as const;
