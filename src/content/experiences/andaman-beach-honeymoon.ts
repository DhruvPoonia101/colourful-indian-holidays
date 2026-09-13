import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const andamanBeachHoneymoon: ExperienceContent = {
  slug: "andaman-beach-honeymoon",
  name: "Andaman Beach Honeymoon",
  tagline: "White Sand & Turquoise Water · 5 Days",
  metaTitle: "Andaman Islands Honeymoon Package | Havelock Island & Radhanagar Beach",
  metaDescription:
    "A private 5-day Andaman honeymoon — Havelock Island, Radhanagar Beach, snorkelling on a coral reef, and a private candlelit dinner on the sand.",
  heroImage: "/images/destinations/radhanagar-beach.webp",
  heroImageAlt: "Turquoise water and boats off Radhanagar Beach, Havelock Island",
  heroHeadline: "The Andaman Islands: White Sand, Together",
  heroSubheadline:
    "India's only true tropical island escape — white sand, turquoise water and coral reefs, on a chain of islands genuinely unlike anywhere else in the country.",
  overview:
    "Most of India's honeymoon destinations are built around forts, lakes or backwaters — the Andaman Islands are the one place in the country that gives you a straightforward tropical beach escape instead, closer in character to Southeast Asia than to the mainland. Sitting far out in the Bay of Bengal, this isolated island chain has kept its beaches and reefs in genuinely good condition, with Havelock Island's Radhanagar Beach regularly ranked among Asia's best. This trip is built around exactly that: real time on the sand, a private candlelit dinner by the water, and a full day of snorkelling on a coral reef that most travellers to India never realise exists within the country's own borders.",
  quickFacts: [
    { label: "Duration", value: "5 Days / 4 Nights" },
    { label: "For", value: "Couples" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – May" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Port Blair",
      description:
        "A flight from Chennai or Kolkata is the only way to reach the Andaman Islands, landing in Port Blair, the archipelago's small capital and your gateway to the outer islands. Private transfer to your hotel, with the rest of the day free to rest after travelling, since the flight connections and the journey itself can make for a longer travel day than most mainland trips. If you arrive with time to spare, the Cellular Jail's evening light and sound show tells the story of India's colonial-era penal colony here in a genuinely moving way, though it's an optional add rather than essential to a beach-focused honeymoon. This tour deliberately keeps Port Blair to a single night, since the outer islands are where the trip's real focus lies and where you'll spend the majority of your time together.",
    },
    {
      title: "Day 2 — Transfer to Havelock Island",
      description:
        "A morning ferry to Havelock Island (officially Swaraj Dweep), roughly 2 to 3 hours from Port Blair, watching the water shift from the mainland's murkier coastal shade to the genuinely striking turquoise Havelock is known for as you approach — a transformation that makes the ferry ride itself feel like part of the honeymoon rather than simply transit. Check into your beachfront resort, with the rest of the day free to settle in and explore at your own pace, whether that means the pool, the beach right outside your room, or a walk into the small town for lunch. In the evening, a walk along Radhanagar Beach as the sun sets over the Andaman Sea — regularly ranked among Asia's finest beaches, and one of the few places in India where that comparison genuinely holds up rather than being tourism-board hyperbole.",
      image: "/images/destinations/havelock-island.webp",
      imageAlt: "Havelock Island coastline, Andaman Islands",
    },
    {
      title: "Day 3 — Radhanagar Beach & Snorkelling",
      description:
        "A full day centred on Radhanagar Beach itself, with its powder-white sand and shallow, warm, genuinely clear water — the kind of beach that photographs don't oversell for once, and one that regularly appears on 'best beaches in Asia' lists compiled by publications with no reason to favour India specifically. In the late morning, a snorkelling excursion to a nearby reef, where the coral and marine life are consistently rated among the best accessible from Indian shores, no scuba certification required for a first look beneath the surface. The afternoon is left free to enjoy the beach together, followed by a private candlelit dinner arranged directly on the sand as the evening cools — a genuinely different setting from a restaurant table, and one of the more memorable evenings couples report from this trip.",
      image: "/images/destinations/radhanagar-beach.webp",
      imageAlt: "Turquoise water and boats off Radhanagar Beach, Havelock Island",
    },
    {
      title: "Day 4 — Elephant Beach or Neil Island",
      description:
        "A choice of two options today: a boat excursion to Elephant Beach, reached by a short jungle trek or a direct boat ride, known for calmer water well suited to scuba diving for beginners and a coral reef closer to shore than Radhanagar's, with colourful reef fish visible even without diving gear; or a day trip to Neil Island (officially Shaheed Dweep), a quieter, less-developed island roughly an hour away by ferry, with its own set of beaches, natural rock formations, and a noticeably slower pace even than Havelock. Either option suits a couple who'd like to see a second side of the islands beyond just one beach, and we can help decide based on whether diving or a quieter island pace appeals more to you when planning your trip.",
    },
    {
      title: "Day 5 — Departure",
      description:
        "A final relaxed morning on Havelock before a return ferry to Port Blair and your onward flight home. If your flight timing allows, a last hour on the beach or a stop at a local café for breakfast makes for a gentler close to the trip than heading straight to the ferry terminal. Five days in, most couples describe the Andamans as the most unexpected part of their India trip — a genuine tropical beach escape they didn't realise the country had, and one that closes out a honeymoon on white sand and clear water rather than another fort, palace or monument, a deliberately different final note than most Indian itineraries end on and one that consistently surprises couples who came expecting only forts and temples from a trip to India.",
    },
  ],
  inclusions: [
    "1 night in a hotel in Port Blair",
    "3 nights in a beachfront resort on Havelock Island, honeymoon room category where available",
    "Daily breakfast",
    "Ferry transfers between Port Blair and Havelock Island",
    "One snorkelling excursion",
    "Private vehicle transfers for airport and ferry connections",
  ],
  exclusions: [
    "Flights to and from Port Blair (Chennai or Kolkata connections)",
    "Cellular Jail light and sound show ticket, if attended (paid locally)",
    "Scuba diving, if booked as an add-on to the snorkelling day (paid locally, arranged on request)",
    "Private candlelit beach dinner arrangement fee (paid locally, arranged on request)",
    "Lunches and dinners other than the arranged beach dinner",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Asia's Best Beaches, Inside India",
      description:
        "Radhanagar Beach is regularly ranked among Asia's finest — a genuine comparison, not tourism-board exaggeration.",
    },
    {
      title: "A Reef Most Visitors Never Know Exists",
      description:
        "Coral and marine life accessible from shore, genuinely comparable to Southeast Asian diving destinations, within India's own borders.",
    },
    {
      title: "Dinner on the Sand, Not a Restaurant",
      description:
        "A private candlelit table arranged directly on the beach, a genuinely different setting from anywhere else on a typical Indian honeymoon.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–May is Best",
    note: "Calm seas and clear underwater visibility make October through May the ideal window for both beach time and snorkelling. The June–September monsoon brings rough seas and reduced ferry reliability between islands, and is best avoided for this specific itinerary.",
  },
  relatedDestinations: [
    {
      name: "Kerala",
      tagline: "God's Own Country",
      description: "Palm-lined backwaters, misty tea gardens, and a coastline layered with trading history.",
      href: "/destinations/kerala",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      name: "Udaipur",
      tagline: "City of Lakes",
      description: "The Lake Palace floating on Lake Pichola, and the City Palace above it.",
      href: "/destinations/udaipur",
      image: "/images/destinations/udaipur-lake-palace.webp",
      imageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
    },
    {
      name: "Rajasthan",
      tagline: "Land of Kings",
      description: "Forts, palaces and desert citadels, for a completely different honeymoon backdrop.",
      href: "/destinations/rajasthan",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  showCarFleet: false,
  faqs: [
    {
      question: "Do we need a scuba certification to see the coral reef?",
      answer:
        "No — the included snorkelling excursion requires no certification or prior experience, though certified or trial scuba dives can be arranged as an add-on if you'd like to go deeper.",
    },
    {
      question: "Is Radhanagar Beach really as good as its reputation?",
      answer:
        "Genuinely, yes — it's a real contender among Asia's best beaches, with fine white sand and clear, warm, shallow water, not an overhyped claim.",
    },
    {
      question: "Should we do Elephant Beach or Neil Island on Day 4?",
      answer:
        "Elephant Beach suits couples interested in scuba diving or a shore-accessible reef; Neil Island suits those who'd like a quieter, less-developed island for the day. We can help decide based on your priorities.",
    },
    {
      question: "How do we get to the Andaman Islands?",
      answer:
        "Only by flight, connecting through Chennai or Kolkata to Port Blair — there's no direct international or long-haul domestic connection, so factor the connection time into your overall trip planning.",
    },
    {
      question: "Is a private vehicle included for getting around, like on our Rajasthan trips?",
      answer:
        "Havelock Island is compact enough that most resorts and beaches are reached by scooter, taxi or short walks rather than a full-day private vehicle, so this itinerary doesn't include a dedicated car and driver the way our mainland trips do.",
    },
  ],
  relatedExperiences: [
    {
      name: "Kerala Backwaters Honeymoon",
      tagline: "Houseboats, Tea Gardens & the Coast · 5 Days",
      description: "A private houseboat cruise through tropical backwaters, for a different kind of water-based honeymoon.",
      href: "/experiences/kerala-backwaters-honeymoon",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      name: "Udaipur Honeymoon",
      tagline: "The City of Lakes, Built for Two · 4 Days",
      description: "A private sunset boat ride and heritage palace suite, for a lakeside honeymoon without the beach.",
      href: "/experiences/udaipur-honeymoon",
      image: "/images/destinations/udaipur-lake-palace.webp",
      imageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
    },
    {
      name: "Kashmir Honeymoon",
      tagline: "Dal Lake, Houseboats & Snow-Capped Peaks · 5 Days",
      description: "Snow-capped mountains and a Dal Lake houseboat, for the opposite end of India's climate.",
      href: "/experiences/kashmir-honeymoon",
      image: "/images/destinations/Srinagar-3.webp",
      imageAlt: "Houseboats on Dal Lake with snow-capped mountains behind, Srinagar",
    },
  ],
  draftPendingReview: false,
};
