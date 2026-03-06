import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const fira = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "polterware/kit",
    template: "%s | polterware/kit",
  },
  description:
    "Documentation for the Polterware ecosystem: Ops (desktop business manager), Polterbase (CLI workflow manager), and PWA (headless install utilities), powered by Supabase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fira.variable} dark`}>
      <body className="min-h-screen bg-[color:var(--background)] font-mono text-[color:var(--foreground)] antialiased">
        <div className="site-noise" />
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
