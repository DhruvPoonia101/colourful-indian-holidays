import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const gujaratAttractions: CityCard[] = [
  {
    name: "The Rann of Kutch",
    tagline: "A White Salt Desert Under a Full Moon",
    description:
      "A vast white salt desert that hosts the annual Rann Utsav festival, its tent city filling with visitors each winter to see the moonlit landscape.",
    href: "/destinations/gujarat",
    image: "/images/destinations/kutch-mahotsav.webp",
    imageAlt: "The Rann Utsav tent city at the White Rann of Kutch",
  },
  {
    name: "Ahmedabad's Old City",
    tagline: "UNESCO World Heritage City",
    description:
      "India's first UNESCO World Heritage City, its old quarter a dense maze of carved wooden havelis, step-wells and Mahatma Gandhi's Sabarmati Ashram on the riverfront.",
    href: "/destinations/gujarat",
    image: "/images/destinations/gujarat-ahmedabad-stepwell.webp",
    imageAlt: "The ornate gateway of Bai Harir Vav stepwell, Ahmedabad",
  },
  {
    name: "Gir National Park",
    tagline: "The Only Wild Asiatic Lions Left on Earth",
    description:
      "The world's last remaining wild population of Asiatic lions, found nowhere else outside this one forest in Gujarat, alongside leopards and a genuinely varied bird population.",
    href: "/destinations/gujarat",
    image: "/images/destinations/gujarat-gir-lion.webp",
    imageAlt: "A wild Asiatic lion at Gir National Park, Gujarat",
  },
] as const;

export const gujaratQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "November to February" },
  { label: "Ideal Trip Length", value: "5 – 7 Days" },
  { label: "Main Gateway", value: "Ahmedabad (AMD)" },
  { label: "Languages Spoken", value: "English, Gujarati, Hindi" },
] as const;

export const gujaratGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Sardar Vallabhbhai Patel International Airport in Ahmedabad (AMD) has regular flights from Delhi, Mumbai and other major Indian cities.",
  },
  {
    title: "Typical Route",
    description:
      "Most itineraries move from Ahmedabad to the Rann of Kutch, then south to Gir National Park, with Somnath Temple often added along the coastal route back.",
  },
  {
    title: "Rann Utsav Timing",
    description:
      "The Rann Utsav festival runs roughly November through February, timed to the cooler months and clearer moonlit nights over the salt desert — we build trips around this window specifically for travellers who want to see it.",
  },
] as const;

export const gujaratHighlights: Highlight[] = [
  {
    title: "A Landscape Unlike Anywhere Else in India",
    description:
      "The White Rann's flat salt desert, stretching to the horizon and glowing under a full moon, offers a visual experience genuinely unmatched elsewhere in the country.",
  },
  {
    title: "India's First UNESCO World Heritage City",
    description:
      "Ahmedabad earned this status for its remarkably preserved old city, where carved wooden havelis and historic step-wells sit within a still-functioning urban fabric.",
  },
  {
    title: "The Last Wild Asiatic Lions on Earth",
    description:
      "Gir National Park is the only place in the world where Asiatic lions survive in the wild, a genuinely unique wildlife encounter unavailable anywhere else on the planet.",
  },
  {
    title: "Mahatma Gandhi's Home Base",
    description:
      "Sabarmati Ashram, Gandhi's residence for over a decade and the starting point of the 1930 Salt March, offers a direct connection to India's independence movement.",
  },
  {
    title: "A Genuinely Different Cultural Circuit",
    description:
      "Gujarat's blend of desert landscape, wildlife and modern history gives international travellers a side of India rarely covered by standard itineraries.",
  },
] as const;

export const gujaratRelatedDestinations: CityCard[] = [
  {
    name: "Gujarat Beaches",
    tagline: "Gujarat's Coastline",
    description: "The state's coastal side, pairing naturally with an inland Gujarat circuit.",
    href: "/destinations/gujarat-beaches",
    image: "/images/destinations/gujarat-beaches.webp",
    imageAlt: "Gujarat coastline",
  },
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "A natural extension north into Rajasthan's forts and desert cities.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "Mumbai",
    tagline: "India's City of Dreams",
    description: "A common gateway or connection point for a wider West India itinerary.",
    href: "/destinations/mumbai",
    image: "/images/destinations/Mumbai.webp",
    imageAlt: "Chhatrapati Shivaji Maharaj Terminus, Mumbai",
  },
] as const;

export const gujaratFaqs: FaqItem[] = [
  {
    question: "When is the best time to see the Rann of Kutch?",
    answer:
      "November through February, during the Rann Utsav festival, when the tent city is open, temperatures are comfortable, and the salt desert is at its most striking under clear moonlit skies.",
  },
  {
    question: "How many days should we plan for Gujarat?",
    answer:
      "5 to 7 days lets you properly cover Ahmedabad, the Rann of Kutch, and Gir National Park without rushing between them — the distances involved are genuinely significant.",
  },
  {
    question: "Are Gir's lion sightings reliable?",
    answer:
      "Gir has a good sighting record given the park's relatively concentrated lion population, though as with any wildlife safari, no sighting is ever fully guaranteed.",
  },
  {
    question: "Can Gujarat be combined with Rajasthan in one trip?",
    answer:
      "Yes — both share a road border, making it possible to combine Gujarat's desert and wildlife circuit with a wider Rajasthan itinerary for travellers with two weeks or more.",
  },
] as const;
