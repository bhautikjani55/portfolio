"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { EXPERIENCE } from "@/data/portfolio";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="border-t border-[#181713]/15 pt-14 lg:pt-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              index="02"
              eyebrow="Experience"
              title={<>Where I&apos;ve shipped & scaled.</>}
            />
            <Reveal delay={0.1}>
              <div className="max-w-sm border border-[#181713]/20 bg-[#f2eee4] p-5">
                <p className="font-mono2 text-[11px] uppercase tracking-[0.18em] text-[#6f6a5c]">{EXPERIENCE.duration}</p>
                <p className="mt-2 text-lg font-extrabold leading-snug">{EXPERIENCE.role}</p>
                <p className="mt-1 text-[13.5px] font-medium">{EXPERIENCE.company}</p>
                <p className="font-mono2 mt-2 inline-flex items-center gap-1 text-[11.5px] text-[#6f6a5c]">
                  <MapPin size={11} /> {EXPERIENCE.location}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 border-t border-[#181713]/15">
            {EXPERIENCE.achievements.map((a, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={a.title} delay={Math.min(i * 0.03, 0.15)}>
                  <div className="border-b border-[#181713]/15">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 py-5 text-left sm:gap-6"
                    >
                      <span className="font-mono2 text-[11px] text-[#e4572e]">{String(i + 1).padStart(2, "0")}</span>
                      <span className={cn("flex-1 text-[16px] font-bold sm:text-lg", isOpen && "text-[#e4572e]")}>
                        {a.title}
                      </span>
                      <span
                        className={cn(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition",
                          isOpen ? "border-[#181713] bg-[#181713] text-[#ece8dd]" : "border-[#181713]/30"
                        )}
                      >
                        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className="max-w-3xl pb-6 pl-9 pr-4 text-[14px] leading-relaxed text-[#6f6a5c] sm:pl-12">
                            {a.detail}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
