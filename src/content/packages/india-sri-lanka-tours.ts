import type { PackageContent } from "./types";

/**
 * Sri Lanka itinerary written 23 Nov 2026. The Starting From price is computed
 * at render time from src/lib/pricing.ts (Sri Lanka rate and night split there).
 * Drive times are typical, not guaranteed; Dhruv should review day plans.
 */
export const indiaSriLankaTours: PackageContent = {
  slug: "india-sri-lanka-tours",
  name: "India & Sri Lanka Tours",
  tagline: "The Golden Triangle & Sri Lanka's Highlights",
  metaTitle: "India & Sri Lanka Tour | 12-Day Golden Triangle + Sri Lanka",
  metaDescription:
    "A private 12-day India and Sri Lanka tour: Delhi, Agra and Jaipur, then a short flight to Colombo for Sigiriya, Kandy, the Ella train and Galle Fort.",
  heroImage: "/images/destinations/agra-taj-mahal.webp",
  heroImageAlt: "Taj Mahal at sunrise, Agra",
  heroHeadline: "India & Sri Lanka: The Taj Mahal to the Lion Rock",
  heroSubheadline:
    "Twelve private days linking India's Golden Triangle with Sri Lanka's highlights: the Taj Mahal and Jaipur's forts, then Sigiriya, Kandy, the tea-country train and Galle Fort.",
  overview:
    "India and Sri Lanka are only a short flight apart, and together they make one of the most varied two-week trips in Asia. This route spends five nights on the Golden Triangle of Delhi, Agra and Jaipur, then flies from Delhi to Colombo for six nights on Sri Lanka's essentials. You have a private car and guide in both countries, and we handle the flight connection between them.",
  quickFacts: [
    { label: "Duration", value: "12 Days / 11 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Indicative price" },
    { label: "Best Season", value: "October – March" },
  ],
  priceCurrency: "USD",
  itinerary: [
    {
      title: "Day 1 — Arrive in Delhi",
      description:
        "Meet-and-greet at Delhi airport and transfer to your hotel. If you land early, an evening drive past India Gate and the government buildings of Lutyens' Delhi; otherwise, a quiet first night.",
      stay: "Delhi",
      drive: "About 45 min from the airport",
    },
    {
      title: "Day 2 — Old and New Delhi",
      description:
        "Begin at the Jama Masjid, then take a cycle-rickshaw through the lanes of Chandni Chowk. In the afternoon, visit Humayun's Tomb, the garden tomb that inspired the Taj Mahal, and the 12th-century Qutub Minar.",
      stay: "Delhi",
      drive: "City touring",
      meals: "Breakfast",
      tip: "Fridays are busy at the Jama Masjid around midday prayers; we time the visit around them.",
    },
    {
      title: "Day 3 — Delhi to Agra",
      description:
        "Drive to Agra on the expressway. Visit the red sandstone Agra Fort in the afternoon, then watch the sunset over the Taj Mahal from Mehtab Bagh across the river.",
      stay: "Agra",
      drive: "About 3.5–4 h (around 230 km)",
      meals: "Breakfast",
      tip: "The Taj Mahal is closed on Fridays, so we plan the sunrise visit for another day.",
    },
    {
      title: "Day 4 — Taj Mahal at Sunrise, On to Jaipur",
      description:
        "See the Taj Mahal at sunrise, when the marble turns from grey to gold and the crowds are thinnest. Then drive to Jaipur via Fatehpur Sikri, the abandoned 16th-century Mughal capital.",
      stay: "Jaipur",
      drive: "About 5 h with Fatehpur Sikri (around 240 km)",
      meals: "Breakfast",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      title: "Day 5 — Jaipur",
      description:
        "Amber Fort in the morning, then the City Palace, the Jantar Mantar observatory and a photo stop at the Hawa Mahal, with time in the bazaars of the Pink City for textiles and block prints.",
      stay: "Jaipur",
      drive: "City touring",
      meals: "Breakfast",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      title: "Day 6 — Fly to Sri Lanka",
      description:
        "A morning flight from Jaipur to Delhi (about an hour), then a direct flight to Colombo (about three and a half hours). Your Sri Lankan chauffeur-guide meets you on arrival for the short drive to Negombo.",
      stay: "Negombo",
      drive: "About 20–30 min from the airport",
      meals: "Breakfast",
      tip: "We book both flights to connect comfortably and handle the change of guide and car between countries.",
    },
    {
      title: "Day 7 — To Sigiriya",
      description:
        "Drive into the Cultural Triangle, and in the late afternoon climb Pidurangala Rock for sunset views across to Sigiriya.",
      stay: "Sigiriya",
      drive: "About 4 h (around 150 km)",
      meals: "Breakfast",
      image: "/images/destinations/sigiriya-from-pidurangala.webp",
      imageAlt: "Sigiriya rock seen across the surrounding wetlands",
    },
    {
      title: "Day 8 — Sigiriya & Dambulla",
      description:
        "Climb Sigiriya at opening time, then visit the Dambulla cave temple. Optional afternoon jeep safari to see wild elephants in Minneriya, Kaudulla or Hurulu.",
      stay: "Sigiriya",
      drive: "Short drives",
      meals: "Breakfast",
      image: "/images/destinations/sigiriya-rock-fortress.webp",
      imageAlt: "Sigiriya Rock Fortress rising above the forest",
    },
    {
      title: "Day 9 — Kandy",
      description:
        "Drive to Kandy via a spice garden in Matale, visit the Royal Botanic Gardens at Peradeniya and attend the evening puja at the Temple of the Sacred Tooth Relic.",
      stay: "Kandy",
      drive: "About 3 h with stops (around 90 km)",
      meals: "Breakfast",
      image: "/images/destinations/kandy-temple-of-the-tooth-lake.webp",
      imageAlt: "A pavilion on Kandy Lake beside the Temple of the Tooth complex",
    },
    {
      title: "Day 10 — Tea Country by Train to Ella",
      description:
        "Drive up into tea country for a factory visit and tasting, then ride the hill-country train from Nanu Oya to Ella. Evening walk to the Nine Arch Bridge.",
      stay: "Ella",
      drive: "About 3 h by road, then about 3 h by train",
      meals: "Breakfast",
      image: "/images/destinations/kandy-ella-train-tea-hills.webp",
      imageAlt: "The hill-country train crossing a viaduct through tea country near Ella",
    },
    {
      title: "Day 11 — South Coast to Galle",
      description:
        "Drive down to the south coast and west along the beaches to Galle, arriving for a sunset walk on the fort's ramparts.",
      stay: "Galle",
      drive: "About 4.5–5 h (around 200 km)",
      meals: "Breakfast",
      tip: "A longer driving day; we break it with a beach stop and lunch by the sea.",
      image: "/images/destinations/galle-fort-lighthouse.webp",
      imageAlt: "Galle Fort lighthouse on the ramparts",
    },
    {
      title: "Day 12 — Colombo & Departure",
      description:
        "Drive to Colombo on the Southern Expressway and on to the airport for your flight home.",
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
      title: "Two Countries, One Private Trip",
      description:
        "The same standard of private car, guide and hotels in India and Sri Lanka, with one team planning both.",
    },
    {
      title: "The Taj Mahal and the Lion Rock",
      description:
        "Two of Asia's great monuments, a week apart.",
    },
    {
      title: "A Short, Simple Connection",
      description:
        "A direct flight of about three and a half hours links Delhi and Colombo.",
    },
  ],
  bestTimeToVisit: {
    heading: "October – March is Best",
    note: "October to March is the best overlap. North India is cool and dry from October to March, and Sri Lanka's hill country and south coast are driest from December to April. In October and November, expect some rain in Sri Lanka.",
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
      question: "How do we get from India to Sri Lanka?",
      answer:
        "By air. Direct flights connect Delhi with Colombo in about three and a half hours, and there are also direct flights from Mumbai, Chennai and Kochi. We book the flight that best fits your itinerary.",
    },
    {
      question: "Do we need separate visas?",
      answer:
        "Yes. India requires an e-Visa for most nationalities, and Sri Lanka requires an Electronic Travel Authorisation (ETA), free since 25 May 2026 for 40 countries including the USA, UK, Canada and Australia.",
    },
    {
      question: "Can we do Sri Lanka first?",
      answer:
        "Yes. The route works in either direction; we choose the order based on your flight prices and the season.",
    },
    {
      question: "Can we add Kerala instead of the Golden Triangle?",
      answer:
        "Yes. See our Kerala and Sri Lanka tour, which pairs Kochi, Munnar and the backwaters with Sri Lanka.",
    },
  ],
  relatedPackages: [
    {
      name: "Kerala & Sri Lanka Tours",
      tagline: "Backwaters, Tea Hills & the Lion Rock · 12 Days",
      description:
        "A private 12-day Kerala and Sri Lanka tour.",
      href: "/tours/kerala-sri-lanka-tours",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      name: "Sri Lanka Tours",
      tagline: "Rock Fortresses, Tea Hills & Leopards · 8 Days",
      description:
        "A private 8-day Sri Lanka tour.",
      href: "/tours/sri-lanka-tours",
      image: "/images/destinations/sigiriya-rock-fortress.webp",
      imageAlt: "Sigiriya Lion Rock rising above the forest, Sri Lanka",
    },
  ],
  draftPendingReview: false,
};
