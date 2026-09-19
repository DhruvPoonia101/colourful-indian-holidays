import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * Image note: "bandhavgarh-fort.webp" is byte-for-byte identical to
 * "sariska-fort.webp" (confirmed via checksum) — already used elsewhere on
 * the site as Sariska's fort. Not used here to avoid a provable
 * inconsistency; only genuine, distinct wildlife/landscape photos are used.
 */
export const tigerSafariTours: ExperienceContent = {
  slug: "tiger-safari-tours",
  name: "Tiger Safari Tours",
  tagline: "Bandhavgarh, Kanha & Pench · 7 Days",
  metaTitle: "Tiger Safari Tour Package | Bandhavgarh, Kanha & Pench, Madhya Pradesh",
  metaDescription:
    "A private 7-day tiger safari across Madhya Pradesh's three best parks — Bandhavgarh's high tiger density, Kanha's sal forests, and Pench's rolling terrain.",
  heroImage: "/images/destinations/bandhavgarh-tiger.webp",
  heroImageAlt: "Two tigers at a waterhole, Bandhavgarh National Park",
  heroHeadline: "Madhya Pradesh: India's Tiger Country",
  heroSubheadline:
    "A dedicated safari circuit through three of India's best tiger reserves — for travellers who want genuinely strong sighting odds rather than a single park visit tacked onto a heritage circuit.",
  overview:
    "Rajasthan's Ranthambore and Sariska are the tiger reserves most first-time visitors hear about, largely because they pair naturally with a Jaipur-based heritage circuit. Madhya Pradesh's parks get less attention internationally despite consistently ranking among India's best for tiger density and sighting odds — Bandhavgarh in particular is often cited as having the highest concentration of tigers of any reserve in the country. This tour is built entirely around wildlife rather than combining safaris with forts and palaces: three parks, six safaris, and a genuinely different landscape at each stop, from Bandhavgarh's sal and bamboo forest to Kanha's rolling grassland, the inspiration for Rudyard Kipling's *The Jungle Book*.",
  quickFacts: [
    { label: "Duration", value: "7 Days / 6 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Nov – Apr" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive & Drive to Bandhavgarh",
      description:
        "A flight into Jabalpur, the nearest major airport, followed by a roughly 4-hour drive to Bandhavgarh National Park through increasingly rural Madhya Pradesh countryside dotted with small farming villages. Private transfer directly to your lodge, with the rest of the day free to rest after travelling given the combined flight and drive. Bandhavgarh is consistently cited as having one of the highest tiger densities of any reserve in India, a reputation built on genuinely strong sighting statistics rather than marketing, and this tour deliberately gives it two full safari days to make the most of those odds rather than a single rushed visit.",
    },
    {
      title: "Day 2 — Full Day of Bandhavgarh Safaris",
      description:
        "Morning and afternoon jeep safaris into Bandhavgarh's core zone, a landscape of sal and bamboo forest broken up by open grassland and rocky outcrops, historically the private hunting ground of the Maharajas of Rewa before its designation as a national park in 1968 and still scattered with the ruins of an ancient hilltop fort. Each safari is led by a naturalist guide trained to read pug marks and alarm calls from deer and langurs, genuinely improving the odds of a sighting beyond simply driving a fixed loop. Beyond tigers, the park holds leopards, sloth bears, and over 250 recorded bird species, making even a quieter safari genuinely worthwhile.",
      image: "/images/destinations/bandhavgarh-tiger.webp",
      imageAlt: "Two tigers at a waterhole, Bandhavgarh National Park",
    },
    {
      title: "Day 3 — Bandhavgarh to Kanha",
      description:
        "A final morning safari to make the most of Bandhavgarh before checking out, then a roughly 5 to 6 hour drive to Kanha National Park, Madhya Pradesh's largest tiger reserve and the landscape widely credited as Rudyard Kipling's inspiration for *The Jungle Book*. The drive itself passes through genuine rural Madhya Pradesh countryside rather than highway the whole way, a scenic transition between the two parks with small villages and farmland visible along the route. Arrive in the evening with time to settle into your lodge ahead of tomorrow's full safari day, and to compare first impressions of the two parks.",
    },
    {
      title: "Day 4 — Full Day of Kanha Safaris",
      description:
        "Morning and afternoon jeep safaris through Kanha's rolling sal forest and open meadows, genuinely different terrain from Bandhavgarh's more rugged, rocky landscape and considerably more open in places, making for easier long-distance sightings. Kanha is also home to the barasingha, or swamp deer, a species brought back from the edge of extinction through conservation efforts centred specifically on this park, now considered one of India's clearer conservation success stories. In between safaris, a visit to the park's interpretation centre and museum, with taxidermy displays and information boards covering the reserve's ecology and conservation history, a worthwhile addition for context beyond the safaris themselves.",
      image: "/images/destinations/kanha-museum.webp",
      imageAlt: "Kanha National Park's interpretation centre and museum",
    },
    {
      title: "Day 5 — Kanha to Pench",
      description:
        "A final morning safari at Kanha before a roughly 3 to 4 hour drive to Pench National Park, straddling the Madhya Pradesh–Maharashtra border and named for the Pench River running through it. Pench shares its name and setting with Rudyard Kipling's Mowgli stories in a different way from Kanha — this park is often cited as the more specific geographic setting, adding a genuine literary thread across two of this trip's three stops for anyone interested in the connection rather than just the wildlife alone. Arrive in the evening with time to settle in before tomorrow's safaris and the trip's final full day in the field.",
      image: "/images/destinations/pench-river.webp",
      imageAlt: "The Pench River running through Pench National Park",
    },
    {
      title: "Day 6 — Full Day of Pench Safaris",
      description:
        "Morning and afternoon jeep safaris through Pench's mixed teak and bamboo forest, genuinely different again from both Bandhavgarh and Kanha, with rolling hills and the Pench River itself running through several safari zones, adding water-based sightings to the trip's final park. The park has a smaller, less-visited reputation than Bandhavgarh or Kanha, which often translates into a quieter, less crowded safari experience even during peak season when the other two parks can feel busier. Beyond tigers, Pench holds a healthy population of wild dogs, a species increasingly rare across much of India's other reserves, alongside leopards and a wide range of resident and migratory birdlife.",
      image: "/images/destinations/pench-tiger-safari.webp",
      imageAlt: "A wild tiger at Pench National Park",
    },
    {
      title: "Day 7 — Departure",
      description:
        "A final morning safari if your schedule allows, or a relaxed morning at your lodge, before a roughly 2-hour drive to Nagpur for your onward or international departure flight. Seven days and six safaris across three genuinely different Madhya Pradesh landscapes, most travellers describe this trip as delivering a stronger overall sense of India's tiger reserves than a single park visit ever could, given how differently each of the three parks actually looks and feels on the ground, from Bandhavgarh's rocky outcrops through Kanha's open grassland to Pench's river-cut forest, a genuinely comprehensive introduction to Indian wildlife travel.",
    },
  ],
  inclusions: [
    "2 nights at a lodge of your choice near Bandhavgarh",
    "2 nights at a lodge of your choice near Kanha",
    "2 nights at a lodge of your choice near Pench",
    "All meals at each lodge",
    "6 jeep safaris across the three parks (2 per park)",
    "Private air-conditioned vehicle for all road transfers",
    "Naturalist guide for each safari",
  ],
  exclusions: [
    "Flights to and from Jabalpur or from Nagpur",
    "National park entry fees and camera fees (paid locally)",
    "Private (non-shared) jeep upgrade, if requested (paid locally, arranged on request)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Three Genuinely Different Landscapes",
      description:
        "Bandhavgarh's rocky sal forest, Kanha's rolling grassland, and Pench's teak and bamboo hills offer real variety across a single trip.",
    },
    {
      title: "India's Highest Tiger Density",
      description:
        "Bandhavgarh is consistently cited as having among the strongest sighting odds of any Indian reserve, and this itinerary gives it two full days.",
    },
    {
      title: "The Jungle Book's Real Setting",
      description:
        "Both Kanha and Pench are linked to Rudyard Kipling's stories, a genuine literary thread running through the trip for anyone interested.",
    },
  ],
  bestTimeToVisit: {
    heading: "November–April is Best",
    note: "Cooler temperatures from November through February make safaris genuinely comfortable, while March and April bring hotter days that often push tigers toward waterholes, sometimes improving sighting odds despite the heat. Most Madhya Pradesh parks close for the monsoon between roughly July and September.",
  },
  relatedDestinations: [
    {
      name: "Bandhavgarh",
      tagline: "India's Highest Tiger Density",
      description: "A former royal hunting ground now consistently ranked among India's best reserves for tiger sightings.",
      href: "/destinations/bandhavgarh",
      image: "/images/destinations/bandhavgarh-tiger.webp",
      imageAlt: "Two tigers at a waterhole, Bandhavgarh National Park",
    },
    {
      name: "Kanha",
      tagline: "The Jungle Book's Inspiration",
      description: "Rolling sal forest and grassland, widely credited as Kipling's inspiration for The Jungle Book.",
      href: "/destinations/kanha",
      image: "/images/destinations/kanha-tiger-safari.webp",
      imageAlt: "A wild tiger at Kanha National Park",
    },
    {
      name: "Pench",
      tagline: "A Quieter Tiger Reserve",
      description: "Teak and bamboo forest along the Pench River, less crowded than Bandhavgarh or Kanha.",
      href: "/destinations/pench",
      image: "/images/destinations/pench-tiger-safari.webp",
      imageAlt: "A wild tiger at Pench National Park",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Are tiger sightings genuinely more likely here than in Rajasthan?",
      answer:
        "Bandhavgarh in particular is consistently cited among India's highest tiger-density reserves, generally considered stronger odds than Sariska and comparable to or better than Ranthambore, though no reputable operator can guarantee a sighting anywhere, since these are wild animals.",
    },
    {
      question: "Is this trip too safari-heavy without any heritage sightseeing?",
      answer:
        "It's deliberately built this way for travellers who specifically want a wildlife-focused trip; if you'd like to combine tigers with forts and palaces, our Rajasthan Wildlife Safari or Wildlife Tours packages pair Ranthambore with Jaipur or Udaipur instead.",
    },
    {
      question: "How much driving is involved between the three parks?",
      answer:
        "A genuine amount — roughly 5 to 6 hours between Bandhavgarh and Kanha, and 3 to 4 hours between Kanha and Pench — though the routes pass through real Madhya Pradesh countryside rather than featureless highway, which most travellers find scenic rather than tedious.",
    },
    {
      question: "Can we do just one or two of the three parks instead of all three?",
      answer:
        "Yes — this itinerary is a starting template, and we can build a shorter version focused on Bandhavgarh alone, or Bandhavgarh and Kanha together, if a full three-park circuit doesn't suit your available days.",
    },
    {
      question: "Can we upgrade to a private, non-shared jeep?",
      answer:
        "Yes, at each park — let us know when planning your trip and we'll quote the difference; a private jeep means not sharing the vehicle with other travellers on the same safari.",
    },
  ],
  relatedExperiences: [
    {
      name: "Desert Safari",
      tagline: "Camel Camps & the Thar Desert · 3 Days",
      description: "A completely different kind of Indian safari, built around camel treks and desert camps instead of tigers.",
      href: "/experiences/desert-safari",
      image: "/images/destinations/jaisalmer-desert.webp",
      imageAlt: "Camel caravan crossing the Thar Desert dunes near Jaisalmer",
    },
    {
      name: "Rajasthan Palace Honeymoon",
      tagline: "Two Palace Cities · 7 Days",
      description: "For couples who'd rather spend a week in Rajasthan's heritage hotels than in a safari jeep.",
      href: "/experiences/rajasthan-palace-honeymoon",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Kashmir Honeymoon",
      tagline: "Dal Lake, Houseboats & Snow-Capped Peaks · 5 Days",
      description: "A genuinely different kind of Indian trip entirely, built around lakes and mountains rather than wildlife.",
      href: "/experiences/kashmir-honeymoon",
      image: "/images/destinations/Srinagar-3.webp",
      imageAlt: "Houseboats on Dal Lake with snow-capped mountains behind, Srinagar",
    },
  ],
  draftPendingReview: false,
};
