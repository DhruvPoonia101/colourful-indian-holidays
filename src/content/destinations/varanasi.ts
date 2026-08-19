import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const varanasiAttractions: CityCard[] = [
  {
    name: "Ganga Aarti",
    tagline: "The Spirit of Varanasi",
    description:
      "Witness the mesmerizing evening ceremony along the Ganges, where lamps, chanting and music create one of Varanasi's most unforgettable experiences.",
    href: "/destinations/varanasi",
    image: "/images/destinations/varanasi-evening-ganges-aarti.webp",
    imageAlt: "Evening Ganga Aarti ceremony in Varanasi",
  },
  {
    name: "Ganges Boat Ride",
    tagline: "Varanasi From the River",
    description:
      "Cruise along the Ganges at sunrise and watch the ancient ghats come alive with morning prayers, rituals and everyday life.",
    href: "/destinations/varanasi",
    image: "/images/destinations/varanasi-ganges-boat.webp",
    imageAlt: "Sunrise boat ride on the Ganges in Varanasi",
  },
  {
    name: "Manikarnika Ghat",
    tagline: "The Sacred Ghat",
    description:
      "One of Varanasi's oldest and most sacred ghats, deeply connected with Hindu traditions surrounding life, death and spiritual liberation.",
    href: "/destinations/varanasi",
    image: "/images/destinations/manikarnika-ghat.webp",
    imageAlt: "Manikarnika Ghat on the Ganges in Varanasi",
  },
  {
    name: "Sarnath",
    tagline: "Where Buddha First Taught",
    description:
      "A historic Buddhist pilgrimage site near Varanasi, home to ancient ruins, monasteries and the famous Dhamek Stupa.",
    href: "/destinations/varanasi",
    image: "/images/destinations/sarnath-varanasi.webp",
    imageAlt: "Mulagandha Kuti Vihar temple at Sarnath, near Varanasi",
  },
  {
    name: "Banarasi Silk",
    tagline: "A Timeless Craft Tradition",
    description:
      "Discover Varanasi's renowned silk-weaving tradition and the intricate craftsmanship behind its celebrated Banarasi sarees.",
    href: "/destinations/varanasi",
    image: "/images/destinations/varanasi-silk-weaving.webp",
    imageAlt: "Banarasi silk saree with traditional zari work",
  },
] as const;

export const varanasiQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October – March" },
  { label: "Ideal Trip Length", value: "2 – 3 Days" },
  { label: "Main Gateway", value: "Varanasi (VNS)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const varanasiGettingThere: GettingThereItem[] = [
  {
    title: "Main Gateway",
    description:
      "Lal Bahadur Shastri Airport (VNS) has direct domestic connections from Delhi, Mumbai and other major Indian cities, usually a 90-minute flight from Delhi. Varanasi is also well connected by overnight train.",
  },
  {
    title: "Typical Entry Route",
    description:
      "Most international travellers add Varanasi as an extension to a wider North India itinerary, flying in from Delhi or Agra rather than making it a standalone trip.",
  },
  {
    title: "Visa Requirements",
    description:
      "The standard Indian e-Visa applies for most nationalities and can be arranged online before departure. We recommend confirming current requirements for your passport before booking flights.",
  },
] as const;

export const varanasiHighlights: Highlight[] = [
  {
    title: "Kashi Vishwanath Temple",
    description:
      "One of the twelve Jyotirlinga shrines dedicated to Shiva, and among the most significant Hindu temples in India, a short walk from the main ghats.",
  },
  {
    title: "The Vishwanath Corridor",
    description:
      "A recently redeveloped pedestrian corridor connecting the temple directly to the Ganges, making the walk between the two far more atmospheric than it once was.",
  },
  {
    title: "Ramnagar Fort",
    description:
      "A 17th-century fort on the opposite bank of the river, home to a museum of vintage cars, royal armoury and palanquins — a quieter half-day trip.",
  },
  {
    title: "The Old City Lanes",
    description:
      "Varanasi's narrow galis, too tight for cars, wind past centuries-old houses, shrines and shopfronts — best explored on foot with a guide who knows them.",
  },
  {
    title: "The Banaras Gharana",
    description:
      "Varanasi is one of the great centres of Hindustani classical music, with its own distinct musical tradition still taught and performed in the old city.",
  },
  {
    title: "Assi Ghat",
    description:
      "The southernmost of the major ghats, popular for a quieter sunrise and as a base for morning yoga sessions along the river.",
  },
] as const;

export const varanasiRelatedDestinations: CityCard[] = [
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "Often combined with Varanasi as part of a fuller North India itinerary.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "Delhi",
    tagline: "India's Capital",
    description: "The most common gateway city for flights on to Varanasi.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
  {
    name: "Agra",
    tagline: "Home of the Taj Mahal",
    description: "Easily combined with Varanasi and Delhi on a wider North India route.",
    href: "/destinations/agra",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
  },
] as const;

export const varanasiFaqs: FaqItem[] = [
  {
    question: "How many days do I need in Varanasi?",
    answer:
      "2 to 3 days is enough to see the evening Ganga Aarti, take a sunrise boat ride, visit Kashi Vishwanath Temple, and add a half-day trip to Sarnath. Many travellers add Varanasi as a 2-night extension to a wider North India itinerary.",
  },
  {
    question: "Is Varanasi safe for foreign and solo travellers?",
    answer:
      "Yes — Varanasi is one of India's most visited cities by international tourists. The ghats and old-city lanes can feel intense for a first-time visitor, which is exactly why we recommend a private guide who can navigate them and explain what you're seeing.",
  },
  {
    question: "Should I watch the sunrise boat ride or the evening aarti — or both?",
    answer:
      "Both, if you have the time — they show genuinely different sides of the city. The evening Ganga Aarti is a structured, dramatic ceremony; the sunrise boat ride is quieter and more personal, showing daily ritual life along the ghats.",
  },
  {
    question: "Is it respectful to photograph the ghats and cremation sites?",
    answer:
      "The main ghats and the evening aarti are fine to photograph. Manikarnika Ghat, where cremations take place, should be approached with real sensitivity — photography there is generally discouraged, and we'll guide you on what's appropriate in the moment.",
  },
  {
    question: "Can Varanasi be combined with Rajasthan and the Golden Triangle?",
    answer:
      "Yes, this is one of the most common ways we build it in — as an extension to a Delhi–Agra–Jaipur or wider Rajasthan itinerary, usually flying in from Delhi or Agra rather than requiring a separate trip.",
  },
] as const;
