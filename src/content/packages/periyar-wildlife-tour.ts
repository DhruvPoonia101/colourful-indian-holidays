import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * Image note: no genuine Periyar Lake or wildlife photo exists in the asset
 * library yet — "thekkady.webp" (used on Day 1) is a real Kerala photo but
 * shows a backwaters canal, not the lake or reserve itself. Swap for an
 * accurate Periyar/wildlife photo once one is available.
 */
export const periyarWildlifeTour: PackageContent = {
  slug: "periyar-wildlife-tour",
  name: "Periyar Wildlife Tour",
  tagline: "Thekkady's Tiger Reserve · 4 Days",
  metaTitle: "Periyar Wildlife Tour Package | Boat Safari, Spice Plantations & Bamboo Rafting",
  metaDescription:
    "A private 4-day Periyar wildlife tour — a boat safari on Periyar Lake, a spice plantation walk, bamboo rafting into the reserve, and a tribal village visit near Thekkady.",
  heroImage: "/images/destinations/thekkady.webp",
  heroImageAlt: "A traditional houseboat on a palm-lined waterway near Thekkady, Kerala",
  heroHeadline: "Periyar: India's Only Wildlife Reserve Explored by Boat",
  heroSubheadline:
    "A focused 4-day tour built around Periyar Tiger Reserve — a genuinely different wildlife-viewing experience from a jeep safari, gliding across the lake instead of driving through numbered zones.",
  overview:
    "Most Kerala circuits give Periyar a single day, enough for one boat safari before moving on. That's a reasonable taste, but the reserve and the surrounding hill town of Thekkady genuinely reward more time — spice plantations that supplied European trade routes for centuries, a bamboo rafting route that goes deeper into the forest than the standard boat safari reaches, and tribal community visits that add real context beyond wildlife spotting alone. This tour gives four days to properly explore Periyar, India's only tiger reserve explored primarily by boat rather than jeep, a genuinely different rhythm from Ranthambore or Bandhavgarh's dawn-and-dusk game drives.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Thekkady",
      description:
        "A scenic drive to Thekkady, roughly 4 hours from Kochi through increasingly hilly, forested terrain as you approach the Periyar Tiger Reserve's boundary, the vegetation growing noticeably denser and the road winding more sharply the closer you get, with the air itself turning cooler and fresher along the way as the elevation rises. Private transfer directly to your hotel, with the rest of the day free to rest after the journey. In the late afternoon, an easy first outing to a working spice plantation, where cardamom, pepper, cinnamon and vanilla are grown commercially — the same crops that drew European traders to this coast centuries ago — with a guided walk explaining how each is cultivated and harvested by hand. This tour deliberately keeps the arrival day light, since tomorrow's boat safari means an early start.",
      image: "/images/destinations/thekkady.webp",
      imageAlt: "A traditional houseboat on a palm-lined waterway near Thekkady, Kerala",
    },
    {
      title: "Day 2 — Periyar Lake Boat Safari",
      description:
        "An early-morning boat safari on Periyar Lake, the reserve's centrepiece and the reason it's explored primarily by water rather than jeep — a genuinely different pace and perspective from a typical Indian wildlife park, gliding quietly past the shoreline while watching for elephants, sambar deer, wild boar and, with real luck, a tiger at the water's edge. Periyar's tiger population is smaller and more elusive than Ranthambore's, so sightings are a genuine bonus rather than an expectation, though the surrounding forest, birdlife and the chance of elephant herds bathing at the shore make the safari worthwhile regardless of whether a tiger appears on the day you visit. A second, quieter boat trip in the late afternoon offers a further chance at sightings as the light softens and the forest around the lake grows noticeably still.",
    },
    {
      title: "Day 3 — Bamboo Rafting & Tribal Village",
      description:
        "A full-day bamboo rafting excursion deeper into the reserve than the standard lake boat safari reaches, combining rafting, short jungle treks and a rope-bridge crossing through forest that few day-trippers ever see, led by trained local guides familiar with the terrain and the reserve's regulations, including which areas are off-limits on a given day depending on recent wildlife activity and weather conditions. This excursion typically requires advance booking given limited daily permits, so we'd recommend confirming it when planning your trip rather than requesting on arrival, particularly during the busier winter months when demand is highest. In the afternoon, visit a nearby tribal settlement to learn about indigenous forest-dwelling communities' traditional knowledge of the reserve's plants and wildlife, a genuinely different perspective on Periyar than wildlife-spotting alone provides, and one most standard itineraries skip entirely.",
    },
    {
      title: "Day 4 — Departure",
      description:
        "A final relaxed morning in Thekkady, with an optional visit to a spice market for cardamom, pepper or other produce to take home, before the drive back to Kochi, roughly 4 hours, for your onward or international departure flight. If your schedule allows a little extra time, a stop at a roadside viewpoint on the way down offers one last look over the forested hills before returning to the coast and the warmer, more humid air waiting below at sea level. Four days in, most travellers describe Periyar as a genuinely different kind of Indian wildlife experience — quieter, water-based, and woven through with spice plantations and tribal culture rather than built solely around dawn safari drives, a meaningfully different rhythm from a typical jeep-based reserve elsewhere in the country and a fitting close to a trip built around slowing down.",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice in Thekkady",
    "Daily breakfast",
    "Private air-conditioned vehicle for all road transfers",
    "Two Periyar Lake boat safaris (morning and afternoon)",
    "Bamboo rafting excursion with local guides",
    "Spice plantation walk",
  ],
  exclusions: [
    "Flights or train tickets to and from Kochi",
    "Periyar Tiger Reserve entry and boat safari fees (paid locally)",
    "Bamboo rafting permit fee, subject to availability (paid locally, arranged on request)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "A Safari by Boat, Not Jeep",
      description:
        "Periyar is India's only tiger reserve explored primarily by water, a genuinely different rhythm from Ranthambore or Bandhavgarh's dawn game drives.",
    },
    {
      title: "Deeper Into the Forest Than a Day Safari",
      description:
        "The bamboo rafting excursion reaches parts of the reserve the standard lake boat safari never gets close to.",
    },
    {
      title: "Spice Trade History, Not Just Wildlife",
      description:
        "Working plantations still growing the cardamom, pepper and vanilla that drew European traders to this coast for centuries.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cooler, drier conditions make both boat safaris and the bamboo rafting excursion genuinely comfortable. April to May turns warmer, and the June–September monsoon brings heavy rain that can affect both the rafting route and lake water levels.",
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
      question: "How likely are we to actually see a tiger?",
      answer:
        "Genuinely less likely than at Ranthambore or Bandhavgarh — Periyar's tiger population is smaller and more elusive, so a sighting is a real bonus rather than an expectation. The boat safari's elephants, birdlife and forest scenery make it worthwhile regardless.",
    },
    {
      question: "Is bamboo rafting suitable for beginners?",
      answer:
        "Yes — it's led by trained local guides and doesn't require prior rafting experience, though it does involve some walking and a rope-bridge crossing, so a reasonable level of fitness helps.",
    },
    {
      question: "Do we need to book the bamboo rafting excursion in advance?",
      answer:
        "Yes — daily permits are limited, so we'd strongly recommend confirming this when booking your trip rather than requesting it on arrival, especially during peak season.",
    },
    {
      question: "Is Periyar worth visiting if we've already done Ranthambore or another tiger reserve?",
      answer:
        "Yes — the boat-based safari, spice plantation walks and tribal village visits make Periyar a genuinely different experience rather than a repeat of a jeep-based reserve elsewhere in India.",
    },
    {
      question: "Can we combine this with the rest of Kerala?",
      answer:
        "Yes — this pairs naturally with our Kerala Tours classic circuit, Alleppey Backwaters Tour, or Munnar Hill Station Tour. Let us know your available days and we'll adjust the itinerary accordingly.",
    },
  ],
  relatedPackages: [
    {
      name: "Kerala Tours",
      tagline: "The Classic Circuit · 6 Days",
      description: "Combine Periyar with Kochi, Alleppey and Munnar for a wider Kerala circuit.",
      href: "/tours/kerala-tours-classic",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      name: "Munnar Hill Station Tour",
      tagline: "Tea Gardens & Cool Mountain Air",
      description: "Rolling tea plantations in the Western Ghats, a natural pairing with Periyar's forests.",
      href: "/tours/munnar-tour",
      image: "/images/destinations/munnar-tea-plantation.webp",
      imageAlt: "Rolling tea plantations in the mist, Munnar, Kerala",
    },
    {
      name: "Wildlife Tours",
      tagline: "Tiger Safaris",
      description: "Our full wildlife category, covering Ranthambore, Sariska, Bandhavgarh and Kaziranga.",
      href: "/tours/wildlife-tours",
      image: "/images/destinations/ranthambore-tiger.webp",
      imageAlt: "Wild tiger at Ranthambore National Park",
    },
  ],
  draftPendingReview: false,
};
