"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 glass"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-medium"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
            TT
          </span>
          <span className="hidden sm:inline-flex items-center gap-1">
            <span className="text-muted-foreground">~/</span>
            <span>tim-tran</span>
            <span className="text-primary">_</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/Tim_Tran_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90 sm:inline-flex"
          >
            Resume
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/60 glass md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/Tim_Tran_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-md bg-primary px-3 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
