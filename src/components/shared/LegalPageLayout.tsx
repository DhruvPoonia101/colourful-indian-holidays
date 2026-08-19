import { Reveal } from "@/components/ui/Reveal";

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <main className="pt-14 sm:pt-20">
      <div className="mx-auto max-w-3xl px-6 pb-20 sm:px-8">
        <Reveal>
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-ink-soft">Last updated: {lastUpdated}</p>

          <div className="prose-legal mt-10 space-y-8">{children}</div>
        </Reveal>
      </div>
    </main>
  );
}