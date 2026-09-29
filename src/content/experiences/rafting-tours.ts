import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still
 * drafted content Dhruv should review for accuracy.
 *
 * Rafting is mentioned in passing on several existing destination pages
 * (Rishikesh & Haridwar, Himachal, Darjeeling) but has never had its own
 * dedicated bookable experience — this fills that gap, centred on
 * Rishikesh specifically, India's best-known and most commercially
 * developed rafting destination.
 *
 * Stretch names, grades, distances and the rafting season were verified
 * via search against multiple independent, broadly consistent rafting-
 * operator sources rather than estimated:
 * - Brahmpuri-Rishikesh: ~9-10km, Grade I-II, beginner-friendly
 * - Shivpuri-Rishikesh: ~16km, Grade II-III, the most commonly run
 *   stretch, including named rapids "Roller Coaster" and "Golf Course"
 * - Season: mid-September to end-June, with rafting suspended during the
 *   July-to-mid-September monsoon when the river runs too high — this is
 *   flagged explicitly since it differs from the June-September
 *   monsoon-avoidance logic used almost everywhere else on this site.
 * Age (roughly 14-60) and health restrictions (pregnancy, recent
 * surgery, swimming ability) commonly cited by rafting operators are
 * mentioned generally, with a note to confirm specifics and complete a
 * safety briefing on the day — not stated as this site's own medical
 * judgment.
 */
export const raftingTours: ExperienceContent = {
  slug: "rafting-tours",
  name: "Rafting Tours",
  tagline: "White-Water Rafting on the Ganges, Rishikesh · 5 Days",
  metaTitle: "Rishikesh River Rafting Tour | White-Water Rafting on the Ganges",
  metaDescription:
    "A 5-day rafting-focused trip to Rishikesh, India's white-water capital — Grade II-III rapids on the Ganges, a riverside camping night, and a waterfall trek.",
  heroImage: "/images/destinations/rishikesh.webp",
  heroImageAlt: "A rafting group navigating rapids on the Ganges near Rishikesh",
  heroHeadline: "Rafting Tours: White Water on the Ganges",
  heroSubheadline:
    "Rishikesh is India's rafting capital for a reason — genuine Grade II and III rapids on the Ganges, riverside camping, and Himalayan foothill scenery the whole way down.",
  overview:
    "Rishikesh sits at the point where the Ganges leaves the mountains and becomes navigable, and the stretch of river above the town has become India's best-developed white-water rafting destination as a result. This trip centres on that — a full rafting run down the river's most popular stretch, a night camping on the riverbank, and a second, gentler session and a short waterfall trek to round out the trip, rather than treating rafting as a single afternoon add-on to a sightseeing itinerary.",
  quickFacts: [
    { label: "Duration", value: "5 Days / 4 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Rishikesh",
      description:
        "Private transfer from Dehradun airport to Rishikesh, roughly 45 minutes. With the rest of the day free to settle in, an evening walk along the Ganges and across the Lakshman Jhula suspension bridge introduces the town ahead of rafting tomorrow.",
    },
    {
      title: "Day 2 — Shivpuri to Rishikesh Rafting & Riverside Camp",
      description:
        "The main rafting run of the trip — the Shivpuri-to-Rishikesh stretch, roughly 16km with Grade II and III rapids including sections known locally as 'Roller Coaster' and 'Golf Course'. All safety equipment and a briefing are provided before setting off, with an experienced rafting guide in every boat. In the afternoon, transfer to a riverside camp for an overnight stay under canvas on the Ganges' banks.",
      image: "/images/destinations/rishikesh.webp",
      imageAlt: "A rafting group navigating rapids on the Ganges near Rishikesh",
    },
    {
      title: "Day 3 — Camp Morning & Back to Rishikesh",
      description:
        "A relaxed morning at the riverside camp — optional cliff jumping or a swim in a calmer stretch of the river, depending on conditions and your comfort level, before packing up and transferring back into Rishikesh. The afternoon is free to explore the town's market lanes and ashram district at your own pace.",
    },
    {
      title: "Day 4 — Brahmpuri Rafting & a Waterfall Trek",
      description:
        "A gentler morning rafting session on the Brahmpuri-to-Rishikesh stretch, Grade I and II and considerably calmer than the previous run, well suited to anyone who'd rather ease into a second day on the water. In the afternoon, a short trek to Neer Garh Waterfall, a genuine change of pace from the river itself and a popular local walk through forest terrain.",
    },
    {
      title: "Day 5 — Departure",
      description:
        "A final morning at leisure before a private transfer to Dehradun airport for your onward or return journey, five days centred on the Ganges' white water behind you.",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice in Rishikesh",
    "1 night riverside camping (tented accommodation, with dinner and breakfast included)",
    "Two rafting sessions (Shivpuri-Rishikesh and Brahmpuri-Rishikesh stretches)",
    "All rafting safety equipment (helmet, life jacket) and a qualified rafting guide",
    "Daily breakfast",
    "Private air-conditioned vehicle for all transfers",
  ],
  exclusions: [
    "Flights (international and any domestic segments you choose to add)",
    "Lunches and dinners in Rishikesh (unless noted for the camping night)",
    "Personal expenses, tips, and travel insurance",
    "Additional adventure activities (bungee jumping, flying fox) beyond the rafting sessions included",
  ],
  highlights: [
    {
      title: "Two Rafting Sessions, Not One",
      description:
        "A full Grade II-III run and a gentler Grade I-II session, rather than a single quick rafting add-on to a sightseeing day.",
    },
    {
      title: "A Night on the Riverbank",
      description:
        "Genuine riverside camping under canvas, part of the trip rather than a separate booking.",
    },
    {
      title: "A Waterfall Trek to Round It Out",
      description:
        "A short forest walk to Neer Garh Waterfall, a change of pace from the river for the trip's final full day.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best, With One Exception",
    note: "Rafting itself actually runs mid-September through end-June, closed only during the July-to-mid-September monsoon when the river runs too high for safety — a different window from the October-to-March guidance used elsewhere on this site. December and January bring genuinely cold water, so spring (March-June) or the immediate post-monsoon months (late September-November) tend to be the most comfortable choice for rafting specifically.",
  },
  relatedDestinations: [
    {
      name: "Rishikesh & Haridwar",
      tagline: "The Yoga Capital of the World",
      description: "Ashrams, the Ganga Aarti, and the Lakshman Jhula bridge over the Ganges.",
      href: "/destinations/rishikesh-haridwar",
      image: "/images/destinations/rishikesh-2.webp",
      imageAlt: "The Lakshman Jhula suspension bridge over the Ganges, Rishikesh",
    },
  ],
  showCarFleet: false,
  faqs: [
    {
      question: "Do I need prior rafting experience?",
      answer:
        "No — the Shivpuri and Brahmpuri stretches included in this trip are both regularly run by first-time rafters, with a safety briefing and an experienced guide in every boat. You don't need to know how to swim, though comfort in and around water helps.",
    },
    {
      question: "Are there age or health restrictions for rafting?",
      answer:
        "Yes, generally — most operators set a rough age range (commonly around 14 to 60) and restrict participation for pregnancy, recent surgery, or certain health conditions. We'll confirm the specific requirements and complete a safety briefing with you on the day, so let us know of any relevant health considerations when you book.",
    },
    {
      question: "What's the difference between the two rafting stretches included?",
      answer:
        "Shivpuri-to-Rishikesh is the longer, more exciting run at Grade II-III, with several named rapids. Brahmpuri-to-Rishikesh is shorter and gentler at Grade I-II, better suited to a second, more relaxed session or anyone less confident after the first day.",
    },
    {
      question: "Is rafting available year-round in Rishikesh?",
      answer:
        "No — rafting runs from mid-September through the end of June, closed during the July-to-mid-September monsoon when the Ganges runs too high and fast for safety. This is the opposite season logic from most of India, so it's worth planning around specifically.",
    },
    {
      question: "Can this trip be combined with Rishikesh's yoga and ashram culture?",
      answer:
        "Yes — many guests combine a rafting-focused trip like this with time at an ashram or a yoga session, since both are based in the same town. Tell us if you'd like to extend this itinerary with more time for that, or see our dedicated Yoga & Wellness Tours if that's the main focus of your trip.",
    },
  ],
  relatedExperiences: [
    {
      name: "Yoga & Wellness Tours",
      tagline: "Rishikesh & Kerala's Ayurveda Coast",
      description: "For travellers whose main interest in Rishikesh is yoga and meditation rather than white water.",
      href: "/experiences/yoga-wellness-tours",
      image: "/images/destinations/rishikesh-2.webp",
      imageAlt: "The Lakshman Jhula suspension bridge over the Ganges, Rishikesh",
    },
    {
      name: "Trekking Tours",
      tagline: "The Markha Valley, Ladakh",
      description: "For a different kind of adventure entirely — a high-altitude Himalayan trek rather than white water.",
      href: "/experiences/trekking-tours",
      image: "/images/destinations/Leh-5.webp",
      imageAlt: "The Leh valley seen from above, with the Himalayas beyond",
    },
  ],
  draftPendingReview: false,
};
