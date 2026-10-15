import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/shared/ComingSoonPage";
import { COMING_SOON_SLUGS } from "@/content/coming-soon";
import { NAV_LABELS, CATEGORY_META, titleCaseFromSlug } from "@/content/nav-labels";

export const dynamicParams = false;

export function generateStaticParams() {
  return COMING_SOON_SLUGS.experiences.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const label = NAV_LABELS[`/experiences/${slug}`] ?? titleCaseFromSlug(slug);
  return {
    title: label,
    robots: { index: false, follow: true },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const label = NAV_LABELS[`/experiences/${slug}`] ?? titleCaseFromSlug(slug);
  const category = CATEGORY_META.themes;

  return (
    <ComingSoonPage
      pageLabel={label}
      categoryLabel={category.label}
      hubPath={category.hubPath}
      hubLabel={category.hubLabel}
    />
  );
}
