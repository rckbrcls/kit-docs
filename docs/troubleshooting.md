# Troubleshooting

## Docs content does not appear

Checks:

- Confirm `content/docs/meta.json` and per-tool metadata files.
- Confirm `source.config.ts`.
- Run the package's type-generation workflow when command execution is allowed.

## Type generation fails

Checks:

- Inspect MDX syntax in changed docs.
- Check Fumadocs package versions.
- Confirm `postinstall` completed successfully.

## Public docs are stale

Checks:

- Compare content pages with the current implementation repository.
- Update Polter docs when desktop/core direction changes.
- Update PWA docs when runtime, React adapter, manifest, or CLI behavior changes.
