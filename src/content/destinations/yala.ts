import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

// Sri Lanka destination content, written 23 Nov 2026. Seasons follow
// Intrepid Travel's Sri Lanka best-time guide; UNESCO years from the
// World Heritage List; Yala closure dates from Newswire.lk (Sep 2026).

export const yalaAttractions: CityCard[] = [
  {
    name: "Leopard Safaris",
    tagline: "The Big Draw",
    description:
      "Yala's Block 1 is famous for leopard sightings, often resting on rocks or crossing tracks at dawn and dusk.",
    href: "/destinations/yala",
    image: "/images/destinations/yala-leopard.webp",
    imageAlt: "A Sri Lankan leopard drinking at a waterhole",
  },
  {
    name: "Wild Elephants",
    tagline: "Herds at the Waterholes",
    description:
      "Elephants are seen on most drives, especially around lakes and waterholes in the dry season.",
    href: "/destinations/yala",
    image: "/images/destinations/yala-elephants.webp",
    imageAlt: "Wild elephants in Yala National Park",
  },
  {
    name: "Jeep Safaris",
    tagline: "Dawn and Dusk Drives",
    description:
      "Open-top jeeps with a park tracker give the best chances. Half-day drives suit most travellers.",
    href: "/destinations/yala",
    image: "/images/destinations/yala-safari-jeep.webp",
    imageAlt: "Safari jeeps lined up for a game drive",
  },
  {
    name: "Lagoons & Birdlife",
    tagline: "Painted Storks to Peacocks",
    description:
      "Coastal lagoons attract waders, storks and pelicans, and peacocks are everywhere on the drives.",
    href: "/destinations/yala",
    image: "/images/destinations/yala-lagoon-birds.webp",
    imageAlt: "An Asian openbill stork, one of the many birds seen in Yala",
  },
] as const;

export const yalaQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "February – July" },
  { label: "Ideal Trip Length", value: "1 – 2 Days" },
  { label: "Signature Animal", value: "Sri Lankan leopard" },
  { label: "Nearest Town", value: "Tissamaharama" },
] as const;

export const yalaGettingThere: GettingThereItem[] = [
  {
    title: "From Ella",
    description:
      "About 2.5 to 3 hours by road, downhill from the hill country to the dry south-east.",
  },
  {
    title: "From Galle or Mirissa",
    description:
      "Around 3 to 4 hours along the south coast and the Southern Expressway.",
  },
  {
    title: "Where to Stay",
    description:
      "Tissamaharama and the camps and hotels on the park edge keep you close for early-morning drives.",
  },
] as const;

export const yalaHighlights: Highlight[] = [
  {
    title: "Some of the World's Best Leopard Viewing",
    description:
      "Yala's leopard density is among the highest recorded anywhere.",
  },
  {
    title: "More Than Leopards",
    description:
      "Elephants, sloth bears, crocodiles and over 200 bird species share the park.",
  },
  {
    title: "Short and Easy to Fit In",
    description:
      "One night near the park covers an afternoon and a dawn safari.",
  },
  {
    title: "Coast and Jungle Together",
    description:
      "The park runs down to the sea, with lagoons and beaches inside its borders.",
  },
  {
    title: "On the Way to the Beach",
    description:
      "Yala sits between the hill country and the south coast, so it fits naturally into most routes.",
  },
] as const;

export const yalaRelatedDestinations: CityCard[] = [
  {
    name: "Ella",
    tagline: "Nine Arch Bridge & Hill Train",
    description:
      "Easy hikes, the Nine Arch Bridge and the end of the scenic hill train.",
    href: "/destinations/ella",
    image: "/images/destinations/ella-nine-arch-bridge-train.webp",
    imageAlt: "A blue train crossing the Nine Arch Bridge near Ella",
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
  {
    name: "Nuwara Eliya",
    tagline: "Tea Estates & Cool Hills",
    description:
      "Rolling tea estates, a cool climate and the trails of Horton Plains.",
    href: "/destinations/nuwara-eliya",
    image: "/images/destinations/nuwara-eliya-tea-plantation.webp",
    imageAlt: "Tea estates covering the hills near Nuwara Eliya",
  },
] as const;

export const yalaWhereToStay: GettingThereItem[] = [
  {
    title: "Tissamaharama",
    description:
      "A small town about 30 minutes from the main gate, with a range of hotels.",
  },
  {
    title: "Park-edge hotels and camps",
    description:
      "Lodges and tented camps right on the park boundary, closest for dawn safaris.",
  },
] as const;

export const yalaFaqs: FaqItem[] = [
  {
    question: "What are the chances of seeing a leopard in Yala?",
    answer:
      "Good, but never guaranteed. Yala has one of the highest leopard densities in the world, and two drives (an afternoon and a dawn safari) give you the best odds.",
  },
  {
    question: "Is Yala closed in September?",
    answer:
      "Parts of it often are. Blocks 1 and 2 have closed for a few weeks in the dry season in recent years; in 2026 they closed from 14 September to 16 October. Dates vary, so we check before you book and use other blocks or Udawalawe if needed.",
  },
  {
    question: "Morning or afternoon safari?",
    answer:
      "Both work. Dawn drives catch animals at their most active and in the best light; afternoon drives fit neatly on arrival. One of each is ideal.",
  },
  {
    question: "Is Yala good for children?",
    answer:
      "Yes. Jeep safaris suit families, though early starts and bumpy tracks are part of it. Half-day drives are easier for younger children than full days.",
  },
  {
    question: "How long is a Yala safari?",
    answer:
      "Most visitors take a half-day safari of about three to four hours, at dawn or in the afternoon. Full-day safaris are available for keen wildlife photographers.",
  },
  {
    question: "Yala or Udawalawe: which is better?",
    answer:
      "Yala is best for leopards; Udawalawe is excellent for elephants, which are seen on almost every drive. Some routes include both.",
  },
] as const;
