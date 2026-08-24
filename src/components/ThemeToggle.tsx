"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark";

function effectiveMode(): Mode {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  // no stored choice: the stylesheet's base is dark, so that is what is
  // actually on screen — the OS preference no longer decides
  return "dark";
}

export default function ThemeToggle() {
  // null until mounted: the icon shown is driven purely by CSS off
  // <html data-theme>, so the server and client markup always match.
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    setMode(effectiveMode());

  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next: Mode = effectiveMode() === "dark" ? "light" : "dark";

    // enable the global colour cross-fade only for the length of the swap
    root.classList.add("theme-transition");
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode: the choice just will not persist */
    }
    setMode(next);
    window.setTimeout(() => root.classList.remove("theme-transition"), 450);
  };

  const label =
    mode === null
      ? "Switch colour theme"
      : mode === "dark"
        ? "Switch to light mode"
        : "Switch to dark mode";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden>
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.4v2.2M12 19.4v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.4 12h2.2M19.4 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
      </svg>
      <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M20.5 14.8A8.6 8.6 0 0 1 9.2 3.5a8.6 8.6 0 1 0 11.3 11.3Z" />
      </svg>
    </button>
  );
}
