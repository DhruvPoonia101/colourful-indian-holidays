import type { VehicleContent } from "./types";

export const coaches: VehicleContent = {
  slug: "coaches",
  name: "Coaches",
  tagline: "13+ Travellers",
  metaTitle: "Coach & Bus Rental with Driver | India Group Travel",
  metaDescription:
    "A full-size, air-conditioned coach with a private driver — for large groups, corporate trips, and family reunions travelling India together.",
  heroImage: "/images/destinations/car-coach.webp",
  heroImageAlt: "Coach bus for group rental",
  heroHeadline: "Coaches — Large Group Travel with Driver",
  heroSubheadline:
    "A full-size, air-conditioned coach with a private driver, for groups of 13 or more — corporate trips, large family reunions, and tour groups travelling together.",
  quickFacts: [
    { label: "Capacity", value: "13 – 40 Travellers" },
    { label: "Luggage Space", value: "Dedicated hold" },
    { label: "Best For", value: "Corporate & Large Group Trips" },
    { label: "Air Conditioning", value: "Standard" },
  ],
  capacityPassengers: "13 – 40",
  luggageBags: "Dedicated Luggage Hold",
  bestForDescription:
    "Ideal for 13 or more passengers — corporate trips, large family reunions, and tour groups travelling together.",
  exampleModels: ["21-Seater Mini Coach", "35-Seater Coach", "45-Seater Coach"],
  features: [
    "Air Conditioned",
    "Professional Driver",
    "Reclining Seats",
    "PA System / Microphone",
    "Ample Luggage Storage",
  ],
  overview: [
    "For groups of 13 or more, a full-size coach is the practical choice — large corporate trips, extended family reunions, or tour groups who want to travel India together on one shared itinerary rather than splitting across several smaller vehicles. Our coaches are air-conditioned throughout, with a dedicated luggage hold separate from the passenger cabin.",
    "Coordinating a group this size takes more planning than a standard private tour, and we work directly with the group organiser on logistics — pickup points, itinerary pacing for a larger group, and any specific requirements for a corporate or family event built into the trip.",
  ],
  highlights: [
    {
      title: "Built for Large Groups",
      description:
        "Full-size coach seating and a dedicated luggage hold make this the practical option once a group exceeds Tempo Traveller capacity.",
    },
    {
      title: "Dedicated Group Coordination",
      description:
        "We work directly with your group organiser on logistics — pickup points, pacing, and any specific event requirements.",
    },
    {
      title: "Suited to Corporate & Family Events",
      description:
        "A popular option for corporate incentive trips and large multi-generational family reunions travelling India together.",
    },
  ],
  faqs: [
    {
      question: "What's the minimum group size for a coach to make sense?",
      answer:
        "Generally 13 or more — below that, a Tempo Traveller is usually more comfortable and cost-effective. We're happy to advise on the right vehicle once we know your exact group size.",
    },
    {
      question: "Can you handle logistics for a corporate group with a fixed schedule?",
      answer:
        "Yes — we regularly work with corporate group organisers on fixed-schedule itineraries, including specific pickup times and event coordination alongside the coach booking itself.",
    },
    {
      question: "Do you provide a tour guide as well as the driver for large groups?",
      answer:
        "Yes, we can arrange one or more English-speaking guides alongside the coach and driver, depending on your group size — let us know your requirements when enquiring.",
    },
  ],
  otherVehicles: [
    {
      name: "Tempo Traveller",
      tagline: "5 – 12 Travellers",
      description: "The standard choice for small groups and families travelling together on one itinerary.",
      href: "/car-rental/tempo-traveller",
      image: "/images/destinations/car-tempo-traveller.webp",
      imageAlt: "Tempo Traveller minibus for group rental",
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
      name: "Sedan",
      tagline: "1 – 4 Travellers",
      description: "A comfortable, air-conditioned sedan with a private driver — ideal for couples or solo travellers.",
      href: "/car-rental/sedan",
      image: "/images/destinations/car-sedan.webp",
      imageAlt: "White sedan car for rental",
    },
  ],
};
