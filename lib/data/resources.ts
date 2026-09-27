export interface ResourceLink {
  id: string;
  org: string;
  title: string;
  description: string;
}

export const resourceLinks: ResourceLink[] = [
  { id: "who", org: "WHO", title: "World Health Organization \u2014 AMS guidance", description: "Global antimicrobial stewardship policy and technical guidance." },
  { id: "cdc", org: "CDC", title: "CDC \u2014 Core Elements of Antibiotic Stewardship", description: "Core elements for hospital, outpatient and nursing home stewardship programs." },
  { id: "idsa", org: "IDSA", title: "IDSA \u2014 Stewardship guidelines", description: "Clinical practice guidelines for implementing an antimicrobial stewardship program." },
];
