export interface AMSDefinition {
  id: string;
  org: "WHO" | "CDC" | "IDSA";
  fullName: string;
  definition: string;
}

// Verbatim definitions supplied by the site owner as the clinical source of record.
export const amsDefinitions: AMSDefinition[] = [
  {
    id: "who",
    org: "WHO",
    fullName: "World Health Organization",
    definition:
      "Antimicrobial stewardship (AMS) is defined as a coherent set of actions that promote the responsible use of antimicrobials. This definition can be applied at the individual, national, and global levels, and across human health, animal health, and environmental health.",
  },
  {
    id: "cdc",
    org: "CDC",
    fullName: "Centers for Disease Control and Prevention",
    definition:
      "Antimicrobial stewardship is defined as the use of the right antimicrobial, for the right patient, at the right time, at the right dose, and for the right duration, causing the least harm to the patient and future patients.",
  },
  {
    id: "idsa",
    org: "IDSA",
    fullName: "Infectious Diseases Society of America",
    definition:
      "Antimicrobial stewardship refers to interventions designed to improve and measure the appropriate use of antimicrobials by promoting the selection of the optimal antimicrobial drug regimen, dose, duration of therapy, and route of administration.",
  },
];

export const amsGoals: string[] = [
  "Timely and optimal antimicrobial selection",
  "Appropriate drug selection",
  "Correct dose",
  "Appropriate duration",
  "Appropriate route of administration",
  "Prevention of unnecessary antimicrobial exposure",
  "Improving clinical outcomes",
  "Minimizing antimicrobial resistance",
  "Reducing ecological/adverse effects such as C. difficile infection",
];
