import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const goaCarnivalHighlights: Highlight[] = [
  {
    title: "Street Parades & Floats",
    description:
      "Colourful parades with decorated floats move through Goa's towns over several days.",
  },
  {
    title: "A Portuguese Legacy",
    description:
      "The carnival tradition arrived with Portuguese colonial rule and has become a genuinely Goan celebration in its own right.",
  },
  {
    title: "Live Music & Dance",
    description:
      "Bands, dance troupes and costumed performers give the festival an energy distinct from India's more ritual-based celebrations.",
  },
  {
    title: "Combine with Goa's Beaches",
    description:
      "The carnival happens across Goa's towns, easy to combine with beach time on the same trip.",
  },
] as const;

export const goaCarnivalFaqs: FaqItem[] = [
  {
    question: "How is Goa Carnival different from festivals elsewhere in India?",
    answer:
      "It's rooted in Portuguese Catholic tradition rather than Hindu ritual, giving it a genuinely different character — more street party than religious observance.",
  },
  {
    question: "How many days does it run?",
    answer:
      "Typically four days, timed just before the start of Lent on the Christian calendar.",
  },
  {
    question: "Is this easy to combine with a Goa beach holiday?",
    answer:
      "Yes — the carnival happens across Goa's towns, so it fits naturally alongside beach time if your dates align.",
  },
] as const;
