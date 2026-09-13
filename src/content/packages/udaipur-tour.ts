import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const udaipurTour: PackageContent = {
  slug: "udaipur-tour",
  name: "Udaipur Tour",
  tagline: "The City of Lakes in Depth · 4 Days",
  metaTitle: "Udaipur Tour Package | City Palace, Lake Pichola & Jagdish Temple",
  metaDescription:
    "A private 4-day Udaipur city tour — the City Palace, Lake Pichola by boat, Jagdish Temple and the Monsoon Palace at sunset, at a relaxed pace with a private guide throughout.",
  heroImage: "/images/destinations/udaipur-lake-palace.webp",
  heroImageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
  heroHeadline: "Udaipur: The City of Lakes, Properly Explored",
  heroSubheadline:
    "A focused 4-day tour of Udaipur alone — for travellers who'd rather linger by the lakes than rush through on a single overnight stop.",
  overview:
    "Most Rajasthan circuits give Udaipur a single night, often the last stop before flying home, which barely allows time for the City Palace and a hurried boat ride before the trip ends. This tour is built for the opposite approach: four unhurried days to actually experience why Udaipur is so consistently named the most romantic city in India, rather than seeing it purely as a scenic finale. That means real time at the City Palace rather than a rushed walkthrough, a proper sunset boat ride on Lake Pichola, and a few quieter additions — the Monsoon Palace at dawn, the folk museum at Bagore Ki Haveli — that a standard one-night stop almost always skips entirely.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Sep – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Udaipur",
      description:
        "Private transfer from Udaipur airport or railway station to your hotel, with the rest of the day free to rest after travelling. If you arrive with energy to spare, your guide can suggest an easy first outing — a walk along Lake Pichola's promenade as the palace lights come on for the evening, one of the more understated but genuinely lovely sights in the city, with the floating Lake Palace and the hillside Monsoon Palace both visible from the water's edge as darkness falls. Udaipur's pace is noticeably gentler than Jaipur or Jodhpur from the moment you arrive, and this tour keeps the first evening deliberately unstructured, a chance to settle in and get your bearings before the fuller sightseeing days ahead. Ask your guide for a dinner recommendation with a lake view if you'd like to make the most of the evening.",
    },
    {
      title: "Day 2 — City Palace & Jagdish Temple",
      description:
        "A full day built around the City Palace complex, the largest of its kind in Rajasthan, constructed over nearly 400 years by successive maharajas rather than as a single project — which is part of why walking through it feels like moving through several centuries of shifting architectural taste rather than one uniform building. Highlights include the Peacock Courtyard's mosaic tilework and the Crystal Gallery's rare 19th-century crystal furniture, imported from England and never actually used by the royal family it was commissioned for. In the afternoon, a short walk brings you to Jagdish Temple, an ornately carved Indo-Aryan temple still in daily active worship, built in 1651 and dedicated to Lord Vishnu — its exterior carvings alone are worth a slow, unhurried look rather than a quick photo stop, and the temple's steps make a genuinely good spot to simply sit and watch the daily rhythm of worship for a while.",
      image: "/images/destinations/udaipur-city-palace.webp",
      imageAlt: "Udaipur City Palace overlooking Lake Pichola",
    },
    {
      title: "Day 3 — Gardens, Havelis & a Sunset Boat Ride",
      description:
        "Start at Saheliyon Ki Bari, a small ornamental garden of fountains, marble elephants and lotus pools built for the ladies of the royal court to enjoy without leaving the palace grounds — a genuinely peaceful, shaded stop that most standard itineraries rush past. From there, visit Bagore Ki Haveli, an 18th-century mansion turned folk art museum on the lake's edge, with excellent exhibits on Rajasthani puppetry, costume and traditional musical instruments, and — if your visit coincides with the evening schedule — a folk dance performance staged in the haveli's own courtyard, a lively contrast to the museum's quieter daytime galleries. Close the day with a sunset boat ride on Lake Pichola, drifting past the Lake Palace and City Palace's lakefront façade as the light turns gold, consistently the single most-photographed hour of any Udaipur trip.",
      image: "/images/destinations/udaipur-lake-pichola-boat.webp",
      imageAlt: "Boat ride on Lake Pichola at sunset, Udaipur",
    },
    {
      title: "Day 4 — Monsoon Palace & Departure",
      description:
        "An early start for the Monsoon Palace, perched on a hilltop roughly 5 kilometres outside the city with the best panoramic view over Udaipur, Lake Pichola and the surrounding Aravalli hills anywhere in the region — genuinely worth the early alarm for the cooler morning air and the way the lakes catch the first light. Built in the late 19th century as a royal monsoon retreat, the palace itself is less ornate than the City Palace, but the view from its terraces is the real draw. Return to the city for a final walk through the old town's art galleries and silver workshops, or a last coffee at a rooftop café overlooking the lake, before your private transfer to the airport or railway station for departure. Four days in, most travellers leave calling Udaipur their favourite stop in Rajasthan, a meaningfully different reaction than the rushed single night most itineraries allow for.",
      image: "/images/destinations/udaipur-lake-palace.webp",
      imageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice, twin-sharing",
    "Daily breakfast",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide throughout",
    "Monument entry fees as per itinerary",
    "All applicable hotel and transport taxes",
  ],
  exclusions: [
    "Flights or train tickets to and from Udaipur",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Camera fees at monuments (paid locally)",
    "Folk dance performance ticket at Bagore Ki Haveli, if not included on your visit date (paid locally)",
  ],
  highlights: [
    {
      title: "The City Palace Without Rushing",
      description:
        "A proper full morning rather than the hour most one-night stops allow, including the Crystal Gallery and Peacock Courtyard most itineraries skip past.",
    },
    {
      title: "A Genuine Sunset Boat Ride",
      description:
        "Not a rushed add-on before dinner, but a properly timed evening on Lake Pichola with the palace lights coming on around you.",
    },
    {
      title: "The Monsoon Palace at Dawn",
      description:
        "The best panoramic view over Udaipur and its lakes anywhere in the region, and one almost every shorter itinerary leaves out entirely.",
    },
  ],
  bestTimeToVisit: {
    heading: "September–March is Best",
    note: "Cooler temperatures and clearer lake views make sightseeing and the boat ride genuinely pleasant. April to June turns hot, though Udaipur's lakes make it more bearable than desert cities like Jaisalmer during this period.",
  },
  relatedDestinations: [
    {
      name: "Udaipur",
      tagline: "City of Lakes",
      description: "The Lake Palace floating on Lake Pichola, and the City Palace above it.",
      href: "/destinations/udaipur",
      image: "/images/destinations/udaipur-lake-palace.webp",
      imageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
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
      question: "Is 4 days too long for just Udaipur?",
      answer:
        "Not for most travellers — the City Palace alone easily fills a morning, and once you add the gardens, havelis, a proper sunset boat ride and the Monsoon Palace at dawn, four days feels genuinely well used rather than padded.",
    },
    {
      question: "Is the boat ride worth doing if we've already seen the lake from the shore?",
      answer:
        "Yes — the perspective from the water is genuinely different, and it's the only way to get close to the Lake Palace itself, which isn't open to non-hotel guests otherwise.",
    },
    {
      question: "Is the Monsoon Palace worth the early start?",
      answer:
        "Yes — it offers the single best panoramic view over Udaipur and its lakes anywhere in the region, and the cooler morning air and softer light make the early alarm worthwhile.",
    },
    {
      question: "Can we extend this into a longer Rajasthan trip?",
      answer:
        "Yes — this pairs naturally with the classic Rajasthan Tours circuit or the Rajasthan Culture & Heritage Trail. Let us know your available days and we'll adjust the itinerary accordingly.",
    },
    {
      question: "Is Udaipur a good honeymoon destination compared to other Rajasthan cities?",
      answer:
        "It's consistently the most-requested Rajasthan city for exactly that reason — the lakes, the sunset boat ride, and a noticeably calmer pace than Jaipur or Jodhpur make it the natural pick for couples specifically.",
    },
  ],
  relatedPackages: [
    {
      name: "Rajasthan Tours",
      tagline: "The Classic Circuit · 8 Days",
      description: "Udaipur as the final stop of a wider circuit through Jaipur, Jodhpur and Pushkar.",
      href: "/tours/rajasthan-tours-classic",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Rajasthan Culture & Heritage Trail",
      tagline: "8 Days",
      description: "Combine Udaipur with Jodhpur and Jaisalmer for a deeper heritage-focused route.",
      href: "/tours/rajasthan-culture-heritage-trail",
      image: "/images/destinations/jaisalmer-patwon-ki-haveli.webp",
      imageAlt: "Ornately carved facade of Patwon Ki Haveli, Jaisalmer",
    },
  ],
  draftPendingReview: false,
};
