import Link from "next/link";
import type { DocPage } from "@/content/docs";
import { toAnchorId } from "@/content/docs";

export function DocsToc({ page }: { page: DocPage }) {
  return (
    <aside className="sticky top-24 hidden h-fit xl:block">
      <div className="bg-card rounded-[32px] border border-border p-5 shadow-[0_20px_60px_-40px_rgba(12,23,34,0.35)]">
        <div className="text-muted-foreground text-xs uppercase tracking-[0.22em]">
          On this page
        </div>
        <div className="mt-4 space-y-2">
          {page.sections.map((section) => (
            <Link
              key={section.title}
              href={`#${toAnchorId(section.title)}`}
              className="text-muted-foreground hover:bg-accent hover:text-foreground block rounded-2xl px-3 py-2 text-sm leading-6 transition"
            >
              {section.title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
