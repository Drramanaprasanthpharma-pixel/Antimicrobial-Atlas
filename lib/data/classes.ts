import { AntibioticClass } from "@/lib/types";

export const classes: AntibioticClass[] = [
  { id: "c1", slug: "penicillins", name: "Penicillins", description: "Beta-lactams that block cell-wall synthesis; foundational and widely combined with inhibitors.", memberCount: 1, keyFeature: "Beta-lactam ring, PBP binding" },
  { id: "c2", slug: "cephalosporins", name: "Cephalosporins", description: "Generational beta-lactams with broadening gram-negative coverage across generations.", memberCount: 1, keyFeature: "Generational spectrum shift" },
  { id: "c3", slug: "carbapenems", name: "Carbapenems", description: "Broadest-spectrum beta-lactams, often reserved for resistant gram-negative infections.", memberCount: 1, keyFeature: "Ultra-broad spectrum" },
  { id: "c4", slug: "macrolides", name: "Macrolides", description: "Protein-synthesis inhibitors valued for atypical pathogen coverage.", memberCount: 1, keyFeature: "50S ribosomal binding" },
  { id: "c5", slug: "fluoroquinolones", name: "Fluoroquinolones", description: "DNA gyrase/topoisomerase inhibitors with broad oral bioavailability.", memberCount: 0, keyFeature: "DNA gyrase inhibition" },
  { id: "c6", slug: "aminoglycosides", name: "Aminoglycosides", description: "Concentration-dependent agents requiring careful renal and ototoxicity monitoring.", memberCount: 0, keyFeature: "Concentration-dependent killing" },
  { id: "c7", slug: "glycopeptides", name: "Glycopeptides", description: "Cell-wall synthesis inhibitors reserved for resistant gram-positive infections.", memberCount: 1, keyFeature: "D-Ala-D-Ala binding" },
  { id: "c8", slug: "tetracyclines", name: "Tetracyclines", description: "Broad-spectrum protein-synthesis inhibitors with tissue penetration advantages.", memberCount: 0, keyFeature: "30S ribosomal binding" },
  { id: "c9", slug: "oxazolidinones", name: "Oxazolidinones", description: "Newer agents effective against resistant gram-positive organisms including VRE.", memberCount: 1, keyFeature: "23S rRNA binding" },
];
