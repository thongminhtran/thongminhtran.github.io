"use client";

import { motion } from "motion/react";
import { GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "../section-heading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="05 — Education" title="Academic background." />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-start gap-4 rounded-2xl border border-border/80 bg-card p-6 sm:flex-row sm:items-center sm:gap-6"
        >
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{education.degree}</h3>
            <p className="text-sm text-primary">{education.school}</p>
            <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {education.location}
            </p>
          </div>
          <div className="font-mono text-sm text-muted-foreground">
            {education.year}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
