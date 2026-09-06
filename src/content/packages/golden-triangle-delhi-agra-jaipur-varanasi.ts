import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * NOTE FOR DHRUV: this covers the same four cities as /packages/north-india-tours
 * (Delhi, Agra, Jaipur, Varanasi) at a similar length, but is written and framed
 * as a Golden Triangle extension rather than a standalone North India trip. Having
 * both live is a deliberate choice to let this route live under the Golden
 * Triangle hub with its own itinerary — let me know if you'd rather this page
 * simply linked out to North India Tours instead.
 */
export const goldenTriangleVaranasiTours: PackageContent = {
  slug: "golden-triangle-tours/delhi-agra-jaipur-varanasi",
  name: "Delhi – Agra – Jaipur – Varanasi",
  tagline: "The Golden Triangle, Extended to the Ganges · 9 Days",
  metaTitle: "Delhi – Agra – Jaipur – Varanasi Tour Package | 9 Days",
  metaDescription:
    "A private 9-day tour extending the classic Golden Triangle to Varanasi — Delhi, Agra, Jaipur and the ghats of the Ganges, ending on a spiritual note rather than another fort.",
  heroImage: "/images/destinations/varanasi-evening-ganges-aarti.webp",
  heroImageAlt: "Evening Ganga Aarti ceremony in Varanasi",
  heroHeadline: "Delhi – Agra – Jaipur – Varanasi: The Golden Triangle, Extended to the Ganges",
  heroSubheadline:
    "The classic Golden Triangle plus Varanasi — India's most sacred city, and a genuinely different register from the forts and palaces before it.",
  overview:
    "This 9-day itinerary takes the classic Golden Triangle (Delhi, Agra, Jaipur) and extends it to Varanasi, one of the oldest continuously inhabited cities in the world and the spiritual heart of Hinduism. It's built for travellers who want their trip to close on something other than one more fort or palace — Varanasi's ghats, its dawn boat rides on the Ganges, and its evening Ganga Aarti ceremony are a genuinely different kind of experience from the monuments earlier in the route. Because Varanasi isn't reachable by road from Jaipur in a reasonable time, this leg is connected by a short domestic flight rather than another long drive.",
  quickFacts: [
    { label: "Duration", value: "9 Days / 8 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Delhi",
      description:
        "On arrival at Indira Gandhi International Airport, your private guide and driver meet you at the terminal for a hassle-free transfer to your hotel — no navigating pre-paid taxi queues, currency counters or SIM card kiosks alone after a long international flight. This first-day pickup is one of the details international travellers appreciate most, since jet lag and an unfamiliar city are a lot to absorb at once, especially at the start of a trip that will end somewhere as intense and different as Varanasi. The rest of the day is left free to rest and adjust to the time change, with an optional evening orientation walk through a nearby market if you'd rather ease gently into the sounds and street food of the Indian capital than stay in the hotel. Sightseeing begins properly tomorrow, so tonight is simply about recovering from the flight.",
    },
    {
      title: "Day 2 — Delhi Sightseeing",
      description:
        "A full-day private tour designed to cover Delhi's Mughal and colonial layers in one comfortable day rather than rushing between them. In Old Delhi: Humayun's Tomb, the elegant red-sandstone precursor to the Taj Mahal and a UNESCO World Heritage Site in its own right, the Jama Masjid mosque, and a cycle-rickshaw ride through the densely packed spice and textile lanes of Chandni Chowk, one of the oldest and busiest markets in the country. In New Delhi: the wide colonial-era avenues around India Gate, the government quarter surrounding Rashtrapati Bhavan, and the towering Qutub Minar if time and light allow. Your English-speaking guide narrates the history as you go, so you're not left decoding plaques on your own, and can also start introducing some of the religious and historical context that will matter later in Varanasi and Sarnath.",
    },
    {
      title: "Day 3 — Delhi to Agra",
      description:
        "A scenic 3 to 4 hour private drive south along the Yamuna Expressway to Agra, home of the Taj Mahal and one of the most anticipated stops on any first trip to India. Your air-conditioned vehicle makes the journey comfortable, with a rest stop along the way if needed. After checking into your hotel, visit Agra Fort — a red sandstone UNESCO World Heritage Site and the Mughal seat of power before the capital later moved to Delhi — walking the same ramparts where Emperor Shah Jahan was reportedly imprisoned by his own son, with a distant view of the Taj Mahal he built visible from the fort walls. In the evening, head to the Mehtab Bagh gardens across the river for a first, wonderfully uncrowded view of the Taj Mahal at sunset, framed by the garden's symmetrical layout exactly as the Mughals intended it to be seen.",
    },
    {
      title: "Day 4 — Taj Mahal Sunrise, on to Jaipur",
      description:
        "Enter the Taj Mahal at opening hour for sunrise — the single most-recommended timing among experienced India travel guides, for softer photography light, cooler temperatures, and by far the thinnest crowds of the day. Your guide will point out details easy to miss on your own: the semi-precious stone inlay work known as pietra dura, the calligraphy that appears uniform in size despite scaling with height, and the deliberate symmetry designed to be viewed from the main gateway. Afterwards, drive toward Jaipur, breaking the journey at Fatehpur Sikri, the astonishingly well-preserved abandoned Mughal capital built entirely from red sandstone by Emperor Akbar and deserted within a single generation due to water shortages — a fascinating stop most short itineraries skip entirely, offering a genuinely different Mughal-era experience from the Taj Mahal earlier the same morning.",
    },
    {
      title: "Day 5 — Jaipur Sightseeing",
      description:
        "A full day exploring the Pink City, so named for the terracotta-pink wash applied to its old city buildings in 1876 to welcome a visiting British prince. Start early at Amber Fort, with the option of a jeep ride up to the entrance, followed by the City Palace complex — still partly home to Jaipur's former royal family — the Jantar Mantar astronomical observatory with its giant stone instruments, and a photo stop at the honeycomb pink façade of Hawa Mahal, the Palace of Winds. The evening is left free for Jaipur's famous bazaars: Johari Bazaar for gemstones and jewellery, Bapu Bazaar for textiles and hand block-printed fabric, both popular with international travellers looking to bring home something authentically Rajasthani before this itinerary shifts tone entirely for its final leg.",
    },
    {
      title: "Day 6 — Fly to Varanasi",
      description:
        "A short domestic flight connects Jaipur to Varanasi, typically routed via Delhi since there's no practical road link between the two given the distance and terrain involved. Your guide and driver see you off at Jaipur airport, and a new local guide and driver meet you on arrival in Varanasi — one of the oldest continuously inhabited cities in the world and a markedly different atmosphere from the forts and palaces of the last several days. After settling into your hotel, head down to the ghats — the long series of stone steps lining the Ganges — for the evening Ganga Aarti, a nightly ceremony of fire, bells and chanting performed by young priests in unison on a riverside platform. It's one of the more striking, sensory-heavy sights in India, and a fitting first introduction to Varanasi's very different rhythm.",
    },
    {
      title: "Day 7 — Sunrise Boat Ride & Sarnath",
      description:
        "A pre-dawn start for a rowing boat ride along the Ganges, timed to watch the ghats come to life as the sun rises — pilgrims wading in for ritual bathing, priests setting up for morning prayers, laundry being beaten against the stone steps, all viewed from the water rather than the crowded banks. It's a genuinely different perspective from the evening Aarti the night before, quieter and more contemplative rather than performative. Afterwards, return to your hotel for breakfast and some rest before an afternoon visit to Sarnath, a deer park roughly 10 kilometres from central Varanasi where the Buddha is traditionally said to have delivered his first sermon after attaining enlightenment. The site includes the substantial Dhamek Stupa and an archaeological museum, adding a Buddhist historical layer to a day that began firmly rooted in Hindu ritual.",
    },
    {
      title: "Day 8 — Varanasi Old City",
      description:
        "A guided walk through Varanasi's dense, narrow old-city lanes, a maze of alleyways too tight for most vehicles, where small shrines appear between shopfronts, silk-weaving workshops operate behind unassuming doorways, and tea stalls do steady business from sunrise well into the night. Your guide helps navigate what can otherwise feel disorienting for first-time visitors, pointing out the difference between the city's many ghats — some used for bathing, others for cremation, each with its own history and significance. The rest of the day is left free to revisit the ghats at your own pace, browse for Banarasi silk sarees in a local workshop, or simply sit at a riverside café and absorb the city's rhythm before your final morning.",
    },
    {
      title: "Day 9 — Departure",
      description:
        "A private transfer to Varanasi airport for your onward or international departure flight, with the tour concluding after breakfast. Looking back across the nine days, the itinerary deliberately builds from Delhi's layered history through Agra's single iconic monument and Jaipur's forts and palaces, before closing on something entirely different in tone — Varanasi's unfiltered, sensory intensity rather than one more heritage site. Many travellers describe Varanasi as the part of the trip that stayed with them longest, precisely because it doesn't resemble anything else on the standard Golden Triangle route. If your flight departs later in the day, ask your guide about a final short visit to a quieter ghat away from the main tourist crowds, or a last walk through the old city's silk markets before heading to the airport.",
    },
  ],
  inclusions: [
    "8 nights in hotels of your choice, twin-sharing",
    "Daily breakfast",
    "Private air-conditioned vehicle for all road transfers and sightseeing",
    "English-speaking guide throughout",
    "Sunrise boat ride on the Ganges",
    "Monument entry fees as per itinerary",
    "All applicable hotel and transport taxes",
  ],
  exclusions: [
    "International and domestic flights, including the Jaipur–Varanasi leg — booked only on request",
    "Visa fees",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Camera fees at monuments (paid locally)",
  ],
  highlights: [
    {
      title: "A Spiritual Close, Not Another Fort",
      description:
        "Varanasi's ghats and rituals give this itinerary a genuinely different final chapter than ending back in a capital city or one more palace.",
    },
    {
      title: "Sunrise on the Ganges",
      description:
        "The dawn boat ride is timed for the moment the ghats fill with early bathers and pilgrims — a different, quieter version of the city than the crowded evening Aarti.",
    },
    {
      title: "Sarnath's Buddhist Heritage",
      description:
        "A short, easy add-on that most short Varanasi visits skip — the site of the Buddha's first sermon, a short drive from the ghats.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cooler, drier weather across Delhi, Agra and Jaipur makes daytime sightseeing far more comfortable, and Varanasi is at its most pleasant for early boat rides and evening ghat visits in these months too. April to June turns hot across the whole route, and the July–September monsoon can raise the Ganges' water level significantly, changing how the ghats look and function.",
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
      description: "Forts, palaces and desert citadels across six essential cities.",
      href: "/destinations/rajasthan",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Varanasi",
      tagline: "Spiritual India",
      description: "Ancient ghats and sacred rituals on the banks of the Ganges.",
      href: "/destinations/varanasi",
      image: "/images/destinations/varanasi-evening-ganges-aarti.webp",
      imageAlt: "Evening Ganga Aarti ceremony in Varanasi",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "How do we get from Jaipur to Varanasi?",
      answer:
        "By a short domestic flight, typically connecting via Delhi — there's no practical road route, so this leg is flown rather than driven.",
    },
    {
      question: "Is Varanasi a difficult city to visit?",
      answer:
        "It's more intense and unfiltered than Delhi, Agra or Jaipur — busy, sensory, and not always comfortable, particularly around the cremation ghats. Most travellers find it one of the most memorable parts of the trip precisely because of that.",
    },
    {
      question: "Can we do this itinerary in the other direction, ending in Jaipur instead?",
      answer:
        "Yes — some travellers prefer to see Varanasi first and close the trip with Jaipur's bazaars. Let us know your preference when booking.",
    },
    {
      question: "Is the price per person fixed?",
      answer:
        "We quote every trip individually rather than publish a fixed price, and the quote doesn't include the domestic flight segment by default — we only book flights when a client requests it. Send us your travel dates, hotel category, and whether you'd like flights arranged, and we'll reply with an exact quote.",
    },
  ],
  relatedPackages: [
    {
      name: "Delhi – Agra – Jaipur",
      tagline: "The Classic Golden Triangle · 6 Days",
      description: "The shorter, classic version of this route, without Varanasi.",
      href: "/packages/golden-triangle-tours/delhi-agra-jaipur",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Delhi – Agra – Jaipur – Udaipur",
      tagline: "Extended with Rajasthan's Lake City · 9 Days",
      description: "A different extension of the classic route, adding Udaipur instead.",
      href: "/packages/golden-triangle-tours/delhi-agra-jaipur-udaipur",
      image: "/images/destinations/udaipur-lake-palace.webp",
      imageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
    },
    {
      name: "North India Tours",
      tagline: "Delhi & Beyond",
      description: "Our broader North India category, covering the same region.",
      href: "/packages/north-india-tours",
      image: "/images/destinations/delhi-india-gate.webp",
      imageAlt: "India Gate at dusk, Delhi",
    },
  ],
  draftPendingReview: false,
};
