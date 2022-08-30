import { builtinModules } from 'module'
import { defineConfig } from 'vite'
import * as pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'vite_plugin_vue_routers',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        ...builtinModules,
        ...Object.keys(pkg.dependencies || {}),
      ],
    },
  },
})
