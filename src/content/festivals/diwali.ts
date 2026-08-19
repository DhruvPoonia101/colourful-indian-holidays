import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";

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
] as const;
