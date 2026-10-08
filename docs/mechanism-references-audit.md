# Mechanism reference audit — 3D viewer (`public/atlas-3d-mechanism.html`)

Generated 2026-10-08. Method: every cited record was looked up in PubMed by PMID and its title, authors, journal, year and DOI were checked against the PubMed record. Where PubMed provided an abstract, the abstract was read to judge which displayed claims it supports (`abstract reviewed`). Where PubMed has no abstract, support is inferred from title/MeSH only (`title-only`) and is **not** counted as verification. Full texts were not read.

## Summary

| Item | Count |
|---|---|
| Total antibiotics in the viewer | 300 (15 built-in with full mechanism text + 285 from the WHO ATC/DDD layer) |
| Built-in mechanisms with verified references (target **and** primary mechanism each supported by ≥2 independent abstract-reviewed sources) | 10 of 15 |
| Built-in mechanisms requiring additional references | 5 of 15 |
| WHO-layer records with class-level references only (target claim only, labelled class-level) | 238 |
| WHO-layer records with no animated mechanism → "Mechanism reference unavailable" | 47 |
| Distinct references in the library | 39 |
| References not independently verified (title-only, abstract unavailable) | 8 |

## Built-in antibiotics

| Drug | Refs | Abstract-reviewed | Target (a) | Mechanism (a) | Binding (a) | Downstream (a) | Cellular (a) | Outcome (a) | Status |
|---|---|---|---|---|---|---|---|---|---|
| penicillin-g | 7 | 5 | 4 | 2 | 1 | 0 | 0 | 1 | verified (target + mechanism) |
| ceftriaxone | 7 | 5 | 4 | 2 | 1 | 0 | 0 | 1 | verified (target + mechanism) |
| meropenem | 8 | 6 | 5 | 2 | 2 | 0 | 0 | 1 | verified (target + mechanism) |
| vancomycin | 3 | 2 | 2 | 2 | 2 | 1 | 0 | 0 | verified (target + mechanism) |
| azithromycin | 3 | 3 | 3 | 2 | 1 | 0 | 2 | 0 | verified (target + mechanism) |
| doxycycline | 3 | 3 | 3 | 1 | 2 | 0 | 0 | 0 | needs additional references |
| gentamicin | 3 | 2 | 1 | 1 | 1 | 0 | 0 | 1 | needs additional references |
| linezolid | 3 | 3 | 1 | 2 | 1 | 1 | 0 | 1 | needs additional references |
| ciprofloxacin | 3 | 3 | 3 | 3 | 1 | 2 | 3 | 2 | verified (target + mechanism) |
| levofloxacin | 3 | 3 | 3 | 3 | 1 | 2 | 3 | 2 | verified (target + mechanism) |
| metronidazole | 3 | 2 | 2 | 1 | 1 | 2 | 2 | 1 | needs additional references |
| rifampicin | 3 | 2 | 2 | 2 | 1 | 1 | 0 | 0 | verified (target + mechanism) |
| colistin | 2 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | needs additional references |
| trimethoprim | 3 | 2 | 2 | 2 | 0 | 0 | 0 | 0 | verified (target + mechanism) |
| sulfamethoxazole | 2 | 2 | 2 | 2 | 1 | 0 | 0 | 0 | verified (target + mechanism) |

"(a)" = number of abstract-reviewed sources supporting that claim. Downstream, cellular and outcome claims are mostly supported by fewer than two sources; see the gaps below.

## Claims without adequate evidence (displayed in the panel as "Not supported by the cited sources")

- **penicillin-g**: target location (periplasm / outer face of the cytoplasmic membrane); downstream effect (osmotic lysis); bactericidal outcome supported only by a review-level source
- **ceftriaxone**: drug-specific PBP targets (cited sources are class-level β-lactam evidence); target location; downstream effect (lysis)
- **meropenem**: PBP3 emphasis (cited source shows strongest binding to PBP2 of E. coli / P. aeruginosa); target location; downstream effect (lysis)
- **vancomycin**: bactericidal outcome / lysis; cellular consequence
- **azithromycin**: azithromycin-specific ribosome structure (cited structures are other macrolides); bacteriostatic outcome
- **doxycycline**: doxycycline-specific ribosome structure (cited structures are tetracycline); bacteriostatic outcome; cellular consequence
- **gentamicin**: gentamicin-specific structure (cited structures are other aminoglycosides); membrane damage → cell death (only a title-only source); second abstract-reviewed source for the mechanism
- **linezolid**: P-site wording: the cited crystal structure places linezolid in the A-site pocket of the peptidyl-transferase centre; second abstract-reviewed source for the target
- **ciprofloxacin**: ciprofloxacin-specific structure (cited sources are class-level quinolone evidence)
- **levofloxacin**: levofloxacin-specific dual-targeting data (cited sources are class-level quinolone evidence)
- **metronidazole**: second abstract-reviewed source for the reduction-activation mechanism (only one abstract states it); cited abstracts are older reviews; no recent primary mechanism study cited
- **rifampicin**: bactericidal outcome supported only by a review-level source; β-subunit/rpoB detail rests on a single abstract-reviewed structure paper
- **colistin**: displacement of Mg²⁺/Ca²⁺ from LPS; permeability/leakage step; second abstract-reviewed source for the target
- **trimethoprim**: competitive inhibition detail; folate depletion → reduced DNA synthesis; growth-inhibition outcome
- **sulfamethoxazole**: folate depletion → reduced DNA synthesis; growth-inhibition outcome

## References that could not be independently verified (title-only)

- Waxman DJ, Strominger JL. Penicillin-binding proteins and the mechanism of action of beta-lactam antibiotics. Annu Rev Biochem. 1983;52:825-69. PMID 6351730
- Tipper DJ, Strominger JL. Mechanism of action of penicillins: a proposal based on their structural similarity to acyl-D-alanyl-D-alanine. Proc Natl Acad Sci U S A. 1965;54(4):1133-41. PMID 5219821
- Kahne D, Leimkuhler C, Lu W, Walsh C. Glycopeptide and lipoglycopeptide antibiotics. Chem Rev. 2005;105(2):425-48. PMID 15700951
- Davis BD. Mechanism of bactericidal action of aminoglycosides. Microbiol Rev. 1987;51(3):341-50. PMID 3312985
- Edwards DI. Nitroimidazole drugs--action and resistance mechanisms. I. Mechanisms of action. J Antimicrob Chemother. 1993;31(1):9-20. PMID 8444678
- Floss HG, Yu TW. Rifamycin-mode of action, resistance, and biosynthesis. Chem Rev. 2005;105(2):621-32. PMID 15700959
- Velkov T, Thompson PE, Nation RL, Li J. Structure-activity relationships of polymyxin antibiotics. J Med Chem. 2010;53(5):1898-916. PMID 19874036
- Bushby SR, Hitchings GH. Trimethoprim, a sulphonamide potentiator. Br J Pharmacol Chemother. 1968;33(1):72-90. PMID 5301731

## Notes

- **Linezolid wording discrepancy:** the viewer's existing text says "P-site (peptidyl-transferase centre)"; the cited crystal-structure abstract (PMID 18757750) places linezolid in the A-site pocket of the peptidyl-transferase centre. The existing text and visualization were left unchanged; please review.
- Several drug-level statements rest on class-level evidence (e.g. azithromycin → macrolide structures, doxycycline → tetracycline structures, gentamicin → other aminoglycosides). The panel flags these as gaps.
- "Bacteriostatic" outcomes for azithromycin, doxycycline, trimethoprim and sulfamethoxazole have no cited source.
- Colistin "displaces Mg²⁺/Ca²⁺" and the permeability/leakage step have no abstract-verified source.
- The 238 class-level records show only target-class references; their drug-specific mapping is labelled "not verified per drug" in the dataset itself.
