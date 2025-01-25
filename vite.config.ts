import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'repository-name' with your repository name
export default defineConfig({
  base: 'Movies',
  plugins: [react()],
});