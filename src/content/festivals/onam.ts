import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";
import type { CityCard } from "@/components/destinations/CityGrid";

/**
 * DRAFT CONTENT — expanded from an earlier, thinner version without
 * confirmed business input. Dhruv should review for accuracy.
 */
export const onamOverview = [
  "Onam is Kerala's biggest annual festival, a ten-day harvest celebration rooted in the legend of King Mahabali, a benevolent mythical ruler whose annual return to visit his former subjects is what the festival commemorates. Unlike single-day festivals elsewhere in India, Onam builds gradually — each of the ten days has its own name and associated rituals, with the celebrations intensifying as the festival approaches its climax on Thiru Onam, the tenth and most significant day.",
  "The festival's most recognisable visual tradition is the pookalam, an intricate flower carpet laid at doorsteps and courtyards each morning, using different flowers arranged in concentric geometric patterns that grow progressively larger and more elaborate as the ten days progress, culminating in genuinely elaborate designs by the final day. Alongside the pookalam, Vallam Kali, Kerala's traditional snake boat races, draw large crowds to the state's backwaters — long wooden boats crewed by upwards of a hundred rowers race in dramatic, closely fought contests, with the Nehru Trophy Boat Race at Alappuzha the most famous and widely attended of these.",
  "The festival's culinary centrepiece is the Onam Sadhya, a traditional vegetarian feast served on a fresh banana leaf, typically running to well over twenty individual dishes representing different tastes and textures in a single meal, considered among Kerala's great culinary traditions and widely available at hotels and restaurants across the state during the festival period specifically. Because Onam runs across ten days rather than a single date, it offers genuine flexibility for visitors — Kerala's backwaters, hill stations and beaches are all worth combining with a festival visit, and there's no need to time an entire trip around one specific day the way shorter festivals elsewhere require.",
];

export const onamHighlights: Highlight[] = [
  {
    title: "Pookalam Flower Carpets",
    description:
      "Intricate flower carpets laid at doorsteps and courtyards, growing more elaborate each day through the ten-day festival.",
  },
  {
    title: "Vallam Kali Snake Boat Races",
    description:
      "Dramatic races between long traditional boats, each crewed by dozens of rowers, along Kerala's backwaters.",
  },
  {
    title: "The Onam Sadhya Feast",
    description:
      "A traditional multi-course vegetarian feast served on a banana leaf, considered one of Kerala's great culinary traditions.",
  },
  {
    title: "Ten Days of Celebration",
    description:
      "Unlike single-day festivals, Onam builds over ten days, giving visitors flexibility in when to experience it.",
  },
] as const;

export const onamFaqs: FaqItem[] = [
  {
    question: "Do I need to time my whole trip around Onam?",
    answer:
      "Not necessarily — since it runs ten days, you have more flexibility than with single-day festivals, and Kerala's backwaters and hill stations are worth visiting regardless of festival timing.",
  },
  {
    question: "Where's the best place to see the snake boat races?",
    answer:
      "The Nehru Trophy Boat Race at Alappuzha (Alleppey) is the most famous, though several backwater towns hold their own races during the festival period.",
  },
  {
    question: "Is the Onam feast available to visitors?",
    answer:
      "Yes — many hotels and restaurants across Kerala serve a traditional Onam Sadhya during the festival period, and it's well worth experiencing.",
  },
  {
    question: "How many dishes are actually in a Sadhya feast?",
    answer:
      "Traditionally well over twenty individual dishes served together on one banana leaf, ranging from rice and sambar to pickles, chutneys and a final payasam dessert — it's genuinely a substantial meal best approached with an empty stomach.",
  },
  {
    question: "Can Onam be combined with our other Kerala tours?",
    answer:
      "Yes — Onam pairs naturally with our Kerala Tours classic circuit, the Alleppey Backwaters Tour, or the Kerala Backwaters Honeymoon, since the festival's backwater-based traditions overlap directly with those itineraries.",
  },
];

export const onamRelatedDestinations: CityCard[] = [
  {
    name: "Kerala",
    tagline: "God's Own Country",
    description: "Palm-lined backwaters, misty tea gardens, and a coastline layered with trading history.",
    href: "/destinations/kerala",
    image: "/images/destinations/alleppey-backwaters.webp",
    imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
  },
  {
    name: "Tamil Nadu Beaches",
    tagline: "South India's Coastline",
    description: "A natural extension south for travellers who'd like more of the coast beyond Kerala.",
    href: "/destinations/tamil-nadu-beaches",
    image: "/images/destinations/tamil-nadu-beaches.webp",
    imageAlt: "Tamil Nadu's coastline",
  },
  {
    name: "Goa",
    tagline: "India's Beach Capital",
    description: "Portuguese-era churches and beaches, for travellers extending their South India trip further north.",
    href: "/destinations/goa",
    image: "/images/destinations/Goa.webp",
    imageAlt: "Goa's coastline",
  },
];

export const onamRelatedExperiences: CityCard[] = [
  {
    name: "Kerala Backwaters Honeymoon",
    tagline: "Houseboats, Tea Gardens & the Coast · 5 Days",
    description: "A private houseboat cruise through the same backwaters where Onam's snake boat races take place.",
    href: "/experiences/kerala-backwaters-honeymoon",
    image: "/images/destinations/alleppey-backwaters.webp",
    imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
  },
  {
    name: "Alleppey Backwaters Tour",
    tagline: "Houseboats & Palm-Lined Canals · 4 Days",
    description: "A backwaters-focused Kerala trip, easy to time around the festival's Nehru Trophy Boat Race.",
    href: "/tours/alleppey-backwaters-tour",
    image: "/images/destinations/alleppey-backwaters.webp",
    imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
  },
  {
    name: "Kerala Tours",
    tagline: "The Classic Circuit · 6 Days",
    description: "Kochi, Alleppey and Munnar together, for a genuine first-time introduction to Kerala.",
    href: "/tours/kerala-tours-classic",
    image: "/images/destinations/alleppey-backwaters.webp",
    imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
  },
];
