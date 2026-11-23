import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

// Sri Lanka destination content, written 23 Nov 2026. Seasons follow
// Intrepid Travel's Sri Lanka best-time guide; UNESCO years from the
// World Heritage List; Yala closure dates from Newswire.lk (Sep 2026).

export const nuwaraEliyaAttractions: CityCard[] = [
  {
    name: "Tea Estates & Factories",
    tagline: "From Leaf to Cup",
    description:
      "Working estates around Nuwara Eliya welcome visitors for factory tours and tastings, with tea pickers at work on the hillsides.",
    href: "/destinations/nuwara-eliya",
    image: "/images/destinations/nuwara-eliya-tea-plantation.webp",
    imageAlt: "Tea estates covering the hills near Nuwara Eliya",
  },
  {
    name: "Gregory Lake",
    tagline: "Boating & Lakeside Walks",
    description:
      "A lake on the edge of town with paddle boats, a walking path and views of the surrounding hills.",
    href: "/destinations/nuwara-eliya",
    image: "/images/destinations/nuwara-eliya-gregory-lake.webp",
    imageAlt: "Flower gardens beside the lake in Nuwara Eliya",
  },
  {
    name: "The Hill-Country Railway",
    tagline: "Little Stations in the Clouds",
    description:
      "Small colonial-era stations such as Nanu Oya, for Nuwara Eliya, and Ohiya, for Horton Plains, sit on the scenic line through tea country.",
    href: "/destinations/nuwara-eliya",
    image: "/images/destinations/nuwara-eliya-hill-railway-station.webp",
    imageAlt: "A colonial-era hill-country railway station in Sri Lanka's tea country",
  },
  {
    name: "Horton Plains & World's End",
    tagline: "A Cloud-Forest Plateau",
    description:
      "An early-morning loop walk of around 9 km across a high plateau to World's End, a cliff edge with views over the lowlands when the mist allows.",
    href: "/destinations/nuwara-eliya",
    image: "/images/destinations/horton-plains-worlds-end.webp",
    imageAlt: "The Horton Plains walking trail marker",
  },
] as const;

export const nuwaraEliyaQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "January – April" },
  { label: "Ideal Trip Length", value: "1 – 2 Days" },
  { label: "Altitude", value: "About 1,900 m" },
  { label: "Languages Spoken", value: "Sinhala, Tamil, English" },
] as const;

export const nuwaraEliyaGettingThere: GettingThereItem[] = [
  {
    title: "From Kandy",
    description:
      "About 3 hours by road, climbing through tea estates past the Ramboda Falls. The Kandy to Nanu Oya railway is closed for cyclone repairs, so the road is the only option for now.",
  },
  {
    title: "To Ella",
    description:
      "Around 2.5 hours by road, or a scenic train ride from Nanu Oya to Ella.",
  },
  {
    title: "For Horton Plains",
    description:
      "The park is about an hour's drive from Nuwara Eliya. Leave before dawn: the views at World's End usually cloud over by mid-morning.",
  },
] as const;

export const nuwaraEliyaHighlights: Highlight[] = [
  {
    title: "Sri Lanka's Tea Heartland",
    description:
      "Factory visits and tastings show how the island's most famous export is made.",
  },
  {
    title: "Cool Mountain Air",
    description:
      "Evenings can be chilly, a real change from the heat of the coast and the Cultural Triangle.",
  },
  {
    title: "A UNESCO-Listed Landscape",
    description:
      "Horton Plains is part of the Central Highlands of Sri Lanka World Heritage Site.",
  },
  {
    title: "The Best Train Ride",
    description:
      "The railway from Nanu Oya to Ella passes some of the finest tea-country scenery on the island.",
  },
  {
    title: "Colonial Character",
    description:
      "Red-brick buildings, gardens and old hotels give the town a feel unlike anywhere else in Sri Lanka.",
  },
] as const;

export const nuwaraEliyaRelatedDestinations: CityCard[] = [
  {
    name: "Ella",
    tagline: "Nine Arch Bridge & Hill Train",
    description:
      "Easy hikes, the Nine Arch Bridge and the end of the scenic hill train.",
    href: "/destinations/ella",
    image: "/images/destinations/ella-nine-arch-bridge-train.webp",
    imageAlt: "A blue train crossing the Nine Arch Bridge near Ella",
  },
  {
    name: "Kandy",
    tagline: "Temple of the Tooth",
    description:
      "The last royal capital, home to the Temple of the Sacred Tooth Relic.",
    href: "/destinations/kandy",
    image: "/images/destinations/kandy-temple-of-the-tooth-lake.webp",
    imageAlt: "A pavilion on Kandy Lake beside the Temple of the Tooth complex",
  },
  {
    name: "Yala National Park",
    tagline: "Leopard Safaris",
    description:
      "Jeep safaris for leopards, elephants and sloth bears on the south-east coast.",
    href: "/destinations/yala",
    image: "/images/destinations/yala-leopard.webp",
    imageAlt: "A Sri Lankan leopard drinking at a waterhole",
  },
] as const;

export const nuwaraEliyaWhereToStay: GettingThereItem[] = [
  {
    title: "Nuwara Eliya town",
    description:
      "Colonial-era hotels near Gregory Lake and Victoria Park.",
  },
  {
    title: "Tea-estate bungalows",
    description:
      "Restored planters' bungalows on working estates outside town, for a quieter stay.",
  },
] as const;

export const nuwaraEliyaFaqs: FaqItem[] = [
  {
    question: "Is it cold in Nuwara Eliya?",
    answer:
      "It is cool rather than cold. Days are mild, but nights can drop to around 10°C or lower in the dry months, so pack a fleece or light jacket.",
  },
  {
    question: "How long is the Horton Plains walk?",
    answer:
      "The loop to World's End and Baker's Falls is around 9 km and takes about 3 hours at an easy pace. Start early, before the mist rolls in.",
  },
  {
    question: "Can we visit a tea factory?",
    answer:
      "Yes. Several working estates around Nuwara Eliya offer factory tours and tastings, and we include one in our hill-country itineraries.",
  },
  {
    question: "Should I stay in Nuwara Eliya or Ella?",
    answer:
      "Nuwara Eliya suits tea estates, colonial character and Horton Plains; Ella suits easy hikes and a more laid-back village feel. Most of our routes include one night in each.",
  },
  {
    question: "What is the best tea factory to visit near Nuwara Eliya?",
    answer:
      "Several estates welcome visitors. Your guide chooses a working factory on your route, usually between Kandy and Nuwara Eliya, where you can see processing and taste the tea.",
  },
  {
    question: "Do I need to book Horton Plains in advance?",
    answer:
      "No booking is needed for the park itself, but you should start very early. We arrange the drive and entry, and pack breakfast if you leave before your hotel's breakfast opens.",
  },
] as const;
