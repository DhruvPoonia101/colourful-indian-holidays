import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const tajMahalHoneymoon: ExperienceContent = {
  slug: "taj-mahal-honeymoon",
  name: "Taj Mahal Honeymoon",
  tagline: "A Monument Built for Love · 3 Days",
  metaTitle: "Taj Mahal Honeymoon Package | Sunrise Visit & Private Candlelit Dinner",
  metaDescription:
    "A private 3-day Taj Mahal honeymoon — sunrise at the world's most famous monument to love, a heritage haveli stay, and a candlelit dinner with a Taj view.",
  heroImage: "/images/destinations/agra-taj-mahal.webp",
  heroImageAlt: "Taj Mahal at sunrise, Agra",
  heroHeadline: "The Taj Mahal: A Monument Built for Love",
  heroSubheadline:
    "The world's most famous monument to love, seen together at sunrise — paired with a private dinner within sight of the building itself.",
  overview:
    "Every couple who visits India eventually hears the story: Emperor Shah Jahan built the Taj Mahal as a mausoleum for his wife Mumtaz Mahal, and it remains, nearly 400 years later, the most recognisable monument to love anywhere in the world. That makes it an obvious honeymoon stop, but most visitors still see it the same rushed way everyone else does — a few hours squeezed between other cities. This trip treats it differently: sunrise entry when the light and the story both land harder, a heritage haveli stay rather than a standard hotel, and a private dinner arranged specifically within sight of the monument itself, so the evening doesn't end the moment you leave the gates.",
  quickFacts: [
    { label: "Duration", value: "3 Days / 2 Nights" },
    { label: "For", value: "Couples" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Agra",
      description:
        "Private transfer from Agra airport, railway station, or a pickup point in Delhi or Jaipur if arriving by road, to your heritage haveli or hotel — let us know it's a honeymoon when we arrange your stay, since several Agra properties offer a room with a partial or full Taj Mahal view for exactly this occasion. The rest of the day is free to rest after travelling, with an easy first-evening option of a walk along the Yamuna riverfront near Mehtab Bagh for a distant first glimpse of the Taj Mahal across the water, particularly striking in the late afternoon light. This tour deliberately keeps the arrival evening unstructured, since tomorrow's pre-dawn start needs you rested rather than adjusting from a long journey, and an early night here makes a genuine difference.",
    },
    {
      title: "Day 2 — Sunrise at the Taj Mahal",
      description:
        "Enter the Taj Mahal at opening hour for sunrise — genuinely the best time for a couple to experience it, with softer light, far fewer crowds, and none of the midday heat or noise that makes a later visit feel more like a tourist queue than a moment together. Your guide will point out details worth understanding rather than just photographing: the semi-precious stone inlay work known as pietra dura, and the story of Shah Jahan and Mumtaz Mahal that gives the building its meaning. Several photographers in Agra specialise in couple portraits at the Taj specifically, and can be arranged in advance if you'd like professional photos beyond what you'll take yourselves. In the evening, a private candlelit dinner is arranged at a rooftop restaurant with a direct view of the Taj Mahal lit against the night sky, a genuinely different way to close out the day than a standard hotel dinner.",
      image: "/images/destinations/agra-fort.webp",
      imageAlt: "Agra Fort's red sandstone ramparts",
    },
    {
      title: "Day 3 — Fatehpur Sikri & Departure",
      description:
        "A morning excursion to Fatehpur Sikri, the abandoned Mughal capital roughly 40 kilometres from Agra, offered as an optional add-on for couples who'd like more time together beyond the Taj Mahal itself rather than an immediate departure. Built entirely from red sandstone by Emperor Akbar and deserted within a single generation due to water shortages, its empty courtyards make for an atmospheric, quieter contrast to the crowds of the day before. Alternatively, spend the morning at leisure at your hotel before departure if you'd rather not add another stop. Your private transfer back to Agra, Delhi, or Jaipur for onward travel follows, with the trip's central moment — sunrise together at the Taj Mahal — already behind you as the one you'll likely remember longest.",
      image: "/images/destinations/fatehpur-sikri.webp",
      imageAlt: "Fatehpur Sikri, the abandoned Mughal capital near Agra",
    },
  ],
  inclusions: [
    "2 nights in a heritage haveli or hotel of your choice, honeymoon room category where available",
    "Daily breakfast",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide for sightseeing days",
    "Monument entry fees as per itinerary",
  ],
  exclusions: [
    "Flights or train tickets to and from Agra",
    "Private candlelit dinner arrangement fee (paid locally, arranged on request)",
    "Professional couple photography session, if booked (paid locally, arranged on request)",
    "Lunches and dinners other than the arranged candlelit dinner",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Sunrise, Together",
      description:
        "Entering at opening hour means softer light, far fewer crowds, and a genuinely more intimate first sight of the monument than a midday visit allows.",
    },
    {
      title: "A Dinner With a View That Matters",
      description:
        "A private table arranged specifically within sight of the Taj Mahal lit at night, not just a hotel restaurant that happens to be nearby.",
    },
    {
      title: "A Room With a View, If You'd Like One",
      description:
        "Several Agra properties can arrange a partial or full Taj Mahal view room specifically for honeymooning couples, on request.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, clear mornings make the sunrise visit genuinely comfortable and give the best photography light. April to June turns hot, and the July–September monsoon can bring haze that affects visibility of the monument from a distance.",
  },
  relatedDestinations: [
    {
      name: "Agra",
      tagline: "Home of the Taj Mahal",
      description: "The Taj Mahal, Agra Fort, and the heart of the Golden Triangle.",
      href: "/destinations/agra",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Delhi",
      tagline: "India's Capital",
      description: "Mughal forts, colonial avenues, and the gateway to North India.",
      href: "/destinations/delhi",
      image: "/images/destinations/delhi-india-gate.webp",
      imageAlt: "India Gate at dusk, Delhi",
    },
    {
      name: "Jaipur",
      tagline: "The Pink City",
      description: "Amber Fort, City Palace, Hawa Mahal and the bazaars of the old walled city.",
      href: "/destinations/jaipur",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Can we really get a room with a Taj Mahal view?",
      answer:
        "Several Agra properties offer partial or full-view rooms, though availability varies by hotel and season — we always request this specifically when booking a honeymoon on your behalf, and can confirm exact options once we know your dates.",
    },
    {
      question: "Is the sunrise visit worth the early alarm?",
      answer:
        "Yes, genuinely — softer light, far fewer crowds, and none of the midday heat or noise, all of which make it a noticeably more intimate experience for a couple than a later visit.",
    },
    {
      question: "How do we book the candlelit dinner with a Taj view?",
      answer:
        "We'd recommend confirming this when booking your trip rather than on arrival — the best rooftop tables with a direct view have limited availability, especially in peak season (October to March).",
    },
    {
      question: "Is 3 days enough, or should we extend the trip?",
      answer:
        "3 days works well as a standalone Taj Mahal honeymoon; if you have more time, this pairs naturally with an Udaipur Honeymoon or a longer Rajasthan Palace Honeymoon.",
    },
    {
      question: "Can we book a professional couple's photography session at the Taj?",
      answer:
        "Yes — several photographers in Agra specialise in couple portraits there specifically, and we can arrange this in advance if you'd like professional photos beyond what you'll take yourselves.",
    },
  ],
  relatedExperiences: [
    {
      name: "Udaipur Honeymoon",
      tagline: "The City of Lakes, Built for Two · 4 Days",
      description: "A private sunset boat ride and a heritage palace suite in Rajasthan's most romantic city.",
      href: "/experiences/udaipur-honeymoon",
      image: "/images/destinations/udaipur-lake-palace.webp",
      imageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
    },
    {
      name: "Rajasthan Palace Honeymoon",
      tagline: "Two Palace Cities · 7 Days",
      description: "Extend into a longer honeymoon through Jaipur and Udaipur's heritage palace hotels.",
      href: "/experiences/rajasthan-palace-honeymoon",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Kerala Backwaters Honeymoon",
      tagline: "Houseboats & Palm-Lined Canals",
      description: "A private houseboat cruise through Alleppey's backwaters, for a tropical change of pace.",
      href: "/experiences/kerala-backwaters-honeymoon",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
  ],
  draftPendingReview: false,
};
