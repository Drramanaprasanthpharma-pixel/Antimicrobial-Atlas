import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { antibiotics, getAntibioticBySlug } from "@/lib/data/antibiotics";
import AntibioticHeader from "@/components/antibiotics/AntibioticHeader";
import InformationSection from "@/components/antibiotics/InformationSection";
import ReferenceCard from "@/components/references/ReferenceCard";
import DemoBanner from "@/components/ui/DemoBanner";

export function generateStaticParams() {
  return antibiotics.map((a) => ({ slug: a.slug }));
}

const susceptibilityLabel: Record<string, string> = {
  susceptible: "Susceptible",
  variable: "Variable",
  resistant: "Resistant",
  "not-covered": "Not covered",
};

export default async function AntibioticDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const antibiotic = getAntibioticBySlug(slug);
  if (!antibiotic) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-6">
      <Link href="/antibiotics" className="inline-flex items-center gap-1.5 text-sm text-ink-2 hover:text-teal">
        <ArrowLeft size={14} /> Back to antibiotics
      </Link>

      <DemoBanner text="This entire profile is demo / placeholder content for interface scaffolding \u2014 not a verified clinical recommendation." />

      <AntibioticHeader antibiotic={antibiotic} />

      <InformationSection title="Mechanism of action">
        <p>{antibiotic.mechanism}</p>
      </InformationSection>

      <InformationSection title="Spectrum of activity">
        <p className="mb-3">{antibiotic.spectrumSummary}</p>
        <div className="flex flex-wrap gap-2">
          {antibiotic.spectrum.map((s) => (
            <span
              key={s.organism}
              className="text-xs rounded-full border border-line px-3 py-1 text-ink-1"
            >
              {s.organism} \u2014 {susceptibilityLabel[s.susceptibility]}
            </span>
          ))}
        </div>
      </InformationSection>

      <InformationSection title="Indications">
        <ul className="list-disc list-inside space-y-1">
          {antibiotic.indications.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </InformationSection>

      <InformationSection title="Dosing">
        <div className="space-y-3">
          {antibiotic.dosing.map((d, i) => (
            <div key={i} className="rounded-xl border border-line px-4 py-3">
              <p className="text-ink-0 font-medium text-sm">{d.indication}</p>
              <p className="font-data text-sm text-teal mt-1">
                {d.dose} \u00b7 {d.route} \u00b7 {d.frequency}
              </p>
              {d.notes && <p className="text-xs text-ink-2 mt-1">{d.notes}</p>}
            </div>
          ))}
        </div>
      </InformationSection>

      <div className="grid sm:grid-cols-2 gap-6">
        <InformationSection title="Renal adjustment">
          <div className="space-y-2">
            {antibiotic.renalAdjustment.map((r, i) => (
              <div key={i} className="text-sm">
                <span className="font-data text-cyan">{r.crClRange}</span>
                <p className="text-ink-1">{r.adjustment}</p>
              </div>
            ))}
          </div>
        </InformationSection>

        <InformationSection title="Hepatic adjustment">
          <p>{antibiotic.hepaticAdjustment}</p>
        </InformationSection>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <InformationSection title="Pharmacokinetics">
          <div className="space-y-1.5">
            {antibiotic.pharmacokinetics.map((pk) => (
              <div key={pk.label} className="flex justify-between text-sm">
                <span className="text-ink-2">{pk.label}</span>
                <span className="font-data text-ink-0">{pk.value}</span>
              </div>
            ))}
          </div>
        </InformationSection>

        <InformationSection title="Pharmacodynamics">
          <p>{antibiotic.pharmacodynamics}</p>
        </InformationSection>
      </div>

      <InformationSection title="Interactions">
        <ul className="list-disc list-inside space-y-1">
          {antibiotic.interactions.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </InformationSection>

      <div className="grid sm:grid-cols-2 gap-6">
        <InformationSection title="Adverse effects">
          <ul className="list-disc list-inside space-y-1">
            {antibiotic.adverseEffects.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </InformationSection>

        <InformationSection title="Contraindications">
          <ul className="list-disc list-inside space-y-1">
            {antibiotic.contraindications.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </InformationSection>
      </div>

      <InformationSection title="Resistance">
        <p>{antibiotic.resistance}</p>
      </InformationSection>

      <InformationSection title="Monitoring">
        <ul className="list-disc list-inside space-y-1">
          {antibiotic.monitoring.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </InformationSection>

      <InformationSection title="References">
        <div className="space-y-2">
          {antibiotic.references.map((r) => (
            <ReferenceCard key={r.id} reference={r} />
          ))}
        </div>
      </InformationSection>
    </div>
  );
}
