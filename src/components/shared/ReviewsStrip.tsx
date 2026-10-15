import { FaGoogle, FaStar, FaTripadvisor } from "react-icons/fa";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { Reveal } from "@/components/ui/Reveal";
import { BUSINESS } from "@/lib/seo/business";
import type { Testimonial } from "@/content/home";

/**
 * Static (server) strip of real reviews, shown word-for-word. Deliberately
 * emits NO Review/AggregateRating JSON-LD — see the note in
 * app/testimonials/page.tsx about the Google vs Tripadvisor rating sources.
 */
export function ReviewsStrip({
  reviews,
  eyebrow = "Traveller Reviews",
  heading = "What Our Guests Say",
  topDivider = false,
}: {
  reviews: Testimonial[];
  eyebrow?: string;
  heading?: string;
  topDivider?: boolean;
}) {
  if (reviews.length === 0) return null;
  return (
    <section className={`py-14 sm:py-20 ${topDivider ? "border-t border-sand/70" : ""}`}>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <SectionIntro
            eyebrow={eyebrow}
            heading={heading}
            align="center"
            headingSizeClassName="text-2xl sm:text-3xl"
          />
          <p className="mt-3 text-center text-sm text-ink-soft/70">
            Real reviews, word-for-word.{" "}
            <a
              href={BUSINESS.googleRating.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink-soft underline decoration-ink-soft/30 underline-offset-2 hover:text-maroon"
            >
              Read all {BUSINESS.googleRating.reviewCount}+ Google reviews
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {reviews.map((review) => (
              <figure
                key={review.name}
                className="flex flex-col rounded-2xl bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-center gap-1 text-gold-dark" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} aria-hidden="true" className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink-soft">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-2 text-sm font-medium text-ink">
                  {review.platform === "google" ? (
                    <FaGoogle aria-hidden="true" className="h-4 w-4 text-ink-soft" />
                  ) : (
                    <FaTripadvisor aria-hidden="true" className="h-4 w-4 text-ink-soft" />
                  )}
                  <span>
                    {review.name}
                    {review.origin ? `, ${review.origin}` : ""}
                  </span>
                  <span className="font-normal text-ink-soft/70">
                    · {review.platform === "google" ? "Google review" : "Tripadvisor review"}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
