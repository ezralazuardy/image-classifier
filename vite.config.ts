import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import compress from "vite-plugin-compress";

export default defineConfig({
  plugins: [vue(), compress()],
});
