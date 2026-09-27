import PageHeader from "@/components/ui/PageHeader";
import DemoBanner from "@/components/ui/DemoBanner";
import { amsPillars } from "@/lib/data/ams";
import { ShieldCheck } from "lucide-react";

export default function AMSPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stewardship"
        title="Antimicrobial stewardship"
        description="Core AMS pillars \u2014 from empirical selection through to duration optimization."
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 space-y-4">
        <DemoBanner text="Stewardship guidance below is demo content for interface scaffolding, not an institutional protocol." />
        <div className="grid md:grid-cols-2 gap-4 mt-2">
          {amsPillars.map((p) => (
            <div key={p.id} id={p.id} className="glass-soft rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-panel-2 text-teal">
                  <ShieldCheck size={16} />
                </span>
                <h2 className="font-display text-base sm:text-lg font-semibold text-ink-0">{p.title}</h2>
              </div>
              <p className="text-sm text-ink-1 mb-3">{p.summary}</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-ink-1">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
