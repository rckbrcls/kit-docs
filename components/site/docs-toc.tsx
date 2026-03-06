import Link from "next/link";
import type { DocPage } from "@/content/docs";
import { toAnchorId } from "@/content/docs";

export function DocsToc({ page }: { page: DocPage }) {
  return (
    <aside className="hidden pt-8 xl:block">
      <div>
        <div className="bg-card border border-border p-5 shadow-[0_20px_60px_-40px_rgba(12,23,34,0.35)]">
          <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
            On this page
          </div>
          <div className="mt-4 space-y-2">
            {page.sections.map((section) => (
              <Link
              key={section.title}
              href={`#${toAnchorId(section.title)}`}
              className="text-muted-foreground hover:bg-accent hover:text-primary block px-3 py-2 text-sm leading-6 transition"
            >
              {section.title}
            </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
