import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const jaipurAttractions: CityCard[] = [
  {
    name: "Amber Fort",
    tagline: "The Icon of Jaipur",
    description:
      "A hilltop fort-palace of pale yellow and pink sandstone overlooking Maota Lake, built from 1592 and expanded over generations — Jaipur's most-photographed monument.",
    href: "/destinations/rajasthan/jaipur",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur",
  },
  {
    name: "City Palace",
    tagline: "Still a Royal Residence",
    description:
      "Jaipur's former royal family still occupies part of this palace complex, with museum wings covering Rajput weaponry, royal portraits and textiles open to visitors.",
    href: "/destinations/rajasthan/jaipur",
    image: "/images/destinations/jaipur-city-palace.webp",
    imageAlt: "City Palace courtyard, Jaipur",
  },
  {
    name: "Hawa Mahal",
    tagline: "Palace of Winds",
    description:
      "A five-storey honeycomb facade of 953 small windows, built in 1799 so royal women could watch street life below without being seen — startlingly shallow from behind.",
    href: "/destinations/rajasthan/jaipur",
    image: "/images/destinations/jaipur-hawa-mahal.webp",
    imageAlt: "Hawa Mahal, the Palace of Winds, Jaipur",
  },
  {
    name: "Jantar Mantar",
    tagline: "UNESCO World Heritage Site",
    description:
      "Nineteen stone and marble astronomical instruments built in the 1720s, still functional today — the largest sundial can tell local time to within two seconds.",
    href: "/destinations/rajasthan/jaipur",
    image: "/images/destinations/jaipur-jantar-mantar.webp",
    imageAlt: "Jantar Mantar astronomical instruments, Jaipur",
  },
] as const;

export const jaipurQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October – March" },
  { label: "Ideal Trip Length", value: "2 – 3 Days" },
  { label: "Main Gateway", value: "Jaipur (JAI)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const jaipurGettingThere: GettingThereItem[] = [
  {
    title: "Main Gateway",
    description:
      "Jaipur International Airport (JAI) connects directly to Delhi and several other Indian cities, with a growing number of international routes. The city is also well served by rail, roughly 4–5 hours from Delhi.",
  },
  {
    title: "Typical Entry Route",
    description:
      "Most international travellers arrive via Delhi, either flying directly into Jaipur or making the classic road journey through Agra as part of the Golden Triangle route.",
  },
  {
    title: "Getting Around the City",
    description:
      "Jaipur's major sights are spread across the city, so a private car with driver is the most comfortable way to move between Amber Fort, the City Palace and the old walled city's bazaars in a single day.",
  },
] as const;

export const jaipurHighlights: Highlight[] = [
  {
    title: "The Pink City",
    description:
      "Jaipur's old city was painted a uniform terracotta pink in 1876 to welcome the Prince of Wales, and the tradition has been maintained ever since.",
  },
  {
    title: "Elephant or Jeep to Amber Fort",
    description:
      "Visitors can choose between a jeep ride or an elephant ride up to Amber Fort's entrance — worth deciding on in advance, since queues for each move at different speeds.",
  },
  {
    title: "A Living Royal City",
    description:
      "Unlike many of Rajasthan's forts, the City Palace is still partly home to Jaipur's former royal family — this isn't a museum recreation of royal life, it's a continuation of it.",
  },
  {
    title: "The Natural Golden Triangle Anchor",
    description:
      "Jaipur is almost always the third stop after Delhi and Agra on a first-time India itinerary, and the most common gateway into the rest of Rajasthan.",
  },
] as const;

export const jaipurRelatedDestinations: CityCard[] = [
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "The wider region Jaipur sits within, and its capital city.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "Ranthambore",
    tagline: "Tiger Country",
    description: "A tiger safari just a few hours from Jaipur, easily added to any itinerary.",
    href: "/destinations/rajasthan/ranthambore",
    image: "/images/destinations/ranthambore-tiger.webp",
    imageAlt: "Wild tiger at Ranthambore National Park",
  },
  {
    name: "Agra",
    tagline: "Home of the Taj Mahal",
    description: "The natural next (or previous) stop on the classic Golden Triangle route.",
    href: "/destinations/agra",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
  },
] as const;

export const jaipurFaqs: FaqItem[] = [
  {
    question: "How many days should I spend in Jaipur?",
    answer:
      "2 to 3 days is typical — enough for Amber Fort, the City Palace, Hawa Mahal and Jantar Mantar, plus time in the bazaars, without feeling rushed.",
  },
  {
    question: "Is the elephant ride up to Amber Fort recommended?",
    answer:
      "Animal welfare standards for Amber Fort's elephants have improved but remain a genuine point of debate. We're happy to arrange the jeep option instead if you'd prefer, and can talk through the considerations honestly if you're deciding.",
  },
  {
    question: "Can Jaipur be visited as a day trip from Delhi?",
    answer:
      "It's possible but not recommended — a rushed day trip means seeing very little. Jaipur genuinely rewards at least 2 full days, and pairs naturally with Agra as part of a longer Golden Triangle route.",
  },
  {
    question: "What's the best time of year to visit?",
    answer:
      "October through March, when daytime temperatures are comfortable for walking between sites. April through June brings intense heat that makes midday sightseeing genuinely uncomfortable.",
  },
];
