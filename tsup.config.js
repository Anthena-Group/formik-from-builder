import { defineConfig } from "tsup";

export default defineConfig({
  "splitting": true,
  "sourcemap": true,
  "clean": true,
  "minify": true,
  "entry": [
    "src/index.ts"
  ]
});