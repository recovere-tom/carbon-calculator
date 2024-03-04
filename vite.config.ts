import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // server: {
    //     open: true,
    // },
    // test: {
    //     globals: true,
    //     environment: 'jsdom',
    //     setupFiles: 'src/setupTests',
    //     mockReset: true,
    // },
    base: '/wp-content/themes/hello-elementor/custom-apps/',
    build: {
        sourcemap: true,
    },
});
