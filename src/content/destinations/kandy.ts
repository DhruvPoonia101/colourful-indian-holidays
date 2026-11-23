import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

// Sri Lanka destination content, written 23 Nov 2026. Seasons follow
// Intrepid Travel's Sri Lanka best-time guide; UNESCO years from the
// World Heritage List; Yala closure dates from Newswire.lk (Sep 2026).

export const kandyAttractions: CityCard[] = [
  {
    name: "Temple of the Sacred Tooth Relic",
    tagline: "Sri Lanka's Most Sacred Temple",
    description:
      "Sri Dalada Maligawa, part of the old royal palace complex, houses the relic most venerated by Sri Lankan Buddhists. Daily puja ceremonies with drumming are open to visitors.",
    href: "/destinations/kandy",
    image: "/images/destinations/kandy-temple-of-the-tooth-lake.webp",
    imageAlt: "A pavilion on Kandy Lake beside the Temple of the Tooth complex",
  },
  {
    name: "Kandy Lake",
    tagline: "The Heart of the City",
    description:
      "An artificial lake built by Kandy's last king, with a shaded walking path around its shore and views back to the temple.",
    href: "/destinations/kandy",
    image: "/images/destinations/kandy-lake-view.webp",
    imageAlt: "Kandy Lake at sunset",
  },
  {
    name: "Royal Botanic Gardens, Peradeniya",
    tagline: "Orchids, Palms & Giant Trees",
    description:
      "Just outside the city, among the finest botanic gardens in Asia, known for its orchid house, palm avenues and huge Javan fig tree.",
    href: "/destinations/kandy",
    image: "/images/destinations/kandy-peradeniya-botanic-gardens.webp",
    imageAlt: "A tree-lined avenue in the Royal Botanic Gardens, Peradeniya",
  },
  {
    name: "Esala Perahera",
    tagline: "Sri Lanka's Grandest Festival",
    description:
      "Each July or August, nights of processions with dancers, drummers and richly decorated elephants parade the relic casket through the streets.",
    href: "/destinations/kandy",
    image: "/images/destinations/kandy-esala-perahera-elephants.webp",
    imageAlt: "A temple elephant with its mahouts, Sri Lanka",
  },
] as const;

export const kandyQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "December – April" },
  { label: "Ideal Trip Length", value: "1 – 2 Days" },
  { label: "UNESCO Status", value: "Sacred City of Kandy (1988)" },
  { label: "Languages Spoken", value: "Sinhala, Tamil, English" },
] as const;

export const kandyGettingThere: GettingThereItem[] = [
  {
    title: "From Colombo",
    description:
      "Around 3 to 4 hours by road from Colombo or the airport, depending on traffic and the route.",
  },
  {
    title: "From the Cultural Triangle",
    description:
      "About 2.5 to 3 hours from Sigiriya or Dambulla, with a stop at the Dambulla cave temple or a spice garden in Matale on the way.",
  },
  {
    title: "Onward to the Hill-Country Train",
    description:
      "The railway between Kandy and Nanu Oya is closed for cyclone repairs, with reopening reported for 2027. Until then, we drive you to Nanu Oya, about 3 hours, to ride the most scenic section to Ella.",
  },
] as const;

export const kandyHighlights: Highlight[] = [
  {
    title: "The Island's Spiritual Centre",
    description:
      "The Temple of the Tooth makes Kandy the most important Buddhist pilgrimage city in Sri Lanka.",
  },
  {
    title: "A UNESCO World Heritage City",
    description:
      "The whole Sacred City of Kandy was listed by UNESCO in 1988.",
  },
  {
    title: "Gateway to Tea Country",
    description:
      "The roads up to the tea estates of Nuwara Eliya and Ella start here, and the hill-country railway normally does too.",
  },
  {
    title: "Kandyan Dance & Drumming",
    description:
      "Evening cultural shows bring the island's best-known dance tradition to life.",
  },
  {
    title: "A Cooler Climate",
    description:
      "At around 500 metres, Kandy is noticeably fresher than Colombo or the coast.",
  },
] as const;

export const kandyRelatedDestinations: CityCard[] = [
  {
    name: "Sigiriya",
    tagline: "Lion Rock Fortress",
    description:
      "A 5th-century palace on a rock, the Dambulla caves and elephant safaris.",
    href: "/destinations/sigiriya",
    image: "/images/destinations/sigiriya-rock-fortress.webp",
    imageAlt: "Sigiriya Lion Rock rising above the forest",
  },
  {
    name: "Nuwara Eliya",
    tagline: "Tea Estates & Cool Hills",
    description:
      "Rolling tea estates, a cool climate and the trails of Horton Plains.",
    href: "/destinations/nuwara-eliya",
    image: "/images/destinations/nuwara-eliya-tea-plantation.webp",
    imageAlt: "Tea estates covering the hills near Nuwara Eliya",
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

export const kandyWhereToStay: GettingThereItem[] = [
  {
    title: "Around Kandy Lake",
    description:
      "Walkable to the Temple of the Tooth and the town centre, with lake views from many hotels.",
  },
  {
    title: "The hills above Kandy",
    description:
      "Quieter boutique hotels and views over the valley, 15–30 minutes from town by car.",
  },
] as const;

export const kandyFaqs: FaqItem[] = [
  {
    question: "How many days do I need in Kandy?",
    answer:
      "One full day covers the Temple of the Tooth, the lake, Peradeniya gardens and a cultural show. Two nights gives a more relaxed pace or time for the Esala Perahera.",
  },
  {
    question: "When is the Kandy Esala Perahera?",
    answer:
      "It is held each year in July or August, timed by the lunar calendar, and runs over about ten nights. Dates change every year, so check them before you book.",
  },
  {
    question: "Can we take the train from Kandy to Ella?",
    answer:
      "Not from Kandy itself at the moment. Since Cyclone Ditwah in late 2025, the line between Kandy and Nanu Oya has been closed for repairs, with reopening reported for 2027. Trains run from Nanu Oya to Ella, the most scenic section, so we drive you to Nanu Oya and book reserved seats from there.",
  },
  {
    question: "What should I wear to the Temple of the Tooth?",
    answer:
      "Cover your shoulders and knees, and remove your shoes and hat before entering. Light clothing in white or pale colours is respectful.",
  },
  {
    question: "Can you see the tooth relic in Kandy?",
    answer:
      "No. The relic itself is never shown. It is kept in a gold casket inside the inner shrine, and during the daily puja the doors of the shrine open so worshippers can see the casket.",
  },
  {
    question: "Is Kandy worth visiting?",
    answer:
      "Yes. It is Sri Lanka's cultural capital, home to the Temple of the Tooth, and it sits on the route between the Cultural Triangle and the tea country, so it fits naturally into most itineraries.",
  },
] as const;
