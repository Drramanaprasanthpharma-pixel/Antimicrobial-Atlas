import PageHeader from "@/components/ui/PageHeader";
import DemoBanner from "@/components/ui/DemoBanner";
import { resistanceMechanisms } from "@/lib/data/resistance";
import { ShieldAlert } from "lucide-react";

export default function ResistancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Reference"
        title="Resistance mechanisms"
        description="Key resistance patterns that shape empirical and targeted therapy decisions."
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 space-y-4">
        <DemoBanner />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {resistanceMechanisms.map((r) => (
            <div key={r.id} id={r.id} className="glass-soft rounded-2xl p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-panel-2 text-rose mb-3">
                <ShieldAlert size={16} />
              </span>
              <h3 className="font-display text-base font-semibold text-ink-0 mb-1.5">{r.title}</h3>
              <p className="text-sm text-ink-1">{r.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
