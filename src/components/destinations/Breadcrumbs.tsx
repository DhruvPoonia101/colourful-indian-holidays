import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import type { BreadcrumbItem } from "@/lib/seo/breadcrumb-schema";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-ivory/70">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="text-ivory">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="transition-colors hover:text-gold-light">
                    {item.name}
                  </Link>
                  <FiChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
