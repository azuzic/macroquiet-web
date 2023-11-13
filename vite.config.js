import { defineConfig } from "vite";
import { VitePluginRadar } from "vite-plugin-radar";

import pluginRewriteAll from "vite-plugin-rewrite-all";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    pluginRewriteAll(),
    VitePluginRadar({
      analytics: {
        id: import.meta.env.VITE_GA_ID,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
