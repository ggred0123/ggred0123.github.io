import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

// Change this if you attach a custom domain.
export const siteUrl = "https://ggred0123.github.io";

// Self-hosted at build time by next/font — the static export ships the font files.
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", weight: ["400", "600"] });

const description =
  "Youngmin Kim is an M.S. student at KAIST AI (BISPL, advised by Jong Chul Ye) working on 3D vision, generative modeling, robotics and medical imaging.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} | ${profile.role}`,
  description,
  openGraph: { title: profile.name, description, type: "profile", images: [profile.photo] },
  twitter: { card: "summary", title: profile.name, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The inline script below adds `js-reveal` to <html> before React
    // hydrates, so this element's attributes legitimately differ from the
    // server HTML. Scoped to this element only.
    <html lang="en" className={`${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <body>
        {/* Arms the scroll-reveal hidden state before first paint, and only
            when the viewer welcomes motion and the browser can observe. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches)" +
              "document.documentElement.classList.add('js-reveal')",
          }}
        />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <ScrollReveal />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        {profile.goatcounter && (
          <script
            data-goatcounter={`https://${profile.goatcounter}.goatcounter.com/count`}
            async
            src="https://gc.zgo.at/count.js"
          />
        )}
      </body>
    </html>
  );
}
