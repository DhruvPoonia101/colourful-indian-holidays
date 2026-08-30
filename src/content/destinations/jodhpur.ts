import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const jodhpurAttractions: CityCard[] = [
  {
    name: "Mehrangarh Fort",
    tagline: "One of India's Best-Preserved Forts",
    description:
      "Rising 400 feet above the city on a sheer rocky outcrop, founded in 1459 and never successfully breached in battle — museum galleries cover Rajput weaponry, palanquins and royal portraits.",
    href: "/destinations/rajasthan/jodhpur",
    image: "/images/destinations/mehrangarh-fort-jodhpur.webp",
    imageAlt: "Mehrangarh Fort overlooking the blue city of Jodhpur",
  },
  {
    name: "Jaswant Thada",
    tagline: "The Taj Mahal of Marwar",
    description:
      "A white marble cenotaph with intricately carved lattice work, built in 1899 in memory of Maharaja Jaswant Singh II — a peaceful, quieter stop just below the fort.",
    href: "/destinations/rajasthan/jodhpur",
    image: "/images/destinations/jodhpur-jaswant-thada.webp",
    imageAlt: "Jaswant Thada, Jodhpur",
  },
  {
    name: "Umaid Bhawan Palace",
    tagline: "One of the World's Largest Private Residences",
    description:
      "Part royal residence, part luxury hotel and part museum, this early-20th-century palace remains home to Jodhpur's former royal family.",
    href: "/destinations/rajasthan/jodhpur",
    image: "/images/destinations/jodhpur-umaid-bhawan.webp",
    imageAlt: "Umaid Bhawan Palace, Jodhpur",
  },
  {
    name: "The Blue City Streets",
    tagline: "Old Town Wandering",
    description:
      "The indigo-washed lanes below Mehrangarh, originally a Brahmin caste marker and now a citywide aesthetic, are best explored on foot with time to get pleasantly lost.",
    href: "/destinations/rajasthan/jodhpur",
    image: "/images/destinations/jodhpur-blue-city-streets.webp",
    imageAlt: "Blue-painted old town streets, Jodhpur",
  },
] as const;

export const jodhpurQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October – March" },
  { label: "Ideal Trip Length", value: "2 Days" },
  { label: "Main Gateway", value: "Jodhpur (JDH)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const jodhpurGettingThere: GettingThereItem[] = [
  {
    title: "Main Gateway",
    description:
      "Jodhpur Airport (JDH) connects to Delhi, Mumbai and Jaipur. The city also sits on a well-connected rail line and is roughly a 5–6 hour drive from Jaipur by road.",
  },
  {
    title: "Typical Entry Route",
    description:
      "Jodhpur is most commonly visited as the middle stop on a Jaipur–Jodhpur–Udaipur circuit, arriving by road from Jaipur and continuing on to Udaipur.",
  },
  {
    title: "Getting Around the City",
    description:
      "Mehrangarh Fort and Jaswant Thada sit close together and can be covered on foot from a base near the old city, while Umaid Bhawan Palace is better reached by car.",
  },
] as const;

export const jodhpurHighlights: Highlight[] = [
  {
    title: "The Blue City",
    description:
      "Jodhpur's old town is instantly recognisable for its indigo-washed houses, best appreciated from Mehrangarh's ramparts in the late afternoon light.",
  },
  {
    title: "Never Successfully Breached",
    description:
      "Mehrangarh Fort's defensive record is genuinely remarkable for a structure this old — its 36-metre walls held through every siege attempt in its history.",
  },
  {
    title: "One of India's Best Fort Museums",
    description:
      "The museum galleries inside Mehrangarh are unusually well curated, with an audio guide included in the entry fee that's considerably more detailed than most.",
  },
  {
    title: "A Natural Circuit Midpoint",
    description:
      "Sitting almost exactly between Jaipur and Udaipur, Jodhpur breaks up the drive naturally rather than requiring a detour.",
  },
] as const;

export const jodhpurRelatedDestinations: CityCard[] = [
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "The wider region Jodhpur sits within, between Jaipur and Udaipur.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "Delhi",
    tagline: "India's Capital",
    description: "The most common international gateway before continuing on to Rajasthan.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
  {
    name: "Agra",
    tagline: "Home of the Taj Mahal",
    description: "Easily combined with Rajasthan on a wider North India route.",
    href: "/destinations/agra",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
  },
] as const;

export const jodhpurFaqs: FaqItem[] = [
  {
    question: "How many days should I spend in Jodhpur?",
    answer:
      "2 days is typical — enough for Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace and a wander through the blue city's old lanes.",
  },
  {
    question: "Is Mehrangarh Fort difficult to walk around?",
    answer:
      "There's a fair amount of walking on uneven stone, but the audio guide paces you through comfortably. A lift is also available for parts of the ascent for those who'd prefer not to walk the full ramp.",
  },
  {
    question: "Can I visit Umaid Bhawan Palace's interior?",
    answer:
      "A portion of the palace operates as a museum open to visitors, while other wings remain a private royal residence and a luxury hotel. We can confirm current visiting hours when planning your trip.",
  },
  {
    question: "What's the best time of year to visit?",
    answer:
      "October through March, for comfortable daytime temperatures suited to walking the fort and old city. Summer months bring intense desert heat.",
  },
];
