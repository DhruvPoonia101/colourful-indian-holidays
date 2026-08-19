import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/shared/ComingSoonPage";
import { guideArticles } from "@/content/travel-guide";
import { titleCaseFromSlug } from "@/content/nav-labels";

function labelForSlug(slug: string): string {
  const match = guideArticles.find((article) => article.slug === slug);
  return match?.title ?? titleCaseFromSlug(slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${labelForSlug(slug)} | Colourful Indian Holidays`,
    robots: { index: false, follow: true },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <ComingSoonPage
      pageLabel={labelForSlug(slug)}
      categoryLabel="Travel Guide"
      hubPath="/travel-guide"
      hubLabel="All Travel Guides"
    />
  );
}
