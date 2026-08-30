import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const udaipurAttractions: CityCard[] = [
  {
    name: "Lake Palace",
    tagline: "The City's Signature View",
    description:
      "A white marble palace that appears to float on Lake Pichola, built in 1746 as a royal summer retreat and now a luxury hotel — best seen by boat at sunset.",
    href: "/destinations/rajasthan/udaipur",
    image: "/images/destinations/udaipur-lake-palace.webp",
    imageAlt: "Lake Palace floating on Lake Pichola, Udaipur",
  },
  {
    name: "City Palace",
    tagline: "400 Years in the Making",
    description:
      "Rajasthan's largest palace complex, built up over nearly four centuries by successive Mewar rulers, with architecture that visibly shifts as you move through its different eras.",
    href: "/destinations/rajasthan/udaipur",
    image: "/images/destinations/udaipur-city-palace.webp",
    imageAlt: "City Palace, Udaipur",
  },
  {
    name: "Jagdish Temple",
    tagline: "Ornately Carved",
    description:
      "A large Hindu temple a short walk from the City Palace, dedicated to Vishnu, known for its intricately carved exterior and central location in the old city.",
    href: "/destinations/rajasthan/udaipur",
    image: "/images/destinations/udaipur-jagdish-temple.webp",
    imageAlt: "Jagdish Temple, Udaipur",
  },
  {
    name: "Lake Pichola Boat Ride",
    tagline: "Best at Sunset",
    description:
      "A sunset boat ride on Lake Pichola, passing close to the Lake Palace, is consistently one of the most-photographed evenings of a Rajasthan circuit.",
    href: "/destinations/rajasthan/udaipur",
    image: "/images/destinations/udaipur-lake-pichola-boat.webp",
    imageAlt: "Boat ride on Lake Pichola, Udaipur",
  },
] as const;

export const udaipurQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October – March" },
  { label: "Ideal Trip Length", value: "2 – 3 Days" },
  { label: "Main Gateway", value: "Udaipur (UDR)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const udaipurGettingThere: GettingThereItem[] = [
  {
    title: "Main Gateway",
    description:
      "Maharana Pratap Airport (UDR) serves Udaipur directly from Delhi, Mumbai and Jaipur. The city is also reachable by road from Jodhpur (around 5–6 hours) as part of a wider Rajasthan circuit.",
  },
  {
    title: "Typical Entry Route",
    description:
      "Udaipur is most commonly visited as the final stop on a Jaipur–Jodhpur–Udaipur circuit, though it can also be reached directly by air for travellers with less time.",
  },
  {
    title: "Getting Around the City",
    description:
      "The old city around Lake Pichola is walkable, but a private driver makes it easy to combine the City Palace, Jagdish Temple and a boat ride into a single unhurried day.",
  },
] as const;

export const udaipurHighlights: Highlight[] = [
  {
    title: "The City of Lakes",
    description:
      "Udaipur is built around a series of artificial lakes ringed by hills and palaces — a setting genuinely unlike anywhere else in Rajasthan.",
  },
  {
    title: "Often Called India's Most Romantic City",
    description:
      "The combination of lakeside palaces and hilltop views has earned Udaipur this reputation, and it's a common choice for honeymoon add-ons.",
  },
  {
    title: "A Palace You Can Sleep In",
    description:
      "The Lake Palace and several other former royal residences now operate as hotels, so it's genuinely possible to stay inside the history rather than just view it.",
  },
  {
    title: "A Natural Circuit Finale",
    description:
      "Coming after Jaipur and Jodhpur, Udaipur's lakeside calm is a deliberate change of pace from the desert forts earlier in a Rajasthan trip.",
  },
] as const;

export const udaipurRelatedDestinations: CityCard[] = [
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "The wider region Udaipur sits within, alongside Jaipur and Jodhpur.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
  {
    name: "Delhi",
    tagline: "India's Capital",
    description: "The most common international gateway before continuing on to Rajasthan.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
  {
    name: "Ranthambore",
    tagline: "Tiger Country",
    description: "A tiger safari add-on, most easily combined via Jaipur.",
    href: "/destinations/rajasthan/ranthambore",
    image: "/images/destinations/ranthambore-tiger.webp",
    imageAlt: "Wild tiger at Ranthambore National Park",
  },
] as const;

export const udaipurFaqs: FaqItem[] = [
  {
    question: "How many days should I spend in Udaipur?",
    answer:
      "2 to 3 days is typical — enough for the City Palace, Jagdish Temple, a sunset boat ride, and time to simply enjoy the lakeside setting without rushing.",
  },
  {
    question: "Can I stay at the Lake Palace?",
    answer:
      "Yes, though it operates as a luxury hotel with rates to match. We can arrange a stay there or recommend other lakeside properties with views of it, depending on your budget.",
  },
  {
    question: "Is Udaipur good for a honeymoon?",
    answer:
      "It's one of our most-requested honeymoon add-ons — the lakeside setting and palace hotels genuinely suit the occasion. Let us know if that's the trip you're planning and we'll tailor the itinerary accordingly.",
  },
  {
    question: "What's the best time of year to visit?",
    answer:
      "October through March, for comfortable daytime temperatures. The lakes are also typically fuller after the monsoon, which can make the boat rides and views more scenic through autumn and winter.",
  },
];
