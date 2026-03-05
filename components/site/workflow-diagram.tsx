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
          <div className="bg-card h-full rounded-[28px] border border-border p-5 shadow-[0_20px_60px_-40px_rgba(12,23,34,0.4)]">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-muted-foreground text-xs uppercase tracking-[0.22em]">
                {String(index + 1).padStart(2, "0")}
              </div>
              {!compact && index < items.length - 1 ? (
                <ArrowRight className="text-muted-foreground hidden size-4 lg:block" />
              ) : null}
            </div>
            <h3 className="text-foreground font-display text-xl font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="text-muted-foreground mt-2 text-sm leading-7">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
