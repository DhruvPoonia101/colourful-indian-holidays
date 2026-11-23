import type { PackageContent } from "./types";

/**
 * Sri Lanka itinerary written 23 Nov 2026. The Starting From price is computed
 * at render time from src/lib/pricing.ts (Sri Lanka rate and night split there).
 * Drive times are typical, not guaranteed; Dhruv should review day plans.
 */
export const sriLankaGrandTour: PackageContent = {
  slug: "sri-lanka-grand-tour",
  name: "Sri Lanka Grand Tour",
  tagline: "Ancient Cities, Tea Country, Safari & Beaches",
  metaTitle: "Sri Lanka Grand Tour | 14-Day Private Sri Lanka Itinerary",
  metaDescription:
    "A private 14-day Sri Lanka tour: Anuradhapura, Polonnaruwa, Sigiriya, Kandy, Nuwara Eliya, Ella, Yala, Mirissa and Galle at an unhurried pace.",
  heroImage: "/images/destinations/sigiriya-from-pidurangala.webp",
  heroImageAlt: "Sigiriya rock seen across the surrounding wetlands",
  heroHeadline: "Sri Lanka Grand Tour: Two Weeks Around the Island",
  heroSubheadline:
    "A 14-day private journey through all three of Sri Lanka's worlds: the ancient capitals of the Cultural Triangle, the tea-covered hills, and the wildlife and beaches of the south.",
  overview:
    "Two weeks lets Sri Lanka unfold at its own pace. This route adds the great ancient capitals of Anuradhapura and Polonnaruwa to the classic highlights, gives the hill country three nights instead of two, and finishes with time on the beach at Mirissa before Galle. Every drive is planned to leave afternoons free, and your chauffeur-guide stays with you from airport to airport.",
  quickFacts: [
    { label: "Duration", value: "14 Days / 13 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Indicative price" },
    { label: "Best Season", value: "December – April" },
  ],
  priceCurrency: "USD",
  itinerary: [
    {
      title: "Day 1 — Arrive & Negombo",
      description:
        "Your chauffeur-guide meets you at the airport for the 20-minute drive to Negombo, a fishing town with a lagoon, an old Dutch canal and a busy morning fish market. Rest by the pool, then take an easy sunset walk on the beach.",
      stay: "Negombo",
      drive: "About 20–30 min",
      tip: "Negombo is the closest town to the airport, which makes it the gentlest first night after a long flight.",
    },
    {
      title: "Day 2 — Anuradhapura, the First Capital",
      description:
        "Drive north to Anuradhapura, Sri Lanka's first great royal capital and a UNESCO World Heritage Site. Explore by car and on foot: the white dome of Ruwanwelisaya, the giant brick Jetavanaramaya, and the Sri Maha Bodhi, a sacred fig grown from a cutting of the tree under which the Buddha attained enlightenment and venerated by pilgrims every day.",
      stay: "Anuradhapura",
      drive: "About 4 h (around 170 km)",
      meals: "Breakfast",
      tip: "White or light clothing is respectful at the Sri Maha Bodhi, and you'll go barefoot inside the sacred areas.",
    },
    {
      title: "Day 3 — Mihintale to Sigiriya",
      description:
        "In the cool of the morning, climb the stone steps of Mihintale, where tradition says Buddhism arrived in Sri Lanka in the 3rd century BCE. Drive on to Sigiriya, and in the late afternoon climb Pidurangala Rock for the best view in the area: straight across to the Lion Rock as the sun goes down.",
      stay: "Sigiriya",
      drive: "About 2 h (around 80 km)",
      meals: "Breakfast",
      tip: "Pidurangala's last section is a short scramble over boulders; good shoes help.",
      image: "/images/destinations/sigiriya-from-pidurangala.webp",
      imageAlt: "Sigiriya rock seen across the surrounding wetlands",
    },
    {
      title: "Day 4 — Sigiriya Rock Fortress & Village Life",
      description:
        "Climb Sigiriya at opening time: water gardens, the painted frescoes, the Mirror Wall, the Lion Paws and the summit palace. In the afternoon, slow down with a village experience — a bullock-cart or catamaran ride on a village tank and a home-cooked rice-and-curry lunch with a local family.",
      stay: "Sigiriya",
      drive: "Short local drives",
      meals: "Breakfast, lunch",
      tip: "The summit is exposed; a hat and plenty of water make the climb far more comfortable.",
      image: "/images/destinations/sigiriya-rock-fortress.webp",
      imageAlt: "Sigiriya Rock Fortress rising above the forest",
    },
    {
      title: "Day 5 — Polonnaruwa & Elephant Safari",
      description:
        "Explore Polonnaruwa, the medieval royal capital, by car and bicycle if you like: the Royal Palace, the Quadrangle's circular Vatadage and the Gal Vihara, four Buddha figures carved from a single granite face. In the afternoon, an open-jeep safari in Minneriya, Kaudulla or Hurulu to watch wild elephants at the reservoirs.",
      stay: "Sigiriya",
      drive: "About 1–1.5 h each way (around 60 km)",
      meals: "Breakfast",
      tip: "From around July to October, large herds gather at Minneriya and Kaudulla in what is known as the Gathering.",
    },
    {
      title: "Day 6 — Dambulla to Kandy",
      description:
        "Visit the Dambulla cave temple with its five painted caves, then drive south via a spice garden in Matale. Arrive in Kandy for the evening puja at the Temple of the Sacred Tooth Relic.",
      stay: "Kandy",
      drive: "About 3 h with stops (around 90 km)",
      meals: "Breakfast",
      image: "/images/destinations/dambulla-cave-temple.webp",
      imageAlt: "The white entrance of the Dambulla cave temple",
    },
    {
      title: "Day 7 — Kandy",
      description:
        "A full day in Sri Lanka's cultural capital: the Royal Botanic Gardens at Peradeniya, a walk around Kandy Lake, the Arthur's Seat viewpoint over the city, and an evening performance of Kandyan dance and fire-walking drummers.",
      stay: "Kandy",
      drive: "Short local drives",
      meals: "Breakfast",
      tip: "If your dates fall during the Esala Perahera (July or August), we plan this day around the night processions.",
      image: "/images/destinations/kandy-temple-of-the-tooth-lake.webp",
      imageAlt: "A pavilion on Kandy Lake beside the Temple of the Tooth complex",
    },
    {
      title: "Day 8 — Tea Country to Nuwara Eliya",
      description:
        "Climb into the hills past Ramboda Falls, stopping at a tea estate for a factory tour and tasting. Afternoon in Nuwara Eliya, the colonial hill town known as Little England, with its red-brick post office, Victoria Park and Gregory Lake.",
      stay: "Nuwara Eliya",
      drive: "About 3 h (around 80 km)",
      meals: "Breakfast",
      tip: "Evenings are cool at about 1,900 m; bring a warm layer.",
      image: "/images/destinations/nuwara-eliya-tea-plantation.webp",
      imageAlt: "Tea estates covering the hills near Nuwara Eliya",
    },
    {
      title: "Day 9 — Horton Plains & the Train to Ella",
      description:
        "A pre-dawn start for Horton Plains National Park and the 9 km loop to World's End and Baker's Falls, best before the mist rolls in. In the afternoon, take the hill-country train from Nanu Oya or Ohiya to Ella while your driver brings the luggage by road.",
      stay: "Ella",
      drive: "About 1 h to Horton Plains, then about 3 h by train",
      meals: "Breakfast (packed if leaving early)",
      tip: "World's End views are usually clearest before 10 am.",
    },
    {
      title: "Day 10 — Ella",
      description:
        "A free-feeling day: walk up Little Adam's Peak in the morning, see a train cross the Nine Arch Bridge, and spend the afternoon in Ella's cafés, at a cooking class, or on the longer hike to Ella Rock.",
      stay: "Ella",
      drive: "No long drives",
      meals: "Breakfast",
      image: "/images/destinations/ella-nine-arch-bridge-train.webp",
      imageAlt: "A train crossing the Nine Arch Bridge, Ella",
    },
    {
      title: "Day 11 — Down to Yala",
      description:
        "Drive down from the hills past Ravana Falls to the dry south-east, with an afternoon jeep safari in Yala National Park for leopards, elephants and sloth bears.",
      stay: "Yala (Tissamaharama)",
      drive: "About 2.5–3 h (around 110 km)",
      meals: "Breakfast",
      image: "/images/destinations/yala-elephants.webp",
      imageAlt: "Wild elephants in Yala National Park",
    },
    {
      title: "Day 12 — Dawn Safari & Mirissa",
      description:
        "A second safari at first light, the best time for leopards, then breakfast and a drive along the coast to Mirissa for a beach afternoon and sunset from Coconut Tree Hill. In season, roughly December to April, book a whale-watching trip for the next morning.",
      stay: "Mirissa",
      drive: "About 2.5–3 h (around 130 km)",
      meals: "Breakfast",
      tip: "Whale-watching boats leave around 6:30 am and depend on sea conditions.",
      image: "/images/destinations/mirissa-beach-coconut-hill.webp",
      imageAlt: "Coconut Tree Hill above the beach at Mirissa",
    },
    {
      title: "Day 13 — Galle Fort",
      description:
        "A slow morning on the beach, then on to Galle past the stilt fishermen of Koggala. Walk the fort's ramparts to the lighthouse at sunset and have a farewell dinner inside the walls.",
      stay: "Galle",
      drive: "About 1 h (around 35 km)",
      meals: "Breakfast",
      image: "/images/destinations/galle-fort-lighthouse.webp",
      imageAlt: "Galle Fort lighthouse on the ramparts",
    },
    {
      title: "Day 14 — Colombo & Departure",
      description:
        "Drive up the Southern Expressway to Colombo for a short city tour if time allows, then on to the airport.",
      stay: "—",
      drive: "About 2–2.5 h to the airport",
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
      title: "Three Ancient Capitals",
      description:
        "Anuradhapura, Polonnaruwa and Sigiriya, all UNESCO World Heritage Sites.",
    },
    {
      title: "Two Safaris and Two Beaches",
      description:
        "Elephants in the north, leopards in Yala, then time on the sand at Mirissa and Galle.",
    },
    {
      title: "An Unhurried Pace",
      description:
        "Short driving days and free afternoons, so the trip never feels like a race.",
    },
  ],
  bestTimeToVisit: {
    heading: "December – April is Best",
    note: "December to April suits this route best, with dry weather in the hill country and calm seas on the south coast for the beach and whale watching. The ancient cities can be hot from March to September, so climbs and site visits are planned for the early morning.",
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
      name: "Nuwara Eliya",
      tagline: "Tea Estates & Cool Hills",
      description:
        "Rolling tea estates, a cool climate and the trails of Horton Plains.",
      href: "/destinations/nuwara-eliya",
      image: "/images/destinations/nuwara-eliya-tea-plantation.webp",
      imageAlt: "Tea estates covering the hills near Nuwara Eliya",
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
      question: "Is two weeks too long for Sri Lanka?",
      answer:
        "No. Two weeks lets you add the ancient capitals and some beach time without rushing. Most travellers find 12 to 14 days the ideal length.",
    },
    {
      question: "Can we add more beach days?",
      answer:
        "Yes. Swap a night or add extra nights in Mirissa, Unawatuna or Tangalle. Tell us how much beach time you want and we'll adjust.",
    },
    {
      question: "Is whale watching included?",
      answer:
        "No, because it depends on season and sea conditions. Boats from Mirissa run in the drier months, roughly December to April, and we book it on request.",
    },
    {
      question: "How fit do we need to be?",
      answer:
        "Average fitness is fine. Sigiriya, Mihintale and Little Adam's Peak involve steps and climbs, but you can go at your own pace or skip any of them.",
    },
  ],
  relatedPackages: [
    {
      name: "Sri Lanka Tours",
      tagline: "Rock Fortresses, Tea Hills & Leopards · 8 Days",
      description:
        "A private 8-day Sri Lanka tour.",
      href: "/tours/sri-lanka-tours",
      image: "/images/destinations/sigiriya-rock-fortress.webp",
      imageAlt: "Sigiriya Lion Rock rising above the forest, Sri Lanka",
    },
    {
      name: "Kerala & Sri Lanka Tours",
      tagline: "Backwaters, Tea Hills & the Lion Rock · 12 Days",
      description:
        "A private 12-day Kerala and Sri Lanka tour.",
      href: "/tours/kerala-sri-lanka-tours",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
  ],
  draftPendingReview: false,
};
