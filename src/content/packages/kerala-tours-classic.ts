import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const keralaToursClassic: PackageContent = {
  slug: "kerala-tours-classic",
  name: "Kerala Tours",
  tagline: "The Classic Circuit · 6 Days",
  metaTitle: "Kerala Tour Package | Kochi, Alleppey Backwaters & Munnar",
  metaDescription:
    "A private 6-day Kerala tour — Fort Kochi's colonial lanes, a houseboat cruise through Alleppey's backwaters, and Munnar's misty tea plantations.",
  heroImage: "/images/destinations/alleppey-backwaters.webp",
  heroImageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
  heroHeadline: "Kerala: Kochi, Backwaters & Tea Gardens",
  heroSubheadline:
    "The classic first-time introduction to Kerala — colonial Fort Kochi, a houseboat through the backwaters, and the cool hill country of Munnar.",
  overview:
    "Kerala consistently surprises first-time visitors with how different it feels from the rest of India — a genuinely tropical climate, a coastline built around water rather than forts, and a slower pace throughout. This circuit covers the three destinations that between them capture most of what makes the state distinctive: Fort Kochi's centuries of colonial trading history, a night aboard a traditional houseboat drifting through Alleppey's backwater canals, and Munnar's cool, misty tea plantations in the Western Ghats, a genuinely different climate from the coast just a few hours' drive away. Six days is enough to see all three properly rather than rushing between them.",
  quickFacts: [
    { label: "Duration", value: "6 Days / 5 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Kochi",
      description:
        "Private transfer from Kochi airport to your hotel, ideally in Fort Kochi rather than the newer city across the harbour, since the old quarter's colonial-era lanes and waterfront are genuinely worth staying close to rather than commuting in for a single day. The rest of the day is free to rest after travelling, with an easy first-evening option of a walk along the Fort Kochi waterfront to see the iconic Chinese fishing nets, best photographed as fishermen work them at sunset. This tour deliberately keeps the arrival day light, since a full sightseeing day and an overnight houseboat cruise are both still ahead, and starting rested makes a genuine difference to how the rest of the trip feels from here.",
    },
    {
      title: "Day 2 — Fort Kochi Sightseeing",
      description:
        "A full day exploring Fort Kochi's genuinely unusual mix of Portuguese, Dutch and British colonial architecture, layered over centuries of Arabian Sea spice trading history unlike anywhere else in India. Visit the Chinese fishing nets up close, the Dutch Palace with its Kerala mural paintings depicting Hindu epics, and the old Jewish quarter of Mattancherry, its narrow lanes still lined with antique shops and spice warehouses that once handled cargo from across the Indian Ocean and remain a genuinely good spot for browsing. In the evening, attend a traditional Kathakali dance performance, Kerala's centuries-old classical dance-drama known for elaborate costumes and expressive face paint — many venues let visitors watch the artists' hours-long pre-show makeup process, rarely seen by tourists elsewhere in India.",
      image: "/images/destinations/kochi-3.webp",
      imageAlt: "Chinese fishing nets at sunset, Fort Kochi, Kerala",
    },
    {
      title: "Day 3 — Alleppey Houseboat Cruise",
      description:
        "A morning drive to Alleppey, roughly 1.5 to 2 hours from Kochi, to board a traditional kettuvallam — a houseboat once used to transport rice and spices along these same waterways, now converted into a comfortable floating hotel room with its own crew and chef. The boat cruises slowly through a network of canals, lagoons and paddy fields for the rest of the day, past small villages and palm groves, with meals cooked fresh on board using Kerala's distinctive coconut-and-spice cuisine, often including the day's catch if you'd like fresh seafood straight from the backwaters themselves. You'll moor for the night on a quiet stretch of water, with nothing scheduled beyond dinner and watching the sky change colour — consistently the most-remembered part of a Kerala trip among the travellers we've sent here.",
      image: "/images/destinations/alleppey-2.webp",
      imageAlt: "Alleppey backwaters at sunset, Kerala",
    },
    {
      title: "Day 4 — Disembark & on to Munnar",
      description:
        "A final breakfast on board before disembarking mid-morning, then a scenic drive up into the Western Ghats to Munnar, roughly 4 hours from Alleppey, the landscape shifting dramatically from tropical backwaters to cool, misty hill country as you climb higher into the mountains. Munnar's temperature drops noticeably compared to the coast, often a genuinely welcome change after several warm, humid days, and the drive itself winds past increasingly dense tea plantations the higher you go, with waterfalls and viewpoints worth a brief stop along the way to stretch your legs and take in the view before continuing upward. Arrive in the evening with time to settle into your hotel and enjoy the cooler air, a completely different climate from anywhere else on this trip.",
    },
    {
      title: "Day 5 — Munnar Tea Gardens",
      description:
        "A morning walk through Munnar's rolling tea plantations, some of the most photogenic landscapes in South India, with the option of visiting a working tea factory to see how the leaves are processed from plant to cup, from plucking through drying and grading, and a chance to sample fresh Munnar tea at the source. The Western Ghats' cool climate and near-constant mist give Munnar an atmosphere genuinely unlike the rest of Kerala, and most travellers find it a memorable, unexpected contrast to the tropical coast just a few hours behind them. In the afternoon, an optional visit to Eravikulam National Park, home to the endangered Nilgiri tahr, a mountain goat found only in this part of the Western Ghats, or simply more time among the tea gardens at your own pace.",
      image: "/images/destinations/munnar-tea-plantation.webp",
      imageAlt: "Rolling tea plantations in the mist, Munnar, Kerala",
    },
    {
      title: "Day 6 — Departure",
      description:
        "A final relaxed morning in Munnar before the roughly 4-hour drive back to Kochi for your onward or international departure flight. If your flight allows a little extra time, your guide can suggest one last stop for a spice market visit or a coffee at a plantation-view café before the drive back. Looking back over six days, the trip moves from Fort Kochi's colonial coast through Alleppey's tropical backwaters to Munnar's cool hill country — three genuinely different landscapes and climates within a single, compact state, and a real introduction to why Kerala consistently earns its reputation as one of India's most distinctive regions to visit at all.",
    },
  ],
  inclusions: [
    "1 night in a heritage hotel in Fort Kochi",
    "1 night aboard a private houseboat, all meals included",
    "3 nights in a hotel of your choice in Munnar",
    "Daily breakfast (and all meals while on the houseboat)",
    "Private air-conditioned vehicle for all road transfers",
    "English-speaking guide for sightseeing days",
  ],
  exclusions: [
    "Flights or train tickets to and from Kochi",
    "Kathakali performance ticket (paid locally, arranged on request)",
    "Tea factory and Eravikulam National Park entry (paid locally)",
    "Lunches and dinners in Fort Kochi and Munnar (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Three Genuinely Different Landscapes",
      description:
        "Fort Kochi's colonial coast, Alleppey's tropical backwaters, and Munnar's misty hill country — a real range in six days.",
    },
    {
      title: "A Real Houseboat, Not a Day Trip",
      description:
        "An overnight cruise aboard your own kettuvallam, with a private crew and chef, rather than a rushed daytime boat ride.",
    },
    {
      title: "A Kathakali Performance, Properly Explained",
      description:
        "Kerala's centuries-old dance-drama, with many venues letting visitors watch the elaborate pre-show makeup process most tourists never see.",
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
      name: "Tamil Nadu Beaches",
      tagline: "South India's Coastline",
      description: "A natural extension south for travellers who'd like more of the coast beyond Kerala.",
      href: "/destinations/tamil-nadu-beaches",
      image: "/images/destinations/tamil-nadu-beaches.webp",
      imageAlt: "Tamil Nadu's coastline",
    },
    {
      name: "Goa",
      tagline: "India's Beach Capital",
      description: "Portuguese-era churches and beaches, for travellers extending their South India trip further north.",
      href: "/destinations/goa",
      image: "/images/destinations/Goa.webp",
      imageAlt: "Goa's coastline",
    },
  ],
  showCarFleet: true,
  faqs: [
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
      question: "Can we add a beach stop or wildlife safari to this circuit?",
      answer:
        "Yes — this itinerary is a starting template, and we regularly extend it with Kerala's beaches around Kovalam or Varkala, or a wildlife-focused stop at Periyar near Thekkady, depending on your available days.",
    },
    {
      question: "Is Kerala safe and comfortable for families with children?",
      answer:
        "Yes — the houseboat cruise, tea garden walks and Fort Kochi's flat, walkable lanes are all genuinely manageable for families, and the pace throughout is naturally slower than a fort-and-palace circuit elsewhere in India.",
    },
    {
      question: "Is October through March really necessary, or can we visit other times?",
      answer:
        "October through March offers the most comfortable weather on the coast, though Munnar stays pleasant nearly year-round given its elevation — we can advise on timing based on which parts of this itinerary matter most to you.",
    },
  ],
  relatedPackages: [
    {
      name: "Kochi City Tour",
      tagline: "Fort Kochi & Colonial Heritage",
      description: "A Kochi-only version of this trip for travellers who want to focus on the coast alone.",
      href: "/tours/kochi-tour",
      image: "/images/destinations/kochi-3.webp",
      imageAlt: "Chinese fishing nets at sunset, Fort Kochi, Kerala",
    },
    {
      name: "Alleppey Backwaters Tour",
      tagline: "Houseboats & Palm-Lined Canals",
      description: "A backwaters-only version of this trip for travellers with less time.",
      href: "/tours/alleppey-backwaters-tour",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      name: "Munnar Hill Station Tour",
      tagline: "Tea Gardens & Cool Mountain Air",
      description: "A Munnar-only version of this trip for travellers who want to focus on the hill country alone.",
      href: "/tours/munnar-tour",
      image: "/images/destinations/munnar-tea-plantation.webp",
      imageAlt: "Rolling tea plantations in the mist, Munnar, Kerala",
    },
  ],
  draftPendingReview: false,
};
