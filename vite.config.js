import Components from "unplugin-react-components/vite";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

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
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
});