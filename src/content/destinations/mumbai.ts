import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const mumbaiAttractions: CityCard[] = [
  {
    name: "Chhatrapati Shivaji Maharaj Terminus",
    tagline: "UNESCO World Heritage Station",
    description:
      "A Victorian Gothic railway station completed in 1888, still in daily use as one of India's busiest stations and a UNESCO World Heritage Site.",
    href: "/destinations/mumbai",
    image: "/images/destinations/Mumbai.webp",
    imageAlt: "Chhatrapati Shivaji Maharaj Terminus, Mumbai",
  },
  {
    name: "Marine Drive",
    tagline: "The Queen's Necklace",
    description:
      "A sweeping curve of coastline lit up along its full length at night, giving it the nickname 'Queen's Necklace' — best seen at sunset.",
    href: "/destinations/mumbai",
    image: "/images/destinations/Mumbai-2.webp",
    imageAlt: "Marine Drive skyline at dusk, Mumbai",
  },
  {
    name: "Bandra-Worli Sea Link",
    tagline: "Modern Mumbai's Landmark",
    description:
      "A cable-stayed bridge connecting Bandra to Worli across the Arabian Sea — a striking symbol of the city's modern infrastructure.",
    href: "/destinations/mumbai",
    image: "/images/destinations/Mumbai-3.webp",
    imageAlt: "Bandra-Worli Sea Link at sunset, Mumbai",
  },
] as const;

export const mumbaiQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "November to February" },
  { label: "Ideal Trip Length", value: "2 – 3 Days" },
  { label: "Main Gateway", value: "Mumbai (BOM)" },
  { label: "Languages Spoken", value: "English, Hindi, Marathi" },
] as const;

export const mumbaiGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Chhatrapati Shivaji Maharaj International Airport (BOM) is one of India's busiest and best-connected airports, with direct flights from most major international hubs.",
  },
  {
    title: "Typical Entry Route",
    description:
      "Many international travellers use Mumbai as a gateway before continuing to Goa, Kerala or a wider India itinerary, given its strong international flight connectivity.",
  },
  {
    title: "Getting Around",
    description:
      "Mumbai's traffic is notoriously heavy — we build realistic travel times between sights into your itinerary and provide a private driver throughout your stay.",
  },
] as const;

export const mumbaiHighlights: Highlight[] = [
  {
    title: "India's Financial & Entertainment Capital",
    description:
      "Home to the Bombay Stock Exchange and Bollywood, Mumbai has a distinct energy and pace unlike anywhere else in India.",
  },
  {
    title: "Colonial-Era Architecture",
    description:
      "Victorian Gothic and Art Deco buildings across South Mumbai reflect the city's history as a major British colonial trading port.",
  },
  {
    title: "The Gateway of India",
    description:
      "A monumental arch built to commemorate King George V's 1911 visit, now Mumbai's most photographed landmark and the departure point for boats to Elephanta Island.",
  },
  {
    title: "A Genuine Food City",
    description:
      "From street-food staples like vada pav and pav bhaji to some of India's most acclaimed fine dining, Mumbai's food scene is considered among the country's best.",
  },
  {
    title: "A Natural Gateway City",
    description:
      "Strong international flight connections make Mumbai a practical starting or ending point for a wider India itinerary, particularly toward Goa or Kerala.",
  },
] as const;

export const mumbaiRelatedDestinations: CityCard[] = [
  {
    name: "Goa",
    tagline: "Beaches & Portuguese Heritage",
    description: "A natural next stop from Mumbai — beach time and colonial history further down the coast.",
    href: "/destinations/goa",
    image: "/images/destinations/Goa.webp",
    imageAlt: "Coastal beach and cliffs, North Goa",
  },
  {
    name: "Kerala",
    tagline: "Backwaters & Beaches",
    description: "India's other major coastal destination, reachable via a short domestic flight.",
    href: "/destinations/kerala",
    image: "/images/destinations/alleppey-backwaters.webp",
    imageAlt: "Houseboat on the Kerala backwaters",
  },
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "A natural pairing for travellers combining Mumbai's energy with Rajasthan's heritage.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
] as const;

export const mumbaiFaqs: FaqItem[] = [
  {
    question: "How many days should we plan for Mumbai?",
    answer:
      "2 to 3 days is usually enough to see the main sights — Gateway of India, CSMT, Marine Drive and a food tour — without needing longer unless you have a specific interest like Bollywood studio visits.",
  },
  {
    question: "Is Mumbai a good starting point for an India trip?",
    answer:
      "Yes — its strong international flight connections make it a practical entry point, particularly for travellers continuing on to Goa or Kerala afterward.",
  },
  {
    question: "Can we visit Elephanta Island as a day trip?",
    answer:
      "Yes — ferries run regularly from the Gateway of India to Elephanta Island, home to ancient rock-cut cave temples, and the round trip comfortably fits into a half-day.",
  },
  {
    question: "Is Mumbai's traffic really as bad as people say?",
    answer:
      "It can be heavy, particularly during rush hour — we factor realistic travel times into your itinerary and provide a private driver throughout, so this isn't something you need to plan around yourself.",
  },
] as const;
