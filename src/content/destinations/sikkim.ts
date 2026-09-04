import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const sikkimAttractions: CityCard[] = [
  {
    name: "Tathagata Tsal (Buddha Park)",
    tagline: "A 130-Foot Seated Buddha",
    description:
      "A vast seated Buddha statue near Ravangla, set within landscaped gardens with sweeping views across the surrounding hills — one of Sikkim's most striking modern monuments.",
    href: "/destinations/sikkim",
    image: "/images/destinations/sikkim-tathagata-tsal.webp",
    imageAlt: "The seated Buddha statue at Tathagata Tsal, Ravangla, Sikkim",
  },
  {
    name: "Tsomgo Lake",
    tagline: "A Glacial Lake at 12,000 Feet",
    description:
      "A high-altitude glacial lake roughly 40km from Gangtok, its still water reflecting the surrounding mountains — often visited alongside Nathu La Pass.",
    href: "/destinations/sikkim",
    image: "/images/destinations/sikkim-tsomgo-lake.webp",
    imageAlt: "Tsomgo Lake surrounded by snow-covered mountains, Sikkim",
  },
  {
    name: "Samdruptse",
    tagline: "A 135-Foot Statue of Guru Padmasambhava",
    description:
      "A hilltop statue near Namchi depicting Guru Padmasambhava, the 8th-century figure credited with bringing Buddhism to Tibet — reached via a long ceremonial staircase lined with prayer wheels.",
    href: "/destinations/sikkim",
    image: "/images/destinations/sikkim-samdruptse.webp",
    imageAlt: "The Samdruptse statue of Guru Padmasambhava, Namchi, Sikkim",
  },
  {
    name: "Gurudongmar Lake",
    tagline: "One of the World's Highest Lakes",
    description:
      "A sacred high-altitude lake in North Sikkim, ringed by prayer flags and snow-capped peaks — a genuinely remote add-on for travellers with extra time and the right permits.",
    href: "/destinations/sikkim",
    image: "/images/destinations/sikkim-gurudongmar-lake.webp",
    imageAlt: "Gurudongmar Lake with prayer flags and snow-capped peaks, North Sikkim",
  },
] as const;

export const sikkimQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "March to June, Oct to Dec" },
  { label: "Ideal Trip Length", value: "4 – 6 Days" },
  { label: "Main Gateway", value: "Bagdogra (IXB)" },
  { label: "Elevation", value: "~1,650m (Gangtok)" },
] as const;

export const sikkimGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Bagdogra Airport (IXB), near Siliguri, is the main gateway, roughly 4–5 hours by road from Gangtok. Sikkim's own Pakyong Airport has limited flights and is weather-dependent.",
  },
  {
    title: "By Road",
    description:
      "A private driver covers the mountain route from Bagdogra to Gangtok comfortably in a day, winding through tea estates and river valleys along the way.",
  },
  {
    title: "Permits",
    description:
      "Indian nationals need an Inner Line Permit for parts of Sikkim near the border, and foreign nationals require a Protected Area Permit for areas like Tsomgo Lake and Nathu La — we handle this paperwork as part of your itinerary.",
  },
] as const;

export const sikkimHighlights: Highlight[] = [
  {
    title: "Genuinely Clean and Well-Organised",
    description:
      "Sikkim was India's first fully organic state and consistently ranks among its cleanest — a noticeably different travel experience from many parts of the country.",
  },
  {
    title: "Himalayan Views Without Ladakh's Altitude Demands",
    description:
      "Gangtok and Pelling offer genuine Kanchenjunga views at a much lower elevation than Ladakh, with far less need for altitude acclimatisation.",
  },
  {
    title: "A Strong Buddhist Monastic Tradition",
    description:
      "Rumtek and several other monasteries remain active centres of Tibetan Buddhist practice, offering a cultural dimension alongside the mountain scenery.",
  },
  {
    title: "A Small State That's Easy to Cover",
    description:
      "Sikkim's compact size means a well-planned 4 to 6 day itinerary can realistically cover its main highlights without the long transit days larger states require.",
  },
  {
    title: "A Natural Extension of Darjeeling",
    description:
      "Sikkim pairs naturally with Darjeeling given their shared gateway through Bagdogra, letting travellers combine both in a single Northeast India trip.",
  },
] as const;

export const sikkimRelatedDestinations: CityCard[] = [
  {
    name: "Darjeeling",
    tagline: "Tea, Cloud & the Himalayas",
    description: "A natural pairing given the shared Bagdogra gateway and similar hill-station character.",
    href: "/destinations/darjeeling",
    image: "/images/destinations/Darjeeling.webp",
    imageAlt: "Darjeeling hillside town wrapped in cloud",
  },
  {
    name: "Kaziranga",
    tagline: "The One-Horned Rhino",
    description: "A wildlife extension further into Northeast India for travellers with more time.",
    href: "/destinations/kaziranga",
    image: "/images/destinations/kaziranga.webp",
    imageAlt: "One-horned rhino and safari jeeps at Kaziranga National Park",
  },
  {
    name: "Kolkata",
    tagline: "Coming Soon",
    description: "West Bengal's colonial-era capital, a common connection point for Northeast India trips.",
    href: "/destinations/kolkata",
    image: "/images/destinations/kolkata-howrah-bridge.webp",
    imageAlt: "Howrah Bridge lit up at night, Kolkata",
  },
] as const;

export const sikkimFaqs: FaqItem[] = [
  {
    question: "Do we need a special permit to visit Sikkim?",
    answer:
      "Yes — most of Sikkim requires an Inner Line Permit, and specific areas like Tsomgo Lake and Nathu La Pass require an additional Protected Area Permit for foreign nationals. We arrange this as part of your itinerary.",
  },
  {
    question: "Is Sikkim easier to visit than Ladakh?",
    answer:
      "In terms of altitude, yes — Gangtok sits at roughly 1,650 metres compared with Leh's 3,500, so acclimatisation is a much smaller concern. Sikkim also has better road infrastructure overall.",
  },
  {
    question: "Can Sikkim be combined with Darjeeling in one trip?",
    answer:
      "Yes — both share the Bagdogra gateway and are commonly combined into a single Northeast India hill-station itinerary, typically 7 to 10 days for both together.",
  },
  {
    question: "What's the best time of year to visit?",
    answer:
      "March through June and October through December offer the clearest mountain views and most comfortable temperatures. The monsoon (July–September) brings heavy rain and occasional landslides that can disrupt mountain roads.",
  },
] as const;
