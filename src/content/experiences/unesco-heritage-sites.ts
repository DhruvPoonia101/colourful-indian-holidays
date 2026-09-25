import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * Differentiated from three routes that already touch UNESCO-listed sites:
 * - Golden Triangle / Taj Mahal Tours: visit the Taj Mahal and Agra Fort as
 *   part of a Delhi-Agra-Jaipur circuit, not organised around the UNESCO
 *   designation itself and without Delhi's own three UNESCO sites or any
 *   site outside North India.
 * - Palace & Fort Tours: two of its four forts (Jaisalmer, Kumbhalgarh) are
 *   themselves UNESCO-listed ("Hill Forts of Rajasthan"), but the page is
 *   framed around Rajput fort architecture specifically, not the UNESCO
 *   designation, and never leaves Rajasthan.
 * - Maharashtra Tour: already covers Ajanta and Ellora, but as one stop in
 *   a broader Maharashtra circuit (with Mumbai and Shirdi), not as part of
 *   a purpose-built, cross-country UNESCO itinerary.
 * This page is the only one organised purely around India's UNESCO World
 * Heritage List as the itinerary's actual theme, deliberately crossing four
 * states by air rather than staying in one region — closer in structure to
 * India Highlights (a flown, multi-region "greatest hits" itinerary) than
 * to any single-region tour.
 *
 * Only 4 of the 6 named sites have a real, verified photo in the repo
 * (Qutub Minar, Taj Mahal, Agra Fort, Ajanta Caves interior, Konark Sun
 * Temple — 5 total, see itinerary). Humayun's Tomb, Red Fort and Ellora
 * Caves are described in text only, with no image field on those days,
 * rather than reusing a wrong or generic photo for them. The existing
 * "fatehpur-sikri.webp" file was checked and is NOT Fatehpur Sikri (it
 * shows the Taj Mahal complex's own mosque) — Fatehpur Sikri is therefore
 * left out of this itinerary entirely rather than mislabelled or included
 * without a photo of its own.
 *
 * Flight legs are deliberately hedged rather than stated as direct where
 * connectivity is inconsistent: Delhi-Aurangabad has confirmed direct
 * flights (checked), but Aurangabad-Bhubaneswar does not reliably, so that
 * leg is described as "a flight, usually connecting through Hyderabad or
 * Mumbai" rather than claiming a direct route that may not exist.
 */
export const unescoHeritageSites: ExperienceContent = {
  slug: "unesco-heritage-sites",
  name: "UNESCO Heritage Sites",
  tagline: "India's World Heritage Highlights · 8 Days",
  metaTitle: "India UNESCO World Heritage Tour | Taj Mahal, Ajanta, Ellora & Konark",
  metaDescription:
    "An 8-day tour built around India's UNESCO World Heritage List — Delhi's three listed monuments, the Taj Mahal, Ajanta and Ellora's rock-cut caves, and the Konark Sun Temple.",
  heroImage: "/images/destinations/agra-taj-mahal.webp",
  heroImageAlt: "Taj Mahal at sunrise, Agra",
  heroHeadline: "UNESCO Heritage Sites: India's World Heritage Highlights",
  heroSubheadline:
    "India has more UNESCO World Heritage Sites than almost any other country. This itinerary is built purely around that list, crossing four states by air to take in six of its most significant entries.",
  overview:
    "Most India itineraries include a UNESCO site or two without making much of it — the Taj Mahal on a Golden Triangle tour, or Ajanta and Ellora tacked onto a wider Maharashtra circuit. This tour flips that: the UNESCO World Heritage designation is the actual organising theme, not an incidental stop. It starts in Delhi, home to three separate listed sites within one city, moves to Agra for the Taj Mahal and Agra Fort, flies on to Aurangabad for the rock-cut cave temples of Ellora and Ajanta — two of the finest examples of Buddhist, Hindu and Jain cave architecture anywhere in the world — and ends in Odisha at the Konark Sun Temple, a 13th-century temple built in the shape of a colossal stone chariot. Six UNESCO-listed sites across four states, connected by domestic flights rather than long overland drives between regions that don't naturally sit on one road route.",
  quickFacts: [
    { label: "Duration", value: "8 Days / 7 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Delhi",
      description:
        "Private airport transfer to your hotel in Delhi, the starting point for a trip built around six of India's UNESCO World Heritage Sites. With the rest of the day free to rest after travelling, an optional gentle evening walk introduces the city ahead of a full day of sightseeing tomorrow.",
    },
    {
      title: "Day 2 — Delhi's Three UNESCO Sites",
      description:
        "A full day covering Delhi's own three UNESCO World Heritage entries, unusual for a single city. The Qutub Minar, a 73-metre minaret begun in 1192 and the tallest brick minaret in the world, covered in intricate carved verses from the Quran. Humayun's Tomb, built in 1570 for the Mughal emperor Humayun and widely considered the architectural blueprint the Taj Mahal would later follow — a garden tomb on a raised platform, symmetrical in every direction. And the Red Fort, the Mughal emperors' main residence for close to 200 years, its massive red sandstone walls once housing the Peacock Throne before it was carried off as war plunder in the 18th century.",
      image: "/images/destinations/delhi-qutub-minar.webp",
      imageAlt: "The Qutub Minar, Delhi",
    },
    {
      title: "Day 3 — Drive to Agra & Agra Fort",
      description:
        "A morning drive to Agra along the Yamuna Expressway, roughly three and a half hours from Delhi. In the afternoon, Agra Fort, a UNESCO-listed red sandstone fortress that served as the main Mughal residence before the capital moved to Delhi, and from whose walls the deposed emperor Shah Jahan is said to have spent his final years gazing at the tomb he'd built for his wife, visible in the distance.",
      image: "/images/destinations/agra-fort.webp",
      imageAlt: "Agra Fort's red sandstone gateway, Agra",
    },
    {
      title: "Day 4 — Taj Mahal at Sunrise & Fly to Aurangabad",
      description:
        "An early start for the Taj Mahal at sunrise, widely considered the best time to see it — soft light, thinner crowds, and the white marble shifting through shades of pink and gold as the sun rises. Built between 1632 and 1653 by Shah Jahan as a mausoleum for his wife Mumtaz Mahal, it remains the single most recognisable UNESCO site in India, and arguably the world. Afterward, a drive back to Delhi for an afternoon flight to Aurangabad, gateway to the second leg of this trip.",
    },
    {
      title: "Day 5 — Ellora Caves",
      description:
        "A full day at Ellora, roughly 30 kilometres from Aurangabad and one of the largest rock-cut monastery-temple cave complexes in the world, with 34 caves carved between the 6th and 10th centuries representing three religions side by side — Hindu, Buddhist and Jain — carved into the same basalt cliff face over four centuries of continuous use. The undoubted highlight is Cave 16, the Kailasa Temple, an entire temple carved downward out of a single rock face rather than built up from a foundation, using an estimated 200,000 tonnes of excavated stone.",
    },
    {
      title: "Day 6 — Ajanta Caves",
      description:
        "A full day at Ajanta, roughly two and a half hours from Aurangabad and older than Ellora by several centuries, with the earliest caves dating to around the 2nd century BCE. Unlike Ellora's multi-religious cave complex, Ajanta is purely Buddhist, and is best known internationally for its paintings rather than its carvings — fragile but genuinely extraordinary frescoes depicting the Jataka tales, among the oldest surviving Buddhist paintings anywhere in the world, painted in caves that were sealed and forgotten for roughly a thousand years before a British officer rediscovered them in 1819.",
      image: "/images/destinations/maharashtra-ajanta-caves.webp",
      imageAlt: "The interior of a rock-cut cave temple at Ajanta, Maharashtra",
    },
    {
      title: "Day 7 — Fly to Bhubaneswar",
      description:
        "A flight from Aurangabad to Bhubaneswar, usually connecting through Hyderabad or Mumbai depending on the day's schedules, covering the roughly 1,100 kilometres between Maharashtra and Odisha that would otherwise take well over a day by road. The rest of the day is free to arrive and settle in ahead of the trip's final UNESCO site tomorrow.",
    },
    {
      title: "Day 8 — Konark Sun Temple & Departure",
      description:
        "A morning excursion to the Konark Sun Temple, roughly an hour from Bhubaneswar, built in the mid-13th century in the form of a colossal stone chariot for the sun god Surya, complete with twelve pairs of intricately carved stone wheels and a team of seven horses. Though partially ruined today, what remains is still considered one of the finest examples of Kalinga architecture anywhere in Odisha. A private transfer to Bhubaneswar for your onward or return journey follows, eight days and six UNESCO World Heritage Sites behind you.",
      image: "/images/destinations/odisha-konark-sun-temple.webp",
      imageAlt: "The Konark Sun Temple, Odisha",
    },
  ],
  inclusions: [
    "2 nights in a hotel of your choice in Delhi",
    "1 night in a hotel of your choice in Agra",
    "2 nights in a hotel of your choice in Aurangabad",
    "1 night in a hotel of your choice in Bhubaneswar",
    "Daily breakfast",
    "Domestic flights: Delhi to Aurangabad, and Aurangabad to Bhubaneswar",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide throughout",
  ],
  exclusions: [
    "International and onward domestic flights",
    "Monument entry fees at each UNESCO site (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Six UNESCO Sites, Four States",
      description:
        "Delhi's three listed monuments, the Taj Mahal and Agra Fort, Ellora and Ajanta's cave temples, and the Konark Sun Temple, in one connected trip.",
    },
    {
      title: "A Temple Carved From One Rock",
      description:
        "Ellora's Kailasa Temple was excavated downward from a single basalt cliff face — an entire temple carved rather than built.",
    },
    {
      title: "Buddhist Paintings a Thousand Years Sealed",
      description:
        "Ajanta's frescoes, among the oldest surviving Buddhist paintings in the world, were rediscovered in 1819 after roughly a millennium hidden from view.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make sightseeing comfortable across all four states on this route, and are especially important at Konark and Aurangabad, both of which turn very hot from April onward. The July–September monsoon can also disrupt domestic flight schedules on the longer connecting legs.",
  },
  relatedDestinations: [
    {
      name: "Delhi",
      tagline: "India's Capital",
      description: "Mughal forts, colonial avenues, and the gateway to North India.",
      href: "/destinations/delhi",
      image: "/images/destinations/delhi-india-gate.webp",
      imageAlt: "India Gate at dusk, Delhi",
    },
    {
      name: "Agra",
      tagline: "Home of the Taj Mahal",
      description: "The Taj Mahal, Agra Fort, and the heart of the Golden Triangle.",
      href: "/destinations/agra",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Maharashtra",
      tagline: "Beyond Mumbai",
      description: "The UNESCO-listed Ajanta and Ellora Caves, Pune and the pilgrimage town of Shirdi.",
      href: "/destinations/maharashtra",
      image: "/images/destinations/maharashtra-ajanta-caves.webp",
      imageAlt: "A rock-cut stupa hall inside the Ajanta Caves, Maharashtra",
    },
    {
      name: "Odisha",
      tagline: "Temples in Stone",
      description: "Puri's Jagannath Temple and the Sun Temple at Konark.",
      href: "/destinations/odisha",
      image: "/images/destinations/odisha-konark-sun-temple.webp",
      imageAlt: "The Konark Sun Temple's chariot wheels, Odisha",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "How many UNESCO World Heritage Sites does India have?",
      answer:
        "India has over 40 UNESCO World Heritage Sites, more than almost any other country. This itinerary covers six of the most significant and accessible ones, chosen for how well they connect by domestic flight rather than trying to cover every listed site nationally.",
    },
    {
      question: "Why fly between regions instead of driving?",
      answer:
        "Delhi/Agra, Maharashtra and Odisha don't sit on one practical overland route — the distances involved would mean multiple full days lost to driving rather than sightseeing. Flying keeps each leg to a matter of hours so more of the trip is spent at the actual sites.",
    },
    {
      question: "What's the difference between Ellora and Ajanta?",
      answer:
        "Ellora is multi-religious (Hindu, Buddhist and Jain caves side by side) and better known for carving, especially the Kailasa Temple. Ajanta is purely Buddhist, older, and better known for its painted frescoes rather than its stone carving. Most visitors find the two genuinely complementary rather than repetitive.",
    },
    {
      question: "Is this itinerary suitable if we've already done the Golden Triangle?",
      answer:
        "Yes — Delhi and Agra are covered here specifically for their UNESCO listings rather than as a general first-time introduction, and the Ellora, Ajanta and Konark legs are genuinely new ground for most repeat visitors, even those who've already seen the Taj Mahal.",
    },
    {
      question: "Can this trip be shortened by dropping one region?",
      answer:
        "Yes — this itinerary is a template, and we regularly adapt it by dropping the Odisha leg for a shorter Delhi-Agra-Aurangabad version, or the Maharashtra leg for a Delhi-Agra-Odisha version instead. Tell us your available days and we'll rebuild the route around them.",
    },
  ],
  relatedExperiences: [
    {
      name: "Heritage Tours",
      tagline: "Khajuraho & Varanasi",
      description: "Another UNESCO-adjacent circuit — temple carving at Khajuraho and Buddhist heritage at Sarnath.",
      href: "/experiences/heritage-tours",
      image: "/images/destinations/khajuraho-western-group.webp",
      imageAlt: "The Western Group temples at Khajuraho, Madhya Pradesh",
    },
    {
      name: "Palace & Fort Tours",
      tagline: "Amber, Kumbhalgarh, Mehrangarh & Jaisalmer",
      description: "Two of these four forts are themselves UNESCO-listed, framed here around Rajput architecture specifically.",
      href: "/experiences/palace-fort-tours",
      image: "/images/destinations/mehrangarh-fort-jodhpur.webp",
      imageAlt: "Mehrangarh Fort towering above Jodhpur's blue-washed old town",
    },
    {
      name: "Tiger Safari Tours",
      tagline: "Bandhavgarh, Kanha & Pench",
      description: "A change of pace from monuments — dedicated tiger reserves, for travellers who want India's wildlife alongside its heritage.",
      href: "/experiences/tiger-safari-tours",
      image: "/images/destinations/bandhavgarh-tiger.webp",
      imageAlt: "Two tigers at a waterhole, Bandhavgarh National Park",
    },
  ],
  draftPendingReview: false,
};
