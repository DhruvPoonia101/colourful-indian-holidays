import type { CityCard } from "@/components/destinations/CityGrid";

export const sriLankaDestinations: CityCard[] = [
  {
    name: "Colombo",
    tagline: "Gateway City & Sea Front",
    description:
      "Sri Lanka's commercial capital, with temples, markets and a sea-front promenade.",
    href: "/destinations/colombo",
    image: "/images/destinations/colombo-galle-face-green-sunset.webp",
    imageAlt: "Galle Face Green at sunset on the Colombo sea front",
  },
  {
    name: "Kandy",
    tagline: "Temple of the Tooth",
    description:
      "The last royal capital, home to the Temple of the Sacred Tooth Relic.",
    href: "/destinations/kandy",
    image: "/images/destinations/kandy-temple-of-the-tooth-lake.webp",
    imageAlt: "A pavilion on Kandy Lake beside the Temple of the Tooth complex",
  },
  {
    name: "Sigiriya",
    tagline: "Lion Rock Fortress",
    description:
      "A 5th-century palace on a rock, the Dambulla caves and elephant safaris.",
    href: "/destinations/sigiriya",
    image: "/images/destinations/sigiriya-rock-fortress.webp",
    imageAlt: "Sigiriya Lion Rock rising above the forest",
  },
  {
    name: "Nuwara Eliya",
    tagline: "Tea Estates & Cool Hills",
    description:
      "Rolling tea estates, a cool climate and the trails of Horton Plains.",
    href: "/destinations/nuwara-eliya",
    image: "/images/destinations/nuwara-eliya-tea-plantation.webp",
    imageAlt: "Tea estates covering the hills near Nuwara Eliya",
  },
  {
    name: "Ella",
    tagline: "Nine Arch Bridge & Hill Train",
    description:
      "Easy hikes, the Nine Arch Bridge and the end of the scenic hill train.",
    href: "/destinations/ella",
    image: "/images/destinations/ella-nine-arch-bridge-train.webp",
    imageAlt: "A blue train crossing the Nine Arch Bridge near Ella",
  },
  {
    name: "Yala National Park",
    tagline: "Leopard Safaris",
    description:
      "Jeep safaris for leopards, elephants and sloth bears on the south-east coast.",
    href: "/destinations/yala",
    image: "/images/destinations/yala-leopard.webp",
    imageAlt: "A Sri Lankan leopard drinking at a waterhole",
  },
  {
    name: "Galle",
    tagline: "Dutch Fort & South Coast",
    description:
      "A UNESCO-listed fort town and the gateway to the south-coast beaches.",
    href: "/destinations/galle",
    image: "/images/destinations/galle-fort-lighthouse.webp",
    imageAlt: "The lighthouse on the ramparts of Galle Fort",
  },
];

/** Sri Lanka tour cards, with the destination slugs each route includes,
 * so destination pages can list only the tours that actually visit them. */
export const sriLankaTourCards: (CityCard & { includes: readonly string[] })[] = [
  {
    name: "Sri Lanka Tours",
    tagline: "8 Days / 7 Nights",
    description: "Rock Fortresses, Tea Hills & Leopards",
    href: "/tours/sri-lanka-tours",
    image: "/images/destinations/sigiriya-rock-fortress.webp",
    imageAlt: "Sigiriya Lion Rock rising above the forest, Sri Lanka",
    includes: ["colombo", "sigiriya", "kandy", "nuwara-eliya", "ella", "yala", "galle"],
  },
  {
    name: "Sri Lanka Grand Tour",
    tagline: "14 Days / 13 Nights",
    description: "Ancient Cities, Tea Country, Safari & Beaches",
    href: "/tours/sri-lanka-grand-tour",
    image: "/images/destinations/sigiriya-from-pidurangala.webp",
    imageAlt: "Sigiriya rock seen across the surrounding wetlands",
    includes: ["colombo", "sigiriya", "kandy", "nuwara-eliya", "ella", "yala", "galle"],
  },
  {
    name: "India & Sri Lanka Tours",
    tagline: "12 Days / 11 Nights",
    description: "The Golden Triangle & Sri Lanka's Highlights",
    href: "/tours/india-sri-lanka-tours",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
    includes: ["colombo", "sigiriya", "kandy", "nuwara-eliya", "ella", "galle"],
  },
  {
    name: "Kerala & Sri Lanka Tours",
    tagline: "12 Days / 11 Nights",
    description: "Backwaters, Tea Hills & the Lion Rock",
    href: "/tours/kerala-sri-lanka-tours",
    image: "/images/destinations/alleppey-backwaters.webp",
    imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    includes: ["colombo", "sigiriya", "kandy", "nuwara-eliya", "ella", "yala", "galle"],
  },
];
