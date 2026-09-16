import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const mahabalipuramTour: PackageContent = {
  slug: "mahabalipuram-tour",
  name: "Mahabalipuram Tour",
  tagline: "UNESCO Rock-Cut Monuments · 3 Days",
  metaTitle: "Mahabalipuram Tour Package | Shore Temple, Five Rathas & a Stone-Carving Workshop",
  metaDescription:
    "A private 3-day Mahabalipuram tour — the Shore Temple, Five Rathas, Krishna's Butterball, a working stone-carving workshop, and the nearby Crocodile Bank.",
  heroImage: "/images/destinations/chennai.webp",
  heroImageAlt: "The Shore Temple, Mahabalipuram",
  heroHeadline: "Mahabalipuram: Monuments Carved From Solid Rock",
  heroSubheadline:
    "A focused 3-day tour of Mahabalipuram alone — for travellers who'd rather spend real time among its rock-cut monuments than treat it as a single day trip from Chennai.",
  overview:
    "Most South India circuits give Mahabalipuram a single day, enough for the Shore Temple and the Five Rathas before heading back to Chennai or on to Pondicherry. That's a reasonable taste, but the town rewards more time than that — beyond the headline monuments, Mahabalipuram remains a genuinely active centre of stone-carving today, with workshops throughout the town still producing sculpture using techniques passed down from the same Pallava-era tradition that carved the monuments themselves centuries ago. This tour gives three days to properly explore the UNESCO site itself, watch that living craft tradition up close, and take in the nearby Crocodile Bank, a genuinely worthwhile addition most single-day visits skip entirely.",
  quickFacts: [
    { label: "Duration", value: "3 Days / 2 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Nov – Feb" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Mahabalipuram",
      description:
        "A roughly 1 to 1.5 hour drive from Chennai airport directly to Mahabalipuram, with the rest of the day free to rest after travelling. In the evening, an easy first outing to the beach a short walk from most hotels, with the Shore Temple visible in silhouette against the sunset from the right vantage point — a genuinely striking first glimpse of the monument before visiting it properly the next day, and a good introduction to the town's small, easy-to-navigate scale. This tour deliberately keeps the arrival day light, since tomorrow's full day of sightseeing covers considerable ground on foot across open granite terrain.",
    },
    {
      title: "Day 2 — Shore Temple & the Rock-Cut Monuments",
      description:
        "A full day exploring Mahabalipuram's UNESCO World Heritage Site, starting with the Shore Temple itself, standing directly at the edge of the Bay of Bengal and among the oldest structural stone temples in South India, its two towers dedicated to Shiva and Vishnu. Continue to the Five Rathas, a set of monolithic temple structures each carved from a single piece of rock and named after characters from the Mahabharata, complete with life-sized stone elephants and a lion guarding the complex. Visit Arjuna's Penance, a massive open-air rock relief depicting scenes from Hindu mythology across one of the largest such carvings in the world, Krishna's Butterball, a giant boulder balanced improbably on a sloped hillside for centuries despite repeated attempts to move it, and the Varaha Cave Temple, a rock-cut cave shrine with detailed carvings of Vishnu's boar incarnation.",
      image: "/images/destinations/chennai.webp",
      imageAlt: "The Shore Temple, Mahabalipuram",
    },
    {
      title: "Day 3 — Stone-Carving Workshop & Crocodile Bank",
      description:
        "A morning visit to one of Mahabalipuram's working stone-carving workshops, where sculptors continue a tradition directly descended from the Pallava-era craftsmen who carved the town's ancient monuments, shaping granite and other stone into everything from temple deities to modern decorative pieces sold across India and internationally, often working in open-air yards visible directly from the street. In the afternoon, a visit to the Madras Crocodile Bank Trust, a reptile conservation centre roughly 15 minutes north of town, home to thousands of crocodiles and other reptiles across several breeding and research programmes, before a private transfer back to Chennai airport for departure.",
    },
  ],
  inclusions: [
    "2 nights in a hotel of your choice in Mahabalipuram",
    "Daily breakfast",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide for sightseeing days",
    "Monument entry fees as per itinerary",
    "Madras Crocodile Bank entry fee",
  ],
  exclusions: [
    "Flights or train tickets to and from Chennai",
    "Stone-carving workshop purchases, if any (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Camera fees, if applicable at any stop",
  ],
  highlights: [
    {
      title: "A Living Craft Tradition, Not Just Ancient Monuments",
      description:
        "Mahabalipuram's stone-carving workshops continue a tradition directly descended from the sculptors who carved the town's UNESCO monuments.",
    },
    {
      title: "Genuine Time at the Site, Not a Single Rushed Day",
      description:
        "Most Chennai-based circuits give Mahabalipuram one day; this tour lets you actually take in the monuments without racing the clock.",
    },
    {
      title: "The Crocodile Bank, Not Just Temples",
      description:
        "A genuinely worthwhile addition most single-day visits skip entirely, adding real variety beyond the rock-cut monuments alone.",
    },
  ],
  bestTimeToVisit: {
    heading: "November–February is Best",
    note: "Cool, dry conditions make walking the monument site genuinely comfortable, given how much ground is covered on foot across open granite terrain. March to June turns hot and humid, and the October–December period can bring occasional heavy rain from the northeast monsoon, worth checking against your specific travel dates.",
  },
  relatedDestinations: [
    {
      name: "Mahabalipuram",
      tagline: "UNESCO Rock-Cut Monuments",
      description: "The Shore Temple and the Five Rathas, carved directly from granite by 7th-century sculptors.",
      href: "/destinations/mahabalipuram",
      image: "/images/destinations/chennai.webp",
      imageAlt: "The Shore Temple, Mahabalipuram",
    },
    {
      name: "Chennai",
      tagline: "Gateway to Tamil Nadu",
      description: "A sweeping urban beach and South India's most practical starting point.",
      href: "/destinations/chennai",
      image: "/images/destinations/marina-beach-chennai.webp",
      imageAlt: "Sunset over Marina Beach, Chennai",
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
      question: "Is 3 days too long for just Mahabalipuram?",
      answer:
        "Not for travellers who want more than a rushed day trip — the monument site alone covers considerable ground, and adding the stone-carving workshop and Crocodile Bank gives genuine variety beyond the temples themselves.",
    },
    {
      question: "Can we buy sculptures directly from the stone-carving workshops?",
      answer:
        "Yes — most workshops sell finished pieces ranging from small decorative items to large temple sculptures, and can typically arrange shipping for larger purchases; we can point you toward reputable workshops when planning your trip.",
    },
    {
      question: "Is the Crocodile Bank suitable for children?",
      answer:
        "Yes, generally — it's a genuinely educational stop with viewing areas designed for visitors of all ages, though as with any wildlife facility, supervision around enclosures is worth keeping in mind.",
    },
    {
      question: "Can we combine this with Chennai or Pondicherry?",
      answer:
        "Yes — this pairs naturally with our Chennai City Tour or Pondicherry Tour, or our wider South India Tours classic circuit. Let us know your available days and we'll adjust the itinerary accordingly.",
    },
    {
      question: "How much walking is involved at the monument site?",
      answer:
        "A moderate amount — the main monuments are spread across a walkable site, though the ground is uneven granite in places, so comfortable, closed shoes are worth packing rather than sandals.",
    },
  ],
  relatedPackages: [
    {
      name: "South India Tours",
      tagline: "The Classic Circuit · 6 Days",
      description: "Mahabalipuram as part of a wider circuit through Chennai and Pondicherry.",
      href: "/tours/south-india-tours-classic",
      image: "/images/destinations/chennai.webp",
      imageAlt: "The Shore Temple, Mahabalipuram, near Chennai",
    },
    {
      name: "Chennai City Tour",
      tagline: "Temples, Beaches & the Gateway to the South",
      description: "A Chennai-only version of a South India trip, with its own Mahabalipuram day trip included.",
      href: "/tours/chennai-tour",
      image: "/images/destinations/marina-beach-chennai.webp",
      imageAlt: "Sunset over Marina Beach, Chennai",
    },
    {
      name: "Pondicherry Tour",
      tagline: "The French Quarter",
      description: "A Pondicherry-only version for travellers who want to focus on colonial heritage instead.",
      href: "/tours/pondicherry-tour",
      image: "/images/destinations/pondicherry-french-quarter.webp",
      imageAlt: "Colonial-era villas in Pondicherry's French Quarter",
    },
  ],
  draftPendingReview: false,
};
