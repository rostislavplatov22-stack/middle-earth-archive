const base = (process.argv[2] || "").replace(/\/$/, "");
if (!base) {
  console.error("Usage: node scripts/v76_4-live-header-check.mjs https://your-site.netlify.app");
  process.exit(1);
}
const paths = ["/", "/catalog", "/characters/galadriel", "/artifacts/the-one-ring"];
const required = ["content-security-policy", "x-frame-options", "x-content-type-options", "referrer-policy", "permissions-policy", "strict-transport-security"];
let high = 0;
for (const path of paths) {
  const res = await fetch(base + path, { redirect: "manual" });
  console.log(`\n${path} -> ${res.status}`);
  for (const key of required) {
    const value = res.headers.get(key);
    if (!value) {
      high++;
      console.log(`  HIGH missing: ${key}`);
    } else {
      console.log(`  OK ${key}`);
    }
  }
  const csp = res.headers.get("content-security-policy") || "";
  const xfo = res.headers.get("x-frame-options") || "";
  if (csp && !/frame-ancestors\s+'?none'?/i.test(csp)) {
    high++;
    console.log("  HIGH: CSP exists but frame-ancestors none is missing");
  }
  if (xfo && xfo.toUpperCase() !== "DENY") {
    high++;
    console.log("  HIGH: X-Frame-Options is not DENY");
  }
}
console.log(`\nRESULT: ${high === 0 ? "PASS" : "FAIL"}`);
console.log(`high: ${high}`);
process.exit(high === 0 ? 0 : 1);
