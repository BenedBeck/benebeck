# benebeck.com

Portfolio site. Single static HTML file, no build step, no dependencies.

## Structure

- `index.html` — the entire site (styles, markup, script inline)
- `assets/` — put images here

## Local preview

Open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8000
```

## Deployment

Static file, deployable as-is to Netlify, GitHub Pages, Vercel, etc. — no
build command needed, publish directory is the project root.

## Editing

Placeholder content is in the About / Projects / Contact sections — swap
in real bio, project links, and contact details.
