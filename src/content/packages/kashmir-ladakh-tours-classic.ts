import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const kashmirLadakhToursClassic: PackageContent = {
  slug: "kashmir-ladakh-tours-classic",
  name: "Kashmir & Ladakh Tour",
  tagline: "The Complete Circuit · 9 Days",
  metaTitle: "Kashmir & Ladakh Tour Package | Dal Lake, Gulmarg, Pangong Lake & Nubra Valley",
  metaDescription:
    "A private 9-day Kashmir and Ladakh tour — Srinagar's houseboats, Gulmarg's meadows, Leh's monasteries, Pangong Lake, and the Nubra Valley's high mountain passes.",
  heroImage: "/images/destinations/Leh-4.webp",
  heroImageAlt: "Pangong Lake with motorcycles parked on the shore, Ladakh",
  heroHeadline: "Kashmir & Ladakh: Two Himalayan Worlds, One Trip",
  heroSubheadline:
    "Kashmir's lakes and Mughal gardens, followed by Ladakh's high-altitude monasteries and turquoise lakes — two genuinely different regions in a single itinerary.",
  overview:
    "Kashmir and Ladakh sit side by side on the map but feel like entirely different countries once you're there — Kashmir a green, water-filled valley the Mughal emperors called 'Paradise on Earth', and Ladakh a high-altitude cold desert on the Tibetan plateau. This nine-day circuit takes in both properly rather than rushing between them: a Dal Lake houseboat stay and Gulmarg's alpine meadows in Kashmir, followed by a flight over the Himalayas into Leh for monasteries, Pangong Lake, and the Nubra Valley's high mountain passes. Given Ladakh's altitude, the itinerary is built with a genuine acclimatization day before any serious sightseeing there begins, rather than pushing straight into excursions on arrival.",
  quickFacts: [
    { label: "Duration", value: "9 Days / 8 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "May – Sep" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Srinagar",
      description:
        "Private transfer from Srinagar airport directly to Dal Lake, where a shikara — Kashmir's traditional slim wooden boat, often cushioned and canopied — carries you and your luggage out to your houseboat, since the boats themselves are moored on the water rather than reachable by road. The rest of the day is free to settle in and adjust, with an easy first-evening option of a sunset shikara ride across the lake, watching the snow-capped mountains turn pink as the light fades over the water. This tour deliberately keeps the arrival day light, since the days ahead — first in Kashmir, then at altitude in Ladakh — are genuinely full, and easing in gently matters more here than on a lower-altitude trip elsewhere in India.",
    },
    {
      title: "Day 2 — Srinagar's Mughal Gardens",
      description:
        "A day built around Srinagar's Mughal gardens, terraced formal gardens built in the 17th century specifically for imperial visits to escape the plains' summer heat. Visit Nishat Bagh, the 'Garden of Bliss', with its stepped terraces and fountains framed by the Zabarwan mountains, and Shalimar Bagh, built by Emperor Jahangir for his wife Empress Nur Jahan — a genuine gesture of love that predates the Taj Mahal by several decades. If tulip season aligns with your visit (typically late March to April), Asia's largest tulip garden is also nearby and worth the detour. The evening returns to your houseboat for a second night on Dal Lake, with time for one more sunset shikara ride if you'd like it.",
      image: "/images/destinations/Srinagar.webp",
      imageAlt: "Tulip gardens with the Himalayas behind, Srinagar, Kashmir",
    },
    {
      title: "Day 3 — Gulmarg Day Trip",
      description:
        "A roughly 1.5 to 2 hour drive to Gulmarg, a hill station whose name literally translates to 'meadow of flowers', sitting at over 2,600 metres in the Pir Panjal range with a landscape that feels genuinely closer to the European Alps than anywhere else in India. Take the Gulmarg Gondola, one of the highest cable cars in the world, up toward Apharwat Peak for panoramic Himalayan views, snow-capped even in summer at the higher station, with the option of continuing to the second stage for views deep into the surrounding ranges. The alpine meadows below make for a good picnic spot before returning to Srinagar for your final Kashmir evening, closing out this leg of the trip on a genuinely scenic note.",
      image: "/images/destinations/Srinagar-2.webp",
      imageAlt: "Alpine meadows and pine forest, Gulmarg, Kashmir",
    },
    {
      title: "Day 4 — Fly to Leh",
      description:
        "A short, dramatically scenic flight over the Himalayas from Srinagar to Leh, the mountain views from the window alone worth the trip — weather permitting, Nanga Parbat and the wider Karakoram range are often visible below, an entirely different perspective on the mountains than anything seen from the ground. On arrival, a private transfer to your hotel and a deliberately unstructured rest of the day, since Leh sits at roughly 3,500 metres and altitude sickness is a real consideration for most visitors on their first day. Keeping activity minimal, staying hydrated, and avoiding alcohol tonight genuinely matters more here than on any other day of the trip, and skipping this advice is the single most common reason travellers struggle later in the itinerary.",
    },
    {
      title: "Day 5 — Leh Monasteries & Old Town",
      description:
        "A full but unhurried day now that you've had a night to adjust to the altitude, visiting Thiksey Monastery, a 12-storey complex often compared to Lhasa's Potala Palace for its stacked white-and-red architecture on a hillside, home to a community of practising Buddhist monks, and Shey Palace, the former summer residence of Ladakh's kings, its walls once housing a 12-metre gilded copper Buddha statue. In the afternoon, a walk through Leh's old town and Main Bazaar, browsing pashmina and Tibetan handicraft stalls, followed by Shanti Stupa at sunset for a panoramic view over the entire Leh valley, with the town's lights and the surrounding mountains laid out below as the sky changes colour.",
      image: "/images/destinations/Leh-5.webp",
      imageAlt: "Panoramic view over Leh valley with snow-capped peaks, Ladakh",
    },
    {
      title: "Day 6 — Sangam Point & Magnetic Hill",
      description:
        "A half-day excursion to the Sangam, the striking confluence where the Indus and Zanskar rivers meet in two visibly different shades of blue-green water, a genuinely photogenic sight best seen from the small viewpoint above the junction and one most first-time visitors don't expect to find so striking. Continue to Magnetic Hill, a stretch of road with an unusual optical illusion that appears to pull stationary vehicles uphill, and Pathar Sahib Gurudwara, a Sikh shrine built around a rock considered sacred in local legend involving Guru Nanak. This is a genuinely lighter day than the full-day excursions either side of it, giving your body more time to continue adjusting to the altitude before Nubra Valley tomorrow, where the elevation gain over Khardung La is considerable.",
      image: "/images/destinations/Leh-3.webp",
      imageAlt: "The confluence of the Indus and Zanskar rivers, Ladakh",
    },
    {
      title: "Day 7 — Nubra Valley via Khardung La",
      description:
        "An early start to cross Khardung La, one of the highest motorable mountain passes in the world at over 5,300 metres, the road itself lined with prayer flags and the air noticeably thinner at the summit, before descending into the Nubra Valley — a genuinely surreal landscape of cold desert sand dunes set against snow-capped peaks, watered by the Shyok and Nubra rivers where they meet below the pass. Visit Diskit Monastery, home to a towering 32-metre Maitreya Buddha statue overlooking the valley, and if you'd like, a short Bactrian camel ride on the dunes themselves, a double-humped species found almost nowhere else in India outside this specific valley. Overnight in Nubra before returning to Leh the following day, the valley floor a genuinely welcome change in scenery after the high pass.",
      image: "/images/destinations/Leh.webp",
      imageAlt: "A river valley in the Ladakh mountains",
    },
    {
      title: "Day 8 — Pangong Lake",
      description:
        "A roughly 5-hour drive over Chang La, another high mountain pass at over 5,300 metres, to Pangong Lake, a vast, improbably turquoise lake stretching across the India-China border at over 4,300 metres, with bare mountains reflected in water so clear it seems to change colour throughout the day depending on the light and cloud cover overhead. This is consistently the single most photographed stop in Ladakh, and genuinely lives up to the reputation in person rather than only through filtered photographs, the scale of the lake only really apparent once you're standing on its shore. An Inner Line Permit is required to visit, which we arrange in advance as part of this itinerary. Return to Leh in the evening, tired but with the trip's signature image behind you.",
      image: "/images/destinations/Leh-4.webp",
      imageAlt: "Pangong Lake with motorcycles parked on the shore, Ladakh",
    },
    {
      title: "Day 9 — Departure",
      description:
        "A final relaxed morning in Leh, with an optional last walk through the Main Bazaar for pashmina shawls, dried apricots or other local produce, before your private transfer to Leh airport for departure. If your flight timing allows, one last cup of butter tea at a local café makes for a fitting close to the Ladakh leg specifically. Nine days in, most travellers describe this trip as covering two genuinely different sides of the Himalayas rather than one long, similar stretch of mountains — Kashmir's green valleys and Ladakh's stark high-altitude desert, each with its own character worth the time given to it, and a combination that few other itineraries anywhere in the world can genuinely offer.",
    },
  ],
  inclusions: [
    "3 nights aboard a Dal Lake houseboat, honeymoon/deluxe category where available",
    "5 nights in hotels of your choice in Leh and Nubra Valley",
    "Daily breakfast",
    "Domestic flight, Srinagar to Leh",
    "Private air-conditioned vehicle for all road transfers and sightseeing",
    "Inner Line Permits for Pangong Lake and Nubra Valley",
    "English-speaking guide throughout",
  ],
  exclusions: [
    "International and domestic flights to and from Srinagar/from Leh — booked only on request",
    "Gulmarg Gondola tickets (paid locally)",
    "Bactrian camel ride in Nubra Valley, if booked (paid locally, arranged on request)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Two Genuinely Different Himalayan Regions",
      description:
        "Kashmir's green valleys and Ladakh's high-altitude cold desert offer two completely different landscapes within one trip.",
    },
    {
      title: "A Real Acclimatization Day",
      description:
        "Leh's altitude gets genuine respect in this itinerary, with a full rest day built in before any serious sightseeing begins there.",
    },
    {
      title: "Permits Handled in Advance",
      description:
        "Pangong Lake and Nubra Valley both require Inner Line Permits, which we arrange as part of this package rather than leaving you to sort out locally.",
    },
  ],
  bestTimeToVisit: {
    heading: "May–September is Best",
    note: "Ladakh's mountain passes are typically snowbound outside this window, making Khardung La and Chang La impassable by road much of the year. Kashmir is pleasant for longer, roughly April through October, but this combined itinerary is built around Ladakh's shorter accessible season.",
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
      question: "Is altitude sickness a genuine concern on this trip?",
      answer:
        "Yes, genuinely — Leh sits at roughly 3,500 metres, and Pangong Lake and Khardung La go considerably higher. We build in a full acclimatization day and recommend staying hydrated, avoiding alcohol on arrival, and pacing activity levels for the first day or two in Ladakh specifically.",
    },
    {
      question: "Do we need special permits for this trip?",
      answer:
        "Yes — Pangong Lake and Nubra Valley both require Inner Line Permits, since they sit near sensitive border areas. We arrange these in advance as part of this package, so you won't need to sort them out locally.",
    },
    {
      question: "Why fly between Srinagar and Leh rather than drive?",
      answer:
        "The road route crosses several extremely high passes and typically takes 2 full days each way; flying takes under an hour and is dramatically more time-efficient, which is why we've built this itinerary around the flight rather than the overland route.",
    },
    {
      question: "Can we do Kashmir or Ladakh alone instead of both?",
      answer:
        "Yes — our standalone Kashmir Valley Tour and Ladakh Tour cover each region on its own, for travellers with less time or a specific preference for one region over the other.",
    },
    {
      question: "Is 9 days enough for both regions, or should we extend?",
      answer:
        "9 days gives genuine time in both, though we can extend either leg — an extra Nubra Valley night or a second Pangong Lake day are both easy additions if your schedule allows more time.",
    },
  ],
  relatedPackages: [
    {
      name: "Kashmir Valley Tour",
      tagline: "Dal Lake, Gulmarg & Pahalgam · 5 Days",
      description: "A Kashmir-only version of this trip for travellers with less time or no interest in Ladakh.",
      href: "/tours/kashmir-valley-tour",
      image: "/images/destinations/Srinagar-3.webp",
      imageAlt: "Houseboats on Dal Lake with snow-capped mountains behind, Srinagar",
    },
    {
      name: "Ladakh Tour",
      tagline: "Leh, Monasteries & Pangong Lake · 6 Days",
      description: "A Ladakh-only version of this trip for travellers focused on the high-altitude side alone.",
      href: "/tours/ladakh-tour",
      image: "/images/destinations/Leh-5.webp",
      imageAlt: "Panoramic view over Leh valley with snow-capped peaks, Ladakh",
    },
    {
      name: "Kashmir Honeymoon",
      tagline: "Dal Lake, Houseboats & Snow-Capped Peaks · 5 Days",
      description: "A honeymoon-specific version of the Kashmir leg, built around couples rather than general sightseeing.",
      href: "/experiences/kashmir-honeymoon",
      image: "/images/destinations/Srinagar-3.webp",
      imageAlt: "Houseboats on Dal Lake with snow-capped mountains behind, Srinagar",
    },
  ],
  draftPendingReview: false,
};
