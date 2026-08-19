import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const gujaratBeachesAttractions: CityCard[] = [
  {
    name: "Diu Beach",
    tagline: "Portuguese Colonial Coast",
    description: "Quiet beaches backed by colonial-era forts and churches, a legacy of nearly 450 years of Portuguese rule.",
    href: "/destinations/gujarat-beaches",
    image: "/images/destinations/diu-beach.webp",
    imageAlt: "Diu Beach — photo coming soon",
  },
  {
    name: "Somnath Beach",
    tagline: "A Temple on the Shore",
    description: "One of the twelve Jyotirlinga shrines to Shiva, rebuilt multiple times through history, standing directly on the Arabian Sea coast.",
    href: "/destinations/gujarat-beaches",
    image: "/images/destinations/somnath-beach.webp",
    imageAlt: "Somnath Beach — photo coming soon",
  },
] as const;

export const gujaratBeachesQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "November to February" },
  { label: "Ideal Trip Length", value: "2 Days" },
  { label: "Main Gateway", value: "Diu (DIU)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const gujaratBeachesGettingThere: GettingThereItem[] = [
  {
    title: "Main Gateway",
    description:
      "Diu (DIU) is the nearest major airport, with onward road transfers to reach the destination itself. We arrange a private driver for the full journey.",
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

export const gujaratBeachesHighlights: Highlight[] = [
  {
    title: "Diu Fort",
    description:
      "A 16th-century Portuguese fort overlooking the sea, with cannons, a lighthouse and sweeping coastal views still intact.",
  },
  {
    title: "Portuguese Heritage Architecture",
    description:
      "Diu's old town still has colonial-era churches and houses, giving it a genuinely different character from the rest of Gujarat.",
  },
  {
    title: "The Somnath Temple's History",
    description:
      "Destroyed and rebuilt numerous times over a thousand years, the current structure dates to the 1950s and remains one of India's most significant pilgrimage sites.",
  },
  {
    title: "Gujarati Seafood",
    description:
      "The coast has its own distinct seafood traditions, worth seeking out alongside Gujarat's better-known vegetarian cuisine.",
  },
  {
    title: "A Quieter Alternative",
    description:
      "Genuinely uncrowded even in peak season, which is rare for an accessible Indian coastline this historically significant.",
  },
] as const;

export const gujaratBeachesRelatedDestinations: CityCard[] = [
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

export const gujaratBeachesFaqs: FaqItem[] = [
  {
    question: "How many days do I need for Diu and Somnath?",
    answer:
      "2 days is enough to see both comfortably, since they're a short drive apart along the same stretch of coast.",
  },
  {
    question: "Is Diu different from the rest of Gujarat?",
    answer:
      "Yes — as a former Portuguese territory (separate from British India until 1961), Diu has its own distinct colonial architecture, more relaxed pace, and different liquor laws from the rest of Gujarat, which is a dry state.",
  },
  {
    question: "Is Somnath just a pilgrimage site, or worth visiting generally?",
    answer:
      "Both — it's a major active pilgrimage site, but the temple's dramatic history and shoreline setting make it worth visiting even for travellers not there for religious reasons.",
  },
] as const;
