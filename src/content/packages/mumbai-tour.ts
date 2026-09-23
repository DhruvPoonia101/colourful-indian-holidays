import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * No genuine Gateway of India or Elephanta Caves photo exists in the asset
 * library, despite both being covered in the itinerary — both are
 * described in the written content without a matching image rather than
 * forcing an unrelated photo into those slots.
 */
export const mumbaiTour: PackageContent = {
  slug: "mumbai-tour",
  name: "Mumbai Tour",
  tagline: "Colonial Landmarks & the Arabian Sea",
  metaTitle: "Mumbai Tour Package | Gateway of India, Elephanta Caves & Marine Drive",
  metaDescription:
    "A private 4-day Mumbai tour — the Gateway of India, a UNESCO-listed railway terminus, the rock-cut Elephanta Caves, and the sweeping curve of Marine Drive.",
  heroImage: "/images/destinations/Mumbai.webp",
  heroImageAlt: "Chhatrapati Shivaji Maharaj Terminus, Mumbai",
  heroHeadline: "Mumbai: Colonial Landmarks & the Arabian Sea",
  heroSubheadline:
    "A 4-day introduction to India's financial and entertainment capital — colonial-era monuments, a boat trip to ancient rock-cut caves, and the sweeping Arabian Sea coastline that gives the city its distinctive shape.",
  overview:
    "Mumbai carries the layered history of a city built by trade — a former Portuguese and British colonial port that grew into India's financial capital and the centre of its Hindi film industry, all packed onto a narrow peninsula jutting into the Arabian Sea. The city's most recognisable monuments date from its British colonial period, when Bombay (as it was then known) became one of the empire's most important ports, but Mumbai's history stretches back much further, visible in the roughly 1,500-year-old rock-cut cave temples on Elephanta Island just offshore. This tour covers the city's essential colonial landmarks alongside that older history, without attempting to squeeze in every neighbourhood a longer stay would allow.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Nov – Feb" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Mumbai",
      description:
        "Private transfer from Mumbai airport to your hotel, with the rest of the day free to rest after travelling. In the evening, an easy first outing to Marine Drive, the sweeping 3-kilometre curved boulevard along the Arabian Sea, nicknamed the &quot;Queen's Necklace&quot; for the way its streetlights trace a glowing curve along the coastline after dark — a genuinely striking first introduction to the city.",
      image: "/images/destinations/Mumbai-2.webp",
      imageAlt: "Marine Drive at dusk, Mumbai",
    },
    {
      title: "Day 2 — Colonial Mumbai",
      description:
        "A full day covering South Mumbai's colonial-era landmarks, starting with the Gateway of India, a triumphal arch built in 1924 to commemorate King George V's visit and now the city's most recognisable monument, overlooking the harbour with the historic Taj Mahal Palace hotel standing directly alongside it. Visit Chhatrapati Shivaji Maharaj Terminus (formerly Victoria Terminus), a UNESCO World Heritage Site and still a fully functioning railway station, its Victorian Gothic architecture genuinely striking given the volume of daily commuter traffic passing through it. In the afternoon, a walk through the Fort district's colonial-era buildings and Crawford Market, one of the city's oldest markets.",
      image: "/images/destinations/Mumbai.webp",
      imageAlt: "Chhatrapati Shivaji Maharaj Terminus, Mumbai",
    },
    {
      title: "Day 3 — Elephanta Caves",
      description:
        "A roughly hour-long ferry from the Gateway of India to Elephanta Island, home to a UNESCO World Heritage Site of rock-cut cave temples dating back roughly 1,500 years, dedicated primarily to Shiva. The main cave holds a genuinely impressive 6-metre carved sculpture depicting Shiva's three faces, representing creation, preservation and destruction, among the finest examples of rock-cut sculpture in India. A small train and short walk connect the ferry dock to the caves themselves, set into a hillside with views back across the harbour toward Mumbai.",
    },
    {
      title: "Day 4 — Bandra & Departure",
      description:
        "A relaxed final morning with a drive across the Bandra-Worli Sea Link, a cable-stayed bridge completed in 2009 that considerably shortened the commute between South Mumbai and its northern suburbs, and a walk through Bandra's Pali Hill and Bandstand areas, known for their colonial-era bungalows and seafront promenade. A private transfer to the airport follows for your onward or international departure flight. Four days in, most travellers describe Mumbai as a city that rewards a proper visit rather than the brief business-trip stopover it's often treated as.",
      image: "/images/destinations/Mumbai-3.webp",
      imageAlt: "The Bandra-Worli Sea Link at sunset, Mumbai",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice in Mumbai",
    "Daily breakfast",
    "Private air-conditioned vehicle for all sightseeing and transfers",
    "English-speaking guide throughout",
    "Ferry tickets to and from Elephanta Island",
  ],
  exclusions: [
    "Flights or train tickets to and from Mumbai",
    "Elephanta Caves entry fee (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "A City Built by Trade",
      description:
        "Mumbai's layered Portuguese, British and modern commercial history is genuinely visible across a short walk through South Mumbai's architecture.",
    },
    {
      title: "1,500 Years Older Than the Colonial Landmarks",
      description:
        "Elephanta Island's cave temples predate the city's British-era monuments by roughly a thousand years, adding real historical depth beyond the Gateway of India.",
    },
    {
      title: "A Working City, Not a Museum Piece",
      description:
        "Chhatrapati Shivaji Maharaj Terminus is a UNESCO World Heritage Site that's also a genuinely functioning railway station, still carrying huge daily commuter volumes.",
    },
  ],
  bestTimeToVisit: {
    heading: "November–February is Best",
    note: "Cool, dry conditions make walking South Mumbai's streets and the Elephanta Island ferry crossing genuinely comfortable. March to May turns hot and humid, and the June–September monsoon brings heavy, sometimes disruptive rain that can affect the Elephanta ferry service specifically.",
  },
  relatedDestinations: [
    {
      name: "Mumbai",
      tagline: "India's Financial Capital",
      description: "Colonial landmarks, the Gateway of India, and the sweeping curve of Marine Drive.",
      href: "/destinations/mumbai",
      image: "/images/destinations/Mumbai.webp",
      imageAlt: "Chhatrapati Shivaji Maharaj Terminus, Mumbai",
    },
    {
      name: "Goa",
      tagline: "India's Beach Capital",
      description: "Portuguese-era churches and beaches, a natural coastal extension south from Mumbai.",
      href: "/destinations/goa",
      image: "/images/destinations/Goa.webp",
      imageAlt: "Goa's coastline",
    },
    {
      name: "Gujarat",
      tagline: "Stepwells & Wildlife",
      description: "Ahmedabad's historic stepwells and Gir National Park, a natural extension north from Mumbai.",
      href: "/destinations/gujarat",
      image: "/images/destinations/gujarat-gir-lion.webp",
      imageAlt: "An Asiatic lion at Gir National Park, Gujarat",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is 4 days enough to see Mumbai properly?",
      answer:
        "It's enough to cover South Mumbai's essential landmarks and Elephanta Island comfortably, though Mumbai is a genuinely large city and a longer stay would allow more of its individual neighbourhoods and food scene — this itinerary is built as a solid introduction rather than an exhaustive tour.",
    },
    {
      question: "Is the Elephanta Caves ferry ride comfortable?",
      answer:
        "Generally yes, though it can get choppy during monsoon season specifically, which is part of why this itinerary recommends visiting November through February; ferries occasionally pause service during heavy rain or rough sea conditions.",
    },
    {
      question: "Can we visit Bollywood studios or a film set?",
      answer:
        "Studio visits are possible to arrange in some cases but depend on current production schedules and aren't guaranteed; we can look into specific options if this is a priority when planning your trip.",
    },
    {
      question: "Is Mumbai walkable, or do we need a vehicle throughout?",
      answer:
        "South Mumbai's colonial district is genuinely walkable in sections, but Mumbai overall is a large, traffic-heavy city, so a private vehicle is included for getting between the day's main stops efficiently.",
    },
    {
      question: "Can this be combined with Goa or Gujarat?",
      answer:
        "Yes — both sit within a reasonable flight or drive from Mumbai, and combining a Mumbai stay with either as part of a wider western India circuit is a common request; let us know when planning your trip.",
    },
  ],
  relatedPackages: [
    {
      name: "Maharashtra Tour",
      tagline: "Ajanta, Ellora & Shirdi · 5 Days",
      description: "The rest of Maharashtra beyond Mumbai — UNESCO cave temples and a major pilgrimage town.",
      href: "/tours/maharashtra-tour",
      image: "/images/destinations/maharashtra-ajanta-caves.webp",
      imageAlt: "The interior of a rock-cut cave temple at Ajanta, Maharashtra",
    },
    {
      name: "Maharashtra Beaches Tour",
      tagline: "Alibaug's Forts & the Konkan Coast · 4 Days",
      description: "A short ferry ride from Mumbai to a fort-dotted coastline and the quieter Konkan shore.",
      href: "/tours/maharashtra-beaches-tour",
      image: "/images/destinations/alibaug-beach.webp",
      imageAlt: "A beach in Alibaug, Maharashtra",
    },
  ],
  draftPendingReview: false,
};
