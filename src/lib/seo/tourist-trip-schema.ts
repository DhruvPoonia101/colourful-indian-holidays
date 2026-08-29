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
  startingPrice: number;
  priceCurrency: string;
  itinerary: TripItineraryDay[];
};

/**
 * TouristTrip schema for a tour package page. NOTE: `startingPrice` becomes
 * a public Offer price in this markup — never call this with an unverified
 * or estimated price. Confirm real pricing before a page using this goes
 * live/indexed.
 */
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
      price: trip.startingPrice,
      priceCurrency: trip.priceCurrency,
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
