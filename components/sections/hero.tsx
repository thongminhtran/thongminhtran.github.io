"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/40 px-3 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to senior frontend & full-stack roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m <span className="gradient-text">Tim Tran</span>.
          <br />
          <span className="text-muted-foreground">
            I build production apps for{" "}
          </span>
          <span className="text-foreground">mobile</span>
          <span className="text-muted-foreground"> and </span>
          <span className="text-foreground">web</span>
          <span className="text-muted-foreground">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90"
          >
            View my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-5 py-2.5 text-sm font-medium transition hover:bg-accent"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            {profile.location}
          </span>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            github.com/thongminhtran
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
            linkedin.com/in/thongminhtran
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 transition hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
