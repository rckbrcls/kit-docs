import Link from 'next/link';
import { Terminal, Database, Globe, ArrowRight, ChevronRight } from 'lucide-react';

const products = [
  {
    name: 'Ops',
    description:
      'Desktop business manager powered by Supabase. Product catalog, inventory, orders, sales, payments, and analytics.',
    href: '/docs/ops/getting-started',
    icon: Database,
    tags: ['Desktop', 'Supabase', 'Tauri'],
  },
  {
    name: 'Polterbase',
    description:
      'Interactive CLI for Supabase workflows. Setup, linking, migrations, runtime configuration, and packaged app installation.',
    href: '/docs/polterbase/getting-started',
    icon: Terminal,
    tags: ['CLI', 'Supabase', 'Migrations'],
  },
  {
    name: 'PWA',
    description:
      'Headless install utilities and manifest tools. Detect environments, show manual guides, and use React hooks.',
    href: '/docs/pwa/getting-started',
    icon: Globe,
    tags: ['Runtime API', 'React', 'Manifest'],
  },
];

const quickStart = [
  {
    label: 'Bootstrap Ops from source',
    code: 'npx polterbase app setup ops --path .',
  },
  {
    label: 'Install packaged macOS app',
    code: 'npx @polterware/polterbase@latest app install ops',
  },
  {
    label: 'Add PWA install detection',
    code: 'npm install @polterware/pwa',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-fd-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-fd-accent)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/60 px-3 py-1 text-xs tracking-wide text-fd-muted-foreground backdrop-blur-sm">
              <span className="inline-block size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open Source
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-fd-foreground leading-[1.1]">
              <span className="text-fd-muted-foreground font-normal">polterware/</span>kit
            </h1>

            <p className="max-w-xl text-lg text-fd-muted-foreground leading-relaxed">
              Open-source tools for business operations and modern web apps.
              Three projects, one ecosystem.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/docs/kit"
                className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
              >
                Documentation
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="https://github.com/polterware/kit"
                className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card/60 px-5 py-2.5 text-sm font-medium text-fd-foreground backdrop-blur-sm transition-colors hover:bg-fd-accent"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <p className="text-xs font-medium uppercase tracking-widest text-fd-muted-foreground mb-8">
          Projects
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group relative flex flex-col gap-4 rounded-xl border border-fd-border bg-fd-card/50 p-6 transition-colors hover:bg-fd-accent/40"
            >
              <div className="flex items-center justify-between">
                <product.icon className="size-5 text-fd-muted-foreground" />
                <ChevronRight className="size-4 text-fd-muted-foreground opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-fd-foreground">
                  {product.name}
                </h3>
                <p className="text-sm leading-relaxed text-fd-muted-foreground">
                  {product.description}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-fd-muted px-2 py-0.5 text-[11px] font-medium text-fd-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Start */}
      <section className="border-t border-fd-border">
        <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
          <p className="text-xs font-medium uppercase tracking-widest text-fd-muted-foreground mb-8">
            Quick start
          </p>

          <div className="flex flex-col gap-3">
            {quickStart.map((item) => (
              <div
                key={item.code}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 rounded-lg border border-fd-border bg-fd-card/50 px-5 py-4"
              >
                <span className="shrink-0 text-sm text-fd-muted-foreground">
                  {item.label}
                </span>
                <code className="flex-1 text-sm font-mono text-fd-foreground sm:text-right">
                  {item.code}
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-fd-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-10">
          <p className="text-sm text-fd-muted-foreground">
            MIT Licensed. Built with Supabase, Tauri, and React.
          </p>
          <Link
            href="/docs/kit"
            className="text-sm font-medium text-fd-foreground underline underline-offset-4 decoration-fd-muted-foreground/40 hover:decoration-fd-foreground transition-colors"
          >
            Read the docs
          </Link>
        </div>
      </section>
    </main>
  );
}
