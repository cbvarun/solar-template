"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Only rendered when theme.darkMode = "toggle". Persists the choice in localStorage. */
export function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  }
  return (
    <Button type="button" variant="ghost" size="icon" onClick={toggle} aria-label="Toggle dark mode">
      <Moon className="block h-5 w-5 [.dark_&]:hidden" aria-hidden="true" />
      <Sun className="hidden h-5 w-5 [.dark_&]:block" aria-hidden="true" />
    </Button>
  );
}
