import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const lehLadakhAttractions: CityCard[] = [
  {
    name: "Pangong Lake",
    tagline: "The Iconic Turquoise Lake",
    description:
      "A vast, high-altitude lake stretching from Ladakh into Tibet, famous for water that shifts through shades of blue and turquoise through the day.",
    href: "/destinations/leh-ladakh",
    image: "/images/destinations/Leh-4.webp",
    imageAlt: "Motorbikes parked beside Pangong Lake, Ladakh",
  },
  {
    name: "Nubra Valley",
    tagline: "Cold Desert & Sand Dunes",
    description:
      "A high-altitude desert valley beyond Khardung La, with sand dunes, double-humped Bactrian camels, and monasteries perched above the Shyok river.",
    href: "/destinations/leh-ladakh",
    image: "/images/destinations/Leh-5.webp",
    imageAlt: "Ladakh valley and mountain range near Nubra",
  },
  {
    name: "Sangam — Indus & Zanskar Confluence",
    tagline: "Where Two Rivers Meet",
    description:
      "The dramatic point where the pale Zanskar river meets the Indus, a short drive from Leh and one of the region's most photographed viewpoints.",
    href: "/destinations/leh-ladakh",
    image: "/images/destinations/Leh-3.webp",
    imageAlt: "Confluence of the Indus and Zanskar rivers near Leh",
  },
  {
    name: "Leh Market & Old Town",
    tagline: "Ladakhi & Tibetan Culture",
    description:
      "Leh's main bazaar, strung with prayer flags and backed by the ruins of Leh Palace, is the natural base for exploring the wider region.",
    href: "/destinations/leh-ladakh",
    image: "/images/destinations/Leh-2.webp",
    imageAlt: "Leh's main market street with prayer flags overhead",
  },
] as const;

export const lehLadakhQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "June to September" },
  { label: "Ideal Trip Length", value: "6 – 9 Days" },
  { label: "Main Gateway", value: "Leh (IXL)" },
  { label: "Elevation", value: "~3,500m (Leh town)" },
] as const;

export const lehLadakhGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Leh Kushok Bakula Rimpochee Airport (IXL) is the fastest way in, with regular flights from Delhi. Most international itineraries fly in and acclimatise for a day or two before heading out to higher altitudes.",
  },
  {
    title: "By Road",
    description:
      "The Manali–Leh and Srinagar–Leh highways are among the most scenic road journeys in India, crossing some of the world's highest motorable passes — but both are only open roughly late May/June through September, and require 2 full days of driving each way.",
  },
  {
    title: "Permits",
    description:
      "Several areas — including Pangong Lake, Nubra Valley and Tso Moriri — sit close to sensitive border regions and require an Inner Line Permit for Indian nationals or a Protected Area Permit for foreign nationals. We handle the permit paperwork as part of planning your itinerary.",
  },
] as const;

export const lehLadakhHighlights: Highlight[] = [
  {
    title: "A Landscape Unlike Anywhere Else in India",
    description:
      "High-altitude desert, turquoise lakes and snow-capped passes — Ladakh looks and feels closer to the Tibetan plateau than the rest of India.",
  },
  {
    title: "Ladakhi Buddhist Culture",
    description:
      "Centuries-old monasteries (gompas) at Thiksey, Hemis and Diskit remain active centres of Tibetan Buddhist practice, not museum pieces.",
  },
  {
    title: "Some of the World's Highest Motorable Passes",
    description:
      "Khardung La and other high passes draw travellers specifically for the experience of driving through them — a genuine bucket-list route for many visitors.",
  },
  {
    title: "Genuinely Dark, Clear Night Skies",
    description:
      "Minimal light pollution and high altitude make Ladakh one of the best places in India for stargazing, particularly around Nubra and Pangong.",
  },
  {
    title: "A Slower, More Remote Pace",
    description:
      "Far fewer visitors than Rajasthan or the Golden Triangle, and a noticeably different rhythm — this is a region that rewards a slower, less packed itinerary.",
  },
] as const;

export const lehLadakhRelatedDestinations: CityCard[] = [
  {
    name: "Srinagar & Kashmir",
    tagline: "The Valley of Kashmir",
    description: "Often combined with Ladakh via the Srinagar–Leh highway for a wider Himalayan circuit.",
    href: "/destinations/srinagar-kashmir",
    image: "/images/destinations/Srinagar.webp",
    imageAlt: "Srinagar, Kashmir",
  },
  {
    name: "Rishikesh & Haridwar",
    tagline: "Where the Ganges Begins",
    description: "A different side of the Himalayan foothills, further south and easily reached from Delhi.",
    href: "/destinations/rishikesh-haridwar",
    image: "/images/destinations/rishikesh.webp",
    imageAlt: "Rishikesh on the banks of the Ganges",
  },
  {
    name: "Delhi",
    tagline: "India's Capital",
    description: "The most common gateway before or after a Ladakh trip.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
] as const;

export const lehLadakhFaqs: FaqItem[] = [
  {
    question: "Is altitude sickness a real concern in Ladakh?",
    answer:
      "Yes — Leh sits at roughly 3,500 metres, and altitude sickness is a genuine risk for visitors arriving by air from sea level. We build at least one full rest day into every itinerary before any strenuous activity or travel to higher points like Khardung La or Pangong Lake, and recommend travellers speak with their doctor before the trip if they have any relevant health concerns.",
  },
  {
    question: "When can we actually visit — is it open year-round?",
    answer:
      "The main travel season is June through September, when both road routes are open and daytime temperatures are manageable. Winter travel is possible by air but involves extreme cold and many sites become inaccessible.",
  },
  {
    question: "Do we need a special permit to visit Pangong Lake or Nubra Valley?",
    answer:
      "Yes, both sit in protected border areas requiring an Inner Line Permit (Indian nationals) or Protected Area Permit (foreign nationals). We arrange this paperwork as part of your itinerary — no separate application needed on your end.",
  },
  {
    question: "How many days should we plan for Ladakh?",
    answer:
      "6 to 9 days lets you properly cover Leh, Nubra Valley and Pangong Lake without rushing acclimatisation or long travel days between them. Shorter trips are possible but leave little room for the rest day altitude requires.",
  },
] as const;
