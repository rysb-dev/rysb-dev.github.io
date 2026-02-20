+++
title = "Agari Game — Riichi Mahjong"
description = "A cross-platform Riichi Mahjong game built from scratch in Rust and Bevy. Work in progress."
date = 2025-06-01

[extra]
feature_image = "agari-game-screenshot-cropped.png"
subtitle = "Rust + Bevy // Cross-Platform // Work in Progress"
+++

*Work in progress — actively in development.*

A standalone Riichi Mahjong game built from the ground up in Rust with the [Bevy](https://bevyengine.org/) game engine. The goal is a clean, gameplay-focused mahjong client that runs everywhere — macOS, Linux, Windows, iOS, Android, and the browser — with no compromises, no in-app purchases, and everything included out of the box.

## Vertical Integration

The game is built on [agari](https://github.com/rysb-dev/agari), a Riichi Mahjong scoring library I wrote from scratch and validated against roughly one million [Tenhou](https://tenhou.net/) game logs. That library handles tile decomposition, yaku detection, shanten and ukeire calculation, and scoring — the entire rule engine. The game client consumes it directly. There's no third-party game logic dependency anywhere in the stack.

This means bugs get fixed at the source, features like the tenpai helper are powered by the same proven shanten/ukeire calculations used in validation, and the whole system evolves as one unit.

## What's In the Box

The current build is a fully playable East-round hanchan against three AI opponents, with:

- **3D table** with a tilted perspective, procedural felt texture, wood rim, and tile artwork
- **Full call support** — Chi, Pon, open/closed/added Kan, Riichi, and Double Riichi
- **Chiitoitsu and Kokushi** win detection alongside standard hand decomposition
- **Dora, ura-dora, and akadora** scoring
- **Central compass** showing live scores, seat winds, round info, riichi sticks, and remaining tiles
- **Tenpai helper** with per-tile ukeire counts overlaid on the hand
- **Animations** — round start cinematic, discard fly-in, Ron spotlight, Tsumo slam, opponent hand reveal, animated point exchanges
- **Voice callouts** for Chi, Pon, Kan, Riichi, Ron, and Tsumo with per-player voice variants via VOICEVOX
- **Sound effects and BGM** with individual toggles
- **Startup menu** with player name, AI speed, discard mode, sound/voice configuration

## AI Opponents

The current AI uses shanten minimization and ukeire maximization to make discard, call, and riichi decisions. It accounts for all visible tiles (discard ponds, open melds, dora indicators) when evaluating hand efficiency.

A custom ML model is planned — trained on a decade-plus archive of competitive mahjong game logs. The intent is to use it both as AI opponents with realistic play styles and as an optional informed decision aid for the player during live games.

## Platform Targets

The game compiles natively for desktop (macOS, Linux, Windows) and iOS, and runs in the browser via WASM and WebGL 2. Android is a target. The WASM build uses batched entity spawning to prevent the browser from locking up during loading, and all audio is OGG for cross-platform compatibility.

No platform left behind.

## Design Philosophy

- **Gameplay first.** No gacha mechanics, no loot boxes, no premium currency. Every feature ships included.
- **Bound to roots.** Standard Japanese Riichi Mahjong rules. No novelty modes diluting the core game.
- **Performant.** Rust and Bevy — an ECS architecture that's efficient by design. The game is responsive on constrained hardware including phones and browsers.
- **Simple.** A clean interface that stays out of the way. The table, the tiles, and your decisions.

## Tech

- **Language:** Rust (Edition 2024)
- **Engine:** Bevy 0.18
- **Scoring:** [agari](https://github.com/rysb-dev/agari) (custom library)
- **Architecture:** Entity Component System (ECS), multi-crate workspace
- **Platforms:** macOS, Linux, Windows, iOS, WASM (Android planned)
- **Audio:** VOICEVOX Nemo voice synthesis, OGG throughout
- **Build:** Cargo (native), Trunk (WASM), Xcode (iOS)
