# Landing page v1 analysis

## Phase 0 — Project rules summary

Source: `Aisr Rules.md` (repo root). `README.md` is a GitLab template only. No `.cursor` rules, `CLAUDE.md`, or `CONTRIBUTING.md` found.

Rules that apply to this work:

1. Feature-based layout: `src/app` (startup/routing/layouts), `src/features` (business), `src/shared` (reusable). Marketing stays in `features/marketing`.
2. Dependency direction: app → features → shared. No shared→feature or feature→app imports. Prefer `@/` across modules; relative inside a component folder.
3. Export route pages from the feature `index.ts`; keep internals private.
4. Pages compose sections; put substantial copy in feature constants; group complex sections in their own folders with co-located CSS/hooks.
5. Styling: existing Tailwind theme/tokens; section CSS beside the section; keep a11y, reduced-motion, and cleanup of listeners.
6. Contact: never claim a message was sent unless delivery is confirmed; current form uses `mailto:` when email is published.
7. After changes: run `npm run build` and `npm run lint`.
8. Do not upgrade dependencies, change routes, or alter business behavior as part of a *folder-only* refactor (intentional product routes are separate).
9. Shared branding/assets live in `shared/assets`; feature images stay with the feature.
10. Move code to shared only when there is a real cross-feature use.

Docs location is not specified in the rules file; this analysis uses `/docs` as requested by the task brief.

---

## Stack

| Area | Choice |
|------|--------|
| Framework | React 19 + Vite 8 |
| Language | TypeScript |
| Router | `react-router-dom` v7 (`BrowserRouter`, nested `Routes`) |
| Styling | Tailwind CSS v4 (`@theme` in `src/index.css`) + section CSS (`landing.css`) |
| Animation | `framer-motion` + CSS keyframes + IntersectionObserver reveals |
| Icons | `lucide-react` |
| Fonts | Inter (body), Plus Jakarta Sans (display) via Google Fonts |
| Lint | oxlint |

---

## Folder structure

```
src/app/                  App, routes, SiteLayout, NotFoundPage
src/features/marketing/
  pages/                  LandingPage, About, Contact, Privacy, Terms
  components/             Navbar, Footer, ContactForm
  components/sections/    hero, challenge, capabilities, how-it-works,
                          responsible, audiences, faqs, contact, shared/
  constants/              landing.ts, navigation, shell, contact, about
  hooks/                  useScrollReveal.ts
  assets/images/          aisr-admin-dashboard.png
src/shared/
  assets/logo/            aisr-mark.png
  components/             Logo, Container, PageHero, RoadMark, ui/Button
  config/site.ts
  hooks/usePageTitle.ts
  utils/links.ts
```

Naming: PascalCase components, camelCase constants, kebab-case section folders. Sections are one folder per block with a primary export component.

---

## Routing

- `/` is the index route under `SiteLayout` → `LandingPage` (`src/app/routes.tsx`).
- To add `/2`: register a sibling route (preferably with its own layout so v1 Navbar/Footer are not reused unintentionally), export the page from `features/marketing/index.ts`, and keep SPA fallback via nginx `try_files`.

---

## Design system (v1 tokens)

From `src/index.css` `@theme`:

- Colors: primary navy `#191d31`, primary-soft `#1a1f38`, secondary sky `#68cff7`, on-secondary navy, ink `#555555`, canvas white, surface `#f4f6fa`, card white, line `#d7e3ef`
- Radii: control/button `0.5rem`, card `0.75rem`
- Buttons: `buttonVariants` (primary, primaryCompact, secondaryDark, secondaryLight, ghost)
- Shell spacing: `shellPad` / `sectionY` / heading and grid gaps in `constants/shell.ts`
- Cards: heavy use of rounded-3xl borders, soft shadows, backdrop blur

---

## Page structure (v1 section order)

1. **Hero** — “One Connected Platform…” + CTAs + raster dashboard screenshot (overlaps next section via negative margin)
2. **Challenge** — scattered records → connected view with relationship pills
3. **Capabilities** — all 13 areas as long alternating cards with mini previews
4. **How it works** — 5 steps + identity chain
5. **Responsible by design** — 4 principle cards
6. **Audiences** — Drivers / Companies / Brokers / Agents cards
7. **FAQs** — accordion (6 items)
8. **Contact** — form + detail rows (shows “Not published yet” when empty)
9. **Footer** (via `SiteLayout`) — CTA band + link columns + legal

**Missing vs task v2 brief:** no dedicated mobile-app section; no interactive product-tour tabs; no scroll-progress bar.

**Repeated / weak themes:** “connected records / one view” appears in hero, challenge, capabilities intro, how-it-works, about, and footer. Audiences copy is thin. Contact details show empty placeholders. Capabilities section is very long (13 full cards).

---

## Content and assets

- **Copy:** mostly `features/marketing/constants/landing.ts` (plus navigation, about, contact, shell).
- **Assets:** `aisr-admin-dashboard.png` (hero), `shared/assets/logo/aisr-mark.png` / `RoadMark`, favicon in `public/`.
- **Contact config:** `siteConfig.email|phone|address` are empty strings.

---

## Safe to import vs do not touch

**Safe imports (do not edit):** `Logo` / `RoadMark`, `siteConfig`, `usePageTitle` (or extend carefully), `Button` / `buttonVariants`, `ContactForm` logic pattern, `lucide-react`, framer-motion, theme tokens from `index.css`, `publishedHref`.

**Do not modify for v2 isolation:** any v1 section under `components/sections/*`, `LandingPage.tsx`, v1 `Navbar`/`Footer`, `landing.ts` copy, `HeroDashboard` image usage, About/Contact/Privacy/Terms pages.

**Necessary infra edits (not v1 UI):** `app/routes.tsx`, marketing `index.ts`, optional new `app/layouts/*` for `/2`.

---

## Problems for v2 to avoid

- [ ] Raster hero dashboard + heavy shadow/wrapper feel; negative-margin overlap
- [ ] `MockFrame` / card chrome wrapping every preview
- [ ] Thirteen full capability rows — fatiguing; hard to scan
- [ ] Repeated “connected platform” messaging across many sections
- [ ] “Not published yet” contact placeholders when config is empty
- [ ] No mobile-app section despite product surface
- [ ] No product-tour interactivity (Overview / Map / Alerts)
- [ ] Dense card styling and multi-layer glow/shadow on almost every block
- [ ] Hero uses a PNG that is larger than coded UI would be
- [ ] Sign In CTA goes to `/contact` (dead-end feel)

---

## v2 build plan

### Route

- Path: `/2`
- Layout: new `LandingV2Layout` (skip link + outlet; **no** v1 Navbar/Footer)
- Meta: noindex; custom title/description via page effect / document head
- Export: `LandingV2Page` from `features/marketing/index.ts`

### Folder

```
src/features/marketing/landing-v2/
  LandingV2Page.tsx
  content.ts                 # all copy
  tokens.css                 # v2 design tokens (scoped)
  components/
    V2Navbar.tsx
    V2ScrollProgress.tsx
    V2Footer.tsx
    V2ContactForm.tsx        # validation + honest success (mailto if published)
    visuals/                 # coded dashboard, map, alerts, phones
  sections/
    V2Hero.tsx
    V2Problem.tsx
    V2HowItWorks.tsx
    V2Capabilities.tsx
    V2ProductTour.tsx
    V2Audiences.tsx
    V2Responsible.tsx
    V2MobileApp.tsx
    V2Faq.tsx
    V2FinalCta.tsx
    V2Contact.tsx
  hooks/
    useV2Reveal.ts
    usePrefersReducedMotion.ts
src/app/layouts/LandingV2Layout.tsx
```

### Section order (one message each)

1. Hero — product preview (coded)
2. Problem — disconnected → snap-together
3. How it works — sticky/horizontal steps
4. Capabilities — 4–5 clusters (tabs/bento)
5. Product tour — Overview / Fleet map / Alerts
6. Who it is for — role tabs
7. Responsible by design — 4 principles
8. Mobile app — two phone UIs, early access CTA
9. FAQ — 6–8 items
10. Final CTA → Contact → Footer

### Isolation

- Zero edits to v1 section files or `LandingPage.tsx`
- Shared Logo/fonts/icons/siteConfig imported only
- v2 tokens local; brand navy + sky blue retained
