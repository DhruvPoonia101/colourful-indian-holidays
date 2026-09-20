import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const spiritualIndia: ExperienceContent = {
  slug: "spiritual-india",
  name: "Spiritual India",
  tagline: "Amritsar, Haridwar & Rishikesh · 5 Days",
  metaTitle: "Spiritual India Tour Package | Golden Temple, Haridwar & Rishikesh",
  metaDescription:
    "A private 5-day spiritual India tour — the Golden Temple in Amritsar, the evening Ganga Aarti at Haridwar, and the ashrams and Ganges of Rishikesh.",
  heroImage: "/images/destinations/amritsar.webp",
  heroImageAlt: "The Golden Temple reflected in its pool, Amritsar",
  heroHeadline: "Spiritual India: Living Faith, Not Just Monuments",
  heroSubheadline:
    "A tour built around active, living spiritual practice rather than ancient ruins — the Golden Temple's daily community kitchen, Haridwar's nightly river ceremony, and Rishikesh's ashram culture.",
  overview:
    "Our Heritage Tours itinerary covers India's great historical monuments — temples, stupas, and centuries-old carved stone. This tour takes a different angle entirely, focusing on places where spiritual practice is still actively, visibly lived out today rather than preserved behind a fence. The Golden Temple in Amritsar feeds tens of thousands of visitors a genuinely free meal every single day, regardless of faith; Haridwar's Ganga Aarti has been performed nightly for generations; and Rishikesh's ashrams continue to teach yoga and meditation traditions to students from around the world. Three genuinely different faiths — Sikhism, Hindu pilgrimage tradition, and yogic practice — in one compact North Indian circuit.",
  quickFacts: [
    { label: "Duration", value: "5 Days / 4 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Amritsar",
      description:
        "A flight into Amritsar, with private transfer to your hotel and the rest of the day free to rest after travelling. In the evening, an easy first outing to the Golden Temple complex for your first look at Sikhism's holiest shrine, its gold-plated upper floors reflected in the Amrit Sarovar, the sacred pool that gives both the temple and the city their names. The complex stays open and active late into the night, so an evening visit gives a genuinely different, quieter atmosphere than a daytime crowd, with the temple's golden facade lit and mirrored perfectly in the still water.",
    },
    {
      title: "Day 2 — The Golden Temple & Langar",
      description:
        "A full day at the Golden Temple complex, starting with the temple itself, where the Guru Granth Sahib, Sikhism's central scripture, is read continuously from before dawn until late at night. Visit the langar, the temple's free community kitchen, which serves a genuinely free vegetarian meal to every visitor regardless of religion, caste or background, feeding tens of thousands of people daily through entirely volunteer labour — witnessing or joining the meal is one of the most genuinely moving experiences the complex offers. In the afternoon, visit Jallianwala Bagh, a public garden adjacent to the temple and the site of a significant, tragic event in India's independence history, worth understanding alongside the temple's more purely spiritual focus.",
      image: "/images/destinations/amritsar.webp",
      imageAlt: "The Golden Temple reflected in its pool, Amritsar",
    },
    {
      title: "Day 3 — Amritsar to Haridwar",
      description:
        "A flight connecting through Delhi to Dehradun, followed by a roughly 45-minute drive to Haridwar, one of Hinduism's seven most sacred cities and the point where the Ganges first leaves the Himalayan foothills onto the plains after its long descent from the glaciers further north. Private transfer to your hotel, with the rest of the day free to settle in ahead of Har Ki Pauri, Haridwar's principal ghat, where the evening Ganga Aarti draws large crowds nightly to watch priests perform a synchronised fire ceremony at the water's edge, floating flower-and-lamp offerings sent downstream by pilgrims as the ceremony reaches its peak.",
      image: "/images/destinations/haridwar-2.webp",
      imageAlt: "Har Ki Pauri ghat and the Ganges at Haridwar",
    },
    {
      title: "Day 4 — Haridwar to Rishikesh",
      description:
        "A morning visit to Haridwar's own temples and riverside markets, before a roughly 30-minute drive to Rishikesh, a city that has drawn yoga students and spiritual seekers for generations and became internationally known after the Beatles visited Maharishi Mahesh Yogi's ashram here in 1968, an association the town still leans into today. Walk across the Lakshman Jhula suspension bridge over the Ganges, and visit one of the city's active ashrams for an introductory yoga or meditation session, genuinely different from a studio class given the riverside, Himalayan-foothill setting with the sound of the river running just below.",
      image: "/images/destinations/rishikesh-2.webp",
      imageAlt: "The Lakshman Jhula suspension bridge over the Ganges, Rishikesh",
    },
    {
      title: "Day 5 — Rishikesh & Departure",
      description:
        "A final morning in Rishikesh, with an optional early yoga or meditation session before breakfast, followed by a walk through the town's riverside ashram district and market lanes for last-minute browsing of prayer beads, incense and spiritual texts. The Ganga Aarti performed at Parmarth Niketan ashram, ideally seen the evening before, offers a genuinely different, more intimate version of the ceremony than Haridwar's larger crowds, with participants often invited to join the singing directly. A private transfer to Dehradun airport follows for your onward or international departure flight, five days across three genuinely different living spiritual traditions behind you.",
      image: "/images/destinations/rishikesh-3.webp",
      imageAlt: "The evening Ganga Aarti fire ceremony, Rishikesh",
    },
  ],
  inclusions: [
    "2 nights in a hotel of your choice in Amritsar",
    "1 night in a hotel of your choice in Haridwar",
    "1 night in a hotel of your choice in Rishikesh",
    "Daily breakfast",
    "Domestic flights, Amritsar to Haridwar (via Delhi to Dehradun)",
    "Private air-conditioned vehicle for all road transfers and sightseeing",
    "English-speaking guide throughout",
  ],
  exclusions: [
    "International and onward domestic flights",
    "Yoga or meditation session fees at Rishikesh ashrams, if booked (paid locally, arranged on request)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Living Practice, Not Preserved Ruins",
      description:
        "Every stop on this trip is an actively used site of worship or practice today, not a historical monument behind a rope.",
    },
    {
      title: "The Golden Temple's Free Kitchen",
      description:
        "The langar feeds tens of thousands of visitors daily, regardless of faith — a genuinely moving demonstration of Sikh community values.",
    },
    {
      title: "Three Distinct Traditions",
      description:
        "Sikhism, Hindu pilgrimage practice and yogic tradition, each represented by a place where that tradition is still genuinely centred.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, comfortable temperatures make walking the Golden Temple complex and Rishikesh's riverside paths genuinely pleasant. April to June turns hot across all three cities, and the July–September monsoon can affect river conditions at both Haridwar and Rishikesh.",
  },
  relatedDestinations: [
    {
      name: "Amritsar",
      tagline: "The Golden Temple",
      description: "Sikhism's holiest shrine, its gold-plated facade reflected in a surrounding sacred pool.",
      href: "/destinations/amritsar",
      image: "/images/destinations/amritsar.webp",
      imageAlt: "The Golden Temple reflected in its pool, Amritsar",
    },
    {
      name: "Rishikesh & Haridwar",
      tagline: "The Yoga Capital of the World",
      description: "Ashrams, the Ganga Aarti ceremony, and the Lakshman Jhula suspension bridge over the Ganges.",
      href: "/destinations/rishikesh-haridwar",
      image: "/images/destinations/rishikesh-2.webp",
      imageAlt: "The Lakshman Jhula suspension bridge over the Ganges, Rishikesh",
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
  showCarFleet: true,
  faqs: [
    {
      question: "Is this trip suitable for non-religious travellers?",
      answer:
        "Yes — all three stops welcome visitors regardless of personal belief, and the sites are genuinely worth experiencing for their history, architecture and atmosphere even without a specific religious connection.",
    },
    {
      question: "Can we actually eat at the Golden Temple's langar?",
      answer:
        "Yes — the free community kitchen serves any visitor a simple vegetarian meal regardless of faith; joining is welcomed and considered a genuine part of experiencing the temple.",
    },
    {
      question: "How do we get between Amritsar and Haridwar?",
      answer:
        "By a connecting flight through Delhi to Dehradun, which we include as part of this itinerary — there's no direct, practical road route between the two given the distance involved.",
    },
    {
      question: "Can this be combined with our Heritage Tours itinerary?",
      answer:
        "Yes, though it would make for a longer combined trip — both cover genuinely different spiritual ground (this one focused on living practice, Heritage Tours on historical monuments), and we can discuss combining them if you have the extra days.",
    },
    {
      question: "Is trying a yoga class in Rishikesh worthwhile if we're complete beginners?",
      answer:
        "Yes — most ashrams offering introductory sessions welcome complete beginners, and the riverside, Himalayan-foothill setting makes for a genuinely memorable first experience regardless of skill level.",
    },
  ],
  relatedExperiences: [
    {
      name: "International Yoga Festival, Rishikesh",
      tagline: "Festival Guide",
      description: "A week of yoga, meditation and Ayurveda on the banks of the Ganges each March.",
      href: "/experiences/international-yoga-festival-rishikesh",
      image: "/images/destinations/rishikesh-2.webp",
      imageAlt: "The Lakshman Jhula suspension bridge over the Ganges, Rishikesh",
    },
    {
      name: "Kumbh Mela",
      tagline: "Festival Guide",
      description: "The world's largest religious gathering, held on a rotating cycle at four sacred river sites.",
      href: "/experiences/kumbh-mela",
      image: "/images/destinations/haridwar-2.webp",
      imageAlt: "Har Ki Pauri ghat and the Ganges at Haridwar",
    },
    {
      name: "Heritage Tours",
      tagline: "Khajuraho & Varanasi · 5 Days",
      description: "A companion circuit focused on India's historical monuments rather than living spiritual practice.",
      href: "/experiences/heritage-tours",
      image: "/images/destinations/khajuraho-western-group.webp",
      imageAlt: "The Western Group temples at Khajuraho, Madhya Pradesh",
    },
  ],
  draftPendingReview: false,
};
