import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const kazirangaTour: PackageContent = {
  slug: "kaziranga-tour",
  name: "Kaziranga Tour",
  tagline: "Rhino Safaris on the Brahmaputra Floodplain",
  metaTitle: "Kaziranga Tour Package | One-Horned Rhino Safaris, Assam",
  metaDescription:
    "A private 4-day Kaziranga tour — jeep safaris across two distinct ranges of India's premier one-horned rhinoceros sanctuary, on the Brahmaputra floodplain in Assam.",
  heroImage: "/images/destinations/kaziranga.webp",
  heroImageAlt: "A one-horned rhinoceros crossing a safari track, Kaziranga National Park",
  heroHeadline: "Kaziranga: Rhino Safaris on the Brahmaputra Floodplain",
  heroSubheadline:
    "A 4-day safari through Assam's premier wildlife sanctuary — home to roughly two-thirds of the world's remaining wild one-horned rhinoceroses, on a genuinely different floodplain landscape from India's tiger reserves.",
  overview:
    "Kaziranga National Park holds a conservation record few other reserves anywhere in the world can match — it's home to roughly two-thirds of the entire global population of the greater one-horned rhinoceros, recovered from a population of barely a few hundred in the early 20th century through sustained, decades-long protection efforts. The park itself sits on the floodplain of the Brahmaputra River, a genuinely different landscape from the dry deciduous forest of Rajasthan's or Madhya Pradesh's tiger reserves — tall elephant grass, marshland and scattered forest patches that flood seasonally, shaping both the terrain and the animals that depend on it. This tour covers two of the park's distinct safari ranges, giving a fuller sense of Kaziranga's wildlife and landscape than a single rushed range visit would.",
  quickFacts: [
    { label: "Duration", value: "4 Days / 3 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Nov – Apr" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Kaziranga",
      description:
        "A flight into Jorhat airport, the nearest major airport, followed by a roughly 1.5-hour drive to Kaziranga through Assam's tea-growing countryside. Private transfer to your lodge, with the rest of the day free to rest after travelling. Kaziranga's location on the Brahmaputra floodplain gives it a genuinely different character from India's better-known tiger reserves, and this tour is built around exploring that landscape properly across two of the park's four safari ranges rather than rushing through just one.",
    },
    {
      title: "Day 2 — Central Range (Kohora) Safari",
      description:
        "Morning and afternoon jeep safaris into Kaziranga's Central Range, the park's oldest and most established safari zone, covering tall elephant grass and open marshland where one-horned rhinos are seen with genuinely strong regularity. Beyond rhinos, the range holds wild water buffalo, swamp deer, and — with real luck — the Bengal tiger, since Kaziranga also holds one of India's highest tiger densities despite being far better known for its rhinos. The Brahmaputra itself is visible from several points within the range, its wide floodplain shaping the entire ecosystem around it.",
      image: "/images/destinations/kaziranga-rhino.webp",
      imageAlt: "Two one-horned rhinoceroses in grassland, Kaziranga National Park",
    },
    {
      title: "Day 3 — Western Range (Bagori) Safari",
      description:
        "A full day at Kaziranga's Western Range, a genuinely different landscape from the Central Range's grassland — more water bodies and wetland habitat, making it a particularly strong range for birdlife alongside rhinos and elephants. Over 480 bird species have been recorded across Kaziranga as a whole, and the park's wetlands specifically draw both resident and migratory waterbirds, making this range a worthwhile stop even for visitors without a dedicated birding interest. Elephant-back safaris are sometimes offered within the park depending on current park policy and animal welfare guidelines; we can advise on current availability when planning your trip.",
      image: "/images/destinations/kaziranga-safari.webp",
      imageAlt: "A safari jeep on a forest track, Kaziranga National Park",
    },
    {
      title: "Day 4 — Departure",
      description:
        "A final morning safari if your schedule allows, or a relaxed morning at your lodge, before a private transfer back to Jorhat airport for your onward or international departure flight. Four days and multiple safaris across two genuinely distinct ranges behind you, most visitors describe Kaziranga's rhino sightings as reliably strong compared to the more variable tiger-sighting odds at other Indian reserves, given how successfully the park's rhino population has recovered from near-extinction over the past century.",
    },
  ],
  inclusions: [
    "3 nights at a lodge of your choice near Kaziranga",
    "All meals at the lodge",
    "4 jeep safaris across two park ranges (2 per range)",
    "Private air-conditioned vehicle for all road transfers",
    "Naturalist guide for each safari",
    "Kaziranga National Park entry and safari permit fees",
  ],
  exclusions: [
    "Flights to and from Jorhat",
    "Camera fees, if applicable (paid locally)",
    "Elephant-back safari, if available and requested (paid locally, arranged on request)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "A Conservation Success Story",
      description:
        "Kaziranga holds roughly two-thirds of the world's remaining wild one-horned rhinos, recovered from near-extinction through decades of protection.",
    },
    {
      title: "A Genuinely Different Landscape",
      description:
        "The Brahmaputra floodplain's tall grass and wetlands offer a real contrast to the dry deciduous forest of Rajasthan's and Madhya Pradesh's tiger reserves.",
    },
    {
      title: "Strong, Reliable Sightings",
      description:
        "Rhino sightings here are genuinely more consistent than the often-variable tiger-sighting odds at other Indian reserves.",
    },
  ],
  bestTimeToVisit: {
    heading: "November–April is Best",
    note: "The park is closed each year from roughly May through October due to monsoon flooding, which is essential to the floodplain ecosystem but makes safaris impossible during that window. November through April offers dry conditions and the best visibility across the grassland and wetland ranges.",
  },
  relatedDestinations: [
    {
      name: "Kaziranga",
      tagline: "Rhino Safaris on the Brahmaputra",
      description: "Home to roughly two-thirds of the world's remaining wild one-horned rhinoceroses.",
      href: "/destinations/kaziranga",
      image: "/images/destinations/kaziranga.webp",
      imageAlt: "A one-horned rhinoceros crossing a safari track, Kaziranga National Park",
    },
    {
      name: "Darjeeling",
      tagline: "Tea Gardens & Himalayan Views",
      description: "A hill station built around tea, a UNESCO steam railway, and sunrise views of Kanchenjunga.",
      href: "/destinations/darjeeling",
      image: "/images/destinations/Darjeeling.webp",
      imageAlt: "Darjeeling town on the hillside, West Bengal",
    },
    {
      name: "Sikkim",
      tagline: "A Himalayan Buddhist Kingdom",
      description: "A former independent kingdom with monasteries, high-altitude lakes and giant hilltop statues.",
      href: "/destinations/sikkim",
      image: "/images/destinations/sikkim-tsomgo-lake.webp",
      imageAlt: "Tsomgo Lake in the Sikkim Himalayas",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Are rhino sightings genuinely likely, or is it similar to tiger-spotting odds elsewhere?",
      answer:
        "Genuinely more reliable — Kaziranga's rhino population is large and well-established across its grassland ranges, and most visitors see multiple rhinos across a 2-day safari, a meaningfully higher likelihood than tiger sightings at most Indian reserves.",
    },
    {
      question: "Can we also see tigers at Kaziranga?",
      answer:
        "It's possible, since Kaziranga holds one of India's highest tiger densities, but sightings are considerably less predictable than rhinos given the tall grass cover; we'd recommend visiting primarily for the rhinos and treating any tiger sighting as a genuine bonus.",
    },
    {
      question: "Why is the park closed for part of the year?",
      answer:
        "Kaziranga closes roughly May through October each year due to monsoon flooding from the Brahmaputra, which is actually essential to maintaining the floodplain grassland ecosystem the park's wildlife depends on, even though it makes safaris impossible during that window.",
    },
    {
      question: "How do we get to Kaziranga?",
      answer:
        "Jorhat is the nearest major airport, roughly 1.5 hours from the park by road; Guwahati is a larger, better-connected airport further away (roughly 4 to 5 hours), worth considering if your flight options into Jorhat are limited.",
    },
    {
      question: "Can this be combined with Darjeeling or Sikkim?",
      answer:
        "It's a genuine option given all three sit in the wider Northeast India and West Bengal region, though the travel distances between them are meaningful; we can advise on realistic routing if you'd like to combine Kaziranga with either destination.",
    },
  ],
  relatedPackages: [
    {
      name: "Tiger Safari Tours",
      tagline: "Bandhavgarh, Kanha & Pench · 7 Days",
      description: "For travellers who'd like to compare Kaziranga's rhino-focused safaris with Central India's tiger reserves.",
      href: "/experiences/tiger-safari-tours",
      image: "/images/destinations/bandhavgarh-tiger.webp",
      imageAlt: "Two tigers at a waterhole, Bandhavgarh National Park",
    },
    {
      name: "Ranthambore Tour",
      tagline: "Rajasthan's Premier Tiger Reserve",
      description: "A different Indian safari experience entirely, pairing tiger tracking with a historic fort inside the park.",
      href: "/tours/ranthambore-tour",
      image: "/images/destinations/ranthambore-tiger.webp",
      imageAlt: "A wild tiger at Ranthambore National Park",
    },
  ],
  draftPendingReview: false,
};
