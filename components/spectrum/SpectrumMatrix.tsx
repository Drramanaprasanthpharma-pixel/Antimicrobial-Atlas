import { antibiotics } from "@/lib/data/antibiotics";
import { organisms } from "@/lib/data/organisms";

const styles: Record<string, string> = {
  susceptible: "bg-teal/20 text-teal border-teal/30",
  variable: "bg-amber/15 text-amber border-amber/30",
  resistant: "bg-rose/15 text-rose border-rose/30",
  "not-covered": "bg-panel-2 text-ink-2 border-line",
};

const labels: Record<string, string> = {
  susceptible: "S",
  variable: "V",
  resistant: "R",
  "not-covered": "\u2014",
};

export default function SpectrumMatrix() {
  return (
    <div className="glass-soft rounded-2xl p-4 sm:p-6">
      <div className="overflow-x-auto thin-scroll">
        <table className="min-w-[720px] w-full border-separate border-spacing-y-1.5">
          <thead>
            <tr>
              <th className="text-left text-xs text-ink-2 font-medium px-3 py-2 sticky left-0 bg-panel rounded-l-lg">
                Antibiotic
              </th>
              {organisms.map((org) => (
                <th key={org} className="text-xs text-ink-2 font-medium px-3 py-2 text-center whitespace-nowrap">
                  {org}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {antibiotics.map((a) => (
              <tr key={a.id}>
                <td className="px-3 py-2 text-sm text-ink-0 font-medium sticky left-0 bg-panel rounded-l-lg whitespace-nowrap">
                  {a.genericName}
                </td>
                {organisms.map((org) => {
                  const entry = a.spectrum.find((s) => s.organism === org);
                  const sus = entry?.susceptibility ?? "not-covered";
                  return (
                    <td key={org} className="px-3 py-2 text-center">
                      <span
                        className={`inline-flex h-7 w-7 items-center justify-center rounded-md border text-xs font-data ${styles[sus]}`}
                        title={sus}
                      >
                        {labels[sus]}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap gap-4 mt-5 text-xs text-ink-2">
        {Object.entries(labels).map(([key, label]) => (
          <div key={key} className="flex items-center gap-1.5">
            <span className={`inline-flex h-5 w-5 items-center justify-center rounded border text-[10px] font-data ${styles[key]}`}>
              {label}
            </span>
            <span className="capitalize">{key.replace("-", " ")}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-ink-2 mt-4">Demo susceptibility data \u2014 not for clinical use.</p>
    </div>
  );
}
