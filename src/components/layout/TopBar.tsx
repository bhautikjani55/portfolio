"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, PROFILE } from "@/data/portfolio";
import { setVisitorName, useVisitorName } from "@/hooks/useVisitorName";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { LiveClock } from "@/components/LiveClock";
import { cn } from "@/lib/utils";

export function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const name = useVisitorName();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "bg-[#ece8dd]/90 backdrop-blur-md" : "bg-transparent"
        )}
      >
        <div
          className={cn(
            "mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 transition-all sm:px-8",
            scrolled && "border-b border-[#181713]/15"
          )}
        >
          <a href="#home" className="text-[19px] font-extrabold tracking-tight text-[#181713]" aria-label="Bhautik Jani — home">
            bhautik<span className="font-medium">/</span>jani
          </a>

          <label className="hidden max-w-xs flex-1 items-center md:flex" aria-label="Tell me your name">
            <input
              value={name}
              onChange={(e) => setVisitorName(e.target.value.slice(0, 24))}
              placeholder="What's your name?"
              className="font-mono2 w-full rounded-full border border-[#181713]/15 bg-[#181713]/5 px-4 py-2 text-[12px] text-[#181713] placeholder:text-[#a8a294] focus:border-[#181713]/40 focus:outline-none"
            />
          </label>

          <div className="flex items-center gap-4">
            <LiveClock />
            <span className="hidden h-4 w-px bg-[#181713]/20 sm:block" aria-hidden />
            <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hidden text-[#181713] transition hover:text-[#e4572e] sm:block">
              <GithubIcon size={17} />
            </a>
            <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hidden text-[#181713] transition hover:text-[#e4572e] sm:block">
              <LinkedinIcon size={17} />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-[#181713]/25 text-[#181713] transition hover:bg-[#181713] hover:text-[#ece8dd] md:hidden"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex flex-col bg-[#ece8dd]"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="text-[19px] font-extrabold tracking-tight">bhautik<span className="font-medium">/</span>jani</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-9 w-9 place-items-center rounded-full bg-[#181713] text-[#ece8dd]"
              >
                <X size={16} />
              </button>
            </div>
            <nav aria-label="Menu" className="flex flex-1 flex-col justify-center px-6">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-baseline gap-3 border-b border-[#181713]/12 py-3"
                >
                  <span className="font-mono2 text-[11px] text-[#a8a294]">0{i + 1}</span>
                  <span className="display-tight text-4xl font-extrabold tracking-tight transition group-active:text-[#e4572e]">
                    {l.label}
                  </span>
                  <ArrowUpRight size={20} className="ml-auto opacity-0 transition group-active:opacity-100" />
                </motion.a>
              ))}
            </nav>
            <div className="px-6 pb-8">
              <label className="block" aria-label="Tell me your name">
                <input
                  value={name}
                  onChange={(e) => setVisitorName(e.target.value.slice(0, 24))}
                  placeholder="What's your name?"
                  className="font-mono2 w-full rounded-full border border-[#181713]/15 bg-[#181713]/5 px-4 py-2.5 text-[12px] placeholder:text-[#a8a294] focus:border-[#181713]/40 focus:outline-none"
                />
              </label>
              <div className="mt-4 flex items-center gap-4">
                <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[#181713]">
                  <GithubIcon size={19} />
                </a>
                <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#181713]">
                  <LinkedinIcon size={19} />
                </a>
                <span className="font-mono2 ml-auto text-[11px] text-[#6f6a5c]">{PROFILE.location}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
