import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const tajMahalTours: PackageContent = {
  slug: "taj-mahal-tours",
  name: "Taj Mahal Tours",
  tagline: "Agra, Properly Explored · 3 Days",
  metaTitle: "Taj Mahal Tour Package | Agra Fort & Fatehpur Sikri",
  metaDescription:
    "A private 3-day Taj Mahal tour — sunrise at the Taj, Agra Fort, and the abandoned Mughal city of Fatehpur Sikri, at a relaxed pace with a private guide throughout.",
  heroImage: "/images/destinations/agra-taj-mahal.webp",
  heroImageAlt: "Taj Mahal at sunrise, Agra",
  heroHeadline: "Agra: The Taj Mahal, Properly Explored",
  heroSubheadline:
    "A focused 3-day tour of Agra alone — for travellers who want more than a same-day dash from Delhi and a few rushed hours at the monument.",
  overview:
    "Most visitors see the Taj Mahal as a single-day trip squeezed in from Delhi or Jaipur — arrive by mid-morning, a couple of hours at the monument, and back on the road before evening. That approach genuinely undersells Agra, a city that was a Mughal capital for generations and holds far more than one building, however extraordinary that building is. This tour gives three unhurried days: sunrise at the Taj Mahal itself, when the light and crowds are both at their best, real time at Agra Fort just across the river, and a full day at Fatehpur Sikri, the abandoned Mughal capital most day-trippers never have time to reach at all.",
  quickFacts: [
    { label: "Duration", value: "3 Days / 2 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Agra",
      description:
        "Private transfer from Agra airport, railway station, or a pickup point in Delhi or Jaipur if you're arriving by road, to your hotel, with the rest of the day free to rest after travelling. If you arrive with energy to spare, your guide can suggest an easy first outing — a walk along the Yamuna riverfront near Mehtab Bagh for a distant first glimpse of the Taj Mahal across the water, best in the late afternoon light. Agra's traffic can feel intense on a first evening, and this tour keeps the arrival day deliberately unstructured, since tomorrow's early sunrise start needs you rested rather than still adjusting to the journey. Ask your guide for a dinner recommendation near your hotel if you'd like to make an early night of it before tomorrow's pre-dawn alarm.",
    },
    {
      title: "Day 2 — Taj Mahal Sunrise & Agra Fort",
      description:
        "Enter the Taj Mahal at opening hour for sunrise — the single most-recommended timing among experienced India travel guides, for softer photography light, cooler temperatures, and by far the thinnest crowds of the day. Your guide will point out details easy to miss on your own: the semi-precious stone inlay work known as pietra dura, the calligraphy that appears uniform in size despite scaling with height as it rises up the archways, and the deliberate symmetry designed to be viewed from the main gateway. In the afternoon, visit Agra Fort, a red sandstone UNESCO World Heritage Site and the Mughal seat of power before the capital moved to Delhi, walking the same ramparts where Emperor Shah Jahan was reportedly imprisoned by his own son, with a distant view of the Taj Mahal he built visible from the fort walls.",
      image: "/images/destinations/agra-fort.webp",
      imageAlt: "Agra Fort's red sandstone ramparts",
    },
    {
      title: "Day 3 — Fatehpur Sikri & Departure",
      description:
        "A full morning at Fatehpur Sikri, roughly 40 kilometres from Agra, the astonishingly well-preserved abandoned Mughal capital built entirely from red sandstone by Emperor Akbar and deserted within a single generation due to water shortages. Almost every day-trip itinerary from Delhi skips this entirely, which is a genuine shame — walking through its empty courtyards and palace complexes gives a real sense of Mughal urban planning at a scale the Taj Mahal alone doesn't convey. On the way back, if time allows, a stop at Itmad-ud-Daulah's Tomb, sometimes called the 'Baby Taj' for the way its white marble inlay work anticipated design ideas the Taj Mahal would later perfect. Your private transfer back to Agra, Delhi, or Jaipur for departure follows, with three days behind you giving a genuinely fuller picture of Agra than the standard single-day dash allows.",
      image: "/images/destinations/fatehpur-sikri.webp",
      imageAlt: "Fatehpur Sikri, the abandoned Mughal capital near Agra",
    },
  ],
  inclusions: [
    "2 nights in a hotel of your choice, twin-sharing",
    "Daily breakfast",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide throughout",
    "Monument entry fees as per itinerary",
    "All applicable hotel and transport taxes",
  ],
  exclusions: [
    "Flights or train tickets to and from Agra",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Camera fees at monuments (paid locally)",
    "Itmad-ud-Daulah's Tomb entry, if visited (paid locally)",
  ],
  highlights: [
    {
      title: "Sunrise, Not a Midday Rush",
      description:
        "Entering at opening hour for softer light, cooler temperatures and by far the thinnest crowds of the day, rather than a packed midday visit.",
    },
    {
      title: "Fatehpur Sikri, Properly Seen",
      description:
        "A full morning at the abandoned Mughal capital most same-day trips from Delhi never have time to reach at all.",
    },
    {
      title: "Agra Beyond the Taj",
      description:
        "Agra Fort and the 'Baby Taj' give real context to a city most visitors only ever see through one building.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, clear mornings make sunrise at the Taj Mahal and the walk through Fatehpur Sikri genuinely comfortable. April to June turns hot, and the July–September monsoon brings humidity and occasional haze that can affect visibility.",
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
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is 3 days too long for just the Taj Mahal and Agra?",
      answer:
        "Not for travellers who want more than a rushed same-day visit — once you add Agra Fort, Fatehpur Sikri and the 'Baby Taj', three days feels genuinely well used rather than padded.",
    },
    {
      question: "Is sunrise really worth the early start?",
      answer:
        "Yes — it's the single most-recommended timing among experienced India travel guides, for softer light, cooler temperatures and by far the thinnest crowds of the day compared to a midday visit.",
    },
    {
      question: "Can this be done as a day trip from Delhi or Jaipur instead?",
      answer:
        "It can, and we offer that option too, but a same-day trip only allows a few rushed hours at the Taj Mahal and skips Fatehpur Sikri entirely — this tour is specifically for travellers who want more than that.",
    },
    {
      question: "Is Fatehpur Sikri worth the extra time if we've already seen enough forts?",
      answer:
        "Yes — it's a genuinely different kind of site, an entire abandoned city rather than a single fort or palace, and gives a real sense of Mughal urban planning that no other single monument in the region matches.",
    },
    {
      question: "Can we extend this into a Golden Triangle or longer Rajasthan trip?",
      answer:
        "Yes — this pairs naturally with our Golden Triangle Tour or a wider Rajasthan circuit. Let us know your available days and we'll adjust the itinerary accordingly.",
    },
  ],
  relatedPackages: [
    {
      name: "Golden Triangle Tour",
      tagline: "Delhi – Agra – Jaipur",
      description: "Combine the Taj Mahal with Delhi and Jaipur for the classic first-time India circuit.",
      href: "/tours/golden-triangle-tour",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "North India Tours",
      tagline: "Delhi & Beyond",
      description: "The Taj Mahal as part of a wider North India circuit through Delhi and beyond.",
      href: "/tours/north-india-tours",
      image: "/images/destinations/delhi-india-gate.webp",
      imageAlt: "India Gate at dusk, Delhi",
    },
  ],
  draftPendingReview: false,
};
