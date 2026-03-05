import { AlertTriangle, Flame, Info, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const toneStyles = {
  note: {
    icon: Info,
    className:
      "border-sky-500/20 bg-sky-500/8 text-slate-900 ring-sky-500/10 dark:text-slate-50",
    iconClassName: "text-sky-700",
  },
  tip: {
    icon: Lightbulb,
    className:
      "border-teal-500/20 bg-teal-500/8 text-slate-900 ring-teal-500/10 dark:text-slate-50",
    iconClassName: "text-teal-700",
  },
  warning: {
    icon: AlertTriangle,
    className:
      "border-amber-500/25 bg-amber-500/10 text-slate-900 ring-amber-500/10 dark:text-slate-50",
    iconClassName: "text-amber-700",
  },
  danger: {
    icon: Flame,
    className:
      "border-rose-500/25 bg-rose-500/10 text-slate-900 ring-rose-500/10 dark:text-slate-50",
    iconClassName: "text-rose-700",
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
        <div className="mt-0.5 rounded-full border border-current/10 bg-white/60 p-2">
          <Icon className={cn("size-4", style.iconClassName)} />
        </div>
        <div className="space-y-1.5">
          <p className="text-sm font-semibold tracking-tight">{title}</p>
          <p className="text-sm leading-7 text-slate-700">{body}</p>
        </div>
      </div>
    </div>
  );
}
