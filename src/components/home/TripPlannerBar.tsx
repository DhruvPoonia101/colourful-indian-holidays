"use client";

import { useRef, useState } from "react";
import { FiCalendar, FiChevronDown } from "react-icons/fi";
import { tripPlannerDestinations } from "@/lib/trip-planner-destinations";

const DAYS_OPTIONS = ["3–5 Days", "6–9 Days", "10–14 Days", "15+ Days", "Not Sure Yet"];

const todayISO = new Date().toISOString().split("T")[0];
const twoYearsOutISO = new Date(new Date().setFullYear(new Date().getFullYear() + 2))
  .toISOString()
  .split("T")[0];

const fieldWrapClass =
  "relative flex-1 rounded-full border border-ink-soft/10 bg-white/70 px-6 py-3.5 sm:px-7 sm:py-4";

const selectClass =
  "w-full appearance-none bg-transparent pr-6 text-base text-ink focus:outline-none disabled:text-ink-soft/60";

const inputClass = "w-full bg-transparent pr-6 text-base text-ink focus:outline-none";

type Status = "idle" | "submitting" | "success" | "error";

export function TripPlannerBar() {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [days, setDays] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/trip-planner-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ destination, travelDate, days, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? "Something went wrong.");
      }

      setStatus("success");
      setDestination("");
      setTravelDate("");
      setDays("");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div className="relative z-20 mx-auto -mt-10 w-full max-w-7xl px-4 sm:-mt-14 sm:px-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-3xl border border-white/40 bg-white/60 p-5 shadow-xl backdrop-blur-xl sm:flex-row sm:items-center sm:gap-5 sm:p-6"
      >
        <div className={`${fieldWrapClass} sm:flex-[1.5]`}>
          <label htmlFor="tp-destination" className="sr-only">
            Where do you want to go?
          </label>
          <select
            id="tp-destination"
            required
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            className={selectClass}
          >
            <option value="" disabled>
              Where do you want to go?
            </option>
            {tripPlannerDestinations.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
          <FiChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft/70 sm:right-7"
          />
        </div>

        <div className={fieldWrapClass}>
          <label htmlFor="tp-date" className="sr-only">
            Travel date
          </label>
          <input
            id="tp-date"
            ref={dateInputRef}
            type="date"
            required
            min={todayISO}
            max={twoYearsOutISO}
            value={travelDate}
            onChange={(event) => setTravelDate(event.target.value)}
            onClick={() => dateInputRef.current?.showPicker?.()}
            className={`${inputClass} cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0`}
          />
          <FiCalendar
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft/70 sm:right-7"
          />
        </div>

        <div className={fieldWrapClass}>
          <label htmlFor="tp-days" className="sr-only">
            No of days
          </label>
          <select
            id="tp-days"
            required
            value={days}
            onChange={(event) => setDays(event.target.value)}
            className={selectClass}
          >
            <option value="" disabled>
              No of Days
            </option>
            {DAYS_OPTIONS.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
          <FiChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft/70 sm:right-7"
          />
        </div>

        <div className={fieldWrapClass}>
          <label htmlFor="tp-email" className="sr-only">
            Your email ID
          </label>
          <input
            id="tp-email"
            type="email"
            required
            placeholder="Your Email ID"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={`${inputClass} placeholder:text-ink-soft/60`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="min-h-12 shrink-0 rounded-full bg-gold px-8 py-4 text-base font-semibold tracking-wide text-ivory shadow-sm transition-all duration-200 ease-out hover:scale-[1.03] hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
        >
          {status === "submitting" ? "Sending…" : "Plan My Journey"}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-2 text-center text-sm font-medium text-gold-dark sm:text-left">
          Thanks! We&apos;ve got your details and will email your itinerary shortly.
        </p>
      )}
      {status === "error" && (
        <p className="mt-2 text-center text-sm font-medium text-maroon sm:text-left">{errorMessage}</p>
      )}
    </div>
  );
}
