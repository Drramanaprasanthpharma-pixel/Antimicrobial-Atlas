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
        <AgentsExplorer data={antimicrobialAgents} />

        <Alert tone="info" icon={<BookOpen size={15} />}>
          Content transcribed directly from the source textbook table (classification, spectrum of
          activity and mechanism of resistance). This is reference material, not a substitute for
          institutional protocols or verified clinical guidance.
          <span className="block mt-2">
            <strong>Source:</strong> Sastry AS, Priyadarshi K, Deepashree R. <em>Essentials of
            Antimicrobial Stewardship</em>. Jaypee Brothers.
          </span>
        </Alert>

        <GlossaryPanel />
      </div>
    </>
  );
}
