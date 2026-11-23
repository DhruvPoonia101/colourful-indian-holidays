import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

// Sri Lanka destination content, written 23 Nov 2026. Seasons follow
// Intrepid Travel's Sri Lanka best-time guide; UNESCO years from the
// World Heritage List; Yala closure dates from Newswire.lk (Sep 2026).

export const sigiriyaAttractions: CityCard[] = [
  {
    name: "Sigiriya Rock Fortress",
    tagline: "A Palace in the Sky",
    description:
      "The climb takes most visitors about two hours return, past water gardens, the frescoes and the Lion Gate to the palace ruins on the summit.",
    href: "/destinations/sigiriya",
    image: "/images/destinations/sigiriya-rock-fortress.webp",
    imageAlt: "Sigiriya Rock Fortress rising above the forest",
  },
  {
    name: "The Climb & the Frescoes",
    tagline: "Stairs, Paintings & the Lion Gate",
    description:
      "A spiral staircase on the rock face leads to a gallery of 5th-century painted frescoes, then on past the giant carved paws of the Lion Gate to the summit.",
    href: "/destinations/sigiriya",
    image: "/images/destinations/sigiriya-rock-staircase.webp",
    imageAlt: "The staircase up the face of Sigiriya rock",
  },
  {
    name: "Pidurangala Rock",
    tagline: "The Best View of Sigiriya",
    description:
      "A shorter, rougher climb on the neighbouring rock, ending in a sunrise or sunset view straight across to Sigiriya.",
    href: "/destinations/sigiriya",
    image: "/images/destinations/sigiriya-from-pidurangala.webp",
    imageAlt: "Sigiriya rock seen across the surrounding wetlands",
  },
  {
    name: "Dambulla Cave Temple",
    tagline: "Five Painted Caves",
    description:
      "A UNESCO-listed cave temple complex with five caves of Buddha statues and painted ceilings, about 30 minutes from Sigiriya.",
    href: "/destinations/sigiriya",
    image: "/images/destinations/dambulla-cave-temple.webp",
    imageAlt: "The white entrance of the Dambulla cave temple",
  },
] as const;

export const sigiriyaQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "January – September" },
  { label: "Ideal Trip Length", value: "2 – 3 Days" },
  { label: "UNESCO Status", value: "Sigiriya (1982), Dambulla (1991)" },
  { label: "Languages Spoken", value: "Sinhala, Tamil, English" },
] as const;

export const sigiriyaGettingThere: GettingThereItem[] = [
  {
    title: "From Colombo or the Airport",
    description:
      "About 4 hours by road, which is why many itineraries drive here straight from the airport on day one.",
  },
  {
    title: "Between the Sites",
    description:
      "Dambulla is around 30 minutes away, Polonnaruwa about an hour, and Kandy around 2.5 to 3 hours.",
  },
  {
    title: "Climbing Times",
    description:
      "Start early. The rock is hottest and busiest from late morning, and an early climb gives the best light.",
  },
] as const;

export const sigiriyaHighlights: Highlight[] = [
  {
    title: "Sri Lanka's Most Famous Sight",
    description:
      "The Lion Rock is the island's signature view and a UNESCO World Heritage Site.",
  },
  {
    title: "Two UNESCO Sites in One Base",
    description:
      "Sigiriya and the Dambulla cave temple are both on UNESCO's list, half an hour apart.",
  },
  {
    title: "Wild Elephant Safaris",
    description:
      "Minneriya, Kaudulla and Hurulu are some of the best places in Asia to watch wild elephants in large herds.",
  },
  {
    title: "Ancient Capitals Nearby",
    description:
      "Polonnaruwa and Anuradhapura, both UNESCO-listed, are within day-trip distance.",
  },
  {
    title: "Village Life",
    description:
      "Lakes, rice paddies and villages surround the rock, with cooking and village experiences on offer.",
  },
] as const;

export const sigiriyaRelatedDestinations: CityCard[] = [
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
    name: "Colombo",
    tagline: "Gateway City & Sea Front",
    description:
      "Sri Lanka's commercial capital, with temples, markets and a sea-front promenade.",
    href: "/destinations/colombo",
    image: "/images/destinations/colombo-galle-face-green-sunset.webp",
    imageAlt: "Galle Face Green at sunset on the Colombo sea front",
  },
  {
    name: "Ella",
    tagline: "Nine Arch Bridge & Hill Train",
    description:
      "Easy hikes, the Nine Arch Bridge and the end of the scenic hill train.",
    href: "/destinations/ella",
    image: "/images/destinations/ella-nine-arch-bridge-train.webp",
    imageAlt: "A blue train crossing the Nine Arch Bridge near Ella",
  },
] as const;

export const sigiriyaWhereToStay: GettingThereItem[] = [
  {
    title: "Sigiriya village",
    description:
      "Closest to the rock for an early climb, with lodges set among lakes and forest.",
  },
  {
    title: "Habarana & Dambulla",
    description:
      "Good for safaris in Minneriya and Kaudulla and for the Dambulla cave temple.",
  },
] as const;

export const sigiriyaFaqs: FaqItem[] = [
  {
    question: "How long does it take to climb Sigiriya?",
    answer:
      "Most people take about two hours up and down, including time at the frescoes, the Lion Gate and the summit. It is steep with around 1,200 steps, so start early to avoid the heat.",
  },
  {
    question: "Is Sigiriya or Pidurangala better?",
    answer:
      "Do both if you can. Sigiriya has the history and the palace ruins; Pidurangala is a shorter, rougher climb with the best view of Sigiriya itself, especially at sunrise.",
  },
  {
    question: "Where can I see elephants near Sigiriya?",
    answer:
      "Minneriya, Kaudulla and Hurulu Eco Park are all close. Your guide picks the park where the herds are feeding at the time of your visit.",
  },
  {
    question: "How many days should I spend in Sigiriya?",
    answer:
      "Two nights covers Sigiriya, Dambulla and a safari. Add a third night for Polonnaruwa or Anuradhapura.",
  },
  {
    question: "Can I visit Sigiriya and Dambulla on the same day?",
    answer:
      "Yes. They are about 30 minutes apart. Climb Sigiriya early, rest at midday, and visit Dambulla in the afternoon, or do Dambulla on your way to Kandy.",
  },
  {
    question: "What is the best time of day to climb Sigiriya?",
    answer:
      "At opening time in the morning, usually 7 am, when it is coolest and quietest. Late afternoon is the second-best option.",
  },
] as const;
