import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";
import type { CityCard } from "@/components/destinations/CityGrid";

/**
 * DRAFT CONTENT — expanded from an earlier, thinner version without
 * confirmed business input. Dhruv should review for accuracy.
 *
 * Image note: only Haridwar photos exist in the asset library, and Kumbh
 * Mela rotates between four cities (Haridwar, Prayagraj, Ujjain, Nashik).
 * Both images used are genuine Haridwar photos, captioned honestly as
 * Haridwar specifically rather than implying they represent every host
 * city or a specific upcoming edition.
 */
export const kumbhMelaOverview = [
  "Kumbh Mela is widely considered the largest peaceful gathering of human beings anywhere on Earth, drawing tens of millions of pilgrims to bathe at a sacred river confluence during a window determined by Hindu astrology rather than a fixed calendar date. The festival rotates between four cities — Haridwar and Prayagraj on the Ganges, Ujjain on the Shipra, and Nashik on the Godavari — with each city hosting roughly once every twelve years, and the largest editions, held at Prayagraj, have recorded attendance estimates running into the hundreds of millions across the full festival period.",
  "The central ritual is snana, ritual bathing at the river at astrologically determined auspicious moments, believed to cleanse sin and help free the soul from the cycle of rebirth. Alongside the bathing itself, the festival draws striking processions of Naga Sadhus, ash-covered ascetic holy men who spend much of their lives in extreme renunciation and austerity, appearing publicly at Kumbh Mela in a centuries-old tradition that remains one of the festival's most visually distinctive sights. For the duration of the event, host cities effectively double or triple in size, with a vast temporary tent city built specifically to house the influx, complete with its own infrastructure, medical facilities and security.",
  "Because of the sheer scale involved, Kumbh Mela is genuinely unlike any other festival on this list to plan around — dates need confirming years in advance given the astrological calculation involved, and a private guide with direct knowledge of the specific host city and bathing schedule is less a luxury than a practical necessity given crowd sizes that can reach tens of millions at a single location on the most auspicious days. Visitors who prepare properly, however, describe it as a genuinely unrepeatable experience, unlike anything comparable anywhere else in the world.",
];

export const kumbhMelaHighlights: Highlight[] = [
  {
    title: "The Ritual Bathing",
    description:
      "Pilgrims bathe at the sacred river confluence at specific auspicious times, believed to cleanse sin and free the soul from the cycle of rebirth.",
  },
  {
    title: "Naga Sadhu Processions",
    description:
      "Ash-covered ascetic holy men, some who spend their lives in extreme austerity, process to the river in a striking, centuries-old tradition.",
  },
  {
    title: "A Temporary City",
    description:
      "A vast tent city is built for the duration of the festival, complete with its own infrastructure, to house the tens of millions who attend.",
  },
  {
    title: "Rotating Host Cities",
    description:
      "The festival rotates between Haridwar, Prayagraj, Ujjain and Nashik, with timing set by Hindu astrology rather than the standard calendar.",
  },
] as const;

export const kumbhMelaFaqs: FaqItem[] = [
  {
    question: "Is Kumbh Mela suitable for international visitors?",
    answer:
      "Yes, though it requires real preparation given the crowds — this is one event where we strongly recommend a private guide who knows the specific site and timing, rather than attempting it independently.",
  },
  {
    question: "How crowded does it actually get?",
    answer:
      "Extremely — on the most auspicious bathing days, tens of millions of people can be present at a single location. We plan visit timing carefully to balance the experience against the crowd intensity.",
  },
  {
    question: "Do I need to know the exact dates in advance?",
    answer:
      "Yes — Kumbh Mela's timing is set years ahead by astrological calculation, so it needs to be planned into a trip well in advance rather than added last-minute.",
  },
  {
    question: "Which of the four host cities is best to visit?",
    answer:
      "Each has its own character and scale — Prayagraj's editions tend to be the largest, while Haridwar's are often considered somewhat more manageable for a first-time visitor; we can advise based on which edition falls within your travel window.",
  },
  {
    question: "Is basic infrastructure available during the festival despite the crowds?",
    answer:
      "Yes — host cities set up extensive temporary infrastructure specifically for the event, including medical facilities and security, though conditions are still genuinely more basic than everyday city infrastructure given the sheer scale involved.",
  },
];

export const kumbhMelaRelatedDestinations: CityCard[] = [
  {
    name: "Rishikesh & Haridwar",
    tagline: "The Yoga Capital of the World",
    description: "Ashrams, the Ganga Aarti ceremony, and the Lakshman Jhula suspension bridge over the Ganges.",
    href: "/destinations/rishikesh-haridwar",
    image: "/images/destinations/haridwar-2.webp",
    imageAlt: "Har Ki Pauri ghat and the Ganges at Haridwar",
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
    name: "Delhi",
    tagline: "India's Capital",
    description: "Mughal forts, colonial avenues, and the gateway to North India.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
];

export const kumbhMelaRelatedExperiences: CityCard[] = [
  {
    name: "International Yoga Festival, Rishikesh",
    tagline: "Festival Guide",
    description: "A week of yoga, meditation and Ayurveda on the banks of the Ganges each March.",
    href: "/experiences/international-yoga-festival-rishikesh",
    image: "/images/destinations/rishikesh-2.webp",
    imageAlt: "The Lakshman Jhula suspension bridge over the Ganges, Rishikesh",
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
    name: "The Urs Festival, Ajmer",
    tagline: "Festival Guide",
    description: "Six days of devotional Sufi music and pilgrimage at one of South Asia's most significant shrines.",
    href: "/experiences/the-urs-festival-ajmer",
    image: "/images/destinations/pushkar-lake-ghats.webp",
    imageAlt: "Pushkar Lake and its ghats, near Ajmer, Rajasthan",
  },
];
