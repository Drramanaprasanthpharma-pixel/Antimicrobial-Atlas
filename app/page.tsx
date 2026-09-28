import Link from "next/link";
import Hero3D from "@/components/three/Hero3D";
import SearchBar from "@/components/search/SearchBar";
import AntibioticCard from "@/components/antibiotics/AntibioticCard";
import ClassCard from "@/components/classes/ClassCard";
import ClinicalToolCard from "@/components/tools/ClinicalToolCard";
import AMSDefinitionCard from "@/components/ams/AMSDefinitionCard";
import EightDCard from "@/components/ams/EightDCard";
import AMSPathwayFlow from "@/components/ams/AMSPathwayFlow";
import ResourceLinkCard from "@/components/references/ResourceLinkCard";
import { antibiotics } from "@/lib/data/antibiotics";
import { classes } from "@/lib/data/classes";
import { clinicalTools } from "@/lib/data/tools";
import { amsDefinitions, amsGoals } from "@/lib/data/ams-definitions";
import { eightDs } from "@/lib/data/eight-ds";
import { microbiologyTopics } from "@/lib/data/microbiology";
import { resourceLinks } from "@/lib/data/resources";
import { ArrowRight, ShieldCheck, Microscope, Pill } from "lucide-react";

export default function Home() {
  const popular = antibiotics.slice(0, 4);
  const topClasses = classes.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-teal font-medium mb-3">Antimicrobial Atlas</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink-0 leading-[1.05]">
              Evidence-based antimicrobial
              <br />
              knowledge, organized.
            </h1>
            <p className="text-ink-1 mt-5 max-w-lg text-base leading-relaxed">
              A structured reference for antimicrobial agents, pathogens and stewardship —
              built for clinical pharmacists, physicians, microbiologists and students.
            </p>
            <div className="mt-8 max-w-xl">
              <SearchBar large placeholder="Search an antibiotic, pathogen, infection, or clinical topic…" />
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {popular.map((a) => (
                <Link
                  key={a.id}
                  href={`/antibiotics/${a.slug}`}
                  className="text-xs rounded-full border border-line px-3 py-1.5 text-ink-1 hover:text-teal hover:border-line-strong transition-colors"
                >
                  {a.genericName}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[420px]">
            <Hero3D />
          </div>
        </div>
      </section>

      {/* Antimicrobial Stewardship */}
      <section className="relative border-t border-line">
        <div className="molecular-backdrop" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-emerald font-medium">
              <ShieldCheck size={14} /> Antimicrobial Stewardship
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-0 mt-3">
              Using antimicrobials safely, effectively, and responsibly.
            </h2>
            <p className="text-ink-1 mt-4 text-sm sm:text-base leading-relaxed">
              Antimicrobial stewardship (AMS) is an interprofessional effort focused on
              timely, appropriate antimicrobial use — improving outcomes for the
              individual patient while protecting the effectiveness of these drugs for
              everyone else.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-w-4xl mx-auto mb-12">
            {amsGoals.map((goal) => (
              <div
                key={goal}
                className="flex items-center gap-2.5 rounded-xl border border-line px-3.5 py-2.5 text-sm text-ink-1"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                {goal}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {amsDefinitions.map((d) => (
              <AMSDefinitionCard key={d.id} definition={d} />
            ))}
          </div>
        </div>
      </section>

      {/* The 8 Ds */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-0">
              The 8 Ds of Antimicrobial Stewardship
            </h2>
            <p className="text-ink-1 mt-3 text-sm sm:text-base">
              A practical framework for every antimicrobial decision. Tap a card to expand it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {eightDs.map((d) => (
              <EightDCard key={d.id} item={d} />
            ))}
          </div>
        </div>
      </section>

      {/* Clinical decision framework */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-0">
              AMS as a clinical decision framework
            </h2>
            <p className="text-ink-1 mt-3 text-sm sm:text-base">
              The same 8 Ds, arranged as the sequence a stewardship-minded clinician follows.
            </p>
          </div>
          <AMSPathwayFlow />
        </div>
      </section>

      {/* Antimicrobial Agents (classes) */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-end justify-between mb-5">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink-0">
              Antimicrobial agents
            </h2>
            <Link href="/classes" className="text-sm text-teal flex items-center gap-1 hover:gap-1.5 transition-all">
              All classes <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topClasses.map((c) => (
              <ClassCard key={c.id} item={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Empirical therapy teaser */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="glass rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-emerald font-medium mb-1.5">Stewardship</p>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink-0">
                Empirical antimicrobial therapy
              </h2>
              <p className="text-ink-1 text-sm mt-2 max-w-xl">
                Selecting a starting regimen before culture results return — through to
                de-escalation, IV-to-oral switch, dose and duration optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Antibiotic Database */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-end justify-between mb-5">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-cyan font-medium mb-1">
                <Pill size={13} /> Database
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink-0">
                Antibiotic database
              </h2>
            </div>
            <Link href="/antibiotics" className="text-sm text-teal flex items-center gap-1 hover:gap-1.5 transition-all">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popular.map((a) => (
              <AntibioticCard key={a.id} antibiotic={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Microbiology / Pathogens */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-end justify-between mb-5">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-cyan font-medium mb-1">
                <Microscope size={13} /> Microbiology
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink-0">
                Microbiology &amp; pathogens
              </h2>
            </div>
            <Link href="/microbiology" className="text-sm text-teal flex items-center gap-1 hover:gap-1.5 transition-all">
              Explore <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {microbiologyTopics.slice(0, 6).map((t) => (
              <div key={t.id} className="glass-soft rounded-2xl p-5">
                <h3 className="font-display text-base font-semibold text-ink-0 mb-1.5">{t.title}</h3>
                <p className="text-sm text-ink-1">{t.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical tools */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink-0 mb-5">
            Clinical tools
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {clinicalTools.map((t) => (
              <ClinicalToolCard key={t.id} tool={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Resources / References */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 pb-20">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink-0 mb-5">
            Resources &amp; references
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resourceLinks.map((r) => (
              <ResourceLinkCard key={r.id} resource={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
