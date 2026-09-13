import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const jaipurCityTour: PackageContent = {
  slug: "jaipur-city-tour",
  name: "Jaipur City Tour",
  tagline: "The Pink City in Depth · 4 Days",
  metaTitle: "Jaipur City Tour Package | Amber Fort, City Palace & Hawa Mahal",
  metaDescription:
    "A private 4-day Jaipur city tour — Amber Fort, City Palace, Hawa Mahal, Jantar Mantar and the old city's bazaars, at a relaxed pace with a private guide throughout.",
  heroImage: "/images/destinations/amber-fort-jaipur.webp",
  heroImageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  heroHeadline: "Jaipur: The Pink City, Properly Explored",
  heroSubheadline:
    "A focused 4-day tour of Jaipur alone — for travellers who'd rather see one city well than rush through several.",
  overview:
    "Most first-time visitors see Jaipur as a single day squeezed into a longer Golden Triangle circuit, and it rarely feels like enough. This tour is built for travellers who want the opposite: a full, unhurried look at the Pink City on its own terms, without a bus waiting to leave for Agra the next morning. Four days is enough to see Amber Fort properly rather than as a two-hour dash, to wander the old city's bazaars without a schedule pressing on you, and to add a few of Jaipur's quieter sights — the step-well at Panna Meena Ka Kund, the Jal Mahal at sunset — that a standard itinerary usually skips entirely.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Jaipur",
      description:
        "Private transfer from Jaipur airport or railway station to your hotel, with the rest of the day free to rest after travelling. If you arrive with energy to spare, your guide can suggest an easy first outing — a walk through the old city's Johari Bazaar for gemstones and jewellery, or a sunset visit to the Jal Mahal, the palace that appears to float in the middle of Man Sagar Lake, best seen from the road along its eastern edge as the light turns gold. Jaipur's traffic and crowds can feel disorienting on a first evening, which is exactly why this tour keeps the arrival day deliberately light — no monuments to rush to, just a gentle introduction to the city's colour, noise and street food before the real sightseeing begins tomorrow. Ask your guide about dinner recommendations near your hotel if you'd rather stay local for the night.",
    },
    {
      title: "Day 2 — Amber Fort & the Old City",
      description:
        "A full day built around Amber Fort, the honey-coloured hilltop fortress that was the seat of Rajput power before Jaipur itself was built, with sweeping views over Maota Lake below. Rather than the rushed hour most itineraries allow, this visit takes its time — the Sheesh Mahal's mirrored ceiling, designed so a single candle flame multiplies into a thousand points of light, the Sukh Niwas's marble water channels built as an early form of natural air conditioning, and the fort's less-visited upper courtyards that most day-trippers never reach. In the afternoon, head into the walled old city for the City Palace complex, still partly home to Jaipur's former royal family, and the Jantar Mantar, an 18th-century astronomical observatory with instruments accurate to within seconds — the largest sundial here still tells time correctly today, a genuinely remarkable feat of 300-year-old engineering worth pausing to actually understand rather than photographing and moving on.",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      title: "Day 3 — Hawa Mahal, Bazaars & Step-Wells",
      description:
        "Start at Hawa Mahal, the honeycomb pink façade built so the palace women could watch street life below unseen through 953 small carved windows — best photographed from a rooftop café across the road rather than up close, since the building itself is only a few metres deep behind that famous front wall. From there, a slower day through Jaipur's specialist bazaars: Bapu Bazaar for block-printed textiles, Chandpole for handicrafts and marble carvings, and a stop at a working blue pottery workshop if you're interested in how the distinctive cobalt-and-white ceramics are actually made, a craft brought to Jaipur from Persia via Delhi centuries ago and still practised by only a handful of family workshops today. In the afternoon, visit Panna Meena Ka Kund, a striking symmetrical step-well a short drive from Amber Fort with a genuinely photogenic geometric staircase pattern that most standard Jaipur itineraries never include at all.",
      image: "/images/destinations/jaipur-hawa-mahal.webp",
      imageAlt: "Hawa Mahal, the Palace of Winds, Jaipur",
    },
    {
      title: "Day 4 — Nahargarh Fort & Departure",
      description:
        "A morning visit to Nahargarh Fort, perched on the Aravalli hills above the city with the best panoramic view of Jaipur anywhere — worth the early start for the cooler air and quieter fort before midday, and for the way the Pink City's terracotta rooftops spread out below in the morning light. Built in 1734 as part of the city's defensive ring alongside Amber and Jaigarh forts, Nahargarh sees far fewer visitors than either despite the view being arguably the better of the three. Return to the city for a final walk through any bazaar you'd like to revisit, or a last coffee at a rooftop café overlooking the Pink City's skyline, before your private transfer to the airport or railway station for departure. Four days in, most travellers leave having genuinely understood Jaipur rather than just having seen it — a meaningfully different outcome than the single rushed day most itineraries allow.",
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
    "Flights or train tickets to and from Jaipur",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Camera fees at monuments (paid locally)",
    "Elephant or jeep ride up to Amber Fort (arranged on request, paid locally)",
  ],
  highlights: [
    {
      title: "Amber Fort Without Rushing",
      description:
        "A proper half-day rather than the two-hour dash most Golden Triangle itineraries allow, including courtyards and details usually skipped entirely.",
    },
    {
      title: "The Sights Most Itineraries Miss",
      description:
        "Panna Meena Ka Kund's step-well and Nahargarh Fort's hilltop views rarely make it into a standard one-day Jaipur stop.",
    },
    {
      title: "A Genuinely Relaxed Pace",
      description:
        "No onward city waiting the next morning — four days means bazaars, workshops and viewpoints without a schedule pressing on you.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry mornings and warm afternoons make Amber Fort and the old city's walking tours genuinely comfortable. April to June turns hot, and the July–September monsoon brings humidity and occasional heavy rain.",
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
      description: "Forts, palaces and desert citadels across six essential cities.",
      href: "/destinations/rajasthan",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is 4 days too long for just Jaipur?",
      answer:
        "Not at all — most visitors are surprised how much Jaipur actually holds once you're not rushing between Delhi and Agra too. Four days gives real time for Amber Fort, the old city and a couple of quieter sights standard itineraries skip.",
    },
    {
      question: "Can we ride an elephant or jeep up to Amber Fort?",
      answer:
        "A jeep ride is the more commonly available and comfortable option; elephant rides operate on a limited basis and welfare standards vary, so we can discuss the options honestly when planning your visit.",
    },
    {
      question: "Is this tour suitable if we've already done a Golden Triangle trip before?",
      answer:
        "Yes — this is specifically designed for exactly that: travellers who've seen Jaipur briefly before and want to go back and actually explore it properly.",
    },
    {
      question: "Can we extend this into a longer Rajasthan trip?",
      answer:
        "Yes — this pairs naturally with a Rajasthan Culture & Heritage Trail or the Grand Rajasthan Circuit. Let us know your available days and we'll adjust the itinerary accordingly.",
    },
    {
      question: "Is Nahargarh Fort worth the early start on the last day?",
      answer:
        "Yes — it sees far fewer visitors than Amber Fort despite arguably the better panoramic view over the city, and the cooler morning air makes the walk around the ramparts genuinely pleasant before the day's heat builds.",
    },
  ],
  relatedPackages: [
    {
      name: "Rajasthan Tours",
      tagline: "The Classic Circuit · 8 Days",
      description: "Jaipur as the starting point of a wider circuit through Jodhpur, Udaipur and Pushkar.",
      href: "/tours/rajasthan-tours-classic",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Golden Triangle Tour",
      tagline: "Delhi – Agra – Jaipur",
      description: "Combine Jaipur with Delhi and Agra for the classic first-time India circuit.",
      href: "/tours/golden-triangle-tour",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
  ],
  draftPendingReview: false,
};
