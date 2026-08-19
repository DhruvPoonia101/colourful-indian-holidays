"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";

export type MoreDestination = {
  name: string;
  href: string;
};

export function MoreDestinationsList({
  destinations,
  toggleLabel,
}: {
  destinations: MoreDestination[];
  toggleLabel: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="pb-10 text-center sm:pb-14">
      <Reveal>
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-7 py-3.5 text-sm font-semibold tracking-wide text-ivory transition-all duration-200 ease-out hover:scale-[1.04] hover:bg-maroon-dark"
        >
          {expanded ? "Show Less" : toggleLabel}
          <FiChevronDown
            aria-hidden="true"
            className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        {/*
          Links stay mounted in the DOM at all times (crawlable, real hrefs) —
          only visibility/height is toggled via CSS, same pattern used for the
          nav dropdowns, so collapsing this list never hides links from search
          engines, only from a first-time visitor's view.
        */}
        <div
          className={`mx-auto grid max-w-4xl transition-all duration-500 ease-out ${
            expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="mt-8 flex flex-wrap justify-center gap-3 px-6 sm:px-8">
              {destinations.map((destination) => (
                <Link
                  key={destination.href}
                  href={destination.href}
                  className="rounded-full border border-sand bg-white px-5 py-2 text-sm font-medium text-ink transition-all duration-200 hover:scale-105 hover:border-maroon hover:text-maroon"
                >
                  {destination.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
