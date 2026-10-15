import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found | Colourful Indian Holidays",
  robots: { index: false, follow: true },
};

const popularPages = [
  { name: "Rajasthan", href: "/destinations/rajasthan" },
  { name: "Delhi", href: "/destinations/delhi" },
  { name: "Rajasthan Tours", href: "/tours/rajasthan-tours" },
  { name: "Car Rental", href: "/car-rental" },
  { name: "Travel Guide", href: "/travel-guide" },
  { name: "Contact Us", href: "/contact" },
];

// Kept deliberately light — bots hit 404s far more than people do, so this
// page has no images, no animation wrappers and no client components of its
// own, and none of its links prefetch.
export default function NotFound() {
  return (
    <main>
      <section className="flex min-h-[60svh] w-full items-center bg-ink text-ivory">
        <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center sm:px-8">
          <p className="font-display text-6xl font-semibold text-gold-light sm:text-7xl">
            404
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            This Page Hasn&apos;t Been Mapped Yet
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory/80">
            The page you&apos;re looking for might have moved, or it&apos;s one we haven&apos;t
            built yet — we&apos;re adding new destinations and packages all the time. Let&apos;s
            get you back on track.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/">Back to Homepage</Button>
            <Button href="/contact" variant="outline">
              Plan My Journey
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">
            Or Try One of These
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {popularPages.map((page) => (
              <Link
                key={page.href}
                prefetch={false}
                href={page.href}
                className="group inline-flex items-center gap-1.5 rounded-full border border-sand bg-white px-5 py-2.5 text-sm font-medium text-ink transition-all duration-200 ease-out hover:scale-105 hover:border-maroon hover:text-maroon"
              >
                {page.name}
                <FiArrowRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
