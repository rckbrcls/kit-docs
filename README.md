# polterware/kit

Documentation and marketing site for the Polterware ecosystem: **Ops** (desktop business manager), **Polterbase** (CLI workflow manager for Supabase), and **PWA** (headless PWA install utilities).

## What is inside

- Marketing landing page with product positioning for the three projects
- Documentation home with guided paths for end users, operators, and developers
- Dynamic docs route backed by centralized content data in `content/docs.ts`
- Reusable documentation UI components for callouts, code panels, sidebar navigation, search, and section rendering

## Content model

- `content/docs.ts` is the source of truth for documentation pages, navigation groups, audience pathways, and search keywords.
- `app/page.tsx` contains the landing page.
- `app/docs/[[...slug]]/page.tsx` renders the documentation pages from the shared content model.
- `components/site/*` contains the reusable product-site and documentation components.

## Projects

- **Ops** — Open-source desktop business manager powered by Supabase
- **Polterbase** — Interactive CLI for managing Supabase CLI workflows
- **PWA** — Headless PWA install utilities and manifest tools
