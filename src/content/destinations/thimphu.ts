import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const thimphuAttractions: CityCard[] = [
  {
    name: "Tashichho Dzong",
    tagline: "Seat of Government & Monastic Body",
    description:
      "A whitewashed fortress-monastery on the Wang Chhu river that houses both the King's secretariat and Bhutan's central monastic body, at its most impressive in the evening light.",
    href: "/destinations/thimphu",
    image: "/images/destinations/thimphu-tashichho-dzong.webp",
    imageAlt: "Tashichho Dzong's whitewashed walls and golden roofs against the hillside",
  },
  {
    name: "Buddha Dordenma",
    tagline: "A 51-Metre Golden Buddha",
    description:
      "A giant gilded statue on a hillside above the city, containing over 100,000 smaller Buddha statues inside its base, visible from almost anywhere in Thimphu.",
    href: "/destinations/thimphu",
    image: "/images/destinations/thimphu-buddha-dordenma.webp",
    imageAlt: "The giant bronze Buddha Dordenma statue overlooking Thimphu",
  },
  {
    name: "Memorial Chorten",
    tagline: "Built in Honour of the Third King",
    description:
      "A whitewashed stupa built as a memorial to Bhutan's third king, and one of the city's most active religious sites, with locals circling it daily.",
    href: "/destinations/thimphu",
    image: "/images/destinations/thimphu-memorial-chorten.webp",
    imageAlt: "The white and gold National Memorial Chorten in Thimphu",
  },
  {
    name: "Motithang Takin Preserve",
    tagline: "Home of Bhutan's National Animal",
    description:
      "A forested reserve on the edge of the city where visitors can see the takin, a strange goat-antelope hybrid that is Bhutan's official national animal.",
    href: "/destinations/thimphu",
    image: "/images/destinations/thimphu-takin-preserve.webp",
    imageAlt: "Two takins, Bhutan's national animal, at the Motithang Takin Preserve",
  },
] as const;

export const thimphuQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October–December & March–May" },
  { label: "Ideal Trip Length", value: "2 Days" },
  { label: "Main Gateway", value: "Paro Airport, then a 1 hr scenic drive" },
  { label: "Languages Spoken", value: "Dzongkha, English" },
] as const;

export const thimphuGettingThere: GettingThereItem[] = [
  {
    title: "By Air via Paro",
    description:
      "Bhutan has only one international airport, at Paro, with direct flights from Kathmandu, Delhi, Kolkata, Bangkok and Singapore. Thimphu is then a scenic 1 hour drive away.",
  },
  {
    title: "Sustainable Development Fee & Licensed Guide",
    description:
      "Most foreign visitors to Bhutan pay a daily Sustainable Development Fee and travel with a licensed local guide arranged through a registered tour operator — we handle both as part of your booking.",
  },
  {
    title: "Overland from India",
    description:
      "It's also possible to enter by road via the Phuentsholing border crossing, though flying into Paro is faster and is what we arrange for nearly all international clients.",
  },
] as const;

export const thimphuHighlights: Highlight[] = [
  {
    title: "The Only Capital Without Traffic Lights",
    description:
      "Thimphu remains the only national capital in the world without a single traffic light — a white-gloved traffic officer directs the main intersection by hand instead.",
  },
  {
    title: "A Small, Walkable Capital",
    description:
      "Unlike most national capitals, central Thimphu is compact enough to explore comfortably on foot, with the dzong, markets and monuments all close together.",
  },
  {
    title: "Government and Religion Under One Roof",
    description:
      "Tashichho Dzong housing both the monastic body and the seat of government reflects how closely Bhutanese governance and Buddhism remain intertwined.",
  },
  {
    title: "A Living Example of Gross National Happiness",
    description:
      "Bhutan's development philosophy prioritises wellbeing over pure economic growth, and Thimphu — with its building codes requiring traditional architecture even on new construction — shows this in practice.",
  },
  {
    title: "An Easy First Stop in Bhutan",
    description:
      "As the closest major town to Paro Airport after Paro itself, Thimphu is where most Bhutan itineraries begin.",
  },
] as const;

export const thimphuRelatedDestinations: CityCard[] = [
  {
    name: "Paro",
    tagline: "Home of the Tiger's Nest",
    description: "Bhutan's air gateway and home to the iconic Paro Taktsang monastery.",
    href: "/destinations/paro",
    image: "/images/destinations/paro-taktsang-tigers-nest.webp",
    imageAlt: "Paro Taktsang, the Tiger's Nest monastery, built into the cliff face",
  },
  {
    name: "Punakha",
    tagline: "Bhutan's Former Capital",
    description: "A scenic drive over Dochula Pass to Bhutan's most photographed dzong.",
    href: "/destinations/punakha",
    image: "/images/destinations/punakha-dzong-river.webp",
    imageAlt: "Punakha Dzong at the confluence of the Pho Chhu and Mo Chhu rivers",
  },
  {
    name: "Gangtey",
    tagline: "Valley of the Black-Necked Cranes",
    description: "A quieter glacial valley, a natural extension of a Thimphu-based itinerary.",
    href: "/destinations/gangtey",
    image: "/images/destinations/gangtey-black-necked-cranes.webp",
    imageAlt: "A group of black-necked cranes wading in the Phobjikha Valley wetlands",
  },
] as const;

export const thimphuFaqs: FaqItem[] = [
  {
    question: "How many days should we plan for Thimphu?",
    answer:
      "2 days is enough to see Tashichho Dzong, the Buddha Dordenma statue, the Memorial Chorten and the Takin Preserve at a comfortable pace.",
  },
  {
    question: "Do we need a guide to visit Bhutan?",
    answer:
      "Yes — most foreign visitors travel with a licensed local guide and pay a daily Sustainable Development Fee, both arranged through a registered tour operator like us as part of your booking.",
  },
  {
    question: "Is Thimphu a good first stop in Bhutan?",
    answer:
      "Yes — as the closest major town to Paro Airport, Thimphu is where most Bhutan itineraries begin, before continuing on to Punakha and Gangtey.",
  },
  {
    question: "When is the best time to visit?",
    answer:
      "October to December and March to May offer the clearest mountain views and the most comfortable temperatures, avoiding the summer monsoon and the coldest winter weeks.",
  },
] as const;
