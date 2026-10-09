// Structured data for the "Antimicrobial Agents" classification browser.
//
// SOURCE: transcribed directly from the user-supplied textbook table
// (Section 23, Table 23.1 "Antimicrobial agents - classification, indication,
// and mechanism of resistance") and its continuation pages.
//
// Faithfulness rules followed while transcribing:
// - Only content visible in the source images is included.
// - Where a table cell was genuinely illegible in the photo, the value is
//   the literal string "[TEXT UNCLEAR]" instead of a guess.
// - Where a table cell was visibly blank in the source (no mechanism of
//   resistance given), mechanismOfResistance is an empty array — the UI
//   renders this as "Not stated in source", not as invented content.
//
// Shape is intentionally simple/flat so it can be swapped for a Firestore
// collection later with minimal changes (see README).

export interface DrugVariant {
  /** Optional sub-row label from the book, e.g. "1st generation". */
  label?: string;
  drugs: string[];
  spectrumOfActivity: string[];
}

export interface Subclass {
  id: string;
  /** "Class/mechanism" column value from the book. */
  classMechanism: string;
  /** Short mechanism note shown in parentheses next to the class name in the book. */
  mechanismNote?: string;
  variants: DrugVariant[];
  mechanismOfResistance: string[];
}

export interface ClassGroup {
  id: string;
  name: string;
  /** Shared note spanning the whole class group in the book (e.g. the beta-lactam MOA line). */
  note?: string;
  subclasses: Subclass[];
}

export interface MajorSection {
  id: string;
  /** Book's own section label, e.g. "A. Inhibit Cell Wall Synthesis". */
  name: string;
  note?: string;
  classGroups: ClassGroup[];
}

export const antimicrobialIntro =
  "Antimicrobial agent is defined as a natural or synthetic substance that kills or inhibits the growth of various microorganisms such as bacteria, viruses, fungi and parasites.";

export const glossary: { abbr: string; meaning: string }[] = [
  { abbr: "MSSA", meaning: "Methicillin susceptible Staphylococcus aureus" },
  { abbr: "MRSA", meaning: "Methicillin resistant Staphylococcus aureus" },
  { abbr: "CA-MRSA", meaning: "Community acquired MRSA" },
  { abbr: "ESBL", meaning: "Extended spectrum β-lactamases" },
  { abbr: "VRE", meaning: "Vancomycin resistant Enterococcus" },
];

export const antimicrobialAgents: MajorSection[] = [
  {
    id: "a",
    name: "A. Inhibit Cell Wall Synthesis",
    classGroups: [
      {
        id: "beta-lactams",
        name: "β-Lactam Antibiotics",
        note:
          "Bactericidal: block peptidoglycan cross linking by inhibiting the transpeptidase enzyme, i.e., penicillin-binding protein",
        subclasses: [
          {
            id: "penicillins",
            classMechanism: "Penicillins",
            variants: [
              {
                label: "Penicillin",
                drugs: ["Penicillin G", "Procaine penicillin G", "Benzathine penicillin G", "Penicillin V"],
                spectrumOfActivity: [
                  "Mostly gram-positive bacteria:",
                  "Streptococcus pyogenes",
                  "Pneumococcus",
                  "Corynebacterium diphtheriae (diphtheria)",
                  "Clostridium tetani (tetanus)",
                  "Clostridium perfringens (gas gangrene)",
                  "Meningococcus",
                  "Gonococcus",
                  "Treponema pallidum (syphilis)",
                ],
              },
              {
                label: "Penicillinase-resistant penicillins",
                drugs: ["Cloxacillin", "Dicloxacillin", "Flucloxacillin", "Oxacillin", "Methicillin"],
                spectrumOfActivity: [
                  "Same as penicillin plus Penicillinase producing methicillin-susceptible Staphylococcus aureus",
                ],
              },
              {
                label: "Aminopenicillins (extended spectrum)",
                drugs: ["Ampicillin", "Amoxicillin"],
                spectrumOfActivity: [
                  "Same as penicillin plus:",
                  "Enterococcus faecalis",
                  "Escherichia coli",
                  "Helicobacter pylori",
                  "Salmonella",
                  "Shigella (bacillary dysentery)",
                ],
              },
              {
                label: "Anti-pseudomonal penicillins (Carboxypenicillins and ureidopenicillins)",
                drugs: ["Carbenicillin", "Ticarcillin", "Piperacillin"],
                spectrumOfActivity: ["Same as aminopenicillins plus Pseudomonas aeruginosa"],
              },
            ],
            mechanismOfResistance: [
              "Drug inactivation (by producing β-lactamase enzyme): seen in both gram-positive and gram-negative bacteria",
              "Alteration of target site — PBP (penicillin-binding protein) is altered to PBP2a, seen in gram-positive bacteria",
              "Decreased permeability as in gram-negative bacteria, due to altered outer-membrane porins",
            ],
          },
          {
            id: "cephalosporins",
            classMechanism: "Cephalosporins",
            variants: [
              {
                label: "1st generation",
                drugs: ["Cefazolin", "Cephalexin"],
                spectrumOfActivity: [
                  "Staphylococcus aureus",
                  "Coagulase negative Staphylococcus species",
                  "Some gram-negative bacteria like Escherichia coli and Klebsiella",
                ],
              },
              {
                label: "2nd generation",
                drugs: ["Cephamycins (cefoxitin, cefotetan)", "Cefaclor", "Cefuroxime"],
                spectrumOfActivity: [
                  "Same as 1st generation plus",
                  "↑ Gram-negative activity",
                  "↑ Anaerobic activity (cefoxitin and cefotetan)",
                ],
              },
              {
                label: "3rd generation",
                drugs: ["Ceftriaxone", "Cefotaxime", "Ceftazidime"],
                spectrumOfActivity: [
                  "Decreased activity against gram-positives compared to 1st, 2nd generations",
                  "↑ Gram-negative activity",
                  "Some are active against Pseudomonas (Ceftazidime)",
                  "Ceftriaxone is active against pneumococci, meningococci and gonococci",
                ],
              },
              {
                label: "4th generation",
                drugs: ["Cefepime", "Cefpirome"],
                spectrumOfActivity: ["Good activity against gram-positive and negative bacteria including Pseudomonas"],
              },
              {
                label: "5th generation",
                drugs: ["Ceftobiprole", "Ceftaroline"],
                spectrumOfActivity: ["Same as 3rd generation and MRSA (only β-lactam to be effective against MRSA)"],
              },
            ],
            mechanismOfResistance: [
              "Same as Penicillins plus",
              "Drug inactivation by ESBL (extended spectrum β-lactamases)",
              "Efflux pumps and loss of porin channels",
            ],
          },
          {
            id: "beta-lactamase-combos",
            classMechanism: "β-Lactam + β-Lactamase Inhibitors",
            variants: [
              {
                drugs: [
                  "Ampicillin-sulbactam*",
                  "Amoxicillin-clavulanate*",
                  "Cefoperazone-sulbactam",
                  "Ceftazidime-avibactam",
                  "Ceftolozane-tazobactam",
                  "Piperacillin-tazobactam*",
                  "Meropenem-vaborbactam*",
                ],
                spectrumOfActivity: [
                  "Same spectrum of respective β-lactam drug plus active against β-lactamase producing bacteria",
                  "*Have excellent anaerobic coverage",
                ],
              },
            ],
            mechanismOfResistance: [],
          },
          {
            id: "carbapenems",
            classMechanism: "Carbapenems",
            variants: [
              {
                drugs: ["Imipenem", "Meropenem", "Doripenem", "Ertapenem"],
                spectrumOfActivity: [
                  "Broadest range of activity against most bacteria, which include gram-positive cocci, Enterobacterales, Pseudomonas, Listeria, anaerobes like Bacteroides fragilis and Clostridioides difficile",
                  "No action on MRSA and Mycoplasma",
                ],
              },
            ],
            mechanismOfResistance: [
              "Same as Penicillins plus",
              "Drug inactivation by carbapenemases",
              "Efflux pump and loss of porin channels",
            ],
          },
          {
            id: "monobactam",
            classMechanism: "Monobactam",
            variants: [{ drugs: ["Aztreonam"], spectrumOfActivity: ["Gram-negative rods"] }],
            mechanismOfResistance: ["ESBL"],
          },
        ],
      },
      {
        id: "other-cell-wall-inhibitors",
        name: "Other Cell Wall Inhibitors",
        subclasses: [
          {
            id: "glycopeptides",
            classMechanism: "Glycopeptides",
            mechanismNote: "Bactericidal: disrupt peptidoglycan cross-linkage",
            variants: [
              {
                drugs: ["Vancomycin", "Teicoplanin (Other)"],
                spectrumOfActivity: [
                  "Vancomycin is active against most gram-positive bacteria including MRSA (drug of choice given by parenteral (i/v) route), and for Clostridioides difficile infection (CDI) given by oral route",
                ],
              },
            ],
            mechanismOfResistance: [
              "Alteration of target (substitution of D-alanine—D-alanine side chain of peptidoglycan)",
            ],
          },
          {
            id: "fosfomycin",
            classMechanism: "Fosfomycin",
            variants: [
              {
                drugs: ["Fosfomycin"],
                spectrumOfActivity: [
                  "Inactivation of the enzyme enol pyruvate transferase involved in one of the early steps of bacterial cell wall synthesis",
                  "Active against urinary tract pathogens; against both gram-positive and gram-negative bacteria such as Staphylococcus, Enterococcus, Escherichia coli, etc.",
                ],
              },
            ],
            mechanismOfResistance: [
              "Alteration of target site (MurA)",
              "Producing enzymes that inactivate fosfomycin",
              "Reduced uptake through transport systems",
            ],
          },
          {
            id: "bacitracin",
            classMechanism: "Bacitracin",
            variants: [{ drugs: ["Bacitracin"], spectrumOfActivity: ["Topical gram-positive cocci infections"] }],
            mechanismOfResistance: ["Not defined"],
          },
        ],
      },
    ],
  },
  {
    id: "b",
    name: "B. Protein Synthesis Inhibition",
    classGroups: [
      {
        id: "anti-30s",
        name: "Anti-30S Ribosomal Subunit",
        subclasses: [
          {
            id: "aminoglycosides",
            classMechanism: "Aminoglycosides",
            mechanismNote: "Bactericidal: irreversible binding to 30S subunit of ribosome",
            variants: [
              {
                drugs: ["Gentamicin", "Neomycin", "Amikacin", "Tobramycin", "Streptomycin"],
                spectrumOfActivity: [
                  "Aerobic gram-negative bacteria, such as Enterobacterales and some are active against Pseudomonas (gentamicin and amikacin)",
                  "Often used for empirical therapy in adjunct with beta-lactam agents in respiratory infections, meningitis and subacute bacterial endocarditis",
                ],
              },
            ],
            mechanismOfResistance: ["[TEXT UNCLEAR]"],
          },
          {
            id: "tetracyclines",
            classMechanism: "Tetracyclines",
            mechanismNote: "Bacteriostatic: bind to subunit of ribosome and block tRNA attachment",
            variants: [
              {
                drugs: ["Tetracycline", "Doxycycline", "Minocycline"],
                spectrumOfActivity: [
                  "Rickettsiae, Chlamydiae, Mycoplasma",
                  "Spirochetes",
                  "Yersinia pestis, Brucella, Haemophilus ducreyi, Campylobacter, Vibrio cholerae",
                  "Gram-positive cocci like Staphylococcus",
                ],
              },
            ],
            mechanismOfResistance: [
              "Decreased intracellular drug accumulation (active efflux or decreased influx)",
              "Ribosomal target site alteration (production of a ribosomal protection protein tetM that displaces drug from its target)",
            ],
          },
          {
            id: "glycylcyclines",
            classMechanism: "Glycylcyclines",
            mechanismNote: "MOA, same as tetracycline",
            variants: [
              {
                drugs: ["Tigecycline"],
                spectrumOfActivity: ["Staphylococcus, Enterococcus", "Acinetobacter, and Enterobacterales"],
              },
            ],
            mechanismOfResistance: ["Same as tetracyclines"],
          },
        ],
      },
      {
        id: "anti-50s",
        name: "Anti-50S Ribosomal Subunit",
        subclasses: [
          {
            id: "phenicols",
            classMechanism: "Phenicols",
            mechanismNote: "Bacteriostatic: binds to 50S ribosomal subunit and interferes with peptide bond formation",
            variants: [
              {
                drugs: ["Chloramphenicol"],
                spectrumOfActivity: [
                  "Haemophilus influenzae",
                  "Pyogenic meningitis",
                  "Brain abscess",
                  "Anaerobic infection",
                  "Enteric fever (Salmonella) — not used now due to development of resistance",
                ],
              },
            ],
            mechanismOfResistance: [
              "Drug inactivation by producing chloramphenicol acetyltransferase enzyme",
              "Decreased permeability and ribosomal mutation",
            ],
          },
          {
            id: "macrolides",
            classMechanism: "Macrolides",
            mechanismNote: "Bacteriostatic: binds 50S ribosomal subunit and prevents translocation of elongated peptide",
            variants: [
              {
                drugs: ["Erythromycin", "Azithromycin", "Clarithromycin"],
                spectrumOfActivity: ["Streptococcus", "Haemophilus influenzae", "Mycoplasma pneumoniae"],
              },
            ],
            mechanismOfResistance: [
              "Alteration of ribosomal target by production of methylase enzymes (erm gene)",
              "Active efflux of antibiotic",
              "Hydrolysis by esterases",
            ],
          },
          {
            id: "ketolide",
            classMechanism: "Ketolide",
            mechanismNote: "MOA, same as macrolide",
            variants: [
              {
                drugs: ["Telithromycin"],
                spectrumOfActivity: ["Community acquired pneumonia (mild to moderate) by S. pneumoniae"],
              },
            ],
            mechanismOfResistance: ["Altered target (methylation of ribosomal binding site)", "Active drug efflux"],
          },
          {
            id: "lincosamides",
            classMechanism: "Lincosamides",
            mechanismNote: "Binds 50S subunit, blocks peptide bond formation",
            variants: [
              {
                drugs: ["Clindamycin", "Lincomycin"],
                spectrumOfActivity: ["S. aureus (CA-MRSA, MSSA)", "Beta-hemolytic streptococci", "Anaerobic infection"],
              },
            ],
            mechanismOfResistance: ["Altered target (methylation of ribosomal binding site)"],
          },
          {
            id: "oxazolidinones",
            classMechanism: "Oxazolidinones",
            mechanismNote: "Inhibits protein synthesis by binding to 50S",
            variants: [
              { drugs: ["Linezolid"], spectrumOfActivity: ["Resistant gram-positives like MRSA and VRE"] },
            ],
            mechanismOfResistance: ["Alteration of target site"],
          },
          {
            id: "streptogramins",
            classMechanism: "Streptogramins",
            mechanismNote: "Inhibit protein synthesis by binding to 50S",
            variants: [
              {
                drugs: ["Quinupristin", "Dalfopristin"],
                spectrumOfActivity: [
                  "Streptococcus pyogenes and Staphylococcus aureus skin infections",
                  "MRSA infections",
                  "VRE (Vancomycin resistant enterococci) infections",
                ],
              },
            ],
            mechanismOfResistance: [
              "Alteration of target (dalfopristin)",
              "Active efflux (quinupristin)",
              "Drug inactivation (quinupristin and dalfopristin)",
            ],
          },
          {
            id: "mupirocin",
            classMechanism: "Mupirocin",
            mechanismNote: "Inhibits isoleucyl-tRNA synthetase",
            variants: [
              {
                drugs: ["Mupirocin"],
                spectrumOfActivity: ["Topical ointment is given for skin infections", "Nasal carriers of MRSA"],
              },
            ],
            mechanismOfResistance: ["Mutation of gene for target site protein"],
          },
          {
            id: "pleuromutilin",
            classMechanism: "Pleuromutilin",
            mechanismNote: "Inhibits protein synthesis by binding to 23S rRNA of 50S subunit",
            variants: [
              {
                drugs: ["Lefamulin"],
                spectrumOfActivity: [
                  "Streptococcus pneumoniae, Staphylococcus aureus (methicillin-susceptible), Legionella pneumophila, Haemophilus influenzae, Chlamydophila pneumoniae, and Mycoplasma pneumoniae",
                ],
              },
            ],
            mechanismOfResistance: ["Not defined"],
          },
        ],
      },
    ],
  },
  {
    id: "c",
    name: "C. Nucleic Acid Synthesis Inhibitors",
    classGroups: [
      {
        id: "dna-synthesis-inhibitors",
        name: "DNA Synthesis Inhibitors",
        subclasses: [
          {
            id: "fluoroquinolones",
            classMechanism: "Fluoroquinolones",
            mechanismNote: "Inhibit DNA gyrase and topoisomerase IV, thus inhibiting DNA replication",
            variants: [
              {
                label: "1st generation",
                drugs: ["Norfloxacin", "Ciprofloxacin", "Ofloxacin"],
                spectrumOfActivity: [
                  "Enterobacterales: such as E. coli, Klebsiella, Enterobacter, Salmonella, Shigella, Proteus, Yersinia",
                  "Others: Neisseria, Haemophilus, Campylobacter, Vibrio cholerae, Pseudomonas, Staphylococcus aureus",
                ],
              },
              {
                label: "2nd generation",
                drugs: ["Levofloxacin", "Moxifloxacin", "Gemifloxacin"],
                spectrumOfActivity: [
                  "Enterobacterales: such as E. coli, Klebsiella, Enterobacter, Salmonella, Shigella, Proteus, Yersinia",
                  "Others: Neisseria, Haemophilus, Campylobacter, Vibrio cholerae, Pseudomonas, Staphylococcus aureus",
                ],
              },
            ],
            mechanismOfResistance: [
              "Alteration of target (mutation of DNA gyrase genes)",
              "Upregulation of efflux pumps and reduced entry by porin loss",
            ],
          },
          {
            id: "nitroimidazoles",
            classMechanism: "Nitroimidazoles",
            mechanismNote: "Damage DNA",
            variants: [
              {
                drugs: ["Metronidazole", "Tinidazole", "Secnidazole"],
                spectrumOfActivity: [
                  "Anaerobic organisms",
                  "Also active against protozoa such as Entamoeba, Giardia and Trichomonas",
                ],
              },
            ],
            mechanismOfResistance: ["Decreased drug uptake", "Active efflux", "Decreased drug activation"],
          },
          {
            id: "nitrofuran",
            classMechanism: "Nitrofuran",
            mechanismNote: "Damages bacterial DNA",
            variants: [
              {
                drugs: ["Nitrofurantoin"],
                spectrumOfActivity: ["Urinary tract infection (E. coli, Klebsiella, Enterococcus)"],
              },
            ],
            mechanismOfResistance: ["Altered drug activating enzyme"],
          },
        ],
      },
      {
        id: "rna-synthesis-inhibitors",
        name: "RNA Synthesis Inhibitors",
        subclasses: [
          {
            id: "rifamycins",
            classMechanism: "Rifamycins",
            mechanismNote: "Inhibits RNA polymerase",
            variants: [
              {
                drugs: ["Rifampicin", "Rifaximin"],
                spectrumOfActivity: [
                  "M. tuberculosis, M. leprae",
                  "Nontuberculous mycobacteria",
                  "Staphylococcus aureus",
                  "Prophylaxis for H. influenzae meningitis",
                  "Prophylaxis for meningococcal meningitis",
                ],
              },
            ],
            mechanismOfResistance: ["Alteration of target (mutation of rpoB gene)"],
          },
        ],
      },
    ],
  },
  {
    id: "d",
    name: "D. Mycolic Acid Synthesis Inhibitors",
    classGroups: [
      {
        id: "mycolic-acid-inhibitors",
        name: "Mycolic Acid Synthesis Inhibitors",
        subclasses: [
          {
            id: "isoniazid",
            classMechanism: "Isonicotinic Acid Hydrazide",
            mechanismNote: "Inhibits mycolic acid synthesis",
            variants: [
              { drugs: ["Isoniazid (INH)"], spectrumOfActivity: ["Tuberculosis", "Latent TB"] },
            ],
            mechanismOfResistance: [
              "Mutations in enzyme processing isoniazid into active metabolites (KatG enzyme)",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "e",
    name: "E. Folic Acid Synthesis Inhibitors",
    note:
      "Bacteriostatic: competitively inhibit enzymes involved in two steps of folic acid biosynthesis. PABA (para-amino-benzoic acid) → [Folate synthase; sulfonamide blocks] → Dihydrofolic acid → [Dihydrofolate reductase; trimethoprim blocks] → Tetrahydrofolic acid",
    classGroups: [
      {
        id: "antifolates",
        name: "Antifolates",
        subclasses: [
          {
            id: "sulfonamides-trimethoprim",
            classMechanism: "Antifolates (Sulfonamides and Trimethoprim)",
            variants: [
              {
                drugs: ["Sulfadiazine", "Co-trimoxazole (Trimethoprim + Sulfamethoxazole)"],
                spectrumOfActivity: [
                  "Sulfadiazine: used topically in burn wound surface",
                  "Co-trimoxazole is indicated in:",
                  "Urinary tract and respiratory tract infections — active against Serratia, Klebsiella, Enterobacter",
                  "Shigella dysentery, Vibrio cholerae",
                  "Toxoplasma gondii, Haemophilus ducreyi",
                  "Pneumocystis jirovecii",
                ],
              },
            ],
            mechanismOfResistance: [
              "Modification in DHFR as a result of spontaneous mutations",
              "Modification in pathway for DNA synthesis",
              "Alterations in bacterial cell wall leading to decreased permeability",
              "Excess production of DHFR",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "f",
    name: "F. Antimicrobial Agents that Act on Cell Membrane",
    classGroups: [
      {
        id: "cell-membrane-agents",
        name: "Cell Membrane Agents",
        subclasses: [
          {
            id: "lipopeptides",
            classMechanism: "Lipopeptides",
            mechanismNote: "Forms channel in cell membrane, leading to leakage of ions and depolarization of cell membrane",
            variants: [
              {
                drugs: ["Daptomycin"],
                spectrumOfActivity: ["Bactericidal against gram-positive bacteria including VRE and MRSA"],
              },
            ],
            mechanismOfResistance: ["Complex and multi-factorial"],
          },
          {
            id: "polymyxins",
            classMechanism: "Polymyxins",
            mechanismNote: "Binds to LPS and disrupts both outer and inner cell membrane",
            variants: [
              {
                drugs: ["Polymyxin B", "Colistin (Polymyxin E) — systemic and inhalational use"],
                spectrumOfActivity: ["Gram-negative infections"],
              },
            ],
            mechanismOfResistance: ["Alteration of LPS", "Efflux pump mediated"],
          },
        ],
      },
    ],
  },
];
