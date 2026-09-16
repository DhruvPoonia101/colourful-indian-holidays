import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const ladakhTour: PackageContent = {
  slug: "ladakh-tour",
  name: "Ladakh Tour",
  tagline: "Leh, Monasteries & Pangong Lake · 6 Days",
  metaTitle: "Ladakh Tour Package | Leh, Nubra Valley, Pangong Lake & Khardung La",
  metaDescription:
    "A private 6-day Ladakh tour — Leh's monasteries, a Khardung La crossing into the Nubra Valley, and a day trip to the turquoise waters of Pangong Lake.",
  heroImage: "/images/destinations/Leh-4.webp",
  heroImageAlt: "Pangong Lake with motorcycles parked on the shore, Ladakh",
  heroHeadline: "Ladakh: High Passes, Monasteries & Turquoise Lakes",
  heroSubheadline:
    "A focused 6-day tour of Ladakh alone — for travellers drawn specifically to its high-altitude desert landscape rather than splitting time with Kashmir.",
  overview:
    "Ladakh sits on the Tibetan plateau at an altitude that makes it feel like an entirely different country from the rest of India — a cold desert of bare mountains, turquoise lakes and centuries-old Buddhist monasteries, reached either by a dramatic flight over the Himalayas or a summer-only road that crosses some of the highest motorable passes on Earth. This tour gives Ladakh its own dedicated six days rather than splitting time with Kashmir, with a genuine acclimatization day built in before any serious sightseeing begins, since Leh's altitude is a real consideration for most first-time visitors. From there: Nubra Valley's cold desert dunes across Khardung La, and Pangong Lake's improbable turquoise water, consistently the single most photographed spot in the region.",
  quickFacts: [
    { label: "Duration", value: "6 Days / 5 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "May – Sep" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Leh",
      description:
        "A flight into Leh, either direct or connecting through Delhi, with dramatic Himalayan views from the window as you descend into the valley between two ranges of snow-capped peaks, a first glimpse of the scenery that defines the whole trip. Private transfer to your hotel, with the rest of the day deliberately left unstructured, since Leh sits at roughly 3,500 metres and altitude sickness is a genuine consideration for most visitors on their first day. Keeping activity minimal, staying well hydrated, and avoiding alcohol tonight matters more here than on any other day of the trip, and skipping this advice is the single most common reason travellers struggle with the days ahead rather than settling in comfortably from the start.",
    },
    {
      title: "Day 2 — Acclimatization & Leh Sightseeing",
      description:
        "A deliberately gentle second day, still allowing your body to adjust to the altitude while covering Leh's more accessible sights rather than anything requiring real exertion. Visit Leh Palace, a 17th-century royal residence overlooking the old town and modelled loosely on the much larger Potala Palace in Lhasa, before a walk through Leh's Main Bazaar, browsing pashmina shawls and Tibetan handicraft stalls at an easy pace with no fixed schedule to keep to. In the late afternoon, Shanti Stupa offers a genuinely striking panoramic view over the entire Leh valley, best timed for sunset when the town's lights and the surrounding mountains are both visible as the sky changes colour behind them.",
      image: "/images/destinations/Leh-5.webp",
      imageAlt: "Panoramic view over Leh valley with snow-capped peaks, Ladakh",
    },
    {
      title: "Day 3 — Nubra Valley via Khardung La",
      description:
        "An early start to cross Khardung La, one of the highest motorable mountain passes in the world at over 5,300 metres, the road lined with prayer flags and the air noticeably thinner at the summit, before descending into the Nubra Valley — a genuinely surreal landscape of cold desert sand dunes set against snow-capped peaks, watered by the Shyok and Nubra rivers where they meet below the pass. Visit Diskit Monastery, home to a towering 32-metre Maitreya Buddha statue overlooking the valley, and if you'd like, a short Bactrian camel ride on the dunes themselves, a double-humped species found almost nowhere else in India outside this specific valley. Overnight in Nubra, the valley floor a genuinely welcome change in scenery after the high pass.",
      image: "/images/destinations/Leh.webp",
      imageAlt: "A river valley in the Ladakh mountains",
    },
    {
      title: "Day 4 — Return to Leh & Monasteries",
      description:
        "A morning drive back over Khardung La to Leh, arriving by early afternoon with time to visit Thiksey Monastery, a 12-storey complex often compared to Lhasa's Potala Palace for its stacked white-and-red architecture on a hillside, home to a community of practising Buddhist monks who welcome visitors during daily prayer sessions. Continue to Shey Palace, the former summer residence of Ladakh's kings, its walls once housing a 12-metre gilded copper Buddha statue, and Hemis Monastery, Ladakh's largest and wealthiest, tucked into a narrow valley and home to an extensive collection of Buddhist artefacts and thangka paintings. A quieter evening back in Leh follows, resting ahead of tomorrow's longer excursion to Pangong Lake.",
    },
    {
      title: "Day 5 — Pangong Lake",
      description:
        "A roughly 5-hour drive over Chang La, another high mountain pass at over 5,300 metres, to Pangong Lake, a vast, improbably turquoise lake stretching across the India-China border at over 4,300 metres, with bare mountains reflected in water so clear it seems to change colour throughout the day depending on the light and cloud cover overhead. This is consistently the single most photographed stop in Ladakh, and genuinely lives up to the reputation in person, the scale of the lake only really apparent once you're standing on its shore rather than seeing it in a photograph. An Inner Line Permit is required, which we arrange in advance as part of this itinerary. Return to Leh in the evening, tired but with the trip's signature image behind you.",
      image: "/images/destinations/Leh-4.webp",
      imageAlt: "Pangong Lake with motorcycles parked on the shore, Ladakh",
    },
    {
      title: "Day 6 — Sangam Point & Departure",
      description:
        "A half-day excursion to the Sangam, the striking confluence where the Indus and Zanskar rivers meet in two visibly different shades of blue-green water, a genuinely photogenic sight best seen from the small viewpoint above the junction and one most first-time visitors don't expect to find so striking. Continue to Magnetic Hill, a stretch of road with an unusual optical illusion that appears to pull stationary vehicles uphill, and Pathar Sahib Gurudwara, a Sikh shrine built around a rock considered sacred in local legend involving Guru Nanak. Return to Leh for your private transfer to the airport, six days in Ladakh's high-altitude landscape behind you and a genuinely different side of the Himalayas than most visitors ever see.",
      image: "/images/destinations/Leh-3.webp",
      imageAlt: "The confluence of the Indus and Zanskar rivers, Ladakh",
    },
  ],
  inclusions: [
    "5 nights in hotels of your choice in Leh and Nubra Valley",
    "Daily breakfast",
    "Private air-conditioned vehicle for all road transfers and sightseeing",
    "Inner Line Permits for Pangong Lake and Nubra Valley",
    "English-speaking guide throughout",
    "Monastery entry fees as per itinerary",
  ],
  exclusions: [
    "Flights to and from Leh",
    "Bactrian camel ride in Nubra Valley, if booked (paid locally, arranged on request)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Oxygen cylinder or altitude medication, if required (available locally on request)",
  ],
  highlights: [
    {
      title: "A Genuine Acclimatization Day",
      description:
        "Leh's altitude gets real respect in this itinerary, with a deliberately light second day before any longer excursions begin.",
    },
    {
      title: "Two of the World's Highest Motorable Passes",
      description:
        "Khardung La and Chang La both feature on this route, a genuinely rare experience most travellers never have anywhere else.",
    },
    {
      title: "Permits Handled in Advance",
      description:
        "Pangong Lake and Nubra Valley both require Inner Line Permits, which we arrange as part of this package rather than leaving you to sort out locally.",
    },
  ],
  bestTimeToVisit: {
    heading: "May–September is Best",
    note: "Ladakh's mountain passes are typically snowbound outside this window, making Khardung La and Chang La impassable by road much of the year. Flights to Leh run for most of the year regardless, though winter travel means missing Nubra Valley and Pangong Lake entirely.",
  },
  relatedDestinations: [
    {
      name: "Ladakh",
      tagline: "The Land of High Passes",
      description: "High-altitude monasteries, turquoise lakes, and cold desert valleys.",
      href: "/destinations/leh-ladakh",
      image: "/images/destinations/Leh-4.webp",
      imageAlt: "Pangong Lake with motorcycles parked on the shore, Ladakh",
    },
    {
      name: "Kashmir",
      tagline: "Paradise on Earth",
      description: "Dal Lake's houseboats, Mughal gardens, and snow-capped peaks throughout.",
      href: "/destinations/srinagar-kashmir",
      image: "/images/destinations/Srinagar-3.webp",
      imageAlt: "Houseboats on Dal Lake with snow-capped mountains behind, Srinagar",
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
        "Yes, genuinely — Leh sits at roughly 3,500 metres, and Pangong Lake and both mountain passes go considerably higher. We build in a full acclimatization day and recommend staying hydrated, avoiding alcohol on arrival, and pacing activity for the first day or two specifically.",
    },
    {
      question: "Do we need special permits for this trip?",
      answer:
        "Yes — Pangong Lake and Nubra Valley both require Inner Line Permits, since they sit near sensitive border areas. We arrange these in advance as part of this package, so you won't need to sort them out locally.",
    },
    {
      question: "Can we add Kashmir to this trip instead of doing Ladakh alone?",
      answer:
        "Yes — our combined Kashmir & Ladakh Tour covers both regions in a single nine-day circuit, for travellers who'd like Dal Lake and Gulmarg alongside this itinerary.",
    },
    {
      question: "Is Nubra Valley worth the overnight stay, or can it be a day trip?",
      answer:
        "An overnight stay is genuinely worth it — the round trip over Khardung La alone takes most of a day, and staying overnight means seeing the valley in both evening and morning light rather than rushing back the same day.",
    },
    {
      question: "What if we're not confident about handling the altitude?",
      answer:
        "Basic altitude medication and oxygen cylinders are available locally in Leh, and our guides are experienced in recognising early symptoms — let us know of any health concerns when planning your trip, and we can build in extra rest days if needed.",
    },
  ],
  relatedPackages: [
    {
      name: "Kashmir & Ladakh Tour",
      tagline: "The Complete Circuit · 9 Days",
      description: "Combine this itinerary with Kashmir's Dal Lake and Gulmarg for a longer Himalayan trip.",
      href: "/tours/kashmir-ladakh-tours-classic",
      image: "/images/destinations/Leh-4.webp",
      imageAlt: "Pangong Lake with motorcycles parked on the shore, Ladakh",
    },
    {
      name: "Kashmir Valley Tour",
      tagline: "Dal Lake, Gulmarg & Pahalgam · 5 Days",
      description: "A Kashmir-only version of the wider circuit, for travellers who'd rather skip the altitude.",
      href: "/tours/kashmir-valley-tour",
      image: "/images/destinations/Srinagar-3.webp",
      imageAlt: "Houseboats on Dal Lake with snow-capped mountains behind, Srinagar",
    },
    {
      name: "Kashmir Honeymoon",
      tagline: "Dal Lake, Houseboats & Snow-Capped Peaks · 5 Days",
      description: "A gentler, lower-altitude Himalayan honeymoon for couples who'd rather skip Ladakh's climb.",
      href: "/experiences/kashmir-honeymoon",
      image: "/images/destinations/Srinagar-3.webp",
      imageAlt: "Houseboats on Dal Lake with snow-capped mountains behind, Srinagar",
    },
  ],
  draftPendingReview: false,
};
