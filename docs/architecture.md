# Architecture

## Overview

`kit-docs` is a Fumadocs-powered Next.js documentation site for Polterware developer tools. It separates public docs content under `content/docs/` from the Next.js app shell and source configuration.

## Components

- `content/docs/`: MDX content grouped by tool.
- `src/app/`: Next.js routes for home, docs, and search.
- `src/lib/`: Fumadocs source and shared layout configuration.
- `source.config.ts`: MDX/content source configuration.
- `next.config.mjs`: Fumadocs MDX integration and docs rewrites.

## Goals

- Keep docs practical and command-oriented.
- Avoid duplicating full implementation docs across tool repositories.
- Keep navigation controlled by metadata files.

## Trade-offs

- A central docs site makes cross-tool docs easier to browse.
- It can drift from implementation repositories, so tool docs must be updated when package behavior changes.
