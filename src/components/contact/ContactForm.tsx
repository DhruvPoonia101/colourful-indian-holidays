"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { whatsappUrl } from "@/lib/whatsapp";

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const lines = [
      "Hi! I'd like to enquire about a trip with Colourful Indian Holidays.",
      "",
      `Name: ${fullName}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      travelMonth && `Preferred Travel Month: ${travelMonth}`,
      travellers && `Number of Travellers: ${travellers}`,
      message && `Message: ${message}`,
    ].filter(Boolean);

    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
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
        className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-ivory shadow-sm transition-all duration-200 ease-out hover:scale-[1.03] hover:bg-gold-dark"
      >
        Send Inquiry
        <FiSend aria-hidden="true" className="h-4 w-4" />
      </button>

      <p className="mt-4 text-xs text-ink-soft/70">
        Sending this opens WhatsApp with your details filled in, so you can review and send it
        directly to our team.
      </p>
    </form>
  );
}
