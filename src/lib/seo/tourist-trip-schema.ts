import { BUSINESS, SITE_URL } from "./business";

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
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
  };
}
