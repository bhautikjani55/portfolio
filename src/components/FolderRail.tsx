import { Folder } from "lucide-react";

const FOLDERS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Tools", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function FolderRail({ vertical = true }: { vertical?: boolean }) {
  if (!vertical) {
    return (
      <div className="flex gap-5" role="list" aria-label="Quick links">
        {FOLDERS.map((f) => (
          <a key={f.label} href={f.href} role="listitem" className="group flex flex-col items-center gap-1.5">
            <Folder size={40} strokeWidth={1.4} className="fill-[#181713] text-[#181713] transition group-hover:fill-[#e4572e] group-hover:text-[#e4572e]" aria-hidden />
            <span className="font-mono2 text-[10.5px] text-[#181713]">{f.label}</span>
          </a>
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-11" role="list" aria-label="Quick links">
      {FOLDERS.map((f) => (
        <a key={f.label} href={f.href} role="listitem" className="group flex w-20 flex-col items-center gap-1.5">
          <Folder
            size={58}
            strokeWidth={1.2}
            className="fill-[#181713] text-[#181713] transition duration-300 group-hover:-translate-y-1 group-hover:fill-[#e4572e] group-hover:text-[#e4572e]"
            aria-hidden
          />
          <span className="font-mono2 text-[11px] text-[#181713]">{f.label}</span>
        </a>
      ))}
    </div>
  );
}
