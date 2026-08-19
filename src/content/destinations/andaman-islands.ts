import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const andamanIslandsAttractions: CityCard[] = [
  {
    name: "Radhanagar Beach",
    tagline: "Rated Among Asia's Best",
    description: "A wide, white-sand beach on Havelock Island with clear turquoise water, consistently ranked among the top beaches in Asia.",
    href: "/destinations/andaman-islands",
    image: "/images/destinations/radhanagar-beach.webp",
    imageAlt: "Radhanagar Beach",
  },
  {
    name: "Havelock Island",
    tagline: "Coral Reefs & Diving",
    description: "The Andamans' most developed island for tourism, with some of India's best snorkelling and diving directly offshore.",
    href: "/destinations/andaman-islands",
    image: "/images/destinations/havelock-island.webp",
    imageAlt: "Havelock Island",
  },
] as const;

export const andamanIslandsQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October to May" },
  { label: "Ideal Trip Length", value: "5 – 7 Days" },
  { label: "Main Gateway", value: "Port Blair (IXZ)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const andamanIslandsGettingThere: GettingThereItem[] = [
  {
    title: "Main Gateway",
    description:
      "Port Blair (IXZ) is the nearest major airport, with onward road transfers to reach the destination itself. We arrange a private driver for the full journey.",
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

export const andamanIslandsHighlights: Highlight[] = [
  {
    title: "Coral Reefs & Snorkelling",
    description:
      "Clear water and healthy coral make the Andamans one of the best places in India for snorkelling and diving, accessible even to first-timers.",
  },
  {
    title: "Cellular Jail National Memorial",
    description:
      "A former British colonial prison in Port Blair, now a museum documenting India's independence movement — a genuinely moving stop.",
  },
  {
    title: "Ross Island",
    description:
      "A former British administrative headquarters, now atmospheric ruins reclaimed by jungle, a short boat ride from Port Blair.",
  },
  {
    title: "Remote, Unspoiled Beaches",
    description:
      "Far fewer visitors than mainland Indian beach destinations, with long stretches of coastline still genuinely undeveloped.",
  },
  {
    title: "A Distinct Island Culture",
    description:
      "The islands' population and culture differ noticeably from mainland India, shaped by their remote geography and complex colonial history.",
  },
] as const;

export const andamanIslandsRelatedDestinations: CityCard[] = [
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

export const andamanIslandsFaqs: FaqItem[] = [
  {
    question: "How many days do I need in the Andamans?",
    answer:
      "5 to 7 days lets you properly split time between Port Blair and Havelock Island, with time for both Cellular Jail and genuine beach and diving time.",
  },
  {
    question: "Do I need a permit to visit?",
    answer:
      "Indian nationals and most foreign visitors receive a permit automatically on arrival at Port Blair airport; requirements can vary by nationality, so we confirm current rules as part of planning your trip.",
  },
  {
    question: "Is this a standalone trip or an add-on?",
    answer:
      "Given the flight time from the mainland, the Andamans are usually planned as their own dedicated trip rather than a quick add-on to another Indian itinerary.",
  },
  {
    question: "Is it good for non-divers too?",
    answer:
      "Yes — Radhanagar Beach and the islands' natural scenery are worth the trip on their own, even without diving or snorkelling.",
  },
] as const;
