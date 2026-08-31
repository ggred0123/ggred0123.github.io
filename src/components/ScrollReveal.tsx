"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reveals content as it scrolls into view.
 *
 * The hidden state lives in CSS under `.js-reveal` (set by the inline script in
 * layout.tsx before first paint, and only when motion is welcome), so this
 * component never has to hide anything itself — it just adds `.is-in`.
 * Re-runs on navigation because a client-side route change mounts new nodes.
 */
const TARGETS = [
  ".section-head",
  ".paper-card",
  ".project-tile",
  ".tl-item",
  ".news-list li",
  ".pillars li",
  ".card",
  ".skills div",
].join(", ");

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!document.documentElement.classList.contains("js-reveal")) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));

    // Stagger siblings so a grid of cards arrives in sequence, not all at once.
    const seen = new Map<Element, number>();
    for (const el of nodes) {
      const parent = el.parentElement;
      if (!parent) continue;
      const i = seen.get(parent) ?? 0;
      seen.set(parent, i + 1);
      el.style.setProperty("--reveal-i", String(Math.min(i, 6)));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    for (const el of nodes) observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
