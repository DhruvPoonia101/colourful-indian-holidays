import { Reveal } from "@/components/ui/Reveal";
import { FiCheckCircle } from "react-icons/fi";

export function ArticleByline({
  authorName,
  authorRole,
  authorUrl,
  datePublished,
  dateModified,
}: {
  authorName: string;
  authorRole: string;
  authorUrl: string;
  datePublished: string;
  /** Same as datePublished when the article hasn't been revised since. */
  dateModified: string;
}) {
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const sameDate = datePublished === dateModified;
  const isExternal = authorUrl.startsWith("http");

  return (
    <div className="border-b border-sand/70 py-5">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <p className="text-sm text-ink-soft">
          By{" "}
          <a
            href={authorUrl}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="font-semibold text-maroon underline decoration-maroon/30 underline-offset-4 hover:decoration-maroon"
          >
            {authorName}
          </a>
          , {authorRole} · Published {formatDate(datePublished)}
          {!sameDate && ` · Updated ${formatDate(dateModified)}`}
        </p>
      </div>
    </div>
  );
}

/**
 * A fuller author credibility card — initials avatar, verified-style badge
 * with role, and 1-2 short bio paragraphs. Placed after the article body,
 * separate from the shorter ArticleByline shown up top.
 */
export function AuthorBioCard({
  authorName,
  authorInitials,
  authorRole,
  authorUrl,
  bioParagraphs,
}: {
  authorName: string;
  authorInitials: string;
  authorRole: string;
  authorUrl: string;
  bioParagraphs: string[];
}) {
  const isExternal = authorUrl.startsWith("http");

  return (
    <div className="border-t border-sand/70 bg-cream/60 py-10 sm:py-14">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-maroon text-lg font-semibold text-ivory">
            {authorInitials}
          </span>
          <div>
            <a
              href={authorUrl}
              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="font-semibold text-ink hover:text-maroon"
            >
              {authorName}
            </a>
            <div className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-maroon">
              <FiCheckCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
              {authorRole}
            </div>
          </div>
        </div>
        <div className="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft">
          {bioParagraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ArticleH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 font-display text-2xl font-semibold text-ink sm:text-3xl">{children}</h2>
  );
}

export function ArticleP({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-relaxed text-ink-soft">{children}</p>;
}

export function ArticleUL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-ink-soft">
      {children}
    </ul>
  );
}

export function ArticleBody({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
