"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCalendar, FiChevronDown, FiSend, FiX } from "react-icons/fi";
import { tripPlannerDestinations } from "@/lib/trip-planner-destinations";
import { PRIMARY_COUNTRIES, OTHER_COUNTRIES } from "@/lib/countries";
import { HoneypotField, useHoneypot } from "@/components/shared/Honeypot";
import { TurnstileWidget } from "@/components/shared/TurnstileWidget";

const DAYS_OPTIONS = [
  "2 Days",
  "3 Days",
  "4 Days",
  "5 Days",
  "6 Days",
  "7 Days",
  "8 to 10 Days",
  "11 to 13 Days",
  "14 to 17 Days",
  "18 to 22 Days",
  "23+ Days",
];
const TRAVELLERS_OPTIONS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10+"];

const todayISO = new Date().toISOString().split("T")[0];
const twoYearsOutISO = new Date(new Date().setFullYear(new Date().getFullYear() + 2))
  .toISOString()
  .split("T")[0];

const fieldWrapClass =
  "relative flex-1 rounded-full border border-ink-soft/10 bg-white/70 px-4 py-3.5 sm:px-5 sm:py-4 xl:px-7";

const selectClass =
  "w-full appearance-none bg-transparent pr-6 text-base text-ink focus:outline-none disabled:text-ink-soft/60";

const inputClass = "w-full bg-transparent pr-6 text-base text-ink focus:outline-none";

const detailsFieldClass =
  "w-full rounded-full border border-sand bg-white px-5 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-gold/40";

type Status = "idle" | "submitting" | "success" | "error";

export function TripPlannerBar() {
  const dateInputRef = useRef<HTMLInputElement>(null);

  // Step 1 — itinerary basics.
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [days, setDays] = useState("");
  const [travellers, setTravellers] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { honeypot, setHoneypot, formLoadedAt } = useHoneypot();
  const [turnstileToken, setTurnstileToken] = useState("");

  // Step 2 — contact details, shown in a follow-up modal after step 1 succeeds.
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [detailsStatus, setDetailsStatus] = useState<Status>("idle");
  const [detailsErrorMessage, setDetailsErrorMessage] = useState("");
  const {
    honeypot: detailsHoneypot,
    setHoneypot: setDetailsHoneypot,
    formLoadedAt: detailsFormLoadedAt,
  } = useHoneypot();
  const [detailsTurnstileToken, setDetailsTurnstileToken] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!turnstileToken) {
      setStatus("error");
      setErrorMessage("Please complete the verification check before sending.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/trip-planner-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination,
          travelDate,
          days,
          travellers,
          email,
          companyWebsite: honeypot,
          formLoadedAt,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? "Something went wrong.");
      }

      // Step 1 is emailed and captured — now collect contact details in step 2
      // rather than resetting the form, so we don't lose the itinerary context.
      setStatus("success");
      setIsDetailsOpen(true);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const closeDetails = () => {
    // If they close without submitting step 2, keep the step 1 "thanks" state
    // but drop the modal — step 1's lead email has already gone out either way.
    setIsDetailsOpen(false);
    setDetailsStatus("idle");
    setDetailsErrorMessage("");
  };

  const handleDetailsSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!detailsTurnstileToken) {
      setDetailsStatus("error");
      setDetailsErrorMessage("Please complete the verification check before sending.");
      return;
    }

    setDetailsStatus("submitting");
    setDetailsErrorMessage("");

    try {
      const response = await fetch("/api/trip-planner-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination,
          travelDate,
          days,
          travellers,
          email,
          fullName,
          phone,
          country,
          specialRequest,
          companyWebsite: detailsHoneypot,
          formLoadedAt: detailsFormLoadedAt,
          turnstileToken: detailsTurnstileToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? "Something went wrong.");
      }

      setDetailsStatus("success");
    } catch (err) {
      setDetailsStatus("error");
      setDetailsErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div className="relative z-20 mx-auto -mt-10 w-full max-w-[94rem] px-4 sm:-mt-14 sm:px-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-3xl border border-white/40 bg-white/60 p-5 shadow-xl backdrop-blur-xl sm:flex-row sm:items-center sm:gap-3 sm:p-6 lg:gap-5"
      >
        <HoneypotField value={honeypot} onChange={setHoneypot} />
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
          <label htmlFor="tp-travellers" className="sr-only">
            Number of persons
          </label>
          <select
            id="tp-travellers"
            required
            value={travellers}
            onChange={(event) => setTravellers(event.target.value)}
            className={selectClass}
          >
            <option value="" disabled>
              No of Persons
            </option>
            {TRAVELLERS_OPTIONS.map((label) => (
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
          className="min-h-12 shrink-0 rounded-full bg-gold px-6 py-4 text-base font-semibold tracking-wide text-ivory shadow-sm transition-all duration-200 ease-out hover:scale-[1.03] hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 lg:px-8"
        >
          {status === "submitting" ? "Sending…" : "Plan My Journey"}
        </button>
      </form>

      <div className="mt-3 flex justify-center sm:justify-start">
        <TurnstileWidget onVerify={setTurnstileToken} onExpire={() => setTurnstileToken("")} />
      </div>

      {status === "success" && !isDetailsOpen && (
        <p className="mt-2 text-center text-sm font-medium text-gold-dark sm:text-left">
          Thanks! We&apos;ve got your details and will email your itinerary shortly.
        </p>
      )}
      {status === "error" && (
        <p className="mt-2 text-center text-sm font-medium text-maroon sm:text-left">{errorMessage}</p>
      )}

      <AnimatePresence>
        {isDetailsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/60 px-4 py-8 backdrop-blur-sm sm:items-center"
            onClick={detailsStatus === "success" ? closeDetails : undefined}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-md"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeDetails}
                className="mb-3 flex w-full items-center justify-center gap-2 rounded-full border border-sand bg-cream px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-sand/40"
              >
                <FiX aria-hidden="true" className="h-4 w-4" />
                Close
              </button>

              <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-7">
                {detailsStatus === "success" ? (
                  <div className="py-6 text-center">
                    <p className="font-display text-xl font-semibold text-ink">
                      Thanks, {fullName || "there"}!
                    </p>
                    <p className="mt-2 text-sm text-ink-soft">
                      We&apos;ve got your details and will reply within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="mb-4 font-display text-lg font-semibold text-ink">
                      Just a few more details
                    </p>
                    <form onSubmit={handleDetailsSubmit} className="flex flex-col gap-3">
                      <HoneypotField value={detailsHoneypot} onChange={setDetailsHoneypot} />
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        className={detailsFieldClass}
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp Number"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        className={detailsFieldClass}
                      />
                      <select
                        required
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                        className={`${detailsFieldClass} ${country ? "text-ink" : "text-ink-soft/60"}`}
                      >
                        <option value="">Select Country</option>
                        {PRIMARY_COUNTRIES.map((name) => (
                          <option key={`primary-${name}`} value={name} className="text-ink">
                            {name}
                          </option>
                        ))}
                        <option disabled>──────────</option>
                        {OTHER_COUNTRIES.map((name, index) => (
                          <option key={`other-${name}-${index}`} value={name} className="text-ink">
                            {name}
                          </option>
                        ))}
                      </select>
                      <textarea
                        placeholder="Special Requests (optional)"
                        rows={3}
                        value={specialRequest}
                        onChange={(event) => setSpecialRequest(event.target.value)}
                        className="w-full rounded-2xl border border-sand bg-white px-5 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-gold/40"
                      />

                      <div className="flex justify-center">
                        <TurnstileWidget
                          onVerify={setDetailsTurnstileToken}
                          onExpire={() => setDetailsTurnstileToken("")}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={detailsStatus === "submitting"}
                        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-ivory shadow-sm transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                      >
                        {detailsStatus === "submitting" ? "Sending…" : "Submit Details"}
                        <FiSend aria-hidden="true" className="h-4 w-4" />
                      </button>

                      {detailsStatus === "error" && (
                        <p className="text-center text-sm font-medium text-maroon">
                          {detailsErrorMessage}
                        </p>
                      )}
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
