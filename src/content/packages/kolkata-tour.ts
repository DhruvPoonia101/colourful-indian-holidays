import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const kolkataTour: PackageContent = {
  slug: "kolkata-tour",
  name: "Kolkata Tour",
  tagline: "Colonial Grandeur & the Hooghly River",
  metaTitle: "Kolkata Tour Package | Victoria Memorial, Howrah Bridge & Kumartuli",
  metaDescription:
    "A private 4-day Kolkata tour — the Victoria Memorial, a ride on India's last working tram system, Howrah Bridge at sunset, and the potters' quarter of Kumartuli.",
  heroImage: "/images/destinations/kolkata-victoria-memorial.webp",
  heroImageAlt: "The Victoria Memorial, Kolkata",
  heroHeadline: "Kolkata: Colonial Grandeur & the Hooghly River",
  heroSubheadline:
    "A 4-day introduction to the former capital of British India — colonial-era architecture, India's last working tram network, and the working potters' quarter that supplies the city's biggest festival.",
  overview:
    "Kolkata served as the capital of British India until 1911, and the city's architecture still carries that history more visibly than almost anywhere else in the country — grand colonial buildings, wide maidans (parks), and a genuinely intellectual, literary culture that earned it the nickname \"City of Joy\" and a reputation as India's cultural capital, home to Nobel laureates, filmmakers and writers disproportionate to its size. This tour covers the city's colonial landmarks alongside the working, lived-in side of Kolkata that a rushed layover would miss entirely — its last-of-its-kind tram network, and Kumartuli, the potters' quarter where the clay idols for Durga Puja, the city's defining festival, are made by hand each year.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Kolkata",
      description:
        "Private transfer from Kolkata airport to your hotel, with the rest of the day free to rest after travelling. In the evening, an easy first walk along Park Street, Kolkata's well-known restaurant and nightlife strip, especially atmospheric after dark when its buildings are lit for the evening, giving a first taste of the city's genuinely distinct café and literary culture before sightseeing begins tomorrow.",
    },
    {
      title: "Day 2 — Colonial Kolkata",
      description:
        "A full day covering Kolkata's colonial-era landmarks, starting with the Victoria Memorial, a grand white marble building completed in 1921 in memory of Queen Victoria, now housing a museum of British colonial history set within extensive gardens. Visit St. Paul's Cathedral, an early example of Gothic Revival architecture in India, and the Indian Museum, the oldest and largest museum in the country, holding an extensive collection spanning archaeology, art and natural history. In the afternoon, a walk through the maidan, one of the largest urban parks in the world, with the Kolkata skyline visible across open green space genuinely unusual for a city of this density.",
      image: "/images/destinations/kolkata-victoria-memorial.webp",
      imageAlt: "The Victoria Memorial, Kolkata",
    },
    {
      title: "Day 3 — Howrah Bridge, Trams & Kumartuli",
      description:
        "A morning visit to Howrah Bridge, a cantilever bridge over the Hooghly River completed in 1943 and among the busiest bridges in the world by pedestrian and vehicle traffic, best seen either early morning or at sunset when it's lit and reflected in the water. Ride one of Kolkata's trams, the only working tram network left in India and one of the oldest in Asia, still running on some of the city's original routes. In the afternoon, visit Kumartuli, the traditional potters' quarter along the river where artisans hand-build the clay idols used in Durga Puja and other festivals, a genuinely fascinating working craft district rather than a staged tourist demonstration.",
      image: "/images/destinations/kolkata-trams.webp",
      imageAlt: "Vintage trams at a depot, Kolkata",
    },
    {
      title: "Day 4 — Departure",
      description:
        "A relaxed final morning, with an optional visit to New Market, one of Kolkata's oldest shopping areas, for last-minute souvenirs, before a private transfer to the airport for your onward or international departure flight. Four days in, most travellers describe Kolkata as genuinely different in character from anywhere else on a typical India itinerary — a city with a strong intellectual and artistic identity that goes well beyond its colonial-era buildings alone.",
      image: "/images/destinations/kolkata-vidyasagar-setu.webp",
      imageAlt: "The Vidyasagar Setu bridge over the Hooghly River at dusk, Kolkata",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice in Kolkata",
    "Daily breakfast",
    "Private air-conditioned vehicle for all sightseeing",
    "English-speaking guide throughout",
    "Tram ride included as part of the itinerary",
  ],
  exclusions: [
    "Flights or train tickets to and from Kolkata",
    "Victoria Memorial and Indian Museum entry fees (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "India's Last Working Tram Network",
      description:
        "Kolkata is the only Indian city where trams still genuinely operate as public transport, not a tourist novelty.",
    },
    {
      title: "Kumartuli's Working Craft Tradition",
      description:
        "The potters' quarter is a genuine working district supplying Durga Puja's clay idols, not a staged demonstration for visitors.",
    },
    {
      title: "India's Cultural Capital, Not Just Colonial Buildings",
      description:
        "Kolkata's literary, artistic and intellectual reputation runs considerably deeper than its Victoria Memorial and colonial architecture alone.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make walking the maidan and exploring Kumartuli genuinely comfortable. April to June turns hot and humid, and the June–September monsoon brings heavy rain, though visiting just before Durga Puja in autumn (typically September or October) offers a genuinely unique look at Kumartuli's artisans working at full capacity.",
  },
  relatedDestinations: [
    {
      name: "Kolkata",
      tagline: "India's Colonial-Era Capital",
      description: "Grand colonial architecture, India's last working tram network, and a genuine literary culture.",
      href: "/destinations/kolkata",
      image: "/images/destinations/kolkata-victoria-memorial.webp",
      imageAlt: "The Victoria Memorial, Kolkata",
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
      name: "Sikkim",
      tagline: "A Himalayan Buddhist Kingdom",
      description: "A former independent kingdom with monasteries, high-altitude lakes and giant hilltop statues.",
      href: "/destinations/sikkim",
      image: "/images/destinations/sikkim-tsomgo-lake.webp",
      imageAlt: "Tsomgo Lake in the Sikkim Himalayas",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is Kolkata worth visiting on its own, or only as a gateway to Darjeeling or Sikkim?",
      answer:
        "Genuinely worth visiting on its own — its colonial architecture, tram network and cultural identity are distinct enough from anywhere else in India to justify a dedicated stay, though it also works well as a natural stopover before or after a Darjeeling or Sikkim trip.",
    },
    {
      question: "Can we combine this with Darjeeling or Sikkim?",
      answer:
        "Yes, easily — Kolkata is the natural gateway city for both, and combining a few days here with either our Darjeeling Tour or Sikkim Tour is a common request; let us know when planning your trip.",
    },
    {
      question: "Is Kumartuli genuinely worth visiting outside Durga Puja season?",
      answer:
        "Yes — artisans work on idols and related craftwork throughout the year, though the district is at its most intense and visually striking in the weeks directly before Durga Puja, typically September or October.",
    },
    {
      question: "Is Kolkata safe and comfortable for international visitors?",
      answer:
        "Yes, generally — like any major Indian city it has busy, dense areas, but Kolkata is widely considered one of India's calmer, more walkable major cities, and our guide will help navigate the sightseeing at a comfortable pace throughout.",
    },
    {
      question: "How much time should we spend on the tram ride?",
      answer:
        "A short ride of 20 to 30 minutes on one of the surviving routes gives a genuine sense of the network without taking up much of the day, leaving time for the other Day 3 stops.",
    },
  ],
  relatedPackages: [
    {
      name: "Darjeeling Tour",
      tagline: "Tea Gardens & the Himalayan Railway · 4 Days",
      description: "The natural next stop from Kolkata, reached via Bagdogra airport.",
      href: "/tours/darjeeling-tour",
      image: "/images/destinations/Darjeeling.webp",
      imageAlt: "Darjeeling town on the hillside, West Bengal",
    },
    {
      name: "Sikkim Tour",
      tagline: "A Former Himalayan Buddhist Kingdom · 5 Days",
      description: "A genuinely different Himalayan trip, also reached via Bagdogra from Kolkata.",
      href: "/tours/sikkim-tour",
      image: "/images/destinations/sikkim-tsomgo-lake.webp",
      imageAlt: "Tsomgo Lake in the Sikkim Himalayas",
    },
  ],
  draftPendingReview: false,
};
