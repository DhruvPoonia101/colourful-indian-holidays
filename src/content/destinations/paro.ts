import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const paroAttractions: CityCard[] = [
  {
    name: "Paro Taktsang (Tiger's Nest)",
    tagline: "Bhutan's Most Iconic Sight",
    description:
      "A monastery built into a sheer cliff face 900 metres above the Paro valley floor, reached by a moderate 4 to 5 hour round-trip hike and the single most photographed image of Bhutan.",
    href: "/destinations/paro",
    image: "/images/destinations/paro-taktsang-tigers-nest.webp",
    imageAlt: "Paro Taktsang, the Tiger's Nest monastery, built into the cliff face",
  },
  {
    name: "Rinpung Dzong",
    tagline: "Paro's Fortress-Monastery",
    description:
      "A 17th-century fortress monastery overlooking the town, still in use today as both an administrative centre and a monastic school.",
    href: "/destinations/paro",
    image: "/images/destinations/paro-rinpung-dzong-valley-airport.webp",
    imageAlt: "Rinpung Dzong on its ridge above the Paro valley, with the airport runway below",
  },
  {
    name: "National Museum of Bhutan",
    tagline: "Housed in a Historic Watchtower",
    description:
      "A round watchtower above Rinpung Dzong, converted into a museum covering Bhutanese art, textiles, natural history and religious artefacts.",
    href: "/destinations/paro",
    image: "/images/destinations/paro-national-museum-ta-dzong.webp",
    imageAlt: "The round Ta Dzong watchtower, home to the National Museum of Bhutan",
  },
  {
    name: "Traditional Archery",
    tagline: "Bhutan's National Sport",
    description:
      "Archery grounds across the Paro valley host matches most weekends, complete with traditional dress, song and dance between rounds — a genuine local sport, not a staged show.",
    href: "/destinations/paro",
    image: "/images/destinations/paro-traditional-archery.webp",
    imageAlt: "A Bhutanese archer in traditional dress taking aim",
  },
] as const;

export const paroQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October–December & March–May" },
  { label: "Ideal Trip Length", value: "2 – 3 Days" },
  { label: "Main Gateway", value: "Paro International Airport" },
  { label: "Languages Spoken", value: "Dzongkha, English" },
] as const;

export const paroGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Paro is home to Bhutan's only international airport, with direct flights from Kathmandu, Delhi, Kolkata, Bangkok and Singapore on Bhutan's national carriers.",
  },
  {
    title: "One of the World's Most Technical Landings",
    description:
      "Surrounded by mountains up to 5,500 metres high, Paro's approach is flown only by a small number of specially certified pilots — arriving is part of the experience.",
  },
  {
    title: "Sustainable Development Fee & Licensed Guide",
    description:
      "Most foreign visitors pay a daily Sustainable Development Fee and travel with a licensed local guide arranged through a registered tour operator — we handle both as part of your booking.",
  },
] as const;

export const paroHighlights: Highlight[] = [
  {
    title: "Home to Bhutan's Signature Sight",
    description:
      "Paro Taktsang, the Tiger's Nest, is the single most recognisable image of Bhutan anywhere in the world, and the hike up to it is a highlight for most visitors.",
  },
  {
    title: "Bhutan's Only Air Gateway",
    description:
      "Every international flight into Bhutan lands in Paro, making it the natural first and last stop on almost every itinerary.",
  },
  {
    title: "A Valley That Feels Untouched",
    description:
      "Terraced rice fields and traditional farmhouses fill the valley floor right up to the airport fence, giving Paro a rural character rare for a country's main air gateway.",
  },
  {
    title: "A Living National Sport, Not a Show",
    description:
      "Archery matches happen most weekends on grounds across the valley, complete with traditional dress and singing between rounds — a genuine local pastime that visitors are welcome to watch.",
  },
  {
    title: "A Manageable Hike, Not a Trek",
    description:
      "The climb to Tiger's Nest is steep but well-maintained and achievable in a day for most reasonably fit travellers, without requiring trekking gear or experience.",
  },
] as const;

export const paroRelatedDestinations: CityCard[] = [
  {
    name: "Thimphu",
    tagline: "Bhutan's Capital",
    description: "A short scenic drive away, and the usual next stop after Paro.",
    href: "/destinations/thimphu",
    image: "/images/destinations/thimphu-tashichho-dzong.webp",
    imageAlt: "Tashichho Dzong's whitewashed walls and golden roofs against the hillside",
  },
  {
    name: "Punakha",
    tagline: "Bhutan's Former Capital",
    description: "Bhutan's most photographed dzong, reached via the scenic Dochula Pass.",
    href: "/destinations/punakha",
    image: "/images/destinations/punakha-dzong-river.webp",
    imageAlt: "Punakha Dzong at the confluence of the Pho Chhu and Mo Chhu rivers",
  },
  {
    name: "Gangtey",
    tagline: "Valley of the Black-Necked Cranes",
    description: "A quieter glacial valley to round out a longer Bhutan circuit.",
    href: "/destinations/gangtey",
    image: "/images/destinations/gangtey-black-necked-cranes.webp",
    imageAlt: "A group of black-necked cranes wading in the Phobjikha Valley wetlands",
  },
] as const;

export const paroFaqs: FaqItem[] = [
  {
    question: "How long does the Tiger's Nest hike take?",
    answer:
      "Around 4 to 5 hours round trip, including time at the monastery — it's a steep but well-maintained trail, achievable by most reasonably fit travellers without technical experience.",
  },
  {
    question: "Do we need a guide to visit Bhutan?",
    answer:
      "Yes — most foreign visitors travel with a licensed local guide and pay a daily Sustainable Development Fee, both arranged through a registered tour operator like us as part of your booking.",
  },
  {
    question: "Is Paro our first or last stop in Bhutan?",
    answer:
      "Usually both — since every international flight lands and departs from Paro, most itineraries start there, head inland to Thimphu, Punakha or Gangtey, then return to Paro to fly out.",
  },
  {
    question: "When is the best time to visit?",
    answer:
      "October to December and March to May give the clearest mountain views and the most comfortable hiking conditions for the Tiger's Nest trail.",
  },
] as const;
