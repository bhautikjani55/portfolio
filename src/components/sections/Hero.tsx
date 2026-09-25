"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { useVisitorName } from "@/hooks/useVisitorName";
import { FolderRail } from "@/components/FolderRail";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const visitor = useVisitorName();
  const greet = visitor.trim() ? visitor.trim().toUpperCase() : "STRANGER";

  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-14 pt-8 sm:pt-12 lg:grid-cols-[130px_1fr] lg:gap-16 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="hidden lg:block lg:pt-12"
          >
            <FolderRail />
          </motion.div>

          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              className="label"
              aria-live="polite"
            >
              Hi <span className="font-semibold text-[#181713]">{greet}</span>
              <span className="animate-blink ml-0.5 inline-block h-3 w-[7px] translate-y-[2px] bg-[#e4572e]" aria-hidden />,
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease }}
              className="display-tight mt-8 max-w-5xl text-[13.5vw] font-extrabold tracking-tight text-[#181713] sm:text-7xl lg:text-[6.2rem]"
            >
              I am Bhautik,
              <br />
              Software Engineer<span className="text-[#e4572e]">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-[#181713] sm:text-base"
            >
              I build scalable products and make things happen, all with a few keystrokes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="btn-ink inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                View My Work <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="btn-line inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                Let&apos;s Talk
              </a>
              <span className="font-mono2 ml-1 inline-flex items-center gap-1.5 text-[11.5px] text-[#6f6a5c]">
                <MapPin size={13} /> {PROFILE.location}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 lg:hidden"
            >
              <FolderRail vertical={false} />
            </motion.div>
          </div>
        </div>

        {/* bottom meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="relative mt-14 grid gap-8 border-t border-[#181713]/15 py-8 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end"
        >
          <div>
            <p className="label mb-3">About me</p>
            <a href="#about" className="group inline-flex items-center gap-3" aria-label="Jump to about section">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[#181713] text-xl font-extrabold text-[#ece8dd] transition group-hover:bg-[#e4572e]">
                /b
              </span>
              <span className="font-mono2 max-w-[180px] text-[11px] leading-relaxed text-[#6f6a5c]">
                3.5+ yrs full-stack · react / nestjs / aws
              </span>
            </a>
          </div>
          <div>
            <p className="label mb-3">Socials</p>
            <div className="flex flex-col gap-1.5 text-[13px] font-bold uppercase tracking-wide">
              <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-1.5 transition hover:text-[#e4572e]">
                <GithubIcon size={14} /> GitHub
              </a>
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-1.5 transition hover:text-[#e4572e]">
                <LinkedinIcon size={14} /> LinkedIn
              </a>
            </div>
          </div>
          <div>
            <p className="label mb-3">Get in touch</p>
            <div className="flex flex-col gap-1.5 text-[13px] font-bold uppercase tracking-wide">
              <a href={`mailto:${PROFILE.email}`} className="break-all transition hover:text-[#e4572e]">
                {PROFILE.email}
              </a>
              <span>{PROFILE.location}</span>
            </div>
          </div>
          <a href="#projects" aria-label="Scroll to work" className="hidden h-11 w-11 place-items-center rounded-full border border-[#181713]/25 transition hover:bg-[#181713] hover:text-[#ece8dd] lg:grid">
            <ArrowDown size={17} />
          </a>
        </motion.div>
      </div>

      {/* giant outline watermark */}
      <div aria-hidden className="pointer-events-none relative select-none overflow-hidden">
        <p className="text-outline display-tight -mb-[4vw] whitespace-nowrap text-center text-[21vw] font-black leading-none">
          bhautik/jani
        </p>
      </div>
    </section>
  );
}
