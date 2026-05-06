import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 mt-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js,
          Tailwind CSS, and Motion.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:bg-accent hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:bg-accent hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:bg-accent hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
