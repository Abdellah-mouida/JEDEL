"use client";

import { useTheme } from "next-themes";
import { Classic as OriginalClassic } from "@theme-toggles/react";
import "@theme-toggles/react/css/Classic.css";
import React from "react";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "" }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Cast to any to bypass strict TypeScript checking
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Classic = OriginalClassic as any;

  return (
    <Classic
      toggled={isDark}
      toggle={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={`theme-btn ${className}`}
      duration={750}
    />
  );
};

export default ThemeToggle;
