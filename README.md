# Antibiotic Atlas

A frontend-only, demo-content reference site for exploring antibiotics — classification,
mechanism, spectrum, dosing and antimicrobial stewardship — with an interactive 3D hero
visualization. Built as a scaffold ready for a future Firebase/Firestore backend.

> **All clinical content in this repo is demo / placeholder data.** It is written to
> exercise the UI, not to be used for patient care. See "Demo content" below.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [drei](https://github.com/pmndrs/drei) for the 3D hero
- [Lucide](https://lucide.dev) icons

No database, authentication, or API layer is included yet — see "What's next" below.

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — 3D hero, search, popular antibiotics, classes, clinical tools |
| `/antibiotics` | Searchable antibiotic list |
| `/antibiotics/[slug]` | Full antibiotic profile (mechanism, spectrum, dosing, PK/PD, etc.) |
| `/classes` | Antibiotic classes (penicillins, cephalosporins, carbapenems, …) |
| `/spectrum` | Interactive antibiotic × organism susceptibility matrix |
| `/ams` | Antimicrobial stewardship pillars |
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
antibiotic-atlas/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout, fonts, Navbar/Footer shell
│   ├── page.tsx                # Home
│   ├── globals.css             # Design tokens (colors, type, glass utility)
│   ├── antibiotics/
│   │   ├── page.tsx            # Antibiotics list + search
│   │   └── [slug]/page.tsx     # Antibiotic detail
│   ├── classes/page.tsx
│   ├── spectrum/page.tsx
│   ├── ams/page.tsx
│   ├── microbiology/page.tsx
│   ├── resistance/page.tsx
│   └── admin/page.tsx
├── components/
│   ├── layout/                 # Navbar, Footer
│   ├── three/                  # Hero3D (wrapper) + MoleculeScene (R3F canvas)
│   ├── search/                 # SearchBar
│   ├── antibiotics/            # AntibioticCard, AntibioticHeader, InformationSection
│   ├── classes/                # ClassCard
│   ├── spectrum/                # SpectrumMatrix
│   ├── references/             # ReferenceCard
│   ├── tools/                  # ClinicalToolCard
│   ├── admin/                  # AdminCard
│   └── ui/                     # PageHeader, DemoBanner
├── lib/
│   ├── types.ts                # Shared TS interfaces (mirrors planned Firestore schema)
│   └── data/                   # Demo data: antibiotics, classes, tools, organisms, ams, microbiology, resistance
└── public/
```

## Design

Dark navy base with cyan/teal accents and glassmorphism panels, built for a clinical/
scientific feel. Colors, type and the `.glass` utility are defined as CSS custom
properties in `app/globals.css` — change them there to re-theme the whole app.

The 3D hero (`components/three/Hero3D.tsx`) renders an abstract molecule using React
Three Fiber. It falls back to a static gradient orb when WebGL is unavailable or the
visitor has `prefers-reduced-motion` enabled, and reduces geometry density on narrow
viewports.

## Demo content

Every antibiotic profile, dosing figure, PK/PD value and stewardship note is
placeholder text written to exercise the UI — not verified clinical guidance. Anything
intended to go live needs review and replacement by a qualified source before it's used
for real reference or teaching material.

## Data model

`lib/types.ts` defines the `Antibiotic` interface with the full field set the brief
specified (`genericName`, `class`, `mechanism`, `spectrum`, `dosing`,
`renalAdjustment`, `pharmacokinetics`, `references`, …). `lib/data/antibiotics.ts`
currently hard-codes six demo entries in that shape — swapping that file's source for a
Firestore query later shouldn't require touching any component.

## What's next

1. Set up Firebase project + Firestore collections matching `lib/types.ts`
2. Replace `lib/data/*` static arrays with Firestore reads (e.g. via a small `lib/db.ts`)
3. Add authentication for the `/admin` area
4. Wire `/admin` forms to real create/update/delete operations
5. Replace demo clinical content with reviewed, sourced material
6. Add a real search/filter API once the dataset grows beyond a static import

## Deploying to GitHub

See the repository root for exact commands, or run:

```bash
git init
git add .
git commit -m "Initial Antibiotic Atlas frontend"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

No secrets, API keys, or credentials are present in this repo — there is nothing to
scrub before pushing.
