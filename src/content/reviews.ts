import { testimonials, type Testimonial } from "@/content/home";

/**
 * Picks existing, word-for-word reviews from the single source of truth
 * (content/home.ts) by reviewer name, so no review text is duplicated or
 * edited anywhere else. Names that don't match are silently skipped.
 */
export function reviewsBy(names: string[]): Testimonial[] {
  return names
    .map((name) => testimonials.find((t) => t.name === name))
    .filter((t): t is Testimonial => Boolean(t));
}
