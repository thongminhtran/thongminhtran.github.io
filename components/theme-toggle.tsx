"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Hydration-only flag for next-themes; no external sync needed.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = (mounted ? resolvedTheme ?? theme : "dark") === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/40 text-foreground transition hover:bg-accent hover:text-accent-foreground"
    >
      <Sun
        className={`h-4 w-4 transition-all ${
          isDark ? "scale-0 -rotate-90" : "scale-100 rotate-0"
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all ${
          isDark ? "scale-100 rotate-0" : "scale-0 rotate-90"
        }`}
      />
    </button>
  );
}
