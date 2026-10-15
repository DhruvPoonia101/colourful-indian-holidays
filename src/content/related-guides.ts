/**
 * Contextual internal links from tour / experience / homepage templates to
 * the travel guides. The guides carry the site's strongest informational
 * content but had only 1–3 inbound links each, so they were barely
 * reachable by crawlers or readers. Keyword rules below pick 3 guides that
 * actually fit the page (always at least one planning-basics guide), so
 * links are relevant, not a sitewide boilerplate block.
 */
export type GuideLink = { href: string; label: string; blurb: string };

const G = {
  firstTrip: {
    href: "/travel-guide/first-trip-to-india-guide",
    label: "First Trip to India: What to Know Before You Go",
    blurb: "How long to plan for, visas, seasons and what to book first.",
  },
  eVisa: {
    href: "/travel-guide/india-e-visa-guide",
    label: "India e-Visa Guide 2026",
    blurb: "Visa types, fees, stay limits and the e-Arrival Card.",
  },
  currency: {
    href: "/travel-guide/india-currency-payments-guide",
    label: "India Currency & Payments Guide",
    blurb: "Cash, cards, ATMs and UPI explained for visitors.",
  },
  health: {
    href: "/travel-guide/india-health-vaccination-guide",
    label: "India Health & Vaccination Guide",
    blurb: "General health and vaccination guidance before you travel.",
  },
  around: {
    href: "/travel-guide/getting-around-india",
    label: "Getting Around India: Flights, Trains & Roads",
    blurb: "How to move between cities, and why a private driver works.",
  },
  goldenTriangle: {
    href: "/travel-guide/golden-triangle-itinerary-guide",
    label: "Golden Triangle Itinerary: A 5 to 6 Day Plan",
    blurb: "Day-by-day Delhi, Agra and Jaipur, and how to compress it.",
  },
  taj: {
    href: "/travel-guide/taj-mahal-visiting-guide",
    label: "Taj Mahal Visiting Guide: Tickets, Timings & Tips",
    blurb: "Foreign-visitor ticket prices, opening hours and sunrise tips.",
  },
  rajasthan: {
    href: "/travel-guide/rajasthan-itinerary-guide",
    label: "Rajasthan Itinerary: How to Plan 7, 10 and 12 Days",
    blurb: "Which cities to include at each length, with realistic pacing.",
  },
  monuments: {
    href: "/travel-guide/monuments-in-rajasthan",
    label: "Monuments in Rajasthan: A Complete Guide",
    blurb: "Amber, Mehrangarh, Jaisalmer Fort and the palaces worth your time.",
  },
  rajCar: {
    href: "/travel-guide/hiring-a-car-in-rajasthan",
    label: "Hiring a Car in Rajasthan",
    blurb: "How private cars with drivers work for international travellers.",
  },
  festivals: {
    href: "/travel-guide/top-cultural-festivals-in-india",
    label: "Top Cultural Festivals in India",
    blurb: "Pushkar, Diwali, Kumbh and others worth timing a trip around.",
  },
  pilgrimage: {
    href: "/travel-guide/pilgrimage-holiday-destinations-in-india",
    label: "Pilgrimage Holiday Destinations in India",
    blurb: "From Varanasi's ghats to the Golden Temple in Amritsar.",
  },
  solo: {
    href: "/travel-guide/solo-travel-india-guide",
    label: "Solo Travel in India: A Practical Guide",
    blurb: "Getting around, common scams and staying comfortable alone.",
  },
  top20: {
    href: "/travel-guide/20-best-tourist-places-to-visit-in-india",
    label: "20 Best Tourist Places to Visit in India",
    blurb: "A first-timer's shortlist from the Taj Mahal to the backwaters.",
  },
  shekhawati: {
    href: "/travel-guide/places-to-visit-in-shekhawati",
    label: "Places to Visit in Shekhawati",
    blurb: "Rajasthan's painted haveli towns, off the usual circuit.",
  },
} satisfies Record<string, GuideLink>;

const RULES: Array<{ test: RegExp; guides: GuideLink[] }> = [
  { test: /golden-triangle|taj-mahal|agra|delhi|india-highlights|north-india/, guides: [G.goldenTriangle, G.taj, G.eVisa] },
  { test: /shekhawati|mandawa|nawalgarh/, guides: [G.shekhawati, G.rajasthan, G.monuments] },
  { test: /palace|fort|camel|desert|heritage|cultural/, guides: [G.monuments, G.shekhawati, G.rajasthan] },
  { test: /rajasthan|jaipur|jodhpur|jaisalmer|udaipur|pushkar|bikaner|ranthambore|desert|palace|fort|camel/, guides: [G.rajasthan, G.monuments, G.rajCar] },
  { test: /festival|diwali|holi|onam|teej|kumbh|mahotsav|carnival|pongal/, guides: [G.festivals, G.firstTrip, G.eVisa] },
  { test: /pilgrim|varanasi|amritsar|rishikesh|haridwar|spiritual/, guides: [G.pilgrimage, G.firstTrip, G.health] },
  { test: /solo|women|female/, guides: [G.solo, G.firstTrip, G.health] },
  { test: /kerala|south-india|goa|tamil|beach|backwater|munnar|kochi|madurai|pondicherry|chennai|andaman|periyar/, guides: [G.around, G.health, G.firstTrip] },
  { test: /nepal|bhutan|himalaya|himachal|kashmir|ladakh|darjeeling|sikkim|hill|kaziranga|north-east/, guides: [G.eVisa, G.health, G.around] },
  { test: /tiger|wildlife|safari|bird|kanha|bandhavgarh|pench|sariska/, guides: [G.health, G.around, G.firstTrip] },
  { test: /honeymoon|romantic|couple/, guides: [G.taj, G.firstTrip, G.currency] },
];

const DEFAULT_GUIDES: GuideLink[] = [G.firstTrip, G.eVisa, G.solo];

/** Three relevant guides for a page path or slug (never links to itself). */
export function guidesFor(pathOrSlug: string): GuideLink[] {
  const key = pathOrSlug.toLowerCase();
  const hit = RULES.find((r) => r.test.test(key));
  const picks = hit ? hit.guides : DEFAULT_GUIDES;
  return picks.filter((g) => !key.endsWith(g.href));
}

/** Homepage "start here" set: the six broadest planning guides. */
export const HOMEPAGE_GUIDES: GuideLink[] = [
  G.firstTrip,
  G.eVisa,
  G.goldenTriangle,
  G.rajasthan,
  G.top20,
  G.around,
];
