import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";
import type { CityCard } from "@/components/destinations/CityGrid";

/**
 * DRAFT CONTENT — expanded from an earlier, thinner version without
 * confirmed business input. Dhruv should review for accuracy.
 *
 * Image note: "goa-carnival.webp" has an unusually polished, almost
 * hyper-realistic quality (the float's facial features and lighting look
 * closer to digital art than a candid photograph) that raises a real
 * possibility it's AI-generated or generic stock rather than an authentic
 * photo of Goa's specific carnival. Used with cautious, non-specific alt
 * text rather than asserting authenticity — worth verifying the source
 * before this goes live commercially.
 */
export const goaCarnivalOverview = [
  "Goa Carnival is one of the few major Indian festivals with no roots in Hindu tradition at all — it arrived with Portuguese colonial rule, which held Goa for over 450 years, and has since evolved into a genuinely Goan celebration in its own right rather than remaining a foreign import. Held for four days each year just before the start of Lent on the Christian calendar, the carnival gives Goa a distinctly different festival character from the ritual-based celebrations found across most of the rest of India.",
  "The centrepiece is a series of street parades featuring elaborately decorated floats, moving through Goa's towns over the four-day period, accompanied by live bands, costumed dance troupes and performers in vivid, often feathered and sequinned outfits reminiscent of Brazilian carnival traditions. The atmosphere is genuinely closer to a street party than a religious observance — crowds line the parade routes, and the towns hosting the procession each day take on a festive, almost holiday-within-a-holiday atmosphere distinct from Goa's usual laid-back beach-town pace.",
  "Because the carnival moves through Goa's towns rather than being confined to a single venue, it combines naturally with beach time on the same trip — most visitors treat it as an energetic few days worked into a broader Goa holiday rather than the sole reason for visiting. Goa's beaches, Portuguese-era churches and old-town architecture in Panjim and Old Goa are all easily combined with a carnival visit if your travel dates align with the four-day window.",
];

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
  {
    question: "Which town hosts the best carnival atmosphere?",
    answer:
      "The parade typically moves through several towns across the four days, with Panjim's leg often considered the largest and most elaborate — we can advise on the specific route and schedule for your travel dates.",
  },
  {
    question: "Does the carnival affect hotel prices or availability in Goa?",
    answer:
      "Yes, to some extent — Goa is already a popular destination during this cooler winter season generally, and the carnival adds further demand, so booking accommodation well in advance is worth doing if your dates align with the festival.",
  },
];

export const goaCarnivalRelatedDestinations: CityCard[] = [
  {
    name: "Goa",
    tagline: "India's Beach Capital",
    description: "Portuguese-era churches and beaches, with a laid-back coastal pace unlike anywhere else in India.",
    href: "/destinations/goa",
    image: "/images/destinations/Goa.webp",
    imageAlt: "Goa's coastline",
  },
  {
    name: "Gujarat Beaches",
    tagline: "The Western Coastline",
    description: "A quieter stretch of India's western coast, less visited than Goa or Kerala.",
    href: "/destinations/gujarat-beaches",
    image: "/images/destinations/gujarat-beaches.webp",
    imageAlt: "Gujarat's coastline",
  },
  {
    name: "Kerala",
    tagline: "God's Own Country",
    description: "Palm-lined backwaters, misty tea gardens, and a coastline layered with trading history.",
    href: "/destinations/kerala",
    image: "/images/destinations/alleppey-backwaters.webp",
    imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
  },
];

export const goaCarnivalRelatedExperiences: CityCard[] = [
  {
    name: "Andaman Beach Honeymoon",
    tagline: "White Sand & Turquoise Water · 5 Days",
    description: "India's only true tropical island escape, for travellers who'd like a quieter beach alternative to Goa.",
    href: "/experiences/andaman-beach-honeymoon",
    image: "/images/destinations/radhanagar-beach.webp",
    imageAlt: "Turquoise water and boats off Radhanagar Beach, Havelock Island",
  },
  {
    name: "Kerala Beaches Tour",
    tagline: "Kovalam & Varkala · 4 Days",
    description: "A different Indian coastline entirely, with dramatic cliffs and established Ayurvedic wellness traditions.",
    href: "/tours/kerala-beaches-tour",
    image: "/images/destinations/alleppey-2.webp",
    imageAlt: "Alleppey Beach at sunset, Kerala",
  },
  {
    name: "Kutch Mahotsav",
    tagline: "Festival Guide",
    description: "A completely different Indian festival experience, built around the white salt desert of Gujarat.",
    href: "/experiences/kutch-mahotsav",
    image: "/images/destinations/kutch-mahotsav.webp",
    imageAlt: "The tented camp at Rann Utsav, on the edge of the Great Rann of Kutch",
  },
];
