import { defineConfig } from 'astro/config';
import fs from 'fs';

export default defineConfig({
  vite: {
    plugins: [
      {
        name: 'copy-redirects',
        apply: 'build',
        closeBundle() {
          // This will copy _redirects file to dist/ after build
          fs.copyFileSync('public/_redirects', 'dist/_redirects');
        },
      },
    ],
  },
});
