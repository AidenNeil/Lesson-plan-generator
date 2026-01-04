import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  // Use '/Lesson-plan-generator/' if deploying to username.github.io/repo-name
  // Use '/' if using a custom domain or deploying to username.github.io
  base: process.env.GITHUB_PAGES_BASE || '/Lesson-plan-generator/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
