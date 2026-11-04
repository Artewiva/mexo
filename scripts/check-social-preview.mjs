import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

// Validate the actual deployable HTML, not just the source template.
const html = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");
const image = readFileSync(new URL("../dist/og.jpg", import.meta.url));
const source = readFileSync(new URL("../public/og.jpg", import.meta.url));
const version = createHash("sha256").update(image).digest("hex").slice(0, 12);
const imageUrl = `https://mexo-8xoh.vercel.app/og.jpg?v=${version}`;
const head = html.match(/<head>([\s\S]*?)<\/head>/i)?.[1];
assert.ok(head, "The built page must include a static head for social crawlers");

function meta(name) {
  const tags = head.match(/<meta\b[^>]*>/gi) ?? [];
  const matches = tags.filter((tag) =>
    tag.includes(`property="${name}"`) || tag.includes(`name="${name}"`),
  );
  assert.equal(matches.length, 1, `Expected exactly one ${name} tag`);
  return matches[0].match(/content="([^"]*)"/)?.[1];
}

assert.deepEqual(image, source, "The home preview must be copied into the build");
assert.equal(image.subarray(0, 3).toString("hex"), "ffd8ff", "Preview must be a JPEG");
assert.ok(image.length < 1_000_000, "Keep the preview lightweight for messaging apps");
assert.equal(meta("og:image"), imageUrl);
assert.equal(meta("og:image:secure_url"), imageUrl);
assert.equal(meta("twitter:image"), imageUrl);
assert.equal(meta("og:image:type"), "image/jpeg");
assert.equal(meta("og:image:width"), "1200");
assert.equal(meta("og:image:height"), "630");
assert.equal(meta("og:type"), "website");
assert.equal(meta("og:url"), "https://mexo-8xoh.vercel.app/");
assert.equal(meta("twitter:card"), "summary_large_image");
for (const name of ["og:title", "og:description", "og:image:alt", "twitter:title", "twitter:description", "twitter:image:alt"]) {
  assert.ok(meta(name)?.trim(), `${name} must not be empty`);
}
assert.ok(head.includes(`<link rel="image_src" href="${imageUrl}"`));
console.log("Social preview OK: static metadata and versioned home image included in the build.");
