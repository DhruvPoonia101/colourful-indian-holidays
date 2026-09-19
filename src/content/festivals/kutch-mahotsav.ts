import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";
import type { CityCard } from "@/components/destinations/CityGrid";

/**
 * DRAFT CONTENT — expanded from an earlier, thinner version without
 * confirmed business input. Dhruv should review for accuracy.
 */
export const kutchMahotsavOverview = [
  "Kutch Mahotsav, also widely known as the Rann Utsav, is built around one of India's most genuinely otherworldly landscapes — the Great Rann of Kutch, a vast seasonal salt marsh in Gujarat that dries into a blinding white salt desert stretching to the horizon in every direction. Unlike most Indian festivals tied to a single day or short window, Kutch Mahotsav runs across a multi-month season from roughly November through February, coinciding with the cooler, drier months when the salt flats are at their most striking and camping in the desert is genuinely comfortable.",
  "A purpose-built tented camp is set up specifically for the festival season on the edge of the salt desert, ranging from comfortable standard tents to genuinely luxurious options with private bathrooms and air conditioning, giving visitors an actual desert-camp experience rather than a day-trip stop. Evenings at the camp typically include Kutchi folk music and dance performances, and the region's distinctive craft traditions — intricate embroidery, leatherwork and metalwork, each with techniques specific to different communities within Kutch — are showcased and sold throughout the festival grounds.",
  "The single most memorable experience most visitors describe is walking out onto the salt flats themselves at sunset or under a full moon, when the white salt reflects the changing light in a way that genuinely doesn't resemble anywhere else in India — full moon nights specifically draw the festival's largest crowds and are worth timing a visit around if your schedule allows the flexibility. Because the festival runs for months rather than a single date, it's one of the easier events on this list to build into a trip on whatever timeline suits you, without needing to plan years or even months in advance the way something like Kumbh Mela requires.",
];

export const kutchMahotsavHighlights: Highlight[] = [
  {
    title: "The White Salt Desert",
    description:
      "A vast, otherworldly landscape unlike anywhere else in India — especially striking at sunset and under a full moon.",
  },
  {
    title: "A Purpose-Built Tented Camp",
    description:
      "Comfortable tented accommodation set up specifically for the festival season, offering a proper desert-camp experience.",
  },
  {
    title: "Kutchi Craft Traditions",
    description:
      "The region's distinct embroidery, leatherwork and metalwork traditions are showcased throughout the festival.",
  },
  {
    title: "A Multi-Month Season",
    description:
      "Unlike single-day festivals, Kutch Mahotsav runs from November to February, giving genuine flexibility in planning a visit.",
  },
] as const;

export const kutchMahotsavFaqs: FaqItem[] = [
  {
    question: "Do I need to visit on a specific date?",
    answer:
      "No — unlike single-day festivals, Kutch Mahotsav runs for several months, so it can be built into a trip on whichever dates suit you within that window.",
  },
  {
    question: "What's the tented camp like?",
    answer:
      "Purpose-built for the festival season, ranging from comfortable to genuinely luxurious depending on what's booked — we can advise on options as part of planning.",
  },
  {
    question: "Is the full moon the best time to visit?",
    answer:
      "Full moon nights over the salt flats are especially striking and popular, so we'd recommend timing a visit around one if your schedule allows.",
  },
  {
    question: "How do we get to the Rann of Kutch?",
    answer:
      "The nearest airport is Bhuj, connected by domestic flights from major Indian cities; the salt desert and festival tent city sit roughly an hour's drive from there.",
  },
  {
    question: "Is this suitable for a shorter add-on trip, or does it need several days?",
    answer:
      "Most visitors spend 2 to 3 days at the festival, though a single overnight is workable if your schedule is tight — we can advise based on how much time you have available and what you'd like to prioritise.",
  },
];

export const kutchMahotsavRelatedDestinations: CityCard[] = [
  {
    name: "Gujarat",
    tagline: "Stepwells & Wildlife",
    description: "Ahmedabad's historic stepwells and Gir National Park, home to India's only wild Asiatic lions.",
    href: "/destinations/gujarat",
    image: "/images/destinations/gujarat-gir-lion.webp",
    imageAlt: "An Asiatic lion at Gir National Park, Gujarat",
  },
  {
    name: "Gujarat Beaches",
    tagline: "The Western Coastline",
    description: "A quieter stretch of India's western coast, less visited than Goa or Kerala.",
    href: "/destinations/gujarat-beaches",
    image: "/images/destinations/gujarat-beaches.webp",
    imageAlt: "Gujarat's coastline",
  },
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "Forts, palaces and desert citadels across six essential cities.",
    href: "/destinations/rajasthan",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
];

export const kutchMahotsavRelatedExperiences: CityCard[] = [
  {
    name: "Desert Safari",
    tagline: "Camel Camps & the Thar Desert · 3 Days",
    description: "A different desert entirely — Rajasthan's Thar Desert, with camel treks and overnight camps.",
    href: "/experiences/desert-safari",
    image: "/images/destinations/jaisalmer-desert.webp",
    imageAlt: "Camel caravan crossing the Thar Desert dunes near Jaisalmer",
  },
  {
    name: "Pushkar Fair",
    tagline: "Festival Guide",
    description: "The world's largest camel and livestock fair, held at Pushkar's sacred lake each autumn.",
    href: "/experiences/pushkar-fair",
    image: "/images/destinations/pushkar.webp",
    imageAlt: "Traditional Rajasthani performers at the Pushkar Fair",
  },
  {
    name: "Camel Festival, Bikaner",
    tagline: "Festival Guide",
    description: "A dedicated cultural festival celebrating Rajasthan's working relationship with camels.",
    href: "/experiences/camel-festival",
    image: "/images/destinations/jaisalmer-desert.webp",
    imageAlt: "Camels in the Thar Desert, Rajasthan",
  },
];
