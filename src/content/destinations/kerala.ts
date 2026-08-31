import type { CityCard } from "@/components/destinations/CityGrid";
import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { QuickFact } from "@/components/destinations/QuickFacts";
import type { GettingThereItem } from "@/components/destinations/GettingThere";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const keralaAttractions: CityCard[] = [
  {
    name: "Alleppey Backwaters",
    tagline: "Houseboats on Palm-Lined Canals",
    description:
      "A network of lakes, canals and lagoons behind Kerala's coastline, best explored aboard a traditional kettuvallam houseboat over one or more nights.",
    href: "/destinations/kerala",
    image: "/images/destinations/alleppey-backwaters.webp",
    imageAlt: "Houseboat on the Alleppey backwaters, Kerala",
  },
  {
    name: "Munnar's Tea Gardens",
    tagline: "Rolling Hills in the Western Ghats",
    description:
      "High-altitude tea estates carpeting the Western Ghats, with cool mountain air and misty lakes offering a genuine contrast to Kerala's tropical coast.",
    href: "/destinations/kerala",
    image: "/images/destinations/munnar-2.webp",
    imageAlt: "Tea plantations and lake in Munnar, Kerala",
  },
  {
    name: "Fort Kochi & Chinese Fishing Nets",
    tagline: "Colonial Heritage on the Water",
    description:
      "Kochi's Chinese fishing nets, introduced by Chinese traders centuries ago, still operate daily along a waterfront layered with Portuguese, Dutch and British colonial history.",
    href: "/destinations/kerala",
    image: "/images/destinations/kochi-3.webp",
    imageAlt: "Chinese fishing nets at sunset, Kochi",
  },
  {
    name: "Kathakali Performance",
    tagline: "Kerala's Classical Dance-Drama",
    description:
      "An elaborate classical dance form using intricate costumes, painted faces and expressive gestures to tell stories from Hindu epics.",
    href: "/destinations/kerala",
    image: "/images/destinations/kochi-kathakali.webp",
    imageAlt: "Kathakali dancers in traditional costume, Kochi",
  },
  {
    name: "Munnar Tea Plantations",
    tagline: "Rolling Green Hills",
    description:
      "Terraced tea gardens carpeting the hills around Munnar, one of the most scenic stretches of Kerala's Western Ghats hill country.",
    href: "/destinations/kerala",
    image: "/images/destinations/munnar-tea-plantation.webp",
    imageAlt: "Tea plantation hills, Munnar",
  },
  {
    name: "Thekkady & Periyar Wildlife Sanctuary",
    tagline: "Boat Safaris & Spice Plantations",
    description:
      "A wildlife sanctuary built around the Periyar reservoir, offering boat safaris with a chance of spotting elephants, alongside nearby spice plantation tours.",
    href: "/destinations/kerala",
    image: "/images/destinations/thekkady.webp",
    imageAlt: "Thekkady, Kerala",
  },
] as const;

export const keralaQuickFacts: QuickFact[] = [
  { label: "Best Season", value: "October to March" },
  { label: "Ideal Trip Length", value: "5 – 7 Days" },
  { label: "Main Gateway", value: "Kochi (COK)" },
  { label: "Languages Spoken", value: "English, Malayalam" },
] as const;

export const keralaGettingThere: GettingThereItem[] = [
  {
    title: "By Air",
    description:
      "Cochin International Airport (COK) is Kerala's main gateway, with regular flights from Delhi, Mumbai and other major Indian cities, plus some direct international connections.",
  },
  {
    title: "Typical Route",
    description:
      "Most itineraries move from Kochi to Munnar's hill country, then down to Thekkady or Periyar, and finish with a houseboat night in Alleppey or Kumarakom before flying out.",
  },
  {
    title: "Houseboat Bookings",
    description:
      "Alleppey's houseboats range from simple to genuinely luxurious, and the best ones book out well in advance during peak season — we arrange this as part of your itinerary rather than leaving it to chance.",
  },
] as const;

export const keralaHighlights: Highlight[] = [
  {
    title: "A Genuinely Different Landscape",
    description:
      "Palm-lined backwaters, tropical coastline and misty tea-covered hills give Kerala a visual character unlike Rajasthan's deserts or North India's plains.",
  },
  {
    title: "A Houseboat Night on the Backwaters",
    description:
      "Sleeping aboard a traditional kettuvallam as it drifts through quiet canals is one of the more distinctive overnight experiences available anywhere in India.",
  },
  {
    title: "Ayurveda & Wellness Heritage",
    description:
      "Kerala is considered the traditional home of Ayurvedic medicine, and many resorts offer genuine treatments rooted in centuries of local practice.",
  },
  {
    title: "Layered Colonial History",
    description:
      "Fort Kochi carries visible traces of Portuguese, Dutch and British rule in a way few other Indian coastal cities do, alongside its much older trading links to China and the Arab world.",
  },
  {
    title: "India's Highest Literacy & Cleanliness",
    description:
      "Kerala consistently ranks among India's most developed states, which shows up in noticeably well-maintained infrastructure and public spaces for visitors.",
  },
] as const;

export const keralaRelatedDestinations: CityCard[] = [
  {
    name: "Goa",
    tagline: "Beaches & Portuguese Heritage",
    description: "India's other major coastal destination, further north, with a livelier beach scene.",
    href: "/destinations/goa",
    image: "/images/destinations/Goa.webp",
    imageAlt: "Coastal beach and cliffs, North Goa",
  },
  {
    name: "Mumbai",
    tagline: "India's Financial Capital",
    description: "A common gateway or connection point via domestic flight.",
    href: "/destinations/mumbai",
    image: "/images/destinations/Mumbai.webp",
    imageAlt: "Chhatrapati Shivaji Maharaj Terminus, Mumbai",
  },
  {
    name: "Tamil Nadu Beaches",
    tagline: "South India's Coastline",
    description: "A neighbouring South Indian coastal region with its own distinct temple heritage.",
    href: "/destinations/tamil-nadu-beaches",
    image: "/images/destinations/tamil-nadu-beaches.webp",
    imageAlt: "Tamil Nadu coastline",
  },
] as const;

export const keralaFaqs: FaqItem[] = [
  {
    question: "How many nights should we spend on a houseboat?",
    answer:
      "One night is standard and gives you a full sunset-to-sunrise experience on the water. Some travellers extend to two nights for a slower pace, particularly if combining with a longer South India itinerary.",
  },
  {
    question: "How many days should we plan for Kerala overall?",
    answer:
      "5 to 7 days lets you properly cover Kochi, Munnar's tea country, and a houseboat night in Alleppey without rushing between them — Thekkady's wildlife sanctuary is a common addition with an extra day or two.",
  },
  {
    question: "Is Kerala good for wildlife viewing?",
    answer:
      "Periyar Wildlife Sanctuary near Thekkady offers boat safaris with a chance of spotting elephants and, less commonly, tigers — a good addition for travellers with a specific interest, though sightings are less reliable than at Ranthambore.",
  },
  {
    question: "Can we combine Kerala with Goa or Tamil Nadu?",
    answer:
      "Yes — both are common pairings for a wider South India coastal itinerary, connected by short domestic flights or, for Tamil Nadu, a manageable road journey.",
  },
] as const;
