import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const camelFestivalHighlights: Highlight[] = [
  {
    title: "Decorated Camel Processions",
    description:
      "Camels dressed in elaborate traditional decoration parade through Bikaner, alongside their handlers in matching festive dress.",
  },
  {
    title: "Camel Races & Games",
    description:
      "Competitions that showcase real desert-life camel skills, from racing to traditional games.",
  },
  {
    title: "Desert Folk Performances",
    description:
      "Traditional Rajasthani music and dance set against Bikaner's desert backdrop.",
  },
  {
    title: "A Working Relationship, Not a Novelty",
    description:
      "Unlike camel rides staged purely for tourists elsewhere, this festival reflects camels' genuine, ongoing role in desert Rajasthan.",
  },
] as const;

export const camelFestivalFaqs: FaqItem[] = [
  {
    question: "Is this similar to the Pushkar Camel Fair?",
    answer:
      "They're related in spirit — both celebrate Rajasthan's camel culture — but Bikaner's Camel Festival is its own distinct, smaller event, separate from the larger Pushkar Fair.",
  },
  {
    question: "How many days should I plan for Bikaner?",
    answer:
      "1 to 2 days is typical, often combined with Bikaner's fort and old city as part of a wider desert-circuit Rajasthan itinerary.",
  },
  {
    question: "Is Bikaner easy to combine with Jaisalmer?",
    answer:
      "Yes, this is a common pairing — both are desert cities on Rajasthan's western circuit, a few hours apart by road.",
  },
] as const;
