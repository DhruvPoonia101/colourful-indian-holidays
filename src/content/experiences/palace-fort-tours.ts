import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * Deliberately differentiated from three existing routes that also touch
 * Rajasthan's forts and palaces, to avoid duplicating them:
 * - Rajasthan Tours (rajasthan-tours-classic): general first-time circuit,
 *   markets and culture included, not fort/palace-architecture specific.
 * - Rajasthan Culture & Heritage Trail: focused on havelis and living craft
 *   traditions (artisans, textiles), not primarily forts and palaces.
 * - Grand Rajasthan Circuit: six cities in 12 days, breadth over depth,
 *   and includes Ranthambore (wildlife) and Pushkar (pilgrimage) rather
 *   than staying purely on the fort/palace theme.
 * - Rajasthan Palace Honeymoon (an Experience, not this one): same two
 *   cities' palace hotels, but framed for couples over 7 days; this page
 *   is framed for history/architecture interest generally, runs 8 days,
 *   and adds Jodhpur and Jaisalmer.
 *
 * Route order is deliberately Jaipur -> Udaipur -> Jodhpur -> Jaisalmer
 * (not the more obvious Jaipur -> Jodhpur -> Jaisalmer -> Udaipur), because
 * the Jaisalmer-Udaipur leg is a genuinely long, awkward transfer (no direct
 * flight consistently available; ~570km by road). This order keeps every
 * transfer to a single reasonable day's drive: Jaipur-Udaipur (~400km, via
 * Kumbhalgarh), Udaipur-Jodhpur (~250km), Jodhpur-Jaisalmer (~285km).
 *
 * Kumbhalgarh's wall is deliberately NOT flatly asserted as "the second-
 * longest wall in the world" — that claim is widely repeated by tourism
 * bodies but is not independently verified (Guinness World Records lists it
 * under "Longest Fort Walls", not a global wall ranking). Phrased here as
 * an attributed, popularly-repeated claim instead of a stated fact.
 *
 * No day-3 image: the only Kumbhalgarh-labelled file already in the repo
 * (packages/jaipur-chittorgarh-udaipur-ranakpur-kumbhalgarh-jodhpur-pushkar.webp)
 * was visually checked and appears to show Chittorgarh's fort and water
 * tank, not Kumbhalgarh — so it's deliberately not used here to avoid
 * repeating a past mislabelled-image issue. Flagged for a real photo.
 */
export const palaceFortTours: ExperienceContent = {
  slug: "palace-fort-tours",
  name: "Palace & Fort Tours",
  tagline: "Four Signature Fortress Cities · 8 Days",
  metaTitle: "Rajasthan Palace & Fort Tour | Amber, Kumbhalgarh, Mehrangarh & Jaisalmer",
  metaDescription:
    "An 8-day tour built purely around Rajasthan's Rajput forts and palaces — Amber Fort, Kumbhalgarh's 'Great Wall of India', Mehrangarh, and the living fort of Jaisalmer.",
  heroImage: "/images/destinations/mehrangarh-fort-jodhpur.webp",
  heroImageAlt: "Mehrangarh Fort towering above Jodhpur's blue-washed old town",
  heroHeadline: "Palace & Fort Tours: Rajasthan's Rajput Strongholds",
  heroSubheadline:
    "Four fortress cities, one architectural tradition — hilltop forts built to withstand siege, and the palaces raised beside or within them once peace made room for beauty.",
  overview:
    "Most Rajasthan itineraries treat forts and palaces as one stop among many, alongside markets, camel rides and craft workshops. This one doesn't — it's built purely around the Rajput tradition of fortress architecture, moving between four cities where that tradition survives at its most complete: Jaipur's Amber Fort, Kumbhalgarh's extraordinary hilltop rampart, Jodhpur's Mehrangarh towering over the Blue City, and Jaisalmer's living sandstone fort rising straight out of the Thar Desert. Each city adds a genuinely different chapter — Amber shows Rajput defensive architecture softened by Mughal-era decorative influence, Kumbhalgarh shows pure military engineering at an almost absurd scale, Mehrangarh shows a fort and a still-occupied royal palace existing side by side, and Jaisalmer shows something none of the others do: a fort that people still actually live inside, rather than a monument preserved behind rope barriers.",
  quickFacts: [
    { label: "Duration", value: "8 Days / 7 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Jaipur",
      description:
        "Private airport transfer to your hotel in Jaipur, Rajasthan's capital and the first of four fortress cities on this route. The rest of the day is free to settle in after travelling, with an optional early evening walk through the old walled city's bazaars if you're not too tired — a gentle introduction before two more demanding days of fort-climbing ahead.",
    },
    {
      title: "Day 2 — Amber Fort & City Palace",
      description:
        "A morning at Amber Fort, built from 1592 onward on a hilltop above Maota Lake and the best surviving example of Rajput military architecture softened by later Mughal decorative influence — courtyards, mirrored halls and latticed windows built into what was, first and fundamentally, a defensive structure. In the afternoon, the City Palace in the heart of Jaipur itself, still partly home to the former royal family, where Chandra Mahal's ornate facade and the palace's courtyards show what Rajput architecture looked like once it moved from hilltop fortress to city residence.",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      title: "Day 3 — Drive to Udaipur via Kumbhalgarh Fort",
      description:
        "A full day's drive to Udaipur, broken by several hours at Kumbhalgarh Fort en route — the birthplace of Maharana Pratap and, at roughly 36 kilometres, the longest fortified wall in India, popularly described by Rajasthan Tourism and others as the second-longest continuous wall in the world after China's Great Wall, though no independent survey has confirmed that specific ranking. Built on a hilltop over 1,100 metres up, its rampart is wide enough for eight horses to ride abreast and encloses more than 360 temples within its walls, breached only once in its history, when the defenders' water supply ran out rather than through any weakness in the wall itself.",
    },
    {
      title: "Day 4 — Udaipur's City Palace & Lake Pichola",
      description:
        "A full day in Udaipur, starting at the City Palace — Rajasthan's largest palace complex, built up over nearly 400 years by successive Mewar rulers, its cream-coloured facade rising directly from Lake Pichola's eastern shore. In the afternoon, a boat ride on the lake itself for the view every Udaipur photograph is chasing: the City Palace on one side and the Lake Palace, a former royal summer residence now a hotel, seemingly floating on the water in the middle.",
      image: "/images/destinations/udaipur-city-palace.webp",
      imageAlt: "City Palace rising above Lake Pichola, Udaipur",
    },
    {
      title: "Day 5 — Drive to Jodhpur",
      description:
        "A half-day drive to Jodhpur, Rajasthan's second-largest city, known for the indigo-blue-washed houses of its old town, traditionally painted that colour to reflect heat and deter insects. With the afternoon free to arrive and settle in, an optional early evening visit to a viewpoint below Mehrangarh Fort, watching the blue city spread out beneath it as the light turns gold — the first proper look at the fort you'll spend the following day inside.",
    },
    {
      title: "Day 6 — Mehrangarh Fort & Umaid Bhawan Palace",
      description:
        "A full day exploring Mehrangarh, one of India's largest and best-preserved forts, built from 1459 on a hilltop rising 125 metres above the city and, unusually among Rajasthan's major forts, still owned and maintained by the former royal family rather than the state — which shows in the quality of its museum and restoration work. In the afternoon, Umaid Bhawan Palace, completed in 1943 and one of the largest private residences in the world, built partly as famine-relief employment for local stonemasons — part still a royal residence, part a heritage hotel, and part a small museum open to visitors.",
      image: "/images/destinations/jodhpur-umaid-bhawan.webp",
      imageAlt: "Umaid Bhawan Palace, Jodhpur, seen from above",
    },
    {
      title: "Day 7 — Drive to Jaisalmer",
      description:
        "A half-day drive across increasingly desert terrain to Jaisalmer, the westernmost of Rajasthan's major cities and only a short distance from the Pakistan border. As the fort comes into view — golden sandstone walls rising directly from the desert floor — you'll see immediately why it's nicknamed the Golden City, and why it's held up as something genuinely different from the other three forts on this trip: still a living, inhabited settlement rather than a preserved monument.",
    },
    {
      title: "Day 8 — Jaisalmer Fort & Departure",
      description:
        "A final morning inside Jaisalmer Fort itself, one of the very few 'living forts' left in the world, with roughly a quarter of the old city's population still residing within its walls among havelis, temples and shops that have operated continuously for centuries — a genuinely different way of experiencing a fort than walking through a roped-off museum. A stop at Patwon Ki Haveli, the most elaborate of the city's merchant mansions, rounds out the morning before a private transfer to Jaisalmer for your onward or return journey, eight days and four fortress cities behind you.",
      image: "/images/destinations/jaisalmer-fort.webp",
      imageAlt: "Jaisalmer Fort's golden sandstone walls at sunset",
    },
  ],
  inclusions: [
    "1 night in a hotel of your choice in Jaipur",
    "2 nights in a hotel of your choice in Udaipur",
    "2 nights in a hotel of your choice in Jodhpur",
    "2 nights in a hotel of your choice in Jaisalmer",
    "Daily breakfast",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide throughout",
  ],
  exclusions: [
    "Flights (international and any domestic segments you choose to add)",
    "Monument entry fees at each fort and palace (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Four Forts, One Tradition",
      description:
        "Amber, Kumbhalgarh, Mehrangarh and Jaisalmer, each showing a different stage of Rajput fortress and palace architecture in one connected route.",
    },
    {
      title: "The Great Wall of India",
      description:
        "Kumbhalgarh's roughly 36-kilometre rampart, popularly ranked among the longest fortified walls anywhere outside China.",
    },
    {
      title: "A Fort People Still Call Home",
      description:
        "Jaisalmer remains a genuine living fort, with residents, shops and temples inside its walls rather than a museum behind rope barriers.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make climbing all four forts genuinely comfortable, especially Jaisalmer, which turns very hot from April onward. The July–September monsoon can also make some of the longer drives between cities less predictable.",
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
      name: "Udaipur",
      tagline: "City of Lakes",
      description: "The Lake Palace floating on Lake Pichola, and the City Palace above it.",
      href: "/destinations/udaipur",
      image: "/images/destinations/udaipur-lake-palace.webp",
      imageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
    },
    {
      name: "Jodhpur",
      tagline: "The Blue City",
      description: "Mehrangarh Fort towering over a maze of indigo-washed old-town streets.",
      href: "/destinations/jodhpur",
      image: "/images/destinations/mehrangarh-fort-jodhpur.webp",
      imageAlt: "Mehrangarh Fort towering above Jodhpur's blue-washed old town",
    },
    {
      name: "Jaisalmer",
      tagline: "The Golden City",
      description: "A living sandstone fort on the edge of the Thar Desert, with camel safaris beyond.",
      href: "/destinations/jaisalmer",
      image: "/images/destinations/jaisalmer-fort.webp",
      imageAlt: "Jaisalmer Fort's golden sandstone walls at sunset",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is 8 days enough to see all four forts properly?",
      answer:
        "Yes — each city gets at least one full day, plus a half-day of arrival or departure sightseeing, which is enough to see each fort's major highlights without rushing. Kumbhalgarh is the exception, seen as a stop en route to Udaipur rather than with its own dedicated day, since a few hours covers its highlights well.",
    },
    {
      question: "How physically demanding is this tour?",
      answer:
        "Moderately — all four forts involve walking on uneven stone surfaces and some inclines, and Mehrangarh and Jaisalmer both involve a reasonable amount of walking to see fully. None require serious fitness, but comfortable, closed footwear makes a genuine difference across four different forts in eight days.",
    },
    {
      question: "Why does this route go to Udaipur before Jodhpur and Jaisalmer?",
      answer:
        "Purely for logistics — going Jaipur to Udaipur to Jodhpur to Jaisalmer keeps every transfer to a single comfortable day's drive. The alternative order would end with a very long Jaisalmer-to-Udaipur leg, which is better avoided than rushed.",
    },
    {
      question: "Can we stay inside a real palace hotel on this trip?",
      answer:
        "Yes, subject to availability and budget — several of these cities have genuine heritage palace hotels, including wings of Jaipur's and Udaipur's former royal residences. Tell us if this matters to you specifically and we'll build the hotel selection around it.",
    },
    {
      question: "Is Kumbhalgarh worth the detour if we've already seen three other forts?",
      answer:
        "Yes — it's a genuinely different experience from the other three, since it's less a single building than an entire fortified hill enclosing temples, water tanks and ruins across a vast area, best appreciated by walking a section of the wall itself rather than touring a palace interior.",
    },
  ],
  relatedExperiences: [
    {
      name: "Heritage Tours",
      tagline: "Khajuraho & Varanasi",
      description: "A different heritage tradition entirely — temple carving and Buddhist history, beyond Rajasthan.",
      href: "/experiences/heritage-tours",
      image: "/images/destinations/khajuraho-western-group.webp",
      imageAlt: "The Western Group temples at Khajuraho, Madhya Pradesh",
    },
    {
      name: "Rajasthan Palace Honeymoon",
      tagline: "Two Palace Cities, Built for Two",
      description: "The same palace-hotel appeal, focused on Jaipur and Udaipur alone and framed for couples.",
      href: "/experiences/rajasthan-palace-honeymoon",
      image: "/images/destinations/udaipur-lake-palace.webp",
      imageAlt: "Lake Palace floating on Lake Pichola, Udaipur",
    },
    {
      name: "Desert Safari",
      tagline: "The Thar Desert",
      description: "Camel safaris and overnight camping in the dunes outside Jaisalmer, extending this trip's final stop.",
      href: "/experiences/desert-safari",
      image: "/images/destinations/jaisalmer-desert.webp",
      imageAlt: "Camel caravan crossing the Thar Desert dunes near Jaisalmer",
    },
  ],
  draftPendingReview: false,
};
