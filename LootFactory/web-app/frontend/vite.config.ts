import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': '/app/shared'
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
})
