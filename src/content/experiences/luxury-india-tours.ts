import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still
 * drafted content Dhruv should review for accuracy.
 *
 * Deliberately does NOT name specific commercial hotel brands (no Oberoi,
 * Taj, Rambagh Palace, etc.) as guaranteed inclusions — we can't verify
 * current rate agreements or partnerships with named luxury properties
 * from here, and naming a specific brand implies a business relationship
 * that may not exist. Follows the same "hotel of your choice" pattern
 * already used across every other package on this site, just specifying
 * the tier (heritage palace / 5-star category) rather than a named hotel.
 *
 * Differentiated from three existing routes that also touch luxury
 * hotels or palaces:
 * - Palace & Fort Tours: architecture and military-history framing,
 *   Rajasthan only, four cities, staying in palace hotels is secondary
 *   to the historical narrative.
 * - Rajasthan Palace Honeymoon / Taj Mahal Honeymoon / Udaipur Honeymoon /
 *   Kerala Backwaters Honeymoon: all explicitly framed for couples.
 * This page is the only one built for general luxury travellers (not
 * couples specifically, not an architecture deep-dive) spanning the
 * Golden Triangle plus Udaipur at the top hotel tier throughout, with
 * private guiding and exclusive-access framing as the actual point.
 *
 * Genuinely cross-sells Palace on Wheels (the sister company) as an
 * alternative or extension for travellers who want the luxury-train
 * experience specifically, rather than pretending that product doesn't
 * exist alongside this one.
 */
export const luxuryIndiaTours: ExperienceContent = {
  slug: "luxury-india-tours",
  name: "Luxury India Tours",
  tagline: "Delhi, Agra, Jaipur & Udaipur, Top-Tier Throughout · 10 Days",
  metaTitle: "Luxury India Tour | Delhi, Agra, Jaipur & Udaipur, Palace Hotels & Private Guides",
  metaDescription:
    "A 10-day luxury India itinerary staying exclusively at heritage palace and 5-star hotels — private guides, exclusive-access sightseeing, and Udaipur's Lake Palace views throughout.",
  heroImage: "/images/destinations/udaipur-lake-palace.webp",
  heroImageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
  heroHeadline: "Luxury India: The Golden Triangle & Udaipur, Elevated",
  heroSubheadline:
    "The classic Delhi-Agra-Jaipur circuit and Udaipur's lake city, built around the top hotel tier throughout and private access wherever it's genuinely available — not a budget itinerary with better rooms bolted on.",
  overview:
    "Most India itineraries treat the hotel as one line item among many. This one treats it as one of the actual points of the trip — every night is spent at a heritage palace hotel or top-tier 5-star property, private guides replace group tours at every stop, and sightseeing is timed deliberately around when a site is quietest rather than when a coach tour happens to arrive. This isn't the Golden Triangle with nicer rooms attached; it's a genuinely different pace and level of access built around the same four cities, plus Udaipur, that most first-time visitors to India already have on their list.",
  quickFacts: [
    { label: "Duration", value: "10 Days / 9 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Delhi",
      description:
        "A private welcome at the airport and transfer to a heritage or top-tier 5-star hotel in Delhi. With the rest of the day free to settle in after a long flight, an evening entirely your own before a full day of private sightseeing tomorrow.",
    },
    {
      title: "Day 2 — Delhi With a Private Guide",
      description:
        "A full day of Delhi's major sites — Humayun's Tomb, the Red Fort, and Qutub Minar among them — with a private guide and vehicle throughout, timed to reach each site early enough to avoid the largest tour-group crowds rather than following a fixed group schedule.",
    },
    {
      title: "Day 3 — Drive to Agra",
      description:
        "A private drive to Agra along the Yamuna Expressway, arriving at a hotel with a direct view of the Taj Mahal — a genuine and deliberate choice, not an incidental one, since watching the monument change colour through the afternoon and evening from your own room is part of what this tier of trip is for.",
    },
    {
      title: "Day 4 — The Taj Mahal at Dawn, on to Jaipur",
      description:
        "An early entry to the Taj Mahal at sunrise, when the site is at its quietest and the light is at its best, followed by Agra Fort before continuing to Jaipur. A private guide accompanies both monument visits, with the pace set by you rather than a coach schedule.",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      title: "Day 5 — Amber Fort & Jaipur's City Palace",
      description:
        "A morning at Amber Fort, with a jeep transfer up to the fort itself rather than the shared elephant queues most visitors join, followed by an afternoon at the City Palace, still partly home to Jaipur's former royal family, with a guide who can speak to the palace's continued royal connection rather than only its history.",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      title: "Day 6 — Jaipur at Your Own Pace",
      description:
        "A day built around your own interests rather than a fixed sightseeing list — options include a private shopping guide through Jaipur's gem and textile trade, a cooking demonstration with a local chef, or simply more time at leisure at your hotel. Tell us what genuinely interests you and we'll arrange it specifically.",
    },
    {
      title: "Day 7 — Fly to Udaipur",
      description:
        "A short flight from Jaipur to Udaipur, arriving at a hotel on or overlooking Lake Pichola. With the afternoon free to settle in, an evening entirely at leisure to enjoy the lake views before a full day of sightseeing tomorrow.",
    },
    {
      title: "Day 8 — Udaipur's City Palace & a Private Sunset Boat",
      description:
        "A morning at Udaipur's City Palace, Rajasthan's largest palace complex, followed by a private evening boat on Lake Pichola timed specifically for sunset — the view every Udaipur photograph is chasing, with your own boat rather than a shared public ferry.",
    },
    {
      title: "Day 9 — Udaipur at Leisure",
      description:
        "A final full day with no fixed itinerary — a spa treatment at your hotel, a private walk through Udaipur's old town, or simply time to enjoy the lake views before departure. This trip's pace has been deliberately unhurried throughout, and the last full day is no exception.",
    },
    {
      title: "Day 10 — Departure",
      description:
        "A private transfer to Udaipur airport for your onward or return journey, ten days of India's classic circuit behind you, seen at a genuinely different pace and level of access than a standard itinerary allows.",
    },
  ],
  inclusions: [
    "2 nights in a heritage or 5-star hotel in Delhi",
    "1 night in a hotel with a direct Taj Mahal view, Agra",
    "3 nights in a heritage or 5-star hotel in Jaipur",
    "3 nights in a heritage or 5-star hotel on or overlooking Lake Pichola, Udaipur",
    "Daily breakfast",
    "Private, English-speaking guide at every sightseeing stop",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "Domestic flight, Jaipur to Udaipur",
    "One private sunset boat ride on Lake Pichola",
  ],
  exclusions: [
    "International and onward domestic flights",
    "Monument entry fees (paid locally)",
    "Lunches and dinners (unless noted)",
    "Spa treatments, shopping, and other personal expenses",
    "Travel insurance",
  ],
  highlights: [
    {
      title: "A Hotel With a Taj Mahal View",
      description:
        "A genuine, deliberate choice for the Agra night — not an upgrade offered as an afterthought.",
    },
    {
      title: "Private Access, Not a Group Schedule",
      description:
        "Every sightseeing stop runs on a private guide and vehicle, timed around when each site is actually quietest.",
    },
    {
      title: "A Private Sunset on Lake Pichola",
      description:
        "Your own boat, timed specifically for sunset, rather than a shared public ferry crossing.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, comfortable conditions suit this itinerary's unhurried pace across all four cities. If your dates allow it, ask us about a Palace on Wheels extension or add-on — our sister company's luxury train, for travellers who want the rail experience specifically alongside this itinerary's hotel-based approach.",
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
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "What makes this different from your standard Golden Triangle tour?",
      answer:
        "The hotel tier (heritage palace or top 5-star throughout, including a room with a direct Taj Mahal view), private guiding at every stop rather than shared tours, timing built around avoiding crowds, and genuinely private extras like a sunset boat on Lake Pichola. It covers similar ground to our classic Golden Triangle route but at a deliberately different pace and level of access.",
    },
    {
      question: "Can you name the specific hotels included?",
      answer:
        "We confirm exact properties once we know your travel dates and preferences, since availability at this tier changes seasonally. What we can commit to upfront is the tier — heritage palace or top 5-star category throughout, including a room with a direct Taj Mahal view in Agra.",
    },
    {
      question: "Can this itinerary be extended with a Palace on Wheels journey?",
      answer:
        "Yes — Palace on Wheels, our sister company's luxury train, is a genuine option to add either before or after this itinerary for travellers who want the rail experience specifically. Ask us about combining both when you enquire.",
    },
    {
      question: "Is this itinerary suitable for a family, or only couples?",
      answer:
        "It's built for any group size — families, solo travellers, or couples — rather than framed around romance specifically. If you're planning this as a honeymoon, our dedicated Rajasthan Palace Honeymoon or Taj Mahal Honeymoon itineraries lean further into that framing.",
    },
    {
      question: "How far in advance should we book?",
      answer:
        "2 to 3 months ahead is worth it at this tier, since the heritage and top 5-star hotels involved have limited room inventory compared to standard hotels, and availability at your preferred dates can genuinely run out during October-to-March peak season.",
    },
  ],
  relatedExperiences: [
    {
      name: "Palace & Fort Tours",
      tagline: "Amber, Kumbhalgarh, Mehrangarh & Jaisalmer",
      description: "For travellers whose main interest is Rajput fort architecture itself, across four cities rather than a Golden Triangle circuit.",
      href: "/experiences/palace-fort-tours",
      image: "/images/destinations/mehrangarh-fort-jodhpur.webp",
      imageAlt: "Mehrangarh Fort towering above Jodhpur's blue-washed old town",
    },
    {
      name: "Rajasthan Palace Honeymoon",
      tagline: "Two Palace Cities, Built for Two",
      description: "The same Jaipur-Udaipur palace-hotel appeal, framed specifically for couples.",
      href: "/experiences/rajasthan-palace-honeymoon",
      image: "/images/destinations/udaipur-lake-palace.webp",
      imageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
    },
  ],
  draftPendingReview: false,
};
