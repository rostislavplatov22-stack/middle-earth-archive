import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const SEARCH_DIRS = ["app", "components", "lib", "data", "src"];
const SKIP_PARTS = [
  "node_modules",
  ".next",
  ".git",
  "dist",
  "build",
  ".netlify",
  "public/v100",
  "app/characters/sauron",
  "components/v99",
  "components/v98",
  "components/v97",
  "components/v96",
];

const TARGET_PORTRAIT = "/v100/sauron-catalog-card.webp";
const TARGET_WIDE = "/v100/sauron-catalog-wide.webp";

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

function hasSauronContext(text) {
  return /sauron|саурон/i.test(text);
}

function replaceInsideSauronBlocks(text) {
  let changed = false;

  // Object-like blocks containing slug/name Sauron.
  const objectRegex = /{[^{}]*(?:slug\s*:\s*["']sauron["']|name\s*:\s*["']Саурон["']|name\s*:\s*["']Sauron["'])[^{}]*}/gis;

  const next = text.replace(objectRegex, (block) => {
    let b = block;
    const before = b;

    // Replace common image fields only inside Sauron object.
    b = b.replace(/(image|img|cover|portrait|avatar|src|background|backgroundImage|cardImage|heroImage)\s*:\s*["'][^"']*["']/gi, (m, key) => {
      const lower = String(key).toLowerCase();
      const target = /cover|background|hero|wide/.test(lower) ? TARGET_WIDE : TARGET_PORTRAIT;
      return `${key}: "${target}"`;
    });

    // JSON field style.
    b = b.replace(/"(image|img|cover|portrait|avatar|src|background|backgroundImage|cardImage|heroImage)"\s*:\s*"[^"]*"/gi, (m, key) => {
      const lower = String(key).toLowerCase();
      const target = /cover|background|hero|wide/.test(lower) ? TARGET_WIDE : TARGET_PORTRAIT;
      return `"${key}": "${target}"`;
    });

    if (b !== before) changed = true;
    return b;
  });

  return { text: next, changed };
}

function replaceDirectSauronPaths(text) {
  let changed = false;
  let next = text;

  // Replace path strings containing sauron only, but do not touch the dedicated Sauron page assets.
  next = next.replace(/(["'`])\/[^"'`]*sauron[^"'`]*\.(?:webp|png|jpg|jpeg)\1/gi, (m, quote) => {
    if (m.includes("/v99/") || m.includes("/v98/") || m.includes("/v97/") || m.includes("/v96/") || m.includes("/v100/")) return m;
    changed = true;
    return `${quote}${TARGET_PORTRAIT}${quote}`;
  });

  next = next.replace(/(["'`])\/[^"'`]*саурон[^"'`]*\.(?:webp|png|jpg|jpeg)\1/gi, (m, quote) => {
    if (m.includes("/v99/") || m.includes("/v98/") || m.includes("/v97/") || m.includes("/v96/") || m.includes("/v100/")) return m;
    changed = true;
    return `${quote}${TARGET_PORTRAIT}${quote}`;
  });

  return { text: next, changed };
}

const files = SEARCH_DIRS.flatMap((dir) => walk(path.join(root, dir)));

let changedFiles = [];

for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  if (!hasSauronContext(original)) continue;

  let current = original;

  const blockResult = replaceInsideSauronBlocks(current);
  current = blockResult.text;

  const pathResult = replaceDirectSauronPaths(current);
  current = pathResult.text;

  if (current !== original) {
    fs.writeFileSync(file, current, "utf8");
    changedFiles.push(path.relative(root, file));
  }
}

console.log("v100 Sauron catalog image update finished.");
console.log("Changed files:", changedFiles.length ? changedFiles.join(", ") : "none");
console.log("Catalog portrait:", TARGET_PORTRAIT);
console.log("Catalog wide:", TARGET_WIDE);
