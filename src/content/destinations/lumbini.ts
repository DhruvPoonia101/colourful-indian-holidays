import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const lumbiniAttractions: CityCard[] = [
  {
    name: "Maya Devi Temple",
    tagline: "The Exact Birthplace",
    description:
      "The temple built directly over the marker stone believed to pinpoint the precise spot where Siddhartha Gautama, the future Buddha, was born.",
    href: "/destinations/lumbini",
    image: "/images/destinations/lumbini-maya-devi-temple.webp",
    imageAlt: "The white Maya Devi Temple building rising above the excavated brick ruins at Lumbini",
  },
  {
    name: "Ashoka Pillar",
    tagline: "2,200 Years Old",
    description:
      "A sandstone pillar erected in 249 BCE by the Indian emperor Ashoka, its inscription the earliest surviving historical confirmation of Lumbini as the Buddha's birthplace.",
    href: "/destinations/lumbini",
    image: "/images/destinations/lumbini-ashoka-pillar.webp",
    imageAlt: "The ancient Ashoka Pillar at Lumbini, decorated with prayer flags",
  },
  {
    name: "Lumbini World Peace Pagoda",
    tagline: "Built by Japanese Buddhists",
    description:
      "A gleaming white stupa at the edge of the monastic zone, one of over 80 peace pagodas built worldwide by the Japanese Nipponzan-Myohoji order.",
    href: "/destinations/lumbini",
    image: "/images/destinations/lumbini-world-peace-pagoda.webp",
    imageAlt: "The white World Peace Pagoda reflected in the lotus pond at Lumbini",
  },
] as const;

export const lumbiniQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October–March (Cooler Months)" },
  { label: "Ideal Trip Length", value: "1 – 2 Days" },
  { label: "Main Gateway", value: "Gautam Buddha Airport (Bhairahawa), or overland via Sunauli" },
  { label: "Languages Spoken", value: "Nepali, English" },
] as const;

export const lumbiniGettingThere: GettingThereItem[] = [
  {
    title: "By Air from Kathmandu",
    description:
      "A roughly 30-minute flight connects Kathmandu to Gautam Buddha Airport in nearby Bhairahawa, the fastest way in for travellers based in the capital.",
  },
  {
    title: "Overland from India",
    description:
      "Lumbini sits close to the Nepal–India border, making it a natural stop on a Buddhist circuit connecting Varanasi, Sarnath, Bodh Gaya and Kushinagar via the Sunauli border crossing.",
  },
  {
    title: "By Road from Kathmandu",
    description:
      "An 8 to 9 hour drive from Kathmandu through the Terai lowlands — a long day, so most travellers either fly or combine the drive with a Chitwan stop along the way.",
  },
] as const;

export const lumbiniHighlights: Highlight[] = [
  {
    title: "One of Buddhism's Four Great Pilgrimage Sites",
    description:
      "Lumbini is revered as the birthplace of the Buddha, one of the four most sacred sites in Buddhism alongside Bodh Gaya, Sarnath and Kushinagar in India.",
  },
  {
    title: "A UNESCO World Heritage Site",
    description:
      "The core archaeological zone, including the Maya Devi Temple and Ashoka Pillar, has been recognised by UNESCO for its authenticity and historical significance.",
  },
  {
    title: "An International Monastery Complex Unlike Anywhere Else",
    description:
      "Few sites anywhere let you walk between dozens of monasteries built by different nations in a single afternoon, each reflecting its own country's Buddhist architectural tradition.",
  },
  {
    title: "A Natural Extension of India's Buddhist Circuit",
    description:
      "Lumbini's proximity to the Nepal–India border makes it straightforward to combine with Sarnath, Bodh Gaya and Kushinagar on a single Buddhist heritage itinerary.",
  },
  {
    title: "A Slower, More Contemplative Pace",
    description:
      "Where Kathmandu and Pokhara are built around sightseeing and activity, Lumbini's flat, garden-like site rewards a slower, more reflective visit.",
  },
] as const;

export const lumbiniRelatedDestinations: CityCard[] = [
  {
    name: "Kathmandu",
    tagline: "Nepal's Capital",
    description: "Nepal's main international gateway and the usual starting point for a Lumbini trip.",
    href: "/destinations/kathmandu",
    image: "/images/destinations/kathmandu-durbar-square.webp",
    imageAlt: "Kathmandu Durbar Square, with its pagoda-roofed temples and daily street life",
  },
  {
    name: "Varanasi & Spiritual India",
    tagline: "Sarnath & the Buddhist Circuit",
    description: "Home to Sarnath, where the Buddha gave his first sermon — a natural pairing with Lumbini.",
    href: "/destinations/varanasi",
    image: "/images/destinations/varanasi-evening-ganges-aarti.webp",
    imageAlt: "Evening Ganga Aarti ceremony in Varanasi",
  },
  {
    name: "Chitwan",
    tagline: "Jungle Safaris & Rhinos",
    description: "The closest of Nepal's other highlights, on the same overland route through the Terai.",
    href: "/destinations/chitwan",
    image: "/images/destinations/chitwan-elephant-safari-forest.webp",
    imageAlt: "Elephants and their mahouts on a forest safari trail in Chitwan",
  },
] as const;

export const lumbiniFaqs: FaqItem[] = [
  {
    question: "How many days should we plan for Lumbini?",
    answer:
      "1 to 2 days is enough to see the Maya Devi Temple, the Ashoka Pillar and the World Peace Pagoda at an unhurried pace, with time to explore the wider monastic zone.",
  },
  {
    question: "Can Lumbini be combined with India's Buddhist circuit?",
    answer:
      "Yes — Lumbini's location near the Sunauli border crossing makes it a natural addition to an itinerary covering Sarnath, Bodh Gaya and Kushinagar in India.",
  },
  {
    question: "Is Lumbini only for Buddhist pilgrims?",
    answer:
      "Not at all — the site's history, architecture and the sheer variety of international monasteries make it worthwhile for any traveller interested in history or culture, regardless of religion.",
  },
  {
    question: "Do we need a separate visa for Nepal?",
    answer:
      "Yes, Nepal requires its own visa, though most nationalities can get a visa on arrival at Tribhuvan International Airport in Kathmandu or at the Sunauli border — we'll confirm current requirements for your passport when planning your trip.",
  },
] as const;
