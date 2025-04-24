import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api/skills', // your backend port
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
