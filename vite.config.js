import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
  // This 'base' property is essential for GitHub Pages deploymen
});
