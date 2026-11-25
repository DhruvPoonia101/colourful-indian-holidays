import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";

export const fleetCards: CityCard[] = [
  {
    name: "Sedan",
    tagline: "1 – 4 Travellers",
    description: "A comfortable, air-conditioned sedan with a private driver — ideal for couples or solo travellers.",
    href: "/car-rental/sedan",
    image: "/images/destinations/car-sedan.webp",
    imageAlt: "White sedan car for rental",
  },
  {
    name: "SUV",
    tagline: "1 – 6 Travellers",
    description: "More space and ground clearance for longer drives and less predictable road conditions.",
    href: "/car-rental/suv",
    image: "/images/destinations/car-suv.webp",
    imageAlt: "White SUV for rental",
  },
  {
    name: "Tempo Traveller",
    tagline: "5 – 12 Travellers",
    description: "The standard choice for small groups and families travelling together on one itinerary.",
    href: "/car-rental/tempo-traveller",
    image: "/images/destinations/car-tempo-traveller.webp",
    imageAlt: "Tempo Traveller minibus for group rental",
  },
  {
    name: "Luxury Cars",
    tagline: "Premium Travel",
    description: "A higher standard of vehicle and driver for travellers who want extra comfort throughout.",
    href: "/car-rental/luxury-cars",
    image: "/images/destinations/car-luxury.webp",
    imageAlt: "Luxury sedan for private rental",
  },
  {
    name: "Coaches",
    tagline: "13+ Travellers",
    description: "For larger groups, corporate trips, and family reunions travelling together.",
    href: "/car-rental/coaches",
    image: "/images/destinations/car-coach.webp",
    imageAlt: "Coach bus for group rental",
  },
] as const;

export const carRentalHighlights: Highlight[] = [
  {
    title: "Professional, Vetted Drivers",
    description:
      "Every driver we work with is experienced on long-distance Indian road trips, not just city driving — genuinely important on routes like Delhi to Jaipur.",
  },
  {
    title: "One Driver, Your Whole Trip",
    description:
      "The same driver stays with you for the length of your itinerary wherever possible, rather than switching vehicles and drivers at every city.",
  },
  {
    title: "Air-Conditioned Throughout",
    description:
      "Every vehicle in our fleet is air-conditioned as standard, genuinely necessary for most of the year across North India and Rajasthan.",
  },
  {
    title: "No Self-Drive",
    description:
      "We only offer vehicles with a private driver included — Indian road conditions and traffic patterns make self-driving genuinely difficult for most international visitors.",
  },
] as const;

/**
 * What every car-and-driver booking includes, confirmed by Dhruv on
 * 25 Nov 2026. Prices are quoted on request for each route (no published
 * rate), so pages show this list and a quote prompt instead of a figure.
 */
export const carHireIncluded: string[] = [
  "Fuel for the whole trip",
  "Toll taxes",
  "Parking charges",
  "State taxes and interstate permits",
  "The driver's food and overnight stay allowance",
];

export const carHireIncludedFaq = {
  question: "What is included in the car hire price?",
  answer:
    "Fuel, toll taxes, parking, state taxes and the driver's food and overnight stay allowance are all included, so none of these are paid separately during the trip. Prices are on request: send us your route, dates and group size and we'll quote the full cost.",
};
