/**
 * Long-term monthly climate averages for the weather-by-region table on the
 * 12 "best time to visit India" month pages. Index 0 = January.
 *
 * Sources (checked 25 Oct 2026):
 * - Delhi: India Meteorological Department, Safdarjung observatory climate
 *   normals 1991–2020 (mausam.imd.gov.in/newdelhi/mcdata/safdarjung2.pdf).
 * - Jaipur: weather2travel.com long-term averages (published in °F and
 *   inches, converted to °C and mm here).
 * - Kochi (stands in for Kerala's coast): weather2travel.com long-term
 *   averages, °C and mm.
 *
 * Deliberately NOT included: Leh / Ladakh. The sources found disagree with
 * each other by 5–10°C for several months, so no Ladakh figure is published
 * here rather than guessing; the month pages describe Ladakh in words.
 *
 * Values are normals, not forecasts — individual days vary. Rounded for
 * display in WeatherByRegion.
 */

export type MonthlyClimate = {
  /** Mean daily maximum, °C, January → December. */
  high: readonly number[];
  /** Mean daily minimum, °C, January → December. */
  low: readonly number[];
  /** Mean monthly rainfall, mm, January → December. */
  rainMm: readonly number[];
};

export const CLIMATE_SOURCES = {
  delhi:
    "Delhi: India Meteorological Department, Safdarjung normals 1991–2020",
  other: "Jaipur and Kochi: weather2travel long-term averages",
} as const;

export const CLIMATE: Record<"Delhi" | "Jaipur" | "Kerala (Kochi)", MonthlyClimate> = {
  Delhi: {
    high: [20.1, 24.2, 29.9, 36.5, 39.9, 39.0, 35.6, 34.2, 34.1, 33.0, 28.4, 22.8],
    low: [7.5, 10.6, 15.6, 21.3, 25.8, 27.7, 27.5, 26.7, 25.0, 19.5, 13.0, 8.4],
    rainMm: [19.2, 21.5, 19.1, 12.5, 29.4, 80.6, 195.8, 226.8, 128.0, 14.1, 4.1, 8.0],
  },
  Jaipur: {
    high: [22.2, 25.0, 31.1, 36.1, 40.0, 38.9, 33.9, 32.2, 32.8, 33.9, 28.9, 23.9],
    low: [7.2, 10.0, 15.0, 21.1, 25.0, 27.2, 25.0, 23.9, 22.8, 18.9, 12.8, 7.8],
    rainMm: [5.1, 10.2, 5.1, 5.1, 17.8, 50.8, 213.4, 226.1, 78.7, 12.7, 7.6, 2.5],
  },
  "Kerala (Kochi)": {
    high: [31, 32, 32, 33, 31, 29, 28, 28, 29, 30, 31, 31],
    low: [22, 23, 24, 25, 25, 24, 23, 23, 23, 23, 23, 22],
    rainMm: [6, 24, 37, 107, 284, 752, 848, 514, 316, 310, 155, 42],
  },
};

export const MONTH_INDEX: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};
