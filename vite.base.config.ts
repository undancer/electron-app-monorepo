import { join } from 'path'
import { defineConfig, mergeConfig } from 'vite'
// import paths from 'vite-tsconfig-paths'

let config = defineConfig({})
config = mergeConfig(config, defineConfig({
  root: __dirname,
  // plugins: [paths()],
  resolve: {
    alias: {
      '@main': join(__dirname, 'packages/main/src'),
      '@preload': join(__dirname, 'packages/preload/src'),
      '@renderer': join(__dirname, 'packages/renderer/src'),
      '@common': join(__dirname, 'packages/common'),
    },
  },
}))
export default defineConfig(config)
