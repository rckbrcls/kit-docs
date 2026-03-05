import { AlertTriangle, Flame, Info, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const toneStyles = {
  note: {
    icon: Info,
    className: "border-border bg-card text-foreground ring-border",
    iconClassName: "text-foreground",
  },
  tip: {
    icon: Lightbulb,
    className: "border-border bg-card text-foreground ring-border",
    iconClassName: "text-foreground",
  },
  warning: {
    icon: AlertTriangle,
    className: "border-border bg-card text-foreground ring-border",
    iconClassName: "text-foreground",
  },
  danger: {
    icon: Flame,
    className: "border-border bg-card text-foreground ring-border",
    iconClassName: "text-foreground",
  },
} as const;

export function Callout({
  tone,
  title,
  body,
}: {
  tone: keyof typeof toneStyles;
  title: string;
  body: string;
}) {
  const style = toneStyles[tone];
  const Icon = style.icon;

  return (
    <div
      className={cn(
        "rounded-3xl border p-5 ring-1 shadow-[0_20px_60px_-40px_rgba(12,23,34,0.45)]",
        style.className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="bg-background mt-0.5 rounded-full border border-current/10 p-2">
          <Icon className={cn("size-4", style.iconClassName)} />
        </div>
        <div className="space-y-1.5">
          <p className="text-sm font-semibold tracking-tight">{title}</p>
          <p className="text-muted-foreground text-sm leading-7">{body}</p>
        </div>
      </div>
    </div>
  );
}
