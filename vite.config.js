import { defineConfig, loadEnv } from "vite";
import { VitePluginRadar } from "vite-plugin-radar";

import pluginRewriteAll from "vite-plugin-rewrite-all";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: env.VITE_BASE_URL,
    __GA_ID__: env.VITE_GA_ID,
    plugins: [
      vue(),
      pluginRewriteAll(),
      VitePluginRadar({
        analytics: {
          id: env.VITE_GA_ID,
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
