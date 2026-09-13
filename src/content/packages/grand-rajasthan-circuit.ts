import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 */
export const grandRajasthanCircuit: PackageContent = {
  slug: "grand-rajasthan-circuit",
  name: "Grand Rajasthan Circuit",
  tagline: "The Full State, Six Cities · 12 Days",
  metaTitle: "Grand Rajasthan Tour Package | Jaipur, Jodhpur, Jaisalmer, Udaipur & Pushkar",
  metaDescription:
    "A private 12-day Grand Rajasthan Circuit covering Jaipur, Jodhpur, Jaisalmer, Ranthambore, Udaipur and Pushkar — the most complete single-state itinerary we build.",
  heroImage: "/images/destinations/jaisalmer-desert.webp",
  heroImageAlt: "Camel caravan crossing the Thar Desert dunes near Jaisalmer",
  heroHeadline: "The Grand Rajasthan Circuit: Six Cities, One State",
  heroSubheadline:
    "Jaipur, Jodhpur, Jaisalmer, Ranthambore, Udaipur and Pushkar — the most complete look at Rajasthan we build, for travellers who won't be back again soon.",
  overview:
    "Rajasthan is roughly the size of Germany, and no single short trip can genuinely cover it — but this twelve-day circuit comes closer than any other itinerary we run. It moves through all six of the state's essential stops: Jaipur's forts, Jodhpur's blue-washed old town beneath Mehrangarh Fort, Jaisalmer's golden desert citadel, a wildlife detour to Ranthambore's tiger reserve, Udaipur's lakeside palaces, and Pushkar's sacred lake town. Rather than a single fort blending into the next, the twelve days are built so each city's genuinely different character has room to register before moving on — desert one week, lakes the next, forts and wildlife woven through both.",
  quickFacts: [
    { label: "Duration", value: "12 Days / 11 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Jaipur",
      description:
        "Private transfer from Jaipur airport or railway station to your hotel, with the rest of the day free to rest after travelling, and an optional evening visit to the Jal Mahal, the palace that appears to float in the middle of Man Sagar Lake, particularly striking at sunset from the roadside viewpoint along its eastern edge. This is deliberately a light first day given the length of the trip ahead — twelve days across six cities genuinely benefits from starting rested rather than jet-lagged, and there's no pressure to see anything specific today beyond settling in. Your guide can suggest a nearby restaurant for your first dinner in Rajasthan, whether you'd like an introduction to Rajasthani thali or something more familiar while you adjust to the time change, and can also confirm the week's plan with you before the circuit's early starts begin in earnest tomorrow morning.",
    },
    {
      title: "Day 2 — Jaipur Sightseeing",
      description:
        "A full day covering Amber Fort, the honey-coloured hilltop fortress with sweeping views over Maota Lake, the City Palace complex still partly home to Jaipur's former royal family, and Hawa Mahal, the honeycomb pink façade built so palace women could watch street life below unseen. Amber Fort took over 150 years to build across the reigns of several maharajas, and its blend of Hindu and Mughal architectural elements reflects the political alliances of the era — details your guide will point out as you move through its courtyards and mirrored halls. The evening is left free for the old city's bazaars — Johari Bazaar for gemstones, Bapu Bazaar for textiles — before the twelve-day circuit properly begins tomorrow, six cities and a genuinely varied stretch of Rajasthan still ahead, starting with the drive toward tiger country.",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      title: "Day 3 — Jaipur to Ranthambore",
      description:
        "A roughly 4 to 5 hour drive south-east to Ranthambore, a former royal hunting ground turned tiger reserve, arriving in the afternoon with time to settle into your safari lodge and review the park's zones with your naturalist guide. The drive itself marks a genuine shift in landscape, from Jaipur's urban sprawl into dry deciduous forest and rocky hills, a preview of the terrain your safari drives will cover over the next two days. Most lodges here are built specifically around the safari experience, with naturalist staff able to talk through recent sightings and help set realistic expectations for what tomorrow's early start is likely to hold, and many also run a short evening briefing on park etiquette for first-time safari guests, covering everything from appropriate clothing to how close vehicles are permitted to approach wildlife.",
    },
    {
      title: "Day 4 — Ranthambore Safaris",
      description:
        "Two safari drives today, at dawn and again in the late afternoon, the windows when tigers and other wildlife are most active. Ranthambore's visually distinctive feature is its 10th-century ruined fort standing directly within the park, its walls overgrown with banyan roots — tigers are regularly photographed walking past its gateways. Beyond tigers, the park holds sloth bears, leopards, marsh crocodiles and well over 300 recorded bird species, and its numbered safari zones each have a genuinely different character, from open grassland to dense forest to the lakes surrounding the old fort. Your naturalist guide and driver work the radio network with other vehicles throughout both drives to maximise your chances of a sighting, and even without a tiger sighting on a given drive, the birdlife, scenery and ruined fort alone make each outing genuinely worthwhile.",
      image: "/images/destinations/ranthambore-tiger.webp",
      imageAlt: "A wild tiger at Ranthambore National Park",
    },
    {
      title: "Day 5 — Ranthambore to Jodhpur",
      description:
        "A morning safari drive if you'd like one further chance at a sighting, followed by the journey to Jodhpur, typically via a connecting flight from Jaipur given the distance involved, or a long full-day drive if you'd prefer to see the countryside. Arrive in the Blue City by evening, with a genuinely different atmosphere waiting compared to the forest and grassland of the last two days — Jodhpur's indigo-washed old town, clustered beneath Mehrangarh Fort, is unlike anywhere else on this circuit, and even a brief evening glimpse of the fort lit up above the city gives a sense of what tomorrow's full sightseeing day has in store. Settling into your hotel this evening leaves you rested after two consecutive early safari mornings, ready for a full day of walking and exploring tomorrow.",
      image: "/images/destinations/ranthambore-fort.webp",
      imageAlt: "The ruined fort within Ranthambore National Park",
    },
    {
      title: "Day 6 — Jodhpur Sightseeing",
      description:
        "A full day at Mehrangarh Fort, one of the largest and best-preserved forts in India, its sandstone ramparts rising nearly 400 feet above the Blue City's indigo-washed lanes. Founded in 1459 and continuously maintained and expanded ever since, the fort's museum galleries hold an exceptional collection of palanquins, royal costumes and Rajput weaponry, considered one of the finest such collections in the country. Afterwards, visit Jaswant Thada, a white marble memorial whose thin marble sheets glow faintly in sunlight, before a walk through the old town's silver and textile workshops, several of which have operated from the same family premises for generations — a genuinely good place to pick up a lasting souvenir rather than something mass-produced for tourists, and a fitting close to your time in the Blue City before tomorrow's long drive further into the desert.",
      image: "/images/destinations/mehrangarh-fort-jodhpur.webp",
      imageAlt: "Mehrangarh Fort towering above Jodhpur's blue-washed old town",
    },
    {
      title: "Day 7 — Jodhpur to Jaisalmer",
      description:
        "A scenic 5 to 6 hour drive deeper into the Thar Desert to Jaisalmer, the landscape growing progressively drier and more open along the way, arriving by evening in the Golden City, so named for the honey-coloured sandstone its entire old town is built from. The drive passes through small desert villages where the pace of life feels genuinely different from the cities either end of the journey, and by the time Jaisalmer's silhouette appears on the horizon, the surrounding terrain is unmistakably Thar Desert rather than the more fertile country around Jodhpur. Settling in this evening leaves you well-placed for a full day inside the fort itself tomorrow, with the old town's sandstone buildings glowing a deep gold as the light lowers, a sight photographs consistently undersell and one best appreciated in person from the fort's own ramparts.",
    },
    {
      title: "Day 8 — Jaisalmer Fort & Desert",
      description:
        "A full day inside Jaisalmer Fort, one of the few 'living forts' in the world still inhabited by thousands of residents alongside temples and havelis, followed by Patwon Ki Haveli, a cluster of ornately carved 19th-century merchant mansions. Built in 1156, the fort's continued habitation is genuinely unusual by international standards, and its sandstone latticework at Patwon Ki Haveli represents some of the finest decorative stonework anywhere in Rajasthan — individual sections took decades to complete by hand. In the late afternoon, head into the surrounding dunes for an optional camel ride and sunset over the desert, the light and shadow across the sand developing real texture as the sun lowers toward the horizon, a fitting close to your time in the Golden City before tomorrow's onward journey to Rajasthan's lake district.",
      image: "/images/destinations/jaisalmer-patwon-ki-haveli.webp",
      imageAlt: "Ornately carved facade of Patwon Ki Haveli, Jaisalmer",
    },
    {
      title: "Day 9 — Jaisalmer to Udaipur",
      description:
        "A long journey to Udaipur, best done via a domestic flight connection given the distance, or split across two driving days if you'd prefer — ask your guide about the best option for your dates, since the direct road route genuinely makes for a demanding single day if driven straight through. Arriving in Udaipur, widely considered Rajasthan's most romantic city, in the evening leaves time for a first walk along Lake Pichola as the palace lights begin to reflect on the water — a striking, immediate contrast to Jaisalmer's dry desert stone from just a day or two earlier, and the sixth genuinely distinct landscape this twelve-day circuit has moved through. Three cities remain, each with its own very different character still to come, closing out the trip on a genuinely varied note rather than fading out after the desert.",
    },
    {
      title: "Day 10 — Udaipur Sightseeing",
      description:
        "A full day built around the sprawling City Palace complex, constructed over nearly 400 years by successive maharajas overlooking Lake Pichola, followed by the ornately carved Jagdish Temple and an evening boat ride past the floating Lake Palace. The City Palace grew incrementally as each ruler added new wings and courtyards, which is part of why walking through it feels less like touring a single building and more like moving through several centuries of changing architectural taste. The Lake Palace itself, now a luxury hotel, began life as a royal summer retreat built specifically to escape the heat of the main palace during Udaipur's warmer months, and remains one of the most photographed buildings in India — a fitting counterpoint to the desert forts you've spent the last several days exploring, and a strong contender for the single best sunset of the whole trip.",
      image: "/images/destinations/udaipur-city-palace.webp",
      imageAlt: "Udaipur City Palace overlooking Lake Pichola",
    },
    {
      title: "Day 11 — Udaipur to Pushkar",
      description:
        "A roughly 5 to 6 hour drive north to Pushkar, a small lake town built around one of the only temples to the creator god Brahma anywhere in India, said in Hindu mythology to have formed where a lotus petal fell from his hand. Arrive by evening for a walk along the lake's ghats as the light fades — a deliberately quieter, more contemplative final stop than any of the cities before it, and a genuinely different register from the forts and palaces that have defined most of this circuit. Pushkar's compact bazaar and laid-back atmosphere, built up over decades of pilgrim and backpacker traffic side by side, make for an easy, unhurried close to the trip's sightseeing before tomorrow's final morning and departure, a deliberately gentle note to end twelve days of near-constant movement on.",
      image: "/images/destinations/pushkar-lake-ghats.webp",
      imageAlt: "Pushkar Lake and its ghats at dusk",
    },
    {
      title: "Day 12 — Pushkar to Jaipur, Departure",
      description:
        "A morning visit to the Brahma Temple and a final walk around Pushkar's lake and bazaar before the roughly 2.5 to 3 hour drive back to Jaipur for your onward or international departure flight. If your schedule allows a little extra time, your guide can suggest one last stop for silver jewellery or block-printed textiles before the drive back. Looking back over twelve days and six cities, this is the most complete single-state circuit we build — forts, desert, wildlife, lakes and a sacred town, each with room to properly register rather than blurring into the next, a genuinely different experience from a shorter circuit that has to compress the same ground into half the time, and one that consistently leaves travellers feeling they've actually seen Rajasthan rather than sampled a handful of its highlights.",
      image: "/images/destinations/pushkar-brahma-temple.webp",
      imageAlt: "The Brahma Temple, Pushkar",
    },
  ],
  inclusions: [
    "11 nights in hotels of your choice, twin-sharing",
    "Daily breakfast",
    "Private air-conditioned vehicle for all road transfers and sightseeing",
    "English-speaking guide throughout",
    "4 shared safari drives at Ranthambore National Park",
    "Monument entry fees as per itinerary",
  ],
  exclusions: [
    "Domestic flights, where used to connect longer legs (Ranthambore–Jodhpur, Jaisalmer–Udaipur)",
    "Lunches and dinners (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Camel ride in the Jaisalmer desert (arranged on request, paid locally)",
    "Camera fees at monuments and the national park (paid locally)",
  ],
  highlights: [
    {
      title: "All Six Essential Cities",
      description:
        "Jaipur, Jodhpur, Jaisalmer, Ranthambore, Udaipur and Pushkar — the most complete single-state Rajasthan itinerary we offer.",
    },
    {
      title: "Forts, Desert, Wildlife and Lakes",
      description:
        "Genuinely different registers woven through the same trip, rather than one fort city blending into the next.",
    },
    {
      title: "Built for a Once-in-a-While Trip",
      description:
        "For travellers who won't be back to Rajasthan again soon and want to see as much of it properly as twelve days allows.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make all six cities comfortable for a twelve-day circuit, including Jaisalmer's desert heat and Ranthambore's safari drives. April to June turns hot across the whole route, and the July–September monsoon brings humidity and occasional heavy rain.",
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
      name: "Jodhpur",
      tagline: "The Blue City",
      description: "Mehrangarh Fort towering over a maze of indigo-washed old-town streets.",
      href: "/destinations/jodhpur",
      image: "/images/destinations/mehrangarh-fort-jodhpur.webp",
      imageAlt: "Mehrangarh Fort towering above Jodhpur's blue-washed old town",
    },
    {
      name: "Jaisalmer",
      tagline: "The Golden City",
      description: "A living sandstone fort on the edge of the Thar Desert, with camel safaris beyond.",
      href: "/destinations/jaisalmer",
      image: "/images/destinations/jaisalmer-fort.webp",
      imageAlt: "Jaisalmer Fort's golden sandstone walls at sunset",
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
      question: "Is twelve days enough to see all of Rajasthan?",
      answer:
        "It's enough to see six of its most essential cities properly, which is genuinely more than most itineraries attempt — but Rajasthan is large enough that no single trip covers everything. This is the most complete route we build.",
    },
    {
      question: "Should we fly between some of these cities instead of driving?",
      answer:
        "For the longer legs — Ranthambore to Jodhpur, and Jaisalmer to Udaipur — a domestic flight connection saves real time and is worth considering, especially if twelve days already feels tight. We can price both options.",
    },
    {
      question: "Can we shorten this circuit if twelve days is too long?",
      answer:
        "Yes — this itinerary is a template, and we regularly adapt it into shorter versions by dropping one or two cities. Tell us your available days and priorities and we'll rebuild the route around them.",
    },
    {
      question: "Is this tour physically demanding given how much ground it covers?",
      answer:
        "It involves more travel days than a shorter circuit, but each city gets at least one full sightseeing day rather than a rushed stop, and we build in flight options specifically to reduce fatigue on the longest legs.",
    },
    {
      question: "Which two or three days would you recommend prioritising if we later need to cut the trip short?",
      answer:
        "Jaipur and Udaipur are the two most requested stops on their own, so if flights or plans force a shorter version, those two cities plus either Jodhpur or Ranthambore make a strong compressed alternative.",
    },
  ],
  relatedPackages: [
    {
      name: "Rajasthan Tours",
      tagline: "The Classic Circuit · 8 Days",
      description: "A shorter version covering Jaipur, Jodhpur, Udaipur and Pushkar in eight days.",
      href: "/tours/rajasthan-tours-classic",
      image: "/images/destinations/amber-fort-jaipur.webp",
      imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
    },
    {
      name: "Rajasthan Culture & Heritage Trail",
      tagline: "8 Days",
      description: "A more focused heritage-only route through Jodhpur, Jaisalmer and Udaipur.",
      href: "/tours/rajasthan-culture-heritage-trail",
      image: "/images/destinations/jaisalmer-patwon-ki-haveli.webp",
      imageAlt: "Ornately carved facade of Patwon Ki Haveli, Jaisalmer",
    },
  ],
  draftPendingReview: false,
};
