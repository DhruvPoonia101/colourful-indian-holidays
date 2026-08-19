import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const ranthamboreAttractions: CityCard[] = [
  {
    name: "Tiger Safari",
    tagline: "The Main Event",
    description:
      "A jeep safari is the reason most travellers come to Ranthambore — patient, quiet drives through dry deciduous forest with a genuinely strong chance of a sighting.",
    href: "/destinations/rajasthan/ranthambore",
    image: "/images/destinations/tiger-safari-jeep.webp",
    imageAlt: "A Bengal tiger resting on a safari track surrounded by jeeps",
  },
  {
    name: "Ranthambore Fort",
    tagline: "A Fort Inside the Park",
    description:
      "A 10th-century hilltop fort within Ranthambore itself, UNESCO-listed as part of the Hill Forts of Rajasthan — most safari routes pass beneath its walls.",
    href: "/destinations/rajasthan/ranthambore",
    image: "/images/destinations/ranthambore-fort.webp",
    imageAlt: "Ranthambore Fort ramparts overlooking the national park",
  },
  {
    name: "Jogi Mahal & Padam Talao",
    tagline: "The Park's Best View",
    description:
      "A former hunting lodge on the shore of Padam Talao, the park's largest lake — one of the most scenic and reliable spots for a tiger sighting near water.",
    href: "/destinations/rajasthan/ranthambore",
    image: "/images/destinations/jogi-mahal.webp",
    imageAlt: "Jogi Mahal on the shore of Padam Talao, Ranthambore",
  },
  {
    name: "Temple Traditions",
    tagline: "Inside the Fort",
    description:
      "Ranthambore Fort is also home to the Trinetra Ganesh Temple, one of the few places in India where people send wedding invitations by post addressed directly to Lord Ganesh.",
    href: "/destinations/rajasthan/ranthambore",
    image: "/images/destinations/ranthambore-temple-interior.webp",
    imageAlt: "Ornately decorated temple idol, Ranthambore",
  },
] as const;

export const ranthamboreQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October – June" },
  { label: "Ideal Trip Length", value: "1 – 2 Days" },
  { label: "Main Gateway", value: "Jaipur (JAI)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const ranthamboreGettingThere: GettingThereItem[] = [
  {
    title: "Main Gateway",
    description:
      "Jaipur International Airport (JAI) is the nearest major airport, roughly 3.5 hours by road from Ranthambore. The town also has its own small railway station, Sawai Madhopur, well connected to Delhi, Jaipur and Mumbai.",
  },
  {
    title: "Typical Entry Route",
    description:
      "Most travellers add Ranthambore as a 1 to 2 night extension to a wider Rajasthan itinerary, usually between Jaipur and the rest of the circuit rather than as a standalone trip.",
  },
  {
    title: "Safari Booking",
    description:
      "Safari permits are limited and allocated by zone, so we book these in advance as part of your itinerary — turning up without a pre-booked safari risks missing entry entirely during peak season.",
  },
] as const;

export const ranthamboreHighlights: Highlight[] = [
  {
    title: "Ten Safari Zones",
    description:
      "The park is divided into ten numbered zones, each with different terrain and sighting patterns — worth knowing when a safari is booked, since zone allocation genuinely affects your odds.",
  },
  {
    title: "Beyond Tigers",
    description:
      "Leopards, sloth bears, marsh crocodiles and over 300 bird species share the park — a safari here rewards patience even on the days the tigers stay hidden.",
  },
  {
    title: "A Conservation Success Story",
    description:
      "Once a royal hunting ground, Ranthambore is now one of India's strongest examples of tiger conservation actually working, with a stable and growing population.",
  },
  {
    title: "Photography-Friendly Terrain",
    description:
      "Open, dry deciduous forest gives far clearer sightlines than India's denser jungle parks — a real advantage for anyone hoping to actually photograph a sighting, not just glimpse one.",
  },
  {
    title: "Easy Rajasthan Add-On",
    description:
      "A straightforward few hours from Jaipur, which is exactly why Ranthambore fits naturally into almost any wider Rajasthan itinerary rather than requiring a special trip.",
  },
] as const;

export const ranthamboreRelatedDestinations: CityCard[] = [
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "The wider region Ranthambore sits within — Jaipur is the closest major city.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "Delhi",
    tagline: "India's Capital",
    description: "The most common international gateway before continuing on to Ranthambore.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
  {
    name: "Agra",
    tagline: "Home of the Taj Mahal",
    description: "Easily combined with Ranthambore and Rajasthan on a wider North India route.",
    href: "/destinations/agra",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
  },
] as const;

export const ranthamboreFaqs: FaqItem[] = [
  {
    question: "How likely am I to actually see a tiger?",
    answer:
      "Very likely by wildlife-safari standards — Ranthambore has one of the highest tiger-sighting rates of any Indian national park, thanks to its open terrain. That said, no safari can ever guarantee a sighting, since these are wild animals in an unenclosed park.",
  },
  {
    question: "How many safaris should I book?",
    answer:
      "We usually recommend at least 2 safaris across a stay, ideally in different zones, since this meaningfully improves your overall chances of a sighting rather than relying on a single outing.",
  },
  {
    question: "How many days do I need in Ranthambore?",
    answer:
      "1 to 2 nights is typical, allowing for 2 to 4 safaris. Most travellers treat it as a focused add-on to a wider Rajasthan itinerary rather than a longer standalone stay.",
  },
  {
    question: "When is the best time to visit for tiger sightings?",
    answer:
      "The park is open October through June. The hotter months, April to June, often produce the best sightings, since tigers spend more time near water sources to cool off — though the heat itself can be intense for visitors.",
  },
  {
    question: "Can Ranthambore be combined with the rest of Rajasthan?",
    answer:
      "Yes, this is how we build in almost every Ranthambore visit — as a 1 to 2 night addition to a wider Rajasthan itinerary, most commonly slotted in near Jaipur given how close the two are.",
  },
] as const;
