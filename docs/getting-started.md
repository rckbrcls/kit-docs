# Getting Started

## Requirements

- Node.js.
- pnpm or another package manager compatible with the checked-in lockfile.

## Installation

From the repository root:

```bash
pnpm install
```

The package has a `postinstall` script that runs Fumadocs MDX generation.

## Running Locally

The package script defines:

```bash
pnpm dev
```

## Verification Scripts

The package scripts define:

```bash
pnpm types:check
pnpm build
```

## Notes

- This documentation pass did not run install, dev, build, or type-check commands.
- Keep public tool docs aligned with the live implementation repositories.
