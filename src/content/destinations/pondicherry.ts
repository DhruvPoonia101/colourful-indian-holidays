import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const pondicherryAttractions: CityCard[] = [
  {
    name: "The Promenade & Rock Beach",
    tagline: "A Rocky Seafront Walk",
    description:
      "A boulder-lined seafront promenade running along Pondicherry's coast, closed to traffic in the evenings and popular for walks at sunrise and sunset.",
    href: "/destinations/pondicherry",
    image: "/images/destinations/pondicherry-beach.webp",
    imageAlt: "Rocky seafront promenade, Pondicherry",
  },
  {
    name: "The French Quarter",
    tagline: "Colonial Streets & Mustard-Yellow Villas",
    description:
      "Tree-lined streets of colonial-era French villas, painted in mustard yellow and white, with bilingual street signs still reading in both French and Tamil.",
    href: "/destinations/pondicherry",
    image: "/images/destinations/pondicherry-french-quarter.webp",
    imageAlt: "A colonial-era street in the French Quarter, Pondicherry",
  },
  {
    name: "Auroville",
    tagline: "The Experimental Township",
    description:
      "An experimental international township a short drive from Pondicherry, built around the golden geodesic Matrimandir and a philosophy of collective living.",
    href: "/destinations/pondicherry",
    image: "/images/destinations/auroville-matrimandir.webp",
    imageAlt: "Aerial view of the Matrimandir, Auroville",
  },
] as const;

export const pondicherryQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "November to February" },
  { label: "Ideal Trip Length", value: "2 – 3 Days" },
  { label: "Main Gateway", value: "Chennai (MAA)" },
  { label: "Languages Spoken", value: "English, Tamil, French" },
] as const;

export const pondicherryGettingThere: GettingThereItem[] = [
  {
    title: "From Chennai",
    description:
      "Pondicherry sits roughly 3–4 hours south of Chennai by road along the coastal East Coast Road, often combined with a stop in Mahabalipuram along the way.",
  },
  {
    title: "Local Airport",
    description:
      "Puducherry Airport has limited connectivity, so most international travellers fly into Chennai and continue by road rather than flying directly.",
  },
  {
    title: "Typical Pairing",
    description:
      "Most commonly visited as part of a Tamil Nadu coastal circuit alongside Chennai and Mahabalipuram, rather than as a standalone destination.",
  },
] as const;

export const pondicherryHighlights: Highlight[] = [
  {
    title: "A Genuinely Different Colonial Legacy",
    description:
      "Pondicherry was a French colony until 1954, considerably later than most of India's British-administered regions, giving it a distinct architectural and cultural identity.",
  },
  {
    title: "The French Quarter's Preserved Streetscape",
    description:
      "Colonial villas, church facades and street names still reflect French administration, maintained with a level of preservation unusual for a former colonial quarter in India.",
  },
  {
    title: "A Café & Slow-Travel Culture",
    description:
      "Pondicherry has a noticeably relaxed, café-going pace compared with most Indian cities — a place for lingering rather than a packed sightseeing schedule.",
  },
  {
    title: "Auroville's Unusual Philosophy",
    description:
      "Founded in 1968 as an experimental international community, Auroville remains a genuinely unusual place to visit, built around ideals of collective living beyond nationality or religion.",
  },
  {
    title: "A Different Register From the Rest of Tamil Nadu",
    description:
      "For travellers who've spent time in Chennai or Madurai's temple heritage, Pondicherry's French-Tamil blend offers a real change of pace and character.",
  },
] as const;

export const pondicherryRelatedDestinations: CityCard[] = [
  {
    name: "Mahabalipuram",
    tagline: "UNESCO Rock-Cut Monuments",
    description: "A natural stop between Chennai and Pondicherry along the coastal road.",
    href: "/destinations/mahabalipuram",
    image: "/images/destinations/chennai.webp",
    imageAlt: "The Shore Temple, Mahabalipuram",
  },
  {
    name: "Chennai",
    tagline: "Gateway to Tamil Nadu",
    description: "The most common gateway before or after a Pondicherry trip.",
    href: "/destinations/chennai",
    image: "/images/destinations/marina-beach-chennai.webp",
    imageAlt: "Marina Beach at sunrise, Chennai",
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

export const pondicherryFaqs: FaqItem[] = [
  {
    question: "How many days should we plan for Pondicherry?",
    answer:
      "2 to 3 days lets you properly explore the French Quarter, walk the Promenade, and visit Auroville without feeling rushed.",
  },
  {
    question: "Can we visit Auroville as a day trip?",
    answer:
      "Yes — Auroville sits about 30–45 minutes from central Pondicherry, and most visitors combine a Matrimandir viewing with a few hours exploring on a half-day trip.",
  },
  {
    question: "Is Pondicherry very different from the rest of Tamil Nadu?",
    answer:
      "Yes — its French colonial history, distinct architecture, and noticeably slower, café-oriented pace set it apart from Chennai or Madurai's more traditional South Indian character.",
  },
  {
    question: "Can this be combined with Mahabalipuram and Chennai in one trip?",
    answer:
      "Yes — this is the most common way to visit. All three sit along the same coastal road, making a natural 4–5 day South India coastal circuit.",
  },
] as const;
