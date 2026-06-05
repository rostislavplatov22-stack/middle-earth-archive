import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const TARGET_PORTRAIT = "/v105/gandalf-catalog-card.webp";
const TARGET_WIDE = "/v105/gandalf-catalog-wide.webp";

const SEARCH_DIRS = ["app", "components", "lib", "data", "src"];
const SKIP_PARTS = [
  "node_modules",
  ".next",
  ".git",
  "dist",
  "build",
  ".netlify",
  "public/v105",
  "app/characters/gandalf",
  "components/v105-gandalf-light-premium-page.tsx",
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

function hasGandalf(text) {
  return /gandalf|гэндальф|гандальф/i.test(text);
}

function replaceImageFieldsInGandalfObject(text) {
  let changed = false;

  const objectRegex = /{[^{}]*(?:slug\s*:\s*["']gandalf["']|id\s*:\s*["']gandalf["']|name\s*:\s*["']Гэндальф["']|name\s*:\s*["']Гандальф["']|name\s*:\s*["']Gandalf["'])[^{}]*}/gis;

  const next = text.replace(objectRegex, (block) => {
    let b = block;
    const before = b;

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

    if (b !== before) changed = true;
    return b;
  });

  return { text: next, changed };
}

function replaceDirectGandalfImagePaths(text) {
  let changed = false;
  let next = text;

  next = next.replace(/(["'`])\/[^"'`]*(?:gandalf|гэндальф|гандальф)[^"'`]*\.(?:webp|png|jpg|jpeg)\1/gi, (match, quote) => {
    if (/\/v10\d\//.test(match)) return match;
    changed = true;
    return `${quote}${TARGET_PORTRAIT}${quote}`;
  });

  return { text: next, changed };
}

const files = SEARCH_DIRS.flatMap((dir) => walk(path.join(root, dir)));
let changedFiles = [];

for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  if (!hasGandalf(original)) continue;

  let current = original;
  current = replaceImageFieldsInGandalfObject(current).text;
  current = replaceDirectGandalfImagePaths(current).text;

  if (current !== original) {
    fs.writeFileSync(file, current, "utf8");
    changedFiles.push(path.relative(root, file));
  }
}

console.log("v105 complete.");
console.log("Updated Gandalf page: app/characters/gandalf/page.tsx");
console.log("Catalog portrait:", TARGET_PORTRAIT);
console.log("Catalog wide:", TARGET_WIDE);
console.log("Changed catalog/data files:", changedFiles.length ? changedFiles.join(", ") : "none found automatically");
