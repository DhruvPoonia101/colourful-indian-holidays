import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { MoreDestination } from "@/components/destinations/MoreDestinationsList";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const rajasthanCities: CityCard[] = [
  {
    name: "Jaipur",
    tagline: "The Pink City",
    description: "Amber Fort, City Palace, Hawa Mahal and the bazaars of the old walled city.",
    href: "/destinations/rajasthan/jaipur",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur",
  },
  {
    name: "Udaipur",
    tagline: "City of Lakes",
    description: "The Lake Palace floating on Lake Pichola, and the City Palace above it.",
    href: "/destinations/rajasthan/udaipur",
    image: "/images/destinations/udaipur-lake-palace.webp",
    imageAlt: "Lake Palace floating on Lake Pichola, Udaipur",
  },
  {
    name: "Jodhpur",
    tagline: "The Blue City",
    description: "Mehrangarh Fort towering over a maze of indigo-washed old-town streets.",
    href: "/destinations/rajasthan/jodhpur",
    image: "/images/destinations/mehrangarh-fort-jodhpur.webp",
    imageAlt: "Mehrangarh Fort overlooking the blue city of Jodhpur",
  },
  {
    name: "Jaisalmer",
    tagline: "The Golden City",
    description: "A living sandstone fort on the edge of the Thar Desert, with camel safaris beyond.",
    href: "/destinations/rajasthan/jaisalmer",
    image: "/images/destinations/jaisalmer-desert.webp",
    imageAlt: "Jaisalmer Fort at the edge of the Thar Desert",
  },
  {
    name: "Pushkar",
    tagline: "The Holy Town",
    description: "A sacred lake ringed by ghats, and home to India's famous camel fair.",
    href: "/destinations/rajasthan/pushkar",
    image: "/images/destinations/pushkar.webp",
    imageAlt: "Pushkar Lake and its ghats at dawn",
  },
  {
    name: "Ranthambore",
    tagline: "Tiger Country",
    description: "A former royal hunting ground turned national park, easily added to any Rajasthan route.",
    href: "/destinations/rajasthan/ranthambore",
    image: "/images/destinations/ranthambore-tiger.webp",
    imageAlt: "Wild tiger at Ranthambore National Park",
  },
] as const;

export const rajasthanMoreDestinations: MoreDestination[] = [
  { name: "Bikaner", href: "/destinations/rajasthan/bikaner" },
  { name: "Chittorgarh", href: "/destinations/rajasthan/chittorgarh" },
  { name: "Kumbhalgarh", href: "/destinations/rajasthan/kumbhalgarh" },
  { name: "Bundi", href: "/destinations/rajasthan/bundi" },
  { name: "Ajmer", href: "/destinations/rajasthan/ajmer" },
  { name: "Mount Abu", href: "/destinations/rajasthan/mount-abu" },
  { name: "Mandawa", href: "/destinations/rajasthan/mandawa" },
  { name: "Shekhawati", href: "/destinations/rajasthan/shekhawati" },
  { name: "Alwar", href: "/destinations/rajasthan/alwar" },
  { name: "Bharatpur", href: "/destinations/rajasthan/bharatpur" },
  { name: "Osian", href: "/destinations/rajasthan/osian" },
  { name: "Neemrana", href: "/destinations/rajasthan/neemrana" },
] as const;

export const rajasthanHighlights: Highlight[] = [
  {
    title: "Heritage Palace Hotels",
    description:
      "Sleep inside real forts and palaces — many converted into heritage stays with the original architecture intact.",
  },
  {
    title: "Desert Safaris",
    description:
      "Camel and jeep safaris into the Thar Desert from Jaisalmer, with overnight camping under the stars.",
  },
  {
    title: "Vibrant Festivals",
    description:
      "From the Pushkar Camel Fair to Jaipur's Teej and Gangaur, Rajasthan's calendar is built around colour and ritual.",
  },
  {
    title: "Royal Rajasthani Cuisine",
    description:
      "Dal baati churma, laal maas and centuries-old royal kitchen traditions, served in havelis and palace restaurants.",
  },
  {
    title: "Handicrafts & Bazaars",
    description:
      "Block-printed textiles, blue pottery, and gemstone jewellery — Rajasthan's bazaars are a craft tradition, not a souvenir stop.",
  },
  {
    title: "Wildlife at Ranthambore",
    description:
      "One of India's best chances to see a wild tiger, in a former royal hunting ground turned national park.",
  },
] as const;

export const rajasthanQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October – March" },
  { label: "Ideal Trip Length", value: "7 – 10 Days" },
  { label: "Main Gateway", value: "Jaipur (JAI)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const rajasthanGettingThere: GettingThereItem[] = [
  {
    title: "Main Gateway",
    description:
      "Jaipur International Airport (JAI) is Rajasthan's main gateway, with regular domestic connections from Delhi, Mumbai and other major Indian cities. Udaipur and Jodhpur also have their own airports, so many itineraries fly into one city and out of another rather than backtracking.",
  },
  {
    title: "Typical Entry Route",
    description:
      "Most international travellers arrive via Delhi's international airport, then either fly on to Jaipur or begin with a short drive that combines Delhi and Agra with Rajasthan as part of a Golden Triangle extension.",
  },
  {
    title: "Visa Requirements",
    description:
      "Rajasthan is part of India, so the standard Indian e-Visa applies for most nationalities and can be arranged online before departure. We recommend confirming current requirements for your passport before booking flights.",
  },
] as const;

export const rajasthanRelatedDestinations: CityCard[] = [
  {
    name: "Delhi",
    tagline: "India's Capital",
    description: "Mughal-era monuments and colonial-era avenues — the classic starting point.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-qutub-minar.webp",
    imageAlt: "Qutub Minar, Delhi",
  },
  {
    name: "Agra",
    tagline: "Home of the Taj Mahal",
    description: "A short drive from Jaipur, and paired with Rajasthan on most first-time trips.",
    href: "/destinations/agra",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
  },
  {
    name: "Varanasi",
    tagline: "Spiritual India",
    description: "Ancient ghats on the Ganges — often added as an extension for a fuller North India trip.",
    href: "/destinations/varanasi",
    image: "/images/destinations/varanasi.webp",
    imageAlt: "Ganga aarti ceremony at the ghats of Varanasi",
  },
] as const;

export const rajasthanPopularTours: CityCard[] = [
  {
    name: "Jaipur City Tour",
    tagline: "3–4 Days",
    description: "Amber Fort, City Palace and Hawa Mahal — the essential first stop in Rajasthan.",
    href: "/packages/rajasthan-tours/jaipur-city-tour",
    image: "/images/packages/jaipur-city-tour.webp",
    imageAlt: "Hawa Mahal, Jaipur, with decorated horses in the street",
  },
  {
    name: "Rajasthan Culture & Heritage Trail",
    tagline: "8 Days",
    description: "Chittorgarh Fort and the region's deepest heritage sites, beyond the five main cities.",
    href: "/packages/rajasthan-tours/culture-heritage-8-days",
    image: "/images/packages/rajasthan-culture-8-days.webp",
    imageAlt: "Chittorgarh Fort walls overlooking a reservoir",
  },
  {
    name: "Rajasthan Wildlife Safari",
    tagline: "8 Days",
    description: "Jaipur and Jodhpur paired with tiger safaris at Ranthambore National Park.",
    href: "/packages/rajasthan-tours/wildlife-safari-8-days",
    image: "/images/packages/rajasthan-wildlife-8-days.webp",
    imageAlt: "Wild tiger on a safari track at Ranthambore National Park",
  },
  {
    name: "Rajasthan Honeymoon Package",
    tagline: "9–12 Days",
    description: "Palace hotels and the Lake Palace in Udaipur, built around privacy and romance.",
    href: "/packages/rajasthan-tours/honeymoon-package",
    image: "/images/packages/rajasthan-honeymoon-package.webp",
    imageAlt: "The Lake Palace, Udaipur, lit up at night",
  },
  {
    name: "Thar Desert Camel Safari",
    tagline: "5 Days",
    description: "Jaipur, Jodhpur and Jaisalmer, ending with a camel caravan into the dunes at sunset.",
    href: "/packages/rajasthan-tours/desert-camel-safari-5-days",
    image: "/images/packages/jaipur-jodhpur-jaisalmer-5-days.webp",
    imageAlt: "Camel caravan crossing the Thar Desert at sunset",
  },
  {
    name: "Grand Rajasthan Circuit",
    tagline: "12 Days",
    description: "Jaipur to Pushkar via Bikaner, Jaisalmer, Jodhpur and Udaipur — the full state, start to finish.",
    href: "/packages/rajasthan-tours/grand-circuit-12-days",
    image: "/images/packages/jaipur-bikaner-jaisalmer-jodhpur-udaipur-pushkar.webp",
    imageAlt: "Traditional Rajasthani performers at the Pushkar Camel Fair",
  },
] as const;

export const rajasthanFaqs: FaqItem[] = [
  {
    question: "How many days do I need in Rajasthan?",
    answer:
      "Most first-time travellers spend 7 to 10 days covering Jaipur, Udaipur, Jodhpur and Jaisalmer. A shorter 4 to 5 day trip can comfortably cover Jaipur and Udaipur, while a fuller 12 to 14 day itinerary allows time for Ranthambore's wildlife and a desert safari from Jaisalmer as well.",
  },
  {
    question: "What is the best time to visit Rajasthan?",
    answer:
      "October to March is the classic season, with cool, dry weather that's comfortable for sightseeing and desert safaris. April to June is very hot, especially in Jaisalmer and Bikaner, while the July to September monsoon brings occasional rain but also greener landscapes and fewer crowds.",
  },
  {
    question: "Is Rajasthan safe for foreign and solo travellers?",
    answer:
      "Yes — Rajasthan is one of India's most visited states by international tourists, and its main cities are well set up for foreign visitors. As anywhere, we recommend arranging a private guide and driver rather than relying on unfamiliar public transport, which is exactly how we run every Rajasthan itinerary.",
  },
  {
    question: "Which Rajasthan cities should first-time visitors include?",
    answer:
      "Jaipur, Udaipur and Jodhpur form the core of most first-time itineraries. If you have extra time, Jaisalmer adds the desert and Pushkar adds a smaller, spiritual counterpoint to the bigger cities.",
  },
  {
    question: "Do I need a visa to visit Rajasthan?",
    answer:
      "Rajasthan is part of India, so the standard Indian visa requirements apply — most international travellers can apply for an e-Visa online before arrival. Requirements vary by nationality, so we recommend checking the current rules for your passport before booking flights.",
  },
] as const;
