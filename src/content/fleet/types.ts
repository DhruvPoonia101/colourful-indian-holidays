import type { CityCard } from "@/components/destinations/CityGrid";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";

export type VehicleContent = {
  slug: string;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  heroHeadline: string;
  heroSubheadline: string;
  quickFacts: QuickFact[];
  capacityPassengers: string;
  luggageBags: string;
  bestForDescription: string;
  exampleModels: string[];
  features: string[];
  overview: string[];
  highlights: Highlight[];
  faqs: FaqItem[];
  otherVehicles: CityCard[];
};
