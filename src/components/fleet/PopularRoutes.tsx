import { FiMapPin } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";

const POPULAR_ROUTES = [
  "Jaipur to Agra",
  "Jaipur to Delhi",
  "Jaipur to Jodhpur",
  "Jaipur to Udaipur",
  "Jaipur to Jaisalmer",
  "Jaipur to Pushkar",
  "Jaipur to Ranthambore",
];

export function PopularRoutes() {
  return (
    <section className="py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-7">
            <h3 className="font-display text-xl font-semibold text-ink">Popular Routes</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {POPULAR_ROUTES.map((route) => (
                <div
                  key={route}
                  className="flex items-center gap-2.5 rounded-full bg-cream/70 px-4 py-3 text-sm text-ink"
                >
                  <FiMapPin aria-hidden="true" className="h-4 w-4 shrink-0 text-gold-dark" />
                  {route}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
