import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://udg-proyecto-papalote.github.io/',
  build: {
    rollupOptions: {
      external: ['@mui/system/Unstable_Grid'],
    },
  },
})
