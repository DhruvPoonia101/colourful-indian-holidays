import type { PackageContent } from "./types";

/**
 * Short Golden Triangle (4 days / 3 nights, or 3 days / 2 nights on request).
 * Added 25 Nov 2026 after Dhruv confirmed the business runs 3-4 day Golden
 * Triangle trips. Built from the classic 6-day itinerary, compressed: the
 * order, drive times and inclusions match the other Golden Triangle pages.
 * Price is computed from src/lib/pricing.ts (3 nights x the India rate).
 */
export const goldenTriangleTour4Days: PackageContent = {
  slug: "golden-triangle-tour-4-days",
  name: "Golden Triangle Tour in 4 Days",
  tagline: "Short Golden Triangle · 3 or 4 Days",
  metaTitle: "4 Day Golden Triangle Tour from Delhi | 3-Day Option",
  metaDescription:
    "A private 4-day Golden Triangle tour from Delhi: Delhi, the Taj Mahal at sunrise, Fatehpur Sikri and Jaipur. A 3-day version is available on request.",
  heroImage: "/images/destinations/agra-taj-mahal.webp",
  heroImageAlt: "Taj Mahal at sunrise, Agra",
  heroHeadline: "The Golden Triangle in 4 Days",
  heroSubheadline:
    "Delhi, Agra and Jaipur for travellers short on time: one day in each city, the Taj Mahal at sunrise, with your own car, driver and guide.",
  overview:
    "This is the short version of India's classic Delhi, Agra and Jaipur circuit, for travellers with a stopover, a business trip or only a long weekend. You see the essentials of each city in a day: Old and New Delhi, the Taj Mahal at sunrise with Agra Fort, and Jaipur's Amber Fort and City Palace, with a stop at Fatehpur Sikri on the way. The drives are the same as on the 6-day trip, so the days are fuller. If you have only 3 days, we can run it with 2 nights by going straight to Agra on the first day; if you can add two days, the 6-day classic route is more relaxed.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights (3-day option)" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Indicative price" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Delhi, Delhi Sightseeing",
      description:
        "Your guide and driver meet you at Indira Gandhi International Airport or your Delhi hotel. After a rest, see the highlights of Old and New Delhi: Humayun's Tomb, a UNESCO site and the red-sandstone forerunner of the Taj Mahal, the Jama Masjid, a cycle-rickshaw ride through Chandni Chowk, and a drive past India Gate and the government quarter. If you land late, we move the sightseeing to the next morning before the drive to Agra.",
      image: "/images/destinations/delhi-india-gate.webp",
      imageAlt: "India Gate at dusk, Delhi",
      stay: "Delhi",
    },
    {
      title: "Day 2 — Delhi to Agra",
      description:
        "Drive south to Agra on the Yamuna Expressway, about 3 to 4 hours. After checking in, visit Agra Fort, the red-sandstone Mughal fortress where Shah Jahan spent his last years looking across the river at the Taj Mahal. In the late afternoon, go to the Mehtab Bagh gardens on the opposite bank for a quiet sunset view of the Taj.",
      image: "/images/destinations/agra-fort.webp",
      imageAlt: "Agra Fort's red sandstone ramparts",
      drive: "Delhi to Agra, about 3 to 4 hours",
      stay: "Agra",
    },
    {
      title: "Day 3 — Taj Mahal at Sunrise, Fatehpur Sikri, Jaipur",
      description:
        "Enter the Taj Mahal when it opens, 30 minutes before sunrise, for the softest light and the smallest crowds, with your guide explaining the inlay work and the symmetry of the gardens. After breakfast, drive towards Jaipur and stop at Fatehpur Sikri, Emperor Akbar's abandoned red-sandstone capital. Arrive in Jaipur in the late afternoon. The Taj Mahal is closed on Fridays, so we arrange the days so that your Agra morning is not a Friday.",
      image: "/images/destinations/fatehpur-sikri.webp",
      imageAlt: "Fatehpur Sikri's red sandstone courtyards",
      drive: "Agra to Jaipur via Fatehpur Sikri, about 5 to 6 hours with the stop",
      stay: "Jaipur",
    },
    {
      title: "Day 4 — Jaipur Sightseeing, Return to Delhi",
      description:
        "Start early at Amber Fort, then visit the City Palace, the Jantar Mantar observatory and the Hawa Mahal, the Palace of Winds. In the afternoon, drive back to Delhi for your flight or hotel, or take a flight out of Jaipur airport instead if that suits your onward plans.",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
      drive: "Jaipur to Delhi, about 4 to 6 hours",
    },
  ],
  inclusions: [
    "3 nights in hotels of your choice, twin-sharing (2 nights on the 3-day version)",
    "Daily breakfast",
    "Airport or hotel pickup in Delhi and drop-off in Delhi or at Jaipur airport",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide throughout",
    "Monument entry fees as per itinerary",
    "All applicable hotel and transport taxes",
  ],
  exclusions: [
    "International and domestic flights — booked only on request",
    "Visa fees",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Camera fees at monuments (paid locally)",
  ],
  highlights: [
    {
      title: "All Three Cities in 4 Days",
      description:
        "Delhi, the Taj Mahal and Jaipur with a guide in each city, for travellers who cannot take a full week.",
    },
    {
      title: "Taj Mahal at Sunrise",
      description:
        "We stay the night in Agra so you can be at the gate when it opens, instead of arriving at midday with the crowds.",
    },
    {
      title: "Your Own Car and Driver",
      description:
        "No group coach and no fixed departure times: the trip starts when you land and runs at your pace.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cooler, drier weather makes long sightseeing days comfortable. December and January can bring morning fog around Delhi and Agra, which slows early drives. April to June is very hot, and the July to September monsoon is humid with heavy showers.",
  },
  relatedDestinations: [
    {
      name: "Delhi",
      tagline: "India's Capital",
      description: "Mughal monuments, colonial avenues, and where the trip begins.",
      href: "/destinations/delhi",
      image: "/images/destinations/delhi-india-gate.webp",
      imageAlt: "India Gate at dusk, Delhi",
    },
    {
      name: "Agra",
      tagline: "Home of the Taj Mahal",
      description: "The Taj Mahal, Agra Fort and Mehtab Bagh.",
      href: "/destinations/agra",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Jaipur",
      tagline: "The Pink City",
      description: "Amber Fort, City Palace and the bazaars of Rajasthan's capital.",
      href: "/destinations/jaipur",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Can you do the Golden Triangle in 3 days?",
      answer:
        "Yes, with 2 nights: Delhi to Agra on the first day for Agra Fort and a sunset view, the Taj Mahal at sunrise and on to Jaipur on the second day, and Jaipur's forts before driving back to Delhi on the third. Delhi's own sights are then limited to what fits around your arrival or departure.",
    },
    {
      question: "Is 4 days enough for the Golden Triangle?",
      answer:
        "It is enough to see the main sight in each city, but the days are long, with two 4 to 6 hour drives. If you can add two days, the 6-day classic route gives each city a full day.",
    },
    {
      question: "Does the tour start and end in Delhi?",
      answer:
        "It starts with an airport or hotel pickup in Delhi. It can end back in Delhi or at Jaipur airport, whichever suits your next flight.",
    },
    {
      question: "Is the price per person fixed?",
      answer:
        "No. The price shown is an indicative starting price per person, for two people sharing, for the hotel nights in this itinerary, with flights excluded. The final cost depends on your travel dates, group size and hotel category, so we quote every trip individually. Send us your dates and hotel preference and we'll reply with an exact quote, usually within 24 hours.",
    },
    {
      question: "What if my dates include a Friday?",
      answer:
        "The Taj Mahal is closed on Fridays, so we plan the Agra morning on another day, for example by starting in Jaipur and finishing in Agra.",
    },
  ],
  relatedPackages: [
    {
      name: "Golden Triangle Tour",
      tagline: "The Classic Route · 6 Days",
      description: "The same three cities at a relaxed pace, with a full day in each.",
      href: "/tours/golden-triangle-tour-classic",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Agra Day Trip from Delhi",
      tagline: "Day Trip",
      description: "Only one day? The Taj Mahal and Agra Fort by private car, back in Delhi by night.",
      href: "/tours/agra-day-trip-from-delhi",
      image: "/images/destinations/mehtab-bagh.webp",
      imageAlt: "The Taj Mahal seen from Mehtab Bagh, Agra",
    },
    {
      name: "Golden Triangle Tour with Ranthambore",
      tagline: "With a Tiger Safari · 8 Days",
      description: "Add two days at Ranthambore National Park for a real chance of a wild tiger.",
      href: "/tours/golden-triangle-tour-ranthambore",
      image: "/images/destinations/ranthambore-tiger.webp",
      imageAlt: "A wild tiger at Ranthambore National Park",
    },
  ],
  draftPendingReview: false,
};
