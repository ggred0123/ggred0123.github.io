"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";

const NAV: [string, string][] = [
  ["Background", "/#background"],
  ["Research", "/#research"],
  ["Timeline", "/#timeline"],
  ["Projects", "/#projects"],
  ["All papers", "/publications/"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" href="/" aria-label="Go to home page">
          <span className="brand-mark" aria-hidden />
          <span className="brand-copy">{profile.name}</span>
          <span className="brand-tag mono">/ {profile.role}</span>
        </Link>
        <button
          className="nav-toggle mono"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "close" : "menu"}
        </button>
        <nav className={`site-nav${open ? " is-open" : ""}`} id="site-nav" aria-label="Primary">
          {NAV.map(([label, href], i) => (
            <Link
              key={href}
              href={href}
              aria-current={!href.includes("#") && pathname === href ? "page" : undefined}
            >
              <span className="mono nav-idx">{String(i + 1).padStart(2, "0")}</span>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
