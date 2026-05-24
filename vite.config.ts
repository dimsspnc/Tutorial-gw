import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  base: '/Tutorial-gw/', // <-- TAMBAHKAN BARIS INI (Sesuaikan dengan nama repository GitHub)
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          domegallery: ['@use-gesture/react'],
        },
      },
    },
    cssCodeSplit: true,
    minify: 'esbuild',
    target: 'es2015',
  },
  css: {
    devSourcemap: false,
  },
})