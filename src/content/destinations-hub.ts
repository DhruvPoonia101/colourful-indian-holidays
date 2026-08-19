import type { CityCard } from "@/components/destinations/CityGrid";
import type { MoreDestination } from "@/components/destinations/MoreDestinationsList";

export const flagshipDestinations: CityCard[] = [
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "Forts, palaces and desert citadels across six essential cities.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "Delhi",
    tagline: "India's Capital",
    description: "Mughal forts, colonial avenues, and the gateway to North India.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
  {
    name: "Agra",
    tagline: "Home of the Taj Mahal",
    description: "The Taj Mahal, Agra Fort, and the heart of the Golden Triangle.",
    href: "/destinations/agra",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
  },
  {
    name: "Varanasi",
    tagline: "Spiritual India",
    description: "The evening Ganga Aarti and India's most significant pilgrimage city.",
    href: "/destinations/varanasi",
    image: "/images/destinations/varanasi-evening-ganges-aarti.webp",
    imageAlt: "Evening Ganga Aarti ceremony in Varanasi",
  },
] as const;

export const wildlifeDestinations: CityCard[] = [
  {
    name: "Ranthambore",
    tagline: "Tiger Country",
    description: "One of India's best wild tiger-sighting parks, close to Jaipur.",
    href: "/destinations/rajasthan/ranthambore",
    image: "/images/destinations/ranthambore-tiger.webp",
    imageAlt: "Wild tiger at Ranthambore National Park",
  },
  {
    name: "Sariska",
    tagline: "Rajasthan's Second Reserve",
    description: "A tiger reintroduction success story among ancient temple ruins.",
    href: "/destinations/sariska",
    image: "/images/destinations/sariska.webp",
    imageAlt: "Forest landscape at Sariska Tiger Reserve",
  },
  {
    name: "Bandhavgarh",
    tagline: "Highest Tiger Density",
    description: "India's best tiger-sighting odds, set around an ancient fort.",
    href: "/destinations/bandhavgarh",
    image: "/images/destinations/bandhavgarh.webp",
    imageAlt: "Safari jeeps at Bandhavgarh Tiger Reserve",
  },
  {
    name: "Kaziranga",
    tagline: "The One-Horned Rhino",
    description: "Two-thirds of the world's one-horned rhino population, in Assam.",
    href: "/destinations/kaziranga",
    image: "/images/destinations/kaziranga.webp",
    imageAlt: "One-horned rhino and safari jeeps at Kaziranga National Park",
  },
] as const;

export const beachDestinations: CityCard[] = [
  {
    name: "Tamil Nadu Beaches",
    tagline: "Temples on the Shore",
    description: "The Mahabalipuram Shore Temple, Marina Beach, and Kanyakumari.",
    href: "/destinations/tamil-nadu-beaches",
    image: "/images/destinations/tamil-nadu-beaches.webp",
    imageAlt: "Aerial view of the Tamil Nadu coastline with fishing boats",
  },
  {
    name: "Gujarat Beaches",
    tagline: "Quiet Colonial Coast",
    description: "Portuguese-era Diu and the sacred shore temple at Somnath.",
    href: "/destinations/gujarat-beaches",
    image: "/images/destinations/gujarat-beaches.webp",
    imageAlt: "Gujarat coastline at dusk",
  },
  {
    name: "Maharashtra Beaches",
    tagline: "Mumbai's Getaway Coast",
    description: "Alibaug's forts and the quieter Konkan coast at Ganpatipule.",
    href: "/destinations/maharashtra-beaches",
    image: "/images/destinations/maharashtra-beaches.webp",
    imageAlt: "Aerial view of the Maharashtra Konkan coastline",
  },
  {
    name: "Andaman Islands",
    tagline: "India's Tropical Frontier",
    description: "Radhanagar Beach, coral reefs, and Havelock Island.",
    href: "/destinations/andaman-islands",
    image: "/images/destinations/andaman-islands.webp",
    imageAlt: "Palm-fringed beach in the Andaman Islands",
  },
] as const;

export const moreDestinations: MoreDestination[] = [
  { name: "Leh & Ladakh", href: "/destinations/leh-ladakh" },
  { name: "Srinagar & Kashmir", href: "/destinations/srinagar-kashmir" },
  { name: "Himachal (Manali & Shimla)", href: "/destinations/himachal" },
  { name: "Rishikesh & Haridwar", href: "/destinations/rishikesh-haridwar" },
  { name: "Darjeeling", href: "/destinations/darjeeling" },
  { name: "Goa", href: "/destinations/goa" },
  { name: "Mumbai", href: "/destinations/mumbai" },
  { name: "Kerala", href: "/destinations/kerala" },
  { name: "Madurai", href: "/destinations/madurai" },
  { name: "Chennai", href: "/destinations/chennai" },
  { name: "Amritsar", href: "/destinations/amritsar" },
  { name: "Kathmandu", href: "/destinations/kathmandu" },
  { name: "Pokhara", href: "/destinations/pokhara" },
  { name: "Chitwan", href: "/destinations/chitwan" },
  { name: "Nagarkot", href: "/destinations/nagarkot" },
  { name: "Lumbini", href: "/destinations/lumbini" },
  { name: "Everest Region", href: "/destinations/everest-region" },
  { name: "Thimphu", href: "/destinations/thimphu" },
  { name: "Paro", href: "/destinations/paro" },
  { name: "Punakha", href: "/destinations/punakha" },
] as const;
