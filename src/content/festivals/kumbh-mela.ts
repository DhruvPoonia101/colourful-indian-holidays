import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";

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
] as const;
