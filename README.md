# Ansil M B — Personal Profile

Personal portfolio for [ansilmbabl.github.io](https://ansilmbabl.github.io/).

The site is a static Astro website deployed to GitHub Pages. It presents selected AI/ML work, production engineering capabilities, writing, career context, and contact links. The Visa-related work is intentionally described at a sanitized, high level.

## Content workflow

- Add a public article under `src/content/writing/` as Markdown.
- Add a case study under `src/content/work/` as Markdown.
- Set `draft: true` while writing; drafts are excluded from the site build.
- Run `npm run dev` to preview locally.
- Push to `master` to trigger `.github/workflows/deploy.yml`.

## Local preview

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.
