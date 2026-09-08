import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Renders a plain-text string as React nodes, converting any `[[label|/href]]`
 * markup into a real internal <Link>. Lets content files write natural prose
 * with genuine embedded internal links (e.g. "...cooler temperatures make
 * [[Rajasthan|/destinations/rajasthan]] especially comfortable this month...")
 * without content files needing to be JSX.
 */
export function renderWithLinks(text: string): ReactNode[] {
  const pattern = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    nodes.push(
      <Link
        key={`link-${key++}`}
        href={href}
        className="font-semibold text-maroon underline decoration-maroon/30 underline-offset-4 hover:decoration-maroon"
      >
        {label}
      </Link>
    );
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
