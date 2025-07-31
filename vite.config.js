import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Явно отключаем native-билды Rollup
    rollupOptions: {
      external: [],
    },
  },
});
