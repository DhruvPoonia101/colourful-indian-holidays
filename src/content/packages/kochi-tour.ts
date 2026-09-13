import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const kochiTour: PackageContent = {
  slug: "kochi-tour",
  name: "Kochi City Tour",
  tagline: "Fort Kochi & Colonial Heritage · 4 Days",
  metaTitle: "Kochi Tour Package | Fort Kochi, Chinese Fishing Nets & Kathakali",
  metaDescription:
    "A private 4-day Kochi tour — Fort Kochi's colonial lanes, the Chinese fishing nets, a traditional Kathakali performance, and a canal cruise through Kochi's own backwaters.",
  heroImage: "/images/destinations/kochi-3.webp",
  heroImageAlt: "Chinese fishing nets at sunset, Fort Kochi, Kerala",
  heroHeadline: "Kochi: Colonial Heritage on the Arabian Sea",
  heroSubheadline:
    "A focused 4-day tour of Kochi alone — for travellers who'd rather spend real time in its colonial lanes than treat it as a single overnight stop before the backwaters or hill country.",
  overview:
    "Most Kerala circuits give Kochi a single night, enough for a quick look at the Chinese fishing nets before moving on. That undersells a city with genuinely more layered history than almost anywhere else in India — centuries of Portuguese, Dutch and British colonial rule left behind an architectural mix found nowhere else in the country, built on top of an even older history as a major Arabian Sea spice trading port. This tour gives four days to properly explore it: real time in Fort Kochi's old lanes, a traditional Kathakali performance explained rather than just watched, and a boat ride through Kochi's own quieter backwater canals, distinct from the bigger houseboat routes further south in Alleppey.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Kochi",
      description:
        "Private transfer from Kochi airport to your hotel, ideally in Fort Kochi rather than the newer city across the harbour, since the old quarter's colonial-era lanes and waterfront are genuinely worth staying close to rather than commuting in each day. The rest of the day is free to rest after travelling, with an easy first-evening option of a walk along the Fort Kochi waterfront to see the iconic Chinese fishing nets, best photographed as fishermen work them at sunset — a genuinely striking first look at the city's most recognisable image, and one that photographs consistently undersell until you've seen the scale of them worked by hand in person, the huge cantilevered frames swinging in and out of the water in slow, practised motions. This tour deliberately keeps the arrival day light, since a full sightseeing day is still ahead.",
      image: "/images/destinations/kochi-3.webp",
      imageAlt: "Chinese fishing nets at sunset, Fort Kochi, Kerala",
    },
    {
      title: "Day 2 — Fort Kochi Heritage Walk",
      description:
        "A full day exploring Fort Kochi's genuinely unusual mix of Portuguese, Dutch and British colonial architecture, layered over centuries of Arabian Sea spice trading history unlike anywhere else in India. Visit St. Francis Church, one of the oldest European-built churches in India and the original burial site of Vasco da Gama, whose remains were later moved to Lisbon though his original gravestone still marks the spot inside the church itself, before continuing to the Dutch Palace with its Kerala mural paintings depicting Hindu epics in remarkable detail, and the old Jewish quarter of Mattancherry, its narrow lanes still lined with antique shops and spice warehouses that once handled cargo from across the Indian Ocean. The afternoon is left free to browse Jew Town's antique and curio shops at your own pace.",
    },
    {
      title: "Day 3 — Backwater Cruise & Kathakali",
      description:
        "A morning boat cruise through Kochi's own quieter backwater canals and lagoons, dotted with small palm-covered islands and fishing villages — a genuinely different, more local perspective on Kerala's waterways than the bigger houseboat routes further south in Alleppey, and one most visitors skip entirely in favour of the more famous route despite it being right on Kochi's doorstep and considerably easier to fit into a shorter trip without an overnight stay away from the city. In the evening, attend a traditional Kathakali dance performance, Kerala's centuries-old classical dance-drama known for elaborate costumes and expressive face paint — many venues let visitors watch the artists' hours-long pre-show makeup process, rarely seen by tourists elsewhere in India, and your guide can explain the story being performed as it unfolds on stage.",
      image: "/images/destinations/kochi-kathakali.webp",
      imageAlt: "A Kathakali dancer's elaborate makeup and costume, Kochi",
    },
    {
      title: "Day 4 — Departure",
      description:
        "A final relaxed morning in Fort Kochi, with an optional last walk along the waterfront or a stop at a local café for breakfast before your private transfer to Kochi airport for departure. If time allows, one last browse through the old quarter's antique shops or a coffee overlooking the harbour makes for a gentle close to the trip rather than rushing straight to the airport, especially if you'd like a final look at the fishing nets in daylight rather than only at sunset the way you first saw them. Four days in, most travellers leave with a genuinely fuller understanding of Kochi's layered colonial and trading history than the standard single-night stop most Kerala circuits allow, having actually explored the old quarter rather than passing through it on the way to somewhere else.",
      image: "/images/destinations/kochi-2.webp",
      imageAlt: "A palm-covered island in Kochi's backwater lagoons, Kerala",
    },
  ],
  inclusions: [
    "3 nights in a heritage hotel of your choice in Fort Kochi",
    "Daily breakfast",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide for sightseeing days",
    "Backwater canal cruise",
    "Monument entry fees as per itinerary",
  ],
  exclusions: [
    "Flights or train tickets to and from Kochi",
    "Kathakali performance ticket (paid locally, arranged on request)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Camera fees, if applicable at any stop",
  ],
  highlights: [
    {
      title: "Centuries of Layered History",
      description:
        "Portuguese, Dutch and British colonial architecture stacked over an even older Arabian Sea spice trading past, found nowhere else in India.",
    },
    {
      title: "A Kathakali Performance, Properly Explained",
      description:
        "Many venues let visitors watch the artists' hours-long pre-show makeup process, rarely seen by tourists elsewhere in the country.",
    },
    {
      title: "Kochi's Own Quieter Backwaters",
      description:
        "A boat cruise through local canals most visitors skip in favour of the more famous Alleppey route further south.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make walking Fort Kochi's old lanes and the backwater cruise genuinely comfortable. April to June turns hot and humid, and the June–September monsoon brings heavy rain, though Kochi's coastal breeze makes it more bearable than inland Kerala during this period.",
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
      question: "Is 4 days too long for just Kochi?",
      answer:
        "Not for travellers who want more than a single overnight stop — Fort Kochi's heritage sites, a backwater cruise and a properly explained Kathakali performance together give a genuinely well-rounded look at the city rather than a rushed pass-through.",
    },
    {
      question: "How is Kochi's backwater cruise different from Alleppey's houseboats?",
      answer:
        "Kochi's local canals are quieter and less touristed, explored by a smaller boat on a shorter route rather than an overnight kettuvallam cruise — a genuinely different, more low-key experience than Alleppey's more famous backwaters.",
    },
    {
      question: "Is St. Francis Church worth visiting if we're not particularly interested in colonial history?",
      answer:
        "Yes — beyond the history, it's a genuinely atmospheric building and the connection to Vasco da Gama's original burial site adds a layer of context that most visitors find interesting regardless of prior interest.",
    },
    {
      question: "Can we extend this into a longer Kerala trip?",
      answer:
        "Yes — this pairs naturally with our Kerala Tours classic circuit, Alleppey Backwaters Tour, or Munnar Hill Station Tour. Let us know your available days and we'll adjust the itinerary accordingly.",
    },
    {
      question: "Is Fort Kochi walkable, or do we need a vehicle throughout?",
      answer:
        "Fort Kochi's old quarter is genuinely compact and walkable once you're there, though a private vehicle is included for transfers and for reaching sights slightly further out, like the backwater cruise departure point.",
    },
  ],
  relatedPackages: [
    {
      name: "Kerala Tours",
      tagline: "The Classic Circuit · 6 Days",
      description: "Kochi as the starting point of a wider circuit through Alleppey and Munnar.",
      href: "/tours/kerala-tours-classic",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      name: "Alleppey Backwaters Tour",
      tagline: "Houseboats & Palm-Lined Canals",
      description: "A backwaters-only version of a Kerala trip, for travellers drawn to water over heritage.",
      href: "/tours/alleppey-backwaters-tour",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      name: "Munnar Hill Station Tour",
      tagline: "Tea Gardens & Cool Mountain Air",
      description: "Rolling tea plantations in the Western Ghats, a sharp contrast to Kochi's coastal heritage.",
      href: "/tours/munnar-tour",
      image: "/images/destinations/munnar-tea-plantation.webp",
      imageAlt: "Rolling tea plantations in the mist, Munnar, Kerala",
    },
  ],
  draftPendingReview: false,
};
