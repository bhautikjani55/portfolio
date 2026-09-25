import { EDUCATION } from "@/data/portfolio";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/ui";

export function Education() {
  return (
    <section id="education" aria-label="Education" className="relative py-14 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading index="06" eyebrow="Education" title={<>Foundations.</>} />
        <Reveal delay={0.08} className="mt-8">
          <div className="flex flex-col gap-2 border-y border-[#181713]/15 py-6 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-xl font-extrabold">{EDUCATION.degree}</h3>
              <p className="mt-1 text-[14px] text-[#6f6a5c]">{EDUCATION.school}</p>
            </div>
            <p className="font-mono2 shrink-0 text-[11.5px] text-[#6f6a5c]">
              {EDUCATION.period} · CGPA {EDUCATION.cgpa}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
