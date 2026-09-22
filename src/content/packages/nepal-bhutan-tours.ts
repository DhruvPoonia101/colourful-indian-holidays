import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * This is a genuinely condensed combined circuit, not the two existing
 * 8-day Nepal Tours and Bhutan Tours itineraries concatenated. Chitwan
 * (Nepal) and Gangtey (Bhutan) are dropped to keep the combined trip to a
 * realistic 12 days; both are offered as optional extensions in the FAQs.
 */
export const nepalBhutanTours: PackageContent = {
  slug: "nepal-bhutan-tours",
  name: "Nepal & Bhutan Tours",
  tagline: "Two Himalayan Kingdoms in One Trip",
  metaTitle: "Nepal & Bhutan Tour Package | Kathmandu, Pokhara, Thimphu & Paro",
  metaDescription:
    "A private 12-day circuit through Nepal and Bhutan — Kathmandu's temples, Pokhara's mountain lake, Bhutan's dzongs, and the cliffside Tiger's Nest, connected by a short flight.",
  heroImage: "/images/destinations/paro-taktsang-tigers-nest.webp",
  heroImageAlt: "Paro Taktsang, the Tiger's Nest Monastery, Bhutan",
  heroHeadline: "Nepal & Bhutan: Two Himalayan Kingdoms",
  heroSubheadline:
    "A 12-day circuit connecting two genuinely different Himalayan countries — Nepal's temple squares and mountain lakes, followed by Bhutan's fortress-monasteries and the cliffside Tiger's Nest, linked by a short flight from Kathmandu to Paro.",
  overview:
    "Nepal and Bhutan sit within an hour's flight of each other but feel like genuinely different worlds — Nepal open, well-travelled and easy to move through independently; Bhutan deliberately restricted, guided and unhurried by policy rather than circumstance. Rather than simply combining our full 8-day Nepal Tours and 8-day Bhutan Tours itineraries into an unwieldy 16-day trip, this circuit trims each to its essentials — Kathmandu and Pokhara in Nepal, Thimphu and Punakha in Bhutan — while keeping the two experiences that most define each country: Nepal's temple-and-lake combination, and Bhutan's Tiger's Nest hike. The result is a realistic 12 days that gives a genuine feel for both kingdoms without the fatigue of an overlong regional tour.",
  quickFacts: [
    { label: "Duration", value: "12 Days / 11 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Mar – May & Sep – Nov" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Kathmandu",
      description:
        "Private transfer from Tribhuvan International Airport to your hotel in Kathmandu, with the rest of the day free to rest after your flight. An easy first evening wander through Thamel, the city's atmospheric backpacker and shopping district, is a good way to adjust to Nepal's pace before the sightseeing begins properly tomorrow, with narrow lanes of trekking shops, bakeries and prayer-flag-strung rooftops to explore. Your guide will confirm the full 12-day plan with you this evening, including the flight connection to Bhutan partway through the trip.",
    },
    {
      title: "Day 2 — Kathmandu Valley Sightseeing",
      description:
        "A full day covering the Kathmandu Valley's UNESCO World Heritage Sites, starting at Kathmandu Durbar Square, the historic royal palace complex with its ornately carved wooden temples. From there, Swayambhunath — often called the Monkey Temple for the free-roaming macaques on its grounds — offers sweeping views over the valley from its hilltop stupa. In the afternoon, visit Boudhanath, one of the largest stupas in the world, followed by Pashupatinath, a sacred Hindu temple complex on the Bagmati River where cremation ceremonies are still performed in public view.",
    },
    {
      title: "Day 3 — Kathmandu to Pokhara",
      description:
        "A domestic flight (roughly 25 minutes) or a scenic drive (6 to 7 hours by road, ask your guide about swapping this leg) to Pokhara, Nepal's second city and gateway to the Annapurna range. Arriving by early afternoon, the lakeside area around Phewa Lake makes for an easy, relaxed first evening, with restaurants and cafés right on the water and the Annapurna range visible across the lake on a clear evening — a genuinely different pace from Kathmandu's busier streets.",
    },
    {
      title: "Day 4 — Pokhara Sightseeing",
      description:
        "A full day around Pokhara's lake and valley, starting with a boat ride on Phewa Lake toward the small Tal Barahi temple on its island, with the Annapurna range reflected in the water on a clear morning. In the afternoon, visit Davis Falls, a dramatic waterfall that disappears into an underground tunnel, and the adjoining Gupteshwor Cave, a large limestone cave with a Shiva shrine inside. Adventure-minded travellers can also arrange paragliding over the lake and valley, launching from the Sarangkot ridge above the city — one of the most popular paragliding spots in the world.",
      image: "/images/destinations/pokhara-valley-machapuchare-view.webp",
      imageAlt: "Pokhara valley with Machapuchare mountain view, Nepal",
    },
    {
      title: "Day 5 — Sarangkot Sunrise, back to Kathmandu",
      description:
        "An early drive up to Sarangkot for sunrise over the Annapurna and Machapuchare (Fishtail) peaks, widely considered one of the best sunrise viewpoints in Nepal and a fitting final Himalayan moment before the itinerary shifts to Bhutan. After breakfast, fly back to Kathmandu, with the afternoon left free for any last-minute shopping in Thamel or a return visit to a favourite temple, ahead of tomorrow's flight onward to Bhutan.",
    },
    {
      title: "Day 6 — Kathmandu to Paro, on to Thimphu",
      description:
        "A flight to Paro, Bhutan — one of the most dramatic commercial airport approaches in the world, threading between Himalayan peaks on the final descent. Private transfer roughly an hour to Thimphu, Bhutan's capital and the only national capital anywhere in the world without a single traffic light. The contrast with Nepal is immediate: quieter streets, far fewer visitors, and a noticeably different, more deliberate pace. The rest of the day is free to rest and adjust to the altitude.",
    },
    {
      title: "Day 7 — Thimphu Sightseeing",
      description:
        "A full day in Thimphu, starting with Tashichho Dzong, a whitewashed fortress-monastery that houses the throne room of the King of Bhutan alongside its continued role as a monastic centre. Visit the Buddha Dordenma, a 51-metre bronze Buddha statue overlooking the valley, and the National Memorial Chorten, a constantly circumambulated stupa built in memory of Bhutan's third king. In the afternoon, the weekend handicrafts market offers a good sense of Bhutanese culture beyond the monuments, alongside the National Institute for Zorig Chusum where students train in Bhutan's traditional arts.",
      image: "/images/destinations/thimphu-tashichho-dzong.webp",
      imageAlt: "Tashichho Dzong, Thimphu, Bhutan",
    },
    {
      title: "Day 8 — Thimphu to Punakha via Dochula Pass",
      description:
        "A roughly 3-hour drive to Punakha, Bhutan's former capital, crossing the Dochula Pass at 3,100 metres, marked by 108 memorial chortens built in a neat arrangement and, on a clear day, a spectacular panorama of the eastern Himalayan range including several peaks over 7,000 metres. The road descends into a noticeably warmer, subtropical valley by the time you reach Punakha, a striking contrast in the space of a single drive.",
    },
    {
      title: "Day 9 — Punakha Sightseeing",
      description:
        "A full day centred on Punakha Dzong, widely considered the most beautiful dzong in Bhutan, built at the confluence of two rivers and reached by crossing a traditional wooden cantilever bridge. The dzong served as Bhutan's capital until the 1950s and remains the winter residence of the country's central monastic body. In the afternoon, walk Punakha's suspension bridge and visit Chimi Lhakhang, a fertility temple reached through rice paddies.",
      image: "/images/destinations/punakha-dzong-autumn.webp",
      imageAlt: "Punakha Dzong in autumn, Bhutan",
    },
    {
      title: "Day 10 — Punakha back to Paro",
      description:
        "A roughly 4 to 5-hour drive back over the Dochula Pass a second time, often with different weather and light than the first crossing, on to Paro. The Paro valley is Bhutan's most fertile, with terraced rice paddies running down to the Paro Chhu river; the small town itself, easily walkable, holds Rinpung Dzong, another working fortress-monastery, and the National Museum housed in the round Ta Dzong watchtower above it. The evening is left free to rest ahead of tomorrow's hike, genuinely the most physically demanding day of the trip.",
      image: "/images/destinations/paro-rinpung-dzong-valley-airport.webp",
      imageAlt: "Rinpung Dzong overlooking the Paro valley, Bhutan",
    },
    {
      title: "Day 11 — Tiger's Nest Monastery",
      description:
        "An early start for the hike to Paro Taktsang, the Tiger's Nest Monastery, built into a sheer cliff face 900 metres above the valley floor, according to legend at the site where Guru Rinpoche flew on the back of a tigress to meditate. The hike takes roughly 2 to 3 hours each way at a moderate pace, with a viewpoint cafeteria roughly halfway up offering a rest stop; mules are available for part of the ascent for travellers who'd prefer not to walk the entire way. A final evening in Paro closes out the trip's sightseeing.",
    },
    {
      title: "Day 12 — Departure",
      description:
        "A relaxed final morning in Paro before a private transfer to the airport for your onward or international departure flight. Twelve days across two Himalayan kingdoms behind you — Nepal's temples and mountain lake, and Bhutan's fortress-monasteries and cliffside monastery, two genuinely different countries experienced properly rather than rushed through as a single blurred region, each leaving a genuinely distinct impression rather than blending into one generic Himalayan trip.",
    },
  ],
  inclusions: [
    "5 nights in hotels of your choice in Nepal (Kathmandu & Pokhara), twin-sharing",
    "6 nights in hotels of your choice in Bhutan (Thimphu, Punakha & Paro), twin-sharing",
    "Daily breakfast in Nepal; all meals in Bhutan (standard in Bhutan's tourism model)",
    "Bhutan Sustainable Development Fee for the duration of your stay",
    "Domestic flight, Kathmandu to Pokhara (or by road, on request)",
    "International flight, Kathmandu to Paro",
    "Private vehicle and English-speaking guide throughout both countries",
  ],
  exclusions: [
    "International flights to Kathmandu and from Paro",
    "Nepal visa fee (available on arrival for most nationalities) and Bhutan visa fee (arranged in advance)",
    "Lunches and dinners in Nepal (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Optional activities such as paragliding or mule hire (arranged on request, paid locally)",
  ],
  highlights: [
    {
      title: "Two Genuinely Different Himalayan Countries",
      description:
        "Nepal's open, well-travelled pace and Bhutan's deliberately restricted, guided approach make for a real contrast within one trip.",
    },
    {
      title: "A Realistic 12 Days, Not an Overlong 16",
      description:
        "Each country's itinerary is trimmed to its essentials rather than simply combining two full 8-day circuits back to back.",
    },
    {
      title: "Both Signature Experiences Kept In",
      description:
        "Pokhara's lake-and-mountain views and Bhutan's Tiger's Nest hike — the single most representative experience of each country — both make the cut.",
    },
  ],
  bestTimeToVisit: {
    heading: "March–May & September–November are Best",
    note: "These two windows offer the clearest Himalayan views and most comfortable temperatures across both countries. The June–September monsoon brings heavy rain and frequently obscures mountain views in both Nepal and Bhutan, while December–February turns genuinely cold at altitude, particularly at Bhutan's Dochula Pass.",
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
      name: "Paro",
      tagline: "Home of the Tiger's Nest",
      description: "Bhutan's only international airport and the setting for its single most iconic sight.",
      href: "/destinations/paro",
      image: "/images/destinations/paro-taktsang-tigers-nest.webp",
      imageAlt: "Paro Taktsang, the Tiger's Nest Monastery, Bhutan",
    },
    {
      name: "Punakha",
      tagline: "Bhutan's Former Capital",
      description: "A riverside dzong widely considered the most beautiful in Bhutan, reached over the Dochula Pass.",
      href: "/destinations/punakha",
      image: "/images/destinations/punakha-dzong-autumn.webp",
      imageAlt: "Punakha Dzong in autumn, Bhutan",
    },
  ],
  showCarFleet: false,
  faqs: [
    {
      question: "Can we add Chitwan or Gangtey back into this itinerary?",
      answer:
        "Yes — this 12-day circuit is a starting template trimmed for time. Chitwan's jungle safari (Nepal) or Gangtey's glacial crane valley (Bhutan) can both be added back in with 2 to 3 extra days each; let us know when planning your trip.",
    },
    {
      question: "How does the flight between Kathmandu and Paro work?",
      answer:
        "Direct flights run between Kathmandu and Paro on Bhutan's national carriers, taking roughly an hour. We arrange this as part of the itinerary and time it to connect smoothly with your Nepal sightseeing.",
    },
    {
      question: "Do we need separate visas for Nepal and Bhutan?",
      answer:
        "Yes — Nepal offers visa on arrival for most nationalities, while Bhutan's visa is arranged in advance through your licensed tour operator as part of booking this trip. We handle the Bhutan visa process directly once your dates are confirmed.",
    },
    {
      question: "Is it better to do Nepal or Bhutan first?",
      answer:
        "We generally suggest Nepal first, as we've structured it here — it eases you into the region before Bhutan's more structured, guided pace, though the order can be reversed if your flight routing makes more sense the other way.",
    },
    {
      question: "Would it be better to visit each country separately instead?",
      answer:
        "If you have the time for two separate trips, our standalone Nepal Tours and Bhutan Tours itineraries each go deeper into their respective countries. This combined circuit is built specifically for travellers who want a genuine taste of both within one trip.",
    },
  ],
  relatedPackages: [
    {
      name: "Nepal Tours",
      tagline: "Temples, Mountains & the Jungle · 8 Days",
      description: "The full Nepal circuit on its own, including Nagarkot's sunrise views and Chitwan's jungle safari.",
      href: "/tours/nepal-tours",
      image: "/images/destinations/pokhara-valley-machapuchare-view.webp",
      imageAlt: "Pokhara valley with Machapuchare mountain view, Nepal",
    },
    {
      name: "Bhutan Tours",
      tagline: "Dzongs, Valleys & the Tiger's Nest · 8 Days",
      description: "The full Bhutan circuit on its own, including the glacial Gangtey valley.",
      href: "/tours/bhutan-tours",
      image: "/images/destinations/paro-taktsang-tigers-nest.webp",
      imageAlt: "Paro Taktsang, the Tiger's Nest Monastery, Bhutan",
    },
  ],
  draftPendingReview: false,
};
