import { profile } from "@/data/profile";
import VisitorCount from "./VisitorCount";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="mono muted">
            © {new Date().getFullYear()} · {profile.location} · built for GitHub Pages
          </p>
          <VisitorCount />
        </div>
        <div className="inline-links mono">
          <a href={`mailto:${profile.email}`}>email</a>
          {profile.scholar && (
            <a href={profile.scholar} target="_blank" rel="noreferrer">
              scholar
            </a>
          )}
          <a href={profile.github} target="_blank" rel="noreferrer">
            github
          </a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              linkedin
            </a>
          )}
          <a href={profile.cv} target="_blank" rel="noreferrer">
            cv.pdf
          </a>
        </div>
      </div>
    </footer>
  );
}
