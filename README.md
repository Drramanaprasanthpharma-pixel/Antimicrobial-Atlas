# Antimicrobial Atlas

A frontend-only reference site for healthcare professionals \u2014 clinical pharmacists,
physicians, microbiologists, and pharmacy/medical students \u2014 covering antimicrobial
agents, pathogens, and stewardship, with an interactive 3D hero visualization. Built as a
scaffold ready for a future Firebase/Firestore backend.

> **Antibiotic profiles, dosing figures and PK/PD values are demo / placeholder data**
> written to exercise the UI. The Antimicrobial Stewardship content (definitions, the
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
- **Antibiotic profiles, dosing, and PK/PD values** in `lib/data/antibiotics.ts` are demo
  / placeholder content for interface scaffolding \u2014 not verified clinical guidance.
  Anything intended to go live needs review and replacement by a qualified source.

## Data model

`lib/types.ts` defines the `Antibiotic` interface with the full field set the brief
specified (`genericName`, `class`, `mechanism`, `spectrum`, `dosing`,
`renalAdjustment`, `pharmacokinetics`, `references`, \u2026). `lib/data/antibiotics.ts`
currently hard-codes six demo entries in that shape \u2014 swapping that file's source for a
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
6. Replace demo antibiotic content with reviewed, sourced material

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
