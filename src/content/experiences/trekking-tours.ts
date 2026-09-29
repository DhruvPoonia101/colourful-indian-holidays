import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still
 * drafted content Dhruv should review for accuracy.
 *
 * Built around the Markha Valley Trek specifically, rather than a vague
 * multi-region "trekking" hub — Ladakh's individual passes, villages and
 * altitudes are well-documented and consistent across many independent
 * trekking-operator sources (Ganda La ~4,830m, Markha village ~3,650m,
 * Nimaling ~4,700m, Kongmaru La ~5,150-5,275m as the trek's highest
 * point), verified via search before writing rather than estimated.
 * A 9-day structure (2 days Leh acclimatisation + 6 days trekking + 1
 * buffer/departure day) matches the most commonly cited duration across
 * several independent trek operators.
 *
 * Deliberately differentiated from Everest Region (the site's other
 * trekking-adjacent experience): that one is a 6-day Nepal trek in the
 * Khumbu region to Tengboche. This page covers a real trek WITHIN India,
 * genuinely different geography, country and logistics.
 *
 * Best season for this specific trek (June-September) is stated
 * accurately even though it contradicts the October-March "best season"
 * pattern used almost everywhere else on this site — Ladakh's high
 * mountain passes are only accessible in the warmer months, the opposite
 * seasonal logic from most of India, and this is called out explicitly
 * rather than defaulting to the site-wide pattern.
 *
 * Physical demands and altitude are described honestly (moderate-to-
 * difficult grade, multiple river crossings, high-altitude camping) with
 * a fitness and doctor-consultation caveat, matching the same caution
 * already applied in the India Health & Vaccination Guide, rather than
 * undersold to make the trip sound more accessible than it is.
 */
export const trekkingTours: ExperienceContent = {
  slug: "trekking-tours",
  name: "Trekking Tours",
  tagline: "The Markha Valley Trek, Ladakh · 9 Days",
  metaTitle: "Markha Valley Trek, Ladakh | 9-Day Guided Himalayan Trekking Tour",
  metaDescription:
    "A 9-day guided trek through Ladakh's Markha Valley — crossing Ganda La and Kongmaru La passes, Hemis National Park's high-altitude villages, and the ancient Silk Route.",
  heroImage: "/images/destinations/Leh-5.webp",
  heroImageAlt: "The Leh valley seen from above, with the Himalayas beyond",
  heroHeadline: "Trekking Tours: The Markha Valley, Ladakh",
  heroSubheadline:
    "A genuine high-altitude trek along the ancient Silk Route through Hemis National Park — two mountain passes, remote Ladakhi villages, and some of the starkest, most dramatic scenery in the Indian Himalaya.",
  overview:
    "The Markha Valley Trek is widely considered one of Ladakh's classic routes — a multi-day walk along the Markha River through Hemis National Park, crossing two high passes and passing through villages that have changed little in generations. This isn't a gentle walk added onto a sightseeing trip; it's a genuine trek requiring real fitness, multiple river crossings, and several nights camping or in village homestays above 4,000 metres. In exchange, it offers a side of Ladakh that a standard Leh-and-monasteries itinerary simply doesn't reach — remote valleys, herding communities, and mountain scenery that few travellers to India ever see.",
  quickFacts: [
    { label: "Duration", value: "9 Days / 8 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Jun – Sep" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Leh",
      description:
        "Private transfer from Leh airport to your hotel, at roughly 3,500 metres. Leh's altitude alone is enough to affect most travellers arriving directly from sea level, so today and tomorrow are kept deliberately unstructured — rest, hydrate, and avoid strenuous activity while your body begins to adjust.",
    },
    {
      title: "Day 2 — Acclimatisation in Leh",
      description:
        "A second day at altitude before the trek begins, with only gentle activity — a short walk through Leh's old town and market, or a visit to a nearby monastery at a similar elevation. Skipping proper acclimatisation is the single most common reason trekkers struggle later in the route, so this day isn't optional padding.",
    },
    {
      title: "Day 3 — Drive to Zingchen, Trek to Yurutse",
      description:
        "A short drive from Leh to Zingchen, then the trek itself begins — a relatively gentle 4 to 5 hour walk to Yurutse, at around 4,160 metres, entering Hemis National Park along the way. Snow leopards live in this park, though a sighting is genuinely rare; more commonly seen are blue sheep and, occasionally, golden eagles overhead.",
    },
    {
      title: "Day 4 — Cross Ganda La, Descend to Skiu",
      description:
        "The trek's first high pass — Ganda La, at approximately 4,830 metres — crossed in the morning while the ground is still firm, followed by a long descent into the village of Skiu, where the trail meets the Markha River for the first time. A demanding day, but the views south to the Zanskar range from the pass are, by most accounts, worth the effort.",
    },
    {
      title: "Day 5 — Trek to Markha Village",
      description:
        "Following the Markha River upstream through a landscape that shifts from wooded lower valley to increasingly stark, high-altitude terrain, arriving at Markha village itself — the trek's namesake and one of its larger settlements, with visible remnants of the old Silk Route trade that once passed through here.",
    },
    {
      title: "Day 6 — Trek to Hankar",
      description:
        "A shorter, less demanding day continuing along the valley to Hankar, passing mani walls carved with Buddhist prayers and small farming settlements irrigated from glacial meltwater — a landscape that has supported the same subsistence farming for generations.",
    },
    {
      title: "Day 7 — Trek to Nimaling",
      description:
        "A climb through a narrowing valley to Nimaling, a high alpine meadow at around 4,700 metres used by local herders through the summer months. This is the trek's highest camp before tomorrow's pass, and the 360-degree views of snow-capped peaks from here are among the route's most photographed.",
    },
    {
      title: "Day 8 — Cross Kongmaru La, Drive Back to Leh",
      description:
        "The trek's highest point — Kongmaru La, at approximately 5,150 to 5,275 metres depending on the exact route taken — crossed in the morning for views of the Kang Yatse massif and the wider Zanskar and Karakoram ranges, before a long descent to Chogdo or Shang Sumdo, where a vehicle meets the trail for the drive back to Leh.",
    },
    {
      title: "Day 9 — Departure",
      description:
        "A private transfer to Leh airport for your onward or return journey, nine days and two high mountain passes behind you.",
    },
  ],
  inclusions: [
    "2 nights in a hotel in Leh (before the trek)",
    "6 nights of trekking accommodation (camping and/or village homestays, depending on the stage)",
    "All meals during the trekking days",
    "A qualified trekking guide and support crew throughout",
    "Private vehicle for all road transfers before and after the trek",
    "Necessary camping equipment (tents, sleeping arrangements) for camped nights",
  ],
  exclusions: [
    "International and domestic flights",
    "Meals in Leh (before and after the trek)",
    "Personal trekking gear (boots, warm clothing, sleeping bag liner)",
    "Personal expenses, tips, and travel insurance",
    "Any permit fees specific to Hemis National Park, confirmed at time of booking",
  ],
  highlights: [
    {
      title: "Two High Passes",
      description:
        "Ganda La (~4,830m) and Kongmaru La (~5,150-5,275m), the trek's two major crossings, each with genuinely different views over the Zanskar and Karakoram ranges.",
    },
    {
      title: "The Ancient Silk Route",
      description:
        "The Markha Valley once carried real Silk Route trade, and the villages along it still show that history in their layout and culture.",
    },
    {
      title: "Hemis National Park",
      description:
        "Home to snow leopards, blue sheep and golden eagles, with genuinely remote, undeveloped terrain most Ladakh visitors never reach.",
    },
  ],
  bestTimeToVisit: {
    heading: "June–September is Best",
    note: "Unlike almost everywhere else on this site, October through March is the wrong season here — Ladakh's high passes are snowbound outside the June-to-September window, when the route is actually accessible. This is the opposite seasonal logic from a typical India trip, worth planning around specifically if you're combining this trek with other travel.",
  },
  relatedDestinations: [
    {
      name: "Leh & Ladakh",
      tagline: "The Tibetan Plateau",
      description: "High-altitude monasteries, Pangong Lake, and the Nubra Valley's cold desert.",
      href: "/destinations/leh-ladakh",
      image: "/images/destinations/Leh-5.webp",
      imageAlt: "The Leh valley seen from above, with the Himalayas beyond",
    },
  ],
  showCarFleet: false,
  faqs: [
    {
      question: "Do I need prior trekking experience for the Markha Valley Trek?",
      answer:
        "Some is genuinely helpful, since this is graded moderate to difficult — multiple consecutive days of 4 to 7 hours of walking, high altitude, and several river crossings. It's not a beginner's first trek, though reasonably fit travellers without extensive experience do complete it successfully with a properly paced acclimatisation schedule.",
    },
    {
      question: "Is altitude sickness a serious risk on this trek?",
      answer:
        "Yes, genuinely — most of the route sits above 4,000 metres, with the highest pass over 5,100 metres. The 2-day Leh acclimatisation built into this itinerary is not optional padding, and we'd strongly recommend discussing this trip with your doctor beforehand if you have any relevant health conditions.",
    },
    {
      question: "What are the accommodations like during the trek?",
      answer:
        "A mix of camping and village homestays depending on the stage, genuinely basic compared to a standard hotel — you'll need your own sleeping bag and warm clothing regardless of which nights are camped versus homestayed. This is a real trek, not a glamping experience.",
    },
    {
      question: "When can I actually do this trek?",
      answer:
        "June through September, when Ladakh's high passes are clear of snow. Outside this window the route isn't accessible, which is the opposite of the October-to-March season that suits most of the rest of India.",
    },
    {
      question: "Can this trek be combined with a standard Kashmir & Ladakh sightseeing trip?",
      answer:
        "Yes — many travellers add this trek onto a Leh-based sightseeing itinerary, given the Leh acclimatisation days already required for both. Tell us if you'd like to combine this with our Kashmir & Ladakh Tours and we'll build a single connected itinerary.",
    },
  ],
  relatedExperiences: [
    {
      name: "Everest Region",
      tagline: "Namche Bazaar & the World's Highest Peak",
      description: "A different Himalayan trek entirely — Nepal's Khumbu region, on the approach to Everest Base Camp.",
      href: "/experiences/everest-region",
      image: "/images/destinations/everest-kala-patthar-view.webp",
      imageAlt: "The view of Everest from Kala Patthar, Khumbu region, Nepal",
    },
  ],
  draftPendingReview: false,
};
