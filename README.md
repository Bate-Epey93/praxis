# Praxis

An offline-first PWA for intermediate → senior practice across **copywriting, content strategy, CRO, go-to-market, strategic communications, and customer service**.

It is a practice environment, not a reader. You pick the role you are applying for, it builds the plan, you write
under a clock against real rubrics, and the artefacts you produce export as documents you can send to a hiring manager.

Live: **https://bate-epey93.github.io/praxis/**

Built as a merge and large expansion of two earlier study apps (a Puffy CRO interview-prep app and the GTM Writer's OS), rebuilt as one dependency-free progressive web app.

## What's in it

**18 study tracks**, grouped into seven phases:

| # | Track | Phase |
|---|---|---|
| 01 | Market Psychology & the Architecture of Desire | Foundations |
| 02 | Jobs To Be Done & Demand Discovery | Foundations |
| 03 | Audience-First Framing & Voice of Customer | Foundations |
| 04 | Positioning, Category & Narrative | Strategy craft |
| 05 | Messaging Architecture & Voice | Strategy craft |
| 06 | Copywriting Craft | Strategy craft |
| 07 | CRO & Conversion Copy | Conversion |
| 08 | Experimentation & A/B Testing | Conversion |
| 09 | Content Strategy & Editorial Systems | Systems |
| 10 | Search, GEO & AI Discovery | Systems |
| 11 | Lifecycle, Email & Retention | Conversion |
| 12 | Go-to-Market Strategy | Go-to-market |
| 13 | Data, Analytics & Measurement | Systems |
| 14 | Content UX & Information Design | Systems |
| 15 | AI Orchestration & Prompt Systems | Go-to-market |
| 18 | Strategic Communications | Strategic comms |
| 16 | Customer Service & CX Craft | Service & career |
| 17 | Career as Product | Service & career |

Each track carries: study sections with plain-English explainers, good/bad examples, benchmark data, real-world cases, senior-level pitfalls, five-minute drills, a junior/competent/senior rubric, per-section notes, and one **portfolio artefact** with step-by-step build guidance.

Track 09 includes a dedicated **Writing for SEO and AEO** section built from Google's own documentation and rater guidelines: the interpretation ladder, title-link rewrite triggers, headings as argument, query fan-out coverage without padding, answer-first extractable passages, measured snippet display budgets, the passage-level edits with measured citation lift, and the cannibalisation / refresh / consolidate / delete ladder.

Track 18 (**Strategic Communications**) covers corporate and executive narrative with investor-disclosure guardrails, internal comms and change, stakeholders and reputation, crisis and issues management, media relations and spokesperson craft, measurement against AMEC and Barcelona Principles V4.0, and comms operations including AI disclosure and synthetic-media response.

## The practice engine

| Surface | What it does |
|---|---|
| **Today** | Assembles the day: the next thing in your plan, one timed drill, cards due, weak spots, the artefact in progress, and one interview question to answer out loud. |
| **Prep paths** | Nine role families (copywriter, content strategist, content SEO, PMM, lifecycle, CRO, support specialist, support lead, communications) × three time budgets. Generates an ordered, checkable plan: what to read, write, rehearse. |
| **Practice** | 65 timed writing drills and 8 full take-home simulations. Simulations ship with a company, a scenario, materials to reason from, a deliverable, a countdown, and a weighted rubric you score yourself against. |
| **Portfolio** | Every artefact has a workspace. Write it in the app, export it as Markdown or as a clean printable document. |
| **JD mapper** | Paste a job advert. It matches the language against a 40-competency taxonomy (470 job-description phrases), shows coverage from what you have actually studied and built, and splits requirements into can-evidence / thin / genuine gaps. |
| **Readiness** | A weighted score per role family, biased toward things a hiring manager can see: must-know sections, finished artefacts, simulations completed. |
| **Weak spots** | Questions you answered wrongly resurface until you get them right. |
| **Second opinion** | Simulations, drills and artefacts can be marked by an outside reviewer against the same rubric, then shown next to your own score. Three routes: copy a review pack into any AI chat and paste the reply back (sends nothing from the app), review in-app with your own Anthropic API key (one disclosed request), or skip it. |
| **Rehearsal** | Interview questions on a 90-second clock, no notes, self-graded. Shaky answers come back first. |

**Workbench tools**

- Framework index — 50+ frameworks with steps and the situation each is for
- Swipe & templates — headlines, subject lines, objection rebuttals, support macros, briefs, battle cards, QA scorecards
- Prompt library — every production prompt and working document, copyable
- Calculators — conversion/RPV, A/B sample size, funnel model, unit economics, content ROI, support capacity
- Flashcards — Leitner-box spaced repetition over the full glossary
- Mixed exam — 25 random questions under interview conditions
- Interview bank — role-targeted questions with answer scaffolds, plus timed out-loud rehearsal
- Glossary — 200+ terms
- Progress & notes — per-track progress, work produced (words written, artefacts finished, drill runs, simulations), notes and portfolio export, full data export/import, backup age, and a manual update check
- Update toast — a new build prompts on device with **Update now / Later**, checked on resume, on reconnect and on a background interval

## Design

- **Liquid glass** surfaces: translucent panels with backdrop blur and saturation, a thin specular top edge, and soft depth shadows, layered over an ink base with colour blooms so the blur has something to refract. Full light and dark palettes.
- **Ensō brush motif** throughout — logo mark, section rules, phase markers and completion checks are real brush geometry generated by the [EnsoKit](../ensokit) engine (`tools/make-brush.mjs` → `data/brush.js`), so it matches the rest of the Enso design system.
- **Mobile-native behaviour**: drawer navigation, a glass bottom tab bar, swipe left/right between sections, fluid `clamp()` typography, safe-area insets, 44px+ touch targets, horizontally scrollable tables and code blocks, and stacking grids down to 360px.

## Technical notes

- No build step, no dependencies, no framework. ES modules, plain DOM.
- No network calls at runtime: system font stack, no CDN, no analytics, no tracking.
- All state (notes, written artefacts, drill runs, simulation submissions, plans, quiz scores, flashcard boxes) is in `localStorage` on the device. Export from **Progress & notes**.
- **The only network call the app can make** is the optional review request, to the Anthropic API, with a key you supply, when you press the button. The key lives in this browser, is stripped from exported backups, and the service worker never touches cross-origin requests. Without a key the app remains fully offline.
- **Data safety**: a browser can evict local storage without warning. The app nudges for a backup once there is real work in it, surfaces the last backup date, and catches quota errors rather than failing silently.
- On `localhost` the service worker serves network-first, so development does not fight yesterday's cache. Production stays cache-first.
- Service worker precaches everything, so it works fully offline once opened. Installable on iOS, Android and desktop.
- **Updates are user-controlled.** The service worker does not call `skipWaiting()` on install; a new build waits until the reader taps **Update now** in the in-app toast, so a page is never swapped mid-sentence. `js/pwa.js` re-checks on visibility change, on reconnect and every 20 minutes, which is what makes the prompt appear on a phone that never fully closes the app.
- **Run `node tools/stamp-version.mjs` before every commit.** A browser only re-installs a service worker when `sw.js` itself changes, so the script hashes every precached file into `VERSION` (and `js/version.js`). Without it, content-only edits would leave installed devices serving the old cached build with no update prompt.
- Light and dark themes; keyboard search with `/` or `⌘K`.
- Generators (run only when the motif changes):
  - `node tools/make-brush.mjs` — brush path data from the EnsoKit engine
  - `node tools/make-icons.mjs` — rasterises the same ensō ring into PWA icons (dependency-free PNG encoder)
  - `node tools/stamp-version.mjs` — **run before every commit**; stamps a content hash into `sw.js` and `js/version.js`

## Local development

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`. A server is required — ES modules and service workers do not run from `file://`.

## Sources and accuracy

Benchmark figures (ecommerce conversion and cart abandonment, email and cart-recovery performance, support response times, CSAT/FCR, AI-citation and AI-Overview research, internal-comms and trust indices, media-relations surveys, and hiring-market signals) are drawn from published 2025–2026 industry reporting, institutional research and primary platform documentation. Every figure carries its source and date in-text and is labelled as orientation rather than a target. Frameworks are attributed to their originators or governing bodies throughout — AMEC, Coombs, Mitchell/Agle/Wood, IAP2, Prosci, Bridges, Kotter, PRSA, CIPR, the UK Government Communication Service, the CDC, Google Search Central and the Search Quality Rater Guidelines.

Regulatory summaries (Regulation FD, non-GAAP prominence, GDPR Article 33, NIS2 Article 23, SEC Item 1.05, the EU Empowering Consumers Directive, the UK CMA Green Claims Code, FTC guidance) are dated and simplified for study. They move — verify the current position before relying on any of it.
