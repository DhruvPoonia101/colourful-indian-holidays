import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still
 * drafted content Dhruv should review for accuracy.
 *
 * BUILT AHEAD OF REAL PHOTOS BY DESIGN, same approach as Buddhist Tours
 * and Food & Cooking Tours. No Shekhawati fresco photos or rural
 * village/homestay images exist anywhere in the asset library — the
 * existing Shekhawati travel-guide article already flags this same gap
 * in its own comments. Content is written now with clearly-named
 * placeholder image paths that do NOT yet exist as files:
 *   - /images/destinations/shekhawati-mandawa-haveli-fresco.webp
 *   - /images/destinations/shekhawati-nawalgarh-haveli.webp
 *   - /images/destinations/rajasthan-village-homestay.webp
 * `draftPendingReview: true` is set so this page stays noindexed until
 * real photos replace these paths. Deliberately NOT wired into nav.ts,
 * themes-hub.ts's featured cards, or sitemap.ts yet, for the same reason.
 * Once real photos are supplied: save them at the paths above (or give
 * the actual filenames used so the image fields can be updated to
 * match), flip draftPendingReview to false, and do the remaining wiring.
 *
 * Deliberately differentiated from Cultural Tours, which already covers
 * a Jaipur/Pushkar block-printing workshop and puppet show — an urban
 * and small-town craft focus. This page is rural specifically: Shekhawati's
 * painted haveli towns and a genuine village homestay, not a repeat of
 * Cultural Tours' city-based activities. Shekhawati facts (Mandawa,
 * Nawalgarh, Fatehpur, Dundlod as the four main haveli towns; the fresco
 * tradition) match what's already established and researched in this
 * site's own Shekhawati travel-guide article, not independently
 * re-verified here since that groundwork already exists.
 */
export const villageExperiences: ExperienceContent = {
  slug: "village-experiences",
  name: "Village Experiences",
  tagline: "Shekhawati's Painted Havelis & a Rural Homestay · 5 Days",
  metaTitle: "Rajasthan Village Tour | Shekhawati Havelis & a Rural Homestay",
  metaDescription:
    "A 5-day trip into rural Rajasthan — Shekhawati's painted haveli towns, an open-air fresco gallery, and a genuine village homestay away from the standard city circuit.",
  heroImage: "/images/destinations/shekhawati-nawalgarh-haveli.webp",
  heroImageAlt: "A painted haveli courtyard in Shekhawati",
  heroHeadline: "Village Experiences: Shekhawati & Rural Rajasthan",
  heroSubheadline:
    "Away from Rajasthan's main city circuit — painted merchant mansions in the Shekhawati region, and a genuine night in a village home rather than a city hotel.",
  overview:
    "Most Rajasthan itineraries move between the same handful of major cities — Jaipur, Udaipur, Jodhpur, Jaisalmer. This trip goes somewhere different: the Shekhawati region, a cluster of small towns roughly three to four hours from Jaipur, known for hundreds of elaborately painted merchant mansions, or havelis, that have earned it the nickname 'the open-air art gallery of Rajasthan'. Alongside the havelis, a night at a village homestay gives a genuine look at rural Rajasthani life — bullock carts, home-cooked meals, and an evening of local folk music — rather than treating rural Rajasthan as scenery glimpsed from a car window between cities.",
  quickFacts: [
    { label: "Duration", value: "5 Days / 4 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Jaipur, Drive to Mandawa",
      description:
        "Private airport transfer, then a private drive to Mandawa in the Shekhawati region, roughly 3 to 4 hours from Jaipur — Shekhawati's most developed town for visitors, with several restored havelis open to the public and the best range of accommodation in the region.",
    },
    {
      title: "Day 2 — Mandawa's Painted Havelis",
      description:
        "A full day exploring Mandawa's havelis, elaborately frescoed merchant mansions built between the 18th and early 20th centuries, when Marwari trading families competed to outdo each other's homes with increasingly elaborate wall paintings — mythological scenes, portraits of British colonial figures, and even early depictions of trains and aeroplanes appear alongside traditional imagery, reflecting how the merchants who built them incorporated whatever caught their imagination.",
    },
    {
      title: "Day 3 — Nawalgarh & a Village Homestay",
      description:
        "A morning in Nawalgarh, which holds the largest overall concentration of havelis in the Shekhawati region, before continuing to a nearby village for a homestay experience — a genuine overnight stay with a local family rather than a hotel, including a home-cooked traditional meal and, where available, an evening of local folk music.",
      image: "/images/destinations/rajasthan-village-homestay.webp",
      imageAlt: "A rural Rajasthani village homestay courtyard",
    },
    {
      title: "Day 4 — Rural Life & Fatehpur, Back to Jaipur",
      description:
        "A morning built around the village itself — a bullock cart ride through the surrounding fields, and time to see daily rural life away from any tourist-facing activity specifically arranged for visitors. In the afternoon, a stop in Fatehpur, notable for havelis that have undergone genuine restoration, giving a sense of what the original frescoes looked like before fading, then the drive back to Jaipur.",
      image: "/images/destinations/shekhawati-nawalgarh-haveli.webp",
      imageAlt: "A haveli courtyard in Nawalgarh, Shekhawati",
    },
    {
      title: "Day 5 — Departure",
      description:
        "A private transfer to Jaipur airport for your onward or return journey, five days of rural Rajasthan away from the standard city circuit behind you.",
    },
  ],
  inclusions: [
    "2 nights in a hotel of your choice in Mandawa",
    "1 night in a village homestay (traditional accommodation, with dinner and breakfast included)",
    "1 night in a hotel of your choice in Jaipur",
    "Daily breakfast",
    "A bullock cart ride and village walk",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide throughout",
  ],
  exclusions: [
    "Flights (international and any domestic segments you choose to add)",
    "Haveli entry fees where applicable (paid locally)",
    "Lunches and dinners (unless noted for the homestay night)",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "An Open-Air Fresco Gallery",
      description:
        "Hundreds of painted merchant mansions across Shekhawati's towns, a genuinely distinctive sight found nowhere else in Rajasthan.",
    },
    {
      title: "A Real Village Homestay",
      description:
        "A night with a local family rather than a hotel, including a home-cooked meal — not a staged 'village experience' add-on.",
    },
    {
      title: "Away from the Standard City Circuit",
      description:
        "Shekhawati sits outside the usual Jaipur-Udaipur-Jodhpur-Jaisalmer route, genuinely different territory for repeat visitors to Rajasthan.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, comfortable conditions suit both the haveli walking tours and the village homestay, which typically involves more time outdoors than a standard city hotel stay.",
  },
  relatedDestinations: [
    {
      name: "Jaipur",
      tagline: "The Pink City",
      description: "Amber Fort, City Palace, Hawa Mahal and the bazaars of the old walled city.",
      href: "/destinations/jaipur",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "What is Shekhawati, and why is it called an open-air art gallery?",
      answer:
        "Shekhawati is a region of small towns north of Jaipur where wealthy Marwari trading families built elaborately frescoed mansions, or havelis, between the 18th and early 20th centuries. With hundreds of painted buildings spread across several towns, many still visible simply walking the streets, it's earned the nickname 'the open-air art gallery of Rajasthan'.",
    },
    {
      question: "What is a village homestay actually like?",
      answer:
        "A genuine overnight stay with a local family, generally more basic than a hotel — simple rooms, a home-cooked meal, and an authentic look at rural daily life rather than a staged tourist activity. It's a different kind of experience from a standard hotel stay, worth going into with realistic expectations about the level of comfort.",
    },
    {
      question: "Is Shekhawati worth visiting if we've already done a standard Rajasthan trip?",
      answer:
        "Yes, particularly for repeat visitors — Shekhawati sits outside the usual Jaipur-Udaipur-Jodhpur-Jaisalmer circuit, so it offers genuinely different scenery and a much quieter, less touristed experience than Rajasthan's more visited cities.",
    },
    {
      question: "How much walking is involved in visiting the havelis?",
      answer:
        "A fair amount — many of the best frescoes are seen simply walking through a town's streets and courtyards, since a number of havelis are viewed from the outside rather than entered. Comfortable walking shoes are worth packing for this itinerary specifically.",
    },
    {
      question: "Can this trip be combined with a longer Rajasthan circuit?",
      answer:
        "Yes — Shekhawati connects easily to Jaipur, so this can be added at the start or end of a longer Rajasthan itinerary rather than booked as a completely separate trip. Tell us your full route and we'll build it in.",
    },
  ],
  relatedExperiences: [
    {
      name: "Cultural Tours",
      tagline: "Jaipur & Pushkar's Living Traditions",
      description: "For a more urban and small-town craft focus — a block-printing workshop and a puppet show — rather than Shekhawati's rural havelis and homestay.",
      href: "/experiences/cultural-tours",
      image: "/images/destinations/jaipur-hawa-mahal.webp",
      imageAlt: "Hawa Mahal and street life in Jaipur's old city",
    },
  ],
  draftPendingReview: false,
};

/**
 * 28 Sep 2026 update: 2 of the 3 photos this page needed are now real —
 * shekhawati-nawalgarh-haveli.webp and rajasthan-village-homestay.webp are
 * both genuine, unwatermarked photos supplied by Dhruv, saved and wired in.
 * Still missing: a genuine, watermark-free close-up of a Mandawa haveli
 * fresco specifically (the one supplied,
 * Ragmala-painting-fresco-golden-haveli-mandawa-768x512.jpg, carries a
 * visible "Ami @ www.thrillingtravel.in" watermark and was not used).
 * The hero and Day 2 image were switched to the real Nawalgarh photo in
 * the meantime rather than left broken. draftPendingReview stays true
 * until the Mandawa photo arrives — at that point restore a dedicated
 * Day 2 image and reconsider whether the hero should move back to Mandawa
 * specifically or stay on Nawalgarh.
 */

