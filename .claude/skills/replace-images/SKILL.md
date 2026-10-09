---
name: replace-images
description: Replace the site's placeholder SVG images (hero, services, projects, project galleries, OG image) with real photos the user supplies. Use when the user says "replace images", "add my photos", "use these pictures", or points at a folder of site photos.
argument-hint: <folder or files with photos>
---

# Replace placeholder images with real photos

The user supplies photos (a folder, or a list of files) via $ARGUMENTS or in chat. You map each photo to a slot on the site, process them with `npm run images`, update the content files, and verify the build.

## Slots

| Slot | Where it shows | Output path | Size | Referenced in |
|---|---|---|---|---|
| `hero` | Homepage hero | `public/images/hero.webp` | 1600x1200 (4:3) | `src/config/site.config.ts`, `home.hero.image` |
| `service` | Service card + service page, one per service | `public/images/services/<service-slug>.webp` | 1280x800 (16:10) | `src/content/services.ts`, each service's `image` |
| `project` | Project card + top of project page | `public/images/projects/<project-slug>/main.webp` | 1440x960 (3:2) | `src/content/projects.ts`, each project's `image` |
| `gallery` | Grid on the project page | `public/images/projects/<project-slug>/<n>.webp` | 960x640 (3:2) | `src/content/projects.ts`, each project's `gallery` |
| `og` | Social share preview (optional) | `public/brand/og-default.jpg` | 1200x630, **JPG only** | Already referenced. Only replace if the user asks; the current one is their branded image |

Read the current slugs from `src/content/services.ts` and `src/content/projects.ts` rather than assuming them.

Only edit `src/content/*` and `src/config/site.config.ts`. **Never edit `src/config/examples/`**: those are other companies' example configs, and they still point at the placeholder SVGs.

## Workflow

### 1. Collect and look at the photos

- List the supplied files (jpg, jpeg, png, webp, heic, heif, tif). Folder or filenames may hint at the slot, e.g. `hero/`, `services/cleaning.jpg`, `projects/jp-nagar/`. Use those hints when they're there.
- **HEIC/HEIF (iPhone) photos:** sharp can't read them. Convert each one into the scratchpad first:
  `sips -s format jpeg -s formatOptions 95 <in.heic> --out <scratchpad>/<name>.jpg`
- **Look at every photo** with the Read tool. Do this even with hints, because you need what you see to choose slots, pick crop anchors and write alt text. For large batches, read them in parallel.

### 2. Propose a mapping and confirm it

Show the user a table: photo → slot → output path → crop anchor → proposed alt text. Then:

- Match by content: a terrace install → residential service or a residential project; cleaning crew → cleaning & maintenance; a meter / paperwork → net metering; an inspection with a clipboard or drone → site survey; a large sheet roof → commercial / factory.
- Pick the hero as the strongest wide, bright, landscape shot of a finished install.
- A photo can fill more than one slot (e.g. a project's main image can also be its first gallery photo).
- **Crop anchor** (`position`): `attention` by default. Use `top` / `bottom` / `left` / `right` when the subject sits near an edge, so the panels don't get cut. Watch portrait photos: a 3:2 or 16:10 crop keeps only the middle band.
- **Alt text:** describe what's actually in the photo, specific and short. Include size and location if you know them, e.g. "5 kW panels on a terrace in Whitefield". Don't start with "Image of", and don't stuff it with keywords.
- Flag problems: photos under ~1000px wide (they'll look soft), blurry or dark shots, visible faces or house numbers of private customers (ask if they have consent), watermarks or stock photos they may not have rights to.
- List any slots left without a photo. Those keep their SVG placeholder.

Ask the user to confirm or correct the table with AskUserQuestion or a plain question. **Don't process anything until they confirm.**

### 3. Process

Write the confirmed mapping as a manifest in the scratchpad:

```json
[
  { "in": "/abs/path/IMG_0012.jpg", "out": "public/images/hero.webp", "slot": "hero", "position": "attention" },
  { "in": "/abs/path/IMG_0040.jpg", "out": "public/images/projects/3kw-home-system-jp-nagar/main.webp", "slot": "project" }
]
```

Run `npm run images -- <manifest.json>`. The script corrects phone rotation, crops to the slot's aspect ratio, resizes, and steps the quality down until the file fits the slot's KB budget. Read its output:
- `✓`: fine.
- `!`: upscaled or over budget. Tell the user. If a key slot (hero, a service) is upscaled, suggest a higher-resolution photo.
- `✗`: failed. Fix it (wrong path, unsupported format) and rerun just those jobs.

Then Read a few outputs, at least the hero and anything with a non-default anchor, to check the crop didn't cut off the subject. If it did, change `position` and rerun that job.

### 4. Update the content

Edit the `src` and `alt` of each replaced slot:
- **Hero:** `home.hero.image` in `src/config/site.config.ts`.
- **Services:** the `image` of each service in `src/content/services.ts`. Service text uses `{{tokens}}`; leave those alone.
- **Projects:** `image` and `gallery` in `src/content/projects.ts`. The gallery only renders when it has **2 or more** photos, so put all of that project's photos in it, the main one included. If a project now uses real photos but its other fields are still `[placeholder]` text, remind the user it stays marked `isSample: true` until they fill in the real details. Don't flip it yourself.

### 5. Clean up and verify

- Find the placeholder SVGs nothing points to any more: `grep -rn "<svg path>" src`. Delete an SVG only if nothing in `src/` references it, the `examples/` folder included. Most will still be referenced by the example configs, so they usually stay. That's fine: they're small and not deployed to visitors' pages.
- Run `npm run typecheck` and `npm run build`. Both must pass.
- Confirm every new image path resolves: for each `src` you set, check the file exists under `public/` and in `out/` after the build.
- Optional: start the dev server (`npm run dev`), then use the browser pane to check the homepage, `/services/` and one project page.

### 6. Report

Tell the user: how many images were replaced and in which slots, total size before and after, any warnings (soft or over budget), which slots still have placeholders, and any projects still marked as samples. Don't commit unless they ask.
