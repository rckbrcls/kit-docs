"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, BookOpen, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Product" },
  { href: "/docs", label: "Docs" },
];

const actionLinks = [
  { href: "/docs/getting-started", label: "Install Uru" },
  { href: "/docs/for-developers", label: "Modify Uru" },
 ] as const;

export function SiteHeader() {
  const pathname = usePathname();

  function isActive(href: string) {
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-[color:var(--panel)]/92 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center">
          <div className="min-w-0">
            <div
              className="text-primary text-[1.7rem] leading-none"
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
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm transition",
                  active
                    ? "bg-primary/10 text-primary border border-primary/15"
                    : "text-muted-foreground hover:bg-accent hover:text-primary",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild size="sm" variant="outline" className="px-4">
            <Link href={actionLinks[0].href}>
              <BookOpen className="size-4" />
              {actionLinks[0].label}
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="px-4">
            <Link href={actionLinks[1].href}>
              <Wrench className="size-4" />
              {actionLinks[1].label}
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="px-4">
            <Link href="/docs/polterbase">
              <ArrowUpRight className="size-4" />
              Polterbase
            </Link>
          </Button>
        </div>

        <details className="md:hidden">
          <summary className="text-muted-foreground bg-card list-none border border-border px-4 py-2 text-sm">
            Menu
          </summary>
          <div className="bg-card absolute right-4 top-16 w-72 border border-border p-3 shadow-2xl">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between px-3 py-2.5 text-sm",
                      active
                        ? "bg-primary/10 text-primary border border-primary/15"
                        : "text-muted-foreground hover:bg-accent hover:text-primary",
                    )}
                  >
                    {link.label}
                    <ArrowUpRight className="text-primary/70 size-4" />
                  </Link>
                );
              })}
              <div className="border-t border-border pt-2">
                {actionLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:bg-accent hover:text-primary flex items-center justify-between px-3 py-2.5 text-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="text-primary/70 size-4" />
                  </Link>
                ))}
              </div>
              <div className="border-t border-border pt-2">
                <Link
                  href="/docs/polterbase"
                  className="text-muted-foreground hover:bg-accent hover:text-primary flex items-center justify-between px-3 py-2.5 text-sm"
                >
                  Polterbase
                  <ArrowUpRight className="text-primary/70 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
