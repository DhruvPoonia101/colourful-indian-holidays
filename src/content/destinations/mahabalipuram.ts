import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const mahabalipuramAttractions: CityCard[] = [
  {
    name: "The Shore Temple",
    tagline: "UNESCO World Heritage Site",
    description:
      "A 7th-century granite temple standing directly at the edge of the Bay of Bengal, carved by Pallava dynasty sculptors and among the oldest structural stone temples in South India.",
    href: "/destinations/mahabalipuram",
    image: "/images/destinations/chennai.webp",
    imageAlt: "The Shore Temple, Mahabalipuram",
  },
  {
    name: "Mahabalipuram Beach",
    tagline: "Bay of Bengal Coastline",
    description:
      "A quieter stretch of coast than Chennai's Marina Beach, with the Shore Temple visible along the shoreline and a noticeably slower pace.",
    href: "/destinations/mahabalipuram",
    image: "/images/destinations/mahabalipuram-beach.webp",
    imageAlt: "Mahabalipuram beach on the Bay of Bengal",
  },
] as const;

export const mahabalipuramQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "November to February" },
  { label: "Ideal Trip Length", value: "1 Day (or overnight)" },
  { label: "Main Gateway", value: "Chennai (MAA)" },
  { label: "Languages Spoken", value: "English, Tamil" },
] as const;

export const mahabalipuramGettingThere: GettingThereItem[] = [
  {
    title: "From Chennai",
    description:
      "Mahabalipuram sits roughly an hour and a half south of Chennai by road along the coastal East Coast Road — an easy half-day or full-day trip with a private driver.",
  },
  {
    title: "Staying Overnight",
    description:
      "Some travellers prefer an overnight stay in Mahabalipuram itself rather than a rushed day trip, particularly if combining it with time on the beach.",
  },
  {
    title: "Typical Pairing",
    description:
      "Almost always visited as a day trip from Chennai, though it also works as a quieter first or last stop before continuing to Pondicherry.",
  },
] as const;

export const mahabalipuramHighlights: Highlight[] = [
  {
    title: "A UNESCO World Heritage Site",
    description:
      "The Group of Monuments at Mahabalipuram, including the Shore Temple, are collectively recognised by UNESCO for their significance to Dravidian architecture.",
  },
  {
    title: "Stone Carved Directly by the Sea",
    description:
      "Unlike temples built from quarried and transported stone, many of Mahabalipuram's monuments are carved directly from existing rock outcrops on site.",
  },
  {
    title: "The Five Rathas",
    description:
      "A set of five monolithic rock-cut temples, each carved from a single stone and shaped like a chariot (ratha), representing distinct architectural styles.",
  },
  {
    title: "Arjuna's Penance",
    description:
      "An enormous open-air rock relief, one of the largest of its kind in the world, depicting scenes from Hindu mythology across a natural rock face.",
  },
  {
    title: "An Easy, Low-Effort Add-On",
    description:
      "Its short distance from Chennai means Mahabalipuram fits easily into an itinerary without needing a dedicated multi-day stop.",
  },
] as const;

export const mahabalipuramRelatedDestinations: CityCard[] = [
  {
    name: "Chennai",
    tagline: "Gateway to Tamil Nadu",
    description: "The most common gateway before or after a Mahabalipuram day trip.",
    href: "/destinations/chennai",
    image: "/images/destinations/chennai.webp",
    imageAlt: "Shore Temple, Mahabalipuram, near Chennai",
  },
  {
    name: "Pondicherry",
    tagline: "French Colonial Heritage",
    description: "A natural next stop further down the Tamil Nadu coast.",
    href: "/destinations/pondicherry",
    image: "/images/destinations/pondicherry-beach.webp",
    imageAlt: "Rocky seafront promenade, Pondicherry",
  },
  {
    name: "Tamil Nadu Beaches",
    tagline: "South India's Coastline",
    description: "More of Tamil Nadu's coastline for travellers extending their time by the sea.",
    href: "/destinations/tamil-nadu-beaches",
    image: "/images/destinations/tamil-nadu-beaches.webp",
    imageAlt: "Tamil Nadu coastline",
  },
] as const;

export const mahabalipuramFaqs: FaqItem[] = [
  {
    question: "Is Mahabalipuram worth a full day or just a few hours?",
    answer:
      "A full day lets you properly see the Shore Temple, the Five Rathas, and Arjuna's Penance without rushing — though a focused half-day is possible if your schedule is tight.",
  },
  {
    question: "Can we combine Mahabalipuram with Pondicherry in one trip?",
    answer:
      "Yes — Pondicherry sits about 2 hours further down the coast from Mahabalipuram, and the two are commonly combined into a single coastal itinerary from Chennai.",
  },
  {
    question: "Is the Shore Temple still an active place of worship?",
    answer:
      "It's primarily a protected heritage monument today rather than an active daily worship site, though its historical and religious significance remains part of what makes it worth visiting.",
  },
  {
    question: "What's the best time of day to visit?",
    answer:
      "Early morning is ideal — cooler temperatures, softer light for photos, and fewer crowds than later in the day, particularly during peak season.",
  },
] as const;
