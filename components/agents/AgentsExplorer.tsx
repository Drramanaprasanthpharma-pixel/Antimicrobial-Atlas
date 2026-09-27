"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Pill, Shield, Target } from "lucide-react";
import SearchBar from "@/components/search/SearchBar";
import Badge from "@/components/ui/Badge";
import { MajorSection, Subclass } from "@/lib/data/agents";

function subclassMatches(sc: Subclass, term: string): boolean {
  const haystack = [
    sc.classMechanism,
    sc.mechanismNote ?? "",
    ...sc.variants.flatMap((v) => [v.label ?? "", ...v.drugs, ...v.spectrumOfActivity]),
    ...sc.mechanismOfResistance,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(term);
}

function drugCount(sc: Subclass): number {
  return sc.variants.reduce((sum, v) => sum + v.drugs.length, 0);
}

export default function AgentsExplorer({ data }: { data: MajorSection[] }) {
  const [search, setSearch] = useState("");
  const [openSections, setOpenSections] = useState<Set<string>>(new Set([data[0]?.id]));
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());
  const [openSubclasses, setOpenSubclasses] = useState<Set<string>>(new Set());

  const term = search.trim().toLowerCase();
  const searching = term.length > 0;

  const filtered = useMemo(() => {
    if (!searching) return data;
    return data
      .map((section) => ({
        ...section,
        classGroups: section.classGroups
          .map((group) => ({
            ...group,
            subclasses: group.subclasses.filter((sc) => subclassMatches(sc, term)),
          }))
          .filter((group) => group.subclasses.length > 0),
      }))
      .filter((section) => section.classGroups.length > 0);
  }, [data, searching, term]);

  function toggle(set: Set<string>, setter: (s: Set<string>) => void, id: string) {
    const next = new Set(set);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setter(next);
  }

  return (
    <div className="flex flex-col gap-6">
      <SearchBar
        placeholder="Search drugs, classes or subclasses…"
        onSearch={setSearch}
      />

      <div className="flex flex-col gap-4">
        {filtered.map((section) => {
          const isOpen = searching || openSections.has(section.id);
          return (
            <div key={section.id} className="glass-card-static overflow-hidden">
              <span className="accent-bar accent-bar-classes" aria-hidden />
              <button
                type="button"
                onClick={() => toggle(openSections, setOpenSections, section.id)}
                className="w-full flex items-center justify-between gap-3 p-5 text-left"
              >
                <div>
                  <h2 className="font-display text-lg font-semibold text-ink-0">{section.name}</h2>
                  {section.note && (
                    <p className="text-xs text-ink-2 mt-1 max-w-2xl leading-relaxed">{section.note}</p>
                  )}
                </div>
                <ChevronDown
                  className={`shrink-0 text-ink-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  size={20}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 flex flex-col gap-3">
                  {section.classGroups.map((group) => {
                    const groupOpen = searching || openGroups.has(group.id);
                    return (
                      <div key={group.id} className="rounded-2xl border border-line bg-panel-2/40">
                        <button
                          type="button"
                          onClick={() => toggle(openGroups, setOpenGroups, group.id)}
                          className="w-full flex items-center justify-between gap-3 p-4 text-left"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-panel text-blue">
                              <Shield size={16} />
                            </span>
                            <div>
                              <h3 className="font-display text-sm font-semibold text-ink-0">{group.name}</h3>
                              {group.note && (
                                <p className="text-xs text-ink-2 mt-0.5 max-w-xl leading-relaxed">{group.note}</p>
                              )}
                            </div>
                          </div>
                          <ChevronDown
                            className={`shrink-0 text-ink-2 transition-transform ${groupOpen ? "rotate-180" : ""}`}
                            size={18}
                          />
                        </button>

                        {groupOpen && (
                          <div className="px-4 pb-4 flex flex-col gap-2.5">
                            {group.subclasses.map((sc) => {
                              const scOpen = searching || openSubclasses.has(sc.id);
                              const count = drugCount(sc);
                              return (
                                <div key={sc.id} className="rounded-xl border border-line bg-abyss/40 overflow-hidden">
                                  <button
                                    type="button"
                                    onClick={() => toggle(openSubclasses, setOpenSubclasses, sc.id)}
                                    className="w-full flex items-center justify-between gap-3 p-3.5 text-left"
                                  >
                                    <div className="flex items-center gap-2">
                                      <Pill size={15} className="text-teal shrink-0" />
                                      <div>
                                        <p className="text-sm font-medium text-ink-0">{sc.classMechanism}</p>
                                        {sc.mechanismNote && (
                                          <p className="text-xs text-ink-2 mt-0.5">{sc.mechanismNote}</p>
                                        )}
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                      <Badge tone="teal" mono>
                                        {count} drug{count === 1 ? "" : "s"}
                                      </Badge>
                                      <ChevronDown
                                        className={`text-ink-2 transition-transform ${scOpen ? "rotate-180" : ""}`}
                                        size={16}
                                      />
                                    </div>
                                  </button>

                                  {scOpen && (
                                    <div className="px-3.5 pb-4 flex flex-col gap-4 border-t border-line pt-3.5">
                                      {sc.variants.map((variant, i) => (
                                        <div key={i} className="flex flex-col gap-2">
                                          {variant.label && (
                                            <Badge tone="blue" uppercase>
                                              {variant.label}
                                            </Badge>
                                          )}
                                          <div>
                                            <p className="text-[11px] uppercase tracking-wide text-ink-2 mb-1.5 flex items-center gap-1.5">
                                              <Pill size={12} /> Drugs
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                              {variant.drugs.map((d, di) => (
                                                <Badge key={di} tone="cyan">
                                                  {d}
                                                </Badge>
                                              ))}
                                            </div>
                                          </div>
                                          <div>
                                            <p className="text-[11px] uppercase tracking-wide text-ink-2 mb-1.5 flex items-center gap-1.5">
                                              <Target size={12} /> Spectrum of activity
                                            </p>
                                            <ul className="list-disc list-inside text-sm text-ink-1 space-y-1 leading-relaxed">
                                              {variant.spectrumOfActivity.map((s, si) => (
                                                <li key={si}>{s}</li>
                                              ))}
                                            </ul>
                                          </div>
                                        </div>
                                      ))}

                                      <div>
                                        <p className="text-[11px] uppercase tracking-wide text-ink-2 mb-1.5 flex items-center gap-1.5">
                                          <Shield size={12} /> Mechanism of resistance
                                        </p>
                                        {sc.mechanismOfResistance.length > 0 ? (
                                          <ul className="list-disc list-inside text-sm text-ink-1 space-y-1 leading-relaxed">
                                            {sc.mechanismOfResistance.map((r, ri) => (
                                              <li key={ri}>{r}</li>
                                            ))}
                                          </ul>
                                        ) : (
                                          <p className="text-sm text-ink-2 italic">Not stated in source.</p>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="glass-card-static p-8 text-center text-sm text-ink-2">
            No matching drugs, classes or subclasses found.
          </div>
        )}
      </div>
    </div>
  );
}
