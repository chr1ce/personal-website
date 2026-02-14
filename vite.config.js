import { resolve } from 'path'
import { defineConfig } from 'vite';

const root = __dirname
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  base: '/personal-website/',
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        blog: resolve(root, 'blog', 'index.html'),
      }
    }
  }
});