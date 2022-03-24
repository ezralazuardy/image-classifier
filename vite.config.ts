import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import vue from "@vitejs/plugin-vue";
import compress from "vite-plugin-compress";

export default defineConfig({
  plugins: [
    vue(),
    compress(),
    createHtmlPlugin({
      entry: "./src/main.ts",
    }),
  ],
});
