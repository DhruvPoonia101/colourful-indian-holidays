import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/shared/ComingSoonPage";
import { NAV_LABELS, CATEGORY_META, titleCaseFromSlug } from "@/content/nav-labels";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const label = NAV_LABELS[`/destinations/${slug}`] ?? titleCaseFromSlug(slug);
  return {
    title: `${label} | Colourful Indian Holidays`,
    robots: { index: false, follow: true },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const label = NAV_LABELS[`/destinations/${slug}`] ?? titleCaseFromSlug(slug);
  const category = CATEGORY_META.destinations;

  return (
    <ComingSoonPage
      pageLabel={label}
      categoryLabel={category.label}
      hubPath={category.hubPath}
      hubLabel={category.hubLabel}
    />
  );
}
