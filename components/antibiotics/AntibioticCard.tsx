import { Antibiotic } from "@/lib/types";

export default function AntibioticCard({ antibiotic }: { antibiotic: Antibiotic }) {
  return (
    <div className="glass-card-static overflow-hidden flex flex-col">
      <span className="accent-bar accent-bar-antibiotics" aria-hidden />
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <p className="text-xs uppercase tracking-wide text-cyan font-medium">{antibiotic.class}</p>
          <h3 className="font-display text-lg font-semibold text-ink-0 mt-1">{antibiotic.genericName}</h3>
        </div>
        <p className="text-sm text-ink-1 line-clamp-2">{antibiotic.spectrumSummary}</p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {antibiotic.indications.slice(0, 2).map((ind) => (
            <span
              key={ind}
              className="text-[11px] rounded-full border border-line px-2 py-0.5 text-ink-2"
            >
              {ind.replace(" (demo)", "")}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
