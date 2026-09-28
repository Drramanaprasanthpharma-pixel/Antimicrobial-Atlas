"use client";

import { useMemo, useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import SearchBar from "@/components/search/SearchBar";
import AntibioticCard from "@/components/antibiotics/AntibioticCard";
import { antibiotics } from "@/lib/data/antibiotics";

export default function AntibioticsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return antibiotics;
    return antibiotics.filter(
      (a) =>
        a.genericName.toLowerCase().includes(q) ||
        a.class.toLowerCase().includes(q) ||
        a.spectrumSummary.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <PageHeader
        eyebrow="Reference"
        title="Antibiotics"
        description="Browse the demo antibiotic set. Search by name, class or spectrum keyword."
      >
        <div className="max-w-xl">
          <SearchBar onSearch={setQuery} placeholder="Search antibiotics…" />
        </div>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        {filtered.length === 0 ? (
          <p className="text-ink-2 text-sm">No antibiotics match “{query}”.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((a) => (
              <AntibioticCard key={a.id} antibiotic={a} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
