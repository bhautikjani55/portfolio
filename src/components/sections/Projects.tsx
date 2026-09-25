"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PROJECTS, type Project } from "@/data/portfolio";
import { Reveal } from "@/components/motion";
import { SectionHeading, Tag } from "@/components/ui";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section className="relative py-14 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="border-t border-[#181713]/15 pt-10 lg:pt-14">
          <div id="projects" className="scroll-mt-20">
          <SectionHeading
            index="03"
            eyebrow="Selected work"
            title={<>Things I&apos;ve built.</>}
            description="Production systems across SaaS, healthcare, marketplaces and document infrastructure. Select a project for architecture, challenges and solutions."
          />

          <div className="mt-12 border-t border-[#181713]/20">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.id} delay={Math.min(i * 0.04, 0.15)}>
                <article
                  onClick={() => setSelected(p)}
                  onKeyDown={(e) => e.key === "Enter" && setSelected(p)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Open details for ${p.name}`}
                  className="row-hover group cursor-pointer border-b border-[#181713]/20 px-2 py-7 sm:px-4 lg:py-9"
                >
                  <div className="flex items-start gap-4 sm:items-center sm:gap-8">
                    <span className="row-faint font-mono2 pt-1 text-[11px] text-[#a8a294] sm:pt-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="row-muted font-mono2 text-[10.5px] uppercase tracking-[0.2em] text-[#6f6a5c]">
                        {p.category} — {p.role}
                      </p>
                      <h3 className="display-tight mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        {p.name}
                      </h3>
                      <p className="row-muted mt-3 max-w-2xl text-[13.5px] leading-relaxed text-[#6f6a5c]">
                        {p.description}
                      </p>
                      <p className="row-faint font-mono2 mt-3 hidden text-[11px] text-[#a8a294] lg:block">
                        {p.architecture.join("  →  ")}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5 lg:hidden">
                        {p.technologies.slice(0, 5).map((t) => (
                          <span key={t} className="font-mono2 rounded-full border border-current px-2.5 py-1 text-[10px] opacity-70">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-current transition group-hover:bg-[#e4572e] group-hover:border-[#e4572e] group-hover:text-white">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          </div>
        </div>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-end justify-center bg-[#181713]/60 p-0 backdrop-blur-[2px] sm:items-center sm:p-6"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.name} details`}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-[#181713] bg-[#ece8dd] sm:rounded-2xl"
            >
              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[#181713]/15 bg-[#ece8dd]/95 p-6 backdrop-blur">
                <div>
                  <p className="label">{selected.category}</p>
                  <h3 className="display-tight mt-2 text-3xl font-extrabold sm:text-4xl">{selected.name}</h3>
                  <p className="font-mono2 mt-1.5 text-[11.5px] text-[#6f6a5c]">{selected.role}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close project details"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#181713] text-[#ece8dd] transition hover:bg-[#e4572e]"
                >
                  <X size={17} />
                </button>
              </div>

              <div className="space-y-8 p-6 sm:p-8">
                <div>
                  <h4 className="modal-h">Overview</h4>
                  <p className="modal-p">{selected.description}</p>
                </div>
                <div>
                  <h4 className="modal-h">Architecture</h4>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {selected.architecture.map((a, i) => (
                      <span key={a} className="flex items-center gap-2">
                        <span className="font-mono2 rounded-full border border-[#181713]/30 px-3 py-1.5 text-[11px] font-medium">
                          {a}
                        </span>
                        {i < selected.architecture.length - 1 && (
                          <ArrowRight size={13} className="text-[#e4572e]" aria-hidden />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="modal-h">Key challenges & solutions</h4>
                  <div className="mt-3 space-y-3">
                    {selected.challenges.map((c) => (
                      <div key={c.challenge} className="border-l-2 border-[#e4572e] bg-[#181713]/[.04] p-4">
                        <p className="text-[13.5px] font-bold">{c.challenge}</p>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-[#6f6a5c]">{c.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="modal-h">Features</h4>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {selected.features.map((f) => (
                      <li key={f} className="border border-[#181713]/15 bg-[#f2eee4] px-3.5 py-2.5 text-[12.5px] leading-relaxed">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="modal-h">Technologies</h4>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {selected.technologies.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

      <style>{`.modal-h{font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:0.2em;color:#e4572e}.modal-p{margin-top:0.75rem;font-size:14px;line-height:1.7;color:#3d3a32}`}</style>
    </section>
  );
}
