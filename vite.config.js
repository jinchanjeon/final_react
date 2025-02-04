import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8888,
  },
  build: {
    outDir: 'dist', // 기본값이지만 명시적으로 선언
  },
  base: '/', // Spring Boot에서 static 경로와 맞춰야 함
});
