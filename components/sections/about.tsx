"use client";

import { motion } from "motion/react";
import { Code2, Rocket, Smartphone, Globe } from "lucide-react";
import { SectionHeading } from "../section-heading";

const stats = [
  { value: "5+", label: "Years building software" },
  { value: "120+", label: "Firebase Cloud Functions shipped" },
  { value: "2", label: "Apps live on App Store & Google Play" },
  { value: "95%", label: "Test coverage at Bombardier" },
];

const pillars = [
  {
    icon: Smartphone,
    title: "Cross-platform mobile",
    body: "React Native + Expo, EAS Build, OTA updates, native module integration, and store submission.",
  },
  {
    icon: Globe,
    title: "Modern web",
    body: "Next.js, React 19, TypeScript, and Tailwind. Server Components, accessibility, performance.",
  },
  {
    icon: Code2,
    title: "Full-stack delivery",
    body: ".NET 8, Node.js, Firebase Cloud Functions, REST APIs, EF Core, SQL Server, PostgreSQL.",
  },
  {
    icon: Rocket,
    title: "Ship to production",
    body: "Azure DevOps & EAS CI/CD, Sentry monitoring, Hangfire jobs, and OTA release pipelines.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="01 — About"
          title="A full-stack engineer who genuinely ships."
          description="Concordia CS grad based in Calgary. I work end-to-end across mobile, web, and backend — from architecting Firebase functions and .NET APIs to converting Figma into accessible, fast interfaces."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-border/80 bg-card p-5"
            >
              <div className="text-3xl font-semibold tracking-tight">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card p-6 transition hover:border-primary/40"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
