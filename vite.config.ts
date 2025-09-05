// vite.config.ts (in your project's root directory)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// This is the simplified, Vercel-compatible configuration.
export default defineConfig({
  plugins: [react()],

  // This block correctly teaches Vite what the '@/' shortcut means.
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared'),
      '@assets': path.resolve(__dirname, './attached_assets'),
    },
  },
})