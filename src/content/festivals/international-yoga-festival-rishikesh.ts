import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";

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
] as const;
