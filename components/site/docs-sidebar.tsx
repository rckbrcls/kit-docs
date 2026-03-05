"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNavGroups, docsPages, getDocHref } from "@/content/docs";
import { cn } from "@/lib/utils";
import { DocsSearch } from "@/components/site/docs-search";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <>
      <div className="mb-6 lg:hidden">
        <details className="rounded-[28px] border border-slate-900/10 bg-white/85 p-4 shadow-[0_20px_60px_-40px_rgba(12,23,34,0.35)]">
          <summary className="cursor-pointer list-none text-sm font-medium text-slate-900">
            Browse documentation
          </summary>
          <div className="mt-4">
            <DocsSearch />
          </div>
          <nav className="mt-5 space-y-5">
            {docsNavGroups.map((group) => (
              <div key={group.title}>
                <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  {group.title}
                </div>
                <div className="mt-2 space-y-1">
                  {group.items.map((slug) => {
                    const page = docsPages.find((entry) => entry.slug === slug);
                    if (!page) return null;
                    const href = getDocHref(page.slug);
                    const active = pathname === href;

                    return (
                      <Link
                        key={href}
                        href={href}
                        className={cn(
                          "block rounded-2xl px-3 py-2.5 text-sm transition",
                          active
                            ? "bg-[#0f1720] text-white"
                            : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-950",
                        )}
                      >
                        {page.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </details>
      </div>

      <aside className="sticky top-24 hidden h-fit lg:block">
        <div className="rounded-[32px] border border-slate-900/10 bg-white/85 p-5 shadow-[0_20px_60px_-40px_rgba(12,23,34,0.35)]">
          <DocsSearch />
          <nav className="mt-6 space-y-6">
            {docsNavGroups.map((group) => (
              <div key={group.title}>
                <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  {group.title}
                </div>
                <div className="mt-2 space-y-1">
                  {group.items.map((slug) => {
                    const page = docsPages.find((entry) => entry.slug === slug);
                    if (!page) return null;
                    const href = getDocHref(page.slug);
                    const active = pathname === href;

                    return (
                      <Link
                        key={href}
                        href={href}
                        className={cn(
                          "block rounded-2xl px-3 py-2.5 text-sm leading-6 transition",
                          active
                            ? "bg-[#0f1720] text-white"
                            : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-950",
                        )}
                      >
                        {page.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
