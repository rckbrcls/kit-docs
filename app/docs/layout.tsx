import type { ReactNode } from "react";
import { DocsSidebar } from "@/components/site/docs-sidebar";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SiteHeader />
      <div className="site-shell py-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)_240px]">
          <DocsSidebar />
          {children}
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
