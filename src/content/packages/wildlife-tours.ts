import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Dhruv must verify: startingPrice, itinerary details, inclusions/exclusions,
 * and hotel category before removing `draftPendingReview`.
 */
export const wildlifeTours: PackageContent = {
  slug: "wildlife-tours",
  name: "Wildlife Tours",
  tagline: "Tiger Safaris",
  metaTitle: "India Wildlife & Tiger Safari Tour Packages | Ranthambore & Sariska",
  metaDescription:
    "A private 6-day wildlife tour combining Ranthambore and Sariska tiger reserves with Jaipur — jeep safaris, forest landscapes, and Rajasthan's two best-known parks.",
  heroImage: "/images/destinations/ranthambore-tiger.webp",
  heroImageAlt: "Wild tiger at Ranthambore National Park",
  heroHeadline: "Tiger Safaris: Ranthambore & Sariska",
  heroSubheadline:
    "A 6-day private wildlife circuit combining two of Rajasthan's best tiger reserves with the forts of Jaipur in between.",
  overview:
    "For international travellers seeking a tiger safari in India, Ranthambore is the single most-recommended national park — a former royal hunting ground with some of the country's best wild tiger sighting odds, set among ruined pavilions and a 10th-century fort. This 6-day wildlife tour package pairs Ranthambore with Sariska, a second, quieter tiger reserve, connected by Jaipur, so you get two distinct safari experiences rather than repeating the same park twice.",
  quickFacts: [
    { label: "Duration", value: "6 Days / 5 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "₹55,000 / person*" },
    { label: "Best Season", value: "Oct – Apr" },
  ],
  startingPrice: 55000,
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Delhi, on to Ranthambore",
      description:
        "Arrive in Delhi and transfer directly to Ranthambore by road or overnight train, one of India's most celebrated tiger reserves and a former royal hunting ground of the Maharajas of Jaipur. The journey itself passes through rural Rajasthan, giving international travellers an early, unfiltered look at village life well before the safaris begin. Arriving in the evening leaves you rested and ready for an early safari start the next morning — safari vehicles typically depart before sunrise, when tigers and other wildlife are most active, so a good night's sleep on arrival genuinely matters for this trip. Your naturalist guide will brief you on what to expect and what to bring for the safaris ahead.",
    },
    {
      title: "Day 2 — Ranthambore Safaris",
      description:
        "Morning and afternoon jeep safaris into Ranthambore National Park, widely considered one of the best places on Earth to see wild Bengal tigers in their natural habitat, set against a striking backdrop of lakes, ravines and the ruined 10th-century Ranthambore Fort rising above the forest canopy. Each safari is led by a naturalist guide trained to read pug marks, alarm calls from deer and langurs, and other signs that improve your chances of a genuine sighting — not just a driver following a fixed loop. Beyond tigers, the park is also home to leopards, sloth bears, marsh crocodiles and over 300 recorded bird species.",
    },
    {
      title: "Day 3 — Ranthambore to Jaipur",
      description:
        "One final early-morning safari to maximise your sighting chances before checking out, then a private, air-conditioned drive to Jaipur (around 3–4 hours). The afternoon is left free for rest after two intensive safari days, or an optional City Palace visit for travellers who'd like to shift gears from wildlife-spotting to Rajasthan's royal history and architecture. Many guests use this half-day to catch up on photo editing, laundry, or simply decompress before the second half of the safari circuit begins at Sariska the following day. It's a deliberately gentler day sandwiched between two more active ones, and a useful buffer if an earlier safari ran late.",
    },
    {
      title: "Day 4 — Jaipur to Sariska",
      description:
        "Drive to Sariska Tiger Reserve, a smaller and considerably less-visited park than Ranthambore, known for its landmark tiger reintroduction programme after the local population was locally extinct in the mid-2000s — a genuine conservation success story international visitors often find as compelling as the wildlife itself. The reserve is also scattered with ancient temple ruins and a historic hunting lodge within the forest, a reminder that this was once the private game reserve of the Alwar royal family. The lower visitor numbers here mean a noticeably quieter, less crowded safari experience than Ranthambore's more popular zones, which many guests actually prefer.",
    },
    {
      title: "Day 5 — Sariska Safari, back to Jaipur",
      description:
        "A morning jeep safari through Sariska's mixed forest and grassland habitat, home to tigers, leopards, striped hyenas, and a healthy population of sambar and chital deer. Afterwards, return to Jaipur for the evening, with an optional Amber Fort visit worked in for anyone who hasn't seen Rajasthan's most iconic hilltop fort yet. This flexible half-day is a good opportunity to combine the trip's wildlife focus with at least one taste of Rajasthan's cultural sights, rather than a purely safari-only itinerary. Your guide can also arrange a farewell dinner recommendation for your last evening in Rajasthan, capping off the safari leg of the trip on a relaxed note.",
    },
    {
      title: "Day 6 — Departure",
      description:
        "Private transfer to Jaipur airport for your onward or international departure flight, closing out this 6-day India tiger safari itinerary. If your flight timing allows, your guide can suggest a final stop — a last look at Jaipur's bazaars, a coffee stop, or simply a relaxed morning — before you head to the airport. Travellers who'd like to extend the wildlife theme further sometimes add on Bandhavgarh or Kaziranga, India's other two most-recommended parks, as a follow-on trip. We're happy to help plan that extension whenever you're ready for a return visit, and can advise honestly on which park best fits your remaining time and interests.",
    },
  ],
  inclusions: [
    "5 nights in wildlife lodges and hotels, twin-sharing",
    "Daily breakfast",
    "4 jeep safaris (2 each at Ranthambore and Sariska), shared jeep",
    "Private air-conditioned vehicle for all road transfers",
    "English-speaking naturalist guide on safaris",
    "National park entry and safari permit fees",
  ],
  exclusions: [
    "International and domestic flights — booked only on request",
    "Visa fees",
    "Lunches and dinners (unless noted)",
    "Private (non-shared) jeep upgrade, if requested",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "No Sighting Guarantees, Honest Odds",
      description:
        "We won't promise a tiger sighting — no operator honestly can — but Ranthambore has some of the best sighting odds of any Indian reserve.",
    },
    {
      title: "Two Parks, Two Characters",
      description:
        "Ranthambore's fort-backed lakes and Sariska's temple ruins give this trip more variety than a single-park safari.",
    },
    {
      title: "Naturalist-Led Safaris",
      description:
        "Safaris are led by naturalist guides, not just drivers, who can read tracks and behaviour to improve sighting chances.",
    },
  ],
  faqs: [
    {
      question: "Are tiger sightings guaranteed?",
      answer:
        "No reputable operator can guarantee a sighting — tigers are wild animals. Ranthambore has strong sighting odds, and two safaris there meaningfully improve your chances.",
    },
    {
      question: "Can we upgrade to a private (non-shared) jeep?",
      answer:
        "Yes, private jeeps are available at an extra cost — let us know when booking and we'll quote the difference.",
    },
    {
      question: "Is the price per person fixed?",
      answer:
        "The figure shown is a starting estimate for twin-sharing with shared safari jeeps — the final quote depends on your travel dates, group size, and any jeep upgrade. We'll confirm exact pricing once we know your dates.",
    },
  ],
  relatedPackages: [
    {
      name: "Rajasthan Tours",
      tagline: "Land of Kings",
      description: "Combine tiger safaris with the forts and lakes of the classic Rajasthan circuit.",
      href: "/packages/rajasthan-tours",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Golden Triangle Tours",
      tagline: "Delhi – Agra – Jaipur",
      description: "Add a wildlife extension onto the classic first-time route.",
      href: "/packages/golden-triangle-tours",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
  ],
  draftPendingReview: true,
};
