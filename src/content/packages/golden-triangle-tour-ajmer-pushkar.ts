import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const goldenTriangleAjmerPushkarTours: PackageContent = {
  slug: "golden-triangle-tour-ajmer-pushkar",
  name: "Golden Triangle Tour with Ajmer & Pushkar",
  tagline: "The Golden Triangle, Extended to the Sacred Lake · 8 Days",
  metaTitle: "Golden Triangle Tour with Ajmer & Pushkar | Delhi, Agra, Jaipur, Pushkar",
  metaDescription:
    "The classic Golden Triangle plus Ajmer and Pushkar — a Sufi shrine visited by people of all faiths, and one of the few Brahma temples in the world, on the shores of a sacred lake.",
  heroImage: "/images/destinations/amber-fort-jaipur.webp",
  heroImageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  heroHeadline: "Delhi – Agra – Jaipur – Ajmer – Pushkar",
  heroSubheadline:
    "The classic Golden Triangle plus two days in Ajmer and Pushkar — a revered Sufi shrine and a sacred lake town, both a world away from forts and palaces.",
  overview:
    "This route takes the classic Golden Triangle and extends it west into a genuinely different register: Ajmer, home to the Dargah of Khwaja Moinuddin Chishti, one of the most important Sufi shrines in the world and a pilgrimage site for Hindus and Muslims alike; and Pushkar, a small lakeside town just over the hill from Ajmer, built around one of the only temples to the creator god Brahma anywhere in India. Where Delhi, Agra and Jaipur are about Mughal and Rajput history, Ajmer and Pushkar are about living faith — active pilgrimage, daily ritual, and a noticeably slower, more contemplative pace than the rest of the circuit.",
  quickFacts: [
    { label: "Duration", value: "8 Days / 7 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Delhi",
      description:
        "On arrival at Indira Gandhi International Airport, your private guide and driver meet you at the terminal for a hassle-free transfer to your hotel in Delhi — no navigating pre-paid taxi queues, currency counters or SIM card kiosks alone after a long international flight. The rest of the day is left free to rest and adjust to the time change, with an optional evening orientation walk through a nearby market if you'd rather ease gently into the sights, sounds and street food of the Indian capital than stay in the hotel. Sightseeing begins properly tomorrow, so tonight is simply about recovering from the flight.",
    },
    {
      title: "Day 2 — Delhi Sightseeing",
      description:
        "A full-day private tour covering Delhi's Mughal and colonial layers in one comfortable day rather than rushing between them. In Old Delhi: Humayun's Tomb, the elegant red-sandstone precursor to the Taj Mahal, the Jama Masjid mosque, and a cycle-rickshaw ride through the spice and textile lanes of Chandni Chowk. In New Delhi: the wide colonial-era avenues around India Gate, the government quarter surrounding Rashtrapati Bhavan, and the towering Qutub Minar if time allows. Your English-speaking guide narrates the history as you go, so you're not left decoding plaques on your own.",
      image: "/images/destinations/delhi-india-gate.webp",
      imageAlt: "India Gate at dusk, Delhi",
    },
    {
      title: "Day 3 — Delhi to Agra",
      description:
        "A scenic 3 to 4 hour private drive south to Agra, home of the Taj Mahal and one of the most anticipated stops on any first trip to India. After checking into your hotel, visit Agra Fort — a red sandstone UNESCO World Heritage Site and the Mughal seat of power before the capital later moved to Delhi — walking the same ramparts where Emperor Shah Jahan was reportedly imprisoned by his own son, with a distant view of the Taj Mahal he built. In the evening, head to the Mehtab Bagh gardens across the river for a first, uncrowded view of the Taj Mahal at sunset.",
      image: "/images/destinations/agra-fort.webp",
      imageAlt: "Agra Fort's red sandstone ramparts",
    },
    {
      title: "Day 4 — Taj Mahal Sunrise, on to Jaipur",
      description:
        "Enter the Taj Mahal at opening hour for sunrise — the single most-recommended timing among experienced India travel guides, for softer light, cooler temperatures, and the thinnest crowds of the day. Your guide will point out details easy to miss on your own: the semi-precious stone inlay work known as pietra dura, and the deliberate symmetry designed to be viewed from the main gateway. Afterwards, drive toward Jaipur, breaking the journey at Fatehpur Sikri, the astonishingly well-preserved abandoned Mughal capital built by Emperor Akbar and deserted within a generation due to water shortages.",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      title: "Day 5 — Jaipur Sightseeing",
      description:
        "A full day exploring the Pink City, so named for the terracotta-pink wash applied to its old city buildings in 1876 to welcome a visiting British prince. Start early at Amber Fort, with the option of a jeep ride up to the entrance, followed by the City Palace complex, the Jantar Mantar astronomical observatory, and a photo stop at the honeycomb pink façade of Hawa Mahal. The evening is left free for Jaipur's famous bazaars — Johari Bazaar for gemstones, Bapu Bazaar for textiles — before tomorrow's shift toward a very different kind of Rajasthan.",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      title: "Day 6 — Jaipur to Ajmer & Pushkar",
      description:
        "A roughly 2.5 to 3 hour drive south-west from Jaipur to Ajmer, home to the Dargah of Khwaja Moinuddin Chishti — the tomb of a revered 12th-century Sufi saint, and one of the most important pilgrimage sites in the Islamic world, visited daily by people of every faith regardless of their own religion. Your guide will help you navigate the shrine respectfully, including appropriate dress and where visitors of any background are welcome to enter. From Ajmer, it's a short 20-minute drive over a hill pass to Pushkar, a small, laid-back lake town with an atmosphere entirely different from anywhere else on this itinerary — arrive by evening in time for a walk along the lake's ghats as the light fades.",
      image: "/images/destinations/pushkar-lake-ghats.webp",
      imageAlt: "Pushkar Lake and its ghats at dusk",
    },
    {
      title: "Day 7 — Pushkar Sightseeing",
      description:
        "A full day in Pushkar, built entirely around its sacred lake, said in Hindu mythology to have formed where a lotus petal fell from Brahma's hand. Visit the Brahma Temple, one of the very few temples to the creator god anywhere in India despite Brahma's central place in Hindu cosmology, before a walk around the lake's 52 bathing ghats, each with its own name and significance to different pilgrim groups. The town's compact bazaar is worth a slow browse too, known for silver jewellery, block-printed textiles and a genuinely laid-back, almost bohemian atmosphere that's built up around decades of both pilgrim and backpacker traffic side by side.",
      image: "/images/destinations/pushkar-brahma-temple.webp",
      imageAlt: "The Brahma Temple, Pushkar",
    },
    {
      title: "Day 8 — Pushkar to Jaipur, Departure",
      description:
        "A private transfer back to Jaipur (around 2.5 to 3 hours) for your onward or international departure flight, with the tour concluding on arrival at the airport. Looking back over eight days, the itinerary moves from Delhi's Mughal and colonial history through Agra's single iconic monument and Jaipur's forts and bazaars, before closing on Ajmer and Pushkar's living, everyday faith — a genuinely different note to end a first India trip on, and one that surprises many travellers who came expecting only forts and palaces.",
    },
  ],
  inclusions: [
    "7 nights in hotels of your choice, twin-sharing",
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
      title: "A Living Pilgrimage Site",
      description:
        "The Dargah of Khwaja Moinuddin Chishti in Ajmer is an active shrine visited daily by people of every faith, not a historical monument to walk past.",
    },
    {
      title: "One of the Only Brahma Temples in India",
      description:
        "Despite Brahma's importance in Hindu cosmology, temples dedicated to him are extremely rare — Pushkar's is one of the few anywhere in the country.",
    },
    {
      title: "A Genuinely Different Final Note",
      description:
        "Pushkar's laid-back lake-town atmosphere closes the trip on something quieter and more contemplative than another fort or palace.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cooler, drier weather across Delhi, Agra, Jaipur and the Ajmer–Pushkar region makes daytime sightseeing far more comfortable. April to June turns hot across the whole route, and the July–September monsoon brings humidity and occasional heavy rain.",
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
      description: "The Taj Mahal, Agra Fort, and the heart of the Golden Triangle.",
      href: "/destinations/agra",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Rajasthan",
      tagline: "Land of Kings",
      description: "Forts, palaces and desert citadels, including Ajmer and Pushkar.",
      href: "/destinations/rajasthan",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is the Ajmer Dargah open to non-Muslim visitors?",
      answer:
        "Yes — the shrine welcomes pilgrims and visitors of all faiths and backgrounds. Your guide will advise on appropriate dress and etiquette so you can visit respectfully.",
    },
    {
      question: "Is Pushkar worth visiting outside of the Camel Fair?",
      answer:
        "Yes — while November's Camel Fair is a major draw, Pushkar's lake, temples and bazaar are worth visiting any time of year for their own atmosphere, without the fair's crowds and higher prices.",
    },
    {
      question: "Can we extend this trip with Udaipur or Ranthambore instead of returning to Jaipur?",
      answer:
        "Yes — Pushkar sits within reach of both. Tell us your interests and available days and we can adjust the final leg of the itinerary accordingly.",
    },
    {
      question: "Is alcohol available in Pushkar?",
      answer:
        "No — Pushkar is a sacred town and alcohol and non-vegetarian food are both prohibited within the town limits, a local rule worth knowing before arrival.",
    },
    {
      question: "Is the price per person fixed?",
      answer:
        "We quote every trip individually rather than publish a fixed price — the final cost depends on your travel dates, group size, and the hotel category you choose. Send us your dates and hotel preference and we'll reply with an exact quote, usually within 24 hours.",
    },
  ],
  relatedPackages: [
    {
      name: "Golden Triangle Tour",
      tagline: "The Classic Route · 6 Days",
      description: "The standard Delhi–Agra–Jaipur circuit, without the Ajmer and Pushkar extension.",
      href: "/tours/golden-triangle-tour-classic",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Golden Triangle Tour with Udaipur",
      tagline: "9 Days",
      description: "Extend the classic route with Rajasthan's lake city instead of Ajmer and Pushkar.",
      href: "/tours/golden-triangle-tour-udaipur",
      image: "/images/destinations/udaipur-lake-palace.webp",
      imageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
    },
    {
      name: "Rajasthan Tours",
      tagline: "Land of Kings",
      description: "A deeper look at the wider state beyond this circuit's four stops.",
      href: "/tours/rajasthan-tours",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  draftPendingReview: false,
};
