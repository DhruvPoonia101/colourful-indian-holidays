import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still
 * drafted content Dhruv should review for accuracy.
 *
 * Genuinely differentiated from the standard Golden Triangle Classic and
 * Rajasthan Wildlife Safari routes it draws on, rather than simply
 * relabelling one of them: shorter drive days deliberately built in,
 * jeep transfer specified at Amber Fort instead of the elephant queues
 * (an animal-welfare-sensitive point handled the same cautious way as on
 * the Luxury India Tours page — mentioned as an option that exists,
 * without recommending it), a hands-on puppet-show evening aimed at
 * children rather than an adult-paced cultural stop, and two full safari
 * days at Ranthambore rather than one, since wildlife is usually the
 * highlight for younger travellers on a trip like this.
 *
 * No specific age-range claims or child-development language used —
 * kept to practical, verifiable statements (drive times, vehicle
 * capacity, activity descriptions) rather than parenting advice.
 */
export const familyHolidays: ExperienceContent = {
  slug: "family-holidays",
  name: "Family Holidays",
  tagline: "Delhi, Agra, Jaipur & Ranthambore for Families · 9 Days",
  metaTitle: "India Family Holiday Package | Golden Triangle & Ranthambore Safari",
  metaDescription:
    "A 9-day India itinerary built for families — shorter drive days, a hands-on puppet show, a jeep ride up to Amber Fort, and two full days of tiger safari at Ranthambore.",
  heroImage: "/images/destinations/ranthambore-tiger.webp",
  heroImageAlt: "A Bengal tiger resting on a safari track, Ranthambore",
  heroHeadline: "Family Holidays: The Golden Triangle & Ranthambore",
  heroSubheadline:
    "The classic first trip to India, paced for families — shorter drive days, hands-on activities, and two full days of wildlife safari that are usually the trip's real highlight for younger travellers.",
  overview:
    "A family trip to India needs the same monuments and sights as any first-time itinerary, but a genuinely different pace and structure around them. This route covers the same Delhi-Agra-Jaipur ground as our classic Golden Triangle, with deliberately shorter drive days and built-in rest, then adds two full days at Ranthambore National Park rather than a quick single safari — wildlife is usually what sticks with children longest after a trip like this, and one drive-through safari rarely does it justice. A hands-on puppet show evening in Jaipur and family-sized vehicles throughout round out an itinerary built around keeping everyone, not just the adults, genuinely engaged.",
  quickFacts: [
    { label: "Duration", value: "9 Days / 8 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Delhi",
      description:
        "Private airport transfer to your hotel in Delhi. With a long flight likely behind most families, the rest of the day is kept free rather than scheduled, giving everyone time to rest before sightseeing begins tomorrow.",
    },
    {
      title: "Day 2 — Delhi at a Family Pace",
      description:
        "A relaxed day covering Delhi's major sights — India Gate, Humayun's Tomb and the Red Fort — with breaks built into the schedule rather than a packed back-to-back itinerary. Sightseeing days on this trip are deliberately shorter than our standard adult-paced routes.",
    },
    {
      title: "Day 3 — Drive to Agra",
      description:
        "A private drive to Agra along the Yamuna Expressway, with a stop along the way if anyone needs a break. In the afternoon, Agra Fort, with plenty of open courtyards for children to move around in rather than a purely walking-and-looking itinerary.",
    },
    {
      title: "Day 4 — The Taj Mahal, on to Jaipur",
      description:
        "A later-morning visit to the Taj Mahal — comfortable timing for families rather than an early-dawn start — followed by the drive to Jaipur. The Taj Mahal's scale and the surrounding gardens tend to hold children's attention well even without a dawn start.",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      title: "Day 5 — Amber Fort & City Palace",
      description:
        "A jeep ride up to Amber Fort rather than the shared elephant queues some visitors choose — a faster, more comfortable option for families, and one many travellers now prefer regardless of group. In the afternoon, the City Palace, with courtyards and armoury displays that tend to interest children as much as the architecture itself.",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      title: "Day 6 — Jaipur's Bazaars & a Puppet Show",
      description:
        "A gentler day exploring Jaipur's old city bazaars, followed by an evening kathputli puppet show — a traditional Rajasthani string-puppet performance that's genuinely engaging for children, told through colourful characters and live folk music rather than a language-dependent narrative.",
    },
    {
      title: "Day 7 — Drive to Ranthambore",
      description:
        "A drive to Ranthambore, arriving in the afternoon with time to settle into your safari lodge before the first game drive tomorrow morning. Most families find this the part of the trip children look forward to most.",
    },
    {
      title: "Day 8 — A Full Day of Safaris",
      description:
        "Two safari drives today — one in the morning, one in the late afternoon, when wildlife tends to be most active — through Ranthambore's tiger reserve, with a real (though never guaranteed) chance of a tiger sighting alongside deer, langurs, and a wide range of birdlife.",
      image: "/images/destinations/ranthambore-tiger.webp",
      imageAlt: "A Bengal tiger resting on a safari track, Ranthambore",
    },
    {
      title: "Day 9 — Morning Safari & Departure",
      description:
        "A final early-morning safari before a private transfer to Jaipur for your onward or return flight — nine days, three cities and one national park behind you, at a pace built around keeping the whole family engaged throughout.",
    },
  ],
  inclusions: [
    "2 nights in a hotel of your choice in Delhi",
    "1 night in a hotel of your choice in Agra",
    "3 nights in a hotel of your choice in Jaipur",
    "2 nights in a safari lodge in Ranthambore",
    "Daily breakfast",
    "4 safari drives at Ranthambore National Park, including permits",
    "Kathputli puppet show in Jaipur",
    "Private, family-sized vehicle (sedan, SUV, or Tempo Traveller depending on group size) throughout",
    "English-speaking guide at every sightseeing stop",
  ],
  exclusions: [
    "International and domestic flights",
    "Monument entry fees at each site (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Two Full Safari Days, Not One",
      description:
        "Four separate game drives at Ranthambore, rather than a single quick safari squeezed into a longer itinerary.",
    },
    {
      title: "A Puppet Show Built for Children",
      description:
        "A traditional kathputli performance that works regardless of age or language, told through colourful characters and live music.",
    },
    {
      title: "Genuinely Shorter Drive Days",
      description:
        "Sightseeing and travel days are deliberately paced slower than our standard adult itineraries, with rest built in rather than assumed.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, comfortable conditions suit both the sightseeing days and the Ranthambore safaris, and this window avoids India's hottest months, which can be genuinely difficult for young children outdoors for extended periods.",
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
      name: "Ranthambore",
      tagline: "Tiger Country, Rajasthan",
      description: "A former royal hunting ground turned tiger reserve, with a ruined fort inside its boundaries.",
      href: "/destinations/ranthambore",
      image: "/images/destinations/ranthambore-tiger.webp",
      imageAlt: "A Bengal tiger resting on a safari track, Ranthambore",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "What age children is this itinerary suitable for?",
      answer:
        "It's built with families of various ages in mind — the pacing (shorter drives, rest built in, a mix of activity types) suits most children old enough to manage a multi-day trip comfortably. Tell us your children's ages when you enquire and we can adjust specific activities accordingly.",
    },
    {
      question: "Are the drives between cities long?",
      answer:
        "Delhi to Agra and Agra to Jaipur are both around 3.5 to 5 hours by road, with stops built in along the way. We've kept this itinerary to the same core cities as our standard Golden Triangle specifically because the drive times are manageable for families, rather than adding destinations that would mean longer travel days.",
    },
    {
      question: "Is a tiger sighting guaranteed at Ranthambore?",
      answer:
        "No sighting can ever be guaranteed, but four separate game drives across two full days gives a genuinely strong chance compared to a single quick safari, and Ranthambore is one of India's more reliable reserves for sightings generally.",
    },
    {
      question: "What size vehicle will we travel in?",
      answer:
        "This depends on your family's size — a sedan or SUV for smaller families, or a Tempo Traveller for larger groups or extended families travelling together. Tell us your group size and we'll match the right vehicle.",
    },
    {
      question: "Can this itinerary be shortened or extended?",
      answer:
        "Yes — this is a starting point rather than a fixed package. Some families extend with an additional Ranthambore day, while others prefer to shorten the Jaipur stop. Tell us your available time and we'll adjust the itinerary around it.",
    },
  ],
  relatedExperiences: [
    {
      name: "Cultural Tours",
      tagline: "Jaipur & Pushkar's Living Traditions",
      description: "For families who want more hands-on craft and performance time in Jaipur specifically, beyond the puppet show included here.",
      href: "/experiences/cultural-tours",
      image: "/images/destinations/jaipur-hawa-mahal.webp",
      imageAlt: "Hawa Mahal and street life in Jaipur's old city",
    },
    {
      name: "Tiger Safari Tours",
      tagline: "Bandhavgarh, Kanha & Pench",
      description: "For families wanting an even more wildlife-focused trip, across Madhya Pradesh's three flagship reserves instead of Ranthambore alone.",
      href: "/experiences/tiger-safari-tours",
      image: "/images/destinations/bandhavgarh-tiger.webp",
      imageAlt: "Two tigers at a waterhole, Bandhavgarh National Park",
    },
  ],
  draftPendingReview: false,
};
