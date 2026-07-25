+++
title = "Agari"
description = "A complete Riichi Mahjong game built from scratch in Rust and Bevy, on Steam for Windows, macOS, and Linux."
date = 2026-06-11

[extra]
feature_image = "agari_table.jpg"
subtitle = "Riichi Mahjong // Rust + Bevy // Out Now on Steam"

[[extra.gallery]]
file = "agari_01_win_overlay.jpg"
caption = "Win overlay with the yaku breakdown, han, fu, and scored value"

[[extra.gallery]]
file = "agari_02_daily_wall.jpg"
caption = "Daily Wall, the same wall for every player, every day"

[[extra.gallery]]
file = "agari_03_replay.jpg"
caption = "Replay of any recorded round, all four hands face up"

[[extra.gallery]]
file = "agari_04_statistics.jpg"
caption = "Statistics for han distribution and yaku collected"

[[extra.gallery]]
file = "agari_05_online_lobby.jpg"
caption = "Private online lobby with a room code and per-seat AI styles"

[[extra.gallery]]
file = "agari_06_main_menu.jpg"
caption = "Main menu, with a live cinematic yakuman display"
+++

*Released June 2026. Still in active development.*

A standalone Riichi Mahjong game built from the ground up in Rust with the [Bevy](https://bevyengine.org/) game engine, and shipped on Steam for Windows, macOS, and Linux (Steam Deck included). Buy it once, own it, play it offline. No gacha, no battle passes, no premium currency, no account required.

<div class="cta-row">
  <a class="btn" href="https://store.steampowered.com/app/4541910/Agari__Riichi_Mahjong/" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z"/></svg>
    Get it on Steam
  </a>
  <span class="cta-note">also at <a href="https://agari.app">agari.app</a></span>
</div>

<div class="stat-grid">
  <div class="stat"><span class="stat-value">41</span><span class="stat-label">yaku, every yakuman</span></div>
  <div class="stat"><span class="stat-value">4</span><span class="stat-label">AI play styles</span></div>
  <div class="stat"><span class="stat-value">3</span><span class="stat-label">ways to play</span></div>
  <div class="stat"><span class="stat-value">2</span><span class="stat-label">languages, EN and JP</span></div>
  <div class="stat"><span class="stat-value">1</span><span class="stat-label">wall shared worldwide, daily</span></div>
  <div class="stat"><span class="stat-value">0</span><span class="stat-label">accounts required</span></div>
</div>

## Why Build It

My wife grew up playing riichi in Japan, and once she taught me we started playing with real tiles whenever we could get four people to a table. Online was the fallback for the rest of the time, and the existing platforms never quite worked for us, between weak AI with no control over play style, anime-styled presentation that was a real barrier to inviting friends, and a hard requirement on an account and a live internet connection. I wanted a clean table, configurable opponents, private rooms, and a game that works on an airplane.

## Three Ways to Play

**Singleplayer.** Fully offline against three AI opponents, East-only (tonpuusen) or full hanchan. No account, no connection.

**Private online multiplayer.** Two to four players with AI filling any open seats. Share a room code and sit down. No matchmaking, no accounts. Drops are survivable. A disconnected seat converts to AI mid-round so the table keeps moving, and the player gets their seat back at the next round boundary when they reconnect.

**Daily Wall.** One round a day, the same wall dealt to every player worldwide, derived deterministically from the date. Resets at UTC midnight. Wordle, for mahjong.

## Vertical Integration

The game runs on [agari](https://github.com/agari-industries/agari), the open-source Riichi scoring library I wrote first and released as a Rust crate. It handles the entire rule engine, from hand decomposition and yaku detection through fu calculation, shanten and ukeire analysis, and wait recognition, cross-validated against established scoring engines across millions of simulated hands. The game client consumes it directly. There is no third-party game logic anywhere in the stack, so bugs get fixed at the source and anyone can check the math.

The full ruleset ships, including all 41 yaku, every yakuman, han and fu scoring, pao, furiten, ippatsu, rinshan kaihou, haitei, chankan, nagashi mangan, abortive draws, and double and triple ron.

## The Table

The centerpiece is a 3D table shot with a telephoto-style camera, a narrow 38° vertical field of view that compresses depth the way a long lens does, so the far player's tiles read at nearly the same size as your own. Hand tiles render as a 2D UI layer to stay crisp at any window size, while discard ponds and called melds stay 3D so they read as physical objects. The central compass keeps scores, round, seat winds, riichi sticks, and remaining tile count in one glanceable place.

Decor is configurable, with multiple table surfaces (felt, fabric, leather), several tile face designs, and color swatches down to black tiles.

## AI Opponents

Agari's AI system combines statistical models with hand-crafted heuristics, drawing on published mahjong research and refined through self-play.

At the table that means opponents who weigh tile acceptance, shanten distance, five-block theory, and call and discard decisions, all accounting for visible information across ponds, melds, and dora indicators. Tuned parameters drive four play styles (Offensive, Balanced, Defensive, and Menzen), settable per seat, all at once, or randomized across the table, with an overall difficulty setting on top.

## Everything Else In the Box

- **Match history and replay.** Every match recorded locally, with a per-round score ledger down to yaku, han, fu, and dora, and full replay on the 3D table with all four hands face up
- **Tenpai helper** with live waits and per-tile ukeire counts, on when you want it
- **Statistics.** First-place rate, deal-in rate, yaku frequency, han distribution
- **Voice acting.** Real human performances in Japanese for every call, with distinct voice characters you assign to yourself and the AI seats
- **Riichi music** that kicks in on declaration, plus per-channel volume for menu music, voice, and effects
- **Full English and Japanese localization**
- **Seeded singleplayer matches.** Replay the exact same wall and AI decisions from a seed
- **Player reactions** in multiplayer, emoji and voice clips landing on the opposing player's avatar

## Design Philosophy

- **Gameplay first.** No gacha, no loot boxes, no premium currency. Every feature ships included.
- **Bound to roots.** Standard Japanese Riichi rules, no novelty modes diluting the core game.
- **Offline by default.** The internet is optional, and so is an account.
- **Performant.** Rust and Bevy, with rendering tuned to sip power for quieter machines and longer battery life on laptops and the Steam Deck.
- **Simple.** A clean interface that stays out of the way. The table, the tiles, and your decisions.

## Tech

- **Language:** Rust (Edition 2024)
- **Engine:** Bevy 0.18
- **Scoring:** [agari](https://github.com/agari-industries/agari) v0.24 (custom open-source library)
- **Architecture:** Entity Component System (ECS), multi-crate workspace
- **Multiplayer:** host-authoritative lockstep over a self-hosted relay, with rejoin support
- **Platforms:** Windows, macOS, Linux (Steam Deck native), with iOS and Android planned
- **Build:** Cargo, with Xcode for the iOS target

## More

- [Agari on Steam](https://store.steampowered.com/app/4541910/Agari__Riichi_Mahjong/)
- [agari.app](https://agari.app), the game site, with ruleset reference and roadmap
- [Building Agari](https://agari.app/devlog/), a devlog on the engine choice, the telephoto table, multiplayer rejoin, and the shanten bug that only showed up once the game existed
- [github.com/agari-industries/agari](https://github.com/agari-industries/agari), the open-source scoring library
