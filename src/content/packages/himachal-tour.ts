import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * Image note: "manali-valley.webp" shows a high-altitude, largely barren
 * snow and river landscape more consistent with the Rohtang Pass / Lahaul
 * approach than Manali's own greener valley town. Used honestly for the
 * Day 5 high-altitude excursion rather than claiming it depicts Manali
 * town itself.
 */
export const himachalTour: PackageContent = {
  slug: "himachal-tour",
  name: "Himachal Tour",
  tagline: "Shimla & Manali in 6 Days",
  metaTitle: "Himachal Tour Package | Shimla & Manali, 6 Days",
  metaDescription:
    "A private 6-day Himachal tour through Shimla and Manali — colonial hill-station architecture, the toy train, Hadimba Temple, and a high-altitude excursion toward Rohtang Pass.",
  heroImage: "/images/destinations/shimla-town.webp",
  heroImageAlt: "Shimla town built into the Himalayan hillside",
  heroHeadline: "Himachal: Shimla & Manali",
  heroSubheadline:
    "A 6-day circuit through Himachal Pradesh's two most iconic hill stations — Shimla's colonial architecture and Manali's forested valley, connected by one of North India's classic mountain drives.",
  overview:
    "Shimla and Manali are Himachal Pradesh's two most visited hill stations, and for genuinely good reason — Shimla carries the architectural legacy of having served as the summer capital of British India, with Tudor-style buildings and a pedestrian Mall Road that still feels distinctly colonial, while Manali sits in a forested valley along the Beas river, the natural gateway to high-altitude excursions toward the Rohtang Pass and beyond. This tour covers both, connected by a scenic mountain drive through pine forest and terraced hillsides, giving genuine variety rather than two versions of the same hill-station experience.",
  quickFacts: [
    { label: "Duration", value: "6 Days / 5 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Mar – Jun & Oct – Dec" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Shimla",
      description:
        "A drive from Chandigarh airport (roughly 3.5 to 4 hours) to Shimla, Himachal Pradesh's capital and, from 1864 to 1939, the summer capital of British India, when the entire colonial government relocated here each year to escape the plains' heat, along with all its paperwork and staff. Private transfer to your hotel, with the rest of the day free to rest after travelling. In the evening, an easy first walk along Mall Road, Shimla's pedestrian-only main thoroughfare lined with colonial-era buildings, cafés and shops.",
    },
    {
      title: "Day 2 — Shimla Sightseeing",
      description:
        "A full day exploring Shimla's colonial legacy, starting with Christ Church, one of the oldest churches in North India, its neo-Gothic architecture and stained glass windows a striking contrast against the surrounding pine forest. Visit the Viceregal Lodge, a grand stone building that once housed the British Viceroy of India and hosted significant historical negotiations, now a research institute with parts open to visitors. In the afternoon, a hike or cable car ride up to the Jakhu Temple, dedicated to Hanuman and home to a large statue visible from much of the town, along with a resident population of macaques worth being mindful of.",
    },
    {
      title: "Day 3 — Shimla to Manali",
      description:
        "A scenic drive of roughly 7 to 8 hours to Manali, descending from Shimla's hillside through pine forest, terraced farmland and small mountain villages, with the route following the Beas river for much of its final stretch and genuinely worth the drive time for the changing scenery alone. Arrive in Manali by evening, with the town's noticeably different character immediately apparent — younger, more backpacker-oriented, and set directly against a backdrop of snow-capped peaks rather than Shimla's more manicured colonial hillside.",
    },
    {
      title: "Day 4 — Manali Sightseeing",
      description:
        "A full day around Manali, starting with the Hadimba Temple, a wooden cave temple dedicated to Hadimba Devi and set within a cedar forest, its distinctive pagoda-style architecture unlike anything seen in Shimla. Visit Old Manali, a quieter, cafe-lined area across the river from the main town, popular with longer-staying travellers, and Vashisht village, known for its natural hot springs and an ancient temple complex. The Tibetan monastery and market near the main town add a further layer to Manali's genuinely mixed cultural character.",
      image: "/images/destinations/manali-valley.webp",
      imageAlt: "A high-altitude valley near Manali, Himachal Pradesh",
    },
    {
      title: "Day 5 — Solang Valley & High-Altitude Excursion",
      description:
        "A day trip toward Solang Valley, roughly 30 minutes from Manali, a genuinely popular spot for paragliding, zorbing and — in winter — skiing, with a cable car offering wide views over the surrounding peaks. Depending on the season and road conditions, an excursion further toward the Rohtang Pass area is possible, climbing into a starker, higher-altitude landscape of snow and bare rock genuinely different from Manali's forested valley floor; your guide will confirm feasibility based on current conditions and any permit requirements closer to your travel dates.",
    },
    {
      title: "Day 6 — Departure",
      description:
        "A relaxed final morning in Manali, with time for any last-minute shopping in the main market for Himachali shawls, caps and handicrafts, before a private transfer to Bhuntar airport (Kullu-Manali) or a longer drive back to Chandigarh for your onward or international departure flight. Six days across two genuinely distinct Himachal hill stations behind you — Shimla's colonial legacy and Manali's forested, high-altitude gateway, each memorable for entirely different reasons.",
    },
  ],
  inclusions: [
    "2 nights in a hotel of your choice in Shimla",
    "3 nights in a hotel of your choice in Manali",
    "Daily breakfast",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide throughout",
    "Cable car ticket for Jakhu Temple, if used",
  ],
  exclusions: [
    "Flights or train tickets to and from Chandigarh, and from Manali",
    "Solang Valley and Rohtang Pass activity fees, and any required permits (paid locally, arranged on request)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Two Genuinely Different Hill Stations",
      description:
        "Shimla's colonial architecture and manicured Mall Road contrast directly with Manali's younger, forested, more adventure-oriented character.",
    },
    {
      title: "A Classic Himalayan Drive",
      description:
        "The Shimla-to-Manali road trip through pine forest and terraced hillsides is a genuine highlight in its own right, not just a transit day.",
    },
    {
      title: "Real High-Altitude Access",
      description:
        "Manali's proximity to Solang Valley and the Rohtang Pass area gives genuine access to high-altitude terrain without a multi-day trek.",
    },
  ],
  bestTimeToVisit: {
    heading: "March–June & October–December are Best",
    note: "Spring and early summer offer blooming valleys and comfortable temperatures before the monsoon, while autumn brings clear mountain air after the rains. The June–September monsoon can trigger landslides on the Shimla-Manali road specifically, and December–February brings heavy snow that can close high-altitude routes like Rohtang Pass entirely, though it does turn Manali into a genuine winter-sports destination for those specifically seeking snow.",
  },
  relatedDestinations: [
    {
      name: "Himachal",
      tagline: "Hill Stations & the Himalayas",
      description: "Colonial-era Shimla and forested Manali, Himachal Pradesh's two most visited hill stations.",
      href: "/destinations/himachal",
      image: "/images/destinations/shimla-town.webp",
      imageAlt: "Shimla town built into the Himalayan hillside",
    },
    {
      name: "Leh & Ladakh",
      tagline: "High-Altitude Desert",
      description: "A genuinely different, starker Himalayan landscape, reachable by road from Manali in season.",
      href: "/destinations/leh-ladakh",
      image: "/images/destinations/Leh-4.webp",
      imageAlt: "Pangong Lake in the Ladakh mountains",
    },
    {
      name: "Rishikesh & Haridwar",
      tagline: "The Yoga Capital of the World",
      description: "A different kind of Himalayan-foothill town, built around the Ganges rather than colonial history.",
      href: "/destinations/rishikesh-haridwar",
      image: "/images/destinations/rishikesh-2.webp",
      imageAlt: "The Lakshman Jhula suspension bridge over the Ganges, Rishikesh",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is the Manali-Leh road accessible from this itinerary?",
      answer:
        "The Manali-Leh highway is only open roughly June through September due to snow, and it's a multi-day high-altitude drive in its own right — not something we'd add onto this specific 6-day trip, but we can build a dedicated extension if you have the extra time and it falls within the open season.",
    },
    {
      question: "Is Rohtang Pass always accessible during the trip?",
      answer:
        "No — it's genuinely weather- and season-dependent, sometimes requiring a permit, and can close entirely in winter due to snow. We'll confirm current access conditions closer to your travel dates and suggest Solang Valley as a reliable alternative if the pass itself isn't accessible.",
    },
    {
      question: "How should we get to Shimla to start the trip?",
      answer:
        "Most travellers fly into Chandigarh and drive roughly 3.5 to 4 hours to Shimla; a scenic alternative is the narrow-gauge Kalka-Shimla toy train, a UNESCO World Heritage railway, though it takes considerably longer than driving.",
    },
    {
      question: "Is this trip suitable in winter?",
      answer:
        "Yes, though with a different character — December to February brings genuine snow to both towns and turns Manali into a winter-sports destination, but high-altitude excursions toward Rohtang Pass are typically not possible during this period.",
    },
    {
      question: "Can we add Dharamshala or Dalhousie to this itinerary?",
      answer:
        "Yes — this 6-day circuit is a starting template. Dharamshala (home to the Dalai Lama's residence-in-exile) or Dalhousie can both be added with 2 to 3 extra days; let us know when planning your trip.",
    },
  ],
  relatedPackages: [
    {
      name: "Kashmir Valley Tour",
      tagline: "Srinagar, Gulmarg & Pahalgam",
      description: "A different Himalayan valley entirely, for travellers who'd like to compare the two regions.",
      href: "/tours/kashmir-valley-tour",
      image: "/images/destinations/Srinagar-3.webp",
      imageAlt: "Houseboats on Dal Lake with snow-capped mountains behind, Srinagar",
    },
    {
      name: "Ladakh Tour",
      tagline: "High-Altitude Desert & Monasteries",
      description: "A genuinely starker, higher-altitude Himalayan landscape, reachable by road from Manali in season.",
      href: "/tours/ladakh-tour",
      image: "/images/destinations/Leh-4.webp",
      imageAlt: "Pangong Lake in the Ladakh mountains",
    },
    {
      name: "Kashmir & Ladakh Tours",
      tagline: "The Classic Circuit · 9 Days",
      description: "The fuller Kashmir and Ladakh circuit, for travellers who'd like both regions in one longer trip.",
      href: "/tours/kashmir-ladakh-tours-classic",
      image: "/images/destinations/Leh-4.webp",
      imageAlt: "Pangong Lake in the Ladakh mountains",
    },
  ],
  draftPendingReview: false,
};
