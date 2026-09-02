import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const kanhaAttractions: CityCard[] = [
  {
    name: "Kanha Tiger Safari",
    tagline: "The Inspiration for The Jungle Book",
    description:
      "One of India's largest and best-managed tiger reserves, its sal forests and open meadows said to have inspired Rudyard Kipling's setting for The Jungle Book.",
    href: "/destinations/kanha",
    image: "/images/destinations/kanha-tiger-safari.webp",
    imageAlt: "A tiger in the grasslands of Kanha National Park",
  },
  {
    name: "Bamni Dadar (Sunset Point)",
    tagline: "Wildlife Viewing at Dusk",
    description:
      "A raised plateau within the park known for sightings of gaur (Indian bison) and barasingha against a dramatic sunset backdrop.",
    href: "/destinations/kanha",
    image: "/images/destinations/bamni-dadar-sunset.webp",
    imageAlt: "Sunset over the forest at Bamni Dadar, Kanha",
  },
  {
    name: "Kanha Museum",
    tagline: "Conservation & Natural History",
    description:
      "A small on-site museum covering the park's ecology, conservation history, and the barasingha recovery programme that brought the species back from near-extinction.",
    href: "/destinations/kanha",
    image: "/images/destinations/kanha-museum.webp",
    imageAlt: "Wildlife exhibits inside the Kanha Museum",
  },
] as const;

export const kanhaQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October to June" },
  { label: "Ideal Trip Length", value: "2 – 3 Days" },
  { label: "Main Gateway", value: "Jabalpur (JLR)" },
  { label: "Park Closure", value: "July – September (monsoon)" },
] as const;

export const kanhaGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Jabalpur Airport (JLR) is the nearest airport, roughly 3–4 hours by road from the park, with flights from Delhi and Mumbai.",
  },
  {
    title: "By Road",
    description:
      "A private driver covers the route from Jabalpur or Nagpur comfortably, and this is also how most travellers connect Kanha with other Central India parks.",
  },
  {
    title: "Typical Pairing",
    description:
      "Often combined with Bandhavgarh or Pench as part of a dedicated Central India wildlife circuit, given their relative proximity to one another.",
  },
] as const;

export const kanhaHighlights: Highlight[] = [
  {
    title: "The Inspiration Behind The Jungle Book",
    description:
      "Kanha's landscape is widely believed to have influenced Rudyard Kipling's setting, giving a safari here a genuine literary dimension alongside the wildlife.",
  },
  {
    title: "A Barasingha Conservation Success Story",
    description:
      "Kanha is credited with saving the hard-ground barasingha (swamp deer) from near-extinction, now found here in greater numbers than almost anywhere else.",
  },
  {
    title: "Genuinely Varied Terrain",
    description:
      "Sal forest, open grassland meadows and bamboo groves give Kanha a more visually varied safari experience than many single-terrain reserves.",
  },
  {
    title: "Well-Managed Safari Infrastructure",
    description:
      "Kanha is consistently rated among India's best-run national parks, with well-organised zones and experienced naturalist guides.",
  },
  {
    title: "A Genuine Central India Wildlife Circuit",
    description:
      "Paired with Bandhavgarh and Pench, Kanha forms part of one of India's strongest wildlife-focused regions, distinct from Ranthambore's desert setting.",
  },
] as const;

export const kanhaRelatedDestinations: CityCard[] = [
  {
    name: "Bandhavgarh",
    tagline: "Tiger Territory",
    description: "The most commonly paired Central India park, known for high tiger density.",
    href: "/destinations/bandhavgarh",
    image: "/images/destinations/bandhavgarh-tiger.webp",
    imageAlt: "Bengal tiger in Bandhavgarh National Park",
  },
  {
    name: "Pench",
    tagline: "Another Jungle Book Connection",
    description: "A neighbouring reserve also linked to Kipling, forming a natural circuit with Kanha.",
    href: "/destinations/pench",
    image: "/images/destinations/pench-tiger-safari.webp",
    imageAlt: "A tiger at a waterhole in Pench National Park",
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

export const kanhaFaqs: FaqItem[] = [
  {
    question: "How many safaris should we plan at Kanha?",
    answer:
      "3 to 4 safaris across 2 to 3 days gives a good chance of sightings while covering different zones of the park, though tiger sightings are never guaranteed at any reserve.",
  },
  {
    question: "Is Kanha better than Bandhavgarh for tiger sightings?",
    answer:
      "Both are excellent, but Bandhavgarh generally has a higher tiger density, while Kanha offers more varied terrain and additional wildlife like barasingha and gaur. Many travellers visit both as part of one circuit rather than choosing between them.",
  },
  {
    question: "When is the park closed?",
    answer:
      "Kanha National Park closes annually during the monsoon, typically July through September, to allow the ecosystem to recover and protect roads from damage.",
  },
  {
    question: "Can Kanha be combined with Khajuraho?",
    answer:
      "Yes — both sit in Madhya Pradesh, making it possible to combine wildlife at Kanha with Khajuraho's UNESCO temple architecture in a single Central India itinerary.",
  },
] as const;
