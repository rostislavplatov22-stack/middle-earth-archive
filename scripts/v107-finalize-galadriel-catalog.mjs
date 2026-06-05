import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const TARGET_PORTRAIT = "/v107/galadriel-catalog-card.webp";
const TARGET_WIDE = "/v107/galadriel-catalog-wide.webp";

const SEARCH_DIRS = ["app", "components", "lib", "data", "src"];
const SKIP_PARTS = [
  "node_modules",
  ".next",
  ".git",
  "dist",
  "build",
  ".netlify",
  "public/v107",
  "app/characters/galadriel",
  "components/v107-galadriel-full-elven-royal-page.tsx",
];

const exts = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".mjs", ".cjs"]);

function shouldSkip(file) {
  const normalized = file.replaceAll("\\", "/");
  return SKIP_PARTS.some((part) => normalized.includes(part));
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (shouldSkip(full)) continue;

    if (entry.isDirectory()) walk(full, out);
    else if (entry.isFile() && exts.has(path.extname(entry.name))) out.push(full);
  }

  return out;
}

function hasGaladriel(text) {
  return /galadriel|галадриэль|галадриел/i.test(text);
}

function replaceImageFieldsInGaladrielObject(text) {
  const objectRegex = /{[^{}]*(?:slug\s*:\s*["']galadriel["']|id\s*:\s*["']galadriel["']|name\s*:\s*["']Галадриэль["']|name\s*:\s*["']Galadriel["'])[^{}]*}/gis;

  return text.replace(objectRegex, (block) => {
    let b = block;

    b = b.replace(/(image|img|cover|portrait|avatar|src|background|backgroundImage|cardImage|heroImage|thumbnail)\s*:\s*["'][^"']*["']/gi, (m, key) => {
      const lower = String(key).toLowerCase();
      const target = /cover|background|hero|wide/.test(lower) ? TARGET_WIDE : TARGET_PORTRAIT;
      return `${key}: "${target}"`;
    });

    b = b.replace(/"(image|img|cover|portrait|avatar|src|background|backgroundImage|cardImage|heroImage|thumbnail)"\s*:\s*"[^"]*"/gi, (m, key) => {
      const lower = String(key).toLowerCase();
      const target = /cover|background|hero|wide/.test(lower) ? TARGET_WIDE : TARGET_PORTRAIT;
      return `"${key}": "${target}"`;
    });

    return b;
  });
}

function replaceDirectGaladrielImagePaths(text) {
  return text.replace(/(["'`])\/[^"'`]*(?:galadriel|галадриэль|галадриел)[^"'`]*\.(?:webp|png|jpg|jpeg)\1/gi, (match, quote) => {
    if (/\/v10\d\//.test(match)) return match;
    return `${quote}${TARGET_PORTRAIT}${quote}`;
  });
}

const files = SEARCH_DIRS.flatMap((dir) => walk(path.join(root, dir)));
let changedFiles = [];

for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  if (!hasGaladriel(original)) continue;

  let current = original;
  current = replaceImageFieldsInGaladrielObject(current);
  current = replaceDirectGaladrielImagePaths(current);

  if (current !== original) {
    fs.writeFileSync(file, current, "utf8");
    changedFiles.push(path.relative(root, file));
  }
}

console.log("v107 complete.");
console.log("Updated Galadriel page: app/characters/galadriel/page.tsx");
console.log("Catalog portrait:", TARGET_PORTRAIT);
console.log("Catalog wide:", TARGET_WIDE);
console.log("Changed catalog/data files:", changedFiles.length ? changedFiles.join(", ") : "none found automatically");
