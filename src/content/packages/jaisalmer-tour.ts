import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const jaisalmerTour: PackageContent = {
  slug: "jaisalmer-tour",
  name: "Jaisalmer Tour",
  tagline: "The Golden City in Depth · 4 Days",
  metaTitle: "Jaisalmer Tour Package | Jaisalmer Fort, Havelis & the Thar Desert",
  metaDescription:
    "A private 4-day Jaisalmer city tour — the living fort, Patwon Ki Haveli's carved mansions, Gadisar Lake and a sunset camel ride into the Thar Desert.",
  heroImage: "/images/destinations/jaisalmer-fort.webp",
  heroImageAlt: "Jaisalmer Fort's golden sandstone walls at sunset",
  heroHeadline: "Jaisalmer: The Golden City, Properly Explored",
  heroSubheadline:
    "A focused 4-day tour of Jaisalmer alone — for travellers who'd rather sit with the desert than treat it as a single overnight detour on a longer circuit.",
  overview:
    "Jaisalmer sits at the far western edge of most Rajasthan circuits, which usually means it gets a single rushed night before the long drive back east begins. That's a genuine shame, because Jaisalmer rewards a slower visit more than almost anywhere else in the state — the fort itself is one of the only 'living forts' left in the world, still inhabited by thousands of residents rather than preserved as an empty monument, and the surrounding Thar Desert deserves more than a token half-hour camel photo. This tour gives four full days: real time inside the fort and its carved havelis, a proper evening in the desert rather than a rushed sunset stop, and a pace that actually matches how remote and different Jaisalmer genuinely feels from the rest of Rajasthan.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Feb" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Jaisalmer",
      description:
        "Private transfer from Jaisalmer airport or railway station to your hotel, with the rest of the day free to rest after travelling. If you arrive with energy to spare, your guide can suggest an easy first outing — a walk toward the fort as evening falls, when its golden sandstone genuinely does glow the colour that gives the city its nickname, a sight that photographs consistently undersell. Jaisalmer is genuinely remote, further from Jaipur or Udaipur than either city is from the other, so most visitors arrive tired from a long journey, which is exactly why this tour keeps the first evening deliberately unstructured — no monuments to rush to, just a gentle first look at the city before the fuller sightseeing days ahead. Ask your guide about a rooftop restaurant with a fort view for dinner if you'd like to see it lit up after dark.",
    },
    {
      title: "Day 2 — Jaisalmer Fort",
      description:
        "A full day inside Jaisalmer Fort, one of the very few 'living forts' in the world where thousands of people still reside within its walls, alongside temples, shops and havelis all built from the same golden sandstone. Built in 1156, the fort's continued habitation is genuinely unusual internationally, and comes with real preservation challenges — modern plumbing and increased tourist footfall have put stress on foundations never designed for either, a tension your guide can explain in more depth if you're interested in the conservation debate. Inside, visit the Jain temples dating from the 12th and 15th centuries, intricately carved from pale yellow sandstone with a level of detail that rewards slow, close inspection, and the old Maharaja's palace, before an evening on the fort's ramparts watching the old city below turn gold in the last light.",
      image: "/images/destinations/jaisalmer-fort.webp",
      imageAlt: "Jaisalmer Fort's golden sandstone walls at sunset",
    },
    {
      title: "Day 3 — Havelis, Gadisar Lake & the Desert",
      description:
        "Visit Patwon Ki Haveli, a cluster of five ornately carved mansions built by a wealthy merchant family in the 19th century — the sandstone latticework and carved balconies here represent some of the finest decorative stonework anywhere in Rajasthan, with individual sections having taken decades each to complete by hand. From there, Gadisar Lake, a man-made reservoir ringed with small temples and shrines, originally built as the town's primary water source in a region where water has always been genuinely scarce, with several of its ghats added by wealthy merchants centuries later as acts of civic patronage. In the late afternoon, head into the surrounding Thar Desert for a camel ride and sunset over the dunes, the light and shadow across the sand developing real texture as the sun lowers, deliberately timed for the golden hour rather than the middle of the day.",
      image: "/images/destinations/jaisalmer-gadisar-lake.webp",
      imageAlt: "Gadisar Lake ringed by temples, Jaisalmer",
    },
    {
      title: "Day 4 — Desert Villages & Departure",
      description:
        "A morning excursion to the Sam or Khuri sand dunes region, roughly 40 to 45 minutes outside the city, quieter and more expansive than the closer dunes visited yesterday evening, with the option of a longer camel or jeep safari for those who'd like more time in the desert itself. En route, stop at a small desert village to see traditional Rajasthani rural life up close, genuinely different from anything else on a typical Rajasthan circuit and a welcome contrast to the fort and haveli sightseeing of the previous two days. Return to Jaisalmer for a final walk through the old town's bazaars, known for embroidered textiles, mirror-work and antique silver, before your private transfer to the airport or railway station for departure. Four days in, most travellers leave with a real sense of the desert rather than a single rushed photo of it.",
      image: "/images/destinations/jaisalmer-desert.webp",
      imageAlt: "Camel caravan crossing the Thar Desert dunes near Jaisalmer",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice, twin-sharing",
    "Daily breakfast",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide throughout",
    "Monument entry fees as per itinerary",
    "One evening camel ride in the desert",
    "All applicable hotel and transport taxes",
  ],
  exclusions: [
    "Flights or train tickets to and from Jaisalmer",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Camera fees at monuments (paid locally)",
    "Extended camel or jeep safari on Day 4, if a longer excursion is preferred (paid locally)",
  ],
  highlights: [
    {
      title: "A Living Fort, Not Just a Monument",
      description:
        "Jaisalmer Fort is one of the few forts in the world still inhabited by thousands of residents, giving it a lived-in character most forts lack entirely.",
    },
    {
      title: "A Proper Desert Evening",
      description:
        "Not a rushed half-hour photo stop, but a full sunset timed for the golden hour, plus a further morning excursion the next day.",
    },
    {
      title: "The Finest Carved Havelis in Rajasthan",
      description:
        "Patwon Ki Haveli's sandstone latticework represents decades of hand-carved work, genuinely rare to see up close and unhurried.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–February is Best",
    note: "Jaisalmer's desert climate is more extreme than the rest of Rajasthan at both ends of the year — genuinely punishing from April to June, and worth avoiding unless you specifically want to experience that heat. Cool winter mornings and evenings make the fort and desert excursions comfortable.",
  },
  relatedDestinations: [
    {
      name: "Jaisalmer",
      tagline: "The Golden City",
      description: "A living sandstone fort on the edge of the Thar Desert, with camel safaris beyond.",
      href: "/destinations/jaisalmer",
      image: "/images/destinations/jaisalmer-fort.webp",
      imageAlt: "Jaisalmer Fort's golden sandstone walls at sunset",
    },
    {
      name: "Rajasthan",
      tagline: "Land of Kings",
      description: "Forts, palaces and desert citadels across six essential cities.",
      href: "/destinations/rajasthan",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is 4 days too long for just Jaisalmer?",
      answer:
        "Not for most travellers — the fort alone can fill a full day properly explored, and once you add the havelis, Gadisar Lake and two separate desert excursions, four days feels genuinely well used rather than padded.",
    },
    {
      question: "Is Jaisalmer Fort still an active town, not just a tourist site?",
      answer:
        "Yes — it's one of the few forts in the world where thousands of people still live within the walls, alongside shops, temples and havelis, giving it a genuinely different atmosphere from a purely historical monument.",
    },
    {
      question: "Should we do the Sam dunes or the closer desert excursion, or both?",
      answer:
        "Both, if time allows — the closer dunes on Day 3 are convenient for a quick evening sunset, while Sam or Khuri on Day 4 are quieter, more expansive, and better suited to a longer camel or jeep safari.",
    },
    {
      question: "Is Jaisalmer worth visiting outside of the cooler months?",
      answer:
        "It's genuinely more demanding April through June, when desert heat becomes punishing — we'd recommend October through February for a comfortable visit, and can advise on timing when planning your trip.",
    },
    {
      question: "Can we extend this into a longer Rajasthan trip?",
      answer:
        "Yes — this pairs naturally with the Rajasthan Culture & Heritage Trail or the Grand Rajasthan Circuit. Let us know your available days and we'll adjust the itinerary accordingly.",
    },
  ],
  relatedPackages: [
    {
      name: "Rajasthan Culture & Heritage Trail",
      tagline: "8 Days",
      description: "Combine Jaisalmer with Jodhpur and Udaipur for a deeper heritage-focused route.",
      href: "/tours/rajasthan-culture-heritage-trail",
      image: "/images/destinations/jaisalmer-patwon-ki-haveli.webp",
      imageAlt: "Ornately carved facade of Patwon Ki Haveli, Jaisalmer",
    },
    {
      name: "Grand Rajasthan Circuit",
      tagline: "The Full State · 12 Days",
      description: "Combine Jaisalmer with all six of Rajasthan's essential cities in one trip.",
      href: "/tours/grand-rajasthan-circuit",
      image: "/images/destinations/jaisalmer-desert.webp",
      imageAlt: "Camel caravan crossing the Thar Desert dunes near Jaisalmer",
    },
  ],
  draftPendingReview: false,
};
