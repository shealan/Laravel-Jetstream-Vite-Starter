import { defineConfig } from "laravel-vite";
import dynamicImportVars from "@rollup/plugin-dynamic-import-vars";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig()
    .withPlugin(vue)
    .merge({
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./resources/js"),
            },
        },
        build: {
            rollupOptions: {
                plugins: [dynamicImportVars()],
            },
        },
    });
