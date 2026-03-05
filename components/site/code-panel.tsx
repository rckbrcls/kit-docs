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
        "bg-card overflow-hidden rounded-[28px] border border-border shadow-[0_30px_80px_-40px_rgba(7,15,24,0.75)]",
        className,
      )}
    >
      <div className="bg-muted flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="bg-foreground/30 size-2.5 rounded-full" />
          <span className="bg-foreground/20 size-2.5 rounded-full" />
          <span className="bg-foreground/10 size-2.5 rounded-full" />
        </div>
        <div className="text-muted-foreground text-[11px] uppercase tracking-[0.22em]">
          {title ?? language}
        </div>
      </div>
      <pre className="text-foreground overflow-x-auto px-5 py-5 text-sm leading-7">
        <code>{code}</code>
      </pre>
    </div>
  );
}
