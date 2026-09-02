import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const khajurahoAttractions: CityCard[] = [
  {
    name: "Western Group of Temples",
    tagline: "UNESCO World Heritage Site",
    description:
      "The largest and best-preserved cluster of Khajuraho's temples, built between 950 and 1050 CE, famous for their intricate carved sculpture covering nearly every surface.",
    href: "/destinations/khajuraho",
    image: "/images/destinations/khajuraho-western-group.webp",
    imageAlt: "The Western Group of Temples, Khajuraho",
  },
  {
    name: "Kandariya Mahadeva Temple",
    tagline: "The Largest Temple at Khajuraho",
    description:
      "Dedicated to Shiva, the largest and most architecturally accomplished of Khajuraho's temples, its soaring tower rising in a series of ascending peaks.",
    href: "/destinations/khajuraho",
    image: "/images/destinations/khajuraho-kandariya-mahadeva.webp",
    imageAlt: "Kandariya Mahadeva Temple at sunset, Khajuraho",
  },
  {
    name: "Intricately Carved Sculpture",
    tagline: "Thousands of Figures in Stone",
    description:
      "A closer look at the density and precision of the carving that covers Khajuraho's temples — deities, celestial beings and scenes from daily life on almost every surface.",
    href: "/destinations/khajuraho",
    image: "/images/destinations/khajuraho-carving-detail.webp",
    imageAlt: "Detail of carved stone sculpture, Khajuraho",
  },
] as const;

export const khajurahoQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October to March" },
  { label: "Ideal Trip Length", value: "1 – 2 Days" },
  { label: "Main Gateway", value: "Khajuraho (HJR)" },
  { label: "Languages Spoken", value: "English, Hindi" },
] as const;

export const khajurahoGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Khajuraho Airport (HJR) has direct flights from Delhi and Varanasi, making it the most straightforward way in for most international itineraries.",
  },
  {
    title: "By Rail",
    description:
      "Khajuraho has its own railway station with connections to Delhi, Agra and Varanasi, though journey times are considerably longer than flying.",
  },
  {
    title: "Typical Pairing",
    description:
      "Most commonly combined with a wider North India circuit via Varanasi or Agra, given the shared flight connections between them.",
  },
] as const;

export const khajurahoHighlights: Highlight[] = [
  {
    title: "A UNESCO World Heritage Site",
    description:
      "Khajuraho's temple complex is recognised by UNESCO as one of the finest surviving examples of medieval Indian temple architecture.",
  },
  {
    title: "Extraordinarily Detailed Sculpture",
    description:
      "Nearly every surface of the main temples is covered in carved figures — deities, celestial beings, and scenes from daily life — created with a level of detail rarely matched elsewhere.",
  },
  {
    title: "Built by the Chandela Dynasty",
    description:
      "Constructed over roughly a century by the Chandela rulers, the temples represent a concentrated burst of architectural ambition rarely seen on this scale.",
  },
  {
    title: "A Quieter UNESCO Site",
    description:
      "Compared with the Taj Mahal or Delhi's major monuments, Khajuraho sees considerably fewer visitors, making for a more contemplative visit.",
  },
  {
    title: "A Genuinely Different Kind of Temple Art",
    description:
      "Khajuraho's sculptural style — including its well-known depictions of human intimacy alongside gods, warriors and everyday life — is unlike anything else on a typical North India itinerary.",
  },
] as const;

export const khajurahoRelatedDestinations: CityCard[] = [
  {
    name: "Varanasi",
    tagline: "The Ganges' Most Sacred City",
    description: "A common pairing given the shared flight connections between the two.",
    href: "/destinations/varanasi",
    image: "/images/destinations/varanasi.webp",
    imageAlt: "Ganga aarti ceremony at the ghats of Varanasi",
  },
  {
    name: "Agra",
    tagline: "Home to the Taj Mahal",
    description: "Another common connection point for a wider North India circuit.",
    href: "/destinations/agra",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "The Taj Mahal, Agra",
  },
  {
    name: "Bandhavgarh",
    tagline: "Tiger Territory",
    description: "A Central India wildlife pairing for travellers extending their trip.",
    href: "/destinations/bandhavgarh",
    image: "/images/destinations/bandhavgarh-tiger.webp",
    imageAlt: "Bengal tiger in Bandhavgarh National Park",
  },
] as const;

export const khajurahoFaqs: FaqItem[] = [
  {
    question: "Is Khajuraho only known for its erotic sculptures?",
    answer:
      "No — while that aspect draws attention, it represents a small proportion of the overall carving. The vast majority depicts deities, mythological scenes, warriors, musicians and everyday life, all part of a broader artistic and spiritual tradition.",
  },
  {
    question: "How many days should we plan for Khajuraho?",
    answer:
      "1 to 2 days is usually enough to properly see the Western Group in depth, plus the quieter Eastern and Southern groups if you have a second day.",
  },
  {
    question: "Is Khajuraho appropriate to visit with children?",
    answer:
      "Yes — it's a genuine heritage and architectural site, and most guided visits focus on the historical, artistic and religious significance of the temples rather than any single aspect of the carving.",
  },
  {
    question: "Can this be combined with Varanasi and Agra in one trip?",
    answer:
      "Yes — Khajuraho has direct flights to both, making it a natural addition to a wider North India itinerary rather than a standalone destination.",
  },
] as const;
