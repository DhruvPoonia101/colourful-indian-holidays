import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const goaAttractions: CityCard[] = [
  {
    name: "North Goa Beaches",
    tagline: "Beach Shacks & Nightlife",
    description:
      "Anjuna, Baga and Arambol — North Goa's more energetic stretch of coast, known for beach shacks, water sports and Goa's famous nightlife.",
    href: "/destinations/goa",
    image: "/images/destinations/Goa.webp",
    imageAlt: "Coastal beach and cliffs, North Goa",
  },
  {
    name: "South Goa Beaches",
    tagline: "Quieter & More Upscale",
    description:
      "Palolem, Colva and Agonda — calmer, less crowded stretches of coast with a more relaxed pace and a stronger concentration of upscale resorts.",
    href: "/destinations/goa",
    image: "/images/destinations/Goa-2.webp",
    imageAlt: "Turquoise water and palm-lined beach, South Goa",
  },
  {
    name: "Old Goa Churches",
    tagline: "UNESCO Portuguese Heritage",
    description:
      "A cluster of 16th and 17th century churches and cathedrals, including the Basilica of Bom Jesus, reflecting 450 years of Portuguese colonial rule.",
    href: "/destinations/goa",
    image: "/images/destinations/Goa-3.webp",
    imageAlt: "Sunset over the Goan coastline",
  },
] as const;

export const goaQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "November to February" },
  { label: "Ideal Trip Length", value: "4 – 6 Days" },
  { label: "Main Gateway", value: "Goa (GOI / GOX)" },
  { label: "Languages Spoken", value: "English, Konkani, Hindi" },
] as const;

export const goaGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Goa is served by two airports — the older Dabolim Airport (GOI) and the newer Manohar International Airport (GOX) — both with regular flights from Delhi, Mumbai and other major Indian cities.",
  },
  {
    title: "Typical Entry Route",
    description:
      "Most international travellers add Goa as a beach extension onto a wider India itinerary, flying in from Delhi or Mumbai rather than treating it as a standalone entry point.",
  },
  {
    title: "North vs South",
    description:
      "North and South Goa have distinctly different characters — we help you choose based on whether you want a livelier or a quieter stay, and can also split your time between both.",
  },
] as const;

export const goaHighlights: Highlight[] = [
  {
    title: "450 Years of Portuguese Heritage",
    description:
      "Goa was a Portuguese colony until 1961, and its churches, architecture and even cuisine reflect a genuinely different colonial history from the rest of India.",
  },
  {
    title: "India's Most Relaxed Beach Culture",
    description:
      "Beach shacks, sunset views and a noticeably slower pace make Goa the natural place to unwind after a more demanding heritage-focused circuit.",
  },
  {
    title: "A Distinct Goan Cuisine",
    description:
      "Goan food blends Portuguese and Konkani influences — vindaloo, xacuti and fresh seafood are genuinely different from cuisine anywhere else on a typical India itinerary.",
  },
  {
    title: "Two Very Different Coasts",
    description:
      "North Goa's energy and South Goa's quieter upscale resorts mean the state suits both party-seeking and relaxation-focused travellers.",
  },
  {
    title: "A Genuine Change of Pace",
    description:
      "For travellers coming from a busy Rajasthan or Golden Triangle circuit, Goa's beach-and-relax rhythm offers real contrast rather than more sightseeing.",
  },
] as const;

export const goaRelatedDestinations: CityCard[] = [
  {
    name: "Kerala",
    tagline: "Backwaters & Beaches",
    description: "India's other major coastal destination, further south, with a distinctly different landscape.",
    href: "/destinations/kerala",
    image: "/images/destinations/alleppey-backwaters.webp",
    imageAlt: "Houseboat on the Kerala backwaters",
  },
  {
    name: "Mumbai",
    tagline: "India's Financial Capital",
    description: "The most common gateway before or after a Goa trip.",
    href: "/destinations/mumbai",
    image: "/images/destinations/Mumbai.webp",
    imageAlt: "Mumbai skyline",
  },
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "A natural pairing for travellers combining heritage sightseeing with beach time.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
] as const;

export const goaFaqs: FaqItem[] = [
  {
    question: "Should we stay in North or South Goa?",
    answer:
      "It depends on what you want — North Goa suits travellers looking for nightlife, water sports and a livelier scene, while South Goa offers a quieter, more upscale and relaxed stay. Many travellers split a few nights between both.",
  },
  {
    question: "How many days should we plan for Goa?",
    answer:
      "4 to 6 days is typical for a proper beach break with time to also see Old Goa's churches and enjoy a few different beaches without feeling rushed.",
  },
  {
    question: "Is Goa a good add-on to a Rajasthan or Golden Triangle trip?",
    answer:
      "Yes — it's one of the most popular ways to close out a longer India itinerary, offering a genuine change of pace after a more demanding heritage-focused circuit.",
  },
  {
    question: "What's the best time of year to visit?",
    answer:
      "November through February offers the most comfortable weather — dry, warm and free of monsoon rain, which runs roughly June through September.",
  },
] as const;
