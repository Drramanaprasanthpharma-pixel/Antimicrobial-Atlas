# Antimicrobial Atlas

A frontend-only reference site for healthcare professionals — clinical pharmacists,
physicians, microbiologists, and pharmacy/medical students — covering antimicrobial
agents, pathogens, and stewardship, with an interactive 3D hero visualization. Built as a
scaffold ready for a future Firebase/Firestore backend.

> **Antibiotic profiles are source-verified against the references listed on them, one
> manufacturer label per profile; this is not a clinical validation.** Fields that could
> not be sourced read "Not verified — requires clinical review" — see "Clinical Content
> Verification" below. The Antimicrobial Stewardship content (definitions, the
> 8 Ds, the goals list) was supplied directly by the site owner as source content and
> reproduced as given — see "Content sources" below.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [drei](https://github.com/pmndrs/drei) for the 3D hero
- [Lucide](https://lucide.dev) icons

No database, authentication, or API layer is included yet — see "What's next" below.

## Homepage structure

The homepage (`app/page.tsx`) currently contains, in order:

1. Hero — 3D bacteria scene
2. Antimicrobial Stewardship — intro, goals, WHO / CDC / IDSA definition cards
3. The 8 Ds of Antimicrobial Stewardship — interactive, click-to-expand cards
4. AMS as a clinical decision framework — vertical pathway diagram
5. Antimicrobial agents (drug classes)
6. Empirical antimicrobial therapy (informational card)
7. Antibiotic database — four antibiotic cards with source-verification status and references
8. Microbiology & pathogens
9. Clinical tools
10. Resources & references

## Routes

Only the routes below exist in the current codebase. Earlier versions of this project also had `/antibiotics`, `/antibiotics/[slug]`, `/classes`, `/spectrum`, `/ams`, `/microbiology`, `/resistance` and `/admin`; those pages were removed and are **not** part of the current app.

| Route | Description |
| --- | --- |
| `/` | Home — see structure above |
| `/agents` | Antimicrobial agents classification browser (searchable expand/collapse tree) |

Navigation: the navbar links to `/agents`; the footer links to `/agents`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
antimicrobial-atlas/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout, fonts, Navbar/Footer shell
│   ├── page.tsx                  # Home (AMS, 8 Ds, pathway, agents, database, etc.)
│   ├── globals.css               # Design tokens and utilities
│   └── agents/page.tsx           # /agents
├── components/
│   ├── layout/                   # Navbar, Footer
│   ├── three/                    # Hero3D, Bacteria3D, BacteriaScene, Pills (React Three Fiber)
│   ├── search/                   # SearchBar
│   ├── antibiotics/              # AntibioticCard (source-verification status + references)
│   ├── agents/                   # AgentsExplorer, GlossaryPanel
│   ├── classes/                  # ClassCard
│   ├── references/               # ResourceLinkCard
│   ├── tools/                    # ClinicalToolCard
│   ├── ams/                      # AMSDefinitionCard, EightDCard, AMSPathwayFlow
│   └── ui/                       # Alert, Badge, PageHeader, DemoBanner
├── lib/
│   ├── types.ts                  # Shared TS interfaces
│   └── data/                     # antibiotics, agents, classes, tools, ams-definitions,
│                                 # eight-ds, ams-pathway, resources, microbiology
└── public/
```

## Design

White page background with black text. Colors, type and the `.glass` utilities are defined
as CSS custom properties in `app/globals.css` — change them there to re-theme the app.

The 3D hero (`components/three/Hero3D.tsx` → `Bacteria3D` → `BacteriaScene`) renders a 3D
bacteria scene with React Three Fiber and is loaded client-side only (dynamic import, no SSR).

## Content sources

- **Antimicrobial stewardship definitions** (WHO, CDC, IDSA), the **stewardship goals
  list**, and the **8 Ds** are reproduced as supplied by the site owner in
  `lib/data/ams-definitions.ts` and `lib/data/eight-ds.ts`.
- **Antibiotic profiles, dosing, and PK/PD values** in `lib/data/antibiotics.ts` are being
  replaced with content taken from regulatory prescribing information and other
  authoritative sources, each profile carrying its own `references` and a `verification`
  status. Unsourced fields are explicitly marked "Not verified — requires clinical review"
  rather than estimated. See "Clinical Content Verification" below.
- **The `/agents` classification browser** (`lib/data/agents.ts`) is transcribed directly
  from a supplied textbook table (classification of antimicrobial agents —
  class/mechanism, drugs, spectrum of activity, mechanism of resistance). No dosing,
  PK/PD, interactions, adverse effects or clinical recommendations were added — only
  what appeared in the source table. Where a table cell was illegible in the source
  photo, the value is the literal string `"[TEXT UNCLEAR]"` rather than a guess; where a
  cell was genuinely blank in the source, the UI shows "Not stated in source."

## `/agents` — Antimicrobial Agents classification browser

A separate section with its own data (`lib/data/agents.ts`), independent of
`lib/data/antibiotics.ts` and `lib/data/classes.ts`:

- `lib/data/agents.ts` — typed, book-faithful data: `MajorSection` (book sections A–F)
  → `ClassGroup` (e.g. β-Lactam Antibiotics) → `Subclass` (e.g. Penicillins,
  Cephalosporins) → `DrugVariant` (drugs + spectrum of activity, with an optional
  label for book sub-rows like "1st generation"). Each `Subclass` also carries its own
  `mechanismOfResistance` list, matching the book's table exactly.
- `components/agents/AgentsExplorer.tsx` — client component rendering the three-level
  expand/collapse tree (Section → Class → Subclass → drugs / spectrum /
  resistance), with a live search box that filters by drug name, class name, or any
  visible text and auto-expands matches. Touch-friendly tap targets throughout.
- `components/agents/GlossaryPanel.tsx` — renders the abbreviation footnote from the
  source table (MSSA, MRSA, CA-MRSA, ESBL, VRE).
- `app/agents/page.tsx` — the route itself, reusing the existing `PageHeader` and
  `Alert` components and the site's glass-card design system.

Swapping this for Firestore later: replace the `antimicrobialAgents` array in
`lib/data/agents.ts` with a fetch of a collection shaped the same way (`MajorSection[]`)
— `AgentsExplorer` only needs that shape as a prop, so no component changes required.

## Clinical Content Verification

Clinical information is being progressively reviewed against authoritative guidelines,
regulatory prescribing information, and peer-reviewed literature. Each profile in
`lib/data/antibiotics.ts` has a `verification` status and a `references` list.

- **Source-verified** means the populated fields were checked against the listed
  references. It does **not** mean the profile has been clinically validated by a human
  reviewer.
- Any field that could not be established from a reliable source reads
  **"Not verified — requires clinical review"**. No doses, PK/PD values, resistance
  mechanisms or indications are estimated.
- Current status: all **6** profiles (ceftriaxone, vancomycin, meropenem, azithromycin,
  linezolid, piperacillin/tazobactam) are source-verified, each from **one**
  FDA-approved manufacturer label (see the `references` on each profile). This is a
  small starting set, not a validated database. Known limits:
  - Ceftriaxone (2017 label), meropenem (2022 label) and piperacillin/tazobactam (2017
    label) use older labeling; newer labeling and WHO/CDC/IDSA/ESCMID guidance have not
    been reconciled.
  - Azithromycin is sourced from the oral-formulation label only; intravenous
    azithromycin labeling was not reviewed.
  - Fields the source does not state are marked "Not verified — requires clinical
    review": numeric PK/PD targets (all six profiles), vancomycin hepatic dosing and
    resistance mechanisms, azithromycin renal/hepatic dosing, piperacillin/tazobactam
    resistance mechanisms, and the linezolid duration-to-indication mapping.
  - No human clinical review has been performed on any profile.

This platform is an educational / reference resource. It does not replace professional
clinical judgment, institutional guidelines, local antibiograms, or official prescribing
information.

## AI-Assisted Development

AI-assisted development tools were used for software development, code generation,
debugging, interface development, documentation, and information organization.
AI-generated output is not treated as an authoritative clinical source, and human review
and source verification are required for all clinical information. AI is not an author or
clinical decision-maker for this project.

## Data model

`lib/types.ts` defines the `Antibiotic` interface with the full field set the brief
specified (`genericName`, `class`, `mechanism`, `spectrum`, `dosing`,
`renalAdjustment`, `pharmacokinetics`, `references`, …). `lib/data/antibiotics.ts`
currently holds six entries in that shape, each with `references` and a `verification` status — swapping that file's source for a
Firestore query later shouldn't require touching any component. The homepage never
hard-codes antibiotic content directly; it always imports from `lib/data/*`.

## What's next

1. Set up Firebase project + Firestore collections matching `lib/types.ts`
2. Replace `lib/data/*` static arrays with Firestore reads (e.g. via a small `lib/db.ts`)
3. Wire the homepage search bar to a real cross-field search (antibiotic, pathogen, infection,
   drug class, mechanism, spectrum, dose, renal/hepatic adjustment, interactions,
   adverse effects, resistance, AMS topics)
4. If an admin area is reintroduced, add authentication for it
5. Wire any admin forms to real create/update/delete operations
6. Continue source verification of the remaining antibiotic profiles and add a human clinical review step

## Pre-push checklist

- [ ] `npm run lint` — no errors
- [ ] `npm run build` succeeds; build output lists only `/` and `/agents` as app routes
- [ ] Homepage renders: hero, AMS intro + definitions, 8 Ds, pathway flow, agents,
      empirical therapy card, antibiotic database cards, microbiology, tools, resources
- [ ] `/agents` renders, its search box filters
- [ ] Antibiotic cards show the source-verification line and references
- [ ] No secrets or tokens in the diff

## Deploying to GitHub

```bash
git add .
git commit -m "Add Antimicrobial Stewardship homepage sections and rebrand to Antimicrobial Atlas"
git push
```

If this is the first push for the repo, use the full sequence instead:

```bash
git init
git add .
git commit -m "Initial Antimicrobial Atlas frontend"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

No secrets, API keys, or credentials are present in this repo — there is nothing to
scrub before pushing.

## Mechanism references (3D viewer)

The 3D viewer's right-hand panel has a collapsible **References** section under Mechanism / Clinical relevance. It shows only the references tied to the selected antibiotic's mechanism, with `[n]` markers beside the mechanism, downstream-effect and outcome statements. Each antibiotic's `mechanism` object (target, binding, mechanismOfAction, downstreamEffect, cellularEffect, outcome, references[]) is built from the data block between `REFDATA-BEGIN` and `REFDATA-END` in `public/atlas-3d-mechanism.html`. Records without a verified mechanism show "Mechanism reference unavailable". See `docs/mechanism-references-audit.md` for the evidence audit.
