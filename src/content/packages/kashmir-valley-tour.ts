import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * Image note: no genuine Pahalgam photo exists in the asset library yet.
 * Day 4 (Pahalgam) is written without one rather than reusing a Srinagar or
 * Gulmarg image that would misrepresent a different town.
 */
export const kashmirValleyTour: PackageContent = {
  slug: "kashmir-valley-tour",
  name: "Kashmir Valley Tour",
  tagline: "Dal Lake, Gulmarg & Pahalgam · 5 Days",
  metaTitle: "Kashmir Valley Tour Package | Dal Lake, Gulmarg & Pahalgam",
  metaDescription:
    "A private 5-day Kashmir Valley tour — Dal Lake's houseboats, Srinagar's Mughal gardens, Gulmarg's alpine meadows, and Pahalgam's pine-forested valley.",
  heroImage: "/images/destinations/Srinagar-3.webp",
  heroImageAlt: "Houseboats on Dal Lake with snow-capped mountains behind, Srinagar",
  heroHeadline: "Kashmir Valley: Lakes, Gardens & Pine Forests",
  heroSubheadline:
    "A focused 5-day tour of the Kashmir Valley alone — for travellers drawn to its lakes and mountains without extending into Ladakh's higher altitude.",
  overview:
    "Kashmir earned its reputation as 'Paradise on Earth' long before Ladakh became a separate draw of its own, and this tour keeps the focus entirely on the valley itself — Dal Lake's houseboats, Srinagar's Mughal-era gardens, Gulmarg's alpine meadows, and Pahalgam's pine-forested river valley, a stop most shorter Kashmir circuits skip in favour of Gulmarg alone. Unlike a combined Kashmir and Ladakh trip, nothing here demands any real altitude adjustment, making it a genuinely gentler introduction to the Himalayas for travellers who'd rather not factor in acclimatization days at all.",
  quickFacts: [
    { label: "Duration", value: "5 Days / 4 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Apr – Oct" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Srinagar",
      description:
        "Private transfer from Srinagar airport directly to Dal Lake, where a shikara — Kashmir's traditional slim wooden boat, often cushioned and canopied — carries you and your luggage out to your houseboat, since the boats themselves are moored on the water rather than reachable by road. The rest of the day is free to settle in and adjust, with an easy first-evening option of a sunset shikara ride across the lake, watching the snow-capped mountains turn pink as the light fades over the water. A genuinely different first evening than almost anywhere else in India, and a gentle start to the days ahead, with nothing scheduled beyond arriving and settling in properly before the sightseeing begins tomorrow.",
    },
    {
      title: "Day 2 — Srinagar's Mughal Gardens",
      description:
        "A day built around Srinagar's Mughal gardens, terraced formal gardens built in the 17th century specifically for imperial visits to escape the plains' summer heat. Visit Nishat Bagh, the 'Garden of Bliss', with its stepped terraces and fountains framed by the Zabarwan mountains, and Shalimar Bagh, built by Emperor Jahangir for his wife Empress Nur Jahan — a genuine gesture of love that predates the Taj Mahal by several decades. If tulip season aligns with your visit (typically late March to April), Asia's largest tulip garden is also nearby and worth the detour before returning to your houseboat for the evening, with a second sunset shikara ride if you'd like one.",
      image: "/images/destinations/Srinagar.webp",
      imageAlt: "Tulip gardens with the Himalayas behind, Srinagar, Kashmir",
    },
    {
      title: "Day 3 — Gulmarg Day Trip",
      description:
        "A roughly 1.5 to 2 hour drive to Gulmarg, a hill station whose name literally translates to 'meadow of flowers', sitting at over 2,600 metres in the Pir Panjal range with a landscape that feels genuinely closer to the European Alps than anywhere else in India. Take the Gulmarg Gondola, one of the highest cable cars in the world, up toward Apharwat Peak for panoramic Himalayan views, snow-capped even in summer at the higher station, with the option of continuing to the second stage for views deep into the surrounding ranges toward the Line of Control. The alpine meadows below make for a good picnic spot before returning to Srinagar for the evening, a genuinely scenic close to the day.",
      image: "/images/destinations/Srinagar-2.webp",
      imageAlt: "Alpine meadows and pine forest, Gulmarg, Kashmir",
    },
    {
      title: "Day 4 — Pahalgam",
      description:
        "A roughly 2 to 2.5 hour drive to Pahalgam, a quieter, pine-forested valley town along the Lidder River, historically the traditional starting point for the Amarnath Yatra pilgrimage and a noticeably calmer alternative to Gulmarg's busier tourist crowds. Walk along the riverbank through dense pine forest, or take a pony ride up to Baisaran, a meadow surrounded by forest sometimes nicknamed 'mini Switzerland' for its alpine scenery, genuinely worth the short climb for the view alone. The Aru and Betaab valleys are also within reach for travellers who'd like to extend the day further into the surrounding countryside, both used as filming locations for Bollywood productions decades ago, before returning to Srinagar for your final Kashmir evening.",
    },
    {
      title: "Day 5 — Departure",
      description:
        "A final relaxed morning on your houseboat, with time for one last shikara ride or breakfast on the private deck before a shikara transfer back to shore and a private car to Srinagar airport for departure. If your flight timing allows, a last walk through Srinagar's old city lanes makes for a gentle close to the trip rather than heading straight to the airport. Five days in, most travellers describe Kashmir as unlike anywhere else in their India trip — lakes, gardens and pine forests at a gentle pace, without the altitude considerations that come with extending further into Ladakh, a genuinely different Himalayan experience from the one most first-time visitors expect.",
    },
  ],
  inclusions: [
    "4 nights aboard a Dal Lake houseboat, honeymoon/deluxe category where available",
    "Daily breakfast",
    "Private shikara transfers to and from your houseboat",
    "Private air-conditioned vehicle for the Gulmarg and Pahalgam day trips",
    "English-speaking guide for sightseeing days",
    "Monument and garden entry fees as per itinerary",
  ],
  exclusions: [
    "Flights or train tickets to and from Srinagar",
    "Gulmarg Gondola tickets (paid locally)",
    "Pony ride to Baisaran meadow in Pahalgam, if booked (paid locally, arranged on request)",
    "Lunches and dinners other than breakfast included with your houseboat stay",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "A Gentle Himalayan Introduction",
      description:
        "No altitude adjustment needed here, unlike a Ladakh extension — a genuinely easier trip for travellers new to mountain travel.",
    },
    {
      title: "Pahalgam, Not Just Gulmarg",
      description:
        "Most shorter Kashmir circuits stop at Gulmarg alone; this tour adds Pahalgam's quieter pine-forested valley for real variety.",
    },
    {
      title: "A Genuine Houseboat Stay",
      description:
        "Four nights aboard Dal Lake, not a single overnight — enough time to actually settle into the rhythm of the lake.",
    },
  ],
  bestTimeToVisit: {
    heading: "April–October is Best",
    note: "Spring (April–May) brings tulip season and blooming gardens; summer (June–August) offers the most comfortable houseboat and Gulmarg weather; autumn (September–October) brings golden chinar trees across Srinagar. December–March turns genuinely cold, though it's the season for skiing in Gulmarg specifically if that appeals.",
  },
  relatedDestinations: [
    {
      name: "Kashmir",
      tagline: "Paradise on Earth",
      description: "Dal Lake's houseboats, Mughal gardens, and snow-capped peaks throughout.",
      href: "/destinations/srinagar-kashmir",
      image: "/images/destinations/Srinagar-3.webp",
      imageAlt: "Houseboats on Dal Lake with snow-capped mountains behind, Srinagar",
    },
    {
      name: "Ladakh",
      tagline: "The Land of High Passes",
      description: "High-altitude monasteries, turquoise lakes, and cold desert valleys.",
      href: "/destinations/leh-ladakh",
      image: "/images/destinations/Leh-4.webp",
      imageAlt: "Pangong Lake with motorcycles parked on the shore, Ladakh",
    },
    {
      name: "Rajasthan",
      tagline: "Land of Kings",
      description: "Forts, palaces and desert citadels, for a completely different Indian landscape.",
      href: "/destinations/rajasthan",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is this trip easier than a combined Kashmir and Ladakh circuit?",
      answer:
        "Yes, genuinely — nothing on this itinerary goes above roughly 2,700 metres at Gulmarg, so there's no real altitude adjustment needed, unlike an extension into Ladakh where acclimatization becomes a real consideration.",
    },
    {
      question: "Why add Pahalgam instead of just Gulmarg?",
      answer:
        "Pahalgam offers a genuinely different, quieter atmosphere than Gulmarg's busier slopes, plus its own pine-forested river valley and meadow — a meaningful addition rather than a repeat of the same alpine scenery.",
    },
    {
      question: "Can we extend this into Ladakh if we decide we want to?",
      answer:
        "Yes — our combined Kashmir & Ladakh Tour covers exactly this itinerary's Kashmir leg alongside Leh, Nubra Valley and Pangong Lake, for travellers who'd like both regions.",
    },
    {
      question: "Is 5 days enough, or should we add more time?",
      answer:
        "5 days works well as a standalone Kashmir trip; if you have more time, we can extend the houseboat stay or add a second Pahalgam day for the Aru and Betaab valleys.",
    },
    {
      question: "Is Kashmir safe for a general (non-honeymoon) trip like this?",
      answer:
        "Srinagar, Gulmarg and Pahalgam see steady visitor numbers and standard tourist infrastructure; as with any destination, we'd recommend checking current travel advisories closer to your dates and can advise based on the latest situation when planning your trip.",
    },
  ],
  relatedPackages: [
    {
      name: "Kashmir & Ladakh Tour",
      tagline: "The Complete Circuit · 9 Days",
      description: "Extend this itinerary into Ladakh for Leh's monasteries and Pangong Lake.",
      href: "/tours/kashmir-ladakh-tours-classic",
      image: "/images/destinations/Leh-4.webp",
      imageAlt: "Pangong Lake with motorcycles parked on the shore, Ladakh",
    },
    {
      name: "Ladakh Tour",
      tagline: "Leh, Monasteries & Pangong Lake · 6 Days",
      description: "A Ladakh-only version for travellers who'd rather do the two regions as separate trips.",
      href: "/tours/ladakh-tour",
      image: "/images/destinations/Leh-5.webp",
      imageAlt: "Panoramic view over Leh valley with snow-capped peaks, Ladakh",
    },
    {
      name: "Kashmir Honeymoon",
      tagline: "Dal Lake, Houseboats & Snow-Capped Peaks · 5 Days",
      description: "A honeymoon-specific version of this trip, built around couples rather than general sightseeing.",
      href: "/experiences/kashmir-honeymoon",
      image: "/images/destinations/Srinagar-3.webp",
      imageAlt: "Houseboats on Dal Lake with snow-capped mountains behind, Srinagar",
    },
  ],
  draftPendingReview: false,
};
