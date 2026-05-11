# FEMH Prospectus

A funder-facing prospectus of evolution-informed mental health research, education, and clinical projects, published by the **Foundation for Evolution and Mental Health** (FEMH).

Live: <https://prospectus.femh.foundation>
Foundation: <https://femh.foundation>
Companion report: <https://beforeevolution.femh.foundation>
UK Registered Charity No. 1211344

## Layout

```
index.html             ← single-page prospectus (15 project-focussed + 3 person-focussed funding programmes)
styles.css             ← FEMH design system (Forest #0F4A44, Cream #F7F4EC, Source Serif 4 + Inter)
print.css              ← @media print rules (A4 + Letter compatible)
app.js                 ← sticky nav, menu overlay, filter chips, hash-shareable filters
assets/
  ├── logo/            ← FEMH lockup + transparent symbol variants
  └── photos/          ← imagery used by hero / cards
_headers               ← Cloudflare Pages edge headers (caching, security)
```

## Editing

All copy lives in `index.html`. Open in any browser, or run a local server for proper relative-URL resolution:

```
python -m http.server 8765
```

Then visit <http://localhost:8765/>.

## Deployment

Pushes to `main` are served by **Cloudflare Pages** at `prospectus.femh.foundation`. The build is static — Cloudflare serves the files as-is. No build step.
