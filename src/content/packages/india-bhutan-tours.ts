import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * A genuinely combined circuit, not the Golden Triangle Classic and Bhutan
 * Tours concatenated. The India leg drops the standalone departure day
 * (continuing onward to Bhutan instead, via a direct Delhi–Paro flight,
 * so no Nepal stopover is required), and the Bhutan leg drops Gangtey to
 * keep the combined trip to a realistic 11 days; Gangtey is offered as an
 * extension in the FAQs.
 */
export const indiaBhutanTours: PackageContent = {
  slug: "india-bhutan-tours",
  name: "India & Bhutan Tours",
  tagline: "The Golden Triangle & the Tiger's Nest",
  metaTitle: "India & Bhutan Tour Package | Delhi, Agra, Jaipur & Thimphu",
  metaDescription:
    "A private 11-day circuit through India's Golden Triangle and Bhutan — the Taj Mahal, Jaipur's forts, Thimphu's dzongs, and the cliffside Tiger's Nest, on a direct Delhi–Paro flight.",
  heroImage: "/images/destinations/paro-taktsang-tigers-nest.webp",
  heroImageAlt: "Paro Taktsang, the Tiger's Nest Monastery, Bhutan",
  heroHeadline: "India & Bhutan: The Golden Triangle & the Tiger's Nest",
  heroSubheadline:
    "An 11-day circuit connecting India's most iconic monuments with Bhutan's fortress-monasteries — Delhi, Agra and Jaipur, followed by Thimphu, Punakha and Paro, on a direct flight with no Nepal stopover required.",
  overview:
    "India's Golden Triangle and Bhutan run on almost opposite tourism models — India open and easy to move through independently, Bhutan deliberately restricted, guided and priced to limit visitor numbers by policy. Direct flights between Delhi and Paro mean the two combine naturally without routing through a third country, and this circuit is built specifically around that connection: five days covering Delhi, Agra and Jaipur, then a direct flight into Bhutan for the fortress-monasteries of Thimphu and Punakha and the cliffside hike to Paro's Tiger's Nest. Rather than combining the full 6-day Golden Triangle Classic and 8-day Bhutan Tours itineraries back to back, this circuit trims the India leg to flow directly into the Bhutan flight and drops Bhutan's Gangtey valley extension, keeping the whole trip to a realistic 11 days.",
  quickFacts: [
    { label: "Duration", value: "11 Days / 10 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Delhi",
      description:
        "On arrival at Indira Gandhi International Airport, your private guide and driver meet you at the terminal for a hassle-free transfer to your hotel in Delhi. The rest of the day is left free to rest and adjust after a long international flight, with an optional evening orientation walk through a nearby market to ease gently into the city before sightseeing begins tomorrow. Your guide will also confirm the full 11-day plan with you this evening, including the direct flight to Bhutan partway through the trip.",
    },
    {
      title: "Day 2 — Delhi Sightseeing",
      description:
        "A full-day private tour of both Old and New Delhi, covering the city's Mughal and colonial layers in a single comfortable day. In Old Delhi: Humayun's Tomb, the elegant red-sandstone precursor to the Taj Mahal, the Jama Masjid mosque, and a cycle-rickshaw ride through the packed lanes of Chandni Chowk. In New Delhi: the wide colonial-era avenues around India Gate and the government quarter surrounding Rashtrapati Bhavan. Your English-speaking guide narrates the history throughout, translating the sensory overload of Old Delhi's markets into something easier to navigate.",
      image: "/images/destinations/delhi-india-gate.webp",
      imageAlt: "India Gate at dusk, Delhi",
    },
    {
      title: "Day 3 — Delhi to Agra",
      description:
        "A scenic 3 to 4-hour private drive south to Agra, home of the Taj Mahal. After checking into your hotel, visit Agra Fort, a red sandstone UNESCO World Heritage Site and the Mughal seat of power before the capital moved to Delhi, walking the same ramparts where Emperor Shah Jahan was reportedly imprisoned by his own son. In the evening, head to the Mehtab Bagh gardens across the river for an uncrowded view of the Taj Mahal at sunset.",
      image: "/images/destinations/agra-fort.webp",
      imageAlt: "Agra Fort's red sandstone ramparts",
    },
    {
      title: "Day 4 — Taj Mahal Sunrise, on to Jaipur",
      description:
        "Enter the Taj Mahal at opening hour for sunrise, for softer light, cooler temperatures and the thinnest crowds of the day. Your guide will point out details easy to miss alone: the pietra dura stone inlay work, and the deliberate symmetry designed to be viewed from the main gateway. Afterwards, drive toward Jaipur, breaking the journey at Fatehpur Sikri, the abandoned Mughal capital built entirely from red sandstone and deserted within a single generation due to water shortages.",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      title: "Day 5 — Jaipur Sightseeing",
      description:
        "A full day exploring the Pink City, so named for the terracotta-pink wash applied to its old city buildings in 1876 to welcome a visiting British prince. Start early at Amber Fort, followed by the City Palace complex, still partly home to Jaipur's former royal family, the Jantar Mantar astronomical observatory, and a photo stop at Hawa Mahal's honeycomb façade. The evening is left free for Jaipur's bazaars — Johari Bazaar for gemstones and jewellery, Bapu Bazaar for textiles — before flying onward to Bhutan tomorrow.",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      title: "Day 6 — Jaipur to Delhi, Direct Flight to Paro",
      description:
        "A drive back to Delhi (roughly 5.5 to 6 hours, or a short domestic flight if you'd prefer to save the driving time) to connect with a direct flight to Paro, Bhutan — one of the most dramatic commercial airport approaches in the world, threading between Himalayan peaks on the final descent. Private transfer roughly an hour to Thimphu, Bhutan's capital and the only national capital anywhere in the world without a single traffic light. The contrast with the Golden Triangle is immediate: quieter streets, far fewer visitors, and a noticeably different, more deliberate pace. The rest of the day is free to rest and adjust to the altitude.",
    },
    {
      title: "Day 7 — Thimphu Sightseeing",
      description:
        "A full day in Thimphu, starting with Tashichho Dzong, a whitewashed fortress-monastery on the Wang Chhu river that houses the throne room of the King of Bhutan alongside its continued role as a monastic centre. Visit the Buddha Dordenma, a 51-metre bronze Buddha statue overlooking the entire valley, and the National Memorial Chorten, a constantly circumambulated stupa built in memory of Bhutan's third king. In the afternoon, the weekend handicrafts market and the National Institute for Zorig Chusum, where students train in Bhutan's traditional arts, offer a good sense of Bhutanese culture beyond the monuments.",
      image: "/images/destinations/thimphu-tashichho-dzong.webp",
      imageAlt: "Tashichho Dzong, Thimphu, Bhutan",
    },
    {
      title: "Day 8 — Thimphu to Punakha via Dochula Pass",
      description:
        "A roughly 3-hour drive to Punakha, Bhutan's former capital, crossing the Dochula Pass at 3,100 metres, marked by 108 memorial chortens built in a neat arrangement and, on a clear day, a spectacular panorama of the eastern Himalayan range including several peaks over 7,000 metres. The road descends from the pass into a noticeably warmer, subtropical valley, a striking contrast in the space of a single drive. Arrive in Punakha by early afternoon with time to settle in ahead of tomorrow's sightseeing.",
    },
    {
      title: "Day 9 — Punakha Sightseeing",
      description:
        "A full day centred on Punakha Dzong, widely considered the most beautiful dzong in Bhutan, built at the confluence of two rivers — the Pho Chhu and Mo Chhu — and reached by crossing a traditional wooden cantilever bridge. The dzong served as Bhutan's capital until the 1950s and remains the winter residence of the country's central monastic body today. In the afternoon, walk Punakha's suspension bridge, one of the longest in the country, and visit Chimi Lhakhang, a fertility temple reached through rice paddies from the main road.",
      image: "/images/destinations/punakha-dzong-autumn.webp",
      imageAlt: "Punakha Dzong in autumn, Bhutan",
    },
    {
      title: "Day 10 — Punakha back to Paro",
      description:
        "A roughly 4 to 5-hour drive back over the Dochula Pass a second time, often with different weather and light than the first crossing, on to Paro. The Paro valley is Bhutan's most fertile, with terraced rice paddies running down to the Paro Chhu river; the small town itself, easily walkable, holds Rinpung Dzong, another working fortress-monastery, and the National Museum housed in the round Ta Dzong watchtower above it. The evening is left free to rest ahead of tomorrow's hike, genuinely the most physically demanding day of the trip.",
      image: "/images/destinations/paro-rinpung-dzong-valley-airport.webp",
      imageAlt: "Rinpung Dzong overlooking the Paro valley, Bhutan",
    },
    {
      title: "Day 11 — Tiger's Nest Monastery & Departure",
      description:
        "An early start for the hike to Paro Taktsang, the Tiger's Nest Monastery, built into a sheer cliff face 900 metres above the valley floor, according to legend at the site where Guru Rinpoche flew on the back of a tigress to meditate. The hike takes roughly 2 to 3 hours each way at a moderate pace, with a viewpoint cafeteria roughly halfway up offering a rest stop; mules are available for part of the ascent for travellers who'd prefer not to walk the entire way. A private transfer to Paro airport follows for your onward or international departure flight, eleven days across two countries behind you — India's Mughal monuments and Rajasthani forts, followed by Bhutan's fortress-monasteries and cliffside monastery.",
    },
  ],
  inclusions: [
    "5 nights in hotels of your choice in India (Delhi, Agra & Jaipur), twin-sharing",
    "5 nights in hotels of your choice in Bhutan (Thimphu, Punakha & Paro), twin-sharing",
    "Daily breakfast in India; all meals in Bhutan (standard in Bhutan's tourism model)",
    "Bhutan Sustainable Development Fee for the duration of your stay",
    "Direct flight, Delhi to Paro",
    "Private air-conditioned vehicle and English-speaking guide throughout both countries",
    "All monument entry fees in India as per itinerary",
  ],
  exclusions: [
    "International flights to Delhi and from Paro",
    "Bhutan visa fee (arranged in advance through your licensed operator)",
    "Lunches and dinners in India (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Mule hire for the Tiger's Nest hike, if used (paid locally, arranged on request)",
  ],
  highlights: [
    {
      title: "A Direct Flight, No Nepal Stopover Needed",
      description:
        "Delhi and Paro connect directly, meaning this combination works without routing through a third country.",
    },
    {
      title: "Two Opposite Tourism Models in One Trip",
      description:
        "India's open, independent pace and Bhutan's deliberately restricted, guided approach make for a genuine contrast.",
    },
    {
      title: "The Tiger's Nest, Properly Timed",
      description:
        "Placed on the final day when you're already acclimatised, rather than rushed on arrival, giving the hike its best chance of being enjoyable.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make sightseeing genuinely comfortable across both countries. Spring (March–May) also works well for Bhutan specifically, with blooming rhododendrons along the Dochula Pass. April to June turns hot across North India, and the June–September monsoon brings heavy rain to both countries and frequently obscures the Himalayan views this itinerary is partly built around.",
  },
  relatedDestinations: [
    {
      name: "Delhi",
      tagline: "India's Capital",
      description: "Mughal forts, colonial avenues, and the gateway to North India.",
      href: "/destinations/delhi",
      image: "/images/destinations/delhi-india-gate.webp",
      imageAlt: "India Gate at dusk, Delhi",
    },
    {
      name: "Agra",
      tagline: "Home of the Taj Mahal",
      description: "The Taj Mahal, Agra Fort, and the abandoned Mughal capital of Fatehpur Sikri.",
      href: "/destinations/agra",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Thimphu",
      tagline: "Bhutan's Capital",
      description: "The only national capital in the world without a single traffic light, small and walkable.",
      href: "/destinations/thimphu",
      image: "/images/destinations/thimphu-tashichho-dzong.webp",
      imageAlt: "Tashichho Dzong, Thimphu, Bhutan",
    },
    {
      name: "Paro",
      tagline: "Home of the Tiger's Nest",
      description: "Bhutan's only international airport and the setting for its single most iconic sight.",
      href: "/destinations/paro",
      image: "/images/destinations/paro-taktsang-tigers-nest.webp",
      imageAlt: "Paro Taktsang, the Tiger's Nest Monastery, Bhutan",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Do we need to fly via Nepal to reach Bhutan from India?",
      answer:
        "No — Delhi and Paro are connected by a direct flight, so this itinerary requires no Nepal stopover at all. Kolkata also has direct Paro flights, worth mentioning if your route works better through eastern India.",
    },
    {
      question: "Can we add Gangtey's crane valley back into this itinerary?",
      answer:
        "Yes — this 11-day circuit is a starting template trimmed for time. Gangtey (Phobjikha Valley) can be added back in with 2 to 3 extra days on the Bhutan side; let us know when planning your trip.",
    },
    {
      question: "What is the Sustainable Development Fee, and is it really required?",
      answer:
        "Yes — it's a genuine, mandatory daily fee set by the Bhutanese government, included in the pricing we quote, that funds free healthcare, education and environmental conservation in Bhutan. Every visitor pays it as part of a licensed tour.",
    },
    {
      question: "Do we need separate visas for India and Bhutan?",
      answer:
        "Yes — most nationalities need an e-Visa for India arranged in advance, while Bhutan's visa is arranged through your licensed tour operator as part of booking this trip. We handle the Bhutan visa process directly once your dates are confirmed.",
    },
    {
      question: "Would it be better to visit India and Bhutan separately instead?",
      answer:
        "If you have time for two separate trips, our standalone Golden Triangle Tour and Bhutan Tours itineraries each go deeper into their respective countries. This combined circuit suits travellers who want a genuine taste of both within one trip, taking advantage of the direct Delhi–Paro flight.",
    },
  ],
  relatedPackages: [
    {
      name: "Golden Triangle Tour",
      tagline: "Delhi – Agra – Jaipur · 6 Days",
      description: "The full Golden Triangle circuit on its own, with several extension options.",
      href: "/tours/golden-triangle-tour-classic",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Bhutan Tours",
      tagline: "Dzongs, Valleys & the Tiger's Nest · 8 Days",
      description: "The full Bhutan circuit on its own, including the glacial Gangtey valley.",
      href: "/tours/bhutan-tours",
      image: "/images/destinations/paro-taktsang-tigers-nest.webp",
      imageAlt: "Paro Taktsang, the Tiger's Nest Monastery, Bhutan",
    },
  ],
  draftPendingReview: false,
};
