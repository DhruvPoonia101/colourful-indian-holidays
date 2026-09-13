import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const keralaBackwatersHoneymoon: ExperienceContent = {
  slug: "kerala-backwaters-honeymoon",
  name: "Kerala Backwaters Honeymoon",
  tagline: "Houseboats, Tea Gardens & the Coast · 5 Days",
  metaTitle: "Kerala Honeymoon Package | Private Houseboat, Munnar & Fort Kochi",
  metaDescription:
    "A private 5-day Kerala honeymoon — a private houseboat cruise through Alleppey's backwaters, Fort Kochi's colonial lanes, and Munnar's misty tea gardens.",
  heroImage: "/images/destinations/alleppey-backwaters.webp",
  heroImageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
  heroHeadline: "Kerala: Backwaters, Tea Gardens & the Coast, Together",
  heroSubheadline:
    "India's classic tropical honeymoon — a private houseboat through Alleppey's palm-lined canals, paired with Fort Kochi's colonial charm and Munnar's cool hill-country tea gardens.",
  overview:
    "Kerala works as a honeymoon destination in a way few other parts of India do, simply because so much of it is built around slowing down rather than sightseeing at pace. The centrepiece of this trip is a private houseboat on Alleppey's backwaters — a network of canals, lagoons and lakes running parallel to the coast, where your boat becomes your hotel for the night and the only schedule is meals and sunset. Around that, we've added Fort Kochi for its colonial-era lanes and Chinese fishing nets, and Munnar for a genuinely different climate entirely — cool, misty hill country covered in tea plantations, a sharp contrast to the tropical coast you'll have just left. Five days across three distinct landscapes, without ever feeling rushed between them.",
  quickFacts: [
    { label: "Duration", value: "5 Days / 4 Nights" },
    { label: "For", value: "Couples" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Kochi",
      description:
        "Private transfer from Kochi airport to your hotel, ideally a heritage property in Fort Kochi rather than the newer city across the harbour — let us know it's a honeymoon when we arrange your stay, since several Fort Kochi properties occupy genuinely old colonial-era buildings with real character rather than modern hotels built to imitate one. The rest of the day is free to rest after travelling, with an easy first-evening option of a walk along the Fort Kochi waterfront to see the iconic Chinese fishing nets, best photographed as the fishermen work them at sunset. This tour deliberately keeps the arrival day unstructured, since the houseboat cruise later in the trip is the genuine centrepiece and everything before it is meant to ease you in gently rather than compete for attention.",
    },
    {
      title: "Day 2 — Fort Kochi & an Evening Kathakali Performance",
      description:
        "A relaxed day exploring Fort Kochi's genuinely unusual mix of Portuguese, Dutch and British colonial architecture layered over centuries of Arabian Sea trading history — a character unlike anywhere else in India. Visit the Chinese fishing nets up close, the Dutch Palace with its Kerala mural paintings depicting Hindu epics, and the old Jewish quarter of Mattancherry with its narrow spice-trading lanes still lined with antique shops and warehouses that once handled cargo from across the Indian Ocean. In the evening, attend a traditional Kathakali dance performance, Kerala's centuries-old classical dance-drama known for its elaborate costumes and expressive face paint — many venues let couples watch the artists' pre-show makeup application, a genuinely fascinating process that takes hours and is rarely seen by tourists elsewhere in the country.",
      image: "/images/destinations/kochi-kathakali.webp",
      imageAlt: "A Kathakali dancer's elaborate makeup and costume, Kochi",
    },
    {
      title: "Day 3 — Private Houseboat on the Backwaters",
      description:
        "A morning drive to Alleppey, roughly 1.5 to 2 hours from Kochi, to board your private houseboat — a traditional kettuvallam, once used to transport rice and spices along these same waterways, now converted into a floating hotel room with its own crew, chef and private deck. The boat cruises slowly through a network of canals, lagoons and paddy fields for the rest of the day, past small villages and palm groves, with meals cooked fresh on board using Kerala's distinctive coconut-and-spice cuisine, often including the day's catch if you'd like fresh seafood. You'll moor for the night on a quiet stretch of water, with nothing scheduled beyond dinner and watching the sky change colour — consistently the single most-remembered part of a Kerala honeymoon among the couples we've sent here.",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      title: "Day 4 — Disembark & on to Munnar",
      description:
        "A final relaxed breakfast on board before disembarking mid-morning, then a scenic drive up into the Western Ghats to Munnar, roughly 4 hours from Alleppey, the landscape shifting dramatically from tropical backwaters to cool, misty hill country as you climb higher into the mountains. Munnar's temperature drops noticeably compared to the coast, often a genuinely welcome change after several warm, humid days, and the drive itself winds past increasingly dense tea plantations the higher you go, with waterfalls and viewpoints worth a brief stop along the way to stretch your legs. Arrive in the evening with time to settle into your hotel and enjoy the cooler air, a completely different climate and landscape from anywhere else on this trip.",
    },
    {
      title: "Day 5 — Munnar Tea Gardens & Departure",
      description:
        "A morning walk through Munnar's rolling tea plantations, some of the most photogenic landscapes in South India, with the option of visiting a working tea factory to see how the leaves are processed from plant to cup, from plucking through drying and grading. The Western Ghats' cool climate and near-constant mist give Munnar an atmosphere genuinely unlike the rest of Kerala, and most couples find it a memorable, unexpected close to the trip rather than an afterthought tacked onto the end of a backwaters holiday. Return for a private transfer to Kochi airport for departure, roughly 4 hours away — five days across three completely different landscapes, most couples leave having experienced far more of Kerala's real range than a beach-only or backwaters-only trip would show.",
      image: "/images/destinations/munnar-tea-plantation.webp",
      imageAlt: "Rolling tea plantations in the mist, Munnar, Kerala",
    },
  ],
  inclusions: [
    "1 night in a heritage hotel in Fort Kochi",
    "1 night aboard a private houseboat, all meals included",
    "2 nights in a hotel of your choice in Munnar",
    "Daily breakfast (and all meals while on the houseboat)",
    "Private air-conditioned vehicle for all road transfers",
    "English-speaking guide for sightseeing days",
  ],
  exclusions: [
    "Flights or train tickets to and from Kochi",
    "Kathakali performance ticket (paid locally, arranged on request)",
    "Tea factory visit entry in Munnar (paid locally)",
    "Lunches and dinners in Fort Kochi and Munnar (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "A Private Houseboat, Not a Shared Cruise",
      description:
        "Your own kettuvallam with a private crew and chef, not a group tour boat shared with other travellers.",
    },
    {
      title: "Three Genuinely Different Landscapes",
      description:
        "Fort Kochi's colonial coast, Alleppey's tropical backwaters, and Munnar's misty hill country — a real range in five days.",
    },
    {
      title: "A Kathakali Performance, Properly Explained",
      description:
        "Kerala's centuries-old dance-drama, with many venues letting couples watch the elaborate pre-show makeup process most tourists never see.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make both the houseboat cruise and Munnar's outdoor tea garden walks genuinely comfortable. April to June turns hot and humid on the coast, and the June–September monsoon brings heavy rain, though Munnar stays lush and green throughout the wet season if you don't mind occasional showers.",
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
      name: "Rajasthan",
      tagline: "Land of Kings",
      description: "Forts, palaces and desert citadels, for a completely different honeymoon backdrop.",
      href: "/destinations/rajasthan",
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
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is the houseboat genuinely private, not shared with other couples?",
      answer:
        "Yes — the entire boat, including its crew and chef, is booked exclusively for you, not shared with other travellers or joined to a group departure.",
    },
    {
      question: "Is one night on the houseboat enough?",
      answer:
        "One night is the standard and gives a genuine sense of the backwaters at both sunset and sunrise; we can extend to two nights if you'd like more time on the water and less elsewhere.",
    },
    {
      question: "How much does the temperature really change between Alleppey and Munnar?",
      answer:
        "Genuinely a lot — Alleppey is warm and humid year-round, while Munnar's hill-country elevation keeps it noticeably cooler, often requiring a light jacket in the evenings even in warmer months.",
    },
    {
      question: "Can we skip Munnar and just do Kochi and the backwaters?",
      answer:
        "Yes — this itinerary is a starting template, and a shorter 3-day version focused on Fort Kochi and the houseboat is easy to arrange if you'd rather not add the drive up to Munnar.",
    },
    {
      question: "Is Kerala safe and comfortable for a honeymoon outside peak season?",
      answer:
        "October through March offers the most comfortable weather on the coast, though Munnar stays pleasant nearly year-round given its elevation — we can advise on timing based on which parts of this itinerary matter most to you.",
    },
  ],
  relatedExperiences: [
    {
      name: "Udaipur Honeymoon",
      tagline: "The City of Lakes, Built for Two · 4 Days",
      description: "A private sunset boat ride and a heritage palace suite, for a very different Indian honeymoon.",
      href: "/experiences/udaipur-honeymoon",
      image: "/images/destinations/udaipur-lake-palace.webp",
      imageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
    },
    {
      name: "Taj Mahal Honeymoon",
      tagline: "A Monument Built for Love · 3 Days",
      description: "Sunrise at the world's most famous monument to love, paired with a private candlelit dinner.",
      href: "/experiences/taj-mahal-honeymoon",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Rajasthan Palace Honeymoon",
      tagline: "Two Palace Cities · 7 Days",
      description: "Jaipur and Udaipur's heritage palace hotels, for couples drawn to forts rather than backwaters.",
      href: "/experiences/rajasthan-palace-honeymoon",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  draftPendingReview: false,
};
