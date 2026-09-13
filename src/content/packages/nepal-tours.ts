import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const nepalTours: PackageContent = {
  slug: "nepal-tours",
  name: "Nepal Tours",
  tagline: "Temples, Mountains & the Jungle",
  metaTitle: "Nepal Tour Packages | Kathmandu, Pokhara, Nagarkot & Chitwan",
  metaDescription:
    "A private 8-day Nepal tour through Kathmandu, Nagarkot, Pokhara and Chitwan — UNESCO temple squares, Himalayan sunrise views, and a jungle safari, all with a private guide.",
  heroImage: "/images/destinations/pokhara-valley-machapuchare-view.webp",
  heroImageAlt: "Pokhara valley with Machapuchare mountain view, Nepal",
  heroHeadline: "Nepal: Temples, Mountains & the Jungle",
  heroSubheadline:
    "An 8-day private circuit through Kathmandu, Nagarkot, Pokhara and Chitwan — UNESCO temple squares, Himalayan sunrise views, and a jungle safari in one trip.",
  overview:
    "Nepal packs an unusual amount of variety into a small country, and this 8-day private circuit is built to show most of it without feeling rushed. You'll spend time in Kathmandu's UNESCO-listed temple squares and stupas, catch sunrise over the Himalayas from Nagarkot's ridge-top viewpoint, wind down beside Pokhara's Phewa Lake beneath the Annapurna range, and finish with a jungle safari in Chitwan National Park, home to one-horned rhinos and, less commonly, Bengal tigers. It's a genuinely popular route among first-time visitors to Nepal precisely because it doesn't require choosing between culture, mountains and wildlife — the itinerary covers all three, with an English-speaking guide and private vehicle throughout.",
  quickFacts: [
    { label: "Duration", value: "8 Days / 7 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Dec & Mar – May" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Kathmandu",
      description:
        "Private transfer from Tribhuvan International Airport to your hotel in Kathmandu, with the rest of the day left free to rest after your flight. If you're feeling up to it in the evening, your guide can point you toward Thamel, the city's atmospheric backpacker and shopping district, for an easy first wander through its narrow lanes of trekking shops, bakeries and prayer-flag-strung rooftops. Kathmandu sits at a genuinely different altitude and pace from most travellers' starting point, and this first quiet evening is a good time to adjust before the sightseeing begins properly tomorrow. Your guide will also confirm the week's plan with you and note any preferences before the circuit gets underway.",
    },
    {
      title: "Day 2 — Kathmandu Valley Sightseeing",
      description:
        "A full day covering the Kathmandu Valley's UNESCO World Heritage Sites, starting at Kathmandu Durbar Square, the historic royal palace complex with its ornately carved wooden temples and courtyards. From there, Swayambhunath — often called the Monkey Temple for the free-roaming macaques around its grounds — offers sweeping views over the valley from its hilltop stupa, its painted Buddha eyes watching in all four directions. In the afternoon, visit Boudhanath, one of the largest stupas in the world and a major pilgrimage site for Tibetan Buddhists, followed by Pashupatinath, a sacred Hindu temple complex on the banks of the Bagmati River where cremation ceremonies are still performed in public view — a moving, sometimes intense experience your guide will help you navigate respectfully.",
    },
    {
      title: "Day 3 — Kathmandu to Nagarkot",
      description:
        "A short drive (around 1.5 to 2 hours) east out of the Kathmandu Valley to Nagarkot, a small ridge-top town known for having some of the most reliable Himalayan panorama views in the region, including — on a clear day — Everest itself in the distance. The afternoon is left unhurried, with time to settle into a hillside guesthouse and simply enjoy the view as the light changes over the mountains through the evening. It's a deliberately quiet, restorative stop between Kathmandu's intensity and Pokhara's lakeside pace, and many travellers rate this single evening among the most memorable of the whole trip.",
    },
    {
      title: "Day 4 — Nagarkot Sunrise, on to Pokhara",
      description:
        "An early start for sunrise from Nagarkot's viewing tower, watching the Himalayan range — including Langtang and, on clear days, Everest — turn gold as the sun comes up over the peaks. After breakfast, begin the drive to Pokhara, Nepal's second city and gateway to the Annapurna range (roughly 6 to 7 hours by road, or a short domestic flight if you'd prefer to save the driving time — ask your guide about swapping this leg to a flight). Arriving in Pokhara by evening, the lakeside area around Phewa Lake makes for an easy, relaxed first evening, with restaurants and cafés right on the water.",
    },
    {
      title: "Day 5 — Pokhara Sightseeing",
      description:
        "A full day around Pokhara's lake and valley, starting with a boat ride on Phewa Lake toward the small Tal Barahi temple on its island, with the Annapurna range reflected in the water on a clear morning. In the afternoon, visit Davis Falls, a dramatic waterfall that disappears into an underground tunnel, and the adjoining Gupteshwor Cave, a large limestone cave with a Shiva shrine inside. Adventure-minded travellers can also arrange paragliding over the lake and valley this afternoon, launching from the Sarangkot ridge above the city — one of the most popular paragliding spots in the world, and a genuinely spectacular way to see the Annapurna range up close.",
    },
    {
      title: "Day 6 — Sarangkot Sunrise, on to Chitwan",
      description:
        "An early drive up to Sarangkot for sunrise over the Annapurna and Machapuchare (Fishtail) peaks — widely considered one of the best sunrise viewpoints in Nepal, and a fitting final Himalayan moment before the itinerary shifts to jungle terrain. After breakfast back in Pokhara, begin the drive south to Chitwan National Park (around 4 to 5 hours), watching the landscape change from mountain foothills to the flat, subtropical Terai lowlands along the way. Arrive at your jungle lodge by early evening, with time to settle in before tomorrow's full day of wildlife activities.",
    },
    {
      title: "Day 7 — Chitwan National Park",
      description:
        "A full day of jungle activities inside and around Chitwan National Park, a UNESCO World Heritage Site and one of the best places in Asia to see the one-horned rhinoceros in the wild. Activities typically include a jeep safari through the park's grasslands and sal forest, a canoe ride along the Rapti River (a good spot for spotting crocodiles and river birds), and a visit to the Elephant Breeding Centre. In the evening, many lodges arrange a Tharu cultural performance, showcasing the traditional stick dance of the indigenous Tharu community who have lived in this region for generations, long before it became a national park.",
    },
    {
      title: "Day 8 — Chitwan to Kathmandu, Departure",
      description:
        "An optional early final activity — a short guided nature walk or a last look at the wetlands around Bishazari Tal, a lake system just outside the park known for its birdlife — before driving back to Kathmandu (around 5 to 6 hours, or a short flight from nearby Bharatpur if you'd prefer). This closes out an 8-day circuit that covers Kathmandu's temples, Nagarkot's Himalayan views, Pokhara's lakeside mountains, and Chitwan's jungle — a genuinely varied introduction to Nepal rather than a single repeated formula of temples and viewpoints. Your guide remains available right up to your airport drop-off in case your flight is delayed or plans shift.",
    },
  ],
  inclusions: [
    "7 nights in hotels of your choice, twin-sharing",
    "Daily breakfast",
    "Private vehicle for the full circuit",
    "English-speaking guide throughout",
    "Chitwan National Park entry and jungle activities as per itinerary",
    "All applicable hotel and transport taxes",
  ],
  exclusions: [
    "International and domestic flights — booked only on request",
    "Nepal visa fees (available on arrival for most nationalities)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Optional activities such as paragliding (arranged on request, paid locally)",
  ],
  highlights: [
    {
      title: "Temples, Mountains and Jungle in One Trip",
      description:
        "Most Nepal itineraries pick one focus — this route covers Kathmandu's UNESCO temples, Himalayan sunrise views, and a Chitwan jungle safari together.",
    },
    {
      title: "Two Genuine Himalayan Viewpoints",
      description:
        "Both Nagarkot and Sarangkot offer well-regarded sunrise panoramas, giving two real chances at clear mountain views rather than relying on just one.",
    },
    {
      title: "A Real Wildlife Component",
      description:
        "Chitwan's jeep safaris and canoe rides add a genuinely different kind of day to the trip, alongside the temple and mountain sightseeing.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–December & March–May are Best",
    note: "These two windows offer the clearest Himalayan views and the most comfortable temperatures for sightseeing in Kathmandu, Nagarkot and Pokhara. The June–September monsoon brings heavy rain and frequently obscures mountain views, while December–February can be cold, especially at Nagarkot's altitude.",
  },
  relatedDestinations: [
    {
      name: "Kathmandu",
      tagline: "Nepal's Temple-Filled Capital",
      description: "UNESCO-listed durbar squares, stupas and temples across the Kathmandu Valley.",
      href: "/destinations/kathmandu",
      image: "/images/destinations/kathmandu-aerial-boudhanath-city.webp",
      imageAlt: "Aerial view of Boudhanath stupa and Kathmandu city",
    },
    {
      name: "Pokhara",
      tagline: "Lakes Beneath the Annapurnas",
      description: "Phewa Lake, paragliding, and some of Nepal's best mountain views.",
      href: "/destinations/pokhara",
      image: "/images/destinations/pokhara-valley-machapuchare-view.webp",
      imageAlt: "Pokhara valley with Machapuchare mountain view",
    },
    {
      name: "Chitwan",
      tagline: "Jungle Safari",
      description: "One-horned rhinos, jeep safaris and canoe rides in the Terai lowlands.",
      href: "/destinations/chitwan",
      image: "/images/destinations/chitwan-elephants-grassland.webp",
      imageAlt: "Elephants in the grassland at Chitwan National Park",
    },
    {
      name: "Nagarkot",
      tagline: "Himalayan Sunrise Views",
      description: "A ridge-top town with some of the most reliable mountain panoramas near Kathmandu.",
      href: "/destinations/nagarkot",
      image: "/images/destinations/nagarkot-clouds-valley-view.webp",
      imageAlt: "Clouds over the valley view from Nagarkot",
    },
  ],
  showCarFleet: false,
  faqs: [
    {
      question: "Do we need a visa for Nepal?",
      answer:
        "Most nationalities can get a Nepal visa on arrival at Kathmandu airport, paid in cash or card. We'll confirm the exact requirements and current fee for your nationality when planning your trip.",
    },
    {
      question: "Is this trip suitable for families with children?",
      answer:
        "Yes — the pace is moderate and the Chitwan jungle safari in particular is a genuine highlight for children. We can adjust sightseeing time and add rest days if needed.",
    },
    {
      question: "Can we add Everest region trekking or a Lumbini visit to this itinerary?",
      answer:
        "Yes — this 8-day circuit is a starting template. Everest region flights and short treks, or a Lumbini extension to see the Buddha's birthplace, can both be added depending on your available time.",
    },
    {
      question: "Should we fly or drive between Pokhara and Chitwan or Kathmandu?",
      answer:
        "Both options work — driving lets you see the countryside, while flying saves time. We'll ask about your preference when confirming the itinerary and price both options if you're undecided.",
    },
    {
      question: "Is the price per person fixed?",
      answer:
        "We quote every trip individually rather than publish a fixed price — the final cost depends on your travel dates, group size, and the hotel category you choose. Send us your dates and hotel preference and we'll reply with an exact quote, usually within 24 hours.",
    },
  ],
  relatedPackages: [
    {
      name: "Golden Triangle Tours",
      tagline: "Delhi – Agra – Jaipur",
      description: "Combine this trip with India's classic circuit for a fuller South Asia itinerary.",
      href: "/tours/golden-triangle-tour-classic",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Wildlife Tours",
      tagline: "Tiger Safaris",
      description: "Pair Chitwan's jungle safari with India's tiger reserves for a longer wildlife-focused trip.",
      href: "/tours/wildlife-tours",
      image: "/images/destinations/ranthambore-tiger.webp",
      imageAlt: "Wild tiger at Ranthambore National Park",
    },
  ],
  draftPendingReview: false,
};
