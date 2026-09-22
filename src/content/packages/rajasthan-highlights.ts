import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * Deliberately the shortest, most condensed Rajasthan package on the site —
 * genuinely distinct from Rajasthan Tours Classic (8 days, 4 cities), Grand
 * Rajasthan Circuit (12 days, 6 cities) and the Culture & Heritage Trail
 * (8 days, desert-focused). This covers only Jaipur and Udaipur for
 * travellers with limited time who still want a real taste of Rajasthan.
 */
export const rajasthanHighlights: PackageContent = {
  slug: "rajasthan-highlights",
  name: "Rajasthan Highlights",
  tagline: "Jaipur & Udaipur in 5 Days",
  metaTitle: "Rajasthan Highlights Tour | Jaipur & Udaipur in 5 Days",
  metaDescription:
    "A condensed 5-day Rajasthan itinerary covering just Jaipur and Udaipur — Amber Fort, City Palace and Lake Pichola — for travellers with limited time.",
  heroImage: "/images/destinations/amber-fort-jaipur.webp",
  heroImageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  heroHeadline: "Rajasthan Highlights: Jaipur & Udaipur",
  heroSubheadline:
    "A condensed 5-day introduction to Rajasthan for travellers with limited time — Jaipur's forts and bazaars, followed by Udaipur's palaces and lakes, without the multi-city circuit a longer trip requires.",
  overview:
    "Not every trip has room for a full 8 or 12-day Rajasthan circuit, and this itinerary is built specifically for travellers who don't have that much time but still want a genuine taste of the state rather than skipping it entirely. Rather than rushing through four or six cities in five days, this trip covers just two — Jaipur and Udaipur — chosen because they're genuinely the most requested individually, and because seeing them properly, rather than passing through six cities at a sprint, gives a far better sense of Rajasthan than a longer, more rushed circuit would in the same amount of time. If your schedule opens up later, Jodhpur, Jaisalmer and Pushkar are all straightforward additions to a return trip.",
  quickFacts: [
    { label: "Duration", value: "5 Days / 4 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Jaipur",
      description:
        "Private transfer from Jaipur airport to your hotel, with the rest of the day free to rest after travelling. In the evening, an easy first outing to one of Jaipur's bazaars or a rooftop restaurant overlooking the old city is a good way to ease into Rajasthan before sightseeing begins in earnest tomorrow, with the Pink City's terracotta-washed buildings taking on a warm glow at dusk. Your guide will confirm the full 5-day plan with you this evening.",
    },
    {
      title: "Day 2 — Jaipur Sightseeing",
      description:
        "A full day exploring the Pink City, so named for the terracotta-pink wash applied to its old city buildings in 1876 to welcome a visiting British prince. Start early at Amber Fort, with the option of a jeep ride up to the entrance, followed by the City Palace complex, still partly home to Jaipur's former royal family, and a photo stop at the honeycomb façade of Hawa Mahal, the Palace of Winds. The evening is left free for Jaipur's bazaars — Johari Bazaar for gemstones and jewellery, Bapu Bazaar for textiles and hand block-printed fabric.",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      title: "Day 3 — Jaipur to Udaipur",
      description:
        "A flight (roughly an hour) or a scenic drive (6 to 7 hours by road, ask your guide about swapping this leg) to Udaipur, widely considered Rajasthan's most romantic city, built around the artificial Lake Pichola. Arriving by evening, an easy first outing along the lake's ghats or a rooftop dinner overlooking the water — with the City Palace and the Lake Palace both lit and reflected on the surface — makes for a memorable first impression before sightseeing begins tomorrow.",
    },
    {
      title: "Day 4 — Udaipur Sightseeing",
      description:
        "A full day exploring Udaipur, starting with the City Palace, a sprawling complex of courtyards, balconies and towers built up by successive Maharanas over roughly 400 years, offering genuinely excellent views over Lake Pichola from its upper terraces. In the afternoon, a boat ride on the lake itself, passing close to the Lake Palace — now a heritage hotel occupying its own small island — before an evening visit to Jagdish Temple, an active Hindu temple a short walk from the palace with detailed carved stonework on its exterior.",
      image: "/images/destinations/udaipur-lake-palace.webp",
      imageAlt: "The Lake Palace on Lake Pichola, Udaipur",
    },
    {
      title: "Day 5 — Departure",
      description:
        "A relaxed final morning in Udaipur, with time for any last-minute shopping in the lanes around Jagdish Temple, known for miniature paintings and Rajasthani handicrafts, before a private transfer to the airport for your onward or international departure flight. Five days in, most travellers describe this as a genuinely satisfying taste of Rajasthan rather than a rushed compromise — proof that a shorter trip doesn't have to mean seeing less of what actually matters, just seeing fewer places properly instead of more places in passing.",
    },
  ],
  inclusions: [
    "1 night in a hotel of your choice in Jaipur",
    "3 nights in a hotel of your choice in Udaipur",
    "Daily breakfast",
    "Domestic flight, Jaipur to Udaipur (or by road, on request)",
    "Private air-conditioned vehicle and English-speaking guide throughout",
    "Boat ride on Lake Pichola",
  ],
  exclusions: [
    "Flights or train tickets to and from Jaipur, and from Udaipur",
    "Monument entry fees at Amber Fort and City Palace (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Genuinely Deserves the Name",
      description:
        "Two cities, seen properly, rather than four or six cities rushed through in the same five days.",
    },
    {
      title: "Rajasthan's Two Most Requested Cities",
      description:
        "Jaipur and Udaipur are consistently the two individual Rajasthan cities travellers ask about most.",
    },
    {
      title: "A Real Starting Point, Not a Compromise",
      description:
        "A genuine, satisfying introduction to Rajasthan for travellers who can extend to a longer circuit another time.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make walking Amber Fort and Udaipur's palace complex genuinely comfortable. April to June turns hot across Rajasthan, and the July–September monsoon brings humidity, though Udaipur's lakes are often at their fullest and most photogenic just after the rains.",
  },
  relatedDestinations: [
    {
      name: "Jaipur",
      tagline: "The Pink City",
      description: "Amber Fort, City Palace, Hawa Mahal and the bazaars of the old walled city.",
      href: "/destinations/jaipur",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Rajasthan",
      tagline: "Land of Kings",
      description: "Forts, palaces and desert citadels across six essential cities.",
      href: "/destinations/rajasthan",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Delhi",
      tagline: "India's Capital",
      description: "Mughal forts, colonial avenues, and the gateway to North India.",
      href: "/destinations/delhi",
      image: "/images/destinations/delhi-india-gate.webp",
      imageAlt: "India Gate at dusk, Delhi",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is 5 days really enough to see Rajasthan?",
      answer:
        "It's enough to see Jaipur and Udaipur properly, which is what this itinerary is built around — it's not meant to cover all of Rajasthan, but to give a genuine, unrushed introduction to its two most requested cities for travellers who can't spare a full 8 to 12-day circuit.",
    },
    {
      question: "Can we add Jodhpur, Jaisalmer or Pushkar to this trip?",
      answer:
        "Yes — this 5-day itinerary is a starting template. Adding any of these extends the trip by 2 to 3 days each; our Rajasthan Tours classic circuit and Grand Rajasthan Circuit both build in the full set if you have more time.",
    },
    {
      question: "Should we fly or drive between Jaipur and Udaipur?",
      answer:
        "Flying saves roughly 5 to 6 hours and is the more practical choice for a short trip like this one, though driving lets you see the countryside if you'd prefer. We'll ask about your preference when confirming the itinerary.",
    },
    {
      question: "Why Jaipur and Udaipur specifically, rather than other combinations?",
      answer:
        "They're consistently the two individual Rajasthan cities international travellers ask about most, and they pair well precisely because they're different from each other — Jaipur's forts and bustling bazaars, Udaipur's lake-centred, more romantic pace.",
    },
    {
      question: "Is this itinerary suitable for a honeymoon?",
      answer:
        "Yes, genuinely well suited — Udaipur in particular is widely considered Rajasthan's most romantic city, and many couples specifically request this shorter Jaipur-and-Udaipur combination over a longer multi-city circuit.",
    },
  ],

  relatedPackages: [
    {
      name: "Rajasthan Tours",
      tagline: "The Classic Circuit · 8 Days",
      description: "The fuller Rajasthan circuit, adding Jodhpur and Pushkar to Jaipur and Udaipur.",
      href: "/tours/rajasthan-tours-classic",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Rajasthan Culture & Heritage Trail",
      tagline: "A Genuinely Different Route · 8 Days",
      description: "A desert-focused alternative skipping Jaipur for Jodhpur, Jaisalmer and Udaipur instead.",
      href: "/tours/rajasthan-culture-heritage-trail",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Grand Rajasthan Circuit",
      tagline: "All Six Essential Cities · 12 Days",
      description: "The complete Rajasthan circuit, adding Ranthambore and Jaisalmer for travellers with more time.",
      href: "/tours/grand-rajasthan-circuit",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],

  draftPendingReview: false,
};
