# 3D mechanism audit (viewer: `public/atlas-3d-mechanism.html`)

Method: every cited paper was looked up in PubMed by PMID/citation and its title, authors, journal, year and DOI checked against the PubMed record; abstracts were read to confirm which claims they support. Full texts were not read. A claim without an abstract-level source is either left "Not available" or flagged in the panel's *Not supported by the cited sources* / class-level notes. Nothing was filled from memory without a source.

## Totals (300 records)

| Group | Records | Result |
|---|---|---|
| Detailed built-in antibiotics | 15 | Audited individually; **14 verified as written, 1 corrected (linezolid)** |
| Class-level mechanism text + verified references (new) | 236 | Mechanism, target and references now shown (previously "Not available") |
| Drug-specific mechanism text + verified references (new) | 23 | Drug-specific evidence cited |
| Mechanism reference unavailable | 26 | Labelled unavailable (see list) |

Of the 285 imported records: 238 have an animation (class-level 3D view); 47 had none and still have none because no available animation represents their mechanism accurately. 21 of those 47 now show verified *text-only* mechanisms; 26 remain unavailable.

## Corrections

1. **Linezolid (built-in):** target site said "P-site"; the cited crystal structure (Wilson 2008, PMID 18757750) places it in the **A-site pocket of the peptidyl-transferase centre**. Text corrected; the existing animation is unchanged.
2. **259 records showed "Not available" for target/mechanism/downstream effect.** Replaced by class-level or drug-specific text with references; the basis is labelled in the References panel.
3. **Ribosome animation differences were hard-coded to four drug names** (Gentamicin, Doxycycline, Azithromycin, Linezolid), so every other aminoglycoside, tetracycline, macrolide and oxazolidinone showed a generic ribosome. They now follow the drug class via `animationVariant` (aminoglycosides `ag` 14, tetracyclines `tc` 16, macrolides/ketolides `mac` 15, tedizolid `ox` 1). The four built-ins behave exactly as before.
4. Combination products are not given a single mechanism (see unavailable list) rather than showing the first component's mechanism as if it were the whole drug.

## Shared class mechanisms vs drug-specific differences

- **Drug-specific (23):** aztreonam (PBP3 selectivity), ceftaroline (also inhibits PBP2a of MRSA), tigecycline (stacks with C1054, resists TetM), streptomycin, chloramphenicol, clindamycin, iclaprim (DHFR; overcomes trimethoprim-resistant enzyme), telavancin (also depolarizes the membrane), oritavancin (dimerization/membrane anchoring), capreomycin, fidaxomicin, fusidic acid (×2 records), bacitracin (×2), mupirocin, nitrofurantoin, fosfomycin, spectinomycin, methenamine, daptomycin, gepotidacin, cycloserine.
- **Class-level (236):** β-lactams, glycopeptides, aminoglycosides, tetracyclines, macrolides/ketolides, quinolones, sulfonamides, DHFR inhibitors, nitroimidazoles, rifamycins, polymyxin B, thiamphenicol/lincomycin, tedizolid, streptogramins, lefamulin, nitrofurans and others. These are shared-class statements and are labelled "not verified for this specific drug" in the panel.

## No 3D animation by design (mechanism would be misrepresented)

fidaxomicin (different RNAP site from rifamycins), fusidic acid, bacitracin, mupirocin, fosfomycin (cytoplasmic MurA), daptomycin (membrane), spectinomycin (no verified misreading), capreomycin/enviomycin (30S–50S interface), streptogramins (dual component), lefamulin, nitrofurans (multi-target), methenamine (chemical activation), gepotidacin (single-strand breaks, not double-strand), cycloserine.

## Mechanism reference unavailable (26)

sulbactam, tazobactam, sulbactam and durlobactam; mandelic acid, nitroxoline, xibornol, clofoctol; and 15 antibacterial combination products (J01RA01–J01RA19 group: e.g. cefuroxime and metronidazole, ciprofloxacin and tinidazole, cefixime and azithromycin, tetracycline and nystatin).

## Remaining evidence gaps (shown in the panel)

- Downstream "lysis"/"cell-wall instability" statements for β-lactams, and target location, rest on textbook statements not confirmed by the cited abstracts.
- Bacteriostatic/bactericidal classification is verified only where a source states it (linezolid, chloramphenicol, clindamycin, aminoglycosides, quinolones, nitroimidazoles, polymyxins, telavancin, oritavancin, iclaprim, fosfomycin, daptomycin, methenamine, streptogramin combination); elsewhere it shows "not available".
- Title-only references (abstract unavailable in PubMed) are marked "not abstract-verified" and never counted as verification.
- Colistin's Mg²⁺/Ca²⁺ displacement and the three built-in gaps listed in each panel remain unsupported by the cited abstracts.
