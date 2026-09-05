import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const nagarkotAttractions: CityCard[] = [
  {
    name: "Nagarkot View Tower",
    tagline: "Sunrise & Sunset Viewpoint",
    description:
      "A hilltop lookout tower at the ridge's highest point, where visitors gather before dawn for one of the widest Himalayan panoramas near Kathmandu.",
    href: "/destinations/nagarkot",
    image: "/images/destinations/nagarkot-view-tower-sunrise.webp",
    imageAlt: "Visitors gathered at the Nagarkot View Tower for sunrise",
  },
  {
    name: "Panoramic Everest & Langtang Views",
    tagline: "On a Clear Day",
    description:
      "On clear mornings, the ridge offers a sweep of peaks stretching from the Langtang range to a distant glimpse of Everest — no trek required.",
    href: "/destinations/nagarkot",
    image: "/images/destinations/nagarkot-himalaya-panorama-flag-hill.webp",
    imageAlt: "A wide Himalayan panorama seen from a hilltop viewpoint near Nagarkot",
  },
] as const;

export const nagarkotQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October–December & March–April" },
  { label: "Ideal Trip Length", value: "1 Night (or a Half-Day Trip)" },
  { label: "Main Gateway", value: "32 km / ~1.5 hr drive from Kathmandu" },
  { label: "Languages Spoken", value: "Nepali, Tamang, English" },
] as const;

export const nagarkotGettingThere: GettingThereItem[] = [
  {
    title: "By Road from Kathmandu",
    description:
      "Nagarkot has no airport — it's reached by a roughly 1.5 hour drive from Kathmandu, winding up out of the valley to the ridge that gives the town its views.",
  },
  {
    title: "Typical Visit Pattern",
    description:
      "Most travellers drive up in the afternoon, stay one night at a ridge-facing hotel to catch the sunrise, then either hike down to Changu Narayan or return directly to Kathmandu.",
  },
  {
    title: "Day-Trip Option",
    description:
      "It's also possible to visit as a half-day trip from Kathmandu without an overnight stay, though the sunrise and sunset views are the main reason most people come.",
  },
] as const;

export const nagarkotHighlights: Highlight[] = [
  {
    title: "The Closest Full Himalayan Panorama to Kathmandu",
    description:
      "No other viewpoint this close to the capital offers as wide a sweep of the Himalayas, from the Langtang range to a distant view of Everest on the clearest days.",
  },
  {
    title: "An Easy Overnight Add-On",
    description:
      "At under two hours from Kathmandu, Nagarkot fits into even a short Nepal itinerary as a single overnight stop, without needing dedicated travel days.",
  },
  {
    title: "Hiking Without Trekking Gear",
    description:
      "The ridge trails to Changu Narayan and Dhulikhel are graded, well-established paths through villages and forest — accessible without technical trekking experience or equipment.",
  },
  {
    title: "A Genuine Change of Pace from Kathmandu",
    description:
      "Pine forest, terraced hillsides and quiet Tamang villages replace the capital's dense streets, all within an easy drive of the city.",
  },
  {
    title: "A Working Stop on the Valley's Historic Trails",
    description:
      "The route down to Changu Narayan passes through farmland and villages that have connected the Kathmandu Valley's hill communities for generations, not a route built solely for tourism.",
  },
] as const;

export const nagarkotRelatedDestinations: CityCard[] = [
  {
    name: "Kathmandu",
    tagline: "Nepal's Capital",
    description: "The gateway to Nagarkot and the start and end point of most visits.",
    href: "/destinations/kathmandu",
    image: "/images/destinations/kathmandu-durbar-square.webp",
    imageAlt: "Kathmandu Durbar Square, with its pagoda-roofed temples and daily street life",
  },
  {
    name: "Pokhara",
    tagline: "Lakeside Himalayan Views",
    description: "A bigger, closer mountain panorama for travellers who want more than a single sunrise stop.",
    href: "/destinations/pokhara",
    image: "/images/destinations/pokhara-phewa-lake-annapurna-reflection.webp",
    imageAlt: "Phewa Lake with the Annapurna range reflected in the still water",
  },
  {
    name: "Darjeeling",
    tagline: "Himalayan Hill Station",
    description: "A similar ridge-top sunrise viewpoint town, on the India side of the Himalayas.",
    href: "/destinations/darjeeling",
    image: "/images/destinations/Darjeeling.webp",
    imageAlt: "Darjeeling hillside town wrapped in cloud",
  },
] as const;

export const nagarkotFaqs: FaqItem[] = [
  {
    question: "Is one night in Nagarkot enough?",
    answer:
      "Yes — most visitors arrive in the afternoon, watch the sunset, stay overnight at a ridge-facing hotel, and catch the sunrise the next morning before heading back or hiking down to Changu Narayan.",
  },
  {
    question: "Can we see Everest from Nagarkot?",
    answer:
      "On a clear day, yes — Everest is visible as a distant peak among a wider sweep of the Himalayas, though it's a much smaller sight than closer viewpoints like those near Pokhara.",
  },
  {
    question: "Do we need trekking experience for the hikes?",
    answer:
      "No — the trails to Changu Narayan and Dhulikhel are well-established paths suited to any reasonably fit traveller, not technical trekking routes.",
  },
  {
    question: "When are the mountain views clearest?",
    answer:
      "October to December and March to April give the clearest skies, with the post-monsoon months (October–November) generally offering the most reliable visibility.",
  },
] as const;
