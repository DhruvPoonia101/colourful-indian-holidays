import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const kazirangaAttractions: CityCard[] = [
  {
    name: "Rhino Safari",
    tagline: "Two-Thirds of the World's Population",
    description: "Jeep safaris across the Brahmaputra floodplain, with genuinely strong odds of seeing the great one-horned rhinoceros in open grassland.",
    href: "/destinations/kaziranga",
    image: "/images/destinations/kaziranga-rhino.webp",
    imageAlt: "Rhino Safari — photo coming soon",
  },
  {
    name: "Elephant-Back Safari",
    tagline: "A Quieter Way Through the Grass",
    description: "A traditional elephant-back safari through Kaziranga's tall grassland, moving quietly enough to approach grazing rhinos closely.",
    href: "/destinations/kaziranga",
    image: "/images/destinations/kaziranga-safari.webp",
    imageAlt: "Elephant-Back Safari — photo coming soon",
  },
] as const;

export const kazirangaQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "November to April" },
  { label: "Ideal Trip Length", value: "2 Days" },
  { label: "Main Gateway", value: "Guwahati (GAU)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const kazirangaGettingThere: GettingThereItem[] = [
  {
    title: "Main Gateway",
    description:
      "Guwahati (GAU) is the nearest major airport, with onward road transfers to reach the destination itself. We arrange a private driver for the full journey.",
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

export const kazirangaHighlights: Highlight[] = [
  {
    title: "The Great One-Horned Rhino",
    description:
      "Kaziranga is home to around two-thirds of the world's entire population — nowhere else offers comparable odds of seeing one in the wild.",
  },
  {
    title: "A UNESCO World Heritage Site",
    description:
      "Recognised for the outstanding value of its floodplain ecosystem along the Brahmaputra River.",
  },
  {
    title: "Also a Tiger Reserve",
    description:
      "Kaziranga has one of the highest tiger densities in India too, though sightings are less predictable than the park's rhinos.",
  },
  {
    title: "Genuine Biodiversity",
    description:
      "Wild water buffalo, swamp deer, and hundreds of bird species share the grassland alongside the rhinos and tigers.",
  },
] as const;

export const kazirangaRelatedDestinations: CityCard[] = [
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

export const kazirangaFaqs: FaqItem[] = [
  {
    question: "How likely am I to see a rhino at Kaziranga?",
    answer:
      "Very likely — with roughly two-thirds of the world's one-horned rhino population here, sightings on a safari are close to guaranteed, unlike many other wildlife encounters.",
  },
  {
    question: "Is Kaziranga easy to combine with the rest of India?",
    answer:
      "It requires its own flight to Assam, so it's usually planned as either a dedicated Northeast India trip or a deliberate extension to a wider Indian itinerary, rather than a quick add-on.",
  },
  {
    question: "Jeep safari or elephant safari — which is better?",
    answer:
      "Both offer a genuinely different experience — jeep safaris cover more ground, while elephant-back safaris move quietly enough to get remarkably close to rhinos in the grassland. We often recommend trying both if time allows.",
  },
] as const;
