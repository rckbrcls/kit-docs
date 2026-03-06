import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Database,
  HardDriveDownload,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodePanel } from "@/components/site/code-panel";
import { DocsSearch } from "@/components/site/docs-search";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { WorkflowDiagram } from "@/components/site/workflow-diagram";
import {
  ADVANCED_INSTALL_COMMAND,
  getPublicInstallCommand,
} from "@/lib/install";

const featureCards = [
  {
    icon: Boxes,
    title: "Product catalog and inventory",
    body: "Track products, stock movements, and daily operations in one desktop workspace.",
  },
  {
    icon: ShieldCheck,
    title: "Orders, sales, payments, and roles",
    body: "Run business workflows with role-based access layered directly over the backend.",
  },
  {
    icon: Database,
    title: "Analytics backed by Supabase",
    body: "Keep auth, data access, RLS, and transactional backend logic in Supabase.",
  },
];

const audienceCards = [
  {
    eyebrow: "End Users",
    title: "Install Uru and get to work",
    body: "Use the packaged app or a prepared checkout and move straight into catalog, inventory, sales, and analytics.",
    href: "/docs/getting-started",
  },
  {
    eyebrow: "Self-Hosters / Operators",
    title: "Run Uru on your own Supabase project",
    body: "Use Polterbase to link, migrate, configure, and install Uru against the backend you operate.",
    href: "/docs/polterbase",
  },
  {
    eyebrow: "Developers",
    title: "Modify the app safely",
    body: "Start with pnpm uru dev and keep Supabase workflows in Polterbase instead of legacy app commands.",
    href: "/docs/for-developers",
  },
];

const diagramItems = [
  {
    title: "Uru app",
    body: "The desktop interface where teams manage products, inventory, orders, sales, payments, analytics, and role-based access.",
  },
  {
    title: "Polterbase workflow",
    body: "The recommended workflow manager for setup, linking, migrations, configuration refresh, and packaged installs.",
  },
  {
    title: "Supabase project",
    body: "The backend that provides auth, Postgres, RLS policies, and RPC functions.",
  },
  {
    title: "Runtime app connection",
    body: "The installed app can consume a bootstrap payload on first launch and persist the connection locally.",
  },
];

export default function HomePage() {
  const publicInstallCommand = getPublicInstallCommand();

  return (
    <div>
      <SiteHeader />

      <main>
        <section className="site-shell relative overflow-hidden py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="text-primary/80 bg-primary/6 mb-5 inline-flex border border-primary/15 px-4 py-2 text-xs uppercase tracking-[0.22em]">
                Open-source desktop business manager
              </div>
              <h1 className="text-foreground max-w-4xl font-display text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Uru brings serious business operations into a desktop app powered by Supabase.
              </h1>
              <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8">
                Use Uru as an end user, self-host it on your own Supabase
                project, or modify it from source. The workflow split is clear:
                `pnpm uru dev` for development, Polterbase for setup, linking,
                migration, configuration, and packaged app installation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="px-6">
                  <Link href="/docs/getting-started">
                    <HardDriveDownload className="size-4" />
                    Install Uru
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-card px-6">
                  <Link href="/docs/installation">
                    <Database className="size-4" />
                    Self-host with Supabase
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-card px-6">
                  <Link href="/docs">
                    <BookOpen className="size-4" />
                    Read the Docs
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-card px-6">
                  <Link href="/docs/for-developers">
                    <Wrench className="size-4" />
                    Modify Uru
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-border bg-[color:var(--panel)] p-6 shadow-[0_30px_80px_-45px_rgba(7,15,24,0.75)]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-primary text-primary-foreground flex size-12 items-center justify-center">
                    <Boxes className="size-5" />
                  </div>
                  <div>
                    <div className="text-foreground font-display text-xl font-semibold tracking-tight">
                      Documentation-first product site
                    </div>
                    <div className="text-primary/70 text-sm">
                      Built for beginners and technical users at the same time
                    </div>
                  </div>
                </div>
                <DocsSearch />
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="bg-card border border-border p-4">
                    <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
                      Recommended bootstrap
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm leading-7">
                      Start from source with pnpm install, Polterbase setup, and
                      pnpm uru dev.
                    </p>
                  </div>
                  <div className="bg-card border border-border p-4">
                    <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
                      Recommended packaged flow
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm leading-7">
                      Start from the public install script, then let Polterbase
                      prepare the runtime connection Uru consumes on first launch.
                    </p>
                  </div>
                </div>
              </div>

              <CodePanel
                title="Main source workflow"
                language="bash"
                code={`pnpm install
npx polterbase app setup uru --path .
pnpm uru dev`}
              />
            </div>
          </div>
        </section>

        <section className="site-shell py-8 sm:py-12">
          <div className="grid gap-4 lg:grid-cols-3">
            {featureCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="bg-card border border-border p-6 shadow-[0_20px_60px_-45px_rgba(12,23,34,0.55)]"
                >
                  <div className="bg-primary/10 text-primary flex size-12 items-center justify-center">
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
                Why Polterbase exists
              </div>
              <h2 className="text-foreground mt-3 font-display text-4xl font-semibold tracking-tight">
                Uru stopped treating backend operations as app CLI work.
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl text-base leading-8">
                Uru keeps a minimal local CLI focused on development through
                `pnpm uru dev`. Polterbase is the recommended workflow manager
                for Uru Supabase operations, including setup, linking,
                migration, runtime configuration, and packaged app installation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.npmjs.com/package/@polterware/polterbase"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground bg-card hover:text-primary border border-border px-4 py-2 text-sm"
                >
                  Polterbase on npm
                </a>
                <a
                  href="https://github.com/polterware/polterbase"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground bg-card hover:text-primary border border-border px-4 py-2 text-sm"
                >
                  Polterbase on GitHub
                </a>
              </div>
            </div>

            <div className="border border-border bg-[color:var(--panel)] p-6 shadow-[0_30px_80px_-45px_rgba(7,15,24,0.75)]">
              <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
                Workflow split
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="bg-card border border-border p-5">
                  <div className="text-foreground font-display text-xl font-semibold tracking-tight">
                    Uru CLI
                  </div>
                  <p className="text-muted-foreground mt-2 text-sm leading-7">
                    Local development startup with `pnpm uru dev`.
                  </p>
                </div>
                <div className="bg-card border border-border p-5">
                  <div className="text-foreground font-display text-xl font-semibold tracking-tight">
                    Polterbase
                  </div>
                  <p className="text-muted-foreground mt-2 text-sm leading-7">
                    Setup, link, migrate, configure, and install workflows.
                  </p>
                </div>
              </div>
              <div className="bg-card text-muted-foreground mt-5 border border-border p-5 text-sm leading-7">
                <code>npx polterbase app setup uru --path .</code> is the main
                source-checkout bootstrap. <code>{publicInstallCommand}</code>{" "}
                is the main packaged install path, with{" "}
                <code>{ADVANCED_INSTALL_COMMAND}</code> as the direct
                Polterbase alternative.
              </div>
            </div>
          </div>
        </section>

        <section className="site-shell py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
                Who Uru is for
              </div>
              <h2 className="text-foreground mt-3 font-display text-4xl font-semibold tracking-tight">
                One product, three clearly labeled pathways.
              </h2>
            </div>
            <Link
              href="/docs"
              className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm font-medium"
            >
              Explore full documentation
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {audienceCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="bg-card hover:bg-accent border border-border p-6 transition hover:-translate-y-0.5"
              >
                <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
                  {card.eyebrow}
                </div>
                <h3 className="text-foreground mt-3 font-display text-2xl font-semibold tracking-tight">
                  {card.title}
                </h3>
                <p className="text-muted-foreground mt-3 text-sm leading-7">
                  {card.body}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="site-shell py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="bg-card border border-border p-6">
              <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
                Two ways to get started
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
npx polterbase app setup uru --path .
pnpm uru dev`}
                />
              </div>
            </div>
            <div className="bg-card border border-border p-6">
              <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
                Two ways to get started
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
                  code={publicInstallCommand}
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
              A desktop app with a controlled backend workflow layer.
            </h2>
          </div>
          <WorkflowDiagram items={diagramItems} compact />
        </section>

        <section className="site-shell py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <Link
              href="/docs/troubleshooting"
              className="bg-card hover:bg-accent border border-border p-6 transition hover:-translate-y-0.5"
            >
              <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
                Troubleshooting
              </div>
              <h2 className="text-foreground mt-3 font-display text-3xl font-semibold tracking-tight">
                Missing config, auth failures, migration issues, or runtime payload confusion?
              </h2>
              <p className="text-muted-foreground mt-3 text-sm leading-7">
                The troubleshooting guide covers the common failure modes and
                the exact Polterbase workflows that usually resolve them.
              </p>
            </Link>
            <Link
              href="/docs/for-developers"
              className="bg-card hover:bg-accent border border-border p-6 transition hover:-translate-y-0.5"
            >
              <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
                Contributors
              </div>
              <h2 className="text-foreground mt-3 font-display text-3xl font-semibold tracking-tight">
                Understand the current CLI boundary before you extend the codebase.
              </h2>
              <p className="text-muted-foreground mt-3 text-sm leading-7">
                The developer docs explain where the app code lives, where
                migrations live, and why Uru CLI development and Polterbase
                Supabase workflows are intentionally separated.
              </p>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
