import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { DocBlock } from "@/content/docs";
import { Callout } from "@/components/site/callout";
import { CodePanel } from "@/components/site/code-panel";
import { WorkflowDiagram } from "@/components/site/workflow-diagram";

function blockTitle(title?: string) {
  if (!title) {
    return null;
  }

  return (
    <h3 className="text-foreground font-display text-xl font-semibold tracking-tight">
      {title}
    </h3>
  );
}

export function DocsRenderer({ blocks }: { blocks: DocBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraphs":
            return (
              <div key={index} className="space-y-4">
                {blockTitle(block.title)}
                {block.values.map((value) => (
                  <p key={value} className="text-muted-foreground text-base leading-8">
                    {value}
                  </p>
                ))}
              </div>
            );

          case "list":
            return (
              <div key={index} className="space-y-4">
                {blockTitle(block.title)}
                {block.style === "ordered" ? (
                  <ol className="text-muted-foreground space-y-3 pl-6 text-base leading-8">
                    {block.items.map((item) => (
                      <li key={item} className="list-decimal">
                        {item}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="text-muted-foreground space-y-3 text-base leading-8">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        {block.style === "check" ? (
                          <CheckCircle2 className="text-foreground mt-1 size-5 shrink-0" />
                        ) : (
                          <span className="bg-foreground/70 mt-3 size-2" />
                        )}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );

          case "steps":
            return (
              <div key={index} className="space-y-4">
                {blockTitle(block.title)}
                <div className="grid gap-4">
                  {block.items.map((item, stepIndex) => (
                    <div
                      key={item.title}
                      className="bg-card border border-border p-5"
                    >
                      <div className="text-muted-foreground text-xs uppercase tracking-[0.22em]">
                        Step {stepIndex + 1}
                      </div>
                      <h4 className="text-foreground mt-2 font-display text-lg font-semibold tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground mt-2 text-sm leading-7">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "callout":
            return (
              <Callout
                key={index}
                tone={block.tone}
                title={block.title}
                body={block.body}
              />
            );

          case "code":
            return (
              <CodePanel
                key={index}
                code={block.code}
                language={block.language}
                title={block.title}
              />
            );

          case "commandTable":
            return (
              <div key={index} className="space-y-4">
                {blockTitle(block.title)}
                <div className="bg-card overflow-hidden border border-border">
                  {block.commands.map((command) => (
                    <div
                      key={command.command}
                      className="grid gap-3 border-b border-border px-5 py-4 last:border-b-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]"
                    >
                      <code className="bg-muted text-foreground overflow-x-auto px-3 py-2 text-sm">
                        {command.command}
                      </code>
                      <p className="text-muted-foreground text-sm leading-7">
                        {command.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "linkGrid":
            return (
              <div key={index} className="space-y-4">
                {blockTitle(block.title)}
                <div className="grid gap-4 md:grid-cols-2">
                {block.links.map((link) => {
                  const external = link.href.startsWith("http");
                  const href = link.href;

                  return (
                    <Link
                      key={link.label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="bg-card hover:bg-accent border border-border p-5 transition hover:-translate-y-0.5"
                    >
                      <div className="text-foreground font-display text-xl font-semibold tracking-tight">
                        {link.label}
                      </div>
                      <p className="text-muted-foreground mt-2 text-sm leading-7">
                        {link.description}
                      </p>
                    </Link>
                  );
                })}
                </div>
              </div>
            );

          case "comparison":
            return (
              <div key={index} className="space-y-4">
                <h3 className="text-foreground font-display text-xl font-semibold tracking-tight">
                  {block.title}
                </h3>
                <div className="bg-card overflow-hidden border border-border">
                  <div className="bg-muted grid gap-4 border-b border-border px-5 py-4 lg:grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)]">
                    <div />
                    <div className="text-foreground text-sm font-medium">
                      {block.columns[0]}
                    </div>
                    <div className="text-foreground text-sm font-medium">
                      {block.columns[1]}
                    </div>
                  </div>
                  {block.rows.map((row) => (
                    <div
                      key={row.label}
                      className="grid gap-4 border-b border-border px-5 py-4 last:border-b-0 lg:grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)]"
                    >
                      <div className="text-foreground text-sm font-medium">
                        {row.label}
                      </div>
                      <div className="text-muted-foreground text-sm leading-7">
                        {row.values[0]}
                      </div>
                      <div className="text-muted-foreground text-sm leading-7">
                        {row.values[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "audienceSplit":
            return (
              <div key={index} className="grid gap-4">
                {block.items.map((item) => (
                  <Link
                    key={item.audience}
                    href={item.href ?? "#"}
                    className="bg-card hover:bg-accent border border-border p-5 transition hover:-translate-y-0.5"
                  >
                    <div className="text-muted-foreground text-xs uppercase tracking-[0.22em]">
                      {item.audience}
                    </div>
                    <div className="text-foreground mt-2 font-display text-xl font-semibold tracking-tight">
                      {item.heading}
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm leading-7">
                      {item.body}
                    </p>
                  </Link>
                ))}
              </div>
            );

          case "architecture":
            return <WorkflowDiagram key={index} items={block.items} compact />;

          default:
            return null;
        }
      })}
    </div>
  );
}
