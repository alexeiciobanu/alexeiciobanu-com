# alexeiciobanu.com

Personal one-pager. Static site, no build step, hosted on GitHub Pages.

Live at alexeiciobanu.com (DNS repointed from Squarespace, HTTPS enforced).

## Files
- `index.html` — homepage. Hero, about, expertise, experience, notable/speaking, field notes preview, contact.
- `notes.html` — full field notes archive.
- `notes-data.js` — reference copy of field note metadata (id, date, topic, excerpt). Not loaded by either page anymore (see below) — kept as a convenient single place to look up existing notes when authoring a new one.
- `notes/*.html` — one page per field note, sharing `notes/note.css`.
- `AlexeiCiobanu.jpg` — hero photo.
- `og-image.png` — social share card (1200×630).

## Adding a new field note
The homepage preview (top 3) and the full list on `notes.html` are hand-authored static HTML, not rendered from `notes-data.js` — this was a deliberate fix: the old JS-rendered version returned empty content to crawlers, LinkedIn's preview bot, and anyone with JS off, since the note text only existed inside a `<script>` block. Static markup means one more manual step per note, but the content actually exists in the page source.

1. Create `notes/<id>.html` from an existing note as a template, using `notes/note.css`.
2. Add the same entry to the top of `FIELD_NOTES` in `notes-data.js`, so it stays an accurate reference.
3. Hand-add a matching `.note-item` block to `notes.html`'s `#notes-full` list.
4. If it's one of the 3 most recent, also add/update the `.note-item` blocks in `index.html`'s `#notes-preview` (and drop the oldest if there are now more than 3 there).

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
- A print-optimized variant (`index-print.html`) was part of the original design handoff but was out of sync with this content and dropped for now. Regenerate from `index.html` if a print/PDF version is wanted later.
- The Background section (Education + Recognition) was removed from `index.html` in a recent design update — confirm that was intentional.
