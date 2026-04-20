"use client";

import { useLayoutEffect } from "react";

type Theme = "light" | "dark";

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

function getPreferredTheme(): Theme {
  const storedTheme = window.localStorage.getItem("theme");

  if (isTheme(storedTheme)) {
    return storedTheme;
  }

  return "dark";
}

export function ThemeSync() {
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = getPreferredTheme();
  }, []);

  return null;
}
