import type { PackageContent } from "./types";

/**
 * Same-day Agra trip from Delhi by private car. Added 25 Nov 2026 after Dhruv
 * confirmed the business runs it. There is no hotel night, so the per-night
 * rate in src/lib/pricing.ts doesn't apply: the page shows "Price on request"
 * (priceOnRequest) until a real day-trip price is set. Drive time matches the
 * other Golden Triangle pages (Delhi to Agra, about 3 to 4 hours each way).
 */
export const agraDayTripFromDelhi: PackageContent = {
  slug: "agra-day-trip-from-delhi",
  name: "Agra Day Trip from Delhi",
  tagline: "Same-Day Taj Mahal Tour · Day Trip",
  metaTitle: "Agra Day Trip from Delhi by Car | Same-Day Taj Mahal Tour",
  metaDescription:
    "A private same-day Agra trip from Delhi: the Taj Mahal and Agra Fort with your own car, driver and guide, back at your Delhi hotel or airport the same night.",
  heroImage: "/images/destinations/mehtab-bagh.webp",
  heroImageAlt: "The Taj Mahal seen from Mehtab Bagh, Agra",
  heroHeadline: "Agra Day Trip from Delhi",
  heroSubheadline:
    "The Taj Mahal and Agra Fort in one day, by private car on the Yamuna Expressway, with a guide in Agra and drop-off back in Delhi.",
  overview:
    "If you are in Delhi with only one free day, you can still see the Taj Mahal. Your driver collects you early from your Delhi hotel or the airport, and the Yamuna Expressway brings you to Agra in about 3 to 4 hours. A local guide shows you the Taj Mahal and Agra Fort, there is time for lunch, and you are back in Delhi the same evening. For a sunrise visit, we leave Delhi before dawn; if you would rather not, a night in Agra on our 4-day Golden Triangle trip gives you the sunrise without the early start.",
  quickFacts: [
    { label: "Duration", value: "1 day, about 12 to 14 hours" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on request" },
    { label: "Not Available", value: "Fridays (Taj Mahal closed)" },
  ],
  priceCurrency: "INR",
  priceOnRequest: true,
  itinerary: [
    {
      title: "Delhi to Agra and Back in One Day",
      description:
        "Pickup from your Delhi hotel or the airport early in the morning, or before dawn if you want to be at the Taj Mahal for sunrise. Drive to Agra on the Yamuna Expressway, about 3 to 4 hours, where your guide meets you. Visit the Taj Mahal, with time to walk the gardens and, if you choose, go inside the main mausoleum, then Agra Fort, the red-sandstone Mughal fortress on the Yamuna. After lunch in Agra, drive back to Delhi and your hotel or the airport in the evening. The Taj Mahal is closed on Fridays, so this trip runs on the other six days.",
      image: "/images/destinations/agra-fort.webp",
      imageAlt: "Agra Fort's red sandstone ramparts",
      drive: "Delhi to Agra about 3 to 4 hours each way, on the Yamuna Expressway",
      meals: "Lunch stop in Agra (paid locally unless included in your quote)",
    },
  ],
  inclusions: [
    "Pickup and drop-off at your Delhi hotel or the airport",
    "Private air-conditioned car with driver for the whole day",
    "Expressway tolls, parking and driver charges",
    "English-speaking local guide in Agra",
  ],
  exclusions: [
    "Meals",
    "Monument tickets for the Taj Mahal and Agra Fort, and the optional main mausoleum ticket (we can include them in your quote)",
    "Camera fees, tips and personal expenses",
    "Hotel nights (none are needed)",
  ],
  highlights: [
    {
      title: "The Taj Mahal Without a Hotel Night",
      description:
        "The fastest way to see the Taj Mahal and Agra Fort from Delhi, with your own car and no group coach.",
    },
    {
      title: "Picked Up Where You Are",
      description:
        "From your Delhi hotel or straight from the airport on a layover, and dropped back where you need to be.",
    },
    {
      title: "Planned Around the Friday Closure",
      description:
        "We check your date against the Taj Mahal's Friday closure before we confirm anything.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry days make the drive and the walk around the Taj Mahal comfortable. In December and January, fog around Delhi and Agra can slow the early drive, so we allow extra time. April to June is very hot, so we start early and keep the middle of the day for the drive back.",
  },
  relatedDestinations: [
    {
      name: "Agra",
      tagline: "Home of the Taj Mahal",
      description: "The Taj Mahal, Agra Fort and Mehtab Bagh.",
      href: "/destinations/agra",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Delhi",
      tagline: "India's Capital",
      description: "Where the day starts and ends.",
      href: "/destinations/delhi",
      image: "/images/destinations/delhi-india-gate.webp",
      imageAlt: "India Gate at dusk, Delhi",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Can you visit Agra from Delhi in one day?",
      answer:
        "Yes. The Yamuna Expressway makes the drive about 3 to 4 hours each way, which leaves several hours in Agra for the Taj Mahal and Agra Fort. Expect a long day of about 12 to 14 hours.",
    },
    {
      question: "Can I see the Taj Mahal at sunrise on a day trip from Delhi?",
      answer:
        "Yes, if you leave Delhi before dawn. The Taj Mahal opens 30 minutes before sunrise. If a very early start doesn't suit you, our 4-day Golden Triangle tour includes a night in Agra and the sunrise visit.",
    },
    {
      question: "Which days does the Agra day trip run?",
      answer:
        "Every day except Friday, when the Taj Mahal is closed to visitors.",
    },
    {
      question: "How much does the Agra day trip cost?",
      answer:
        "It depends on the car, the number of travellers and whether monument tickets and lunch are included. Send us your date, how many people are travelling and where to pick you up, and we'll reply with an exact price.",
    },
    {
      question: "Can I do the day trip on a layover?",
      answer:
        "Yes, if you have a long layover. We can collect you at the airport and bring you back for your flight, as long as the timing leaves enough margin for traffic and check-in.",
    },
  ],
  relatedPackages: [
    {
      name: "Golden Triangle Tour in 4 Days",
      tagline: "Short Golden Triangle · 3 or 4 Days",
      description: "Delhi, the Taj Mahal at sunrise and Jaipur, for travellers short on time.",
      href: "/tours/golden-triangle-tour-4-days",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Taj Mahal Tours",
      tagline: "3 Days / 2 Nights",
      description: "Three days focused on Agra and the Taj Mahal.",
      href: "/tours/taj-mahal-tours",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Golden Triangle Tour",
      tagline: "The Classic Route · 6 Days",
      description: "Delhi, Agra and Jaipur at a relaxed pace.",
      href: "/tours/golden-triangle-tour-classic",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
  ],
  draftPendingReview: false,
};
