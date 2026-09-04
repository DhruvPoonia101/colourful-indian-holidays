import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const kolkataAttractions: CityCard[] = [
  {
    name: "Victoria Memorial",
    tagline: "A Marble Monument to the British Raj",
    description:
      "A vast white marble building completed in 1921, commemorating Queen Victoria and now housing a museum on Kolkata's colonial history, set within landscaped gardens.",
    href: "/destinations/kolkata",
    image: "/images/destinations/kolkata-victoria-memorial.webp",
    imageAlt: "Victoria Memorial, Kolkata",
  },
  {
    name: "Howrah Bridge",
    tagline: "A Cantilever Icon Over the Hooghly",
    description:
      "One of the busiest cantilever bridges in the world, connecting Kolkata to Howrah across the Hooghly River — most striking at dawn or dusk.",
    href: "/destinations/kolkata",
    image: "/images/destinations/kolkata-howrah-bridge.webp",
    imageAlt: "Howrah Bridge lit up at night, Kolkata",
  },
  {
    name: "Kolkata's Historic Trams",
    tagline: "India's Last Surviving Tram Network",
    description:
      "Kolkata is the only city left in India with an operational tram network, running since 1902 — a genuinely rare way to move through the older parts of the city.",
    href: "/destinations/kolkata",
    image: "/images/destinations/kolkata-trams.webp",
    imageAlt: "Vintage trams at a Kolkata depot",
  },
  {
    name: "Vidyasagar Setu",
    tagline: "The Second Hooghly Bridge",
    description:
      "A modern cable-stayed bridge crossing the Hooghly further south of Howrah Bridge, its illuminated towers a striking contrast to the older bridge's cantilever design.",
    href: "/destinations/kolkata",
    image: "/images/destinations/kolkata-vidyasagar-setu.webp",
    imageAlt: "Vidyasagar Setu at dusk, Kolkata",
  },
] as const;

export const kolkataQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October to March" },
  { label: "Ideal Trip Length", value: "2 – 3 Days" },
  { label: "Main Gateway", value: "Kolkata (CCU)" },
  { label: "Languages Spoken", value: "English, Bengali, Hindi" },
] as const;

export const kolkataGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Netaji Subhas Chandra Bose International Airport (CCU) is well connected to Delhi, Mumbai and other major Indian cities, with some direct international routes.",
  },
  {
    title: "Typical Pairing",
    description:
      "Most commonly visited as part of a wider Eastern India itinerary alongside Darjeeling or Sikkim, or as a connection point for Northeast India.",
  },
  {
    title: "Getting Around",
    description:
      "Kolkata's traffic can be heavy, particularly in the old city — a private driver handles this comfortably, and the metro is a useful backup for direct routes.",
  },
] as const;

export const kolkataHighlights: Highlight[] = [
  {
    title: "India's Former Colonial Capital",
    description:
      "Kolkata served as the capital of British India until 1911, and its architecture — grand colonial buildings alongside crumbling, atmospheric mansions — reflects that history directly.",
  },
  {
    title: "A Genuine Centre of Indian Arts and Literature",
    description:
      "Home to Bengali cinema, Nobel laureate Rabindranath Tagore, and a literary café culture that remains active today, not just historical.",
  },
  {
    title: "Durga Puja, One of India's Great Festivals",
    description:
      "Kolkata's autumn Durga Puja is one of India's most spectacular festivals, with elaborately decorated pandals (temporary shrines) filling the city for several days.",
  },
  {
    title: "A Genuinely Distinct Bengali Cuisine",
    description:
      "Fish-forward Bengali cuisine, sweets like rosogolla and sandesh, and a strong tea and coffee house culture set Kolkata's food scene apart from the rest of India.",
  },
  {
    title: "An Easy Gateway to Northeast India",
    description:
      "Kolkata's international airport and rail connections make it a practical stop before continuing on to Darjeeling, Sikkim or Assam.",
  },
] as const;

export const kolkataRelatedDestinations: CityCard[] = [
  {
    name: "Darjeeling",
    tagline: "Tea, Cloud & the Himalayas",
    description: "A natural extension into the hills of West Bengal for travellers with more time.",
    href: "/destinations/darjeeling",
    image: "/images/destinations/Darjeeling.webp",
    imageAlt: "Darjeeling hillside town wrapped in cloud",
  },
  {
    name: "Sikkim",
    tagline: "The Himalayas, Made Easy",
    description: "A further extension into the Northeast India Himalayan foothills.",
    href: "/destinations/sikkim",
    image: "/images/destinations/sikkim-tathagata-tsal.webp",
    imageAlt: "The seated Buddha statue at Tathagata Tsal, Ravangla, Sikkim",
  },
  {
    name: "Odisha",
    tagline: "Temples in Stone",
    description: "The UNESCO-listed Konark Sun Temple and Puri, connected by rail and short flights.",
    href: "/destinations/odisha",
    image: "/images/destinations/odisha-jagannath-temple.webp",
    imageAlt: "Jagannath Temple, Puri, decorated for a festival",
  },
] as const;

export const kolkataFaqs: FaqItem[] = [
  {
    question: "How many days should we plan for Kolkata?",
    answer:
      "2 to 3 days is usually enough to see the Victoria Memorial, Howrah Bridge, College Street and get a genuine feel for the city's colonial and cultural history.",
  },
  {
    question: "Is Kolkata worth visiting if we're not continuing to Darjeeling or Sikkim?",
    answer:
      "Yes — Kolkata has enough colonial architecture, food culture and genuine city character to stand on its own, though it's most commonly combined with an Eastern India or Northeast India itinerary given its role as a natural gateway.",
  },
  {
    question: "What's the best time of year to visit?",
    answer:
      "October through March offers the most comfortable weather. If your dates align with autumn, visiting during Durga Puja (usually September or October) shows the city at its most spectacular, though it's also considerably more crowded.",
  },
  {
    question: "Can Kolkata be combined with Varanasi in one trip?",
    answer:
      "Yes — both are connected by rail and short flights, and pairing the two adds two genuinely different but equally historic Indian cities to a single itinerary.",
  },
] as const;
