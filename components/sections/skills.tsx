"use client";

import { motion } from "motion/react";
import { SectionHeading } from "../section-heading";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="03 — Skills"
          title="Tools I reach for daily."
          description="A mix of mobile, web, backend, testing, and DevOps — pulled from real projects, not tutorials."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-border/80 bg-card p-6"
            >
              <h3 className="text-sm font-mono uppercase tracking-widest text-primary">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
