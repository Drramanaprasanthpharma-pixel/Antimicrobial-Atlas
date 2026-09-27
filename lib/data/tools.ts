import { ClinicalTool } from "@/lib/types";

export const clinicalTools: ClinicalTool[] = [
  { id: "t1", name: "Spectrum Matrix", description: "Cross-reference antibiotics against organisms in an interactive susceptibility grid.", href: "/spectrum", status: "available" },
  { id: "t2", name: "AMS Playbook", description: "Empirical therapy, de-escalation and IV-to-oral pathways for stewardship review.", href: "/ams", status: "available" },
  { id: "t3", name: "Resistance Atlas", description: "Browse resistance mechanisms — ESBL, AmpC, MRSA, VRE and carbapenem resistance.", href: "/resistance", status: "available" },
  { id: "t4", name: "Renal Dose Calculator", description: "Future tool: adjust dosing regimens against renal function tiers.", href: "/admin", status: "coming-soon" },
];
