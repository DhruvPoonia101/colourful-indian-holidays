import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const chennaiTour: PackageContent = {
  slug: "chennai-tour",
  name: "Chennai City Tour",
  tagline: "Temples, Beaches & the Gateway to the South · 4 Days",
  metaTitle: "Chennai Tour Package | Marina Beach, Temples & a Mahabalipuram Day Trip",
  metaDescription:
    "A private 4-day Chennai tour — Marina Beach, Kapaleeshwarar Temple, Fort St. George, DakshinaChitra's living heritage village, and a full day trip to Mahabalipuram.",
  heroImage: "/images/destinations/marina-beach-chennai.webp",
  heroImageAlt: "Sunset over Marina Beach, Chennai",
  heroHeadline: "Chennai: Temples, Beaches & the Gateway South",
  heroSubheadline:
    "A focused 4-day tour of Chennai alone — for travellers who'd rather spend real time in the city than treat it as a single overnight stop before heading further south.",
  overview:
    "Most South India circuits give Chennai a single night, enough for a quick look at Marina Beach before moving on to Mahabalipuram or further south. That undersells a city that's genuinely worth its own time — a mix of Dravidian temple architecture, colonial-era forts and churches, and one of the longest urban beaches anywhere in the world, all before even considering Mahabalipuram's rock-cut monuments a short drive away. This tour gives four days to properly explore Chennai itself, with a full day trip to Mahabalipuram built in rather than treated as an afterthought on the way out of the city.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Nov – Feb" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Chennai",
      description:
        "Private transfer from Chennai airport to your hotel, with the rest of the day free to rest after travelling. In the evening, an easy first outing to Marina Beach, one of the longest urban beaches anywhere in the world, running along nearly the entire eastern edge of the city — a genuinely striking introduction to Chennai's scale, particularly at sunset when locals gather along the promenade in large numbers and street food vendors set up along the sand. This tour deliberately keeps the arrival day light, since two full sightseeing days and a Mahabalipuram excursion are still ahead, and starting rested makes a genuine difference to how the rest of the trip feels.",
      image: "/images/destinations/marina-beach-chennai.webp",
      imageAlt: "Sunset over Marina Beach, Chennai",
    },
    {
      title: "Day 2 — Temples & Colonial Chennai",
      description:
        "A full day exploring Chennai's mix of temple heritage and colonial history. Visit Kapaleeshwarar Temple, a striking example of Dravidian architecture with an intricately sculpted, multi-tiered gopuram, dedicated to Shiva and still an active site of daily worship rather than a preserved monument alone, with a temple tank nearby used for ritual bathing during festivals. Continue to San Thome Basilica, a Roman Catholic church built over the tomb of St. Thomas the Apostle, and Fort St. George, the first English fortress in India, dating to 1644 and still home to the Tamil Nadu state legislature today. The Fort Museum inside holds artefacts from the earliest days of British colonial rule, genuinely worth the short visit for anyone interested in that period specifically.",
    },
    {
      title: "Day 3 — DakshinaChitra & Mahabalipuram Day Trip",
      description:
        "A full-day excursion combining two stops south of the city. First, DakshinaChitra, a living heritage village and museum recreating traditional South Indian houses and craft demonstrations from across four states, a genuinely engaging way to see regional architecture and artisan techniques in one place before continuing further south, with resident artisans often demonstrating weaving, pottery or metalwork on site. Then on to Mahabalipuram itself, a UNESCO World Heritage Site of temples and monuments carved directly from granite outcrops by 7th-century Pallava dynasty sculptors — the Shore Temple standing at the edge of the Bay of Bengal, and the Five Rathas, a set of monolithic temple structures each carved from a single piece of rock. Return to Chennai in the evening.",
      image: "/images/destinations/chennai.webp",
      imageAlt: "The Shore Temple, Mahabalipuram",
    },
    {
      title: "Day 4 — Departure",
      description:
        "A final relaxed morning in Chennai, with an optional visit to the Government Museum, one of the oldest museums in India, holding an extensive collection of South Indian bronzes and archaeological artefacts, or a walk through T. Nagar's bustling shopping streets for silk sarees and local handicrafts. A private transfer to Chennai airport follows for your onward or international departure flight, timed to allow for the city's often heavy traffic. Four days in, most travellers describe Chennai as a genuinely underrated stop rather than the brief gateway city most circuits treat it as, worth its own dedicated time rather than a single rushed overnight.",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice in Chennai",
    "Daily breakfast",
    "Private air-conditioned vehicle for all sightseeing and the Mahabalipuram day trip",
    "English-speaking guide for sightseeing days",
    "DakshinaChitra entry fee",
    "Monument entry fees as per itinerary",
  ],
  exclusions: [
    "Flights or train tickets to and from Chennai",
    "Government Museum entry fee, if visited (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Camera fees, if applicable at any stop",
  ],
  highlights: [
    {
      title: "A Full Day Trip to Mahabalipuram, Not a Rushed Stop",
      description:
        "Most Chennai-based circuits treat Mahabalipuram as a brief stop en route elsewhere; here it gets a proper full day of its own.",
    },
    {
      title: "DakshinaChitra's Living Heritage Village",
      description:
        "A genuinely engaging way to see South Indian regional architecture and craft traditions in one place, often skipped by shorter itineraries.",
    },
    {
      title: "One of the World's Longest Urban Beaches",
      description:
        "Marina Beach runs along nearly the entire eastern edge of the city, a genuinely striking piece of urban geography most visitors don't expect.",
    },
  ],
  bestTimeToVisit: {
    heading: "November–February is Best",
    note: "Cool, dry conditions make sightseeing and the beach walks genuinely comfortable. March to June turns hot and humid, and the October–December period can bring occasional heavy rain from the northeast monsoon, worth checking against your specific travel dates.",
  },
  relatedDestinations: [
    {
      name: "Chennai",
      tagline: "Gateway to Tamil Nadu",
      description: "A sweeping urban beach and South India's most practical starting point.",
      href: "/destinations/chennai",
      image: "/images/destinations/marina-beach-chennai.webp",
      imageAlt: "Sunset over Marina Beach, Chennai",
    },
    {
      name: "Mahabalipuram",
      tagline: "UNESCO Rock-Cut Monuments",
      description: "The Shore Temple and the Five Rathas, carved directly from granite by 7th-century sculptors.",
      href: "/destinations/mahabalipuram",
      image: "/images/destinations/chennai.webp",
      imageAlt: "The Shore Temple, Mahabalipuram",
    },
    {
      name: "Pondicherry",
      tagline: "The French Quarter",
      description: "Mustard-yellow colonial villas and a boulder-lined seafront promenade.",
      href: "/destinations/pondicherry",
      image: "/images/destinations/pondicherry-french-quarter.webp",
      imageAlt: "Colonial-era villas in Pondicherry's French Quarter",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is 4 days too long for just Chennai?",
      answer:
        "Not for travellers who want more than a single overnight stop — the temple and colonial sightseeing, DakshinaChitra, and a full Mahabalipuram day trip together give a genuinely well-rounded look at the city and its surroundings rather than a rushed pass-through.",
    },
    {
      question: "Is DakshinaChitra worth the stop if we're also visiting Mahabalipuram the same day?",
      answer:
        "Yes — DakshinaChitra focuses on regional architecture and living craft traditions rather than ancient monuments, a genuinely different angle from Mahabalipuram's rock-cut temples, and the two combine well as one longer day.",
    },
    {
      question: "Can we extend this into a longer South India trip?",
      answer:
        "Yes — this pairs naturally with our South India Tours classic circuit, Mahabalipuram Tour, or Pondicherry Tour. Let us know your available days and we'll adjust the itinerary accordingly.",
    },
    {
      question: "Is Chennai walkable, or do we need a vehicle throughout?",
      answer:
        "Central areas like Fort St. George and the Marina are walkable in sections, though Chennai is a genuinely large, spread-out city, so a private vehicle is included for getting between sights and for the Mahabalipuram day trip specifically.",
    },
    {
      question: "Is November through February really necessary, or can we visit other times?",
      answer:
        "November through February offers the most comfortable weather; outside that window, we'd specifically flag the October–December period for possible monsoon rain and April–June for genuinely hot, humid conditions.",
    },
  ],
  relatedPackages: [
    {
      name: "South India Tours",
      tagline: "The Classic Circuit · 6 Days",
      description: "Chennai as part of a wider circuit through Mahabalipuram and Pondicherry.",
      href: "/tours/south-india-tours-classic",
      image: "/images/destinations/chennai.webp",
      imageAlt: "The Shore Temple, Mahabalipuram, near Chennai",
    },
    {
      name: "Mahabalipuram Tour",
      tagline: "UNESCO Rock-Cut Monuments",
      description: "A Mahabalipuram-only version of this trip for travellers who want to focus on the monuments alone.",
      href: "/tours/mahabalipuram-tour",
      image: "/images/destinations/chennai.webp",
      imageAlt: "The Shore Temple, Mahabalipuram",
    },
    {
      name: "Pondicherry Tour",
      tagline: "The French Quarter",
      description: "A Pondicherry-only version of a South India trip, for travellers drawn to colonial heritage.",
      href: "/tours/pondicherry-tour",
      image: "/images/destinations/pondicherry-french-quarter.webp",
      imageAlt: "Colonial-era villas in Pondicherry's French Quarter",
    },
  ],
  draftPendingReview: false,
};
