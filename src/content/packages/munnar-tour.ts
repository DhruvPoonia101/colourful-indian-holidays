import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const munnarTour: PackageContent = {
  slug: "munnar-tour",
  name: "Munnar Hill Station Tour",
  tagline: "Tea Gardens & Cool Mountain Air · 4 Days",
  metaTitle: "Munnar Tour Package | Tea Plantations, Eravikulam National Park & Mattupetty",
  metaDescription:
    "A private 4-day Munnar tour — rolling tea plantations, a working tea factory, Eravikulam National Park's rare mountain goats, and a boat ride on Mattupetty Lake.",
  heroImage: "/images/destinations/munnar-tea-plantation.webp",
  heroImageAlt: "Rolling tea plantations in the mist, Munnar, Kerala",
  heroHeadline: "Munnar: Kerala's Cool Mountain Escape",
  heroSubheadline:
    "A focused 4-day tour of Munnar alone — for travellers who'd rather spend real time in the tea-covered Western Ghats than pass through on a single overnight stop.",
  overview:
    "Munnar usually gets a single night on a Kerala circuit, enough for a quick drive through the tea gardens before moving on to the backwaters or the coast. That undersells a genuinely distinctive part of the state — Munnar sits at over 1,600 metres in the Western Ghats, with a climate and landscape that feels closer to a European hill station than tropical Kerala just a few hours away. This tour gives four days: real time among the tea plantations rather than a drive-by, a proper visit to Eravikulam National Park for one of India's rarest mountain mammals, and a boat ride on Mattupetty Lake, a genuinely peaceful way to take in the surrounding hills.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Sep – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Munnar",
      description:
        "A scenic drive from Kochi, roughly 4 hours, climbing steadily into the Western Ghats as the landscape shifts from Kerala's tropical coast to cool, misty hill country, with the temperature dropping noticeably the higher you go and waterfalls visible from the road at several points along the way. Private transfer directly to your hotel, with the rest of the day free to rest after the journey and enjoy the cooler air, a genuinely welcome change if you've spent time on the humid coast beforehand. This tour deliberately keeps the arrival day light, since the drive itself is long enough that most travellers prefer to settle in rather than start sightseeing immediately, and the altitude alone takes a little adjusting to for most first-time visitors.",
    },
    {
      title: "Day 2 — Tea Museum & Plantation Walk",
      description:
        "A morning visit to the Tea Museum, run by one of Munnar's original tea estates, covering the region's tea-growing history since British colonial planters first established plantations here in the 1870s, along with demonstrations of traditional processing equipment still in occasional use and a small tasting room at the end of the tour. Afterwards, a walk through the rolling tea plantations themselves, some of the most photogenic landscapes in South India, with the option of visiting a working factory to see how leaves are processed today, from plucking through drying and grading, and a chance to sample fresh Munnar tea at the source. The afternoon is left free to enjoy the gardens at your own pace or simply take in the mountain views from your hotel.",
      image: "/images/destinations/munnar-tea-plantation.webp",
      imageAlt: "Rolling tea plantations in the mist, Munnar, Kerala",
    },
    {
      title: "Day 3 — Eravikulam National Park & Mattupetty",
      description:
        "A morning visit to Eravikulam National Park, home to the largest surviving population of the Nilgiri tahr, an endangered mountain goat found only in this stretch of the Western Ghats and increasingly rare elsewhere. A shuttle bus takes visitors partway into the park, followed by a walking trail with a genuinely good chance of spotting tahr grazing close to the path, alongside sweeping views over the surrounding hills and, on clear days, the plains far below stretching toward the horizon. In the afternoon, drive to Mattupetty, home to a dam and reservoir ringed by tea gardens and pine forest, for a boat ride across the lake — a quieter, more contemplative way to take in Munnar's scenery than sightseeing on foot.",
      image: "/images/destinations/munnar-2.webp",
      imageAlt: "Mattupetty Lake surrounded by tea plantations and hills, Munnar",
    },
    {
      title: "Day 4 — Departure",
      description:
        "A final relaxed morning in Munnar, with an optional stop at a spice garden or local market for cardamom, pepper and other produce grown in the surrounding hills, before the drive back to Kochi, roughly 4 hours, for your onward or international departure flight. If your schedule allows, a final viewpoint stop along the descent gives one last look back over the tea-covered hills before returning to the coast and the warmer, more humid air waiting below. Four days in, most travellers describe Munnar as a genuinely unexpected highlight of their Kerala trip, a meaningfully different climate and landscape from the coast that a single rushed night rarely does justice to.",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice in Munnar",
    "Daily breakfast",
    "Private air-conditioned vehicle for all road transfers and sightseeing",
    "English-speaking guide for sightseeing days",
    "Eravikulam National Park entry and shuttle bus",
    "Boat ride at Mattupetty Lake",
  ],
  exclusions: [
    "Flights or train tickets to and from Kochi",
    "Tea Museum and factory visit entry fees (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Camera fees, if applicable at any stop",
  ],
  highlights: [
    {
      title: "Real Time Among the Tea Gardens",
      description:
        "A proper walk through the plantations and a working factory visit, not the single drive-by photo stop most one-night circuits allow.",
    },
    {
      title: "One of India's Rarest Mammals",
      description:
        "Eravikulam National Park protects the largest surviving population of the Nilgiri tahr, found nowhere else on Earth.",
    },
    {
      title: "A Genuinely Different Kerala Climate",
      description:
        "Cool mountain air and near-constant mist give Munnar a character unlike anywhere else in the state, a real contrast to the tropical coast.",
    },
  ],
  bestTimeToVisit: {
    heading: "September–March is Best",
    note: "Clear skies and comfortable temperatures make the tea garden walks and Eravikulam's trails genuinely pleasant. April to May brings warmer days, though Munnar's elevation keeps it cooler than the coast even then, and the June–August monsoon brings heavy rain and reduced visibility across the hills.",
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
      question: "Is 4 days too long for just Munnar?",
      answer:
        "Not for travellers who want more than a drive-by — the tea plantations, Eravikulam National Park and Mattupetty Lake together give a genuinely well-rounded look at the hill station rather than a single rushed stop.",
    },
    {
      question: "Are we likely to actually see the Nilgiri tahr at Eravikulam?",
      answer:
        "Yes, genuinely likely — the park protects the species' largest surviving population, and the walking trail regularly brings visitors close to grazing tahr without needing binoculars.",
    },
    {
      question: "How much colder is Munnar than the Kerala coast?",
      answer:
        "Noticeably colder, especially at night — evenings can require a light jacket even in warmer months, a genuine surprise for travellers coming straight from Kochi or Alleppey's tropical heat.",
    },
    {
      question: "Can we extend this into a longer Kerala trip?",
      answer:
        "Yes — this pairs naturally with our Kerala Tours classic circuit, Alleppey Backwaters Tour, or Kochi City Tour. Let us know your available days and we'll adjust the itinerary accordingly.",
    },
    {
      question: "Is Munnar worth visiting outside the cooler months?",
      answer:
        "September through March offers the clearest skies and most comfortable temperatures, though Munnar's elevation keeps it pleasant most of the year compared to the coast — the June–August monsoon is the main window we'd suggest avoiding.",
    },
  ],
  relatedPackages: [
    {
      name: "Kerala Tours",
      tagline: "The Classic Circuit · 6 Days",
      description: "Munnar as part of a wider circuit through Kochi and Alleppey.",
      href: "/tours/kerala-tours-classic",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      name: "Alleppey Backwaters Tour",
      tagline: "Houseboats & Palm-Lined Canals",
      description: "A backwaters-only version of a Kerala trip, for travellers drawn to water rather than hills.",
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
