import Link from "next/link";
import type { DocBlock } from "@/content/docs";
import { getDocHref } from "@/content/docs";
import { Callout } from "@/components/site/callout";
import { CodePanel } from "@/components/site/code-panel";
import { WorkflowDiagram } from "@/components/site/workflow-diagram";

function blockTitle(title?: string) {
  if (!title) {
    return null;
  }

  return (
    <h3 className="font-display text-xl font-semibold tracking-tight text-slate-950">
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
                  <p key={value} className="text-base leading-8 text-slate-600">
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
                  <ol className="space-y-3 pl-6 text-base leading-8 text-slate-600">
                    {block.items.map((item) => (
                      <li key={item} className="list-decimal">
                        {item}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="space-y-3 text-base leading-8 text-slate-600">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-3 size-2 rounded-full bg-teal-600" />
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
                      className="rounded-[28px] border border-slate-900/10 bg-white/75 p-5"
                    >
                      <div className="text-xs uppercase tracking-[0.22em] text-teal-700">
                        Step {stepIndex + 1}
                      </div>
                      <h4 className="mt-2 font-display text-lg font-semibold tracking-tight text-slate-950">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
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
                <div className="overflow-hidden rounded-[28px] border border-slate-900/10 bg-white/80">
                  {block.commands.map((command, commandIndex) => (
                    <div
                      key={command.command}
                      className="grid gap-3 border-b border-slate-900/8 px-5 py-4 last:border-b-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]"
                    >
                      <code className="overflow-x-auto rounded-2xl bg-slate-950 px-3 py-2 text-sm text-slate-100">
                        {command.command}
                      </code>
                      <p className="text-sm leading-7 text-slate-600">
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
                    const href = external ? link.href : getDocHref(link.href.replace(/^\/docs\/?/, ""));

                    return (
                      <Link
                        key={link.label}
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer" : undefined}
                        className="rounded-[28px] border border-slate-900/10 bg-white/80 p-5 transition hover:-translate-y-0.5 hover:border-slate-900/20"
                      >
                        <div className="font-display text-xl font-semibold tracking-tight text-slate-950">
                          {link.label}
                        </div>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
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
                <h3 className="font-display text-xl font-semibold tracking-tight text-slate-950">
                  {block.title}
                </h3>
                <div className="overflow-hidden rounded-[28px] border border-slate-900/10 bg-white/80">
                  <div className="grid gap-4 border-b border-slate-900/8 bg-slate-950/4 px-5 py-4 lg:grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)]">
                    <div />
                    <div className="text-sm font-medium text-slate-950">
                      {block.columns[0]}
                    </div>
                    <div className="text-sm font-medium text-slate-950">
                      {block.columns[1]}
                    </div>
                  </div>
                  {block.rows.map((row) => (
                    <div
                      key={row.label}
                      className="grid gap-4 border-b border-slate-900/8 px-5 py-4 last:border-b-0 lg:grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)]"
                    >
                      <div className="text-sm font-medium text-slate-950">
                        {row.label}
                      </div>
                      <div className="text-sm leading-7 text-slate-600">
                        {row.values[0]}
                      </div>
                      <div className="text-sm leading-7 text-slate-600">
                        {row.values[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "audienceSplit":
            return (
              <div key={index} className="grid gap-4 md:grid-cols-3">
                {block.items.map((item) => (
                  <Link
                    key={item.audience}
                    href={item.href ?? "#"}
                    className="rounded-[28px] border border-slate-900/10 bg-white/80 p-5 transition hover:-translate-y-0.5 hover:border-slate-900/20"
                  >
                    <div className="text-xs uppercase tracking-[0.22em] text-teal-700">
                      {item.audience}
                    </div>
                    <div className="mt-2 font-display text-xl font-semibold tracking-tight text-slate-950">
                      {item.heading}
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
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
