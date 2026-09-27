import { ArrowDown } from "lucide-react";
import { amsPathway } from "@/lib/data/ams-pathway";

export default function AMSPathwayFlow() {
  return (
    <div className="relative mx-auto max-w-md">
      <div
        className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-teal/60 via-cyan/40 to-emerald/60"
        aria-hidden
      />
      <ol className="relative flex flex-col items-center gap-2">
        {amsPathway.map((step, i) => (
          <li key={step} className="relative flex flex-col items-center w-full">
            <div className="glass-soft rounded-xl px-5 py-3 text-center w-full max-w-xs">
              <span className="font-data text-[11px] text-ink-2">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm font-medium text-ink-0 mt-0.5">{step}</p>
            </div>
            {i < amsPathway.length - 1 && (
              <ArrowDown size={16} className="text-teal my-1.5 animate-pulse" aria-hidden />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
