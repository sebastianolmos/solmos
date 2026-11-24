---
title: Chucao Web · Round-based speaking practice
date: 2026-01-01
weight: 10
featureImage: access_view.png
liveurl: https://chucao.solmos.dev/
summary: Organize concepts into private lists, practice explaining them aloud, and keep track of round progress and saved sessions.
tags: [Web Development, Data Persistence, React, TypeScript, PostgreSQL, Supabase]
showTaxonomies: true
showDate: true
---

[Try Chucao Web](https://chucao.solmos.dev/) · [View the code on GitHub](https://github.com/sebastianolmos/chucao-web)

## Context and contribution

I created Chucao Web as an evolution of [Chucao Desktop]({{< relref "chucao-desktop" >}}), my Windows application, which stored lists and progress in local CSV files. The goal was to bring a simple study routine to the browser: prepare a list of topics and practice explaining them in random order while tracking which ones have already appeared. In the web version, I built this flow with Google sign-in, account-private data, and a history of practices and rounds.

## How it works

After signing in, you create a list, add concepts, and choose **Draw concept**. The result is marked as seen as soon as it appears. From there, you can start practicing and reveal the description if you want to refer to it. When the timer ends, you can add a note and rating, save the session, and find it in **History**.

**The draw and progress are saved together.** PostgreSQL verifies that the list belongs to the authenticated account and locks its row while it selects a pending concept, marks it as seen, and records its position in the round. Each request carries a unique identifier. If the server records the draw but the response is lost, the client can resend the same identifier and retrieve the result without consuming another concept. Seen concepts stay out of the draw until they are returned to pending or a new round begins.

**The animation follows the timer.** The countdown is calculated from elapsed time and preserves the remaining time when paused. If the browser delays an update, the counter catches up with the clock on the next one. That progress also moves the chucao through the forest, using flight sprites and illustrations I created for the scene. The reduced-motion option keeps the counter and uses a static scene.

## Technologies

TypeScript, React, Vite, Mantine, TanStack Query, i18next, Supabase Auth with Google OAuth, PostgreSQL with row-level security policies, GitHub Actions, and Cloudflare Pages.

## Outcome and how to try it

The application lets you complete the study cycle in the browser and return later to each round's progress and saved practices. The interface is available in Spanish and English.

- **Without an account.** Open **Try timer**, select one minute, and start. The counter stops when paused and resumes from the remaining time.
- **With an account.** Create a list with two concepts, draw one, complete a practice session, and save it. Reload the page and open **History** to see the saved session. Return to the list and draw again to get the other pending concept.

The active timer lives on the page. Reloading loses the current countdown.
