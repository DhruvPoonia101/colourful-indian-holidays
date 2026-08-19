import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const teejFestivalHighlights: Highlight[] = [
  {
    title: "The Royal Procession",
    description:
      "Jaipur's Teej procession, historically a royal event, still moves through the old city with elephants, camels and traditional musicians.",
  },
  {
    title: "Traditional Dress",
    description:
      "Women celebrate in bright, often green, traditional Rajasthani clothing, marking the arrival of the cooling monsoon after summer heat.",
  },
  {
    title: "Decorated Swings",
    description:
      "Flower-decorated swings are a traditional Teej sight, set up in courtyards and public spaces during the celebration.",
  },
  {
    title: "A City Procession",
    description:
      "Unlike more rural festivals, Jaipur's Teej happens through the city's main streets, making it easy to view as a visitor.",
  },
] as const;

export const teejFestivalFaqs: FaqItem[] = [
  {
    question: "What does Teej celebrate?",
    answer:
      "The arrival of the monsoon, and in Hindu tradition, the reunion of the goddess Parvati with Shiva — it's associated with marital devotion and is especially significant for married and unmarried women.",
  },
  {
    question: "Is Teej only celebrated in Jaipur?",
    answer:
      "No, Teej is celebrated across North India, but Jaipur's procession — with its royal origins — is one of the most elaborate public celebrations.",
  },
  {
    question: "Is the exact date fixed each year?",
    answer:
      "No, like most Hindu festivals it follows the lunar calendar, so the date shifts within the July–August window each year.",
  },
] as const;
