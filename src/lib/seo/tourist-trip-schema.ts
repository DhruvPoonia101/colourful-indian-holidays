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
  /** Omit when pricing is "on request" rather than a fixed public rate —
   * never pass an unverified or estimated number here. */
  startingPrice?: number;
  priceCurrency: string;
  itinerary: TripItineraryDay[];
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
        name: day.title,
        description: day.description,
      })),
    },
    offers: {
      "@type": "Offer",
      // No fixed `price` — schema.org's convention for "price on request" is
      // to state the currency without an amount, rather than publish a
      // number that isn't a real, confirmed rate.
      priceCurrency: trip.priceCurrency,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: trip.priceCurrency,
        description: "Price on request — contact us for a personalised quote.",
      },
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/packages/${trip.slug}`,
    },
    provider: {
      "@type": "TravelAgency",
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
  };
}
