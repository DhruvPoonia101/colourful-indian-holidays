import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const ranthamboreTour: PackageContent = {
  slug: "ranthambore-tour",
  name: "Ranthambore Tour",
  tagline: "Tiger Country, Properly Explored · 4 Days",
  metaTitle: "Ranthambore Tour Package | Tiger Safaris, Ruined Fort & Ganesh Temple",
  metaDescription:
    "A private 4-day Ranthambore tour — five safari drives across two full days, the ruined fort standing within the park, and the Trinetra Ganesh Temple.",
  heroImage: "/images/destinations/ranthambore-tiger.webp",
  heroImageAlt: "A wild tiger at Ranthambore National Park",
  heroHeadline: "Ranthambore: Tiger Country, Properly Explored",
  heroSubheadline:
    "A focused 4-day tour built around Ranthambore National Park alone — for travellers who want real time in the park rather than a single rushed safari squeezed between city stops.",
  overview:
    "Most Rajasthan circuits treat Ranthambore as a wildlife detour — one night, two safari drives, then back on the road toward the next fort or palace. That's rarely enough to do the park justice, and it treats tiger sightings as something to be ticked off rather than genuinely pursued. This tour gives four full days: five safari drives across two dedicated days rather than the single rushed one most circuits allow, real time to explore the 10th-century ruined fort standing directly within the park itself, and a visit to the Trinetra Ganesh Temple inside its walls, one of the most unusual pilgrimage sites in India. It's a meaningfully better structure for anyone who considers wildlife the actual point of the trip rather than an add-on.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Jun" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive at Ranthambore",
      description:
        "Private transfer from Sawai Madhopur railway station or Jaipur airport, roughly 3 to 4 hours by road, to your safari lodge, with the rest of the day free to rest after travelling. Most lodges here are built specifically around the safari experience, with naturalist staff on hand who can talk through the park's numbered zones, recent sightings, and what to realistically expect from the coming days. This tour deliberately keeps the arrival day light, since the two full safari days ahead involve genuinely early starts, and arriving rested makes a real difference to how the whole trip feels. Your guide can also run through appropriate clothing and safari etiquette this evening, so tomorrow's dawn drive starts smoothly rather than scrambling to prepare in the dark before sunrise, when temperatures can be surprisingly cool even in a desert state.",
    },
    {
      title: "Day 2 — Full Day of Safaris",
      description:
        "Two safari drives today, at dawn and again in the late afternoon — the two windows when tigers and other wildlife are most active. Ranthambore holds sloth bears, leopards, marsh crocodiles and well over 300 recorded bird species alongside its tigers, and its numbered safari zones each have a genuinely different character, from open grassland to dense forest to the lakes surrounding the old fort. Your naturalist guide and driver work the radio network with other vehicles throughout both drives to maximise your chances of a sighting, and Ranthambore's individual tigers are well documented and tracked, many with names and known territories, which experienced guides use to judge which zone offers the best chance on a given morning. Even without a tiger sighting on a given drive, the birdlife and scenery alone make each outing worthwhile.",
      image: "/images/destinations/ranthambore-tiger.webp",
      imageAlt: "A wild tiger at Ranthambore National Park",
    },
    {
      title: "Day 3 — Safaris & the Ruined Fort",
      description:
        "One further safari drive at dawn, ideally in a zone that passes near Ranthambore Fort itself — what makes the park visually distinctive among India's tiger reserves is this 10th-century ruined fort standing directly within the park boundary, its walls and chhatris overgrown with banyan roots, and tigers are regularly photographed walking past its ancient gateways. In the afternoon, a guided walk through the fort's ramparts and courtyards on foot, a genuinely different pace from viewing it through a safari vehicle window, taking in views over the surrounding forest and lakes from the fort's elevated position, with your guide pointing out the temples and old palace ruins scattered throughout the grounds. The day closes with a final evening safari drive in a different numbered zone, giving you a fresh chance at a sighting after the afternoon spent exploring the fort on foot.",
      image: "/images/destinations/ranthambore-fort.webp",
      imageAlt: "The ruined fort within Ranthambore National Park",
    },
    {
      title: "Day 4 — Trinetra Ganesh Temple & Departure",
      description:
        "A morning visit to the Trinetra Ganesh Temple, built within Ranthambore Fort and one of the more unusual pilgrimage sites in India — it's genuinely common for the temple to receive wedding invitations by post from across the country, since local tradition holds that Ganesh should be informed of any new venture, including a marriage, before it begins. The temple's interior carvings and the steady stream of pilgrims and mail make for a genuinely different morning after two days focused squarely on wildlife, a reminder that Ranthambore's fort has a living religious life alongside its history and scenery. Return to your lodge for check-out and a private transfer back to Sawai Madhopur or Jaipur for departure. Four days in, most travellers leave with a far stronger sense of having properly experienced the park, rather than sampled it in a single rushed visit.",
      image: "/images/destinations/ranthambore-temple-interior.webp",
      imageAlt: "Interior of the Trinetra Ganesh Temple, Ranthambore Fort",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice, twin-sharing",
    "Daily breakfast",
    "Private air-conditioned vehicle for all road transfers",
    "English-speaking guide and naturalist throughout",
    "5 shared safari drives at Ranthambore National Park",
    "Monument entry fees as per itinerary",
  ],
  exclusions: [
    "Flights or train tickets to and from Sawai Madhopur/Jaipur",
    "Private (exclusive) safari jeep upgrade, if preferred over a shared canter",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Camera fees at the national park and monuments (paid locally)",
  ],
  highlights: [
    {
      title: "Five Safari Drives, Not One",
      description:
        "A genuinely better structure for maximising sighting odds than the single rushed safari most Rajasthan circuits allow.",
    },
    {
      title: "A Fort Inside the Jungle",
      description:
        "Ranthambore's 10th-century ruined fort standing within the park itself gives the safari a visual backdrop no other Indian tiger reserve quite matches.",
    },
    {
      title: "A Genuinely Unusual Temple",
      description:
        "The Trinetra Ganesh Temple's wedding-invitation tradition makes it one of the more distinctive pilgrimage sites anywhere in India.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–June, with April–May for the Best Odds",
    note: "Ranthambore is open October through June, and counterintuitively, tiger sighting odds actually improve as the dry season deepens toward April and May, when thinning vegetation concentrates animals around the remaining water sources. October through February offer more comfortable temperatures for early-morning drives.",
  },
  relatedDestinations: [
    {
      name: "Ranthambore",
      tagline: "Tiger Country",
      description: "A former royal hunting ground turned national park, with a ruined fort inside it.",
      href: "/destinations/ranthambore",
      image: "/images/destinations/ranthambore-tiger.webp",
      imageAlt: "A wild tiger at Ranthambore National Park",
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
      question: "Is 4 days too long for just Ranthambore?",
      answer:
        "Not for genuinely wildlife-focused travellers — five safari drives across two dedicated days give meaningfully better odds than a single rushed one, and the fort and temple add real variety to the trip beyond the drives themselves.",
    },
    {
      question: "How good are the tiger sighting odds on this trip?",
      answer:
        "Genuinely good, though never guaranteed — five safari drives across your stay give considerably better odds than the single safari most shorter circuits squeeze in, and Ranthambore is one of India's more reliable parks for sightings.",
    },
    {
      question: "Should we book a private safari jeep instead of a shared canter?",
      answer:
        "A private jeep offers more flexibility and a quieter experience at a higher cost than the shared drives included in this package — we can arrange the upgrade if you'd prefer it.",
    },
    {
      question: "Is walking through the fort on foot safe, given it's inside a tiger reserve?",
      answer:
        "Yes — the fort itself is a designated visitor area accessed on foot with your guide, separate from the safari zones where wildlife roams, though sightings near the fort walls are genuinely not unheard of.",
    },
    {
      question: "Can we combine this with other Rajasthan destinations?",
      answer:
        "Yes — this pairs naturally with Jaipur, Udaipur or a longer circuit like the Grand Rajasthan Circuit. Let us know your available days and we'll adjust the itinerary accordingly.",
    },
  ],
  relatedPackages: [
    {
      name: "Wildlife Tours",
      tagline: "Tiger Safaris",
      description: "Our full wildlife category, covering Ranthambore, Sariska, Bandhavgarh and Kaziranga.",
      href: "/tours/wildlife-tours",
      image: "/images/destinations/ranthambore-tiger.webp",
      imageAlt: "Wild tiger at Ranthambore National Park",
    },
    {
      name: "Rajasthan Wildlife Safari",
      tagline: "8 Days",
      description: "Pair Ranthambore with Jaipur and Udaipur for a wider wildlife-and-heritage trip.",
      href: "/tours/rajasthan-wildlife-safari",
      image: "/images/destinations/udaipur-city-palace.webp",
      imageAlt: "Udaipur City Palace overlooking Lake Pichola",
    },
  ],
  draftPendingReview: false,
};
