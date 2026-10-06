#!/usr/bin/env node
/**
 * Switch the active company to one of the folders in src/config/examples/.
 *   npm run use-company -- greenworld
 *   npm run use-company -- smartsol
 *
 * Copies <company>/site.config.ts, locations.ts, projects.ts, testimonials.ts and logo.svg
 * over the active files, and fixes the import paths in site.config.ts.
 */
import { cpSync, existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const examples = join(root, "src/config/examples");
const name = process.argv[2];

if (!name || !existsSync(join(examples, name))) {
  const available = readdirSync(examples, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .join(", ");
  console.error(`Usage: npm run use-company -- <name>\nAvailable: ${available}`);
  process.exit(1);
}

const from = join(examples, name);

const config = readFileSync(join(from, "site.config.ts"), "utf8")
  .replaceAll('"../../site.schema"', '"./site.schema"')
  .replaceAll('"../../defaults"', '"./defaults"');
writeFileSync(join(root, "src/config/site.config.ts"), config);

for (const file of ["locations.ts", "projects.ts", "testimonials.ts"]) {
  cpSync(join(from, file), join(root, "src/content", file));
}
if (existsSync(join(from, "logo.svg"))) {
  cpSync(join(from, "logo.svg"), join(root, "public/brand/logo.svg"));
}

console.log(`Active company is now "${name}". Restart "npm run dev" if it is running.`);
