import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Dhruv must verify: startingPrice, itinerary details, inclusions/exclusions,
 * and hotel category before removing `draftPendingReview`.
 */
export const rajasthanTours: PackageContent = {
  slug: "rajasthan-tours",
  name: "Rajasthan Tours",
  tagline: "Land of Kings",
  metaTitle: "Rajasthan Tour Packages | Jaipur, Jodhpur, Udaipur & Pushkar",
  metaDescription:
    "A private 8-day Rajasthan tour through Jaipur, Jodhpur, Udaipur and Pushkar — forts, palaces and desert citadels across the land of kings.",
  heroImage: "/images/destinations/amber-fort-jaipur.webp",
  heroImageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  heroHeadline: "Rajasthan: Forts, Palaces & the Desert",
  heroSubheadline:
    "An 8-day private circuit through Jaipur, Jodhpur, Udaipur and Pushkar — the essential introduction to Rajasthan's forts, lakes, and desert citadels.",
  overview:
    "Rajasthan — the 'Land of Kings' — is India's most-requested single-state itinerary among international travellers, and for good reason: nowhere else in the country packs this density of hilltop forts, royal palaces, lakeside cities, and desert culture into one comfortable driving circuit. This 8-day private Rajasthan tour package moves through Jaipur (the Pink City), Jodhpur (the Blue City), Udaipur (the City of Lakes) and the holy town of Pushkar, with an English-speaking guide and private vehicle throughout — the standard way experienced tour operators route first-time and repeat visitors through the state.",
  quickFacts: [
    { label: "Duration", value: "8 Days / 7 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "₹65,000 / person*" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  startingPrice: 65000,
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Jaipur",
      description:
        "Private transfer from Jaipur airport or railway station straight to your hotel, so your first hours in Rajasthan aren't spent working out local transport after a long journey. Evening free, with an optional rooftop dinner overlooking the old walled city as the sun sets over its pink-washed rooftops — a gentle, low-key introduction to Rajasthan before the sightseeing pace picks up tomorrow. Many international travellers find this first quiet evening genuinely helps with jet lag, and your guide is on hand if you'd simply like recommendations for a nearby restaurant or a short walk instead of a formal outing. It's also a good time to confirm the week's plan with your guide and flag any preferences before the circuit begins.",
    },
    {
      title: "Day 2 — Jaipur Sightseeing",
      description:
        "Amber Fort in the morning — Rajasthan's most-photographed hilltop fort, built from pale yellow and pink sandstone, with the option of a jeep ride up to the entrance for those who'd rather skip the walk in the heat. From there, the City Palace complex (still partly occupied by Jaipur's former royal family), the Jantar Mantar astronomical observatory — a UNESCO World Heritage Site of giant stone instruments still used to track celestial movements — and Hawa Mahal's honeycomb façade for photographs. The afternoon is free for Jaipur's famed jewellery, textile and block-print bazaars, a highlight for travellers hoping to bring home something distinctly Rajasthani.",
    },
    {
      title: "Day 3 — Jaipur to Jodhpur",
      description:
        "A private, air-conditioned drive west to Jodhpur, the Blue City, instantly recognisable for the indigo-washed houses clustered beneath its towering fort (around 5–6 hours, with a comfortable rest stop en route). The drive itself is part of the experience — passing through rural Rajasthan's villages, farmland and roadside dhabas (local eateries) that most package tours drive straight past. On arrival, the evening is free to explore the lanes of the old city below Mehrangarh, where blue houses, spice shops and rooftop cafés make for an easy, atmospheric first wander before the next day's sightseeing. Your guide can also point you toward a good spot for a first taste of Rajasthani thali if you'd like dinner recommendations.",
    },
    {
      title: "Day 4 — Jodhpur Sightseeing",
      description:
        "A full morning at Mehrangarh Fort — one of India's largest and best-preserved forts, rising 400 feet above the city on a sheer rocky outcrop, with museum galleries covering Rajput weaponry, royal palanquins and textiles. Afterwards, Jaswant Thada, a white marble cenotaph often nicknamed the 'Taj Mahal of Marwar' for its intricate carved lattice work, followed by a walk through the blue-painted lanes of the old city below. Your guide points out why the houses are painted blue — originally a Brahmin caste marker, now a citywide aesthetic — and other local details easy to miss without local context. The afternoon is left unhurried, so you can linger at whichever stop interests you most.",
    },
    {
      title: "Day 5 — Jodhpur to Udaipur via Ranakpur",
      description:
        "Drive south toward Udaipur, breaking the journey at Ranakpur, home to one of India's most intricately carved Jain temple complexes — over 1,400 individually sculpted marble pillars, no two exactly alike, set in a peaceful forested valley. It's a stop many standard tours skip entirely, but one that consistently surprises first-time visitors with its scale and craftsmanship. Continuing on, you'll arrive in Udaipur by early evening, with time to settle into your hotel before dinner — many properties here offer lake-facing rooms, so ask your guide about room options with a view if that matters to you. The change in scenery from Jodhpur's desert stone to Udaipur's lakes is often the most noticeable shift of the whole trip.",
    },
    {
      title: "Day 6 — Udaipur Sightseeing",
      description:
        "Udaipur, the 'City of Lakes' and often called the most romantic city in India, built around artificial lakes ringed by hills and palaces. Visit the sprawling City Palace complex — a series of connected palaces built over nearly 400 years — and the ornately carved Jagdish Temple nearby, before an evening sunset boat ride on Lake Pichola, with views of the Lake Palace floating at its centre (now a luxury hotel, once a royal summer retreat). This is consistently one of the most-photographed evenings of the entire Rajasthan circuit, and a fitting reason Udaipur features on so many international travellers' must-see lists.",
    },
    {
      title: "Day 7 — Udaipur to Pushkar",
      description:
        "Drive to Pushkar, a small pilgrimage town built around a sacred lake, said in Hindu mythology to have formed where a lotus petal fell from Lord Brahma's hand. Pushkar is home to one of the very few temples in India dedicated to Brahma the Creator, despite his prominence in Hindu cosmology. In the evening, join the arti (prayer ceremony) held at the lakeside ghats, with oil lamps, chanting and marigold offerings — a smaller, more intimate version of the ceremonies held in Varanasi, and a peaceful close to a day of driving through Rajasthan's desert landscape. The town's relaxed, low-key pace makes it a welcome change after several days of more structured sightseeing.",
    },
    {
      title: "Day 8 — Pushkar to Jaipur, Departure",
      description:
        "A morning visit to the Brahma Temple and a final walk around Pushkar's lakeside ghats and market stalls, known for silver jewellery, leather goods and semi-precious stones, before driving back to Jaipur for your onward or international departure flight. This closes out an 8-day circuit that covers four distinct faces of Rajasthan — pink-city grandeur, blue-city forts, lakeside romance, and small-town pilgrimage — giving international travellers a genuinely varied picture of the state rather than a single repeated formula of fort-palace-fort. Your guide remains available right up to drop-off in case your flight is delayed or plans shift at the last minute.",
    },
  ],
  inclusions: [
    "7 nights in hotels of your choice, twin-sharing",
    "Daily breakfast",
    "Private air-conditioned vehicle for the full circuit",
    "English-speaking guide throughout",
    "Monument entry fees as per itinerary",
    "All applicable hotel and transport taxes",
  ],
  exclusions: [
    "International and domestic flights — booked only on request",
    "Visa fees",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Camera fees at monuments (paid locally)",
  ],
  highlights: [
    {
      title: "Four Cities, One Circuit",
      description:
        "Jaipur, Jodhpur, Udaipur and Pushkar each have a distinct character — pink sandstone, blue lanes, lakeside palaces, and a holy desert town.",
    },
    {
      title: "Heritage Hotels Available",
      description:
        "Many of our Rajasthan routes can be booked into converted havelis and palace hotels rather than standard chains, on request.",
    },
    {
      title: "Comfortable Driving Distances",
      description:
        "The route is sequenced to keep single travel days under 6 hours, with sightseeing stops built into the longer drives.",
    },
  ],
  faqs: [
    {
      question: "Is this trip suitable for families with children?",
      answer:
        "Yes — the pace is moderate and the route is one of our most-booked family itineraries. We can adjust sightseeing time and add rest days if needed.",
    },
    {
      question: "Can we skip Pushkar and add extra time elsewhere?",
      answer:
        "Yes, every itinerary here is a starting template — tell us what matters most to you and we'll rebalance the days accordingly.",
    },
    {
      question: "Is the price per person fixed?",
      answer:
        "The figure shown is a starting estimate for twin-sharing — the final quote depends on your travel dates, group size, and the hotel category you choose. We'll confirm exact pricing once we know your dates and hotel preference.",
    },
  ],
  relatedPackages: [
    {
      name: "Golden Triangle Tours",
      tagline: "Delhi – Agra – Jaipur",
      description: "The classic shorter route, pairing well as a lead-in before Rajasthan.",
      href: "/packages/golden-triangle-tours",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Wildlife Tours",
      tagline: "Tiger Safaris",
      description: "Add Ranthambore or Sariska's tiger reserves onto your Rajasthan route.",
      href: "/packages/wildlife-tours",
      image: "/images/destinations/ranthambore-tiger.webp",
      imageAlt: "Wild tiger at Ranthambore National Park",
    },
  ],
  draftPendingReview: true,
};
