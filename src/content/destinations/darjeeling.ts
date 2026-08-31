import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

const PLACEHOLDER = "/images/destinations/urs-festival-ajmer.webp";

export const darjeelingAttractions: CityCard[] = [
  {
    name: "Darjeeling Hillside & Tea Gardens",
    tagline: "Terraced Hills Wrapped in Cloud",
    description:
      "Darjeeling's colourful hillside town, ringed by the tea estates that gave the region its name and reputation as one of the world's finest tea-growing areas.",
    href: "/destinations/darjeeling",
    image: "/images/destinations/Darjeeling.webp",
    imageAlt: "Darjeeling hillside town wrapped in cloud",
  },
  {
    name: "Tiger Hill Sunrise",
    tagline: "Kanchenjunga at Dawn",
    description:
      "A pre-dawn drive up Tiger Hill for sunrise over Kanchenjunga, the world's third-highest peak — on a clear day, even Everest is visible in the distance.",
    href: "/destinations/darjeeling",
    image: PLACEHOLDER,
    imageAlt: "Photo coming soon — Tiger Hill sunrise, Darjeeling",
  },
  {
    name: "Darjeeling Himalayan Railway",
    tagline: "The Original 'Toy Train'",
    description:
      "A UNESCO World Heritage narrow-gauge railway completed in 1881, still climbing the same steep mountain route on vintage steam and diesel locomotives.",
    href: "/destinations/darjeeling",
    image: PLACEHOLDER,
    imageAlt: "Photo coming soon — Darjeeling Himalayan Railway",
  },
] as const;

export const darjeelingQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "March to May, Oct to Dec" },
  { label: "Ideal Trip Length", value: "3 – 4 Days" },
  { label: "Main Gateway", value: "Bagdogra (IXB)" },
  { label: "Elevation", value: "~2,050m" },
] as const;

export const darjeelingGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Bagdogra Airport (IXB), near Siliguri, is the nearest airport, with regular flights from Delhi and Kolkata. From there it's roughly a 3-hour drive up into the hills to Darjeeling.",
  },
  {
    title: "By Rail",
    description:
      "New Jalpaiguri (NJP) is the nearest major railway station, also close to Siliguri, with onward road transfer to Darjeeling — the same route the historic toy train partially covers.",
  },
  {
    title: "Typical Pairing",
    description:
      "Darjeeling is most often combined with Sikkim or Kaziranga National Park as part of a wider Northeast India itinerary, given the shared regional gateway through Bagdogra.",
  },
] as const;

export const darjeelingHighlights: Highlight[] = [
  {
    title: "World-Renowned Tea",
    description:
      "Darjeeling tea carries a Geographical Indication status, similar to Champagne — genuine Darjeeling tea can legally only come from this specific region.",
  },
  {
    title: "A UNESCO Heritage Railway",
    description:
      "The Darjeeling Himalayan Railway, still in operation since 1881, is one of only a handful of railways worldwide recognised as a UNESCO World Heritage Site.",
  },
  {
    title: "Views of the World's Third-Highest Peak",
    description:
      "Kanchenjunga dominates the skyline on clear days, and the sunrise view from Tiger Hill is one of the most-photographed vistas in the Indian Himalayas.",
  },
  {
    title: "A Distinct Himalayan Hill Culture",
    description:
      "Darjeeling's Nepali, Bhutia and Lepcha heritage gives it a noticeably different culture, cuisine and architecture from the rest of West Bengal.",
  },
  {
    title: "A Cool-Climate Escape",
    description:
      "At over 2,000 metres, Darjeeling offers genuinely cool weather year-round — a welcome contrast for travellers coming from the heat of Rajasthan or the plains.",
  },
] as const;

export const darjeelingRelatedDestinations: CityCard[] = [
  {
    name: "Kaziranga",
    tagline: "Rhinos in the Grasslands",
    description: "A natural pairing for a wider Northeast India and Himalayan foothills itinerary.",
    href: "/destinations/kaziranga",
    image: "/images/destinations/kaziranga-rhino.webp",
    imageAlt: "One-horned rhinoceros, Kaziranga National Park",
  },
  {
    name: "Varanasi",
    tagline: "The Ganges' Most Sacred City",
    description: "A common stop when connecting Northeast India back through to the rest of North India.",
    href: "/destinations/varanasi",
    image: "/images/destinations/varanasi.webp",
    imageAlt: "Ganga aarti ceremony at the ghats of Varanasi",
  },
  {
    name: "Rishikesh & Haridwar",
    tagline: "Where the Ganges Begins",
    description: "Another Himalayan-foothill destination, further west, for travellers building a longer mountain circuit.",
    href: "/destinations/rishikesh-haridwar",
    image: "/images/destinations/rishikesh.webp",
    imageAlt: "River rafting on the Ganges, Rishikesh",
  },
] as const;

export const darjeelingFaqs: FaqItem[] = [
  {
    question: "Is Kanchenjunga always visible from Darjeeling?",
    answer:
      "No — cloud cover frequently obscures the peak, particularly outside the clearer autumn and spring months. Early morning is generally the best chance for a clear view, and we always temper expectations honestly rather than guaranteeing it.",
  },
  {
    question: "Do we need to book the toy train in advance?",
    answer:
      "Yes, particularly the popular joyride sections — seats are limited and demand is high in peak season. We arrange this as part of your itinerary rather than leaving it to chance on arrival.",
  },
  {
    question: "How many days should we plan for Darjeeling?",
    answer:
      "3 to 4 days is usually enough to cover Tiger Hill, the toy train, tea garden visits and a proper look around town without feeling rushed.",
  },
  {
    question: "Can this be combined with Sikkim or Kaziranga?",
    answer:
      "Yes — both are common pairings given the shared Bagdogra gateway, and we regularly build Darjeeling into wider Northeast India itineraries alongside either.",
  },
] as const;
