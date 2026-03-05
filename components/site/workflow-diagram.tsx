import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function WorkflowDiagram({
  items,
  compact = false,
}: {
  items: Array<{ title: string; body: string }>;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid gap-4",
        compact ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-2",
      )}
    >
      {items.map((item, index) => (
        <div key={item.title} className="relative">
          <div className="h-full rounded-[28px] border border-slate-900/10 bg-white/85 p-5 shadow-[0_20px_60px_-40px_rgba(12,23,34,0.4)]">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.22em] text-teal-700">
                {String(index + 1).padStart(2, "0")}
              </div>
              {!compact && index < items.length - 1 ? (
                <ArrowRight className="hidden size-4 text-slate-300 lg:block" />
              ) : null}
            </div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-slate-950">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
