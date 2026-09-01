import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const himachalAttractions: CityCard[] = [
  {
    name: "Manali & the Kullu Valley",
    tagline: "Mountains, Rivers & Adventure",
    description:
      "A pine-forested town on the Beas river, framed by snow-capped peaks — the base for adventure activities and the road toward Rohtang Pass and Ladakh.",
    href: "/destinations/himachal",
    image: "/images/destinations/manali-valley.webp",
    imageAlt: "Snow-capped mountains and river valley near Manali",
  },
  {
    name: "Shimla",
    tagline: "The Former British Summer Capital",
    description:
      "Himachal's capital and once the summer seat of British India, known for its colonial-era architecture, The Mall, and the toy train that climbs up to meet it.",
    href: "/destinations/himachal",
    image: "/images/destinations/shimla-town.webp",
    imageAlt: "Shimla's colonial-era hillside town",
  },
  {
    name: "Rohtang Pass",
    tagline: "High-Altitude Mountain Pass",
    description:
      "A dramatic high-altitude pass connecting Manali toward Lahaul-Spiti and Ladakh, open only in the warmer months and popular for its snow and views.",
    href: "/destinations/himachal",
    image: "/images/destinations/rohtang-pass.webp",
    imageAlt: "Snow-lined road at Rohtang Pass, Himachal Pradesh",
  },
] as const;

export const himachalQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "March to June, Oct to Dec" },
  { label: "Ideal Trip Length", value: "5 – 7 Days" },
  { label: "Main Gateway", value: "Chandigarh / Bhuntar (KUU)" },
  { label: "Elevation", value: "~2,050m (Manali)" },
] as const;

export const himachalGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Bhuntar Airport (KUU), near Kullu, is the closest airport to Manali, with limited seasonal flights from Delhi. Many travellers instead fly into Chandigarh and continue by road.",
  },
  {
    title: "By Road",
    description:
      "Chandigarh to Manali is roughly 7–8 hours by road, and Shimla is a shorter 4–5 hour drive from Chandigarh — both comfortable with a private driver and a stop along the way.",
  },
  {
    title: "Toy Train to Shimla",
    description:
      "The Kalka–Shimla toy train is a UNESCO-recognised heritage railway and a genuinely scenic way to arrive in Shimla, worth building into an itinerary as an experience in its own right.",
  },
] as const;

export const himachalHighlights: Highlight[] = [
  {
    title: "Colonial-Era Hill Station Character",
    description:
      "Shimla's Mall Road, Christ Church and timber-framed architecture reflect its history as British India's summer capital — a distinct heritage from the rest of North India.",
  },
  {
    title: "Genuine Adventure Base",
    description:
      "Manali is one of North India's main hubs for paragliding, river rafting on the Beas, and trekking — popular with both first-timers and experienced adventure travellers.",
  },
  {
    title: "The UNESCO Kalka–Shimla Railway",
    description:
      "A narrow-gauge mountain railway completed in 1903, recognised by UNESCO as a World Heritage Site — a scenic and historic way to reach Shimla.",
  },
  {
    title: "A Cooler Summer Escape",
    description:
      "Himachal's altitude makes it a natural warm-season counterpoint to Rajasthan and the plains, popular with travellers extending a longer India itinerary into early summer.",
  },
  {
    title: "Gateway Toward Spiti & Ladakh",
    description:
      "For travellers with more time, Manali is also the starting point for routes further into Lahaul-Spiti and, seasonally, on to Ladakh.",
  },
] as const;

export const himachalRelatedDestinations: CityCard[] = [
  {
    name: "Leh & Ladakh",
    tagline: "High-Altitude Desert",
    description: "Connected via the Manali–Leh highway for a wider Himalayan circuit, June to September.",
    href: "/destinations/leh-ladakh",
    image: "/images/destinations/Leh-4.webp",
    imageAlt: "Pangong Lake, Ladakh",
  },
  {
    name: "Rishikesh & Haridwar",
    tagline: "Where the Ganges Begins",
    description: "A different stretch of the Himalayan foothills, further east and easily reached from Delhi.",
    href: "/destinations/rishikesh-haridwar",
    image: "/images/destinations/rishikesh.webp",
    imageAlt: "Rishikesh on the banks of the Ganges",
  },
  {
    name: "Delhi",
    tagline: "India's Capital",
    description: "The most common gateway before or after a Himachal trip.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
] as const;

export const himachalFaqs: FaqItem[] = [
  {
    question: "Which is better to visit — Manali or Shimla?",
    answer:
      "They suit different trips rather than one being objectively better. Shimla offers colonial-era heritage and a gentler pace; Manali is the stronger base for adventure activities and mountain scenery. Many itineraries include both, connected by a scenic road journey.",
  },
  {
    question: "Can we combine Himachal with a Ladakh trip?",
    answer:
      "Yes — the Manali–Leh highway connects the two directly, though it's only open roughly June through September. Outside that window, they're best visited as separate trips.",
  },
  {
    question: "Is Himachal a good add-on to a Golden Triangle or Rajasthan itinerary?",
    answer:
      "Yes, particularly for travellers visiting in the warmer months looking for a cooler mountain contrast. It adds a genuinely different landscape and pace to a longer North India trip.",
  },
  {
    question: "How many days should we plan?",
    answer:
      "5 to 7 days lets you properly cover both Manali and Shimla without rushing the road journey between them, plus time for at least one adventure activity or day trip.",
  },
] as const;
