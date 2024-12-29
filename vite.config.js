import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Specify the desired port
  },
  resolve: {
    alias: {
      '@components': '/src/Component1',
      '@shared': '/src/Shared',
    },
  },
});
