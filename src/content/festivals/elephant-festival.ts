import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";
import type { CityCard } from "@/components/destinations/CityGrid";

/**
 * DRAFT CONTENT — expanded from an earlier, thinner version without
 * confirmed business input. Dhruv should review for accuracy.
 *
 * Image note: "elephant-festival.webp" shows genuine painted elephants in
 * a procession, but the background architecture looks more consistent
 * with Mysore Palace (associated with Mysore's Dasara elephant
 * procession) than with any Jaipur landmark. Used here with cautious,
 * location-neutral alt text rather than claiming it depicts Jaipur
 * specifically — worth verifying the actual source before this goes live.
 */
export const elephantFestivalOverview = [
  "Jaipur's Elephant Festival is held each year on the eve of Holi, the Hindu festival of colours, adding a distinctly Rajasthani royal tradition to a period already busy with celebration across the city. The festival's centrepiece is a procession of elephants painted with intricate traditional patterns and dressed in elaborate decorative cloth, a practice with roots in Jaipur's royal processions, when the Maharajas' elephants were similarly adorned for ceremonial occasions.",
  "Beyond the elephant procession itself, the festival grounds fill with folk music and dance performances, elephant-related games and competitions, and a generally festive atmosphere that spills into the following day's Holi celebrations, when the city's streets and public spaces fill with coloured powder and water in the more widely known nationwide tradition. For visitors, timing a trip to catch both events back to back gives a genuinely fuller sense of Jaipur's festival calendar than either alone.",
  "Because the festival is held in Jaipur itself, typically at the Sawai Man Singh Stadium or a similarly central public ground depending on the year, it requires no extra travel beyond a standard Jaipur city visit — making it one of the easier festivals on this list to combine with general Rajasthan sightseeing. Elephant welfare in festival and tourism contexts generally is a genuine, ongoing consideration in India, and we're happy to discuss this directly with anyone weighing whether to include this specific festival in their trip.",
];

export const elephantFestivalHighlights: Highlight[] = [
  {
    title: "Painted Elephants",
    description:
      "Elephants decorated with intricate traditional patterns and vivid colours, continuing a royal Rajasthani procession tradition.",
  },
  {
    title: "Timed with Holi",
    description:
      "The festival's proximity to Holi means visitors often experience both the colour festival and the elephant procession in the same trip.",
  },
  {
    title: "Folk Performances",
    description:
      "Traditional Rajasthani music, dance and elephant-related games and competitions run alongside the main procession.",
  },
  {
    title: "A Jaipur City Event",
    description:
      "Held in the heart of Jaipur, making it easy to combine with the city's forts and palaces on the same trip.",
  },
] as const;

export const elephantFestivalFaqs: FaqItem[] = [
  {
    question: "Is this the same as Holi?",
    answer:
      "No, though they're usually held around the same time — the Elephant Festival is its own distinct event centred on the painted elephant procession, held the evening before Holi's general colour celebrations happen across India.",
  },
  {
    question: "Is the festival animal-welfare conscious?",
    answer:
      "Elephant welfare in festival contexts is a genuine, ongoing consideration in India generally; we can discuss this directly and advise as part of planning if it's a priority for you before deciding whether to include this festival.",
  },
  {
    question: "Can this be combined with Rajasthan sightseeing?",
    answer:
      "Yes — it's held in Jaipur itself, so it fits naturally alongside a Jaipur city tour without extra travel, and pairs well with the following day's Holi celebrations if your dates allow both.",
  },
  {
    question: "What are the exact dates each year?",
    answer:
      "The festival is timed to the evening before Holi, which follows the Hindu lunar calendar and typically falls in March — we can confirm exact dates for your specific travel year when planning your trip.",
  },
  {
    question: "Should we also plan to experience Holi itself?",
    answer:
      "Many travellers do combine both, given they fall on consecutive days — Holi's colour celebrations are a genuinely different, more chaotic experience than the more structured elephant procession, and some people prefer one over the other, so we can help plan around your specific preference.",
  },
];

export const elephantFestivalRelatedDestinations: CityCard[] = [
  {
    name: "Jaipur",
    tagline: "The Pink City",
    description: "Amber Fort, City Palace, Hawa Mahal and the bazaars of the old walled city.",
    href: "/destinations/jaipur",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "Forts, palaces and desert citadels across six essential cities.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "Pushkar",
    tagline: "A Sacred Lake Town",
    description: "One of India's few Brahma temples, ringed by ghats used for ritual bathing year-round.",
    href: "/destinations/pushkar",
    image: "/images/destinations/pushkar-lake-ghats.webp",
    imageAlt: "Pushkar Lake and its ghats, Rajasthan",
  },
];

export const elephantFestivalRelatedExperiences: CityCard[] = [
  {
    name: "Pushkar Fair",
    tagline: "Festival Guide",
    description: "The world's largest camel and livestock fair, held at Pushkar's sacred lake each autumn.",
    href: "/experiences/pushkar-fair",
    image: "/images/destinations/pushkar.webp",
    imageAlt: "Traditional Rajasthani performers at the Pushkar Fair",
  },
  {
    name: "Camel Festival, Bikaner",
    tagline: "Festival Guide",
    description: "A dedicated cultural festival celebrating Rajasthan's working relationship with camels.",
    href: "/experiences/camel-festival",
    image: "/images/destinations/jaisalmer-desert.webp",
    imageAlt: "Camels in the Thar Desert, Rajasthan",
  },
  {
    name: "Rajasthan Palace Honeymoon",
    tagline: "Two Palace Cities · 7 Days",
    description: "For couples who'd like to pair the festival with a longer stay in Rajasthan's heritage hotels.",
    href: "/experiences/rajasthan-palace-honeymoon",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
];
