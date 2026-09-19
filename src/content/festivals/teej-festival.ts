import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";
import type { CityCard } from "@/components/destinations/CityGrid";

/**
 * DRAFT CONTENT — expanded from an earlier, thinner version without
 * confirmed business input. Dhruv should review for accuracy.
 *
 * Image note: "teej-festival.webp" shows women in red dress celebrating
 * Teej, but the male headwear visible (Dhaka topi caps) and overall
 * styling look more consistent with Teej as celebrated in Nepal than in
 * Rajasthan — the text below describes Jaipur's Teej specifically
 * (matching the site's existing Rajasthan positioning), but the photo may
 * not depict Jaipur. Used with cautious, location-neutral alt text rather
 * than claiming it shows Jaipur — worth verifying the actual source.
 */
export const teejFestivalOverview = [
  "Teej marks the arrival of the monsoon after Rajasthan's punishing summer heat, and in Jaipur specifically takes the form of a genuinely elaborate public procession with roots in the city's royal history — the Maharajas once organised the celebration themselves, and the modern procession still moves through the old city's main streets with decorated elephants, camels, and traditional musicians and dancers leading the way. In Hindu tradition, the festival also marks the reunion of the goddess Parvati with Shiva, giving it particular significance for married and unmarried women, who traditionally observe fasts and prayers for marital wellbeing around the same period.",
  "The festival's visual signature is green — women celebrate in bright green traditional Rajasthani clothing specifically, a colour chosen to reflect the fresh growth the monsoon brings after months of dry heat, and courtyards and public spaces across the city fill with flower-decorated swings, a traditional Teej sight used for a customary swinging ritual associated with the celebration. Unlike more rural or temple-based festivals elsewhere in India, Jaipur's Teej procession happens directly through the city's main streets, making it one of the more visually accessible festivals for visitors to actually watch rather than observe from a distance.",
  "Because Teej is a citywide procession rather than a single fixed venue, it pairs naturally with general Jaipur sightseeing — Amber Fort, City Palace and Hawa Mahal are all easily combined with a Teej visit on the same trip without requiring extra travel days. Teej itself is celebrated across much of North India and Nepal in various forms, though Jaipur's version, with its royal procession heritage, is widely considered one of the most elaborate public celebrations of the festival anywhere.",
];

export const teejFestivalHighlights: Highlight[] = [
  {
    title: "The Royal Procession",
    description:
      "Jaipur's Teej procession, historically a royal event, still moves through the old city with elephants, camels and traditional musicians.",
  },
  {
    title: "Traditional Dress",
    description:
      "Women celebrate in bright, often green, traditional Rajasthani clothing, marking the arrival of the cooling monsoon after summer heat.",
  },
  {
    title: "Decorated Swings",
    description:
      "Flower-decorated swings are a traditional Teej sight, set up in courtyards and public spaces during the celebration.",
  },
  {
    title: "A City Procession",
    description:
      "Unlike more rural festivals, Jaipur's Teej happens through the city's main streets, making it easy to view as a visitor.",
  },
] as const;

export const teejFestivalFaqs: FaqItem[] = [
  {
    question: "What does Teej celebrate?",
    answer:
      "The arrival of the monsoon, and in Hindu tradition, the reunion of the goddess Parvati with Shiva — it's associated with marital devotion and is especially significant for married and unmarried women.",
  },
  {
    question: "Is Teej only celebrated in Jaipur?",
    answer:
      "No, Teej is celebrated across much of North India and Nepal in various forms, but Jaipur's procession — with its royal origins — is one of the most elaborate public celebrations specifically.",
  },
  {
    question: "Is the exact date fixed each year?",
    answer:
      "No, like most Hindu festivals it follows the lunar calendar, so the date shifts within the July–August window each year.",
  },
  {
    question: "Do we need tickets to watch the procession?",
    answer:
      "No — the procession moves through Jaipur's public streets, so it can be watched freely, though arriving early to secure a good vantage point along the route is worth doing given the crowds it draws.",
  },
  {
    question: "Can this be combined with the rest of Rajasthan?",
    answer:
      "Yes — since it's a Jaipur city event with no extra travel required, it fits naturally into any wider Rajasthan circuit that includes Jaipur, and we can time your itinerary around the festival dates if you'd like to catch it.",
  },
];

export const teejFestivalRelatedDestinations: CityCard[] = [
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

export const teejFestivalRelatedExperiences: CityCard[] = [
  {
    name: "Elephant Festival",
    tagline: "Festival Guide",
    description: "Painted elephants in procession through Jaipur on the eve of Holi, another royal Rajasthani tradition.",
    href: "/experiences/elephant-festival",
    image: "/images/destinations/elephant-festival.webp",
    imageAlt: "Decorated elephants in a festival procession",
  },
  {
    name: "Pushkar Fair",
    tagline: "Festival Guide",
    description: "The world's largest camel and livestock fair, held at Pushkar's sacred lake each autumn.",
    href: "/experiences/pushkar-fair",
    image: "/images/destinations/pushkar.webp",
    imageAlt: "Traditional Rajasthani performers at the Pushkar Fair",
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
