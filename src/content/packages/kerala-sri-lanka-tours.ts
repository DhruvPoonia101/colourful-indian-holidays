import type { PackageContent } from "./types";

/**
 * Sri Lanka itinerary written 23 Nov 2026. The Starting From price is computed
 * at render time from src/lib/pricing.ts (Sri Lanka rate and night split there).
 * Drive times are typical, not guaranteed; Dhruv should review day plans.
 */
export const keralaSriLankaTours: PackageContent = {
  slug: "kerala-sri-lanka-tours",
  name: "Kerala & Sri Lanka Tours",
  tagline: "Backwaters, Tea Hills & the Lion Rock",
  metaTitle: "Kerala & Sri Lanka Tour | 12-Day South India + Sri Lanka",
  metaDescription:
    "A private 12-day Kerala and Sri Lanka tour: Kochi, Munnar and a backwater houseboat, then a short flight to Colombo for Sigiriya, Kandy, Ella, Yala and Galle.",
  heroImage: "/images/destinations/alleppey-backwaters.webp",
  heroImageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
  heroHeadline: "Kerala & Sri Lanka: Backwaters to the Lion Rock",
  heroSubheadline:
    "Twelve private days across two tropical neighbours: Kochi, Munnar's tea hills and a houseboat night in Kerala, then Sigiriya, Kandy, the Ella train, a Yala safari and Galle Fort.",
  overview:
    "Kerala and Sri Lanka sit just over an hour apart by air and share a lot: spice gardens, tea hills, palm-fringed coasts and a relaxed pace. This route spends five nights in Kerala, from the old port city of Kochi to the tea estates of Munnar and a night on a backwater houseboat, then flies from Kochi to Colombo for six nights on Sri Lanka's highlights.",
  quickFacts: [
    { label: "Duration", value: "12 Days / 11 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Indicative price" },
    { label: "Best Season", value: "December – March" },
  ],
  priceCurrency: "USD",
  itinerary: [
    {
      title: "Day 1 — Arrive in Kochi",
      description:
        "Meet-and-greet at Kochi airport and transfer to Fort Kochi. In the evening, walk past the Chinese fishing nets at sunset.",
      stay: "Fort Kochi",
      drive: "About 1–1.5 h from the airport",
    },
    {
      title: "Day 2 — Fort Kochi",
      description:
        "St Francis Church, the Mattancherry Palace with its Ramayana murals, the Jewish quarter and the spice warehouses of Jew Town. In the evening, a Kathakali performance — arrive early to watch the dancers apply their make-up.",
      stay: "Fort Kochi",
      drive: "City touring",
      meals: "Breakfast",
      tip: "The Paradesi Synagogue is closed on Fridays, Saturdays and Jewish holidays; we plan around it.",
    },
    {
      title: "Day 3 — Up to Munnar",
      description:
        "Drive into the Western Ghats, climbing past waterfalls and spice plantations to the tea estates of Munnar.",
      stay: "Munnar",
      drive: "About 4 h (around 130 km)",
      meals: "Breakfast",
    },
    {
      title: "Day 4 — Munnar",
      description:
        "Walks through the tea estates, a visit to the tea museum, and Eravikulam National Park, home of the rare Nilgiri tahr, when the park is open.",
      stay: "Munnar",
      drive: "Short local drives",
      meals: "Breakfast",
      tip: "Eravikulam usually closes for a few weeks in early spring for the tahr calving season.",
    },
    {
      title: "Day 5 — Alleppey Houseboat",
      description:
        "Drive down to Alleppey and board a private houseboat for a night drifting through the backwaters, with lunch, dinner and breakfast cooked on board.",
      stay: "Houseboat, Alleppey",
      drive: "About 4.5–5 h (around 170 km)",
      meals: "Breakfast, lunch, dinner",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      title: "Day 6 — Fly to Sri Lanka",
      description:
        "Disembark after breakfast and drive to Kochi airport for the direct flight to Colombo, a little over an hour. Your Sri Lankan chauffeur-guide meets you and drives you north towards the Cultural Triangle.",
      stay: "Sigiriya",
      drive: "About 2 h to Kochi airport; about 4 h from Colombo airport",
      meals: "Breakfast",
      tip: "Flight times change by season; if the flight lands late, we stop overnight in Negombo instead.",
    },
    {
      title: "Day 7 — Sigiriya",
      description:
        "Climb the Sigiriya rock fortress at opening time, then an afternoon elephant safari in Minneriya, Kaudulla or Hurulu.",
      stay: "Sigiriya",
      drive: "Short drives",
      meals: "Breakfast",
      image: "/images/destinations/sigiriya-rock-fortress.webp",
      imageAlt: "Sigiriya Rock Fortress rising above the forest",
    },
    {
      title: "Day 8 — Dambulla to Kandy",
      description:
        "The Dambulla cave temple, a spice garden in Matale, then the evening puja at Kandy's Temple of the Sacred Tooth Relic.",
      stay: "Kandy",
      drive: "About 3 h with stops (around 90 km)",
      meals: "Breakfast",
      image: "/images/destinations/kandy-temple-of-the-tooth-lake.webp",
      imageAlt: "A pavilion on Kandy Lake beside the Temple of the Tooth complex",
    },
    {
      title: "Day 9 — The Train to Ella",
      description:
        "Drive up into tea country, then ride the hill-country train from Nanu Oya to Ella, with a walk to the Nine Arch Bridge.",
      stay: "Ella",
      drive: "About 3 h by road, then about 3 h by train",
      meals: "Breakfast",
      image: "/images/destinations/ella-nine-arch-bridge-train.webp",
      imageAlt: "A train crossing the Nine Arch Bridge, Ella",
    },
    {
      title: "Day 10 — Yala Safari",
      description:
        "A morning hike up Little Adam's Peak, then drive to Yala for an afternoon jeep safari looking for leopards and elephants.",
      stay: "Yala (Tissamaharama)",
      drive: "About 2.5–3 h (around 110 km)",
      meals: "Breakfast",
      image: "/images/destinations/yala-leopard.webp",
      imageAlt: "A Sri Lankan leopard drinking at a waterhole",
    },
    {
      title: "Day 11 — Galle",
      description:
        "Drive west along the south coast to Galle, with a sunset walk on the ramparts of the old fort.",
      stay: "Galle",
      drive: "About 3–3.5 h (around 150 km)",
      meals: "Breakfast",
      image: "/images/destinations/galle-fort-ramparts.webp",
      imageAlt: "The clock tower and ramparts of Galle Fort",
    },
    {
      title: "Day 12 — Colombo & Departure",
      description:
        "Expressway drive to Colombo and on to the airport for your flight home.",
      stay: "—",
      drive: "About 2–2.5 h to the airport",
      meals: "Breakfast",
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
    "India e-Visa and Sri Lanka ETA fees, where they apply",
    "Flight between India and Sri Lanka (we book it for you at the best available fare)",
    "Lunches, dinners and drinks unless stated",
    "Tips, personal expenses and travel insurance",
    "Optional activities such as whale watching",
  ],
  highlights: [
    {
      title: "Two Tea Countries",
      description:
        "Munnar and Sri Lanka's hill country are a fascinating comparison.",
    },
    {
      title: "A Night on the Backwaters",
      description:
        "A private Kerala houseboat is one of India's most relaxing experiences.",
    },
    {
      title: "A Short Hop Between Them",
      description:
        "Direct flights between Kochi and Colombo take a little over an hour.",
    },
  ],
  bestTimeToVisit: {
    heading: "December – March is Best",
    note: "December to March is the best overlap: Kerala is dry after the north-east monsoon, and Sri Lanka's hill country and south coast are at their driest. From June to August, the south-west monsoon brings heavy rain to both Kerala and Sri Lanka's west coast.",
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
      name: "Yala National Park",
      tagline: "Leopard Safaris",
      description:
        "Jeep safaris for leopards, elephants and sloth bears on the south-east coast.",
      href: "/destinations/yala",
      image: "/images/destinations/yala-leopard.webp",
      imageAlt: "A Sri Lankan leopard drinking at a waterhole",
    },
  ],
  showCarFleet: false,
  faqs: [
    {
      question: "Are there direct flights from Kochi to Colombo?",
      answer:
        "Yes. Direct flights connect Kochi and Colombo in a little over an hour, which makes this one of the easiest two-country trips in Asia. Schedules change seasonally, so we confirm the timing when we plan your trip.",
    },
    {
      question: "Which is better, Kerala or Sri Lanka?",
      answer:
        "They complement each other. Kerala is best for backwaters, Ayurveda and spice country; Sri Lanka adds ancient cities, leopard safaris and the hill-country train. Together they make a varied two weeks.",
    },
    {
      question: "Do we need visas for both?",
      answer:
        "Yes. India requires an e-Visa for most nationalities, and Sri Lanka requires an ETA, which has been free since 25 May 2026 for 40 countries including the USA, UK, Canada and Australia.",
    },
    {
      question: "Can we add a beach stay?",
      answer:
        "Yes. Add nights at Marari Beach in Kerala or at Mirissa or Unawatuna in Sri Lanka.",
    },
  ],
  relatedPackages: [
    {
      name: "India & Sri Lanka Tours",
      tagline: "The Golden Triangle & Sri Lanka's Highlights · 12 Days",
      description:
        "A private 12-day India and Sri Lanka tour.",
      href: "/tours/india-sri-lanka-tours",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Sri Lanka Grand Tour",
      tagline: "Ancient Cities, Tea Country, Safari & Beaches · 14 Days",
      description:
        "A private 14-day Sri Lanka tour.",
      href: "/tours/sri-lanka-grand-tour",
      image: "/images/destinations/sigiriya-from-pidurangala.webp",
      imageAlt: "Sigiriya rock seen across the surrounding wetlands",
    },
  ],
  draftPendingReview: false,
};
