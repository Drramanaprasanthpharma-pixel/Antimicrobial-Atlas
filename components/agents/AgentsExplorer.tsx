"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
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

function ResistanceList({ items }: { items: string[] }) {
  if (items.length === 0) {
    return <p className="text-sm text-ink-2 italic">Not stated in source.</p>;
  }
  return (
    <ul className="list-disc list-outside pl-4 text-sm space-y-1 leading-relaxed">
      {items.map((r, i) => (
        <li key={i}>{r}</li>
      ))}
    </ul>
  );
}

function SubclassTable({ sc }: { sc: Subclass }) {
  return (
    <>
      {/* Desktop / tablet: academic table, one row per variant, resistance merged */}
      <div className="hidden sm:block overflow-x-auto thin-scroll">
        <table className="ref-table">
          <thead>
            <tr>
              <th style={{ width: "26%" }}>Drugs</th>
              <th style={{ width: "44%" }}>Spectrum of Activity</th>
              <th style={{ width: "30%" }}>Mechanism of Resistance</th>
            </tr>
          </thead>
          <tbody>
            {sc.variants.map((variant, i) => (
              <tr key={i}>
                <td>
                  {variant.label && (
                    <p className="text-xs font-bold text-red mb-1">{variant.label}</p>
                  )}
                  <ul className="list-disc list-outside pl-4 space-y-0.5">
                    {variant.drugs.map((d, di) => (
                      <li key={di}>{d}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul className="list-disc list-outside pl-4 space-y-0.5">
                    {variant.spectrumOfActivity.map((s, si) => (
                      <li key={si}>{s}</li>
                    ))}
                  </ul>
                </td>
                {i === 0 && (
                  <td rowSpan={sc.variants.length}>
                    <ResistanceList items={sc.mechanismOfResistance} />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards, same three fields per variant */}
      <div className="sm:hidden flex flex-col gap-3">
        {sc.variants.map((variant, i) => (
          <div key={i} className="panel-tint rounded-md border border-line p-3">
            {variant.label && <p className="text-xs font-bold text-red mb-2">{variant.label}</p>}
            <p className="text-xs font-bold uppercase tracking-wide text-ink-2 mb-1">Drugs</p>
            <ul className="list-disc list-outside pl-4 text-sm space-y-0.5 mb-3">
              {variant.drugs.map((d, di) => (
                <li key={di}>{d}</li>
              ))}
            </ul>
            <p className="text-xs font-bold uppercase tracking-wide text-ink-2 mb-1">
              Spectrum of Activity
            </p>
            <ul className="list-disc list-outside pl-4 text-sm space-y-0.5">
              {variant.spectrumOfActivity.map((s, si) => (
                <li key={si}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="rounded-md border border-line p-3">
          <p className="text-xs font-bold uppercase tracking-wide text-ink-2 mb-1">
            Mechanism of Resistance
          </p>
          <ResistanceList items={sc.mechanismOfResistance} />
        </div>
      </div>
    </>
  );
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
      <SearchBar onSearch={setSearch} />

      <div className="flex flex-col gap-4">
        {filtered.map((section) => {
          const isOpen = searching || openSections.has(section.id);
          return (
            <div key={section.id} className="panel rounded-md overflow-hidden">
              <button
                type="button"
                onClick={() => toggle(openSections, setOpenSections, section.id)}
                className="disclosure-trigger w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left"
              >
                <div>
                  <h2 className="text-lg font-bold text-ink-0">{section.name}</h2>
                  {section.note && (
                    <p className="text-sm text-ink-1 mt-1 max-w-2xl leading-relaxed">
                      {section.note}
                    </p>
                  )}
                </div>
                <ChevronDown
                  className={`disclosure-icon shrink-0 text-red ${isOpen ? "is-open" : ""}`}
                  size={20}
                />
              </button>

              {isOpen && (
                <div className="border-t border-line px-4 sm:px-5 pb-4 sm:pb-5 pt-4 flex flex-col gap-3">
                  {section.classGroups.map((group) => {
                    const groupOpen = searching || openGroups.has(group.id);
                    return (
                      <div key={group.id} className="rounded-md border border-line">
                        <button
                          type="button"
                          onClick={() => toggle(openGroups, setOpenGroups, group.id)}
                          className="disclosure-trigger w-full flex items-center justify-between gap-3 p-3.5 sm:p-4 text-left"
                        >
                          <div>
                            <h3 className="text-base font-bold text-ink-0">{group.name}</h3>
                            {group.note && (
                              <p className="text-sm text-ink-1 mt-0.5 max-w-2xl leading-relaxed">
                                {group.note}
                              </p>
                            )}
                          </div>
                          <ChevronDown
                            className={`disclosure-icon shrink-0 text-red ${groupOpen ? "is-open" : ""}`}
                            size={18}
                          />
                        </button>

                        {groupOpen && (
                          <div className="border-t border-line p-3 sm:p-3.5 flex flex-col gap-2.5">
                            {group.subclasses.map((sc) => {
                              const scOpen = searching || openSubclasses.has(sc.id);
                              const count = drugCount(sc);
                              return (
                                <div key={sc.id} className="rounded-md border border-line overflow-hidden">
                                  <button
                                    type="button"
                                    onClick={() => toggle(openSubclasses, setOpenSubclasses, sc.id)}
                                    className="disclosure-trigger w-full flex items-center justify-between gap-3 p-3 text-left"
                                  >
                                    <div>
                                      <p className="text-sm font-bold text-ink-0">{sc.classMechanism}</p>
                                      {sc.mechanismNote && (
                                        <p className="text-xs text-ink-2 mt-0.5">{sc.mechanismNote}</p>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                      <Badge tone="red">
                                        {count} drug{count === 1 ? "" : "s"}
                                      </Badge>
                                      <ChevronDown
                                        className={`disclosure-icon text-red ${scOpen ? "is-open" : ""}`}
                                        size={16}
                                      />
                                    </div>
                                  </button>

                                  {scOpen && (
                                    <div className="border-t border-line p-3">
                                      <SubclassTable sc={sc} />
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
          <div className="panel rounded-md p-8 text-center text-sm text-ink-2">
            No matching drugs, classes or subclasses found.
          </div>
        )}
      </div>
    </div>
  );
}
