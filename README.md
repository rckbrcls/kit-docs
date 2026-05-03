# kit-docs

> **Status:** Active
> This project is currently maintained as a documentation site for Polterware tools.

Documentation hub for Polterware tools. It currently documents Polter and `@polterware/pwa` through a Fumadocs-powered Next.js site.

## Summary

- Fumadocs-powered Next.js documentation hub for Polterware developer tools.
- Solves shared docs for Polter and `@polterware/pwa`, including installation, configuration, runtime behavior, CLI usage, browser support, and troubleshooting.
- Main stack: Next.js, Fumadocs, MDX content, `source.config.ts`, TypeScript, and content metadata files.
- Current status: active docs shell, with some Polter pages potentially describing older CLI/TUI direction.
- Technical value: separates public tool documentation from implementation repositories.

## Overview

`kit-docs` is the public docs site for small Polterware developer tools. It provides task-focused pages for installation, configuration, runtime behavior, browser support, CLI usage, and troubleshooting.

## Motivation

- Give Polterware tools one shared documentation surface.
- Keep docs practical and navigable by product area.
- Separate product documentation from implementation repositories.
- Make it easier to ship small tools without repeating setup guides in every README.

## Features

- `content/docs/polter`: command board, pipelines, process management, configuration, MCP, CI/CD, tool status, and troubleshooting.
- `content/docs/pwa`: installation, runtime API, React hook, manifest helpers, CLI usage, and browser support matrix.

## Project Structure

```text
kit-docs/
├── content/docs/     # MDX documentation grouped by tool
├── src/app/          # Next.js routes for home, docs, and search
├── src/lib/          # Fumadocs source and shared layout configuration
├── source.config.ts  # MDX/content configuration
└── package.json
```

## Current Status

The site is a documentation shell with active content for Polter and PWA. Some Polter docs still describe the older CLI/TUI direction, so check the current Polter repository before making architectural claims.

## Known Limitations

- Keep pages short, specific, and command-oriented.
- Update docs when public package behavior changes.
- Treat `content/docs/meta.json` and per-tool `meta.json` files as the navigation source.
