import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * Image note: no genuine Rameswaram or Dhanushkodi photo exists in the asset
 * library yet. Days covering those stops run without an image rather than
 * reusing Kanyakumari's photo for a different town.
 */
export const tamilNaduBeachesTour: PackageContent = {
  slug: "tamil-nadu-beaches-tour",
  name: "Tamil Nadu Beaches Tour",
  tagline: "Rameswaram & Kanyakumari · 5 Days",
  metaTitle: "Tamil Nadu Beaches Tour Package | Rameswaram, Dhanushkodi & Kanyakumari",
  metaDescription:
    "A private 5-day tour of Tamil Nadu's southern coast — the Ramanathaswamy Temple, Dhanushkodi's ghost town, and Kanyakumari, where three seas meet at India's southern tip.",
  heroImage: "/images/destinations/kanyakumari-beach.webp",
  heroImageAlt: "The Vivekananda Rock Memorial and Thiruvalluvar Statue off Kanyakumari's coast",
  heroHeadline: "Tamil Nadu's Southern Coast: Rameswaram & Kanyakumari",
  heroSubheadline:
    "A different side of the Tamil Nadu coastline entirely — a pilgrimage island, an abandoned ghost town, and the southernmost point on the Indian mainland, where three seas meet.",
  overview:
    "While Chennai, Mahabalipuram and Pondicherry cover Tamil Nadu's northern coast, the state's southern tip holds a genuinely different kind of coastline — Rameswaram, a pilgrimage island connected to the mainland by one of India's longest sea bridges, and Kanyakumari, the southernmost point of the Indian mainland, where the Bay of Bengal, the Arabian Sea and the Indian Ocean are said to converge. This tour covers both, including Dhanushkodi, a town abandoned since a 1964 cyclone and now a genuinely eerie stretch of ruins between two seas, a stop most Tamil Nadu circuits never reach given how far south it sits.",
  quickFacts: [
    { label: "Duration", value: "5 Days / 4 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Feb" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Rameswaram",
      description:
        "A flight into Madurai, the nearest major airport, followed by a roughly 2 to 2.5 hour drive to Rameswaram, crossing the Pamban Bridge, one of India's longest sea bridges, connecting the island to the mainland with open water visible on both sides for most of the crossing and trains passing directly overhead on the parallel rail bridge. Private transfer to your hotel, with the rest of the day free to rest after travelling given the combined flight and drive. In the evening, an easy first outing to the beach near Ramanathaswamy Temple, with fishing boats returning for the evening a common sight along the shore as the light fades.",
    },
    {
      title: "Day 2 — Ramanathaswamy Temple & Dhanushkodi",
      description:
        "A morning visit to Ramanathaswamy Temple, one of the twelve Jyotirlinga shrines dedicated to Shiva and famous for its corridors, among the longest temple corridors in India, lined with intricately carved pillars stretching for hundreds of metres and said to number over a thousand in total. In the afternoon, a drive to Dhanushkodi, a town abandoned since a devastating cyclone in 1964 and now a genuinely eerie stretch of ruined buildings between two converging seas, reachable only by a specific vehicle route across sand tracks. The tip of Dhanushkodi is also where, according to Hindu mythology, the mythical Rama's Bridge is said to begin, connecting toward Sri Lanka.",
    },
    {
      title: "Day 3 — Rameswaram to Kanyakumari",
      description:
        "A roughly 4 to 4.5 hour drive south to Kanyakumari, the southernmost point of the Indian mainland, arriving by early afternoon with time to settle into your hotel before the evening's main event: sunset at Kanyakumari Point, where the Bay of Bengal, the Arabian Sea and the Indian Ocean are said to meet, a genuinely striking place to watch the sun go down over open water on three sides at once. On a clear evening, the changing colours across the water make this one of the more memorable sunsets on a South India trip, drawing a steady crowd of visitors to the same viewpoint each evening.",
    },
    {
      title: "Day 4 — Kanyakumari Sightseeing",
      description:
        "A full day exploring Kanyakumari, starting with a short boat ride out to the Vivekananda Rock Memorial, built on a rock formation where Swami Vivekananda is said to have meditated in 1892, and the neighbouring Thiruvalluvar Statue, a 40-metre monument to the Tamil poet and philosopher, visible from the mainland across the water on clear days. Visit the Kumari Amman Temple, dedicated to a virgin form of the goddess Parvati and directly on the seafront, before an optional sunrise excursion the following morning for travellers who'd like to see both the sunset and sunrise from the same point during their stay.",
      image: "/images/destinations/kanyakumari-beach.webp",
      imageAlt: "The Vivekananda Rock Memorial and Thiruvalluvar Statue off Kanyakumari's coast",
    },
    {
      title: "Day 5 — Departure",
      description:
        "An optional early start for sunrise at Kanyakumari Point, genuinely worth setting an alarm for if you missed it on arrival, before a final relaxed morning and a private transfer to either Trivandrum airport, roughly 1.5 to 2 hours away, or back to Madurai for your onward or international departure flight, whichever suits your onward plans better. Five days in, most travellers describe this stretch of coast as feeling like an entirely different trip from the busier northern Tamil Nadu circuit — quieter, more remote, and built around two genuinely distinctive stops most visitors to South India never reach at all.",
    },
  ],
  inclusions: [
    "2 nights in a hotel of your choice in Rameswaram",
    "2 nights in a hotel of your choice in Kanyakumari",
    "Daily breakfast",
    "Private air-conditioned vehicle for all road transfers and sightseeing",
    "English-speaking guide for sightseeing days",
    "Boat ride to the Vivekananda Rock Memorial",
  ],
  exclusions: [
    "Flights or train tickets to and from Madurai or Trivandrum",
    "Ramanathaswamy Temple special darshan tickets, if booked (paid locally, arranged on request)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "A Genuinely Different Stretch of Coast",
      description:
        "Quieter and more remote than the northern Tamil Nadu circuit, with two stops most South India itineraries never reach.",
    },
    {
      title: "Dhanushkodi's Abandoned Ruins",
      description:
        "A town frozen in place since a 1964 cyclone, a genuinely eerie and rarely visited stop between two converging seas.",
    },
    {
      title: "Where Three Seas Meet",
      description:
        "Kanyakumari's position at India's southern tip gives it a sunset (and sunrise) view unlike anywhere else in the country.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–February is Best",
    note: "Cool, dry conditions make the sightseeing and coastal walks genuinely comfortable at both stops. March to June turns hot, and the October–December period can bring occasional heavy rain and rough seas from the northeast monsoon, worth checking against your specific travel dates, particularly for the Dhanushkodi excursion.",
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
      name: "Kerala",
      tagline: "God's Own Country",
      description: "Palm-lined backwaters and misty tea gardens, a natural extension from Kanyakumari.",
      href: "/destinations/kerala",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is Dhanushkodi difficult to reach?",
      answer:
        "It requires a specific vehicle route across sand tracks rather than a standard road, so we arrange this as part of the itinerary with a driver experienced in the route — it's not something to attempt independently.",
    },
    {
      question: "Can we really see three seas meet at Kanyakumari?",
      answer:
        "The visual convergence is more of a traditional description than a sharp visible line in the water, but the location genuinely sits at the meeting point of the Bay of Bengal, Arabian Sea and Indian Ocean, and the sunset views across open water on three sides are real and striking.",
    },
    {
      question: "Should we fly into Madurai or Trivandrum?",
      answer:
        "Either works — Madurai suits arriving via Rameswaram first, while Trivandrum suits departing from Kanyakumari at the end; we can arrange the itinerary either direction depending on your flight options.",
    },
    {
      question: "Is this trip suitable for a first visit to South India, or should we do the northern circuit first?",
      answer:
        "This works well either as a standalone trip or as an extension after our South India Tours classic circuit — the two together give a genuinely complete picture of Tamil Nadu's coastline, though this southern leg alone is a satisfying trip on its own.",
    },
    {
      question: "Is Rameswaram worth visiting if we're not religiously motivated?",
      answer:
        "Yes — Ramanathaswamy Temple's architecture is genuinely impressive regardless of personal belief, and Dhanushkodi's ruins and the Pamban Bridge crossing are worthwhile on their own for the scenery and history alone.",
    },
  ],
  relatedPackages: [
    {
      name: "South India Tours",
      tagline: "The Classic Circuit · 6 Days",
      description: "Tamil Nadu's northern coast through Chennai, Mahabalipuram and Pondicherry.",
      href: "/tours/south-india-tours-classic",
      image: "/images/destinations/chennai.webp",
      imageAlt: "The Shore Temple, Mahabalipuram, near Chennai",
    },
    {
      name: "Madurai Temple Tour",
      tagline: "The Meenakshi Amman Temple",
      description: "The natural inland stop en route to or from Rameswaram.",
      href: "/tours/madurai-tour",
      image: "/images/destinations/madurai.webp",
      imageAlt: "Meenakshi Amman Temple's colourful gopuram, Madurai",
    },
    {
      name: "Kerala Tours",
      tagline: "The Classic Circuit · 6 Days",
      description: "A natural extension west from Kanyakumari into Kerala's backwaters and hill country.",
      href: "/tours/kerala-tours-classic",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
  ],
  draftPendingReview: false,
};
