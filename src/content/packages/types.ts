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
  /**
   * Overrides the hero's height class (see PageHero's `heightClassName`).
   * Used on the Golden Triangle pages to keep all 6 variants the same
   * height regardless of title length, instead of the site-wide default
   * that grows taller for longer, more-wrapping titles.
   */
  heroHeightClassName?: string;
  /** Short intro paragraph rendered above the day-by-day itinerary. */
  overview: string;
  quickFacts: QuickFact[];
  /**
   * DRAFT pricing — placeholder values written without confirmed input from
   * the business. Must be verified against real rates before this page is
   * allowed to be indexed (see `draftPendingReview` below).
   */
  /** Kept for currency labeling only — no fixed price is published; every
   * package shows "Price on Request" instead. */
  priceCurrency: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  highlights: Highlight[];
  /**
   * Optional "Best Time to Visit" section rendered after the Highlights
   * strip, matching the pattern used on destination pages. Omit to skip
   * the section entirely (keeps existing package pages unchanged).
   */
  bestTimeToVisit?: {
    heading: string;
    note: string;
  };
  /**
   * Optional "Related Destinations" grid linking to the individual
   * destination guide pages covered by this itinerary (e.g. Delhi, Agra,
   * Jaipur). Distinct from `relatedPackages`, which links to other tour
   * packages rather than single-city destination pages.
   */
  relatedDestinations?: CityCard[];
  /**
   * When true, renders a "Getting Around by Private Car" cross-link using
   * the site's car rental fleet cards, matching every destination page.
   */
  showCarFleet?: boolean;
  faqs: FaqItem[];
  relatedPackages: CityCard[];
  /**
   * True until the business owner confirms real pricing/itinerary details.
   * While true, the page is rendered with `robots: noindex` so unverified
   * draft content and pricing can't be indexed or shown in search results.
   */
  draftPendingReview: boolean;
};
