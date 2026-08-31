import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const chennaiAttractions: CityCard[] = [
  {
    name: "Mahabalipuram Shore Temple",
    tagline: "UNESCO World Heritage Site",
    description:
      "A 7th-century granite temple complex on the Bay of Bengal, a short drive from Chennai, carved directly from solid rock by Pallava dynasty sculptors.",
    href: "/destinations/chennai",
    image: "/images/destinations/chennai.webp",
    imageAlt: "Shore Temple, Mahabalipuram, near Chennai",
  },
  {
    name: "Marina Beach",
    tagline: "One of the World's Longest Urban Beaches",
    description:
      "A wide stretch of sand running along Chennai's coastline, popular at sunrise and sunset for a stroll, street food, and watching the city unwind.",
    href: "/destinations/chennai",
    image: "/images/destinations/marina-beach-chennai.webp",
    imageAlt: "Marina Beach at sunrise, Chennai",
  },
] as const;

export const chennaiQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "November to February" },
  { label: "Ideal Trip Length", value: "2 – 3 Days" },
  { label: "Main Gateway", value: "Chennai (MAA)" },
  { label: "Languages Spoken", value: "English, Tamil" },
] as const;

export const chennaiGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Chennai International Airport (MAA) is one of South India's main gateways, with regular flights from Delhi, Mumbai and direct connections from several international hubs.",
  },
  {
    title: "Day Trip to Mahabalipuram",
    description:
      "Mahabalipuram sits roughly an hour and a half south of Chennai by road, making it an easy half-day or full-day trip with a private driver.",
  },
  {
    title: "Typical Pairing",
    description:
      "Chennai is most often used as a gateway to a wider Tamil Nadu itinerary, connecting onward to Madurai and Tamil Nadu's beaches.",
  },
] as const;

export const chennaiHighlights: Highlight[] = [
  {
    title: "Gateway to Tamil Nadu",
    description:
      "As South India's largest coastal city and a major international airport hub, Chennai is a practical and common starting point for a Tamil Nadu itinerary.",
  },
  {
    title: "UNESCO Heritage Nearby",
    description:
      "Mahabalipuram's rock-cut temples and shore monuments, a UNESCO World Heritage Site, sit within easy day-trip distance of the city.",
  },
  {
    title: "A Distinct South Indian Character",
    description:
      "Tamil language, classical Carnatic music and Bharatanatyam dance give Chennai a cultural identity noticeably different from North India's more commonly visited circuit.",
  },
  {
    title: "One of the World's Longest Urban Beaches",
    description:
      "Marina Beach stretches for several kilometres along the city's coastline, a genuinely different kind of city landmark from anything further north.",
  },
  {
    title: "A Strong Food City",
    description:
      "Chennai's South Indian cuisine — dosas, idlis, and filter coffee — is considered among the most authentic anywhere, served in traditional Udupi-style restaurants across the city.",
  },
] as const;

export const chennaiRelatedDestinations: CityCard[] = [
  {
    name: "Madurai",
    tagline: "Tamil Nadu's Temple City",
    description: "A natural next stop for travellers continuing deeper into Tamil Nadu's temple heritage.",
    href: "/destinations/madurai",
    image: "/images/destinations/madurai.webp",
    imageAlt: "Meenakshi Amman Temple gopuram, Madurai",
  },
  {
    name: "Tamil Nadu Beaches",
    tagline: "South India's Coastline",
    description: "More of Tamil Nadu's coastline, further south from Chennai and Mahabalipuram.",
    href: "/destinations/tamil-nadu-beaches",
    image: "/images/destinations/tamil-nadu-beaches.webp",
    imageAlt: "Tamil Nadu coastline",
  },
  {
    name: "Kerala",
    tagline: "Backwaters & Beaches",
    description: "A neighbouring state offering a genuinely different landscape and pace.",
    href: "/destinations/kerala",
    image: "/images/destinations/alleppey-backwaters.webp",
    imageAlt: "Houseboat on the Alleppey backwaters, Kerala",
  },
] as const;

export const chennaiFaqs: FaqItem[] = [
  {
    question: "How many days should we plan for Chennai?",
    answer:
      "2 to 3 days is usually enough to see the city itself and take a day trip to Mahabalipuram, without needing longer unless you're using it purely as a gateway.",
  },
  {
    question: "Is Mahabalipuram worth a full day or just a few hours?",
    answer:
      "A full day lets you properly see the Shore Temple, the Five Rathas, and Arjuna's Penance rock relief without rushing — though a focused half-day is possible if your schedule is tight.",
  },
  {
    question: "Is Chennai a good starting point for a South India trip?",
    answer:
      "Yes — its strong international flight connections and coastal location make it a practical gateway for a wider Tamil Nadu and South India itinerary.",
  },
  {
    question: "What's the best time of year to visit?",
    answer:
      "November through February offers the most comfortable weather. Chennai can be very hot and humid in the summer months, and the northeast monsoon (October–December) brings periodic heavy rain.",
  },
] as const;
