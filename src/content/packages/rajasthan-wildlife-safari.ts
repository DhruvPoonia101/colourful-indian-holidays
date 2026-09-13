import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const rajasthanWildlifeSafari: PackageContent = {
  slug: "rajasthan-wildlife-safari",
  name: "Rajasthan Wildlife Safari",
  tagline: "Forts, Tigers & a Lake City · 8 Days",
  metaTitle: "Rajasthan Wildlife Safari Tour | Jaipur, Ranthambore & Udaipur",
  metaDescription:
    "An 8-day Rajasthan tour combining Jaipur's forts, two full days of tiger safaris at Ranthambore National Park, and Udaipur's lakes — wildlife and heritage in one trip.",
  heroImage: "/images/destinations/ranthambore-tiger.webp",
  heroImageAlt: "A wild tiger at Ranthambore National Park",
  heroHeadline: "Rajasthan for Wildlife: Jaipur, Ranthambore & Udaipur",
  heroSubheadline:
    "Two full days of tiger safaris at Ranthambore, framed by Jaipur's forts and Udaipur's lakes — Rajasthan's heritage and wildlife in a single trip.",
  overview:
    "Rajasthan isn't usually the first place travellers think of for wildlife, but Ranthambore National Park — a former royal hunting ground turned tiger reserve — is one of India's best places to see a wild tiger, made all the more striking by a 10th-century ruined fort standing directly within the park itself. This itinerary treats wildlife as a genuine centrepiece rather than an afterthought, giving two full days of safari drives rather than the single rushed one many circuits allow, while still keeping Jaipur's forts and Udaipur's lakes either side of it — so you leave with both a real shot at a tiger sighting and a proper look at Rajasthan's palace architecture.",
  quickFacts: [
    { label: "Duration", value: "8 Days / 7 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Jun (safari); Oct – Mar (sightseeing)" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Jaipur",
      description:
        "Private transfer from Jaipur airport or railway station to your hotel, with the rest of the day free to rest after travelling. If you have energy for an easy first outing, your guide can suggest a sunset visit to the Jal Mahal, the palace that appears to float in the middle of Man Sagar Lake, a short drive from most central Jaipur hotels — the palace itself is closed to visitors, but the roadside viewpoint along the lake's eastern edge is where most photographs are taken, and it's particularly striking in the last hour before sunset. This is deliberately a light first day, since the trip ahead genuinely mixes early-morning safari starts with full sightseeing days, and starting rested rather than jet-lagged makes a real difference to how the whole itinerary feels. Your guide can also point you toward a nearby restaurant for dinner if you'd like a recommendation rather than deciding on the spot.",
    },
    {
      title: "Day 2 — Jaipur Sightseeing",
      description:
        "A full day covering Jaipur's essential sights: Amber Fort, the honey-coloured hilltop fortress with sweeping views over Maota Lake, followed by the City Palace complex and a photo stop at Hawa Mahal, the honeycomb pink façade built so palace women could watch street life below unseen through its 953 small carved windows. Amber Fort's scale genuinely surprises most first-time visitors — it took over a century and a half to build, spanning the reigns of multiple maharajas, and its combination of Hindu and Mughal architectural styles reflects the political alliances of the Rajput rulers who commissioned it. The evening is left free for the old city's bazaars — Johari Bazaar for gemstones, Bapu Bazaar for textiles — before heading toward wildlife territory tomorrow, a genuinely different rhythm from the two days of city sightseeing you're about to leave behind.",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      title: "Day 3 — Jaipur to Ranthambore",
      description:
        "A roughly 4 to 5 hour drive south-east to Ranthambore, watching the landscape shift from Jaipur's urban sprawl to dry deciduous forest and rocky hills — a genuinely visible transition that makes the drive itself feel like a preview of the wildlife territory ahead rather than simply time to pass through. Arrive at your safari lodge in the afternoon with time to settle in and review the park's numbered safari zones with your naturalist guide before the first game drive tomorrow morning. Most lodges here are built specifically around the safari experience, with naturalist staff on hand throughout your stay who can talk through recent sightings in different zones and help set realistic expectations for what the coming two days of drives are likely to hold, and many also offer a short pre-dinner briefing on what to expect from your first morning out.",
    },
    {
      title: "Day 4 — Full Day of Tiger Safaris",
      description:
        "Two safari drives today, at dawn and again in the late afternoon — the two windows when tigers and other wildlife are most active. Ranthambore holds sloth bears, leopards, marsh crocodiles and well over 300 recorded bird species alongside its tigers, and what makes it visually distinctive is the 10th-century ruined fort standing directly within the park boundary, its walls and chhatris overgrown with banyan roots — tigers are regularly photographed walking past its ancient gateways. Ranthambore's individual tigers are well documented and tracked by park naturalists, many with names and known territories, which is part of why experienced guides can sometimes predict which zone offers the best chance on a given morning based on recent movement patterns. The park's varied terrain — open grassland in some zones, dense forest and lakeside habitat in others — means each drive tends to feel genuinely different even within the same two-day stay.",
      image: "/images/destinations/ranthambore-tiger.webp",
      imageAlt: "A wild tiger at Ranthambore National Park",
    },
    {
      title: "Day 5 — Morning Safari, on to Udaipur",
      description:
        "One further safari drive at dawn, ideally in a different numbered zone from previous drives to see more of the park's varied terrain, before beginning the journey toward Udaipur. Given the distance involved, this leg typically runs via a connecting flight from nearby Jaipur or Kota, or a long full-day drive — ask your guide about the best option for your dates, since the road route genuinely takes the better part of a day and can feel demanding after two early safari mornings in a row. Arriving in Udaipur, widely considered Rajasthan's most romantic city, in the evening leaves time for a first walk along Lake Pichola, and the contrast is genuinely striking — Ranthambore's dry forest and rocky hills give way almost immediately to Udaipur's lakes and white marble palaces, one of the more noticeable shifts in scenery anywhere on this itinerary.",
      image: "/images/destinations/ranthambore-fort.webp",
      imageAlt: "The ruined fort within Ranthambore National Park",
    },
    {
      title: "Day 6 — Udaipur Sightseeing",
      description:
        "A full day in Udaipur, built around the sprawling City Palace complex, constructed over nearly 400 years by successive maharajas and overlooking Lake Pichola from a series of courtyards and mirrored halls. The palace complex is actually a series of connected buildings added by different rulers over roughly four centuries, which is part of why the architectural style shifts noticeably as you move through its different wings and courtyards. From there, visit the ornately carved Jagdish Temple, still an active place of worship a short walk from the palace, before an evening boat ride on Lake Pichola past the floating Lake Palace, now a luxury hotel but originally built as a royal summer retreat specifically to escape the heat of the main palace during Udaipur's warmer months.",
      image: "/images/destinations/udaipur-city-palace.webp",
      imageAlt: "Udaipur City Palace overlooking Lake Pichola",
    },
    {
      title: "Day 7 — Udaipur at Leisure",
      description:
        "A free day to enjoy Udaipur's old-town lanes and lakeside cafés at your own pace, or an optional excursion to Kumbhalgarh Fort, roughly two hours away and home to the second-longest continuous wall in the world after the Great Wall of China, stretching some 36 kilometres across the surrounding hills. Built in the 15th century by Rana Kumbha and rarely breached in its long history, Kumbhalgarh's scale is genuinely difficult to appreciate from photographs alone — walking even a short section of the wall gives a much better sense of just how ambitious the fortification project actually was. If you'd rather stay in Udaipur itself, this is also a good day for a cooking class or a slower wander through the old town's art galleries and silver workshops, many of which are less crowded than the main sightseeing circuit from earlier in the trip.",
      image: "/images/destinations/udaipur-lake-palace.webp",
      imageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
    },
    {
      title: "Day 8 — Departure",
      description:
        "A private transfer to Udaipur airport for your onward or international departure flight, with the tour concluding after breakfast. If your flight allows a little extra time, your guide can suggest one last walk along Lake Pichola or a coffee at a rooftop café overlooking the water before heading to the airport. Looking back over eight days, the trip pairs two of Rajasthan's strongest draws — Ranthambore's tigers and Udaipur's lakes — with Jaipur's forts as a natural starting point, giving genuine variety rather than one long blur of forts alone, and a structure that consistently appeals to travellers who want a real wildlife component built into their Rajasthan trip rather than treated as an optional add-on at the edges, with each of the three regions given proper time to register on its own terms.",
    },
  ],
  inclusions: [
    "7 nights in hotels of your choice, twin-sharing",
    "Daily breakfast",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "English-speaking guide throughout",
    "4 shared safari drives at Ranthambore National Park",
    "Monument entry fees as per itinerary",
  ],
  exclusions: [
    "Flights, if chosen for the Ranthambore–Udaipur connection",
    "Private (exclusive) safari jeep upgrade, if preferred over a shared canter",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Camera fees at monuments and the national park (paid locally)",
  ],
  highlights: [
    {
      title: "Two Full Safari Days, Not One",
      description:
        "Four total safari drives across two days give meaningfully better odds than the single rushed safari many shorter circuits squeeze in.",
    },
    {
      title: "A Fort Inside the Jungle",
      description:
        "Ranthambore's 10th-century ruined fort standing within the park itself gives the safari a visual backdrop no other Indian tiger reserve quite matches.",
    },
    {
      title: "Wildlife and Heritage, Not Just One",
      description:
        "Most itineraries pick either forts or safaris — this route gives a serious dose of both without needing a separate trip.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–June for Safari, October–March for Sightseeing",
    note: "Ranthambore is open October through June, with tiger sighting odds actually improving as the dry season deepens toward April–May. Jaipur and Udaipur sightseeing is most comfortable October–March, before the plains' summer heat sets in.",
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
    {
      name: "Ranthambore",
      tagline: "Tiger Country",
      description: "A former royal hunting ground turned national park, with a ruined fort inside it.",
      href: "/destinations/ranthambore",
      image: "/images/destinations/ranthambore-tiger.webp",
      imageAlt: "A wild tiger at Ranthambore National Park",
    },
    {
      name: "Udaipur",
      tagline: "City of Lakes",
      description: "The Lake Palace floating on Lake Pichola, and the City Palace above it.",
      href: "/destinations/udaipur",
      image: "/images/destinations/udaipur-lake-palace.webp",
      imageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "How good are the tiger sighting odds on this trip?",
      answer:
        "Genuinely good, though never guaranteed — four safari drives across two days give meaningfully better odds than a single safari, and Ranthambore is one of India's more reliable parks for sightings.",
    },
    {
      question: "Is this different from your Golden Triangle with Ranthambore package?",
      answer:
        "Yes — that route includes Delhi and Agra alongside Jaipur and Ranthambore. This one stays entirely within Rajasthan, adding Udaipur instead, for travellers who don't need Delhi and Agra on this particular trip.",
    },
    {
      question: "Should we book a private safari jeep instead of a shared canter?",
      answer:
        "A private jeep gives more flexibility and a quieter experience, at a higher cost than the shared drives included in this package — we can arrange the upgrade if you'd prefer it.",
    },
    {
      question: "Can we add more safari days if we want to maximise sighting chances?",
      answer:
        "Yes — this itinerary is a starting template, and we can extend the Ranthambore portion by a day or two if wildlife is your main priority for the trip.",
    },
    {
      question: "What should we pack for the safari drives specifically?",
      answer:
        "Neutral-coloured clothing, a warm layer for early morning drives (Ranthambore mornings can be cold October–February), sunscreen, and binoculars if you have them.",
    },
  ],
  relatedPackages: [
    {
      name: "Wildlife Tours",
      tagline: "Tiger Safaris",
      description: "Our full wildlife category, covering Ranthambore, Sariska, Bandhavgarh and Kaziranga.",
      href: "/tours/wildlife-tours",
      image: "/images/destinations/ranthambore-tiger.webp",
      imageAlt: "Wild tiger at Ranthambore National Park",
    },
    {
      name: "Rajasthan Tours",
      tagline: "The Classic Circuit · 8 Days",
      description: "The standard Jaipur–Jodhpur–Udaipur–Pushkar route, without the safari component.",
      href: "/tours/rajasthan-tours-classic",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
  ],
  draftPendingReview: false,
};
