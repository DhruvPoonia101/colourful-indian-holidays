import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const agraAttractions: CityCard[] = [
  {
    name: "Taj Mahal",
    tagline: "A Monument of Eternal Love",
    description:
      "One of the world's most celebrated monuments, the Taj Mahal is a masterpiece of Mughal architecture and Agra's defining landmark.",
    href: "/destinations/agra",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal overlooking the Yamuna River in Agra",
  },
  {
    name: "Agra Fort",
    tagline: "Mughal Imperial Stronghold",
    description:
      "A magnificent red sandstone fortress that served as the main residence of Mughal emperors and offers sweeping views towards the Taj Mahal.",
    href: "/destinations/agra",
    image: "/images/destinations/agra-fort.webp",
    imageAlt: "Historic Agra Fort in Agra, India",
  },
  {
    name: "Itmad-ud-Daulah",
    tagline: "The Baby Taj",
    description:
      "An elegant marble tomb decorated with delicate inlay work, often regarded as a beautiful architectural precursor to the Taj Mahal.",
    href: "/destinations/agra",
    image: "/images/destinations/itmad-ud-daulah.webp",
    imageAlt: "Itmad-ud-Daulah tomb in Agra",
  },
  {
    name: "Mehtab Bagh",
    tagline: "Taj Mahal Sunset Views",
    description:
      "A historic Mughal garden on the opposite bank of the Yamuna, offering a peaceful setting and beautiful views of the Taj Mahal.",
    href: "/destinations/agra",
    image: "/images/destinations/mehtab-bagh.webp",
    imageAlt: "Mehtab Bagh with a view of the Taj Mahal in Agra",
  },
] as const;

export const agraQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October – March" },
  { label: "Ideal Trip Length", value: "1 – 2 Days" },
  { label: "Main Gateway", value: "Delhi (DEL)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const agraGettingThere: GettingThereItem[] = [
  {
    title: "Main Gateway",
    description:
      "Agra has its own small airport, but almost all international travellers arrive via Delhi's Indira Gandhi International Airport, then reach Agra by road or the high-speed Gatimaan Express train — around 3.5 to 4 hours either way.",
  },
  {
    title: "Typical Entry Route",
    description:
      "Agra is almost always visited as a stop between Delhi and Rajasthan, rather than a standalone destination — most itineraries include it as the middle leg of the classic Golden Triangle.",
  },
  {
    title: "Visa Requirements",
    description:
      "The standard Indian e-Visa applies for most nationalities and can be arranged online before departure. We recommend confirming current requirements for your passport before booking flights.",
  },
] as const;

export const agraHighlights: Highlight[] = [
  {
    title: "Best Seen at Sunrise",
    description:
      "Sunrise entry to the Taj Mahal means softer light for photography, smaller crowds, and cooler temperatures — the single most common piece of advice we give Agra-bound travellers.",
  },
  {
    title: "Fatehpur Sikri",
    description:
      "A UNESCO-listed abandoned Mughal capital roughly 40 minutes outside Agra, remarkably intact and far less crowded than the city's main sights.",
  },
  {
    title: "Marble Inlay Craftsmanship",
    description:
      "Agra is still home to artisan workshops practising the same pietra dura marble inlay technique used to decorate the Taj Mahal itself, generations later.",
  },
  {
    title: "Yamuna River Views",
    description:
      "Several of Agra's monuments — the Taj Mahal, Agra Fort and Itmad-ud-Daulah — sit directly on the Yamuna, and were designed with the river in mind.",
  },
  {
    title: "A Mughal Capital, Not Just a Monument",
    description:
      "Agra served as the Mughal Empire's capital across three emperors, which is why its architecture spans everything from forts to formal gardens to tombs.",
  },
  {
    title: "Easy Golden Triangle Fit",
    description:
      "A short, well-connected drive from both Delhi and Jaipur, which is exactly why Agra anchors the middle of almost every first-time India itinerary.",
  },
] as const;

export const agraRelatedDestinations: CityCard[] = [
  {
    name: "Delhi",
    tagline: "India's Capital",
    description: "A short drive or train ride away, and paired with Agra on almost every first-time trip.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "Jaipur is a short journey from Agra, and the natural next stop for most itineraries.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "Varanasi",
    tagline: "Spiritual India",
    description: "Ancient ghats on the Ganges — often added as an extension for a fuller North India trip.",
    href: "/destinations/varanasi",
    image: "/images/destinations/varanasi.webp",
    imageAlt: "Ganga aarti ceremony at the ghats of Varanasi",
  },
] as const;

export const agraFaqs: FaqItem[] = [
  {
    question: "How many days do I need in Agra?",
    answer:
      "Most travellers see Agra's main sights — the Taj Mahal and Agra Fort — comfortably in a single day, or add Fatehpur Sikri for a fuller second day. It's rarely worth more than one or two nights unless you want a slower pace.",
  },
  {
    question: "Is it worth visiting the Taj Mahal at sunrise?",
    answer:
      "Yes, genuinely — sunrise entry means softer light for photography, noticeably smaller crowds, and cooler temperatures for most of the year. It's the single most common piece of advice we give travellers heading to Agra.",
  },
  {
    question: "Can Agra be visited as a day trip from Delhi?",
    answer:
      "Yes, the Gatimaan Express makes Agra a genuine day-trip option from Delhi — around 100 minutes each way. That said, we usually recommend an overnight stay if your schedule allows, so you can see the Taj Mahal at sunrise rather than arriving mid-morning.",
  },
  {
    question: "Is Agra Fort worth visiting alongside the Taj Mahal?",
    answer:
      "Yes — Agra Fort is a major Mughal monument in its own right, and seeing it alongside the Taj Mahal gives useful context, since the same Mughal emperors built both. It's easy to fit both into a single day.",
  },
  {
    question: "Do I need a guide at the Taj Mahal?",
    answer:
      "It's not required, but the history behind the Taj Mahal is dense enough that a private guide genuinely improves the visit — this is how we run every Agra itinerary, alongside a private driver for the Delhi–Agra–Jaipur route.",
  },
] as const;
