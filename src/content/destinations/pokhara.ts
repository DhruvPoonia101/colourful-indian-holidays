import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const pokharaAttractions: CityCard[] = [
  {
    name: "Phewa Lake",
    tagline: "Pokhara's Centrepiece",
    description:
      "A calm lake ringed by hills, where the Annapurna range reflects on clear mornings and brightly painted wooden boats line the eastern shore.",
    href: "/destinations/pokhara",
    image: "/images/destinations/pokhara-phewa-lake-annapurna-reflection.webp",
    imageAlt: "Phewa Lake with the Annapurna range reflected in the still water",
  },
  {
    name: "Sarangkot",
    tagline: "Sunrise Viewpoint",
    description:
      "A hilltop just above the city, reached before dawn for one of the most reliable panoramic sunrise views of the Annapurna and Machapuchare peaks in Nepal.",
    href: "/destinations/pokhara",
    image: "/images/destinations/pokhara-sarangkot-sunrise.webp",
    imageAlt: "Sunrise over the Himalayas seen from the Sarangkot viewpoint",
  },
  {
    name: "Davis Falls & Gupteshwor Cave",
    tagline: "A Curious Pair",
    description:
      "A waterfall that disappears underground into a limestone cave system directly beneath it — an easy, unusual stop most visitors combine in one short visit.",
    href: "/destinations/pokhara",
    image: "/images/destinations/pokhara-davis-falls-gupteshwor-cave.webp",
    imageAlt: "The underground waterfall inside Gupteshwor Cave, lit by a shaft of daylight",
  },
  {
    name: "Paragliding Over the Valley",
    tagline: "One of the World's Best Launch Sites",
    description:
      "Tandem paraglide flights launch from the hills above the city, drifting out over Phewa Lake with the Annapurna range as a backdrop — no experience required.",
    href: "/destinations/pokhara",
    image: "/images/destinations/pokhara-paragliding-phewa-lake.webp",
    imageAlt: "Paragliders drifting over Phewa Lake above Pokhara",
  },
] as const;

export const pokharaQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October–November & March–April" },
  { label: "Ideal Trip Length", value: "2 – 3 Days" },
  { label: "Main Gateway", value: "Pokhara Airport (PKR), or 25 min flight from Kathmandu" },
  { label: "Languages Spoken", value: "Nepali, English" },
] as const;

export const pokharaGettingThere: GettingThereItem[] = [
  {
    title: "By Air from Kathmandu",
    description:
      "Pokhara's newer international airport connects to Kathmandu with a short 25-minute flight, several times daily — the fastest and most comfortable way in for most travellers.",
  },
  {
    title: "By Road from Kathmandu",
    description:
      "A scenic 6 to 7 hour drive along the Prithvi Highway, following the Trishuli River for much of the way — a good option if you'd rather see the countryside than fly.",
  },
  {
    title: "Typical Pairing",
    description:
      "Pokhara is almost always visited alongside Kathmandu as part of the same Nepal trip, rather than on its own, since both cities are only a short hop apart.",
  },
] as const;

export const pokharaHighlights: Highlight[] = [
  {
    title: "The Best Mountain Views in the Valley",
    description:
      "Few places offer such close, unobstructed views of the Annapurna range and the distinctive fishtail peak of Machapuchare without a multi-day trek.",
  },
  {
    title: "A Slower, Lakeside Pace",
    description:
      "Where Kathmandu is dense and layered with heritage, Pokhara is open, green and built around a lake — a natural place to slow down for a day or two.",
  },
  {
    title: "The Trekking Gateway",
    description:
      "Pokhara is the starting point for the Annapurna Base Camp and Annapurna Circuit treks, so it suits travellers who want a taste of trekking country without committing to the trail.",
  },
  {
    title: "Adventure Options Without the Commitment",
    description:
      "Paragliding over the valley, short boat rides on Phewa Lake, and cave visits all give a taste of adventure in an afternoon rather than a multi-day undertaking.",
  },
  {
    title: "An Easy Add-On to Kathmandu",
    description:
      "A short flight or a scenic drive from Kathmandu means Pokhara fits naturally into the same trip without requiring extra visa or entry logistics.",
  },
] as const;

export const pokharaRelatedDestinations: CityCard[] = [
  {
    name: "Kathmandu",
    tagline: "Nepal's Capital",
    description: "The natural pairing for a Pokhara trip and Nepal's main international gateway.",
    href: "/destinations/kathmandu",
    image: "/images/destinations/kathmandu-durbar-square.webp",
    imageAlt: "Kathmandu Durbar Square, with its pagoda-roofed temples and daily street life",
  },
  {
    name: "Darjeeling",
    tagline: "Himalayan Hill Station",
    description: "Shares Pokhara's lake-and-mountain setting and relaxed hill-station pace.",
    href: "/destinations/darjeeling",
    image: "/images/destinations/Darjeeling.webp",
    imageAlt: "Darjeeling hillside town wrapped in cloud",
  },
  {
    name: "Chitwan",
    tagline: "Jungle Safaris & Rhinos",
    description: "Easily combined with Pokhara on the same overland route through Nepal's lowlands.",
    href: "/destinations/chitwan",
    image: "/images/destinations/chitwan-elephant-safari-forest.webp",
    imageAlt: "Elephants and their mahouts on a forest safari trail in Chitwan",
  },
] as const;

export const pokharaFaqs: FaqItem[] = [
  {
    question: "How many days should we plan for Pokhara?",
    answer:
      "2 to 3 days is enough for Phewa Lake, the Sarangkot sunrise, Davis Falls and Gupteshwor Cave, and a relaxed evening or two by the lake.",
  },
  {
    question: "Is Pokhara good for people who don't want to trek?",
    answer:
      "Yes — you can enjoy the mountain views, the lake and the town's cafes and viewpoints without joining a multi-day trek. Pokhara works well as a scenic stop on its own.",
  },
  {
    question: "How do we get from Kathmandu to Pokhara?",
    answer:
      "Either a 25-minute flight or a 6 to 7 hour scenic drive along the Prithvi Highway — we'll arrange whichever suits your itinerary and pace better.",
  },
  {
    question: "When are the mountain views clearest?",
    answer:
      "October to November and March to April give the clearest skies and the best chance of an unobstructed Annapurna view, especially at sunrise from Sarangkot.",
  },
] as const;
