"use client";

import { motion } from "motion/react";
import { ExternalLink, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { SectionHeading } from "../section-heading";
import { educations } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="05 — Education" title="Academic background." />

        <div className="grid gap-4 md:grid-cols-2">
          {educations.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col gap-4 rounded-2xl border border-border/80 bg-card p-6 sm:flex-row sm:items-start"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold leading-snug">
                  {e.degree}
                </h3>
                {e.url ? (
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link mt-0.5 inline-flex items-center gap-1 text-sm text-primary transition hover:underline"
                  >
                    {e.school}
                    <ExternalLink className="h-3 w-3 opacity-60 transition-opacity group-hover/link:opacity-100" />
                  </a>
                ) : (
                  <p className="mt-0.5 text-sm text-primary">{e.school}</p>
                )}
                <p className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {e.location}
                </p>
                {e.note && (
                  <p className="mt-3 inline-flex items-start gap-1.5 text-xs text-muted-foreground">
                    <Sparkles className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                    {e.note}
                  </p>
                )}
              </div>
              <div className="font-mono text-sm text-muted-foreground sm:self-start">
                {e.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
