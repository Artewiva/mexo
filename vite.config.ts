import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteSingleFile(),
    {
      name: "version-social-preview",
      // Keep the metadata in the delivered HTML: social crawlers do not run React.
      // A content-based version gives an updated home image a fresh cache key.
      transformIndexHtml(html) {
        const image = readFileSync(path.resolve(__dirname, "public/og.jpg"));
        const version = createHash("sha256").update(image).digest("hex").slice(0, 12);
        return html.replace(/\/og\.jpg"/g, `/og.jpg?v=${version}"`);
      },
    },
  ],
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
