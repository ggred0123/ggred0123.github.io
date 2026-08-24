import {
  profile,
  news,
  publications,
  education,
  experience,
  ME,
  type Publication,
} from "@/data/profile";
import Interactions from "@/components/Interactions";
import ThemeToggle from "@/components/ThemeToggle";

const NAV = [
  ["About", "#about"],
  ["News", "#news"],
  ["Papers", "#publications"],
  ["Experience", "#experience"],
  ["Education", "#education"],
];

/* The dateline wants the lab's short name; take the acronym from the
   parenthetical if there is one. */
const labShort = profile.lab.match(/\(([^)]+)\)/)?.[1] ?? profile.lab;

function Sep() {
  return (
    <span className="sep" aria-hidden>
      ·
    </span>
  );
}

function Authors({ pub }: { pub: Publication }) {
  const eq = pub.equalContribution ?? [];
  return (
    <div className="pub-authors">
      {pub.authors.map((a, i) => (
        <span key={a}>
          <span className={a === ME ? "me" : undefined}>{a}</span>
          {eq.includes(a) && <sup>*</sup>}
          {i < pub.authors.length - 1 && ", "}
        </span>
      ))}
    </div>
  );
}

function SectionTitle({ no, children }: { no: string; children: string }) {
  return (
    <h2 className="section-title">
      <span className="section-no" aria-hidden>
        {no}
      </span>
      {children}
    </h2>
  );
}

function EntryList({ items }: { items: typeof experience }) {
  return (
    <div className="entries">
      {items.map((e) => (
        <div className="entry" key={e.period + e.org}>
          <div className="entry-period">{e.period}</div>
          <div className="entry-body">
            <div className="entry-title">{e.title}</div>
            <div className="entry-sub">
              {e.org} · {e.location}
            </div>
            {e.note && <div className="entry-note">{e.note}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const anyEqual = publications.some((p) => p.equalContribution?.length);

  return (
    <>
      <Interactions />

      {/* fixed backdrop carrying the cursor light */}
      <div className="atmosphere" aria-hidden>
        <div className="cursor-glow" />
      </div>

      <nav className="nav">
        <div className="nav-inner">
          <a className="nav-name" href="#top">
            {profile.name}
          </a>
          {NAV.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <ThemeToggle />
        </div>
        <div className="nav-progress" aria-hidden />
      </nav>

      <main className="wrap" id="top">
        {/* ---------- masthead ---------- */}
        <header className="masthead">
          <p className="mast-kicker">{profile.affiliation}</p>
          <h1 className="mast-name">{profile.name}</h1>

          <div className="mast-dateline">
            <span>{profile.role}</span>
            <Sep />
            <a
              className="lab-link"
              href={profile.labUrl}
              target="_blank"
              rel="noreferrer"
              title={profile.lab}
            >
              {labShort}
            </a>
            <Sep />
            <span>Advised by Prof. {profile.advisor}</span>
          </div>

          <div className="mast-links">
            <a href={"mailto:" + profile.email}>Email</a>
            <Sep />
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            {profile.scholar && (
              <>
                <Sep />
                <a href={profile.scholar} target="_blank" rel="noreferrer">
                  Scholar
                </a>
              </>
            )}
            {profile.linkedin && (
              <>
                <Sep />
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </>
            )}
            <Sep />
            <a href={profile.cv}>CV (PDF)</a>
          </div>
        </header>

        {/* ---------- about ---------- */}
        <section className="section" id="about">
          <SectionTitle no="01">About</SectionTitle>
          <figure className="about-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="about-photo"
              src={profile.photo}
              alt={profile.name}
              width={425}
              height={567}
            />
            <figcaption className="about-caption">
              {profile.location}
            </figcaption>
          </figure>
          {profile.bio.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
          <p className="interests">
            <span className="interests-label">Interests</span>
            {profile.interests.join(" · ")}
          </p>
        </section>

        {/* ---------- news ---------- */}
        <section className="section" id="news">
          <SectionTitle no="02">News</SectionTitle>
          <ul className="news">
            {news.map((n) => (
              <li key={n.date + n.body.slice(0, 16)}>
                <span className="news-date">{n.date}</span>
                <span>{n.body}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- publications ---------- */}
        <section className="section" id="publications">
          <SectionTitle no="03">Publications</SectionTitle>
          <ol className="pubs">
            {publications.map((p) => (
              <li className="pub" key={p.title}>
                <div className="pub-fig">
                  {p.figure &&
                    (p.links?.[0] ? (
                      // convenience click target only — the labelled arXiv link
                      // below is the one keyboard and screen-reader users get,
                      // so this duplicate is kept out of the tab order
                      <a
                        href={p.links[0].href}
                        target="_blank"
                        rel="noreferrer"
                        tabIndex={-1}
                        aria-hidden
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.figure.src}
                          alt=""
                          width={p.figure.width}
                          height={p.figure.height}
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.figure.src}
                        alt=""
                        width={p.figure.width}
                        height={p.figure.height}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                </div>
                <div className="pub-body">
                  <div className="pub-title">{p.title}</div>
                  <Authors pub={p} />
                  <div className="pub-venue">
                    <em>{p.venue}</em>, {p.year}
                  </div>
                  {p.links && p.links.length > 0 && (
                    <div className="pub-links">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
          {anyEqual && (
            <p className="footnote">
              <sup>*</sup> These authors contributed equally.
            </p>
          )}
        </section>

        {/* ---------- experience ---------- */}
        <section className="section" id="experience">
          <SectionTitle no="04">Research Experience</SectionTitle>
          <EntryList items={experience} />
        </section>

        {/* ---------- education ---------- */}
        <section className="section" id="education">
          <SectionTitle no="05">Education</SectionTitle>
          <EntryList items={education} />
        </section>

        {/* ---------- colophon ---------- */}
        <footer className="footer">
          <div className="footer-orn" aria-hidden>
            · · ·
          </div>
          <p className="footer-line">
            © {profile.name} · {profile.location}
          </p>
          <p className="footer-colophon">
            Set in Newsreader · Built with Next.js · Hosted on GitHub Pages
          </p>
        </footer>
      </main>
    </>
  );
}
