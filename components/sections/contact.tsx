"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-border/80 bg-card p-10 text-center sm:p-16"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
          <p className="font-mono text-sm uppercase tracking-widest text-primary">
            06 — Contact
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build something{" "}
            <span className="gradient-text">that ships</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            I&apos;m open to senior frontend, full-stack, and React Native
            roles based in Calgary or remote. The fastest way to reach me is by
            email.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-5 py-2.5 text-sm font-medium transition hover:bg-accent"
            >
              <Phone className="h-4 w-4" />
              {profile.phone}
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:bg-accent hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:bg-accent hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
