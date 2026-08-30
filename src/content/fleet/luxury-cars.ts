import type { VehicleContent } from "./types";

export const luxuryCars: VehicleContent = {
  slug: "luxury-cars",
  name: "Luxury Cars",
  tagline: "Premium Travel",
  metaTitle: "Luxury Car Rental with Driver | India",
  metaDescription:
    "A premium sedan with an experienced, formally presented driver — for travellers who want a higher standard of vehicle and service throughout their India trip.",
  heroImage: "/images/destinations/car-luxury.webp",
  heroImageAlt: "Luxury sedan for private rental",
  heroHeadline: "Luxury Cars — A Higher Standard of Travel",
  heroSubheadline:
    "A premium vehicle and a more experienced, formally presented driver — for travellers who want extra comfort and polish throughout their trip, not just on arrival.",
  quickFacts: [
    { label: "Capacity", value: "1 – 4 Travellers" },
    { label: "Luggage Space", value: "2 – 3 Bags" },
    { label: "Best For", value: "Premium Travel & Special Occasions" },
    { label: "Air Conditioning", value: "Standard" },
  ],
  capacityPassengers: "4",
  luggageBags: "2 Large Bags",
  bestForDescription:
    "Ideal for up to 4 passengers — honeymoons, anniversaries, and travellers who want a higher standard of comfort throughout.",
  exampleModels: ["Toyota Camry", "Mercedes-Benz E-Class", "Jaguar XF"],
  features: [
    "Air Conditioned",
    "Professional Chauffeur",
    "Premium Interiors",
    "GPS Navigation",
    "Complimentary Water",
  ],
  overview: [
    "Our luxury car option pairs a premium vehicle with a more experienced driver, formally presented, for travellers who want the whole trip to feel a notch above standard private transport — honeymoons, anniversaries, and travellers who simply prefer a higher standard of vehicle throughout. The difference isn't just cosmetic: luxury vehicles in our fleet come with additional comfort features and drivers specifically selected for this tier of service.",
    "This option suits the same range of itineraries as our standard sedan — city-to-city travel, airport transfers, and full multi-day circuits — but at a noticeably higher comfort level. It's a popular choice for travellers celebrating a specific occasion during their India trip, or those who've simply prioritised comfort in their overall travel budget.",
  ],
  highlights: [
    {
      title: "A Genuinely Higher Standard",
      description:
        "Premium vehicle interiors and additional comfort features distinguish this from our standard sedan option, not just the badge on the car.",
    },
    {
      title: "Formally Presented Drivers",
      description:
        "Drivers assigned to luxury bookings are selected specifically for this service tier, with a more formal presentation throughout.",
    },
    {
      title: "Popular for Special Occasions",
      description:
        "A frequent choice for honeymoons, anniversaries, and travellers marking a specific milestone during their India trip.",
    },
  ],
  faqs: [
    {
      question: "What's actually different between this and a standard sedan?",
      answer:
        "The vehicle itself is a higher-tier make and model with additional comfort features, and the driver is specifically selected and presented for this service level — genuinely a different experience, not just a price difference.",
    },
    {
      question: "Can we use a luxury car for just part of our trip?",
      answer:
        "Yes — some travellers use a luxury car for airport transfers or a specific special-occasion day, and a standard sedan or SUV for the rest of the itinerary. Let us know what you have in mind and we'll put together an option.",
    },
    {
      question: "Is a luxury car available in cities outside Rajasthan?",
      answer:
        "Availability can vary by city — tell us your full itinerary when enquiring and we'll confirm exactly where this option is available for your route.",
    },
  ],
  otherVehicles: [
    {
      name: "Sedan",
      tagline: "1 – 4 Travellers",
      description: "A comfortable, air-conditioned sedan with a private driver — ideal for couples or solo travellers.",
      href: "/car-rental/sedan",
      image: "/images/destinations/car-sedan.webp",
      imageAlt: "White sedan car for rental",
    },
    {
      name: "SUV",
      tagline: "1 – 6 Travellers",
      description: "More space and ground clearance for longer drives and less predictable road conditions.",
      href: "/car-rental/suv",
      image: "/images/destinations/car-suv.webp",
      imageAlt: "White SUV for rental",
    },
    {
      name: "Tempo Traveller",
      tagline: "5 – 12 Travellers",
      description: "The standard choice for small groups and families travelling together on one itinerary.",
      href: "/car-rental/tempo-traveller",
      image: "/images/destinations/car-tempo-traveller.webp",
      imageAlt: "Tempo Traveller minibus for group rental",
    },
  ],
};
