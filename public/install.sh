#!/bin/bash

set -euo pipefail

if [[ "$(uname -s)" != "Darwin" ]]; then
  echo "This installer currently supports macOS only."
  exit 1
fi

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js 18 or newer is required."
  exit 1
fi

if ! node -e 'process.exit(Number(process.versions.node.split(".")[0]) >= 18 ? 0 : 1)' >/dev/null 2>&1; then
  echo "Node.js 18 or newer is required."
  exit 1
fi

if ! command -v npx >/dev/null 2>&1; then
  echo "npx is required."
  exit 1
fi

exec npx @polterware/polterbase@latest app install uru --platform macos "$@"
