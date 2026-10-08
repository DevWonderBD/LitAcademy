# AGENTS.md — LitAcademy

Instructions for AI coding agents (and humans) working in this repository. Read `docs/PRD.md` first; it is the source of truth for scope, pages, data model and design. If this file and the PRD disagree, stop and ask.

## Project in one paragraph
LitAcademy is a premium, syllabus-based platform for **National University (Bangladesh) English Literature students** (Honours 4 years, Masters 1 year): structured topic notes, hover-to-learn literary terms, personal notes, quizzes, and an AI guide named **Pythia**. Hierarchy: **Program → Year (Honours only) → Paper → Unit → Topic**.

## Commands (npm)
```
npm install
npm run dev            # Next.js dev server
npm run build
npm run lint
npm run typecheck      # tsc --noEmit
npm run test           # Vitest
npm run test:e2e       # Playwright
npm run db:generate    # drizzle-kit generate  (creates a SQL migration)
npm run db:migrate     # drizzle-kit migrate   (applies migrations)
npm run db:studio
npm run seed           # sample Programs/Papers/Topics
```
Before finishing any task: `npm run typecheck && npm run lint && npm run test` must pass.

## Stack
Next.js (App Router) · TypeScript strict · Tailwind CSS with CSS-variable tokens · shadcn/ui (Radix) · Motion · TanStack Query · React Hook Form + Zod · next-intl · Better Auth (inside Next.js) · Drizzle ORM + PostgreSQL (main) · MongoDB (official driver + Zod) for note content and chat · Redis (Upstash now, ioredis later) · Resend · Cloudinary (→ R2 later) · `@anthropic-ai/sdk`.

## Structure and boundaries
```
src/app/        routes and route handlers (thin)
src/components/ UI
src/server/     core/ content/ ai/   → framework-agnostic business logic
src/db/         Drizzle schema and client
src/lib/        adapters: auth, mongo, cache, ratelimit, storage, mail
src/config/     brand.ts, site.ts, env.ts
drizzle/        committed SQL migrations
```
- **`src/server/*` must not import from `next/*`** (no `NextRequest`, `headers()`, `cookies()`). Pass what you need in as arguments. This keeps the later move to separate Express services on a VPS trivial.
- Route handlers and Server Components stay thin: parse input (Zod) → call `src/server/*` → return.
- **Every `page.tsx` must be a Server Component.** Do not use `"use client"` in any `page.tsx`. If a page needs interactivity, extract the interactive parts into separate Client Components inside `src/components/`.
- External services go through the interfaces in `src/lib/` (`cache`, `ratelimit`, `storage`, `mail`). Do not call Upstash, Cloudinary or Resend directly from feature code.
- **No Vercel-only services** (KV, Blob, Edge Config, Cron). Keep `next.config` compatible with `output: 'standalone'`.

## Vocabulary (strict)
Never write **Course, Lesson, Enroll, Buy, Free Trial, Trending, Best Seller, Instructor** in UI copy, routes, component names or comments. Use **Program, Paper, Topic/Reading, Begin/Continue, Most Read, Recently Added, Study Method**. No star ratings, prices, fake stats, fake people or lorem ipsum anywhere.

## UI and design
- Use design tokens (`--color-primary`, etc. from `src/styles/tokens.css`); **never hard-code hex colours** in components. Palette and fonts are defined in the PRD §8.
- Premium, calm, professional: neutral surfaces, 8 px radius, thin borders, restrained gold accent. Do not reintroduce peach sections, orange blobs, rotated pill labels or stock photos.
- Bangla text: Anek Bangla (UI), Noto Serif Bengali (reading), line-height ≥ 1.8.
- Accessibility is required: keyboard operable, visible focus, ARIA on accordions/dialogs/popovers, alt text on every image, `prefers-reduced-motion` respected. Term tooltips must also work on touch and focus.
- Animations use transform/opacity only.
- Always add `cursor-pointer` to all `<button>`, `<a>`, and other clickable elements.

## Code standards
- TypeScript strict; no `any` without a comment explaining why.
- Validate **every** external input (request bodies, query params, env, MongoDB documents) with Zod. Shared schemas live in `src/lib/content/schema.ts` and similar.
- Env access only via `src/config/env.ts` (validated at boot). Never read `process.env` elsewhere. Never commit secrets; keep `.env.example` current.
- Do not use `dangerouslySetInnerHTML` for note content; render blocks through the React block renderer.
- Prefer small, named functions and explicit return types in `src/server/*`.
- Do not add dependencies without a reason; prefer what the PRD already lists.

## Database rules (important)
- Schema changes: edit `src/db/schema/*` → `npm run db:generate` → **review the generated SQL** → commit → `npm run db:migrate`.
- **Never run `drizzle-kit push` against any shared, preview or production database.** `push` is allowed only against a throwaway local DB. **Never use `--force`.**
- **Never edit a migration that has already been applied.** Add a new one.
- Ask a human before any migration that drops a table or column, changes a column type, or renames something. Drizzle may treat a rename as drop + create; handle rename prompts deliberately and check the SQL.
- Better Auth tables are generated by its CLI into the Drizzle schema; keep them in `src/db/schema/` so they are never treated as "extra" tables. Keep `tablesFilter` in `drizzle.config` set.
- Use the pooled connection string on serverless; one shared client in `src/db/client.ts`.
- MongoDB stores only note content, chat sessions and optional events, referencing PostgreSQL ids. Validate with Zod before every write; bump `schemaVersion` on breaking block changes and write a migration script.

## Auth and security
- Better Auth lives in `src/lib/auth.ts` (Next.js now; shared module for Express services later). `role` is never client-settable.
- Enforce authorization **on the server** for every student and admin route.
- Rate-limit auth, notes and Pythia endpoints via `src/lib/ratelimit.ts`.
- Facebook login is implemented last (Meta app review, privacy/terms URLs).

## Pythia (AI)
- Code in `src/server/ai`. Streaming via SSE. Models come from env (`PYTHIA_MODEL_CHAT`, `PYTHIA_MODEL_REVIEW`); do not hard-code model names in logic.
- Persona: bubbly, witty, warm, concise, tasteful; replies in the user's language. Never invent syllabus facts, page numbers or exam questions; say when something is not in the data. Internal links only.
- Keep the site-map context generated from the database and cached; do not paste large content into prompts needlessly.

## Content and rights
- Quote at length only from public-domain texts. For copyrighted works use short excerpts and our own paraphrase; set `rights` on every `quote` block.
- Images: public-domain or licensed only; add source and licence to `public/images/CREDITS.md`.

## Deployment
- Phase 1: Vercel (Hobby is non-commercial only; do not add ads or payments there) with Neon, MongoDB Atlas, Upstash, Cloudinary, Resend. Phase 2: VPS with Docker Compose + Caddy, services split as in PRD §11.3. Write code so Phase 2 needs adapter swaps, not rewrites.

## Git and workflow
- Small, focused commits, imperative messages (`Add term tooltip component`). One concern per PR.
- **Every time you modify something and complete a change, add and commit it immediately.**
- Work milestone by milestone (PRD §15). Do not build later-milestone features early.
- Add or update tests for new server logic; add a Playwright test for any new critical user flow (auth, reading, notes).
- If requirements are ambiguous or a change affects the data model, auth, or deployment portability, **ask before proceeding** and note the decision in `docs/PRD.md` §14 if it resolves an open item.

## Definition of done
Typecheck, lint and tests pass · design tokens used · accessibility checked · no forbidden vocabulary · migrations reviewed · `.env.example` updated · no `src/server/*` import from `next/*` · docs updated if behaviour changed.