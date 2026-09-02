import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const penchAttractions: CityCard[] = [
  {
    name: "Pench Tiger Safari",
    tagline: "The Original Jungle Book Setting",
    description:
      "The reserve most directly linked to Rudyard Kipling's The Jungle Book, its teak and bamboo forests home to a healthy tiger population alongside leopards and wild dogs.",
    href: "/destinations/pench",
    image: "/images/destinations/pench-tiger-safari.webp",
    imageAlt: "A tiger at a waterhole in Pench National Park",
  },
  {
    name: "Pench River & Reservoir",
    tagline: "The Park's Namesake Waterway",
    description:
      "The Pench River and its reservoir run through the heart of the park, drawing wildlife to its banks and offering some of the reserve's most scenic safari routes.",
    href: "/destinations/pench",
    image: "/images/destinations/pench-river.webp",
    imageAlt: "The Pench River winding through the national park",
  },
  {
    name: "Sillari Gate & Buffer Zone",
    tagline: "Quieter Safari Routes",
    description:
      "Pench's buffer zones offer a quieter, less crowded safari alternative to the core zone, with a good chance of sightings and considerably fewer vehicles.",
    href: "/destinations/pench",
    image: "/images/destinations/pench-sillari-gate.webp",
    imageAlt: "Sillari Gate entrance, Pench National Park",
  },
] as const;

export const penchQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October to June" },
  { label: "Ideal Trip Length", value: "2 – 3 Days" },
  { label: "Main Gateway", value: "Nagpur (NAG)" },
  { label: "Park Closure", value: "July – September (monsoon)" },
] as const;

export const penchGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Nagpur Airport (NAG) is the nearest airport, roughly 2 hours by road from the park, with regular flights from Delhi and Mumbai.",
  },
  {
    title: "By Road",
    description:
      "A private driver covers the route from Nagpur comfortably, and this is also the most common way to connect Pench with Kanha as part of a wider circuit.",
  },
  {
    title: "Typical Pairing",
    description:
      "Most often combined with Kanha given their relative proximity, forming a dedicated Central India wildlife and Jungle Book-themed circuit.",
  },
] as const;

export const penchHighlights: Highlight[] = [
  {
    title: "The Most Direct Jungle Book Connection",
    description:
      "Pench is widely considered the specific setting Rudyard Kipling had in mind, with the park's characters and geography closely mirroring his descriptions.",
  },
  {
    title: "A Healthy, Growing Tiger Population",
    description:
      "Pench has seen consistent tiger population growth in recent years, making it an increasingly reliable reserve for sightings.",
  },
  {
    title: "Genuinely Varied Wildlife",
    description:
      "Beyond tigers, Pench supports leopards, wild dogs (dhole), sloth bears and over 285 recorded bird species, appealing to wildlife photographers with broader interests.",
  },
  {
    title: "Less Crowded Than Some Reserves",
    description:
      "Pench sees fewer visitors than Bandhavgarh or Ranthambore, offering a quieter safari experience without necessarily sacrificing sighting quality.",
  },
  {
    title: "Completes the Central India Circuit",
    description:
      "Paired with Kanha and Bandhavgarh, Pench rounds out one of India's strongest wildlife-focused regions for a dedicated multi-park safari trip.",
  },
] as const;

export const penchRelatedDestinations: CityCard[] = [
  {
    name: "Kanha",
    tagline: "The Jungle Book's Real-World Setting",
    description: "The most natural pairing, given their shared Kipling connection and proximity.",
    href: "/destinations/kanha",
    image: "/images/destinations/kanha-tiger-safari.webp",
    imageAlt: "A tiger in the grasslands of Kanha National Park",
  },
  {
    name: "Bandhavgarh",
    tagline: "Tiger Territory",
    description: "Another Central India reserve, known for particularly high tiger density.",
    href: "/destinations/bandhavgarh",
    image: "/images/destinations/bandhavgarh-tiger.webp",
    imageAlt: "Bengal tiger in Bandhavgarh National Park",
  },
  {
    name: "Khajuraho",
    tagline: "UNESCO Temple Sculpture",
    description: "A cultural pairing for travellers combining wildlife with heritage in Madhya Pradesh.",
    href: "/destinations/khajuraho",
    image: "/images/destinations/khajuraho-kandariya-mahadeva.webp",
    imageAlt: "Kandariya Mahadeva Temple at sunset, Khajuraho",
  },
] as const;

export const penchFaqs: FaqItem[] = [
  {
    question: "Is Pench really the setting for The Jungle Book?",
    answer:
      "Pench is widely regarded as the reserve most closely matching Kipling's descriptions and geography, though the story itself is fictional and Kipling never actually visited India's forests before writing it — the connection is based on landscape and documented local research rather than a confirmed visit.",
  },
  {
    question: "How does Pench compare to Kanha or Bandhavgarh?",
    answer:
      "Pench sees fewer visitors than both, offers a quieter safari experience, and has a growing tiger population — a good complement to a circuit that also includes the higher-density reserves.",
  },
  {
    question: "How many days should we plan for Pench?",
    answer:
      "2 to 3 days allows for multiple safaris across both core and buffer zones, improving your overall chances of sightings.",
  },
  {
    question: "Can Pench be combined with Kanha in one trip?",
    answer:
      "Yes — this is the most common pairing, given their shared Jungle Book connection and manageable road distance between them.",
  },
] as const;
