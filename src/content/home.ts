import type { FaqItem } from "@/lib/seo/faq-schema";

export const heroSlides = [
  {
    src: "/images/destinations/agra-taj-mahal.webp",
    alt: "Taj Mahal at sunrise, Agra",
    focalPoint: "center 40%",
  },
  {
    src: "/images/destinations/delhi-india-gate.webp",
    alt: "India Gate at dusk, Delhi",
    focalPoint: "center",
  },
  {
    src: "/images/destinations/thekkady.webp",
    alt: "Kerala backwaters houseboat cruising a palm-lined canal",
    focalPoint: "center 55%",
  },
  {
    src: "/images/destinations/tiger-safari-jeep.webp",
    alt: "A Bengal tiger resting on a safari track surrounded by jeeps",
    focalPoint: "center 85%",
  },
] as const;

export const heroCopy = {
  eyebrow: "India, Nepal & Bhutan — Curated for the World",
  headline: "Private Journeys Across India, Nepal & Bhutan",
  subheadline:
    "Private, tailor-made tours for international travellers — heritage palaces, wildlife safaris, coastal escapes and festival-timed itineraries, with English-speaking guides since 2008.",
  ctaLabel: "Plan My Journey",
};

export const trustStats = [
  { icon: "users", value: "7900+", label: "Happy Travellers" },
  { icon: "globe", value: "30+", label: "Countries Served" },
  { icon: "shield", value: "18+", label: "Years of Experience" },
  { icon: "headset", value: "8+", label: "Offices" },
] as const;

export const associations = [
  {
    src: "/awards/iato.webp",
    alt: "IATO — Indian Association of Tour Operators member",
    href: "https://iato.in/member-get?id=eyJpdiI6IlM1bVJjMHM5NkhZTmQ1Z1gxUkNjUWc9PSIsInZhbHVlIjoiTTJTUFJ6TGRkOXN5OExHRkRWMEVidz09IiwibWFjIjoiMWFhYzI5Y2RlMDI1NTZmZWQwZjgxOGM4YTg4ZTQ3ZjIzYTJkYTQ1MTE5MzgyZjliMWNkNjBiMzAzOWI4MzE2NCIsInRhZyI6IiJ9",
  },
  {
    src: "/awards/ministry-tourism.webp",
    alt: "Approved by the Ministry of Tourism, Government of India",
    href: "https://nidhi.tourism.gov.in/home/directory?categoryCode=02&subcategory=&type=registered&cityName=COLOURFUL+INDIAN+HOLIDAYS+%28Unit%29&cityCode=ERJ000157_U&stateName=",
  },
  {
    src: "/awards/rajasthan-tourism.webp",
    alt: "Recognised by Rajasthan Tourism — Certificate of Recognition",
    href: "/documents/rajasthan-tourism-certificate.pdf",
  },
  {
    src: "/awards/tripadvisor-2014.webp",
    alt: "TripAdvisor Travellers' Choice 2014",
    href: "https://www.tripadvisor.in/Attraction_Review-g304551-d3846895-Reviews-Colourful_Indian_Holidays-New_Delhi_National_Capital_Territory_of_Delhi.html",
  },
  {
    src: "/awards/tripadvisor-2015.webp",
    alt: "TripAdvisor Travellers' Choice 2015",
    href: "https://www.tripadvisor.in/Attraction_Review-g304551-d3846895-Reviews-Colourful_Indian_Holidays-New_Delhi_National_Capital_Territory_of_Delhi.html",
  },
  {
    src: "/awards/tripadvisor-2016.webp",
    alt: "TripAdvisor Travellers' Choice 2016",
    href: "https://www.tripadvisor.in/Attraction_Review-g304551-d3846895-Reviews-Colourful_Indian_Holidays-New_Delhi_National_Capital_Territory_of_Delhi.html",
  },
  {
    src: "/awards/tripadvisor-2017.webp",
    alt: "TripAdvisor Travellers' Choice 2017",
    href: "https://www.tripadvisor.in/Attraction_Review-g304551-d3846895-Reviews-Colourful_Indian_Holidays-New_Delhi_National_Capital_Territory_of_Delhi.html",
  },
  {
    src: "/awards/tripadvisor-2019.webp",
    alt: "TripAdvisor Travellers' Choice 2019",
    href: "https://www.tripadvisor.in/Attraction_Review-g304551-d3846895-Reviews-Colourful_Indian_Holidays-New_Delhi_National_Capital_Territory_of_Delhi.html",
  },
  {
    src: "/awards/tripadvisor-2024.webp",
    alt: "TripAdvisor Travellers' Choice 2024",
    href: "https://www.tripadvisor.in/Attraction_Review-g304551-d3846895-Reviews-Colourful_Indian_Holidays-New_Delhi_National_Capital_Territory_of_Delhi.html",
  },
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
    name: "Agra",
    description: "Home of the Taj Mahal, and the heart of the Golden Triangle.",
    href: "/destinations/agra",
    image: "/images/destinations/agra-taj-mahal.webp",
    alt: "Taj Mahal at sunrise, Agra",
  },
  {
    name: "Kaziranga",
    description: "Home to two-thirds of the world's one-horned rhinoceros population.",
    href: "/destinations/kaziranga",
    image: "/images/destinations/kaziranga.webp",
    alt: "One-horned rhino and safari jeeps at Kaziranga National Park",
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

export type Testimonial = {
  quote: string;
  name: string;
  origin?: string;
  platform: "google" | "tripadvisor";
  rating: number;
  isPlaceholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Incredible experience with colorful Indian holidays. All the 12 days trip was very comfortable with good car and very good driver Bunti who had a professional behavior helping us to everything that we need. Highly recommend Colourful",
    name: "David Bernat",
    platform: "google",
    rating: 5,
    isPlaceholder: false,
  },
  {
    quote:
      "Booked a tour of Agra and Rajestan with CIH. Narendra helped us plan our trip and itinerary - worked through a few options before final plans were fixed. The tour was excellent with great guides at each stopover. The hotels were all good, especially the Haveli in Jaipur and the Taj in Agra. The price we paid was great value too. Would recommend CIH and hope to tour with them again soon.",
    name: "Sanjiv Shah",
    platform: "google",
    rating: 5,
    isPlaceholder: false,
  },
  {
    quote:
      "Our second trip with CIH, tour Chennai to Cochin. Excellent trip, great hotels , except LA Woods, great guides, really good safe driver, food wonderful. We have recommended them to our friends who have also been. Runs like clockwork",
    name: "Pete Wellock",
    platform: "google",
    rating: 5,
    isPlaceholder: false,
  },
  {
    quote:
      "Way back 2013, I with my family visited Delhi for a family function. At that time, as it was our first trip to Delhi, colourful travels chalked out our tour trip and made it an enjoyable one!! Perfect planning indeed",
    name: "Chandramouleeswaran Doraiswamy",
    platform: "google",
    rating: 5,
    isPlaceholder: false,
  },
  {
    quote: "The service we received from Narendra Poonia was superb.",
    name: "Joss Harrow",
    origin: "United Kingdom",
    platform: "tripadvisor",
    rating: 5,
    isPlaceholder: false,
  },
  {
    quote: "Would recommend Colourful Indian Holidays to anyone thinking of travelling to India.",
    name: "Chloe Lawlor",
    origin: "Ireland",
    platform: "tripadvisor",
    rating: 5,
    isPlaceholder: false,
  },
  {
    quote: "Highly recommended to anyone who would like to discover the rich culture and heritage of India.",
    name: "KD Yu",
    origin: "Philippines",
    platform: "tripadvisor",
    rating: 5,
    isPlaceholder: false,
  },
] as const;

export const introCopy = {
  eyebrow: "Who We Are",
  heading: "Private Travel Planning Across the Indian Subcontinent",
  paragraphs: [
    "Colourful Indian Holidays has been designing private, tailor-made journeys since 2008 — not fixed group tours, but itineraries built around your own dates, pace and interests. Rajasthan's forts and palaces remain our deepest expertise, but our reach now spans wildlife safaris at Ranthambore and Kaziranga, coastal escapes from Tamil Nadu to the Andaman Islands, and festival-timed trips built around events like the Pushkar Camel Fair and Kumbh Mela.",
    "Every trip includes a private, English-speaking guide and driver, handpicked heritage and luxury hotels, and one point of contact from your first enquiry to the day you fly home. We also plan trips that extend beyond India — into Nepal and Bhutan — for travellers who want to see more of the subcontinent in a single journey.",
  ],
} as const;

export const homeFaqs: FaqItem[] = [
  {
    question: "Do you offer private tours, or do we join a group?",
    answer:
      "Every itinerary we build is private — your own guide, driver and schedule, not a fixed departure date shared with strangers. You can travel as a couple, a family, or a small group of friends, and the pace is entirely up to you.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We can often arrange trips with just a few weeks' notice, but 2 to 3 months ahead gives the most flexibility on hotels and guides, especially during the October to March peak season. Festival-timed trips (like the Pushkar Camel Fair or Kumbh Mela) are worth booking further out, since accommodation near those events fills up early.",
  },
  {
    question: "Do I need a visa to visit India?",
    answer:
      "Most international travellers can apply for the Indian e-Visa online before departure. Requirements vary by nationality, so we recommend confirming current rules for your passport before booking flights — we're happy to advise on this as part of planning your trip.",
  },
  {
    question: "Can you combine India with Nepal and Bhutan in one trip?",
    answer:
      "Yes, this is one of the most common ways we build a longer itinerary — combining Rajasthan or North India with Nepal and Bhutan, since all three countries connect well by air. Tell us how much time you have and we'll build a route around it.",
  },
  {
    question: "What's included in your tour pricing?",
    answer:
      "Every quote we send spells out exactly what's included — accommodation, private car and driver, guides where relevant, and any entry fees or activities in the itinerary. We don't add unexplained costs after you've agreed a quote.",
  },
  {
    question: "How do I actually start planning a trip with you?",
    answer:
      "Send us a message through WhatsApp, email, or the contact form with your rough dates and what you'd like to see — we typically reply within 24 hours with initial ideas and questions to shape a tailored itinerary.",
  },
] as const;
