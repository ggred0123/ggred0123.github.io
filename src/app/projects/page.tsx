import type { Metadata } from "next";
import { projects, awards, skills, profile } from "@/data/profile";

export const metadata: Metadata = { title: `Projects | ${profile.name}` };

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-kicker">Projects</p>
          <h1>Things I&apos;ve built</h1>
          <p className="hero-text narrow-text">
            From camera-controlled video generation and MRI enhancement to Kubernetes benchmarks and campus apps.
          </p>
        </div>
      </section>

      <section className="section no-top-gap">
        <div className="container">
          <div className="project-grid">
            {projects.map((p) => (
              <article className="card project-card" key={p.title}>
                <div className="project-top">
                  <span className="muted">{p.period}</span>
                  <span className="chip chip-soft">{p.area}</span>
                </div>
                <h3 style={{ marginTop: "0.9rem" }}>{p.title}</h3>
                <p className="muted">{p.org}</p>
                <p>{p.body}</p>
                {p.link && (
                  <a className="text-link" href={p.link.href} target="_blank" rel="noreferrer">
                    {p.link.label}
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-column-layout">
          <div>
            <div className="section-head compact-head">
              <div>
                <p className="section-kicker">Awards</p>
                <h2>Honors</h2>
              </div>
            </div>
            <div className="stack-list">
              {awards.map((a) => (
                <article className="card recognition-card" key={a.title}>
                  <div className="timeline-top">
                    <span>{a.date}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p className="muted">{a.org}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <div className="section-head compact-head">
              <div>
                <p className="section-kicker">Skills</p>
                <h2>Technical stack</h2>
              </div>
            </div>
            <article className="card">
              <div className="profile-grid">
                {skills.map((s) => (
                  <div key={s.label}>
                    <span className="label">{s.label}</span>
                    <strong>{s.items}</strong>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
