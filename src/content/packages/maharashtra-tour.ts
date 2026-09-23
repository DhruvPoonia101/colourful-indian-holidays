import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * No genuine Ellora Caves or Shirdi photo exists in the asset library,
 * despite both being covered in the itinerary — both are described in the
 * written content without a matching image rather than forcing an
 * unrelated photo into those slots. "maharashtra-csmt.webp" (another
 * angle of Mumbai's CSMT station) was considered but not used, since this
 * page is deliberately framed around content beyond Mumbai, which already
 * has its own dedicated tour.
 */
export const maharashtraTour: PackageContent = {
  slug: "maharashtra-tour",
  name: "Maharashtra Tour",
  tagline: "Ajanta, Ellora & Shirdi",
  metaTitle: "Maharashtra Tour Package | Ajanta & Ellora Caves, Shirdi",
  metaDescription:
    "A private 5-day Maharashtra tour beyond Mumbai — the UNESCO-listed Ajanta and Ellora cave temples near Aurangabad, and Shirdi, one of India's most-visited pilgrimage towns.",
  heroImage: "/images/destinations/maharashtra-ajanta-caves.webp",
  heroImageAlt: "The interior of a rock-cut cave temple at Ajanta, Maharashtra",
  heroHeadline: "Maharashtra: Beyond Mumbai",
  heroSubheadline:
    "A 5-day circuit into inland Maharashtra — the UNESCO-listed rock-cut cave temples of Ajanta and Ellora, and Shirdi, one of India's most-visited pilgrimage towns, both far removed from Mumbai's coastal skyline.",
  overview:
    "Most visitors to Maharashtra never leave Mumbai, which means missing two of the state's most significant sites entirely — the Ajanta and Ellora cave complexes, carved directly into rock over centuries by Buddhist, Hindu and Jain communities working in succession, and Shirdi, a pilgrimage town built around the legacy of Sai Baba, a 19th-century spiritual figure venerated across religious lines. Both sit inland, several hours from Mumbai, in a part of Maharashtra genuinely different in character from the coast — drier, more historically layered, and centred on monuments carved from or dedicated on solid rock rather than colonial-era buildings. This tour covers both, based from Aurangabad, the natural gateway to the cave complexes.",
  quickFacts: [
    { label: "Duration", value: "5 Days / 4 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Aurangabad",
      description:
        "A flight into Aurangabad, the natural base for visiting both the Ajanta and Ellora cave complexes, followed by private transfer to your hotel. The rest of the day is free to rest after travelling, with an easy first evening visit to Bibi Ka Maqbara, a 17th-century mausoleum built in deliberate imitation of the Taj Mahal by the son of Emperor Aurangzeb, close enough in design to be genuinely worth seeing even knowing it's a smaller-scale tribute rather than the original.",
    },
    {
      title: "Day 2 — Ajanta Caves",
      description:
        "A full day at the Ajanta Caves, a UNESCO World Heritage Site roughly 100 kilometres from Aurangabad, comprising 30 rock-cut Buddhist cave monuments carved between the 2nd century BCE and roughly 480 CE. The caves hold genuinely exceptional Buddhist paintings and sculpture, including some of the oldest surviving Indian paintings anywhere, depicting Jataka tales (stories of the Buddha's previous lives) in remarkably preserved detail given their age. The complex was rediscovered by a British officer in 1819 after centuries hidden by jungle growth, having been abandoned and largely forgotten for over a thousand years.",
      image: "/images/destinations/maharashtra-ajanta-caves.webp",
      imageAlt: "The interior of a rock-cut cave temple at Ajanta, Maharashtra",
    },
    {
      title: "Day 3 — Ellora Caves & Daulatabad Fort",
      description:
        "A full day at the Ellora Caves, another UNESCO World Heritage Site roughly 30 kilometres from Aurangabad, genuinely distinct from Ajanta in that its 34 caves represent three different religious traditions — Buddhist, Hindu and Jain — carved in succession over several centuries, demonstrating a period of religious tolerance and coexistence at the site. The undisputed highlight is the Kailasa Temple, an entire temple carved downward out of a single rock face rather than built up from the ground, considered one of the most remarkable feats of rock-cut architecture anywhere in the world. En route, a stop at Daulatabad Fort, a hilltop fortress with a genuinely ingenious defensive design that briefly served as the capital of the Delhi Sultanate in the 14th century.",
    },
    {
      title: "Day 4 — Aurangabad to Shirdi",
      description:
        "A drive of roughly 4 hours to Shirdi, a pilgrimage town built around the legacy of Sai Baba, a spiritual figure who lived in the town until his death in 1918 and is venerated by both Hindus and Muslims, a genuinely unusual cross-religious devotion that gives Shirdi a distinct character among Indian pilgrimage sites. Visit the Sai Baba Samadhi Mandir, the main temple built over his tomb, drawing a steady flow of devotees from across India and abroad regardless of specific religious background.",
    },
    {
      title: "Day 5 — Departure",
      description:
        "A relaxed final morning in Shirdi, with time for a further visit to the temple complex if the previous day's crowds meant a shorter visit, before a private transfer to Shirdi's own small airport (or back to Aurangabad, depending on your onward flight) for your departure. Five days into inland Maharashtra behind you, most travellers describe the Ajanta and Ellora caves specifically as a genuine highlight of their entire India trip, rock-cut architecture and painting that rewards the extra distance from Mumbai considerably.",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice in Aurangabad",
    "1 night in a hotel of your choice in Shirdi",
    "Daily breakfast",
    "Private air-conditioned vehicle for all sightseeing and transfers",
    "English-speaking guide throughout",
    "Ajanta and Ellora Caves entry fees",
  ],
  exclusions: [
    "Flights to and from Aurangabad, and from Shirdi",
    "Bibi Ka Maqbara and Daulatabad Fort entry fees, if applicable (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Rock-Cut Architecture at Its Most Ambitious",
      description:
        "Ellora's Kailasa Temple, carved downward from a single rock face, is genuinely one of the most remarkable feats of ancient architecture anywhere.",
    },
    {
      title: "Some of India's Oldest Surviving Paintings",
      description:
        "Ajanta's Buddhist murals, dating back roughly 1,500 to 2,000 years, remain in remarkably preserved condition given their age.",
    },
    {
      title: "A Genuinely Cross-Religious Pilgrimage",
      description:
        "Shirdi's devotion to Sai Baba spans Hindu and Muslim traditions alike, a distinct character among India's major pilgrimage sites.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make walking the Ajanta and Ellora cave complexes genuinely comfortable, given how much ground is covered on foot across open, sun-exposed terrain. April to June turns hot across inland Maharashtra, and the June–September monsoon brings heavy rain, though it does make the surrounding landscape noticeably greener.",
  },
  relatedDestinations: [
    {
      name: "Maharashtra",
      tagline: "Beyond Mumbai",
      description: "UNESCO rock-cut cave temples, Maratha-era heritage, and one of India's most-visited pilgrimage towns.",
      href: "/destinations/maharashtra",
      image: "/images/destinations/maharashtra-ajanta-caves.webp",
      imageAlt: "The interior of a rock-cut cave temple at Ajanta, Maharashtra",
    },
    {
      name: "Mumbai",
      tagline: "India's Financial Capital",
      description: "Colonial landmarks, the Gateway of India, and the sweeping curve of Marine Drive.",
      href: "/destinations/mumbai",
      image: "/images/destinations/Mumbai.webp",
      imageAlt: "Chhatrapati Shivaji Maharaj Terminus, Mumbai",
    },
    {
      name: "Maharashtra Beaches",
      tagline: "The Konkan Coastline",
      description: "A quieter, less-developed stretch of Maharashtra's coast, for travellers extending the trip further.",
      href: "/destinations/maharashtra-beaches",
      image: "/images/destinations/maharashtra-beaches.webp",
      imageAlt: "A beach along Maharashtra's Konkan coastline",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "What's the difference between Ajanta and Ellora?",
      answer:
        "Ajanta's 30 caves are exclusively Buddhist and especially known for their painted murals, while Ellora's 34 caves represent Buddhist, Hindu and Jain traditions side by side, with the rock-cut Kailasa Temple as its centrepiece — genuinely different in both religious scope and visual character.",
    },
    {
      question: "How much walking is involved at the cave complexes?",
      answer:
        "A genuine amount — both sites are spread across open terrain with numerous individual caves to walk between, so comfortable footwear is worth packing, and visiting during the cooler months makes the walking considerably more pleasant.",
    },
    {
      question: "Is Shirdi worth visiting for non-religious travellers?",
      answer:
        "It's primarily a pilgrimage-focused stop, so travellers without a specific interest may find less to do compared to the cave complexes; we can adjust the itinerary to shorten or skip Shirdi if it doesn't align with your interests.",
    },
    {
      question: "Can this be combined with a Mumbai stay?",
      answer:
        "Yes — Aurangabad connects by a short flight from Mumbai, and combining this circuit with our Mumbai Tour as part of a wider Maharashtra trip is a common request; let us know when planning your trip.",
    },
    {
      question: "How crowded do the caves get?",
      answer:
        "Both sites draw a genuine but generally manageable flow of visitors, considerably less crowded than more heavily promoted Indian monuments like the Taj Mahal; early morning visits offer the calmest experience at both.",
    },
  ],
  relatedPackages: [
    {
      name: "Mumbai Tour",
      tagline: "Colonial Landmarks & the Arabian Sea · 4 Days",
      description: "The natural pairing for a wider Maharashtra trip, connected by a short domestic flight.",
      href: "/tours/mumbai-tour",
      image: "/images/destinations/Mumbai.webp",
      imageAlt: "Chhatrapati Shivaji Maharaj Terminus, Mumbai",
    },
    {
      name: "Golden Triangle Tour",
      tagline: "Delhi – Agra – Jaipur · 6 Days",
      description: "For travellers who'd rather combine Ajanta and Ellora with North India's classic monuments.",
      href: "/tours/golden-triangle-tour-classic",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
  ],
  draftPendingReview: false,
};
