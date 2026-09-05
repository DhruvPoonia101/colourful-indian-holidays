import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const chitwanAttractions: CityCard[] = [
  {
    name: "Chitwan National Park Safari",
    tagline: "UNESCO World Heritage Site",
    description:
      "Elephant-back and jeep safaris through sal forest and tall grassland, tracking one-horned rhinos, spotted deer and, with some luck, a Bengal tiger.",
    href: "/destinations/chitwan",
    image: "/images/destinations/chitwan-elephant-safari-forest.webp",
    imageAlt: "Elephants and their mahouts on a forest safari trail in Chitwan",
  },
  {
    name: "Canoe Ride on the Rapti River",
    tagline: "Wildlife on the Water",
    description:
      "A quiet dugout canoe float along the Rapti River, a good way to spot gharial and mugger crocodiles basking on the banks and a wide range of waterbirds.",
    href: "/destinations/chitwan",
    image: "/images/destinations/chitwan-canoe-rapti-river.webp",
    imageAlt: "Dugout canoes setting out on the Rapti River in Chitwan National Park",
  },
  {
    name: "Bishazari Tal (20,000 Lakes)",
    tagline: "Ramsar Wetland",
    description:
      "A Ramsar-listed wetland system just outside the park, quieter than the main safari routes and excellent for birdwatchers.",
    href: "/destinations/chitwan",
    image: "/images/destinations/chitwan-bishazari-tal-wetlands.webp",
    imageAlt: "The still, forest-ringed waters of Bishazari Tal wetlands",
  },
] as const;

export const chitwanQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October–March (Dry Season)" },
  { label: "Ideal Trip Length", value: "2 – 3 Days" },
  { label: "Main Gateway", value: "Bharatpur Airport (BHR), 20 min flight from Kathmandu" },
  { label: "Languages Spoken", value: "Nepali, Tharu, English" },
] as const;

export const chitwanGettingThere: GettingThereItem[] = [
  {
    title: "By Air from Kathmandu",
    description:
      "A short 20-minute flight connects Kathmandu to Bharatpur Airport, just outside Chitwan National Park — the fastest way in, especially if time is limited.",
  },
  {
    title: "By Road from Kathmandu or Pokhara",
    description:
      "A 5 to 6 hour scenic drive from Kathmandu, or roughly 4 to 5 hours from Pokhara, along routes that pass through Nepal's lowland Terai region.",
  },
  {
    title: "Typical Pairing",
    description:
      "Chitwan is usually added as a third stop on a Nepal circuit alongside Kathmandu and Pokhara, giving a wildlife safari to complement the temples and mountain views.",
  },
] as const;

export const chitwanHighlights: Highlight[] = [
  {
    title: "A Stronghold for the One-Horned Rhino",
    description:
      "Chitwan National Park is one of the last places on Earth where the greater one-horned rhinoceros can be reliably seen in the wild, alongside a growing Bengal tiger population.",
  },
  {
    title: "Jungle, Not Mountains",
    description:
      "Where Kathmandu and Pokhara are about temples and Himalayan views, Chitwan flips the script entirely — lowland sal forest, rivers and grassland safari country.",
  },
  {
    title: "Genuine Indigenous Culture",
    description:
      "The Tharu community's villages, cuisine and stick-dance performances offer a side of Nepal that has little to do with Kathmandu's Buddhist and Hindu heritage sites.",
  },
  {
    title: "A UNESCO World Heritage Park",
    description:
      "Chitwan was one of the first national parks in South Asia to earn UNESCO recognition, reflecting decades of successful conservation work on its rhino population.",
  },
  {
    title: "An Easy Third Stop",
    description:
      "A short flight or drive from either Kathmandu or Pokhara means Chitwan slots naturally into a Nepal itinerary without adding real logistical complexity.",
  },
] as const;

export const chitwanRelatedDestinations: CityCard[] = [
  {
    name: "Kathmandu",
    tagline: "Nepal's Capital",
    description: "Nepal's main international gateway and the usual starting point for a Chitwan trip.",
    href: "/destinations/kathmandu",
    image: "/images/destinations/kathmandu-durbar-square.webp",
    imageAlt: "Kathmandu Durbar Square, with its pagoda-roofed temples and daily street life",
  },
  {
    name: "Pokhara",
    tagline: "Lakeside Himalayan Views",
    description: "Easily combined with Chitwan on the same overland route through Nepal's lowlands.",
    href: "/destinations/pokhara",
    image: "/images/destinations/pokhara-phewa-lake-annapurna-reflection.webp",
    imageAlt: "Phewa Lake with the Annapurna range reflected in the still water",
  },
  {
    name: "Kaziranga",
    tagline: "Assam's Rhino Sanctuary",
    description: "India's equivalent one-horned rhino stronghold, for comparison or a longer wildlife circuit.",
    href: "/destinations/kaziranga",
    image: "/images/destinations/kaziranga.webp",
    imageAlt: "One-horned rhino and safari jeeps at Kaziranga National Park",
  },
] as const;

export const chitwanFaqs: FaqItem[] = [
  {
    question: "How many days should we plan for Chitwan?",
    answer:
      "2 to 3 days is enough for an elephant or jeep safari, a canoe ride, and time at the Bishazari Tal wetlands, with a reasonable chance of spotting rhinos and a range of birdlife.",
  },
  {
    question: "When is the best time for wildlife viewing?",
    answer:
      "October to March, the dry season, gives the clearest sightings, since the grass is shorter and animals gather more predictably around water sources.",
  },
  {
    question: "Are the safaris on foot, elephant-back, or by vehicle?",
    answer:
      "All three are offered — jeep safaris cover the most ground, elephant-back safaris move quietly through tall grassland, and guided walking safaris and canoe rides give a closer perspective in specific zones.",
  },
  {
    question: "Do we need a separate visa for Nepal?",
    answer:
      "Yes, Nepal requires its own visa, though most nationalities can get a visa on arrival at Tribhuvan International Airport in Kathmandu — we'll confirm the current requirements for your passport when planning your trip.",
  },
] as const;
