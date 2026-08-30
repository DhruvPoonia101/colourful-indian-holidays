"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";

const TRAVEL_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "Flexible",
];

const TRAVELER_COUNTS = [
  "1 Traveller",
  "2 Travellers",
  "3–4 Travellers",
  "5–8 Travellers",
  "9+ Travellers / Group",
];

const inputClass =
  "w-full rounded-full border border-sand bg-white px-6 py-3.5 text-sm text-ink placeholder:text-ink-soft/60 transition-colors focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20";

const selectClass =
  "w-full appearance-none rounded-full border border-sand bg-white px-6 py-3.5 text-sm text-ink transition-colors focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20";

export function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [travelMonth, setTravelMonth] = useState("");
  const [travellers, setTravellers] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, phone, travelMonth, travellers, message }),
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
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-sand bg-cream/40 p-6 shadow-sm sm:p-10"
    >
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        Tell Us About Your Dream Trip
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        Share your travel dates, interests and preferred destinations. Our Rajasthan travel
        experts will prepare a personalised proposal tailored to your style and budget.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        <div>
          <label htmlFor="fullName" className="sr-only">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Full name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Phone number"
            className={inputClass}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative">
            <label htmlFor="travelMonth" className="sr-only">
              Preferred travel month
            </label>
            <select
              id="travelMonth"
              name="travelMonth"
              value={travelMonth}
              onChange={(event) => setTravelMonth(event.target.value)}
              className={`${selectClass} ${travelMonth ? "text-ink" : "text-ink-soft/60"}`}
            >
              <option value="" disabled>
                Preferred Travel Month
              </option>
              {TRAVEL_MONTHS.map((month) => (
                <option key={month} value={month} className="text-ink">
                  {month}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-ink-soft">
              ▾
            </span>
          </div>

          <div className="relative">
            <label htmlFor="travellers" className="sr-only">
              Number of travellers
            </label>
            <select
              id="travellers"
              name="travellers"
              value={travellers}
              onChange={(event) => setTravellers(event.target.value)}
              className={`${selectClass} ${travellers ? "text-ink" : "text-ink-soft/60"}`}
            >
              <option value="" disabled>
                Number of Travellers
              </option>
              {TRAVELER_COUNTS.map((count) => (
                <option key={count} value={count} className="text-ink">
                  {count}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-ink-soft">
              ▾
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            How can we help you?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="How can we help you?"
            className="w-full resize-y rounded-2xl border border-sand bg-white px-6 py-4 text-sm text-ink placeholder:text-ink-soft/60 transition-colors focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-ivory shadow-sm transition-all duration-200 ease-out hover:scale-[1.03] hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
      >
        {status === "submitting" ? "Sending…" : "Send Inquiry"}
        <FiSend aria-hidden="true" className="h-4 w-4" />
      </button>

      {status === "success" && (
        <p className="mt-4 text-sm font-medium text-gold-dark">
          Thanks! We&apos;ve got your enquiry and will reply within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm font-medium text-maroon">{errorMessage}</p>
      )}
      {status !== "success" && status !== "error" && (
        <p className="mt-4 text-xs text-ink-soft/70">
          We&apos;ll reply directly to the email address you provide, usually within 24 hours.
        </p>
      )}
    </form>
  );
}
