import { Info } from "lucide-react";

export default function DemoBanner({ text }: { text?: string }) {
  return (
    <div className="flex items-start gap-2.5 rounded-xl border border-amber/25 bg-amber/10 px-4 py-3 text-xs text-amber">
      <Info size={15} className="mt-0.5 shrink-0" />
      <p>
        {text ??
          "Demo / placeholder content for interface scaffolding only \u2014 not a verified clinical recommendation."}
      </p>
    </div>
  );
}
