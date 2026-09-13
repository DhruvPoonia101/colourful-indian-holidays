import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const pushkarTour: PackageContent = {
  slug: "pushkar-tour",
  name: "Pushkar Tour",
  tagline: "The Holy Lake Town, Paired with Ajmer · 4 Days",
  metaTitle: "Pushkar Tour Package | Brahma Temple, Sacred Lake & Ajmer Dargah",
  metaDescription:
    "A private 4-day Pushkar tour — the sacred lake and Brahma Temple, paired with a day trip to Ajmer's Sufi shrine, at a relaxed pace with a private guide throughout.",
  heroImage: "/images/destinations/pushkar-lake-ghats.webp",
  heroImageAlt: "Pushkar Lake and its ghats at dusk",
  heroHeadline: "Pushkar & Ajmer: The Holy Town, Properly Explored",
  heroSubheadline:
    "A focused 4-day tour built around Pushkar's sacred lake, paired with nearby Ajmer's Sufi shrine — a genuinely different register from Rajasthan's forts and palaces.",
  overview:
    "Pushkar is usually a single overnight stop bolted onto the end of a longer Rajasthan circuit, just enough time for the lake and the Brahma Temple before moving on. That's a reasonable amount of time for the town itself — Pushkar is small — but it undersells what the wider area actually offers, since Ajmer sits just 20 minutes away and holds one of the most important pilgrimage sites in the Islamic world, visited daily by people of every faith. This tour pairs the two deliberately: Pushkar's sacred lake and laid-back bazaar for its own slower, contemplative pace, and a full day in Ajmer for something genuinely different — living, everyday faith rather than another fort or palace.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Pushkar",
      description:
        "Private transfer from Ajmer's Kishangarh airport or Ajmer railway station, roughly 30 to 45 minutes to Pushkar, with the rest of the day free to rest after travelling. If you arrive with energy to spare, your guide can suggest an easy first outing — a walk along the lake's ghats as the evening arti begins, oil lamps and chanting drifting across the water in a smaller, more intimate version of the ceremonies held in Varanasi. Pushkar's pace is noticeably slower than anywhere else in Rajasthan from the moment you arrive, genuinely more like a small town than a tourist circuit stop, and this tour keeps the first evening deliberately unstructured to let that atmosphere register before the fuller days ahead. Ask your guide for a dinner recommendation near the lake if you'd like to make the most of the evening.",
    },
    {
      title: "Day 2 — Pushkar Sightseeing",
      description:
        "A full day in Pushkar, built entirely around its sacred lake, said in Hindu mythology to have formed where a lotus petal fell from Brahma's hand. Visit the Brahma Temple, one of the very few temples to the creator god anywhere in India despite Brahma's central place in Hindu cosmology, its distinctive red spire visible from much of the town, before a walk around the lake's 52 bathing ghats, each with its own name and significance to different pilgrim groups. The town's compact bazaar is worth a slow browse too, known for silver jewellery, block-printed textiles and a genuinely laid-back, almost bohemian atmosphere built up around decades of pilgrim and backpacker traffic side by side — a noticeably different shopping experience from Jaipur or Jodhpur's larger, busier markets, with far more room to browse without feeling rushed or pressured to buy.",
      image: "/images/destinations/pushkar-brahma-temple.webp",
      imageAlt: "The Brahma Temple, Pushkar",
    },
    {
      title: "Day 3 — Day Trip to Ajmer",
      description:
        "A short 20-minute drive over a hill pass to Ajmer, home to the Dargah of Khwaja Moinuddin Chishti — the tomb of a revered 12th-century Sufi saint, and one of the most important pilgrimage sites in the Islamic world, visited daily by people of every faith regardless of their own religion. Your guide will help you navigate the shrine respectfully, including appropriate dress and where visitors of any background are welcome to enter, and can explain the significance of the annual Urs festival held here, which draws pilgrims from across the subcontinent. Afterwards, visit Ana Sagar Lake, an artificial lake commissioned in the 12th century with a series of marble pavilions added centuries later by Emperor Shah Jahan along its banks, before returning to Pushkar in the evening for a quieter final night by the water.",
    },
    {
      title: "Day 4 — Savitri Temple & Departure",
      description:
        "An early start for Savitri Temple, perched on a hilltop above Pushkar and reachable either by a steep walking trail or a cable car for those who'd rather skip the climb, with the best panoramic view over the lake, the town and the surrounding desert hills anywhere in the area. Dedicated to Brahma's consort Savitri, the temple is a genuinely peaceful spot in the cooler morning air, well before the day's heat and crowds build, and the walk up itself passes several smaller shrines worth a brief stop along the way. Return to Pushkar for a final walk through the bazaar or lakeside cafés before your private transfer back to Ajmer or Kishangarh for departure. Four days in, most travellers leave having experienced Pushkar and Ajmer as their own genuine destination, not simply a stopover between bigger Rajasthan cities.",
      image: "/images/destinations/pushkar.webp",
      imageAlt: "Pushkar town and lake from above",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice, twin-sharing",
    "Daily breakfast",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide throughout",
    "Monument entry fees as per itinerary",
    "All applicable hotel and transport taxes",
  ],
  exclusions: [
    "Flights or train tickets to and from Ajmer/Kishangarh",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Savitri Temple cable car ticket, if preferred over the walking trail (paid locally)",
    "Camera fees at monuments (paid locally)",
  ],
  highlights: [
    {
      title: "A Living Pilgrimage Site",
      description:
        "The Dargah of Khwaja Moinuddin Chishti in Ajmer is an active shrine visited daily by people of every faith, not a historical monument to walk past.",
    },
    {
      title: "One of the Only Brahma Temples in India",
      description:
        "Despite Brahma's importance in Hindu cosmology, temples dedicated to him are extremely rare — Pushkar's is one of the few anywhere in the country.",
    },
    {
      title: "A Genuinely Different Pace",
      description:
        "Pushkar and Ajmer trade forts and palaces for lakes, temples and everyday faith, a deliberately quieter register than the rest of Rajasthan.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cooler, drier weather makes lakeside walks and the Savitri Temple climb genuinely comfortable. April to June turns hot, and November's Pushkar Camel Fair brings much larger crowds and higher prices if you'd rather avoid them — or want to time your visit around it deliberately.",
  },
  relatedDestinations: [
    {
      name: "Rajasthan",
      tagline: "Land of Kings",
      description: "Forts, palaces and desert citadels across six essential cities.",
      href: "/destinations/rajasthan",
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
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is the Ajmer Dargah open to non-Muslim visitors?",
      answer:
        "Yes — the shrine welcomes pilgrims and visitors of all faiths and backgrounds. Your guide will advise on appropriate dress and etiquette so you can visit respectfully.",
    },
    {
      question: "Is 4 days too long for a town as small as Pushkar?",
      answer:
        "Pushkar alone might feel like a lot for four days, which is exactly why this tour pairs it with a full day in Ajmer — together they offer genuinely different experiences worth the time, rather than one small town stretched thin.",
    },
    {
      question: "Is alcohol available in Pushkar?",
      answer:
        "No — Pushkar is a sacred town and alcohol and non-vegetarian food are both prohibited within the town limits, a local rule worth knowing before arrival.",
    },
    {
      question: "Should we walk up to Savitri Temple or take the cable car?",
      answer:
        "The cable car is faster and easier, especially in warmer months; the walking trail takes 30 to 45 minutes and is a genuinely pleasant option in cooler weather if you don't mind the climb.",
    },
    {
      question: "Can we extend this into a longer Rajasthan trip?",
      answer:
        "Yes — this pairs naturally with the classic Rajasthan Tours circuit, which already includes Pushkar as its final stop, or with the Grand Rajasthan Circuit for a longer trip. Let us know your available days and we'll adjust accordingly.",
    },
  ],
  relatedPackages: [
    {
      name: "Rajasthan Tours",
      tagline: "The Classic Circuit · 8 Days",
      description: "Pushkar as the final stop of a wider circuit through Jaipur, Jodhpur and Udaipur.",
      href: "/tours/rajasthan-tours-classic",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Golden Triangle Tour with Ajmer & Pushkar",
      tagline: "8 Days",
      description: "Combine Pushkar and Ajmer with Delhi, Agra and Jaipur for a longer first-time India trip.",
      href: "/tours/golden-triangle-tour-ajmer-pushkar",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  draftPendingReview: false,
};
