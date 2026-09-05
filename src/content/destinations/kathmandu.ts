import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

const PLACEHOLDER = "/images/destinations/urs-festival-ajmer.webp";

export const kathmanduAttractions: CityCard[] = [
  {
    name: "Kathmandu Durbar Square",
    tagline: "UNESCO Heritage Site",
    description:
      "A cluster of palaces, courtyards and temples that were the seat of Nepal's former royalty, badly damaged in the 2015 earthquake and since carefully restored.",
    href: "/destinations/kathmandu",
    image: PLACEHOLDER,
    imageAlt: "Photo coming soon — Kathmandu Durbar Square",
  },
  {
    name: "Swayambhunath",
    tagline: "The Monkey Temple",
    description:
      "An ancient hilltop stupa overlooking the Kathmandu Valley, its painted Buddha eyes visible for miles and its resident monkeys giving the site its popular nickname.",
    href: "/destinations/kathmandu",
    image: PLACEHOLDER,
    imageAlt: "Photo coming soon — Swayambhunath Stupa",
  },
  {
    name: "Boudhanath Stupa",
    tagline: "One of the World's Largest Stupas",
    description:
      "The spiritual centre of Kathmandu's Tibetan Buddhist community, ringed by monasteries, prayer flags and pilgrims completing kora walks around its base.",
    href: "/destinations/kathmandu",
    image: PLACEHOLDER,
    imageAlt: "Photo coming soon — Boudhanath Stupa",
  },
  {
    name: "Pashupatinath Temple",
    tagline: "Nepal's Holiest Hindu Site",
    description:
      "A sprawling temple complex on the Bagmati River, among the most important Shiva temples in the world and still an active site for Hindu cremation rites.",
    href: "/destinations/kathmandu",
    image: PLACEHOLDER,
    imageAlt: "Photo coming soon — Pashupatinath Temple",
  },
  {
    name: "Thamel",
    tagline: "Kathmandu's Traveller Quarter",
    description:
      "A dense tangle of narrow lanes packed with trekking outfitters, handicraft shops, rooftop restaurants and guesthouses — the natural base for most visitors.",
    href: "/destinations/kathmandu",
    image: PLACEHOLDER,
    imageAlt: "Photo coming soon — Thamel neighbourhood",
  },
] as const;

export const kathmanduQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October–November & March–April" },
  { label: "Ideal Trip Length", value: "2 – 3 Days" },
  { label: "Main Gateway", value: "Kathmandu (KTM)" },
  { label: "Languages Spoken", value: "Nepali, English" },
] as const;

export const kathmanduGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Tribhuvan International Airport (KTM) is Nepal's only international gateway, with direct flights from Delhi, Mumbai, Kolkata and Varanasi, alongside longer-haul connections from the Gulf and Southeast Asia.",
  },
  {
    title: "Typical Entry Route",
    description:
      "Most travellers fly into Kathmandu directly from Delhi as a short add-on to a wider India itinerary, rather than treating Nepal as a separate trip requiring its own long-haul flight.",
  },
  {
    title: "Overland from India",
    description:
      "It's also possible to cross by road from the Indian border towns of Sunauli or Raxaul, though flying is far faster and is what we arrange for nearly all international clients.",
  },
] as const;

export const kathmanduHighlights: Highlight[] = [
  {
    title: "A Living UNESCO City",
    description:
      "Kathmandu Valley holds seven UNESCO World Heritage Sites within a small radius — an unusually dense concentration of temples, stupas and palace squares.",
  },
  {
    title: "Where Hinduism and Buddhism Sit Side by Side",
    description:
      "Hindu and Buddhist shrines share the same streets and, in places, the same courtyards — a religious layering that's rare to see so closely woven together.",
  },
  {
    title: "The Natural Gateway to the Himalayas",
    description:
      "Kathmandu is the launch point for everything from a short Everest scenic flight to multi-week treks, making it easy to add mountain views without committing to a full expedition.",
  },
  {
    title: "An Easy Add-On to an India Trip",
    description:
      "A short flight from Delhi means Nepal fits naturally onto the end of a longer India itinerary rather than requiring a dedicated trip of its own.",
  },
  {
    title: "A Genuinely Different Pace",
    description:
      "Narrow medieval lanes, courtyard temples and a smaller, walkable old city give Kathmandu a very different rhythm from India's larger metropolitan destinations.",
  },
] as const;

export const kathmanduRelatedDestinations: CityCard[] = [
  {
    name: "Delhi",
    tagline: "India's Capital",
    description: "The most common gateway for travellers flying on to or from Kathmandu.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
  {
    name: "Varanasi",
    tagline: "Spiritual India",
    description: "A natural pairing for travellers drawn to Kathmandu's temple culture.",
    href: "/destinations/varanasi",
    image: "/images/destinations/varanasi-evening-ganges-aarti.webp",
    imageAlt: "Evening Ganga Aarti ceremony in Varanasi",
  },
  {
    name: "Darjeeling",
    tagline: "Himalayan Hill Station",
    description: "Shares Kathmandu's Himalayan backdrop and Buddhist monastery culture.",
    href: "/destinations/darjeeling",
    image: "/images/destinations/Darjeeling.webp",
    imageAlt: "Darjeeling hillside town wrapped in cloud",
  },
] as const;

export const kathmanduFaqs: FaqItem[] = [
  {
    question: "How many days should we plan for Kathmandu?",
    answer:
      "2 to 3 days is enough to see Durbar Square, Swayambhunath, Boudhanath and Pashupatinath at a comfortable pace, with time left over for Thamel.",
  },
  {
    question: "Is Kathmandu a good add-on to an India trip?",
    answer:
      "Yes — it's one of the easiest international add-ons to an India itinerary, reachable by a short direct flight from Delhi, and doesn't require a separate long-haul journey.",
  },
  {
    question: "Do we need a separate visa for Nepal?",
    answer:
      "Yes, Nepal requires its own visa, though most nationalities can get a visa on arrival at Tribhuvan International Airport — we'll confirm the current requirements for your passport when planning your trip.",
  },
  {
    question: "What's the best time of year to visit?",
    answer:
      "October to November and March to April offer the clearest mountain views and the most comfortable temperatures, avoiding both the summer monsoon and the coldest winter weeks.",
  },
] as const;
