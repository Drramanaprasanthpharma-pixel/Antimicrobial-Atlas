import PageHeader from "@/components/ui/PageHeader";
import Alert from "@/components/ui/Alert";
import { BookOpen } from "lucide-react";
import AgentsExplorer from "@/components/agents/AgentsExplorer";
import GlossaryPanel from "@/components/agents/GlossaryPanel";
import { antimicrobialAgents, antimicrobialIntro } from "@/lib/data/agents";

export default function AgentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reference"
        title="Antimicrobial Agents"
        description={antimicrobialIntro}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20 flex flex-col gap-6">
        <Alert tone="info" icon={<BookOpen size={15} />}>
          Content transcribed directly from the source textbook table (classification, spectrum of
          activity and mechanism of resistance). This is reference material, not a substitute for
          institutional protocols or verified clinical guidance.
        </Alert>

        <AgentsExplorer data={antimicrobialAgents} />

        <section aria-labelledby="mechanism-3d-heading" className="flex flex-col gap-3">
          <div className="flex items-end justify-between gap-3 flex-wrap">
            <h2
              id="mechanism-3d-heading"
              className="font-display text-xl sm:text-2xl font-semibold text-ink-0"
            >
              3D Mechanism of Action
            </h2>
            <a
              href="/atlas-3d-mechanism.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-teal hover:underline"
            >
              Open full screen
            </a>
          </div>
          <iframe
            src="/atlas-3d-mechanism.html"
            title="Antimicrobial Atlas - 3D Mechanism of Action"
            loading="lazy"
            className="w-full rounded-lg border border-line bg-white"
            style={{ height: "80vh", minHeight: 520 }}
          />
        </section>

        <GlossaryPanel />
      </div>
    </>
  );
}
