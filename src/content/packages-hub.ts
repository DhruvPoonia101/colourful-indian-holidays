import type { CityCard } from "@/components/destinations/CityGrid";
import type { MoreDestination } from "@/components/destinations/MoreDestinationsList";

export const featuredPackages: CityCard[] = [
  {
    name: "Golden Triangle Tours",
    tagline: "Delhi – Agra – Jaipur",
    description: "The classic first-time India route, covering the Taj Mahal and Rajasthan's capital.",
    href: "/packages/golden-triangle-tours",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
  },
  {
    name: "Rajasthan Tours",
    tagline: "Land of Kings",
    description: "Forts, palaces and desert citadels across Jaipur, Udaipur, Jodhpur and beyond.",
    href: "/packages/rajasthan-tours",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "North India Tours",
    tagline: "Delhi & Beyond",
    description: "Mughal monuments, colonial avenues, and the natural start of most India itineraries.",
    href: "/packages/north-india-tours",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
  {
    name: "Wildlife Tours",
    tagline: "Tiger Safaris",
    description: "Ranthambore, Sariska, Bandhavgarh and Kaziranga's one-horned rhinos.",
    href: "/packages/wildlife-tours",
    image: "/images/destinations/ranthambore-tiger.webp",
    imageAlt: "Wild tiger at Ranthambore National Park",
  },
] as const;

export const morePackages: MoreDestination[] = [
  { name: "South India Tours", href: "/packages/south-india-tours" },
  { name: "Kerala Tours", href: "/packages/kerala-tours" },
  { name: "Kashmir & Ladakh Tours", href: "/packages/kashmir-ladakh-tours" },
  { name: "Taj Mahal Tours", href: "/packages/taj-mahal-tours" },
  { name: "Nepal Tours", href: "/packages/nepal-tours" },
  { name: "Bhutan Tours", href: "/packages/bhutan-tours" },
  { name: "India & Nepal Tours", href: "/packages/india-nepal-tours" },
  { name: "India, Nepal & Bhutan", href: "/packages/india-nepal-bhutan-tours" },
  { name: "Nepal & Bhutan Tours", href: "/packages/nepal-bhutan-tours" },
  { name: "Delhi – Agra – Jaipur", href: "/packages/golden-triangle-tours/delhi-agra-jaipur" },
  { name: "Delhi – Agra – Jaipur – Udaipur", href: "/packages/golden-triangle-tours/delhi-agra-jaipur-udaipur" },
  { name: "Rajasthan Highlights", href: "/packages/rajasthan-tours/highlights" },
  { name: "North India Highlights", href: "/packages/north-india-tours/highlights" },
  { name: "India Highlights", href: "/packages/india-highlights-tours" },
  { name: "3–5 Days", href: "/packages/duration/3-5-days" },
  { name: "6–9 Days", href: "/packages/duration/6-9-days" },
  { name: "10–14 Days", href: "/packages/duration/10-14-days" },
  { name: "15+ Days", href: "/packages/duration/15-plus-days" },
] as const;
