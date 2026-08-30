import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const jaisalmerAttractions: CityCard[] = [
  {
    name: "Sam Sand Dunes",
    tagline: "Camel Safari at Sunset",
    description:
      "Rolling desert dunes on the edge of the Thar Desert, a short drive from the city — the classic setting for a camel safari and sunset views over the sand.",
    href: "/destinations/rajasthan/jaisalmer",
    image: "/images/destinations/jaisalmer-desert.webp",
    imageAlt: "Camel safari at sunset, Sam Sand Dunes near Jaisalmer",
  },
  {
    name: "Jaisalmer Fort",
    tagline: "A Living Fort",
    description:
      "One of the very few 'living forts' left in the world — around a quarter of the old city's population still lives within its walls, in centuries-old havelis.",
    href: "/destinations/rajasthan/jaisalmer",
    image: "/images/destinations/jaisalmer-fort.webp",
    imageAlt: "Jaisalmer Fort ramparts overlooking the old city",
  },
  {
    name: "Patwon Ki Haveli",
    tagline: "Merchant Mansions",
    description:
      "A cluster of ornately carved sandstone mansions built by wealthy merchant families in the 19th century, among the finest haveli architecture in Rajasthan.",
    href: "/destinations/rajasthan/jaisalmer",
    image: "/images/destinations/jaisalmer-patwon-ki-haveli.webp",
    imageAlt: "Patwon Ki Haveli, Jaisalmer",
  },
  {
    name: "Gadisar Lake",
    tagline: "A Desert Oasis",
    description:
      "An artificial lake built in the 14th century as the city's original water source, now ringed by small temples and shrines — a peaceful stop away from the fort.",
    href: "/destinations/rajasthan/jaisalmer",
    image: "/images/destinations/jaisalmer-gadisar-lake.webp",
    imageAlt: "Gadisar Lake, Jaisalmer",
  },
] as const;

export const jaisalmerQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October – February" },
  { label: "Ideal Trip Length", value: "2 Days" },
  { label: "Main Gateway", value: "Jaisalmer (JSA)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const jaisalmerGettingThere: GettingThereItem[] = [
  {
    title: "Main Gateway",
    description:
      "Jaisalmer has a small domestic airport with limited seasonal flights; most travellers arrive by overnight train or road from Jodhpur (around 5–6 hours).",
  },
  {
    title: "Typical Entry Route",
    description:
      "Jaisalmer sits at the far western edge of the standard Rajasthan circuit, so it's usually added as an extension after Jodhpur for travellers with extra time.",
  },
  {
    title: "Desert Camp Stays",
    description:
      "Many itineraries include a night at a desert camp near the Sam Sand Dunes, combining a camel or jeep safari with dinner and a cultural performance under the stars.",
  },
] as const;

export const jaisalmerHighlights: Highlight[] = [
  {
    title: "The Golden City",
    description:
      "Jaisalmer's honey-coloured sandstone glows almost amber at sunset, giving the city its nickname and a completely different visual character from Jaipur or Jodhpur.",
  },
  {
    title: "A Fort You Can Sleep In",
    description:
      "Unlike Rajasthan's other forts, Jaisalmer's is genuinely inhabited — with guesthouses, shops and restaurants built into the same centuries-old sandstone.",
  },
  {
    title: "A UNESCO Conservation Concern",
    description:
      "Because the fort is lived-in rather than preserved behind ropes, its long-term structural stability is a real, ongoing concern — worth knowing why some areas may be under restoration.",
  },
  {
    title: "The Furthest Point of the Circuit",
    description:
      "Jaisalmer's desert setting and distance from the other main cities make it feel like a genuinely different trip within the same Rajasthan itinerary.",
  },
] as const;

export const jaisalmerRelatedDestinations: CityCard[] = [
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "The wider region Jaisalmer sits within, at its westernmost edge.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "Delhi",
    tagline: "India's Capital",
    description: "The most common international gateway before continuing on to Rajasthan.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
  {
    name: "Agra",
    tagline: "Home of the Taj Mahal",
    description: "Easily combined with Rajasthan on a wider North India route.",
    href: "/destinations/agra",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
  },
] as const;

export const jaisalmerFaqs: FaqItem[] = [
  {
    question: "How many days should I spend in Jaisalmer?",
    answer:
      "2 days is typical — a day for the fort and havelis in the city, and an overnight desert camp near the Sam Sand Dunes for the camel safari and sunset.",
  },
  {
    question: "Is Jaisalmer worth the extra travel time?",
    answer:
      "For travellers with the extra days, yes — it's a genuinely different experience from the rest of Rajasthan, with its living fort and desert landscape. For shorter trips, it's usually the first place we suggest cutting.",
  },
  {
    question: "Can I stay inside Jaisalmer Fort?",
    answer:
      "Yes, several guesthouses operate within the fort walls, though UNESCO and conservation groups have raised concerns about the strain this puts on the structure. We're happy to discuss options both inside and outside the fort.",
  },
  {
    question: "What's the best time of year to visit?",
    answer:
      "October through February — Jaisalmer's desert climate brings extreme summer heat, so the cooler winter months are considerably more comfortable for both the fort and the desert safari.",
  },
];
