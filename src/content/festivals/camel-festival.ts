import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";
import type { CityCard } from "@/components/destinations/CityGrid";

/**
 * DRAFT CONTENT — expanded from an earlier, thinner version without
 * confirmed business input. Dhruv should review for accuracy.
 *
 * Image note: no genuine Bikaner or Camel Festival photo exists in the
 * asset library. Every "bikaner"-named file checked turned out to be a
 * duplicate of either the Pushkar Fair photo or Amber Fort in Jaipur
 * (confirmed via checksum) — neither depicts Bikaner. This page uses
 * "jaisalmer-desert.webp", a genuine Thar Desert camel scene, with alt
 * text that describes it honestly rather than claiming it shows Bikaner
 * specifically. Swap for a real Bikaner/Junagarh Fort/festival photo once
 * one is available.
 */
export const camelFestivalOverview = [
  "The Bikaner Camel Festival is a dedicated two-day cultural celebration of the camel's role in desert Rajasthan, held each January in the city of Bikaner, historically one of the region's great camel-breeding centres and home to India's National Research Centre on Camel. Where the Pushkar Fair grew out of a working livestock trading event, Bikaner's festival was created specifically as a cultural celebration from the outset, organised by the Rajasthan tourism department to showcase the camel's genuine, ongoing place in desert life rather than as a byproduct of a trade fair, with a smaller, more curated programme as a result.",
  "The festival opens with a procession of elaborately decorated camels through the city, their handlers dressed in matching festive colours, moving from the grounds of Junagarh Fort through Bikaner's streets to a soundtrack of drums and traditional instruments. From there, the two days fill with camel-specific competitions — races, camel dances, decoration and tattoo contests, and a best-breed competition judged by camel experts — alongside more general desert cultural performances: folk music, fire dances, and puppet shows staged against Bikaner's desert backdrop each evening as temperatures cool.",
  "Because Bikaner sits on Rajasthan's western desert circuit, the festival pairs naturally with the city's own considerable sightseeing on either side — Junagarh Fort, a genuinely well-preserved 16th-century fort that (unlike many Rajasthan forts) was never conquered, and the old city's sandstone havelis, built by wealthy merchant families along historic trade routes. Most visitors combine a Camel Festival visit with a day or two in Bikaner itself, and many continue on to Jaisalmer, a few hours further west, as part of a wider desert circuit.",
];

export const camelFestivalHighlights: Highlight[] = [
  {
    title: "Decorated Camel Processions",
    description:
      "Camels dressed in elaborate traditional decoration parade through Bikaner, alongside their handlers in matching festive dress.",
  },
  {
    title: "Camel Races & Games",
    description:
      "Competitions that showcase real desert-life camel skills, from racing to traditional games and a best-breed judging contest.",
  },
  {
    title: "Desert Folk Performances",
    description:
      "Traditional Rajasthani music, fire dances and puppet shows set against Bikaner's desert backdrop each evening.",
  },
  {
    title: "A Working Relationship, Not a Novelty",
    description:
      "Unlike camel rides staged purely for tourists elsewhere, this festival reflects camels' genuine, ongoing role in desert Rajasthan.",
  },
] as const;

export const camelFestivalFaqs: FaqItem[] = [
  {
    question: "Is this similar to the Pushkar Camel Fair?",
    answer:
      "They're related in spirit — both celebrate Rajasthan's camel culture — but Bikaner's Camel Festival is its own distinct, smaller event, created specifically as a cultural celebration rather than growing out of a livestock trading fair the way Pushkar's did.",
  },
  {
    question: "How many days should I plan for Bikaner?",
    answer:
      "1 to 2 days is typical for the festival itself, often extended to 2 to 3 days total to also cover Junagarh Fort and the old city's havelis as part of a wider desert-circuit Rajasthan itinerary.",
  },
  {
    question: "Is Bikaner easy to combine with Jaisalmer?",
    answer:
      "Yes, this is a common pairing — both are desert cities on Rajasthan's western circuit, a few hours apart by road, and many travellers continue from Bikaner to Jaisalmer as the next stop.",
  },
  {
    question: "What are the exact dates of the festival each year?",
    answer:
      "The festival runs each January on the Hindu calendar's Poornima (full moon), so exact dates shift slightly year to year — we can confirm dates for your specific travel year when planning your trip.",
  },
  {
    question: "Is Junagarh Fort worth visiting alongside the festival?",
    answer:
      "Yes, genuinely — it's one of the few major Rajasthan forts never taken by force, with well-preserved palace interiors, and pairs naturally with a festival visit since the procession itself starts from its grounds.",
  },
];

export const camelFestivalRelatedDestinations: CityCard[] = [
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "Forts, palaces and desert citadels across six essential cities.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "Jaisalmer",
    tagline: "The Golden City",
    description: "A living sandstone fort on the edge of the Thar Desert, with camel safaris beyond.",
    href: "/destinations/jaisalmer",
    image: "/images/destinations/jaisalmer-fort.webp",
    imageAlt: "Jaisalmer Fort's golden sandstone walls at sunset",
  },
  {
    name: "Jaipur",
    tagline: "The Pink City",
    description: "Amber Fort, City Palace, Hawa Mahal and the bazaars of the old walled city.",
    href: "/destinations/jaipur",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
];

export const camelFestivalRelatedExperiences: CityCard[] = [
  {
    name: "Pushkar Fair",
    tagline: "Festival Guide",
    description: "The larger, older camel and livestock fair that coincides with a major pilgrimage at Pushkar's sacred lake.",
    href: "/experiences/pushkar-fair",
    image: "/images/destinations/pushkar.webp",
    imageAlt: "Traditional Rajasthani performers at the Pushkar Fair",
  },
  {
    name: "Desert Safari",
    tagline: "Camel Camps & the Thar Desert · 3 Days",
    description: "A two-night desert camp safari for travellers who'd like more time in the dunes beyond the festival.",
    href: "/experiences/desert-safari",
    image: "/images/destinations/jaisalmer-desert.webp",
    imageAlt: "Camel caravan crossing the Thar Desert dunes near Jaisalmer",
  },
  {
    name: "Rajasthan Palace Honeymoon",
    tagline: "Two Palace Cities · 7 Days",
    description: "For couples who'd like to pair the festival with a longer stay in Rajasthan's heritage hotels.",
    href: "/experiences/rajasthan-palace-honeymoon",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
];
