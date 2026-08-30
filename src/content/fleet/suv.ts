import type { VehicleContent } from "./types";

export const suv: VehicleContent = {
  slug: "suv",
  name: "SUV",
  tagline: "1 – 6 Travellers",
  metaTitle: "SUV Car Rental with Driver | India",
  metaDescription:
    "A spacious, air-conditioned SUV with a private driver — more room and ground clearance for longer drives and less predictable road conditions.",
  heroImage: "/images/destinations/car-suv.webp",
  heroImageAlt: "White SUV for rental",
  heroHeadline: "SUV — Private Car with Driver",
  heroSubheadline:
    "More space and higher ground clearance than a sedan, with an experienced private driver — the natural choice for small families or longer, less predictable routes.",
  quickFacts: [
    { label: "Capacity", value: "1 – 6 Travellers" },
    { label: "Luggage Space", value: "3 – 4 Bags" },
    { label: "Best For", value: "Small Families & Longer Routes" },
    { label: "Air Conditioning", value: "Standard" },
  ],
  capacityPassengers: "6",
  luggageBags: "4 Large Bags",
  bestForDescription: "Ideal for up to 6 passengers — families, small groups.",
  exampleModels: ["Innova Crysta", "Innova HyCross"],
  features: [
    "Air Conditioned",
    "Professional Driver",
    "GPS Navigation",
    "Premium Comfort",
    "Extra Boot Space",
    "USB Charging",
  ],
  overview: [
    "An SUV gives you meaningfully more room than a sedan — both for passengers and luggage — along with higher ground clearance that makes a real difference on some of the less predictable rural roads you'll encounter heading toward destinations like Ranthambore or Sariska. It's the vehicle we most often suggest for small families of 3–4, or for couples travelling with more luggage than a sedan comfortably holds.",
    "As with every vehicle in our fleet, your SUV comes with a private, English-speaking driver experienced on long-distance Indian road trips, not just city driving. That distinction matters — the driving conditions and pace on a 5-hour highway stretch between cities are genuinely different from navigating Jaipur's old-city lanes.",
  ],
  highlights: [
    {
      title: "More Room Than a Sedan",
      description:
        "Extra seating and boot space make an SUV noticeably more comfortable for 4 travellers or 2–3 with substantial luggage.",
    },
    {
      title: "Higher Ground Clearance",
      description:
        "Genuinely useful on some of the less-maintained rural stretches on the way to wildlife reserves and smaller towns off the main highways.",
    },
    {
      title: "Suited to Longer Drives",
      description:
        "The extra space and stability make multi-hour highway drives between cities more comfortable than in a standard sedan.",
    },
  ],
  faqs: [
    {
      question: "How many people fit comfortably in an SUV?",
      answer:
        "Up to 4 travellers with luggage, comfortably. For groups of 5 or more, we'd suggest a Tempo Traveller instead, which is built for that size.",
    },
    {
      question: "Is an SUV necessary for a standard Rajasthan itinerary?",
      answer:
        "Not always — a sedan is fine for most of the classic Jaipur–Jodhpur–Udaipur circuit on paved highways. An SUV becomes genuinely useful if your route includes wildlife parks or less-maintained rural roads.",
    },
    {
      question: "Can we request an SUV partway through our trip if plans change?",
      answer:
        "Yes, just let your guide or our office know — we can usually arrange a vehicle change between cities if your group size or luggage needs change mid-trip.",
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
