export const heroSlides = [
  {
    src: "/images/home/hero.webp",
    alt: "Golden hour over a Rajasthan palace courtyard",
  },
  {
    src: "/images/destinations/udaipur-lake-palace.webp",
    alt: "Lake Palace floating on Lake Pichola, Udaipur",
  },
  {
    src: "/images/destinations/mehrangarh-fort-jodhpur.webp",
    alt: "Mehrangarh Fort overlooking the blue city of Jodhpur",
  },
] as const;

export const heroCopy = {
  eyebrow: "Rajasthan & India, Curated for the World",
  headline: "Journeys Through Royal Rajasthan & Timeless India",
  subheadline:
    "Private, tailor-made tours for international travellers — heritage palaces, expert English-speaking guides, and itineraries built around you, from your first enquiry to the trip home.",
  ctaLabel: "Plan My Journey",
};

export const trustStats = [
  { label: "Years Crafting Journeys", value: "18+", isPlaceholder: false },
  { label: "Tours Completed", value: "500+", isPlaceholder: true },
  { label: "Traveller Rating", value: "4.9 / 5", isPlaceholder: false },
  { label: "Countries Welcomed", value: "40+", isPlaceholder: true },
] as const;

export const associations = [
  { src: "/awards/iato.webp", alt: "IATO — Indian Association of Tour Operators member" },
  { src: "/awards/ministry-tourism.webp", alt: "Approved by the Ministry of Tourism, Government of India" },
  { src: "/awards/rajasthan-tourism.webp", alt: "Recognised by Rajasthan Tourism" },
  { src: "/awards/tripadvisor-2024.webp", alt: "TripAdvisor Travellers' Choice 2024" },
] as const;

export const regions = [
  {
    name: "Rajasthan",
    description: "Forts, palaces and desert citadels across the land of kings.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    alt: "Amber Fort, Jaipur, Rajasthan",
  },
  {
    name: "Golden Triangle",
    description: "Delhi, Agra and Jaipur — India's classic first journey.",
    href: "/destinations/golden-triangle",
    image: "/images/destinations/agra-taj-mahal.webp",
    alt: "Taj Mahal at sunrise, Agra",
  },
  {
    name: "Kerala Backwaters",
    description: "Palm-lined lagoons and houseboats through God's Own Country.",
    href: "/destinations/kerala",
    image: "/images/destinations/alleppey-backwaters.webp",
    alt: "Houseboat on the Alleppey backwaters, Kerala",
  },
  {
    name: "Varanasi & Spiritual India",
    description: "Ancient ghats and sacred rituals on the banks of the Ganges.",
    href: "/destinations/varanasi",
    image: "/images/destinations/varanasi.webp",
    alt: "Ganga aarti ceremony at the ghats of Varanasi",
  },
] as const;

export const differentiators = [
  {
    title: "Private, Not Packaged",
    description:
      "Every itinerary is built around you — no joining a coach of strangers, no fixed script.",
  },
  {
    title: "English-Speaking Local Experts",
    description:
      "Guides and chauffeurs who know Rajasthan and India intimately, and communicate fluently in English.",
  },
  {
    title: "Heritage & Luxury Stays",
    description:
      "Handpicked palace hotels and boutique heritage properties, vetted for comfort and character.",
  },
  {
    title: "Support From Booking to Landing",
    description:
      "One point of contact by WhatsApp or email throughout planning and travel, in your time zone.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Placeholder review — replace with a real traveller quote before launch. Every detail of our Rajasthan trip was thoughtfully arranged, from the palace hotels to our wonderful guide.",
    name: "Sample Traveller",
    origin: "United Kingdom",
    isPlaceholder: true,
  },
  {
    quote:
      "Placeholder review — replace with a real traveller quote before launch. A seamless, private journey across the Golden Triangle that felt designed just for us.",
    name: "Sample Traveller",
    origin: "United States",
    isPlaceholder: true,
  },
  {
    quote:
      "Placeholder review — replace with a real traveller quote before launch. Responsive, knowledgeable and genuinely caring — highly recommended for first-time visitors to India.",
    name: "Sample Traveller",
    origin: "Australia",
    isPlaceholder: true,
  },
] as const;
