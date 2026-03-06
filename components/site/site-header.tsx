"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  docsProducts,
  getActiveProduct,
  getProductLandingHref,
  getProductDocsHref,
} from "@/content/docs";

export function SiteHeader() {
  const pathname = usePathname();
  const activeProduct = getActiveProduct(pathname);
  const isDocsPage = pathname.includes("/docs");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-[color:var(--panel)]/92 backdrop-blur-xl">
      {/* Line 1: Logo + product tabs */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center">
          <div className="min-w-0">
            <div className="text-primary font-medium leading-none">
              polterware/kit
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {docsProducts.map((product) => {
            const active = activeProduct.id === product.id;
            const href = getProductLandingHref(product);

            return (
              <Link
                key={product.id}
                href={href}
                className={cn(
                  "px-4 py-2 text-sm transition",
                  active
                    ? "bg-primary/10 text-primary border border-primary/15"
                    : "text-muted-foreground hover:bg-accent hover:text-primary",
                )}
              >
                {product.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block" />

        <details className="md:hidden">
          <summary className="text-muted-foreground bg-card list-none border border-border px-4 py-2 text-sm">
            Menu
          </summary>
          <div className="bg-card absolute right-4 top-16 w-72 border border-border p-3 shadow-2xl">
            <div className="space-y-1">
              {docsProducts.map((product) => {
                const active = activeProduct.id === product.id;
                return (
                  <Link
                    key={product.id}
                    href={getProductLandingHref(product)}
                    className={cn(
                      "flex items-center justify-between px-3 py-2.5 text-sm",
                      active
                        ? "bg-primary/10 text-primary border border-primary/15"
                        : "text-muted-foreground hover:bg-accent hover:text-primary",
                    )}
                  >
                    {product.label}
                    <ArrowUpRight className="text-primary/70 size-4" />
                  </Link>
                );
              })}
              <div className="border-t border-border pt-2">
                <Link
                  href={getProductLandingHref(activeProduct)}
                  className={cn(
                    "flex items-center justify-between px-3 py-2.5 text-sm",
                    !isDocsPage
                      ? "bg-primary/10 text-primary border border-primary/15"
                      : "text-muted-foreground hover:bg-accent hover:text-primary",
                  )}
                >
                  Product
                  <ArrowUpRight className="text-primary/70 size-4" />
                </Link>
                <Link
                  href={getProductDocsHref(activeProduct)}
                  className={cn(
                    "flex items-center justify-between px-3 py-2.5 text-sm",
                    isDocsPage
                      ? "bg-primary/10 text-primary border border-primary/15"
                      : "text-muted-foreground hover:bg-accent hover:text-primary",
                  )}
                >
                  Docs
                  <ArrowUpRight className="text-primary/70 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </details>
      </div>

      {/* Line 2: Product / Docs context links */}
      <div className="border-t border-border">
        <div className="mx-auto hidden max-w-7xl items-center gap-1 px-4 sm:px-6 md:flex lg:px-8">
          <Link
            href={getProductLandingHref(activeProduct)}
            className={cn(
              "px-4 py-2 text-sm transition",
              !isDocsPage
                ? "bg-primary/10 text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-primary",
            )}
          >
            Product
          </Link>
          <Link
            href={getProductDocsHref(activeProduct)}
            className={cn(
              "px-4 py-2 text-sm transition",
              isDocsPage
                ? "bg-primary/10 text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-primary",
            )}
          >
            Docs
          </Link>
        </div>
      </div>
    </header>
  );
}
