import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const kutchMahotsavHighlights: Highlight[] = [
  {
    title: "The White Salt Desert",
    description:
      "A vast, otherworldly landscape unlike anywhere else in India — especially striking at sunset and under a full moon.",
  },
  {
    title: "A Purpose-Built Tented Camp",
    description:
      "Comfortable tented accommodation set up specifically for the festival season, offering a proper desert-camp experience.",
  },
  {
    title: "Kutchi Craft Traditions",
    description:
      "The region's distinct embroidery, leatherwork and metalwork traditions are showcased throughout the festival.",
  },
  {
    title: "A Multi-Month Season",
    description:
      "Unlike single-day festivals, Kutch Mahotsav runs from November to February, giving genuine flexibility in planning a visit.",
  },
] as const;

export const kutchMahotsavFaqs: FaqItem[] = [
  {
    question: "Do I need to visit on a specific date?",
    answer:
      "No — unlike single-day festivals, Kutch Mahotsav runs for several months, so it can be built into a trip on whichever dates suit you within that window.",
  },
  {
    question: "What's the tented camp like?",
    answer:
      "Purpose-built for the festival season, ranging from comfortable to genuinely luxurious depending on what's booked — we can advise on options as part of planning.",
  },
  {
    question: "Is the full moon the best time to visit?",
    answer:
      "Full moon nights over the salt flats are especially striking and popular, so we'd recommend timing a visit around one if your schedule allows.",
  },
] as const;
