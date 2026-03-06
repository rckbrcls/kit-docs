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
- `public/install.sh` as the public macOS installer entrypoint for packaged releases

## Site origin

- Copy `.env.example` to `.env.local` when you need the copyable install command to point at a non-default domain.
- `NEXT_PUBLIC_SITE_ORIGIN` defaults to `https://rckbrcls.github.io/uru-docs`, which keeps the static installer compatible with GitHub Pages.

Polterbase references included in the documentation:

- npm: https://www.npmjs.com/package/@polterware/polterbase
- GitHub: https://github.com/polterware/polterbase
