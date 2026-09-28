import PageHeader from "@/components/ui/PageHeader";
import ClassCard from "@/components/classes/ClassCard";
import { classes } from "@/lib/data/classes";

export default function ClassesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reference"
        title="Antibiotic classes"
        description="Grouped by mechanism family — penicillins through oxazolidinones."
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((c) => (
          <div key={c.id} id={c.slug}>
            <ClassCard item={c} />
          </div>
        ))}
      </div>
    </>
  );
}
