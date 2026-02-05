"use client";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useTheme } from "next-themes";
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/css/Classic.css";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <Classic
      toggled={isDark}
      toggle={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="theme-btn"
    />
  );
}
