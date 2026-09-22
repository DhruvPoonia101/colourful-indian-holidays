import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * A genuinely combined circuit, not the Golden Triangle Classic and Nepal
 * Tours concatenated. The India leg drops the standalone departure day
 * (continuing onward to Kathmandu instead), and the Nepal leg drops Chitwan
 * to keep the combined trip to a realistic 11 days; Chitwan is offered as
 * an extension in the FAQs.
 */
export const indiaNepalTours: PackageContent = {
  slug: "india-nepal-tours",
  name: "India & Nepal Tours",
  tagline: "The Golden Triangle & the Himalayas",
  metaTitle: "India & Nepal Tour Package | Delhi, Agra, Jaipur & Kathmandu",
  metaDescription:
    "A private 11-day circuit through India's Golden Triangle and Nepal — the Taj Mahal, Jaipur's forts, Kathmandu's temples, and mountain views from Nagarkot and Pokhara.",
  heroImage: "/images/destinations/agra-taj-mahal.webp",
  heroImageAlt: "Taj Mahal at sunrise, Agra",
  heroHeadline: "India & Nepal: The Golden Triangle & the Himalayas",
  heroSubheadline:
    "An 11-day circuit connecting India's most iconic monuments with Nepal's temples and mountain views — Delhi, Agra and Jaipur, followed by Kathmandu, Nagarkot and Pokhara, linked by a short flight.",
  overview:
    "India's Golden Triangle and Nepal's temple-and-mountain circuit are two of South Asia's most requested trips individually, and combining them makes genuine sense for travellers who've come this far and want more than one country's worth of experience from a single long-haul flight. Rather than running the full 6-day Golden Triangle Classic and 8-day Nepal Tours itineraries back to back, this circuit trims the India leg to flow directly into a Kathmandu flight, and drops Nepal's Chitwan jungle safari to keep the whole trip to a realistic 11 days. What remains is the essential version of both: the Taj Mahal at sunrise, Jaipur's forts and bazaars, Kathmandu's UNESCO temple squares, and mountain views from two of Nepal's best viewpoints.",
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
        "On arrival at Indira Gandhi International Airport, your private guide and driver meet you at the terminal for a hassle-free transfer to your hotel in Delhi. The rest of the day is left free to rest and adjust after a long international flight, with an optional evening orientation walk through a nearby market to ease gently into the city before sightseeing begins tomorrow. Your guide will also confirm the full 11-day plan with you this evening, including the flight connection to Kathmandu partway through the trip.",
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
        "A full day exploring the Pink City, so named for the terracotta-pink wash applied to its old city buildings in 1876 to welcome a visiting British prince. Start early at Amber Fort, followed by the City Palace complex, still partly home to Jaipur's former royal family, the Jantar Mantar astronomical observatory, and a photo stop at Hawa Mahal's honeycomb façade. The evening is left free for Jaipur's bazaars — Johari Bazaar for gemstones and jewellery, Bapu Bazaar for textiles — before flying onward to Nepal tomorrow.",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      title: "Day 6 — Jaipur to Kathmandu",
      description:
        "A flight connecting through Delhi to Kathmandu, Nepal's capital and a genuinely different atmosphere from the Golden Triangle's Mughal grandeur — smaller in scale, higher in altitude, and centred on temple squares rather than forts and palaces. Private transfer to your hotel, with the rest of the day free to rest after the journey. An easy evening wander through Thamel, Kathmandu's atmospheric backpacker district, with its narrow lanes of trekking shops and prayer-flag-strung rooftops, is a good way to adjust before sightseeing resumes tomorrow.",
    },
    {
      title: "Day 7 — Kathmandu Valley Sightseeing",
      description:
        "A full day covering the Kathmandu Valley's UNESCO World Heritage Sites, starting at Kathmandu Durbar Square, the historic royal palace complex with its ornately carved wooden temples. From there, Swayambhunath — often called the Monkey Temple for the free-roaming macaques on its grounds — offers sweeping views over the valley. In the afternoon, visit Boudhanath, one of the largest stupas in the world, followed by Pashupatinath, a sacred Hindu temple complex on the Bagmati River.",
    },
    {
      title: "Day 8 — Kathmandu to Nagarkot",
      description:
        "A short drive (around 1.5 to 2 hours) east out of the Kathmandu Valley to Nagarkot, a ridge-top town known for some of the most reliable Himalayan panorama views in the region, including — on a clear day — Everest itself in the distance. The afternoon is left unhurried, with time to settle into a hillside guesthouse and watch the light change over the mountains through the evening, a deliberately quiet stop between Kathmandu's intensity and Pokhara's lakeside pace.",
    },
    {
      title: "Day 9 — Nagarkot Sunrise, on to Pokhara",
      description:
        "An early start for sunrise from Nagarkot's viewing tower, watching the Himalayan range — including Langtang and, on clear days, Everest — turn gold as the sun comes up over the peaks. After breakfast, begin the drive to Pokhara, Nepal's second city and gateway to the Annapurna range (roughly 6 to 7 hours by road, or a short domestic flight if you'd prefer). Arriving by evening, the lakeside area around Phewa Lake makes for an easy first evening, with restaurants and cafés right on the water.",
      image: "/images/destinations/pokhara-valley-machapuchare-view.webp",
      imageAlt: "Pokhara valley with Machapuchare mountain view, Nepal",
    },
    {
      title: "Day 10 — Pokhara Sightseeing",
      description:
        "A full day around Pokhara's lake and valley, starting with a boat ride on Phewa Lake toward the small Tal Barahi temple on its island, the Annapurna range reflected in the water on a clear morning. In the afternoon, visit Davis Falls, a dramatic waterfall that disappears into an underground tunnel, and the adjoining Gupteshwor Cave. Adventure-minded travellers can also arrange paragliding over the lake, launching from the Sarangkot ridge above the city — one of the most popular paragliding spots in the world.",
    },
    {
      title: "Day 11 — Sarangkot Sunrise & Departure",
      description:
        "An early drive up to Sarangkot for sunrise over the Annapurna and Machapuchare (Fishtail) peaks, one of the best sunrise viewpoints in Nepal and a fitting final Himalayan moment to close the trip. After breakfast, fly back to Kathmandu (or drive, roughly 6 to 7 hours) for your onward or international departure flight. Eleven days across two countries behind you — India's Mughal monuments and Rajasthani forts, followed by Nepal's temple squares and mountain viewpoints.",
    },
  ],
  inclusions: [
    "5 nights in hotels of your choice in India (Delhi, Agra & Jaipur), twin-sharing",
    "5 nights in hotels of your choice in Nepal (Kathmandu, Nagarkot & Pokhara), twin-sharing",
    "Daily breakfast",
    "Domestic flight, Jaipur to Kathmandu (via Delhi)",
    "Private air-conditioned vehicle and English-speaking guide throughout both countries",
    "All monument entry fees in India as per itinerary",
  ],
  exclusions: [
    "International flights to Delhi and from Kathmandu",
    "Nepal visa fee (available on arrival for most nationalities)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Optional activities such as paragliding (arranged on request, paid locally)",
  ],
  highlights: [
    {
      title: "Two Countries, One Long-Haul Flight",
      description:
        "Genuinely efficient for travellers coming from outside South Asia — see India's most iconic monuments and Nepal's temples and mountains in a single trip.",
    },
    {
      title: "A Realistic 11 Days, Not an Overlong 14",
      description:
        "Each leg is trimmed to its essentials rather than simply combining two full itineraries back to back.",
    },
    {
      title: "Two Genuine Himalayan Viewpoints",
      description:
        "Both Nagarkot and Sarangkot offer well-regarded sunrise panoramas, giving two real chances at clear mountain views.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make sightseeing genuinely comfortable across both countries, and this window also offers the clearest Himalayan views for the Nagarkot and Sarangkot sunrises. April to June turns hot across North India, and the June–September monsoon brings heavy rain and frequently obscures mountain views in Nepal.",
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
      name: "Kathmandu",
      tagline: "Nepal's Temple-Filled Capital",
      description: "UNESCO-listed durbar squares, stupas and temples across the Kathmandu Valley.",
      href: "/destinations/kathmandu",
      image: "/images/destinations/kathmandu-aerial-boudhanath-city.webp",
      imageAlt: "Aerial view of Boudhanath stupa and Kathmandu city",
    },
    {
      name: "Pokhara",
      tagline: "Lakes Beneath the Annapurnas",
      description: "Phewa Lake, paragliding, and some of Nepal's best mountain views.",
      href: "/destinations/pokhara",
      image: "/images/destinations/pokhara-valley-machapuchare-view.webp",
      imageAlt: "Pokhara valley with Machapuchare mountain view",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Can we add Chitwan's jungle safari back into this itinerary?",
      answer:
        "Yes — this 11-day circuit is a starting template trimmed for time. Chitwan National Park's jungle safari can be added back in with 2 to 3 extra days; let us know when planning your trip.",
    },
    {
      question: "How does the flight between Jaipur and Kathmandu work?",
      answer:
        "It connects through Delhi, since there's no direct Jaipur–Kathmandu route. We arrange this as part of the itinerary and time it to flow smoothly from your Jaipur sightseeing.",
    },
    {
      question: "Do we need separate visas for India and Nepal?",
      answer:
        "Yes — most nationalities need an e-Visa for India arranged in advance, while Nepal offers visa on arrival for most nationalities. We can advise on the specific requirements for your nationality when planning your trip.",
    },
    {
      question: "Is 11 days enough, or should we extend?",
      answer:
        "11 days covers the essential version of both circuits comfortably. If you have more time, extending with Chitwan, Ranthambore's tiger safaris, or Udaipur's lakes are the most common additions we're asked to build in.",
    },
    {
      question: "Would it be better to visit India and Nepal separately instead?",
      answer:
        "If you have time for two separate trips, our standalone Golden Triangle Tour and Nepal Tours itineraries each go deeper into their respective countries. This combined circuit suits travellers who want a genuine taste of both within one trip.",
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
      name: "Nepal Tours",
      tagline: "Temples, Mountains & the Jungle · 8 Days",
      description: "The full Nepal circuit on its own, including Chitwan's jungle safari.",
      href: "/tours/nepal-tours",
      image: "/images/destinations/pokhara-valley-machapuchare-view.webp",
      imageAlt: "Pokhara valley with Machapuchare mountain view, Nepal",
    },
  ],
  draftPendingReview: false,
};
