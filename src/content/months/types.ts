import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { CityCard } from "@/components/destinations/CityGrid";
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
  /** 2–3 paragraphs on what this specific month looks like nationally. */
  overview: string[];
  regionBreakdown: { region: string; note: string }[];
  festivals: { name: string; note: string }[];
  bestDestinations: CityCard[];
  faqs: FaqItem[];
  prevMonth: { name: string; slug: string };
  nextMonth: { name: string; slug: string };
};
