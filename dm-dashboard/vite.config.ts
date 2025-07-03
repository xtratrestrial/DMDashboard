import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': resolve(__dirname, '../shared')
    }
  },
  server: {
    port: 5174,
    host: true
  },
  preview: {
    port: 4174,
    host: true
  }
}) 