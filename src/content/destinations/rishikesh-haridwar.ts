import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const rishikeshHaridwarAttractions: CityCard[] = [
  {
    name: "Lakshman Jhula & Ram Jhula",
    tagline: "Rishikesh's Iconic Suspension Bridges",
    description:
      "Two pedestrian suspension bridges over the Ganges, lined with temples, ashrams and cafés on either bank — the natural centre of Rishikesh.",
    href: "/destinations/rishikesh-haridwar",
    image: "/images/destinations/rishikesh-2.webp",
    imageAlt: "Suspension bridge over the Ganges, Rishikesh",
  },
  {
    name: "White-Water Rafting",
    tagline: "The Ganges' Best Rafting Stretch",
    description:
      "The stretch of the Ganges through Rishikesh is one of India's most popular white-water rafting routes, with options for both first-timers and more experienced rafters.",
    href: "/destinations/rishikesh-haridwar",
    image: "/images/destinations/rishikesh.webp",
    imageAlt: "River rafting on the Ganges, Rishikesh",
  },
  {
    name: "Har Ki Pauri, Haridwar",
    tagline: "Where the Ganges Meets the Plains",
    description:
      "Haridwar's most sacred ghat, where the Ganges leaves the Himalayan foothills — the site of a nightly Ganga Aarti and, once every twelve years, the Kumbh Mela.",
    href: "/destinations/rishikesh-haridwar",
    image: "/images/destinations/haridwar-2.webp",
    imageAlt: "Har Ki Pauri ghat on the Ganges, Haridwar",
  },
  {
    name: "The Shiva Statue, Rishikesh",
    tagline: "A Riverside Landmark",
    description:
      "A large statue of Shiva in meditation overlooking the Ganges, near the Triveni Ghat area — one of Rishikesh's most recognisable riverside sights.",
    href: "/destinations/rishikesh-haridwar",
    image: "/images/destinations/haridwar.webp",
    imageAlt: "Statue of Shiva by the Ganges, Rishikesh",
  },
] as const;

export const rishikeshHaridwarQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October to March" },
  { label: "Ideal Trip Length", value: "3 – 4 Days" },
  { label: "Main Gateway", value: "Dehradun (DED) / Delhi" },
  { label: "Distance from Delhi", value: "~230 km" },
] as const;

export const rishikeshHaridwarGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Dehradun's Jolly Grant Airport (DED) is the nearest airport, roughly 30–45 minutes from Rishikesh. Many travellers instead drive directly from Delhi, roughly 5–6 hours by road.",
  },
  {
    title: "By Road from Delhi",
    description:
      "A private driver covers Delhi to Rishikesh in around 5–6 hours, making this a natural extension onto a Golden Triangle or North India itinerary rather than a separate trip.",
  },
  {
    title: "Getting Between the Two Towns",
    description:
      "Rishikesh and Haridwar sit only about 25 km apart, roughly 45 minutes by road — easily combined as a single stop or a day trip between the two.",
  },
] as const;

export const rishikeshHaridwarHighlights: Highlight[] = [
  {
    title: "India's Yoga Capital",
    description:
      "Rishikesh is internationally known as the birthplace of modern yoga tourism, home to numerous ashrams offering short courses and retreats for visitors of any experience level.",
  },
  {
    title: "Where the Ganges Leaves the Mountains",
    description:
      "Haridwar marks the exact point where the Ganges transitions from the Himalayan foothills to the plains — a geographically and spiritually significant transition.",
  },
  {
    title: "Adventure Alongside Spirituality",
    description:
      "Few places in India combine white-water rafting, cliff jumping and trekking with ashrams and evening aartis as naturally as Rishikesh does.",
  },
  {
    title: "The Evening Ganga Aarti",
    description:
      "Both towns hold their own nightly fire ceremony on the river — smaller and more intimate in Rishikesh, larger and more crowded at Haridwar's Har Ki Pauri.",
  },
  {
    title: "A Relaxed Pace After a Busier Circuit",
    description:
      "For travellers coming from Delhi, Agra or Rajasthan, the Himalayan foothill setting and slower rhythm here offer a genuine change of pace.",
  },
] as const;

export const rishikeshHaridwarRelatedDestinations: CityCard[] = [
  {
    name: "Himachal (Manali & Shimla)",
    tagline: "Mountains & Colonial Heritage",
    description: "A further stretch of the Himalayan foothills, for travellers with more time.",
    href: "/destinations/himachal",
    image: "/images/destinations/urs-festival-ajmer.webp",
    imageAlt: "Photo coming soon — Himachal Pradesh",
  },
  {
    name: "Delhi",
    tagline: "India's Capital",
    description: "The most common gateway before or after a Rishikesh & Haridwar trip.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
  {
    name: "Varanasi",
    tagline: "The Ganges' Most Sacred City",
    description: "The Ganges' most significant pilgrimage city, further downstream and further into North India.",
    href: "/destinations/varanasi",
    image: "/images/destinations/varanasi.webp",
    imageAlt: "Ganga aarti ceremony at the ghats of Varanasi",
  },
] as const;

export const rishikeshHaridwarFaqs: FaqItem[] = [
  {
    question: "Do we need rafting or yoga experience to take part?",
    answer:
      "No — both are offered at beginner-friendly levels. Rafting operators grade routes by difficulty, and most ashrams and yoga centres in Rishikesh welcome complete beginners alongside more experienced practitioners.",
  },
  {
    question: "Is alcohol available in Rishikesh?",
    answer:
      "Rishikesh is officially a vegetarian, alcohol-free town out of respect for its status as a spiritual centre — worth knowing before you arrive, as this differs from most other Indian tourist destinations.",
  },
  {
    question: "How many days should we plan for both towns?",
    answer:
      "3 to 4 days lets you properly experience Rishikesh — including a rafting trip and at least one evening aarti — plus a half-day or full day in Haridwar for Har Ki Pauri.",
  },
  {
    question: "Can this be added onto a Golden Triangle itinerary?",
    answer:
      "Yes — it's a natural extension from Delhi, roughly 5–6 hours by road, and works well as a Himalayan-foothill addition to a wider North India trip.",
  },
] as const;
