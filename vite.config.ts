import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          filename: "index.html",
          template: "index.html",
        },
      ],
    }),
    VitePWA({}),
    viteCompression({ algorithm: "brotliCompress" }),
  ],
});
