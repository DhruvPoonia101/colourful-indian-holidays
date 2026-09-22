import type { PackageContent } from "./types";

/**
 * DRAFT CONTENT — written without confirmed business input.
 * Pricing is shown as "Price on Request" rather than a fixed number, so no
 * price verification is needed. Itinerary/inclusion details are still drafted
 * content Dhruv should review for accuracy.
 *
 * A genuinely condensed triple-country circuit, not the three individual
 * itineraries concatenated (which would run 20+ days). This trims further
 * than any of the pairwise combos: Jaipur is dropped from the India leg
 * and Pokhara from the Nepal leg, on top of Chitwan and Gangtey already
 * dropped in the pairwise versions, to keep the total to a realistic 12
 * days. All three are offered as extensions in the FAQs.
 */
export const indiaNepalBhutanTours: PackageContent = {
  slug: "india-nepal-bhutan-tours",
  name: "India, Nepal & Bhutan Tours",
  tagline: "Three Countries, One Himalayan Journey",
  metaTitle: "India, Nepal & Bhutan Tour Package | Delhi, Agra, Kathmandu & Thimphu",
  metaDescription:
    "A private 12-day circuit through India, Nepal and Bhutan — the Taj Mahal, Kathmandu's temples, Bhutan's dzongs, and the cliffside Tiger's Nest, in a single South Asia journey.",
  heroImage: "/images/destinations/paro-taktsang-tigers-nest.webp",
  heroImageAlt: "Paro Taktsang, the Tiger's Nest Monastery, Bhutan",
  heroHeadline: "India, Nepal & Bhutan: Three Countries, One Journey",
  heroSubheadline:
    "A 12-day circuit through all three Himalayan-adjacent countries — the Taj Mahal in Agra, Kathmandu's temple squares, and Bhutan's fortress-monasteries and Tiger's Nest, connected by direct flights.",
  overview:
    "Combining India, Nepal and Bhutan properly means accepting real trade-offs — running the full itineraries for all three back to back would mean well over 20 days, more than most travellers can realistically spend on a single trip. This circuit is built around what each country is genuinely best known for rather than trying to cover everything: the Taj Mahal and Delhi from India, Kathmandu's UNESCO temple squares from Nepal, and Bhutan's fortress-monasteries culminating in the cliffside Tiger's Nest. Jaipur, Pokhara, Chitwan and Gangtey are all left out of this specific route — not because they aren't worthwhile, but because a genuinely good 12-day trip needs a tighter focus than a 20-day one, and every one of those four is offered as a straightforward extension if you have the extra days.",
  quickFacts: [
    { label: "Duration", value: "12 Days / 11 Nights" },
    { label: "Group Size", value: "Private, any size" },
    { label: "Starting From", value: "Price on Request" },
    { label: "Best Season", value: "Oct – Mar" },
  ],
  priceCurrency: "INR",
  itinerary: [
    {
      title: "Day 1 — Arrive in Delhi",
      description:
        "On arrival at Indira Gandhi International Airport, your private guide and driver meet you at the terminal for a hassle-free transfer to your hotel in Delhi. The rest of the day is left free to rest and adjust after a long international flight, with an optional evening orientation walk through a nearby market to ease gently into the city before sightseeing begins tomorrow. Your guide will also confirm the full 12-day plan across all three countries with you this evening.",
    },
    {
      title: "Day 2 — Delhi Sightseeing",
      description:
        "A full-day private tour of both Old and New Delhi, covering the city's Mughal and colonial layers in a single comfortable day. In Old Delhi: Humayun's Tomb, the elegant red-sandstone precursor to the Taj Mahal, the Jama Masjid mosque, and a cycle-rickshaw ride through the packed lanes of Chandni Chowk. In New Delhi: the wide colonial-era avenues around India Gate and the government quarter surrounding Rashtrapati Bhavan. Your English-speaking guide narrates the history throughout, translating the sensory overload of Old Delhi's markets into something easier to navigate.",
      image: "/images/destinations/delhi-india-gate.webp",
      imageAlt: "India Gate at dusk, Delhi",
    },
    {
      title: "Day 3 — Delhi to Agra",
      description:
        "A scenic 3 to 4-hour private drive south to Agra, home of the Taj Mahal. After checking into your hotel, visit Agra Fort, a red sandstone UNESCO World Heritage Site and the Mughal seat of power before the capital moved to Delhi, walking the same ramparts where Emperor Shah Jahan was reportedly imprisoned by his own son. In the evening, head to the Mehtab Bagh gardens across the river for an uncrowded view of the Taj Mahal at sunset.",
      image: "/images/destinations/agra-fort.webp",
      imageAlt: "Agra Fort's red sandstone ramparts",
    },
    {
      title: "Day 4 — Taj Mahal Sunrise, Fly to Kathmandu",
      description:
        "Enter the Taj Mahal at opening hour for sunrise, for softer light, cooler temperatures and the thinnest crowds of the day. Your guide will point out details easy to miss alone: the pietra dura stone inlay work, and the deliberate symmetry designed to be viewed from the main gateway. Afterwards, drive back to Delhi to connect with a flight to Kathmandu, Nepal's capital and a genuinely different atmosphere from the Golden Triangle's Mughal grandeur — smaller in scale, higher in altitude, and centred on temple squares rather than forts and palaces.",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      title: "Day 5 — Kathmandu Valley Sightseeing",
      description:
        "A full day covering the Kathmandu Valley's UNESCO World Heritage Sites, starting at Kathmandu Durbar Square, the historic royal palace complex with its ornately carved wooden temples. From there, Swayambhunath — often called the Monkey Temple for the free-roaming macaques on its grounds — offers sweeping views over the valley. In the afternoon, visit Boudhanath, one of the largest stupas in the world, followed by Pashupatinath, a sacred Hindu temple complex on the Bagmati River where cremation ceremonies are still performed in public view.",
    },
    {
      title: "Day 6 — Kathmandu to Nagarkot",
      description:
        "A short drive (around 1.5 to 2 hours) east out of the Kathmandu Valley to Nagarkot, a ridge-top town known for some of the most reliable Himalayan panorama views in the region, including — on a clear day — Everest itself in the distance. The afternoon is left unhurried, with time to settle into a hillside guesthouse and watch the light change over the mountains through the evening, a deliberately quiet stop before the trip's final leg into Bhutan.",
    },
    {
      title: "Day 7 — Nagarkot Sunrise, Fly to Paro",
      description:
        "An early start for sunrise from Nagarkot's viewing tower, watching the Himalayan range turn gold as the sun comes up over the peaks — a fitting final Himalayan moment for the Nepal leg of the trip. After breakfast, drive back to Kathmandu to connect with a flight to Paro, Bhutan — one of the most dramatic commercial airport approaches in the world, threading between Himalayan peaks on the final descent. Private transfer roughly an hour to Thimphu, Bhutan's capital and the only national capital anywhere in the world without a single traffic light.",
    },
    {
      title: "Day 8 — Thimphu Sightseeing",
      description:
        "A full day in Thimphu, starting with Tashichho Dzong, a whitewashed fortress-monastery that houses the throne room of the King of Bhutan alongside its continued role as a monastic centre. Visit the Buddha Dordenma, a 51-metre bronze Buddha statue overlooking the entire valley, and the National Memorial Chorten, a constantly circumambulated stupa. In the afternoon, the weekend handicrafts market offers a good sense of Bhutanese culture beyond the monuments — by this point in the trip, the contrast between three countries' distinct paces will be genuinely obvious.",
      image: "/images/destinations/thimphu-tashichho-dzong.webp",
      imageAlt: "Tashichho Dzong, Thimphu, Bhutan",
    },
    {
      title: "Day 9 — Thimphu to Punakha via Dochula Pass",
      description:
        "A roughly 3-hour drive to Punakha, Bhutan's former capital, crossing the Dochula Pass at 3,100 metres, marked by 108 memorial chortens and, on a clear day, a spectacular panorama of the eastern Himalayan range including several peaks over 7,000 metres. The road descends into a noticeably warmer, subtropical valley by the time you reach Punakha, a striking contrast in the space of a single drive.",
    },
    {
      title: "Day 10 — Punakha Sightseeing",
      description:
        "A full day centred on Punakha Dzong, widely considered the most beautiful dzong in Bhutan, built at the confluence of two rivers and reached by crossing a traditional wooden cantilever bridge. The dzong served as Bhutan's capital until the 1950s and remains the winter residence of the country's central monastic body today. In the afternoon, walk Punakha's suspension bridge and visit Chimi Lhakhang, a fertility temple reached through rice paddies.",
      image: "/images/destinations/punakha-dzong-autumn.webp",
      imageAlt: "Punakha Dzong in autumn, Bhutan",
    },
    {
      title: "Day 11 — Punakha back to Paro",
      description:
        "A roughly 4 to 5-hour drive back over the Dochula Pass a second time, often with different weather and light than the first crossing, on to Paro. The Paro valley is Bhutan's most fertile, with terraced rice paddies running down to the Paro Chhu river; the small town itself, easily walkable, holds Rinpung Dzong and the National Museum in its round Ta Dzong watchtower. The evening is left free to rest ahead of tomorrow's hike, genuinely the most physically demanding day of the trip.",
      image: "/images/destinations/paro-rinpung-dzong-valley-airport.webp",
      imageAlt: "Rinpung Dzong overlooking the Paro valley, Bhutan",
    },
    {
      title: "Day 12 — Tiger's Nest Monastery & Departure",
      description:
        "An early start for the hike to Paro Taktsang, the Tiger's Nest Monastery, built into a sheer cliff face 900 metres above the valley floor, according to legend at the site where Guru Rinpoche flew on the back of a tigress to meditate. The hike takes roughly 2 to 3 hours each way at a moderate pace, with a viewpoint cafeteria roughly halfway up offering a rest stop; mules are available for part of the ascent. A private transfer to Paro airport follows for your onward or international departure flight, twelve days across three genuinely distinct countries behind you — India's Mughal monuments, Nepal's temple squares and mountain views, and Bhutan's fortress-monasteries and cliffside finale.",
    },
  ],
  inclusions: [
    "3 nights in a hotel of your choice in India (Delhi & Agra), twin-sharing",
    "3 nights in a hotel of your choice in Nepal (Kathmandu & Nagarkot), twin-sharing",
    "5 nights in hotels of your choice in Bhutan (Thimphu, Punakha & Paro), twin-sharing",
    "Daily breakfast in India and Nepal; all meals in Bhutan (standard in Bhutan's tourism model)",
    "Bhutan Sustainable Development Fee for the duration of your stay",
    "Domestic and connecting flights: Delhi–Kathmandu and Kathmandu–Paro",
    "Private air-conditioned vehicle and English-speaking guide throughout all three countries",
  ],
  exclusions: [
    "International flights to Delhi and from Paro",
    "Nepal visa fee (available on arrival for most nationalities) and Bhutan visa fee (arranged in advance)",
    "Lunches and dinners in India and Nepal (unless noted)",
    "Personal expenses, tips, and travel insurance",
    "Mule hire for the Tiger's Nest hike, if used (paid locally, arranged on request)",
  ],
  highlights: [
    {
      title: "Three Countries, Genuinely Distinct Paces",
      description:
        "India's intensity, Nepal's open, well-travelled ease, and Bhutan's deliberately restricted calm each feel like a different register entirely.",
    },
    {
      title: "A Realistic 12 Days, Not an Overlong 20+",
      description:
        "Built around what each country is best known for, rather than an exhausting attempt to cover all three fully.",
    },
    {
      title: "Every Trade-Off Is a Genuine Extension",
      description:
        "Jaipur, Pokhara, Chitwan and Gangtey are all left out of this specific route but can be added back in with extra days.",
    },
  ],
  bestTimeToVisit: {
    heading: "October–March is Best",
    note: "Cool, dry conditions make sightseeing genuinely comfortable across all three countries, and this window offers the clearest Himalayan views for Nagarkot's sunrise and the Dochula Pass crossing. April to June turns hot across North India, and the June–September monsoon brings heavy rain and frequently obscures mountain views in both Nepal and Bhutan.",
  },
  relatedDestinations: [
    {
      name: "Agra",
      tagline: "Home of the Taj Mahal",
      description: "The Taj Mahal, Agra Fort, and the abandoned Mughal capital of Fatehpur Sikri.",
      href: "/destinations/agra",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Kathmandu",
      tagline: "Nepal's Temple-Filled Capital",
      description: "UNESCO-listed durbar squares, stupas and temples across the Kathmandu Valley.",
      href: "/destinations/kathmandu",
      image: "/images/destinations/kathmandu-aerial-boudhanath-city.webp",
      imageAlt: "Aerial view of Boudhanath stupa and Kathmandu city",
    },
    {
      name: "Thimphu",
      tagline: "Bhutan's Capital",
      description: "The only national capital in the world without a single traffic light, small and walkable.",
      href: "/destinations/thimphu",
      image: "/images/destinations/thimphu-tashichho-dzong.webp",
      imageAlt: "Tashichho Dzong, Thimphu, Bhutan",
    },
    {
      name: "Paro",
      tagline: "Home of the Tiger's Nest",
      description: "Bhutan's only international airport and the setting for its single most iconic sight.",
      href: "/destinations/paro",
      image: "/images/destinations/paro-taktsang-tigers-nest.webp",
      imageAlt: "Paro Taktsang, the Tiger's Nest Monastery, Bhutan",
    },
  ],
  showCarFleet: true,
  faqs: [
    {
      question: "Can we add Jaipur, Pokhara, Chitwan or Gangtey back into this itinerary?",
      answer:
        "Yes — this 12-day circuit is deliberately built around each country's essentials, and all four are straightforward additions. Jaipur adds 2 days to the India leg, Pokhara or Chitwan add 2 to 3 days each to Nepal, and Gangtey adds 2 to 3 days to Bhutan. Let us know when planning your trip.",
    },
    {
      question: "Is 12 days really enough to see three countries properly?",
      answer:
        "It's enough to get a genuine, unrushed feel for each country's essentials rather than a superficial glimpse — the Taj Mahal, Kathmandu's temples, and Bhutan's dzongs and Tiger's Nest all get proper time. It's not meant to be comprehensive; it's meant to be a real introduction to all three, with extensions available for anyone who wants to go deeper into any one of them.",
    },
    {
      question: "How do the flights between the three countries work?",
      answer:
        "Delhi connects to Kathmandu, and Kathmandu connects to Paro — both are established routes we arrange as part of the itinerary and time to flow smoothly between each country's sightseeing.",
    },
    {
      question: "Do we need three separate visas?",
      answer:
        "Yes — an e-Visa for India arranged in advance, a Nepal visa available on arrival for most nationalities, and a Bhutan visa arranged through your licensed tour operator. We handle the Bhutan visa process directly and can advise on the other two once your nationality and dates are confirmed.",
    },
    {
      question: "Would it be better to book each country as a separate trip?",
      answer:
        "If you have time for three separate trips, our standalone Golden Triangle Tour, Nepal Tours and Bhutan Tours itineraries each go deeper into their respective countries. This combined circuit is built specifically for travellers who want a genuine taste of all three within one journey.",
    },
  ],
  relatedPackages: [
    {
      name: "India & Nepal Tours",
      tagline: "The Golden Triangle & the Himalayas · 11 Days",
      description: "The two-country version of this trip, with more time in each destination.",
      href: "/tours/india-nepal-tours",
      image: "/images/destinations/agra-taj-mahal.webp",
      imageAlt: "Taj Mahal at sunrise, Agra",
    },
    {
      name: "Nepal & Bhutan Tours",
      tagline: "Two Himalayan Kingdoms in One Trip · 12 Days",
      description: "The two-country version of this trip, for travellers without an India leg.",
      href: "/tours/nepal-bhutan-tours",
      image: "/images/destinations/paro-taktsang-tigers-nest.webp",
      imageAlt: "Paro Taktsang, the Tiger's Nest Monastery, Bhutan",
    },
  ],
  draftPendingReview: false,
};
