import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";
import type { CityCard } from "@/components/destinations/CityGrid";

/**
 * DRAFT CONTENT — expanded from an earlier, thinner version without
 * confirmed business input. Dhruv should review for accuracy.
 *
 * Image note: "pushkar-lake-ghats.webp" carries a visible photographer
 * watermark ("Phil and Sarah") — worth checking licensing or sourcing a
 * replacement before this goes live commercially.
 */
export const pushkarFairOverview = [
  "The Pushkar Fair is one of the largest camel and livestock fairs anywhere in the world, drawing tens of thousands of traders, herders and their animals to the desert outside Pushkar each year, usually across a roughly week-long period timed to the Hindu lunar calendar. What began centuries ago as a practical livestock trading event, where camel and cattle herders from across Rajasthan gathered to buy, sell and show off their animals, has grown into a major cultural festival layered on top of that original trade — camel races, decoration competitions, tug-of-war matches, and folk music performances now run throughout the fairgrounds alongside the everyday business of buying and selling livestock.",
  "The fair coincides with a significant Hindu pilgrimage period at Pushkar's sacred lake, one of the few lakes in India considered holy enough to draw pilgrims from across the country specifically to bathe in its waters during this window. This means visitors experience two genuinely distinct events layered on top of each other at the same time and place — the dusty, working spectacle of the livestock fair spread across open desert ground on one side of town, and the quieter, devotional atmosphere of pilgrims descending the lake's ghats to bathe on the other. Few other festivals anywhere in India combine a commercial trade fair and a religious pilgrimage this directly.",
  "For travellers, the fairgrounds themselves are the main draw — walking among thousands of camels and their traders, watching decorated camels compete in beauty and dressage contests, and catching the evening cultural performances that run as the light fades and temperatures drop. The town of Pushkar itself, small and walkable, is worth exploring alongside the fair for its own sake: the Brahma Temple, one of the only temples in India dedicated specifically to the god Brahma, sits at the heart of town, and the lake's 52 ghats ring the water with steps used for ritual bathing year-round, not just during the fair.",
];

export const pushkarFairHighlights: Highlight[] = [
  {
    title: "Tens of Thousands of Camels",
    description:
      "A genuinely vast temporary desert encampment of traders, herders and livestock, unlike anything else on a typical Rajasthan itinerary.",
  },
  {
    title: "Camel Races & Competitions",
    description:
      "Traditional competitions including camel races, decoration contests and tug-of-war matches run throughout the fair.",
  },
  {
    title: "Pilgrimage at the Sacred Lake",
    description:
      "The fair coincides with a major pilgrimage period at Pushkar Lake, adding a devotional dimension alongside the trading and festivities.",
  },
  {
    title: "Folk Music & Performances",
    description:
      "Traditional Rajasthani music and dance performances run throughout the fair grounds each evening as temperatures drop.",
  },
] as const;

export const pushkarFairFaqs: FaqItem[] = [
  {
    question: "How many days should I plan for the Pushkar Fair?",
    answer:
      "1 to 2 days is enough to see the fairgrounds, camel trading and evening performances, though the full fair period runs longer and some travellers prefer to stay 3 to 4 days to experience it at a slower pace.",
  },
  {
    question: "Is this the same as the Camel Festival in Bikaner?",
    answer:
      "They're related in spirit but are separate events — Pushkar's is larger and combines livestock trading with pilgrimage, while Bikaner's is a smaller, dedicated cultural festival built specifically around celebrating the camel rather than trading them.",
  },
  {
    question: "Can I combine this with the rest of Rajasthan?",
    answer:
      "Yes — Pushkar sits close to Ajmer and a reasonable drive from Jaipur, so it fits naturally into a wider Rajasthan itinerary if your dates align with the fair.",
  },
  {
    question: "What are the exact dates of the fair each year?",
    answer:
      "The fair follows the Hindu lunar calendar rather than a fixed Gregorian date, so it shifts each year, typically falling in October or November — we can confirm exact dates for your specific travel year when planning your trip.",
  },
  {
    question: "Is accommodation hard to find during the fair?",
    answer:
      "Yes, genuinely — hotels in Pushkar book up well in advance for fair dates, and prices rise accordingly, so we'd strongly recommend confirming accommodation as early as possible once you know your travel dates.",
  },
];

export const pushkarFairRelatedDestinations: CityCard[] = [
  {
    name: "Pushkar",
    tagline: "A Sacred Lake Town",
    description: "One of India's few Brahma temples, ringed by ghats used for ritual bathing year-round.",
    href: "/destinations/pushkar",
    image: "/images/destinations/pushkar-lake-ghats.webp",
    imageAlt: "Pushkar Lake and its ghats, Rajasthan",
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
    name: "Jaipur",
    tagline: "The Pink City",
    description: "Amber Fort, City Palace, Hawa Mahal and the bazaars of the old walled city.",
    href: "/destinations/jaipur",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
];

export const pushkarFairRelatedExperiences: CityCard[] = [
  {
    name: "Camel Festival, Bikaner",
    tagline: "Festival Guide",
    description: "A smaller, dedicated cultural festival celebrating Rajasthan's working relationship with camels.",
    href: "/experiences/camel-festival",
    image: "/images/packages/jaipur-bikaner-jaisalmer-jodhpur-udaipur-pushkar.webp",
    imageAlt: "Traditional Rajasthani performers at a desert camel festival",
  },
  {
    name: "Desert Safari",
    tagline: "Camel Camps & the Thar Desert · 3 Days",
    description: "A two-night desert camp safari for travellers who'd like more time in the dunes beyond the fair.",
    href: "/experiences/desert-safari",
    image: "/images/destinations/jaisalmer-desert.webp",
    imageAlt: "Camel caravan crossing the Thar Desert dunes near Jaisalmer",
  },
  {
    name: "Rajasthan Palace Honeymoon",
    tagline: "Two Palace Cities · 7 Days",
    description: "For couples who'd like to pair the fair with a longer stay in Rajasthan's heritage hotels.",
    href: "/experiences/rajasthan-palace-honeymoon",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
];
