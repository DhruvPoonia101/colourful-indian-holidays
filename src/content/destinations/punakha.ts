import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const punakhaAttractions: CityCard[] = [
  {
    name: "Punakha Dzong",
    tagline: "Bhutan's Most Beautiful Fortress",
    description:
      "A 17th-century dzong set at the confluence of the Pho Chhu and Mo Chhu rivers, widely considered the most beautiful fortress in Bhutan and still the venue for royal weddings.",
    href: "/destinations/punakha",
    image: "/images/destinations/punakha-dzong-river.webp",
    imageAlt: "Punakha Dzong at the confluence of the Pho Chhu and Mo Chhu rivers",
  },
  {
    name: "Punakha Suspension Bridge",
    tagline: "Bhutan's Longest Bridge",
    description:
      "A 160-metre suspension bridge strung with prayer flags, crossing the Pho Chhu river just below the dzong.",
    href: "/destinations/punakha",
    image: "/images/destinations/punakha-suspension-bridge.webp",
    imageAlt: "Punakha's suspension bridge strung with prayer flags over the Pho Chhu river",
  },
  {
    name: "Chimi Lhakhang",
    tagline: "The Fertility Temple",
    description:
      "A hilltop temple built in honour of the 'Divine Madman', Lama Drukpa Kunley, reached by a short walk through rice paddies and still visited by couples seeking blessings for fertility.",
    href: "/destinations/punakha",
    image: "/images/destinations/punakha-chimi-lhakhang.webp",
    imageAlt: "Chimi Lhakhang, Punakha's fertility temple",
  },
  {
    name: "Khamsum Yulley Namgyal Chorten",
    tagline: "A Hilltop Temple with Valley Views",
    description:
      "A richly decorated four-storey temple on a ridge above the Mo Chhu river, reached by a gentle uphill walk through farmland and forest.",
    href: "/destinations/punakha",
    image: "/images/destinations/punakha-khamsum-yulley-namgyal-chorten.webp",
    imageAlt: "The golden-roofed Khamsum Yulley Namgyal Chorten above the Punakha valley",
  },
] as const;

export const punakhaQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "Year-Round (Feb–Apr for Jacaranda Bloom)" },
  { label: "Ideal Trip Length", value: "1 – 2 Days" },
  { label: "Main Gateway", value: "~3 hr drive from Thimphu via Dochula Pass" },
  { label: "Languages Spoken", value: "Dzongkha, English" },
] as const;

export const punakhaGettingThere: GettingThereItem[] = [
  {
    title: "By Road from Thimphu",
    description:
      "A roughly 3 hour drive from Thimphu over the Dochula Pass, a 3,100 metre viewpoint marked by 108 memorial chortens and, on a clear day, a wide Himalayan panorama.",
  },
  {
    title: "No Airport",
    description:
      "Punakha has no airstrip of its own — all visitors arrive by road, usually as part of a wider Bhutan circuit connecting Paro, Thimphu and Punakha.",
  },
  {
    title: "Sustainable Development Fee & Licensed Guide",
    description:
      "As with the rest of Bhutan, most foreign visitors travel with a licensed local guide and pay a daily Sustainable Development Fee, both arranged through a registered tour operator.",
  },
] as const;

export const punakhaHighlights: Highlight[] = [
  {
    title: "Widely Considered Bhutan's Most Beautiful Dzong",
    description:
      "Punakha Dzong's setting at the confluence of two rivers, combined with its scale and preservation, makes it the standout fortress even in a country full of them.",
  },
  {
    title: "A Warmer, Lower-Altitude Valley",
    description:
      "At a lower elevation than Thimphu or Paro, Punakha has a milder, almost subtropical climate, making it a comfortable stop even in Bhutan's cooler months.",
  },
  {
    title: "A Historic Capital",
    description:
      "Punakha served as Bhutan's capital until the 1950s and remains the winter residence of the central monastic body, giving it deep continuing significance beyond its scenery.",
  },
  {
    title: "The Dochula Pass Drive Itself",
    description:
      "The journey from Thimphu is as memorable as the destination, climbing to 108 memorial chortens with a wide Himalayan panorama on a clear day.",
  },
  {
    title: "A Genuinely Different Landscape",
    description:
      "Rice terraces and river valleys replace the pine forest and dzong-topped ridges of Thimphu and Paro, giving Punakha its own distinct character within a short drive.",
  },
] as const;

export const punakhaRelatedDestinations: CityCard[] = [
  {
    name: "Thimphu",
    tagline: "Bhutan's Capital",
    description: "A scenic drive back over Dochula Pass to Bhutan's capital.",
    href: "/destinations/thimphu",
    image: "/images/destinations/thimphu-tashichho-dzong.webp",
    imageAlt: "Tashichho Dzong's whitewashed walls and golden roofs against the hillside",
  },
  {
    name: "Paro",
    tagline: "Home of the Tiger's Nest",
    description: "Bhutan's air gateway and home to the iconic Paro Taktsang monastery.",
    href: "/destinations/paro",
    image: "/images/destinations/paro-taktsang-tigers-nest.webp",
    imageAlt: "Paro Taktsang, the Tiger's Nest monastery, built into the cliff face",
  },
  {
    name: "Gangtey",
    tagline: "Valley of the Black-Necked Cranes",
    description: "A further scenic drive on to a quieter glacial valley.",
    href: "/destinations/gangtey",
    image: "/images/destinations/gangtey-black-necked-cranes.webp",
    imageAlt: "A group of black-necked cranes wading in the Phobjikha Valley wetlands",
  },
] as const;

export const punakhaFaqs: FaqItem[] = [
  {
    question: "How far is Punakha from Thimphu?",
    answer:
      "About 3 hours by road, crossing the Dochula Pass — a scenic drive in its own right, with a viewpoint at 108 memorial chortens along the way.",
  },
  {
    question: "Is Punakha warmer than Thimphu or Paro?",
    answer:
      "Yes — Punakha sits at a noticeably lower altitude, giving it a milder, almost subtropical climate compared to the cooler valleys of Thimphu and Paro.",
  },
  {
    question: "Is Punakha Dzong open to visitors?",
    answer:
      "Yes, though visiting hours can be limited when the dzong is in use for ceremonies or government business — we confirm current access when planning your itinerary.",
  },
  {
    question: "When is the best time to visit?",
    answer:
      "Punakha is comfortable most of the year given its lower altitude, though February to April is especially popular for the valley's blooming jacaranda trees.",
  },
] as const;
