import Components from "unplugin-react-components/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        Components({
            dirs: ["src/components"],
            extensions: ["jsx"],
            deep: true,
            dts: true,
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use "@/styles/variables" as *;
                    @use "@/styles/mixins" as *;
                    @use "@/styles/darkTheme" as *;
                `,
            },
        },
    },
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            "@": path.resolve(__dirname, "src"),
        },
    },
});
