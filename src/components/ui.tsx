import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div>
      <p className="label">
        <span className="mr-3 text-[#e4572e]">{index}</span>
        {eyebrow}
      </p>
      <h2 className="display-tight mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-[#181713] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#6f6a5c]">{description}</p> : null}
    </div>
  );
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "font-mono2 inline-flex items-center rounded-full border border-[#181713]/25 px-3 py-1.5 text-[11px] font-medium text-[#181713]",
        className
      )}
    >
      {children}
    </span>
  );
}
