import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const amritsarAttractions: CityCard[] = [
  {
    name: "The Golden Temple",
    tagline: "Sikhism's Holiest Shrine",
    description:
      "Harmandir Sahib, the spiritual centre of Sikhism, its gold-plated sanctum reflected in the surrounding Amrit Sarovar — open to visitors of every faith, day and night.",
    href: "/destinations/amritsar",
    image: "/images/destinations/amritsar.webp",
    imageAlt: "The Golden Temple, Amritsar",
  },
  {
    name: "Wagah Border Ceremony",
    tagline: "A Daily Display of Pageantry",
    description:
      "A high-energy border-closing ceremony performed daily by Indian and Pakistani troops at the Attari-Wagah border, drawing large crowds on both sides.",
    href: "/destinations/amritsar",
    image: "/images/destinations/wagah-border.webp",
    imageAlt: "The Wagah Border ceremony, near Amritsar",
  },
  {
    name: "Jallianwala Bagh",
    tagline: "A Site of Historical Significance",
    description:
      "A public garden and memorial to the 1919 massacre that became a turning point in India's independence movement, a short walk from the Golden Temple.",
    href: "/destinations/amritsar",
    image: "/images/destinations/jallianwala-bagh.webp",
    imageAlt: "The Jallianwala Bagh memorial, Amritsar",
  },
] as const;

export const amritsarQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October to March" },
  { label: "Ideal Trip Length", value: "1 – 2 Days" },
  { label: "Main Gateway", value: "Amritsar (ATQ)" },
  { label: "Languages Spoken", value: "English, Punjabi, Hindi" },
] as const;

export const amritsarGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Sri Guru Ram Dass Jee International Airport (ATQ) has regular flights from Delhi and other major Indian cities, and some direct international connections.",
  },
  {
    title: "By Road from Delhi",
    description:
      "A private driver covers Delhi to Amritsar in around 8–9 hours, making it a longer add-on best suited to travellers with more time or those flying directly.",
  },
  {
    title: "Wagah Border Timing",
    description:
      "The border ceremony runs at a fixed time each evening (adjusted seasonally) — we build your Amritsar day around it so you don't miss it.",
  },
] as const;

export const amritsarHighlights: Highlight[] = [
  {
    title: "A Genuinely Moving Spiritual Experience",
    description:
      "The Golden Temple's atmosphere — continuous prayer, a free communal kitchen serving tens of thousands daily, and open hospitality to all faiths — leaves a strong impression on most visitors.",
  },
  {
    title: "Free Community Kitchen (Langar)",
    description:
      "The temple's langar serves free meals to all visitors regardless of religion or background, prepared and served by volunteers — one of the world's largest daily free kitchens.",
  },
  {
    title: "A Living Piece of Modern History",
    description:
      "Jallianwala Bagh connects visitors directly to a pivotal, sobering moment in India's path to independence.",
  },
  {
    title: "Distinct Punjabi Culture & Food",
    description:
      "Punjabi hospitality, music and cuisine give Amritsar a warmth and energy distinct from anywhere else on a typical North India itinerary.",
  },
  {
    title: "A Powerful Daily Ceremony",
    description:
      "The Wagah Border ceremony's crowd energy and military pageantry make it unlike anything else most international visitors will see in India.",
  },
] as const;

export const amritsarRelatedDestinations: CityCard[] = [
  {
    name: "Delhi",
    tagline: "India's Capital",
    description: "The most common gateway before or after an Amritsar trip.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
  {
    name: "Rishikesh & Haridwar",
    tagline: "Where the Ganges Begins",
    description: "Another North India spiritual destination, further into the Himalayan foothills.",
    href: "/destinations/rishikesh-haridwar",
    image: "/images/destinations/rishikesh.webp",
    imageAlt: "River rafting on the Ganges, Rishikesh",
  },
  {
    name: "Himachal (Manali & Shimla)",
    tagline: "Mountains & Colonial Heritage",
    description: "A natural extension further into the Himalayan foothills for travellers with more time.",
    href: "/destinations/himachal",
    image: "/images/destinations/shimla-town.webp",
    imageAlt: "Shimla's colonial-era hillside town",
  },
] as const;

export const amritsarFaqs: FaqItem[] = [
  {
    question: "Is there a dress code for visiting the Golden Temple?",
    answer:
      "Yes — heads must be covered (scarves are provided free at the entrance if you don't have your own), shoulders and knees should be covered, and shoes must be removed before entering. Alcohol and tobacco are not permitted anywhere in the complex.",
  },
  {
    question: "Can we eat at the free community kitchen (langar)?",
    answer:
      "Yes — the langar welcomes all visitors regardless of faith or background. It's a genuinely moving experience many travellers describe as a highlight of their visit, and there's no charge, though donations are welcome.",
  },
  {
    question: "How many days should we plan for Amritsar?",
    answer:
      "1 to 2 days is usually enough to properly see the Golden Temple, Jallianwala Bagh, and attend the Wagah Border ceremony without feeling rushed.",
  },
  {
    question: "Is the Wagah Border ceremony worth attending?",
    answer:
      "Yes — it's a genuinely unique experience, with a high-energy crowd atmosphere on both sides of the border. We recommend arriving early, as seating fills up well before the ceremony starts.",
  },
] as const;
