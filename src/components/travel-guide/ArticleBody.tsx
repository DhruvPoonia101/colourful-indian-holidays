import { Reveal } from "@/components/ui/Reveal";

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
