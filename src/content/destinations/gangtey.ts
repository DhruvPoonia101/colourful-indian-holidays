import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const gangteyAttractions: CityCard[] = [
  {
    name: "Gangtey Monastery (Gangtey Goemba)",
    tagline: "The Valley's Spiritual Centre",
    description:
      "A 17th-century Nyingma monastery perched above the Phobjikha Valley, offering a wide view over the marshland below and the valley's main religious site.",
    href: "/destinations/gangtey",
    image: "/images/destinations/gangtey-monastery-front.webp",
    imageAlt: "The front courtyard of Gangtey Monastery",
  },
  {
    name: "Black-Necked Crane Information Centre",
    tagline: "Conservation in Action",
    description:
      "A small conservation centre with telescopes and displays on the rare black-necked cranes that migrate here each winter from the Tibetan Plateau.",
    href: "/destinations/gangtey",
    image: "/images/destinations/gangtey-black-necked-cranes.webp",
    imageAlt: "A group of black-necked cranes wading in the Phobjikha Valley wetlands",
  },
  {
    name: "Black-Necked Crane Festival",
    tagline: "Held Every November at Gangtey Monastery",
    description:
      "An annual festival celebrating the cranes' arrival, with local schoolchildren performing crane-themed masked dances in the monastery courtyard.",
    href: "/destinations/gangtey",
    image: "/images/destinations/gangtey-crane-festival.webp",
    imageAlt: "Crowds gathered at the Black-Necked Crane Festival in front of Gangtey Monastery",
  },
] as const;

export const gangteyQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "November–February (Crane Season)" },
  { label: "Ideal Trip Length", value: "1 – 2 Days" },
  { label: "Main Gateway", value: "~4–5 hr drive from Thimphu or Punakha" },
  { label: "Languages Spoken", value: "Dzongkha, English" },
] as const;

export const gangteyGettingThere: GettingThereItem[] = [
  {
    title: "By Road from Punakha or Thimphu",
    description:
      "Roughly 1.5 hours from Punakha or 4 to 5 hours from Thimphu, crossing the Pele La pass into the Phobjikha Valley.",
  },
  {
    title: "No Airport",
    description:
      "Like Punakha, Gangtey has no airstrip — it's reached entirely by road, usually as the final leg of a wider Bhutan circuit.",
  },
  {
    title: "Sustainable Development Fee & Licensed Guide",
    description:
      "As with the rest of Bhutan, most foreign visitors travel with a licensed local guide and pay a daily Sustainable Development Fee, both arranged through a registered tour operator.",
  },
] as const;

export const gangteyHighlights: Highlight[] = [
  {
    title: "Bhutan's Only Glacial Valley",
    description:
      "Phobjikha's wide, U-shaped marshland floor is a genuinely different landscape from anywhere else on a typical Bhutan itinerary — flat, open and quiet.",
  },
  {
    title: "A Rare Wintering Ground for Black-Necked Cranes",
    description:
      "Every winter, endangered black-necked cranes migrate here from the Tibetan Plateau, and the valley's community has organised its conservation efforts around protecting them.",
  },
  {
    title: "Power Lines Buried for the Cranes",
    description:
      "Electricity cables in the valley are laid underground rather than on poles, specifically to keep the cranes' flight paths clear — a small but telling example of Bhutan's conservation priorities.",
  },
  {
    title: "The Quietest Stop on a Bhutan Circuit",
    description:
      "With no airport and a smaller visitor footprint than Thimphu or Paro, Gangtey offers a noticeably slower, less-visited pace to close out a trip.",
  },
  {
    title: "A Genuine Local Festival, Not a Tourist Show",
    description:
      "The Black-Necked Crane Festival each November is organised by and for the local community to celebrate the cranes' return, with visitors welcome to watch schoolchildren perform crane-themed dances.",
  },
] as const;

export const gangteyRelatedDestinations: CityCard[] = [
  {
    name: "Punakha",
    tagline: "Bhutan's Former Capital",
    description: "The closest of Bhutan's major stops, roughly 1.5 hours back down the valley.",
    href: "/destinations/punakha",
    image: "/images/destinations/punakha-dzong-river.webp",
    imageAlt: "Punakha Dzong at the confluence of the Pho Chhu and Mo Chhu rivers",
  },
  {
    name: "Thimphu",
    tagline: "Bhutan's Capital",
    description: "A longer drive back to the capital, usually the start or end of the circuit.",
    href: "/destinations/thimphu",
    image: "/images/destinations/thimphu-tashichho-dzong.webp",
    imageAlt: "Tashichho Dzong's whitewashed walls and golden roofs against the hillside",
  },
  {
    name: "Paro",
    tagline: "Home of the Tiger's Nest",
    description: "Bhutan's air gateway, typically the first and last stop on any itinerary.",
    href: "/destinations/paro",
    image: "/images/destinations/paro-taktsang-tigers-nest.webp",
    imageAlt: "Paro Taktsang, the Tiger's Nest monastery, built into the cliff face",
  },
] as const;

export const gangteyFaqs: FaqItem[] = [
  {
    question: "When can we see the black-necked cranes?",
    answer:
      "The cranes typically arrive in the valley from late October and stay through February, with November to February being the most reliable window for sightings.",
  },
  {
    question: "How far is Gangtey from Thimphu?",
    answer:
      "About 4 to 5 hours by road via Punakha and the Pele La pass — most itineraries visit Punakha first, then continue on to Gangtey rather than travelling there directly.",
  },
  {
    question: "Do we need a guide to visit Bhutan?",
    answer:
      "Yes — most foreign visitors travel with a licensed local guide and pay a daily Sustainable Development Fee, both arranged through a registered tour operator like us as part of your booking.",
  },
  {
    question: "Is Gangtey worth visiting outside crane season?",
    answer:
      "Yes — the Phobjikha Valley's scenery and the monastery are worthwhile year-round, even without the cranes or the November festival taking place.",
  },
] as const;
