// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://nimmo-san.github.io/my-portfolio',
    base: '/my-portfolio/', // 
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()],
    },
});
