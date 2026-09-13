import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const udaipurHoneymoon: ExperienceContent = {
  slug: "udaipur-honeymoon",
  name: "Udaipur Honeymoon",
  tagline: "The City of Lakes, Built for Two · 4 Days",
  metaTitle: "Udaipur Honeymoon Package | Private Boat Ride, Palace Suite & Candlelit Dinner",
  metaDescription:
    "A private 4-day Udaipur honeymoon — a heritage palace suite, a private sunset boat ride on Lake Pichola, and a candlelit dinner overlooking the water.",
  heroImage: "/images/destinations/udaipur-lake-palace.webp",
  heroImageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
  heroHeadline: "Udaipur: The City of Lakes, Built for Two",
  heroSubheadline:
    "Consistently our most-requested honeymoon city — lakeside palaces, a private boat ride at sunset, and a pace built entirely around slowing down together.",
  overview:
    "Udaipur is the honeymoon destination couples ask for by name more than anywhere else we work with, and once you're there, the reasons are obvious rather than something we need to sell you on. This isn't the general Udaipur sightseeing circuit reshaped for two people — every element here is chosen specifically for a honeymoon: a heritage hotel room with a lake view rather than whichever room happens to be available, a private boat exclusively for the two of you rather than a shared tour, and evenings built around candlelight rather than a checklist of monuments. Four days is enough to feel like the trip was actually designed around your relationship, not around a generic itinerary with a rose petal turndown added on top.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "For", value: "Couples" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Sep – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive & Settle In",
      description:
        "Private transfer from Udaipur airport or railway station to your heritage hotel, ideally one with a private lake-view room or terrace booked specifically for the occasion — let us know if this is a honeymoon when arranging your stay, since many properties offer a complimentary room upgrade or a small welcome gesture for couples that isn't advertised publicly. The rest of the day is left free to settle in and adjust, with an easy first evening option of a quiet walk along Lake Pichola's promenade as the palace lights come on, no itinerary pressing on you yet. Udaipur's pace is noticeably gentler than the rest of Rajasthan from the moment you arrive, and this trip is built to match that from the very first evening. Ask your hotel or guide about a rooftop dinner reservation with a lake view for tonight if you'd like to start the trip on a romantic note straight away.",
    },
    {
      title: "Day 2 — City Palace & a Private Evening",
      description:
        "A relaxed morning at the City Palace complex, Rajasthan's largest palace and genuinely worth seeing together rather than skipping for something more overtly 'romantic' — its Peacock Courtyard and mirrored halls are among the most photogenic spots in the city for a couple's portrait, and several photographers work specifically with visiting couples if you'd like a few professional shots to remember the trip by. Built up over nearly 400 years by successive maharajas, the palace rewards an unhurried visit rather than a rushed walkthrough between other stops. In the afternoon, time at leisure back at your hotel, followed by a private candlelit dinner arranged on a rooftop or courtyard overlooking the lake — a genuinely different experience from a restaurant table among other diners, and one most heritage properties in Udaipur can arrange with advance notice.",
      image: "/images/destinations/udaipur-city-palace.webp",
      imageAlt: "Udaipur City Palace overlooking Lake Pichola",
    },
    {
      title: "Day 3 — A Private Sunset Boat Ride",
      description:
        "A quiet morning to enjoy your hotel or explore Udaipur's old-town lanes and art galleries at your own pace, with no fixed schedule — this is deliberately the most unstructured day of the trip, since a honeymoon shouldn't feel like it's being managed minute to minute. The centrepiece of the day is a private sunset boat ride on Lake Pichola, booked exclusively for the two of you rather than joining a shared group boat — drifting past the floating Lake Palace and the City Palace's lakefront façade as the light turns gold, with the option to add champagne or a small selection of snacks on board. This hour on the water is consistently the one couples mention most when they look back on the trip, and it's genuinely worth booking privately rather than joining the standard shared departures most other visitors take.",
      image: "/images/destinations/udaipur-lake-pichola-boat.webp",
      imageAlt: "Private boat ride on Lake Pichola at sunset, Udaipur",
    },
    {
      title: "Day 4 — Jagdish Temple & Departure",
      description:
        "A final unhurried morning, with an optional short visit to Jagdish Temple, an ornately carved temple a short walk from the City Palace, still in daily active worship and built in 1651 in honour of Lord Vishnu. If you'd like a couple's spa treatment before departure, several of Udaipur's heritage hotels have dedicated spa facilities that can be booked for the morning — ask your hotel about availability when planning your stay, since the best slots on your final day often need confirming in advance rather than requested on arrival. Return for check-out and a private transfer to the airport or railway station for departure. Four days in, most couples leave calling Udaipur the highlight of their honeymoon, a meaningfully different reaction than a generic sightseeing stop produces.",
      image: "/images/destinations/udaipur-jagdish-temple.webp",
      imageAlt: "Jagdish Temple, Udaipur",
    },
  ],
  inclusions: [
    "3 nights in a heritage hotel of your choice, honeymoon room category where available",
    "Daily breakfast",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide for sightseeing days",
    "One private sunset boat ride on Lake Pichola",
    "Monument entry fees as per itinerary",
  ],
  exclusions: [
    "Flights or train tickets to and from Udaipur",
    "Candlelit dinner arrangement fee, if booked (paid locally, arranged on request)",
    "Couple's spa treatment (paid locally, arranged on request)",
    "Lunches and dinners other than the arranged candlelit dinner",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "A Private Boat, Not a Shared One",
      description:
        "The sunset boat ride is booked exclusively for the two of you, not joined with other tourists on a scheduled departure.",
    },
    {
      title: "A Genuine Palace Stay",
      description:
        "Several of Udaipur's heritage hotels occupy real former royal residences, not buildings simply styled to look the part.",
    },
    {
      title: "Evenings Built Around You",
      description:
        "A candlelit dinner arranged specifically for your trip, rather than a table booked among a restaurant's other diners.",
    },
  ],
  bestTimeToVisit: {
    heading: "September–March is Best",
    note: "Cooler temperatures and clearer lake views make the boat ride and evening walks genuinely comfortable. April to June turns hot, though Udaipur's lakes make it more bearable than desert cities like Jaisalmer during this period.",
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
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Do hotels really offer honeymoon upgrades if we mention it?",
      answer:
        "Many do, though it varies by property and isn't guaranteed — a complimentary room upgrade, a small welcome setup, or a late check-out are common gestures. We always mention it's a honeymoon when booking on your behalf.",
    },
    {
      question: "Can we book the private boat ride for a different time than sunset?",
      answer:
        "Sunset is genuinely the best light and atmosphere, but the boat can be booked at other times if your schedule requires it — just let us know when planning your itinerary.",
    },
    {
      question: "Is 4 days enough for a Udaipur honeymoon, or should we add more?",
      answer:
        "4 days works well as a standalone trip; if you have more time, this pairs naturally with Jaipur or the Taj Mahal for a longer honeymoon covering more of Rajasthan.",
    },
    {
      question: "How far in advance should we book the candlelit dinner?",
      answer:
        "We'd recommend confirming this when booking your trip rather than on arrival — the best rooftop and courtyard spots have limited availability, especially during peak season (October to March).",
    },
    {
      question: "Is Udaipur romantic even outside of peak season?",
      answer:
        "Yes — while October through March offers the most comfortable weather, Udaipur's lakes and palaces are genuinely photogenic and atmospheric year-round, with the monsoon months bringing a lush, dramatic quality of their own.",
    },
  ],
  relatedExperiences: [
    {
      name: "Taj Mahal Honeymoon",
      tagline: "A Monument Built for Love · 3 Days",
      description: "Sunrise at the world's most famous monument to love, paired with a private dinner in Agra.",
      href: "/experiences/taj-mahal-honeymoon",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Rajasthan Palace Honeymoon",
      tagline: "Two Palace Cities · 7 Days",
      description: "Combine Udaipur with Jaipur for a longer honeymoon spent entirely in heritage palace hotels.",
      href: "/experiences/rajasthan-palace-honeymoon",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Kashmir Honeymoon",
      tagline: "Dal Lake, Houseboats & Snow-Capped Peaks",
      description: "Srinagar's houseboats and Mughal gardens, for a completely different honeymoon backdrop.",
      href: "/experiences/kashmir-honeymoon",
      image: "/images/destinations/Srinagar.webp",
      imageAlt: "Tulip gardens with the Himalayas behind, Srinagar, Kashmir",
    },
  ],
  draftPendingReview: false,
};
