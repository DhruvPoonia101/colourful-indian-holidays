import Link from "next/link";
import { FiCheckCircle, FiUsers } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";

export function VehicleCapacityDetails({
  capacityPassengers,
  luggageBags,
  bestForDescription,
  exampleModels,
  features,
}: {
  capacityPassengers: string;
  luggageBags: string;
  bestForDescription: string;
  exampleModels: string[];
  features: string[];
}) {
  return (
    <section className="py-6 sm:py-8">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gold-dark sm:text-sm">
              <FiUsers aria-hidden="true" className="h-4 w-4" />
              Capacity: {capacityPassengers} Passengers + 1 Driver
            </span>
            <span className="inline-flex items-center rounded-full border border-sand bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink sm:text-sm">
              {luggageBags}
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            All vehicles come with a professional English-speaking driver. The seating capacity
            shown is for passengers only — your driver occupies one seat.
          </p>
          <p className="mt-2 text-sm text-ink-soft">
            New to hiring a car in Rajasthan?{" "}
            <Link href="/travel-guide/hiring-a-car-in-rajasthan" className="text-maroon underline">
              Read our complete guide
            </Link>
            .
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-6 rounded-3xl bg-cream/60 p-6 sm:p-7">
            <h3 className="font-display text-xl font-semibold text-ink">Best For</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{bestForDescription}</p>
            <p className="mt-3 text-sm text-ink-soft">
              <span className="font-semibold text-ink">Example models:</span>{" "}
              {exampleModels.join(", ")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm sm:p-7">
            <h3 className="font-display text-xl font-semibold text-ink">Features</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2.5 rounded-full bg-cream/70 px-4 py-3 text-sm text-ink"
                >
                  <FiCheckCircle aria-hidden="true" className="h-4 w-4 shrink-0 text-gold-dark" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
