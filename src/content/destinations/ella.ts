import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

// Sri Lanka destination content, written 23 Nov 2026. Seasons follow
// Intrepid Travel's Sri Lanka best-time guide; UNESCO years from the
// World Heritage List; Yala closure dates from Newswire.lk (Sep 2026).

export const ellaAttractions: CityCard[] = [
  {
    name: "Nine Arch Bridge",
    tagline: "Sri Lanka's Most Photographed Viaduct",
    description:
      "A curved stone railway bridge set in jungle and tea. Your guide times the visit for a train crossing.",
    href: "/destinations/ella",
    image: "/images/destinations/ella-nine-arch-bridge-train.webp",
    imageAlt: "A train crossing the Nine Arch Bridge, Ella",
  },
  {
    name: "Little Adam's Peak",
    tagline: "An Easy Summit",
    description:
      "A gentle walk through a tea estate to a ridge-top viewpoint, usually 45 minutes to an hour each way.",
    href: "/destinations/ella",
    image: "/images/destinations/ella-little-adams-peak.webp",
    imageAlt: "The view from Little Adam's Peak, Ella",
  },
  {
    name: "Ravana Falls",
    tagline: "A Roadside Waterfall",
    description:
      "A tall, layered waterfall just outside Ella, linked in local legend to the Ramayana.",
    href: "/destinations/ella",
    image: "/images/destinations/ella-ravana-falls.webp",
    imageAlt: "Ravana Falls near Ella",
  },
  {
    name: "The Hill-Country Train",
    tagline: "One of the World's Great Rail Journeys",
    description:
      "The line from Nanu Oya, near Nuwara Eliya, to Ella winds past tea estates, waterfalls and mountain tunnels; it is the section still running while the Kandy end is repaired.",
    href: "/destinations/ella",
    image: "/images/destinations/kandy-ella-train-tea-hills.webp",
    imageAlt: "The hill-country train crossing a viaduct through tea country near Ella",
  },
] as const;

export const ellaQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "January – April" },
  { label: "Ideal Trip Length", value: "1 – 2 Days" },
  { label: "Signature Sight", value: "Nine Arch Bridge" },
  { label: "Languages Spoken", value: "Sinhala, Tamil, English" },
] as const;

export const ellaGettingThere: GettingThereItem[] = [
  {
    title: "By Train",
    description:
      "Trains currently run from Nanu Oya, near Nuwara Eliya, to Ella and Badulla, taking about 3 hours to Ella. The Kandy to Nanu Oya section is closed for cyclone repairs, with reopening reported for 2027.",
  },
  {
    title: "By Road",
    description:
      "About 2.5 hours from Nuwara Eliya, around 2.5 to 3 hours from Yala, and roughly 4 to 5 hours to the south coast at Galle or Mirissa.",
  },
  {
    title: "Your Driver Meets You",
    description:
      "When you take the train, your driver goes ahead by road with your luggage and meets you at the station.",
  },
] as const;

export const ellaHighlights: Highlight[] = [
  {
    title: "The Scenic Train Ride",
    description:
      "Ella is the end point of the island's most celebrated railway journey.",
  },
  {
    title: "Easy Hikes, Big Views",
    description:
      "Little Adam's Peak and the Nine Arch Bridge are short walks that suit most fitness levels.",
  },
  {
    title: "A Relaxed Village Pace",
    description:
      "Cafés, homestays and small hotels make Ella the place to slow down mid-trip.",
  },
  {
    title: "The Link to Yala and the Coast",
    description:
      "Ella sits between the hill country and the south, so it breaks up the drive to Yala and Galle.",
  },
  {
    title: "Tea, Waterfalls and Viewpoints",
    description:
      "Tea estates, Ravana Falls and Ella Rock are all within a short drive or walk.",
  },
] as const;

export const ellaRelatedDestinations: CityCard[] = [
  {
    name: "Nuwara Eliya",
    tagline: "Tea Estates & Cool Hills",
    description:
      "Rolling tea estates, a cool climate and the trails of Horton Plains.",
    href: "/destinations/nuwara-eliya",
    image: "/images/destinations/nuwara-eliya-tea-plantation.webp",
    imageAlt: "Tea estates covering the hills near Nuwara Eliya",
  },
  {
    name: "Yala National Park",
    tagline: "Leopard Safaris",
    description:
      "Jeep safaris for leopards, elephants and sloth bears on the south-east coast.",
    href: "/destinations/yala",
    image: "/images/destinations/yala-leopard.webp",
    imageAlt: "A Sri Lankan leopard drinking at a waterhole",
  },
  {
    name: "Galle",
    tagline: "Dutch Fort & South Coast",
    description:
      "A UNESCO-listed fort town and the gateway to the south-coast beaches.",
    href: "/destinations/galle",
    image: "/images/destinations/galle-fort-lighthouse.webp",
    imageAlt: "The lighthouse on the ramparts of Galle Fort",
  },
] as const;

export const ellaWhereToStay: GettingThereItem[] = [
  {
    title: "Ella village",
    description:
      "Walkable to cafés and the Little Adam's Peak trailhead, with views over the Ella Gap.",
  },
  {
    title: "Outside the village",
    description:
      "Hillside hotels a short drive away, quieter and often with the best views.",
  },
] as const;

export const ellaFaqs: FaqItem[] = [
  {
    question: "Is the train to Ella worth it?",
    answer:
      "Yes. It is one of the most scenic train rides in Asia. Right now trains run only from Nanu Oya to Ella, because the Kandy end of the line is closed for cyclone repairs, but that stretch is the most beautiful part anyway, about 3 hours through tea estates.",
  },
  {
    question: "How hard is Little Adam's Peak?",
    answer:
      "Easy. It is a gentle walk of about 45 minutes to an hour each way, suitable for most fitness levels.",
  },
  {
    question: "When does the train cross the Nine Arch Bridge?",
    answer:
      "Several trains cross each day, but times change and delays are common. Your guide checks the timetable on the day and plans the visit around a crossing.",
  },
  {
    question: "How many days should I spend in Ella?",
    answer:
      "One night is enough for the main sights; two nights allows the Ella Rock hike and a slower pace.",
  },
  {
    question: "What is there to do in Ella?",
    answer:
      "Walk up Little Adam's Peak, watch a train cross the Nine Arch Bridge, visit Ravana Falls, hike Ella Rock, and take a cooking class or tea-estate tour.",
  },
  {
    question: "Is the Nine Arch Bridge walk difficult?",
    answer:
      "No. It is a short walk of about 20 to 30 minutes from the village or the road, partly along the railway line, so watch for trains and follow your guide.",
  },
] as const;
