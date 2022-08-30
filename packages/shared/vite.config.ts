import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: path.join(__dirname, './src/index.ts'),
      formats: ['cjs'],
    },
  },
})
