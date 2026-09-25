import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { LiveClock } from "@/components/LiveClock";
import { PROFILE } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-[#181713]/15">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono2 text-[11.5px] text-[#6f6a5c]">
          © 2026, <span className="font-semibold text-[#e4572e]">bhautik/jani.</span> Built with Next.js & curiosity.
        </p>
        <div className="flex items-center gap-4">
          <LiveClock compact />
          <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[#181713] transition hover:text-[#e4572e]">
            <GithubIcon size={16} />
          </a>
          <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#181713] transition hover:text-[#e4572e]">
            <LinkedinIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
