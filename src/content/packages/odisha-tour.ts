import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const odishaTour: PackageContent = {
  slug: "odisha-tour",
  name: "Odisha Tour",
  tagline: "The Sun Temple & the Golden Triangle of the East",
  metaTitle: "Odisha Tour Package | Konark Sun Temple, Puri & Bhubaneswar",
  metaDescription:
    "A private 5-day Odisha tour — Bhubaneswar's ancient temples, the UNESCO-listed Konark Sun Temple, Puri's Jagannath Temple, and Chilika Lake's Irrawaddy dolphins.",
  heroImage: "/images/destinations/odisha-konark-sun-temple.webp",
  heroImageAlt: "The Konark Sun Temple, Odisha",
  heroHeadline: "Odisha: The Sun Temple & the Golden Triangle of the East",
  heroSubheadline:
    "A 5-day circuit through what's often called eastern India's Golden Triangle — Bhubaneswar's temple architecture, the UNESCO-listed Sun Temple at Konark, and Puri's pilgrimage traditions and Bay of Bengal coastline.",
  overview:
    "Odisha's Bhubaneswar-Konark-Puri triangle rarely appears on a first-time visitor's India itinerary, despite holding some of the country's most significant temple architecture and one of its most important living pilgrimage traditions. Bhubaneswar alone holds over a thousand years of continuous temple-building history, with hundreds of temples across the city spanning multiple architectural periods; Konark's Sun Temple, designed as a colossal stone chariot, is among the most architecturally ambitious monuments built anywhere in medieval India; and Puri's Jagannath Temple remains one of Hinduism's four most sacred pilgrimage sites (the Char Dham), still drawing millions of devotees each year. This tour covers all three, along with Chilika Lake, one of Asia's largest coastal lagoons and a genuinely significant wintering ground for migratory birds.",
  quickFacts: [
    { label: "Duration", value: "5 Days / 4 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Bhubaneswar",
      description:
        "Private transfer from Bhubaneswar airport to your hotel, with the rest of the day free to rest after travelling. Bhubaneswar is often called the &quot;Temple City&quot; of India, holding hundreds of temples built across roughly a thousand years of continuous construction, and this tour deliberately gives it a full dedicated day tomorrow rather than a rushed drive-by. An easy evening walk near your hotel is a good way to adjust before sightseeing begins properly.",
    },
    {
      title: "Day 2 — Bhubaneswar Temple Sightseeing",
      description:
        "A full day exploring Bhubaneswar's temple architecture, starting with Lingaraj Temple, one of the oldest and largest temples in the city, dedicated to Shiva and still an active site of daily worship, its main tower rising over 55 metres. Visit Rajarani Temple, notable for its intricately carved sandstone tower and, unusually, having no presiding deity, and Mukteshwar Temple, a smaller but architecturally refined 10th-century structure often described as the gem of Odishan temple architecture for the quality of its carving. Together, the three give a genuine sense of how the region's distinctive Kalinga temple style developed over several centuries.",
      image: "/images/destinations/odisha-lingaraj-temple.webp",
      imageAlt: "The Lingaraj Temple, Bhubaneswar, Odisha",
    },
    {
      title: "Day 3 — Konark Sun Temple & Puri",
      description:
        "A drive of roughly 1.5 hours to Konark to see the Sun Temple, a UNESCO World Heritage Site built in the 13th century and designed as a colossal stone chariot for the sun god Surya, complete with 24 elaborately carved stone wheels and a team of seven horses pulling the structure, all rendered in stone at a scale that makes clear why it's considered one of medieval India's most ambitious architectural projects. Continue to Puri, roughly 40 minutes further, for the Jagannath Temple, one of Hinduism's four most sacred pilgrimage sites; note that entry is restricted to Hindus, though the temple's exterior architecture and the surrounding pilgrim town are worth experiencing regardless. The evening is free along Puri's Bay of Bengal beachfront.",
      image: "/images/destinations/odisha-jagannath-temple.webp",
      imageAlt: "The Jagannath Temple, Puri, Odisha",
    },
    {
      title: "Day 4 — Chilika Lake",
      description:
        "A day trip to Chilika Lake, one of the largest coastal lagoons in Asia and a Ramsar-designated wetland of international importance, home to a genuinely significant population of migratory birds each winter alongside a resident population of Irrawaddy dolphins, a species rarely seen elsewhere in India. A boat excursion into the lagoon offers a real chance of spotting dolphins, alongside flamingos and other waterbirds depending on the season, and the lake's scale — genuinely one of the largest of its kind anywhere — is worth experiencing even without a specific interest in birding.",
      image: "/images/destinations/odisha-chilika-lake.webp",
      imageAlt: "Aerial view of Chilika Lake, Odisha",
    },
    {
      title: "Day 5 — Departure",
      description:
        "A relaxed final morning, with an optional stop at Rajarani Temple again for morning light or some last-minute shopping for Odisha's distinctive Pattachitra scroll paintings and appliqué work, before a private transfer back to Bhubaneswar airport for your onward or international departure flight. Five days in, most travellers describe Odisha as a genuine surprise — a region with monument-density and religious significance comparable to much better-known parts of India, seen by relatively few international visitors.",
      image: "/images/destinations/odisha-rajarani-temple.webp",
      imageAlt: "The Rajarani Temple, Bhubaneswar, Odisha",
    },
  ],
  inclusions: [
    "2 nights in a hotel of your choice in Bhubaneswar",
    "2 nights in a hotel of your choice in Puri",
    "Daily breakfast",
    "Private air-conditioned vehicle for all sightseeing and transfers",
    "English-speaking guide throughout",
    "Boat excursion on Chilika Lake",
  ],
  exclusions: [
    "Flights or train tickets to and from Bhubaneswar",
    "Monument entry fees at Konark Sun Temple (paid locally)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "A Genuinely Significant, Less-Visited Circuit",
      description:
        "Monument density and religious significance comparable to much better-known parts of India, seen by relatively few international visitors.",
    },
    {
      title: "One of Medieval India's Most Ambitious Monuments",
      description:
        "The Konark Sun Temple's design as a full-scale stone chariot, complete with carved wheels and horses, is genuinely unlike anything else on a typical India itinerary.",
    },
    {
      title: "Irrawaddy Dolphins, Not Just Birdlife",
      description:
        "Chilika Lake's resident dolphin population is a genuine rarity in India, adding real variety beyond the temple circuit.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make temple sightseeing and the Chilika Lake boat excursion genuinely comfortable, and this window also coincides with peak migratory bird season on the lake. April to June turns hot and humid across the region, and the June–September monsoon brings heavy rain, particularly affecting the coastal Puri area.",
  },
  relatedDestinations: [
    {
      name: "Odisha",
      tagline: "Temples & the Bay of Bengal",
      description: "Ancient temple architecture, the Konark Sun Temple, and Chilika Lake's Irrawaddy dolphins.",
      href: "/destinations/odisha",
      image: "/images/destinations/odisha-konark-sun-temple.webp",
      imageAlt: "The Konark Sun Temple, Odisha",
    },
    {
      name: "Kolkata",
      tagline: "India's Colonial-Era Capital",
      description: "A natural gateway city on the wider eastern India circuit, with its own distinct colonial history.",
      href: "/destinations/kolkata",
      image: "/images/destinations/kolkata-victoria-memorial.webp",
      imageAlt: "The Victoria Memorial, Kolkata",
    },
    {
      name: "Kaziranga",
      tagline: "Rhino Safaris on the Brahmaputra",
      description: "A genuinely different side of Eastern India, built around wildlife rather than temple architecture.",
      href: "/destinations/kaziranga",
      image: "/images/destinations/kaziranga.webp",
      imageAlt: "A one-horned rhinoceros crossing a safari track, Kaziranga National Park",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Can non-Hindu visitors enter the Jagannath Temple?",
      answer:
        "No — entry is restricted to Hindus, a policy the temple has maintained for centuries. Non-Hindu visitors can still view the temple's exterior architecture from designated points nearby, including a rooftop viewing area at a library across the street, and the surrounding pilgrim town is genuinely worth exploring regardless.",
    },
    {
      question: "Is Odisha worth visiting if we've already done a standard North India circuit?",
      answer:
        "Yes, genuinely — Odisha's temple architecture and religious significance are comparable to much better-known Indian destinations, and the region sees relatively few international visitors, giving sites like Konark a noticeably calmer atmosphere than more heavily visited monuments elsewhere.",
    },
    {
      question: "Are Irrawaddy dolphin sightings likely at Chilika Lake?",
      answer:
        "Reasonably likely, though never guaranteed given they're wild animals — the lake holds a genuine resident population, and boat operators experienced with their typical feeding areas improve the odds meaningfully over a random excursion.",
    },
    {
      question: "How do we get to Odisha?",
      answer:
        "Bhubaneswar has its own airport with reasonable domestic connections from major Indian cities; it's the natural starting point for this itinerary.",
    },
    {
      question: "Can this be combined with Kolkata or Kaziranga?",
      answer:
        "Yes — Odisha sits within a reasonable flight connection of both, and combining it with Kolkata as part of a wider eastern India circuit is a common request; let us know when planning your trip.",
    },
  ],
  relatedPackages: [
    {
      name: "Kolkata Tour",
      tagline: "Colonial Grandeur & the Hooghly River · 4 Days",
      description: "A natural pairing on a wider eastern India circuit, with its own distinct colonial history.",
      href: "/tours/kolkata-tour",
      image: "/images/destinations/kolkata-victoria-memorial.webp",
      imageAlt: "The Victoria Memorial, Kolkata",
    },
    {
      name: "Kaziranga Tour",
      tagline: "Rhino Safaris on the Brahmaputra · 4 Days",
      description: "A genuinely different side of Eastern India, for travellers who'd like to add wildlife to the trip.",
      href: "/tours/kaziranga-tour",
      image: "/images/destinations/kaziranga.webp",
      imageAlt: "A one-horned rhinoceros crossing a safari track, Kaziranga National Park",
    },
  ],
  draftPendingReview: false,
};
