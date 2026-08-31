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
    datePublished: "2026-08-01",
    published: false,
  },
  {
    title: "Places to Visit in Shekhawati",
    slug: "places-to-visit-in-shekhawati",
    excerpt: "The open-air fresco galleries of Rajasthan's painted haveli towns.",
    category: "Rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Rajasthan heritage architecture",
    datePublished: "2026-08-01",
    published: false,
  },
  {
    title: "Top Cultural Festivals in India",
    slug: "top-cultural-festivals-in-india",
    excerpt: "The festivals worth timing your trip around, from Holi to the Pushkar Camel Fair.",
    category: "Culture",
    image: "/images/destinations/pushkar.webp",
    imageAlt: "Pushkar Lake and its ghats at dawn",
    datePublished: "2026-08-01",
    published: false,
  },
] as const;
