import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";

export type MonthContent = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  heroHeadline: string;
  heroSubheadline: string;
  quickFacts: QuickFact[];
  /**
   * 4–6 paragraphs on what this specific month looks like nationally.
   * Supports inline internal links via `[[label|/href]]` markup, rendered
   * by `renderWithLinks` in the template — e.g.
   * "...ideal conditions in [[Rajasthan|/destinations/rajasthan]]..."
   */
  overview: string[];
  /** Region-by-region breakdown. `note` supports the same [[label|/href]] markup. */
  regionBreakdown: { region: string; note: string }[];
  /** Festivals and events. `note` supports the same [[label|/href]] markup. */
  festivals: { name: string; note: string }[];
  /** 3–4 reasons this specific month is worth choosing, rendered via HighlightsStrip. */
  whyVisit: Highlight[];
  /** Paragraph on what to pack for this specific month's conditions. Supports markup. */
  packingIntro: string;
  packingList: string[];
  /** Paragraph introducing the Best Destinations grid below it. Supports markup. */
  destinationsIntro: string;
  bestDestinations: CityCard[];
  /** Paragraph introducing the Suggested Itineraries grid below it. Supports markup. */
  itineraryIntro: string;
  /** Real tour package pages well-suited to this month. */
  suggestedItineraries: CityCard[];
  /** A short comparison to neighbouring months. Supports markup. */
  monthComparison: string;
  faqs: FaqItem[];
  prevMonth: { name: string; slug: string };
  nextMonth: { name: string; slug: string };
};
