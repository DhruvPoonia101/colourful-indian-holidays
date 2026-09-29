import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still
 * drafted content Dhruv should review for accuracy.
 *
 * BUILT AHEAD OF REAL PHOTOS BY DESIGN, same approach as Buddhist Tours,
 * Food & Cooking Tours and Village Experiences. The only bird-related
 * image in the asset library is odisha-chilika-lake.webp (a lake, not
 * birds), so this page uses clearly-named placeholder paths that do NOT
 * yet exist as files:
 *   - /images/destinations/keoladeo-bharatpur-wetland.webp
 *   - /images/destinations/keoladeo-painted-stork.webp
 *   - /images/destinations/keoladeo-cycle-rickshaw-trail.webp
 * `draftPendingReview: true` keeps the page noindexed until real photos
 * replace these paths. Deliberately NOT wired into nav.ts, the featured
 * themes list, or sitemap.ts yet. Once photos are supplied: save them at
 * the paths above (or give the filenames used so the image fields can be
 * updated), flip draftPendingReview to false, then do the wiring.
 *
 * Scoped narrowly on purpose: built around Keoladeo National Park
 * (Bharatpur) only, because that is the one bird destination verified
 * via search here. Chilika Lake and other sanctuaries are deliberately
 * NOT built into the itinerary — not enough verified detail to write
 * them honestly.
 *
 * Facts verified via search across multiple consistent sources: UNESCO
 * World Heritage status (1985), Ramsar wetland, roughly 29 sq km, well
 * over 350 recorded bird species (sources vary between roughly 364 and
 * 375, so stated as "well over 350"), explored on foot, by cycle
 * rickshaw with a rickshaw-puller-cum-guide, or with a naturalist;
 * winter migrants from October with peak activity roughly late November
 * to February; painted storks, open-billed storks, darters, herons and
 * cormorants among the birds seen.
 *
 * Deliberate accuracy call: the Siberian crane is NOT promised. Some
 * older/lower-quality listicles still claim it winters here, but more
 * careful sources say it was once regular and is no longer seen. This
 * page says so plainly rather than using it as a selling point.
 */
export const birdWatching: ExperienceContent = {
  slug: "bird-watching",
  name: "Bird Watching",
  tagline: "Keoladeo National Park, Bharatpur · 6 Days",
  metaTitle: "Bird Watching Tour India | Keoladeo National Park, Bharatpur",
  metaDescription:
    "A 6-day birding trip built around Keoladeo National Park, Bharatpur — a UNESCO World Heritage wetland with over 350 recorded bird species — combined with the Taj Mahal and Jaipur.",
  heroImage: "/images/destinations/keoladeo-bharatpur-wetland.webp",
  heroImageAlt: "Misty wetland at dawn, Keoladeo National Park, Bharatpur",
  heroHeadline: "Bird Watching: Keoladeo National Park",
  heroSubheadline:
    "A UNESCO World Heritage wetland on the Agra–Jaipur route, with over 350 recorded bird species — explored by cycle rickshaw at dawn with a naturalist beside you.",
  overview:
    "Keoladeo National Park, formerly the Bharatpur Bird Sanctuary, is one of the most important bird habitats in India — a UNESCO World Heritage Site and Ramsar wetland of roughly 29 square kilometres, created from a natural depression flooded in the 18th century and later kept as a royal duck-shooting reserve. Today it protects marshes, open water and woodland that hold well over 350 recorded species, from painted and open-billed storks nesting in colonies to darters, herons, cormorants and raptors, plus a large winter influx of migratory birds. This trip gives it two full mornings rather than a rushed stop, sitting between the Taj Mahal and Jaipur so it fits naturally into a wider Rajasthan trip.",
  quickFacts: [
    { label: "Duration", value: "6 Days / 5 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Nov – Feb" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Delhi",
      description:
        "Private airport transfer to your hotel in Delhi, with the rest of the day free to rest after travelling. An early night is worthwhile — the next two mornings start at sunrise.",
    },
    {
      title: "Day 2 — Drive to Bharatpur",
      description:
        "A private drive from Delhi to Bharatpur, settling into a hotel close to the park in the afternoon. A short orientation with your naturalist guide covers what to expect in the park and which species are most likely to be seen at this time of year.",
    },
    {
      title: "Day 3 — A Full Morning in Keoladeo",
      description:
        "Into the park at sunrise, when the marshes are misty and still and birds are most active. The park is explored on foot or by cycle rickshaw, with a rickshaw-puller who doubles as a guide alongside your naturalist, moving slowly along the raised dykes between the wetland blocks. Painted storks, open-billed storks, darters, herons, cormorants and spoonbills are among the birds commonly seen, with winter migrants adding ducks, geese and raptors. The afternoon is free to rest or return to the park for an evening session.",
      image: "/images/destinations/keoladeo-cycle-rickshaw-trail.webp",
      imageAlt: "A cycle rickshaw on a dyke trail, Keoladeo National Park",
    },
    {
      title: "Day 4 — A Second Morning, Then on to Agra",
      description:
        "A second sunrise session, deliberately different from yesterday — a different block of the park, or a slower session at a single hide, depending on what you most want to see. Then a short drive to Agra, arriving in time for a first look at the Taj Mahal in the late afternoon.",
    },
    {
      title: "Day 5 — The Taj Mahal, on to Jaipur",
      description:
        "An early visit to the Taj Mahal at sunrise, followed by Agra Fort, then the drive to Jaipur, arriving in the evening.",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      title: "Day 6 — Jaipur & Departure",
      description:
        "A morning at Amber Fort before a private transfer to Jaipur airport for your onward or return journey, six days of birds, monuments and Rajasthan behind you.",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  inclusions: [
    "1 night in a hotel of your choice in Delhi",
    "2 nights in a hotel close to Keoladeo National Park, Bharatpur",
    "1 night in a hotel of your choice in Agra",
    "1 night in a hotel of your choice in Jaipur",
    "Daily breakfast",
    "Two sunrise sessions in Keoladeo National Park with a naturalist guide",
    "Cycle rickshaw hire inside the park",
    "Private air-conditioned vehicle for all transfers and sightseeing",
  ],
  exclusions: [
    "Flights (international and any domestic segments you choose to add)",
    "Park entry fees and camera fees (paid locally)",
    "Monument entry fees at the Taj Mahal, Agra Fort and Amber Fort",
    "Lunches and dinners (unless noted)",
    "Binoculars and personal birding equipment",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "A UNESCO World Heritage Wetland",
      description:
        "Keoladeo is both a UNESCO World Heritage Site and a Ramsar wetland, with well over 350 recorded bird species.",
    },
    {
      title: "Two Sunrise Sessions, Not One",
      description:
        "Two mornings in the park at the hour birds are most active, rather than a single rushed midday visit.",
    },
    {
      title: "Explored by Cycle Rickshaw",
      description:
        "The park's traditional way of getting around — quiet, slow, and low enough to the ground that birds are rarely disturbed.",
    },
  ],
  bestTimeToVisit: {
    heading: "November–February is Best",
    note: "Winter migrants begin arriving from October, with peak activity roughly late November through February, and mornings are cold and misty enough that a warm layer is genuinely worth packing. Access to the park is limited during the monsoon, so we don't build this trip around that season.",
  },
  relatedDestinations: [
    {
      name: "Agra",
      tagline: "Home of the Taj Mahal",
      description: "The Taj Mahal, Agra Fort, and the reason most people plan this trip in the first place.",
      href: "/destinations/agra",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
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
      question: "Will we see the Siberian crane?",
      answer:
        "No, and we'd rather say so plainly. Keoladeo was historically a wintering ground for the Siberian crane, but it is no longer seen there, despite some older travel articles still listing it. The park's real draws today are its storks, herons, darters, raptors and the large winter influx of migratory ducks and geese.",
    },
    {
      question: "Do I need to be an experienced birder?",
      answer:
        "No — the park suits beginners as much as experienced birders, and your naturalist guide identifies species as you go. If you're a serious birder with specific target species, tell us when you enquire so we can plan the sessions around them.",
    },
    {
      question: "Do I need to bring my own binoculars?",
      answer:
        "Yes, we'd recommend bringing your own — good binoculars make a much bigger difference to a birding trip than almost any other piece of kit, and we don't include them in the itinerary.",
    },
    {
      question: "How early are the sunrise sessions?",
      answer:
        "The park is entered at sunrise, so expect an early start, and cold, misty conditions in the winter months. A warm layer is worth packing even though the afternoons are comfortable.",
    },
    {
      question: "Can this be added to a standard Golden Triangle trip?",
      answer:
        "Yes, easily — Bharatpur sits between Agra and Jaipur, so Keoladeo can be added to a Golden Triangle itinerary with a night or two in Bharatpur rather than needing a separate trip.",
    },
  ],
  relatedExperiences: [
    {
      name: "Tiger Safari Tours",
      tagline: "Bandhavgarh, Kanha & Pench",
      description: "For travellers whose interest in wildlife extends beyond birds to India's big cats.",
      href: "/experiences/tiger-safari-tours",
      image: "/images/destinations/bandhavgarh-tiger.webp",
      imageAlt: "Two tigers at a waterhole, Bandhavgarh National Park",
    },
  ],
  draftPendingReview: false,
};

/**
 * 28 Sep 2026 update: live with 2 of the 3 photos originally planned.
 * keoladeo-bharatpur-wetland.webp and keoladeo-cycle-rickshaw-trail.webp
 * are genuine photos supplied by Dhruv, saved and wired in. A dedicated
 * painted-stork (or other signature species) close-up was not available
 * and could not be sourced, so the Day 4 image slot that needed it was
 * left without an image rather than pointing at a non-existent file — the
 * ItineraryDay image field is optional, so this renders fine as text only.
 * One honest flag on the wetland photo: it shows flamingos, which are not
 * among the commonly documented Keoladeo species in the research behind
 * this page (painted storks, open-billed storks, darters, herons,
 * cormorants). Flamingos are not impossible there, but this could not be
 * independently confirmed, so the alt text was kept general ("misty
 * wetland", no species claim) rather than asserting a Keoladeo-typical
 * bird — worth a second look if you can confirm where this photo is from.
 */

