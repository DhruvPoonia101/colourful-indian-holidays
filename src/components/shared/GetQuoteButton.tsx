"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCalendar, FiSend, FiX } from "react-icons/fi";
import { HoneypotField } from "@/components/shared/Honeypot";
import { TurnstileWidget } from "@/components/shared/TurnstileWidget";

const TRAVEL_MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
  "Not Sure Yet",
];

const TRAVELLER_COUNTS = ["1", "2", "3–4", "5–8", "9+"];

const todayISO = new Date().toISOString().split("T")[0];
const twoYearsOutISO = new Date(new Date().setFullYear(new Date().getFullYear() + 2))
  .toISOString()
  .split("T")[0];

export function GetQuoteButton({
  pageName,
  variant = "tour",
}: {
  pageName: string;
  /** "tour" (default) asks for travel month + traveller count — used on destination
   * and package pages. "carRental" asks for route + a specific date instead. */
  variant?: "tour" | "carRental";
}) {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [travelMonth, setTravelMonth] = useState("");
  const [travellers, setTravellers] = useState("");
  const [route, setRoute] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [formLoadedAt, setFormLoadedAt] = useState(() => Date.now());
  const [turnstileToken, setTurnstileToken] = useState("");

  const open = () => {
    setIsOpen(true);
    setFormLoadedAt(Date.now()); // reset the time-trap for each fresh open, not just page load
  };

  const close = () => {
    setIsOpen(false);
    setStatus("idle");
    setErrorMessage("");
    setHoneypot("");
    setTurnstileToken("");
  };

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
      const response = await fetch("/api/quote-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: variant,
          fullName,
          email,
          phone,
          travelMonth: variant === "tour" ? travelMonth : undefined,
          travellers: variant === "tour" ? travellers : undefined,
          route: variant === "carRental" ? route : undefined,
          date: variant === "carRental" ? date : undefined,
          message,
          pageName,
          pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
          companyWebsite: honeypot,
          formLoadedAt,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? "Something went wrong.");
      }

      setStatus("success");
      setFullName("");
      setEmail("");
      setPhone("");
      setTravelMonth("");
      setTravellers("");
      setRoute("");
      setDate("");
      setMessage("");
      setTurnstileToken("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const fieldClass =
    "w-full rounded-full border border-sand bg-white px-5 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-gold/40";

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-ivory shadow-sm transition-all duration-200 ease-out hover:scale-[1.03] hover:bg-gold-dark"
      >
        Get a Free Quote
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/60 px-4 py-8 backdrop-blur-sm sm:items-center"
            onClick={close}
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
                onClick={close}
                className="mb-3 flex w-full items-center justify-center gap-2 rounded-full border border-sand bg-cream px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-sand/40"
              >
                <FiX aria-hidden="true" className="h-4 w-4" />
                Close
              </button>

              <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-7">
                {status === "success" ? (
                  <div className="py-6 text-center">
                    <p className="font-display text-xl font-semibold text-ink">
                      Thanks, {fullName || "there"}!
                    </p>
                    <p className="mt-2 text-sm text-ink-soft">
                      We&apos;ve got your request and will reply within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <HoneypotField value={honeypot} onChange={setHoneypot} />
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      className={fieldClass}
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className={fieldClass}
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp Number"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      className={fieldClass}
                    />

                    {variant === "carRental" ? (
                      <>
                        <input
                          type="text"
                          required
                          placeholder="Route / Destination (e.g. Jaipur to Udaipur)"
                          value={route}
                          onChange={(event) => setRoute(event.target.value)}
                          className={fieldClass}
                        />
                        <div className="relative">
                          <input
                            ref={dateInputRef}
                            type="date"
                            required
                            min={todayISO}
                            max={twoYearsOutISO}
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
                            onClick={() => dateInputRef.current?.showPicker?.()}
                            className={`${fieldClass} cursor-pointer pr-12 [&::-webkit-calendar-picker-indicator]:opacity-0`}
                          />
                          <FiCalendar
                            aria-hidden="true"
                            className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft/70"
                          />
                        </div>
                        <textarea
                          placeholder="Anything else we should know? (optional)"
                          rows={3}
                          value={message}
                          onChange={(event) => setMessage(event.target.value)}
                          className="w-full rounded-2xl border border-sand bg-white px-5 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-gold/40"
                        />
                      </>
                    ) : (
                      <>
                        <select
                          required
                          value={travelMonth}
                          onChange={(event) => setTravelMonth(event.target.value)}
                          className={`${fieldClass} ${travelMonth ? "text-ink" : "text-ink-soft/60"}`}
                        >
                          <option value="">Preferred Travel Month</option>
                          {TRAVEL_MONTHS.map((month) => (
                            <option key={month} value={month} className="text-ink">
                              {month}
                            </option>
                          ))}
                        </select>
                        <select
                          required
                          value={travellers}
                          onChange={(event) => setTravellers(event.target.value)}
                          className={`${fieldClass} ${travellers ? "text-ink" : "text-ink-soft/60"}`}
                        >
                          <option value="">Number of Travellers</option>
                          {TRAVELLER_COUNTS.map((count) => (
                            <option key={count} value={count} className="text-ink">
                              {count}
                            </option>
                          ))}
                        </select>
                        <textarea
                          placeholder="Special Requests (optional)"
                          rows={3}
                          value={message}
                          onChange={(event) => setMessage(event.target.value)}
                          className="w-full rounded-2xl border border-sand bg-white px-5 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-gold/40"
                        />
                      </>
                    )}

                    <div className="flex justify-center">
                      <TurnstileWidget
                        onVerify={setTurnstileToken}
                        onExpire={() => setTurnstileToken("")}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-ivory shadow-sm transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {status === "submitting" ? "Sending…" : "Send My Enquiry"}
                      <FiSend aria-hidden="true" className="h-4 w-4" />
                    </button>

                    {status === "error" && (
                      <p className="text-center text-sm font-medium text-maroon">{errorMessage}</p>
                    )}
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
