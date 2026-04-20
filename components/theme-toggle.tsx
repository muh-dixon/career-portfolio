"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function isTheme(value: string | null | undefined): value is Theme {
  return value === "light" || value === "dark";
}

function getPreferredTheme(): Theme {
  const storedTheme = window.localStorage.getItem("theme");

  if (isTheme(storedTheme)) {
    return storedTheme;
  }

  return "dark";
}

function getClientSnapshot(): Theme {
  if (typeof document !== "undefined") {
    const datasetTheme = document.documentElement.dataset.theme;

    if (isTheme(datasetTheme)) {
      return datasetTheme;
    }
  }

  if (typeof window !== "undefined") {
    return getPreferredTheme();
  }

  return "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === "theme") {
      onStoreChange();
    }
  };

  const handleThemeChange = () => {
    onStoreChange();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener("themechange", handleThemeChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("themechange", handleThemeChange);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(new Event("themechange"));
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border px-3 text-xs font-semibold uppercase tracking-[0.18em] transition"
      style={{
        background: "var(--button-secondary-bg)",
        color: "var(--button-secondary-text)",
        borderColor: "var(--button-secondary-border)",
      }}
    >
      <span aria-hidden="true">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
