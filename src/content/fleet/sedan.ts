import type { VehicleContent } from "./types";

export const sedan: VehicleContent = {
  slug: "sedan",
  name: "Sedan",
  tagline: "1 – 4 Travellers",
  metaTitle: "Sedan Car Rental with Driver | India",
  metaDescription:
    "A comfortable, air-conditioned sedan with a private driver — ideal for couples or solo travellers moving between cities in India.",
  heroImage: "/images/destinations/car-sedan.webp",
  heroImageAlt: "White sedan car for rental",
  heroHeadline: "Sedan — Private Car with Driver",
  heroSubheadline:
    "A comfortable, air-conditioned sedan with an experienced private driver — the standard choice for couples and solo travellers moving between cities.",
  quickFacts: [
    { label: "Capacity", value: "1 – 4 Travellers" },
    { label: "Luggage Space", value: "2 – 3 Bags" },
    { label: "Best For", value: "Couples & Solo Trips" },
    { label: "Air Conditioning", value: "Standard" },
  ],
  capacityPassengers: "4",
  luggageBags: "2 Large Bags",
  bestForDescription:
    "Ideal for up to 4 passengers — couples, small families, solo travellers with luggage.",
  exampleModels: ["Swift Dzire", "Honda Amaze", "Toyota Etios"],
  features: [
    "Air Conditioned",
    "Professional Driver",
    "GPS Navigation",
    "Comfortable Seating",
    "Clean & Well-maintained",
  ],
  overview: [
    "A sedan is the vehicle most of our couples and solo travellers choose for city-to-city travel across Rajasthan and North India — comfortable, air-conditioned, and easy to get in and out of repeatedly across a multi-city itinerary. It comfortably seats up to three passengers with luggage, making it the right size for most first-time visitors travelling as a couple or with one companion.",
    "Every sedan comes with a private, English-speaking driver who stays with you for the length of your itinerary wherever possible, rather than switching vehicles and drivers at every city. That continuity matters more than it might seem — the same driver learns your pace and preferences after the first day or two, and can genuinely improve the rest of the trip.",
  ],
  highlights: [
    {
      title: "Right-Sized for Small Groups",
      description:
        "A sedan comfortably fits 2–3 travellers with luggage — spacious enough for a multi-day trip without paying for capacity you don't need.",
    },
    {
      title: "Easy City Manoeuvring",
      description:
        "Smaller than an SUV or tempo traveller, a sedan handles narrow old-city lanes and tight parking in places like Jaipur and Udaipur more easily.",
    },
    {
      title: "The Same Driver Throughout",
      description:
        "Wherever possible, one driver stays with you for your entire itinerary rather than handing off between cities.",
    },
  ],
  faqs: [
    {
      question: "Is a sedan comfortable for long drives between cities?",
      answer:
        "Yes — our sedans are air-conditioned and suited to multi-hour drives like Jaipur to Jodhpur. For groups of 3 or more with significant luggage, we'd usually suggest an SUV instead for extra space.",
    },
    {
      question: "Can the driver speak English?",
      answer:
        "Yes, every driver we work with speaks functional English, and our office team is available by phone or WhatsApp throughout your trip if you need anything translated or arranged.",
    },
    {
      question: "How many bags fit in a sedan?",
      answer:
        "Typically 2–3 standard suitcases in the boot, plus small bags in the cabin. Let us know your luggage situation when booking and we'll confirm it fits comfortably, or suggest an SUV if not.",
    },
  ],
  otherVehicles: [
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
    {
      name: "Luxury Cars",
      tagline: "Premium Travel",
      description: "A higher standard of vehicle and driver for travellers who want extra comfort throughout.",
      href: "/car-rental/luxury-cars",
      image: "/images/destinations/car-luxury.webp",
      imageAlt: "Luxury sedan for private rental",
    },
  ],
};
