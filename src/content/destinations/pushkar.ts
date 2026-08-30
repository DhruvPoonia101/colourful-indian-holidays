import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const pushkarAttractions: CityCard[] = [
  {
    name: "Pushkar Camel Fair",
    tagline: "India's Most Colourful Fair",
    description:
      "Held each autumn, this is one of the world's largest camel fairs — tens of thousands of camels, traders and pilgrims fill the desert around the town for several days of trading and festivity.",
    href: "/destinations/rajasthan/pushkar",
    image: "/images/destinations/pushkar.webp",
    imageAlt: "Traditional Rajasthani procession at the Pushkar Camel Fair",
  },
  {
    name: "Pushkar Lake & Ghats",
    tagline: "A Sacred Lake",
    description:
      "Ringed by more than 50 ghats, Pushkar Lake is said in Hindu mythology to have formed where a lotus petal fell from Lord Brahma's hand.",
    href: "/destinations/rajasthan/pushkar",
    image: "/images/destinations/pushkar-lake-ghats.webp",
    imageAlt: "Pushkar Lake and its ghats",
  },
  {
    name: "Brahma Temple",
    tagline: "One of the Very Few",
    description:
      "Despite Brahma's prominence in Hindu cosmology, temples dedicated to him are exceptionally rare — this is one of the very few in India, and Pushkar's most significant religious site.",
    href: "/destinations/rajasthan/pushkar",
    image: "/images/destinations/pushkar-brahma-temple.webp",
    imageAlt: "Brahma Temple, Pushkar",
  },
  {
    name: "Pushkar Bazaar",
    tagline: "A Small-Town Market",
    description:
      "Narrow lanes of shops selling silver jewellery, leather goods and semi-precious stones — a relaxed, low-key contrast to the bazaars of Jaipur.",
    href: "/destinations/rajasthan/pushkar",
    image: "/images/destinations/pushkar-bazaar.webp",
    imageAlt: "Sadar Bazaar, Pushkar",
  },
] as const;

export const pushkarQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October – March" },
  { label: "Ideal Trip Length", value: "1 Day" },
  { label: "Main Gateway", value: "Jaipur (JAI)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const pushkarGettingThere: GettingThereItem[] = [
  {
    title: "Main Gateway",
    description:
      "Pushkar has no airport of its own; Jaipur (around 2.5 hours by road) is the nearest major gateway, with Ajmer's railway station about 20 minutes away.",
  },
  {
    title: "Typical Entry Route",
    description:
      "Pushkar is almost always visited as a day trip or single-night stop within a wider Rajasthan itinerary, most commonly paired with Ajmer given how close the two sit.",
  },
  {
    title: "Camel Fair Timing",
    description:
      "The annual Camel Fair typically falls in October or November, timed to the Hindu lunar calendar — worth checking exact dates in advance if that's specifically why you're visiting.",
  },
] as const;

export const pushkarHighlights: Highlight[] = [
  {
    title: "A Small Town With Outsized Significance",
    description:
      "Despite its modest size, Pushkar holds real religious weight in Hindu tradition, centred on its lake and one of India's only Brahma temples.",
  },
  {
    title: "One of the World's Largest Camel Fairs",
    description:
      "If your dates line up with autumn, the Camel Fair transforms the town completely — a genuinely unique spectacle most travellers never get the chance to see.",
  },
  {
    title: "A Relaxed Pace After Busier Cities",
    description:
      "Coming after Jaipur, Jodhpur or Udaipur, Pushkar's low-key atmosphere is a welcome change of pace on a longer Rajasthan circuit.",
  },
  {
    title: "Easily Paired With Ajmer",
    description:
      "The Ajmer Sharif Dargah, one of South Asia's most important Sufi shrines, sits only around 15 kilometres away and is commonly combined with Pushkar in a single day.",
  },
] as const;

export const pushkarRelatedDestinations: CityCard[] = [
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "The wider region Pushkar sits within, near Ajmer.",
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

export const pushkarFaqs: FaqItem[] = [
  {
    question: "Is Pushkar worth visiting outside of Camel Fair season?",
    answer:
      "Yes — the lake, ghats and Brahma Temple are worth seeing year-round, and the town is considerably quieter and more relaxed outside the fair, which some travellers actually prefer.",
  },
  {
    question: "How many days should I spend in Pushkar?",
    answer:
      "A single day is typical, often paired with a visit to nearby Ajmer. If your trip coincides with the Camel Fair, an overnight stay lets you experience the evenings, which are a large part of the atmosphere.",
  },
  {
    question: "Can non-Hindus enter the Brahma Temple?",
    answer:
      "Yes, the temple welcomes visitors of all backgrounds, though modest dress and respectful behaviour are expected, as at any active place of worship.",
  },
  {
    question: "Is Pushkar vegetarian and alcohol-free?",
    answer:
      "Due to its religious significance, Pushkar is officially vegetarian and alcohol is not sold within the town — worth knowing in advance if it affects your plans.",
  },
];
