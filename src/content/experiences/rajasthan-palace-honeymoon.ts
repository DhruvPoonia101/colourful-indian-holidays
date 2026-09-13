import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const rajasthanPalaceHoneymoon: ExperienceContent = {
  slug: "rajasthan-palace-honeymoon",
  name: "Rajasthan Palace Honeymoon",
  tagline: "Two Palace Cities, Built for Two · 7 Days",
  metaTitle: "Rajasthan Palace Honeymoon | Jaipur & Udaipur Heritage Hotels",
  metaDescription:
    "A private 7-day Rajasthan honeymoon through Jaipur and Udaipur — heritage palace hotels throughout, a private sunset boat ride, and candlelit dinners each evening.",
  heroImage: "/images/destinations/amber-fort-jaipur.webp",
  heroImageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  heroHeadline: "Rajasthan for Two: Jaipur & Udaipur's Palace Hotels",
  heroSubheadline:
    "Two of Rajasthan's most romantic cities, spent entirely in heritage palace hotels — deliberately fewer stops than a standard circuit, so each city gets real time.",
  overview:
    "Most Rajasthan honeymoon requests we get start the same way: couples want the state's forts and palaces, but not the four-or-five-city circuit built for travellers seeing India for the first time. This trip is the answer to that — just two cities, Jaipur and Udaipur, each given proper time rather than a single rushed night, and every hotel chosen specifically for being a genuine heritage palace property rather than a standard hotel that happens to be nearby. It's a deliberately smaller, slower version of Rajasthan than our general circuit tours, built around evenings that matter as much as the sightseeing — candlelit dinners, a private boat ride, and rooms chosen for the occasion rather than simply available.",
  quickFacts: [
    { label: "Duration", value: "7 Days / 6 Nights" },
    { label: "For", value: "Couples" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Jaipur",
      description:
        "Private transfer from Jaipur airport or railway station to your heritage hotel — let us know it's a honeymoon when we arrange your stay, since several Jaipur palace properties offer a complimentary upgrade or a small welcome gesture for couples. The rest of the day is free to rest after travelling, with an easy first-evening option of a sunset visit to the Jal Mahal, the palace that appears to float in the middle of Man Sagar Lake, a short drive from most central hotels and a genuinely lovely first look at the city together. This trip deliberately keeps the arrival day light, since the six days ahead are built around a slower pace than a standard sightseeing circuit, and starting rested sets the right tone from the beginning rather than rushing into monuments on day one.",
    },
    {
      title: "Day 2 — Amber Fort & a Private Dinner",
      description:
        "A relaxed day at Amber Fort, the honey-coloured hilltop fortress with sweeping views over Maota Lake, followed by the City Palace complex, still partly home to Jaipur's former royal family. Rather than rushing to fit in every Jaipur monument, this day is kept deliberately lighter than a standard sightseeing circuit, leaving the afternoon free for your hotel's spa or pool if it has one — a genuine benefit of the two-city structure over a faster multi-stop tour that would keep you moving from sunrise to sunset. In the evening, a private candlelit dinner arranged on a rooftop or courtyard, a genuinely different experience from a shared restaurant table — most heritage properties in Jaipur can arrange this with a few days' advance notice, and it's worth confirming when planning your trip rather than requesting on arrival.",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      title: "Day 3 — Jaipur at Leisure",
      description:
        "A free day to enjoy Jaipur at your own pace — a slow walk through Johari Bazaar for jewellery or Bapu Bazaar for textiles, a couple's cooking class if your hotel offers one, or simply time by the pool. An optional hot air balloon ride over the Aravalli hills at dawn is available for couples who'd like a genuinely memorable shared experience beyond the standard sightseeing, best booked in advance given weather-dependent scheduling and limited daily departures during peak season. This day is intentionally unstructured, since a honeymoon benefits from at least one day with nothing fixed on the itinerary at all, a deliberate contrast to the pace of a standard multi-city Rajasthan tour that would keep both of you on a schedule throughout the whole week.",
      image: "/images/destinations/jaipur-city-palace.webp",
      imageAlt: "Jaipur City Palace",
    },
    {
      title: "Day 4 — Jaipur to Udaipur",
      description:
        "A domestic flight or private drive to Udaipur, widely considered Rajasthan's most romantic city and the natural second half of this trip. The road route takes roughly 6 to 7 hours through changing Rajasthan countryside, past small towns and farmland most travellers never see, while flying saves most of a day if you'd rather maximise time in each city — we can arrange either depending on your preference and how much of the journey itself you'd like to experience together. Arriving in Udaipur in the evening leaves time for a first walk along Lake Pichola as the palace lights come on, a striking change of scenery from Jaipur's forts to Udaipur's lakes, and a genuinely different second half to the honeymoon than staying in one city the whole trip would offer.",
    },
    {
      title: "Day 5 — City Palace & Old Town",
      description:
        "A relaxed morning at Udaipur's City Palace complex, the largest of its kind in Rajasthan, built up over nearly 400 years by successive maharajas and offering some of the most photogenic courtyards and mirrored halls in the state for a couple's portrait. In the afternoon, a quieter walk through the old town's art galleries and silver workshops, or simply time back at your hotel by the pool or in the spa, browsing at a pace that suits you rather than rushing to a fixed schedule. This day is kept lighter than a standard sightseeing itinerary, since tomorrow's centrepiece — a private sunset boat ride — is the moment this whole trip is really built around, and it's worth arriving at it rested rather than tired from back-to-back full days.",
      image: "/images/destinations/udaipur-city-palace.webp",
      imageAlt: "Udaipur City Palace overlooking Lake Pichola",
    },
    {
      title: "Day 6 — A Private Sunset Boat Ride",
      description:
        "A free morning to enjoy your hotel or explore at your own pace, before the trip's centrepiece: a private sunset boat ride on Lake Pichola, booked exclusively for the two of you rather than a shared departure, drifting past the floating Lake Palace as the light turns gold, with champagne or snacks available on board if you'd like to add them. This hour is consistently the one couples mention most when they look back on a Rajasthan honeymoon, and closing the trip with it — rather than earlier in the itinerary — means it's genuinely the last major memory before departure, rather than being crowded out by more sightseeing afterwards, which is exactly why we build the itinerary in this order rather than the reverse.",
      image: "/images/destinations/udaipur-lake-pichola-boat.webp",
      imageAlt: "Private boat ride on Lake Pichola at sunset, Udaipur",
    },
    {
      title: "Day 7 — Departure",
      description:
        "A final unhurried morning, with time for a last walk along the lake or a couple's spa treatment if your hotel offers one and availability allows — worth confirming in advance rather than requesting on arrival, especially during busier months when the best slots book out quickly. Return for check-out and a private transfer to Udaipur airport or railway station for departure. Seven days across two genuinely different palace cities, most couples leave this trip with a far stronger sense of having actually experienced Rajasthan together, rather than having sampled it across a longer, faster-paced circuit built for first-time sightseeing rather than a honeymoon specifically designed around slowing down and being together rather than checking off monuments.",
      image: "/images/destinations/udaipur-lake-palace.webp",
      imageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
    },
  ],
  inclusions: [
    "6 nights in heritage palace hotels, honeymoon room category where available",
    "Daily breakfast",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide for sightseeing days",
    "One private sunset boat ride on Lake Pichola",
    "Monument entry fees as per itinerary",
  ],
  exclusions: [
    "Domestic flight between Jaipur and Udaipur, if chosen over the road route",
    "Candlelit dinner arrangement fees (paid locally, arranged on request)",
    "Hot air balloon ride in Jaipur, if booked (paid locally, arranged on request)",
    "Couple's spa treatments (paid locally, arranged on request)",
    "Lunches and dinners other than the arranged candlelit dinner",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Only Two Cities, Not Five",
      description:
        "A deliberately smaller circuit than our general Rajasthan tours, so Jaipur and Udaipur each get real time rather than a single rushed night.",
    },
    {
      title: "Every Hotel is a Genuine Palace",
      description:
        "Heritage properties chosen specifically for the occasion, not standard hotels selected for convenience or location alone.",
    },
    {
      title: "A Private Boat to Close the Trip",
      description:
        "The sunset boat ride on Lake Pichola comes near the end, so it's the memory you carry home rather than one crowded out by more sightseeing after it.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make sightseeing and the boat ride genuinely comfortable in both cities. April to June turns hot across Rajasthan, and the July–September monsoon brings humidity and occasional heavy rain.",
  },
  relatedDestinations: [
    {
      name: "Jaipur",
      tagline: "The Pink City",
      description: "Amber Fort, City Palace, Hawa Mahal and the bazaars of the old walled city.",
      href: "/destinations/jaipur",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
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
      description: "Forts, palaces and desert citadels across six essential cities.",
      href: "/destinations/rajasthan",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Why only two cities instead of a fuller Rajasthan circuit?",
      answer:
        "A honeymoon benefits from time rather than ground covered — two cities done properly, with real time for each and evenings that matter, tends to leave couples happier than a faster four- or five-city circuit built for first-time sightseeing.",
    },
    {
      question: "Should we fly or drive between Jaipur and Udaipur?",
      answer:
        "Flying saves most of a day if you'd rather maximise time in each city; driving takes 6 to 7 hours and shows more of the countryside. We can arrange either based on your preference.",
    },
    {
      question: "Can we add a third city if we have more time?",
      answer:
        "Yes — Jodhpur or Pushkar can be added if you have extra days, though we'd suggest keeping the pace unhurried rather than squeezing in a third city on the same seven-day timeline.",
    },
    {
      question: "How far in advance should we book the candlelit dinners and boat ride?",
      answer:
        "We'd recommend confirming these when booking your trip rather than on arrival — the best arrangements have limited availability, especially during peak season (October to March).",
    },
    {
      question: "Are the heritage hotels genuinely former palaces, not just palace-styled buildings?",
      answer:
        "Where we book heritage palace category hotels, yes — several properties in both cities occupy real former royal residences, and we can confirm exactly which on request when planning your trip.",
    },
  ],
  relatedExperiences: [
    {
      name: "Udaipur Honeymoon",
      tagline: "The City of Lakes, Built for Two · 4 Days",
      description: "A shorter, Udaipur-only version of this trip for couples with less time.",
      href: "/experiences/udaipur-honeymoon",
      image: "/images/destinations/udaipur-lake-palace.webp",
      imageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
    },
    {
      name: "Taj Mahal Honeymoon",
      tagline: "A Monument Built for Love · 3 Days",
      description: "Add the Taj Mahal to this trip for a longer honeymoon covering more of North India.",
      href: "/experiences/taj-mahal-honeymoon",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Kashmir Honeymoon",
      tagline: "Dal Lake, Houseboats & Snow-Capped Peaks",
      description: "Srinagar's houseboats and Mughal gardens, for a completely different honeymoon backdrop.",
      href: "/experiences/kashmir-honeymoon",
      image: "/images/destinations/Srinagar.webp",
      imageAlt: "Tulip gardens with the Himalayas behind, Srinagar, Kashmir",
    },
  ],
  draftPendingReview: false,
};
