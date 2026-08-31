import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const srinagarKashmirAttractions: CityCard[] = [
  {
    name: "Dal Lake & Houseboats",
    tagline: "Kashmir's Most Iconic View",
    description:
      "Srinagar's famous lake, ringed by the Zabarwan mountains and dotted with ornately carved houseboats — many of which you can stay aboard for the night.",
    href: "/destinations/srinagar-kashmir",
    image: "/images/destinations/Srinagar-3.webp",
    imageAlt: "Houseboats on Dal Lake with snow-capped mountains behind, Srinagar",
  },
  {
    name: "Mughal Gardens",
    tagline: "Terraced Gardens & Tulip Fields",
    description:
      "Shalimar Bagh, Nishat Bagh and the Indira Gandhi Memorial Tulip Garden — Mughal-era terraced gardens that turn brilliant colour each spring.",
    href: "/destinations/srinagar-kashmir",
    image: "/images/destinations/Srinagar.webp",
    imageAlt: "Tulip garden in bloom with mountains behind, Srinagar",
  },
  {
    name: "Gulmarg",
    tagline: "Meadow of Flowers",
    description:
      "A high-altitude meadow and hill station a short drive from Srinagar, framed by pine forest — a ski destination in winter and a green retreat in summer.",
    href: "/destinations/srinagar-kashmir",
    image: "/images/destinations/Srinagar-2.webp",
    imageAlt: "Green meadow surrounded by pine forest, Gulmarg",
  },
] as const;

export const srinagarKashmirQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "April to October" },
  { label: "Ideal Trip Length", value: "4 – 6 Days" },
  { label: "Main Gateway", value: "Srinagar (SXR)" },
  { label: "Elevation", value: "~1,585m (Srinagar)" },
] as const;

export const srinagarKashmirGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Srinagar Airport (SXR) has regular flights from Delhi and other major Indian cities, and is the fastest, most straightforward way in for most international itineraries.",
  },
  {
    title: "By Road",
    description:
      "The Srinagar–Leh highway connects Kashmir directly to Ladakh for travellers combining both regions, though it's only open roughly June through September and involves two full days of driving each way.",
  },
  {
    title: "Local Travel",
    description:
      "Once in Srinagar, a private driver covers day trips to Gulmarg, Pahalgam and Sonamarg comfortably — each is a manageable half-day to full-day round trip from the city.",
  },
] as const;

export const srinagarKashmirHighlights: Highlight[] = [
  {
    title: "A Houseboat Stay on Dal Lake",
    description:
      "Staying aboard one of Srinagar's ornately carved houseboats is a genuinely different kind of overnight experience, unavailable almost anywhere else in India.",
  },
  {
    title: "Mughal Garden Heritage",
    description:
      "Shalimar Bagh and Nishat Bagh were built by Mughal emperors specifically for Kashmir's climate and views — terraced, symmetrical, and still meticulously maintained.",
  },
  {
    title: "Alpine Scenery Rare Elsewhere in India",
    description:
      "Pine forests, snow-capped peaks and green meadows around Gulmarg and Pahalgam give Kashmir a genuinely alpine character distinct from the rest of the country.",
  },
  {
    title: "Kashmiri Cuisine & Handicrafts",
    description:
      "Wazwan feasts, saffron, and centuries-old traditions of pashmina weaving and papier-mâché work make Kashmir a distinct culinary and craft destination.",
  },
  {
    title: "A Quieter, Greener Contrast",
    description:
      "For travellers who've already covered Rajasthan's desert forts or the Golden Triangle, Kashmir's lakes and mountains offer a genuinely different register.",
  },
] as const;

export const srinagarKashmirRelatedDestinations: CityCard[] = [
  {
    name: "Leh & Ladakh",
    tagline: "High-Altitude Desert",
    description: "Connected via the Srinagar–Leh highway for a wider Himalayan circuit, June to September.",
    href: "/destinations/leh-ladakh",
    image: "/images/destinations/Leh-4.webp",
    imageAlt: "Pangong Lake, Ladakh",
  },
  {
    name: "Rishikesh & Haridwar",
    tagline: "Where the Ganges Begins",
    description: "A different stretch of the Himalayan foothills, further south and easily reached from Delhi.",
    href: "/destinations/rishikesh-haridwar",
    image: "/images/destinations/rishikesh.webp",
    imageAlt: "Rishikesh on the banks of the Ganges",
  },
  {
    name: "Delhi",
    tagline: "India's Capital",
    description: "The most common gateway before or after a Kashmir trip.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
] as const;

export const srinagarKashmirFaqs: FaqItem[] = [
  {
    question: "Is it safe for international tourists to visit Kashmir?",
    answer:
      "Srinagar and the main tourist circuit — Gulmarg, Pahalgam, Sonamarg — see regular international visitors and are well set up for tourism. As with any region, we monitor current conditions and advisories as part of planning your itinerary and will always give you an honest, up-to-date picture before you book.",
  },
  {
    question: "Is staying on a houseboat actually comfortable?",
    answer:
      "Yes — houseboats range from simple to genuinely luxurious, with proper bedrooms, dining areas and en-suite bathrooms. It's one of the more memorable overnight stays available anywhere in India.",
  },
  {
    question: "When is the best time to see the tulip gardens?",
    answer:
      "Kashmir's tulip gardens typically bloom in late March through April, making early spring the best window if that's a specific priority for your trip.",
  },
  {
    question: "Can we combine Kashmir with Ladakh in one trip?",
    answer:
      "Yes — the Srinagar–Leh highway connects both directly, though it's only open roughly June to September. Outside that window, the two regions need to be visited separately or connected by air.",
  },
] as const;
