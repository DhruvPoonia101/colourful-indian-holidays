import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/shared/ComingSoonPage";
import { titleCaseFromSlug } from "@/content/nav-labels";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${titleCaseFromSlug(slug)} | Colourful Indian Holidays`,
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
      pageLabel={titleCaseFromSlug(slug)}
      categoryLabel="Festival Tours"
      hubPath="/themes/festival-tours"
      hubLabel="All Festival Tours"
    />
  );
}
