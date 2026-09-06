import type { FaqItem } from "@/lib/seo/faq-schema";

export type MonthRow = {
  month: string;
  slug: string;
  weather: string;
  crowds: string;
  festivals: string;
  bestFor: string;
  avoid: string;
};

export const monthTable: MonthRow[] = [
  {
    month: "January",
    slug: "january",
    weather: "Peak cool season — cold mornings in Rajasthan and Delhi, pleasant midday sun.",
    crowds: "Peak season — book hotels well ahead",
    festivals: "Makar Sankranti, Jaipur Literature Festival",
    bestFor: "Rajasthan, Delhi, Agra, the Golden Triangle, tiger safaris",
    avoid: "Northern hill stations under snow; early-morning Delhi smog",
  },
  {
    month: "February",
    slug: "february",
    weather: "Still cool and dry across the north; warming quickly in the south.",
    crowds: "Peak season, easing slightly toward month's end",
    festivals: "Jaisalmer Desert Festival, Vasant Panchami",
    bestFor: "Rajasthan, desert festivals, South India, Kerala backwaters",
    avoid: "Nothing major — a genuine year-round sweet spot for most of the country",
  },
  {
    month: "March",
    slug: "march",
    weather: "Warming fast in the plains; still comfortable in the hills and Himalayas.",
    crowds: "Moderate, rising briefly around Holi",
    festivals: "Holi, Jaipur Elephant Festival",
    bestFor: "Holi in North India, Himalayan foothills, early hill-station trips",
    avoid: "Midday heat starting to build in Rajasthan, Delhi and Agra",
  },
  {
    month: "April",
    slug: "april",
    weather: "Hot across the plains; hill stations and higher-altitude regions come into their own.",
    crowds: "Low in the plains, rising in the hills",
    festivals: "Baisakhi, Himachal apple-blossom season",
    bestFor: "Himachal, Leh & Ladakh (late April), Darjeeling, Sikkim",
    avoid: "Rajasthan, Delhi and Agra during peak midday hours",
  },
  {
    month: "May",
    slug: "may",
    weather: "The hottest month across most of the plains, ahead of the monsoon.",
    crowds: "Low in the plains, peak season in hill stations",
    festivals: "Buddha Purnima",
    bestFor: "Himalayan hill stations, Leh & Ladakh, high-altitude trekking",
    avoid: "Rajasthan and the Golden Triangle for daytime sightseeing",
  },
  {
    month: "June",
    slug: "june",
    weather: "Monsoon arrives in the south and east first; still dry and very hot in the north-west.",
    crowds: "Low nationally, busy in Ladakh and hill stations",
    festivals: "Rath Yatra (usually late June)",
    bestFor: "Leh & Ladakh (a genuine monsoon-shadow exception), high Himalayan regions",
    avoid: "Kerala, Goa and the west coast as the monsoon sets in",
  },
  {
    month: "July",
    slug: "july",
    weather: "Monsoon in full swing across most of the country.",
    crowds: "Low, except Ladakh's short peak season",
    festivals: "Continuing Rath Yatra celebrations, regional monsoon festivals",
    bestFor: "Leh & Ladakh, monsoon greenery in the Western Ghats for travellers who don't mind rain",
    avoid: "Most lowland sightseeing itineraries; Kaziranga is closed for flooding",
  },
  {
    month: "August",
    slug: "august",
    weather: "Peak monsoon in most regions, with a brief lull in parts of the north-west.",
    crowds: "Low nationally, Ladakh still busy",
    festivals: "Teej, Independence Day (Aug 15), Raksha Bandhan",
    bestFor: "Leh & Ladakh, monsoon festivals like Teej and Independence Day",
    avoid: "Coastal and lowland travel generally",
  },
  {
    month: "September",
    slug: "september",
    weather: "Monsoon retreating; humidity still high but rainfall easing.",
    crowds: "Low, a good month to book ahead for October",
    festivals: "Ganesh Chaturthi, Onam (Kerala)",
    bestFor: "Early-season bookings for October travel; Ganesh Chaturthi celebrations",
    avoid: "Still too early for reliable dry-season sightseeing in most regions",
  },
  {
    month: "October",
    slug: "october",
    weather: "The classic season begins — skies clear, humidity drops, temperatures turn pleasant.",
    crowds: "Rising fast toward peak season",
    festivals: "Navratri, Dussehra, sometimes Diwali (lunar calendar dependent)",
    bestFor: "Nearly everywhere: Rajasthan, the Golden Triangle, Kerala, wildlife parks reopening",
    avoid: "Early October can still be humid in parts of the east and south",
  },
  {
    month: "November",
    slug: "november",
    weather: "Comfortable, dry and increasingly popular — the season is now in full swing.",
    crowds: "Peak season — book well ahead",
    festivals: "Diwali (most years), Pushkar Camel Fair",
    bestFor: "Rajasthan, the Golden Triangle, the Pushkar Camel Fair, wildlife safaris",
    avoid: "Delhi's air quality often worsens noticeably this month",
  },
  {
    month: "December",
    slug: "december",
    weather: "Cool to cold, especially at night in Rajasthan and the north; a popular holiday month.",
    crowds: "Peak season, busiest around Christmas–New Year",
    festivals: "Christmas, New Year celebrations nationwide",
    bestFor: "Rajasthan, the Golden Triangle, South India's coast, Christmas and New Year breaks",
    avoid: "Higher hotel rates and busier sights around the Christmas–New Year window",
  },
] as const;

export const regionCallouts = [
  {
    region: "Rajasthan & the Golden Triangle",
    summary: "October through March, no real exceptions.",
    detail:
      "This is the region most first-time itineraries are built around, and it has the most clear-cut season of any part of the country. Outside October–March, daytime temperatures in Jaipur, Agra and Delhi regularly climb past 40°C from April to June, making full days of fort- and monument-hopping genuinely uncomfortable rather than just warm. November and February are usually the sweet spot within that window — dry and mild without December's coldest nights or Delhi's worst late-autumn smog.",
  },
  {
    region: "Kerala",
    summary: "September through March — but for different reasons at each end.",
    detail:
      "Kerala runs almost opposite to the popular imagination of \"Indian monsoon = avoid.\" The backwaters are arguably at their greenest and most dramatic in September and October, just as the monsoon retreats, rather than in the driest winter months. December through February then brings the classic dry, warm, beach-friendly season most visitors expect. Late May through August is the true monsoon and best avoided unless you specifically want to experience it.",
  },
  {
    region: "Leh & Ladakh",
    summary: "June through September — the exact opposite of the rest of North India.",
    detail:
      "Ladakh sits in the rain shadow of the Himalayas, so it barely receives the monsoon that shuts down travel elsewhere, and its high mountain passes are typically snow-closed from November through April or May. That leaves a short, specific window — roughly June to September — when Ladakh is not just tolerable but genuinely at its best, precisely while Rajasthan and Delhi are at their most difficult. Plan a Ladakh trip on its own calendar, not the rest of India's.",
  },
  {
    region: "The Himalayas (Himachal, Darjeeling & Sikkim)",
    summary: "March through June, and again October through November.",
    detail:
      "Lower and more accessible than Ladakh, Himachal's hill stations, Darjeeling and Sikkim follow a gentler version of the same logic — pleasant spring and early-summer weather from March to June, a wet monsoon through the late summer, then a second, clearer window in autumn before winter cold sets in. Spring brings apple and rhododendron blossoms in Himachal; autumn brings the clearest mountain views of the year.",
  },
] as const;

export const regionGuide = [
  {
    region: "Rajasthan",
    season: "October – March",
    note: "Cool, dry days — the classic season for forts and cities alike.",
  },
  {
    region: "Delhi",
    season: "October – March",
    note: "Comfortable, though November–December can bring heavy smog.",
  },
  {
    region: "Agra",
    season: "October – March",
    note: "Often the hottest Golden Triangle stop April–June.",
  },
  {
    region: "Varanasi",
    season: "October – March",
    note: "Cool mornings for sunrise boat rides on the Ganges.",
  },
  {
    region: "Ranthambore, Sariska & Bandhavgarh",
    season: "October – June",
    note: "April–June heat often brings the best tiger sightings, despite the temperatures.",
  },
  {
    region: "Kaziranga",
    season: "November – April",
    note: "Closed June–September for the Brahmaputra monsoon floods.",
  },
  {
    region: "Tamil Nadu & Gujarat Coasts",
    season: "November – February",
    note: "Cool, dry conditions for coastal sightseeing.",
  },
  {
    region: "Maharashtra Coast",
    season: "October – February",
    note: "Best before the Konkan coast's summer humidity sets in.",
  },
  {
    region: "Andaman Islands",
    season: "October – May",
    note: "Best diving and beach conditions; heavy monsoon rain June–September.",
  },
  {
    region: "Himachal & Leh-Ladakh",
    season: "April – October",
    note: "Ladakh's high passes are typically snow-closed November–April.",
  },
  {
    region: "Kerala Backwaters",
    season: "September – March",
    note: "Post-monsoon lushness through the dry, cooler winter months.",
  },
  {
    region: "Nepal (Kathmandu, Pokhara, Everest Region)",
    season: "October – December & March – May",
    note: "The clearest Himalayan views fall either side of winter and the monsoon.",
  },
  {
    region: "Bhutan",
    season: "October – December & March – May",
    note: "Same two windows as Nepal — clearest mountain views, most comfortable trekking.",
  },
] as const;

export const bestTimeFaqs: FaqItem[] = [
  {
    question: "What is the single best month to visit India?",
    answer:
      "For most first-time itineraries — Rajasthan, Delhi, Agra and the Golden Triangle — October to March is the reliable window, with November and February often cited as the sweet spot: dry, comfortable temperatures without December's coldest nights or Delhi's worst air quality.",
  },
  {
    question: "Is there a single 'best time to visit India' for the whole country?",
    answer:
      "No — India is roughly the size of Western Europe, and its regions run on genuinely different calendars. Rajasthan and Delhi are best October–March, Ladakh is only accessible June–September, and Kerala's backwaters are at their lushest just after the monsoon. The right month depends entirely on where your itinerary goes.",
  },
  {
    question: "When should we avoid travelling to India?",
    answer:
      "The core monsoon months (June to September) are the trickiest for a classic North India itinerary — heavy rain, high humidity, and some parks like Kaziranga closed entirely. The exception is Leh & Ladakh, which sits in a rain shadow and is actually best visited in exactly this window.",
  },
  {
    question: "Does the monsoon affect the whole country at once?",
    answer:
      "No — it arrives in Kerala first, typically around late May or early June, then moves north and east over the following weeks, and retreats from the north-west last, usually by late September. A region-by-region view matters more than a single national monsoon date.",
  },
  {
    question: "Should we plan around festivals like Diwali or Holi?",
    answer:
      "It can be a highlight, but book well ahead — both fall during or near the high season and hotel rates rise accordingly. Exact dates shift each year with the lunar calendar, so we confirm them when we build your itinerary rather than quoting a fixed date here.",
  },
] as const;
