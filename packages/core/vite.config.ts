import path from 'path'
import { builtinModules } from 'module'
import { defineConfig, mergeConfig } from 'vite'
import * as kolorist from 'kolorist'
import base from '../../vite.base.config'
import pkg from './package.json'

let config = defineConfig(({ command, mode }) => {
  console.log(kolorist.green(`config ${command} ${mode}`))
  return {}
})
config = mergeConfig(config, base)

config = mergeConfig(config, defineConfig({
  root: __dirname,
  build: {
    minify: false,
    lib: {
      entry: path.join(__dirname, './src/index.ts'),
      formats: ['cjs'],
    },
    rollupOptions: {
      external: [
        ...builtinModules,
      ],
    },
  },
}))

export default defineConfig(config)
