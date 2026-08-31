import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

const PLACEHOLDER = "/images/destinations/urs-festival-ajmer.webp";

export const maduraiAttractions: CityCard[] = [
  {
    name: "Meenakshi Amman Temple",
    tagline: "Dravidian Architecture at Its Peak",
    description:
      "A vast temple complex dedicated to Meenakshi (a form of Parvati) and Sundareswarar (Shiva), its towering, sculpture-covered gopurams among the finest examples of Dravidian temple architecture in India.",
    href: "/destinations/madurai",
    image: "/images/destinations/madurai.webp",
    imageAlt: "Meenakshi Amman Temple gopuram, Madurai",
  },
  {
    name: "Thirumalai Nayakkar Palace",
    tagline: "17th-Century Royal Architecture",
    description:
      "A grand palace built in 1636 by King Thirumalai Nayak, blending Dravidian and Islamic architectural styles across its surviving courtyards and halls.",
    href: "/destinations/madurai",
    image: PLACEHOLDER,
    imageAlt: "Photo coming soon — Thirumalai Nayakkar Palace, Madurai",
  },
  {
    name: "Vaigai River & Old City",
    tagline: "One of India's Oldest Cities",
    description:
      "Madurai's old city streets radiate outward from the temple in a traditional mandala layout, among the oldest continuously inhabited urban plans in India.",
    href: "/destinations/madurai",
    image: PLACEHOLDER,
    imageAlt: "Photo coming soon — Madurai old city streets",
  },
] as const;

export const maduraiQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October to March" },
  { label: "Ideal Trip Length", value: "1 – 2 Days" },
  { label: "Main Gateway", value: "Madurai (IXM)" },
  { label: "Languages Spoken", value: "English, Tamil" },
] as const;

export const maduraiGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Madurai Airport (IXM) has regular flights from Chennai, Bangalore and other major South Indian cities, making it an easy add-on to a wider Tamil Nadu itinerary.",
  },
  {
    title: "By Rail",
    description:
      "Madurai Junction is well connected by rail to Chennai and other major South Indian cities, and the train journey itself is a comfortable, scenic option for travellers with time to spare.",
  },
  {
    title: "Typical Pairing",
    description:
      "Madurai is most often combined with Tamil Nadu's beaches or Kerala as part of a wider South India temple-and-coast itinerary.",
  },
] as const;

export const maduraiHighlights: Highlight[] = [
  {
    title: "One of India's Oldest Living Cities",
    description:
      "Madurai has been continuously inhabited for over 2,500 years, with historical references dating back to ancient Tamil Sangam literature.",
  },
  {
    title: "Dravidian Temple Architecture at Its Best",
    description:
      "Meenakshi Amman Temple's towering, intricately sculpted gopurams are considered among the finest surviving examples of South Indian temple architecture.",
  },
  {
    title: "A Living Temple, Not a Museum",
    description:
      "The temple remains in active daily worship, with rituals, processions and a genuine devotional atmosphere rather than a preserved historical site.",
  },
  {
    title: "Distinct South Indian Culture",
    description:
      "Tamil language, cuisine and classical arts give Madurai a noticeably different cultural texture from North India's more commonly visited circuit.",
  },
  {
    title: "An Easy, Focused Add-On",
    description:
      "Unlike larger multi-day destinations, Madurai works well as a focused 1 to 2 day stop within a longer South India itinerary.",
  },
] as const;

export const maduraiRelatedDestinations: CityCard[] = [
  {
    name: "Chennai",
    tagline: "Gateway to Tamil Nadu",
    description: "The most common gateway before or after a Madurai trip.",
    href: "/destinations/chennai",
    image: "/images/destinations/chennai.webp",
    imageAlt: "Chennai cityscape",
  },
  {
    name: "Tamil Nadu Beaches",
    tagline: "South India's Coastline",
    description: "A natural pairing for travellers combining temple heritage with coastal time.",
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

export const maduraiFaqs: FaqItem[] = [
  {
    question: "How many days should we plan for Madurai?",
    answer:
      "1 to 2 days is usually enough to properly see Meenakshi Amman Temple, Thirumalai Nayakkar Palace and the old city without feeling rushed.",
  },
  {
    question: "Is there a dress code for visiting the temple?",
    answer:
      "Yes — modest dress is expected, with shoulders and knees covered, and footwear must be removed before entering. We brief every guest on local etiquette before the visit.",
  },
  {
    question: "What's the best time of day to visit Meenakshi Amman Temple?",
    answer:
      "Early morning or early evening, when the temple is less crowded and the lighting on the gopurams is at its best. The temple also has specific opening hours around midday closures worth checking in advance.",
  },
  {
    question: "Can Madurai be combined with Tamil Nadu's beaches?",
    answer:
      "Yes — it's a natural pairing for a wider South India itinerary combining temple heritage with coastal time, connected by a manageable road or rail journey.",
  },
] as const;
