import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const heritageTours: ExperienceContent = {
  slug: "heritage-tours",
  name: "Heritage Tours",
  tagline: "Khajuraho & Varanasi · 5 Days",
  metaTitle: "India Heritage Tour Package | Khajuraho Temples, Varanasi & Sarnath",
  metaDescription:
    "A private 5-day heritage tour — Khajuraho's UNESCO-listed temple carvings, Varanasi's ghats and evening Ganga Aarti, and Sarnath, where the Buddha delivered his first sermon.",
  heroImage: "/images/destinations/khajuraho-western-group.webp",
  heroImageAlt: "The Western Group temples at Khajuraho, Madhya Pradesh",
  heroHeadline: "Heritage Tours: Temples, Ghats & Buddhist Roots",
  heroSubheadline:
    "A focused heritage circuit beyond Rajasthan's forts and Mughal monuments — UNESCO-listed temple carvings at Khajuraho, followed by Varanasi's ghats and Buddhist heritage at Sarnath.",
  overview:
    "Most first-time India itineraries build their heritage sightseeing around Mughal forts and Rajput palaces — genuinely worthwhile, but only one thread of India's much broader architectural and religious history. This tour goes elsewhere: Khajuraho, a UNESCO World Heritage Site of 10th and 11th-century Hindu and Jain temples covered in some of the most intricate stone carving anywhere in India, followed by Varanasi, one of the world's oldest continuously inhabited cities and the spiritual centre of Hinduism, and Sarnath, a short drive away, where the Buddha is traditionally said to have delivered his first sermon after attaining enlightenment. Three genuinely different religious and architectural traditions, in a single compact circuit.",
  quickFacts: [
    { label: "Duration", value: "5 Days / 4 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Khajuraho",
      description:
        "A flight into Khajuraho, which has its own small airport with direct connections from Delhi and Varanasi, making it genuinely easy to reach despite sitting somewhat off the standard first-time tourist circuit most visitors follow. Private transfer to your hotel, with the rest of the day free to rest after travelling. Khajuraho's temples are grouped into three clusters — Western, Eastern and Southern — built by the Chandela dynasty between roughly 950 and 1050 CE, of which only around 25 of an original 85 or so temples survive today, though what remains is genuinely exceptional and well worth the two days ahead.",
    },
    {
      title: "Day 2 — The Western Group Temples",
      description:
        "A full day at Khajuraho's Western Group, the largest and best-preserved cluster and home to the site's most famous temple, Kandariya Mahadeva, dedicated to Shiva and considered the finest example of Chandela-era temple architecture anywhere. The temples are covered in extraordinarily detailed stone carving depicting deities, mythological scenes, musicians, dancers and everyday life, with a smaller portion — genuinely a minority of the total carvings, though often what Khajuraho is best known for internationally — depicting intimate and erotic scenes believed to represent tantric traditions or simply a celebration of life alongside the divine. A guide is genuinely valuable here for context most visitors would otherwise miss entirely, from identifying specific deities to explaining the symbolic meaning behind particular carvings.",
      image: "/images/destinations/khajuraho-carving-detail.webp",
      imageAlt: "Detailed stone carvings on a temple at Khajuraho",
    },
    {
      title: "Day 3 — Eastern Group & Fly to Varanasi",
      description:
        "A morning visit to Khajuraho's Eastern Group, a mix of Hindu and Jain temples in the old village area, generally quieter and less visited than the Western Group despite holding some genuinely well-preserved carvings of its own, including the Parsvanatha Temple, one of the largest Jain temples on the site and notable for carvings that focus almost entirely on secular, everyday scenes rather than the divine. In the afternoon, a short flight to Varanasi, one of the world's oldest continuously inhabited cities and the spiritual heart of Hinduism, with the rest of the evening free to settle into your hotel ahead of two full days exploring the city.",
    },
    {
      title: "Day 4 — Varanasi's Ghats & the Ganga Aarti",
      description:
        "An early-morning boat ride on the Ganges at sunrise, watching the city's ghats come to life as pilgrims perform their morning rituals along the riverbank — widely considered one of the most genuinely moving experiences on an India trip, regardless of personal religious belief. In the afternoon, explore the old city's narrow lanes on foot, including Kashi Vishwanath Temple, one of the most sacred Shiva temples in India, recently rebuilt with a striking new corridor connecting it directly to the Ganges. In the evening, watch the Ganga Aarti, an elaborate fire ceremony performed nightly at Dashashwamedh Ghat, with priests performing synchronised rituals to the sound of bells and chanting as crowds gather along the steps and on boats on the water.",
      image: "/images/destinations/varanasi-evening-ganges-aarti.webp",
      imageAlt: "The evening Ganga Aarti ceremony, Varanasi",
    },
    {
      title: "Day 5 — Sarnath & Departure",
      description:
        "A morning excursion to Sarnath, roughly 30 minutes from Varanasi, where the Buddha is traditionally said to have delivered his first sermon after attaining enlightenment, making it one of Buddhism's four most important pilgrimage sites alongside Bodh Gaya, Kushinagar and Lumbini. Visit the Dhamek Stupa, a massive brick and stone structure over 40 metres tall marking the traditional site of the sermon, and the site's archaeological museum, home to the original Ashokan lion capital now used as India's national emblem. Return to Varanasi for a private transfer to the airport for your onward or international departure flight, five days spanning three genuinely distinct religious and architectural traditions behind you.",
      image: "/images/destinations/sarnath-varanasi.webp",
      imageAlt: "A Buddhist temple at Sarnath, near Varanasi",
    },
  ],
  inclusions: [
    "2 nights in a hotel of your choice in Khajuraho",
    "2 nights in a hotel of your choice in Varanasi",
    "Daily breakfast",
    "Domestic flight, Khajuraho to Varanasi",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide throughout",
    "Sunrise boat ride on the Ganges",
  ],
  exclusions: [
    "International and onward domestic flights",
    "Monument entry fees at Khajuraho and Sarnath (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Beyond Rajasthan's Forts",
      description:
        "A genuinely different heritage tradition from the Mughal and Rajput circuit most first-time visitors see, spanning Hindu, Jain and Buddhist history.",
    },
    {
      title: "India's Finest Temple Carving",
      description:
        "Khajuraho's Western Group is widely considered among the most exceptional examples of stone carving anywhere in India.",
    },
    {
      title: "A Living Spiritual Centre",
      description:
        "Varanasi's ghats and the nightly Ganga Aarti offer a genuinely different, more immersive kind of heritage experience than a monument visit alone.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make walking Khajuraho's temple complexes and Varanasi's ghats genuinely comfortable. April to June turns hot across both regions, and the July–September monsoon can affect river conditions in Varanasi specifically.",
  },
  relatedDestinations: [
    {
      name: "Khajuraho",
      tagline: "UNESCO Temple Carvings",
      description: "10th and 11th-century Hindu and Jain temples covered in some of India's finest stone carving.",
      href: "/destinations/khajuraho",
      image: "/images/destinations/khajuraho-kandariya-mahadeva.webp",
      imageAlt: "The Kandariya Mahadeva Temple, Khajuraho",
    },
    {
      name: "Varanasi",
      tagline: "India's Spiritual Heart",
      description: "The evening Ganga Aarti ceremony and centuries of continuous pilgrimage along the Ganges.",
      href: "/destinations/varanasi",
      image: "/images/destinations/varanasi-evening-ganges-aarti.webp",
      imageAlt: "The evening Ganga Aarti ceremony, Varanasi",
    },
    {
      name: "Rajasthan",
      tagline: "Land of Kings",
      description: "Forts, palaces and desert citadels, for the more commonly visited side of Indian heritage.",
      href: "/destinations/rajasthan",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is the content at Khajuraho appropriate for a family trip?",
      answer:
        "Yes, generally — the erotic carvings are a genuine minority of the site's total sculpture, concentrated on specific temple exteriors, and a good guide presents them factually and briefly alongside the far larger body of deity, mythological and everyday-life carvings.",
    },
    {
      question: "How do we get between Khajuraho and Varanasi?",
      answer:
        "By a short domestic flight, which we include as part of this itinerary — the two cities aren't practically connected by a reasonable road journey, so flying is the standard way to combine them.",
    },
    {
      question: "Is the sunrise boat ride on the Ganges worth the early start?",
      answer:
        "Yes, genuinely — the ghats are at their most active and atmospheric at dawn, and it's consistently the experience most travellers describe as the highlight of their time in Varanasi.",
    },
    {
      question: "Can this be combined with the Golden Triangle or Rajasthan?",
      answer:
        "Yes — Varanasi connects easily by flight to Delhi, so this circuit can be added before or after a Golden Triangle Tour or a wider Rajasthan itinerary if you have the extra days.",
    },
    {
      question: "Is Sarnath worth visiting if we're not specifically interested in Buddhism?",
      answer:
        "Yes — beyond its religious significance, the Dhamek Stupa and the archaeological museum (home to India's national emblem) are worthwhile historically and architecturally regardless of personal interest in Buddhist teaching specifically.",
    },
  ],
  relatedExperiences: [
    {
      name: "Kumbh Mela",
      tagline: "Festival Guide",
      description: "The world's largest religious gathering, held on a rotating cycle at four sacred river sites.",
      href: "/experiences/kumbh-mela",
      image: "/images/destinations/haridwar-2.webp",
      imageAlt: "Har Ki Pauri ghat and the Ganges at Haridwar",
    },
    {
      name: "Diwali, the Festival of Lights",
      tagline: "Festival Guide",
      description: "Varanasi's ghats lit with thousands of lamps, one of the most striking Diwali scenes in India.",
      href: "/experiences/diwali",
      image: "/images/destinations/diwali.webp",
      imageAlt: "Diyas and a rangoli pattern lit for Diwali",
    },
    {
      name: "Golden Triangle Tour",
      tagline: "Delhi – Agra – Jaipur",
      description: "The more commonly visited Mughal and Rajput heritage circuit, for a different side of Indian history.",
      href: "/tours/golden-triangle-tour-classic",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
  ],
  draftPendingReview: false,
};
