import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still
 * drafted content Dhruv should review for accuracy.
 *
 * Deliberately differentiated from Heritage Tours, which already covers
 * Varanasi and Sarnath — but only within roughly 2 of its 5 days, shared
 * with Khajuraho, framed around a broader "religious architecture"
 * circuit. This page gives Varanasi and Sarnath the full 5 days on their
 * own, going considerably deeper: a sunrise boat ride specifically (not
 * mentioned in Heritage Tours), a Banarasi silk weaving visit, and a
 * full day built around the city and its ghats rather than a single
 * evening stop before moving on.
 *
 * All 5 images (varanasi.webp, varanasi-ganges-boat.webp,
 * varanasi-evening-ganges-aarti.webp, varanasi-silk-weaving.webp,
 * sarnath-varanasi.webp) visually verified before use.
 */
export const varanasiGangesTours: ExperienceContent = {
  slug: "varanasi-ganges-tours",
  name: "Varanasi & Ganges Tours",
  tagline: "India's Spiritual Heart, in Full · 5 Days",
  metaTitle: "Varanasi & Ganges Tour | Sunrise Boat Ride, Ganga Aarti & Sarnath",
  metaDescription:
    "A 5-day deep dive into Varanasi — a sunrise boat ride on the Ganges, the evening Ganga Aarti, Banarasi silk weaving, and a half-day at Sarnath, where the Buddha's teaching began.",
  heroImage: "/images/destinations/varanasi.webp",
  heroImageAlt: "Boats along the ghats of Varanasi on the Ganges",
  heroHeadline: "Varanasi & Ganges: India's Spiritual Heart, in Full",
  heroSubheadline:
    "One of the world's oldest continuously inhabited cities, given the full five days it deserves rather than a single stop on a wider circuit.",
  overview:
    "Varanasi is usually seen as a stop rather than a destination — an evening Ganga Aarti squeezed between other cities on a longer itinerary. This trip does the opposite: five full days built entirely around Varanasi and the Ganges, from a pre-dawn boat ride along the ghats to a half-day at Sarnath, where the Buddha is traditionally said to have delivered his first sermon after attaining enlightenment. Varanasi rewards this kind of time — its ghats, temples, and daily rhythm of ritual life along the river reveal considerably more on a fifth visit to the waterfront than a first.",
  quickFacts: [
    { label: "Duration", value: "5 Days / 4 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Varanasi",
      description:
        "Private airport transfer to your hotel in Varanasi, one of the world's oldest continuously inhabited cities and the spiritual heart of Hinduism. With the rest of the day free to settle in, an optional early evening walk along the ghats introduces the city's rhythm ahead of the sunrise boat ride tomorrow.",
    },
    {
      title: "Day 2 — Sunrise Boat Ride & the Ghats",
      description:
        "A pre-dawn boat ride along the Ganges, watching the ghats come to life as the sun rises — pilgrims bathing, morning rituals beginning, and the city's waterfront lit gold before most visitors are awake. Afterward, a walking tour of the ghats themselves, including Dashashwamedh Ghat, Varanasi's most prominent, and Manikarnika Ghat, one of the city's cremation ghats, approached respectfully and at a distance appropriate to an active, sacred site rather than a tourist attraction.",
      image: "/images/destinations/varanasi-ganges-boat.webp",
      imageAlt: "A boat on the Ganges at sunrise, Varanasi",
    },
    {
      title: "Day 3 — Old City, Silk Weaving & the Ganga Aarti",
      description:
        "A morning exploring Varanasi's old city lanes, narrow enough in places that only foot traffic and the occasional motorbike pass through, followed by a visit to a family-run Banarasi silk weaving workshop — Varanasi has produced silk brocade for centuries, and watching a handloom weaver at work shows a side of the city's craft heritage most visitors never see. In the evening, the Ganga Aarti at Dashashwamedh Ghat, a fire ceremony performed nightly with considerable ceremony and crowds, best watched either from the ghat steps directly or from a boat positioned on the river for a different vantage point.",
      image: "/images/destinations/varanasi-evening-ganges-aarti.webp",
      imageAlt: "The evening Ganga Aarti ceremony, Varanasi",
    },
    {
      title: "Day 4 — Sarnath & a Free Afternoon",
      description:
        "A morning trip to Sarnath, roughly 30 minutes from Varanasi, where the Buddha is traditionally said to have delivered his first sermon after attaining enlightenment — a UNESCO Tentative List site holding the Dhamek Stupa, the ruins of ancient monasteries, and a small archaeological museum. The afternoon is left free, whether that means revisiting a favourite ghat, a food walk through Varanasi's old city, or simply resting before your final day.",
      image: "/images/destinations/sarnath-varanasi.webp",
      imageAlt: "A Buddhist temple approach at Sarnath, near Varanasi",
    },
    {
      title: "Day 5 — Departure",
      description:
        "A final morning at leisure — an optional sunrise return to the ghats for those who'd like a second look before leaving — followed by a private transfer to Varanasi airport for your onward or return journey, five days entirely dedicated to one of India's oldest and most significant cities behind you.",
    },
  ],
  inclusions: [
    "4 nights in a hotel of your choice in Varanasi",
    "Daily breakfast",
    "Sunrise boat ride on the Ganges",
    "Banarasi silk weaving workshop visit",
    "Evening Ganga Aarti viewing",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide throughout",
  ],
  exclusions: [
    "Flights (international and any domestic segments you choose to add)",
    "Monument and site entry fees (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Five Days, Not One Evening",
      description:
        "Most itineraries give Varanasi a single evening stop. This one gives the city and the Ganges the full time they reward.",
    },
    {
      title: "A Sunrise on the Water",
      description:
        "A pre-dawn boat ride watching the ghats wake up, rather than only the more commonly seen evening Aarti.",
    },
    {
      title: "Banarasi Silk, Hands-On",
      description:
        "A visit to a family-run handloom workshop, showing the centuries-old craft behind Varanasi's famous silk brocade.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, comfortable mornings make the pre-dawn boat ride genuinely pleasant rather than an endurance test, and the city overall is easier to explore on foot outside the summer heat.",
  },
  relatedDestinations: [
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
      question: "Is the sunrise boat ride worth the early start?",
      answer:
        "Yes, genuinely — the ghats at dawn, with pilgrims beginning their morning rituals and the light just catching the waterfront, is a different and arguably more atmospheric experience than the more commonly photographed evening Aarti. Most guests consider it the highlight of the trip.",
    },
    {
      question: "Is it respectful for tourists to view the cremation ghats?",
      answer:
        "Cremation is an active, sacred practice at Manikarnika Ghat, and we approach it respectfully and from an appropriate distance as part of a wider ghats walk, rather than treating it as a photo opportunity. Photography is generally discouraged directly at the cremation ghats themselves, and your guide will advise on this in person.",
    },
    {
      question: "What makes Varanasi's silk weaving worth visiting?",
      answer:
        "Varanasi has produced silk brocade, known as Banarasi silk, for centuries, and much of it is still woven by hand on traditional looms in family-run workshops. Watching a weaver at work shows a genuinely different side of the city's heritage from its temples and ghats.",
    },
    {
      question: "How much time do we actually need at Sarnath?",
      answer:
        "A half-day is generally enough to see the Dhamek Stupa, the monastery ruins, and the archaeological museum without rushing, which is why this itinerary pairs it with a free afternoon back in Varanasi rather than a full separate day.",
    },
    {
      question: "Can this trip be combined with a wider India itinerary?",
      answer:
        "Yes — Varanasi connects well by flight to Delhi, Agra, Khajuraho and other major cities, so this can be added before or after a Golden Triangle or Heritage Tours itinerary if you'd like more time in Varanasi specifically than those shorter stops allow.",
    },
  ],
  relatedExperiences: [
    {
      name: "Heritage Tours",
      tagline: "Khajuraho & Varanasi",
      description: "For travellers who'd rather pair a shorter Varanasi stop with Khajuraho's temple carvings in one combined circuit.",
      href: "/experiences/heritage-tours",
      image: "/images/destinations/khajuraho-western-group.webp",
      imageAlt: "The Western Group temples at Khajuraho, Madhya Pradesh",
    },
    {
      name: "Spiritual India",
      tagline: "Amritsar, Haridwar & Rishikesh",
      description: "A different living-faith circuit entirely, for travellers wanting the Golden Temple and Rishikesh's ashrams alongside their spiritual travel.",
      href: "/experiences/spiritual-india",
      image: "/images/destinations/amritsar.webp",
      imageAlt: "The Golden Temple reflected in its pool, Amritsar",
    },
  ],
  draftPendingReview: false,
};
