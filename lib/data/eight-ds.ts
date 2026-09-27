export interface EightD {
  id: string;
  number: number;
  title: string;
  description: string;
}

export const eightDs: EightD[] = [
  { id: "diagnosis", number: 1, title: "Diagnosis", description: "Make the right clinical diagnosis." },
  {
    id: "drug",
    number: 2,
    title: "Drug",
    description:
      "Use the right antimicrobial drug according to the suspected or confirmed pathogen, infection site, allergies, resistance patterns, and patient-specific factors.",
  },
  {
    id: "dosage",
    number: 3,
    title: "Dosage",
    description:
      "Use the right dose according to the infection, patient characteristics, renal/hepatic function, and other relevant factors.",
  },
  {
    id: "diagnostic-microbiology",
    number: 4,
    title: "Diagnostic Microbiology",
    description: "Perform appropriate microbiological investigations to establish the etiologic agent whenever appropriate.",
  },
  {
    id: "de-escalation",
    number: 5,
    title: "De-escalation",
    description: "Narrow-spectrum therapy and/or adjust antimicrobial therapy when appropriate based on clinical response and microbiological results.",
  },
  { id: "duration", number: 6, title: "Duration", description: "Administer antimicrobials only for the recommended duration." },
  {
    id: "debridement-drainage",
    number: 7,
    title: "Debridement / Drainage",
    description: "Provide appropriate source control, including drainage of abscesses and removal of necrotic tissue or foreign material when required.",
  },
  {
    id: "disease-prevention-control",
    number: 8,
    title: "Disease Prevention & Control",
    description: "Implement infection-prevention and control measures to prevent transmission of infection.",
  },
];
