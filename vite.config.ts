import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { ManifestOptions, VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import replace from "@rollup/plugin-replace";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";

const pwaOptions: Partial<VitePWAOptions> = {
  mode: "production",
  base: "/",
  includeAssets: [
    "favicon.svg",
    "favicon.ico",
    "robots.txt",
    "apple-touch-icon.png",
  ],
  manifest: {
    id: "/",
    start_url: "/index.html",
    name: "Image Classifier",
    short_name: "Image Classifier",
    icons: [
      {
        src: "/android-chrome-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: "#acd1af",
    background_color: "#acd1af",
    display: "standalone",
  },
  devOptions: {
    enabled: process.env.SW_DEV === "true",
    type: "module",
    navigateFallback: "index.html",
  },
};

const replaceOptions = { __DATE__: new Date().toISOString() };
const claims = process.env.CLAIMS === "true";
const reload = process.env.RELOAD_SW === "true";

if (process.env.SW === "true") {
  pwaOptions.srcDir = "src";
  pwaOptions.filename = claims ? "claims-sw.ts" : "prompt-sw.ts";
  pwaOptions.strategies = "injectManifest";
  (pwaOptions.manifest as Partial<ManifestOptions>).name =
    "PWA Inject Manifest";
  (pwaOptions.manifest as Partial<ManifestOptions>).short_name = "PWA Inject";
}

if (claims) pwaOptions.registerType = "autoUpdate";

// @ts-ignore
if (reload) replaceOptions.__RELOAD_SW__ = "true";

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
    VitePWA(pwaOptions),
    replace(replaceOptions),
    viteCompression({ algorithm: "brotliCompress" }),
  ],
});
