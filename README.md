# Antimicrobial Atlas

A frontend-only reference site for healthcare professionals \u2014 clinical pharmacists,
physicians, microbiologists, and pharmacy/medical students \u2014 covering antimicrobial
agents, pathogens, and stewardship, with an interactive 3D hero visualization. Built as a
scaffold ready for a future Firebase/Firestore backend.

> **Antibiotic profiles are being progressively source-verified.** Only profiles marked
> "Source-verified" have been checked against the references listed on them; all other
> antibiotic fields read "Not verified — requires clinical review" — see "Clinical Content
> Verification" below. The Antimicrobial Stewardship content (definitions, the
> 8 Ds, the goals list) was supplied directly by the site owner as source content and
> reproduced as given \u2014 see "Content sources" below.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [drei](https://github.com/pmndrs/drei) for the 3D hero
- [Lucide](https://lucide.dev) icons

No database, authentication, or API layer is included yet \u2014 see "What's next" below.

## Homepage structure

1. Hero (3D molecule visual + prominent search)
2. Antimicrobial Stewardship \u2014 intro, goals, WHO / CDC / IDSA definition cards
3. The 8 Ds of Antimicrobial Stewardship \u2014 interactive, click-to-expand cards
4. AMS as a clinical decision framework \u2014 vertical pathway diagram
5. Antimicrobial agents (drug classes)
6. Empirical antimicrobial therapy (teaser \u2192 `/ams`)
7. Antibiotic database (teaser \u2192 `/antibiotics`)
8. Microbiology & pathogens (teaser \u2192 `/microbiology`)
9. Clinical tools
10. Resources & references

## Pages

| Route | Description |
| --- | --- |
| `/` | Home \u2014 see structure above |
| `/antibiotics` | Searchable antibiotic list |
| `/antibiotics/[slug]` | Full antibiotic profile (mechanism, spectrum, dosing, PK/PD, etc.) |
| `/classes` | Antimicrobial agent classes (penicillins, cephalosporins, carbapenems, \u2026) |
| `/spectrum` | Interactive antibiotic \u00d7 organism susceptibility matrix |
| `/ams` | Antimicrobial stewardship pillars (empirical therapy, de-escalation, IV-to-oral, dose/duration optimization) |
| `/microbiology` | Core microbiology concepts (gram stain, culture, MIC, susceptibility) |
| `/resistance` | Resistance mechanisms (ESBL, AmpC, MRSA, VRE, carbapenem resistance) |
| `/admin` | Visual-only admin dashboard placeholder (no backend wiring yet) |

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
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout, fonts, Navbar/Footer shell
│   ├── page.tsx                  # Home (AMS, 8 Ds, pathway, agents, database, etc.)
│   ├── globals.css               # Design tokens, glass utility, molecular backdrop
│   ├── antibiotics/{page.tsx,[slug]/page.tsx}
│   ├── classes/page.tsx
│   ├── spectrum/page.tsx
│   ├── ams/page.tsx
│   ├── microbiology/page.tsx
│   ├── resistance/page.tsx
│   └── admin/page.tsx
├── components/
│   ├── layout/                   # Navbar, Footer
│   ├── three/                    # Hero3D (wrapper) + MoleculeScene (R3F canvas)
│   ├── search/                   # SearchBar
│   ├── antibiotics/              # AntibioticCard, AntibioticHeader, InformationSection
│   ├── classes/                  # ClassCard
│   ├── spectrum/                 # SpectrumMatrix
│   ├── references/               # ReferenceCard, ResourceLinkCard
│   ├── tools/                    # ClinicalToolCard
│   ├── admin/                    # AdminCard
│   ├── ams/                      # AMSDefinitionCard, EightDCard, AMSPathwayFlow
│   └── ui/                       # PageHeader, DemoBanner
├── lib/
│   ├── types.ts                  # Shared TS interfaces (mirrors planned Firestore schema)
│   └── data/                     # antibiotics, classes, tools, organisms, ams, ams-definitions,
│                                  # eight-ds, ams-pathway, resources, microbiology, resistance
└── public/
```

## Design

Deep navy base with teal, cyan and emerald accents on glassmorphism panels \u2014 a
scientific/clinical feel with a subtle molecular dot-pattern backdrop behind the AMS
section. Colors, type and the `.glass` / `.molecular-backdrop` utilities are defined as
CSS custom properties in `app/globals.css` \u2014 change them there to re-theme the whole
app.

The 3D hero (`components/three/Hero3D.tsx`) renders an abstract molecule using React
Three Fiber. It falls back to a static gradient orb when WebGL is unavailable or the
visitor has `prefers-reduced-motion` enabled, and reduces geometry density on narrow
viewports.

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
  from a supplied textbook table (classification of antimicrobial agents \u2014
  class/mechanism, drugs, spectrum of activity, mechanism of resistance). No dosing,
  PK/PD, interactions, adverse effects or clinical recommendations were added \u2014 only
  what appeared in the source table. Where a table cell was illegible in the source
  photo, the value is the literal string `"[TEXT UNCLEAR]"` rather than a guess; where a
  cell was genuinely blank in the source, the UI shows "Not stated in source."

## `/agents` \u2014 Antimicrobial Agents classification browser

A new, separate section (does not modify the existing `/classes` or `/antibiotics`
pages or their data):

- `lib/data/agents.ts` \u2014 typed, book-faithful data: `MajorSection` (book sections A\u2013F)
  \u2192 `ClassGroup` (e.g. \u03b2-Lactam Antibiotics) \u2192 `Subclass` (e.g. Penicillins,
  Cephalosporins) \u2192 `DrugVariant` (drugs + spectrum of activity, with an optional
  label for book sub-rows like "1st generation"). Each `Subclass` also carries its own
  `mechanismOfResistance` list, matching the book's table exactly.
- `components/agents/AgentsExplorer.tsx` \u2014 client component rendering the three-level
  expand/collapse tree (Section \u2192 Class \u2192 Subclass \u2192 drugs / spectrum /
  resistance), with a live search box that filters by drug name, class name, or any
  visible text and auto-expands matches. Touch-friendly tap targets throughout.
- `components/agents/GlossaryPanel.tsx` \u2014 renders the abbreviation footnote from the
  source table (MSSA, MRSA, CA-MRSA, ESBL, VRE).
- `app/agents/page.tsx` \u2014 the route itself, reusing the existing `PageHeader` and
  `Alert` components and the site's glass-card design system.

Swapping this for Firestore later: replace the `antimicrobialAgents` array in
`lib/data/agents.ts` with a fetch of a collection shaped the same way (`MajorSection[]`)
\u2014 `AgentsExplorer` only needs that shape as a prop, so no component changes required.

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
- Current status: **1 of 6** profiles is source-verified — ceftriaxone, from a single
  FDA-approved manufacturer label (Hospira, revised 10/2017); its pharmacodynamics field
  is still unverified. The other five (vancomycin, meropenem, azithromycin, linezolid,
  piperacillin/tazobactam) have had their earlier demo values removed and are awaiting
  source review. Not all content is validated.

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
`renalAdjustment`, `pharmacokinetics`, `references`, \u2026). `lib/data/antibiotics.ts`
currently holds six entries in that shape (one source-verified, five awaiting verification) \u2014 swapping that file's source for a
Firestore query later shouldn't require touching any component. The homepage never
hard-codes antibiotic content directly; it always imports from `lib/data/*`.

## What's next

1. Set up Firebase project + Firestore collections matching `lib/types.ts`
2. Replace `lib/data/*` static arrays with Firestore reads (e.g. via a small `lib/db.ts`)
3. Wire the search bar to a real cross-field search (antibiotic, pathogen, infection,
   drug class, mechanism, spectrum, dose, renal/hepatic adjustment, interactions,
   adverse effects, resistance, AMS topics)
4. Add authentication for the `/admin` area
5. Wire `/admin` forms to real create/update/delete operations
6. Continue source verification of the remaining antibiotic profiles and add a human clinical review step

## Pre-push checklist

- [x] `npm run build` succeeds
- [x] `npm run lint` \u2014 no errors (one benign `no-page-custom-font` warning)
- [x] Responsive layout checked at mobile/tablet/desktop breakpoints
- [x] All nav links resolve (`/antibiotics`, `/classes`, `/spectrum`, `/ams`,
      `/microbiology`, `/resistance`, `/admin`)
- [x] Homepage sections render: hero, AMS intro + definitions, 8 Ds, pathway flow,
      agents, empirical therapy teaser, database, microbiology, tools, resources
- [x] Search UI functional on `/antibiotics` (client-side filter)

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

No secrets, API keys, or credentials are present in this repo \u2014 there is nothing to
scrub before pushing.
