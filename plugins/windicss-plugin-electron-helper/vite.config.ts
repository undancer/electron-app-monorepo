import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: pkg.name,
      fileName: format => `index.${format}.js`,
    },
  },
  plugins: [dts()],
})
