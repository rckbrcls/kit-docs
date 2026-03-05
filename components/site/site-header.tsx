import Link from "next/link";
import { ArrowUpRight, BookOpen, Boxes, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Product" },
  { href: "/docs", label: "Docs" },
  { href: "/docs/getting-started", label: "Install Uru" },
  { href: "/docs/for-developers", label: "Modify Uru" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-900/8 bg-[color:var(--panel)]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl border border-slate-900/10 bg-[#0f1720] text-white shadow-[0_14px_40px_-20px_rgba(15,23,32,0.9)]">
            <Boxes className="size-5" />
          </div>
          <div className="min-w-0">
            <div className="font-display text-lg font-semibold tracking-tight text-slate-950">
              Uru
            </div>
            <div className="hidden text-xs text-slate-500 sm:block">
              Desktop operations powered by Supabase
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-900/5 hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild size="sm" variant="outline" className="rounded-full px-4">
            <Link href="/docs/polterbase">
              <BookOpen className="size-4" />
              Polterbase
            </Link>
          </Button>
          <Button asChild size="sm" className="rounded-full bg-[#0f1720] px-4 text-white hover:bg-[#122233]">
            <Link href="/docs/getting-started">
              <Wrench className="size-4" />
              Get Started
            </Link>
          </Button>
        </div>

        <details className="md:hidden">
          <summary className="list-none rounded-full border border-slate-900/10 bg-white px-4 py-2 text-sm text-slate-700">
            Menu
          </summary>
          <div className="absolute right-4 top-16 w-72 rounded-3xl border border-slate-900/10 bg-white p-3 shadow-2xl">
            <div className="space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-900/5"
                >
                  {link.label}
                  <ArrowUpRight className="size-4 text-slate-400" />
                </Link>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
