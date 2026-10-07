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
  title?: string;
  organization?: string;
  year?: number;
  accessed?: string; // ISO date the source was read
}

// Source-verification state for a profile. "source-verified" means the populated
// fields were checked against the listed references; it does NOT mean a clinician
// has reviewed or validated the profile. Fields that could not be sourced carry the
// literal text "Not verified — requires clinical review".
export interface VerificationInfo {
  status: "source-verified" | "unverified";
  lastReviewed: string; // e.g. "October 2026"
  note?: string;
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
  stewardshipNotes?: string[];
  references: ReferenceItem[];
  verification?: VerificationInfo;
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
