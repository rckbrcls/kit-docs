import Link from "next/link";
import { ArrowUpRight, BookOpen, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Product" },
  { href: "/docs", label: "Docs" },
  { href: "/docs/getting-started", label: "Install Uru" },
  { href: "/docs/for-developers", label: "Modify Uru" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-[color:var(--panel)]/92 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center">
          <div className="min-w-0">
            <div
              className="text-[1.7rem] leading-none text-foreground"
              style={{
                fontFamily:
                  'Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif',
              }}
            >
              Urú
            </div>
            <div className="text-muted-foreground mt-1 hidden text-xs sm:block">
              Desktop operations powered by Supabase
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:bg-accent hover:text-foreground rounded-full px-4 py-2 text-sm transition"
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
          <Button asChild size="sm" className="rounded-full px-4">
            <Link href="/docs/getting-started">
              <Wrench className="size-4" />
              Get Started
            </Link>
          </Button>
        </div>

        <details className="md:hidden">
          <summary className="text-muted-foreground bg-card list-none rounded-full border border-border px-4 py-2 text-sm">
            Menu
          </summary>
          <div className="bg-card absolute right-4 top-16 w-72 rounded-3xl border border-border p-3 shadow-2xl">
            <div className="space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:bg-accent hover:text-foreground flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm"
                >
                  {link.label}
                  <ArrowUpRight className="text-muted-foreground size-4" />
                </Link>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
