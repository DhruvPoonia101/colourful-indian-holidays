import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/shared/ComingSoonPage";
import { NAV_LABELS, CATEGORY_META, titleCaseFromSlug } from "@/content/nav-labels";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const href = `/packages/${slug.join("/")}`;
  const label = NAV_LABELS[href] ?? titleCaseFromSlug(slug[slug.length - 1]);
  return {
    title: `${label} | Colourful Indian Holidays`,
    robots: { index: false, follow: true },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const href = `/packages/${slug.join("/")}`;
  const label = NAV_LABELS[href] ?? titleCaseFromSlug(slug[slug.length - 1]);
  const category = CATEGORY_META.packages;

  return (
    <ComingSoonPage
      pageLabel={label}
      categoryLabel={category.label}
      hubPath={category.hubPath}
      hubLabel={category.hubLabel}
    />
  );
}
