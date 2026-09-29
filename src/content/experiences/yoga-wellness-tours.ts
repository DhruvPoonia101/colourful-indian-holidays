import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still
 * drafted content Dhruv should review for accuracy.
 *
 * Deliberately differentiated from two existing routes that also touch
 * Rishikesh:
 * - Spiritual India: covers Rishikesh's ashram culture in roughly 2 of its
 *   5 days, alongside Amritsar and Haridwar, framed around living faith
 *   traditions generally (Sikh, Hindu pilgrimage, yogic) rather than
 *   wellness specifically.
 * - International Yoga Festival, Rishikesh: tied to a specific early-March
 *   festival date, not a standalone bookable itinerary available any time
 *   of year.
 * This page is the only one combining a genuine multi-day Rishikesh yoga
 * immersion WITH Kerala's Ayurveda tradition as a single dedicated
 * wellness itinerary, bookable year-round rather than festival-dated.
 *
 * Health-content caution applied throughout: Ayurveda is described as a
 * traditional wellness practice, never as medical treatment with implied
 * efficacy claims. No specific treatment protocols, dosing, or health
 * claims are made. A disclaimer recommending a doctor's input for anyone
 * with an existing health condition is included deliberately, matching
 * the same caution applied in the India Health & Vaccination Guide.
 *
 * Flight routing between Rishikesh (via Dehradun) and Kerala is
 * deliberately kept general ("connecting through Delhi") rather than
 * naming a specific route, since Dehradun's airport has limited direct
 * connectivity and a specific claim risked going stale.
 */
export const yogaWellnessTours: ExperienceContent = {
  slug: "yoga-wellness-tours",
  name: "Yoga & Wellness Tours",
  tagline: "Rishikesh & Kerala's Ayurveda Coast · 8 Days",
  metaTitle: "India Yoga & Wellness Retreat | Rishikesh Yoga & Kerala Ayurveda",
  metaDescription:
    "An 8-day wellness itinerary combining Rishikesh's yoga and ashram tradition with Kerala's Ayurvedic heritage — India's two most significant wellness traditions in one trip.",
  heroImage: "/images/destinations/rishikesh-2.webp",
  heroImageAlt: "The Lakshman Jhula suspension bridge over the Ganges, Rishikesh",
  heroHeadline: "Yoga & Wellness Tours: Rishikesh & Kerala",
  heroSubheadline:
    "India's two most significant wellness traditions, in one trip — the yoga and meditation practice of the Himalayan foothills, and the centuries-old Ayurvedic heritage of the Kerala coast.",
  overview:
    "India is home to two genuinely distinct wellness traditions, each deep enough to justify a dedicated trip on its own: Rishikesh, the self-declared Yoga Capital of the World, where yoga and meditation have been taught continuously along the Ganges for generations; and Kerala, considered the traditional home of Ayurvedic medicine, where resorts along the backwaters and coast offer treatments rooted in centuries of local practice. This itinerary spends real time in both rather than treating either as a single day within a broader sightseeing trip — four days immersed in Rishikesh's yoga and ashram culture, followed by four days at an Ayurveda-focused resort in Kerala, with the contrast between mountain river and tropical coast becoming part of the experience itself.",
  quickFacts: [
    { label: "Duration", value: "8 Days / 7 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Rishikesh",
      description:
        "Private transfer from Dehradun airport to Rishikesh, roughly 45 minutes, arriving at a riverside ashram or wellness-focused hotel on the banks of the Ganges. With the rest of the day free to settle in after travelling, an optional gentle evening walk along the river introduces the town's unhurried pace ahead of a full immersion beginning tomorrow.",
    },
    {
      title: "Day 2 — Yoga, Meditation & the Ganga Aarti",
      description:
        "A morning yoga and meditation session led by a local instructor, followed by free time to explore Rishikesh's ashram district and the Lakshman Jhula suspension bridge over the Ganges. In the evening, the Ganga Aarti fire ceremony at Parmarth Niketan ashram, performed nightly for generations, with visitors often invited to join the singing directly rather than simply observing from a distance.",
      image: "/images/destinations/rishikesh-2.webp",
      imageAlt: "The Lakshman Jhula suspension bridge over the Ganges, Rishikesh",
    },
    {
      title: "Day 3 — A Full Day of Practice",
      description:
        "A full day built around yoga and meditation practice, with sessions in the morning and late afternoon and free time in between to rest, journal, or simply sit by the river. For travellers interested in the history behind Rishikesh's international reputation, an optional visit to the former Maharishi Mahesh Yogi ashram, which became internationally known after the Beatles studied there in 1968, an association the town still leans into today.",
    },
    {
      title: "Day 4 — Rishikesh at Leisure",
      description:
        "A final, unstructured day in Rishikesh — an optional early-morning yoga session, then free time to revisit anything that stood out over the previous two days, whether that's a particular ashram, a riverside café, or simply more time on the water. In the afternoon, a private transfer back to Dehradun for a flight south, usually connecting through Delhi, toward Kerala for the second half of this trip.",
    },
    {
      title: "Day 5 — Arrive in Kerala",
      description:
        "Arrival at your Ayurveda-focused resort on Kerala's coast or backwaters, with an initial consultation to discuss your interests and any relevant health considerations before treatments begin. This is a genuine shift in register from Rishikesh — tropical coastline and backwater scenery in place of the Himalayan foothills, and a resort-based wellness stay in place of an ashram-centred one.",
    },
    {
      title: "Day 6 — Ayurveda Treatments & the Backwaters",
      description:
        "A day built around your resort's Ayurveda programme, typically including traditional oil-based treatments and therapies rooted in centuries of Kerala practice, alongside time to simply relax by the backwaters or coast. Every resort's specific offerings differ, so we match this to a property whose programme suits your interests once you've told us more about what you're looking for.",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
    {
      title: "Day 7 — A Full Wellness Day",
      description:
        "A further full day of treatments and relaxation, with the pace and specific programme continuing to follow your resort's own Ayurvedic schedule. An optional sunset backwater cruise in the evening offers a quieter, more scenic close to the day than another treatment session, for anyone who'd rather end with the water than the spa.",
    },
    {
      title: "Day 8 — Final Treatments & Departure",
      description:
        "A final morning session or treatment depending on your resort's schedule, before a private transfer to Kochi or Trivandrum airport for your onward or return journey — eight days across two genuinely different wellness traditions behind you.",
    },
  ],
  inclusions: [
    "3 nights in a riverside ashram or wellness-focused hotel, Rishikesh",
    "4 nights at an Ayurveda-focused resort, Kerala",
    "Daily breakfast",
    "Daily yoga and meditation sessions in Rishikesh",
    "Ayurveda consultation and treatment programme in Kerala (specifics vary by resort)",
    "Domestic flight, Dehradun to Kerala (via Delhi)",
    "Private air-conditioned vehicle for all transfers",
  ],
  exclusions: [
    "International and onward domestic flights",
    "Lunches and dinners (unless included in your resort's wellness package)",
    "Personal expenses, tips, and travel insurance",
    "Any additional or specialised treatments beyond your resort's standard programme",
  ],
  highlights: [
    {
      title: "Two Wellness Traditions, One Trip",
      description:
        "Rishikesh's yoga and meditation practice and Kerala's Ayurvedic heritage, given real time each rather than a single day within a sightseeing itinerary.",
    },
    {
      title: "The Ganga Aarti at Parmarth Niketan",
      description:
        "A nightly fire ceremony performed for generations on the banks of the Ganges, with visitors often invited to join directly.",
    },
    {
      title: "A Resort Matched to You",
      description:
        "Kerala's Ayurveda programme is built around your own interests and a consultation on arrival, not a fixed, one-size-fits-all schedule.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, comfortable conditions suit Rishikesh's outdoor practice sessions, and Kerala's coast is at its most pleasant outside the June–September monsoon. Traditional Ayurvedic practice actually considers the monsoon months significant for certain treatments, so ask us if that timing genuinely interests you specifically — it's a real exception to the general October–March guidance for this particular trip.",
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
    {
      name: "Kerala",
      tagline: "God's Own Country",
      description: "Backwaters, tea gardens, wildlife and a coastline shaped by Ayurvedic tradition.",
      href: "/destinations/kerala",
      image: "/images/destinations/alleppey-backwaters.webp",
      imageAlt: "A traditional houseboat on Alleppey's backwaters, Kerala",
    },
  ],
  showCarFleet: false,
  faqs: [
    {
      question: "Do I need prior yoga experience for this trip?",
      answer:
        "No — sessions are led by local instructors and can be adapted to complete beginners as well as experienced practitioners. Tell us your experience level when you enquire and we'll match the pace accordingly.",
    },
    {
      question: "What kind of Ayurveda treatments are included in Kerala?",
      answer:
        "This varies by resort, since each has its own Ayurvedic programme and specialities. We'll match you to a property whose offerings suit your interests based on the consultation you have on arrival, rather than promising a fixed, identical treatment list across every resort.",
    },
    {
      question: "Is Ayurveda a substitute for medical treatment?",
      answer:
        "No — Ayurveda is a traditional wellness practice, not a substitute for medical care. If you have an existing health condition, we'd recommend discussing any planned treatments with your own doctor beforehand, and mentioning it during your resort consultation on arrival.",
    },
    {
      question: "Why combine Rishikesh and Kerala specifically?",
      answer:
        "They're India's two most significant, genuinely distinct wellness traditions — Rishikesh for yoga and meditation, Kerala for Ayurveda — and combining them gives a real sense of both rather than treating one as more authoritative than the other. The contrast between mountain river and tropical coast is also part of the appeal.",
    },
    {
      question: "Can this trip be shortened to visit only one region?",
      answer:
        "Yes — if you're specifically interested in Rishikesh's yoga tradition alone, or Kerala's Ayurveda alone, we can build a shorter, single-region version of this trip rather than the full 8-day combined itinerary.",
    },
  ],
  relatedExperiences: [
    {
      name: "Spiritual India",
      tagline: "Amritsar, Haridwar & Rishikesh",
      description: "A broader living-faith circuit including Rishikesh, for travellers who want the Golden Temple and Haridwar alongside it.",
      href: "/experiences/spiritual-india",
      image: "/images/destinations/amritsar.webp",
      imageAlt: "The Golden Temple reflected in its pool, Amritsar",
    },
    {
      name: "International Yoga Festival, Rishikesh",
      tagline: "Early March",
      description: "A week-long yoga festival in Rishikesh for travellers who want to time their trip around the event itself.",
      href: "/experiences/international-yoga-festival-rishikesh",
      image: "/images/destinations/rishikesh-2.webp",
      imageAlt: "Rishikesh, the Yoga Capital of the World, on the Ganges",
    },
  ],
  draftPendingReview: false,
};
