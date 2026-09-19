import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";
import type { CityCard } from "@/components/destinations/CityGrid";

/**
 * DRAFT CONTENT — expanded from an earlier, thinner version without
 * confirmed business input. Dhruv should review for accuracy.
 */
export const diwaliOverview = [
  "Diwali, the festival of lights, is India's largest and most widely celebrated festival, observed by Hindus, Sikhs and Jains across the country, each tradition attaching its own significance to the occasion — broadly, the triumph of light over darkness and good over evil. The main celebration falls on a single night determined by the lunar calendar, typically in October or November, but the surrounding festival period spans roughly five days, each with its own smaller traditions building up to and following the main night itself.",
  "The festival's visual signature is light itself — diyas, small clay oil lamps, are lit in vast numbers across homes, temples, shops and public spaces, joined in recent decades by string lights and, in many cities, fireworks, though fireworks restrictions have tightened in several major cities in recent years for air-quality reasons. For visitors, the most striking way to experience Diwali is through the cities that put on the most elaborate public displays rather than through private family celebrations, which remain the festival's core but are naturally less accessible to outside visitors.",
  "Varanasi's ghats, already among the most atmospheric settings in India, become especially striking during Diwali, lit with thousands of lamps along the Ganges in a scene that draws photographers and visitors from across the world. Amritsar's Golden Temple takes on a similarly striking character, illuminated and reflected in its surrounding pool in one of the most photographed Diwali scenes anywhere in India. Jaipur and Delhi also light up significantly during the festival, with markets and public buildings across both cities strung with lights for the full period, making either a reasonable alternative for travellers whose itinerary doesn't extend to Varanasi or Amritsar.",
];

export const diwaliHighlights: Highlight[] = [
  {
    title: "Diyas & String Lights",
    description:
      "Homes, temples and public spaces across India are lit with oil lamps and string lights for the full festival period.",
  },
  {
    title: "Varanasi's Ghats",
    description:
      "The ghats of Varanasi, already atmospheric, become especially striking during Diwali, lit with thousands of lamps along the Ganges.",
  },
  {
    title: "The Golden Temple, Illuminated",
    description:
      "Amritsar's Golden Temple is lit for Diwali and reflected in its surrounding pool, one of the most photographed Diwali scenes in India.",
  },
  {
    title: "A Family Festival",
    description:
      "At its core, Diwali is a home and family celebration — visitors experience it most vividly through markets, temples and public lighting rather than private gatherings.",
  },
] as const;

export const diwaliFaqs: FaqItem[] = [
  {
    question: "Which city is best for experiencing Diwali as a visitor?",
    answer:
      "Varanasi and Amritsar both offer especially striking public settings, though Jaipur and Delhi also light up significantly — we can build an itinerary around whichever fits your dates and interests.",
  },
  {
    question: "Is Diwali one specific day?",
    answer:
      "The main celebration is one night, but the surrounding festival period spans about five days, each with its own smaller traditions.",
  },
  {
    question: "Are fireworks a big part of Diwali?",
    answer:
      "Yes, though restrictions on fireworks have increased in some cities in recent years for air-quality reasons — we can advise on current conditions when planning your trip.",
  },
  {
    question: "Can we combine Varanasi and Amritsar in one trip to see both?",
    answer:
      "It's possible but adds meaningful travel distance given they sit in different parts of North India; most travellers choose one as their Diwali city and build the rest of their itinerary around it rather than attempting both in a single festival period.",
  },
  {
    question: "Is accommodation harder to book during Diwali?",
    answer:
      "Yes, particularly in Varanasi and Amritsar specifically for the festival dates — we'd recommend booking well in advance once your travel dates are confirmed, since demand rises significantly in the days around the main celebration.",
  },
];

export const diwaliRelatedDestinations: CityCard[] = [
  {
    name: "Varanasi",
    tagline: "India's Spiritual Heart",
    description: "The evening Ganga Aarti ceremony and centuries of continuous pilgrimage along the Ganges.",
    href: "/destinations/varanasi",
    image: "/images/destinations/varanasi-evening-ganges-aarti.webp",
    imageAlt: "The evening Ganga Aarti ceremony, Varanasi",
  },
  {
    name: "Amritsar",
    tagline: "The Golden Temple",
    description: "Sikhism's holiest shrine, its gold-plated facade reflected in a surrounding sacred pool.",
    href: "/destinations/amritsar",
    image: "/images/destinations/amritsar.webp",
    imageAlt: "The Golden Temple reflected in its pool, Amritsar",
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

export const diwaliRelatedExperiences: CityCard[] = [
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
    name: "Elephant Festival",
    tagline: "Festival Guide",
    description: "Painted elephants in procession through Jaipur on the eve of Holi, another major North Indian festival.",
    href: "/experiences/elephant-festival",
    image: "/images/destinations/elephant-festival.webp",
    imageAlt: "Decorated elephants in a festival procession",
  },
];
