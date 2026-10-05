import Link from "next/link";
import {
  profile,
  pillars,
  news,
  publications,
  education,
  experience,
  projects,
  skills,
  type Entry,
} from "@/data/profile";
import Authors from "@/components/Authors";

function Corners() {
  return (
    <span className="corners" aria-hidden>
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

function SectionHead({
  no,
  kicker,
  title,
  aside,
}: {
  no: string;
  kicker: string;
  title: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <div className="section-head">
      <span className="section-no" aria-hidden>
        {no}
      </span>
      <div>
        <p className="kicker mono">{kicker}</p>
        <h2>{title}</h2>
      </div>
      {aside && <div className="section-aside">{aside}</div>}
    </div>
  );
}

function TimelineItem({ e }: { e: Entry }) {
  return (
    <li className="tl-item">
      <div className="tl-when mono">
        <span>{e.period}</span>
        <span className="tag">{e.chip}</span>
      </div>
      <div className="tl-body">
        <h3>{e.title}</h3>
        <p>{e.org}</p>
        <p className="muted small">
          {e.location}
          {e.note && ` · ${e.note}`}
        </p>
        {e.bullets && (
          <ul>
            {e.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export default function Home() {
  const featured = publications.filter((p) => p.featured);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero" id="top">
        <div className="hero-floor" aria-hidden />
        <div className="hero-glow" aria-hidden />

        <div className="container hero-inner hero-split">
          <div className="hero-left">
            <h1 className="hero-name">
              Youngmin
              <br />
              Kim<span className="hero-dot">.</span>
            </h1>
            <p className="hero-role">
              M.S. Student, KAIST AI ·{" "}
              <a href={profile.labUrl} target="_blank" rel="noreferrer">
                BISPL
              </a>{" "}
              · Advisor: Prof. Jong Chul Ye
            </p>
            <p className="hero-text">{profile.heroText}</p>
            <div className="hero-actions">
              <a className="button button-light" href={profile.cv} target="_blank" rel="noreferrer">
                Download CV
              </a>
              <a className="button button-outline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="button button-outline" href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-portrait">
              <Corners />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={profile.photo} alt={profile.name} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest ───────────────────────────────────────────── */}
      <section className="section" id="latest">
        <div className="container">
          <SectionHead no="00" kicker="latest" title="What's new" />
          <ol className="news-list">
            {news.map((n, i) => (
              <li key={n.date + i} className={i === 0 ? "is-new" : undefined}>
                <time className="mono">{n.date}</time>
                <p>{n.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Background ───────────────────────────────────────── */}
      <section className="section section-dark" id="background">
        <div className="container">
          <SectionHead no="01" kicker="background" title="Where I come from, and what I care about." />
          <div className="background-grid">
            <div className="bio">
              {profile.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <dl className="skills mono">
                {skills.map((s) => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd>{s.items}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <ol className="pillars">
              {pillars.map((p, i) => (
                <li key={p.title}>
                  <Corners />
                  <span className="mono pillar-no">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Research ─────────────────────────────────────────── */}
      <section className="section" id="research">
        <div className="container">
          <SectionHead
            no="02"
            kicker="research"
            title="Selected papers"
            aside={
              <Link className="text-link mono" href="/publications/">
                all {publications.length} papers →
              </Link>
            }
          />
          <ol className="paper-grid">
            {featured.map((pub, i) => (
              <li className="paper-card" key={pub.title}>
                <div className="paper-figure">
                  <Corners />
                  {pub.figure && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={pub.figure.src} alt="" />
                  )}
                  <span className="mono paper-figure-label">
                    fig. {i + 1} — {pub.area.toLowerCase()}
                  </span>
                </div>
                <div className="paper-info">
                  <div className="paper-meta mono">
                    <span className="tag tag-accent">{pub.venueShort}</span>
                    <span className="muted">{pub.year}</span>
                  </div>
                  <h3>{pub.title}</h3>
                  <Authors pub={pub} />
                  <p>{pub.summary}</p>
                  <div className="paper-links mono">
                    {pub.links?.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-link">
                        {l.label.toLowerCase()} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section className="section section-tint" id="timeline">
        <div className="container timeline-grid">
          <SectionHead no="03" kicker="timeline" title={<>Education &amp; experience</>} />
          <div>
            <h3 className="tl-group mono">education</h3>
            <ol className="tl">
              {education.map((e) => (
                <TimelineItem e={e} key={e.period} />
              ))}
            </ol>
            <h3 className="tl-group mono">experience</h3>
            <ol className="tl">
              {experience.map((e) => (
                <TimelineItem e={e} key={e.period + e.title} />
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────── */}
      <section className="section" id="projects">
        <div className="container">
          <SectionHead
            no="04"
            kicker="projects"
            title="Things I've built"
            aside={
              <Link className="text-link mono" href="/projects/">
                all projects →
              </Link>
            }
          />
          <div className="project-bento">
            {featuredProjects.map((p) => (
              <article className="project-tile" key={p.title}>
                <Corners />
                <div className="project-tile-top mono">
                  <span className="tag">{p.area}</span>
                  <span className="muted">{p.period}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <div className="project-tile-foot mono">
                  <span className="muted">{p.org}</span>
                  {p.link && (
                    <a className="text-link" href={p.link.href} target="_blank" rel="noreferrer">
                      {p.link.label.toLowerCase()} ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get in touch ─────────────────────────────────────── */}
      <section className="section section-dark contact" id="contact">
        <div className="hero-floor hero-floor-flip" aria-hidden />
        <div className="container contact-inner">
          <p className="kicker mono">05 — get in touch</p>
          <h2>
            Let&apos;s talk about 3D vision,
            <br />
            video models, or robots.
          </h2>
          <div className="hero-actions">
            <a className="button button-light" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a className="button button-outline" href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
