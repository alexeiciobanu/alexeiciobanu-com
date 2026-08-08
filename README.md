# alexeiciobanu.com

Personal one-pager. Static site, no build step, hosted on GitHub Pages.

Currently live on Squarespace — DNS will be repointed here once this is verified.

## Files
- `index.html` — homepage. Hero, about, experience, notable/speaking, expertise, field notes preview, background, contact.
- `notes.html` — full field notes archive.
- `notes-data.js` — single source of truth for field note metadata (id, date, topic, excerpt). Add new notes at the top of the array.
- `notes/*.html` — one page per field note, sharing `notes/note.css`.
- `AlexeiCiobanu.jpg` — hero photo.
- `og-image.png` — social share card (1200×630).

## Adding a new field note
1. Add an entry to the top of `FIELD_NOTES` in `notes-data.js` (id, date, topic, excerpt).
2. Create `notes/<id>.html` from an existing note as a template, using `notes/note.css`.
3. Homepage and `notes.html` pick it up automatically — no other changes needed.

## Design tokens
```
--bg: #ffffff        --serif: 'Cormorant Garamond', Georgia, serif  (display)
--fg: #1c2630         --sans: 'DM Sans', system-ui, sans-serif        (body/UI)
--navy: #152238
--muted: #647285
```
No component library, no CSS framework — plain CSS in a `<style>` block per file.

## Going live
Repoint DNS from Squarespace to GitHub Pages once the content and copy are final.

## Open items
- Speaking list currently ends in 2024 — update if newer talks exist.
- A print-optimized variant (`index-print.html`) was part of the original design handoff but was out of sync with this content and dropped for now. Regenerate from `index.html` if a print/PDF version is wanted later.
