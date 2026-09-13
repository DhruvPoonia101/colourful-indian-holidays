import type { CityCard } from "@/components/destinations/CityGrid";

/**
 * Card set for the Kerala Tours hub. Some link to new tours built for
 * this hub specifically; others are not yet written and fall through to
 * the /tours "coming soon" placeholder until built.
 *
 * Image notes: "thekkady.webp" is a real Kerala photo but shows a
 * backwaters houseboat, not Periyar Lake or wildlife specifically — used
 * with honest alt text rather than overclaiming what it depicts. Swap for
 * a genuine Periyar/wildlife photo if one becomes available.
 */
export const keralaTourVariants: CityCard[] = [
  {
    name: "Kerala Tours",
    tagline: "The Classic Circuit · 6 Days",
    description: "Kochi, Alleppey and Munnar — the standard first-time introduction to Kerala.",
    href: "/tours/kerala-tours-classic",
    image: "/images/destinations/alleppey-backwaters.webp",
    imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
  },
  {
    name: "Alleppey Backwaters Tour",
    tagline: "Houseboats & Palm-Lined Canals",
    description: "A private houseboat cruise through Kerala's network of backwater canals and lagoons.",
    href: "/tours/alleppey-backwaters-tour",
    image: "/images/destinations/alleppey-backwaters.webp",
    imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
  },
  {
    name: "Munnar Hill Station Tour",
    tagline: "Tea Gardens & Cool Mountain Air",
    description: "Rolling tea plantations in the Western Ghats, a sharp contrast to Kerala's tropical coast.",
    href: "/tours/munnar-tour",
    image: "/images/destinations/munnar-tea-plantation.webp",
    imageAlt: "Rolling tea plantations in the mist, Munnar, Kerala",
  },
  {
    name: "Periyar Wildlife Tour",
    tagline: "Thekkady's Tiger Reserve",
    description: "A boat safari on Periyar Lake through India's only tiger reserve reached by water.",
    href: "/tours/periyar-wildlife-tour",
    image: "/images/destinations/thekkady.webp",
    imageAlt: "A traditional houseboat on a palm-lined waterway near Thekkady, Kerala",
  },
  {
    name: "Kochi City Tour",
    tagline: "Fort Kochi & Colonial Heritage",
    description: "Chinese fishing nets, Dutch colonial lanes, and a traditional Kathakali performance.",
    href: "/tours/kochi-tour",
    image: "/images/destinations/kochi-3.webp",
    imageAlt: "Chinese fishing nets at sunset, Fort Kochi, Kerala",
  },
  {
    name: "Kerala Beaches Tour",
    tagline: "Kovalam & Varkala",
    description: "Kerala's coastal side — cliffside beaches and a slower, sun-soaked pace.",
    href: "/tours/kerala-beaches-tour",
    image: "/images/destinations/alleppey-2.webp",
    imageAlt: "Alleppey Beach at sunset, Kerala",
  },
];
