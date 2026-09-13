import type { CityCard } from "@/components/destinations/CityGrid";

export const rajasthanTourVariants: CityCard[] = [
  {
    name: "Rajasthan Tours",
    tagline: "The Classic Circuit · 8 Days",
    description: "Jaipur, Jodhpur, Udaipur and Pushkar — the standard first-time introduction to the state.",
    href: "/tours/rajasthan-tours-classic",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "Jaipur City Tour",
    tagline: "The Pink City in Depth · 4 Days",
    description: "A focused look at Jaipur alone, for travellers who'd rather see one city well than rush through several.",
    href: "/tours/jaipur-city-tour",
    image: "/images/destinations/jaipur-hawa-mahal.webp",
    imageAlt: "Hawa Mahal, Jaipur",
  },
  {
    name: "Rajasthan Culture & Heritage Trail",
    tagline: "8 Days",
    description: "Jodhpur, Jaisalmer and Udaipur — forts, carved havelis and living craft traditions.",
    href: "/tours/rajasthan-culture-heritage-trail",
    image: "/images/destinations/jaisalmer-patwon-ki-haveli.webp",
    imageAlt: "Ornately carved facade of Patwon Ki Haveli, Jaisalmer",
  },
  {
    name: "Rajasthan Wildlife Safari",
    tagline: "8 Days",
    description: "Jaipur, Ranthambore and Udaipur — two full days of tiger safaris alongside forts and lakes.",
    href: "/tours/rajasthan-wildlife-safari",
    image: "/images/destinations/ranthambore-tiger.webp",
    imageAlt: "A wild tiger at Ranthambore National Park",
  },
  {
    name: "Grand Rajasthan Circuit",
    tagline: "The Full State, Six Cities · 12 Days",
    description: "Jaipur, Jodhpur, Jaisalmer, Ranthambore, Udaipur and Pushkar — the most complete route we build.",
    href: "/tours/grand-rajasthan-circuit",
    image: "/images/destinations/jaisalmer-desert.webp",
    imageAlt: "Camel caravan crossing the Thar Desert dunes near Jaisalmer",
  },
];

/**
 * City-specific tour cards for the Rajasthan hub's "Destinations Covered"
 * section. Deliberately NOT linked to the /destinations pages — each of
 * these will become its own dedicated tour itinerary page under /tours,
 * with full day-by-day content still to be written. Until then, these
 * links fall through to the /tours "coming soon" placeholder.
 */
export const rajasthanCityTours: CityCard[] = [
  {
    name: "Udaipur Tour",
    tagline: "City of Lakes",
    description: "The Lake Palace floating on Lake Pichola, and the City Palace above it.",
    href: "/tours/udaipur-tour",
    image: "/images/destinations/udaipur-lake-palace.webp",
    imageAlt: "Lake Palace floating on Lake Pichola, Udaipur",
  },
  {
    name: "Jodhpur Tour",
    tagline: "The Blue City",
    description: "Mehrangarh Fort towering over a maze of indigo-washed old-town streets.",
    href: "/tours/jodhpur-tour",
    image: "/images/destinations/mehrangarh-fort-jodhpur.webp",
    imageAlt: "Mehrangarh Fort overlooking the blue city of Jodhpur",
  },
  {
    name: "Jaisalmer Tour",
    tagline: "The Golden City",
    description: "A living sandstone fort on the edge of the Thar Desert, with camel safaris beyond.",
    href: "/tours/jaisalmer-tour",
    image: "/images/destinations/jaisalmer-desert.webp",
    imageAlt: "Jaisalmer Fort at the edge of the Thar Desert",
  },
  {
    name: "Pushkar Tour",
    tagline: "The Holy Town",
    description: "A sacred lake ringed by ghats, and home to India's famous camel fair.",
    href: "/tours/pushkar-tour",
    image: "/images/destinations/pushkar.webp",
    imageAlt: "Pushkar Lake and its ghats at dawn",
  },
  {
    name: "Ranthambore Tour",
    tagline: "Tiger Country",
    description: "A former royal hunting ground turned national park, easily added to any Rajasthan route.",
    href: "/tours/ranthambore-tour",
    image: "/images/destinations/ranthambore-tiger.webp",
    imageAlt: "Wild tiger at Ranthambore National Park",
  },
];
