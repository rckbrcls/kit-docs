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
      <label className="flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/90 px-4 py-3 shadow-[0_12px_40px_-30px_rgba(12,23,34,0.35)]">
        <Search className="size-4 text-slate-400" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search docs, commands, and workflows"
          className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />
      </label>

      {trimmed ? (
        <div className="absolute left-0 right-0 top-[calc(100%+0.75rem)] z-30 rounded-[28px] border border-slate-900/10 bg-white p-2 shadow-2xl">
          {results.length > 0 ? (
            results.map((result) => (
              <Link
                key={result.slug || "docs-home"}
                href={getDocHref(result.slug)}
                className="block rounded-2xl px-3 py-3 transition hover:bg-slate-900/5"
              >
                <div className="text-xs uppercase tracking-[0.22em] text-teal-700">
                  {result.section}
                </div>
                <div className="mt-1 font-medium text-slate-950">{result.title}</div>
                <div className="mt-1 text-sm leading-6 text-slate-600">
                  {result.summary}
                </div>
              </Link>
            ))
          ) : (
            <div className="px-3 py-4 text-sm text-slate-500">
              No matching pages. Try terms like setup, runtime config, migrations, or macOS app.
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
