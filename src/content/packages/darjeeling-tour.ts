import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * No genuine tea garden or tea estate photo exists in the asset library —
 * tea gardens are covered in the written itinerary without a matching
 * image rather than forcing an unrelated photo into that slot.
 */
export const darjeelingTour: PackageContent = {
  slug: "darjeeling-tour",
  name: "Darjeeling Tour",
  tagline: "Tea Gardens & the Himalayan Railway",
  metaTitle: "Darjeeling Tour Package | Tiger Hill, the Toy Train & Tea Gardens",
  metaDescription:
    "A private 4-day Darjeeling tour — sunrise over the Himalayas from Tiger Hill, a ride on the UNESCO-listed Darjeeling Himalayan Railway, and a visit to a working tea garden.",
  heroImage: "/images/destinations/Darjeeling.webp",
  heroImageAlt: "Darjeeling town on the hillside, West Bengal",
  heroHeadline: "Darjeeling: Tea Gardens & the Himalayan Railway",
  heroSubheadline:
    "A 4-day hill-station trip built around three genuinely distinct experiences — a Himalayan sunrise from Tiger Hill, a ride on a UNESCO-listed steam railway, and a working tea garden that helped make Darjeeling's name internationally.",
  overview:
    "Darjeeling's reputation rests on three things that have very little to do with each other, which is part of what makes the town worth a dedicated visit rather than a rushed day trip — sunrise views over the Himalayan range including Kanchenjunga, the world's third-highest peak, a narrow-gauge steam railway recognised as a UNESCO World Heritage Site in its own right, and a tea industry whose name has become genuinely synonymous with a specific, prized style of tea worldwide. This tour gives proper time to each, rather than squeezing them into a single overloaded day, in a hill station that still carries much of its 19th-century British hill-station character in its architecture and layout.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Mar – May & Oct – Nov" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Darjeeling",
      description:
        "A drive from Bagdogra airport (roughly 3 to 3.5 hours) up into the hills to Darjeeling, gaining altitude steadily through tea estates and forest as the temperature drops noticeably from the plains below. Private transfer to your hotel, with the rest of the day free to rest after travelling. In the evening, an easy first walk along the Mall (Chowrasta), Darjeeling's central pedestrian square, ringed by shops, cafés and the town's characteristic colonial-era architecture.",
    },
    {
      title: "Day 2 — Tiger Hill Sunrise & the Himalayan Railway",
      description:
        "A pre-dawn drive to Tiger Hill, Darjeeling's famous sunrise viewpoint, for a chance to see Kanchenjunga, the world's third-highest peak, turn gold as the sun rises — visibility depends genuinely on weather and season, and your guide will set expectations honestly rather than overpromise a clear view. Later in the morning, a ride on a section of the Darjeeling Himalayan Railway, a narrow-gauge steam railway built in 1881 and recognised as a UNESCO World Heritage Site, its small blue carriages winding slowly through the town and surrounding hills at a pace that makes clear why it's nicknamed the &quot;Toy Train.&quot; Stop at the Batasia Loop, a spiral railway loop with a war memorial and genuinely excellent mountain views, on the return.",
      image: "/images/destinations/tiger-hill-darjeeling.webp",
      imageAlt: "Sunrise over the clouds at Tiger Hill, Darjeeling",
    },
    {
      title: "Day 3 — Tea Garden, Zoo & Himalayan Mountaineering Institute",
      description:
        "A morning visit to a working tea garden on the outskirts of town, walking through the terraced slopes where Darjeeling's famously delicate, muscatel-flavoured tea is grown, picked and processed, with a tasting session to compare the different flushes (harvests) the estate produces through the year. In the afternoon, visit the Padmaja Naidu Himalayan Zoological Park, home to red pandas and snow leopards among other high-altitude species, and the adjoining Himalayan Mountaineering Institute, founded after Tenzing Norgay's historic 1953 Everest ascent and holding a genuinely significant collection of mountaineering history and equipment.",
      image: "/images/destinations/darjeeling-himalayan-railway.webp",
      imageAlt: "The Darjeeling Himalayan Railway steam train",
    },
    {
      title: "Day 4 — Departure",
      description:
        "A relaxed final morning in Darjeeling, with time for any last-minute tea shopping — genuine Darjeeling tea makes a far better souvenir than what's typically sold to tourists elsewhere — before a private transfer back to Bagdogra airport for your onward or international departure flight. Four days in, most travellers describe Darjeeling as a hill station with genuine substance behind its reputation, rather than simply a scenic stop between other destinations.",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice in Darjeeling",
    "Daily breakfast",
    "Private vehicle for all transfers and sightseeing",
    "English-speaking guide throughout",
    "Darjeeling Himalayan Railway (Toy Train) ticket for the Darjeeling–Ghum section",
    "Tea garden visit and tasting",
  ],
  exclusions: [
    "Flights or train tickets to and from Bagdogra",
    "Padmaja Naidu Himalayan Zoological Park and Himalayan Mountaineering Institute entry fees (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "A UNESCO Steam Railway, Not Just a Novelty Ride",
      description:
        "The Darjeeling Himalayan Railway is a genuine UNESCO World Heritage Site, one of the few working steam railways with that recognition anywhere in the world.",
    },
    {
      title: "A Working Tea Garden, Not a Tourist Shop",
      description:
        "The tea garden visit is built around the actual growing and processing operation, with a genuine tasting of different seasonal flushes.",
    },
    {
      title: "Honest About the Sunrise",
      description:
        "Tiger Hill's Kanchenjunga views depend genuinely on weather — we set expectations honestly rather than promise a guaranteed clear morning.",
    },
  ],
  bestTimeToVisit: {
    heading: "March–May & October–November are Best",
    note: "Spring brings blooming rhododendrons and generally clearer mountain visibility, while autumn offers the clearest skies of the year after the monsoon. The June–September monsoon brings heavy rain and frequently obscures the Himalayan views this trip is partly built around, and December–February turns genuinely cold, though skies are often clear.",
  },
  relatedDestinations: [
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
      description: "A former independent kingdom bordering Darjeeling, with monasteries and mountain views of its own.",
      href: "/destinations/sikkim",
      image: "/images/destinations/sikkim-tsomgo-lake.webp",
      imageAlt: "Tsomgo Lake in the Sikkim Himalayas",
    },
    {
      name: "Kolkata",
      tagline: "India's Colonial-Era Capital",
      description: "The natural gateway city to Darjeeling, with its own distinct colonial architecture and culture.",
      href: "/destinations/kolkata",
      image: "/images/destinations/kolkata-victoria-memorial.webp",
      imageAlt: "The Victoria Memorial, Kolkata",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is Kanchenjunga guaranteed to be visible from Tiger Hill?",
      answer:
        "No — visibility depends genuinely on weather and season, and clouds can obscure the view even on an otherwise clear morning. October to November and March to May generally offer the best odds, but no operator can honestly guarantee it on any given day.",
    },
    {
      question: "How is this different from just buying Darjeeling tea at home?",
      answer:
        "A genuine tea garden visit shows the actual growing and processing process, and the tasting session compares different flushes (harvests) in a way that's simply not possible from a packaged box bought elsewhere — most visitors say it changes how they think about tea afterward.",
    },
    {
      question: "How do we get to Darjeeling?",
      answer:
        "Bagdogra is the nearest airport, roughly 3 to 3.5 hours from Darjeeling by road; there's no airport in Darjeeling itself given the hill-station terrain.",
    },
    {
      question: "Can we add Sikkim or Kalimpong to this trip?",
      answer:
        "Yes — this 4-day itinerary is a starting template. Sikkim adds naturally given its proximity, and Kalimpong is a shorter, quieter add-on if you have an extra day or two; let us know when planning your trip.",
    },
    {
      question: "Is the Toy Train ride the full route, or just a section?",
      answer:
        "This itinerary includes the Darjeeling-to-Ghum stretch, the most commonly ridden section and the one that includes the Batasia Loop; the full historic route from New Jalpaiguri is considerably longer and can be arranged separately on request.",
    },
  ],
  relatedPackages: [
    {
      name: "Sikkim Tour",
      tagline: "A Former Himalayan Buddhist Kingdom · 5 Days",
      description: "The neighbouring former kingdom, easy to combine with Darjeeling given the shared Bagdogra gateway.",
      href: "/tours/sikkim-tour",
      image: "/images/destinations/sikkim-tsomgo-lake.webp",
      imageAlt: "Tsomgo Lake in the Sikkim Himalayas",
    },
    {
      name: "Kolkata Tour",
      tagline: "Colonial Grandeur & the Hooghly River · 4 Days",
      description: "The natural gateway city before or after Darjeeling, with its own distinct colonial history.",
      href: "/tours/kolkata-tour",
      image: "/images/destinations/kolkata-victoria-memorial.webp",
      imageAlt: "The Victoria Memorial, Kolkata",
    },
  ],
  draftPendingReview: false,
};
