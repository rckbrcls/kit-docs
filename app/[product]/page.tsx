import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { docsProducts, getProductDocsHref } from "@/content/docs";

const productIds = ["ops", "polterbase", "pwa"];

type PageProps = {
  params: Promise<{ product: string }>;
};

export function generateStaticParams() {
  return productIds.map((product) => ({ product }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { product: productId } = await params;
  const product = docsProducts.find((p) => p.id === productId);
  if (!product) return {};

  return {
    title: product.label,
    description: product.description,
  };
}

export default async function ProductLandingPage({ params }: PageProps) {
  const { product: productId } = await params;
  const product = docsProducts.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <SiteHeader />
      <main className="site-shell py-16 sm:py-20">
        <div className="max-w-2xl">
          <div className="text-primary/70 text-xs uppercase tracking-[0.22em]">
            {product.section}
          </div>
          <h1 className="text-foreground mt-3 font-display text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
            {product.label}
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-8">
            {product.description}
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="px-6">
              <Link href={getProductDocsHref(product)}>
                <BookOpen className="size-4" />
                Read the Docs
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
