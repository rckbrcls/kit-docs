import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Uru Documentation",
    template: "%s | Uru Documentation",
  },
  description:
    "Documentation for Uru, the open-source desktop business manager powered by Supabase and operated with Polterbase workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${body.variable} ${mono.variable} dark`}>
      <body className="min-h-screen bg-[color:var(--background)] font-sans text-[color:var(--foreground)] antialiased">
        <div className="site-noise" />
        <div className="site-orb site-orb-left" />
        <div className="site-orb site-orb-right" />
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
