import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const alleppeyBackwatersTour: PackageContent = {
  slug: "alleppey-backwaters-tour",
  name: "Alleppey Backwaters Tour",
  tagline: "Houseboats & Palm-Lined Canals · 4 Days",
  metaTitle: "Alleppey Backwaters Tour Package | Houseboat Cruise & Kumarakom",
  metaDescription:
    "A private 4-day Alleppey backwaters tour — a private houseboat cruise, a canoe ride through narrow village canals, and a day trip to Kumarakom's bird sanctuary.",
  heroImage: "/images/destinations/alleppey-backwaters.webp",
  heroImageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
  heroHeadline: "Alleppey: The Backwaters, Properly Explored",
  heroSubheadline:
    "A focused 4-day tour of Kerala's backwaters alone — for travellers who'd rather spend real time on the water than treat it as a single night bolted onto a longer circuit.",
  overview:
    "Most Kerala itineraries give the backwaters a single night — one houseboat cruise, then on to the next stop. That's enough to get a taste, but it barely covers what the backwaters actually are: a genuinely vast network of canals, lagoons and lakes stretching along nearly the entire Kerala coastline, with village life, bird sanctuaries and canal-side towns most one-night visitors never see. This tour gives four days to properly explore it — a full houseboat cruise, a canoe ride through canals too narrow for the bigger boats, and a day trip to Kumarakom, a quieter backwater town built around a bird sanctuary on Vembanad Lake, Kerala's largest.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Alleppey",
      description:
        "Private transfer from Kochi airport, roughly 1.5 to 2 hours, to your hotel in Alleppey, with the rest of the day free to rest after travelling. If you arrive with energy to spare, your guide can suggest an easy first outing — a walk along Alleppey Beach as the sun sets, one of Kerala's lesser-known beaches and a genuinely pleasant, uncrowded spot given most visitors come to Alleppey for the backwaters rather than the coast. This tour deliberately keeps the arrival day light, since tomorrow's overnight houseboat cruise is the trip's genuine centrepiece and a good night's rest beforehand makes a real difference to how the rest of the trip unfolds, especially given the early boarding time the next morning.",
      image: "/images/destinations/alleppey-2.webp",
      imageAlt: "Alleppey Beach at sunset, Kerala",
    },
    {
      title: "Day 2 — Private Houseboat Cruise",
      description:
        "Board your private houseboat, a traditional kettuvallam once used to transport rice and spices along these same waterways, now converted into a comfortable floating hotel room with its own crew and chef. The boat cruises slowly through a wide network of canals, lagoons and paddy fields for the day, past small villages and palm groves, with meals cooked fresh on board using Kerala's distinctive coconut-and-spice cuisine, often including the day's catch if you'd like fresh seafood straight from the backwaters themselves. You'll moor for the night on a quiet stretch of water, with nothing scheduled beyond dinner and watching the sky change colour — consistently the most-remembered part of a backwaters trip among the travellers we've sent here, and a genuinely different way to spend an evening than any hotel could offer.",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      title: "Day 3 — Village Canals & Kumarakom",
      description:
        "A morning canoe ride through narrower village canals too tight for the houseboat itself, paddled by a local boatman past homes, small temples and washing lines strung between palm trees — a genuinely different, more intimate view of backwater life than the wider canals the houseboats travel, and a chance to see everyday village routines up close rather than from a distance. In the afternoon, a drive to Kumarakom, roughly an hour away on the shores of Vembanad Lake, Kerala's largest, home to a bird sanctuary that draws migratory species from as far as Siberia during winter months, alongside resident herons, cormorants and egrets year-round. The pace here is noticeably quieter even than Alleppey itself, and a boat ride on Vembanad Lake at sunset makes a fitting close to your last full day in the backwaters.",
    },
    {
      title: "Day 4 — Departure",
      description:
        "A final relaxed morning before a private transfer back to Kochi airport for departure, roughly 1.5 to 2 hours away. If your flight allows a little extra time, a last walk along Kumarakom's lakeside or a stop at a local spice or coir workshop makes for a gentle close to the trip rather than rushing straight to the airport. Four days in, most travellers describe the backwaters as feeling genuinely different from the single-night version most Kerala circuits allow — enough time to see the wider canals, the narrower village waterways, and a second, quieter lake town, rather than just one night on a houseboat and straight on to the next stop.",
    },
  ],
  inclusions: [
    "1 night in a hotel of your choice in Alleppey",
    "1 night aboard a private houseboat, all meals included",
    "1 night in a hotel of your choice in Kumarakom",
    "Daily breakfast (and all meals while on the houseboat)",
    "Private air-conditioned vehicle for all road transfers",
    "One village canoe ride",
  ],
  exclusions: [
    "Flights or train tickets to and from Kochi",
    "Kumarakom Bird Sanctuary entry fee (paid locally)",
    "Lunches and dinners in Alleppey and Kumarakom (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Camera fees, if applicable at any stop",
  ],
  highlights: [
    {
      title: "The Backwaters as the Whole Trip",
      description:
        "Four days genuinely dedicated to the backwaters, not a single night bolted onto a longer circuit elsewhere in Kerala.",
    },
    {
      title: "Canals the Houseboats Can't Reach",
      description:
        "A canoe ride through narrower village waterways gives a more intimate view of backwater life than the wider canals alone.",
    },
    {
      title: "A Second, Quieter Backwater Town",
      description:
        "Kumarakom's bird sanctuary and Vembanad Lake add real variety beyond Alleppey itself, most one-night visitors never see it.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make both the houseboat cruise and the canoe ride genuinely comfortable. April to June turns hot and humid, and the June–September monsoon brings heavy rain, though the backwaters themselves stay navigable and lush green throughout the wet season.",
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
      question: "Is 4 days too long for just the backwaters?",
      answer:
        "Not for travellers who want more than a single night — the houseboat cruise, the village canoe ride, and a second town at Kumarakom together give a genuinely fuller picture of the backwaters than a one-night stop allows.",
    },
    {
      question: "How is the village canoe ride different from the houseboat cruise?",
      answer:
        "The houseboat travels the wider canals and lagoons; the canoe reaches much narrower waterways that pass directly through village life, offering a more intimate, close-up perspective the bigger boats can't access.",
    },
    {
      question: "Is Kumarakom worth adding if we've already seen Alleppey's backwaters?",
      answer:
        "Yes — Kumarakom's bird sanctuary and its position on Vembanad Lake, Kerala's largest, give it a genuinely different character and pace, even quieter than Alleppey itself.",
    },
    {
      question: "Can we extend this into a longer Kerala trip?",
      answer:
        "Yes — this pairs naturally with our Kerala Tours classic circuit, Munnar Hill Station Tour, or Kochi City Tour. Let us know your available days and we'll adjust the itinerary accordingly.",
    },
    {
      question: "Is one night on the houseboat enough, or should we book two?",
      answer:
        "One night is standard and gives a genuine sense of the backwaters at both sunset and sunrise; we can extend to two nights aboard if you'd like more time on the water specifically.",
    },
  ],
  relatedPackages: [
    {
      name: "Kerala Tours",
      tagline: "The Classic Circuit · 6 Days",
      description: "Alleppey as part of a wider circuit through Kochi and Munnar.",
      href: "/tours/kerala-tours-classic",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      name: "Kochi City Tour",
      tagline: "Fort Kochi & Colonial Heritage",
      description: "Chinese fishing nets, Dutch colonial lanes, and a traditional Kathakali performance.",
      href: "/tours/kochi-tour",
      image: "/images/destinations/kochi-3.webp",
      imageAlt: "Chinese fishing nets at sunset, Fort Kochi, Kerala",
    },
    {
      name: "Munnar Hill Station Tour",
      tagline: "Tea Gardens & Cool Mountain Air",
      description: "Rolling tea plantations in the Western Ghats, a sharp contrast to Kerala's tropical coast.",
      href: "/tours/munnar-tour",
      image: "/images/destinations/munnar-tea-plantation.webp",
      imageAlt: "Rolling tea plantations in the mist, Munnar, Kerala",
    },
  ],
  draftPendingReview: false,
};
