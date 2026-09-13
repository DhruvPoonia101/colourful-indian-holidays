import type { CityCard } from "@/components/destinations/CityGrid";

/**
 * Card set for the Honeymoon Tours hub. All experiences here are their own
 * dedicated /experiences pages, written specifically for honeymooners —
 * deliberately never linking to the /tours pages that cover the same
 * cities for general sightseeing. All 6 are now built.
 */
export const honeymoonExperiences: CityCard[] = [
  {
    name: "Udaipur Honeymoon",
    tagline: "The City of Lakes, Built for Two · 4 Days",
    description: "A private sunset boat ride, a heritage palace suite, and consistently our most-requested honeymoon city.",
    href: "/experiences/udaipur-honeymoon",
    image: "/images/destinations/udaipur-lake-palace.webp",
    imageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
  },
  {
    name: "Taj Mahal Honeymoon",
    tagline: "A Monument Built for Love · 3 Days",
    description: "Sunrise at the world's most famous monument to love, paired with a private candlelit dinner.",
    href: "/experiences/taj-mahal-honeymoon",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
  },
  {
    name: "Rajasthan Palace Honeymoon",
    tagline: "Two Palace Cities, Built for Two · 7 Days",
    description: "Jaipur and Udaipur only, spent entirely in heritage palace hotels with candlelit evenings.",
    href: "/experiences/rajasthan-palace-honeymoon",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "Kerala Backwaters Honeymoon",
    tagline: "Houseboats & Palm-Lined Canals",
    description: "A private houseboat cruise through Alleppey's backwaters, India's classic tropical honeymoon.",
    href: "/experiences/kerala-backwaters-honeymoon",
    image: "/images/destinations/alleppey-backwaters.webp",
    imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
  },
  {
    name: "Kashmir Honeymoon",
    tagline: "Dal Lake, Houseboats & Snow-Capped Peaks",
    description: "Srinagar's houseboats and Mughal gardens, with the Himalayas as a backdrop throughout.",
    href: "/experiences/kashmir-honeymoon",
    image: "/images/destinations/Srinagar.webp",
    imageAlt: "Tulip gardens with the Himalayas behind, Srinagar, Kashmir",
  },
  {
    name: "Andaman Beach Honeymoon",
    tagline: "White Sand & Turquoise Water",
    description: "India's only true tropical island escape, with beaches and reefs unlike anywhere else in the country.",
    href: "/experiences/andaman-beach-honeymoon",
    image: "/images/destinations/andaman-islands.webp",
    imageAlt: "White sand beach and turquoise water, Andaman Islands",
  },
];
