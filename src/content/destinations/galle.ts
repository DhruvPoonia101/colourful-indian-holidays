import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

// Sri Lanka destination content, written 23 Nov 2026. Seasons follow
// Intrepid Travel's Sri Lanka best-time guide; UNESCO years from the
// World Heritage List; Yala closure dates from Newswire.lk (Sep 2026).

export const galleAttractions: CityCard[] = [
  {
    name: "Galle Fort & Lighthouse",
    tagline: "A Walled Town on the Sea",
    description:
      "Walk the ramparts around the headland to the white lighthouse, best at sunset.",
    href: "/destinations/galle",
    image: "/images/destinations/galle-fort-lighthouse.webp",
    imageAlt: "Galle Fort lighthouse on the ramparts",
  },
  {
    name: "The Ramparts",
    tagline: "Sunset Walks",
    description:
      "The fort walls wrap around the old town, with views over the sea and the cricket ground.",
    href: "/destinations/galle",
    image: "/images/destinations/galle-fort-ramparts.webp",
    imageAlt: "The clock tower and ramparts of Galle Fort",
  },
  {
    name: "Mirissa & Coconut Tree Hill",
    tagline: "Beaches East of Galle",
    description:
      "A crescent beach about an hour away, with a palm-topped headland and seasonal whale-watching trips.",
    href: "/destinations/galle",
    image: "/images/destinations/mirissa-beach-coconut-hill.webp",
    imageAlt: "Coconut Tree Hill above the beach at Mirissa",
  },
  {
    name: "Stilt Fishermen",
    tagline: "A South-Coast Tradition",
    description:
      "Fishermen perched on poles in the surf near Koggala and Ahangama are one of Sri Lanka's best-known images.",
    href: "/destinations/galle",
    image: "/images/destinations/koggala-stilt-fishermen.webp",
    imageAlt: "Stilt fishermen in the sea near Koggala",
  },
] as const;

export const galleQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "December – April" },
  { label: "Ideal Trip Length", value: "1 – 3 Days" },
  { label: "UNESCO Status", value: "Old Town of Galle (1988)" },
  { label: "Languages Spoken", value: "Sinhala, Tamil, English" },
] as const;

export const galleGettingThere: GettingThereItem[] = [
  {
    title: "From Colombo",
    description:
      "Around 2 hours on the Southern Expressway, making Galle an easy last stop before a flight home.",
  },
  {
    title: "From Yala or Ella",
    description:
      "About 3 to 4 hours from Yala and 4 to 5 hours from Ella, following the coast for the final stretch.",
  },
  {
    title: "Getting Around Galle",
    description:
      "The fort is small and best explored on foot; your driver takes you on to the beaches nearby.",
  },
] as const;

export const galleHighlights: Highlight[] = [
  {
    title: "A UNESCO-Listed Fort Town",
    description:
      "The Old Town of Galle and its Fortifications has been on UNESCO's list since 1988.",
  },
  {
    title: "The Start of the Beach Coast",
    description:
      "Unawatuna, Koggala, Ahangama and Mirissa are all close by.",
  },
  {
    title: "Boutique Hotels and Cafés",
    description:
      "Restored colonial houses inside the walls make some of the island's most characterful places to stay.",
  },
  {
    title: "Whale Watching Nearby",
    description:
      "Boats from Mirissa run in the drier months, with a chance of blue whales.",
  },
  {
    title: "An Easy Last Stop",
    description:
      "Two hours to Colombo by expressway, so it fits neatly before an international flight.",
  },
] as const;

export const galleRelatedDestinations: CityCard[] = [
  {
    name: "Colombo",
    tagline: "Gateway City & Sea Front",
    description:
      "Sri Lanka's commercial capital, with temples, markets and a sea-front promenade.",
    href: "/destinations/colombo",
    image: "/images/destinations/colombo-galle-face-green-sunset.webp",
    imageAlt: "Galle Face Green at sunset on the Colombo sea front",
  },
  {
    name: "Yala National Park",
    tagline: "Leopard Safaris",
    description:
      "Jeep safaris for leopards, elephants and sloth bears on the south-east coast.",
    href: "/destinations/yala",
    image: "/images/destinations/yala-leopard.webp",
    imageAlt: "A Sri Lankan leopard drinking at a waterhole",
  },
  {
    name: "Ella",
    tagline: "Nine Arch Bridge & Hill Train",
    description:
      "Easy hikes, the Nine Arch Bridge and the end of the scenic hill train.",
    href: "/destinations/ella",
    image: "/images/destinations/ella-nine-arch-bridge-train.webp",
    imageAlt: "A blue train crossing the Nine Arch Bridge near Ella",
  },
] as const;

export const galleWhereToStay: GettingThereItem[] = [
  {
    title: "Inside Galle Fort",
    description:
      "Restored colonial houses and boutique hotels within the walls, walkable to everything.",
  },
  {
    title: "Unawatuna, Ahangama & Mirissa",
    description:
      "Beach hotels along the coast, 10 minutes to an hour from the fort.",
  },
] as const;

export const galleFaqs: FaqItem[] = [
  {
    question: "How long should I spend in Galle?",
    answer:
      "One night is enough to walk the fort at sunset and explore in the morning. Add one to three nights if you want beach time at Unawatuna or Mirissa.",
  },
  {
    question: "When is whale-watching season near Galle?",
    answer:
      "Boats from Mirissa mostly run in the drier months, roughly December to April. Sightings are never guaranteed, and sea conditions decide whether trips go out.",
  },
  {
    question: "Is Galle a good place to swim?",
    answer:
      "The fort itself is for walking, not swimming. For the beach, Unawatuna is a few minutes away and Mirissa about an hour; both are best from December to April.",
  },
  {
    question: "Can we finish our trip in Galle?",
    answer:
      "Yes. Galle is about two hours from Colombo on the expressway, and the airport is a little further, so it works well as the last stop before a flight home.",
  },
  {
    question: "Is Galle Fort free to enter?",
    answer:
      "Yes. Galle Fort is a living town, and you can walk in and around it freely. Some museums and sites inside charge small entry fees.",
  },
  {
    question: "What is the best beach near Galle?",
    answer:
      "Unawatuna is the closest, a few minutes away. Mirissa, about an hour east, has a lively beach and whale watching, while Ahangama and Weligama are popular for surfing.",
  },
] as const;
