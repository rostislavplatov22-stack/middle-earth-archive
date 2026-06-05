import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const TARGET_PORTRAIT = "/v101/sauron-catalog-card.webp";
const TARGET_WIDE = "/v101/sauron-catalog-wide.webp";

const SEARCH_DIRS = ["app", "components", "lib", "data", "src"];
const SKIP_PARTS = [
  "node_modules",
  ".next",
  ".git",
  "dist",
  "build",
  ".netlify",
  "public/v101",
  "app/characters/sauron",
  "components/v101-sauron-final-page.tsx",
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

    if (entry.isDirectory()) {
      walk(full, out);
    } else if (entry.isFile() && exts.has(path.extname(entry.name))) {
      out.push(full);
    }
  }

  return out;
}

function hasSauron(text) {
  return /sauron|саурон/i.test(text);
}

function replaceImageFieldsInSauronObject(text) {
  let changed = false;

  // Handles flat object records containing Sauron.
  const objectRegex = /{[^{}]*(?:slug\s*:\s*["']sauron["']|id\s*:\s*["']sauron["']|name\s*:\s*["']Саурон["']|name\s*:\s*["']Sauron["'])[^{}]*}/gis;

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

function replaceDirectSauronImagePaths(text) {
  let changed = false;
  let next = text;

  next = next.replace(/(["'`])\/[^"'`]*(?:sauron|саурон)[^"'`]*\.(?:webp|png|jpg|jpeg)\1/gi, (match, quote) => {
    // Do not touch final page image assets or old page components directly.
    if (/\/v9\d\/|\/v10\d\//.test(match)) {
      return match;
    }

    changed = true;
    return `${quote}${TARGET_PORTRAIT}${quote}`;
  });

  return { text: next, changed };
}

const files = SEARCH_DIRS.flatMap((dir) => walk(path.join(root, dir)));

let changedFiles = [];

for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  if (!hasSauron(original)) continue;

  let current = original;

  const objectResult = replaceImageFieldsInSauronObject(current);
  current = objectResult.text;

  const pathResult = replaceDirectSauronImagePaths(current);
  current = pathResult.text;

  if (current !== original) {
    fs.writeFileSync(file, current, "utf8");
    changedFiles.push(path.relative(root, file));
  }
}

console.log("v101 complete.");
console.log("Updated Sauron page: app/characters/sauron/page.tsx");
console.log("Catalog portrait:", TARGET_PORTRAIT);
console.log("Catalog wide:", TARGET_WIDE);
console.log("Changed catalog/data files:", changedFiles.length ? changedFiles.join(", ") : "none found automatically");
console.log("");
console.log("If the catalog card did not change, tell ChatGPT the file that contains the characters array, and it will patch it directly.");
