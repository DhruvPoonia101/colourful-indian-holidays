import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * Deliberately the shortest North India package on the site — genuinely
 * distinct from North India Tours (9 days, Delhi-Agra-Jaipur-Varanasi) and
 * the Golden Triangle Tour (6 days, Delhi-Agra-Jaipur). This covers only
 * Delhi and Agra for travellers with very limited time who still want to
 * see the Taj Mahal.
 */
export const northIndiaHighlights: PackageContent = {
  slug: "north-india-highlights",
  name: "North India Highlights",
  tagline: "Delhi & Agra in 4 Days",
  metaTitle: "North India Highlights Tour | Delhi & the Taj Mahal in 4 Days",
  metaDescription:
    "A condensed 4-day North India itinerary covering just Delhi and Agra — the Taj Mahal, Agra Fort and Delhi's Mughal and colonial landmarks — for travellers with very limited time.",
  heroImage: "/images/destinations/agra-taj-mahal.webp",
  heroImageAlt: "Taj Mahal at sunrise, Agra",
  heroHeadline: "North India Highlights: Delhi & Agra",
  heroSubheadline:
    "A condensed 4-day introduction to North India for travellers with very limited time — Delhi's Mughal and colonial landmarks, followed by the Taj Mahal at sunrise, without the multi-city circuit a longer trip requires.",
  overview:
    "Not every visit to India allows for a full 6-day Golden Triangle or 9-day North India circuit, and this itinerary exists specifically for travellers who have four days, not more, but still want to see the single most famous monument on Earth rather than skip North India entirely on a short business trip or stopover. Rather than squeezing Jaipur or Varanasi into an already tight schedule, this trip covers only Delhi and Agra, giving genuine time to each rather than rushing between three or four cities. If a future trip allows more time, Jaipur and Varanasi are the two most natural additions, and our Golden Triangle Tour and North India Tours itineraries both build them in.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Delhi",
      description:
        "On arrival at Indira Gandhi International Airport, your private guide and driver meet you at the terminal for a hassle-free transfer to your hotel in Delhi. The rest of the day is left free to rest and adjust after a long international flight, with an optional evening orientation walk through a nearby market to ease gently into the sights, sounds and street food of the Indian capital before sightseeing begins tomorrow.",
    },
    {
      title: "Day 2 — Delhi Sightseeing",
      description:
        "A full-day private tour of both Old and New Delhi, designed to cover the city's Mughal and colonial layers in a single comfortable day given the tight schedule. In Old Delhi: Humayun's Tomb, the elegant red-sandstone precursor to the Taj Mahal and a UNESCO World Heritage Site in its own right, the Jama Masjid mosque, and a cycle-rickshaw ride through the densely packed spice and textile lanes of Chandni Chowk. In New Delhi: the wide colonial-era avenues around India Gate and the government quarter surrounding Rashtrapati Bhavan. Your guide narrates the history throughout, so the pace never feels rushed despite the short overall trip.",
      image: "/images/destinations/delhi-india-gate.webp",
      imageAlt: "India Gate at dusk, Delhi",
    },
    {
      title: "Day 3 — Delhi to Agra",
      description:
        "A scenic 3 to 4-hour private drive south to Agra, home of the Taj Mahal and the reason most travellers build a short North India trip around these two cities specifically. After checking into your hotel, visit Agra Fort, a red sandstone UNESCO World Heritage Site and the Mughal seat of power before the capital later moved to Delhi, walking the same ramparts where Emperor Shah Jahan was reportedly imprisoned by his own son. In the evening, head to the Mehtab Bagh gardens across the river for a first, wonderfully uncrowded view of the Taj Mahal at sunset.",
      image: "/images/destinations/agra-fort.webp",
      imageAlt: "Agra Fort's red sandstone ramparts",
    },
    {
      title: "Day 4 — Taj Mahal Sunrise & Departure",
      description:
        "Enter the Taj Mahal at opening hour for sunrise, the single most-recommended timing among experienced India travel guides, for softer photography light, cooler temperatures, and by far the thinnest crowds of the day. Your guide will point out details easy to miss on your own: the semi-precious stone inlay work known as pietra dura, the calligraphy that appears uniform in size despite scaling with height, and the deliberate symmetry designed to be viewed from the main gateway. Afterwards, a private transfer back to Delhi (or directly onward, if your flight departs from Agra or a nearby city) for your departure flight, four days in North India covering its single most essential monument alongside a genuine day in the capital.",
    },
  ],
  inclusions: [
    "1 night in a hotel of your choice in Delhi",
    "2 nights in a hotel of your choice in Agra",
    "Daily breakfast",
    "Private air-conditioned vehicle and English-speaking guide throughout",
    "All monument entry fees as per itinerary",
  ],
  exclusions: [
    "International flights to and from Delhi",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Built for a Genuinely Short Trip",
      description:
        "For travellers with four days, not more, who still want to see the Taj Mahal without skipping North India entirely.",
    },
    {
      title: "Two Cities, Properly Seen",
      description:
        "Delhi and Agra get real time each, rather than being squeezed alongside Jaipur or Varanasi on an already tight schedule.",
    },
    {
      title: "The Taj Mahal at Sunrise, Not a Rushed Midday Visit",
      description:
        "The itinerary is built specifically to protect the sunrise timing, widely considered the best time to see the monument.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make Delhi's sightseeing and the walk around Agra Fort genuinely comfortable. April to June turns hot across North India, and the July–September monsoon brings humidity, though the Taj Mahal remains a striking visit in any season.",
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
      name: "Rajasthan",
      tagline: "Land of Kings",
      description: "Forts, palaces and desert citadels across six essential cities.",
      href: "/destinations/rajasthan",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is 4 days really enough to see anything meaningful in North India?",
      answer:
        "It's enough to see Delhi and Agra properly, which is what this itinerary is built around — it's not meant to cover all of North India, but to give real time to its two essential cities for travellers who genuinely cannot spare more than four days.",
    },
    {
      question: "Can we add Jaipur or Varanasi to this trip?",
      answer:
        "Yes — this 4-day itinerary is a starting template. Adding Jaipur extends the trip to our 6-day Golden Triangle Tour, and adding Varanasi as well extends it further to our 9-day North India Tours itinerary.",
    },
    {
      question: "Can this work as a stopover trip between international flights?",
      answer:
        "Yes, genuinely well — this itinerary is popular with travellers who have a short layover window in India as part of a longer international journey and want to see the Taj Mahal without committing to a full multi-city circuit.",
    },
    {
      question: "Is sunrise at the Taj Mahal worth the early start?",
      answer:
        "Yes, consistently rated by past travellers as the single best decision on a short Agra visit — the light is softer, temperatures are cooler, and crowds are genuinely far thinner than any other time of day.",
    },
    {
      question: "Can we fly out of Agra directly instead of returning to Delhi?",
      answer:
        "Agra has a small airport with limited connections, so most travellers still return to Delhi for onward or international flights, but we can check current routes and arrange a direct departure from Agra if your schedule and flight options allow it.",
    },
  ],
  relatedPackages: [
    {
      name: "Golden Triangle Tour",
      tagline: "Delhi – Agra – Jaipur · 6 Days",
      description: "The fuller North India circuit, adding Jaipur's forts and bazaars to Delhi and Agra.",
      href: "/tours/golden-triangle-tour-classic",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "North India Tours",
      tagline: "The Complete Circuit · 9 Days",
      description: "The complete North India circuit, adding Jaipur and Varanasi for travellers with more time.",
      href: "/tours/north-india-tours",
      image: "/images/destinations/varanasi-evening-ganges-aarti.webp",
      imageAlt: "The evening Ganga Aarti ceremony, Varanasi",
    },
    {
      name: "Taj Mahal Tours",
      tagline: "Focused Agra Itineraries",
      description: "Several ways to build a trip around the Taj Mahal specifically, from a day trip to a longer stay.",
      href: "/tours/taj-mahal-tours",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
  ],
  draftPendingReview: false,
};
