import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const goldenTriangleTours: PackageContent = {
  slug: "golden-triangle-tours",
  name: "Golden Triangle Tours",
  tagline: "Delhi – Agra – Jaipur",
  metaTitle: "Golden Triangle Tour Packages | Delhi, Agra & Jaipur",
  metaDescription:
    "A private 6-day Golden Triangle tour covering Delhi, Agra and Jaipur — the classic first-time introduction to India, with the Taj Mahal at sunrise and Rajasthan's capital.",
  heroImage: "/images/destinations/agra-taj-mahal.webp",
  heroImageAlt: "Taj Mahal at sunrise, Agra",
  heroHeadline: "The Golden Triangle: Delhi, Agra & Jaipur",
  heroSubheadline:
    "India's classic first-time route — Mughal monuments, the Taj Mahal at sunrise, and the forts and palaces of Rajasthan's capital, in six private days.",
  overview:
    "The Golden Triangle is India's most-travelled tourist circuit, connecting Delhi, Agra and Jaipur in a compact loop of roughly 720 km. For international travellers visiting India for the first time, it remains the most efficient way to see UNESCO World Heritage Sites like the Taj Mahal and Agra Fort alongside the Mughal architecture of Old Delhi and the Rajput forts and palaces of the Pink City — all with a private, English-speaking guide and air-conditioned vehicle, at a pace built around you rather than a fixed group schedule.",
  quickFacts: [
    { label: "Duration", value: "6 Days / 5 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Delhi",
      description:
        "On arrival at Indira Gandhi International Airport, your private guide and driver meet you at the terminal for a hassle-free transfer to your hotel in Delhi — no navigating pre-paid taxi queues, currency counters or SIM card kiosks alone after a long international flight. This first-day pickup is one of the details international travellers appreciate most, since jet lag and an unfamiliar city are a lot to handle at once. The rest of the day is left free to rest and adjust, with an optional evening orientation walk through a nearby market to ease gently into the sights, sounds and street food of the Indian capital before sightseeing begins in earnest tomorrow.",
    },
    {
      title: "Day 2 — Delhi Sightseeing",
      description:
        "A full-day private tour of both Old and New Delhi, designed to cover the city's Mughal and colonial layers in a single comfortable day rather than rushing between them. In Old Delhi: Humayun's Tomb, the elegant red-sandstone precursor to the Taj Mahal and a UNESCO World Heritage Site in its own right, the Jama Masjid mosque, and a cycle-rickshaw ride through the densely packed spice and textile lanes of Chandni Chowk. In New Delhi: the wide colonial-era avenues around India Gate, the government quarter surrounding Rashtrapati Bhavan, and the towering Qutub Minar if time allows. Your English-speaking guide narrates the history as you go, so you're not left decoding plaques on your own.",
    },
    {
      title: "Day 3 — Delhi to Agra",
      description:
        "A scenic 3–4 hour private drive south to Agra, home of the Taj Mahal and one of the most anticipated stops on any first trip to India. Your air-conditioned vehicle makes the journey comfortable, with a rest stop along the expressway if needed. After checking into your hotel, visit Agra Fort — a red sandstone UNESCO World Heritage Site and the Mughal seat of power before the capital later moved to Delhi — walking the same ramparts where Emperor Shah Jahan was reportedly imprisoned by his own son, with a distant view of the Taj Mahal he built. In the evening, head to the Mehtab Bagh gardens across the river for a first, wonderfully uncrowded view of the Taj Mahal at sunset.",
    },
    {
      title: "Day 4 — Taj Mahal Sunrise, on to Jaipur",
      description:
        "Enter the Taj Mahal at opening hour for sunrise — the single most-recommended timing among experienced India travel guides, for softer photography light, cooler temperatures, and by far the thinnest crowds of the day. Your guide will point out details easy to miss on your own: the semi-precious stone inlay work, the calligraphy that appears uniform in size despite scaling with height, and the deliberate symmetry designed to be viewed from the main gateway. Afterwards, drive toward Jaipur, breaking the journey at Fatehpur Sikri, the astonishingly well-preserved abandoned Mughal capital built entirely from red sandstone by Emperor Akbar and abandoned within a single generation due to water shortages — a fascinating stop most short itineraries skip entirely.",
    },
    {
      title: "Day 5 — Jaipur Sightseeing",
      description:
        "A full day exploring the Pink City, so named for the terracotta-pink wash applied to its old city buildings in 1876. Start early at Amber Fort, with the option of a jeep or elephant ride up to the entrance, followed by the City Palace complex — still partly home to Jaipur's former royal family — the Jantar Mantar astronomical observatory with its giant stone instruments, and a photo stop at the honeycomb pink façade of Hawa Mahal, the Palace of Winds. The evening is left free for Jaipur's famous bazaars: Johari Bazaar for gemstones and jewellery, Bapu Bazaar for textiles and hand block-printed fabric — both popular with international travellers looking to bring home something authentically Rajasthani.",
    },
    {
      title: "Day 6 — Departure",
      description:
        "A private transfer to Jaipur airport, or back to Delhi for your international departure flight, with the tour concluding after breakfast. If your schedule allows a little extra time before departure, your guide can suggest a last-minute stop — a final bazaar visit, a coffee at a heritage café, or simply a slower morning to reflect on the trip. Many travellers choose to extend beyond the classic Golden Triangle at this point — Udaipur's lakes, Ranthambore's tiger safaris, and Varanasi's ghats are the three most common extensions we're asked to add on for those with a few extra days to spare in India.",
    },
  ],
  inclusions: [
    "5 nights in hotels of your choice, twin-sharing",
    "Daily breakfast",
    "Private air-conditioned vehicle for all transfers and sightseeing",
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
      title: "Sunrise at the Taj Mahal",
      description:
        "We time entry for opening hour, when the marble catches the softest light and the crowds are thinnest.",
    },
    {
      title: "Private, Not Group",
      description:
        "No joining a coach of strangers — your vehicle, guide, and pace, from the moment you land.",
    },
    {
      title: "The Right Pace",
      description:
        "Six days is enough to see all three cities properly without the rushed, single-day version many first-timers regret.",
    },
  ],
  faqs: [
    {
      question: "Is 6 days enough for the Golden Triangle?",
      answer:
        "Yes — this is the standard, comfortable pace for Delhi, Agra and Jaipur, with a full day in each main city and no early-morning scrambles between them.",
    },
    {
      question: "Can we extend the trip with other cities?",
      answer:
        "Absolutely. Udaipur, Ranthambore, and Varanasi are all common add-ons — tell us your interests and we'll adjust the itinerary.",
    },
    {
      question: "Is the price per person fixed?",
      answer:
        "We quote every trip individually rather than publish a fixed price — the final cost depends on your travel dates, group size, and the hotel category you choose. Send us your dates and hotel preference and we'll reply with an exact quote, usually within 24 hours.",
    },
  ],
  relatedPackages: [
    {
      name: "Rajasthan Tours",
      tagline: "Land of Kings",
      description: "Extend into Jodhpur, Udaipur and the desert forts beyond Jaipur.",
      href: "/packages/rajasthan-tours",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "North India Tours",
      tagline: "Delhi & Beyond",
      description: "A longer route adding Varanasi's ghats to the classic circuit.",
      href: "/packages/north-india-tours",
      image: "/images/destinations/delhi-india-gate.webp",
      imageAlt: "India Gate at dusk, Delhi",
    },
  ],
  draftPendingReview: false,
};
