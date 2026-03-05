import Link from "next/link";
import type { DocPage } from "@/content/docs";
import { toAnchorId } from "@/content/docs";

export function DocsToc({ page }: { page: DocPage }) {
  return (
    <aside className="sticky top-24 hidden h-fit xl:block">
      <div className="rounded-[32px] border border-slate-900/10 bg-white/85 p-5 shadow-[0_20px_60px_-40px_rgba(12,23,34,0.35)]">
        <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
          On this page
        </div>
        <div className="mt-4 space-y-2">
          {page.sections.map((section) => (
            <Link
              key={section.title}
              href={`#${toAnchorId(section.title)}`}
              className="block rounded-2xl px-3 py-2 text-sm leading-6 text-slate-600 transition hover:bg-slate-900/5 hover:text-slate-950"
            >
              {section.title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
