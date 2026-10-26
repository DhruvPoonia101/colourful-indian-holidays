import { CLIMATE } from "@/content/months/climate";

/**
 * Data behind the "When should I go?" planner (/tools/when-to-go-planner).
 *
 * Ratings are Colourful Indian Holidays' editorial judgement, 0-3, built from
 * published sources and checked on 25 Oct 2026:
 * - Golden Triangle & Rajasthan: Delhi (IMD normals) and Jaipur averages in
 *   src/content/months/climate.ts. Heat and rain drive the rating.
 * - Kerala: Kochi normals in the same file. Rain drives the rating; October
 *   and November are rated "good" (not "best") because the north-east
 *   monsoon still brings showers, consistent with our October page.
 * - Tiger safaris: park seasons on our destination pages and our guide
 *   /travel-guide/which-tiger-reserve-in-india-and-when-to-go (core zones of
 *   most northern and central reserves close roughly July-September).
 * - Bhutan: Lonely Planet's best-time guide (spring and autumn best,
 *   monsoon wet, winter cold and quiet).
 * - Nepal: Intrepid Travel's best-time guide (October-November and March-April
 *   best, monsoon June-August).
 * They are guidance, not forecasts: weather varies year to year and by place.
 */

export type Rating = 0 | 1 | 2 | 3;

export const RATING_LABEL: Record<Rating, string> = {
  3: "Best",
  2: "Good",
  1: "Fair",
  0: "Avoid",
};

export const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

export const MONTH_SLUGS = MONTH_NAMES.map((m) => m.toLowerCase());

export type Planner = {
  id: string;
  label: string;
  /** One sentence shown under the selector. */
  intro: string;
  ratings: readonly Rating[];
  notes: readonly string[];
  tourHref: string;
  tourLabel: string;
};

const avg = (a: number, b: number) => (a + b) / 2;

function northNote(i: number, r: Rating): string {
  const high = Math.round(avg(CLIMATE.Delhi.high[i], CLIMATE.Jaipur.high[i]));
  const low = Math.round(avg(CLIMATE.Delhi.low[i], CLIMATE.Jaipur.low[i]));
  const rain = Math.round(avg(CLIMATE.Delhi.rainMm[i], CLIMATE.Jaipur.rainMm[i]));
  const base = `Typical highs around ${high}°C and lows around ${low}°C, with about ${rain} mm of rain.`;
  const tail: Record<Rating, string> = {
    3: " Comfortable for full days of sightseeing.",
    2: " Pleasant, with some warmth or crowds depending on the week.",
    1: " Hot or humid; start early and rest at midday.",
    0: " Very hot or wet; most travellers avoid it.",
  };
  return base + tail[r];
}

function keralaNote(i: number, r: Rating): string {
  const k = CLIMATE["Kerala (Kochi)"];
  const base = `Typical highs around ${k.high[i]}°C with about ${k.rainMm[i]} mm of rain.`;
  const tail: Record<Rating, string> = {
    3: " Dry and settled: ideal for backwaters and beaches.",
    2: " Mostly good, with some showers.",
    1: " Showery and humid; fewer visitors and lower prices.",
    0: " Heavy monsoon rain; many travellers avoid it.",
  };
  return base + tail[r];
}

const northRatings: Rating[] = [3, 3, 2, 1, 0, 0, 0, 0, 1, 2, 3, 3];
const keralaRatings: Rating[] = [3, 3, 3, 2, 1, 0, 0, 0, 1, 2, 2, 3];

export const PLANNERS: Planner[] = [
  {
    id: "golden-triangle",
    label: "Golden Triangle & Rajasthan",
    intro: "Delhi, Agra, Jaipur and the Rajasthan cities. Heat and the July to September monsoon decide the best months.",
    ratings: northRatings,
    notes: northRatings.map((r, i) => northNote(i, r)),
    tourHref: "/tours/golden-triangle-tour",
    tourLabel: "See our Golden Triangle tours",
  },
  {
    id: "kerala",
    label: "Kerala & South India",
    intro: "Backwaters, beaches and tea hills. Rainfall decides the best months.",
    ratings: keralaRatings,
    notes: keralaRatings.map((r, i) => keralaNote(i, r)),
    tourHref: "/tours/kerala-tours",
    tourLabel: "See our Kerala tours",
  },
  {
    id: "tigers",
    label: "Tiger safaris",
    intro: "Ranthambore, Bandhavgarh, Kanha and Pench. Core zones close for the monsoon; March to June gives the best odds but is hot.",
    ratings: [2, 2, 3, 3, 3, 2, 0, 0, 0, 1, 2, 2],
    notes: [
      "Cool mornings and good light. Thicker foliage can hide tigers.",
      "Comfortable and clear, with improving sighting odds toward March.",
      "Tigers start to gather near water. Warm days, so drives run at dawn and dusk.",
      "Among the best sighting odds, but very hot. Dawn and dusk drives only.",
      "Peak heat and strong sighting odds as waterholes shrink.",
      "Hot until the monsoon arrives; core zones close around the end of June.",
      "Core zones of most northern and central reserves are closed (monsoon).",
      "Core zones of most northern and central reserves are closed (monsoon).",
      "Core zones are closed until around 1 October (dates vary by park).",
      "Reserves reopen around 1 October. Lush and quiet, but tigers are harder to spot.",
      "Comfortable days and golden light. Dense foliage can still hide tigers.",
      "Cool and clear, with good wildlife and birding.",
    ],
    tourHref: "/tours/wildlife-tiger-safari-tours",
    tourLabel: "See our tiger safari tours",
  },
  {
    id: "bhutan",
    label: "Bhutan",
    intro: "Spring and autumn are best; the June to September monsoon is wet and winter is cold but quiet.",
    ratings: [2, 2, 3, 3, 3, 1, 1, 1, 1, 3, 3, 2],
    notes: [
      "Cold in central Bhutan and very quiet; lower valleys such as Punakha stay mild.",
      "Cold but quiet, a good month to avoid crowds. Punakha Drubchen falls in late February.",
      "Spring begins: rhododendrons start to bloom. Good for lower-altitude treks.",
      "Warm, green and in bloom. The Paro Tsechu festival is usually late March or early April.",
      "Warm and green, with rhododendrons in the hills. More rain and haze than autumn.",
      "Monsoon begins. Sightseeing is possible, but expect rain and some road damage.",
      "Heaviest monsoon rain of the year. Trekking is not advised.",
      "Monsoon. Trekking is not advised; some hotels discount rooms.",
      "Monsoon easing, cloudy and soggy. Trekking is not advised until mid-September.",
      "Clear skies and comfortable days. The most popular month, with festivals.",
      "Clear and comfortable. Black-necked cranes winter in the Phobjikha Valley.",
      "Dry and cold in central Bhutan, with very few visitors.",
    ],
    tourHref: "/tours/bhutan-tours",
    tourLabel: "See our Bhutan tour",
  },
  {
    id: "nepal",
    label: "Nepal",
    intro: "October to November and March to April are the peaks; the June to August monsoon hides the mountains.",
    ratings: [2, 2, 3, 3, 2, 0, 0, 0, 2, 3, 3, 2],
    notes: [
      "Dry, clear and the coldest month at altitude. Quiet on the main treks; good for Chitwan wildlife.",
      "Milder and sunny, a near-perfect month for trekking. Maha Shivaratri and Losar fall now.",
      "Higher trails reopen and rhododendrons begin to bloom.",
      "A peak trekking month with rhododendrons, though Kathmandu and Pokhara get hot.",
      "Hot and sticky, with afternoon showers building late in the month.",
      "Monsoon: afternoon rain, muddy trails and hidden mountains.",
      "Monsoon with the highest landslide risk in some areas. Trekking not recommended.",
      "Monsoon easing late in the month; Kathmandu's temples and markets stay open.",
      "The monsoon ends around mid-month and skies clear. Teahouses reopen.",
      "Near-perfect trail conditions and clear views, but a peak month with crowds. Dashain falls now.",
      "Very little rain, low humidity and colder nights. Tihar falls now.",
      "Dry and clear, cold at altitude; December is among the best months for Chitwan wildlife.",
    ],
    tourHref: "/tours/nepal-tours",
    tourLabel: "See our Nepal tour",
  },
];

/** "November to February", "March", or "November to February and October". */
export function bestRanges(ratings: readonly Rating[], min: Rating = 3): string {
  const idx = ratings.map((r, i) => (r >= min ? i : -1)).filter((i) => i >= 0);
  if (!idx.length) return "none";
  // join consecutive months, wrapping December to January
  const runs: number[][] = [];
  for (const i of idx) {
    const last = runs[runs.length - 1];
    if (last && last[last.length - 1] === i - 1) last.push(i);
    else runs.push([i]);
  }
  if (runs.length > 1 && runs[0][0] === 0 && runs[runs.length - 1].slice(-1)[0] === 11) {
    const first = runs.shift() as number[];
    runs[runs.length - 1] = [...runs[runs.length - 1], ...first];
  }
  return runs
    .map((r) =>
      r.length === 1 ? MONTH_NAMES[r[0]] : `${MONTH_NAMES[r[0]]} to ${MONTH_NAMES[r[r.length - 1]]}`
    )
    .join(" and ");
}
