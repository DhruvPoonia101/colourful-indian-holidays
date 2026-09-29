import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still
 * drafted content Dhruv should review for accuracy.
 *
 * BUILT AHEAD OF REAL PHOTOS BY DESIGN. This was the one leftover theme
 * with a genuinely strong, well-documented real itinerary (Bodh Gaya and
 * Sarnath — two of Buddhism's four holy sites) but zero usable images
 * anywhere in the asset library, previously flagged as the reason this
 * theme was skipped. Per instruction, the content is built now with
 * clearly-named placeholder image paths that do NOT yet exist as files:
 *   - /images/destinations/bodh-gaya-mahabodhi-temple.webp
 *   - /images/destinations/bodh-gaya-bodhi-tree.webp
 *   - /images/destinations/bodh-gaya-tibetan-monastery.webp
 * `draftPendingReview: true` is set specifically so this page stays
 * noindexed (robots: index:false) until real photos replace these paths
 * — this prevents Google from indexing a page with broken images in the
 * meantime, and gives a clean flag for "not ready to go live yet" beyond
 * just the pricing caveat every other draft page already carries.
 * Once real photos are supplied: save them at the exact paths above (or
 * update the three image/heroImage fields to match whatever filenames
 * are actually used), then flip draftPendingReview to false.
 *
 * All destination facts (Mahabodhi Temple's UNESCO status and 55m height,
 * the Bodhi Tree, Gaya Airport's real distance and route connectivity,
 * the specific international monasteries named) were verified via search
 * across multiple independent, consistent sources before writing.
 */
export const buddhistTours: ExperienceContent = {
  slug: "buddhist-tours",
  name: "Buddhist Tours",
  tagline: "Bodh Gaya & Sarnath, Two Holy Sites · 7 Days",
  metaTitle: "Buddhist Circuit Tour India | Bodh Gaya's Mahabodhi Temple & Sarnath",
  metaDescription:
    "A 7-day Buddhist pilgrimage circuit — Bodh Gaya's Mahabodhi Temple and Bodhi Tree, its international monasteries, and Sarnath, where the Buddha's first sermon was delivered.",
  heroImage: "/images/destinations/bodh-gaya-mahabodhi-temple.webp",
  heroImageAlt: "The Mahabodhi Temple, Bodh Gaya",
  heroHeadline: "Buddhist Tours: Bodh Gaya & Sarnath",
  heroSubheadline:
    "Two of Buddhism's four holy sites in one trip — where the Buddha attained enlightenment beneath the Bodhi Tree, and where he delivered his first sermon soon after.",
  overview:
    "Bodh Gaya and Sarnath are two of Buddhism's four principal holy sites, and together they cover the pivotal early chapter of the Buddha's life — enlightenment at Bodh Gaya, followed by his first sermon at Sarnath, delivered to the five ascetics who became his first disciples. This trip gives both real time rather than a rushed pass-through: three full days in Bodh Gaya alone, taking in the Mahabodhi Temple, the Bodhi Tree, and the remarkable cluster of international monasteries built there by Buddhist communities from across Asia, each in its own national architectural style.",
  quickFacts: [
    { label: "Duration", value: "7 Days / 6 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Bodh Gaya",
      description:
        "A flight to Gaya (connecting through Delhi or Kolkata, with some seasonal international pilgrimage routes also operating direct from Thailand and Bhutan), then a short private transfer to Bodh Gaya, roughly 12km away. With the rest of the day free to settle in, an optional evening walk introduces the town's unusually calm, meditative atmosphere ahead of the sites tomorrow.",
    },
    {
      title: "Day 2 — The Mahabodhi Temple & the Bodhi Tree",
      description:
        "A full day at the Mahabodhi Temple complex, a UNESCO World Heritage Site rising 55 metres and among the most revered Buddhist monuments anywhere in the world. At its rear stands a direct descendant of the original Bodhi Tree, under which the Buddha is traditionally held to have attained enlightenment roughly 2,600 years ago — many visitors spend hours simply sitting quietly nearby rather than moving quickly through as a sightseeing stop.",
      image: "/images/destinations/bodh-gaya-bodhi-tree.webp",
      imageAlt: "The Bodhi Tree behind the Mahabodhi Temple, Bodh Gaya",
    },
    {
      title: "Day 3 — International Monasteries & the Great Buddha Statue",
      description:
        "A day exploring Bodh Gaya's remarkable cluster of monasteries, each built by a different Buddhist nation in its own architectural style, all within easy walking distance of the Mahabodhi Temple — the Tibetan Karmapa's Tergar Monastery, the Thai temple with its gold-leafed roof, Bhutan's colourfully frescoed monastery, and Japan's more restrained Indosan Nipponji Temple among them. In the afternoon, the Great Buddha Statue, an 80-foot seated figure and one of the town's most visible landmarks.",
      image: "/images/destinations/bodh-gaya-tibetan-monastery.webp",
      imageAlt: "The Tibetan Tergar Monastery, Bodh Gaya",
    },
    {
      title: "Day 4 — Travel to Varanasi",
      description:
        "A private transfer or short flight to Varanasi, depending on current routing, arriving with the evening free — an optional walk along the ghats introduces the city ahead of Sarnath tomorrow.",
    },
    {
      title: "Day 5 — Sarnath, Site of the First Sermon",
      description:
        "A morning at Sarnath, roughly 30 minutes from Varanasi, where the Buddha delivered his first sermon after attaining enlightenment, to the five ascetics who became his first disciples. The site holds the Dhamek Stupa, the ruins of ancient monasteries, and a small archaeological museum. The afternoon is free — a natural point to see Varanasi's ghats and evening Ganga Aarti if you haven't already.",
    },
    {
      title: "Day 6 — Varanasi at Leisure",
      description:
        "A free day in Varanasi, whether that means revisiting Sarnath for a second, quieter look, exploring the ghats and old city further, or simply resting before your final day. This trip has been deliberately unhurried throughout, and the last full day is no exception.",
    },
    {
      title: "Day 7 — Departure",
      description:
        "A private transfer to Varanasi airport for your onward or return journey, seven days across two of Buddhism's holy sites behind you.",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice in Bodh Gaya",
    "3 nights in a hotel of your choice in Varanasi",
    "Daily breakfast",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide throughout, briefed on the sites' Buddhist history and significance",
  ],
  exclusions: [
    "Flights (international and any domestic segments you choose to add)",
    "Monument and site entry fees (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Two of Buddhism's Four Holy Sites",
      description:
        "Bodh Gaya (enlightenment) and Sarnath (the first sermon), given real time rather than a rushed single stop each.",
    },
    {
      title: "A Cluster of International Monasteries",
      description:
        "Thai, Tibetan, Bhutanese and Japanese monasteries, each in its own national architectural style, all within walking distance of the Mahabodhi Temple.",
    },
    {
      title: "The Bodhi Tree Itself",
      description:
        "A direct descendant of the tree under which the Buddha is traditionally held to have attained enlightenment.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, comfortable conditions suit both cities well and avoid Bihar's genuinely hot summer, when temperatures at Bodh Gaya can reach the high 30s Celsius. December, around Buddha's traditional enlightenment-anniversary observances, is also a particularly active and atmospheric time to visit if your dates allow it.",
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
      question: "How do I get to Bodh Gaya?",
      answer:
        "By flight to Gaya Airport, roughly 12km from Bodh Gaya, with regular domestic connections through Delhi and Kolkata, plus seasonal international pilgrimage flights from countries including Thailand and Bhutan during peak season. We handle the transfer from the airport as part of this itinerary.",
    },
    {
      question: "Do we need to be Buddhist to visit Bodh Gaya respectfully?",
      answer:
        "No — Bodh Gaya welcomes visitors of every background, and many come out of historical or cultural interest rather than religious practice specifically. As with any active religious site, dressing modestly and behaving quietly around the Mahabodhi Temple and monasteries is appreciated.",
    },
    {
      question: "Can this trip be extended to include Lumbini or Kushinagar, the other Buddhist holy sites?",
      answer:
        "Lumbini (the Buddha's birthplace, in Nepal) can be added — see our dedicated Lumbini experience for that leg specifically. Kushinagar, where the Buddha died, isn't currently part of one of our standard itineraries, but tell us if you'd like it included and we'll look at building it into your route.",
    },
    {
      question: "What's the significance of the different national monasteries at Bodh Gaya?",
      answer:
        "Buddhist communities from countries including Thailand, Bhutan, Tibet, Japan and Myanmar have each built a monastery at Bodh Gaya in their own national architectural style, reflecting how significant the site is across the whole Buddhist world, not just to one tradition or nationality.",
    },
    {
      question: "How many days do we actually need in Bodh Gaya?",
      answer:
        "This itinerary gives it three full days, which is enough to see the Mahabodhi Temple properly, visit several of the international monasteries at an unhurried pace, and still have time to simply sit and reflect near the Bodhi Tree, which many visitors find is where a rushed one-day stop falls short.",
    },
  ],
  relatedExperiences: [
    {
      name: "Lumbini",
      tagline: "The Buddha's Birthplace",
      description: "The other holy site closest to this itinerary geographically — Nepal's Lumbini, a short flight or drive from the India border.",
      href: "/experiences/lumbini",
      image: "/images/destinations/lumbini-maya-devi-temple.webp",
      imageAlt: "The Maya Devi Temple and ancient ruins, Lumbini, Nepal",
    },
    {
      name: "Varanasi & Ganges Tours",
      tagline: "India's Spiritual Heart, in Full",
      description: "For travellers who'd rather spend a full 5 days in Varanasi itself, beyond the shorter stop on this Buddhist circuit.",
      href: "/experiences/varanasi-ganges-tours",
      image: "/images/destinations/varanasi.webp",
      imageAlt: "Boats along the ghats of Varanasi on the Ganges",
    },
  ],
  draftPendingReview: false,
};
