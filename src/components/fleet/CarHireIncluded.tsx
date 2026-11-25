import { FiCheck } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { carHireIncluded } from "@/content/car-rental-hub";

/**
 * "What the price includes" block for the car rental hub and every vehicle
 * page. One list, so the inclusions can't drift between pages.
 */
export function CarHireIncluded({ topDivider = true }: { topDivider?: boolean }) {
  return (
    <section className={`py-10 sm:py-14 ${topDivider ? "border-t border-sand/70" : ""}`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <SectionIntro eyebrow="Price & Inclusions" heading="What the Price Includes" />
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            <span className="font-semibold text-ink">
              Every car and driver we arrange is priced all-inclusive, so there is nothing extra to pay
              on the road for fuel, tolls, parking or the driver&apos;s meals and stay.
            </span>{" "}
            Prices are on request, because they depend on the vehicle, route and number of days: send
            us your plan and we&apos;ll quote the full cost.
          </p>
          <ul className="mt-6 grid max-w-3xl gap-3 sm:grid-cols-2">
            {carHireIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-ink-soft">
                <FiCheck aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-maroon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
