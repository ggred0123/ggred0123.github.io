# Personal homepage (v2)

Static Next.js site modeled on the layout of https://2na-97.github.io — top nav, hero with
profile card + "Recent Highlights" sticky notes, About pillars, selected publication cards,
Education / Experience timeline, Projects, Contact — plus `/publications/` and `/projects/` pages.

All content lives in `src/data/profile.ts` (mirrors `../main.tex`). Edit that file, nothing else.

```bash
export PATH="/opt/homebrew/bin:$PATH"
npm install
npm run dev     # http://localhost:3000
npm run build   # static export -> ./out
```

Deploy: push to `main` of a GitHub Pages repo; `.github/workflows/deploy.yml` builds `./out`.
