import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * Unlike Rajasthan Highlights and North India Highlights, which condense a
 * single region, India Highlights is deliberately the flagship "best of
 * India" product — pairing North India's most iconic monument with a
 * genuinely different region (Kerala's backwaters) to show the country's
 * range in one trip, rather than doubling down on North India again.
 * No dedicated Kochi destination page exists yet, so relatedDestinations
 * links to Kerala's broader destination page instead.
 */
export const indiaHighlights: PackageContent = {
  slug: "india-highlights",
  name: "India Highlights",
  tagline: "The Taj Mahal & Kerala's Backwaters",
  metaTitle: "India Highlights Tour | Delhi, Agra, Kochi & Alleppey in 7 Days",
  metaDescription:
    "A 7-day India itinerary pairing North and South — the Taj Mahal in Agra, followed by Kochi's colonial old town and a private houseboat cruise through Alleppey's backwaters.",
  heroImage: "/images/destinations/agra-taj-mahal.webp",
  heroImageAlt: "Taj Mahal at sunrise, Agra",
  heroHeadline: "India Highlights: North & South in One Trip",
  heroSubheadline:
    "A 7-day circuit pairing India's most iconic monument with a genuinely different region — the Taj Mahal in Agra, followed by Kochi's colonial old town and a private houseboat cruise through Kerala's backwaters.",
  overview:
    "Most condensed India itineraries stay within a single region — understandably, since North India's Mughal monuments and South India's backwaters and coastline are both substantial destinations on their own. This trip deliberately does both, on the view that a first-time visitor's best introduction to India isn't more time in one region, but a genuine sense of how different the country's regions actually are from each other. Four days cover Delhi and Agra, including the Taj Mahal at sunrise; three days shift entirely to Kochi's Portuguese and Dutch colonial old town and a private houseboat cruise through Alleppey's palm-lined backwaters — a different climate, cuisine, architecture and pace within the same week.",
  quickFacts: [
    { label: "Duration", value: "7 Days / 6 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Delhi",
      description:
        "On arrival at Indira Gandhi International Airport, your private guide and driver meet you at the terminal for a hassle-free transfer to your hotel in Delhi. The rest of the day is left free to rest and adjust after a long international flight, with an optional evening orientation walk through a nearby market to ease gently into the sights, sounds and street food of the Indian capital before sightseeing begins tomorrow. Your guide will also confirm the full 7-day plan spanning both North and South India with you this evening.",
    },
    {
      title: "Day 2 — Delhi Sightseeing",
      description:
        "A full-day private tour of both Old and New Delhi, covering the city's Mughal and colonial layers in a single comfortable day. In Old Delhi: Humayun's Tomb, the elegant red-sandstone precursor to the Taj Mahal, the Jama Masjid mosque, and a cycle-rickshaw ride through the packed lanes of Chandni Chowk. In New Delhi: the wide colonial-era avenues around India Gate and the government quarter surrounding Rashtrapati Bhavan. Your English-speaking guide narrates the history throughout, translating the sensory overload of Old Delhi's markets into something easier to navigate.",
      image: "/images/destinations/delhi-india-gate.webp",
      imageAlt: "India Gate at dusk, Delhi",
    },
    {
      title: "Day 3 — Delhi to Agra",
      description:
        "A scenic 3 to 4-hour private drive south to Agra, home of the Taj Mahal. After checking into your hotel, visit Agra Fort, a red sandstone UNESCO World Heritage Site and the Mughal seat of power before the capital moved to Delhi, walking the same ramparts where Emperor Shah Jahan was reportedly imprisoned by his own son. In the evening, head to the Mehtab Bagh gardens across the river for an uncrowded view of the Taj Mahal at sunset.",
      image: "/images/destinations/agra-fort.webp",
      imageAlt: "Agra Fort's red sandstone ramparts",
    },
    {
      title: "Day 4 — Taj Mahal Sunrise, Fly to Kochi",
      description:
        "Enter the Taj Mahal at opening hour for sunrise, for softer light, cooler temperatures and the thinnest crowds of the day. Your guide will point out details easy to miss alone: the pietra dura stone inlay work, and the deliberate symmetry designed to be viewed from the main gateway. Afterwards, a flight connecting through Delhi to Kochi, in Kerala — a genuinely different climate and culture from North India, humid and tropical, with a distinct Malayalam-speaking, spice-trading history stretching back over a thousand years. Private transfer to your hotel in Fort Kochi, with the evening free to rest after the journey.",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      title: "Day 5 — Kochi Sightseeing",
      description:
        "A full day exploring Fort Kochi and Mattancherry, the old colonial quarter shaped in turn by Portuguese, Dutch and British trading interests over roughly 500 years. Visit the Chinese fishing nets along the waterfront, believed to have been introduced by traders from the court of Kublai Khan, St. Francis Church, among the oldest European-built churches in India, and the Mattancherry Palace with its detailed Hindu mythological murals. In the evening, a Kathakali dance performance offers a first look at Kerala's distinctive classical dance-drama tradition, with elaborate costumes and makeup applied over several hours before each show.",
      image: "/images/destinations/kochi-kathakali.webp",
      imageAlt: "Kathakali dancers in traditional costume, Kochi",
    },
    {
      title: "Day 6 — Kochi to Alleppey, Backwaters Houseboat",
      description:
        "A roughly 1.5-hour drive to Alleppey, where a private traditional houseboat (kettuvallam), originally used to transport rice and spices and now converted into comfortable overnight accommodation, becomes both your transport and your hotel for the night. The boat drifts slowly along narrow, palm-lined backwater canals through small villages, rice paddies below sea level protected by ancient embankments, and wider lake stretches, with all meals cooked fresh on board by the boat's own crew. The pace here is deliberately unhurried — genuinely one of the most different experiences on the whole trip compared to Delhi and Agra's more structured sightseeing days.",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      title: "Day 7 — Alleppey to Kochi, Departure",
      description:
        "Disembark the houseboat after breakfast and drive back to Kochi for your onward or international departure flight. Seven days across two genuinely distinct halves of India — Delhi and Agra's Mughal monuments in the dry North, followed by Kochi and Alleppey's colonial history and tropical backwaters in the South — a real sense of the country's range rather than a single region's version of an India trip, and a strong argument for coming back to see whichever half you'd like to know better.",
    },
  ],
  inclusions: [
    "2 nights in a hotel of your choice in Delhi & Agra combined",
    "2 nights in a hotel of your choice in Fort Kochi",
    "1 night on a private houseboat in Alleppey, all meals included",
    "Daily breakfast (Delhi & Agra, Kochi)",
    "Domestic flight, Agra/Delhi to Kochi",
    "Private air-conditioned vehicle and English-speaking guide throughout",
    "All monument entry fees as per itinerary",
  ],
  exclusions: [
    "International flights to Delhi and from Kochi",
    "Lunches and dinners in Delhi, Agra and Kochi (unless noted)",
    "Kathakali performance ticket (paid locally, arranged on request)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Two Genuinely Different Halves of India",
      description:
        "North India's dry Mughal heritage and South India's tropical backwaters and colonial coastline, in a single compact week.",
    },
    {
      title: "A Night on a Private Houseboat",
      description:
        "Alleppey's backwaters cruise is genuinely unlike anything in the Delhi-Agra portion of the trip — slow, quiet and entirely different in pace.",
    },
    {
      title: "A Real Sense of India's Range",
      description:
        "Built specifically to show how different India's regions are from each other, rather than deepening a single region on a first visit.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "This window offers comfortable temperatures in Delhi and Agra and falls after Kerala's monsoon season, when the backwaters are lush and boat travel is most comfortable. April to June turns hot and humid across both regions, and Kerala's monsoon (June to September) can disrupt houseboat cruises specifically.",
  },
  relatedDestinations: [
    {
      name: "Delhi",
      tagline: "India's Capital",
      description: "Mughal forts, colonial avenues, and the gateway to North India.",
      href: "/destinations/delhi",
      image: "/images/destinations/delhi-india-gate.webp",
      imageAlt: "India Gate at dusk, Delhi",
    },
    {
      name: "Agra",
      tagline: "Home of the Taj Mahal",
      description: "The Taj Mahal, Agra Fort, and the abandoned Mughal capital of Fatehpur Sikri.",
      href: "/destinations/agra",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Kerala",
      tagline: "God's Own Country",
      description: "Palm-lined backwaters, misty tea gardens, and a coastline layered with trading history.",
      href: "/destinations/kerala",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Why combine Delhi/Agra with Kerala specifically, rather than Rajasthan or Varanasi?",
      answer:
        "Kerala offers the clearest contrast to North India's dry, monument-heavy sightseeing — a different climate, cuisine, pace and kind of experience (a houseboat cruise rather than another fort or palace), which is exactly the range this itinerary is built to show on a first trip.",
    },
    {
      question: "Is one night on the houseboat enough?",
      answer:
        "It's the standard length for an Alleppey backwaters cruise and gives a genuine overnight experience — sunset, dinner and sunrise all aboard — though a 2-night cruise or additional time in Kerala's hill stations can be added if you'd like to extend that portion of the trip.",
    },
    {
      question: "How does the flight between Agra and Kochi work?",
      answer:
        "It connects through Delhi, since there's no direct Agra–Kochi route. We arrange this as part of the itinerary and time it to flow smoothly from your Taj Mahal sunrise visit.",
    },
    {
      question: "Can we add Jaipur or Munnar to this itinerary?",
      answer:
        "Yes — this 7-day circuit is a starting template. Jaipur adds naturally to the North India leg (extending it into a Golden Triangle), and Munnar's tea gardens add well to the Kerala leg; let us know when planning your trip.",
    },
    {
      question: "Is this itinerary better than doing a single-region trip?",
      answer:
        "It depends what you're looking for — if you'd rather go deeper into one region, our Golden Triangle Tour or Kerala Tours classic circuit each do that. This itinerary suits travellers who specifically want breadth over depth on a first trip to India.",
    },
  ],
  relatedPackages: [
    {
      name: "Golden Triangle Tour",
      tagline: "Delhi – Agra – Jaipur · 6 Days",
      description: "The fuller North India circuit, for travellers who'd rather go deeper into one region.",
      href: "/tours/golden-triangle-tour-classic",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Kerala Tours",
      tagline: "The Classic Circuit · 6 Days",
      description: "The fuller Kerala circuit, adding Munnar's tea gardens to Kochi and Alleppey.",
      href: "/tours/kerala-tours-classic",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      name: "North India Highlights",
      tagline: "Delhi & Agra in 4 Days",
      description: "A North-India-only version of this trip, for a shorter stopover-friendly itinerary.",
      href: "/tours/north-india-highlights",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
  ],
  draftPendingReview: false,
};
