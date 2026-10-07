# LitAcademy — Product Requirements Document (v1.0)

| | |
|---|---|
| **Working name** | LitAcademy (renamed from "Caesura"; the name may change again — keep every brand string in `src/config/brand.ts`) |
| **Status** | Ready for build |
| **Date** | 2026-10-06 |
| **Owner** | Arif (Dev Wonder) |
| **Audience** | Developers and AI coding agents. Read together with `AGENTS.md`. |

---

## 1. Overview

### 1.1 What it is
A premium, syllabus-based learning platform for **English Literature students of National University (NU), Bangladesh** — Honours (4 years) and Masters (1 year). It offers structured topic notes, hover-to-learn literary terms, personal notes, quizzes, and a site-wide AI guide named **Pythia**.

### 1.2 Problem
- Notes are scattered, inconsistent and not organised by the NU syllabus.
- Literary terms are used without explanation.
- Students have no structured way to practise recall or keep personal notes beside the text.

### 1.3 Goals
- **G1** One clear home for every Paper in the NU English syllabus, organised Program → Year → Paper → Unit → Topic.
- **G2** Make terms understandable in place (hover/tap tooltip, English definition + Bangla meaning).
- **G3** Let students save notes anchored to text, track progress, and test themselves.
- **G4** Pythia answers questions, explains the site, and knows where things are.
- **G5** A premium, calm, professional look and feel (LinkedIn-like structure, literary typography).
- **G6** Free to start; deployable on Vercel Hobby first, portable to a VPS later.

### 1.4 Non-goals (v1)
Video lessons (the schema reserves a `video` block, not rendered in v1), payments/subscriptions, certificates, live classes, native mobile apps, student-to-student social features, other universities/departments.

### 1.5 Success metrics
Sign-ups; onboarding completion; weekly active readers; topics completed per user; notes saved; quiz attempts; Pythia messages per user; qualitative student feedback. **Positive student feedback plus growth are the triggers for moving to a VPS.**

### 1.6 Principles
1. Premium, posh, professional, aesthetic. Calm neutral surfaces, restrained accent.
2. **Not a course marketplace.** Use academic vocabulary (see §2). Never use sales words.
3. **One version of every note** (English, with Bangla explanation blocks where needed). No per-section language toggle.
4. Only real numbers on the site. No fake stats, fake instructors or lorem ipsum.
5. Portable by default: no lock-in to Vercel-only services.

---

## 2. Vocabulary (mandatory in UI copy, code names and docs)

| Do not use | Use |
|---|---|
| Course | **Paper** (a subject in the syllabus). The parent is a **Program**. |
| Lesson | **Topic** (or "Reading") |
| Enroll, Buy, Free Trial | **Begin**, Continue, Start Reading |
| Trending, Best Seller | **Most Read**, Recently Added |
| Instructors | (not used; no fake people) |
| Technics | **Study Method** |

Hierarchy: **Program → Year (Honours only) → Paper → Unit → Topic**.
Programs: **Honours** (Years 1–4) and **Masters** (one year only, no Year level).

---

## 3. Users and roles

| Role | Capabilities |
|---|---|
| **Guest** | Browse Home, Programs, Paper pages (syllabus and topic lists), Glossary, Study Method, FAQ, About. On a topic page sees title, breadcrumb, *At a Glance* and a sign-in gate. May use Pythia in limited site-guide mode. |
| **Student** | Everything a guest can, plus full topic reading, highlights/notes, progress, bookmarks, quizzes, full Pythia, dashboard, settings. |
| **Admin** | Student rights plus `/admin`: manage Programs/Papers/Units/Topics, block editor, Glossary, quizzes, publish/unpublish, user list (read-only), uploads. Role is set server-side only (`input: false`). |

---

## 4. Information architecture

### 4.1 Routes

| Route | Page | Access |
|---|---|---|
| `/` | Home | public |
| `/programs` | Programs overview (Honours/Masters tabs, year filter, Paper cards) | public |
| `/honours/[year]` (`1st-year`…`4th-year`) | Papers of that year | public |
| `/honours/[year]/[paper]` | Paper page (Units → Topics) | public |
| `/honours/[year]/[paper]/[topic]` | Topic reader | gated body |
| `/masters` | Papers of Masters | public |
| `/masters/[paper]` | Paper page | public |
| `/masters/[paper]/[topic]` | Topic reader | gated body |
| `/glossary`, `/glossary/[term]` | Glossary | public |
| `/study-method`, `/faq`, `/about`, `/contact`, `/privacy`, `/terms` | Static pages | public |
| `/login`, `/signup`, `/forgot-password`, `/reset-password` | Auth | public |
| `/onboarding` | Choose Program (and Year for Honours) | auth |
| `/dashboard`, `/dashboard/notes`, `/dashboard/settings` | Student area | auth |
| `/admin/**` | Admin | role=admin |
| `/api/**` | Route handlers (see §10) | mixed |

### 4.2 Navigation
- **Navbar (sticky, white, 1px bottom border):** logo · **Programs · Glossary · Study Method · FAQ** · Sign in / Get started. Logged in: Dashboard + avatar menu.
- **Programs mega-menu (hover/click):** Honours (1st–4th Year) and Masters. For logged-in students, their own Program is listed first and highlighted.
- **Guest program choice:** a Honours/Masters (+year) dropdown; value stored in cookie `la_program` (e.g. `honours:2`, `masters`). On sign-up/onboarding it is copied to the profile.
- **Pythia:** floating button bottom-right on every page. Mobile reader: bottom bar (Outline · Notes · Pythia).

### 4.3 Access rules
- Content metadata (Programs, Papers, Units, Topic titles) is public for SEO and discovery.
- Topic **body, notes, quiz, progress** require sign-in. Guests on a topic page see title, breadcrumb, *At a Glance* and a sign-in card ("Sign in to keep reading — it's free").
- After login, the menu shows the student's own Program route. Program can be changed in `/dashboard/settings` at any time; progress is kept per topic regardless.

---

## 5. Page specifications

### 5.1 Home (`/`) — section order
1. **Hero**
2. **About** (short)
3. **Programs** (Honours and Masters cards)
4. **Features** ("How it works": hover terms, saved notes, quizzes, Pythia)
5. **Recently Added / Most Read** (Embla slider of topic cards — the only slider with catalogue content)
6. **Study Method** teaser (3 cards)
7. **FAQ** (5 items) and closing CTA band
8. **Footer**

Logged-in students see **Continue Reading** at the very top (last topic, progress bar) above the hero or replacing it.

#### Hero (the most important section)
Must state explicitly: **what it is, who it is for, why, how, and what is different.**

- **Layout:** left = static message; right = static image with a coded animated card floating over it. No image slider.
- **Eyebrow:** `For National University English students` / BN `জাতীয় বিশ্ববিদ্যালয়ের ইংরেজি বিভাগের শিক্ষার্থীদের জন্য`
- **H1 (Playfair Display):** `The perfect place to learn English literature.` / BN `সাহিত্য শেখার নিখুঁত জায়গা।`
- **Sub:** `Syllabus-based notes for NU Honours and Masters. Hover over any literary term to understand it instantly, save your own notes, and test yourself — free.` / BN `জাতীয় বিশ্ববিদ্যালয়ের অনার্স ও মাস্টার্সের সিলেবাস-ভিত্তিক নোট। যেকোনো সাহিত্যিক টার্মের ওপর হোভার করলেই অর্থ জানুন, নিজের নোট সেভ করুন, কুইজে নিজেকে যাচাই করুন — সম্পূর্ণ ফ্রি।`
- **Button 1 (primary):** `Choose Your Program` with caption `Honours or Masters — find your syllabus` → scrolls to/opens Programs section. BN `প্রোগ্রাম বেছে নিন` / `অনার্স বা মাস্টার্স — আপনার সিলেবাস খুঁজুন`
- **Button 2 (secondary):** `See How It Works` with caption `A one-minute tour` → scrolls to Features. BN `কীভাবে কাজ করে দেখুন` / `এক মিনিটের ট্যুর`
- **Step strip under buttons:** `Pick your program → Read and hover → Save and practice`
- **Feature chips:** Hover-to-learn terms · Your own saved notes · Practice quizzes · Pythia, your AI guide
- **Right image:** a collage of public-domain author portraits (candidates: Shakespeare, Woolf, Whitman, Chekhov, Tagore) in teal duotone, arch or card frames. Only public-domain or properly licensed images; record source and licence in `public/images/CREDITS.md`.
- **Floating coded card** cycles every 5 s (pause on hover/focus; disabled with `prefers-reduced-motion`, showing scene 1 statically). Built with Motion (Framer Motion). Scenes use original demo text:
  1. **Hover to learn:** a sentence with the term *soliloquy* underlined; tooltip types in "a speech in which a character speaks their thoughts aloud, alone on stage" and the Bangla meaning.
  2. **Save notes:** text highlights, a note card slides in ("Compare with an aside").
  3. **Practice:** a one-question quiz; the correct option animates a check.
  4. **Ask Pythia:** a chat bubble types a short bilingual answer.
  Progress dots under the card indicate the active scene.
- **Background:** keep the soft gradient look of the original site, in the new palette: `linear-gradient(135deg, #FBF3EA 0%, #E8F3F0 100%)`, plus a tilted rounded shape behind the image with a teal→gold gradient (`#0F766E` → `#B7791F`, ~85% opacity, rotated ≈ 6°).

#### About (short)
2–3 sentences on why LitAcademy exists (scattered notes, unexplained terms, no structure by syllabus; we organise the NU syllabus into clear connected notes). Optional one line on the founder's story (decision pending; see §14). Below: three **real, live counts** (Programs, Papers, Topics) from the database. If counts are too small to impress, hide them and show chips instead: `Free · Honours & Masters · বাংলা + English`.

#### Programs section
Two large cards: **Honours** (year chips 1st–4th that deep-link to `/honours/[year]`) and **Masters** (one-year, links to `/masters`). Never a slider.

#### Features section
Four feature blocks with small coded demos reusing the hero scenes (static on mobile).

#### Footer
Brand, short description, links (Programs, Glossary, Study Method, FAQ, About, Contact, Privacy, Terms), social links, and a **"Remote · Bangladesh"** label. **No** street address, app-store badges, payment-gateway icons or newsletter-for-courses copy.

### 5.2 Programs (`/programs`, `/honours/[year]`, `/masters`)
Honours/Masters tabs, year pills (Honours), grid of **Paper cards** (grid, not slider): code, title, number of topics, estimated reading time, progress ring if signed in. Search box filters Papers.

### 5.3 Paper page
Header (code, title, description), **Units as accordions** listing Topics with state (unread / in progress / complete), `Start Reading` or `Continue` button, paper progress.

### 5.4 Topic reader (core experience)

Desktop three-column layout (LinkedIn-style cards, 8 px radius, 1 px borders):

```
┌────────────┬──────────────────────────┬─────────────────┐
│ Paper      │ Breadcrumb               │ [My Notes]      │
│ outline    │ Title            Mark ✓  │ [Pythia]        │
│ (Units →   │ ───────────────────────  │ [Terms]         │
│  Topics,   │ At a Glance              │                 │
│  ✓ done)   │ Body (blocks)            │ Highlight text  │
│            │ Key Terms                │ → "Add note"    │
│            │ Exam Corner              │                 │
│            │ Quiz                     │                 │
│            │ ← Prev       Next →      │                 │
└────────────┴──────────────────────────┴─────────────────┘
```
Mobile: single column; bottom bar (Outline · Notes · Pythia) opens bottom sheets.

**Content order (center):**
1. Header: breadcrumb, title, reading time, Mark as read, Bookmark.
2. **At a Glance:** 3–5 bullets for revision.
3. **Body blocks** (see §6) with inline term tooltips.
4. **Key Terms:** chips linking to Glossary.
5. **Exam Corner:** short and broad questions; each is an accordion that reveals an answer outline (active recall: think first, then open).
6. **Quiz:** 5 MCQs, instant feedback, score saved.
7. Prev/Next topic and Mark complete.

**Behaviours**
- **Term tooltip:** hover on desktop, tap-popover on touch, focusable via keyboard. Shows term, English definition, Bangla meaning, "Open in Glossary".
- **Highlight → note:** selecting text shows a small popover "Add note". A note stores `blockId`, character offsets inside that block's plain text, and the quoted text (to re-anchor if content changes). Notes appear in the right panel and in `/dashboard/notes`; clicking a note scrolls to and flashes the anchor.
- **Progress:** scroll depth ≥ 90 % or "Mark complete" sets complete; `last_position` saved (debounced).
- **Reading controls:** font size (S/M/L) and line spacing; remembered per device.
- **Reading typography:** Lora (English), Noto Serif Bengali (Bangla), body 18 px, measure ≈ 68 characters, Bangla line-height ≥ 1.8.

### 5.5 Glossary
A–Z index, search, filter by Paper/Topic. Term page: English definition, Bangla meaning, example, related terms, topics where it appears. Statically generated (ISR). Same data powers tooltips.

### 5.6 Study Method
Active Recall, Spaced Repetition, Feynman Technique, Time Blocking, and a short guide "How to analyse a literary text", each tied to literature examples. Links into the product features.

### 5.7 FAQ
Is it free? Which programs and syllabus? Why sign in? Where are my notes stored? What is Pythia? Is there Bangla? How do I change my program? How do I report an error in a note? (Contact link.)

### 5.8 Auth and onboarding
- Login / Signup: **Google, Facebook, email + password**; **Forgot password** and reset flow by email.
- Email/password sign-ups require email verification. Social sign-ins count as verified.
- **Onboarding** (first sign-in): choose **Honours** (then Year 1–4) or **Masters**; saved to profile. Skippable only via "Decide later" (defaults to guest cookie value).
- After login, redirect to the last intended page or `/dashboard`.

### 5.9 Dashboard (`/dashboard`)
Left card: profile + Program/Year with **Change program**. Center: Continue Reading, Paper progress, recent quiz scores. Right: recent notes, bookmarks, Pythia tips. Includes a **Program switcher**.

### 5.10 My Notes (`/dashboard/notes`)
All saved notes; filter by Paper/Topic; search; edit/delete; each links to its anchor.

### 5.11 Settings (`/dashboard/settings`)
Name, email, Program/Year, delete account/data request.

### 5.12 Legal, Contact, 404
Privacy and Terms (required for Facebook login). Contact form (email via Resend) with topic selector including "Report an error in a note". Branded 404 with search and Pythia prompt.

### 5.13 Admin
- Tree manager for Programs → Papers → Units → Topics (drag to reorder, draft/published).
- **Topic editor:** Tiptap-based block editor with custom nodes (term, callout, quote, character, table, timeline, image). Choose a **template** (see §6.3) that pre-fills structure. Autosave drafts, version history, preview-as-student, publish.
- Glossary manager; quiz manager; image upload via Cloudinary signed upload; read-only user list; content-error reports inbox.

---

## 6. Content model

### 6.1 Principles
- **One version** of each topic, written in English. Bangla appears only where an explanation helps, as a `callout` block with `variant: 'bangla_note'` (label "বাংলায় ব্যাখ্যা").
- Glossary entries are bilingual (English definition + Bangla meaning), short, reused everywhere.
- Note text uses the block schema below. The renderer maps each block type to a React component; **never** render raw HTML from content.
- Copyright: quote only public-domain texts at length. For copyrighted works use **short excerpts and our own paraphrase/summary**. Record the status in the `quote` block.

### 6.2 Block schema (shared Zod/TypeScript types in `src/lib/content/schema.ts`)

```ts
type Mark = 'bold' | 'italic' | 'underline' | 'code' | 'sup' | 'sub';

type Inline =
  | { type: 'text'; text: string; marks?: Mark[] }
  | { type: 'term'; termId: string; text: string }        // hover/tap tooltip
  | { type: 'link'; href: string; text: string };

type Block = { id: string } & (            // id = stable uuid per block (note anchors depend on it)
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; content: Inline[] }
  | { type: 'list'; ordered: boolean; items: Inline[][] }
  | { type: 'quote'; content: Inline[]; source?: string; rights: 'public_domain' | 'short_excerpt' }
  | { type: 'callout'; variant: 'exam_tip' | 'remember' | 'critical_view' | 'bangla_note';
      title?: string; content: Block[] }
  | { type: 'table'; header: string[]; rows: Inline[][][] }
  | { type: 'timeline'; items: { label: string; content: Inline[] }[] }
  | { type: 'character'; name: string; role?: string; content: Inline[]; imageUrl?: string }
  | { type: 'image'; url: string; alt: string; caption?: string; credit?: string }
  | { type: 'divider' }
  | { type: 'video'; provider: 'youtube' | 'file'; src: string; title: string }  // reserved; not rendered in v1
);

interface TopicContent {            // MongoDB collection: topic_content
  _id: string;
  topicId: string;                  // PostgreSQL topics.id
  schemaVersion: number;            // bump on breaking block changes; migrate with scripts
  template: 'literary_work' | 'period_movement' | 'theory_critic' | 'language_linguistics' | 'general';
  atAGlance: string[];              // 3–5 bullets
  blocks: Block[];
  keyTermIds: string[];
  examCorner: { id: string; kind: 'short' | 'broad'; question: string; answerOutline: Block[] }[];
  status: 'draft' | 'published';
  updatedAt: Date; updatedBy: string;
}
```

### 6.3 Topic templates (same blocks, different order)
- **literary_work** (play, poem, novel): Author & context → Summary → Characters → Themes → Language & technique → Important quotations → Critical views → Exam Corner.
- **period_movement:** Timeline → Characteristics → Major writers → Comparison table → Exam Corner.
- **theory_critic:** Core idea → Key thinker → Application example → Limitations → Exam Corner.
- **language_linguistics:** Definition → Concepts → Examples → Diagram → Exam Corner.

### 6.4 Quizzes (PostgreSQL)
Five MCQs per topic by default: prompt, 2–4 options, `correctIndex`, explanation (shown after answering). Attempts stored with score and answers.

### 6.5 Glossary term
`slug`, `term`, `en_definition`, `bn_meaning`, `example`, `related` (term ids), appears-in topics (join table). The block editor inserts `term` inline nodes by `termId`.

### 6.6 Content strategy
Writing the actual notes is a separate, large workstream and is **deferred**. The platform ships with a seed script containing a small set of sample Papers/Topics so every feature can be exercised.

---

## 7. Pythia (AI guide)

### 7.1 Identity
**Pythia**, named for the oracle of Delphi: the one you consult when you have a question. Persona: bubbly, witty, warm, a little theatrical, concise; tasteful (no emoji overload). Inspired in spirit by a chatty companion character, but an original persona. Replies in the **language the student writes in** (Bangla, English, or mixed).

### 7.2 Scope
1. **Site guide:** knows the entire site structure and tells people where to find things, with relative links. ("Where is Romantic poetry for 3rd year?" → link to the right Paper/Topic.)
2. **Topic helper:** on reader pages receives the topic content as context; explains, simplifies, gives examples, drills the student.
3. **Terms:** explains literary terms, preferring Glossary definitions.
4. **Later (v1.1): answer checking** — student pastes an answer; Pythia gives structured feedback against a rubric.

### 7.3 Behaviour rules
- Prefer content in the app. If something is not in the syllabus data, say so; **never invent syllabus facts, page numbers or exam questions.**
- For essay/assignment requests: explain, outline and give feedback; do not produce a submission-ready essay by default.
- Stay on literature, study help and the site. Politely decline unrelated or unsafe requests.
- Keep answers short by default; offer to go deeper.

### 7.4 Technical design
- Service: `src/server/ai` (framework-agnostic). Route: `POST /api/pythia/chat` with **SSE streaming**.
- SDK: `@anthropic-ai/sdk`. Models via env: `PYTHIA_MODEL_CHAT=claude-haiku-4-5-20251001`, `PYTHIA_MODEL_REVIEW=claude-sonnet-5-5` (v1.1).
- **Site map tool/context:** auto-generated JSON of Programs → Papers → Units → Topics (title, slug, URL, one-line summary) plus static pages. Included in the system prompt with **prompt caching**; regenerated on publish.
- Tools: `get_topic_context(topicId)`, `search_content(query)`.
- Rate limits (configurable env): guests 10 messages/day (site-guide mode only, per IP); students 30/day; per-message input cap. Limits via Redis (Upstash on Vercel).
- History: stored in MongoDB `chat_sessions` (userId, topicId?, messages), **retention 90 days** (configurable), deletable by the user.
- Safety: output length caps, no raw HTML, link allow-list (internal URLs only).

---

## 8. Design system

### 8.1 Colour tokens (CSS variables; Tailwind reads them)

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#0F766E` | Buttons, links, active states |
| `--color-primary-dark` | `#134E4A` | Hover, footer, headings on tint |
| `--color-accent` | `#B7791F` | Antique gold: borders, icons, badges — **never body text**; one main CTA accent per screen |
| `--color-bg` | `#F3F2EF` | Page background (LinkedIn-style warm grey) |
| `--color-surface` | `#FFFFFF` | Cards, navbar |
| `--color-border` | `#E0DFDC` | 1 px borders |
| `--color-text` | `#191919` | Body |
| `--color-muted` | `#5E5E5E` | Secondary text |
| `--hero-gradient` | `linear-gradient(135deg,#FBF3EA,#E8F3F0)` | Hero background |

Ratio ≈ 60 % neutral, 30 % teal/ink, 10 % accent. Check contrast (WCAG AA) for every combination; gold on white is decorative only. Dark mode is **v1.1** (tokens must make it possible).

### 8.2 Typography (`next/font`)
- Headings: **Playfair Display**
- UI: **Inter**
- Reading (English): **Lora**
- Bangla UI: **Anek Bangla**; Bangla reading and headings: **Noto Serif Bengali**
- Always define a fallback stack; Bangla line-height ≥ 1.8.

### 8.3 Shape, spacing, motion
- Radius 8 px cards, 999 px pills; shadows very light (1–2 layers), borders carry the structure.
- 4 px spacing scale; container max-width 1200 px; reader column ≈ 68ch.
- Motion with **Motion (Framer Motion)**: 150–250 ms ease-out for UI, ≤ 600 ms for hero entrances; transform/opacity only; honour `prefers-reduced-motion`.
- Remove from the old SkillSphere design: peach sections, rotated pill labels, orange blobs, stock photo of a person, star ratings, price tags.

### 8.4 Components (shadcn/ui on Radix, restyled to tokens)
Navbar + mega-menu, Button, Card, Tabs, Accordion, Dialog/Sheet, Popover/Tooltip, Badge, Progress, Slider (Embla), Toast, Form fields, Avatar menu, Command-style search (v1.1), Pythia widget, Reader blocks, Term tooltip, Note popover.

### 8.5 Responsive and accessibility
Mobile-first; breakpoints 640/768/1024/1280. WCAG 2.1 AA: keyboard navigation, visible focus, ARIA for accordions/dialogs/tooltips, tooltips never the only way to read a definition (term links to Glossary), alt text required on every image block.

---

## 9. Data model

### 9.1 PostgreSQL (Drizzle ORM, schema in `src/db/schema/`)
Auth tables (`user`, `session`, `account`, `verification`) are generated by the Better Auth CLI into the same Drizzle schema. Extra user fields: `program` ('honours'|'masters'|null), `year` (1–4|null), `language` ('en'|'bn'), `role` ('student'|'admin', `input:false`).

| Table | Key columns |
|---|---|
| `programs` | id, slug, name_en, name_bn, duration_years, sort |
| `papers` | id, program_id, year (null for Masters), code, slug, title, description, sort, status |
| `units` | id, paper_id, title, sort |
| `topics` | id, unit_id, slug, title, summary, sort, reading_minutes, status, published_at, updated_at |
| `glossary_terms` | id, slug, term, en_definition, bn_meaning, example, extra jsonb |
| `topic_terms` | topic_id, term_id |
| `progress` | user_id, topic_id, status (`in_progress`/`complete`), last_position, updated_at |
| `bookmarks` | user_id, topic_id, created_at |
| `user_notes` | id, user_id, topic_id, block_id, start_offset, end_offset, quoted_text, note_text, created_at, updated_at |
| `quiz_questions` | id, topic_id, prompt, options jsonb, correct_index, explanation, sort |
| `quiz_attempts` | id, user_id, topic_id, score, total, answers jsonb, created_at |
| `search_documents` | id, kind, ref_id, title, body_text, tsv (tsvector, GIN index) — rebuilt on publish |
| `content_reports` | id, user_id?, topic_id, message, status, created_at |

Use UUIDs, `created_at/updated_at` on every table, foreign keys with `ON DELETE` rules chosen deliberately (never cascade-delete user content by accident).

### 9.2 MongoDB (official driver + Zod validation)
- `topic_content` (see §6.2) and `topic_content_versions` (history).
- `chat_sessions` (Pythia).
- `activity_events` (lightweight analytics; optional).
Store only PostgreSQL ids as references. Validate every document with Zod before write.

### 9.3 Redis
Rate limits and short-lived caches (Upstash on Vercel; `ioredis` on VPS) behind `src/lib/cache.ts` and `src/lib/ratelimit.ts` interfaces.

---

## 10. API surface (Route Handlers under `src/app/api`, thin wrappers over `src/server/*`)

| Group | Endpoints |
|---|---|
| Auth | `ALL /api/auth/[...all]` (Better Auth) |
| Public | `GET /api/programs`, `/api/papers?program=&year=`, `/api/papers/[slug]`, `/api/glossary`, `/api/glossary/[slug]`, `/api/search?q=` |
| Student | `GET /api/topics/[id]/content` (auth), `GET/POST /api/progress`, `GET/POST/PATCH/DELETE /api/notes`, `GET/POST /api/bookmarks`, `GET /api/quizzes/[topicId]`, `POST /api/quizzes/[topicId]/attempt`, `PATCH /api/me`, `POST /api/reports` |
| Pythia | `POST /api/pythia/chat` (SSE), `GET /api/pythia/history`, `DELETE /api/pythia/history` |
| Admin | CRUD under `/api/admin/{programs,papers,units,topics,glossary,quizzes}`, `POST /api/admin/topics/[id]/publish`, `POST /api/admin/uploads/sign` (Cloudinary signature) |

All inputs validated with Zod; all admin routes check `role === 'admin'` on the server.

---

## 11. Technical architecture

### 11.1 Stack (final)

| Layer | Choice | Why |
|---|---|---|
| Package manager | **npm** (existing project convention) | Use npm workspaces only if/when the repo is split in Phase 2 |
| Language | TypeScript (strict) everywhere | Shared types |
| Web | **Next.js (App Router)** | SSR/ISR for SEO; base of the existing SkillSphere project |
| Styling | Tailwind CSS + CSS-variable tokens | §8 |
| UI | shadcn/ui (Radix), lucide-react, Embla Carousel, Motion | Accessible primitives, animation |
| Data fetching/forms | TanStack Query, React Hook Form + Zod | Caching, validation |
| Fonts | next/font: Playfair Display, Inter, Lora, Anek Bangla, Noto Serif Bengali | §8.2 |
| Editor (admin) | Tiptap with custom nodes; JSON → MongoDB | Block content |
| Reader | Own renderer (JSON → React) | Tooltips, anchors |
| Auth | **Better Auth** (email/password, Google, Facebook, password reset) inside Next.js; config in `src/lib/auth.ts` | Own DB, no vendor lock-in |
| ORM/DB | **Drizzle ORM + drizzle-kit**, `pg`, **PostgreSQL** (main) | Typed SQL, reviewed migrations |
| Unstructured data | **MongoDB** (official driver + Zod) | Evolving content blocks, chat logs |
| Cache/limits | Redis (Upstash → ioredis later) | Rate limits, caching |
| Email | Resend (SMTP fallback) | Verification, reset, contact |
| Images | Cloudinary (signed direct upload from admin browser) → Cloudflare R2 later | Few, admin-only images |
| AI | `@anthropic-ai/sdk`; Haiku 4.5 chat, Sonnet 5.5 review (v1.1) | §7 |
| Search | PostgreSQL full-text (`search_documents`) | No extra service |
| Testing | Vitest (unit), Playwright (key flows) | Login, reading, notes |
| Quality | ESLint, Prettier, `tsc --noEmit` | CI gate |

### 11.2 Phase 1 — Vercel (and any "normal" Node host)
- One Next.js repository. Server code organised in **framework-agnostic modules** that do not import from `next/*`: `src/server/core` (users, progress, notes, quizzes), `src/server/content` (programs, papers, topics, glossary, search), `src/server/ai` (Pythia). Route Handlers and Server Components call these modules.
- Managed services on free tiers: Neon (PostgreSQL, use the pooled connection string), MongoDB Atlas, Upstash Redis, Cloudinary, Resend. Put functions and databases in the **same region, near Bangladesh** (Singapore or Mumbai).
- **Vercel Hobby is for personal, non-commercial use only** and stops features when limits are hit (100 GB bandwidth/month). Running LitAcademy free with no ads or payments is acceptable under that reading; **ads, payments, or commercial positioning require Vercel Pro or the VPS phase.** Set usage alerts.
- Public pages: SSG/ISR. Topic bodies and student data: dynamic, authenticated.
- Connection handling: a single shared `pg` Pool/Neon pooled URL in `src/db/client.ts`; never create clients per request.

### 11.3 Phase 2 — VPS (when growth, positive feedback, or limits demand it)
- Ubuntu LTS VPS, **Docker Compose**, **Caddy** (auto HTTPS; Nginx is acceptable), Cloudflare DNS/CDN.
- Split into services so one failing does not take the others down: `web` (Next.js `output: 'standalone'`), `api-core` (Express 5: auth session, users, progress, notes, quizzes), `api-content` (Express: content read path, cached), `api-ai` (Express: Pythia). The `src/server/*` modules move into these services unchanged; move them into an npm-workspaces monorepo with `packages/db`, `packages/auth`, `packages/shared` (Zod schemas).
- Self-host PostgreSQL, MongoDB and Redis (or keep managed). Swap adapters: Upstash→`ioredis`, Cloudinary→Cloudflare R2.
- Auth config lives in a shared module so Express services read the same session (cookie domain `.yourdomain`).
- Backups: daily `pg_dump` and `mongodump` shipped **off-VPS** (restic/rclone → R2 or Backblaze), restore tested. Monitoring: Uptime Kuma + Sentry. Separate DB roles for migrations and for the app (app role cannot `DROP`).
- CI/CD: GitHub Actions (typecheck, lint, test, build, deploy).

### 11.4 Portability rules (so Phase 2 is an upgrade, not a rewrite)
1. No Vercel-only services (KV, Blob, Edge Config, Cron, Vercel-specific image loaders).
2. Every external service sits behind a small interface in `src/lib/` (`cache`, `ratelimit`, `storage`, `mail`) selected by env.
3. `src/server/*` is pure TypeScript with injected dependencies; no `next/headers`, `NextRequest`, etc.
4. Configuration only through environment variables validated by Zod at boot (`src/config/env.ts`).
5. Keep `next.config` compatible with `output: 'standalone'`; a `Dockerfile` can be added later without code changes.

### 11.5 Repository structure
```
src/
  app/                    routes: (public) (auth) (student) admin api
  components/             ui/ layout/ hero/ reader/ glossary/ pythia/ admin/
  server/                 core/ content/ ai/        # framework-agnostic
  db/                     schema/ client.ts
  lib/                    auth.ts auth-client.ts mongo.ts cache.ts ratelimit.ts
                          storage.ts mail.ts content/schema.ts
  config/                 brand.ts site.ts env.ts
  styles/                 tokens.css globals.css
drizzle/                  generated SQL migrations (committed)
docs/                     PRD.md
public/images/CREDITS.md  image sources and licences
scripts/                  seed.ts, build-sitemap.ts
AGENTS.md
```

---

## 12. Authentication details (Better Auth)
- Providers: email/password (verification required, password reset via `sendResetPassword`), Google, Facebook (**implement last**: needs a Meta developer app, Privacy Policy and Terms URLs; social sign-ins may not always return an email — handle that case).
- Cookie sessions; configure `trustedOrigins`, secure cookies, rate limiting on auth endpoints.
- Roles: `role` is server-controlled. First admin created by a one-off script using an allow-listed email.
- Account deletion: removes profile, notes, progress, chat history (confirmation required).

---

## 13. Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | p75 LCP ≤ 2.5 s on mid-range mobile over 4G; CLS < 0.1; first-load JS on public pages ≲ 200 KB gzip; lazy-load Pythia widget, Embla, Tiptap (admin only) |
| SEO | SSR/ISR for public pages, metadata and Open Graph, sitemap and robots, canonical URLs, hreflang for EN/BN UI; guest topic pages index title and At a Glance only |
| Security | Zod validation on all inputs; no `dangerouslySetInnerHTML` for content; CSP and security headers; server-side role checks; secrets only in env; rate limits on auth, notes, Pythia; least-privilege DB roles |
| Privacy | Collect only name, email, program/year, usage data; notes are private to the user; chat retention 90 days; data export/delete on request |
| Reliability | Daily backups (Phase 2), error tracking, health checks, graceful degradation (reader works if Pythia is down) |
| Accessibility | WCAG 2.1 AA |
| Content rights | Image credits file; quote policy per §6.1 |

---

## 14. Open decisions (do not block the build)
1. **Content strategy** — large topic, discussed later.
2. Final domain and sender domain for email.
3. Hero image set and licences.
4. Whether to include the founder's story in About.
5. Pythia rate-limit numbers after observing real cost.
6. Analytics tool (privacy-friendly: Plausible or Umami).
7. Dark mode timing (v1.1).
8. Facebook login review timing.

---

## 15. Milestones (each ends deployable)

| # | Milestone | Acceptance |
|---|---|---|
| **M0** | Foundation | Repo from SkillSphere base; tokens, fonts, layout shell, env validation, CI, Neon/Atlas/Upstash wired, Drizzle migrations, `AGENTS.md` in place |
| **M1** | Public site | Home (hero with animated scenes), Programs, Paper pages, Glossary, Study Method, FAQ, About, legal pages; seeded sample data |
| **M2** | Auth and onboarding | Email, Google, forgot/reset; verification email; onboarding; guest program cookie; dashboard shell; Program change |
| **M3** | Reader and notes | Topic reader, term tooltips, highlight→note, progress, bookmarks, My Notes |
| **M4** | Quizzes and Exam Corner | Quiz engine, attempts, scores on dashboard |
| **M5** | Admin and editor | Tree manager, Tiptap block editor, templates, glossary and quiz managers, publish, Cloudinary uploads |
| **M6** | Pythia | Chat widget, SSE, site map context, topic context, limits, history |
| **M7** | Hardening and launch | Facebook login, SEO, performance pass, accessibility audit, error tracking, backups plan, launch checklist |
| **Later** | v1.1+ | Answer checking, dark mode, video lessons, VPS migration, command-palette search |

---

## 16. Risks

| Risk | Mitigation |
|---|---|
| Hobby limits hit during exam season | Usage alerts, cache aggressively, upgrade trigger defined (§11.2) |
| Hobby is non-commercial only | Stay free/no ads on Hobby; move to Pro or VPS before any monetisation |
| Content volume (the real bottleneck) | Seed data now; content workstream planned separately |
| Block schema changes break notes/anchors | `schemaVersion`, stable block ids, quoted-text re-anchoring, migration scripts |
| Destructive DB migrations | Reviewed SQL migrations only; never `drizzle-kit push` on shared databases |
| AI cost abuse | Daily limits, input caps, Haiku default, caching |
| Image/quote copyright | Public-domain/licensed images only, credits file, quote policy |
| Facebook login friction | Implement last; email and Google ship first |

---

## Appendix A — Environment variables (`.env.example`)

```
NODE_ENV=
APP_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
DATABASE_URL=                  # Neon pooled URL (Phase 1)
MONGODB_URI=
REDIS_URL=                     # or UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=
RESEND_API_KEY=
MAIL_FROM=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
ANTHROPIC_API_KEY=
PYTHIA_MODEL_CHAT=claude-haiku-4-5-20251001
PYTHIA_MODEL_REVIEW=claude-sonnet-5-5
PYTHIA_LIMIT_GUEST_PER_DAY=10
PYTHIA_LIMIT_STUDENT_PER_DAY=30
CHAT_RETENTION_DAYS=90
ADMIN_BOOTSTRAP_EMAIL=
```

## Appendix B — Glossary of product terms
**Program** Honours or Masters · **Paper** a syllabus subject · **Unit** group of topics in a Paper · **Topic** one reading page · **Block** unit of note content · **Term** a glossary entry shown as a tooltip · **Pythia** the AI guide.