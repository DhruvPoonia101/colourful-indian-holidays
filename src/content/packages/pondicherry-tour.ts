import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const pondicherryTour: PackageContent = {
  slug: "pondicherry-tour",
  name: "Pondicherry Tour",
  tagline: "The French Quarter · 4 Days",
  metaTitle: "Pondicherry Tour Package | French Quarter, Auroville & the Promenade",
  metaDescription:
    "A private 4-day Pondicherry tour — the French Quarter's colonial villas, a full day at Auroville's Matrimandir, the boulder-lined promenade, and Serenity Beach.",
  heroImage: "/images/destinations/pondicherry-french-quarter.webp",
  heroImageAlt: "Colonial-era villas in Pondicherry's French Quarter",
  heroHeadline: "Pondicherry: A French Corner of South India",
  heroSubheadline:
    "A focused 4-day tour of Pondicherry alone — for travellers who'd rather spend real time in its colonial quarter and at Auroville than treat it as a single overnight stop.",
  overview:
    "Most South India circuits give Pondicherry a night, enough for a walk through the French Quarter before moving on. That undersells a town whose character genuinely rewards slowing down — mustard-yellow colonial villas laid out in a French grid, a spiritual community at Auroville built around an entirely different set of ideas than anywhere else in India, and beaches quieter than the busier stretches further up the Tamil Nadu coast. This tour gives Auroville a full day of its own rather than a rushed half-day stop, alongside proper time in White Town and a morning at one of Pondicherry's calmer beaches outside the city centre.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Nov – Feb" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Pondicherry",
      description:
        "Private transfer from Chennai airport, roughly 3 to 3.5 hours, or from Pondicherry's own smaller airport if flying directly, to your hotel in or near White Town. The rest of the day is free to rest after travelling, with an easy first-evening option of a walk through the French Quarter's mustard-yellow colonial villas and wrought-iron balconies, a genuinely different atmosphere from anywhere else in Tamil Nadu, closer in feel to a small European town than to the rest of the state. This tour deliberately keeps the arrival day light, since a full day of sightseeing and a full day at Auroville are both still ahead.",
    },
    {
      title: "Day 2 — French Quarter & the Promenade",
      description:
        "A full day exploring White Town properly, starting with a walk along the Promenade Beach, a boulder-lined seafront stretch that runs the length of the quarter and is closed to vehicle traffic in the evenings for pedestrians only. Visit the Sri Aurobindo Ashram, a spiritual community founded in the early 20th century that remains active today, and continue through White Town's grid of French colonial streets, each still carrying its original French street name on the signage, browsing boutique shops and French-Tamil fusion cafés at an easy pace. The afternoon is left free to explore further or simply enjoy the quarter's noticeably slower rhythm than the rest of Tamil Nadu.",
      image: "/images/destinations/pondicherry-french-quarter.webp",
      imageAlt: "Colonial-era villas in Pondicherry's French Quarter",
    },
    {
      title: "Day 3 — Auroville",
      description:
        "A full day at Auroville, an experimental township founded in 1968 and built around principles of international unity, roughly 30 minutes outside Pondicherry and home to residents from dozens of different countries. Visit the Auroville Visitor Centre for context on the township's history and ideals, before continuing to view the Matrimandir, a striking golden geodesic sphere at the community's centre used for individual meditation, viewable from a designated viewing point without needing to book the meditation session itself. The surrounding township includes forested walking paths, artisan workshops producing handmade paper, incense and textiles, and a genuinely different pace of life from anywhere else on a typical Tamil Nadu itinerary.",
      image: "/images/destinations/auroville-matrimandir.webp",
      imageAlt: "The golden Matrimandir sphere at Auroville, near Pondicherry",
    },
    {
      title: "Day 4 — Serenity Beach & Departure",
      description:
        "A morning at Serenity Beach, a quieter stretch of coastline north of the city popular with surfers and noticeably less crowded than the Promenade in central Pondicherry, with a scattering of small cafés along the sand for breakfast before heading onward and space to simply relax without the crowds found closer to White Town. A private transfer to Chennai airport or Pondicherry's own airport follows for departure. Four days in, most travellers describe Pondicherry as a genuine change of register from the rest of a South India trip — French colonial architecture, an experimental spiritual township, and quieter beaches, three distinct sides of the same small town.",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice in or near White Town",
    "Daily breakfast",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide for sightseeing days",
    "Auroville Visitor Centre entry",
  ],
  exclusions: [
    "Flights or train tickets to and from Chennai or Pondicherry",
    "Matrimandir meditation session, if booked separately in advance (arranged on request)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "A Full Day at Auroville, Not a Rushed Stop",
      description:
        "Most Pondicherry circuits treat Auroville as a half-day add-on; here it gets proper time to actually take in the township and the Matrimandir.",
    },
    {
      title: "A French Quarter Unlike Anywhere Else in India",
      description:
        "White Town's mustard-yellow villas and French grid layout offer a character found nowhere else on India's mainland coast.",
    },
    {
      title: "A Quieter Beach Beyond the Promenade",
      description:
        "Serenity Beach gives a genuinely different, less crowded coastal experience than central Pondicherry's more visited stretch.",
    },
  ],
  bestTimeToVisit: {
    heading: "November–February is Best",
    note: "Cool, dry conditions make the Promenade walks and a day at Auroville genuinely comfortable. March to June turns hot and humid, and the October–December period can bring occasional heavy rain from the northeast monsoon, worth checking against your specific travel dates.",
  },
  relatedDestinations: [
    {
      name: "Pondicherry",
      tagline: "The French Quarter",
      description: "Mustard-yellow colonial villas and a boulder-lined seafront promenade.",
      href: "/destinations/pondicherry",
      image: "/images/destinations/pondicherry-french-quarter.webp",
      imageAlt: "Colonial-era villas in Pondicherry's French Quarter",
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
      name: "Chennai",
      tagline: "Gateway to Tamil Nadu",
      description: "A sweeping urban beach and South India's most practical starting point.",
      href: "/destinations/chennai",
      image: "/images/destinations/marina-beach-chennai.webp",
      imageAlt: "Sunset over Marina Beach, Chennai",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Can we book a meditation session inside the Matrimandir?",
      answer:
        "Yes, though it requires advance booking directly through Auroville's own process, typically arranged a day or more ahead — we can advise on the current procedure when planning your trip, but the viewing point is accessible without a booking.",
    },
    {
      question: "Is 4 days too long for just Pondicherry?",
      answer:
        "Not for travellers who want more than a rushed overnight stop — a full day at Auroville alone justifies the extra time, alongside proper time in White Town and a morning at a quieter beach.",
    },
    {
      question: "Should we fly into Chennai or Pondicherry directly?",
      answer:
        "Pondicherry has its own smaller airport with limited connections; most international travellers fly into Chennai and drive down, roughly 3 to 3.5 hours, which is what this itinerary assumes by default.",
    },
    {
      question: "Is Auroville a religious site, or can anyone visit?",
      answer:
        "Auroville is open to all visitors regardless of belief — it's described as a universal township rather than a religious institution, though visitors are asked to maintain a respectful, quiet demeanour, particularly near the Matrimandir.",
    },
    {
      question: "Can we combine this with Chennai or Mahabalipuram?",
      answer:
        "Yes — this pairs naturally with our Chennai City Tour, Mahabalipuram Tour, or our wider South India Tours classic circuit. Let us know your available days and we'll adjust the itinerary accordingly.",
    },
  ],
  relatedPackages: [
    {
      name: "South India Tours",
      tagline: "The Classic Circuit · 6 Days",
      description: "Pondicherry as part of a wider circuit through Chennai and Mahabalipuram.",
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
      name: "Chennai City Tour",
      tagline: "Temples, Beaches & the Gateway to the South",
      description: "A Chennai-only version of a South India trip, for a bigger-city focus instead.",
      href: "/tours/chennai-tour",
      image: "/images/destinations/marina-beach-chennai.webp",
      imageAlt: "Sunset over Marina Beach, Chennai",
    },
  ],
  draftPendingReview: false,
};
