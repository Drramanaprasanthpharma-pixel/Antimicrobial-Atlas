import { Antibiotic } from "@/lib/types";

// Clinical content verification status (see README, "Clinical Content Verification").
//
// - Profiles with `verification.status === "source-verified"` were populated only from
//   the references listed on the profile. This is NOT a clinical validation.
// - Fields that could not be sourced hold NOT_VERIFIED instead of an estimate.
// - Each profile cites the label(s) it was populated from. Where sources disagree, or a
//   field is absent from the source, the field says so rather than choosing a value.

export const NOT_VERIFIED = "Not verified — requires clinical review";

const REVIEWED = "October 2026";

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
  {
    id: "2",
    slug: "vancomycin",
    genericName: "Vancomycin",
    class: "Glycopeptide",
    status: "published",
    overview:
      "Tricyclic glycopeptide antibacterial. Summarised from the FDA-approved Baxter premixed frozen Galaxy-container labeling (Vancomycin Injection, revised 6/2026); this label covers intravenous use only and applies to patients for whom appropriate dosing with this formulation can be achieved.",
    mechanism:
      "Bactericidal action results primarily from inhibition of cell-wall biosynthesis; vancomycin also alters bacterial cell-membrane permeability and RNA synthesis.",
    spectrumSummary:
      "Label lists activity in vitro and in clinical infections against most isolates of Corynebacterium spp., Enterococcus spp. (including E. faecalis), Staphylococcus aureus (methicillin-resistant and -susceptible), coagulase-negative staphylococci, Streptococcus gallolyticus and viridans group streptococci. Not active in vitro against Gram-negative bacilli, mycobacteria or fungi.",
    spectrum: [
      { organism: "Staphylococcus aureus (including MRSA)", susceptibility: "susceptible" },
      { organism: "Coagulase-negative staphylococci", susceptibility: "susceptible" },
      { organism: "Enterococcus spp. (including E. faecalis)", susceptibility: "susceptible" },
      { organism: "Viridans group streptococci", susceptibility: "susceptible" },
      { organism: "Corynebacterium spp.", susceptibility: "susceptible" },
      { organism: "Gram-negative bacilli", susceptibility: "not-covered" },
      { organism: "Mycobacteria", susceptibility: "not-covered" },
      { organism: "Fungi", susceptibility: "not-covered" },
    ],
    indications: [
      "Septicemia",
      "Infective endocarditis",
      "Skin and skin structure infections",
      "Bone infections",
      "Lower respiratory tract infections",
      "Label qualifiers: septicemia, skin/skin structure, bone and lower respiratory tract infections — susceptible MRSA and coagulase-negative staphylococci, or methicillin-susceptible staphylococci in penicillin-allergic patients or those who cannot receive or have failed other drugs; endocarditis — MRSA, viridans group streptococci, S. gallolyticus, Enterococcus and Corynebacterium spp. (with an aminoglycoside for enterococcal endocarditis), plus early-onset prosthetic valve endocarditis due to S. epidermidis in combination with rifampin and an aminoglycoside",
    ],
    dosing: [
      {
        indication: "Adults with normal renal function",
        dose: "Usual daily dose 2 g, divided as 500 mg every 6 hours or 1 g every 12 hours; initial daily dose no less than 15 mg/kg",
        route: "IV only (not for oral use); infuse over 60 minutes or longer",
        frequency: "Every 6 or 12 hours",
        notes:
          "Age or obesity may call for modification of the usual daily dose. Concentration of no more than 5 mg/mL recommended in adults (up to 10 mg/mL in selected fluid-restricted patients, with higher infusion-reaction risk). This premixed product is not recommended if a dose other than 500 mg, 750 mg, 1 g, 1.25 g or 1.5 g is required.",
      },
      {
        indication: "Pediatric patients 1 month and older with normal renal function",
        dose: "10 mg/kg per dose",
        route: "IV, each dose over at least 60 minutes",
        frequency: "Every 6 hours",
        notes: "Close monitoring of serum concentrations may be warranted.",
      },
      {
        indication: "Neonates (younger than 1 month)",
        dose: "Initial dose 15 mg/kg, then 10 mg/kg",
        route: "IV over 60 minutes",
        frequency: "Every 12 hours in the first week of life, every 8 hours thereafter up to 1 month",
        notes: "Longer dosing intervals may be necessary in premature infants; monitor serum concentrations.",
      },
    ],
    renalAdjustment: [
      {
        crClRange: "Any degree of renal impairment (label gives no CrCl-based dosing table)",
        adjustment:
          "Dosage adjustment must be made. Initial dose should be no less than 15 mg/kg; measure trough serum concentrations to guide therapy, especially in seriously ill patients with changing renal function.",
      },
      {
        crClRange: "Functionally anephric",
        adjustment:
          "Give an initial dose of 15 mg/kg; measure serum concentration 24 hours after the first dose to guide further therapy. Vancomycin is poorly removed by dialysis; hemofiltration and hemoperfusion with polysulfone resin have been reported to increase clearance.",
      },
    ],
    hepaticAdjustment: `${NOT_VERIFIED} (the source label gives no hepatic-impairment recommendation; it states there is no apparent metabolism of vancomycin)`,
    pharmacokinetics: [
      { label: "Distribution", value: "Distribution coefficient 0.3–0.43 L/kg; about 55% serum protein bound; does not readily cross normal meninges, penetrates inflamed meninges" },
      { label: "Concentrations (1 g / 15 mg/kg over 60 min, normal renal function)", value: "~63 mcg/mL at end of infusion, ~23 mcg/mL at 2 h, ~8 mcg/mL at 11 h after end of infusion" },
      { label: "Clearance", value: "Mean plasma clearance ~0.058 L/kg/h; mean renal clearance ~0.048 L/kg/h" },
      { label: "Elimination half-life", value: "4–6 h with normal renal function; ~7.5 days in anephric patients; clearance may be reduced in the elderly" },
      { label: "Metabolism / excretion", value: "No apparent metabolism; ~75% of a dose excreted in urine by glomerular filtration in the first 24 h" },
    ],
    pharmacodynamics:
      "Per the label: in animal models of infection, activity appears to correlate with the AUC/MIC ratio for certain pathogens, including MRSA; the principal PK/PD parameter best associated with clinical and microbiological cure has not been elucidated in clinical trials. The label cites the 2020 ASHP/IDSA/PIDS/SIDP therapeutic-monitoring guideline; that guideline was not independently reviewed, so no numeric target is stated here. Numeric PK/PD target: Not verified — requires clinical review.",
    interactions: [
      "Anesthetic agents: concomitant use associated with erythema and histamine-like flushing; infusion-related reactions may be minimised by a 60-minute infusion before anesthetic induction.",
      "Piperacillin/tazobactam: increased incidence of acute kidney injury versus vancomycin alone; monitor kidney function. No pharmacokinetic interaction noted.",
      "Other ototoxic and/or nephrotoxic drugs (concurrent or sequential, systemic or topical): more frequent renal function monitoring required; ototoxicity risk higher with another ototoxic agent such as an aminoglycoside.",
      "Aminoglycosides: acts synergistically in vitro against many isolates of S. aureus, S. gallolyticus, Enterococcus spp. and viridans streptococci; combination required for enterococcal endocarditis.",
    ],
    adverseEffects: [
      "Infusion reactions: hypotension (including shock and cardiac arrest), wheezing, dyspnea, urticaria, pruritus, chest and back pain, and 'vancomycin infusion reaction' (pruritus and erythema of face, neck and upper body)",
      "Nephrotoxicity: acute kidney injury, mainly interstitial nephritis, less commonly acute tubular necrosis",
      "Ototoxicity (tinnitus, hearing loss, dizziness or vertigo; may be reversible or permanent)",
      "Severe dermatologic reactions (TEN, SJS, DRESS, AGEP, LABD)",
      "Clostridioides difficile-associated diarrhea",
      "Reversible neutropenia (usually after ≥1 week or >25 g total), thrombocytopenia; reversible agranulocytosis reported",
      "Phlebitis and injection-site reactions (irritating to tissue; use a secure IV route)",
      "Hemorrhagic occlusive retinal vasculitis reported with intracameral/intravitreal use (not an approved route)",
      "High sodium load with this premixed product (354 mg sodium per 100 mL); avoid in congestive heart failure, elderly patients and those needing sodium restriction",
    ],
    contraindications: [
      "Known hypersensitivity to vancomycin",
      "Dextrose-containing solutions, including the dextrose presentation of this product, may be contraindicated in patients with a known allergy to corn or corn products",
    ],
    resistance:
      "The label states there is no cross-resistance between vancomycin and other antibacterials. Specific resistance mechanisms are not described in the source label: Not verified — requires clinical review.",
    monitoring: [
      "Serum vancomycin concentrations and renal function in all patients receiving parenteral vancomycin (more frequently with comorbidities, other nephrotoxic drugs, critical illness, changing renal function or higher target concentrations)",
      "Trough concentrations to guide therapy in renal impairment or fluctuating renal function",
      "Signs and symptoms of ototoxicity; serial tests of auditory function may be helpful",
      "Periodic leukocyte count with prolonged therapy or concomitant neutropenia-causing drugs",
      "Infusion-related reactions; diarrhea (C. difficile)",
    ],
    stewardshipNotes: [
      "Use only for infections proven or strongly suspected to be caused by susceptible bacteria; consider culture and susceptibility information when selecting or modifying therapy; local epidemiology may inform empiric choice when such data are lacking (label 1.6).",
      "Prescribing in the absence of a proven or strongly suspected bacterial infection is unlikely to benefit the patient and increases the risk of drug-resistant bacteria (label 5.9).",
    ],
    references: [
      {
        id: "r1",
        citation:
          "Baxter Healthcare Corporation. Vancomycin Injection (GALAXY container) — full prescribing information (FDA-approved labeling, NDA 050671), revised 6/2026.",
        title: "Vancomycin Injection (GALAXY) — Full Prescribing Information",
        organization: "Baxter Healthcare Corporation — FDA-approved product labeling",
        year: 2026,
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/050671s043lbl.pdf",
        accessed: "2026-10-06",
      },
    ],
    verification: {
      status: "source-verified",
      lastReviewed: REVIEWED,
      note: "Populated from one manufacturer label for a premixed IV product (rev. 6/2026). Numeric PK/PD target, hepatic dosing and resistance mechanisms are not stated in that label and are left unverified. WHO/CDC/IDSA guidance not reconciled. No human clinical review has been performed.",
    },
  },
  {
    id: "3",
    slug: "meropenem",
    genericName: "Meropenem",
    class: "Carbapenem",
    status: "published",
    overview:
      "Synthetic carbapenem ('penem') antibacterial for intravenous use. Summarised from the FDA-approved Hospira labeling for Meropenem for Injection (I.V.), revised 5/2022.",
    mechanism:
      "Bactericidal; inhibits cell-wall synthesis. It penetrates the cell wall of most Gram-positive and Gram-negative bacteria to bind penicillin-binding protein (PBP) targets — PBPs 2, 3 and 4 of E. coli and P. aeruginosa, and PBPs 1, 2 and 4 of S. aureus. Bactericidal concentrations are typically 1–2 times the bacteriostatic concentrations, except for Listeria monocytogenes, against which lethal activity is not observed.",
    spectrumSummary:
      "Label lists activity in vitro and in clinical infections against most isolates of E. faecalis (vancomycin-susceptible), methicillin-susceptible S. aureus, streptococci (S. agalactiae, penicillin-susceptible S. pneumoniae, S. pyogenes, viridans group), E. coli, H. influenzae, K. pneumoniae, N. meningitidis, P. mirabilis, P. aeruginosa, and Bacteroides and Peptostreptococcus spp. No in vitro activity against MRSA or methicillin-resistant S. epidermidis.",
    spectrum: [
      { organism: "Escherichia coli", susceptibility: "susceptible" },
      { organism: "Klebsiella pneumoniae", susceptibility: "susceptible" },
      { organism: "Pseudomonas aeruginosa", susceptibility: "susceptible" },
      { organism: "Haemophilus influenzae", susceptibility: "susceptible" },
      { organism: "Neisseria meningitidis", susceptibility: "susceptible" },
      { organism: "Bacteroides fragilis", susceptibility: "susceptible" },
      { organism: "Staphylococcus aureus (methicillin-susceptible only)", susceptibility: "susceptible" },
      { organism: "Enterococcus faecalis (vancomycin-susceptible only)", susceptibility: "susceptible" },
      { organism: "MRSA / methicillin-resistant S. epidermidis", susceptibility: "not-covered" },
    ],
    indications: [
      "Complicated skin and skin structure infections (adults and pediatric patients ≥3 months)",
      "Complicated intra-abdominal infections (complicated appendicitis and peritonitis; adult and pediatric patients)",
      "Bacterial meningitis (pediatric patients ≥3 months only)",
    ],
    dosing: [
      {
        indication: "Complicated skin and skin structure infections (adults)",
        dose: "500 mg; 1 g when treating infections caused by P. aeruginosa",
        route: "IV infusion over approximately 15–30 minutes (1 g doses may be given as IV bolus over 3–5 minutes)",
        frequency: "Every 8 hours",
      },
      {
        indication: "Complicated intra-abdominal infections (adults)",
        dose: "1 g",
        route: "IV infusion over approximately 15–30 minutes (or bolus over 3–5 minutes)",
        frequency: "Every 8 hours",
      },
      {
        indication: "Pediatric patients ≥3 months (normal renal function)",
        dose: "10 mg/kg (cSSSI; 20 mg/kg for P. aeruginosa), 20 mg/kg (intra-abdominal), 40 mg/kg (meningitis); maximum 500 mg, 1 g, 2 g respectively",
        route: "IV",
        frequency: "Every 8 hours",
        notes: "Patients over 50 kg: 500 mg (cSSSI), 1 g (intra-abdominal), 2 g (meningitis). Infants <3 months with intra-abdominal infection are dosed by gestational and postnatal age (20–30 mg/kg every 8–12 hours; see label Table 3).",
      },
    ],
    renalAdjustment: [
      { crClRange: "CrCl >50 mL/min", adjustment: "Recommended dose every 8 hours" },
      { crClRange: "CrCl 26–50 mL/min", adjustment: "Recommended dose every 12 hours" },
      { crClRange: "CrCl 10–25 mL/min", adjustment: "One-half recommended dose every 12 hours" },
      {
        crClRange: "CrCl <10 mL/min",
        adjustment:
          "One-half recommended dose every 24 hours. The label states there is inadequate information on use in patients on hemodialysis or peritoneal dialysis (meropenem is hemodialyzable). No experience in pediatric patients with renal impairment.",
      },
    ],
    hepaticAdjustment:
      "A pharmacokinetic study in patients with hepatic impairment showed no effect of liver disease on the pharmacokinetics of meropenem; the label gives no hepatic dose adjustment.",
    pharmacokinetics: [
      { label: "Peak plasma concentration (30-min infusion)", value: "~23 mcg/mL (500 mg) and ~49 mcg/mL (1 g) in healthy volunteers" },
      { label: "Protein binding", value: "~2%" },
      { label: "Elimination half-life", value: "~1 h with normal renal function; ~1.5 h in pediatric patients 3 months to 2 years" },
      { label: "Metabolism / excretion", value: "One microbiologically inactive metabolite; ~70% (50–75%) of dose excreted unchanged in urine within 12 h plus ~28% as the inactive metabolite; fecal elimination ~2%" },
      { label: "Accumulation", value: "None observed with 500 mg every 8 h or 1 g every 6 h in healthy volunteers with normal renal function" },
      { label: "Probenecid", value: "Increased systemic exposure by 56% and half-life by 38%" },
    ],
    pharmacodynamics:
      "Per the label, the percentage of the dosing interval that the unbound plasma concentration exceeds the MIC against the infecting organism has been shown to best correlate with efficacy in animal and in vitro models of infection. The label gives no numeric target: Numeric PK/PD target: Not verified — requires clinical review.",
    interactions: [
      "Probenecid: competes for active tubular secretion and raises meropenem concentrations; co-administration not recommended.",
      "Valproic acid / divalproex sodium: carbapenems reduce valproic acid concentrations, which may fall below the therapeutic range and cause breakthrough seizures; concomitant use generally not recommended — consider non-carbapenem antibacterials, or supplemental anticonvulsant therapy if meropenem is necessary.",
      "Aminoglycosides: in vitro synergy against some P. aeruginosa isolates. Meropenem should not be mixed with or physically added to solutions containing other drugs.",
    ],
    adverseEffects: [
      "Most common (>1%): diarrhea (4.8%), nausea/vomiting (3.6%), headache (2.3%), rash (1.9%), constipation (1.4%), pruritus (1.2%); local inflammation at injection site (2.4%), phlebitis/thrombophlebitis (0.8%)",
      "Serious and occasionally fatal hypersensitivity (anaphylactic) reactions",
      "Severe cutaneous adverse reactions (SJS, TEN, DRESS, erythema multiforme, AGEP)",
      "Seizures and other CNS adverse events (seizure rate 0.7% in clinical investigations; most commonly with CNS disorders, meningitis and/or compromised renal function)",
      "Clostridium difficile-associated diarrhea",
      "Thrombocytopenia in patients with renal impairment (no clinical bleeding reported); overgrowth of nonsusceptible organisms",
    ],
    contraindications: [
      "Known hypersensitivity to any component of the product or to other drugs in the same class",
      "Anaphylactic reactions to beta-lactams",
    ],
    resistance:
      "Per the label: (1) decreased outer-membrane permeability in Gram-negative bacteria (diminished porin production); (2) reduced affinity of target PBPs; (3) increased expression of efflux pump components; (4) production of carbapenem-destroying enzymes (carbapenemases, metallo-beta-lactamases). Cross-resistance with other carbapenem-resistant isolates is sometimes observed.",
    monitoring: [
      "Creatinine clearance for dose selection (reduce dose at CrCl ≤50 mL/min); renal function in elderly patients may be useful",
      "Neurological status — focal tremors, myoclonus or seizures warrant evaluation and review of the dose",
      "Diarrhea during or after therapy (up to 2 months)",
      "Outpatients should be alerted to seizures, delirium, headaches or paresthesias that could impair alertness",
    ],
    stewardshipNotes: [
      "Use only for infections proven or strongly suspected to be caused by susceptible bacteria; consider culture and susceptibility information; local epidemiology may inform empiric choice (label 1.4).",
      "Prescribing without a proven or strongly suspected bacterial infection increases the risk of drug-resistant bacteria; prolonged use may cause overgrowth of nonsusceptible organisms (label 5.6, 5.7).",
    ],
    references: [
      {
        id: "r1",
        citation:
          "Hospira, Inc. Meropenem for Injection, USP (I.V.) — full prescribing information (FDA-approved labeling), revised 5/2022.",
        title: "Meropenem for Injection, USP (I.V.) — Full Prescribing Information",
        organization: "Hospira, Inc. (Pfizer) — FDA-approved product labeling",
        year: 2022,
        url: "https://labeling.pfizer.com/ShowLabeling.aspx?id=18351",
        accessed: "2026-10-06",
      },
    ],
    verification: {
      status: "source-verified",
      lastReviewed: REVIEWED,
      note: "Populated from a single manufacturer label (rev. 5/2022); newer labeling and WHO/CDC/IDSA/ESCMID guidance have not been reconciled. Numeric PK/PD target not stated in the source. No human clinical review has been performed.",
    },
  },
  {
    id: "4",
    slug: "azithromycin",
    genericName: "Azithromycin",
    class: "Macrolide",
    status: "published",
    overview:
      "Macrolide antibacterial. Summarised from the FDA-approved Pfizer labeling for ZITHROMAX tablets and for oral suspension (revised 7/2026), indicated for mild to moderate infections. Intravenous azithromycin has separate labeling that was not reviewed here.",
    mechanism:
      "Binds to the 23S rRNA of the 50S ribosomal subunit of susceptible microorganisms, inhibiting bacterial protein synthesis and impeding the assembly of the 50S ribosomal subunit.",
    spectrumSummary:
      "Label lists activity in vitro and in clinical infections against most isolates of S. aureus, S. agalactiae, S. pneumoniae, S. pyogenes, H. ducreyi, H. influenzae, M. catarrhalis, N. gonorrhoeae, Chlamydophila pneumoniae, Chlamydia trachomatis and Mycoplasma pneumoniae. Cross-resistance with erythromycin is demonstrated.",
    spectrum: [
      { organism: "Streptococcus pneumoniae", susceptibility: "susceptible" },
      { organism: "Streptococcus pyogenes", susceptibility: "susceptible" },
      { organism: "Staphylococcus aureus", susceptibility: "susceptible" },
      { organism: "Haemophilus influenzae", susceptibility: "susceptible" },
      { organism: "Moraxella catarrhalis", susceptibility: "susceptible" },
      { organism: "Neisseria gonorrhoeae", susceptibility: "susceptible" },
      { organism: "Chlamydia trachomatis", susceptibility: "susceptible" },
      { organism: "Mycoplasma pneumoniae", susceptibility: "susceptible" },
    ],
    indications: [
      "Adults: acute bacterial exacerbations of chronic bronchitis; acute bacterial sinusitis",
      "Adults and pediatric patients ≥6 months: community-acquired pneumonia in patients appropriate for oral therapy",
      "Pharyngitis/tonsillitis caused by S. pyogenes as an alternative to first-line therapy (adults; pediatric ≥2 years)",
      "Adults: uncomplicated skin and skin structure infections; urethritis and cervicitis (C. trachomatis, N. gonorrhoeae); genital ulcer disease in men (chancroid)",
      "Pediatric patients ≥6 months: acute otitis media",
      "Limitation: not recommended for pneumonia in patients inappropriate for oral therapy because of moderate to severe illness or risk factors (e.g. cystic fibrosis, nosocomial infection, known or suspected bacteremia, hospitalization, elderly/debilitated, immunodeficiency or functional asplenia)",
    ],
    dosing: [
      {
        indication: "Community-acquired pneumonia (mild); pharyngitis/tonsillitis (second-line); uncomplicated skin/skin structure",
        dose: "500 mg on Day 1, then 250 mg once daily on Days 2–5",
        route: "Oral (tablet or suspension; with or without food)",
        frequency: "Once daily",
      },
      {
        indication: "Acute bacterial exacerbations of chronic obstructive pulmonary disease (mild to moderate)",
        dose: "500 mg once daily for 3 days, OR 500 mg on Day 1 then 250 mg once daily on Days 2–5",
        route: "Oral",
        frequency: "Once daily",
      },
      {
        indication: "Acute bacterial sinusitis",
        dose: "500 mg once daily for 3 days",
        route: "Oral",
        frequency: "Once daily",
      },
      {
        indication: "Genital ulcer disease (chancroid); non-gonococcal urethritis and cervicitis",
        dose: "One single 1 g dose",
        route: "Oral",
        frequency: "Single dose",
      },
      {
        indication: "Gonococcal urethritis and cervicitis",
        dose: "One single 2 g dose",
        route: "Oral",
        frequency: "Single dose",
      },
    ],
    renalAdjustment: [
      {
        crClRange: "GFR 10–80 mL/min vs >80 mL/min",
        adjustment: "Pharmacokinetic data only: after a single 1 g oral dose, mean Cmax and AUC0-120 rose 5.1% and 4.2%. The source label gives no dose-adjustment instruction. Dose recommendation: Not verified — requires clinical review.",
      },
      {
        crClRange: "GFR <10 mL/min vs >80 mL/min",
        adjustment: "Pharmacokinetic data only: mean Cmax and AUC0-120 rose 61% and 35%. The source label gives no dose-adjustment instruction. Dose recommendation: Not verified — requires clinical review.",
      },
    ],
    hepaticAdjustment:
      "The pharmacokinetics of azithromycin in subjects with hepatic impairment have not been established. Contraindicated in patients with a history of cholestatic jaundice/hepatic dysfunction associated with prior azithromycin use; hepatotoxicity warning applies. Dose adjustment for hepatic impairment: Not verified — requires clinical review.",
    pharmacokinetics: [
      { label: "Single 500 mg oral dose (fasted)", value: "Cmax 0.5 mcg/mL; Tmax 2.2 h; AUC0-72 4.3 mcg·h/mL" },
      { label: "Bioavailability / food", value: "Absolute bioavailability of 250 mg capsules 38%; high-fat meal raised tablet Cmax 23% with no AUC effect; suspension with food raised Cmax 56% with AUC unchanged" },
      { label: "Protein binding", value: "Variable — decreases from 51% at 0.02 mcg/mL to 7% at 2 mcg/mL" },
      { label: "Distribution", value: "Extensive tissue penetration (skin, lung, tonsil, cervix, others); CSF <0.01 mcg/mL with non-inflamed meninges" },
      { label: "Clearance / terminal half-life", value: "Mean apparent plasma clearance 630 mL/min; terminal elimination half-life 68 h (thought to reflect tissue uptake and release); serum T1/2 ~69–72 h in the 3- and 5-day regimens" },
      { label: "Elimination", value: "Biliary excretion, mainly unchanged drug, is the major route; ~6% of a dose appears unchanged in urine over a week. Metabolism studies have not been performed." },
    ],
    pharmacodynamics:
      "Per the label, in animal models the antibacterial activity appears to correlate with the AUC/MIC ratio for certain pathogens (S. pneumoniae and S. aureus); the principal PK/PD parameter associated with clinical and microbiological cure has not been elucidated in clinical trials. QTc: co-administration with chloroquine increased QTc in a dose- and concentration-dependent manner (maximum mean QTcF increases of 5, 7 and 9 ms with azithromycin 500, 1000 and 1500 mg). Numeric PK/PD target: Not verified — requires clinical review.",
    interactions: [
      "Nelfinavir: increases azithromycin serum concentrations (Cmax ×2.36, AUC ×2.12); no dose adjustment recommended but close monitoring for liver enzyme abnormalities and hearing impairment is warranted.",
      "Warfarin / oral anticoagulants: postmarketing reports of potentiation; monitor prothrombin time carefully.",
      "Digoxin, colchicine, phenytoin: no interactions reported with azithromycin and no specific studies, but interactions occur with other macrolides — careful monitoring advised.",
      "Aluminum/magnesium-containing antacids: do not take simultaneously with azithromycin (Cmax lowered to ~0.77 of control).",
      "QT-prolonging drugs, including Class IA (quinidine, procainamide) and Class III (dofetilide, amiodarone, sotalol) antiarrhythmics: increased risk of QT prolongation and torsades de pointes.",
    ],
    adverseEffects: [
      "Most common: diarrhea (5–14%), nausea (3–18%), abdominal pain (3–7%), vomiting (2–7%)",
      "Serious allergic and skin reactions including angioedema, anaphylaxis, AGEP, SJS, TEN and DRESS (fatalities reported; symptoms may recur after symptomatic therapy stops)",
      "Hepatotoxicity (hepatitis, cholestatic jaundice, hepatic necrosis, hepatic failure; some fatal)",
      "QT prolongation and torsades de pointes",
      "Observational studies show an approximately two-fold increased short-term potential risk of acute cardiovascular death versus other antibacterials, including amoxicillin (causality not established)",
      "Infantile hypertrophic pyloric stenosis after use in neonates (up to 42 days of life)",
      "Clostridioides difficile-associated diarrhea; exacerbation of myasthenia gravis; hearing disturbances",
    ],
    contraindications: [
      "Known hypersensitivity to azithromycin, erythromycin, any macrolide or ketolide drug",
      "History of cholestatic jaundice/hepatic dysfunction associated with prior use of azithromycin",
    ],
    resistance:
      "Azithromycin demonstrates cross-resistance with erythromycin. The most frequently encountered mechanism of resistance is modification of the 23S rRNA target, most often by methylation; such ribosomal modifications can confer cross-resistance to other macrolides, lincosamides and streptogramin B (MLSB phenotype). About 1% of azithromycin-susceptible S. pyogenes isolates were resistant following therapy in pediatric pharyngitis trials.",
    monitoring: [
      "Prothrombin time when used with warfarin or other oral anticoagulants",
      "Liver enzymes and hearing when co-administered with nelfinavir; signs and symptoms of hepatitis (discontinue immediately if they occur)",
      "Cardiac risk factors for QT prolongation (known QT prolongation, torsades history, bradyarrhythmias, uncorrected hypokalemia/hypomagnesemia, other QT-prolonging drugs; elderly patients may be more susceptible)",
      "Serologic test for syphilis and appropriate testing for gonorrhea in all patients with sexually transmitted urethritis or cervicitis; azithromycin at the recommended dose should not be relied on to treat syphilis",
      "Diarrhea during or after therapy; infants of breastfeeding mothers for diarrhea, vomiting or rash",
    ],
    stewardshipNotes: [
      "Use only for infections proven or strongly suspected to be caused by susceptible bacteria; consider culture and susceptibility information; local epidemiology may inform empiric choice (label 1.4).",
      "Prescribing in the absence of a proven or strongly suspected bacterial infection is unlikely to benefit the patient and increases the risk of drug-resistant bacteria (label 5.9).",
    ],
    references: [
      {
        id: "r1",
        citation:
          "Pfizer Inc. ZITHROMAX (azithromycin) tablets and for oral suspension — full prescribing information (FDA-approved labeling, NDA 050710), revised 7/2026.",
        title: "ZITHROMAX (azithromycin) tablets and for oral suspension — Full Prescribing Information",
        organization: "Pfizer Inc. — FDA-approved product labeling",
        year: 2026,
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/050710s054lbl.pdf",
        accessed: "2026-10-06",
      },
    ],
    verification: {
      status: "source-verified",
      lastReviewed: REVIEWED,
      note: "Populated from the oral-formulation label only (rev. 7/2026); intravenous azithromycin labeling was not reviewed. Renal and hepatic dose recommendations and a numeric PK/PD target are not stated in the source and left unverified. No human clinical review has been performed.",
    },
  },
  {
    id: "5",
    slug: "linezolid",
    genericName: "Linezolid",
    class: "Oxazolidinone",
    status: "published",
    overview:
      "Synthetic oxazolidinone-class antibacterial for treatment of infections caused by susceptible Gram-positive bacteria. Summarised from the FDA-approved Pfizer labeling for ZYVOX injection, tablets and for oral suspension (revised 6/2026).",
    mechanism:
      "Binds to a site on the bacterial 23S ribosomal RNA of the 50S subunit and prevents formation of a functional 70S initiation complex, which is essential for bacterial reproduction. Time-kill studies show it is bacteriostatic against enterococci and staphylococci and bactericidal against the majority of streptococcal isolates.",
    spectrumSummary:
      "Label lists activity in vitro and in clinical infections against most isolates of vancomycin-resistant Enterococcus faecium, S. aureus (including methicillin-resistant isolates), S. agalactiae, S. pneumoniae and S. pyogenes. Not indicated for Gram-negative infections.",
    spectrum: [
      { organism: "Staphylococcus aureus (including MRSA)", susceptibility: "susceptible" },
      { organism: "Enterococcus faecium (vancomycin-resistant isolates)", susceptibility: "susceptible" },
      { organism: "Streptococcus pneumoniae", susceptibility: "susceptible" },
      { organism: "Streptococcus pyogenes", susceptibility: "susceptible" },
      { organism: "Streptococcus agalactiae", susceptibility: "susceptible" },
      { organism: "Gram-negative bacteria", susceptibility: "not-covered" },
    ],
    indications: [
      "Nosocomial pneumonia (S. aureus, methicillin-susceptible and -resistant isolates; S. pneumoniae)",
      "Community-acquired pneumonia (S. pneumoniae including concurrent bacteremia; methicillin-susceptible S. aureus)",
      "Complicated skin and skin structure infections, including diabetic foot infections without concomitant osteomyelitis",
      "Uncomplicated skin and skin structure infections (methicillin-susceptible S. aureus or S. pyogenes)",
      "Vancomycin-resistant Enterococcus faecium infections, including concurrent bacteremia",
    ],
    dosing: [
      {
        indication: "Nosocomial pneumonia; community-acquired pneumonia (including concurrent bacteremia); complicated skin/skin structure infections; VRE faecium infections (including bacteremia) — adults and adolescents ≥12 years",
        dose: "600 mg",
        route: "IV (infuse over 30–120 minutes) or oral, tablet or suspension; no dose adjustment when switching IV to oral",
        frequency: "Every 12 hours",
        notes:
          "Label Table 1 gives treatment durations of 10 to 14 and 14 to 28 consecutive days. The mapping of each duration to specific indications could not be read unambiguously from the source text: Not verified — requires clinical review (consult label Table 1).",
      },
      {
        indication: "Uncomplicated skin and skin structure infections",
        dose: "Adults 400 mg; adolescents 600 mg",
        route: "Oral",
        frequency: "Every 12 hours for 10 to 14 days",
      },
      {
        indication: "Pediatric patients (birth through 11 years) for the infections above",
        dose: "10 mg/kg",
        route: "IV or oral",
        frequency: "Every 8 hours (preterm neonates <7 days: start 10 mg/kg every 12 hours; all neonates 10 mg/kg every 8 hours by 7 days of life)",
        notes: "Uncomplicated skin/skin structure: <5 years 10 mg/kg orally every 8 hours; 5–11 years 10 mg/kg orally every 12 hours.",
      },
    ],
    renalAdjustment: [
      {
        crClRange: "Any degree of renal impairment (including ESRD on hemodialysis)",
        adjustment:
          "No dose adjustment recommended: parent-drug pharmacokinetics are unchanged, but the two primary metabolites accumulate with increasing renal dysfunction; use should be weighed against the potential risk of this accumulation. About 30% of a dose is removed in a 3-hour hemodialysis session, so give linezolid after hemodialysis. No information on peritoneal dialysis. Thrombocytopenia is reported more often in severe renal impairment.",
      },
    ],
    hepaticAdjustment:
      "No dose adjustment recommended for mild-to-moderate hepatic impairment (Child-Pugh A or B; pharmacokinetics not altered, n=7). Pharmacokinetics in severe hepatic impairment have not been evaluated. Thrombocytopenia is reported more often in moderate to severe hepatic impairment.",
    pharmacokinetics: [
      { label: "Absorption", value: "Extensively absorbed after oral dosing; Tmax ~1–2 h; absolute bioavailability ~100% (IV and oral interchangeable); high-fat food delays Tmax (1.5 to 2.2 h) and lowers Cmax ~17% with similar AUC" },
      { label: "600 mg every 12 h (tablet), multiple dose", value: "Cmax ~21.2 mcg/mL; Cmin ~6.15 mcg/mL; AUC0-τ ~138 mcg·h/mL; t1/2 ~5.4 h; clearance ~80 mL/min" },
      { label: "Protein binding / volume of distribution", value: "~31% (concentration-independent); Vss 40–50 L in healthy adults" },
      { label: "Metabolism", value: "Oxidation of the morpholine ring to two inactive carboxylic acid metabolites (A and B); minimally metabolised, pathway not fully understood" },
      { label: "Excretion", value: "Nonrenal clearance ~65% of total; at steady state ~30% of dose in urine as linezolid, ~40% as metabolite B and ~10% as metabolite A; mean renal clearance ~40 mL/min suggests net tubular reabsorption" },
      { label: "Pediatric", value: "Weight-based clearance is highest in the youngest age groups (birth to 11 years) and approaches adult values by adolescence; preterm neonates <7 days have lower clearance" },
    ],
    pharmacodynamics: `${NOT_VERIFIED} (the source label states no efficacy-related PK/PD target; its pharmacodynamics section reports only that single 600 mg and 1,200 mg IV doses had no significant effect on the QTc interval)`,
    interactions: [
      "Monoamine oxidase inhibitors (e.g. phenelzine, isocarboxazid): contraindicated, including within two weeks of taking one; linezolid is a reversible, nonselective MAO inhibitor.",
      "Serotonergic agents (SSRIs, SNRIs, tricyclic antidepressants, buspirone, triptans, opioids including meperidine): risk of serotonin syndrome, including fatal cases; monitor and consider discontinuation if signs occur.",
      "Adrenergic / pressor agents (pseudoephedrine, phenylpropanolamine, epinephrine, norepinephrine, dopamine, dobutamine): reversible enhancement of the pressor response; reduce initial doses of adrenergic agents and titrate; monitor blood pressure.",
      "Tyramine: significant pressor response with >100 mg tyramine; avoid large amounts of tyramine-rich foods and beverages.",
      "Insulin and oral hypoglycemic agents: postmarketing symptomatic hypoglycemia in diabetic patients.",
      "Rifampin: linezolid Cmax fell 21% and AUC0-12 32%; clinical significance unknown. Other strong enzyme inducers (carbamazepine, phenytoin, phenobarbital) could cause a similar or smaller decrease.",
      "No inhibition or induction of clinically significant CYP isoforms; warfarin and phenytoin may be given without dose change.",
      "IV physical incompatibilities: amphotericin B, chlorpromazine, diazepam, pentamidine, erythromycin lactobionate, phenytoin sodium, trimethoprim-sulfamethoxazole; chemical incompatibility with ceftriaxone.",
    ],
    adverseEffects: [
      "Most common (>5%): diarrhea, vomiting, headache, nausea, anemia",
      "Myelosuppression (anemia, leukopenia, pancytopenia, thrombocytopenia), generally related to duration (usually >2 weeks)",
      "Peripheral and optic neuropathy, primarily with treatment longer than 28 days (visual blurring also reported in shorter courses)",
      "Serotonin syndrome; lactic acidosis; convulsions; rhabdomyolysis",
      "Hypoglycemia in diabetic patients on insulin or oral hypoglycemics; hyponatremia and/or SIADH",
      "Clostridioides difficile-associated diarrhea; superficial tooth and tongue discoloration",
      "Anaphylaxis, angioedema and severe cutaneous reactions (including SJS and TEN) reported post-marketing",
      "Mortality imbalance in an investigational study of catheter-related bloodstream infections (not approved for these infections)",
    ],
    contraindications: [
      "Known hypersensitivity to linezolid or any other product component",
      "Patients taking any monoamine oxidase inhibitor (A or B), or within two weeks of taking one",
      "Use of the oral suspension warrants caution in phenylketonuria (contains phenylalanine; not a labeled contraindication)",
    ],
    resistance:
      "Per the label: point mutations in the 23S rRNA are associated with linezolid resistance (e.g. G2576T substitution reported in VRE E. faecium and MRSA that became resistant during clinical use); mutations in genes for 23S rRNA or ribosomal proteins L3 and L4 give cross-resistance to oxazolidinones; resistance in staphylococci mediated by the plasmid-transferable cfr methyltransferase gene has been reported.",
    monitoring: [
      "Complete blood counts weekly, particularly with treatment longer than two weeks, pre-existing myelosuppression, severe renal or moderate-to-severe hepatic impairment, concomitant myelosuppressive drugs, or chronic infection with prior antibacterial therapy",
      "Visual function in all patients on extended therapy (≥3 months) and in any patient with new visual symptoms; prompt ophthalmic evaluation for visual impairment",
      "Signs of serotonin syndrome when given with serotonergic agents or in carcinoid syndrome",
      "Blood pressure, especially with pressor/adrenergic agents, uncontrolled hypertension, pheochromocytoma or thyrotoxicosis",
      "Serum sodium regularly in the elderly, patients on diuretics and others at risk of hyponatremia/SIADH",
      "Recurrent nausea or vomiting, unexplained acidosis or low bicarbonate (lactic acidosis); blood glucose in diabetic patients; diarrhea",
    ],
    stewardshipNotes: [
      "Use only for infections proven or strongly suspected to be caused by susceptible bacteria; consider culture and susceptibility information; local epidemiology may inform empiric choice (label 1.7).",
      "Not indicated for Gram-negative infections — specific Gram-negative therapy must be started immediately if a concomitant Gram-negative pathogen is documented or suspected.",
      "Safety and efficacy of courses longer than 28 days have not been evaluated in controlled trials; not approved for catheter-related bloodstream or catheter-site infections.",
    ],
    references: [
      {
        id: "r1",
        citation:
          "Pfizer Inc. ZYVOX (linezolid) injection, tablets and for oral suspension — full prescribing information (FDA-approved labeling, NDA 021130), revised 6/2026.",
        title: "ZYVOX (linezolid) injection, tablets, for oral suspension — Full Prescribing Information",
        organization: "Pfizer Inc. — FDA-approved product labeling",
        year: 2026,
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/021130s050lbl.pdf",
        accessed: "2026-10-06",
      },
    ],
    verification: {
      status: "source-verified",
      lastReviewed: REVIEWED,
      note: "Populated from the manufacturer label (rev. 6/2026). The mapping of the 10–14 vs 14–28 day durations to indications and any efficacy PK/PD target are left unverified. WHO/CDC/IDSA guidance not reconciled. No human clinical review has been performed.",
    },
  },
  {
    id: "6",
    slug: "piperacillin-tazobactam",
    genericName: "Piperacillin/Tazobactam",
    class: "Penicillin",
    subclass: "Beta-lactam/beta-lactamase inhibitor",
    status: "published",
    overview:
      "Combination of a penicillin-class antibacterial (piperacillin) and a beta-lactamase inhibitor (tazobactam) for intravenous use. Summarised from the FDA-approved Wyeth/Pfizer ZOSYN for Injection labeling, revised 6/2017; newer ZOSYN labeling (including ZOSYN Injection in Galaxy containers) exists and was not reviewed.",
    mechanism:
      "Piperacillin is bactericidal by inhibiting septum formation and cell-wall synthesis. Tazobactam has little clinically relevant intrinsic antibacterial activity (reduced affinity for PBPs) but inhibits Molecular class A beta-lactamases, including Richmond-Sykes class III (Bush 2b/2b') penicillinases and cephalosporinases, with variable inhibition of class II and IV enzymes; it does not induce chromosomally mediated beta-lactamases at concentrations achieved with the recommended regimen.",
    spectrumSummary:
      "Label lists activity in vitro and in clinical infections against most isolates of methicillin-susceptible S. aureus, Acinetobacter baumannii, E. coli, H. influenzae (excluding beta-lactamase-negative, ampicillin-resistant isolates), K. pneumoniae, P. aeruginosa (given with an aminoglycoside to which the isolate is susceptible) and the Bacteroides fragilis group.",
    spectrum: [
      { organism: "Escherichia coli", susceptibility: "susceptible" },
      { organism: "Klebsiella pneumoniae", susceptibility: "susceptible" },
      { organism: "Acinetobacter baumannii", susceptibility: "susceptible" },
      { organism: "Haemophilus influenzae", susceptibility: "susceptible" },
      { organism: "Bacteroides fragilis group", susceptibility: "susceptible" },
      { organism: "Staphylococcus aureus (methicillin-susceptible only)", susceptibility: "susceptible" },
      { organism: "Pseudomonas aeruginosa (with an aminoglycoside)", susceptibility: "susceptible" },
    ],
    indications: [
      "Intra-abdominal infections (appendicitis complicated by rupture or abscess, and peritonitis)",
      "Skin and skin structure infections (including cellulitis, cutaneous abscesses, ischemic/diabetic foot infections) caused by beta-lactamase-producing S. aureus",
      "Female pelvic infections (postpartum endometritis, pelvic inflammatory disease)",
      "Community-acquired pneumonia (moderate severity only)",
      "Nosocomial pneumonia (moderate to severe); P. aeruginosa pneumonia should be treated in combination with an aminoglycoside",
    ],
    dosing: [
      {
        indication: "Adults, usual dose (all indications except nosocomial pneumonia)",
        dose: "3.375 g (3 g piperacillin / 0.375 g tazobactam); total 13.5 g/day",
        route: "IV infusion over 30 minutes",
        frequency: "Every 6 hours",
        notes: "Usual duration 7 to 10 days.",
      },
      {
        indication: "Nosocomial pneumonia (initial presumptive treatment)",
        dose: "4.5 g (4 g piperacillin / 0.5 g tazobactam) plus an aminoglycoside; total 18.0 g/day",
        route: "IV infusion over 30 minutes",
        frequency: "Every 6 hours",
        notes: "Recommended duration 7 to 14 days; continue the aminoglycoside if P. aeruginosa is isolated.",
      },
      {
        indication: "Pediatric appendicitis/peritonitis (normal renal function)",
        dose: "100 mg piperacillin/12.5 mg tazobactam per kg for patients ≥9 months up to 40 kg; 80 mg/10 mg per kg for 2 to <9 months; patients >40 kg receive the adult dose",
        route: "IV",
        frequency: "Every 8 hours",
        notes: "How to adjust dosing in pediatric renal impairment has not been determined.",
      },
    ],
    renalAdjustment: [
      { crClRange: "CrCl >40 mL/min", adjustment: "3.375 g every 6 h (nosocomial pneumonia: 4.5 g every 6 h)" },
      { crClRange: "CrCl 20–40 mL/min", adjustment: "2.25 g every 6 h (nosocomial pneumonia: 3.375 g every 6 h)" },
      { crClRange: "CrCl <20 mL/min", adjustment: "2.25 g every 8 h (nosocomial pneumonia: 2.25 g every 6 h)" },
      {
        crClRange: "Hemodialysis",
        adjustment:
          "2.25 g every 12 h (nosocomial pneumonia: 2.25 g every 8 h), plus an additional 0.75 g after each dialysis session on hemodialysis days (hemodialysis removes 30–40% of a dose).",
      },
      { crClRange: "CAPD", adjustment: "2.25 g every 12 h (nosocomial pneumonia: 2.25 g every 8 h); no additional dose necessary" },
    ],
    hepaticAdjustment:
      "Dosage adjustment is not warranted in patients with hepatic cirrhosis; half-lives of piperacillin and tazobactam increase by approximately 25% and 18% respectively in cirrhosis.",
    pharmacokinetics: [
      { label: "Piperacillin after 3.375 g (30-min infusion)", value: "Cmax 242 mcg/mL; AUC 242 mcg·h/mL; clearance 207 mL/min; V 15.1 L; t1/2 0.84 h" },
      { label: "Tazobactam after 3.375 g (30-min infusion)", value: "Cmax 24 mcg/mL; AUC 25.0 mcg·h/mL; clearance 251 mL/min; V 14.8 L; t1/2 0.68 h" },
      { label: "Protein binding", value: "~30% for each component, unaffected by the other" },
      { label: "Distribution", value: "Widely distributed to tissues and fluids (mean tissue concentrations generally 50–100% of plasma); low CSF penetration with non-inflamed meninges" },
      { label: "Metabolism / excretion", value: "Piperacillin: minor active desethyl metabolite, 68% of dose in urine unchanged. Tazobactam: single inactive metabolite, ~80% of dose in urine unchanged. Both secreted into bile." },
      { label: "Half-life", value: "0.7–1.2 h in healthy subjects; with CrCl <20 mL/min roughly doubled for piperacillin and fourfold for tazobactam" },
    ],
    pharmacodynamics:
      "Per the label, the pharmacodynamic parameter most predictive of clinical and microbiological efficacy is time above MIC. The label gives no numeric target: Numeric PK/PD target: Not verified — requires clinical review.",
    interactions: [
      "Aminoglycosides: piperacillin can inactivate aminoglycosides in vitro and, in end-stage renal disease on hemodialysis, in vivo (especially tobramycin — monitor concentrations). Administer separately; EDTA-containing ZOSYN is compatible for Y-site co-administration with amikacin and gentamicin only under stated conditions, and not with tobramycin.",
      "Probenecid: prolongs half-life of piperacillin by 21% and tazobactam by 71%; do not co-administer unless the benefit outweighs the risk.",
      "Vancomycin: increased incidence of acute kidney injury versus vancomycin alone; monitor kidney function (no pharmacokinetic interaction noted).",
      "Anticoagulants (high-dose heparin, oral anticoagulants) and drugs affecting coagulation or platelet function: test coagulation parameters more frequently.",
      "Vecuronium and other non-depolarizing muscle relaxants: prolonged neuromuscular blockade; monitor for related adverse reactions.",
      "Methotrexate: may reduce methotrexate clearance; monitor serum concentrations and signs of toxicity.",
      "Laboratory tests: false-positive Bio-Rad Platelia Aspergillus EIA results reported; false-positive urine glucose with copper-reduction methods (use enzymatic glucose oxidase methods).",
    ],
    adverseEffects: [
      "Most common (>5%): diarrhea (11.3%), constipation (7.7%), headache (7.7%), nausea (6.9%), insomnia (6.6%); rash (4.2%), pruritus (3.1%)",
      "Serious hypersensitivity (anaphylactic/anaphylactoid, including shock) reactions",
      "Severe cutaneous adverse reactions (SJS, TEN, DRESS, AGEP)",
      "Hematologic: bleeding manifestations, reversible leukopenia/neutropenia (most often with prolonged administration)",
      "Neuromuscular excitability or convulsions at higher than recommended IV doses, particularly with renal failure",
      "Nephrotoxicity in critically ill patients (independent risk factor for renal failure and delayed renal recovery vs other beta-lactams in a controlled trial)",
      "Electrolyte effects (sodium load 2.84 mEq per gram piperacillin; possible hypokalemia); Clostridium difficile-associated diarrhea",
      "Increased incidence of fever and rash in cystic fibrosis patients",
    ],
    contraindications: [
      "History of allergic reactions to any of the penicillins, cephalosporins or beta-lactamase inhibitors",
    ],
    resistance: `${NOT_VERIFIED} (the microbiology section of the source label does not describe resistance mechanisms; it states that tazobactam inhibits Molecular class A beta-lactamases and does not induce chromosomally mediated beta-lactamases)`,
    monitoring: [
      "Periodic assessment of hematopoietic function, especially with prolonged therapy (≥21 days)",
      "Renal function in critically ill patients (consider alternatives) and with concomitant vancomycin",
      "Coagulation parameters, especially with renal failure, anticoagulants or drugs affecting coagulation/platelet function",
      "Periodic electrolyte determinations in patients with low potassium reserves or on cytotoxic therapy or diuretics",
      "Tobramycin concentrations in hemodialysis patients; methotrexate concentrations if co-administered",
      "Diarrhea during or after therapy (up to 2 months)",
    ],
    stewardshipNotes: [
      "Use only for infections proven or strongly suspected to be caused by susceptible bacteria; consider culture and susceptibility information; local epidemiology may inform empiric choice (label 1.6).",
      "Prescribing in the absence of a proven or strongly suspected bacterial infection is unlikely to benefit the patient and increases the risk of drug-resistant bacteria (label 5.8).",
      "Based on the critical-care nephrotoxicity data, the label advises considering alternative treatment options in critically ill patients.",
    ],
    references: [
      {
        id: "r1",
        citation:
          "Wyeth Pharmaceuticals Inc., a subsidiary of Pfizer Inc. ZOSYN (piperacillin and tazobactam) for Injection — full prescribing information (FDA-approved labeling), revised 6/2017.",
        title: "ZOSYN (piperacillin and tazobactam) for Injection — Full Prescribing Information",
        organization: "Wyeth Pharmaceuticals Inc. (Pfizer) — FDA-approved product labeling",
        year: 2017,
        url: "https://labeling.pfizer.com/ShowLabeling.aspx?id=1206",
        accessed: "2026-10-06",
      },
    ],
    verification: {
      status: "source-verified",
      lastReviewed: REVIEWED,
      note: "Populated from a manufacturer label revised 2017; newer ZOSYN labeling exists and may differ — not reviewed. Resistance mechanisms and a numeric PK/PD target are not stated in the source and left unverified. No human clinical review has been performed.",
    },
  },
];

export function getAntibioticBySlug(slug: string) {
  return antibiotics.find((a) => a.slug === slug);
}
