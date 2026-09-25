import { Reveal } from "@/components/motion";
import { SectionHeading, Tag } from "@/components/ui";

const EXPERTISE = ["React", "Next.js", "Node.js", "NestJS", "TypeScript", "MongoDB", "PostgreSQL", "Redis", "AWS", "Serverless"];

const LAYERS = [
  { n: "01", label: "Frontend", tech: "React · Next.js · Redux · React Query" },
  { n: "02", label: "API Layer", tech: "REST · GraphQL · API Gateway" },
  { n: "03", label: "Business Logic", tech: "Node.js · NestJS · Express" },
  { n: "04", label: "Database / Cache", tech: "MongoDB · PostgreSQL · Redis" },
  { n: "05", label: "Cloud", tech: "AWS Lambda · S3 · Docker" },
];

export function About() {
  return (
    <section id="about" className="relative py-14 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={<>Engineering with a product mindset.</>}
          description="Bhautik Jani is a Full-Stack Software Engineer with 3.5+ years of experience building robust web applications and scalable cloud-native systems."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-[15px] leading-relaxed text-[#181713]">
              I work across the whole system — from design systems and React performance to NestJS services, data
              modelling and AWS serverless infrastructure. My default mode is ownership: scoping with product,
              shipping incrementally, and leaving the codebase healthier than I found it.
            </p>
            <div className="mt-7 flex flex-wrap gap-2" aria-label="Core expertise">
              {EXPERTISE.map((e) => (
                <Tag key={e}>{e}</Tag>
              ))}
            </div>
            <p className="font-mono2 mt-8 border-l-2 border-[#e4572e] pl-4 text-[13px] leading-relaxed text-[#6f6a5c]">
              Surat, Gujarat, India — working with teams across time zones, async-first and documentation-driven.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="label mb-2">Engineering stack</p>
            <ol className="border-t border-[#181713]/15">
              {LAYERS.map((l) => (
                <li
                  key={l.n}
                  className="group flex items-baseline gap-4 border-b border-[#181713]/15 py-4 transition-colors hover:bg-[#181713]/[.04]"
                >
                  <span className="font-mono2 text-[11px] text-[#e4572e]">{l.n}</span>
                  <span className="text-[15px] font-bold">{l.label}</span>
                  <span className="font-mono2 ml-auto text-right text-[11px] text-[#6f6a5c]">{l.tech}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
