import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";
import type { CityCard } from "@/components/destinations/CityGrid";

/**
 * DRAFT CONTENT — expanded from an earlier, thinner version without
 * confirmed business input. Dhruv should review for accuracy.
 *
 * Image note: no genuine photo of Ajmer Sharif Dargah or the Urs festival
 * exists in the asset library — the file previously used
 * ("urs-festival-ajmer.webp") is itself an honest "photo coming soon"
 * placeholder graphic, not a real photo. Rather than use that as the page
 * hero, this page uses a genuine Pushkar Lake photo (Ajmer's neighbouring
 * town, a short drive away) with alt text that clearly says Pushkar, not
 * Ajmer. Swap for a real Dargah photo once one is available.
 */
export const ursFestivalAjmerOverview = [
  "The Urs at Ajmer Sharif Dargah marks the anniversary of the death of Khwaja Moinuddin Chishti, the 12th-century Sufi saint whose shrine has drawn pilgrims for over 800 years, making it one of the most significant Sufi pilgrimage sites anywhere in South Asia. In Sufi tradition, a saint's death anniversary is understood as a union with the divine rather than simply a day of mourning, which gives the Urs its genuinely celebratory rather than solemn character — six days of devotional gathering, music and prayer rather than a quiet memorial.",
  "The centrepiece of each night is qawwali, a devotional form of Sufi music performed live at the shrine, often continuing well into the night with growing intensity as musicians and audience alike become caught up in the performance. What distinguishes the Urs from many religious festivals is how genuinely open it is — the Dargah and the Urs specifically draw visitors and pilgrims of multiple faiths, reflecting the shrine's long history as a site of shared devotion across religious lines rather than a strictly single-faith gathering.",
  "Ajmer itself sits a short drive from Pushkar, one of Rajasthan's most visited pilgrimage towns in its own right, making the two easy to combine on a single itinerary regardless of whether your visit is timed to the Urs specifically. Outside the festival period, Ajmer Sharif Dargah remains active as a pilgrimage site year-round, so a visit any time of year still offers a genuine sense of its significance, even without the added intensity of the Urs itself.",
];

export const ursFestivalAjmerHighlights: Highlight[] = [
  {
    title: "Qawwali Through the Night",
    description:
      "Devotional Sufi music performances run through the night at the shrine, among the most powerful live musical traditions in India.",
  },
  {
    title: "A Gathering Beyond Religious Lines",
    description:
      "The Urs draws pilgrims and visitors of multiple faiths, reflecting the shrine's long history as a site of shared devotion.",
  },
  {
    title: "The Dargah Itself",
    description:
      "Ajmer Sharif Dargah is one of the most significant Sufi shrines in South Asia, active as a pilgrimage site year-round, not just during the Urs.",
  },
  {
    title: "Close to Pushkar",
    description:
      "Ajmer sits a short drive from Pushkar, making the two easy to combine on a single Rajasthan itinerary.",
  },
] as const;

export const ursFestivalAjmerFaqs: FaqItem[] = [
  {
    question: "Can non-Muslim visitors attend the Urs?",
    answer:
      "Yes — the Dargah and the Urs festival welcome visitors of all faiths, and it's common for people of different religious backgrounds to attend and pay respects.",
  },
  {
    question: "How many days does the Urs run?",
    answer:
      "Six days, with the most significant rituals concentrated around the actual anniversary date, which shifts yearly on the Islamic lunar calendar.",
  },
  {
    question: "Is this easy to combine with a Rajasthan trip?",
    answer:
      "Yes — Ajmer is close to both Pushkar and Jaipur, so it fits naturally into a wider Rajasthan itinerary if your dates align with the festival.",
  },
  {
    question: "What should visitors wear or know about visiting the Dargah?",
    answer:
      "Modest dress covering shoulders and knees is expected, and a head covering is customary for both men and women inside the shrine itself — we can brief you on specifics when planning your visit.",
  },
  {
    question: "Is Ajmer worth visiting outside the Urs period?",
    answer:
      "Yes — the Dargah is active as a pilgrimage site throughout the year, so a visit any time still offers a genuine sense of its significance, without the added crowds and intensity of the festival period specifically.",
  },
];

export const ursFestivalAjmerRelatedDestinations: CityCard[] = [
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

export const ursFestivalAjmerRelatedExperiences: CityCard[] = [
  {
    name: "Pushkar Fair",
    tagline: "Festival Guide",
    description: "The world's largest camel and livestock fair, held at Pushkar's sacred lake each autumn.",
    href: "/experiences/pushkar-fair",
    image: "/images/destinations/pushkar.webp",
    imageAlt: "Traditional Rajasthani performers at the Pushkar Fair",
  },
  {
    name: "Elephant Festival",
    tagline: "Festival Guide",
    description: "Painted elephants in procession through Jaipur on the eve of Holi.",
    href: "/experiences/elephant-festival",
    image: "/images/destinations/elephant-festival.webp",
    imageAlt: "Decorated elephants in a festival procession",
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
