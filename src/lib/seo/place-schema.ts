import { SITE_URL } from "./business";

export type PlaceListItem = {
  name: string;
  path: string;
};

export function touristDestinationJsonLd({
  name,
  description,
  path,
  image,
  latitude,
  longitude,
  containsPlaces,
}: {
  name: string;
  description: string;
  path: string;
  image: string;
  latitude: number;
  longitude: number;
  containsPlaces: PlaceListItem[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name,
    description,
    url: `${SITE_URL}${path}`,
    image: `${SITE_URL}${image}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    },
    containsPlace: {
      "@type": "ItemList",
      itemListElement: containsPlaces.map((place, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: place.name,
        url: `${SITE_URL}${place.path}`,
      })),
    },
  };
}
