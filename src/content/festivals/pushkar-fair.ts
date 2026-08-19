import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const pushkarFairHighlights: Highlight[] = [
  {
    title: "Tens of Thousands of Camels",
    description:
      "A genuinely vast temporary desert encampment of traders, herders and livestock, unlike anything else on a typical Rajasthan itinerary.",
  },
  {
    title: "Camel Races & Competitions",
    description:
      "Traditional competitions including camel races and decoration contests run throughout the fair.",
  },
  {
    title: "Pilgrimage at the Sacred Lake",
    description:
      "The fair coincides with a major pilgrimage period at Pushkar Lake, adding a devotional dimension alongside the trading and festivities.",
  },
  {
    title: "Folk Music & Performances",
    description:
      "Traditional Rajasthani music and dance performances run throughout the fair grounds each evening.",
  },
] as const;

export const pushkarFairFaqs: FaqItem[] = [
  {
    question: "How many days should I plan for the Pushkar Fair?",
    answer:
      "1 to 2 days is enough to see the fairgrounds, camel trading and evening performances, though the full fair period runs longer.",
  },
  {
    question: "Is this the same as the Camel Festival in Bikaner?",
    answer:
      "They're related in spirit but are separate events — Pushkar's is larger and combines livestock trading with pilgrimage, while Bikaner's is a smaller, dedicated cultural festival.",
  },
  {
    question: "Can I combine this with the rest of Rajasthan?",
    answer:
      "Yes — Pushkar sits close to Ajmer and a reasonable drive from Jaipur, so it fits naturally into a wider Rajasthan itinerary if your dates align with the fair.",
  },
] as const;
