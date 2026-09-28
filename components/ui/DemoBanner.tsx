import { Info } from "lucide-react";
import Alert from "./Alert";

export default function DemoBanner({ text }: { text?: string }) {
  return (
    <Alert tone="warning" icon={<Info size={15} />}>
      {text ??
        "Demo / placeholder content for interface scaffolding only — not a verified clinical recommendation."}
    </Alert>
  );
}
