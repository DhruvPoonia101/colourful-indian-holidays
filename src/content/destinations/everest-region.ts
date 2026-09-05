import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

const PLACEHOLDER = "/images/destinations/urs-festival-ajmer.webp";

export const everestRegionAttractions: CityCard[] = [
  {
    name: "Everest Mountain Flight",
    tagline: "No Trekking Required",
    description:
      "A roughly one-hour scenic flight from Kathmandu that passes within view of Everest and its neighbouring peaks — the way most of our clients experience this region.",
    href: "/destinations/everest-region",
    image: PLACEHOLDER,
    imageAlt: "Photo coming soon — Everest mountain flight",
  },
  {
    name: "Everest Base Camp Trek",
    tagline: "The Classic 12–14 Day Route",
    description:
      "The best-known trek in the world, climbing steadily through Sherpa villages to the foot of Everest itself — for travellers with the time and fitness for a serious trek.",
    href: "/destinations/everest-region",
    image: PLACEHOLDER,
    imageAlt: "Photo coming soon — Everest Base Camp trekking trail",
  },
  {
    name: "Namche Bazaar",
    tagline: "The Sherpa Capital",
    description:
      "A terraced market town built into a natural amphitheatre in the hills, and the trek's main acclimatisation stop and cultural hub.",
    href: "/destinations/everest-region",
    image: PLACEHOLDER,
    imageAlt: "Photo coming soon — Namche Bazaar",
  },
  {
    name: "Tengboche Monastery",
    tagline: "The Khumbu's Most Famous Monastery",
    description:
      "The largest monastery in the Khumbu region, set on a ridge with one of the trek's most photographed backdrops of Everest and Ama Dablam.",
    href: "/destinations/everest-region",
    image: PLACEHOLDER,
    imageAlt: "Photo coming soon — Tengboche Monastery",
  },
  {
    name: "Kala Patthar",
    tagline: "The Best Everest Viewpoint",
    description:
      "A rocky outcrop above Everest Base Camp offering a far better view of Everest's summit than the base camp itself, and the turnaround point for most trekkers.",
    href: "/destinations/everest-region",
    image: PLACEHOLDER,
    imageAlt: "Photo coming soon — Kala Patthar viewpoint",
  },
] as const;

export const everestRegionQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October–November & March–May" },
  { label: "Ideal Trip Length", value: "1 Day (Flight) or 12–14 Days (Trek)" },
  { label: "Main Gateway", value: "Lukla (for trekking) or direct flight from Kathmandu" },
  { label: "Languages Spoken", value: "Nepali, Sherpa, English" },
] as const;

export const everestRegionGettingThere: GettingThereItem[] = [
  {
    title: "Mountain Flight (No Trek)",
    description:
      "A direct scenic flight departs from Kathmandu, loops within view of Everest and the surrounding peaks, and returns the same morning — no permits, gear or fitness required.",
  },
  {
    title: "Flight to Lukla (For Trekkers)",
    description:
      "Trekkers fly from Kathmandu to Lukla's Tenzing–Hillary Airport, a short but dramatic mountain flight, before starting the trek on foot the same day.",
  },
  {
    title: "No Road Access",
    description:
      "The Everest region has no road network — flying to Lukla or joining a scenic flight are the only practical ways in, since the trek itself takes over a week to reach on foot from the nearest road.",
  },
] as const;

export const everestRegionHighlights: Highlight[] = [
  {
    title: "The Highest Point on Earth",
    description:
      "Whether from a mountain flight window or the trail itself, few travel experiences carry the same weight as seeing Everest's summit with your own eyes.",
  },
  {
    title: "Two Ways to Experience It",
    description:
      "A short scenic flight suits travellers on a tighter schedule, while the full Everest Base Camp trek suits those with the time and fitness for a serious multi-day trek — most of our clients choose the former.",
  },
  {
    title: "Living Sherpa Culture",
    description:
      "The Khumbu region is home to the Sherpa people, whose mountaineering history, monasteries and villages give the trek as much cultural depth as scenery.",
  },
  {
    title: "A UNESCO-Protected Landscape",
    description:
      "Sagarmatha National Park, which contains Everest and the surrounding peaks, is a UNESCO World Heritage Site protecting one of the world's most extreme high-altitude ecosystems.",
  },
  {
    title: "A Genuine Bucket-List Destination",
    description:
      "Few places carry the same universal recognition — a flight past Everest or a trek to its base is the kind of experience that anchors an entire trip.",
  },
] as const;

export const everestRegionRelatedDestinations: CityCard[] = [
  {
    name: "Kathmandu",
    tagline: "Nepal's Capital",
    description: "The departure point for both the Everest mountain flight and the flight to Lukla.",
    href: "/destinations/kathmandu",
    image: "/images/destinations/kathmandu-durbar-square.webp",
    imageAlt: "Kathmandu Durbar Square, with its pagoda-roofed temples and daily street life",
  },
  {
    name: "Pokhara",
    tagline: "Lakeside Himalayan Views",
    description: "An easier, closer Himalayan panorama for travellers not planning a trek.",
    href: "/destinations/pokhara",
    image: "/images/destinations/pokhara-phewa-lake-annapurna-reflection.webp",
    imageAlt: "Phewa Lake with the Annapurna range reflected in the still water",
  },
  {
    name: "Nagarkot",
    tagline: "Himalayan Sunrise Views",
    description: "The simplest way to see the Himalayas on the same trip, with no flight or trek required.",
    href: "/destinations/nagarkot",
    image: "/images/destinations/nagarkot-view-tower-sunrise.webp",
    imageAlt: "Visitors gathered at the Nagarkot View Tower for sunrise",
  },
] as const;

export const everestRegionFaqs: FaqItem[] = [
  {
    question: "Do we have to trek to see Everest?",
    answer:
      "No — the Everest mountain flight from Kathmandu takes about an hour, flies within view of the summit, and requires no trekking, permits or special fitness. It's what most of our clients choose.",
  },
  {
    question: "How long does the Everest Base Camp trek take?",
    answer:
      "The classic route takes 12 to 14 days round trip from Lukla, including acclimatisation days — it's a serious undertaking that suits travellers with the time and fitness for a multi-day trek.",
  },
  {
    question: "Is the flight to Lukla safe?",
    answer:
      "Lukla's short mountain runway makes it one of the more dramatic airports in the world, and flights are sometimes delayed by weather — we build buffer days into any Everest region itinerary to account for this.",
  },
  {
    question: "When is the best time to visit?",
    answer:
      "October to November and March to May give the clearest mountain views and the most stable flying conditions, for both the scenic flight and the trek.",
  },
] as const;
