import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const desertSafari: ExperienceContent = {
  slug: "desert-safari",
  name: "Desert Safari",
  tagline: "Camel Camps & the Thar Desert · 3 Days",
  metaTitle: "Thar Desert Safari Package | Jaisalmer Camel Safari & Overnight Desert Camp",
  metaDescription:
    "A 3-day Thar Desert safari from Jaisalmer — a sunset camel safari into the dunes, two nights at desert camps, a Bishnoi village visit, and an optional jeep dune-bashing excursion.",
  heroImage: "/images/destinations/jaisalmer-desert.webp",
  heroImageAlt: "Camel caravan crossing the Thar Desert dunes near Jaisalmer",
  heroHeadline: "The Thar Desert: Camel Camps Under an Open Sky",
  heroSubheadline:
    "A proper two nights in the desert rather than a rushed evening camel ride — sunset dunes, folk music around a bonfire, and sunrise back on camelback.",
  overview:
    "Most Rajasthan itineraries treat the desert as a single evening add-on — a camel ride at sunset, a quick photo, then back to a hotel in Jaisalmer for the night. This trip is built for travellers who want the desert to actually be the point, not a footnote to a longer city-based circuit. Two nights at desert camps, spaced further apart to move genuinely deeper into the Thar than the closer dunes most day-trippers see, with a Bishnoi village visit woven in for cultural context most desert excursions skip entirely. Both camel and jeep safari options are available depending on your pace, and by the third morning you'll have watched the desert change character twice — from the touristy but genuinely striking Sam dunes to somewhere quieter, with far fewer other visitors around.",
  quickFacts: [
    { label: "Duration", value: "3 Days / 2 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Feb" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive & Sunset Safari",
      description:
        "Private transfer from Jaisalmer airport or railway station, or pickup from your Jaisalmer hotel if you're arriving after other sightseeing, to the Sam dunes, roughly 40 to 45 minutes outside the city and the most accessible stretch of the Thar Desert. In the late afternoon, a camel safari into the dunes — the traditional way to experience the desert, at a slow enough pace to actually take in the changing light rather than rush past it — timed to reach a good vantage point as the sun sets over the sand. Arrive at your first desert camp by evening for dinner and a folk music and dance performance around a bonfire, a genuinely lively contrast to the quiet of the dunes just hours earlier, before sleeping in a proper tented camp under an unusually clear, light-pollution-free sky.",
      image: "/images/destinations/jaisalmer-desert.webp",
      imageAlt: "Camel caravan crossing the Thar Desert dunes near Jaisalmer",
    },
    {
      title: "Day 2 — Bishnoi Village & a Deeper Camp",
      description:
        "A relaxed morning safari back toward a nearby Bishnoi village, home to a community historically renowned for their strict environmental and wildlife conservation practices, predating the modern conservation movement by centuries — visiting members of the community offers a genuinely different angle on desert life than the dunes alone provide. In the afternoon, continue further into the Thar to a second, more remote camp, noticeably quieter than the first and with far fewer other visitors given the extra distance from Jaisalmer. For travellers who'd prefer a faster pace than camelback, a jeep safari with genuine dune-bashing is available as an alternative for this leg, a completely different, more adrenaline-driven way to cover the same ground. A second evening of desert cuisine and folk performances follows at the new camp.",
    },
    {
      title: "Day 3 — Sunrise Safari & Departure",
      description:
        "An early start for a sunrise camel or jeep ride back across the dunes, the desert taking on a genuinely different character in the cool morning light than the golden tones of sunset two evenings before — considerably fewer visitors are out at this hour, which makes for a quieter, more contemplative final look at the Thar before the day's heat builds. Return to your camp for breakfast before a private transfer back to Jaisalmer, either to the airport or railway station for departure, or to your hotel if you're continuing on to more Jaisalmer sightseeing. Three days in, most travellers describe the desert as feeling genuinely different from the version most Rajasthan circuits give it — an actual multi-day experience rather than a single rushed evening tacked onto a busier itinerary.",
    },
  ],
  inclusions: [
    "2 nights at desert camps (tented accommodation), twin-sharing",
    "All meals while at the desert camps",
    "Private air-conditioned vehicle for all road transfers",
    "One sunset and one sunrise camel safari",
    "Folk music and dance performances on both evenings",
    "English-speaking guide throughout",
  ],
  exclusions: [
    "Flights or train tickets to and from Jaisalmer",
    "Jeep dune-bashing upgrade, if chosen over the camel safari (paid locally, arranged on request)",
    "Bishnoi village visit donation or handicraft purchases (optional, paid locally)",
    "Personal expenses, tips, and travel insurance",
    "Camera fees, if applicable at any stop",
  ],
  highlights: [
    {
      title: "Two Nights, Not One Evening",
      description:
        "A genuine multi-day desert experience rather than the single rushed sunset camel ride most Rajasthan circuits treat as sufficient.",
    },
    {
      title: "A Second, Quieter Camp",
      description:
        "Moving further into the Thar for the second night means noticeably fewer other visitors than the closer, more touristy Sam dunes.",
    },
    {
      title: "Real Cultural Context",
      description:
        "The Bishnoi village visit adds genuine substance beyond dunes and camel rides, most standard desert excursions skip this entirely.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–February is Best",
    note: "Cool, dry conditions make both the camel safari and overnight camping genuinely comfortable, with desert nights turning cold enough for warm layers even when daytime temperatures are pleasant. April through June turns punishing in the desert heat, and this itinerary is best avoided during that window entirely.",
  },
  relatedDestinations: [
    {
      name: "Jaisalmer",
      tagline: "The Golden City",
      description: "A living sandstone fort on the edge of the Thar Desert, with camel safaris beyond.",
      href: "/destinations/jaisalmer",
      image: "/images/destinations/jaisalmer-fort.webp",
      imageAlt: "Jaisalmer Fort's golden sandstone walls at sunset",
    },
    {
      name: "Rajasthan",
      tagline: "Land of Kings",
      description: "Forts, palaces and desert citadels across six essential cities.",
      href: "/destinations/rajasthan",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Jodhpur",
      tagline: "The Blue City",
      description: "Mehrangarh Fort towering over a maze of indigo-washed old-town streets.",
      href: "/destinations/jodhpur",
      image: "/images/destinations/mehrangarh-fort-jodhpur.webp",
      imageAlt: "Mehrangarh Fort towering above Jodhpur's blue-washed old town",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Should we choose camel or jeep safari?",
      answer:
        "Camel safari is the traditional, slower-paced option and better suited to photography and a quieter experience; jeep safari with dune-bashing is faster and more adventure-oriented. Both are available on this itinerary, and we can help decide based on your preference.",
    },
    {
      question: "How cold does it get in the desert at night?",
      answer:
        "Genuinely cold, especially October through February — desert nights can drop well below daytime temperatures even when the days themselves are warm, so warm layers are essential regardless of season.",
    },
    {
      question: "Is 2 nights necessary, or is 1 night enough?",
      answer:
        "1 night is a reasonable shorter alternative if your schedule is tight, but the second night's more remote camp and the Bishnoi village visit are what genuinely differentiate this from the standard single-evening desert add-on most circuits include.",
    },
    {
      question: "Are the desert camps comfortable, or fairly basic?",
      answer:
        "Camps range from comfortable tented accommodation with proper beds and attached facilities to more basic setups depending on which camp operator we book — let us know your comfort expectations and we'll match accordingly.",
    },
    {
      question: "Can this be added on to a longer Rajasthan trip instead of standalone?",
      answer:
        "Yes — this pairs naturally with the Jaisalmer Tour, the Rajasthan Culture & Heritage Trail, or the Grand Rajasthan Circuit. Let us know your available days and we'll adjust the itinerary accordingly.",
    },
  ],
  relatedExperiences: [
    {
      name: "Rajasthan Palace Honeymoon",
      tagline: "Two Palace Cities · 7 Days",
      description: "Jaipur and Udaipur's heritage palace hotels, for a very different Rajasthan experience.",
      href: "/experiences/rajasthan-palace-honeymoon",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Camel Festival, Bikaner",
      tagline: "Festival Guide",
      description: "A desert festival celebrating Rajasthan's working relationship with camels.",
      href: "/experiences/camel-festival",
      image: "/images/packages/jaipur-bikaner-jaisalmer-jodhpur-udaipur-pushkar.webp",
      imageAlt: "Traditional Rajasthani performers at a desert camel festival",
    },
    {
      name: "Pushkar Fair",
      tagline: "Festival Guide",
      description: "The world's largest camel fair, held annually on the edge of the Thar Desert.",
      href: "/experiences/pushkar-fair",
      image: "/images/packages/jaipur-bikaner-jaisalmer-jodhpur-udaipur-pushkar.webp",
      imageAlt: "Traditional Rajasthani performers at the Pushkar Camel Fair",
    },
  ],
  draftPendingReview: false,
};
