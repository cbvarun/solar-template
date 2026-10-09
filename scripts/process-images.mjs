#!/usr/bin/env node
/**
 * Crop, resize and compress photos for the site.
 *   npm run images -- path/to/manifest.json
 *
 * The manifest is a JSON array of jobs:
 *   [{ "in": "~/Photos/IMG_1234.HEIC", "out": "public/images/hero.webp", "slot": "hero", "position": "attention" }]
 *
 * slot      hero | service | project | gallery | og (sets the size, aspect ratio and file-size budget)
 * position  optional crop anchor: attention (default), entropy, centre, top, bottom, left, right
 *
 * The output format follows the extension of "out" (.webp, .jpg/.jpeg, .png).
 * Quality steps down until the file fits the slot's budget.
 */
import { mkdirSync, readFileSync, statSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, extname, isAbsolute, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.error("sharp is not installed. Run: npm install");
  process.exit(1);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Sizes match the aspect ratios the components render (see README "Images").
const SLOTS = {
  hero: { width: 1600, height: 1200, maxKb: 220 }, // 4:3
  service: { width: 1280, height: 800, maxKb: 160 }, // 16:10
  project: { width: 1440, height: 960, maxKb: 180 }, // 3:2
  gallery: { width: 960, height: 640, maxKb: 120 }, // 3:2, shown at half width
  og: { width: 1200, height: 630, maxKb: 300 }, // social preview, must be JPG or PNG
};
const POSITIONS = {
  attention: sharp.strategy.attention,
  entropy: sharp.strategy.entropy,
  centre: "centre",
  center: "centre",
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right",
};
const QUALITIES = [82, 76, 70, 64, 58, 52, 46];

const manifestPath = process.argv[2];
if (!manifestPath) {
  console.error("Usage: npm run images -- <manifest.json>");
  process.exit(1);
}

const expand = (p) => (p.startsWith("~/") ? join(homedir(), p.slice(2)) : p);
const fromRoot = (p) => (isAbsolute(expand(p)) ? expand(p) : resolve(root, p));

const jobs = JSON.parse(readFileSync(resolve(expand(manifestPath)), "utf8"));
let failed = 0;

for (const job of jobs) {
  const slot = SLOTS[job.slot];
  const position = POSITIONS[job.position ?? "attention"];
  const format = { ".webp": "webp", ".jpg": "jpeg", ".jpeg": "jpeg", ".png": "png" }[extname(job.out).toLowerCase()];

  if (!slot || !position || !format) {
    console.error(`✗ ${job.out}: unknown slot "${job.slot}", position "${job.position}" or output extension`);
    failed++;
    continue;
  }
  if (job.slot === "og" && format === "webp") {
    console.error(`✗ ${job.out}: the OG image must be .jpg or .png`);
    failed++;
    continue;
  }

  try {
    const input = fromRoot(job.in);
    // .rotate() applies the EXIF orientation from phone cameras before cropping.
    const meta = await sharp(input).rotate().metadata();
    const pipeline = sharp(input)
      .rotate()
      .resize(slot.width, slot.height, { fit: "cover", position })
      .withMetadata({ orientation: undefined });

    let buffer;
    let quality;
    for (quality of QUALITIES) {
      const p = pipeline.clone();
      if (format === "webp") p.webp({ quality, effort: 5 });
      else if (format === "jpeg") p.jpeg({ quality, mozjpeg: true, progressive: true });
      else p.png({ compressionLevel: 9, palette: true, quality });
      buffer = await p.toBuffer();
      if (buffer.length / 1024 <= slot.maxKb) break;
    }

    const out = fromRoot(job.out);
    mkdirSync(dirname(out), { recursive: true });
    await sharp(buffer).toFile(out);

    const kb = Math.round(statSync(out).size / 1024);
    const notes = [];
    const w = meta.autoOrient?.width ?? meta.width;
    const h = meta.autoOrient?.height ?? meta.height;
    if (w < slot.width || h < slot.height) notes.push(`upscaled from ${w}x${h}, may look soft`);
    if (kb > slot.maxKb) notes.push(`over the ${slot.maxKb} KB budget`);
    console.log(
      `${notes.length ? "!" : "✓"} ${job.out}  ${slot.width}x${slot.height}  ${kb} KB  q${quality}` +
        (notes.length ? `  (${notes.join("; ")})` : ""),
    );
  } catch (err) {
    console.error(`✗ ${job.out}: ${err.message}`);
    failed++;
  }
}

if (failed) process.exit(1);
