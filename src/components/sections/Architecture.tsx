import { PRINCIPLES, SYSTEM_PIPELINE } from "@/data/portfolio";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/ui";

export function Architecture() {
  return (
    <section aria-label="How I think about systems" className="relative py-14 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="border-t border-[#181713]/15 pt-10 lg:pt-14">
          <div id="systems" className="scroll-mt-20">
          <SectionHeading
            index="05"
            eyebrow="Approach"
            title={<>How I think about systems.</>}
            description="Every product follows the same mental model: a clean request path, cache where it counts, infrastructure that disappears."
          />

          <Reveal delay={0.1} className="mt-12">
            <ol className="grid border border-[#181713]/20 bg-[#f2eee4] sm:grid-cols-2 lg:grid-cols-7">
              {SYSTEM_PIPELINE.map((step, i) => (
                <li
                  key={step}
                  className="group border-[#181713]/20 p-5 transition-colors hover:bg-[#181713] hover:text-[#ece8dd] max-lg:odd:border-r max-lg:[&:not(:nth-last-child(-n+2))]:border-b lg:not-last:border-r"
                >
                  <span className="font-mono2 text-[11px] text-[#e4572e]">0{i + 1}</span>
                  <p className="mt-6 text-[14.5px] font-extrabold leading-tight">{step}</p>
                  <p className="font-mono2 mt-2 text-[10px] uppercase tracking-[0.14em] opacity-50">stage 0{i + 1}</p>
                </li>
              ))}
            </ol>
            <p className="font-mono2 mt-3 text-center text-[11px] text-[#a8a294]">
              request → validate → authorize → compute → cache → persist → observe
            </p>
          </Reveal>

          <Stagger className="mt-10 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="border-t-2 border-[#181713] pt-4">
                  <p className="font-mono2 text-[11px] text-[#e4572e]">P.{i + 1}</p>
                  <h3 className="mt-2 text-lg font-extrabold">{p.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#6f6a5c]">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
