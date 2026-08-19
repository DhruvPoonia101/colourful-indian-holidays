import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const delhiAttractions: CityCard[] = [
  {
    name: "India Gate",
    tagline: "War Memorial",
    description: "A 42-metre sandstone war memorial at the heart of New Delhi, especially striking at dusk.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
  {
    name: "Qutub Minar",
    tagline: "UNESCO World Heritage Site",
    description: "A 73-metre 12th-century minaret, the tallest brick minaret in the world.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-qutub-minar.webp",
    imageAlt: "Qutub Minar surrounded by gardens, Delhi",
  },
  {
    name: "Lotus Temple",
    tagline: "Bahá'í House of Worship",
    description: "A lotus-shaped marble temple open to all faiths, one of Delhi's most photographed sites.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-lotus-temple.webp",
    imageAlt: "Lotus Temple, Delhi, under a clear blue sky",
  },
] as const;

export const delhiQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October – March" },
  { label: "Ideal Trip Length", value: "2 – 3 Days" },
  { label: "Main Gateway", value: "Delhi (DEL)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const delhiGettingThere: GettingThereItem[] = [
  {
    title: "Main Gateway",
    description:
      "Indira Gandhi International Airport (DEL) is India's busiest airport and the main international entry point for most travellers, with direct connections from the USA, UK, Europe, Australia and the Middle East.",
  },
  {
    title: "Typical Entry Route",
    description:
      "Delhi is where most international itineraries begin. From here, most travellers continue on by road or train to Agra and Rajasthan as part of a wider Golden Triangle or Rajasthan trip.",
  },
  {
    title: "Visa Requirements",
    description:
      "The standard Indian e-Visa applies for most nationalities and can be arranged online before departure. We recommend confirming current requirements for your passport before booking flights.",
  },
] as const;

export const delhiHighlights: Highlight[] = [
  {
    title: "Mughal & Colonial Landmarks",
    description:
      "Red Fort, Humayun's Tomb and Jama Masjid sit alongside colonial-era avenues around India Gate and Rashtrapati Bhavan.",
  },
  {
    title: "World-Class Museums",
    description:
      "The National Museum and Gandhi Smriti offer some of the deepest context for the history you'll see across the rest of your trip.",
  },
  {
    title: "India's Best Food Scene",
    description:
      "From Old Delhi street food in Chandni Chowk to fine dining, Delhi has the widest range of Indian regional cuisine in one city.",
  },
  {
    title: "Bazaars to Boutiques",
    description:
      "Chandni Chowk's chaotic lanes, Dilli Haat's crafts market, and upscale boutiques in South Delhi cover every kind of shopping.",
  },
  {
    title: "Easy Metro Connectivity",
    description:
      "The Delhi Metro connects most major sights directly, making it easy to combine with your own private guide and driver.",
  },
  {
    title: "Gateway to the Golden Triangle",
    description:
      "Delhi is the natural starting point for the classic Delhi–Agra–Jaipur circuit and onward into Rajasthan.",
  },
] as const;

export const delhiRelatedDestinations: CityCard[] = [
  {
    name: "Agra",
    tagline: "Home of the Taj Mahal",
    description: "A short drive or train ride away, and paired with Delhi on almost every first-time trip.",
    href: "/destinations/agra",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
  },
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "Jaipur is a short journey from Delhi, and the natural next stop for most itineraries.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "Varanasi",
    tagline: "Spiritual India",
    description: "Ancient ghats on the Ganges — often added as an extension for a fuller North India trip.",
    href: "/destinations/varanasi",
    image: "/images/destinations/varanasi.webp",
    imageAlt: "Ganga aarti ceremony at the ghats of Varanasi",
  },
] as const;

export const delhiFaqs: FaqItem[] = [
  {
    question: "How many days do I need in Delhi?",
    answer:
      "2 to 3 days is enough to see Old and New Delhi's main sights comfortably. Many travellers use Delhi as the opening stop of a longer trip rather than a standalone destination, spending 1 to 2 nights before continuing to Agra or Rajasthan.",
  },
  {
    question: "Is Delhi safe for foreign and solo travellers?",
    answer:
      "Yes — Delhi is India's most-visited city by international tourists and its main sights are well set up for foreign visitors. As in any major capital city, we recommend a private guide and driver rather than relying on unfamiliar public transport, which is how we run every Delhi itinerary.",
  },
  {
    question: "Should I stay in Old Delhi or New Delhi?",
    answer:
      "New Delhi generally offers more comfortable, modern hotels and easier access by car. Old Delhi puts you closer to Red Fort, Jama Masjid and Chandni Chowk, but its narrow lanes can feel intense for a first-time visitor — we typically recommend New Delhi as a base with a guided day trip into Old Delhi.",
  },
  {
    question: "Should I combine Delhi with Agra and Jaipur?",
    answer:
      "Almost always, yes. Delhi, Agra and Jaipur together form the classic Golden Triangle, and Delhi is the natural starting point since it's where most international flights arrive.",
  },
  {
    question: "What about Delhi's air quality?",
    answer:
      "Delhi's air quality is noticeably worse in winter, particularly November and December, which is worth knowing if you have respiratory sensitivities. October to early November and February to March offer a good balance of cooler weather with better air quality.",
  },
] as const;
