import type { CityCard } from "@/components/destinations/CityGrid";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { ItineraryDay } from "@/components/packages/ItineraryTimeline";
import type { FaqItem } from "@/lib/seo/faq-schema";

/**
 * Content type for multi-day Experience pages (e.g. Honeymoon Tours).
 * Deliberately parallel to, but separate from, PackageContent — Experience
 * pages must never cross-link to /tours pages, so `relatedExperiences`
 * links only to other /experiences pages, never to tour packages.
 */
export type ExperienceContent = {
  slug: string;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroHeightClassName?: string;
  overview: string;
  quickFacts: QuickFact[];
  priceCurrency: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  highlights: Highlight[];
  bestTimeToVisit?: {
    heading: string;
    note: string;
  };
  /** Links to /destinations pages covered by this itinerary. */
  relatedDestinations?: CityCard[];
  showCarFleet?: boolean;
  faqs: FaqItem[];
  /** Links to OTHER /experiences pages only — never to /tours pages. */
  relatedExperiences: CityCard[];
  draftPendingReview: boolean;
};
