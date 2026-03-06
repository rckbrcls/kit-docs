import { INSTALL_COMMAND, getVersionedInstallCommand } from "@/lib/install";

const VERSIONED_INSTALL_COMMAND = getVersionedInstallCommand();

export type Audience = "End Users" | "Self-Hosters / Operators" | "Developers";

export type DocBlock =
  | {
      type: "paragraphs";
      title?: string;
      values: string[];
    }
  | {
      type: "list";
      title?: string;
      style?: "bullet" | "ordered" | "check";
      items: string[];
    }
  | {
      type: "steps";
      title?: string;
      items: Array<{
        title: string;
        body: string;
      }>;
    }
  | {
      type: "callout";
      tone: "note" | "tip" | "warning" | "danger";
      title: string;
      body: string;
    }
  | {
      type: "code";
      title?: string;
      language?: string;
      code: string;
    }
  | {
      type: "commandTable";
      title?: string;
      commands: Array<{
        command: string;
        description: string;
      }>;
    }
  | {
      type: "linkGrid";
      title?: string;
      links: Array<{
        label: string;
        href: string;
        description: string;
      }>;
    }
  | {
      type: "comparison";
      title: string;
      columns: [string, string];
      rows: Array<{
        label: string;
        values: [string, string];
      }>;
    }
  | {
      type: "audienceSplit";
      title?: string;
      items: Array<{
        audience: Audience;
        heading: string;
        body: string;
        href?: string;
      }>;
    }
  | {
      type: "architecture";
      title?: string;
      items: Array<{
        title: string;
        body: string;
      }>;
    };

export interface DocSection {
  title: string;
  description?: string;
  blocks: DocBlock[];
}

export interface DocPage {
  slug: string;
  title: string;
  summary: string;
  section: string;
  audience: Audience[];
  keywords: string[];
  intro: string[];
  sections: DocSection[];
}

export const audiencePaths: Array<{
  audience: Audience;
  heading: string;
  body: string;
  href: string;
}> = [
  {
    audience: "End Users",
    heading: "Install and start using Ops",
    body: "Use the packaged macOS app or a prepared source checkout, connect to Supabase, and start managing catalog, inventory, orders, sales, payments, and analytics.",
    href: "/ops/docs/getting-started",
  },
  {
    audience: "Self-Hosters / Operators",
    heading: "Connect Ops to your own Supabase project",
    body: "Use Polterbase to set up, link, migrate, configure, and install Ops against the Supabase project you operate.",
    href: "/ops/docs/polterbase",
  },
  {
    audience: "Developers",
    heading: "Modify the app and extend the stack",
    body: "Work from source, run the minimal Ops development CLI, and use Polterbase for Supabase workflows instead of legacy app commands.",
    href: "/ops/docs/for-developers",
  },
];

export const docsPages: DocPage[] = [
  {
    slug: "",
    title: "Documentation Home",
    summary:
      "Start here to explore the Polterware ecosystem: Ops, Polterbase, and PWA.",
    section: "polterware/kit",
    audience: ["End Users", "Self-Hosters / Operators", "Developers"],
    keywords: [
      "docs",
      "start here",
      "ops",
      "polterbase",
      "pwa",
      "install",
      "self host",
      "developer docs",
    ],
    intro: [
      "polterware/kit documents three open-source projects: Ops (desktop business manager), Polterbase (CLI workflow manager for Supabase), and PWA (headless install utilities for progressive web apps).",
      "Each project has its own documentation section. Use the links below to jump straight into the one you need.",
    ],
    sections: [
      {
        title: "Projects",
        blocks: [
          {
            type: "linkGrid",
            links: [
              {
                label: "Ops",
                href: "/ops/docs/getting-started",
                description:
                  "Open-source desktop business manager powered by Supabase. Product catalog, inventory, orders, sales, payments, and analytics.",
              },
              {
                label: "Polterbase",
                href: "/polterbase/docs/getting-started",
                description:
                  "Interactive CLI for managing Supabase CLI workflows with setup, linking, migrations, configuration, and app installation.",
              },
              {
                label: "PWA",
                href: "/pwa/docs/getting-started",
                description:
                  "Headless PWA install utilities and manifest tools. Detect install environments, show manual guides, and use React hooks.",
              },
            ],
          },
        ],
      },
      {
        title: "Ops quick start",
        blocks: [
          {
            type: "audienceSplit",
            items: audiencePaths,
          },
          {
            type: "code",
            title: "Main bootstrap flow",
            language: "bash",
            code: `pnpm install
npx polterbase app setup ops --path .
pnpm ops dev`,
          },
        ],
      },
      {
        title: "PWA quick start",
        blocks: [
          {
            type: "code",
            title: "Install and detect",
            language: "bash",
            code: `npm install @polterware/pwa`,
          },
          {
            type: "code",
            title: "Usage",
            language: "ts",
            code: `import { detectInstallEnvironment, getInstallGuide } from "@polterware/pwa";

const env = detectInstallEnvironment();
const guide = getInstallGuide(env.guideId, { locale: "en" });`,
          },
        ],
      },
    ],
  },
  {
    slug: "introduction",
    title: "Introduction",
    summary:
      "Understand the Polterware ecosystem: Ops for desktop business management, Polterbase for Supabase CLI workflows, and PWA for headless install utilities.",
    section: "polterware/kit",
    audience: ["End Users", "Self-Hosters / Operators", "Developers"],
    keywords: ["what is ops", "who is it for", "polterbase", "supabase"],
    intro: [
      "Polterware is a collection of open-source tools for business operations. Ops is a desktop business management app powered by Supabase. Polterbase is an interactive CLI for managing Supabase workflows. PWA provides headless install utilities and manifest tools for progressive web apps.",
      "Each project can be used independently. Together they form a coherent ecosystem where Ops handles the desktop experience, Polterbase manages the backend lifecycle, and PWA covers web app installation flows.",
    ],
    sections: [
      {
        title: "What Ops does",
        blocks: [
          {
            type: "list",
            style: "check",
            items: [
              "Manage a product catalog with structured business data.",
              "Track inventory levels and stock movements.",
              "Handle orders, sales, and payment workflows.",
              "Review analytics in a single desktop workspace.",
              "Enforce role-based access for admins, operators, and analysts.",
            ],
          },
          {
            type: "paragraphs",
            values: [
              "Ops is not a generic website template or a local spreadsheet wrapper. It is a serious desktop operations app that expects a Supabase backend and uses that backend for authentication, database access, row-level security, and server-side functions.",
            ],
          },
        ],
      },
      {
        title: "Who Ops is for",
        blocks: [
          {
            type: "audienceSplit",
            items: [
              {
                audience: "End Users",
                heading: "Teams that want to use the app",
                body: "You care about opening the app, signing in, and doing operational work. You should follow the installation and getting started guides.",
                href: "/ops/docs/getting-started",
              },
              {
                audience: "Self-Hosters / Operators",
                heading: "People responsible for the Supabase project",
                body: "You decide which project Ops connects to, apply migrations, maintain credentials, and reconfigure packaged apps when the backend changes.",
                href: "/ops/docs/configuration",
              },
              {
                audience: "Developers",
                heading: "People modifying the codebase",
                body: "You work in source, start local development with pnpm ops dev, and use Polterbase for setup, link, migrate, configure, and install workflows.",
                href: "/ops/docs/for-developers",
              },
            ],
          },
        ],
      },
      {
        title: "How Ops, Supabase, and Polterbase fit together",
        blocks: [
          {
            type: "architecture",
            items: [
              {
                title: "Ops desktop app",
                body: "The user-facing desktop application for daily operations, sign-in, analytics, and business workflows.",
              },
              {
                title: "Supabase backend",
                body: "Auth, Postgres, row-level security policies, and RPC functions that enforce the business contract.",
              },
              {
                title: "Polterbase workflow layer",
                body: "The recommended operator and developer workflow manager for setup, link, migration, runtime configuration, and packaged app installation.",
              },
              {
                title: "Runtime connection model",
                body: "The installed app can receive a Supabase bootstrap payload on first launch, while source checkouts can still fall back to .env.local.",
              },
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Current CLI boundary",
            body: "The Ops CLI is now intentionally minimal and focused on development through pnpm ops dev. Supabase setup, linking, migrations, configuration, and installation workflows moved to Polterbase.",
          },
        ],
      },
    ],
  },
  {
    slug: "ops/getting-started",
    title: "Getting Started",
    summary:
      "Follow the fastest path for either a source checkout or the packaged macOS app, then verify the first successful launch.",
    section: "Ops",
    audience: ["End Users", "Self-Hosters / Operators", "Developers"],
    keywords: ["quick start", "first launch", "macos app", "source checkout"],
    intro: [
      "There are two supported ways to get started with Ops. The right path depends on whether you want to modify the app from source or install a packaged macOS desktop app.",
      "Both flows depend on a Supabase connection. The difference is where the connection comes from: source checkouts can use .env.local as a fallback, while installed apps are designed around runtime configuration.",
    ],
    sections: [
      {
        title: "Quick start for a source checkout",
        blocks: [
          {
            type: "callout",
            tone: "tip",
            title: "Recommended path",
            body: "Use this path if you are a developer or operator working directly from the repository.",
          },
          {
            type: "code",
            language: "bash",
            code: `pnpm install
npx polterbase app setup ops --path .
pnpm ops dev`,
          },
          {
            type: "paragraphs",
            values: [
              "Polterbase performs the important repository-aware work in the middle of that flow. It validates prerequisites, prepares configuration, links the Supabase project, pushes migrations, and writes the runtime bootstrap payload used by the desktop app.",
              "After setup finishes, pnpm ops dev is the only Ops CLI command you normally need for local development.",
            ],
          },
        ],
      },
      {
        title: "Quick start for the installed macOS app",
        blocks: [
          {
            type: "callout",
            tone: "tip",
            title: "Recommended path",
            body: "Use this path if you want to deploy or test the packaged app without rebuilding Ops locally.",
          },
          {
            type: "code",
            language: "bash",
            code: INSTALL_COMMAND,
          },
          {
            type: "paragraphs",
            values: [
              "Polterbase installs the .app, prepares the runtime Supabase connection payload, and can hand the app off for first launch. The installed app then consumes that payload and stores the runtime connection for later launches.",
              `If you need to pin a specific release, run ${VERSIONED_INSTALL_COMMAND}.`,
              "If you need to point the installed app at a different Supabase project later, use the configuration workflow instead of reinstalling from scratch.",
            ],
          },
        ],
      },
      {
        title: "Requirements and first successful launch",
        blocks: [
          {
            type: "list",
            title: "Base requirements",
            style: "bullet",
            items: [
              "Node.js 20+ and pnpm for source-based workflows.",
              "Supabase CLI for repository setup and migration workflows.",
              "Rust and Tauri system dependencies only if you are running desktop development from source.",
              "A reachable Supabase project URL and publishable key.",
            ],
          },
          {
            type: "steps",
            title: "Confirm the app is ready",
            items: [
              {
                title: "Connection exists",
                body: "The app should either read .env.local in a source checkout or find a runtime connection provided by the installed app workflow.",
              },
              {
                title: "Sign-in screen loads",
                body: "You should reach the login flow without a missing configuration error.",
              },
              {
                title: "Business areas open",
                body: "After authentication, product catalog, inventory, orders, sales, payments, analytics, and role-based access checks should all resolve against Supabase.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "ops/installation",
    title: "Installation",
    summary:
      "Install Ops from source or as a packaged macOS app, and understand what Polterbase configures for each path.",
    section: "Ops",
    audience: ["End Users", "Self-Hosters / Operators", "Developers"],
    keywords: [
      "installation",
      "source install",
      "macos app install",
      "env local",
      "runtime config",
    ],
    intro: [
      "Ops installation is really two related but different workflows: source checkout setup for people working in the repository, and packaged desktop installation for people who want a ready-to-run macOS app.",
      "The key distinction is not whether you use Supabase. Both paths do. The distinction is whether the connection is prepared as development config or runtime app config.",
    ],
    sections: [
      {
        title: "Source installation",
        blocks: [
          {
            type: "code",
            title: "Recommended source flow",
            language: "bash",
            code: `pnpm install
npx polterbase app setup ops --path .
pnpm ops dev`,
          },
          {
            type: "paragraphs",
            values: [
              "This is the main checkout bootstrap flow. Do not replace it with historical Ops CLI setup or database commands. Those responsibilities moved to Polterbase.",
            ],
          },
        ],
      },
      {
        title: "macOS app installation",
        blocks: [
          {
            type: "code",
            title: "Packaged app install",
            language: "bash",
            code: INSTALL_COMMAND,
          },
          {
            type: "paragraphs",
            values: [
              "Use this when you want the packaged macOS release and want Polterbase to handle installation plus runtime connection preparation.",
              `For a pinned build, use ${VERSIONED_INSTALL_COMMAND}.`,
            ],
          },
        ],
      },
      {
        title: "Supabase prerequisites",
        blocks: [
          {
            type: "list",
            style: "bullet",
            items: [
              "A Supabase project that will host authentication, database schema, row-level security, and RPC functions.",
              "Credentials and access needed for linking and migration workflows.",
              "A project URL and publishable key that can be used by Ops at runtime.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Supabase workflows are centralized",
            body: "Polterbase is the recommended workflow manager for Ops Supabase operations. It is the layer that wraps setup, link, migrate, configure, and install in a way that is specific to Ops.",
          },
        ],
      },
      {
        title: "What Polterbase installs and configures",
        blocks: [
          {
            type: "list",
            style: "check",
            items: [
              "Validates prerequisites for the requested workflow.",
              "Creates or refreshes .env.local when the source workflow needs it.",
              "Links the checkout to the intended Supabase project.",
              "Pushes or validates migrations depending on the command.",
              "Writes the bootstrap payload used by the installed desktop app on first launch.",
            ],
          },
        ],
      },
      {
        title: "Runtime configuration versus .env.local",
        blocks: [
          {
            type: "comparison",
            title: "Choose the configuration path that matches your environment",
            columns: ["Use .env.local fallback", "Use runtime configuration"],
            rows: [
              {
                label: "Best fit",
                values: [
                  "Source checkout development and compatibility workflows.",
                  "Installed desktop apps and any workflow where the app should be reconfigurable after packaging.",
                ],
              },
              {
                label: "Storage model",
                values: [
                  "Build-time environment values available to the app during development.",
                  "Persisted runtime connection after first-launch bootstrap import or manual runtime configuration.",
                ],
              },
              {
                label: "Recommended owner",
                values: [
                  "Developers and operators working from source.",
                  "Operators distributing packaged apps to end users.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "ops/polterbase",
    title: "Using Polterbase with Ops",
    summary:
      "Polterbase is the recommended workflow manager for Ops Supabase operations. Use it for setup, link, migrations, configuration, and packaged app installation.",
    section: "Ops",
    audience: ["Self-Hosters / Operators", "Developers"],
    keywords: ["polterbase", "setup", "link", "migrate", "configure", "install"],
    intro: [
      "Polterbase exists because Ops needs repeatable Supabase workflows that are easier to discover, less error-prone, and more explicit than keeping those responsibilities inside the app CLI.",
      "The result is a clean split: Ops owns local development startup, while Polterbase owns setup, project linking, migrations, runtime configuration, and installation workflows.",
    ],
    sections: [
      {
        title: "Why Ops uses Polterbase",
        blocks: [
          {
            type: "paragraphs",
            values: [
              "A self-hosted desktop app needs more than a generic dev command. Operators need project-aware setup, controlled migration workflows, and a way to prepare packaged apps with a runtime backend connection. Polterbase is the workflow layer that standardizes those jobs.",
              "This separation also keeps the Ops CLI intentionally small, which is useful for maintainability and clearer documentation.",
            ],
          },
          {
            type: "linkGrid",
            title: "Polterbase references",
            links: [
              {
                label: "Polterbase on npm",
                href: "https://www.npmjs.com/package/@polterware/polterbase",
                description:
                  "Package and installation reference for the recommended Ops workflow manager.",
              },
              {
                label: "Polterbase on GitHub",
                href: "https://github.com/polterware/polterbase",
                description:
                  "Source repository for Polterbase, including workflow and command details.",
              },
            ],
          },
        ],
      },
      {
        title: "Major commands",
        blocks: [
          {
            type: "commandTable",
            commands: [
              {
                command: "npx polterbase app setup ops --path .",
                description:
                  "Full source-checkout bootstrap. Recommended when cloning or refreshing a local repository.",
              },
              {
                command: "npx polterbase app link ops --path .",
                description:
                  "Link or relink the checkout to the intended Supabase project.",
              },
              {
                command: "npx polterbase app migrate ops push --path .",
                description:
                  "Push pending migrations to the linked Supabase project.",
              },
              {
                command: "npx polterbase app migrate ops lint --path .",
                description:
                  "Check migrations for lint issues before applying them.",
              },
              {
                command: "npx polterbase app migrate ops reset --path .",
                description:
                  "Destructively reset the linked remote database and reapply migrations.",
              },
              {
                command: "npx polterbase app migrate ops local-reset --path .",
                description:
                  "Destructively reset the local Docker-based Supabase database.",
              },
              {
                command: "npx polterbase app configure ops --path .",
                description:
                  "Refresh .env.local and runtime bootstrap material without reinstalling the app.",
              },
              {
                command: INSTALL_COMMAND,
                description:
                  "Install the packaged macOS app from GitHub Releases and prepare the runtime Supabase connection payload. Add --version <version> to pin a release.",
              },
              {
                command: "npx @polterware/polterbase@latest app update ops",
                description:
                  "Update an existing packaged macOS install to a newer release while preserving persisted runtime configuration, local settings, and session data.",
              },
            ],
          },
        ],
      },
      {
        title: "When to use each workflow",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Use setup",
                body: "When you have a fresh checkout or want Polterbase to drive the full Ops bootstrap process from dependency validation through runtime payload preparation.",
              },
              {
                title: "Use link",
                body: "When the repository should target a different Supabase project or when the link needs to be repaired.",
              },
              {
                title: "Use migrate",
                body: "When the project is already linked and you need to push, lint, reset, or local-reset migrations.",
              },
              {
                title: "Use configure",
                body: "When the backend connection changed and you want to refresh development env values or the runtime payload without reinstalling the app.",
              },
              {
                title: "Use install",
                body: "When you are distributing or testing a packaged macOS app and need Polterbase to install it with the right Supabase connection context.",
              },
              {
                title: "Use update",
                body: "When Ops is already installed and you only want to replace the app bundle with a newer release while preserving the current runtime/app state.",
              },
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "Do not treat old Ops commands as the current workflow",
            body: "Historical commands such as pnpm opssetup, pnpm opsdb, and pnpm opscheck are not the current documented path. The current source of truth is the Polterbase workflow set above plus pnpm ops dev for development startup.",
          },
        ],
      },
      {
        title: "Advanced notes for operators",
        blocks: [
          {
            type: "list",
            style: "bullet",
            items: [
              "Use configure when you need to rotate runtime connection details without reinstalling the packaged app.",
              "Use update when you want a newer packaged build without re-entering connection details.",
              "Use link before migration workflows if the repository was moved between Supabase projects.",
              "Reserve reset for intentional destructive operations and communicate it clearly to stakeholders.",
              "Treat install as an application distribution workflow, not as a substitute for migration management.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "ops/configuration",
    title: "Configuration",
    summary:
      "Understand .env.local fallback, runtime Supabase connections, bootstrap payloads, and how to reconfigure Ops later.",
    section: "Ops",
    audience: ["Self-Hosters / Operators", "Developers"],
    keywords: [
      "configuration",
      "env local",
      "runtime connection",
      "bootstrap payload",
      "reconfigure",
    ],
    intro: [
      "Ops supports two related configuration models: build-time environment fallback for development and runtime Supabase connection storage for desktop app installs.",
      "The practical rule is straightforward. Source checkouts may still use .env.local. Packaged desktop installs are meant to use runtime configuration, usually prepared by Polterbase.",
    ],
    sections: [
      {
        title: ".env.local fallback for development",
        blocks: [
          {
            type: "paragraphs",
            values: [
              "In a source checkout, Ops can still resolve its Supabase connection from .env.local using the development fallback variables. This keeps local development simple and compatible with existing repo-based workflows.",
            ],
          },
          {
            type: "code",
            language: "dotenv",
            code: `VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=...`,
          },
        ],
      },
      {
        title: "Runtime Supabase connection for installed apps",
        blocks: [
          {
            type: "paragraphs",
            values: [
              "Installed desktop apps should not depend on source-repository env files. Instead, Ops stores a runtime Supabase connection after first launch or after the user saves a new connection in the app settings.",
              "This makes packaged deployments practical because the app can be repointed to another backend without rebuilding the desktop bundle.",
            ],
          },
        ],
      },
      {
        title: "How bootstrap payloads work",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Polterbase prepares a bootstrap payload",
                body: "The payload contains the Supabase URL, publishable key, and optional project reference for the intended deployment.",
              },
              {
                title: "Ops consumes it on first launch",
                body: "The desktop app reads the payload, persists the connection as runtime config, and removes the one-time bootstrap file.",
              },
              {
                title: "Later launches use persisted runtime config",
                body: "The app no longer depends on the bootstrap file after the connection is stored locally.",
              },
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Conceptual model",
            body: "Think of the bootstrap payload as a handoff document from the operator workflow into the installed app. It is not the long-term source of truth after first launch.",
          },
        ],
      },
      {
        title: "How to reconfigure a connection later",
        blocks: [
          {
            type: "code",
            language: "bash",
            code: `npx polterbase app configure ops --path .`,
          },
          {
            type: "paragraphs",
            values: [
              "Use configure when the Supabase project URL or publishable key changes, or when you want to refresh both development fallback data and runtime bootstrap material.",
              "End users can also adjust the runtime connection from inside the app when the connection form is exposed, but operator-managed configuration through Polterbase is the recommended path for controlled deployments.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "ops/running-ops",
    title: "Running Ops",
    summary:
      "Use the minimal Ops CLI for development only, and understand how web and desktop dev modes relate to the current workflow boundary.",
    section: "Ops",
    audience: ["Developers", "Self-Hosters / Operators"],
    keywords: ["pnpm ops dev", "web mode", "desktop mode", "minimal cli"],
    intro: [
      "The current Ops CLI is intentionally narrow. Its job is to start local development, not to own Supabase operations.",
      "That keeps the command surface small and reduces confusion about where setup, migration, configuration, and installation workflows belong.",
    ],
    sections: [
      {
        title: "The command that still matters",
        blocks: [
          {
            type: "code",
            language: "bash",
            code: `pnpm ops dev`,
          },
          {
            type: "paragraphs",
            values: [
              "This is the development entry point that remains inside Ops. Use it after the repository has already been prepared with Polterbase.",
            ],
          },
        ],
      },
      {
        title: "Web versus desktop development mode",
        blocks: [
          {
            type: "list",
            style: "bullet",
            items: [
              "Web-only mode starts the Vite-based web experience for fast UI iteration.",
              "Desktop mode starts the Tauri shell plus the web app so you can verify native desktop behavior.",
              "Desktop mode requires the Rust toolchain and Tauri prerequisites.",
            ],
          },
        ],
      },
      {
        title: "What the minimal CLI does not do anymore",
        blocks: [
          {
            type: "callout",
            tone: "warning",
            title: "Responsibilities moved to Polterbase",
            body: "Do not rely on Ops CLI commands for setup, database linking, migration management, runtime configuration, or packaged app installation. Those workflows are owned by Polterbase.",
          },
          {
            type: "commandTable",
            commands: [
              {
                command: "pnpm ops dev",
                description: "Start local development. This is the supported Ops CLI workflow.",
              },
              {
                command: "npx polterbase app setup ops --path .",
                description: "Prepare a source checkout before running the app locally.",
              },
              {
                command: "npx polterbase app configure ops --path .",
                description: "Refresh development and runtime connection material when the backend changes.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "ops/database-and-migrations",
    title: "Database and Migrations",
    summary:
      "Run linked-project workflows safely with Polterbase and understand the difference between push, lint, reset, and local-reset.",
    section: "Ops",
    audience: ["Self-Hosters / Operators", "Developers"],
    keywords: ["migrations", "push", "lint", "reset", "local reset", "linked project"],
    intro: [
      "Ops stores its database contract in Supabase migrations. The recommended way to operate that contract is through Polterbase app workflows that understand the Ops repository layout.",
      "Linking matters because migration commands target a concrete Supabase project. Destructive commands matter even more because they can wipe data if used carelessly.",
    ],
    sections: [
      {
        title: "Linked project workflows",
        blocks: [
          {
            type: "code",
            language: "bash",
            code: `npx polterbase app link ops --path .
npx polterbase app migrate ops push --path .`,
          },
          {
            type: "paragraphs",
            values: [
              "Link first when the repository is not already associated with the correct Supabase project. After that, push applies pending migrations to the linked backend.",
            ],
          },
        ],
      },
      {
        title: "Push, lint, reset, and local-reset",
        blocks: [
          {
            type: "commandTable",
            commands: [
              {
                command: "npx polterbase app migrate ops push --path .",
                description: "Apply pending migrations to the linked remote Supabase project.",
              },
              {
                command: "npx polterbase app migrate ops lint --path .",
                description: "Validate migration quality before applying changes.",
              },
              {
                command: "npx polterbase app migrate ops reset --path .",
                description: "Destructively reset the linked remote database and then reapply migrations.",
              },
              {
                command: "npx polterbase app migrate ops local-reset --path .",
                description: "Destructively reset the local Docker-based database stack used for local Supabase work.",
              },
            ],
          },
        ],
      },
      {
        title: "Safety guidance",
        blocks: [
          {
            type: "callout",
            tone: "danger",
            title: "Remote reset is destructive",
            body: "Use reset only when you intentionally want to drop user-created entities in the linked remote database. Treat it like an operator action with explicit confirmation and backups.",
          },
          {
            type: "callout",
            tone: "warning",
            title: "Local reset is still destructive",
            body: "local-reset only targets the local Docker stack, but it still destroys local state. Use it when you want a clean local baseline, not as a casual fix.",
          },
          {
            type: "steps",
            title: "Recommended sequence",
            items: [
              {
                title: "Link the project",
                body: "Confirm the repository points at the correct Supabase project before any migration work.",
              },
              {
                title: "Lint first when in doubt",
                body: "Use lint to catch obvious migration issues before pushing or resetting.",
              },
              {
                title: "Push for normal forward progress",
                body: "Use push for regular schema evolution.",
              },
              {
                title: "Reserve reset commands for intentional destructive work",
                body: "Only use remote reset or local-reset when the data loss is expected and acceptable.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "ops/troubleshooting",
    title: "Troubleshooting",
    summary:
      "Resolve the most common Ops setup, authentication, migration, and runtime configuration problems.",
    section: "Ops",
    audience: ["End Users", "Self-Hosters / Operators", "Developers"],
    keywords: [
      "troubleshooting",
      "missing config",
      "auth issues",
      "migration issues",
      "runtime config issues",
    ],
    intro: [
      "Most Ops startup issues come from one of four causes: missing Supabase configuration, broken connectivity, a repository that is not linked correctly, or a runtime payload that was never prepared.",
      "This page focuses on those recurring problems so beginners can recover quickly and technical users know where to look next.",
    ],
    sections: [
      {
        title: "Missing Supabase configuration",
        blocks: [
          {
            type: "list",
            style: "bullet",
            items: [
              "In a source checkout, make sure .env.local contains VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY.",
              "In an installed app, rerun the configuration workflow or provide the connection through the runtime form when the app asks for it.",
            ],
          },
          {
            type: "code",
            language: "bash",
            code: `npx polterbase app configure ops --path .`,
          },
        ],
      },
      {
        title: "Auth and network issues",
        blocks: [
          {
            type: "list",
            style: "bullet",
            items: [
              "Check firewall, VPN, proxy, and DNS behavior first.",
              "Confirm the Supabase project URL and publishable key are correct for the environment you intended to use.",
              "Restart the app after changing connection details so it reloads runtime configuration cleanly.",
            ],
          },
        ],
      },
      {
        title: "Migration and link issues",
        blocks: [
          {
            type: "code",
            language: "bash",
            code: `npx polterbase app link ops --path .
npx polterbase app migrate ops lint --path .
npx polterbase app migrate ops push --path .`,
          },
          {
            type: "paragraphs",
            values: [
              "If push fails, confirm the repository is linked to the right project and that you have whatever credentials the Supabase workflow needs to apply migrations.",
            ],
          },
        ],
      },
      {
        title: "Runtime configuration issues",
        blocks: [
          {
            type: "paragraphs",
            values: [
              "If the packaged app does not connect on first launch, assume the runtime bootstrap step did not complete. Re-run the configuration or installation workflow and then relaunch the app.",
            ],
          },
        ],
      },
      {
        title: "Why Polterbase is required",
        blocks: [
          {
            type: "callout",
            tone: "note",
            title: "Short answer",
            body: "Because Ops no longer treats Supabase workflows as app CLI responsibilities. Polterbase is the supported workflow layer for those jobs, and the documentation assumes that split.",
          },
        ],
      },
    ],
  },
  {
    slug: "ops/for-developers",
    title: "For Developers",
    summary:
      "See where the app code and migrations live, how runtime config works, and how to contribute safely within the current CLI boundary.",
    section: "Ops",
    audience: ["Developers"],
    keywords: ["developers", "project structure", "contributing", "runtime config", "cli boundary"],
    intro: [
      "Ops development is centered around the app code, the Supabase contract, and the runtime configuration model that lets packaged apps connect after installation.",
      "The most important architectural habit is to respect the current boundary: the Ops CLI starts development, and Polterbase owns the Supabase workflows around the app.",
    ],
    sections: [
      {
        title: "High-level project structure",
        blocks: [
          {
            type: "code",
            language: "text",
            code: `src/
  routes/            App routes and screens
  lib/
    supabase/        Client, auth, runtime config, and error handling
    db/
      repositories/  Data access layer
supabase/
  migrations/        Schema, RLS policies, and RPC functions
src-tauri/
  src/lib.rs         Desktop shell integration
cli/
  index.ts           Minimal development launcher`,
          },
          {
            type: "paragraphs",
            values: [
              "App-facing behavior lives in the React and Tauri layers. Backend-facing behavior lives in Supabase migrations, policies, and functions. Keep those responsibilities clear when you make changes.",
            ],
          },
        ],
      },
      {
        title: "Where runtime config lives",
        blocks: [
          {
            type: "list",
            style: "bullet",
            items: [
              "Source checkout fallback comes from .env.local.",
              "Runtime desktop configuration is persisted by the app after bootstrap or manual save.",
              "The one-time bootstrap payload is consumed on first launch and then deleted.",
            ],
          },
        ],
      },
      {
        title: "How to contribute safely",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Start from a linked and configured checkout",
                body: "Use Polterbase setup and link workflows before changing app or database behavior.",
              },
              {
                title: "Treat migrations as the backend contract",
                body: "If you change data requirements, make the matching migration changes instead of relying on implicit local assumptions.",
              },
              {
                title: "Test runtime config paths conceptually",
                body: "Consider both source fallback and packaged runtime configuration whenever you touch Supabase connection logic.",
              },
              {
                title: "Keep the CLI boundary intact",
                body: "Avoid adding new Supabase workflow responsibilities back into the Ops CLI unless the product direction explicitly changes.",
              },
            ],
          },
        ],
      },
      {
        title: "Current CLI boundary",
        blocks: [
          {
            type: "comparison",
            title: "Responsibility split between Ops and Polterbase",
            columns: ["Owned by Ops CLI", "Owned by Polterbase"],
            rows: [
              {
                label: "Primary role",
                values: [
                  "Start local development with pnpm ops dev.",
                  "Handle setup, link, migrate, configure, and install workflows.",
                ],
              },
              {
                label: "Typical user action",
                values: [
                  "Choose web-only or desktop dev mode.",
                  "Prepare the repository or packaged app for the intended Supabase project.",
                ],
              },
              {
                label: "What to avoid",
                values: [
                  "Growing the app CLI into a second workflow manager.",
                  "Documenting old Ops workflow commands as if they were current.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "ops/architecture",
    title: "Architecture",
    summary:
      "Review the high-level technical model behind the Ops desktop app, the Supabase backend, and the runtime configuration workflow.",
    section: "Ops",
    audience: ["Self-Hosters / Operators", "Developers"],
    keywords: ["architecture", "desktop app", "auth", "rls", "rpc", "runtime model"],
    intro: [
      "Ops is best understood as a desktop interface over a Supabase-backed application contract. The desktop bundle is important, but the real business guarantees come from the database rules, auth model, and server-side operations.",
      "Polterbase completes the picture by acting as the workflow orchestrator that prepares repositories and packaged apps for a specific backend.",
    ],
    sections: [
      {
        title: "Desktop app",
        blocks: [
          {
            type: "paragraphs",
            values: [
              "The desktop layer presents the operational interface, stores local runtime connection details, and bridges into native packaging behavior through Tauri. It should stay thin with respect to backend business rules.",
            ],
          },
        ],
      },
      {
        title: "Supabase backend",
        blocks: [
          {
            type: "list",
            style: "check",
            items: [
              "Supabase Auth handles sign-in and token issuance.",
              "Postgres stores operational data and schema.",
              "RLS policies enforce which records each role can access.",
              "RPC functions handle critical transactional workflows.",
            ],
          },
        ],
      },
      {
        title: "Auth, RLS, and RPC concepts",
        blocks: [
          {
            type: "paragraphs",
            values: [
              "Authentication proves who the user is. Row-level security decides what that user can see or change. RPC functions are where you put multi-step server-side operations that need consistency, such as inventory reservations or sale finalization.",
            ],
          },
        ],
      },
      {
        title: "Runtime configuration model",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Check for bootstrap payload",
                body: "Installed desktop launches can consume a one-time payload that contains the Supabase connection details.",
              },
              {
                title: "Persist runtime config",
                body: "After the payload is imported, the app stores the resolved connection locally for later launches.",
              },
              {
                title: "Fall back to env in development",
                body: "If runtime config is not present in a source checkout, .env.local can still supply the development connection.",
              },
            ],
          },
        ],
      },
      {
        title: "Polterbase as workflow orchestrator",
        blocks: [
          {
            type: "architecture",
            items: [
              {
                title: "Repository bootstrap",
                body: "setup and link workflows prepare the source checkout for the intended project.",
              },
              {
                title: "Migration control",
                body: "migrate commands provide explicit push, lint, reset, and local-reset operations.",
              },
              {
                title: "Runtime preparation",
                body: "configure and install write the bootstrap material used by the packaged app.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "ops/faq",
    title: "FAQ",
    summary:
      "Short answers to the recurring questions about Polterbase, Supabase, packaged apps, and configuration models.",
    section: "Ops",
    audience: ["End Users", "Self-Hosters / Operators", "Developers"],
    keywords: [
      "faq",
      "without polterbase",
      "supabase cli",
      "packaged app",
      "switch projects",
    ],
    intro: [
      "These answers are short on purpose. If you need the full operational detail, follow the linked pages in the rest of the documentation.",
    ],
    sections: [
      {
        title: "Common questions",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Can I use Ops without Polterbase?",
                body: "Not for the recommended setup, migration, configuration, and installation workflows. The current documentation assumes Polterbase for those responsibilities.",
              },
              {
                title: "Do I need Supabase CLI?",
                body: "Yes for repository and migration workflows. Polterbase is a workflow layer on top of the Supabase tooling rather than a replacement for the backend itself.",
              },
              {
                title: "Can I use a packaged app without rebuilding?",
                body: "Yes. That is exactly what the macOS install workflow is for. Use Polterbase install and runtime configuration instead of rebuilding.",
              },
              {
                title: "How do I switch to another Supabase project?",
                body: "Relink the source checkout with the link workflow and refresh configuration with configure. For packaged apps, refresh the runtime connection rather than rebuilding.",
              },
              {
                title: "What is the difference between env config and runtime config?",
                body: "env config is the development fallback used mainly in source checkouts. Runtime config is the persisted desktop connection used by installed apps.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "polterbase/getting-started",
    title: "Polterbase Getting Started",
    summary:
      "Install and use Polterbase, the interactive CLI for managing Supabase CLI workflows.",
    section: "Polterbase",
    audience: ["Self-Hosters / Operators", "Developers"],
    keywords: ["polterbase", "cli", "supabase", "install", "setup", "workflow"],
    intro: [
      "Polterbase is an optimized interactive CLI for managing Supabase CLI workflows with more speed, consistency, and discoverability. It is a productivity layer on top of the official supabase CLI.",
      "Instead of memorizing command trees, you browse one unified board, add extra args interactively, attach global flags, and pin common workflows for one-click reuse.",
    ],
    sections: [
      {
        title: "Installation",
        blocks: [
          {
            type: "code",
            title: "Run one-off without installing",
            language: "bash",
            code: `npx @polterware/polterbase@latest`,
          },
          {
            type: "code",
            title: "Install in a repository",
            language: "bash",
            code: `npm install -D @polterware/polterbase`,
          },
          {
            type: "code",
            title: "Install globally",
            language: "bash",
            code: `npm install -g @polterware/polterbase`,
          },
        ],
      },
      {
        title: "Features",
        blocks: [
          {
            type: "list",
            style: "check",
            items: [
              "Interactive command builder with guided flow for command, subcommand, and extra args.",
              "Unified command board with pinned runs, pinned commands, grouped categories, and actions.",
              "Global flags picker for common flags like --debug, --yes, and --experimental.",
              "Pinned commands and runs for one-click reuse of frequent workflows.",
              "Custom command mode for raw Supabase arguments.",
              "Built-in self-update through npm.",
              "App workflows for repository-aware setup, linking, migrations, runtime configuration, and app installation.",
            ],
          },
        ],
      },
      {
        title: "App workflows",
        blocks: [
          {
            type: "commandTable",
            commands: [
              {
                command: "polterbase app setup ops --path .",
                description:
                  "Full source-checkout bootstrap: install dependencies, collect Supabase connection data, link, push migrations, and write the runtime bootstrap payload.",
              },
              {
                command: "polterbase app link ops --path .",
                description:
                  "Link or relink the checkout to the intended Supabase project.",
              },
              {
                command: "polterbase app migrate ops push --path .",
                description:
                  "Push pending migrations to the linked Supabase project.",
              },
              {
                command: "polterbase app configure ops --path .",
                description:
                  "Refresh runtime connection payload without reinstalling the app.",
              },
              {
                command: "polterbase app install ops",
                description:
                  "Install the packaged macOS app from GitHub Releases and prepare the runtime Supabase connection.",
              },
              {
                command: "polterbase app update ops",
                description:
                  "Update an existing install to a newer release while preserving runtime configuration and settings.",
              },
            ],
          },
        ],
      },
      {
        title: "Requirements",
        blocks: [
          {
            type: "list",
            style: "bullet",
            items: [
              "Node.js >= 18.",
              "Supabase CLI installed globally or locally in the current repository.",
            ],
          },
          {
            type: "linkGrid",
            title: "References",
            links: [
              {
                label: "Polterbase on npm",
                href: "https://www.npmjs.com/package/@polterware/polterbase",
                description: "Package and installation reference.",
              },
              {
                label: "Polterbase on GitHub",
                href: "https://github.com/polterware/polterbase",
                description: "Source repository with full command details.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "pwa/getting-started",
    title: "PWA Getting Started",
    summary:
      "Install @polterware/pwa and detect install environments with browser-aware rules.",
    section: "PWA",
    audience: ["Developers"],
    keywords: ["pwa", "install", "progressive web app", "beforeinstallprompt", "manifest"],
    intro: [
      "@polterware/pwa v2 is centered around install environment detection instead of UI components. Detect the current install environment with browser-aware rules, use native install prompts when available, and show manual guides only for verified flows.",
      "The library expects the application to own the button, modal, and install UI. It provides the detection logic and guide content, not the visual components.",
    ],
    sections: [
      {
        title: "Installation",
        blocks: [
          {
            type: "code",
            language: "bash",
            code: `npm install @polterware/pwa`,
          },
          {
            type: "code",
            title: "For React integration",
            language: "bash",
            code: `npm install react react-dom`,
          },
        ],
      },
      {
        title: "Package entry points",
        blocks: [
          {
            type: "code",
            language: "ts",
            code: `import { detectInstallEnvironment, getInstallGuide } from "@polterware/pwa";
import { usePWAInstall } from "@polterware/pwa/react";
import { generateManifest, mergeManifest } from "@polterware/pwa/manifest";`,
          },
        ],
      },
      {
        title: "Quick start — Vanilla TypeScript",
        blocks: [
          {
            type: "code",
            language: "ts",
            code: `import { detectInstallEnvironment, getInstallGuide } from "@polterware/pwa";

const environment = detectInstallEnvironment();
const guide = getInstallGuide(environment.guideId, { locale: "en" });

if (environment.availability === "manual" && guide) {
  console.log(guide.title);
  console.log(guide.steps);
}`,
          },
        ],
      },
      {
        title: "Quick start — React",
        blocks: [
          {
            type: "code",
            language: "tsx",
            code: `import { usePWAInstall } from "@polterware/pwa/react";

export function InstallCallout() {
  const { canPrompt, promptInstall, status, guide } = usePWAInstall({
    locale: "en",
  });

  if (status === "installed" || status === "unsupported") return null;

  if (canPrompt) {
    return <button onClick={() => void promptInstall()}>Install app</button>;
  }

  if (!guide) return null;

  return (
    <section>
      <h2>{guide.title}</h2>
      <p>{guide.description}</p>
      <ol>
        {guide.steps.map((step) => (
          <li key={step.number}>
            <strong>{step.title}</strong>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}`,
          },
        ],
      },
    ],
  },
  {
    slug: "pwa/runtime-api",
    title: "Runtime API",
    summary:
      "Use detectInstallEnvironment and getInstallGuide to detect browser capabilities and generate manual install content.",
    section: "PWA",
    audience: ["Developers"],
    keywords: ["detectInstallEnvironment", "getInstallGuide", "runtime", "api", "browser"],
    intro: [
      "The runtime API provides two main functions: detectInstallEnvironment for browser-aware snapshots and getInstallGuide for manual install content.",
    ],
    sections: [
      {
        title: "detectInstallEnvironment()",
        description: "Returns a browser-aware snapshot of the current runtime.",
        blocks: [
          {
            type: "code",
            language: "ts",
            code: `const environment = detectInstallEnvironment();

// {
//   os: "windows",
//   browser: "chrome",
//   isInstalled: false,
//   availability: "unavailable",
//   reason: "criteria_unmet",
//   guideId: null
// }`,
          },
        ],
      },
      {
        title: "getInstallGuide(guideId, config?)",
        description: "Returns manual install content only for supported guide ids.",
        blocks: [
          {
            type: "code",
            language: "ts",
            code: `const guide = getInstallGuide("ios_share_sheet", { locale: "en" });`,
          },
        ],
      },
      {
        title: "Public types",
        blocks: [
          {
            type: "code",
            language: "ts",
            code: `type OperatingSystem = "ios" | "android" | "macos" | "windows" | "linux" | "other";
type Browser = "safari" | "chrome" | "arc" | "edge" | "firefox" | "samsungInternet" | "other";
type InstallAvailability = "native" | "manual" | "unsupported" | "unavailable";
type InstallGuideId = "ios_share_sheet" | "safari_add_to_dock";`,
          },
        ],
      },
    ],
  },
  {
    slug: "pwa/react-hook",
    title: "React Hook",
    summary:
      "Use the usePWAInstall hook to combine environment detection, deferred prompt lifecycle, and guide lookup in React.",
    section: "PWA",
    audience: ["Developers"],
    keywords: ["usePWAInstall", "react", "hook", "beforeinstallprompt", "appinstalled"],
    intro: [
      "The usePWAInstall hook combines environment detection, deferred prompt lifecycle, and guide lookup into a single React hook.",
    ],
    sections: [
      {
        title: "usePWAInstall(options?)",
        blocks: [
          {
            type: "code",
            language: "ts",
            code: `const {
  environment,
  canPrompt,
  promptInstall,
  status,
  guide,
} = usePWAInstall();`,
          },
          {
            type: "list",
            title: "What the hook does",
            style: "check",
            items: [
              "Captures beforeinstallprompt events.",
              "Exposes canPrompt to check if native install is available.",
              "Runs promptInstall() only when a deferred prompt exists.",
              "Reacts to appinstalled events.",
              "Keeps manual guides and native prompts mutually exclusive.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "pwa/manifest",
    title: "Manifest Module",
    summary:
      "Use generateManifest and mergeManifest to create and update web app manifests programmatically.",
    section: "PWA",
    audience: ["Developers"],
    keywords: ["manifest", "generateManifest", "mergeManifest", "web app manifest", "icons"],
    intro: [
      "The manifest helpers live in @polterware/pwa/manifest and provide programmatic manifest generation and merging.",
    ],
    sections: [
      {
        title: "generateManifest",
        blocks: [
          {
            type: "code",
            language: "ts",
            code: `import { generateManifest, mergeManifest } from "@polterware/pwa/manifest";

const manifest = generateManifest({
  name: "Polterware",
  short_name: "Polter",
  description: "Headless PWA install flow",
  start_url: "/",
  icons: [
    {
      src: "/icons/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
});`,
          },
        ],
      },
    ],
  },
  {
    slug: "pwa/cli",
    title: "CLI",
    summary:
      "Use npx @polterware/pwa init to create or update manifest.json interactively.",
    section: "PWA",
    audience: ["Developers"],
    keywords: ["cli", "init", "manifest", "npx", "interactive"],
    intro: [
      "The CLI provides an interactive way to create or update your web app manifest.",
    ],
    sections: [
      {
        title: "Usage",
        blocks: [
          {
            type: "code",
            title: "Create or update manifest.json",
            language: "bash",
            code: `npx @polterware/pwa init`,
          },
          {
            type: "code",
            title: "Custom manifest path",
            language: "bash",
            code: `npx @polterware/pwa init --manifest-path public/manifest.json`,
          },
        ],
      },
    ],
  },
  {
    slug: "pwa/browser-matrix",
    title: "Browser Matrix",
    summary:
      "See which browsers and operating systems support native install prompts, manual guides, or are unsupported.",
    section: "PWA",
    audience: ["Developers"],
    keywords: ["browser", "matrix", "support", "ios", "chrome", "safari", "edge", "samsung"],
    intro: [
      "The library only generates install instructions for verified browser and OS combinations. Unverified environments return unsupported rather than guessing.",
    ],
    sections: [
      {
        title: "Support matrix",
        blocks: [
          {
            type: "commandTable",
            title: "Browser / OS support",
            commands: [
              {
                command: "Safari on iOS",
                description: "Manual guide — uses ios_share_sheet.",
              },
              {
                command: "Safari on macOS",
                description: "Manual guide — uses safari_add_to_dock.",
              },
              {
                command: "Chrome desktop",
                description: "Native prompt — available only after beforeinstallprompt.",
              },
              {
                command: "Edge desktop",
                description: "Native prompt — available only after beforeinstallprompt.",
              },
              {
                command: "Samsung Internet",
                description: "Native prompt — available only after beforeinstallprompt.",
              },
              {
                command: "Arc desktop",
                description: "Unsupported — no manual fallback is generated.",
              },
              {
                command: "Firefox / unknown browsers",
                description: "Unsupported — no guessed instructions.",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const docsNavGroups = [
  {
    title: "polterware/kit",
    items: ["", "introduction"],
  },
  {
    title: "Ops",
    items: [
      "ops/getting-started",
      "ops/installation",
      "ops/polterbase",
      "ops/configuration",
      "ops/running-ops",
      "ops/database-and-migrations",
      "ops/troubleshooting",
      "ops/for-developers",
      "ops/architecture",
      "ops/faq",
    ],
  },
  {
    title: "Polterbase",
    items: ["polterbase/getting-started"],
  },
  {
    title: "PWA",
    items: [
      "pwa/getting-started",
      "pwa/runtime-api",
      "pwa/react-hook",
      "pwa/manifest",
      "pwa/cli",
      "pwa/browser-matrix",
    ],
  },
] as const;

export type DocsProduct = {
  id: string;
  label: string;
  section: string;
  basePath: string;
  entrySlug: string;
  description: string;
};

export const docsProducts: DocsProduct[] = [
  { id: "", label: "polterware/kit", section: "polterware/kit", basePath: "", entrySlug: "", description: "Open-source tools for business operations and modern web apps." },
  { id: "ops", label: "Ops", section: "Ops", basePath: "/ops", entrySlug: "ops/getting-started", description: "Open-source desktop business manager. Product catalog, inventory, orders, sales, payments, and analytics in one app powered by Supabase." },
  { id: "polterbase", label: "Polterbase", section: "Polterbase", basePath: "/polterbase", entrySlug: "polterbase/getting-started", description: "CLI workflow manager for Supabase operations. Setup, linking, migrations, runtime configuration, and packaged app installation." },
  { id: "pwa", label: "PWA", section: "PWA", basePath: "/pwa", entrySlug: "pwa/getting-started", description: "Headless PWA install utilities and manifest tools. Detect install environments, show manual guides, and use React hooks." },
];

export function getActiveProduct(pathname: string): DocsProduct {
  return (
    docsProducts.find((p) => p.id !== "" && (pathname === p.basePath || pathname.startsWith(p.basePath + "/"))) ??
    docsProducts[0]
  );
}

export function getNavGroupsForProduct(product: DocsProduct) {
  return docsNavGroups.filter((group) => group.title === product.section);
}

export function getDocHref(slug: string): string {
  const product = docsProducts.find((p) => p.id && slug.startsWith(p.id + "/"));
  if (product) {
    const subSlug = slug.slice(product.id.length + 1);
    return `${product.basePath}/docs/${subSlug}`;
  }
  return slug ? `/docs/${slug}` : "/docs";
}

export function getProductLandingHref(product: DocsProduct): string {
  return product.basePath || "/";
}

export function getProductDocsHref(product: DocsProduct): string {
  return getDocHref(product.entrySlug);
}

export function getDocBySlug(slugSegments?: string[]): DocPage | null {
  if (!slugSegments || slugSegments.length === 0) {
    return docsPages[0] ?? null;
  }

  const joined = slugSegments.join("/");
  return docsPages.find((page) => page.slug === joined) ?? null;
}

export function getOrderedDocsPages(): DocPage[] {
  return docsPages;
}

export function getPrevNextDocs(
  slugSegments?: string[],
): { previous: DocPage | null; next: DocPage | null } {
  const current = getDocBySlug(slugSegments);

  if (!current) {
    return { previous: null, next: null };
  }

  const product = docsProducts.find((p) => p.section === current.section) ?? docsProducts[0];
  const groups = getNavGroupsForProduct(product);
  const productSlugs = groups.flatMap((g) => g.items);
  const productPages = productSlugs
    .map((slug) => docsPages.find((p) => p.slug === slug))
    .filter((p): p is DocPage => p != null);

  const index = productPages.findIndex((page) => page.slug === current.slug);

  return {
    previous: index > 0 ? productPages[index - 1] : null,
    next: index >= 0 && index < productPages.length - 1 ? productPages[index + 1] : null,
  };
}

export function toAnchorId(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
