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
        <details className="bg-card border border-border p-4 shadow-[0_20px_60px_-40px_rgba(12,23,34,0.35)]">
          <summary className="text-foreground cursor-pointer list-none text-sm font-medium">
            Browse documentation
          </summary>
          <div className="mt-4">
            <DocsSearch />
          </div>
          <nav className="mt-5 space-y-5">
            {docsNavGroups.map((group) => (
              <div key={group.title}>
                <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
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
                          "block px-3 py-2.5 text-sm transition",
                          active
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-accent hover:text-primary",
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

      <aside className="hidden lg:block lg:h-full lg:min-h-0">
        <div className="no-scrollbar h-full overflow-y-auto pt-8 pb-8 [scrollbar-gutter:stable]">
          <div className="bg-card border border-border p-5 shadow-[0_20px_60px_-40px_rgba(12,23,34,0.35)]">
            <DocsSearch />
            <nav className="mt-6 space-y-6">
              {docsNavGroups.map((group) => (
                <div key={group.title}>
                  <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
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
                            "block px-3 py-2.5 text-sm leading-6 transition",
                            active
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-accent hover:text-primary",
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
        </div>
      </aside>
    </>
  );
}
