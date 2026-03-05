"use client";

import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";
import { docsPages, getDocHref } from "@/content/docs";

export function DocsSearch() {
  const [query, setQuery] = useState("");

  const trimmed = query.trim().toLowerCase();
  const results = trimmed
    ? docsPages
        .filter((page) => {
          const haystack = [
            page.title,
            page.summary,
            page.section,
            ...page.keywords,
          ]
            .join(" ")
            .toLowerCase();

          return haystack.includes(trimmed);
        })
        .slice(0, 6)
    : [];

  return (
    <div className="relative">
      <label className="bg-card flex items-center gap-2 rounded-full border border-border px-4 py-3 shadow-[0_12px_40px_-30px_rgba(12,23,34,0.35)]">
        <Search className="text-muted-foreground size-4" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search docs, commands, and workflows"
          className="text-foreground placeholder:text-muted-foreground w-full bg-transparent text-sm outline-none"
        />
      </label>

      {trimmed ? (
        <div className="bg-popover absolute left-0 right-0 top-[calc(100%+0.75rem)] z-30 rounded-[28px] border border-border p-2 shadow-2xl">
          {results.length > 0 ? (
            results.map((result) => (
              <Link
                key={result.slug || "docs-home"}
                href={getDocHref(result.slug)}
                className="hover:bg-accent block rounded-2xl px-3 py-3 transition"
              >
                <div className="text-muted-foreground text-xs uppercase tracking-[0.22em]">
                  {result.section}
                </div>
                <div className="text-foreground mt-1 font-medium">{result.title}</div>
                <div className="text-muted-foreground mt-1 text-sm leading-6">
                  {result.summary}
                </div>
              </Link>
            ))
          ) : (
            <div className="text-muted-foreground px-3 py-4 text-sm">
              No matching pages. Try terms like setup, runtime config, migrations, or macOS app.
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
