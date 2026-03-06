import type { ReactNode } from "react";
import { DocsSidebar } from "@/components/site/docs-sidebar";
import { SiteHeader } from "@/components/site/site-header";

export default function ProductDocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="lg:grid lg:h-screen lg:grid-rows-[auto_minmax(0,1fr)] lg:overflow-hidden">
      <SiteHeader />
      <div className="site-shell py-8 sm:py-10 lg:h-full lg:min-h-0 lg:overflow-hidden lg:py-0">
        <div className="grid gap-8 lg:h-full lg:min-h-0 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)_240px]">
          <DocsSidebar />
          {children}
        </div>
      </div>
    </div>
  );
}
