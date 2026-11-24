/**
 * Real photos from Colourful Indian Holidays trips, from the company's Google
 * Business Profile, supplied by Dhruv on 24 Nov 2026. Dhruv confirmed the man in
 * the dark suit (trade fair) and the grey jacket (Udaipur) is Narendra Poonia,
 * the founder; he is also in the black company shirt (riverside) (first-hand evidence, as the Nov 2026 SEO audit recommends;
 * not stock). Captions only state what is certain from the photo itself;
 * add the park, place or year when known rather than guessing.
 */
export type TripPhoto = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  /** CSS object-position for the 4:3 crop, so faces stay in frame. */
  focus?: string;
};

export const tripPhotos = {
  jeepSafari: {
    src: "/images/trips/guests-jeep-safari-central-india.webp",
    alt: "Our guests in open safari jeeps with forest guards on a tiger reserve track in central India",
    caption: "Our guests on a jeep safari in a central India tiger reserve, with park guards and naturalist.",
    width: 1360,
    height: 1020,
  },
  riverside: {
    src: "/images/trips/guest-with-our-team-riverside.webp",
    alt: "Narendra Poonia, founder of Colourful Indian Holidays, with a guest on a rocky riverbank",
    caption: "Narendra Poonia, our founder (right, in the company shirt), with a guest on a riverside walk during a trip.",
    width: 1360,
    height: 1020,
  },
  hawaMahal: {
    src: "/images/trips/guests-at-hawa-mahal-jaipur.webp",
    alt: "Two of our guests in front of the pink sandstone Hawa Mahal in Jaipur",
    caption: "Our guests outside the Hawa Mahal, the Palace of Winds, in Jaipur.",
    width: 765,
    height: 1020,
    focus: "50% 82%",
  },
  palaceSteps: {
    src: "/images/trips/guest-at-rajasthan-palace-steps.webp",
    alt: "A guest sitting on red sandstone steps below carved stone screens at a Rajasthan palace",
    caption: "A guest on the sandstone steps of a Rajasthan palace.",
    width: 680,
    height: 1020,
    focus: "50% 72%",
  },
  tradeFair: {
    src: "/images/trips/colourful-indian-holidays-travel-trade-fair.webp",
    alt: "Narendra Poonia, founder of Colourful Indian Holidays, in a meeting at the company's travel trade fair stand",
    caption: "Narendra Poonia, our founder (right), meeting partners at our stand at a travel trade fair.",
    width: 1360,
    height: 1020,
  },
  udaipurGroup: {
    src: "/images/trips/narendra-poonia-with-guests-city-palace-udaipur.webp",
    alt: "Narendra Poonia with a group of guests at the City Palace complex in Udaipur, beside signs for the Fateh Prakash Palace and boat rides",
    caption: "Narendra Poonia, our founder (centre, in the grey jacket), with a group of our guests at the City Palace complex in Udaipur.",
    width: 1020,
    height: 1020,
    focus: "50% 35%",
  },
  tradeFairBuyer: {
    src: "/images/trips/narendra-poonia-travel-trade-fair-foreign-buyer.webp",
    alt: "Narendra Poonia meeting a foreign buyer at the Colourful Indian Holidays stand at a travel trade fair",
    caption: "Narendra Poonia (right) meeting an overseas travel buyer at our trade fair stand.",
    width: 1360,
    height: 1020,
  },
} satisfies Record<string, TripPhoto>;
