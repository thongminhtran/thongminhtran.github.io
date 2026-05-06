"use client";

import { motion } from "motion/react";
import { Briefcase, ExternalLink, MapPin } from "lucide-react";
import { SectionHeading } from "../section-heading";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 bg-secondary/40 py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="02 — Experience"
          title="Production work, not side projects."
          description="From early-stage startups to aerospace and rail. I've shipped to the App Store, optimized mission-critical web apps, and architected serverless backends at scale."
        />

        <ol className="relative space-y-10 border-l border-border/60 pl-6 sm:pl-10">
          {experiences.map((exp, i) => (
            <motion.li
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative"
            >
              <span
                className={`absolute -left-[34px] sm:-left-[46px] top-2 grid h-7 w-7 place-items-center rounded-full border-2 ${
                  exp.current
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground"
                }`}
              >
                <Briefcase className="h-3.5 w-3.5" />
              </span>

              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link inline-flex items-center gap-1 text-sm text-primary transition hover:underline"
                      >
                        {exp.company}
                        <ExternalLink className="h-3 w-3 opacity-60 transition-opacity group-hover/link:opacity-100" />
                      </a>
                    ) : (
                      <p className="text-sm text-primary">{exp.company}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-end text-xs text-muted-foreground sm:flex-row sm:items-center sm:gap-3">
                    <span className="font-mono">{exp.period}</span>
                    <span className="hidden sm:inline">·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border/80 bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
