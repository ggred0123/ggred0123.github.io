import type { Metadata } from "next";
import { publications, profile } from "@/data/profile";
import Authors from "@/components/Authors";

export const metadata: Metadata = { title: `Publications | ${profile.name}` };

export default function PublicationsPage() {
  const years = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b.localeCompare(a));

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-kicker">Research</p>
          <h1>All papers</h1>
          <p className="hero-text narrow-text">
            {publications.length} papers and preprints. * denotes equal contribution.
          </p>
        </div>
      </section>

      <section className="section no-top-gap">
        <div className="narrow-container">
          {years.map((year) => {
            const items = publications.filter((p) => p.year === year);
            return (
              <div className="year-group" key={year}>
                <div className="year-header">
                  <h2>{year}</h2>
                  <span>
                    {items.length} {items.length === 1 ? "paper" : "papers"}
                  </span>
                </div>
                <div className="paper-stack">
                  {items.map((pub) => (
                    <article className="card paper-card list-layout" key={pub.title}>
                      <div className="paper-info">
                        <div className="paper-meta">
                          <span className="chip chip-accent">{pub.venueShort}</span>
                          <span className="chip chip-soft">{pub.area}</span>
                        </div>
                        <h3>{pub.title}</h3>
                        <Authors pub={pub} />
                        <p className="muted">{pub.venue}</p>
                        <p>{pub.summary}</p>
                        <div className="tag-list">
                          {pub.tags.map((t) => (
                            <span key={t}>{t}</span>
                          ))}
                        </div>
                        {pub.links && (
                          <div className="inline-links" style={{ marginTop: "1rem" }}>
                            {pub.links.map((l) => (
                              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                                {l.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                      {pub.figure && (
                        <div className="paper-image-col">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={pub.figure.src}
                            alt=""
                            className="paper-thumb"
                            width={pub.figure.width}
                            height={pub.figure.height}
                          />
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
