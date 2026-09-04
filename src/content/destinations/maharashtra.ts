import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const maharashtraAttractions: CityCard[] = [
  {
    name: "Ajanta & Ellora Caves",
    tagline: "UNESCO Rock-Cut Cave Temples",
    description:
      "Two separate UNESCO World Heritage cave complexes near Aurangabad — Ajanta's Buddhist paintings and sculpture, and Ellora's Hindu, Buddhist and Jain caves carved into a single cliff face.",
    href: "/destinations/maharashtra",
    image: "/images/destinations/maharashtra-ajanta-caves.webp",
    imageAlt: "A rock-cut stupa hall inside the Ajanta Caves, Maharashtra",
  },
  {
    name: "Pune",
    tagline: "Maharashtra's Cultural Capital",
    description:
      "A historic Maratha-era city with the Aga Khan Palace and Shaniwar Wada fort, alongside a genuinely active modern cultural and academic scene.",
    href: "/destinations/maharashtra",
    image: "/images/destinations/maharashtra-csmt.webp",
    imageAlt: "Pune, Maharashtra",
  },
  {
    name: "Shirdi",
    tagline: "One of India's Most-Visited Pilgrimage Sites",
    description:
      "The town associated with Sai Baba, a spiritual figure revered across religious lines, drawing millions of pilgrims annually to the Sai Baba Temple.",
    href: "/destinations/maharashtra",
    image: "/images/destinations/maharashtra-csmt.webp",
    imageAlt: "Shirdi, Maharashtra",
  },
] as const;

export const maharashtraQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October to March" },
  { label: "Ideal Trip Length", value: "4 – 6 Days" },
  { label: "Main Gateway", value: "Mumbai (BOM) / Pune (PNQ)" },
  { label: "Languages Spoken", value: "English, Marathi, Hindi" },
] as const;

export const maharashtraGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Mumbai (BOM) is the main international gateway; Pune (PNQ) and Aurangabad have their own domestic airports for more direct access to inland sites.",
  },
  {
    title: "Typical Route",
    description:
      "Most itineraries connect Mumbai to Aurangabad for Ajanta and Ellora, then on to Pune, with Shirdi added as a day trip or short stop given its relatively central location.",
  },
  {
    title: "Cave Visiting Tips",
    description:
      "Ajanta and Ellora are roughly 100km apart and typically visited on separate days — each complex alone easily fills half a day given the number of caves involved.",
  },
] as const;

export const maharashtraHighlights: Highlight[] = [
  {
    title: "Two of India's Finest Rock-Cut Monuments",
    description:
      "Ajanta and Ellora are considered among the most significant rock-cut cave complexes in the world, carved over centuries by generations of Buddhist, Hindu and Jain artisans.",
  },
  {
    title: "Ajanta's Painted Buddhist Caves",
    description:
      "Ajanta's caves preserve some of the oldest surviving Buddhist paintings in India, offering a rare, direct window into ancient Indian art.",
  },
  {
    title: "Ellora's Kailasa Temple",
    description:
      "Carved entirely from a single rock face, the Kailasa Temple at Ellora is one of the largest monolithic structures in the world — excavated top-down rather than built up.",
  },
  {
    title: "A Living Pilgrimage Site at Shirdi",
    description:
      "Shirdi remains an actively significant pilgrimage destination for millions of Indians annually, offering genuine insight into contemporary Indian devotional practice.",
  },
  {
    title: "A Natural Extension of Mumbai",
    description:
      "Given Mumbai's role as most travellers' entry point, Maharashtra's inland heritage sites work well as a direct extension before or after time in the city.",
  },
] as const;

export const maharashtraRelatedDestinations: CityCard[] = [
  {
    name: "Mumbai",
    tagline: "India's City of Dreams",
    description: "The most common gateway before or after exploring Maharashtra's inland sites.",
    href: "/destinations/mumbai",
    image: "/images/destinations/Mumbai.webp",
    imageAlt: "Chhatrapati Shivaji Maharaj Terminus, Mumbai",
  },
  {
    name: "Maharashtra Beaches",
    tagline: "Maharashtra's Coastline",
    description: "The state's coastal side, pairing naturally with an inland Maharashtra circuit.",
    href: "/destinations/maharashtra-beaches",
    image: "/images/destinations/maharashtra-beaches.webp",
    imageAlt: "Maharashtra coastline",
  },
  {
    name: "Goa",
    tagline: "Beaches & Portuguese Heritage",
    description: "A natural extension further down the coast for travellers with more time.",
    href: "/destinations/goa",
    image: "/images/destinations/Goa.webp",
    imageAlt: "Coastal beach and cliffs, North Goa",
  },
] as const;

export const maharashtraFaqs: FaqItem[] = [
  {
    question: "Can we visit both Ajanta and Ellora in one day?",
    answer:
      "It's possible but rushed — most travellers visit them on separate days given the roughly 100km distance between them and the sheer number of caves at each site worth seeing properly.",
  },
  {
    question: "How many days should we plan for Maharashtra's inland circuit?",
    answer:
      "4 to 6 days lets you properly cover Ajanta, Ellora, Pune and Shirdi without rushing between them, on top of any time spent in Mumbai itself.",
  },
  {
    question: "Is Shirdi worth visiting if we're not specifically religious?",
    answer:
      "Yes — beyond its religious significance, Shirdi offers a genuine, unfiltered look at how contemporary Indian pilgrimage actually functions, which many travellers find worthwhile regardless of personal faith.",
  },
  {
    question: "Can this be combined with Mumbai and the Maharashtra coast in one trip?",
    answer:
      "Yes — Mumbai is the natural gateway for both the inland heritage circuit and Maharashtra's beaches, making it possible to combine all three with enough time.",
  },
] as const;
