export type GuideArticle = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  datePublished: string;
  published: boolean;
};

export const guideArticles: GuideArticle[] = [
  {
    title: "India Currency & Payments Guide: Cash, Cards & UPI Explained",
    slug: "india-currency-payments-guide",
    excerpt:
      "How to handle money on an India trip — currency exchange, ATMs and card acceptance, the new UPI One World pilot for tourists, and customs declaration rules for bringing cash into the country.",
    category: "Planning",
    image: "/images/destinations/pushkar-bazaar.webp",
    imageAlt: "Pushkar's market street, lit up in the evening",
    datePublished: "2026-09-25",
    published: true,
  },
  {
    title: "India Health & Vaccination Guide: What to Know Before You Travel",
    slug: "india-health-vaccination-guide",
    excerpt:
      "General health and vaccination guidance for international travellers to India — commonly recommended vaccines, food and water safety, malaria precautions, and when to see a travel health clinic.",
    category: "Planning",
    image: "/images/destinations/rishikesh-2.webp",
    imageAlt: "The Lakshman Jhula suspension bridge over the Ganges, Rishikesh",
    datePublished: "2026-09-25",
    published: true,
  },
  {
    title: "Getting Around India: Flights, Trains & Roads Explained",
    slug: "getting-around-india",
    excerpt:
      "Domestic flights, Indian Railways' classes and booking system, and why private car and driver hire is the standard way international travellers get around India.",
    category: "Planning",
    image: "/images/destinations/darjeeling-himalayan-railway.webp",
    imageAlt: "The Darjeeling Himalayan Railway's steam 'toy train', West Bengal",
    datePublished: "2026-09-25",
    published: true,
  },
  {
    title: "India e-Visa Guide 2026: Types, Fees, Stay Limits & the New e-Arrival Card",
    slug: "india-e-visa-guide",
    excerpt:
      "The 30-day, 1-year and 5-year e-Tourist visa options explained, how long you can actually stay by nationality, and the new e-Arrival Card every foreign traveller now needs.",
    category: "Planning",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
    datePublished: "2026-09-25",
    published: true,
  },
  {
    title: "Hiring a Car in Rajasthan: A Complete Guide",
    slug: "hiring-a-car-in-rajasthan",
    excerpt:
      "Sedan, SUV, Tempo Traveller, luxury car or coach — how to choose the right private vehicle and driver for your trip, and what to expect on the road.",
    category: "Rajasthan",
    image: "/images/destinations/car-suv.webp",
    imageAlt: "Private SUV on a Rajasthan highway",
    datePublished: "2026-08-31",
    published: true,
  },
  {
    title: "Pilgrimage Holiday Destinations in India",
    slug: "pilgrimage-holiday-destinations-in-india",
    excerpt:
      "From the ghats of Varanasi to the Golden Temple in Amritsar — India's most significant pilgrimage sites, and what a visit to each actually involves.",
    category: "Spiritual India",
    image: "/images/destinations/varanasi.webp",
    imageAlt: "Ganga aarti ceremony at the ghats of Varanasi",
    datePublished: "2026-08-01",
    published: true,
  },
  {
    title: "Monuments in Rajasthan: A Complete Guide",
    slug: "monuments-in-rajasthan",
    excerpt:
      "Amber Fort, Mehrangarh, Jaisalmer Fort and more — the forts and palaces that define Rajasthan, and what makes each one worth the visit.",
    category: "Rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur",
    datePublished: "2026-08-01",
    published: true,
  },
  {
    title: "20 Best Tourist Places to Visit in India",
    slug: "20-best-tourist-places-to-visit-in-india",
    excerpt: "A first-timer's shortlist of India's unmissable destinations, from the Taj Mahal to the backwaters of Kerala.",
    category: "India",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
    datePublished: "2026-09-02",
    published: true,
  },
  {
    title: "Places to Visit in Shekhawati",
    slug: "places-to-visit-in-shekhawati",
    excerpt: "The open-air fresco galleries of Rajasthan's painted haveli towns — Mandawa, Nawalgarh, Fatehpur and Dundlod, and why the murals exist at all.",
    category: "Rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Ornate Rajasthani heritage architecture",
    datePublished: "2026-09-21",
    published: true,
  },
  {
    title: "Top Cultural Festivals in India",
    slug: "top-cultural-festivals-in-india",
    excerpt: "From the Pushkar Camel Fair to Diwali and the Kumbh Mela — the festivals worth timing your trip around, organised by season.",
    category: "Culture",
    image: "/images/destinations/pushkar.webp",
    imageAlt: "Traditional Rajasthani performers at the Pushkar Fair",
    datePublished: "2026-09-20",
    published: true,
  },
] as const;
