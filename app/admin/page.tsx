import PageHeader from "@/components/ui/PageHeader";
import DemoBanner from "@/components/ui/DemoBanner";
import AdminCard from "@/components/admin/AdminCard";
import { antibiotics } from "@/lib/data/antibiotics";
import { classes } from "@/lib/data/classes";
import { PlusCircle, Layers, BookMarked, FileClock } from "lucide-react";

export default function AdminPage() {
  const published = antibiotics.filter((a) => a.status === "published").length;

  return (
    <>
      <PageHeader
        eyebrow="Internal"
        title="Admin"
        description="Visual placeholder only \u2014 no data mutation yet. Wired up once Firebase/Firestore is connected."
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 space-y-6">
        <DemoBanner text="This dashboard is a static UI placeholder. No create, edit or delete actions are wired to a backend yet." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AdminCard
            title="Add / edit antibiotic"
            description="Create a new entry or update an existing profile."
            icon={<PlusCircle size={16} />}
            stat={`${antibiotics.length} entries in atlas`}
          />
          <AdminCard
            title="Manage classes"
            description="Organize antibiotics into mechanism-based classes."
            icon={<Layers size={16} />}
            stat={`${classes.length} classes`}
          />
          <AdminCard
            title="Manage references"
            description="Curate citations attached to each antibiotic profile."
            icon={<BookMarked size={16} />}
          />
          <AdminCard
            title="Draft / published status"
            description="Control visibility of entries before they go live."
            icon={<FileClock size={16} />}
            stat={`${published} published \u00b7 ${antibiotics.length - published} draft`}
          />
        </div>

        <div className="glass-soft rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-line flex items-center justify-between">
            <h2 className="font-display text-base font-semibold text-ink-0">Antibiotic entries</h2>
            <span className="text-xs text-ink-2">Read-only preview</span>
          </div>
          <div className="overflow-x-auto thin-scroll">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-ink-2 border-b border-line">
                  <th className="px-5 py-3 font-medium">Generic name</th>
                  <th className="px-5 py-3 font-medium">Class</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {antibiotics.map((a) => (
                  <tr key={a.id} className="border-b border-line/60 last:border-0">
                    <td className="px-5 py-3 text-ink-0">{a.genericName}</td>
                    <td className="px-5 py-3 text-ink-1">{a.class}</td>
                    <td className="px-5 py-3">
                      <span
                        className={`text-[11px] rounded-full px-2 py-0.5 border ${
                          a.status === "published"
                            ? "text-teal border-teal/30 bg-teal/10"
                            : "text-amber border-amber/30 bg-amber/10"
                        }`}
                      >
                        {a.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
