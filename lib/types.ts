// Shared types for Antimicrobial Atlas.
// Field set is designed to map 1:1 onto a future Firestore "antibiotics" collection.

export interface DosingRegimen {
  indication: string;
  dose: string;
  route: string;
  frequency: string;
  notes?: string;
}

export interface RenalAdjustment {
  crClRange: string;
  adjustment: string;
}

export interface SpectrumEntry {
  organism: string;
  susceptibility: "susceptible" | "variable" | "resistant" | "not-covered";
}

export interface ReferenceItem {
  id: string;
  citation: string;
  url?: string;
}

export interface Antibiotic {
  id: string;
  slug: string;
  genericName: string;
  brandNames?: string[];
  class: string;
  subclass?: string;
  status: "draft" | "published";
  overview: string;
  mechanism: string;
  spectrumSummary: string;
  spectrum: SpectrumEntry[];
  indications: string[];
  dosing: DosingRegimen[];
  renalAdjustment: RenalAdjustment[];
  hepaticAdjustment: string;
  pharmacokinetics: { label: string; value: string }[];
  pharmacodynamics: string;
  interactions: string[];
  adverseEffects: string[];
  contraindications: string[];
  resistance: string;
  monitoring: string[];
  references: ReferenceItem[];
}

export interface AntibioticClass {
  id: string;
  slug: string;
  name: string;
  description: string;
  memberCount: number;
  keyFeature: string;
}

export interface ClinicalTool {
  id: string;
  name: string;
  description: string;
  href: string;
  status: "available" | "coming-soon";
}
