import { Reveal } from "@/components/ui/Reveal";
import {
  CLIMATE,
  CLIMATE_SOURCES,
  MONTH_INDEX,
} from "@/content/months/climate";

type City = keyof typeof CLIMATE;
const CITIES = Object.keys(CLIMATE) as City[];

function describeRain(mm: number): string {
  if (mm < 15) return "Dry";
  if (mm < 60) return "Mostly dry";
  if (mm < 150) return "Some rain";
  if (mm < 300) return "Wet";
  return "Very wet";
}

/**
 * Answer-first weather summary for a month page, aimed at searches like
 * "weather in india in june". Shows real long-term averages for three
 * regions that cover most itineraries (see content/months/climate.ts for the
 * data and its sources). Server component — plain text and a table in the
 * initial HTML.
 */
export function WeatherByRegion({ slug, name }: { slug: string; name: string }) {
  const m = MONTH_INDEX[slug];
  if (m === undefined) return null;

  const rows = CITIES.map((city) => {
    const c = CLIMATE[city];
    return {
      city,
      high: Math.round(c.high[m]),
      low: Math.round(c.low[m]),
      rain: Math.round(c.rainMm[m]),
    };
  });

  const summary = rows
    .map((r) => `${r.city} ${r.low}–${r.high}°C with ${r.rain} mm of rain`)
    .join("; ");

  return (
    <section className="border-t border-sand/70 py-10 sm:py-14">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Weather in India in {name}, by Region
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink">
            Typical {name} weather in India: {summary}. The table below shows daily highs and
            lows and the average monthly rainfall for each region.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">
                Average weather in India in {name} for Delhi, Jaipur and Kerala
              </caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Region</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">High</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Low</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Rain</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                {rows.map((r) => (
                  <tr key={r.city} className="border-b border-sand/60 last:border-0">
                    <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">{r.city}</th>
                    <td className="px-3 py-3 sm:px-5">{r.high}°C</td>
                    <td className="px-3 py-3 sm:px-5">{r.low}°C</td>
                    <td className="px-3 py-3 sm:px-5">
                      {r.rain} mm
                      <span className="block text-xs text-ink-soft/70">{describeRain(r.rain)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-ink-soft/70">
            Long-term averages rounded to the nearest degree; individual days vary. Sources:{" "}
            {CLIMATE_SOURCES.delhi}; {CLIMATE_SOURCES.other}. Ladakh is not in the table because
            reliable averages differ between sources; see the region notes below.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
