"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

/**
 * Today's and all-time visitor counts from GoatCounter's public counter API.
 * Renders nothing until profile.goatcounter is set.
 */
export default function VisitorCount() {
  const code = profile.goatcounter;
  const [today, setToday] = useState<string | null>(null);
  const [total, setTotal] = useState<string | null>(null);

  useEffect(() => {
    if (!code) return;
    const base = `https://${code}.goatcounter.com/counter/TOTAL.json`;
    const day = new Date().toISOString().slice(0, 10);
    const get = (url: string) =>
      fetch(url)
        .then((r) => (r.ok ? r.json() : null))
        .then((j) => (j && typeof j.count === "string" ? j.count.replace(/\s/g, ",") : null))
        .catch(() => null);
    get(`${base}?start=${day}&end=${day}`).then(setToday);
    get(base).then(setTotal);
  }, [code]);

  if (!code) return null;

  return (
    <p className="mono muted visitor-count" aria-live="polite">
      visitors ▸ today {today ?? "—"} · total {total ?? "—"}
    </p>
  );
}
