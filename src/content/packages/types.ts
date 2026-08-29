import type { CityCard } from "@/components/destinations/CityGrid";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { ItineraryDay } from "@/components/packages/ItineraryTimeline";
import type { FaqItem } from "@/lib/seo/faq-schema";

export type PackageContent = {
  slug: string;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  heroHeadline: string;
  heroSubheadline: string;
  /** Short intro paragraph rendered above the day-by-day itinerary. */
  overview: string;
  quickFacts: QuickFact[];
  /**
   * DRAFT pricing — placeholder values written without confirmed input from
   * the business. Must be verified against real rates before this page is
   * allowed to be indexed (see `draftPendingReview` below).
   */
  startingPrice: number;
  priceCurrency: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  highlights: Highlight[];
  faqs: FaqItem[];
  relatedPackages: CityCard[];
  /**
   * True until the business owner confirms real pricing/itinerary details.
   * While true, the page is rendered with `robots: noindex` so unverified
   * draft content and pricing can't be indexed or shown in search results.
   */
  draftPendingReview: boolean;
};
