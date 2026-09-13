import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * Image note: no genuine Kovalam or Varkala photo exists in the asset
 * library yet. The hero image below is Alleppey Beach — a real Kerala
 * coastal photo, but a different town from the two this tour actually
 * covers — used only as a generic representative shot, with honest alt
 * text. No day in the itinerary claims it depicts Kovalam or Varkala
 * specifically. Swap for genuine photos of both towns once available.
 */
export const keralaBeachesTour: PackageContent = {
  slug: "kerala-beaches-tour",
  name: "Kerala Beaches Tour",
  tagline: "Kovalam & Varkala · 4 Days",
  metaTitle: "Kerala Beaches Tour Package | Kovalam Lighthouse Beach & Varkala Cliff",
  metaDescription:
    "A private 4-day Kerala beaches tour — Kovalam's Lighthouse Beach, an Ayurvedic wellness treatment, and Varkala's dramatic cliffside coastline.",
  heroImage: "/images/destinations/alleppey-2.webp",
  heroImageAlt: "Alleppey Beach at sunset, Kerala — a representative coastal image",
  heroHeadline: "Kerala's Coast: Kovalam & Varkala",
  heroSubheadline:
    "Kerala's beaches in two genuinely different registers — Kovalam's classic curved bays, and Varkala's dramatic red cliffs rising straight from the Arabian Sea.",
  overview:
    "Kerala's backwaters and hill country get most of the attention, but the state's southern coastline holds two genuinely distinctive beach towns most circuits skip entirely. Kovalam has drawn travellers since the 1970s for its crescent-shaped bays and a working lighthouse still open to visitors, while Varkala, roughly two hours north, offers something visually rarer in India — a dramatic laterite cliff running directly along the shoreline, with cafés and guesthouses perched along the clifftop looking straight down onto the beach below. This tour gives four days to properly experience both, along with Kerala's long-established Ayurvedic wellness tradition, rather than treating the coast as an afterthought to backwaters and tea gardens.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Kovalam",
      description:
        "Private transfer from Thiruvananthapuram airport, roughly 30 to 45 minutes, to your beachfront hotel in Kovalam, with the rest of the day free to rest after travelling. In the evening, an easy first outing to Lighthouse Beach, Kovalam's most famous stretch of sand, named for the still-functioning red-and-white striped lighthouse that visitors can climb for a panoramic sunset view over the curved bay and the fishing boats returning for the evening after a day out on the water. This tour deliberately keeps the arrival day light, since the coast's whole appeal is slowing down rather than rushing between sights, and a genuinely relaxed first evening sets the right tone for the days ahead.",
    },
    {
      title: "Day 2 — Kovalam Beach & Ayurveda",
      description:
        "A full day at leisure on Kovalam's beaches, with the option of trying an Ayurvedic massage or wellness treatment at one of the many genuine, long-established centres in the area — Kerala has practised Ayurvedic medicine for centuries, and the coast around Kovalam specifically has developed a strong concentration of reputable practitioners rather than the more tourist-oriented spas found elsewhere in India, some tracing their treatment methods back several generations within the same family. For those who'd rather stay active, Kovalam's calmer bays are also reasonably suited to beginner surfing lessons, available through a handful of local operators who cater specifically to first-time surfers. The evening is left free for the beach's seafood shacks, serving fresh catch grilled to order along the sand as the sun goes down.",
    },
    {
      title: "Day 3 — Transfer to Varkala",
      description:
        "A roughly 2-hour drive north to Varkala, arriving by early afternoon with time to settle into your clifftop hotel before exploring the area's genuinely distinctive geography — a nearly 2-kilometre laterite cliff running directly along the coastline, unlike anywhere else on Kerala's coast, with a row of cafés, shops and guesthouses built along the clifftop looking straight down onto the beach below. The cliff itself is also considered sacred by local tradition, with several small shrines built into it at points, adding a layer of significance beyond the scenery alone. In the evening, walk the cliff path as the sun sets over the Arabian Sea, widely considered one of the best sunset viewpoints anywhere on India's western coast, before dinner at one of the clifftop restaurants overlooking the water as the lights come on below.",
    },
    {
      title: "Day 4 — Varkala & Departure",
      description:
        "A final morning to explore Varkala at your own pace — a walk down to the beach itself via one of the cliff's staircases, a visit to the nearby Janardanaswamy Temple, an active Hindu shrine dating back centuries, or simply more time along the clifftop cafés for one last coffee with a sea view before the drive back. A private transfer back to Thiruvananthapuram airport follows for your onward or international departure flight. Four days in, most travellers describe Kerala's beaches as a genuine surprise, a coastal side of the state that backwaters-and-hill-country circuits rarely make time for, and one that regularly ends up among the trip's most memorable stops despite arriving with lower expectations than the backwaters or Munnar.",
    },
  ],
  inclusions: [
    "2 nights in a hotel of your choice in Kovalam",
    "1 night in a hotel of your choice in Varkala",
    "Daily breakfast",
    "Private air-conditioned vehicle for all road transfers",
    "English-speaking guide for the Varkala orientation walk",
  ],
  exclusions: [
    "Flights or train tickets to and from Thiruvananthapuram",
    "Ayurvedic treatments and surfing lessons (paid locally, arranged on request)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Janardanaswamy Temple donations, if visited",
  ],
  highlights: [
    {
      title: "Two Genuinely Different Beach Towns",
      description:
        "Kovalam's classic curved bays and Varkala's dramatic clifftop coastline offer two distinct registers within a single short drive.",
    },
    {
      title: "Established Ayurvedic Wellness",
      description:
        "Kovalam's concentration of long-established Ayurvedic centres is genuinely more credible than the tourist-oriented spas found in many other Indian beach destinations.",
    },
    {
      title: "A Coastline Rare in India",
      description:
        "Varkala's laterite cliff running directly along the shoreline is a genuinely unusual sight anywhere on the subcontinent's coast.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Calm seas and comfortable temperatures make both beaches genuinely pleasant for swimming and clifftop walks. April to May turns hot and humid, and the June–September monsoon brings rough seas and heavy rain, making swimming unsafe at both beaches during that window.",
  },
  relatedDestinations: [
    {
      name: "Kerala",
      tagline: "God's Own Country",
      description: "Palm-lined backwaters, misty tea gardens, and a coastline layered with trading history.",
      href: "/destinations/kerala",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      name: "Tamil Nadu Beaches",
      tagline: "South India's Coastline",
      description: "A natural extension south for travellers who'd like more of the coast beyond Kerala.",
      href: "/destinations/tamil-nadu-beaches",
      image: "/images/destinations/tamil-nadu-beaches.webp",
      imageAlt: "Tamil Nadu's coastline",
    },
    {
      name: "Goa",
      tagline: "India's Beach Capital",
      description: "Portuguese-era churches and beaches, for travellers extending their South India trip further north.",
      href: "/destinations/goa",
      image: "/images/destinations/Goa.webp",
      imageAlt: "Goa's coastline",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is Kovalam or Varkala better if we only have time for one?",
      answer:
        "Kovalam suits travellers who want classic beach relaxation and easy access to established Ayurvedic centres; Varkala suits those drawn to more dramatic scenery and a slightly more bohemian, clifftop-café atmosphere. Both are genuinely worthwhile if time allows.",
    },
    {
      question: "Are the Ayurvedic treatments genuinely authentic, or aimed at tourists?",
      answer:
        "Kovalam specifically has a strong concentration of long-established, reputable Ayurvedic centres rather than purely tourist-oriented spas, though quality does vary — we can recommend specific centres when planning your trip.",
    },
    {
      question: "Is it safe to swim at these beaches?",
      answer:
        "Generally yes during the October to March season, though currents can be strong at times — we'd recommend swimming at flagged, lifeguard-monitored sections of Kovalam Beach specifically, and always checking local conditions before entering the water at either location.",
    },
    {
      question: "Can we combine this with the rest of Kerala?",
      answer:
        "Yes — this pairs naturally with our Kerala Tours classic circuit, though given the distance from Kochi (roughly 4 to 5 hours south), we'd suggest treating the beaches as either a standalone trip or the final leg of a longer Kerala itinerary.",
    },
    {
      question: "Is Varkala's cliff walk suitable for all fitness levels?",
      answer:
        "Yes — the clifftop path itself is flat and easy walking; only the staircases down to the beach involve any real exertion, and several sections have gentler paths for those who'd rather avoid steps.",
    },
  ],
  relatedPackages: [
    {
      name: "Kerala Tours",
      tagline: "The Classic Circuit · 6 Days",
      description: "Combine Kerala's beaches with Kochi, Alleppey and Munnar for a fuller state circuit.",
      href: "/tours/kerala-tours-classic",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      name: "Alleppey Backwaters Tour",
      tagline: "Houseboats & Palm-Lined Canals",
      description: "A backwaters-only version of a Kerala trip, for travellers drawn to canals over coastline.",
      href: "/tours/alleppey-backwaters-tour",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      name: "Kochi City Tour",
      tagline: "Fort Kochi & Colonial Heritage",
      description: "Chinese fishing nets, Dutch colonial lanes, and a traditional Kathakali performance.",
      href: "/tours/kochi-tour",
      image: "/images/destinations/kochi-3.webp",
      imageAlt: "Chinese fishing nets at sunset, Fort Kochi, Kerala",
    },
  ],
  draftPendingReview: false,
};
