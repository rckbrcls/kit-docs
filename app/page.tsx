import Link from "next/link";
import {
  BookOpen,
  Boxes,
  Smartphone,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodePanel } from "@/components/site/code-panel";
import { DocsSearch } from "@/components/site/docs-search";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { WorkflowDiagram } from "@/components/site/workflow-diagram";
import { INSTALL_COMMAND } from "@/lib/install";

const productCards = [
  {
    icon: Boxes,
    title: "Ops",
    body: "Open-source desktop business manager. Product catalog, inventory, orders, sales, payments, and analytics in one app powered by Supabase.",
    href: "/docs/ops/getting-started",
  },
  {
    icon: Terminal,
    title: "Polterbase",
    body: "CLI workflow manager for Supabase operations. Setup, linking, migrations, runtime configuration, and packaged app installation.",
    href: "/docs/polterbase/getting-started",
  },
  {
    icon: Smartphone,
    title: "PWA",
    body: "Headless PWA install utilities and manifest tools. Detect install environments, show manual guides, and use React hooks.",
    href: "/docs/pwa/getting-started",
  },
];

const featureCards = [
  {
    icon: Boxes,
    title: "Desktop business management",
    body: "Product catalog, inventory, orders, sales, payments, analytics, and role-based access in one Supabase-powered app.",
  },
  {
    icon: Terminal,
    title: "Interactive Supabase CLI",
    body: "Browse commands, pin workflows, manage migrations, and install packaged apps from one unified board.",
  },
  {
    icon: Smartphone,
    title: "Headless PWA install",
    body: "Detect install environments, use native prompts or manual guides, and generate manifests with zero UI opinions.",
  },
];

const diagramItems = [
  {
    title: "Ops",
    body: "Desktop business manager for product catalog, inventory, orders, sales, payments, analytics, and role-based access.",
  },
  {
    title: "Polterbase",
    body: "Interactive CLI for Supabase workflows: setup, linking, migrations, configuration, and packaged app installation.",
  },
  {
    title: "PWA",
    body: "Headless install utilities: browser detection, native prompts, manual guides, manifest generation, and a React hook.",
  },
  {
    title: "Supabase",
    body: "The backend that provides auth, Postgres, RLS policies, and RPC functions for Ops and other projects.",
  },
];

export default function HomePage() {
  return (
    <div>
      <SiteHeader />

      <main>
        <section className="site-shell relative overflow-hidden py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <h1 className="text-foreground max-w-4xl font-display text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Open-source tools for business operations and modern web apps.
              </h1>
              <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8">
                Ops is a desktop business manager powered by Supabase.
                Polterbase is an interactive CLI for Supabase workflows.
                PWA provides headless install utilities for progressive web
                apps. Together they form the polterware/kit ecosystem.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="px-6">
                  <Link href="/docs">
                    <BookOpen className="size-4" />
                    Read the Docs
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-card px-6">
                  <Link href="/docs/ops/getting-started">
                    <Boxes className="size-4" />
                    Ops
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-card px-6">
                  <Link href="/docs/polterbase/getting-started">
                    <Terminal className="size-4" />
                    Polterbase
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-card px-6">
                  <Link href="/docs/pwa/getting-started">
                    <Smartphone className="size-4" />
                    PWA
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-border bg-[color:var(--panel)] p-6 shadow-[0_30px_80px_-45px_rgba(7,15,24,0.75)]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-primary text-primary-foreground flex size-12 items-center justify-center rounded-lg">
                    <Boxes className="size-5" />
                  </div>
                  <div>
                    <div className="text-foreground font-display text-xl font-semibold tracking-tight">
                      polterware/kit
                    </div>
                    <div className="text-primary/70 text-sm">
                      Built for beginners and technical users at the same time
                    </div>
                  </div>
                </div>
                <DocsSearch />
                <div className="mt-5 grid gap-3">
                  <div className="bg-card border border-border p-4">
                    <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
                      Ops
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm leading-7">
                      Desktop business manager powered by Supabase.
                    </p>
                  </div>
                  <div className="bg-card border border-border p-4">
                    <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
                      Polterbase
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm leading-7">
                      Interactive CLI for Supabase workflows.
                    </p>
                  </div>
                  <div className="bg-card border border-border p-4">
                    <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
                      PWA
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm leading-7">
                      Headless install utilities for web apps.
                    </p>
                  </div>
                </div>
              </div>

              <CodePanel
                title="Quick start"
                language="bash"
                code={`npm install @polterware/pwa        # PWA
npx @polterware/polterbase         # Polterbase
npx polterbase app setup ops       # Ops`}
              />
            </div>
          </div>
        </section>

        <section className="site-shell py-8 sm:py-12">
          <div className="grid gap-4">
            {productCards.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="bg-card hover:bg-accent border border-border p-6 shadow-[0_20px_60px_-45px_rgba(12,23,34,0.55)] transition hover:-translate-y-0.5"
                >
                  <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-lg">
                    <Icon className="size-5" />
                  </div>
                  <h2 className="text-foreground mt-5 font-display text-2xl font-semibold tracking-tight">
                    {card.title}
                  </h2>
                  <p className="text-muted-foreground mt-3 text-sm leading-7">
                    {card.body}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="site-shell py-8 sm:py-12">
          <div className="grid gap-4">
            {featureCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="bg-card border border-border p-6 shadow-[0_20px_60px_-45px_rgba(12,23,34,0.55)]"
                >
                  <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-lg">
                    <Icon className="size-5" />
                  </div>
                  <h2 className="text-foreground mt-5 font-display text-2xl font-semibold tracking-tight">
                    {card.title}
                  </h2>
                  <p className="text-muted-foreground mt-3 text-sm leading-7">
                    {card.body}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="site-shell py-16">
          <div className="grid gap-6">
            <div className="bg-card border border-border p-6">
              <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
                Ops
              </div>
              <h2 className="text-foreground mt-3 font-display text-3xl font-semibold tracking-tight">
                Source checkout
              </h2>
              <p className="text-muted-foreground mt-3 text-sm leading-7">
                Best for developers and operators who want full control of the
                repository and Supabase workflow surface.
              </p>
              <div className="mt-5">
                <CodePanel
                  title="Source checkout"
                  language="bash"
                  code={`pnpm install
npx polterbase app setup ops --path .
pnpm ops dev`}
                />
              </div>
            </div>
            <div className="bg-card border border-border p-6">
              <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
                Ops
              </div>
              <h2 className="text-foreground mt-3 font-display text-3xl font-semibold tracking-tight">
                Installed macOS app
              </h2>
              <p className="text-muted-foreground mt-3 text-sm leading-7">
                Best for operator-managed distribution when you want the
                packaged app plus a runtime connection prepared without
                rebuilding.
              </p>
              <div className="mt-5">
                <CodePanel
                  title="macOS install"
                  language="bash"
                  code={INSTALL_COMMAND}
                />
              </div>
            </div>
            <div className="bg-card border border-border p-6">
              <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
                PWA
              </div>
              <h2 className="text-foreground mt-3 font-display text-3xl font-semibold tracking-tight">
                Headless install flow
              </h2>
              <p className="text-muted-foreground mt-3 text-sm leading-7">
                Detect install environments, use native prompts when available,
                and show manual guides for verified browsers.
              </p>
              <div className="mt-5">
                <CodePanel
                  title="PWA install"
                  language="bash"
                  code={`npm install @polterware/pwa`}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="site-shell py-16">
          <div className="mb-8">
            <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
              Architecture at a glance
            </div>
            <h2 className="text-foreground mt-3 font-display text-4xl font-semibold tracking-tight">
              Three tools, one coherent ecosystem.
            </h2>
          </div>
          <WorkflowDiagram items={diagramItems} compact />
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
