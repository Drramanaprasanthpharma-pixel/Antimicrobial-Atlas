# Antimicrobial Atlas — Antimicrobial Agents

A focused, single-section reference site covering **Antimicrobial Agents** only:
class/mechanism → drugs → spectrum of activity → mechanism of resistance,
transcribed from a source textbook table.

> Clinical content is transcribed as-is from the source table. No dosing,
> renal/hepatic adjustment, pharmacokinetics, interactions, adverse effects or
> clinical recommendations have been added. Where a source cell was blank, the
> UI shows "Not stated in source" rather than inventing a value.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Lucide](https://lucide.dev) icons

No database, authentication, backend, or API layer.

## Pages

| Route | Description |
| --- | --- |
| `/` | Redirects to `/agents` |
| `/agents` | Antimicrobial Agents classification browser (the only content section) |

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
├── app/
│   ├── layout.tsx            # Root layout, Navbar/Footer shell
│   ├── page.tsx              # Redirects "/" -> "/agents"
│   ├── globals.css           # White + red + black theme, Times New Roman
│   └── agents/page.tsx       # The Antimicrobial Agents page
├── components/
│   ├── layout/                # Navbar, Footer
│   ├── search/                 # SearchBar
│   ├── agents/                 # AgentsExplorer (expand/collapse + table), GlossaryPanel
│   └── ui/                     # PageHeader, Alert, Badge
└── lib/
    └── data/agents.ts         # Book-faithful classification data (unchanged structure)
```

## Design

White background, black (Times New Roman) text, red as the sole accent — a clean
academic/medical-reference look. Tokens live as CSS custom properties in
`app/globals.css` (`--red`, `--ink-0`, `--line`, etc.) — change them there to re-theme.

Interaction: three-level expand/collapse (Class/Mechanism → Subclass → drugs table),
plus a search box that filters the Agents data by drug, class, or resistance text.
On mobile the reference table becomes stacked cards; the same three fields
(Drugs / Spectrum of Activity / Mechanism of Resistance) are preserved either way.

## Data model

`lib/data/agents.ts` — `MajorSection` (book sections A–F) → `ClassGroup` (e.g.
β-Lactam Antibiotics) → `Subclass` (e.g. Penicillins) → `DrugVariant` (drugs +
spectrum of activity, with an optional sub-row label like "1st generation"). Each
`Subclass` also carries its own `mechanismOfResistance` list. This structure is
unchanged from the previous version of the site — only the UI and everything
outside the Agents section changed.
