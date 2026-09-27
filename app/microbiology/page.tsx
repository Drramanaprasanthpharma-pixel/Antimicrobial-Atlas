import PageHeader from "@/components/ui/PageHeader";
import DemoBanner from "@/components/ui/DemoBanner";
import { microbiologyTopics } from "@/lib/data/microbiology";
import { Microscope } from "lucide-react";

export default function MicrobiologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reference"
        title="Microbiology"
        description="Foundational concepts underpinning antibiotic selection and interpretation."
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 space-y-4">
        <DemoBanner />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {microbiologyTopics.map((t) => (
            <div key={t.id} id={t.id} className="glass-soft rounded-2xl p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-panel-2 text-cyan mb-3">
                <Microscope size={16} />
              </span>
              <h3 className="font-display text-base font-semibold text-ink-0 mb-1.5">{t.title}</h3>
              <p className="text-sm text-ink-1">{t.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
