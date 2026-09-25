import { HERO_STATS } from "@/data/portfolio";
import { Counter, Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

export function HeroStats() {
  return (
    <section aria-label="Career highlights" className="relative">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <dl className="grid grid-cols-2 border-y border-[#181713]/15 lg:grid-cols-4">
            {HERO_STATS.map((s, i) => (
              <div
                key={s.label}
                className={cn(
                  "px-2 py-8 text-center sm:py-10 lg:px-8",
                  i % 2 === 1 && "border-l border-[#181713]/15",
                  i > 1 && "max-lg:border-t max-lg:border-[#181713]/15",
                  i > 0 && "lg:border-l lg:border-[#181713]/15"
                )}
              >
                <dd className="display-tight text-5xl font-extrabold tracking-tight text-[#181713] sm:text-6xl">
                  {s.value === null ? (
                    "display" in s ? s.display : ""
                  ) : (
                    <Counter value={s.value} decimals={"decimals" in s ? s.decimals ?? 0 : 0} suffix={s.suffix ?? ""} />
                  )}
                </dd>
                <dt className="label mt-3">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
