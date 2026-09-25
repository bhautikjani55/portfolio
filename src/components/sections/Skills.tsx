import { SKILLS } from "@/data/portfolio";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/ui";

export function Skills() {
  return (
    <section id="skills" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="border-t border-[#181713]/15 pt-14 lg:pt-20">
          <SectionHeading
            index="04"
            eyebrow="Tools"
            title={<>The toolbox.</>}
            description="The stack I reach for in production, grouped by where each tool earns its keep."
          />

          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((cat, ci) => (
              <Reveal key={cat.category} delay={Math.min(ci * 0.05, 0.2)}>
                <div className="border-t-2 border-[#181713] pt-4">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-extrabold">{cat.category}</h3>
                    <span className="font-mono2 text-[11px] text-[#e4572e]">{String(ci + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-1 text-[12.5px] text-[#6f6a5c]">{cat.description}</p>
                  <ul className="mt-4 space-y-0">
                    {cat.items.map((s) => (
                      <li
                        key={s.name}
                        className="group flex items-baseline justify-between gap-3 border-b border-[#181713]/10 py-2.5 transition-colors hover:border-[#181713]/40"
                      >
                        <span className="text-[14px] font-bold transition-transform duration-300 group-hover:translate-x-1">
                          {s.name}
                        </span>
                        <span className="font-mono2 text-right text-[10.5px] leading-snug text-[#a8a294]">{s.note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
