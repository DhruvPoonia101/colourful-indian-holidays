import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still
 * drafted content Dhruv should review for accuracy.
 *
 * Deliberately built around locations and images already verified
 * elsewhere on this site (Amber Fort, Jaisalmer Fort and the Thar Desert,
 * Varanasi's ghats), rather than introducing new unverified photo
 * locations — the differentiation here is in the framing (timing, light,
 * vantage points) and the deliberately photography-paced schedule
 * (golden hour arrivals, sunrise starts, buffer time for a second attempt
 * at a shot), not in claiming new destinations.
 *
 * Two other themes were considered and set aside before this one, for
 * the same reason: Buddhist Tours would need Bodh Gaya as its central
 * site, and no destination content or verified image exists for it
 * anywhere on this site; Food & Cooking has no food-specific photography
 * at all in the image library. Both are real gaps worth flagging
 * separately rather than building around a missing centrepiece.
 */
export const photographyTours: ExperienceContent = {
  slug: "photography-tours",
  name: "Photography Tours",
  tagline: "Jaipur, Jaisalmer & Varanasi, Timed for the Light · 7 Days",
  metaTitle: "India Photography Tour | Jaipur, Jaisalmer Desert & Varanasi, Timed for Light",
  metaDescription:
    "A 7-day photography-paced itinerary through Jaipur, Jaisalmer's Thar Desert and Varanasi's ghats — golden hour arrivals, sunrise starts, and buffer time built in for a second attempt at a shot.",
  heroImage: "/images/destinations/jaisalmer-desert.webp",
  heroImageAlt: "Camel caravan crossing the Thar Desert dunes near Jaisalmer",
  heroHeadline: "Photography Tours: Jaipur, Jaisalmer & Varanasi",
  heroSubheadline:
    "The same iconic locations most first-time visitors see, but scheduled around the light rather than around a standard sightseeing day — golden hour arrivals, sunrise starts, and time built in to wait for the right moment.",
  overview:
    "Most India itineraries treat photography as something that happens incidentally, wherever the schedule happens to land. This one reverses that — timing arrives at each major site specifically for golden hour or sunrise, and builds in buffer time rather than moving on the moment a group photo has been taken. The three stops are chosen for genuinely different kinds of light and subject: Jaipur's Amber Fort at sunset, Jaisalmer's Thar Desert dunes at both sunrise and sunset, and Varanasi's ghats at dawn and during the evening Ganga Aarti.",
  quickFacts: [
    { label: "Duration", value: "7 Days / 6 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Jaipur",
      description:
        "Private airport transfer to your hotel in Jaipur. With the rest of the day free to rest after travelling, an evening free to scout the view from your hotel or a nearby vantage point ahead of tomorrow's main shoot.",
    },
    {
      title: "Day 2 — Amber Fort at Golden Hour",
      description:
        "A full day at Amber Fort, timed deliberately around light rather than a standard sightseeing schedule — an earlier, quieter visit through the fort's courtyards and mirrored halls, then repositioning for sunset, when the fort's sandstone walls and the lake below take on the warm light the location is known for. Buffer time is built in rather than a fixed departure, so a cloudy evening doesn't mean missing the shot entirely.",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      title: "Day 3 — Fly to Jaisalmer",
      description:
        "A flight from Jaipur to Jaisalmer (via Delhi, depending on current schedules), arriving in the afternoon in the Golden City, so named for the honey-coloured sandstone its fort and old city are built from. The late afternoon light on arrival is itself worth having your camera ready for, before settling in ahead of two full days in the desert.",
    },
    {
      title: "Day 4 — Jaisalmer Fort & the Old City",
      description:
        "A full day inside Jaisalmer Fort, one of the few genuinely 'living forts' left in the world, with real residents, shops and havelis inside its walls rather than a preserved museum — a very different photographic subject from Amber Fort's more formal courtyards. Timed to catch the fort's golden sandstone walls glowing at sunset from a viewpoint outside the fort itself.",
      image: "/images/destinations/jaisalmer-fort.webp",
      imageAlt: "Jaisalmer Fort's golden sandstone walls at sunset",
    },
    {
      title: "Day 5 — The Thar Desert at Sunrise & Sunset",
      description:
        "A pre-dawn transfer into the Thar Desert for sunrise over the dunes — arguably the single most rewarding light of this entire trip, with long shadows across the sand and a genuine sense of scale hard to capture at any other time of day. A rest through the middle of the day, then back out for a camel safari and sunset over the dunes in the evening, timed as its own dedicated session rather than squeezed in alongside other sightseeing.",
      image: "/images/destinations/jaisalmer-desert.webp",
      imageAlt: "Camel caravan crossing the Thar Desert dunes near Jaisalmer",
    },
    {
      title: "Day 6 — Fly to Varanasi",
      description:
        "A flight to Varanasi (via Delhi), arriving with the evening free to walk the ghats and get a first sense of the light and composition before tomorrow's dedicated sunrise session.",
    },
    {
      title: "Day 7 — Varanasi's Ghats at Sunrise & Departure",
      description:
        "A pre-dawn boat positioned on the Ganges for sunrise over the ghats — boats, pilgrims and temple spires lit gold as the sun comes up, considered by many photographers the single best light of any stop on this trip. A private transfer to Varanasi airport follows for your onward or return journey, seven days of India's light behind you.",
      image: "/images/destinations/varanasi-ganges-boat.webp",
      imageAlt: "A boat on the Ganges at sunrise, Varanasi",
    },
  ],
  inclusions: [
    "1 night in a hotel of your choice in Jaipur",
    "2 nights in a hotel of your choice in Jaisalmer",
    "1 night in a hotel of your choice in Varanasi",
    "Daily breakfast",
    "Domestic flights: Jaipur to Jaisalmer, and Jaisalmer to Varanasi",
    "A dedicated sunrise boat position on the Ganges, Varanasi",
    "A dedicated sunset camel safari in the Thar Desert",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide throughout, briefed on this itinerary's photography-led schedule",
  ],
  exclusions: [
    "International and onward domestic flights",
    "Monument and site entry fees (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Photography equipment of any kind",
  ],
  highlights: [
    {
      title: "Scheduled Around Light, Not Sightseeing Hours",
      description:
        "Golden hour arrivals and sunrise starts throughout, with buffer time built in rather than a fixed departure the moment a photo's been taken.",
    },
    {
      title: "Three Genuinely Different Kinds of Light",
      description:
        "Amber Fort's warm sandstone glow, the Thar Desert's long dune shadows, and Varanasi's gold-lit ghats at dawn — three distinct subjects, not one repeated formula.",
    },
    {
      title: "A Dedicated Desert Sunrise",
      description:
        "A pre-dawn transfer into the dunes specifically for sunrise, rather than treating the desert as only an evening camel-safari stop.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Clear skies and comfortable temperatures across all three stops make this the most reliable window for the golden hour and sunrise sessions this itinerary is built around — haze and heat both increase noticeably outside this period, especially in Rajasthan.",
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
      name: "Jaisalmer",
      tagline: "The Golden City",
      description: "A living sandstone fort on the edge of the Thar Desert, with camel safaris beyond.",
      href: "/destinations/jaisalmer",
      image: "/images/destinations/jaisalmer-fort.webp",
      imageAlt: "Jaisalmer Fort's golden sandstone walls at sunset",
    },
    {
      name: "Varanasi",
      tagline: "India's Spiritual Heart",
      description: "Ancient ghats, the nightly Ganga Aarti, and one of the world's oldest continuously inhabited cities.",
      href: "/destinations/varanasi",
      image: "/images/destinations/varanasi.webp",
      imageAlt: "Boats along the ghats of Varanasi on the Ganges",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Do I need professional camera equipment for this trip?",
      answer:
        "No — the itinerary is built around timing and access, which benefits any camera including a phone. Bringing your own equipment is entirely up to you; we don't provide or rent photography gear as part of this trip.",
    },
    {
      question: "What if the weather doesn't cooperate for a sunrise or sunset session?",
      answer:
        "We build buffer time into the schedule specifically for this, and where the itinerary allows it, a second attempt the following day. That said, no itinerary can guarantee weather, and some flexibility is worth expecting on any photography-led trip.",
    },
    {
      question: "Is this itinerary only for serious or professional photographers?",
      answer:
        "No — it's built for anyone who wants their trip scheduled around good light rather than standard sightseeing hours, regardless of experience level or equipment. Enthusiastic amateurs make up most of the interest in a trip like this.",
    },
    {
      question: "Why these three specific locations?",
      answer:
        "Each offers a genuinely different kind of light and subject — Amber Fort's warm sandstone at sunset, the Thar Desert's dune shadows at sunrise and sunset, and Varanasi's ghats at dawn. Together they cover a wider range than repeating the same golden-hour fort shot three times over.",
    },
    {
      question: "Can this itinerary be extended or adjusted to include other locations?",
      answer:
        "Yes — this is a starting point rather than a fixed route. If there's a specific location you'd like added, such as Ranthambore for wildlife photography or Ladakh for mountain landscapes, tell us and we'll build it into the itinerary.",
    },
  ],
  relatedExperiences: [
    {
      name: "Palace & Fort Tours",
      tagline: "Amber, Kumbhalgarh, Mehrangarh & Jaisalmer",
      description: "For a deeper architectural and historical focus on Rajasthan's forts, beyond the two included on this photography-led route.",
      href: "/experiences/palace-fort-tours",
      image: "/images/destinations/mehrangarh-fort-jodhpur.webp",
      imageAlt: "Mehrangarh Fort towering above Jodhpur's blue-washed old town",
    },
    {
      name: "Varanasi & Ganges Tours",
      tagline: "India's Spiritual Heart, in Full",
      description: "For travellers who'd rather spend a full 5 days in Varanasi alone, beyond the single sunrise session on this itinerary.",
      href: "/experiences/varanasi-ganges-tours",
      image: "/images/destinations/varanasi.webp",
      imageAlt: "Boats along the ghats of Varanasi on the Ganges",
    },
  ],
  draftPendingReview: false,
};
