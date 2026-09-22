import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * Image notes:
 * - "everest-namche-bazaar.webp" carries a visible Adobe Stock watermark —
 *   an unlicensed stock photo. Used with caution; replace before this goes
 *   live commercially, or purchase a proper licence for it.
 * - "everest-mountain-flight-plane.webp" shows a specific airline's
 *   branded aircraft. Written content refers to "mountain flight
 *   operators" generically rather than naming that carrier, since this
 *   isn't a confirmed operator partnership.
 * - "Leh-4.webp" (used for the Leh & Ladakh related-destination card)
 *   carries a visible photographer watermark in the corner — worth
 *   checking licensing before this goes live commercially.
 */
export const everestRegion: ExperienceContent = {
  slug: "everest-region",
  name: "Everest Region",
  tagline: "Namche Bazaar & the World's Highest Peak",
  metaTitle: "Everest Region Tour | Namche Bazaar, Tengboche & the Khumbu, Nepal",
  metaDescription:
    "A 6-day trek into Nepal's Khumbu region — Lukla, Namche Bazaar, and Tengboche Monastery, with genuine Everest views, without committing to the full 12-day Base Camp trek.",
  heroImage: "/images/destinations/everest-kala-patthar-view.webp",
  heroImageAlt: "Everest and the Khumbu glacier, seen from Kala Patthar, Nepal",
  heroHeadline: "Everest Region: Namche Bazaar & the Khumbu",
  heroSubheadline:
    "A 6-day trek into the foothills of the world's highest mountain — Lukla's dramatic mountain airstrip, Sherpa culture in Namche Bazaar, and genuine Everest views from Tengboche, without committing to the full Base Camp trek.",
  overview:
    "Everest Base Camp itself takes most trekkers 12 to 14 days round trip, a genuine commitment that puts it out of reach for many travellers with limited time. This itinerary covers the same starting ground — the dramatic Lukla airstrip landing, the Sherpa capital of Namche Bazaar, and the approach toward Everest through Sagarmatha National Park — in a more realistic 6 days, reaching Tengboche Monastery, one of the region's most significant Buddhist sites, with genuine, unobstructed Everest views along the way. For travellers who'd rather see the mountain without trekking at all, a scenic mountain flight from Kathmandu is also a realistic single-day alternative, covered in the FAQs below.",
  quickFacts: [
    { label: "Duration", value: "6 Days / 5 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Mar – May & Oct – Nov" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Fly to Lukla, Trek to Phakding",
      description:
        "An early morning flight from Kathmandu to Lukla, landing on one of the most famous short mountain airstrips in the world, built on a steep incline to help aircraft slow down given the limited runway length, with mountains rising directly on either side of the approach. From Lukla, a gentle 3 to 4-hour trek downhill to Phakding, following the Dudh Kosi river through rhododendron forest and small Sherpa villages, with genuinely comfortable walking on the first day to help with acclimatisation before the terrain gets steeper.",
    },
    {
      title: "Day 2 — Trek to Namche Bazaar",
      description:
        "A more demanding 6 to 7-hour trek, crossing several suspension bridges over the Dudh Kosi before a steep, sustained climb into Namche Bazaar, the unofficial capital of the Khumbu region and the last major town before the high mountains. Namche sits in a natural amphitheatre carved into the hillside, its stone houses stacked in tiers around a curved slope, and functions as the trekking region's main trading hub, with shops, bakeries and lodges serving trekkers heading toward Everest itself and mountaineering expeditions passing through each season.",
    },
    {
      title: "Day 3 — Acclimatisation Day in Namche",
      description:
        "A rest day built specifically for altitude acclimatisation, with a short side hike to the Everest View Hotel above Namche — one of the highest-placed hotels in the world — offering a genuine first sighting of Everest itself alongside Lhotse and Ama Dablam on a clear day. In the afternoon, the Sherpa Culture Museum and the Saturday market, if timing allows, offer a good sense of the region's Sherpa community and Tibetan Buddhist traditions, from prayer wheels and mani stones to the traditional dress still worn by many older residents, before continuing higher tomorrow.",
    },
    {
      title: "Day 4 — Trek to Tengboche",
      description:
        "A 5 to 6-hour trek climbing steadily out of Namche, with increasingly open views of the surrounding peaks, to Tengboche, home to the largest Buddhist monastery in the Khumbu region. The monastery sits on a ridge with a genuinely spectacular backdrop of Everest, Lhotse, Ama Dablam and Thamserku all visible together on a clear afternoon, and evening prayers held by the resident monks are open for visitors to observe respectfully.",
      image: "/images/destinations/everest-region-gokyo-lake.webp",
      imageAlt: "The Khumbu region's mountain lakes and peaks, Nepal",
    },
    {
      title: "Day 5 — Return Trek to Namche",
      description:
        "A descending trek back through the same trail to Namche Bazaar, with the return journey giving a genuinely different perspective on terrain climbed in the opposite direction two days earlier, descending noticeably faster than the climb up. The afternoon is left free to rest in Namche, with time for any last-minute shopping in the town's trekking shops and bakeries, or a final look at the mountains before the trek's last descent tomorrow.",
    },
    {
      title: "Day 6 — Trek to Lukla, Fly to Kathmandu",
      description:
        "A final descending trek back to Lukla, retracing the route through Phakding, before a flight back to Kathmandu, weather and scheduling permitting given how frequently these mountain flights face delays. Six days in the Khumbu behind you — genuine Everest views, Sherpa culture in Namche Bazaar, and one of Buddhism's most significant regional monasteries at Tengboche, all without the extended time commitment the full Base Camp trek requires.",
    },
  ],
  inclusions: [
    "5 nights in teahouse lodges along the trekking route",
    "All meals during the trek (standard practice given limited food options at altitude)",
    "Domestic flights, Kathmandu to Lukla and return",
    "Licensed trekking guide and porter throughout",
    "Sagarmatha National Park entry permit and local area permits",
  ],
  exclusions: [
    "Flights or train tickets to and from Kathmandu",
    "Personal trekking gear (available for hire in Kathmandu on request)",
    "Personal expenses, tips, and travel insurance (trekking-specific coverage strongly recommended)",
    "Emergency evacuation insurance, genuinely worth arranging given the altitude and remoteness",
  ],
  highlights: [
    {
      title: "Genuine Everest Views, Realistic Timeframe",
      description:
        "Reaches Tengboche with unobstructed mountain views in 6 days, rather than the 12 to 14 days a full Base Camp trek requires.",
    },
    {
      title: "One of the World's Most Dramatic Airstrips",
      description:
        "The landing at Lukla is a genuinely memorable start to the trip in its own right, before the trekking even begins.",
    },
    {
      title: "A Built-In Acclimatisation Day",
      description:
        "The rest day in Namche is a genuine safety measure, not padding — altitude sickness is a real risk this itinerary is built to manage properly.",
    },
  ],
  bestTimeToVisit: {
    heading: "March–May & October–November are Best",
    note: "These two windows offer the clearest mountain views and most stable weather for both trekking and the Lukla flights, which are frequently delayed or cancelled in poor visibility. The June–September monsoon brings heavy rain and cloud cover that obscures the peaks, and December–February turns genuinely cold at altitude, with some teahouses closing for the season.",
  },
  relatedDestinations: [
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
    {
      name: "Leh & Ladakh",
      tagline: "High-Altitude Desert",
      description: "A different Himalayan landscape entirely, for travellers who'd like more high-altitude terrain.",
      href: "/destinations/leh-ladakh",
      image: "/images/destinations/Leh-4.webp",
      imageAlt: "Pangong Lake in the Ladakh mountains",
    },
  ],
  showCarFleet: false,
  faqs: [
    {
      question: "Do we need previous trekking experience for this itinerary?",
      answer:
        "No technical climbing experience is required — this is a walking trek on established trails — but a reasonable level of fitness genuinely matters given the altitude and the sustained daily climbs, particularly on Day 2 into Namche.",
    },
    {
      question: "Is there a non-trekking way to see Everest?",
      answer:
        "Yes — a scenic mountain flight from Kathmandu, roughly an hour round trip, flies close to Everest and the surrounding peaks without any walking required, a realistic option for travellers short on time or unable to trek. We can arrange this as a standalone day activity if you'd prefer it to the full itinerary.",
    },
    {
      question: "How real is the risk of altitude sickness on this trek?",
      answer:
        "Genuine, though manageable — Namche sits at roughly 3,440 metres and Tengboche at around 3,860 metres, altitudes where mild symptoms are common. The built-in acclimatisation day in Namche is specifically designed to reduce this risk, and your guide is trained to recognise and respond to symptoms if they arise.",
    },
    {
      question: "Can this itinerary be extended to reach Everest Base Camp itself?",
      answer:
        "Yes — this 6-day trek is a genuine starting template that can be extended by 6 to 8 additional days to reach Base Camp and back; let us know if you'd like the full itinerary instead.",
    },
    {
      question: "Are Lukla flights reliable?",
      answer:
        "They're frequently affected by weather, particularly outside the peak March–May and October–November windows, and delays or cancellations are genuinely common — we build a buffer day into trip planning where possible, and it's worth having flexible onward travel plans.",
    },
  ],
  relatedExperiences: [
    {
      name: "International Yoga Festival, Rishikesh",
      tagline: "Festival Guide",
      description: "A completely different Himalayan-adjacent experience, built around yoga rather than trekking.",
      href: "/experiences/international-yoga-festival-rishikesh",
      image: "/images/destinations/rishikesh-2.webp",
      imageAlt: "The Lakshman Jhula suspension bridge over the Ganges, Rishikesh",
    },
    {
      name: "Lumbini",
      tagline: "The Birthplace of the Buddha",
      description: "A genuinely different side of Nepal, pairing well with this trek as a lowland extension.",
      href: "/experiences/lumbini",
      image: "/images/destinations/lumbini-maya-devi-temple.webp",
      imageAlt: "The Maya Devi Temple and ancient ruins, Lumbini, Nepal",
    },
    {
      name: "Nepal Tours",
      tagline: "Temples, Mountains & the Jungle · 8 Days",
      description: "The wider Nepal circuit, for travellers who'd rather combine mountain views with temples and a jungle safari.",
      href: "/tours/nepal-tours",
      image: "/images/destinations/pokhara-valley-machapuchare-view.webp",
      imageAlt: "Pokhara valley with Machapuchare mountain view, Nepal",
    },
  ],
  draftPendingReview: false,
};
