import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const jodhpurTour: PackageContent = {
  slug: "jodhpur-tour",
  name: "Jodhpur Tour",
  tagline: "The Blue City in Depth · 4 Days",
  metaTitle: "Jodhpur Tour Package | Mehrangarh Fort, Jaswant Thada & the Old City",
  metaDescription:
    "A private 4-day Jodhpur city tour — Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace and the blue-washed old city, at a relaxed pace with a private guide throughout.",
  heroImage: "/images/destinations/mehrangarh-fort-jodhpur.webp",
  heroImageAlt: "Mehrangarh Fort towering above Jodhpur's blue-washed old town",
  heroHeadline: "Jodhpur: The Blue City, Properly Explored",
  heroSubheadline:
    "A focused 4-day tour of Jodhpur alone — for travellers who'd rather see one fort city well than treat it as a single overnight stop on a longer circuit.",
  overview:
    "Jodhpur is usually given one night on a Rajasthan circuit, enough for Mehrangarh Fort and little else, which barely scratches the surface of a city with genuinely more to offer than its most famous monument. This tour is built around slowing down: real time inside Mehrangarh rather than a rushed two-hour visit, a proper walk through the blue-washed old city rather than a glimpse from a moving car, and a few additions — Umaid Bhawan Palace, the step-well at Toorji Ka Jhalra — that a standard one-night stop almost always skips entirely. Four days is enough to understand why Jodhpur is often called the most photogenic city in Rajasthan, not just its most efficiently ticked-off one.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Jodhpur",
      description:
        "Private transfer from Jodhpur airport or railway station to your hotel, with the rest of the day free to rest after travelling. If you arrive with energy to spare, your guide can suggest an easy first outing — a walk through the blue-washed lanes of the old town below Mehrangarh Fort, particularly striking after dark when the fort above is lit up against the night sky. The indigo colour that gives the city its nickname originally marked Brahmin households and helped repel insects in the desert heat, and it's still genuinely disorienting on a first walk, a maze of narrow lanes that seem to double back on themselves. This tour deliberately keeps the arrival day light, since the sightseeing ahead is genuinely full and starting rested makes a real difference. Ask your guide about a rooftop restaurant with a fort view for dinner if you'd like to make the most of the evening without navigating the lanes yourself.",
    },
    {
      title: "Day 2 — Mehrangarh Fort & Jaswant Thada",
      description:
        "A full day centred on Mehrangarh Fort, one of the largest and best-preserved forts in India, its sandstone ramparts rising nearly 400 feet directly above the Blue City. Founded in 1459 and continuously maintained and expanded ever since, the fort's museum galleries hold an exceptional collection of palanquins, royal costumes and Rajput weaponry, considered one of the finest such collections in the country. In the afternoon, visit Jaswant Thada, a white marble memorial from 1899 whose thin marble sheets glow faintly when sunlight passes through them, a genuinely peaceful contrast to the fort's imposing scale, with formal gardens and a small lake adding to the calm — a natural place to slow down after a full morning of fort exploration and take in the view back toward Mehrangarh from ground level.",
      image: "/images/destinations/mehrangarh-fort-jodhpur.webp",
      imageAlt: "Mehrangarh Fort towering above Jodhpur's blue-washed old town",
    },
    {
      title: "Day 3 — Umaid Bhawan Palace & the Old City",
      description:
        "Visit Umaid Bhawan Palace, one of the largest private residences in the world, built in the 1920s and 30s partly as a famine-relief employment project — thousands of local labourers were paid to construct it during a prolonged drought, a genuinely unusual origin story for a royal palace. Part of the building still functions as a luxury hotel and part as a museum, with an impressive Art Deco interior that feels distinct from anywhere else in Rajasthan, its clean geometric lines a striking contrast to Mehrangarh's older fortress architecture from the day before. In the afternoon, a slower walk through the old city's silver and textile workshops, several of which have operated from the same family premises for generations, followed by a stop at Toorji Ka Jhalra, a beautifully restored 18th-century step-well tucked into the old town that most standard itineraries never include.",
      image: "/images/destinations/jodhpur-umaid-bhawan.webp",
      imageAlt: "Umaid Bhawan Palace, Jodhpur",
    },
    {
      title: "Day 4 — Blue City Walk & Departure",
      description:
        "A final morning dedicated to the blue-washed old city itself, walked at a genuinely unhurried pace this time rather than as a backdrop to the fort above. Your guide can point out details easy to miss when rushing between monuments — the varying shades of blue from house to house, the small shrines tucked between shopfronts, and the clock tower market at Sardar Market for a last look at spices, textiles and handicrafts before you leave. Return to your hotel for check-out and a private transfer to the airport or railway station for departure. Four days in, most travellers leave with a genuinely different impression of Jodhpur than the one-night version most itineraries allow — less a stop on the way to somewhere else, more a city worth its own dedicated visit.",
      image: "/images/destinations/jodhpur-blue-city-streets.webp",
      imageAlt: "The indigo-washed old town streets of Jodhpur",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice, twin-sharing",
    "Daily breakfast",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide throughout",
    "Monument entry fees as per itinerary",
    "All applicable hotel and transport taxes",
  ],
  exclusions: [
    "Flights or train tickets to and from Jodhpur",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Camera fees at monuments (paid locally)",
    "Umaid Bhawan Palace museum entry, if not already covered on your visit date (paid locally)",
  ],
  highlights: [
    {
      title: "Mehrangarh Without Rushing",
      description:
        "A proper full day rather than the two-hour visit most one-night stops allow, including the fort's less-visited upper courtyards.",
    },
    {
      title: "Umaid Bhawan's Unusual History",
      description:
        "One of the world's largest private residences, built as a famine-relief project — a genuinely different story from most Rajasthan palaces.",
    },
    {
      title: "The Blue City, Actually Walked",
      description:
        "A dedicated final morning through the old town's lanes, not just a photo backdrop glimpsed from the fort above.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make walking the old city and Mehrangarh's exposed ramparts genuinely comfortable. April to June turns hot, and the July–September monsoon brings humidity and occasional heavy rain.",
  },
  relatedDestinations: [
    {
      name: "Jodhpur",
      tagline: "The Blue City",
      description: "Mehrangarh Fort towering over a maze of indigo-washed old-town streets.",
      href: "/destinations/jodhpur",
      image: "/images/destinations/mehrangarh-fort-jodhpur.webp",
      imageAlt: "Mehrangarh Fort towering above Jodhpur's blue-washed old town",
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
      question: "Is 4 days too long for just Jodhpur?",
      answer:
        "Not for most travellers — Mehrangarh Fort alone can easily fill a day properly explored, and once you add Umaid Bhawan Palace, the old city's step-wells and a dedicated walk through the blue lanes, four days feels genuinely well used.",
    },
    {
      question: "Is Umaid Bhawan Palace worth visiting if part of it is a hotel?",
      answer:
        "Yes — the museum section is open to all visitors regardless of whether you're staying there, and its Art Deco interior and unusual famine-relief history make it worth seeing on its own terms.",
    },
    {
      question: "Is the old city safe and easy to walk through?",
      answer:
        "Yes, though the lanes are genuinely maze-like and disorienting on a first visit — having your guide along, especially in the evening, makes navigating it far more relaxed than trying it alone.",
    },
    {
      question: "Can we extend this into a longer Rajasthan trip?",
      answer:
        "Yes — this pairs naturally with the classic Rajasthan Tours circuit or the Rajasthan Culture & Heritage Trail. Let us know your available days and we'll adjust the itinerary accordingly.",
    },
    {
      question: "What's the best time of day to photograph the Blue City?",
      answer:
        "Early morning and late afternoon give the best light and the fewest crowds; the view from Mehrangarh's ramparts looking down over the blue rooftops is particularly striking in the hour after sunrise.",
    },
  ],
  relatedPackages: [
    {
      name: "Rajasthan Tours",
      tagline: "The Classic Circuit · 8 Days",
      description: "Jodhpur as part of a wider circuit through Jaipur, Udaipur and Pushkar.",
      href: "/tours/rajasthan-tours-classic",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Rajasthan Culture & Heritage Trail",
      tagline: "8 Days",
      description: "Combine Jodhpur with Jaisalmer and Udaipur for a deeper heritage-focused route.",
      href: "/tours/rajasthan-culture-heritage-trail",
      image: "/images/destinations/jaisalmer-patwon-ki-haveli.webp",
      imageAlt: "Ornately carved facade of Patwon Ki Haveli, Jaisalmer",
    },
  ],
  draftPendingReview: false,
};
