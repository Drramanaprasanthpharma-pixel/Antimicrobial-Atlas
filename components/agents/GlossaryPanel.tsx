import { glossary } from "@/lib/data/agents";

export default function GlossaryPanel() {
  return (
    <div className="panel rounded-md p-4 sm:p-5">
      <p className="text-xs font-bold uppercase tracking-wide text-ink-2 mb-3">
        Abbreviations (from source)
      </p>
      <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
        {glossary.map((g) => (
          <div key={g.abbr} className="flex gap-2 text-sm">
            <dt className="font-bold text-red shrink-0">{g.abbr}</dt>
            <dd className="text-ink-1">{g.meaning}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
