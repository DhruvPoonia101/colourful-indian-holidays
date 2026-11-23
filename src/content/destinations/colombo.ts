import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

// Sri Lanka destination content, written 23 Nov 2026. Seasons follow
// Intrepid Travel's Sri Lanka best-time guide; UNESCO years from the
// World Heritage List; Yala closure dates from Newswire.lk (Sep 2026).

export const colomboAttractions: CityCard[] = [
  {
    name: "Gangaramaya Temple",
    tagline: "A Working Temple & Museum",
    description:
      "One of Colombo's best-known Buddhist temples, part place of worship and part museum, filled with statues, relics and donated curiosities collected over more than a century.",
    href: "/destinations/colombo",
    image: "/images/destinations/colombo-gangaramaya-temple.webp",
    imageAlt: "Gangaramaya Temple, Colombo, with its ornate Buddhist shrines",
  },
  {
    name: "Galle Face Green",
    tagline: "The City's Sea-Front Lawn",
    description:
      "A long promenade lawn on the Indian Ocean where families fly kites and street-food stalls open at sunset — the easiest way to see everyday Colombo life.",
    href: "/destinations/colombo",
    image: "/images/destinations/colombo-galle-face-green-sunset.webp",
    imageAlt: "Galle Face Green at sunset, Colombo",
  },
  {
    name: "Pettah & the Red Mosque",
    tagline: "Markets at Full Volume",
    description:
      "Colombo's oldest bazaar district, crammed with wholesale streets, and home to the striking red-and-white Jami Ul-Alfar Mosque.",
    href: "/destinations/colombo",
    image: "/images/destinations/colombo-pettah-red-mosque.webp",
    imageAlt: "The red-and-white Jami Ul-Alfar Mosque in Pettah, Colombo",
  },
  {
    name: "Lotus Tower & the Skyline",
    tagline: "Modern Colombo",
    description:
      "The Lotus Tower dominates the modern skyline, with an observation deck for views over the city, the lake and the port.",
    href: "/destinations/colombo",
    image: "/images/destinations/colombo-skyline-lotus-tower.webp",
    imageAlt: "The Colombo skyline with the Lotus Tower",
  },
] as const;

export const colomboQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "December – March" },
  { label: "Ideal Trip Length", value: "1 – 2 Days" },
  { label: "Main Gateway", value: "Bandaranaike International Airport (CMB)" },
  { label: "Languages Spoken", value: "Sinhala, Tamil, English" },
] as const;

export const colomboGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Bandaranaike International Airport (CMB) at Katunayake, about 35 km north of the city, has direct flights from India, the Gulf, Southeast Asia and Europe.",
  },
  {
    title: "From India",
    description:
      "Direct flights connect Colombo with Delhi, Mumbai, Chennai and Kochi, among others, which makes Sri Lanka an easy add-on to an India itinerary.",
  },
  {
    title: "Getting Around",
    description:
      "We arrange a private car and driver-guide for the whole trip. Expressways link Colombo with the airport, Kandy and the south coast at Galle.",
  },
] as const;

export const colomboHighlights: Highlight[] = [
  {
    title: "An Easy First or Last Stop",
    description:
      "Close to the airport, so it fits around international flight times without wasting a full day.",
  },
  {
    title: "Temples, Mosques and Churches Side by Side",
    description:
      "A short walk takes in Buddhist, Hindu, Muslim and Christian places of worship, a good snapshot of Sri Lanka's mix of communities.",
  },
  {
    title: "Street Food at Sunset",
    description:
      "Galle Face Green comes alive at dusk, with isso wade (prawn fritters) and kottu stalls along the sea front.",
  },
  {
    title: "Colonial Architecture",
    description:
      "The Fort and Pettah districts keep buildings from the Portuguese, Dutch and British periods.",
  },
  {
    title: "Gateway to the Whole Island",
    description:
      "Expressways run to Kandy and the south coast, so Colombo connects easily with every route we plan.",
  },
] as const;

export const colomboRelatedDestinations: CityCard[] = [
  {
    name: "Galle",
    tagline: "Dutch Fort & South Coast",
    description:
      "A UNESCO-listed fort town and the gateway to the south-coast beaches.",
    href: "/destinations/galle",
    image: "/images/destinations/galle-fort-lighthouse.webp",
    imageAlt: "The lighthouse on the ramparts of Galle Fort",
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
    name: "Sigiriya",
    tagline: "Lion Rock Fortress",
    description:
      "A 5th-century palace on a rock, the Dambulla caves and elephant safaris.",
    href: "/destinations/sigiriya",
    image: "/images/destinations/sigiriya-rock-fortress.webp",
    imageAlt: "Sigiriya Lion Rock rising above the forest",
  },
] as const;

export const colomboWhereToStay: GettingThereItem[] = [
  {
    title: "Colombo Fort & Galle Face",
    description:
      "Big international hotels and the sea front, close to the old Fort district and the Pettah markets.",
  },
  {
    title: "Negombo",
    description:
      "A beach town about 20 minutes from the airport, best for a first or last night around flights.",
  },
] as const;

export const colomboFaqs: FaqItem[] = [
  {
    question: "Is Colombo worth visiting?",
    answer:
      "Yes, for half a day to a day. It is a busy commercial city rather than a highlight in itself, but Gangaramaya Temple, Galle Face Green and the Pettah markets give a good first or last taste of Sri Lanka.",
  },
  {
    question: "How far is Colombo airport from the city?",
    answer:
      "Bandaranaike International Airport is at Katunayake, about 35 km north of Colombo. The airport expressway usually makes it a 30 to 45-minute drive, longer in heavy traffic.",
  },
  {
    question: "Should I stay in Colombo or Negombo on arrival?",
    answer:
      "If your flight lands late, Negombo is closer to the airport and makes an easy first night. If you arrive early, we usually drive straight to the Cultural Triangle and keep Colombo for the end of the trip.",
  },
  {
    question: "When is the best time to visit Colombo?",
    answer:
      "December to March, when the west coast is driest. The south-west monsoon brings heavy rain from about May to August.",
  },
  {
    question: "What is there to do in Colombo in one day?",
    answer:
      "Start at Gangaramaya Temple, walk through the Pettah markets to the Red Mosque, see the colonial buildings of the Fort district, and finish at Galle Face Green for street food at sunset.",
  },
  {
    question: "Is Colombo safe for tourists?",
    answer:
      "Colombo is generally relaxed for visitors. Take the usual city precautions with valuables, use metered tuk-tuks or ride-hailing apps, and your driver-guide is with you for most of the trip.",
  },
] as const;
