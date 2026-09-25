import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * Deliberately differentiated from two existing routes that also touch
 * Rajasthan's culture:
 * - Rajasthan Culture & Heritage Trail (a /tours package): covers Jodhpur,
 *   Jaisalmer and Udaipur — forts, havelis and craft businesses as sights
 *   to visit. This page shares no city with that route at all.
 * - Palace & Fort Tours: architecture and military history, city by city.
 * This page instead stays in Jaipur and Pushkar only, and is built around
 * LIVING culture people take part in rather than buildings people look at —
 * bazaars, a puppet show, folk music, and a hands-on block-printing
 * workshop — deliberately light on monument sightseeing that's already
 * covered elsewhere.
 *
 * Kathakali (Kochi, Kerala) was deliberately NOT included here despite a
 * verified image being available, since it already appears as an evening
 * activity in four other live files (kochi-tour, kerala-tours-classic,
 * kerala-backwaters-honeymoon, india-highlights) — adding a fifth,
 * Rajasthan-unrelated appearance here would read as padding rather than
 * genuine differentiation. Kept this page single-region instead.
 *
 * No image for the block-printing workshop or puppet show days — no
 * verified photo of either exists in the repo, so both are described in
 * text only rather than reusing an unrelated or generic image.
 */
export const culturalTours: ExperienceContent = {
  slug: "cultural-tours",
  name: "Cultural Tours",
  tagline: "Jaipur & Pushkar's Living Traditions · 5 Days",
  metaTitle: "Rajasthan Cultural Tour | Jaipur Bazaars, Puppet Shows & Pushkar",
  metaDescription:
    "A 5-day cultural tour of Jaipur and Pushkar built around living traditions rather than monuments — bustling bazaars, a puppet show, folk music, and a hands-on block-printing workshop.",
  heroImage: "/images/destinations/jaipur-hawa-mahal.webp",
  heroImageAlt: "Hawa Mahal and street life in Jaipur's old city",
  heroHeadline: "Cultural Tours: Rajasthan's Living Traditions",
  heroSubheadline:
    "Less about forts and more about the culture still being lived in front of them — bazaars, puppetry, folk music and a hands-on craft workshop across Jaipur and Pushkar.",
  overview:
    "A cultural tour of India means something different to almost everyone who asks for one, so this itinerary picks a specific, deliberate angle: living culture over monument sightseeing. Rather than another day of forts and palaces — genuinely worthwhile, but covered thoroughly elsewhere in our itineraries — this tour spends five days in Jaipur and Pushkar on the traditions still actively practised there today. That means real time in Jaipur's working bazaars, where jewellers, textile sellers and spice merchants have traded in the same lanes for generations rather than existing as a tourist reconstruction. It means an evening with a traditional Rajasthani puppet show, a centuries-old storytelling art form using wooden marionettes called kathputlis, and a folk music performance by Manganiyar or Langa musicians, hereditary communities who have passed their repertoire down for generations. And it means a genuine hands-on introduction to block printing, the hand-carved wooden stamp technique behind much of the textile you'll see for sale throughout Rajasthan, in a workshop where you print your own fabric rather than just watching someone else's. Pushkar adds a different register entirely — a small pilgrimage town built around a sacred lake, with its own bazaar culture shaped by generations of camel traders and pilgrims rather than jewellers and textile merchants.",
  quickFacts: [
    { label: "Duration", value: "5 Days / 4 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Jaipur",
      description:
        "Private airport transfer to your hotel in Jaipur. With the rest of the day free to rest after travelling, an optional early evening walk through the old walled city introduces the bazaar culture this trip is built around, ahead of two full days exploring it properly.",
    },
    {
      title: "Day 2 — Jaipur's Living Bazaars",
      description:
        "A full day in Jaipur's old city bazaars, each historically specialised in a different trade that continues today — Johari Bazaar for jewellery and gemstones, Bapu Bazaar for textiles and traditional Rajasthani footwear, and Chandpole Bazaar for marble and stone carving. The walk takes in Hawa Mahal, the 'Palace of Winds,' built in 1799 specifically so royal women could watch the street life and processions below without being seen themselves — a building that was, from the start, designed around observing exactly the kind of everyday bazaar culture you'll be walking through.",
      image: "/images/destinations/jaipur-hawa-mahal.webp",
      imageAlt: "Hawa Mahal and street life in Jaipur's old city",
    },
    {
      title: "Day 3 — Block Printing Workshop, Puppet Show & Folk Music",
      description:
        "A morning hands-on block-printing workshop, learning the hand-carved wooden stamp technique used across Rajasthan's textile industry for centuries, from mixing natural dyes to printing your own piece of fabric to take home. In the evening, a traditional Rajasthani puppet show — kathputli, a storytelling art form using wooden string marionettes dressed in traditional Rajasthani costume, performed to live folk music — followed by a Manganiyar or Langa folk music performance, played by hereditary musician communities whose repertoire has been passed down for generations rather than learned formally.",
    },
    {
      title: "Day 4 — Drive to Pushkar",
      description:
        "A half-day drive to Pushkar, a small pilgrimage town built around a lake considered sacred in Hindu tradition and ringed by 52 bathing ghats. With the afternoon free to settle in, an evening walk through Pushkar's own bazaar — smaller and more bohemian than Jaipur's, shaped by generations of pilgrims and, once a year, the camel and livestock traders who arrive for the Pushkar Camel Fair.",
    },
    {
      title: "Day 5 — Pushkar's Ghats & Departure",
      description:
        "A quiet morning at Pushkar Lake's ghats, watching the town's daily rhythm of pilgrims bathing and performing rituals along the water — a genuinely different pace from Jaipur's bustle, and a fitting close to a trip built around culture as it's actually lived rather than displayed. A private transfer to Jaipur for your onward or return flight follows, five days of living tradition behind you.",
      image: "/images/destinations/pushkar-bazaar.webp",
      imageAlt: "Pushkar's market street, lit up in the evening",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice in Jaipur",
    "1 night in a hotel of your choice in Pushkar",
    "Daily breakfast",
    "Block-printing workshop with materials included",
    "Puppet show and folk music performance tickets",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide throughout",
  ],
  exclusions: [
    "Flights (international and any domestic segments you choose to add)",
    "Monument entry fees (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Living Culture, Not Just Monuments",
      description:
        "Working bazaars, a puppet show, folk music and a hands-on craft workshop — traditions still actively practised, not sights behind rope barriers.",
    },
    {
      title: "Print Your Own Fabric",
      description:
        "A genuine hands-on block-printing workshop, learning the technique behind much of Rajasthan's textile trade rather than only watching it demonstrated.",
    },
    {
      title: "Two Very Different Bazaar Cultures",
      description:
        "Jaipur's centuries-old trade bazaars and Pushkar's smaller, pilgrim-and-trader market town, in one connected trip.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make walking Jaipur's bazaars and Pushkar's ghats genuinely comfortable. If your dates allow it, timing this trip around the Pushkar Camel Fair (usually October or November) adds an entirely different layer of cultural activity to the Pushkar leg specifically.",
  },
  relatedDestinations: [
    {
      name: "Jaipur",
      tagline: "The Pink City",
      description: "Amber Fort, City Palace, Hawa Mahal and the bazaars of the old walled city.",
      href: "/destinations/jaipur",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Rajasthan",
      tagline: "Land of Kings",
      description: "Forts, palaces and desert citadels, for the wider region beyond Jaipur and Pushkar.",
      href: "/destinations/rajasthan",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "What is kathputli, and is it worth seeing?",
      answer:
        "Kathputli is Rajasthan's traditional string-puppet storytelling art form, using wooden marionettes dressed in miniature traditional costume, performed to live folk music. It's genuinely worth seeing — the puppeteers' technical skill is considerable, and most shows are lively enough to hold interest even without following every word of the story being told.",
    },
    {
      question: "Do we need any prior skill for the block-printing workshop?",
      answer:
        "No — the workshop is designed for complete beginners, and the artisans running it guide you through every step from choosing a stamp pattern to mixing dye and printing your own fabric. You'll take home a genuine piece of your own printed textile by the end of the session.",
    },
    {
      question: "Is this itinerary suitable if we've already done a Rajasthan tour?",
      answer:
        "Yes — this is deliberately light on forts and palaces, which most Rajasthan itineraries already cover thoroughly, and focuses instead on bazaars, crafts and performing arts most visitors don't get dedicated time for. It works well as a second Rajasthan trip or an add-on to a first one.",
    },
    {
      question: "When is the best time to combine this with the Pushkar Camel Fair?",
      answer:
        "The fair usually falls in October or November, timed to the Hindu lunar calendar, so exact dates shift each year. Tell us your travel window and we'll confirm whether it lines up, since the fair genuinely transforms Pushkar's bazaar and lakefront for its duration.",
    },
    {
      question: "How much walking does this tour involve?",
      answer:
        "A fair amount, particularly on the Jaipur bazaar day — the lanes are narrow and best explored on foot rather than by vehicle. Comfortable, closed footwear is worth packing, though the pace throughout is unhurried rather than demanding.",
    },
  ],
  relatedExperiences: [
    {
      name: "Festival Tours",
      tagline: "Time It Right",
      description: "The Pushkar Camel Fair in full swing, alongside Diwali, Holi and other real celebrations to plan a trip around.",
      href: "/experiences/festival-tours",
      image: "/images/packages/jaipur-bikaner-jaisalmer-jodhpur-udaipur-pushkar.webp",
      imageAlt: "Traditional Rajasthani performers at the Pushkar Camel Fair",
    },
    {
      name: "Palace & Fort Tours",
      tagline: "Amber, Kumbhalgarh, Mehrangarh & Jaisalmer",
      description: "For the monument side of Rajasthan this trip deliberately sets aside — forts and palaces across four cities.",
      href: "/experiences/palace-fort-tours",
      image: "/images/destinations/mehrangarh-fort-jodhpur.webp",
      imageAlt: "Mehrangarh Fort towering above Jodhpur's blue-washed old town",
    },
    {
      name: "Desert Safari",
      tagline: "The Thar Desert",
      description: "Camel safaris and overnight camping outside Jaisalmer, for more desert culture beyond Pushkar's bazaar.",
      href: "/experiences/desert-safari",
      image: "/images/destinations/jaisalmer-desert.webp",
      imageAlt: "Camel caravan crossing the Thar Desert dunes near Jaisalmer",
    },
  ],
  draftPendingReview: false,
};
