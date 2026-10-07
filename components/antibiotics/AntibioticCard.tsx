import { Antibiotic } from "@/lib/types";

const NOT_VERIFIED = "Not verified — requires clinical review";

export default function AntibioticCard({ antibiotic }: { antibiotic: Antibiotic }) {
  const verified = antibiotic.verification?.status === "source-verified";
  const indications = antibiotic.indications.filter((i) => i !== NOT_VERIFIED);
  return (
    <div className="glass-card-static overflow-hidden flex flex-col">
      <span className="accent-bar accent-bar-antibiotics" aria-hidden />
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <p className="text-xs uppercase tracking-wide text-cyan font-medium">{antibiotic.class}</p>
          <h3 className="font-display text-lg font-semibold text-ink-0 mt-1">{antibiotic.genericName}</h3>
        </div>
        <p className="text-sm text-ink-1 line-clamp-2">{antibiotic.spectrumSummary}</p>
        {indications.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {indications.slice(0, 2).map((ind) => (
              <span
                key={ind}
                className="text-[11px] rounded-full border border-line px-2 py-0.5 text-ink-2"
              >
                {ind}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto pt-3 border-t border-line text-[11px] text-ink-2 flex flex-col gap-1">
          <p>
            {verified ? "Source-verified clinical information" : "Not yet source-verified"}
            {verified && antibiotic.verification && <> · Last reviewed: {antibiotic.verification.lastReviewed}</>}
          </p>
          {antibiotic.references.length > 0 && (
            <div>
              <p className="font-medium">References</p>
              <ul className="list-disc pl-4">
                {antibiotic.references.map((r) => (
                  <li key={r.id}>
                    {r.url ? (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal underline-offset-2 hover:underline"
                      >
                        {r.title ?? r.citation}
                      </a>
                    ) : (
                      (r.title ?? r.citation)
                    )}
                    {r.organization && <>, {r.organization}</>}
                    {r.year && <> ({r.year})</>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
