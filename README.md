# Ansil M B — Personal Profile

Personal portfolio for [ansilmbabl.github.io](https://ansilmbabl.github.io/).

The site is a static Astro website deployed to GitHub Pages. It is designed as a living AI field lab: a personal profile, technical portfolio, research notebook, and playground for experiments. The Visa-related work is intentionally described at a sanitized, high level.

## Content workflow

- Add a public article under `src/content/writing/` as Markdown.
- Add a research note or AI catchup under `src/content/catchups/` as Markdown.
- Add a case study under `src/content/work/` as Markdown.
- Add a personal project under `src/content/projects/` as Markdown.
- Add a playground idea or demo under `src/content/playground/` as Markdown.
- Update the homepage identity under `src/content/profile/identity.md`.
- Add or update a role under `src/content/career/` as Markdown.
- Add or update an education entry under `src/content/education/` as Markdown.
- Set `draft: true` on a career or education entry to keep it in the repository without displaying it publicly.
- Set `draft: true` while writing; drafts are excluded from the site build.
- Run `npm run dev` to preview locally.
- Push to `master` to trigger `.github/workflows/deploy.yml`.

## Main sections

- `/work/` — professional projects and company case studies.
- `/projects/` — independent and personal projects.
- `/notes/` — writing and AI catchups in one chronological stream.
- `/playground/` — interactive demos and experiments, starting with planned entries.
- `/about/` — career and education history.
- `/now/` — the current focus, maintained separately from the resume.

## Local preview

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.
