import { defineConfig } from "vite";
import pluginRewriteAll from "vite-plugin-rewrite-all";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
    plugins: [vue(), pluginRewriteAll()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
