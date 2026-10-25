import type { PackageContent } from "@/content/packages/types";
import { getPackageStartingPrice } from "@/lib/pricing";
import { BUSINESS, ORGANIZATION_ID, SITE_URL } from "./business";

export type TripItineraryDay = {
  title: string;
  description: string;
};

export type TouristTripInput = {
  slug: string;
  name: string;
  description: string;
  image: string;
  durationDays: number;
  /**
   * A researched, competitively-benchmarked starting price, not an
   * internally-confirmed exact rate. Computed centrally in
   * PackagePageTemplate as (nights × a per-night baseline set from real
   * competitor pricing data), not per-package guesswork — see the
   * comment there for the research and the actual rate used. Explicitly
   * authorized by the business owner (Dhruv, 30 Sep 2026) to replace the
   * prior "Price on Request" default, on the understanding that this is
   * an indicative figure for the customer-facing disclaimer to qualify,
   * not a final internally-costed rate. Omit only for a package type
   * this approach genuinely doesn't fit (e.g., custom multi-country
   * combinations with no single typical duration).
   */
  startingPrice?: number;
  priceCurrency: string;
  itinerary: TripItineraryDay[];
  /** Full site-relative path to this trip's page, e.g. "/tours/jaipur-city-tour"
   * or "/experiences/udaipur-honeymoon". Defaults to "/tours/{slug}" for
   * backward compatibility with existing tour package callers. */
  urlPath?: string;
};

export function touristTripJsonLd(trip: TouristTripInput) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: trip.name,
    description: trip.description,
    url: `${SITE_URL}${trip.urlPath ?? `/tours/${trip.slug}`}`,
    image: `${SITE_URL}${trip.image}`,
    touristType: "International Travellers",
    itinerary: {
      "@type": "ItemList",
      itemListElement: trip.itinerary.map((day, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          name: day.title,
          description: day.description,
        },
      })),
    },
    offers: {
      "@type": "Offer",
      priceCurrency: trip.priceCurrency,
      ...(trip.startingPrice
        ? {
            price: trip.startingPrice,
            priceSpecification: {
              "@type": "PriceSpecification",
              price: trip.startingPrice,
              priceCurrency: trip.priceCurrency,
              // Matches the on-page disclaimer shown next to this price —
              // an indicative starting rate, not a fixed final quote.
              description:
                "Indicative starting price per person. Final quote varies by travel dates, group size and hotel category.",
            },
          }
        : {
            // No fixed `price` — schema.org's convention for "price on request" is
            // to state the currency without an amount, rather than publish a
            // number that isn't a real, confirmed rate.
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: trip.priceCurrency,
              description: "Price on request — contact us for a personalised quote.",
            },
          }),
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}${trip.urlPath ?? `/tours/${trip.slug}`}`,
    },
    provider: {
      "@type": "TravelAgency",
      "@id": ORGANIZATION_ID,
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
  };
}


export type TripSummary = {
  name: string;
  description: string;
  image: string;
  /** Site-relative path of the trip's own page, e.g. "/tours/kochi-tour". */
  path: string;
  durationDays: number;
  startingPrice: number;
  priceCurrency: string;
};

/** Reduces a full package to the fields a hub page's schema needs. The price
 * comes from the same shared per-night rate the package page itself uses, so
 * hub and leaf can never publish different numbers for the same trip. */
export function packageToTripSummary(content: PackageContent): TripSummary {
  return {
    name: content.name,
    description: content.metaDescription,
    image: content.heroImage,
    path: `/tours/${content.slug}`,
    durationDays: content.itinerary.length,
    startingPrice: getPackageStartingPrice(content.slug, content.itinerary.length),
    priceCurrency: "USD",
  };
}

/**
 * Schema for a tour HUB page (Golden Triangle, Kerala, Wildlife…): a
 * CollectionPage whose main entity is an ItemList of TouristTrip entries,
 * one per tour the hub links to. The full day-by-day itinerary stays on each
 * trip's own page (which already carries a complete TouristTrip); the hub
 * only declares which trips exist, their length, indicative price and URL,
 * so search engines and AI answer engines can see the set as one family.
 */
export function touristTripCollectionJsonLd(hub: {
  name: string;
  description: string;
  path: string;
  trips: TripSummary[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: hub.name,
    description: hub.description,
    url: `${SITE_URL}${hub.path}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: hub.trips.length,
      itemListElement: hub.trips.map((trip, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "TouristTrip",
          name: trip.name,
          description: trip.description,
          url: `${SITE_URL}${trip.path}`,
          image: `${SITE_URL}${trip.image}`,
          touristType: "International Travellers",
          offers: {
            "@type": "Offer",
            price: trip.startingPrice,
            priceCurrency: trip.priceCurrency,
            priceSpecification: {
              "@type": "PriceSpecification",
              price: trip.startingPrice,
              priceCurrency: trip.priceCurrency,
              description: `Indicative starting price per person for ${trip.durationDays} days. Final quote varies by travel dates, group size and hotel category.`,
            },
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}${trip.path}`,
          },
          provider: {
            "@type": "TravelAgency",
            "@id": ORGANIZATION_ID,
            name: BUSINESS.name,
            url: BUSINESS.url,
          },
        },
      })),
    },
  };
}
