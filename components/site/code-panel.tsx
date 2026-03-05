import { cn } from "@/lib/utils";

export function CodePanel({
  code,
  language = "text",
  title,
  className,
}: {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[28px] border border-slate-900/10 bg-[#0d1720] shadow-[0_30px_80px_-40px_rgba(7,15,24,0.75)]",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-white/8 bg-white/4 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-rose-400" />
          <span className="size-2.5 rounded-full bg-amber-300" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
          {title ?? language}
        </div>
      </div>
      <pre className="overflow-x-auto px-5 py-5 text-sm leading-7 text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}
