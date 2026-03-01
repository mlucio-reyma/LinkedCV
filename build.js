/**
 * Build script — run by Cloudflare Pages before each deployment.
 * Injects the commit SHA into sw.js and index.html so the Service Worker
 * cache and asset query strings are automatically versioned on every deploy.
 *
 * Cloudflare Pages build command: node build.js
 * Output directory: /  (repository root)
 */

const fs = require("fs");

const sha = process.env.CF_PAGES_COMMIT_SHA || Date.now().toString(36);
const version = sha.slice(0, 8);

console.log(`[build] version: ${version}`);

["sw.js", "index.html"].forEach((file) => {
  const original = fs.readFileSync(file, "utf8");
  const updated = original.replace(/BUILD_VERSION/g, version);
  fs.writeFileSync(file, updated);
  console.log(`[build] ✓ ${file}`);
});
