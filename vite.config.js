import { defineConfig } from "laravel-vite";
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
    });
