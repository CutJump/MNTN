import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  css: {
    devSourcemap: true,
  },
  publicDir: "../public",
  build: {
    outDir: "../dist"
  },
});
