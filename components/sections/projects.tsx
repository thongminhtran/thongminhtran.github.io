"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../section-heading";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentMap: Record<Project["accent"], string> = {
  primary: "from-indigo-500/30 to-violet-500/10",
  violet: "from-violet-500/30 to-fuchsia-500/10",
  cyan: "from-cyan-500/30 to-sky-500/10",
  amber: "from-amber-500/30 to-orange-500/10",
  rose: "from-rose-500/30 to-pink-500/10",
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
                className={cn(
                  "relative h-44 overflow-hidden bg-gradient-to-br",
                  accentMap[p.accent],
                )}
              >
                <div className="absolute inset-0 grid-pattern opacity-50" />
                <div className="absolute inset-0 flex items-end p-5">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn("h-2 w-2 rounded-full", dotMap[p.accent])}
                    />
                    <span className="font-mono text-xs uppercase tracking-widest text-foreground/70">
                      Project · {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-border/80 bg-background/60 backdrop-blur transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
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
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
