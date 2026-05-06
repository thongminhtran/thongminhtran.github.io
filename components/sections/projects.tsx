"use client";

import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SectionHeading } from "../section-heading";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentMap: Record<Project["accent"], string> = {
  primary: "from-indigo-500/40 via-violet-500/20 to-transparent",
  violet: "from-violet-500/40 via-fuchsia-500/20 to-transparent",
  cyan: "from-cyan-500/40 via-sky-500/20 to-transparent",
  amber: "from-amber-500/40 via-orange-500/20 to-transparent",
  rose: "from-rose-500/40 via-pink-500/20 to-transparent",
};

const dotMap: Record<Project["accent"], string> = {
  primary: "bg-indigo-400",
  violet: "bg-violet-400",
  cyan: "bg-cyan-400",
  amber: "bg-amber-400",
  rose: "bg-rose-400",
};

export function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 bg-secondary/40 py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="04 — Projects"
          title="Selected work."
          description="A snapshot of apps I've shipped — cross-platform mobile, web dashboards, and full-stack tooling."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card transition hover:border-primary/40"
            >
              <div
                className="relative h-56 overflow-hidden bg-secondary"
                style={
                  p.presentation === "logo" && p.panelBackground
                    ? { background: p.panelBackground }
                    : undefined
                }
              >
                {p.image && p.presentation === "logo" ? (
                  // Asymmetric padding: more on top so the logo's optical center
                  // sits above the geometric center, balancing the top-left badge
                  // and top-right link button.
                  <div className="absolute inset-0 grid place-items-center pt-12 pb-6 px-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.imageAlt ?? p.title}
                      loading="lazy"
                      className="max-h-full max-w-[78%] object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                ) : p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.image}
                    alt={p.imageAlt ?? p.title}
                    loading="lazy"
                    className={cn(
                      "h-full w-full transition-transform duration-700 group-hover:scale-105",
                      p.imagePosition === "contain"
                        ? "object-contain"
                        : "object-cover",
                      p.imagePosition === "top" && "object-top",
                      p.imagePosition === "bottom" && "object-bottom",
                    )}
                  />
                ) : null}

                {p.presentation !== "logo" && (
                  <>
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-0 bg-gradient-to-t",
                        accentMap[p.accent],
                      )}
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-card/95 via-card/40 to-transparent" />
                  </>
                )}

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-2.5 py-1 backdrop-blur">
                  <span className={cn("h-1.5 w-1.5 rounded-full", dotMap[p.accent])} />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-black/70">
                    Project · {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {p.links?.[0] && (
                  <a
                    href={p.links[0].href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.title} (${p.links[0].label})`}
                    className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/80 text-black/80 backdrop-blur transition group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span
                        className={cn(
                          "mt-2 h-1 w-1 shrink-0 rounded-full",
                          dotMap[p.accent],
                        )}
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border/80 bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {p.links && p.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background px-3 py-1 text-xs text-foreground/80 transition hover:border-primary/40 hover:text-primary"
                      >
                        {link.label}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
