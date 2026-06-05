import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const replacements = {
  frodo: {
    portrait: "/v113/frodo-catalog-card.webp",
    wide: "/v113/frodo-catalog-wide.webp",
  },
  legolas: {
    portrait: "/v113/legolas-catalog-card.webp",
    wide: "/v113/legolas-catalog-wide.webp",
  },
};

const SEARCH_DIRS = ["app", "components", "lib", "data", "src"];
const SKIP_PARTS = ["node_modules", ".next", ".git", "dist", "build", ".netlify", "public/v113", "app/characters/frodo", "app/characters/legolas"];
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

function patchEntity(text, slug, nameRegex, assets) {
  const objectRegex = new RegExp(`{[^{}]*(?:slug\\s*:\\s*["']${slug}["']|id\\s*:\\s*["']${slug}["']|name\\s*:\\s*["']${nameRegex}["'])[^{}]*}`, "gis");
  return text.replace(objectRegex, (block) => {
    let b = block;
    b = b.replace(/(image|img|portrait|avatar|src|cardImage|thumbnail)\s*:\s*["'][^"']*["']/gi, (m, key) => `${key}: "${assets.portrait}"`);
    b = b.replace(/(cover|background|backgroundImage|heroImage)\s*:\s*["'][^"']*["']/gi, (m, key) => `${key}: "${assets.wide}"`);
    b = b.replace(/"(image|img|portrait|avatar|src|cardImage|thumbnail)"\s*:\s*"[^"]*"/gi, (m, key) => `"${key}": "${assets.portrait}"`);
    b = b.replace(/"(cover|background|backgroundImage|heroImage)"\s*:\s*"[^"]*"/gi, (m, key) => `"${key}": "${assets.wide}"`);
    return b;
  });
}

const files = SEARCH_DIRS.flatMap((dir) => walk(path.join(root, dir)));
let changedFiles = [];

for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  if (!/frodo|фродо|legolas|леголас/i.test(original)) continue;

  let current = original;
  current = patchEntity(current, "frodo", "Фродо|Frodo|Frodo Baggins|Фродо Бэггинс", replacements.frodo);
  current = patchEntity(current, "legolas", "Леголас|Legolas", replacements.legolas);

  current = current.replace(/(["'`])\/[^"'`]*(?:frodo|фродо)[^"'`]*\.(?:webp|png|jpg|jpeg)\1/gi, (m, q) => /\/v11\d\//.test(m) ? m : `${q}${replacements.frodo.portrait}${q}`);
  current = current.replace(/(["'`])\/[^"'`]*(?:legolas|леголас)[^"'`]*\.(?:webp|png|jpg|jpeg)\1/gi, (m, q) => /\/v11\d\//.test(m) ? m : `${q}${replacements.legolas.portrait}${q}`);

  if (current !== original) {
    fs.writeFileSync(file, current, "utf8");
    changedFiles.push(path.relative(root, file));
  }
}

console.log("v113/v114 complete.");
console.log("Updated pages:");
console.log("- app/characters/frodo/page.tsx");
console.log("- app/characters/legolas/page.tsx");
console.log("Changed catalog/data files:", changedFiles.length ? changedFiles.join(", ") : "none found automatically");
