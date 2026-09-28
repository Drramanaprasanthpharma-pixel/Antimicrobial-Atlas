import { Antibiotic } from "@/lib/types";
import { FlaskConical } from "lucide-react";

export default function AntibioticHeader({ antibiotic }: { antibiotic: Antibiotic }) {
  return (
    <div className="glass-card-static p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-cyan/20 border border-line">
          <FlaskConical className="text-teal" size={22} />
        </div>
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-wide text-teal font-medium">
            {antibiotic.class}
            {antibiotic.subclass ? ` · ${antibiotic.subclass}` : ""}
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-ink-0 mt-1">
            {antibiotic.genericName}
          </h1>
          {antibiotic.brandNames && (
            <p className="text-sm text-ink-2 mt-1">
              Brand names: {antibiotic.brandNames.join(", ")}
            </p>
          )}
        </div>
      </div>
      <p className="text-sm sm:text-base text-ink-1 mt-5 leading-relaxed">{antibiotic.overview}</p>
    </div>
  );
}
