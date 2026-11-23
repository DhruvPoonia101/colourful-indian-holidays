import type { PackageContent } from "./types";

/**
 * Sri Lanka itinerary written 23 Nov 2026. The Starting From price is computed
 * at render time from src/lib/pricing.ts (Sri Lanka rate and night split there).
 * Drive times are typical, not guaranteed; Dhruv should review day plans.
 */
export const sriLankaTours: PackageContent = {
  slug: "sri-lanka-tours",
  name: "Sri Lanka Tours",
  tagline: "Rock Fortresses, Tea Hills & Leopards",
  metaTitle: "Sri Lanka Tour Packages | 8-Day Private Sri Lanka Tour",
  metaDescription:
    "A private 8-day Sri Lanka tour: Sigiriya, Dambulla, Kandy, Nuwara Eliya, the Ella train, a Yala leopard safari and Galle Fort, with your own driver-guide.",
  heroImage: "/images/destinations/sigiriya-rock-fortress.webp",
  heroImageAlt: "Sigiriya Lion Rock rising above the forest, Sri Lanka",
  heroHeadline: "Sri Lanka: Rock Fortresses, Tea Hills & Leopards",
  heroSubheadline:
    "An 8-day private circuit of the island's essentials: the Sigiriya rock fortress, the Temple of the Tooth in Kandy, tea country by train, a Yala leopard safari and the old fort town of Galle.",
  overview:
    "Sri Lanka packs an unusual amount into a small island. In eight days this route climbs a 5th-century palace on a rock, visits the Buddha's tooth relic in Kandy, rides the hill-country train through tea estates, looks for leopards in Yala and ends with a sunset walk on the ramparts of Galle Fort. Distances are short by Indian standards, and every day is planned around comfortable drives with your own chauffeur-guide.",
  quickFacts: [
    { label: "Duration", value: "8 Days / 7 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Indicative price" },
    { label: "Best Season", value: "December – April" },
  ],
  priceCurrency: "USD",
  itinerary: [
    {
      title: "Day 1 — Arrive in Colombo, Drive to Sigiriya",
      description:
        "Your chauffeur-guide meets you outside arrivals at Bandaranaike International Airport with a name board, cold water and a local SIM if you want one. The drive north to the Cultural Triangle takes you out of the coastal palms and into dry-zone forest, lakes and paddy fields. Check in near Sigiriya and rest; if you arrive early, a sunset walk along the village tanks is a gentle start.",
      stay: "Sigiriya",
      drive: "About 4 h (around 160 km)",
      tip: "Overnight flights from Europe and the Gulf usually land in the morning, so this first day is kept deliberately light.",
    },
    {
      title: "Day 2 — Sigiriya Rock & Elephant Safari",
      description:
        "Be at the gates when they open, usually 7 am, to climb Sigiriya before the heat and the coach groups. The route passes the water gardens, the spiral staircase to the 5th-century frescoes, the Mirror Wall and the giant Lion Paws before the final climb to the palace ruins on the summit — about two hours up and down. After lunch and a rest, head out on an open-jeep safari in Minneriya, Kaudulla or Hurulu Eco Park, chosen on the day by where the elephant herds are feeding.",
      stay: "Sigiriya",
      drive: "Short drives (safari park about 30–45 min)",
      meals: "Breakfast",
      tip: "Wear proper shoes and carry water; there are around 1,200 steps and little shade on the upper section.",
      image: "/images/destinations/sigiriya-rock-fortress.webp",
      imageAlt: "Sigiriya Rock Fortress rising above the forest",
    },
    {
      title: "Day 3 — Dambulla Cave Temple, Spice Garden & Kandy",
      description:
        "A short drive to the UNESCO-listed Dambulla cave temple, where five caves hold some 150 Buddha statues beneath painted rock ceilings. Continue south through Matale, stopping at a spice garden to see cinnamon, cardamom and pepper growing. In Kandy, check in, then attend the evening puja at the Temple of the Sacred Tooth Relic, when drummers play and the inner shrine opens to worshippers, and walk back along the edge of Kandy Lake.",
      stay: "Kandy",
      drive: "About 3 h with stops (around 90 km)",
      meals: "Breakfast",
      tip: "Cover shoulders and knees at Dambulla and the Temple of the Tooth; you'll remove shoes at both.",
      image: "/images/destinations/dambulla-cave-temple.webp",
      imageAlt: "The white entrance of the Dambulla cave temple",
    },
    {
      title: "Day 4 — Peradeniya Gardens & Tea Country",
      description:
        "Spend the morning in the Royal Botanic Gardens at Peradeniya, with its orchid house, avenues of palms and the giant Javan fig. Then climb into the hills on a road that winds past Ramboda Falls and tea estates. Stop at a working tea factory to follow the leaf from withering to rolling and grading, finished with a tasting, before reaching Nuwara Eliya for an evening stroll around the colonial town and Gregory Lake.",
      stay: "Nuwara Eliya",
      drive: "About 3 h (around 80 km)",
      meals: "Breakfast",
      tip: "Nuwara Eliya sits at about 1,900 m; pack a fleece for the evening.",
      image: "/images/destinations/nuwara-eliya-tea-plantation.webp",
      imageAlt: "Tea estates covering the hills near Nuwara Eliya",
    },
    {
      title: "Day 5 — The Hill-Country Train to Ella",
      description:
        "Board the train at Nanu Oya for the most scenic section of the hill-country railway: about three hours through tea estates, cloud forest and tunnels, with views that open up past Pattipola, the highest station on the line. Your driver goes ahead by road with the luggage and meets you at Ella. In the late afternoon, walk to the Nine Arch Bridge, timed for a train crossing if the timetable allows. Early risers can add Horton Plains and World's End before the train.",
      stay: "Ella",
      drive: "About 3 h by train (or 2.5 h by road)",
      meals: "Breakfast",
      tip: "Reserved seats sell out weeks ahead in peak season. We book them as soon as they open, and switch to the road if a train is cancelled.",
      image: "/images/destinations/kandy-ella-train-tea-hills.webp",
      imageAlt: "The hill-country train crossing a viaduct through tea country near Ella",
    },
    {
      title: "Day 6 — Little Adam's Peak & Yala Safari",
      description:
        "Start with an easy hike up Little Adam's Peak, about 45 minutes each way through a tea estate, for wide views over the Ella Gap. Stop at Ravana Falls on the way down to the dry south-east, where the landscape changes completely. After lunch at your hotel, head into Yala National Park on an afternoon jeep safari looking for leopards, elephants, sloth bears, crocodiles and the park's huge bird life.",
      stay: "Yala (Tissamaharama)",
      drive: "About 2.5–3 h (around 110 km)",
      meals: "Breakfast",
      tip: "Parts of Yala can close for a few weeks around September and October; we switch to another block or Udawalawe if needed.",
      image: "/images/destinations/yala-leopard.webp",
      imageAlt: "A Sri Lankan leopard drinking at a waterhole",
    },
    {
      title: "Day 7 — South Coast to Galle Fort",
      description:
        "Follow the south coast west, past the beaches of Tangalle and Mirissa and the stilt fishermen near Koggala, with stops wherever you like for a swim or lunch by the sea. Arrive in Galle in the late afternoon and walk the ramparts of the UNESCO-listed fort to the lighthouse at sunset, then have dinner in one of the restored colonial houses inside the walls.",
      stay: "Galle",
      drive: "About 3–3.5 h plus stops (around 150 km)",
      meals: "Breakfast",
      tip: "The stilt fishermen often ask for a tip to be photographed; your guide will tell you what's usual.",
      image: "/images/destinations/galle-fort-lighthouse.webp",
      imageAlt: "Galle Fort lighthouse on the ramparts",
    },
    {
      title: "Day 8 — Colombo & Departure",
      description:
        "Drive up the Southern Expressway to Colombo. If your flight is in the evening, a short city tour takes in Gangaramaya Temple, the Pettah markets and Galle Face Green before the transfer to the airport.",
      stay: "—",
      drive: "About 2–2.5 h to the airport (around 150 km)",
      meals: "Breakfast",
      tip: "Allow at least three hours at the airport for international departures.",
    },
  ],
  inclusions: [
    "Private air-conditioned car with an English-speaking chauffeur-guide throughout Sri Lanka",
    "Hotels of your chosen category, twin-sharing, with daily breakfast",
    "Airport meet-and-greet and all transfers",
    "Reserved train seats on the hill-country railway, where available",
    "Jeep safari fees and park tickets listed in the itinerary",
    "Entry fees to the sites listed in the itinerary",
  ],
  exclusions: [
    "International flights",
    "Sri Lanka ETA (free for many nationalities since 25 May 2026; we tell you whether yours qualifies)",
    "Lunches, dinners and drinks unless stated",
    "Tips, personal expenses and travel insurance",
    "Optional activities such as whale watching",
  ],
  highlights: [
    {
      title: "The Island's Essentials in 8 Days",
      description:
        "Ancient cities, tea country, wildlife and the coast, without long days in the car.",
    },
    {
      title: "Two Safaris, Two Landscapes",
      description:
        "Elephant herds in the Cultural Triangle and leopards in Yala.",
    },
    {
      title: "The Hill-Country Train",
      description:
        "The most scenic stretch of the railway, with your driver meeting you at the other end.",
    },
  ],
  bestTimeToVisit: {
    heading: "December – April is Best",
    note: "December to April is the driest season for the hill country and the south and west coasts, which this route mostly follows. The Cultural Triangle stays reasonably dry for much of the year. From May to September, the south-west monsoon brings rain to the west and south, and parts of Yala can close for a few weeks around September and October.",
  },
  relatedDestinations: [
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
      name: "Kandy",
      tagline: "Temple of the Tooth",
      description:
        "The last royal capital, home to the Temple of the Sacred Tooth Relic.",
      href: "/destinations/kandy",
      image: "/images/destinations/kandy-temple-of-the-tooth-lake.webp",
      imageAlt: "A pavilion on Kandy Lake beside the Temple of the Tooth complex",
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
      name: "Galle",
      tagline: "Dutch Fort & South Coast",
      description:
        "A UNESCO-listed fort town and the gateway to the south-coast beaches.",
      href: "/destinations/galle",
      image: "/images/destinations/galle-fort-lighthouse.webp",
      imageAlt: "The lighthouse on the ramparts of Galle Fort",
    },
  ],
  showCarFleet: false,
  faqs: [
    {
      question: "Is 8 days enough for Sri Lanka?",
      answer:
        "Yes, for the highlights. This route covers the Cultural Triangle, Kandy, tea country, Yala and Galle at a comfortable pace. With 12 to 14 days you can add the ancient cities of Polonnaruwa and Anuradhapura and more beach time; see our Sri Lanka Grand Tour.",
    },
    {
      question: "Do I need a visa for Sri Lanka?",
      answer:
        "You need an Electronic Travel Authorisation (ETA) before you arrive. Since 25 May 2026 it is free for nationals of 40 countries, including the USA, UK, Canada, Australia, Germany, France and India. Read our Sri Lanka visa guide for details.",
    },
    {
      question: "What is the best time for this tour?",
      answer:
        "December to April, when the hill country and the south and west coasts are driest. It also runs well from June to September with some rain on the west coast.",
    },
    {
      question: "Can we combine Sri Lanka with India?",
      answer:
        "Yes. Direct flights link Colombo with Delhi, Mumbai, Chennai and Kochi. See our India and Sri Lanka and Kerala and Sri Lanka tours.",
    },
    {
      question: "Is a driver-guide the same as a guide?",
      answer:
        "In Sri Lanka, most private tours use a licensed chauffeur-guide who drives and guides. At larger sites such as Sigiriya or the Temple of the Tooth, we can add a specialist local guide on request.",
    },
  ],
  relatedPackages: [
    {
      name: "Sri Lanka Grand Tour",
      tagline: "Ancient Cities, Tea Country, Safari & Beaches · 14 Days",
      description:
        "A private 14-day Sri Lanka tour.",
      href: "/tours/sri-lanka-grand-tour",
      image: "/images/destinations/sigiriya-from-pidurangala.webp",
      imageAlt: "Sigiriya rock seen across the surrounding wetlands",
    },
    {
      name: "India & Sri Lanka Tours",
      tagline: "The Golden Triangle & Sri Lanka's Highlights · 12 Days",
      description:
        "A private 12-day India and Sri Lanka tour.",
      href: "/tours/india-sri-lanka-tours",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
  ],
  draftPendingReview: false,
};
