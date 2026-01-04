import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  // Change to '/' if using a custom domain
  base: '/Lesson-plan-generator/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
