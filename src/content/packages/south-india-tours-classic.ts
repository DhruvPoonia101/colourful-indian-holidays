import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const southIndiaToursClassic: PackageContent = {
  slug: "south-india-tours-classic",
  name: "South India Tours",
  tagline: "The Classic Circuit · 6 Days",
  metaTitle: "South India Tour Package | Chennai, Mahabalipuram & Pondicherry",
  metaDescription:
    "A private 6-day South India tour — Chennai's temples and beaches, Mahabalipuram's rock-cut monuments, and Pondicherry's French colonial quarter.",
  heroImage: "/images/destinations/chennai.webp",
  heroImageAlt: "The Shore Temple, Mahabalipuram, near Chennai",
  heroHeadline: "South India: Temples, Monuments & the Coast",
  heroSubheadline:
    "The classic first-time introduction to Tamil Nadu — Chennai's gateway city, Mahabalipuram's rock-cut monuments, and Pondicherry's French colonial quarter.",
  overview:
    "South India consistently surprises first-time visitors with how different it feels from the temples and forts most people associate with a first trip to the country — Dravidian temple architecture rather than Mughal domes, a coastline shaped by centuries of European trading powers, and monuments carved directly from solid granite rather than built up in brick and stone. This circuit covers the three destinations that between them capture most of what makes Tamil Nadu distinctive: Chennai as the practical, temple-and-beach gateway city, Mahabalipuram's UNESCO-listed rock-cut monuments a short drive south, and Pondicherry's genuinely different French colonial quarter further down the coast. Six days is enough to see all three properly rather than rushing between them.",
  quickFacts: [
    { label: "Duration", value: "6 Days / 5 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Nov – Feb" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Chennai",
      description:
        "Private transfer from Chennai airport to your hotel, with the rest of the day free to rest after travelling. In the evening, an easy first outing to Marina Beach, one of the longest urban beaches anywhere in the world, running along nearly the entire eastern edge of the city — a genuinely striking introduction to Chennai's scale, particularly at sunset when locals gather along the promenade in large numbers for an evening walk and street food vendors set up along the sand. This tour deliberately keeps the arrival day light, since a full sightseeing day and the drive to Mahabalipuram are both still ahead, and starting rested makes a genuine difference to how the rest of the trip feels.",
      image: "/images/destinations/marina-beach-chennai.webp",
      imageAlt: "Sunset over Marina Beach, Chennai",
    },
    {
      title: "Day 2 — Chennai Sightseeing",
      description:
        "A full day exploring Chennai's mix of temple heritage and colonial history. Visit Kapaleeshwarar Temple, a striking example of Dravidian architecture with an intricately sculpted, multi-tiered gopuram, dedicated to Shiva and still an active site of daily worship rather than a preserved monument alone. Continue to San Thome Basilica, a Roman Catholic church built over the tomb of St. Thomas the Apostle, and Fort St. George, the first English fortress in India, dating to 1644 and still home to the Tamil Nadu state legislature today, its museum holding artefacts from the earliest days of British colonial rule. The afternoon is left free to explore the city's markets or simply rest ahead of tomorrow's drive south.",
    },
    {
      title: "Day 3 — Mahabalipuram",
      description:
        "A roughly 1 to 1.5 hour drive south to Mahabalipuram, a UNESCO World Heritage Site of temples and monuments carved directly from granite outcrops by 7th-century Pallava dynasty sculptors. Visit the Shore Temple, standing at the very edge of the Bay of Bengal and among the oldest structural stone temples in South India, followed by the Five Rathas, a set of monolithic temple structures each carved from a single piece of rock and named after characters from the Mahabharata, and Arjuna's Penance, a massive open-air rock relief depicting scenes from Hindu mythology across one of the largest such carvings in the world. Overnight in Mahabalipuram, with the shore a short walk from most hotels.",
      image: "/images/destinations/chennai.webp",
      imageAlt: "The Shore Temple, Mahabalipuram",
    },
    {
      title: "Day 4 — Mahabalipuram to Pondicherry",
      description:
        "A morning at leisure in Mahabalipuram, with an optional stop at Tiger Cave, a rock-cut shrine a short distance north featuring a cluster of carved lion faces around a small rock-cut stage once used for royal performances, before a roughly 2 to 2.5 hour drive south to Pondicherry, a former French colonial territory with a character found nowhere else on India's mainland coast. Check into your hotel in or near White Town, and spend the evening walking the French Quarter's mustard-yellow colonial villas and wrought-iron balconies, a genuinely different atmosphere from anywhere else on this trip, closer in feel to a small European town than to the rest of Tamil Nadu.",
      image: "/images/destinations/pondicherry-french-quarter.webp",
      imageAlt: "Colonial-era villas in Pondicherry's French Quarter",
    },
    {
      title: "Day 5 — Pondicherry Sightseeing",
      description:
        "A full day in Pondicherry, starting with a walk along the Promenade Beach, a boulder-lined seafront stretch that runs the length of White Town and makes for a genuinely pleasant morning or evening walk, closed to vehicle traffic in the evenings for pedestrians only. Visit the Sri Aurobindo Ashram, a spiritual community founded in the early 20th century that remains active today, and if time allows, a half-day excursion to Auroville, an experimental township built around principles of international unity, roughly 30 minutes outside the city and centred on the striking golden Matrimandir structure. The evening is left free to explore White Town's French-Tamil fusion restaurants and boutique shops at your own pace.",
      image: "/images/destinations/pondicherry-beach.webp",
      imageAlt: "Pondicherry's boulder-lined promenade at dusk",
    },
    {
      title: "Day 6 — Departure",
      description:
        "A final relaxed morning in Pondicherry, with time for one last walk along the promenade or through White Town's quieter lanes, before a roughly 3 to 3.5 hour drive back to Chennai for your onward or international departure flight. If your flight timing allows, a stop at a roadside café along the coastal road makes for a pleasant break partway through the drive back north. Six days in, most travellers describe this circuit as a genuinely different side of India than the more commonly visited north — Dravidian temples, rock-cut monuments, and a French colonial quarter, three distinct characters within a single compact stretch of coastline.",
    },
  ],
  inclusions: [
    "1 night in a hotel of your choice in Chennai",
    "1 night in a hotel of your choice in Mahabalipuram",
    "2 nights in a hotel of your choice in Pondicherry",
    "Daily breakfast",
    "Private air-conditioned vehicle for all road transfers and sightseeing",
    "English-speaking guide for sightseeing days",
  ],
  exclusions: [
    "Flights or train tickets to and from Chennai",
    "Auroville entry and Matrimandir viewing pass, if visited (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Camera fees, if applicable at any stop",
  ],
  highlights: [
    {
      title: "Three Genuinely Different Characters",
      description:
        "Chennai's temple-and-beach gateway, Mahabalipuram's rock-cut monuments, and Pondicherry's French colonial quarter — a real range in six days.",
    },
    {
      title: "Monuments Carved From Solid Rock",
      description:
        "Mahabalipuram's Shore Temple and Five Rathas were carved directly from granite outcrops, a genuinely different building method from brick-and-stone architecture elsewhere in India.",
    },
    {
      title: "A French Quarter Unlike Anywhere Else in India",
      description:
        "Pondicherry's White Town retains a genuine colonial-era character, closer in feel to a small European town than to the rest of Tamil Nadu.",
    },
  ],
  bestTimeToVisit: {
    heading: "November–February is Best",
    note: "Cool, dry conditions make sightseeing and the coastal walks genuinely comfortable across all three stops. March to June turns hot and humid, and the October–December period can bring occasional heavy rain from the northeast monsoon, worth checking against your specific travel dates.",
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
      question: "Is this trip suitable for a first visit to South India?",
      answer:
        "Yes — this is specifically designed as a first-time introduction, covering a genuine range of Tamil Nadu's character (temples, rock-cut monuments, and colonial heritage) without requiring more than six days.",
    },
    {
      question: "Can we add Madurai to this circuit?",
      answer:
        "Yes — Madurai sits further inland and adds roughly 2 extra days to this itinerary given the additional driving distance; let us know if you'd like it included and we'll adjust the route.",
    },
    {
      question: "How much walking is involved at Mahabalipuram?",
      answer:
        "A moderate amount — the main monuments (Shore Temple, Five Rathas, Arjuna's Penance) are spread across a walkable site, though the ground is uneven granite in places, so comfortable shoes are worth packing.",
    },
    {
      question: "Is Pondicherry worth two nights, or is one enough?",
      answer:
        "Two nights lets you genuinely settle into the French Quarter's pace and fit in Auroville as a half-day excursion; one night is workable but feels rushed given how much of Pondicherry's appeal is about slowing down rather than sightseeing quickly.",
    },
    {
      question: "Is November through February really necessary, or can we visit other times?",
      answer:
        "November through February offers the most comfortable weather across all three stops; outside that window, we'd specifically flag the October–December period for possible monsoon rain and April–June for genuinely hot, humid conditions.",
    },
  ],
  relatedPackages: [
    {
      name: "Chennai City Tour",
      tagline: "Temples, Beaches & the Gateway to the South",
      description: "A Chennai-only version of this trip for travellers with less time.",
      href: "/tours/chennai-tour",
      image: "/images/destinations/marina-beach-chennai.webp",
      imageAlt: "Sunset over Marina Beach, Chennai",
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
      description: "A Pondicherry-only version of this trip for travellers who want to focus on the coast alone.",
      href: "/tours/pondicherry-tour",
      image: "/images/destinations/pondicherry-french-quarter.webp",
      imageAlt: "Colonial-era villas in Pondicherry's French Quarter",
    },
  ],
  draftPendingReview: false,
};
