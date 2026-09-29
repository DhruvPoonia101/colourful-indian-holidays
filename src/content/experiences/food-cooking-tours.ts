import type { ExperienceContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still
 * drafted content Dhruv should review for accuracy.
 *
 * BUILT AHEAD OF REAL PHOTOS BY DESIGN, same approach as Buddhist Tours.
 * Zero food, market or cooking-class photography exists anywhere in the
 * asset library — this was the original reason this theme was skipped.
 * Content is written now with clearly-named placeholder image paths that
 * do NOT yet exist as files:
 *   - /images/destinations/delhi-chandni-chowk-street-food.webp
 *   - /images/destinations/jaipur-rajasthani-thali.webp
 *   - /images/destinations/jaipur-spice-market.webp
 * `draftPendingReview: true` is set so this page stays noindexed until
 * real photos replace these paths. Deliberately NOT wired into nav.ts,
 * themes-hub.ts's featured cards, or sitemap.ts yet, for the same reason
 * — those would surface a page with 3 broken image slots to real
 * visitors before photos exist. Once real photos are supplied: save them
 * at the paths above (or give the actual filenames used so the image
 * fields can be updated to match), flip draftPendingReview to false, and
 * do the nav/featured/sitemap wiring in the same pass.
 *
 * Content itself (Chandni Chowk's Parathe Wali Gali, Rajasthani staples
 * like dal baati churma and laal maas, Jaipur's spice and gem bazaars) is
 * well-documented, widely-known culinary geography rather than anything
 * requiring fresh verification — these are established facts, not a
 * fabricated itinerary.
 */
export const foodCookingTours: ExperienceContent = {
  slug: "food-cooking-tours",
  name: "Food & Cooking Tours",
  tagline: "Delhi's Street Food & Rajasthan's Royal Kitchens · 6 Days",
  metaTitle: "India Food Tour | Delhi Street Food & Rajasthani Cooking Class",
  metaDescription:
    "A 6-day culinary trip through Delhi and Rajasthan — Chandni Chowk's street food, a Rajasthani cooking class, and a spice market walk in Jaipur's old city.",
  heroImage: "/images/destinations/delhi-chandni-chowk-street-food.webp",
  heroImageAlt: "A street food stall in Chandni Chowk, Old Delhi",
  heroHeadline: "Food & Cooking Tours: Delhi & Rajasthan",
  heroSubheadline:
    "From Old Delhi's street food lanes to a hands-on Rajasthani cooking class — a trip built around what's actually on the plate, not sightseeing with meals attached.",
  overview:
    "India's food varies as dramatically by region as its architecture or landscape, and this trip focuses on two genuinely distinct culinary traditions rather than a generic 'try everything' approach — Old Delhi's dense, centuries-old street food culture, and Rajasthan's royal and desert-adapted cuisine, shaped historically by the need to preserve food without refrigeration in a hot, dry climate. Cooking classes, market walks and a genuine street food crawl replace standard sightseeing days, though the trip still takes in Jaipur's major sights along the way.",
  quickFacts: [
    { label: "Duration", value: "6 Days / 5 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Delhi",
      description:
        "Private airport transfer to your hotel in Delhi. In the evening, a guided street food walk through Chandni Chowk's Parathe Wali Gali (Paratha Lane), a narrow street of shops that have specialised in stuffed parathas for generations, alongside stops for chaat and other Old Delhi specialities along the way.",
    },
    {
      title: "Day 2 — Delhi's Food Markets & a Cooking Class",
      description:
        "A morning exploring Old Delhi's spice and food markets, followed by a hands-on cooking class focused on North Indian and Mughlai dishes with a local chef — an opportunity to actually learn techniques rather than only eat, before an afternoon covering Delhi's major historical sites.",
    },
    {
      title: "Day 3 — Drive to Jaipur",
      description:
        "A private drive to Jaipur, with lunch en route at a local dhaba (roadside eatery) rather than a tourist-oriented restaurant, for a genuine taste of how travellers along this route actually eat.",
    },
    {
      title: "Day 4 — Jaipur's Spice Market & a Rajasthani Cooking Class",
      description:
        "A morning walk through Jaipur's old city spice and grain markets, followed by a hands-on Rajasthani cooking class covering the region's signature dishes — dal baati churma (baked wheat rolls with lentils and a sweet crumble) and laal maas (a fiery, chilli-forward mutton curry historically associated with Rajput royal kitchens) among them.",
      image: "/images/destinations/jaipur-spice-market.webp",
      imageAlt: "Spice stalls in a Jaipur market",
    },
    {
      title: "Day 5 — A Traditional Rajasthani Thali & Jaipur Sightseeing",
      description:
        "A morning covering Jaipur's major sights — Amber Fort and the City Palace — followed by a traditional Rajasthani thali lunch, a multi-course meal served on a single platter that showcases the cuisine's range in one sitting. The evening is free to explore Jaipur's bazaars at your own pace.",
      image: "/images/destinations/jaipur-rajasthani-thali.webp",
      imageAlt: "A traditional Rajasthani thali meal",
    },
    {
      title: "Day 6 — Departure",
      description:
        "A final morning at leisure before a private transfer to Jaipur airport for your onward or return journey, six days of Delhi and Rajasthan's food culture behind you.",
    },
  ],
  inclusions: [
    "2 nights in a hotel of your choice in Delhi",
    "3 nights in a hotel of your choice in Jaipur",
    "Daily breakfast",
    "Guided Chandni Chowk street food walk",
    "Two hands-on cooking classes (Delhi and Jaipur)",
    "Traditional Rajasthani thali lunch",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide throughout",
  ],
  exclusions: [
    "Flights (international and any domestic segments you choose to add)",
    "Monument entry fees at Amber Fort and City Palace (paid locally)",
    "Meals beyond those specifically noted as included",
    "Personal expenses, tips, and travel insurance",
  ],
  highlights: [
    {
      title: "Two Hands-On Cooking Classes",
      description:
        "Learn actual techniques from a local chef in both Delhi and Jaipur, not just eat what's already been prepared.",
    },
    {
      title: "A Real Street Food Crawl",
      description:
        "Chandni Chowk's Parathe Wali Gali and beyond, guided rather than left to guesswork in one of Delhi's busiest, most historic food streets.",
    },
    {
      title: "Rajasthan's Desert-Adapted Cuisine",
      description:
        "Dal baati churma and laal maas, both shaped by a hot, dry climate that historically demanded food that kept well without refrigeration.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cooler weather makes market walks and street food stops genuinely more comfortable, and this window avoids the peak summer heat that can make a full day of walking and eating outdoors considerably harder going.",
  },
  relatedDestinations: [
    {
      name: "Delhi",
      tagline: "India's Capital",
      description: "Mughal forts, colonial avenues, and centuries of Old Delhi street food culture.",
      href: "/destinations/delhi",
      image: "/images/destinations/delhi-india-gate.webp",
      imageAlt: "India Gate at dusk, Delhi",
    },
    {
      name: "Jaipur",
      tagline: "The Pink City",
      description: "Amber Fort, City Palace, and the bazaars and spice markets of the old walled city.",
      href: "/destinations/jaipur",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Is the street food safe to eat?",
      answer:
        "Our guided food walks visit established, high-turnover stalls that locals themselves eat at regularly, rather than random or untested vendors, which is the same practical standard we'd recommend for any street food anywhere. As with any new food and water source, pace yourself on the first day or two rather than overdoing it immediately.",
    },
    {
      question: "Can the cooking classes accommodate dietary restrictions?",
      answer:
        "Generally yes — vegetarian options are genuinely central to Indian cuisine rather than an adaptation, and most classes can accommodate common restrictions with advance notice. Tell us about any dietary needs when you book so the class and the itinerary's other meals can be planned around them.",
    },
    {
      question: "What's the difference between dal baati churma and a typical North Indian meal?",
      answer:
        "Dal baati churma is specifically Rajasthani — baked wheat rolls (baati) served with lentils (dal) and a sweet crumbled wheat dessert (churma) — and reflects the region's historically dry, resource-limited desert cuisine, genuinely distinct from the North Indian dishes more commonly found on restaurant menus internationally.",
    },
    {
      question: "Is this trip suitable for vegetarians?",
      answer:
        "Yes, very much so — vegetarian cuisine is deeply established across both Delhi and Rajasthan, and neither the street food walk nor the cooking classes require meat to be genuinely representative of the local food culture.",
    },
    {
      question: "Can this itinerary be combined with a longer Rajasthan or Golden Triangle trip?",
      answer:
        "Yes — this is easy to extend into a longer Rajasthan circuit or combine with Agra and the Taj Mahal, since it already covers Delhi and Jaipur. Tell us if you'd like to add destinations and we'll build the food-focused elements into a longer itinerary.",
    },
  ],
  relatedExperiences: [
    {
      name: "Cultural Tours",
      tagline: "Jaipur & Pushkar's Living Traditions",
      description: "For a broader look at Rajasthani craft and culture beyond food specifically, including a block-printing workshop and a puppet show.",
      href: "/experiences/cultural-tours",
      image: "/images/destinations/jaipur-hawa-mahal.webp",
      imageAlt: "Hawa Mahal and street life in Jaipur's old city",
    },
  ],
  draftPendingReview: false,
};
