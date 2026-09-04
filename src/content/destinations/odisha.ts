import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const odishaAttractions: CityCard[] = [
  {
    name: "Konark Sun Temple",
    tagline: "UNESCO World Heritage Site",
    description:
      "A 13th-century temple built in the shape of a colossal stone chariot for the sun god Surya, its wheels and horses carved in extraordinary detail across the entire structure.",
    href: "/destinations/odisha",
    image: "/images/destinations/odisha-konark-sun-temple.webp",
    imageAlt: "The Konark Sun Temple's chariot wheels, Odisha",
  },
  {
    name: "Jagannath Temple, Puri",
    tagline: "One of India's Char Dham Sites",
    description:
      "A vast 12th-century temple complex and one of Hinduism's four most sacred Char Dham pilgrimage sites, famous for its annual Rath Yatra chariot festival.",
    href: "/destinations/odisha",
    image: "/images/destinations/odisha-jagannath-temple.webp",
    imageAlt: "Jagannath Temple, Puri, decorated for a festival",
  },
  {
    name: "Chilika Lake",
    tagline: "Asia's Largest Brackish Water Lagoon",
    description:
      "A vast coastal lagoon that hosts migratory birds and one of India's few resident populations of Irrawaddy dolphins, best explored by boat.",
    href: "/destinations/odisha",
    image: "/images/destinations/odisha-chilika-lake.webp",
    imageAlt: "Aerial view of Chilika Lake, Odisha",
  },
  {
    name: "Lingaraj Temple, Bhubaneswar",
    tagline: "Bhubaneswar's Grandest Temple",
    description:
      "An 11th-century temple complex dedicated to Shiva, its main tower rising over 55 metres above dozens of smaller surrounding shrines — the centrepiece of Bhubaneswar's Temple City.",
    href: "/destinations/odisha",
    image: "/images/destinations/odisha-lingaraj-temple.webp",
    imageAlt: "Lingaraj Temple, Bhubaneswar",
  },
  {
    name: "Rajarani Temple, Bhubaneswar",
    tagline: "The 'Khajuraho of Odisha'",
    description:
      "An 11th-century temple famous for its ornately sculpted tower and cluster of miniature spires — unusually, built without a presiding deity, so it functions today purely as a heritage monument.",
    href: "/destinations/odisha",
    image: "/images/destinations/odisha-rajarani-temple.webp",
    imageAlt: "Rajarani Temple, Bhubaneswar",
  },
] as const;

export const odishaQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October to March" },
  { label: "Ideal Trip Length", value: "4 – 5 Days" },
  { label: "Main Gateway", value: "Bhubaneswar (BBI)" },
  { label: "Languages Spoken", value: "English, Odia, Hindi" },
] as const;

export const odishaGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Biju Patnaik International Airport in Bhubaneswar (BBI) has regular flights from Delhi, Mumbai and other major Indian cities.",
  },
  {
    title: "Typical Route",
    description:
      "Most itineraries move between Bhubaneswar, Puri and Konark, three points forming a compact triangle roughly an hour apart by road, with Chilika Lake added as a day trip.",
  },
  {
    title: "Temple Entry Note",
    description:
      "Jagannath Temple in Puri does not permit non-Hindu visitors inside the main sanctum — a well-known local viewing platform nearby offers a view of the temple for all visitors.",
  },
] as const;

export const odishaHighlights: Highlight[] = [
  {
    title: "A UNESCO World Heritage Temple",
    description:
      "The Konark Sun Temple's chariot design and extraordinarily detailed stone carving make it one of the finest examples of Kalinga architecture anywhere in India.",
  },
  {
    title: "One of Hinduism's Four Char Dham Sites",
    description:
      "Jagannath Temple in Puri holds a place among Hinduism's most sacred pilgrimage circuit, drawing millions of devotees each year, particularly during the Rath Yatra festival.",
  },
  {
    title: "A Genuinely Different Coastal Ecosystem",
    description:
      "Chilika Lake's mix of migratory birds and resident Irrawaddy dolphins offers a kind of wildlife encounter unavailable elsewhere on a typical East India itinerary.",
  },
  {
    title: "A Quieter, Less-Visited Circuit",
    description:
      "Odisha sees considerably fewer international visitors than Rajasthan or the Golden Triangle, offering genuine heritage sites without the same crowds.",
  },
  {
    title: "Distinct Odissi Classical Dance",
    description:
      "Odisha is home to Odissi, one of India's oldest classical dance forms, with roots directly tied to temple ritual and sculpture found at sites like Konark.",
  },
] as const;

export const odishaRelatedDestinations: CityCard[] = [
  {
    name: "Kolkata",
    tagline: "India's Cultural Capital",
    description: "The most common gateway before or after an Odisha trip, connected by rail and short flights.",
    href: "/destinations/kolkata",
    image: "/images/destinations/kolkata-howrah-bridge.webp",
    imageAlt: "Howrah Bridge lit up at night, Kolkata",
  },
  {
    name: "Varanasi",
    tagline: "The Ganges' Most Sacred City",
    description: "Another major Indian pilgrimage city, connected by rail for a wider Eastern India circuit.",
    href: "/destinations/varanasi",
    image: "/images/destinations/varanasi.webp",
    imageAlt: "Ganga aarti ceremony at the ghats of Varanasi",
  },
  {
    name: "Khajuraho",
    tagline: "UNESCO Temple Sculpture",
    description: "Another UNESCO temple complex known for its detailed stone carving, for travellers extending further.",
    href: "/destinations/khajuraho",
    image: "/images/destinations/khajuraho-kandariya-mahadeva.webp",
    imageAlt: "Kandariya Mahadeva Temple at sunset, Khajuraho",
  },
] as const;

export const odishaFaqs: FaqItem[] = [
  {
    question: "Can non-Hindu visitors enter Jagannath Temple in Puri?",
    answer:
      "No — the temple's inner sanctum is restricted to Hindu visitors. A well-known viewing platform near the temple lets all visitors see the structure and its surroundings.",
  },
  {
    question: "How many days should we plan for Odisha?",
    answer:
      "4 to 5 days lets you properly cover Bhubaneswar, Puri, Konark and Chilika Lake without rushing between them.",
  },
  {
    question: "Is Chilika Lake worth a full day?",
    answer:
      "Yes — a boat trip to see the Irrawaddy dolphins and migratory bird colonies typically takes half a day, and many travellers combine it with a relaxed second half exploring nearby fishing villages.",
  },
  {
    question: "Can Odisha be combined with Kolkata in one trip?",
    answer:
      "Yes — both are connected by rail and short flights, making it straightforward to combine Odisha's temple heritage with a wider Eastern India itinerary through Kolkata.",
  },
] as const;
