import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * Image note: "lumbini-world-peace-pagoda.webp" carries a visible
 * photographer watermark ("PHOTO:ASHOKJKSHETRI") in the bottom corner —
 * worth checking licensing before this goes live commercially. The Maya
 * Devi Temple and Ashoka Pillar images are clean and used as primary.
 */
export const lumbini: ExperienceContent = {
  slug: "lumbini",
  name: "Lumbini",
  tagline: "The Birthplace of the Buddha",
  metaTitle: "Lumbini Tour | The Birthplace of the Buddha, Nepal",
  metaDescription:
    "A 2-day visit to Lumbini, Nepal — the Maya Devi Temple marking the Buddha's exact birthplace, the Ashoka Pillar, and a Monastic Zone of temples built by Buddhist nations from around the world.",
  heroImage: "/images/destinations/lumbini-maya-devi-temple.webp",
  heroImageAlt: "The Maya Devi Temple and ancient ruins, Lumbini, Nepal",
  heroHeadline: "Lumbini: The Birthplace of the Buddha",
  heroSubheadline:
    "A UNESCO World Heritage Site marking the exact spot of the Buddha's birth in 623 BCE, ringed by temples and monasteries built by Buddhist nations from around the world.",
  overview:
    "Lumbini holds a level of religious specificity rare even among major pilgrimage sites — this isn't simply associated with the Buddha's life, but is archaeologically confirmed as the precise location of his birth in 623 BCE, identified by a marker stone inside the Maya Devi Temple that pilgrims can view directly. The site draws Buddhists from every major tradition — Theravada, Mahayana and Vajrayana alike — making it one of the few places on Earth where the full diversity of global Buddhism is represented within walking distance, each nation's monastery built in its own distinct architectural style. For visitors without a specific religious connection, Lumbini still offers a genuinely unusual experience: a quiet, contemplative site standing in real contrast to Kathmandu's crowded temple squares, worth the detour even purely for its archaeological and architectural interest.",
  quickFacts: [
    { label: "Duration", value: "2 Days / 1 Night" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Lumbini, Maya Devi Temple",
      description:
        "A flight from Kathmandu to Bhairahawa (roughly 30 minutes), followed by a short drive to Lumbini itself. Private transfer to your hotel, with the afternoon devoted to the Maya Devi Temple, the site's central shrine, built around the exact marker stone identifying the Buddha's birthplace and the remains of the ancient brick structures that once stood here, visible through a protective walkway inside the temple. Just outside, the Ashoka Pillar, erected by the Mauryan emperor Ashoka in 249 BCE to commemorate his own pilgrimage to the site, carries one of the oldest known inscriptions confirming Lumbini's identity as the Buddha's birthplace. Nearby, the sacred Puskarini pond, where tradition holds Buddha's mother bathed before his birth, adds a further layer to the site's origin story.",
      image: "/images/destinations/lumbini-ashoka-pillar.webp",
      imageAlt: "The Ashoka Pillar at Lumbini, Nepal",
    },
    {
      title: "Day 2 — The Monastic Zone & World Peace Pagoda, Departure",
      description:
        "A morning cycling or walking through Lumbini's Monastic Zone, a purpose-built area where more than two dozen countries have constructed monasteries and temples in their own national architectural styles — Thai, Chinese, Japanese, Vietnamese, Cambodian and Sri Lankan structures sit within a short walk of each other, a genuinely unusual concentration of global Buddhist architecture in one place. Continue to the World Peace Pagoda, a large white stupa built by Japanese Buddhist organisations overlooking a landscaped pond, before a private transfer back to Bhairahawa for your flight to Kathmandu or onward departure.",
      image: "/images/destinations/lumbini-world-peace-pagoda.webp",
      imageAlt: "The World Peace Pagoda at Lumbini, Nepal",
    },
  ],
  inclusions: [
    "1 night in a hotel of your choice in Lumbini",
    "Daily breakfast",
    "Domestic flight, Kathmandu to Bhairahawa and return",
    "Private vehicle and English-speaking guide throughout",
    "Bicycle hire for the Monastic Zone, if preferred over walking",
  ],
  exclusions: [
    "Flights or train tickets to and from Kathmandu",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "The Exact Birthplace, Not Just a Regional Association",
      description:
        "A marker stone inside the Maya Devi Temple identifies the precise spot, confirmed archaeologically rather than by tradition alone.",
    },
    {
      title: "Global Buddhism in One Walkable Zone",
      description:
        "More than two dozen countries have built monasteries here in their own national styles, a rare concentration in one place.",
    },
    {
      title: "One of Buddhism's Four Most Important Pilgrimage Sites",
      description:
        "Alongside Bodh Gaya, Sarnath and Kushinagar, Lumbini completes the set of sites tied to the Buddha's life.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cooler, drier conditions make walking or cycling through the Monastic Zone genuinely comfortable. April to June turns hot and humid in Nepal's lowland Terai region, where Lumbini sits, and the June–September monsoon brings heavy rain.",
  },
  relatedDestinations: [
    {
      name: "Kathmandu",
      tagline: "Nepal's Temple-Filled Capital",
      description: "UNESCO-listed durbar squares, stupas and temples across the Kathmandu Valley.",
      href: "/destinations/kathmandu",
      image: "/images/destinations/kathmandu-aerial-boudhanath-city.webp",
      imageAlt: "Aerial view of Boudhanath stupa and Kathmandu city",
    },
    {
      name: "Pokhara",
      tagline: "Lakes Beneath the Annapurnas",
      description: "Phewa Lake, paragliding, and some of Nepal's best mountain views.",
      href: "/destinations/pokhara",
      image: "/images/destinations/pokhara-valley-machapuchare-view.webp",
      imageAlt: "Pokhara valley with Machapuchare mountain view",
    },
    {
      name: "Varanasi",
      tagline: "India's Spiritual Heart",
      description: "The evening Ganga Aarti ceremony and centuries of continuous pilgrimage along the Ganges.",
      href: "/destinations/varanasi",
      image: "/images/destinations/varanasi-evening-ganges-aarti.webp",
      imageAlt: "The evening Ganga Aarti ceremony, Varanasi",
    },
  ],
  showCarFleet: false,
  faqs: [
    {
      question: "Can Lumbini be added to our Nepal Tours itinerary?",
      answer:
        "Yes — this 2-day visit is a starting template that adds naturally onto our Nepal Tours circuit or any Kathmandu-based itinerary, connected by a short domestic flight from Kathmandu to Bhairahawa.",
    },
    {
      question: "Is Lumbini worth visiting for non-Buddhist travellers?",
      answer:
        "Yes — beyond its religious significance, the Monastic Zone's concentration of distinct national architectural styles and the archaeological remains at the Maya Devi Temple are genuinely worthwhile for anyone interested in history and architecture.",
    },
    {
      question: "How do we get from Kathmandu to Lumbini?",
      answer:
        "A short domestic flight to Bhairahawa (roughly 30 minutes) followed by a short drive is the practical option; a road journey is also possible but takes considerably longer given the distance and terrain.",
    },
    {
      question: "Is one night enough, or should we stay longer?",
      answer:
        "One night covers the Maya Devi Temple, Ashoka Pillar and Monastic Zone comfortably; travellers with a deeper interest in Buddhist architecture or history sometimes extend to two nights to visit the Monastic Zone's monasteries at a slower pace.",
    },
    {
      question: "Are there dress code expectations at the temples?",
      answer:
        "Modest dress covering shoulders and knees is expected at the Maya Devi Temple and the various monasteries, and footwear is removed before entering most shrine buildings — we'll brief you on specifics when planning your visit.",
    },
  ],
  relatedExperiences: [
    {
      name: "Heritage Tours",
      tagline: "Khajuraho & Varanasi · 5 Days",
      description: "Sarnath, where the Buddha delivered his first sermon, completes the pilgrimage connection from Lumbini.",
      href: "/experiences/heritage-tours",
      image: "/images/destinations/khajuraho-western-group.webp",
      imageAlt: "The Western Group temples at Khajuraho, Madhya Pradesh",
    },
    {
      name: "Spiritual India",
      tagline: "Amritsar, Haridwar & Rishikesh · 5 Days",
      description: "A different living spiritual tradition, built around the Golden Temple and the Ganges.",
      href: "/experiences/spiritual-india",
      image: "/images/destinations/amritsar.webp",
      imageAlt: "The Golden Temple reflected in its pool, Amritsar",
    },
    {
      name: "Nepal Tours",
      tagline: "Temples, Mountains & the Jungle · 8 Days",
      description: "The wider Nepal circuit, easy to extend with a Lumbini add-on from Kathmandu.",
      href: "/tours/nepal-tours",
      image: "/images/destinations/pokhara-valley-machapuchare-view.webp",
      imageAlt: "Pokhara valley with Machapuchare mountain view, Nepal",
    },
  ],
  draftPendingReview: false,
};
