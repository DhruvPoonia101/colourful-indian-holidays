import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * No genuine photo of Kolaba Fort, Murud-Janjira or the Ganpatipule temple
 * exists in the asset library, despite all three being covered in the
 * itinerary — each is described in the written content without a
 * matching image rather than forcing an unrelated photo into that slot.
 */
export const maharashtraBeachesTour: PackageContent = {
  slug: "maharashtra-beaches-tour",
  name: "Maharashtra Beaches Tour",
  tagline: "Alibaug's Forts & the Konkan Coast",
  metaTitle: "Maharashtra Beaches Tour Package | Alibaug & Ganpatipule",
  metaDescription:
    "A private 4-day Konkan coast tour — Alibaug's fort-dotted coastline near Mumbai, and Ganpatipule, a quieter beach town built around a coastal Ganesh temple.",
  heroImage: "/images/destinations/alibaug-beach.webp",
  heroImageAlt: "A beach in Alibaug, Maharashtra",
  heroHeadline: "Maharashtra Beaches: Alibaug's Forts & the Konkan Coast",
  heroSubheadline:
    "A 4-day escape from Mumbai along the Konkan coast — Alibaug's fort-dotted shoreline, easily reached by ferry, followed by Ganpatipule, a quieter beach town further south built around a temple directly on the sand.",
  overview:
    "Maharashtra's Konkan coast runs for hundreds of kilometres south of Mumbai, and while it never developed the tourism infrastructure of Goa further down the same coastline, that's largely to its advantage — quieter beaches, working fishing villages, and genuinely distinctive sights like a sea fort accessible only at low tide. Alibaug, roughly an hour from Mumbai by ferry, has long served as the city's easiest weekend escape, its coastline dotted with forts built during the Maratha Empire's naval heyday. Ganpatipule, considerably further south, centres on a Ganesh temple built directly on the beach, giving the town a genuinely different character from Alibaug's more historically layered coastline.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Alibaug",
      description:
        "A ferry from Mumbai's Gateway of India to Mandwa jetty (roughly 1 hour), followed by a short drive to Alibaug, or a longer road journey around Mumbai's harbour if you'd prefer to skip the ferry crossing. Private transfer to your hotel, with the rest of the day free to rest, and an easy first evening walk along Alibaug's beach as fishing boats return for the day, a genuinely relaxed introduction to the Konkan coast's slower pace after Mumbai.",
    },
    {
      title: "Day 2 — Alibaug & Murud-Janjira",
      description:
        "A morning visit to Kolaba Fort, a 17th-century sea fort built by the Maratha naval commander, reachable on foot only during low tide across a stretch of exposed seabed, otherwise requiring a short boat crossing. In the afternoon, a drive of roughly 1.5 hours to Murud-Janjira, an island fort widely considered one of the most formidable sea forts in India, notable for having never been successfully conquered despite repeated attempts by several powers including the Portuguese, British and Marathas — a short boat ride from the mainland is needed to reach it.",
      image: "/images/destinations/alibaug-beach.webp",
      imageAlt: "A beach in Alibaug, Maharashtra",
    },
    {
      title: "Day 3 — Alibaug to Ganpatipule",
      description:
        "A scenic drive of roughly 5 to 6 hours further south along the Konkan coast to Ganpatipule, passing through fishing villages, cashew and mango plantations, and stretches of genuinely undeveloped coastline along the way, with the Arabian Sea visible from the road at several points. Arrive by evening with time to settle into your hotel before exploring the town's own beach at sunset, noticeably quieter than anywhere visited so far on the trip.",
    },
    {
      title: "Day 4 — Ganpatipule & Departure",
      description:
        "A morning visit to the Swayambhu Ganpati Temple, built directly facing the Arabian Sea and considered a genuinely significant Ganesh shrine, its idol believed to be self-manifested (swayambhu) rather than installed, giving it particular religious significance. The rest of the morning is free for the beach itself, considerably quieter and less developed than Alibaug's, before a private transfer to the nearest airport (typically via Ratnagiri) or a longer drive back toward Mumbai for your onward or international departure flight.",
      image: "/images/destinations/ganpatipule-beach.webp",
      imageAlt: "A wave breaking on the beach at Ganpatipule, Maharashtra",
    },
  ],
  inclusions: [
    "1 night in a hotel of your choice in Alibaug",
    "2 nights in a hotel of your choice in Ganpatipule",
    "Daily breakfast",
    "Ferry ticket, Mumbai to Mandwa (one way)",
    "Private air-conditioned vehicle for all sightseeing and transfers",
    "English-speaking guide throughout",
  ],
  exclusions: [
    "Flights or train tickets to and from Mumbai, and from Ratnagiri",
    "Murud-Janjira boat crossing fee (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "A Fort Never Successfully Conquered",
      description:
        "Murud-Janjira's history of repelling every attacking power that tried to take it is a genuinely unusual military record among Indian sea forts.",
    },
    {
      title: "A Sea Fort Reachable on Foot",
      description:
        "Kolaba Fort's tidal accessibility, walkable at low tide and requiring a boat at high tide, gives it a genuinely different character from a standard hilltop fort visit.",
    },
    {
      title: "Considerably Quieter Than Goa",
      description:
        "The Konkan coast offers comparable beach scenery to India's more famous coastal stretches with a fraction of the tourist development.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make exploring both fort sites and walking the beaches genuinely comfortable. April to June turns hot and humid, and the June–September monsoon brings very heavy rain to this stretch of coast, though the Konkan region is often described as most dramatically lush and green during that period for anyone specifically drawn to monsoon scenery.",
  },
  relatedDestinations: [
    {
      name: "Maharashtra Beaches",
      tagline: "The Konkan Coastline",
      description: "Alibaug's fort-dotted coastline and the quieter Konkan shore at Ganpatipule.",
      href: "/destinations/maharashtra-beaches",
      image: "/images/destinations/maharashtra-beaches.webp",
      imageAlt: "A beach along Maharashtra's Konkan coastline",
    },
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
      description: "Portuguese-era churches and beaches, a natural coastal extension further south.",
      href: "/destinations/goa",
      image: "/images/destinations/Goa.webp",
      imageAlt: "Goa's coastline",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is the Mumbai-to-Alibaug ferry crossing comfortable?",
      answer:
        "Generally yes, and it's considerably faster than the road route around Mumbai's harbour, though it can be affected by sea conditions during monsoon season, which is part of why we recommend the October–March window for this trip.",
    },
    {
      question: "Can we reach Kolaba Fort regardless of tide timing?",
      answer:
        "Access depends on tide levels — it's walkable across exposed seabed at low tide, or reachable by a short boat ride at high tide; we'll plan the visit around the day's actual tide schedule.",
    },
    {
      question: "Is Murud-Janjira worth the extra drive time from Alibaug?",
      answer:
        "Yes, genuinely — its unbeaten military history and dramatic island setting make it one of the most distinctive forts on India's western coast, and most visitors consider the roughly 3-hour round-trip drive worthwhile.",
    },
    {
      question: "How does this differ from a Goa beach holiday?",
      answer:
        "The Konkan coast offers comparable natural beauty with considerably less tourist infrastructure and crowding — fewer beach shacks and nightlife, more genuinely quiet stretches of coastline and working fishing villages.",
    },
    {
      question: "Can this be combined with our Mumbai Tour?",
      answer:
        "Yes, easily — Alibaug is a short ferry ride from Mumbai, making this a natural extension to a Mumbai stay; let us know when planning your trip if you'd like to combine both.",
    },
  ],
  relatedPackages: [
    {
      name: "Mumbai Tour",
      tagline: "Colonial Landmarks & the Arabian Sea · 4 Days",
      description: "The natural starting point for this trip, connected by a short ferry ride to Alibaug.",
      href: "/tours/mumbai-tour",
      image: "/images/destinations/Mumbai.webp",
      imageAlt: "Chhatrapati Shivaji Maharaj Terminus, Mumbai",
    },
    {
      name: "Goa Carnival",
      tagline: "Festival Guide",
      description: "A natural coastal extension further south, timed around Goa's four-day street carnival.",
      href: "/experiences/goa-carnival",
      image: "/images/destinations/goa-carnival.webp",
      imageAlt: "A carnival street parade with a decorated float",
    },
  ],
  draftPendingReview: false,
};
