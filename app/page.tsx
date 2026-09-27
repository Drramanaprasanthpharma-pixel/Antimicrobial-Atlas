import Link from "next/link";
import Hero3D from "@/components/three/Hero3D";
import SearchBar from "@/components/search/SearchBar";
import AntibioticCard from "@/components/antibiotics/AntibioticCard";
import ClassCard from "@/components/classes/ClassCard";
import ClinicalToolCard from "@/components/tools/ClinicalToolCard";
import { antibiotics } from "@/lib/data/antibiotics";
import { classes } from "@/lib/data/classes";
import { clinicalTools } from "@/lib/data/tools";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const popular = antibiotics.slice(0, 4);
  const topClasses = classes.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-teal font-medium mb-3">Antibiotic Atlas</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink-0 leading-[1.05]">
              Explore antibiotics.
              <br />
              Understand their science.
            </h1>
            <p className="text-ink-1 mt-5 max-w-lg text-base leading-relaxed">
              A structured reference for mechanism, spectrum, dosing and stewardship \u2014
              built for the way clinical pharmacists actually look things up.
            </p>
            <div className="mt-8 max-w-xl">
              <SearchBar large placeholder="Search Ceftriaxone, Carbapenems, MRSA\u2026" />
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {popular.map((a) => (
                <Link
                  key={a.id}
                  href={`/antibiotics/${a.slug}`}
                  className="text-xs rounded-full border border-line px-3 py-1.5 text-ink-1 hover:text-teal hover:border-line-strong transition-colors"
                >
                  {a.genericName}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[420px]">
            <Hero3D />
          </div>
        </div>
      </section>

      {/* Popular antibiotics */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-end justify-between mb-5">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink-0">
            Popular antibiotics
          </h2>
          <Link href="/antibiotics" className="text-sm text-teal flex items-center gap-1 hover:gap-1.5 transition-all">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popular.map((a) => (
            <AntibioticCard key={a.id} antibiotic={a} />
          ))}
        </div>
      </section>

      {/* Classes */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-end justify-between mb-5">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink-0">
            Browse by class
          </h2>
          <Link href="/classes" className="text-sm text-teal flex items-center gap-1 hover:gap-1.5 transition-all">
            All classes <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topClasses.map((c) => (
            <ClassCard key={c.id} item={c} />
          ))}
        </div>
      </section>

      {/* Clinical tools */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 pb-20">
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink-0 mb-5">
          Clinical tools
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clinicalTools.map((t) => (
            <ClinicalToolCard key={t.id} tool={t} />
          ))}
        </div>
      </section>
    </>
  );
}
