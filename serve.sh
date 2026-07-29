#!/usr/bin/env bash
set -euo pipefail

DIR="$(dirname "$0")"

exec nix run nixpkgs#zola -- --root "$DIR" serve "$@"
