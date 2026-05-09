"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

type SiteNavProps = {
  name: string;
};

export function SiteNav({ name }: SiteNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className="surface-panel flex items-center justify-between rounded-full px-4 py-3 sm:px-5"
        style={{
          background: "var(--nav-surface)",
          boxShadow: "0 10px 30px rgba(8,15,72,0.08)",
        }}
      >
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3 font-display text-lg font-semibold text-[var(--color-accent)] sm:text-xl"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/portfolio-logo.png"
            alt="Shabil Dixon logo"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 object-contain"
            priority
          />
          <span className="truncate">{name}</span>
        </a>

        <div className="hidden items-center gap-3 text-sm font-medium text-[var(--color-nav)] lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 transition hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-panel"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-accent)] transition hover:border-[var(--color-accent)] lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </nav>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 z-40 bg-[rgba(6,10,28,0.48)] lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <aside
            id="mobile-nav-panel"
            className="fixed inset-y-0 right-0 z-50 flex w-[min(88vw,22rem)] flex-col border-l border-[var(--color-border)] bg-[var(--color-paper)] p-6 shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="font-display text-2xl text-[var(--color-ink)]">
                Menu
              </p>
              <button
                type="button"
                aria-label="Close navigation menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-accent)] transition hover:border-[var(--color-accent)]"
                onClick={() => setIsOpen(false)}
              >
                <span aria-hidden="true" className="text-xl leading-none">
                  X
                </span>
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-[1.15rem] border border-[var(--color-border)] px-4 py-3 text-lg font-medium text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--button-secondary-bg)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Theme
              </p>
              <div className="mt-4">
                <ThemeToggle />
              </div>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
