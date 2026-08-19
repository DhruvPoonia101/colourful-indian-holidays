import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";

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
] as const;
