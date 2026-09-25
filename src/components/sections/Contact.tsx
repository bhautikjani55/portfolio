"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PROFILE } from "@/data/portfolio";
import { Reveal } from "@/components/motion";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [touched, setTouched] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const valid = name.trim().length >= 2 && emailValid && message.trim().length >= 10;
  const showErrors = touched && !valid;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!valid || status === "sending") return;
    setStatus("sending");
    try {
      await new Promise((r) => setTimeout(r, 1000));
      const subject = encodeURIComponent(`Portfolio inquiry from ${name.trim()}`);
      const body = encodeURIComponent(`${message.trim()}\n\n— ${name.trim()} (${email.trim()})`);
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-14 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="border-t border-[#181713]/15 pt-10 lg:pt-14">
          <Reveal>
            <p className="label">
              <span className="mr-3 text-[#e4572e]">07</span>Contact
            </p>
            <h2 className="display-tight mt-4 max-w-4xl text-[12vw] font-extrabold tracking-tight sm:text-7xl lg:text-[5.5rem]">
              Have a project in mind<span className="text-[#e4572e]">?</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#6f6a5c]">
              Let&apos;s build something scalable, useful and meaningful.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal delay={0.08}>
              <a
                href={`mailto:${PROFILE.email}`}
                className="display-tight group block max-w-md text-2xl font-extrabold leading-tight tracking-tight break-all transition hover:text-[#e4572e] sm:text-3xl"
              >
                {PROFILE.email}
                <ArrowRight size={24} className="ml-2 inline transition-transform group-hover:translate-x-1.5" aria-hidden />
              </a>
              <div className="mt-8">
                <p className="label mb-3">Socials</p>
                <div className="flex gap-3">
                  <a
                    href={PROFILE.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="grid h-12 w-12 place-items-center rounded-full border border-[#181713]/25 transition hover:bg-[#181713] hover:text-[#ece8dd]"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href={PROFILE.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="grid h-12 w-12 place-items-center rounded-full border border-[#181713]/25 transition hover:bg-[#181713] hover:text-[#ece8dd]"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </div>
              <p className="font-mono2 mt-8 text-[11.5px] uppercase tracking-[0.16em] text-[#6f6a5c]">
                {PROFILE.location}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <form onSubmit={onSubmit} noValidate aria-label="Contact form">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="label">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="underline-input mt-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="label">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="underline-input mt-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="label">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project, timeline and goals…"
                      className="underline-input mt-1 resize-none"
                    />
                  </div>
                </div>

                {showErrors && (
                  <p role="alert" className="mt-4 text-[12.5px] text-[#e4572e]">
                    Please add your name, a valid email and a message of at least 10 characters.
                  </p>
                )}
                {status === "sent" && (
                  <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} role="status" className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold">
                    <CheckCircle2 size={16} /> Message ready in your email client — I&apos;ll get back to you soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <p role="alert" className="mt-4 text-[12.5px] text-[#e4572e]">
                    Something went wrong. Please email me directly at {PROFILE.email}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="btn-ink mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </>
                  ) : status === "sent" ? (
                    <>
                      <CheckCircle2 size={16} /> Message Prepared
                    </>
                  ) : (
                    <>Send Message <ArrowRight size={16} /></>
                  )}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <p className="text-outline display-tight -mb-[5vw] mt-16 whitespace-nowrap text-center text-[20vw] font-black leading-none">
          let&apos;s talk
        </p>
      </div>
    </section>
  );
}
