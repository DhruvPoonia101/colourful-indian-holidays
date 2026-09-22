import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const bhutanTours: PackageContent = {
  slug: "bhutan-tours",
  name: "Bhutan Tours",
  tagline: "Dzongs, Valleys & the Tiger's Nest",
  metaTitle: "Bhutan Tour Packages | Thimphu, Punakha, Gangtey & Paro",
  metaDescription:
    "A private 8-day Bhutan tour through Thimphu, Punakha, Gangtey and Paro — fortress-monasteries, the Dochula Pass, a glacial crane valley, and the cliffside Tiger's Nest.",
  heroImage: "/images/destinations/paro-taktsang-tigers-nest.webp",
  heroImageAlt: "Paro Taktsang, the Tiger's Nest Monastery, Bhutan",
  heroHeadline: "Bhutan: Dzongs, Valleys & the Tiger's Nest",
  heroSubheadline:
    "An 8-day private circuit through Thimphu, Punakha, Gangtey and Paro — fortress-monasteries, a mountain pass strung with prayer flags, a glacial crane valley, and the cliffside hike to Bhutan's most iconic monastery.",
  overview:
    "Bhutan runs its tourism differently from almost anywhere else in the world — a country that deliberately limits visitor numbers and requires every traveller to book through a licensed operator with a government-set daily Sustainable Development Fee, precisely to keep the country from being overrun the way parts of neighbouring Nepal and India sometimes are. What that policy buys visitors is genuinely remarkable: valley towns that still feel lived-in rather than built for tourism, dzongs (fortress-monasteries) that remain active seats of both religious and civil administration rather than museum pieces, and roads quiet enough that the drive between towns is as memorable as the towns themselves. This 8-day circuit covers Bhutan's four essential stops — the capital Thimphu, the former capital Punakha, the glacial Gangtey valley, and Paro, home to the Tiger's Nest Monastery clinging to a cliff face 900 metres above the valley floor.",
  quickFacts: [
    { label: "Duration", value: "8 Days / 7 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Mar – May & Sep – Nov" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Paro, on to Thimphu",
      description:
        "A flight into Paro, one of the most dramatic commercial airport approaches in the world, threading between Himalayan peaks on the final descent — only a small number of pilots are certified to land here. Private transfer roughly an hour to Thimphu, Bhutan's capital and, notably, the only national capital anywhere in the world without a single traffic light, traffic instead directed by white-gloved officers at a central intersection. The rest of the day is free to rest after travelling and adjust to the altitude, with an easy evening walk through the compact city centre if you're up for it.",
    },
    {
      title: "Day 2 — Thimphu Sightseeing",
      description:
        "A full day in Thimphu, starting with Tashichho Dzong, a whitewashed fortress-monastery on the Wang Chhu river that houses the throne room of the King of Bhutan and the offices of the national government, alongside its continued role as a monastic centre. Visit the Buddha Dordenma, a 51-metre bronze Buddha statue seated on a hillside overlooking the entire valley, and the National Memorial Chorten, a constantly circumambulated stupa built in memory of Bhutan's third king. In the afternoon, the weekend handicrafts market and the National Institute for Zorig Chusum, where students train in Bhutan's thirteen traditional arts and crafts, offer a good sense of Bhutanese culture beyond the monuments themselves.",
      image: "/images/destinations/thimphu-tashichho-dzong.webp",
      imageAlt: "Tashichho Dzong, Thimphu, Bhutan",
    },
    {
      title: "Day 3 — Thimphu to Punakha via Dochula Pass",
      description:
        "A roughly 3-hour drive to Punakha, Bhutan's former capital, crossing the Dochula Pass at 3,100 metres, marked by 108 memorial chortens built in a neat arrangement and, on a clear day, a genuinely spectacular panorama of the eastern Himalayan range including several peaks over 7,000 metres. The road descends from the pass into a noticeably warmer, subtropical valley, a striking contrast from Thimphu's cooler climate in the space of a single drive. Arrive in Punakha by early afternoon with time to settle in ahead of tomorrow's sightseeing.",
    },
    {
      title: "Day 4 — Punakha Sightseeing",
      description:
        "A full day centred on Punakha Dzong, widely considered the most beautiful dzong in Bhutan, built at the confluence of two rivers — the Pho Chhu (father) and Mo Chhu (mother) — and reached by crossing a traditional wooden cantilever bridge. The dzong served as Bhutan's capital and seat of government until the 1950s and remains the winter residence of the country's central monastic body today. In the afternoon, a walk across Punakha's suspension bridge, one of the longest in the country, and a visit to Chimi Lhakhang, a fertility temple built in honour of the unconventional 15th-century saint known as the \"Divine Madman,\" a short walk through rice paddies from the main road.",
      image: "/images/destinations/punakha-dzong-autumn.webp",
      imageAlt: "Punakha Dzong in autumn, Bhutan",
    },
    {
      title: "Day 5 — Punakha to Gangtey (Phobjikha Valley)",
      description:
        "A roughly 3-hour drive to Gangtey, in the glacial Phobjikha Valley, Bhutan's only such valley and a genuinely different landscape from anywhere else on this itinerary — wide, U-shaped and largely undeveloped, with the valley floor kept deliberately free of overhead power lines to protect the habitat of the black-necked cranes that winter here each year. The valley moves at an even slower pace than Thimphu or Punakha, with yak herding and potato farming still the main local livelihoods alongside a small, growing tourism trade. Arrive in the afternoon with time for an easy walk through the village before dinner.",
    },
    {
      title: "Day 6 — Gangtey Sightseeing",
      description:
        "A full day in the Phobjikha Valley, starting with Gangtey Monastery, a centuries-old Nyingma Buddhist monastery overlooking the valley from a low ridge, one of the few in Bhutan open to visitors without restriction on interior access. In the afternoon, walk a section of the Gangtey Nature Trail, a gentle path through pine forest and open valley floor with genuinely excellent views back toward the monastery, and — if visiting between November and March — a real chance of spotting the endangered black-necked cranes that migrate here from the Tibetan plateau each winter, a conservation story genuinely central to why this valley has been kept so deliberately undeveloped.",
      image: "/images/destinations/gangtey-monastery-cranes-valley.webp",
      imageAlt: "Gangtey monastery overlooking the crane valley, Bhutan",
    },
    {
      title: "Day 7 — Gangtey back to Paro",
      description:
        "A roughly 4 to 5-hour drive back through Punakha and over the Dochula Pass a second time, often with different weather and light than your first crossing, on to Paro. The Paro valley is Bhutan's most fertile, with terraced rice paddies running down to the Paro Chhu river, and the town itself, small and easily walkable, holds Rinpung Dzong, another working fortress-monastery, and the National Museum housed in the round Ta Dzong watchtower above it. The evening is left free to rest ahead of tomorrow's hike, genuinely the most physically demanding day of the trip.",
      image: "/images/destinations/paro-rinpung-dzong-valley-airport.webp",
      imageAlt: "Rinpung Dzong overlooking the Paro valley, Bhutan",
    },
    {
      title: "Day 8 — Tiger's Nest Monastery & Departure",
      description:
        "An early start for the hike to Paro Taktsang, the Tiger's Nest Monastery, built into a sheer cliff face 900 metres above the valley floor, according to legend at the site where Guru Rinpoche flew on the back of a tigress to meditate. The hike itself takes roughly 2 to 3 hours each way at a moderate pace, with a viewpoint cafeteria roughly halfway up offering a rest stop and a first proper view of the monastery across the gorge; mules are available for part of the ascent for travellers who'd prefer not to walk the entire way. A private transfer to Paro airport follows for your onward or international departure flight, eight days across four genuinely distinct Bhutanese valleys behind you.",
    },
  ],
  inclusions: [
    "7 nights in hotels of your choice, twin-sharing",
    "Daily breakfast, lunch and dinner (standard in Bhutan's tourism model)",
    "Bhutan Sustainable Development Fee for the duration of your stay",
    "Private vehicle for the full circuit",
    "English-speaking licensed Bhutanese guide throughout",
    "All monument, dzong and monastery entry fees",
  ],
  exclusions: [
    "International flights to and from Paro",
    "Bhutan visa fee (arranged in advance through your licensed operator)",
    "Personal expenses, tips, and travel insurance",
    "Mule hire for the Tiger's Nest hike, if used (paid locally, arranged on request)",
  ],
  highlights: [
    {
      title: "Four Genuinely Distinct Valleys",
      description:
        "Thimphu's capital bustle, Punakha's subtropical warmth, Gangtey's glacial stillness and Paro's fertile terraces each feel like a different country.",
    },
    {
      title: "The Tiger's Nest, Properly Timed",
      description:
        "Placed on the final day when you're already acclimatised, rather than rushed on arrival, giving the hike its best chance of being enjoyable rather than gruelling.",
    },
    {
      title: "A Country That Limits Its Own Visitor Numbers",
      description:
        "Bhutan's Sustainable Development Fee policy keeps towns and monasteries feeling genuinely lived-in rather than built for tourism.",
    },
  ],
  bestTimeToVisit: {
    heading: "March–May & September–November are Best",
    note: "Spring brings blooming rhododendrons and clear mountain views for the Dochula Pass crossing, while autumn offers the clearest skies of the year and, from November, the arrival of the black-necked cranes at Gangtey. Winter turns genuinely cold at altitude, particularly at Dochula and in Gangtey, and the June–August monsoon brings heavy rain and frequently obscures the Himalayan views this itinerary is partly built around.",
  },
  relatedDestinations: [
    {
      name: "Thimphu",
      tagline: "Bhutan's Capital",
      description: "The only national capital in the world without a single traffic light, small and walkable.",
      href: "/destinations/thimphu",
      image: "/images/destinations/thimphu-tashichho-dzong.webp",
      imageAlt: "Tashichho Dzong, Thimphu, Bhutan",
    },
    {
      name: "Punakha",
      tagline: "Bhutan's Former Capital",
      description: "A riverside dzong widely considered the most beautiful in Bhutan, reached over the Dochula Pass.",
      href: "/destinations/punakha",
      image: "/images/destinations/punakha-dzong-autumn.webp",
      imageAlt: "Punakha Dzong in autumn, Bhutan",
    },
    {
      name: "Paro",
      tagline: "Home of the Tiger's Nest",
      description: "Bhutan's only international airport and the setting for its single most iconic sight.",
      href: "/destinations/paro",
      image: "/images/destinations/paro-taktsang-tigers-nest.webp",
      imageAlt: "Paro Taktsang, the Tiger's Nest Monastery, Bhutan",
    },
    {
      name: "Gangtey",
      tagline: "Valley of the Black-Necked Cranes",
      description: "Bhutan's only glacial valley, and a rare winter home for endangered black-necked cranes.",
      href: "/destinations/gangtey",
      image: "/images/destinations/gangtey-monastery-cranes-valley.webp",
      imageAlt: "Gangtey monastery overlooking the crane valley, Bhutan",
    },
  ],
  showCarFleet: false,
  faqs: [
    {
      question: "What is the Sustainable Development Fee, and is it really required?",
      answer:
        "Yes — it's a genuine, mandatory daily fee set by the Bhutanese government, included in the pricing we quote, that funds free healthcare, education and environmental conservation in Bhutan. Every visitor pays it as part of a licensed tour; there's no way to visit Bhutan independently outside this system.",
    },
    {
      question: "Is the Tiger's Nest hike difficult?",
      answer:
        "It's a genuine, moderately strenuous hike of 2 to 3 hours each way at altitude, with a steady uphill gradient, though it's achievable for most reasonably fit travellers, and mules are available for part of the ascent if you'd like to reduce the walking.",
    },
    {
      question: "Do we need to worry about altitude on this trip?",
      answer:
        "Thimphu and the Dochula Pass sit at meaningful altitude, and some travellers notice mild effects such as shortness of breath, though serious altitude sickness is uncommon at these elevations compared to genuine high-altitude trekking. We build in an easy first day in Thimphu specifically to help you adjust.",
    },
    {
      question: "Can we combine this with our Nepal Tours itinerary?",
      answer:
        "Yes — Bhutan and Nepal don't share a direct land border crossing open to tourists, but both are reachable via Kathmandu or Delhi, and combining an 8-day Bhutan circuit with our Nepal Tours itinerary makes for a genuinely comprehensive Himalayan trip if you have the time.",
    },
    {
      question: "Is Bhutan expensive compared to India or Nepal?",
      answer:
        "Yes, genuinely — the Sustainable Development Fee and mandatory guided-tour structure mean Bhutan costs meaningfully more per day than a comparable trip in India or Nepal. Most visitors consider it worthwhile specifically because that policy is what keeps the country as uncrowded and well-preserved as it is.",
    },
  ],
  relatedPackages: [
    {
      name: "Nepal Tours",
      tagline: "Temples, Mountains & the Jungle · 8 Days",
      description: "Combine this trip with Nepal's temples, mountains and jungle safari for a fuller Himalayan itinerary.",
      href: "/tours/nepal-tours",
      image: "/images/destinations/pokhara-valley-machapuchare-view.webp",
      imageAlt: "Pokhara valley with Machapuchare mountain view, Nepal",
    },
    {
      name: "Golden Triangle Tour",
      tagline: "Delhi – Agra – Jaipur",
      description: "Combine this trip with India's classic circuit for a fuller South Asia itinerary.",
      href: "/tours/golden-triangle-tour-classic",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
  ],
  draftPendingReview: false,
};
