import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const elephantFestivalHighlights: Highlight[] = [
  {
    title: "Painted Elephants",
    description:
      "Elephants decorated with intricate traditional patterns and vivid colours, continuing a royal Rajasthani procession tradition.",
  },
  {
    title: "Timed with Holi",
    description:
      "The festival's proximity to Holi means visitors often experience both the colour festival and the elephant procession in the same trip.",
  },
  {
    title: "Folk Performances",
    description:
      "Traditional Rajasthani music, dance and games run alongside the main procession.",
  },
  {
    title: "A Jaipur City Event",
    description:
      "Held in the heart of Jaipur, making it easy to combine with the city's forts and palaces on the same trip.",
  },
] as const;

export const elephantFestivalFaqs: FaqItem[] = [
  {
    question: "Is this the same as Holi?",
    answer:
      "No, though they're usually held around the same time — the Elephant Festival is its own distinct event centred on the painted elephant procession, separate from the general Holi colour celebrations happening across India.",
  },
  {
    question: "Is the festival animal-welfare conscious?",
    answer:
      "Elephant welfare in festival contexts is a genuine consideration; we can advise on this as part of planning if it's a priority for you.",
  },
  {
    question: "Can this be combined with Rajasthan sightseeing?",
    answer:
      "Yes — it's held in Jaipur itself, so it fits naturally alongside a Jaipur city tour without extra travel.",
  },
] as const;
