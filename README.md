# kit-docs

> **Status:** Active
> This project is currently maintained as a documentation site for Polterware tools.

Documentation hub for Polterware tools. It currently documents Polter and `@polterware/pwa` through a Fumadocs-powered Next.js site.

## Summary

- [What it is](#what-it-is)
- [Goals](#goals)
- [Documentation areas](#documentation-areas)
- [Project map](#project-map)
- [Current state](#current-state)
- [Working notes](#working-notes)

## What it is

`kit-docs` is the public docs site for small Polterware developer tools. It provides task-focused pages for installation, configuration, runtime behavior, browser support, CLI usage, and troubleshooting.

## Goals

- Give Polterware tools one shared documentation surface.
- Keep docs practical and navigable by product area.
- Separate product documentation from implementation repositories.
- Make it easier to ship small tools without repeating setup guides in every README.

## Documentation areas

- `content/docs/polter`: command board, pipelines, process management, configuration, MCP, CI/CD, tool status, and troubleshooting.
- `content/docs/pwa`: installation, runtime API, React hook, manifest helpers, CLI usage, and browser support matrix.

## Project map

```text
kit-docs/
├── content/docs/     # MDX documentation grouped by tool
├── src/app/          # Next.js routes for home, docs, and search
├── src/lib/          # Fumadocs source and shared layout configuration
├── source.config.ts  # MDX/content configuration
└── package.json
```

## Current state

The site is a documentation shell with active content for Polter and PWA. Some Polter docs still describe the older CLI/TUI direction, so check the current Polter repository before making architectural claims.

## Working notes

- Keep pages short, specific, and command-oriented.
- Update docs when public package behavior changes.
- Treat `content/docs/meta.json` and per-tool `meta.json` files as the navigation source.
