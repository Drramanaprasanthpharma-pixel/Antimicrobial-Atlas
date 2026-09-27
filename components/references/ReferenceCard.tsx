import { BookOpen } from "lucide-react";
import { ReferenceItem } from "@/lib/types";

export default function ReferenceCard({ reference }: { reference: ReferenceItem }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-line px-4 py-3">
      <BookOpen size={16} className="text-ink-2 mt-0.5 shrink-0" />
      <p className="text-sm text-ink-1">{reference.citation}</p>
    </div>
  );
}
