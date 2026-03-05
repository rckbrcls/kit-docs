# Uru Docs

Documentation website for Uru, the open-source desktop business manager powered by Supabase.

## What is inside

- Marketing landing page for product positioning and audience entry points
- Documentation home with guided paths for end users, operators, and developers
- Dynamic docs route backed by centralized content data in `content/docs.ts`
- Reusable documentation UI components for callouts, code panels, sidebar navigation, search, and section rendering

## Content model

- `content/docs.ts` is the source of truth for documentation pages, navigation groups, audience pathways, and search keywords.
- `app/page.tsx` contains the landing page.
- `app/docs/[[...slug]]/page.tsx` renders the documentation pages from the shared content model.
- `components/site/*` contains the reusable product-site and documentation components.

## Scope

This site documents the current Uru workflow boundary:

- `pnpm uru dev` for local development startup
- Polterbase for setup, linking, migration, configuration, and packaged app installation

Polterbase references included in the documentation:

- npm: https://www.npmjs.com/package/@polterware/polterbase
- GitHub: https://github.com/polterware/polterbase
