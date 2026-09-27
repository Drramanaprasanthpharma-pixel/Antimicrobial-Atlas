"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { EightD } from "@/lib/data/eight-ds";

export default function EightDCard({ item }: { item: EightD }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`glass-card overflow-hidden ${open ? "border-line-strong" : ""}`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center gap-3 p-4 sm:p-5 text-left"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal/25 to-cyan/25 border border-line font-data text-sm text-teal">
          {item.number}
        </span>
        <span className="font-display text-sm sm:text-base font-semibold text-ink-0 flex-1">
          {item.title}
        </span>
        <ChevronDown
          size={18}
          className={`text-ink-2 shrink-0 transition-transform ${open ? "rotate-180 text-teal" : ""}`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-ink-1 leading-relaxed px-4 sm:px-5 pb-4 sm:pb-5">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
