import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const onamHighlights: Highlight[] = [
  {
    title: "Pookalam Flower Carpets",
    description:
      "Intricate flower carpets laid at doorsteps and courtyards, growing more elaborate each day through the ten-day festival.",
  },
  {
    title: "Vallam Kali Snake Boat Races",
    description:
      "Dramatic races between long traditional boats, each crewed by dozens of rowers, along Kerala's backwaters.",
  },
  {
    title: "The Onam Sadhya Feast",
    description:
      "A traditional multi-course vegetarian feast served on a banana leaf, considered one of Kerala's great culinary traditions.",
  },
  {
    title: "Ten Days of Celebration",
    description:
      "Unlike single-day festivals, Onam builds over ten days, giving visitors flexibility in when to experience it.",
  },
] as const;

export const onamFaqs: FaqItem[] = [
  {
    question: "Do I need to time my whole trip around Onam?",
    answer:
      "Not necessarily — since it runs ten days, you have more flexibility than with single-day festivals, and Kerala's backwaters and hill stations are worth visiting regardless of festival timing.",
  },
  {
    question: "Where's the best place to see the snake boat races?",
    answer:
      "The Nehru Trophy Boat Race at Alappuzha (Alleppey) is the most famous, though several backwater towns hold their own races during the festival period.",
  },
  {
    question: "Is the Onam feast available to visitors?",
    answer:
      "Yes — many hotels and restaurants across Kerala serve a traditional Onam Sadhya during the festival period, and it's well worth experiencing.",
  },
] as const;
