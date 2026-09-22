import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const sikkimTour: PackageContent = {
  slug: "sikkim-tour",
  name: "Sikkim Tour",
  tagline: "A Former Himalayan Buddhist Kingdom",
  metaTitle: "Sikkim Tour Package | Gangtok, Tsomgo Lake & Namchi",
  metaDescription:
    "A private 5-day Sikkim tour — Gangtok's monasteries, the high-altitude Tsomgo Lake, and South Sikkim's giant Buddha and Guru Padmasambhava statues.",
  heroImage: "/images/destinations/sikkim-tsomgo-lake.webp",
  heroImageAlt: "Tsomgo Lake in the Sikkim Himalayas",
  heroHeadline: "Sikkim: A Former Himalayan Buddhist Kingdom",
  heroSubheadline:
    "A 5-day circuit through India's least-visited Himalayan state — an independent kingdom until 1975, still carrying a genuinely distinct Buddhist identity through its monasteries, prayer-flag-strung lakes, and giant hilltop statues.",
  overview:
    "Sikkim remained an independent kingdom, ruled by its own Chogyal monarchy, until it voted to merge with India in 1975 — making it one of the more recent and unusual additions to the country, and part of why it still feels genuinely distinct from the rest of India in language, cuisine and religious character. Tibetan Buddhism runs through daily life here in a way that goes beyond tourist-facing monastery visits, and the state's small population and mountainous terrain have kept it considerably less visited than its neighbour Darjeeling, despite comparable scenery. This tour covers Gangtok, the capital, a high-altitude glacial lake, and South Sikkim's giant statues — a genuine introduction to a part of India most first-time visitors never reach.",
  quickFacts: [
    { label: "Duration", value: "5 Days / 4 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Mar – May & Oct – Nov" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Gangtok",
      description:
        "A drive from Bagdogra airport (roughly 4 to 5 hours) up into the hills to Gangtok, Sikkim's capital, gaining altitude through forested hillsides along the way. Private transfer to your hotel, with the rest of the day free to rest after travelling. In the evening, an easy first walk along MG Marg, Gangtok's pedestrian-only main street, lined with cafés, shops and one of the cleanest, most orderly town centres in the Himalayan region.",
    },
    {
      title: "Day 2 — Gangtok Sightseeing",
      description:
        "A full day exploring Gangtok and its surroundings, starting with Rumtek Monastery, one of the most significant Buddhist monasteries in Sikkim and the seat-in-exile of the Karmapa, head of the Karma Kagyu lineage of Tibetan Buddhism, roughly 45 minutes outside the city. Visit the Directorate of Handicrafts and Handloom to see traditional Sikkimese weaving and woodcarving, and the Namgyal Institute of Tibetology, a research institute holding a genuinely significant collection of Buddhist manuscripts, statues and thangka paintings.",
    },
    {
      title: "Day 3 — Tsomgo Lake & Baba Mandir",
      description:
        "A day trip to Tsomgo Lake (also called Changu Lake), a glacial lake at roughly 3,750 metres, its still surface reflecting the surrounding snow-capped ridgeline on a clear day, ringed with prayer flags left by visiting pilgrims. Continue, permits and conditions allowing, to the Baba Harbhajan Singh Mandir, a shrine dedicated to an Indian Army soldier revered by troops stationed in the region, genuinely unusual as a site of military folk devotion rather than a traditional religious tradition. This excursion requires an Inner Line Permit given the area's proximity to the Chinese border, which we arrange as part of the trip.",
      image: "/images/destinations/sikkim-tsomgo-lake.webp",
      imageAlt: "Tsomgo Lake in the Sikkim Himalayas",
    },
    {
      title: "Day 4 — Gangtok to Namchi & Ravangla",
      description:
        "A drive of roughly 3 to 4 hours to South Sikkim, stopping first at Namchi to see the Samdruptse hill statue, a roughly 45-metre statue of Guru Padmasambhava (the 8th-century Buddhist master credited with introducing Buddhism to Sikkim and Tibet) reached by a long staircase lined with golden prayer wheels. Continue to Ravangla for Tathagata Tsal, more commonly known as Buddha Park, home to a 40-metre seated Buddha statue set within landscaped gardens on a hilltop with genuinely sweeping valley views. Overnight in the Namchi-Ravangla area.",
      image: "/images/destinations/sikkim-samdruptse.webp",
      imageAlt: "The Samdruptse hill statue near Namchi, Sikkim",
    },
    {
      title: "Day 5 — Departure",
      description:
        "A relaxed final morning, with an optional stop at Tathagata Tsal again for morning light if you didn't have time the previous evening, before a private transfer back to Bagdogra airport for your onward or international departure flight. Five days into a part of India genuinely few first-time visitors reach, most travellers describe Sikkim as feeling distinctly different from anywhere else on a typical India itinerary — quieter, more orderly, and shaped by a Buddhist cultural identity that runs considerably deeper than a few monastery stops.",
      image: "/images/destinations/sikkim-tathagata-tsal.webp",
      imageAlt: "The Buddha statue at Tathagata Tsal, Ravangla, Sikkim",
    },
  ],
  inclusions: [
    "2 nights in a hotel of your choice in Gangtok",
    "2 nights in a hotel of your choice in Namchi or Ravangla",
    "Daily breakfast",
    "Private vehicle for all transfers and sightseeing",
    "English-speaking guide throughout",
    "Inner Line Permit arrangement for the Tsomgo Lake excursion",
  ],
  exclusions: [
    "Flights or train tickets to and from Bagdogra",
    "Rumtek Monastery and Namgyal Institute of Tibetology entry fees (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "A Former Independent Kingdom",
      description:
        "Sikkim only merged with India in 1975, and its distinct Buddhist cultural identity remains genuinely stronger than a typical Indian state.",
    },
    {
      title: "A High-Altitude Glacial Lake",
      description:
        "Tsomgo Lake's setting near the Chinese border, reached with a special permit, gives this trip a genuinely different feel from a standard hill-station visit.",
    },
    {
      title: "Considerably Less Visited Than Darjeeling",
      description:
        "Despite comparable Himalayan scenery, Sikkim's small population and mountainous terrain have kept it quieter than its better-known neighbour.",
    },
  ],
  bestTimeToVisit: {
    heading: "March–May & October–November are Best",
    note: "Spring brings blooming rhododendrons across Sikkim's hillsides and clearer mountain visibility, while autumn offers the clearest skies of the year after the monsoon. The June–September monsoon brings heavy rain and landslide risk on mountain roads, and Tsomgo Lake specifically can be inaccessible in heavy winter snow.",
  },
  relatedDestinations: [
    {
      name: "Sikkim",
      tagline: "A Himalayan Buddhist Kingdom",
      description: "A former independent kingdom with monasteries, high-altitude lakes and giant hilltop statues.",
      href: "/destinations/sikkim",
      image: "/images/destinations/sikkim-tsomgo-lake.webp",
      imageAlt: "Tsomgo Lake in the Sikkim Himalayas",
    },
    {
      name: "Darjeeling",
      tagline: "Tea Gardens & Himalayan Views",
      description: "A hill station built around tea, a UNESCO steam railway, and sunrise views of Kanchenjunga.",
      href: "/destinations/darjeeling",
      image: "/images/destinations/Darjeeling.webp",
      imageAlt: "Darjeeling town on the hillside, West Bengal",
    },
    {
      name: "Kolkata",
      tagline: "India's Colonial-Era Capital",
      description: "The natural gateway city to Sikkim and Darjeeling, with its own distinct colonial architecture.",
      href: "/destinations/kolkata",
      image: "/images/destinations/kolkata-victoria-memorial.webp",
      imageAlt: "The Victoria Memorial, Kolkata",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Do we need a special permit to visit Sikkim or Tsomgo Lake specifically?",
      answer:
        "An Inner Line Permit is required for Tsomgo Lake and other areas near the Chinese border, which we arrange as part of this itinerary; general travel within Gangtok and South Sikkim requires no special permit for most nationalities, though foreign nationals should confirm current requirements with us when booking.",
    },
    {
      question: "Can we visit Gurudongmar Lake as well?",
      answer:
        "Gurudongmar Lake sits considerably further north and higher in altitude than Tsomgo, requiring additional permits and a longer excursion; it can be added to this itinerary with an extra day or two, subject to current access conditions, which we can advise on when planning your trip.",
    },
    {
      question: "How is Sikkim different from Darjeeling?",
      answer:
        "Sikkim was an independent kingdom until 1975 and carries a considerably stronger, more pervasive Buddhist cultural identity than Darjeeling, alongside high-altitude lake excursions Darjeeling doesn't offer; Darjeeling's identity centres more on its colonial-era hill-station history and tea industry.",
    },
    {
      question: "How do we get to Sikkim?",
      answer:
        "Bagdogra is the nearest airport, roughly 4 to 5 hours from Gangtok by road; Sikkim also has its own small airport at Pakyong, closer to Gangtok, though flight options remain more limited than Bagdogra's.",
    },
    {
      question: "Can this trip be combined with Darjeeling?",
      answer:
        "Yes, easily — both share Bagdogra as the nearest airport and sit within a few hours of each other by road; combining them into a single longer trip is a common request, and we can build a joint itinerary if you have the extra days.",
    },
  ],
  relatedPackages: [
    {
      name: "Darjeeling Tour",
      tagline: "Tea Gardens & the Himalayan Railway · 4 Days",
      description: "The neighbouring hill station, easy to combine with Sikkim given the shared Bagdogra gateway.",
      href: "/tours/darjeeling-tour",
      image: "/images/destinations/Darjeeling.webp",
      imageAlt: "Darjeeling town on the hillside, West Bengal",
    },
    {
      name: "Kolkata Tour",
      tagline: "Colonial Grandeur & the Hooghly River · 4 Days",
      description: "The natural gateway city before or after Sikkim, with its own distinct colonial history.",
      href: "/tours/kolkata-tour",
      image: "/images/destinations/kolkata-victoria-memorial.webp",
      imageAlt: "The Victoria Memorial, Kolkata",
    },
  ],
  draftPendingReview: false,
};
