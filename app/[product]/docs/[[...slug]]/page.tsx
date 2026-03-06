import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import {
  docsPages,
  docsProducts,
  getDocBySlug,
  getDocHref,
  getNavGroupsForProduct,
  getPrevNextDocs,
  toAnchorId,
} from "@/content/docs";
import { DocsRenderer } from "@/components/site/docs-renderer";
import { DocsToc } from "@/components/site/docs-toc";

const productIds = ["ops", "polterbase", "pwa"];

type PageProps = {
  params: Promise<{
    product: string;
    slug?: string[];
  }>;
};

export function generateStaticParams() {
  const params: Array<{ product: string; slug: string[] }> = [];

  for (const productId of productIds) {
    const product = docsProducts.find((p) => p.id === productId);
    if (!product) continue;

    const groups = getNavGroupsForProduct(product);
    const slugs = groups.flatMap((g) => g.items);

    for (const fullSlug of slugs) {
      const subSlug = fullSlug.slice(productId.length + 1);
      params.push({ product: productId, slug: subSlug ? subSlug.split("/") : [] });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { product, slug } = await params;
  const fullSlug = slug ? `${product}/${slug.join("/")}` : product;
  const page = getDocBySlug(fullSlug.split("/"));

  if (!page) return {};

  return {
    title: page.title,
    description: page.summary,
  };
}

export default async function ProductDocsPage({ params }: PageProps) {
  const { product, slug } = await params;
  const fullSlug = slug ? `${product}/${slug.join("/")}` : product;
  const fullSlugSegments = fullSlug.split("/");
  const page = getDocBySlug(fullSlugSegments);

  if (!page) {
    notFound();
  }

  const { previous, next } = getPrevNextDocs(fullSlugSegments);

  return (
    <>
      <main className="no-scrollbar min-w-0 lg:h-full lg:min-h-0 lg:overflow-y-auto lg:overscroll-contain lg:pt-8 lg:pr-2 lg:pb-8 lg:[scrollbar-gutter:stable]">
        <div className="border border-border bg-[color:var(--panel)] p-6 shadow-[0_30px_80px_-50px_rgba(7,15,24,0.75)] sm:p-8">
          <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
            {page.section}
          </div>
          <h1 className="text-foreground mt-3 max-w-4xl font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            {page.title}
          </h1>
          <p className="text-muted-foreground mt-4 max-w-3xl text-lg leading-8">
            {page.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {page.audience.map((audience) => (
              <span
                key={audience}
                className="text-primary/80 bg-primary/6 border border-primary/15 px-3 py-1.5 text-xs uppercase tracking-[0.16em]"
              >
                {audience}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {page.intro.map((paragraph) => (
              <p key={paragraph} className="text-muted-foreground max-w-3xl text-base leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {page.sections.map((section) => (
            <section
              key={section.title}
              id={toAnchorId(section.title)}
              className="bg-card border border-border p-6 shadow-[0_20px_60px_-45px_rgba(12,23,34,0.45)] sm:p-8"
            >
              <div className="mb-6">
                <h2 className="text-foreground font-display text-3xl font-semibold tracking-tight">
                  {section.title}
                </h2>
                {section.description ? (
                  <p className="text-muted-foreground mt-2 text-base leading-8">
                    {section.description}
                  </p>
                ) : null}
              </div>
              <DocsRenderer blocks={section.blocks} />
            </section>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {previous ? (
            <Link
              href={getDocHref(previous.slug)}
              className="bg-card hover:bg-accent border border-border p-5 transition hover:-translate-y-0.5"
            >
              <div className="text-primary/70 flex items-center gap-2 text-xs uppercase tracking-[0.22em]">
                <ArrowLeft className="size-4" />
                Previous
              </div>
              <div className="text-foreground mt-3 font-display text-2xl font-semibold tracking-tight">
                {previous.title}
              </div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={getDocHref(next.slug)}
              className="bg-card hover:bg-accent border border-border p-5 text-left transition hover:-translate-y-0.5"
            >
              <div className="text-primary/70 flex items-center justify-end gap-2 text-xs uppercase tracking-[0.22em]">
                Next
                <ArrowRight className="size-4" />
              </div>
              <div className="text-foreground mt-3 font-display text-2xl font-semibold tracking-tight">
                {next.title}
              </div>
            </Link>
          ) : null}
        </div>
      </main>

      <DocsToc page={page} />
    </>
  );
}
