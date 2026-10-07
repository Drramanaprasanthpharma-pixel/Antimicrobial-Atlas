import { Antibiotic } from "@/lib/types";

// Clinical content verification status (see README, "Clinical Content Verification").
//
// - Profiles with `verification.status === "source-verified"` were populated only from
//   the references listed on the profile. This is NOT a clinical validation.
// - Fields that could not be sourced hold NOT_VERIFIED instead of an estimate.
// - Profiles with status "unverified" had their earlier demo/placeholder values removed
//   and still need a source review before any clinical content is shown for them.

export const NOT_VERIFIED = "Not verified — requires clinical review";

const REVIEWED = "October 2026";

// Builds a profile whose clinical fields are all explicitly unverified.
function unverified(
  id: string,
  slug: string,
  genericName: string,
  cls: string,
  subclass?: string,
): Antibiotic {
  return {
    id,
    slug,
    genericName,
    class: cls,
    subclass,
    status: "draft",
    overview: NOT_VERIFIED,
    mechanism: NOT_VERIFIED,
    spectrumSummary: NOT_VERIFIED,
    spectrum: [],
    indications: [NOT_VERIFIED],
    dosing: [
      { indication: NOT_VERIFIED, dose: NOT_VERIFIED, route: NOT_VERIFIED, frequency: NOT_VERIFIED },
    ],
    renalAdjustment: [{ crClRange: NOT_VERIFIED, adjustment: NOT_VERIFIED }],
    hepaticAdjustment: NOT_VERIFIED,
    pharmacokinetics: [{ label: "Pharmacokinetics", value: NOT_VERIFIED }],
    pharmacodynamics: NOT_VERIFIED,
    interactions: [NOT_VERIFIED],
    adverseEffects: [NOT_VERIFIED],
    contraindications: [NOT_VERIFIED],
    resistance: NOT_VERIFIED,
    monitoring: [NOT_VERIFIED],
    stewardshipNotes: [NOT_VERIFIED],
    references: [],
    verification: {
      status: "unverified",
      lastReviewed: REVIEWED,
      note: "Earlier demo/placeholder values were removed. Class name is retained from the original scaffold and is itself not yet verified.",
    },
  };
}

export const antibiotics: Antibiotic[] = [
  {
    id: "1",
    slug: "ceftriaxone",
    genericName: "Ceftriaxone",
    class: "Cephalosporin",
    subclass: "Third-generation",
    status: "published",
    overview:
      "Semisynthetic, broad-spectrum cephalosporin antibacterial. Summarised from the FDA-approved manufacturer labeling (Hospira ADD-Vantage presentation, revised 10/2017); it should be used only for infections proven or strongly suspected to be caused by susceptible bacteria.",
    mechanism:
      "Bactericidal; acts by inhibiting bacterial cell wall synthesis. It retains activity in the presence of some beta-lactamases (both penicillinases and cephalosporinases) of Gram-negative and Gram-positive bacteria.",
    spectrumSummary:
      "Label lists activity in vitro and in clinical infections against most isolates of many Gram-negative organisms (e.g. E. coli, K. pneumoniae, H. influenzae, N. gonorrhoeae, N. meningitidis), Gram-positive organisms (e.g. S. aureus, S. pneumoniae, S. pyogenes) and some anaerobes. No activity against Chlamydia trachomatis; most C. difficile strains are resistant.",
    spectrum: [
      { organism: "Escherichia coli", susceptibility: "susceptible" },
      { organism: "Klebsiella pneumoniae", susceptibility: "susceptible" },
      { organism: "Haemophilus influenzae", susceptibility: "susceptible" },
      { organism: "Neisseria gonorrhoeae", susceptibility: "susceptible" },
      { organism: "Neisseria meningitidis", susceptibility: "susceptible" },
      { organism: "Streptococcus pneumoniae", susceptibility: "susceptible" },
      { organism: "Streptococcus pyogenes", susceptibility: "susceptible" },
      { organism: "Chlamydia trachomatis", susceptibility: "not-covered" },
      { organism: "Clostridioides difficile", susceptibility: "resistant" },
    ],
    indications: [
      "Lower respiratory tract infections",
      "Acute bacterial otitis media",
      "Skin and skin structure infections",
      "Complicated and uncomplicated urinary tract infections",
      "Uncomplicated gonorrhea (cervical/urethral and rectal; pharyngeal if non-penicillinase-producing strains)",
      "Pelvic inflammatory disease caused by N. gonorrhoeae",
      "Bacterial septicemia",
      "Bone and joint infections",
      "Intra-abdominal infections",
      "Meningitis",
      "Surgical prophylaxis",
    ],
    dosing: [
      {
        indication: "Usual adult dose",
        dose: "1 g to 2 g",
        route: "IV (this product); infuse over approximately 30 minutes",
        frequency: "Once daily, or in equally divided doses twice daily",
        notes:
          "Total daily dose should not exceed 4 g. Patients with hepatic impairment and significant renal impairment should not receive more than 2 g per day.",
      },
      {
        indication: "Surgical prophylaxis",
        dose: "1 g",
        route: "IV",
        frequency: "Single dose, 1/2 to 2 hours before surgery",
      },
      {
        indication: "Uncomplicated gonococcal infection",
        dose: "250 mg",
        route: "IM",
        frequency: "Single dose",
        notes:
          "Stated in the label for information only; the ADD-Vantage vial is not intended for IM use. Add antichlamydial coverage if C. trachomatis is a suspected pathogen.",
      },
      {
        indication: "Duration of therapy",
        dose: "—",
        route: "—",
        frequency: "Usual duration 4 to 14 days",
        notes:
          "Continue for at least 2 days after signs and symptoms resolve; longer in complicated infections; at least 10 days for S. pyogenes infections.",
      },
    ],
    renalAdjustment: [
      {
        crClRange: "Renal impairment (label gives no CrCl-based dose bands)",
        adjustment:
          "Patients with renal failure normally require no dosage adjustment at usual doses (excreted by both renal and biliary routes). With both hepatic dysfunction and significant renal disease, do not exceed 2 g daily.",
      },
      {
        crClRange: "Dialysis",
        adjustment:
          "Not removed by peritoneal dialysis or hemodialysis; no supplementary dose is required after dialysis. In 6 of 26 dialysis patients elimination was markedly reduced, so plasma concentrations should be monitored to determine whether dose adjustment is needed.",
      },
    ],
    hepaticAdjustment:
      "No dosage adjustment is necessary for hepatic dysfunction alone. With both hepatic dysfunction and significant renal disease, caution is advised and the dose should not exceed 2 g daily; close clinical monitoring is advised in severe renal plus hepatic dysfunction.",
    pharmacokinetics: [
      { label: "Absorption (IM)", value: "Completely absorbed; mean peak plasma concentration 2–3 h post-dose" },
      { label: "Protein binding", value: "Reversibly bound; ~95% at <25 mcg/mL, decreasing to ~85% at 300 mcg/mL" },
      { label: "Volume of distribution (healthy adults)", value: "5.8–13.5 L (dose range 0.15–3 g)" },
      { label: "Elimination half-life (healthy adults)", value: "5.8–8.7 h" },
      { label: "Plasma clearance / renal clearance", value: "0.58–1.45 L/h / 0.32–0.73 L/h" },
      { label: "Elimination", value: "33–67% excreted unchanged in urine; remainder secreted in bile and found in feces as microbiologically inactive compounds" },
      { label: "Accumulation", value: "15–36% above single-dose values with repeated 0.5–2 g doses at 12–24 h intervals" },
      { label: "Half-life in special populations", value: "Elderly (mean 70.5 y) 8.9 h; renal impairment 11.4–15.7 h; hemodialysis 14.7 h; liver disease 8.8 h" },
      { label: "Distribution notes", value: "Crosses the placental barrier; penetrates inflamed meninges (pediatric data); excreted in human milk at low concentrations" },
    ],
    pharmacodynamics: NOT_VERIFIED,
    interactions: [
      "Calcium-containing IV solutions: ceftriaxone–calcium precipitation. Do not mix or give simultaneously (including via Y-site); contraindicated in neonates (≤28 days) needing calcium-containing IV solutions. In non-neonates, may be given sequentially if lines are thoroughly flushed.",
      "Vancomycin, amsacrine, aminoglycosides and fluconazole: incompatible in admixtures; give sequentially with thorough line flushing between administrations.",
      "Vitamin K antagonists: may increase the risk of bleeding; monitor coagulation parameters and adjust the anticoagulant dose.",
      "Chloramphenicol: antagonistic effects observed in vitro.",
      "Probenecid: ceftriaxone elimination is not altered.",
      "Lidocaine: IV administration of ceftriaxone solutions containing lidocaine is contraindicated.",
      "Laboratory interference: may cause positive Coombs' test, positive galactosemia test results, false-positive non-enzymatic urine glucose, and falsely lower readings on some blood glucose monitoring systems.",
    ],
    adverseEffects: [
      "Most common (>2%): diarrhea/loose stools, eosinophilia, thrombocytosis, leukopenia, elevated AST/ALT",
      "Rash (1.7%); injection-site reactions",
      "Serious hypersensitivity reactions including anaphylaxis; severe cutaneous reactions (e.g. SJS, TEN, AGEP) reported post-marketing",
      "Clostridioides difficile-associated diarrhea, up to fatal colitis",
      "Immune-mediated hemolytic anemia, including fatal cases",
      "Gallbladder pseudolithiasis and urolithiasis / post-renal acute renal failure (ceftriaxone–calcium precipitates; greatest probability in pediatric patients)",
      "Pancreatitis; alterations in prothrombin time; seizures",
      "Fatal ceftriaxone–calcium precipitation in lungs and kidneys reported in neonates given calcium-containing fluids",
    ],
    contraindications: [
      "Known hypersensitivity to ceftriaxone, any excipient, or any other cephalosporin; previous hypersensitivity to penicillins or other beta-lactams may increase the risk",
      "Premature neonates up to a postmenstrual age of 41 weeks",
      "Hyperbilirubinemic neonates (bilirubin displacement from albumin; risk of bilirubin encephalopathy)",
      "Neonates (≤28 days) requiring, or expected to require, calcium-containing IV solutions",
      "IV administration of ceftriaxone solutions containing lidocaine",
    ],
    resistance:
      "Resistance is primarily through hydrolysis by beta-lactamase, alteration of penicillin-binding proteins (PBPs), and decreased permeability.",
    monitoring: [
      "Prothrombin time in patients with impaired vitamin K synthesis or low vitamin K stores (e.g. chronic hepatic disease, malnutrition); coagulation parameters frequently with vitamin K antagonists",
      "Plasma concentrations in dialysis patients where elimination may be markedly reduced",
      "Renal function in elderly patients (may be useful, per label)",
      "Diarrhea during or after therapy (C. difficile-associated disease can occur up to 2 months after treatment)",
      "Signs and symptoms of gallbladder disease, urolithiasis, oliguria or renal failure; ensure adequate hydration",
    ],
    stewardshipNotes: [
      "Obtain specimens for culture and susceptibility testing before treatment; therapy may be started before results are available.",
      "Use only for infections proven or strongly suspected to be caused by susceptible bacteria; when culture data are available they should guide selection or modification; otherwise local epidemiology and susceptibility patterns may inform empiric choice (label, section 1.12).",
      "Use in the absence of a proven or strongly suspected bacterial infection, or a prophylactic indication, is unlikely to benefit the patient and increases the risk of drug-resistant bacteria.",
    ],
    references: [
      {
        id: "r1",
        citation:
          "Hospira, Inc. Ceftriaxone for Injection, USP in ADD-Vantage Vial — full prescribing information (FDA-approved labeling), revised 10/2017.",
        title: "Ceftriaxone for Injection, USP in ADD-Vantage Vial — Full Prescribing Information",
        organization: "Hospira, Inc. (Pfizer) — FDA-approved product labeling",
        year: 2017,
        url: "https://labeling.pfizer.com/ShowLabeling.aspx?id=4387",
        accessed: "2026-10-06",
      },
    ],
    verification: {
      status: "source-verified",
      lastReviewed: REVIEWED,
      note: "Populated from a single manufacturer label (revised 2017); newer labeling and WHO/CDC/IDSA guidance have not yet been reconciled. Pharmacodynamics target not stated in the source and left unverified. No human clinical review has been performed.",
    },
  },
  unverified("2", "vancomycin", "Vancomycin", "Glycopeptide"),
  unverified("3", "meropenem", "Meropenem", "Carbapenem"),
  unverified("4", "azithromycin", "Azithromycin", "Macrolide"),
  unverified("5", "linezolid", "Linezolid", "Oxazolidinone"),
  unverified(
    "6",
    "piperacillin-tazobactam",
    "Piperacillin/Tazobactam",
    "Penicillin",
    "Beta-lactam/beta-lactamase inhibitor",
  ),
];

export function getAntibioticBySlug(slug: string) {
  return antibiotics.find((a) => a.slug === slug);
}
