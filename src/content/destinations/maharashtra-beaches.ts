import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const maharashtraBeachesAttractions: CityCard[] = [
  {
    name: "Alibaug Beach",
    tagline: "Mumbai's Weekend Escape",
    description: "A relaxed coastal town a short ferry or drive from Mumbai, dotted with Maratha-era forts including the sea fort of Kolaba.",
    href: "/destinations/maharashtra-beaches",
    image: "/images/destinations/alibaug-beach.webp",
    imageAlt: "Alibaug Beach",
  },
  {
    name: "Ganpatipule Beach",
    tagline: "The Konkan Coast",
    description: "A quieter stretch of coastline south of Alibaug, home to a well-known Ganpati temple that sits directly on the beach.",
    href: "/destinations/maharashtra-beaches",
    image: "/images/destinations/ganpatipule-beach.webp",
    imageAlt: "Ganpatipule Beach",
  },
] as const;

export const maharashtraBeachesQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October to February" },
  { label: "Ideal Trip Length", value: "2 Days" },
  { label: "Main Gateway", value: "Mumbai (BOM)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const maharashtraBeachesGettingThere: GettingThereItem[] = [
  {
    title: "Main Gateway",
    description:
      "Mumbai (BOM) is the nearest major airport, with onward road transfers to reach the destination itself. We arrange a private driver for the full journey.",
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

export const maharashtraBeachesHighlights: Highlight[] = [
  {
    title: "Kolaba Fort",
    description:
      "A 17th-century sea fort near Alibaug, reachable on foot at low tide — a genuinely atmospheric spot at sunset.",
  },
  {
    title: "Konkan Cuisine",
    description:
      "The coast has its own distinct seafood and coconut-based cooking style, worth building time around.",
  },
  {
    title: "An Easy Mumbai Add-On",
    description:
      "Close enough to Mumbai for a 2-day trip without a flight, making it a practical way to add coastal time to a wider Maharashtra itinerary.",
  },
  {
    title: "The Ganpatipule Temple",
    description:
      "A self-manifested (swayambhu) Ganpati idol, believed to be around 1,600 years old, set directly on the beach.",
  },
  {
    title: "Fewer International Visitors",
    description:
      "This coast is mostly a domestic weekend-trip destination, which means a more local, less touristy atmosphere.",
  },
] as const;

export const maharashtraBeachesRelatedDestinations: CityCard[] = [
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "Forts, palaces and desert citadels — the natural pairing for almost any India trip.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "Maharashtra",
    tagline: "Beyond Mumbai",
    description: "The state's inland side — Ajanta and Ellora Caves, Pune and Shirdi.",
    href: "/destinations/maharashtra",
    image: "/images/destinations/maharashtra-ajanta-caves.webp",
    imageAlt: "A rock-cut stupa hall inside the Ajanta Caves, Maharashtra",
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

export const maharashtraBeachesFaqs: FaqItem[] = [
  {
    question: "How do I get to Alibaug from Mumbai?",
    answer:
      "By ferry across Mumbai Harbour followed by a short drive, or entirely by road — the ferry route is faster and more scenic when conditions allow.",
  },
  {
    question: "Is this a good add-on to a Mumbai stay?",
    answer:
      "Yes, this is exactly how most travellers use it — a 1 to 2 night coastal extension to a Mumbai city stay rather than a standalone trip.",
  },
  {
    question: "How far is Ganpatipule from Alibaug?",
    answer:
      "Around 4 to 5 hours by road, making it more practical to choose one or the other unless you have a longer Konkan coast itinerary in mind.",
  },
] as const;
