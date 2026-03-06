import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[color:var(--panel)]">
      <div className="text-muted-foreground mx-auto flex max-w-7xl flex-col gap-3 px-4 py-10 text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">

        <div className="flex flex-wrap items-center gap-4">
          <Link href="/docs" className="hover:text-foreground">
            Documentation
          </Link>
          <Link href="/polterbase" className="hover:text-foreground">
            Polterbase
          </Link>
          <Link href="/pwa" className="hover:text-foreground">
            PWA
          </Link>
          <a
            href="https://www.npmjs.com/package/@polterware/polterbase"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            Polterbase npm
          </a>
          <a
            href="https://github.com/polterware/polterbase"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            Polterbase GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
