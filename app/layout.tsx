import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import { AosInit } from "@/components/aos-init";
import { ThemeSync } from "@/components/theme-sync";
import "aos/dist/aos.css";
import "./globals.css";

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shabil Dixon | Software Engineer",
  description:
    "Portfolio for Shabil Dixon featuring frontend, systems, and security-oriented software engineering work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AosInit />
        <ThemeSync />
        {children}
      </body>
    </html>
  );
}
