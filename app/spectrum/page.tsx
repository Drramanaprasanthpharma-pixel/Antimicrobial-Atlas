import PageHeader from "@/components/ui/PageHeader";
import SpectrumMatrix from "@/components/spectrum/SpectrumMatrix";

export default function SpectrumPage() {
  return (
    <>
      <PageHeader
        eyebrow="Clinical tool"
        title="Spectrum matrix"
        description="Interactive antibiotic \u00d7 organism susceptibility grid, using demo data."
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <SpectrumMatrix />
      </div>
    </>
  );
}
