import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";
import type { CityCard } from "@/components/destinations/CityGrid";

/**
 * DRAFT CONTENT — expanded from an earlier, thinner version without
 * confirmed business input. Dhruv should review for accuracy.
 */
export const yogaFestivalRishikeshOverview = [
  "The International Yoga Festival in Rishikesh runs each year around International Yoga Day in early March, drawing yoga teachers, practitioners and students from dozens of countries to a city widely regarded as the birthplace of modern yoga tourism. Rishikesh's status here isn't a marketing invention — the city has hosted ashrams and yoga schools for generations, most famously drawing the Beatles to Maharishi Mahesh Yogi's ashram in 1968, and the festival grew directly out of that decades-long tradition rather than being created from scratch to attract tourism.",
  "Over the course of a week, the festival programme runs multiple simultaneous tracks across different yoga traditions — Hatha, Ashtanga, Kundalini and others — alongside meditation practices, pranayama breathing sessions, and Ayurveda workshops taught by instructors ranging from well-known international teachers to respected traditional practitioners based in Rishikesh itself. Many sessions take place directly on the banks of the Ganges, with the Himalayan foothills as a backdrop, a genuinely different setting from a typical studio-based yoga retreat elsewhere in the world.",
  "The festival welcomes practitioners of every level, from complete beginners taking their first class to advanced teachers attending for the specific instructors on the programme that year, and the schedule is generally structured so people can pick and choose sessions rather than commit to a single fixed track throughout. Beyond the festival itself, Rishikesh's broader yoga culture runs year-round — ashrams, yoga schools and the city's genuinely spiritual atmosphere along the Ganges make it worth visiting outside festival dates too, and many travellers combine a festival trip with a few extra days exploring the wider town, including the iconic Lakshman Jhula suspension bridge and the evening Ganga Aarti fire ceremony held along the riverbanks each night.",
];

export const yogaFestivalRishikeshHighlights: Highlight[] = [
  {
    title: "A Week of Classes & Workshops",
    description:
      "Multiple yoga traditions, meditation practices and Ayurveda sessions run throughout the festival, taught by instructors from around the world.",
  },
  {
    title: "Riverside Sessions",
    description:
      "Many sessions take place directly on the banks of the Ganges, with the Himalayan foothills as a backdrop.",
  },
  {
    title: "Rishikesh's Broader Yoga Culture",
    description:
      "Beyond the festival itself, Rishikesh has a year-round community of ashrams and yoga schools, worth experiencing even outside festival dates.",
  },
  {
    title: "The Lakshman Jhula Bridge",
    description:
      "Rishikesh's iconic suspension bridge across the Ganges is a short walk from many festival venues.",
  },
] as const;

export const yogaFestivalRishikeshFaqs: FaqItem[] = [
  {
    question: "Do I need yoga experience to attend?",
    answer:
      "No — the festival typically welcomes all levels, from complete beginners to advanced practitioners and teachers.",
  },
  {
    question: "Is Rishikesh worth visiting outside the festival dates?",
    answer:
      "Yes — Rishikesh's ashrams, yoga schools and riverside setting make it worth visiting any time of year, not just during the festival.",
  },
  {
    question: "Can this be combined with Haridwar?",
    answer:
      "Yes, easily — Haridwar is a short drive away and often visited alongside Rishikesh on the same trip.",
  },
  {
    question: "Can we choose specific classes, or is it a fixed programme?",
    answer:
      "Sessions generally run as a pick-and-choose schedule across the week rather than a single fixed track, so you can attend whichever traditions, teachers or workshop types interest you most.",
  },
  {
    question: "Is accommodation included, or do we need to book separately?",
    answer:
      "Accommodation is typically booked separately from festival registration itself, often at one of Rishikesh's ashrams or nearby hotels — we can help arrange this alongside your festival dates when planning your trip.",
  },
];

export const yogaFestivalRishikeshRelatedDestinations: CityCard[] = [
  {
    name: "Rishikesh & Haridwar",
    tagline: "The Yoga Capital of the World",
    description: "Ashrams, the Ganga Aarti ceremony, and the Lakshman Jhula suspension bridge over the Ganges.",
    href: "/destinations/rishikesh-haridwar",
    image: "/images/destinations/rishikesh-2.webp",
    imageAlt: "The Lakshman Jhula suspension bridge over the Ganges, Rishikesh",
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

export const yogaFestivalRishikeshRelatedExperiences: CityCard[] = [
  {
    name: "Kumbh Mela",
    tagline: "Festival Guide",
    description: "The world's largest religious gathering, held on a rotating cycle at four sacred river sites.",
    href: "/experiences/kumbh-mela",
    image: "/images/destinations/varanasi-ganges-boat.webp",
    imageAlt: "Boats on the Ganges river",
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
    name: "Kashmir Honeymoon",
    tagline: "Dal Lake, Houseboats & Snow-Capped Peaks · 5 Days",
    description: "A genuinely different kind of Himalayan trip, for couples drawn to lakes and mountains rather than a spiritual retreat.",
    href: "/experiences/kashmir-honeymoon",
    image: "/images/destinations/Srinagar-3.webp",
    imageAlt: "Houseboats on Dal Lake with snow-capped mountains behind, Srinagar",
  },
];
