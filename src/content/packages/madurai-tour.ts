import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * Image note: "vaigai-river-madurai.webp" actually shows the Vandiyur
 * Mariamman Teppakulam temple tank, not the Vaigai River itself — used
 * with honest alt text on Day 3, where the tank is genuinely covered.
 */
export const maduraiTour: PackageContent = {
  slug: "madurai-tour",
  name: "Madurai Temple Tour",
  tagline: "The Meenakshi Amman Temple · 4 Days",
  metaTitle: "Madurai Tour Package | Meenakshi Amman Temple & Thirumalai Nayakkar Palace",
  metaDescription:
    "A private 4-day Madurai tour — the Meenakshi Amman Temple's towering gopurams, Thirumalai Nayakkar Palace, the Teppakulam temple tank, and Thiruparankundram.",
  heroImage: "/images/destinations/madurai.webp",
  heroImageAlt: "Meenakshi Amman Temple's colourful gopuram, Madurai",
  heroHeadline: "Madurai: A City Built Around a Temple",
  heroSubheadline:
    "A focused 4-day tour of Madurai alone — one of India's oldest continuously inhabited cities, centred entirely on the Meenakshi Amman Temple's towering gopurams.",
  overview:
    "Madurai works differently from most South India stops on a coastal Tamil Nadu circuit — it sits well inland, and rather than combining several distinct sights, the entire city is genuinely built around a single temple complex that has anchored it for over 2,500 years. This tour gives Madurai its own dedicated time rather than a rushed day trip: real hours inside the Meenakshi Amman Temple itself, the former royal palace of the Nayak dynasty, the city's temple tank used for its annual float festival, and a half-day excursion to Thiruparankundram, a temple carved directly into a hillside a short drive away.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Nov – Feb" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Madurai",
      description:
        "Private transfer from Madurai airport to your hotel, with the rest of the day free to rest after travelling. In the evening, an easy first outing to the streets surrounding the Meenakshi Amman Temple, where the twelve towering gopurams are lit after dark and visible from several vantage points across the old city, a genuinely striking first glimpse before visiting the temple properly the next day and a good introduction to how the whole city orients itself around the complex. This tour deliberately keeps the arrival day light, since tomorrow's temple visit rewards being rested and unhurried rather than fitted in after a long travel day.",
    },
    {
      title: "Day 2 — Meenakshi Amman Temple",
      description:
        "A full day centred on the Meenakshi Amman Temple, dedicated to the goddess Meenakshi and her consort Sundareswarar, with a temple complex covering over 14 acres and twelve gopurams, the tallest rising more than 50 metres and covered in thousands of brightly painted sculptures depicting Hindu deities and mythological figures. Inside, visit the Thousand Pillar Hall, a hall of intricately carved columns each slightly different from the next, and the temple tank, where devotees still bathe as part of ritual practice. The temple remains an active site of daily worship with thousands of visitors passing through, rather than a preserved monument alone, so mornings or early evenings tend to be calmer than midday.",
      image: "/images/destinations/madurai.webp",
      imageAlt: "Meenakshi Amman Temple's colourful gopuram, Madurai",
    },
    {
      title: "Day 3 — Palace, Teppakulam & the Old City",
      description:
        "A morning visit to Thirumalai Nayakkar Palace, a 17th-century royal residence built by the Nayak dynasty in a distinctive Indo-Saracenic style blending Dravidian and Islamic architectural elements, with towering pillars and a large open courtyard that once hosted royal ceremonies. Continue to the Vandiyur Mariamman Teppakulam, a large temple tank with a small central island shrine, used once a year for the city's float festival when temple deities are ceremonially carried across the water amid large crowds. In the afternoon, a walk through Madurai's old city markets, including the flower market near the temple, genuinely worth visiting for the colour and scale of the trade in jasmine and marigold alone.",
      image: "/images/destinations/vaigai-river-madurai.webp",
      imageAlt: "The Vandiyur Mariamman Teppakulam temple tank, Madurai",
    },
    {
      title: "Day 4 — Thiruparankundram & Departure",
      description:
        "A half-day excursion to Thiruparankundram, roughly 20 minutes from the city centre, home to one of the six principal abodes of Murugan and a temple carved directly into a hillside rather than built up from ground level, genuinely distinct from the free-standing gopuram architecture seen at Meenakshi Amman, with a small hill fort and cave shrines nearby for anyone who'd like to extend the visit further. Return to Madurai for a private transfer to the airport for your onward or international departure flight. Four days in, most travellers describe Madurai as feeling like a genuinely different kind of city than anywhere else on a South India circuit — one built entirely around a single living temple rather than a collection of separate sights.",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice in Madurai",
    "Daily breakfast",
    "Private air-conditioned vehicle for all sightseeing and the Thiruparankundram excursion",
    "English-speaking guide for sightseeing days",
    "Thirumalai Nayakkar Palace entry fee",
  ],
  exclusions: [
    "Flights or train tickets to and from Madurai",
    "Meenakshi Amman Temple camera fee, if applicable (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "A City Built Around One Temple",
      description:
        "Unlike a multi-sight coastal circuit, Madurai centres entirely on the Meenakshi Amman Temple, over 2,500 years at the heart of the city.",
    },
    {
      title: "Real Time Inside the Temple, Not a Rushed Visit",
      description:
        "The complex covers over 14 acres — genuine time here means actually taking in the Thousand Pillar Hall and the gopurams rather than a brief walkthrough.",
    },
    {
      title: "A Hillside Temple, Not Just Gopurams",
      description:
        "Thiruparankundram's rock-cut architecture offers a genuinely different style from Meenakshi Amman's free-standing towers.",
    },
  ],
  bestTimeToVisit: {
    heading: "November–February is Best",
    note: "Cool, dry conditions make walking the temple complex and the old city markets genuinely comfortable. March to June turns hot, and Madurai's inland location means it typically runs warmer than the coastal Tamil Nadu stops on a wider circuit.",
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
      question: "Is 4 days too long for just Madurai?",
      answer:
        "Not for travellers who want genuine time inside the Meenakshi Amman Temple rather than a rushed walkthrough — the complex alone covers over 14 acres, and the palace, temple tank, and Thiruparankundram excursion round out real variety beyond the temple itself.",
    },
    {
      question: "Are there dress code requirements for the Meenakshi Amman Temple?",
      answer:
        "Yes — modest clothing covering shoulders and knees is expected, and footwear must be removed before entering; we'll brief you on specifics when confirming your visit.",
    },
    {
      question: "Is Madurai easy to combine with a coastal Tamil Nadu circuit?",
      answer:
        "Yes, though it adds meaningful driving distance given its inland location — we typically suggest either flying directly into Madurai for a standalone visit like this one, or adding roughly 2 extra days to a coastal circuit to include it by road.",
    },
    {
      question: "Is photography allowed inside the temple?",
      answer:
        "Generally yes in the outer courtyards, though rules can vary and a camera fee sometimes applies inside certain areas — we'll confirm current policy closer to your visit.",
    },
    {
      question: "Can we extend this trip to Rameswaram?",
      answer:
        "Rameswaram sits roughly 3 hours from Madurai by road; it's possible as an add-on with an extra day or two, and we can build that in if you'd like to extend the itinerary.",
    },
  ],
  relatedPackages: [
    {
      name: "South India Tours",
      tagline: "The Classic Circuit · 6 Days",
      description: "The coastal Chennai, Mahabalipuram and Pondicherry circuit, for a different side of Tamil Nadu.",
      href: "/tours/south-india-tours-classic",
      image: "/images/destinations/chennai.webp",
      imageAlt: "The Shore Temple, Mahabalipuram, near Chennai",
    },
    {
      name: "Chennai City Tour",
      tagline: "Temples, Beaches & the Gateway to the South",
      description: "A Chennai-only version of a South India trip, for a coastal rather than inland focus.",
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
